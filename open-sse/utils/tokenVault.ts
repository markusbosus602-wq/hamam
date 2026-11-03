/**
 * Reversible PII Token Vault
 *
 * Provides bidirectional pseudonymization:
 * 1. Inbound: Replaces detected sensitive PII values with unique surrogate tokens (e.g. <<PII_EMAIL_a1b2c3_1>>).
 * 2. Outbound: Speculatively buffers and detokenizes SSE chunks in real time (Zero-TTFT), and detokenizes
 *    non-streaming JSON payloads before sending them back to the client.
 *
 * Scoped to individual requests (or sessions) using per-request nonces and AsyncLocalStorage to prevent
 * cross-request token collisions or data leakage.
 *
 * Values are retained strictly in-memory with short TTL (default: 120s) and LRU eviction.
 * Zero PII is persisted to disk or upstream provider logs.
 *
 * @module lib/pii/tokenVault
 */

import { AsyncLocalStorage } from "node:async_hooks";
import crypto from "node:crypto";

/**
 * Checks whether Reversible PII Token Vault is enabled in settings or environment.
 */
export function isReversibleVaultEnabled(): boolean {
  if (typeof process !== "undefined" && process.env) {
    const val = process.env.PII_REVERSIBLE_VAULT_ENABLED;
    return val === "true" || val === "1";
  }
  return false;
}

export interface VaultItem {
  val: string;
  exp: number;
}

export interface TokenVaultOptions {
  maxEntries?: number;
  ttlMs?: number;
  nonce?: string;
}

export function generateVaultNonce(): string {
  return crypto.randomBytes(4).toString("hex").toUpperCase();
}

function resolveVaultEnvInt(key: string, fallback: number): number {
  if (typeof process === "undefined" || !process.env) return fallback;
  const raw = process.env[key];
  if (!raw) return fallback;
  const parsed = parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function unrefTimer(timer: unknown): void {
  if (timer && typeof (timer as { unref?: () => void }).unref === "function") {
    (timer as { unref: () => void }).unref();
  }
}

export class TokenVault {
  public readonly nonce: string;
  private vault: Map<string, VaultItem>;
  private valToToken: Map<string, string>;
  private seq: number;
  private maxEntries: number;
  private ttlMs: number;

  constructor(options?: TokenVaultOptions) {
    this.nonce = options?.nonce || generateVaultNonce();
    this.vault = new Map();
    this.valToToken = new Map();
    this.seq = 0;
    this.maxEntries = options?.maxEntries ?? resolveVaultEnvInt("PII_VAULT_MAX_ENTRIES", 5000);
    this.ttlMs = options?.ttlMs ?? resolveVaultEnvInt("PII_VAULT_TTL_MS", 120000);

    // Periodic sweep for expired items without holding Node.js event loop
    const timer = setInterval(() => this.sweep(), 30000);
    unrefTimer(timer);
  }

  /**
   * Generates or retrieves an existing surrogate token for a given value.
   * If value is already tokenized, extends its TTL.
   */
  public getOrCreateToken(name: string, val: string): string {
    const existingToken = this.valToToken.get(val);
    if (existingToken) {
      const item = this.vault.get(existingToken);
      if (item) {
        item.exp = Date.now() + this.ttlMs;
        return existingToken;
      }
    }

    this.seq = (this.seq + 1) % 1000000;
    const cleanName = name.replace(/[^A-Za-z0-9_]/g, "_").toUpperCase();
    const token = `<<PII_${cleanName}_${this.nonce}_${this.seq}>>`;

    if (this.vault.size >= this.maxEntries) {
      this.evictOldestEntry();
    }

    this.vault.set(token, { val, exp: Date.now() + this.ttlMs });
    this.valToToken.set(val, token);
    return token;
  }

  private evictOldestEntry(): void {
    const oldestKey = this.vault.keys().next().value;
    if (!oldestKey) return;
    const oldestVal = this.vault.get(oldestKey)?.val;
    if (oldestVal) this.valToToken.delete(oldestVal);
    this.vault.delete(oldestKey);
  }

  public get(token: string): string | undefined {
    const item = this.vault.get(token);
    if (!item) return undefined;
    if (item.exp < Date.now()) {
      this.vault.delete(token);
      this.valToToken.delete(item.val);
      return undefined;
    }
    return item.val;
  }

  public hasTokens(): boolean {
    return this.vault.size > 0;
  }

  public clear(): void {
    this.vault.clear();
    this.valToToken.clear();
    this.seq = 0;
  }

  public sweep(): void {
    const now = Date.now();
    for (const [k, v] of this.vault.entries()) {
      if (v.exp < now) {
        this.valToToken.delete(v.val);
        this.vault.delete(k);
      }
    }
  }
}

/**
 * Backward-compatible wrapper preserving singleton interface.
 */
function resolveVaultEnvInt(key: string, fallback: number): number {
  if (typeof process === "undefined" || !process.env) return fallback;
  const raw = process.env[key];
  if (!raw) return fallback;
  const parsed = parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function unrefTimer(timer: unknown): void {
  if (timer && typeof (timer as { unref?: () => void }).unref === "function") {
    (timer as { unref: () => void }).unref();
  }
}

export class TokenVaultManager extends TokenVault {
  public static getInstance(): TokenVaultManager {
    const globalObj = globalThis as unknown as {
      __omniroute_token_vault_manager__?: TokenVaultManager;
    };
    if (!globalObj.__omniroute_token_vault_manager__) {
      globalObj.__omniroute_token_vault_manager__ = new TokenVaultManager({
        nonce: "global",
      });
    }
    return globalObj.__omniroute_token_vault_manager__;
  }
}

const tokenVaultStorage = new AsyncLocalStorage<TokenVault>();

export function runWithTokenVault<T>(vault: TokenVault, fn: () => T): T {
  return tokenVaultStorage.run(vault, fn);
}

export function getActiveTokenVault(): TokenVault | undefined {
  return tokenVaultStorage.getStore();
}

export function resolveVault(explicitVault?: TokenVault): TokenVault {
  return (
    explicitVault || getActiveTokenVault() || TokenVaultManager.getInstance()
  );
}

/**
 * Escapes replacement strings so they remain valid inside JSON string fields.
 */
export function safeJsonEscape(val: string): string {
  return JSON.stringify(val).slice(1, -1);
}

/**
 * Creates a zero-TTFT speculatively buffered TransformStream for SSE detokenization.
 * Emits raw chunks immediately unless an opening "<" token marker prefix is detected.
 */
function replaceSurrogateTokens(text: string, vault: TokenVault): string {
  if (!text.includes("<<PII_") && !text.includes("<<RU_")) return text;
  return text.replace(
    /(<<(?:PII|RU)_[A-Za-z0-9_]+>>)/g,
    (match) => {
      const val = vault.get(match);
      return val ? safeJsonEscape(val) : match;
    },
  );
}

class StreamChunkProcessor {
  private dec = new TextDecoder("utf-8");
  private enc = new TextEncoder();
  private pending = "";
  private readonly maxTokenLen = 64;

  constructor(private vault: TokenVault) {}

  public processChunk(chunk: Uint8Array | string, controller: TransformStreamDefaultController<Uint8Array>): void {
    const text = typeof chunk === "string" ? chunk : this.dec.decode(chunk, { stream: true });
    this.pending += text;

    if (!this.pending.includes("<")) {
      controller.enqueue(this.enc.encode(this.pending));
      this.pending = "";
      return;
    }

    let lastLt = this.pending.lastIndexOf("<");
    if (lastLt !== -1 && this.pending.length - lastLt < this.maxTokenLen && !this.pending.slice(lastLt).includes(">>")) {
      if (lastLt > 0 && this.pending[lastLt - 1] === "<") lastLt--;
      const toEmit = this.pending.slice(0, lastLt);
      this.pending = this.pending.slice(lastLt);
      if (toEmit.length > 0) {
        controller.enqueue(this.enc.encode(replaceSurrogateTokens(toEmit, this.vault)));
      }
    } else {
      controller.enqueue(this.enc.encode(replaceSurrogateTokens(this.pending, this.vault)));
      this.pending = "";
    }
  }

  public flush(controller: TransformStreamDefaultController<Uint8Array>): void {
    if (this.pending.length > 0) {
      controller.enqueue(this.enc.encode(replaceSurrogateTokens(this.pending, this.vault)));
      this.pending = "";
    }
  }
}

export function createDetokenizingStream(
  explicitVault?: TokenVault,
): TransformStream<Uint8Array | string, Uint8Array> {
  const vault = resolveVault(explicitVault);
  const processor = new StreamChunkProcessor(vault);
  return new TransformStream({
    transform(chunk, controller) {
      processor.processChunk(chunk, controller);
    },
    flush(controller) {
      processor.flush(controller);
    },
  });
}

/**
 * Detokenizes non-streaming JSON response payloads before sending to the client.
 */
export function detokenizeResponsePayload<T>(
  obj: T,
  explicitVault?: TokenVault,
): T {
  const vault = resolveVault(explicitVault);
  if (!obj || !vault.hasTokens()) return obj;

  try {
    let str = JSON.stringify(obj);
    if (str.includes("<<PII_") || str.includes("<<RU_")) {
      str = replaceSurrogateTokens(str, vault);
      return JSON.parse(str) as T;
    }
  } catch (err) {
    console.error("[VAULT-NONSTREAM] Detokenization error:", err);
  }
  return obj;
}
