# Quality Gates Reference (中文 (繁體))

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md)

---

本文件是 OmniRoute 中所有 CI 品質閘門的權威參考資料。
其中描述每個閘門、其驗證內容、執行所在的 CI 作業、是否使用
棘輪基準或通過／失敗政策，以及其會阻擋建置還是僅提供建議。

如需簡短摘要與允許清單政策，請參閱 `AGENTS.md` 中的「Quality Gates & Ratchets」章節。
如需同一套系統的關鍵評估、成熟度分類，以及與工具無關的
複製計畫，請參閱
[品質閘門實務手冊](../ops/QUALITY_GATE_PLAYBOOK.md)。

---

## 門庫存和執行情況

### 考生錄取

CI和 Quality Gates 工作流程各自發出穩定的結論： `Gate / CI`和`Gate / Quality`。他們的版本化准入政策根據需要或建議列舉了每個上游工作。適用的所需作業必須成功：遺失、取消、跳過、待處理和未知結果無法建立PASS。有效的僅文件或僅目錄分類可能會使程式碼通道不適用； PR草案不是被接受的候選者。 `hotfix`標籤並不放棄證據。

兩個工作流程都涵蓋PRs到main/release分支、推送到`main`、手動調度和合併組事件。推送、調度和合併組運行完整選擇。推送到`release/**`不會啟動它們（2026-10-18）：每個更改都已經在其PR上運行了矩陣，並且合併的組合是 Release-Green 的工作（`docs/ops/RUNNER_BOX.md` →託管通道）。分叉和合併群組使用託管運行器來執行作業，否則會選擇自託管運行器；在推出之前必須驗證足夠的託管容量。

每張JSON收據都標識已簽出的SHA、工作流程運作和嘗試。 CLI拒絕checkout/event SHA不符。工作流程測試將策略成員資格綁定到判定作業的`needs`列表，因此新的或刪除的通道不會悄無聲息地消失。這些收據涵蓋了它們自己的工作流程，而不是發布、部署或現有諮詢掃描器的內部結構。啟動分支規則中的兩個檢查名稱是一項單獨的管理變更；添加這些工作本身並不能保護分支機構。

### 靜態掃描庫存

版本化的 npm-alias 庫存和靜態掃描成員資格位於`config/quality/gate-manifest.json`。執行`npm run check:gate-manifest`以驗證腳本名稱和針對`package.json`的確切命令；新增、刪除和命令漂移都會使本機掛鉤和CI中的變更分類作業失敗。別名不是工作流程作業、矩陣實例或測試案例：這些計數不得以可互換的形式呈現。

使用`npm run quality:scan -- --list`或`npm run quality:scan:fast -- --list`檢查選定的別名而不執行它們。運行程序呼叫 npm 入口點，因此其運行時（包括配置的Bun ）被保留。清單將這些設定檔之外的別名記錄為單獨呼叫的，並且在唯讀掃描設定檔中禁止維護命令。

這些設定檔僅涵蓋靜態掃描。他們不證明產品測試、覆蓋範圍、包裝、外部檢查或候選者的完全發布驗收。工作流程准入使用連結的`config/quality/admission-policy.json`和`scripts/quality/admission-verdict.mjs`。發布觀察者資料保持獨立；獨立檢查其適用的支票和收據。以下的散文清單僅供參考，並不是門實際運作的證據。

腳本位於`scripts/check/` （策略門）和`scripts/quality/` （棘輪引擎）下。 CI的事實來源是`.github/workflows/ci.yml`。

### 發布PR快速路徑 (`quality.yml`)

`.github/workflows/quality.yml`補充了main/release PRs上的CI ，推送到`main`、調度和合併組。 PRs使用路徑過濾的快速檢查。永久禁用的重複建置已被刪除；真正的build/package/boot檢查保留在CI中。

| 工作                                             | 範圍                                                                                                    | 阻塞           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | -------------- |
| `Docs Gates (fast-path)`                         | Docs/code PRs; API文件參考與文件全部                                                                    | 是的           |
| `Fast Quality Gates`                             | 代碼PRs；靜態檢查、類型檢查、儀表板類型檢查、受影響的單元測試                                           | 是的           |
| `Forgotten sibling tests`                        | 代碼PRs；更改的模組可追溯到靜態消費者和候選兄弟測試；桶和動態導入路徑被報告為諮詢診斷，並引用白名單例外 | **諮詢**       |
| `Vitest (fast-path)`                             | 程式碼PRs；快速維度測試套件                                                                             | 是的           |
| `Unit Tests fast-path`                           | 代碼PRs；4 分片單元套件                                                                                 | 是的           |
| `No new ESLint warnings`                         | 代碼PRs；抑制感知的棉絨防護                                                                             | 是的，包括叉子 |
| `Merge integrity (changelog + generated skills)` | 非草稿PRs；變更日誌和產生的技能同步                                                                     | 是的，包括叉子 |

#### 忘記兄弟姐妹測試報告

`npm run check:forgotten-sibling-tests`重複使用測試影響圖背後的導入解析器。對於每個變更的生產模組，當拉取請求差異中缺少候選測試時，它會報告確定性`changed module/symbol -> static consumer -> candidate sibling test`鏈。 Markdown 摘要和JSON結果將保留為`forgotten-sibling-tests`工作流程工件，以便在任何阻止推出之前進行校準。

桶再導出和動態導入僅用於分辨率診斷；他們絕不會造成阻礙性的發現。在`config/quality/forgotten-sibling-allowlist.json`中查看異常。每個條目必須命名消費者和候選測試，給出具體的理由，並連結GitHub問題或拉取請求。格式錯誤的條目無法關閉。異常無法抑制已刪除的候選測試或添加`.skip`/`.todo`的差異；斷言弱化和其他屏蔽仍然由獨立阻塞的`check:test-masking`門擁有。

### 職位： `lint`

在每個PR到`main`上運行。失敗時區塊合併。

| 腳本（`npm run ...`）             | 驗證                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 阻塞                                |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `check:node-runtime`              | Node.js版本在支援範圍內                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 是的                                |
| `check:cycles`                    | 跨所有`src/` + `open-sse/`的循環導入（基於 AST，tsconfig `paths`已解決）。只要有任何循環，Bare 就會退出 1（自 #15281 起失敗關閉）並列出SCCs。 `check:cycles:ratchet` （ CI運行的內容）在`quality-baseline.json` —目前為 14、 `direction: down`中計數超過`metrics.cycles`上限時會阻塞，因此它只能下降（#15159 G-01/G-02）                                                                                                                                                                                                                                                                                                                                                                     | 是（棘輪）                          |
| `check:boundary`                  | `open-sse → src` coupling: unique file-to-file imports from the engine into the app (`scripts/quality/measure-boundary.mjs`; the edge list is the v4 core/module-split remediation backlog). Bare = advisory report (same as `quality:boundary`). `check:boundary:ratchet` (what CI runs, also in the `quality.yml` fast-gates ratchet loop) blocks when the count exceeds the `metrics.boundaryOpenSseToSrc` ceiling in `quality-baseline.json` — seeded at the measured 771, `direction: down`; `--update` only lowers it; base-relative on PRs (`--base-ref`, see below)                                                                                                                  | 是（棘輪）                          |
| `check:route-validation:t06`      | 所有路由上都存在Zod架構（第 6 層策略）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | 是的                                |
| `check:any-budget:t11`            | `@ts-expect-error // any`數量不超過預算（Tier 11 catraca）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 是的                                |
| `check:provider-consistency`      | `providers.ts`中的每個提供者在`providerRegistry.ts`中都有一個匹配的條目（反之亦然，在允許清單中）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 是的                                |
| `check:model-lifecycle`           | 三個手動維護的路由表與簽入的生命週期快照保持一致（#11503）： `FITNESS_TABLE` （`taskFitness.ts`）沒有獲得`REGISTRY`可以路由的退休 ID；每個`BUILT_IN_ALIASES`目標都存在於`REGISTRY`中，但不存在於退休 ID 快照中； `REGISTRY`中的每個已退休 ID 都會轉送或列在`allowedRetiredInCatalog`中已停用`DEFAULT_DEGRADATION_MAP`這並不能證明模型目前由即時上游提供服務。離線—與`config/quality/model-lifecycle.json`進行比較，使用`npm run quality:refresh-model-lifecycle`手動刷新（網路；未連接到CI）。 `allowedRetiredInCatalog`是燃盡棘輪：僅添加具有追蹤問題的條目。                                                                                                                               | 是的                                |
| `check:fetch-targets`             | 客戶端`src/`中的每個`fetch("/api/...")`都會解析為真正的`route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 是的                                |
| `check:deps`                      | 儲存庫中每個`package.json`的所有`npm install` -able依賴項都在`dependency-allowlist.json`中；新的未固定或已標記的包裹                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 是的                                |
| `audit:deps`                      | `npm audit` （根+電子） —無high/critical諮詢（與 osv `check:vuln-ratchet`重疊；請參閱合理化待辦事項）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 是的                                |
| `check:lockfile`                  | `package-lock.json`完整性— https 登錄、完整性雜湊、無主機覆蓋                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 是的                                |
| `check:licenses`                  | 生產依賴項的SPDX許可證白名單                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 是的                                |
| `check:tracked-artifacts`         | 沒有建立工件/提交的`node_modules`符號連結（也在 husky 預提交中運行；預推送有意為輕— #6716）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 是的                                |
| `check:ai-attribution`            | PR提交、標題或正文中沒有AI/bot `Co-Authored-By`預告片或 AI 產生頁腳—硬規則 #16（在PR→ `release/**` —的`quality.yml`快速門循環中讀取事件負載，關閉PRs —無操作，以及PR→ `commit-msg` `main` `ci.yml`中僅有一個共同鉤子的步驟；                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `check:vitest-exclusions`         | 每個Vitest排除都會命名一個追蹤問題並出現在`config/quality/vitest-exclusions.json`中 (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 是的                                |
| `check:file-size`                 | 來源檔案（ `src/`、 `open-sse/`、 `electron/`、 `bin/`中的`.ts`/`.tsx` ）保留在`cap`中，測試檔案（`*.test.ts(x)`）保留在`testCap`中；凍結在`file-size-baseline.json` (`frozen` / `testFrozen`) 中的檔案不得超過其記錄的大小                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 是的                                |
| `check:error-helper`              | executors/handlers中的錯誤回應使用`buildErrorBody()` / `sanitizeErrorMessage()` （硬規則 #12）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 是的                                |
| `check:migration-numbering`       | 遷移SQL檔案依序編號，無間隙或重複                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 是的                                |
| `check:public-creds`              | `publicCreds.ts`之外沒有文字OAuth `client_id`/`client_secret`或 Firebase Web 金鑰（硬規則 #11）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 是的                                |
| `check:db-rules`                  | `src/lib/db/`模組之外沒有原始SQL ；沒有從`localDb.ts`進口桶（硬規則#2/#5）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 是的                                |
| `check:known-symbols`             | 在其調度表中註冊的提供者執行程式、路由策略和轉換器與磁碟上的檔案—沒有孤立或未聲明的符號                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 是的                                |
| `check:route-guard-membership`    | 每個生成子程序的路由都由`isLocalOnlyPath()`分類（硬規則#15/#17）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 是的                                |
| `check:test-discovery`            | 儲存庫中的每個`*.test.ts` / `*.spec.ts`檔案都由至少一個測試運行程式收集（棘輪： `test-discovery-baseline.json`中的孤兒清單只能縮小）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 是的                                |
| `check:test-tla-order`            | `tests/unit`下沒有`node:test`檔案註冊測試，命中頂級`await`，然後註冊更多（#18045；棘輪： `test-tla-order-allowlist.json`只能收縮）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 是的                                |
| `check:agent-skills-sync`         | 產生的代理技能工件與其來源目錄相符（無偏差）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `check:provider-asset-provenance` | 提供者logos/assets帶有記錄的出處條目                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `lint:json`                       | JSON設定檔解析並滿足 repo lint 規則                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `typecheck:core`                  | TypeScript編譯沒有錯誤（僅建議警告）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 是的                                |
| `typecheck:noimplicit:core`       | 嚴格`noImplicitAny` —前瞻性；許多預先存在的呼叫站點仍然需要註釋                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | **諮詢**(`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc`範圍為`src/app/(dashboard)/**` (#7033) — `typecheck:core`的策劃的 27 個檔案允許清單不包括任何儀表板TSX，並且`next build`也從不對其進行類型檢查（`next.config.mjs`設定`ignoreBuildErrors: true`），因此那裡的孤立標識符回歸（#6625/#6909）對CI是不可見的。與凍結的per-file/per-TS-code計數基線不同（`config/quality/dashboard-typecheck-baseline.json`，與`check:known-symbols`相同的過時執行模式） —只有超出基線計數的NEW錯誤才會通過閘；當預先存在的錯誤被修復時，透過`--update`逐步降低。                                                                                                                                                                                             | 是的                                |
| `check:build-typecheck`           | 對`tsconfig.build.json` （`src`、 `open-sse`、 `packages`、 `bin`、 `scripts`、 `electron/**/*.d.ts`）進行整個應用程式生產類型檢查，表面`typecheck:core`的 27 個檔案白名單和儀表板門不包括在內。與`config/quality/build-typecheck-baseline.json`不同；新的或增加的每個（檔案、代碼）計數失敗，較低的計數要求您進行棘輪調整。當運行包含新的或提升的對時， `--update`會拒絕，除非通過`--force-regressions` ，並且拒絕新的靜默文件，除非通過`--force-nocheck` ，因此加寬基線以變為綠色並授予永久靜默是兩個單獨的故意行為。裸露的`--force`被拒絕。也根據`config/quality/ts-nocheck-baseline.json`掃描`@ts-nocheck`的構建範圍，因為使用它的文件根本不報告任何診斷信息，否則對每個門都是不可見的。 | 是的                                |

#### 兩個類型檢查程序的答案不同

`typecheck:core`和`check:build-typecheck`在不同的選項下編譯不同的程序，同一個檔案可以在一個中是乾淨的，而在另一個中則充滿錯誤。

`tsconfig.build.json`設定`"strict": false`，因此`noImplicitAny`關閉。核心配置使用更嚴格的選項編譯一個包含 27 個檔案的允許列表，並遵循每個條目的導入圖，因此從未出現在建置程式中的檔案仍會在那裡進行檢查。

在判斷文件是否輸入時，結果很重要：** `check:build-typecheck`下的零診斷並不意味著零**。從 26 個檔案中剝離`@ts-nocheck`顯示其中 23 個檔案在建置程式中是乾淨的；其中 16 個出現了大約 120 個隱含的嚴格錯誤。在呼叫文件清理之前檢查兩者。

### 職位： `quality-gate`

在`test-coverage`之後運行。失敗時區塊合併。

| 腳本                         | 驗證                                                                                                               | 阻塞           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------- |
| `quality:collect`            | 發出`quality-metrics.json` （ESLint警告計數，合併分片報告的覆蓋範圍）                                              | 是（棘輪上游） |
| `quality:ratchet`            | `quality-baseline.json`中的每個指標都沒有回歸（ESLint警告≤基線；覆蓋≥基線）                                        | 是的           |
| `check:duplication`          | 程式碼重複 (jscpd@4) 不超過`quality-baseline.json`中的基線                                                         | 是的           |
| `check:complexity`           | 檔案級圈複雜度不超過上限（核心ESLint `complexity` + `max-lines-per-function`）                                     | 是的           |
| `check:cognitive-complexity` | 認知複雜度棘輪 (`eslint-plugin-sonarjs`) —單獨ESLint通行證； CI將兩者合併為單一`check:complexity-ratchets`步驟運行 | 是的           |
| `check:dead-code`            | 未使用的匯出/文件棘輪（刀）與基線相比不會回歸                                                                      | 是的           |
| `check:compression-budget`   | 壓縮基準預算—每引擎代幣節省下限不得回歸                                                                            | 是的           |
| `check:type-coverage`        | 百分比型棘輪 (`type-coverage`) 不會回歸；很大程度包含`typecheck:noimplicit:core`                                   | 是的           |
| `check:codeql-ratchet`       | 打開CodeQL警報計數不會回歸（透過`gh api`讀取；無需令牌即可優雅跳過） —刷新節奏和手動觸發：請參閱下面的“CodeQL棘輪” | 是的           |

### 職位： `quality-extended`

整個工作都是諮詢性的（`continue-on-error: true`）。基於 npm 的棘輪真正運作；當二進位檔案仍然不存在時，外部掃描器會透過`gh release download`進行安裝並自動跳過（退出 0）。

| 腳本                     | 驗證                                                                                                                                                    | 阻塞                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `check:circular-deps`    | 無迴圈依賴 (dpdm)                                                                                                                                       | **諮詢**                        |
| `check:bundle-size`      | 捆綁尺寸不超過上限                                                                                                                                      | **諮詢**                        |
| `check:secrets`          | 如果二進位檔案不存在，秘密掃描 (gitleaks) —會跳過                                                                                                       | **諮詢**                        |
| `check:vuln-ratchet`     | 如果二進位檔案不存在，依賴項漏洞（osv-scanner）不會回歸—跳過                                                                                            | **諮詢**                        |
| `check:workflows`        | 工作流程 lint (actionlint + zizmor)； missing/broken掃描器、無效報告或缺少棘輪基線會失敗，如INCOMPLETE。有效的結果遵循選定的strict/advisory/ratchet政策 | 需要執行; zizmor 棘輪在CI中阻塞 |
| `check:openapi-breaking` | 公共API合約 (`openapi.yaml`) 與基礎分支 (oasdiff) 的重大更改—發出`openapiBreaking=N`；如果 oasdiff 不存在或基本規範無法解析，則跳過                     | **諮詢**                        |

### 職位： `docs-sync-strict`

在每個PR到`main`上運行。失敗時區塊合併。

| 腳本                           | 驗證                                                                                                             | 阻塞                        |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `check:docs-all`               | 依序運行下面 6 個子門的元門                                                                                      | 是的                        |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt版本一致性                                                                          | 是的                        |
| ↳ `check:docs-counts`          | 散文中的計數（提供者計數、遷移計數等）位於實際計數的棘輪窗口內                                                   | 是的                        |
| ↳ `check:env-doc-sync`         | `.env.example`中的每個環境變數都會記錄在文件表中，反之亦然                                                       | 是的                        |
| ↳ `check:deprecated-versions`  | 文件中沒有已棄用的版本字串                                                                                       | 是的                        |
| ↳ `check:doc-links`            | 文件中的內部降價連結解析為真實文件（`[text]`/`(path)`形式）                                                      | 是的                        |
| ↳ `check:fabricated-docs`      | 文件中引用的路由、環境變數、 CLI命令、掛鉤名稱和檔案路徑存在於程式碼庫中。通過`--strict`硬門；沒有標誌的軟故障。 | 是（透過CI中的`--strict` ） |
| `check:cli-i18n`               | CLI指令字串存在於所有 i18n 語言環境檔案中                                                                        | 是的                        |
| `check:openapi-coverage`       | OpenAPI規範至少涵蓋真實路線的棘輪地板                                                                            | 是的                        |
| `check:openapi-security-tiers` | `openapi.yaml`中的安全層註釋與`routeGuard.ts`分類一致                                                            | **諮詢**                    |
| `check:openapi-routes`         | `openapi.yaml`中的每條路徑都會解析為真正的`route.ts` （反幻覺）                                                  | 是的                        |
| `check:docs-symbols`           | `docs/**/*.md`中的每個`/api/...`引用都會解析為真正的`route.ts` （反幻覺）                                        | 是的                        |
| `i18n translation drift`       | i18n 語言環境檔案中未翻譯的鍵—僅發出警告                                                                         | **諮詢**                    |

`docs/diagrams/`下的 12 個README SVGs已產生（`scripts/docs/gen-readme-<name>.mjs`； `npm run docs:readme-diagrams`重新產生所有這些）。每個都有一個位元組比較單元測試（`tests/unit/docs/readme-*-svg.test.ts`、 job `test-unit`），當提交的文件過時時會失敗，並且`check:docs-counts`從其`<text>`節點—讀取規範數字，這就是大綱步驟將文件中的每個大綱字串保持為不可見的`<text>`的原因。 SVG規範數字檢查讀取`SVG_DIAGRAM_FILES` (`scripts/check/check-docs-counts-sync.mjs`) 中列出的檔案： `docs/diagrams/readme-hero.svg`、 `free-tier-budget.svg`、 `promise-pillars.svg`、 `comparison-table.svg`、 `cli-terminal.svg`、 `tier-cascade.svg`，以及`public/images/tier-flow-dark.svg`和`tier-flow-light.svg`；永久免費、目錄條目、循環池和評分因素聲明也為`promise-pillars.svg`、 `free-tier-budget.svg`和`strategies-grid.svg`。 `free-tier-budget.svg`從即時目錄載入器中提取數據，因此對`FREE_MODEL_BUDGETS`或提供者顯示名稱的變更會導致CI變紅，直到重新產生該檔案。

### 職位： `i18n-ui-coverage`

| 腳本                              | 驗證                                                                                                                                | 阻塞     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `check-ui-keys-coverage` （內聯） | UI i18n 金鑰覆蓋率為≥ 65%                                                                                                           | 是的     |
| `check-ui-value-drift` （內聯）   | 重寫的英語**價值**不留下過時的翻譯                                                                                                  | 是的     |
| `check-new-key-coverage` （內聯） | 一個**新的**英文密鑰在每個語言環境中都被翻譯— `__MISSING__:`標記被拒絕                                                              | 是的     |
| `check-translation-ratio`         | 每個語言環境的實際翻譯比例（與英語相同/佔位符/允許列表之外的缺失部分）不超過`config/quality/i18n-translation-baseline.json` + slack | **諮詢** |

需要`fetch-depth: 0` —值漂移閘門將`en.json`與合併基礎進行比較。

#### `check-ui-value-drift` —陳舊翻譯門

捕獲其他門在結構上看不到的國際化回歸：英語值被重寫，並且從_先前_英語派生的翻譯保留下來，因此非英語用戶繼續閱讀措辭自信、現在錯誤的副本。

這是真的出貨了。 Antigravity登入助理登陸時重寫了`oauthModal.googleOAuthWarning` （#5203）；** 43 語言環境中的 39 個**保留文字告訴操作員「複製完整的URL並將其貼到下面」 —該提供者無法完成的流程。它直到 #8463 才被注意到，因為：

- `sync-ui-keys`僅回填以下鍵**缺席的**，從來沒有那些**陳舊**;
- `check-ui-keys-coverage`計算密鑰_存在_，因此過時的翻譯分數被覆蓋；
- `check-translation-drift`追蹤`docs/i18n/<locale>/**.md`文件鏡像—它從不讀取`src/i18n/messages/*.json`。自 2026-09 重新同步以來，作業`docs-sync-strict`被阻塞：編輯核心文件→ `npm run i18n:run -- --files=<doc>` （部分級別，便宜）。

**差異感知，不支持基線。**它將合併基礎上的`en.json`與工作樹進行比較；對於每個英文值變化的鍵，任何仍保留未更改翻譯的語言環境都是陳舊的。這是故意的**凍結先前存在的債務**— a diff 無法揭示長期翻譯來自哪個古英語，因此門僅判斷當前變更涉及的內容。另一種方法（每個鍵的哈希基線）將花費~ 600 KB產生的文件，3 ×最大的現有基線，在每個 i18n PR上攪拌。

滿足它的方法有兩種：

1. 更新受影響的翻譯，或
2. 將它們設定為`__MISSING__:<new english>` —運行時然後提供正確的英語（`src/i18n/request.ts::deepMergeFallback`，#7258）和翻譯的關鍵隊列。

如果字串的**意義**改變了，更喜歡**重新命名密鑰**：新密鑰無法繼承過時的翻譯。這就是使用的模式#8463。

```bash
npm run i18n:check-value-drift          # strict (what CI runs)
npm run i18n:check-value-drift:warn     # report only
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

當無法讀取基本目錄時使用`SKIP reason=base-unresolved`退出 0（沒有基本引用的淺克隆），鏡像`check-openapi-breaking`。

### 職位： `i18n`

完整的 i18n 驗證矩陣（每個區域一項作業）。整個工作都是諮詢性的。

| 腳本                            | 驗證                     | 阻塞                                          |
| ------------------------------- | ------------------------ | --------------------------------------------- |
| `validate_translation.py quick` | 每個語言環境的翻譯完整性 | **諮詢**（`continue-on-error: true`整個工作） |

### 職位： `pr-test-policy`

僅在拉取請求上運行。

| 腳本                   | 驗證                                                                                           | 阻塞 |
| ---------------------- | ---------------------------------------------------------------------------------------------- | ---- |
| `check:pr-test-policy` | 更改`src/`、 `open-sse/`、 `electron/`或`bin/`中的生產代碼的PRs必須包含或更新測試（硬規則 #8） | 是的 |
| `check:test-masking`   | 更改的測試文件不會減少淨斷言計數或添加`assert.ok(true)`同義反复                                | 是的 |
| `check:pr-evidence`    | PR主體引用了test/VPS變更證據（透過 greping PR散文—脆弱性機械化硬規則 #18，請參閱 Backlog）     | 是的 |

### 職位： `test-vitest`

在`build`之後運行。失敗時區塊合併。

| 套房             | 驗證                                                     | 阻塞                                                                        |
| ---------------- | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| `test:vitest`    | MCP伺服器（110 個工具）、 autoCombo、快取— vitest runner | 是的                                                                        |
| `test:vitest:ui` | UI元件測試— vitest runner                                | **阻塞**—預先存在的故障在`vitest.config.ts`中被明確排除；新的失敗使工作失敗 |

### 每晚工作流程（計畫的、建議的）

它們按照 cron 計劃（和`workflow_dispatch`）運行，而不是在PRs上運行。一切都是諮詢性的。

| 工作流程               | 驗證                                                                                                                                                | 阻塞     |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `nightly-property`     | 使用隨機種子+高運行次數進行快速檢查屬性測試                                                                                                         | **諮詢** |
| `nightly-resilience`   | 堆增長門、混沌故障注入、k6 load/soak                                                                                                                | **諮詢** |
| `nightly-llm-security` | Promptfoo 注入防護（區塊模式） + garak 探針（在沒有提供者機密的情況下跳過）                                                                         | **諮詢** |
| `nightly-schemathesis` | OpenAPI contract fuzzing (schemathesis) against a live OmniRoute using `docs/openapi.yaml` — surfaces spec violations / unhandled 500s (Fase 8 B.4) | **諮詢** |
| `nightly-mutation`     | Stryker 突變測試分數超過快速單位通道—倖存突變體表面弱斷言                                                                                           | **諮詢** |
| `nightly-compat`       | 支援的`engines.node`範圍內的節點引擎相容性矩陣                                                                                                      | **諮詢** |

性能基線（堆、 TTFB、建造時間）被記錄，而不是門控：請參閱[`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`)。

---

## 速度階段（2026-08-30 → v4.0 LTS）：所有基準放寬 20%

負責人決定（2026-08-30）：在 v4.0 模組化完成之前，交付速度比守住技術債界線更重要。所有**數值型**棘輪基準均在一次可稽核的作業中放寬 20%，且此階段已在 `config/quality/quality-baseline.json` 中宣告：

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| 變更內容                                                                                                                                               | 位置                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — 越低越好的計數 ×1.2，越高越好的百分比 ÷1.2（涵蓋率下限維持 60、`eslintErrors` 維持 0、`eslintWarnings` 由 0 → 凍結抑制數量的 20%） | `quality-baseline.json`（`_relax_velocity_2026_08_30` 註記列出每一項變更前 → 變更後）                  |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                       | `complexity-baseline.json`、`duplication-baseline.json`                                                |
| `cap`、`testCap`，以及每個 `frozen[*]` / `testFrozen[*]` 行數上限 ×1.2                                                                                 | `file-size-baseline.json`                                                                              |
| 每個檔案／每個 TS 程式碼的計數 ×1.2                                                                                                                    | `api-typecheck-baseline.json`、`dashboard-typecheck-baseline.json`、`open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                    | `scripts/check/check-openapi-coverage.mjs`                                                             |
| 當 `_policy.requireTighten === false` 時，`--require-tighten` 改為僅提供建議                                                                           | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| 暫停每晚執行的 `bank-ratchet-shrinks`（它會記存實測縮減量，抵銷預留空間）                                                                              | `.github/workflows/nightly-release-green.yml`                                                          |

允許清單（`eslint-suppressions.json`、`test-masking-allowlist.json`、`test-discovery-baseline.json`，
……）**不是**預算，因此未進行修改。通過／失敗政策閘門（機密資訊、SQL 規則、
文件／環境合約、i18n 一致性、單元測試）維持不變——紅燈測試依然是紅燈測試。

**工具**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — 一次性
  放寬作業（`scripts/quality/relax-baselines.mjs`）；若使用相同註記重複執行，將拒絕執行。
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  以與 CI 相同的方式測量每個數值型閘門，並列印各閘門的剩餘空間
  （`scripts/quality/baseline-headroom.mjs`）。每晚執行的 `baseline-headroom` 工作會在
  工作流程執行摘要中發布表格，並將其 JSON/Markdown 報告以
  `baseline-headroom-<run_id>` 名稱上傳，保留 90 天。警告與嚴重狀態列會指出距離上限
  不到 10% 或已超過上限的閘門。請檢閱這些報告，將其作為預算逐漸被消耗的早期警示；
  並檢查違規閘門的 `_rebaseline_*` 註記。此工作不再建立或更新永久議題；
  #12149 保留了先前的報告歷史。

**新程式碼模式（Clean-as-You-Code）— 自 2026-08-30 起，僅適用於 PR 快速路徑**

在 `pull_request` 事件中，`quality.yml` 會將 `--base-ref <PR base SHA>` 傳遞給
`check:file-size`、`check:complexity-ratchets` 及 `check:dead-code`。對於
`check:complexity-ratchets` 與 `check:dead-code`，閘門會比較 HEAD 與合併基準，
但**僅限於 PR 所修改的檔案**（`scripts/check/newCodeMode.mjs`：合併基準會具體化至
一次性的 `git worktree` 中，ESLint/knip 會分別在該處與 HEAD 上執行，再對每個檔案的計數取差異）：

- **阻擋性** — PR 在其修改的檔案中新增了循環／認知複雜度違規或無效匯出
  （記錄中的 `complexityNewCode=`、`cognitiveComplexityNewCode=`、`deadExportsNewCode=`）；
- **建議性** — 全域總數與凍結基準的比較。繼承而來的偏移永遠不會讓無辜的 PR 變紅；
  該偏移會在發行協調時重新凍結，並由預留空間工作監控。

`check:file-size` 依照自身規則使用基準參照（`scripts/check/check-file-size.mjs`，#8522）：
它會檢查樹狀結構中的每個原始碼與測試檔案，使用 `git show` 讀取各檔案在 PR 基準上的行數，
並且只有當檔案增長超過以下兩者中的較大值時才判定失敗：其基準上限
（`frozen` / `testFrozen`；若檔案不在基準中，則為 `cap` / `testCap`）與其基準大小。
因此，已在基準分支上發生偏移的檔案，永遠不會讓無辜的 PR 變紅。

`check:boundary:ratchet` 會將相同規則套用至其單一數值
（`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`）：在 PR 事件中，
`quality.yml` 快速閘門與 `ci.yml` lint 工作都會傳入 PR 的基準 SHA，基準提交會從
`git archive` 匯出內容中進行測量，而只有在 PR 的 `open-sse → src` 邊界數量超過
`metrics.boundaryOpenSseToSrc` 與基準分支計數兩者中的較大值時，PR 才會失敗。超過上限
的基準漂移會被回報（`base drift herdado`），但絕不會讓無辜的 PR 變紅；push → main
會繼續採用絕對上限，而無法解析的基準 SHA 則會在發出警告後回退至該上限。

`workflow_dispatch` 執行、release-green 全面掃描與每夜 headroom 工作都沒有 PR 基準，
因此會繼續採用絕對（全域）比較。目前，覆蓋率、重複程式碼與類型覆蓋率仍維持全域
比較（其工具無法以低成本產生逐檔差異）——它們是未來採用相同處理方式的候選項目。

**在 v4.0 結束此階段（LTS = 比以前更嚴格，而非「恢復正常」）**

1. 在純淨的 `release/v4.0.0` 頂端：執行 `npm run quality:headroom --json` 以留存記錄，接著執行
   `npm run quality:ratchet -- --update`、`check:file-size --update`、
   `check:complexity-ratchets --update`、`check:dead-code --update`，以及每個 typecheck 閘門的
   `--update`——每個基準值都會降至測量值。
2. 從 `quality-baseline.json` 刪除 `_policy`（重新啟用 `--require-tighten` 與每夜
   累積機制），並在 `check-openapi-coverage.mjs` 中還原 `THRESHOLD = 36`（或更高）。
3. 在模組化已產生效益之處，進一步收緊至低於測量值：將檔案大小的 `cap` 恢復為 1000
   （或 800）、覆蓋率下限提高 5、已模組化套件的無用匯出數設為 0。

## 棘輪基準線 (`quality-baseline.json`)

棘輪引擎 (`scripts/quality/check-quality-ratchet.mjs`) 會讀取 `quality-baseline.json`
並將其與最新收集的 `quality-metrics.json` 比較。任何退步幅度超過其 epsilon 的指標
都會導致建置失敗。

目前追蹤的指標：

| 指標                  | 方向   | 含義                    |
| --------------------- | ------ | ----------------------- |
| `eslintWarnings`      | `down` | ESLint 警告數量不得增加 |
| `coverage.statements` | `up`   | 陳述式覆蓋率不得下降    |
| `coverage.lines`      | `up`   | 行覆蓋率不得下降        |
| `coverage.functions`  | `up`   | 函式覆蓋率不得下降      |
| `coverage.branches`   | `up`   | 分支覆蓋率不得下降      |

在指標確實改善後更新基準線：

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` 旗標會將目前測得的值寫入 `quality-baseline.json`。
請將此檔案與改善該指標的變更一併提交。如果 PR 改善了
指標卻未更新基準線，`--require-tighten` 將會偵測到此情況（階段 6A.5，
尚待實作）。

### CodeQL 棘輪：重新整理頻率與手動觸發

`check:codeql-ratchet` 讀取的是**依排程重新整理的儲存庫狀態，而非每個 PR 的狀態。**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` 會回報
`state: configured`、`schedule: weekly`：這是 GitHub 的預設設定掃描，而非每次推送時
執行的分析。其後果是：當修正警示的 PR 合併後，棘輪仍會繼續讀取
舊的較高數量，直到下一次排程掃描執行為止——因此，在掃描結果更新之前，
每個開啟中的 PR 都會被回報為退步，包括修正該問題之 PR 自身的後續變更。

**手動重新整理**：`gh workflow run codeql.yml --ref release/vX.Y.Z` 會重新執行
分析，並在幾分鐘內重新發布警示。請先閱讀 `.github/workflows/codeql.yml`
——其標頭說明它僅支援 `workflow_dispatch`，**因為它會與
GitHub 的「預設設定」衝突**（`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`）。若要還原 `push`/`pull_request`/
`schedule` 觸發條件，**擁有者必須先執行一項操作**：Settings → Code security →
CodeQL: Default → Advanced。在完成該切換之前，請勿新增 `schedule:` 觸發條件——它
只會產生失敗的執行結果。

**在數量下降後收緊基準線**——`node scripts/check/check-codeql-ratchet.mjs
--update` 會將新測得的數量寫入 `quality-baseline.json` →
`metrics.codeqlAlerts.value`，如此一來，棘輪便不會悄悄允許數量回升至
舊的上限。實際範例（2026-09-02/03）：PR #12502 修正了 7 個真實警示
（測得的開啟中警示由 13 降至 6）；PR #12530 將凍結的基準線從 11 收緊至 6，使其相符；
接著，剩餘的 6 個警示均附上個別理由予以駁回，使開啟中的警示數降至 0。

**是否駁回由操作者決定（硬性規則 #14）**——絕不可在未於駁回註解中
記錄技術理由的情況下駁回 CodeQL 警示：若是上游通訊協定要求，使用 `won't fix`；
若是測試固定資料，使用 `used in tests`；若是 CodeQL 無法辨識的清理程式，
使用 `false positive`（先例：`docs/security/ERROR_SANITIZATION.md`）。

---

## 測試重試政策（WS5.4, v3.8.49）

重試是針對各個 runner 設定，絕不能全域套用——全面重試會將真正的迴歸
轉變成無法察覺的不穩定現象：

| Runner                | 政策                                                                                       | 原因                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Playwright (e2e)      | 僅在 CI 中設定 `retries: 1`，並搭配 `trace: on-first-retry`                                | 瀏覽器／網路時序確實具有非決定性；一次附帶 trace 的重試能將不穩定現象轉化為可診斷的產物 |
| Vitest                | 不設全域重試。經證實不穩定的測試會明確設定個別測試重試（可在 diff 中看見，並於 PR 中審查） | 將隔離清單保留在 repo 中，絕不使其不透明                                                |
| node:test（單元測試） | 絕不重試                                                                                   | 不穩定的單元測試就是測試本身的錯誤——修正它，不要靠重新執行碰運氣                        |

不穩定性遙測上線後的目標 SLO（WS5.2/5.3）：每項測試的不穩定率 <1%
（「立即修正」門檻），每條 pipeline 的通過率 ≥95%。這些是業界參考值——
請依據我們自己的測量結果重新校準。

## 發布層級的棘輪漂移（WS5.5, v3.8.49）

當棘輪（檔案大小、複雜度、eslint 警告）在純粹的發布
tip 上發生迴歸——亦即多次合併的組合導致迴歸，但沒有任何單一 PR 能在其自身分支上重現
該迴歸——則應由**發布負責人一次性地在發布分支上**修正：優先採用抽取／重構；只有在附有已記錄的
理由條目時才能重新建立基準。絕不可將組合漂移推給貢獻者的 PR，也絕不可
針對每個 PR 重新建立基準（那會掩蓋真正的迴歸）。請先加以判別：在認定是你的 PR 導致問題之前，
先於探測用 worktree 中，針對純粹的 tip 重現紅燈狀態。

## 將棘輪縮減存入基準——向下調整方向（#8584）

棘輪只有一半是自動化的，而且還是錯的那一半。**提高**上限只需手動編輯
JSON，十秒即可完成，也是解除紅燈 PR 阻塞最快的方法。
**降低**上限則需要有人執行 `--update` 並提交結果——而在
`bank-ratchet-shrinks` job 上線之前，沒有任何 workflow 會執行這項操作。實測結果
（2026-07-25）：有 18 個凍結檔案已經等於或低於新檔案的 800 行上限，其中最嚴重的
差距達 132 倍（`src/shared/validation/schemas.ts`，僅 19 行卻保留 2,523 的上限）；
複雜度上限在約 37 則重新建立基準的註記中從 `1794 → 2169`，且恰好只有一次
下降（−1）；而「下一個週期透過 `--update` 收緊」這句話寫了 31 次，卻只落實
一次。若上限比當初使其合理的程式碼存續得更久，就會悄無聲息地將每次已完成的
拆分成果，轉化為下一位編輯該檔案者可使用的成長額度。

`nightly-release-green.yml` → job **`bank-ratchet-shrinks`** 補上了這個循環：

|          |                                                                                              |
| -------- | -------------------------------------------------------------------------------------------- |
| 執行時機 | `schedule`（每日 3 次）+ `workflow_dispatch`——刻意**不**使用 `push`                          |
| 測量對象 | 最高版本的 `release/vX.Y.Z`，使用與 `release-green` 相同的解析方式與注入防護                 |
| 寫入內容 | `check:file-size --update` 與 `check:complexity-ratchets --update`（兩者的設計都只允許縮減） |
| 驗證方式 | `npm run check:ratchet-bank`（`scripts/quality/verify-ratchet-bank.mjs`）                    |
| 交付方式 | 一個永遠保持最新、以發布分支為目標的 PR——強制更新，絕不重複洗版                              |

基準存入採批次進行，而不是每次 push 都執行，因為它沒有延遲要求（在 8 小時內
存入縮減結果即可）；若每次合併都執行，則會在合併作業期間反覆重建 PR 分支，
並且每次都要支付完整 ESLint 掃描的成本。偵測仍在 push 時進行
（`release-green`）；只有基準存入採批次處理。

### 安全驗證器

該 job 會在無人監督的情況下寫入基準，因此 `verify-ratchet-bank.mjs` 是讓這項操作
可接受的關鍵。它會比較執行 `--update` 後的 tree 與 `HEAD`，並且在產生任何 commit
之前**中止該 job**——不開啟任何 PR——除非每項變更都屬於以下其中之一：

- `frozen` / `testFrozen` 數值條目被**降低**或**移除**
- `complexity-baseline.json` → `count` **降低**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **降低**

其他任何情況都會失敗：提高數值、新增條目、變更 `cap`/`testCap`，或
刪除／改寫 `_rebaseline_*` 註記（這些註記是記錄每個上限存在原因的稽核軌跡，
並與檔案條目一起儲存在同一個 `frozen` 物件中）。
能夠提高上限的 bot，會比現狀更加糟糕。迴歸防護：
`tests/unit/verify-ratchet-bank.test.ts`。

該 job 絕不會 push 至 `release/*`——PR 必須由人員合併，因此錯誤的測量結果
無法在未經審查的情況下進入分支。

## 允許清單政策

所有不能因既有違規而失敗的關卡都會使用凍結的允許清單
（例如 `KNOWN_STALE_DOC_REFS`、`KNOWN_MISSING`、`KNOWN_RAW_SQL`）。政策如下：

**修正根本原因；只有在違規原本就已存在，且無法在同一個 PR 中修正時，才使用允許清單。**

將項目新增至允許清單時：

1. 加入註解以說明理由。
2. 引用追蹤議題（例如 `// #3498 — 第 2 階段功能，尚未實作`）。
3. 在修正該違規的同一個 PR 中移除該項目——若過時項目已不再抑制有效違規，該項目本身即為缺陷（實作 6A.3 過時強制檢查後，孤立的允許清單項目將導致關卡失敗）。

**請勿**為了讓測試更快通過而新增允許清單項目。允許清單持續增長下的綠燈關卡，只會帶來虛假的品質安全感。

### 當您的 PR 未通過關卡時

1. **仔細閱讀關卡輸出**——它會明確告訴您哪個檔案或符號違反了規則。
2. **修正違規**——大多數關卡都是確定性的檔案系統檢查，只要程式碼正確就會通過。
3. **如果違規原本就已存在**（亦即並非由您引入，但關卡現在開始涵蓋它）：新增允許清單項目，並附上理由註解與追蹤議題。
4. **如果該關卡是棘輪式關卡**（覆蓋率、ESLint 警告、重複、複雜度）：您的變更使指標惡化。請修正根本問題；若變更是刻意為之且指標退化可以接受，則可在極少數情況下執行 `npm run quality:ratchet -- --update`——但必須在 PR 說明中記錄原因。
5. **建議性關卡**（`continue-on-error: true`）僅供參考——它們不會阻止合併，但會顯示在 CI 摘要中。儘管如此，仍應加以修正。

---

## 新增關卡

1. 建立 `scripts/check/check-<name>.mjs`（或 `.ts`）。政策關卡以 0/1 結束。
   棘輪式關卡透過 `collect-metrics.mjs` 將指標輸出至 `quality-metrics.json`。
2. 將 `"check:<name>": "node scripts/check/check-<name>.mjs"` 新增至 `package.json`。
3. 在 `.github/workflows/ci.yml` 中將其接入適當的工作
   （政策 → `lint` 或 `docs-sync-strict`；棘輪 → `quality-gate`）。
4. 如果它有允許清單，請套用來自
   `scripts/check/lib/allowlist.mjs` 的 `reportStaleEntries()`，以便自動偵測過時項目。
5. 在 `tests/unit/build/` 中撰寫測試，以涵蓋該關卡的偵測邏輯。
6. 更新本文件（在相關工作表格中新增一列）。

---

## 代理工具：迴圈內 LSP（選用）

除了 CI 關卡之外，OmniRoute 還提供**選用的** `agent-lsp` 鷹架
（專案層級的 `.mcp.json`，Fase 7 Task 15）。建立 `.mcp.json`
以向程式設計代理公開 TypeScript 語言伺服器，使其在撰寫程式碼**之前**解析符號／
診斷資訊——這是 `typecheck:core` 的「先編譯再宣稱」配套機制，可從源頭減少「虛構符號」錯誤。它刻意設計成
不會自動載入（由您選擇並驗證 MCP↔LSP 橋接）；損壞的項目只會記錄
連線錯誤，絕不會中斷工作階段。

---

## 合理化待辦清單（ROI 審查 — 階段 9 波次 3）

此清單已於 2026-06-17 依據 `ci.yml` 進行核對（先前版本遺漏了
`audit:deps`、`check:tracked-artifacts`、`check:lockfile`、`check:licenses`、
`check:dead-code`、`check:cognitive-complexity`、`check:type-coverage`、
`check:codeql-ratchet`、`check:pr-evidence`）。對核對後集合進行 ROI 審查，
找出了以下合理化候選項目。**合併屬於機械式 CI 變更；切換／移除則是保留給操作人員的政策決策。**
以下內容尚未套用。

**上方亦未記錄的項目**（建議性、訊號偏弱）：`docs-lint` 工作
（markdownlint + Vale，整個工作設定為 `continue-on-error`），以及獨立的掃描器工作流程
`semgrep.yml` / `codeql.yml` / `scorecard.yml`。`semgrepFindings: 0` 位於
`quality-baseline.json` 中，但並未連接到 `ci.yml` 內具阻擋效果的棘輪機制——此指標
目前處於孤立狀態。

### 合併／去重（機械式、風險較低）

每個候選項目都已於 2026-06-17 對照實際閘門狀態進行驗證（信任但要查證）；
數個「顯而易見」的合併其實隱藏了技術債，**並非**可直接替換的乾淨方案。

- **`check:docs-sync` 執行兩次**——在 `lint` 工作中獨立執行一次，並於 `check:docs-all`（`docs-sync-strict`）和 husky pre-commit hook 中再次執行。✅ **已完成**——已移除 `lint` 中的獨立呼叫。
- **CVE 掃描**——❌ **不是乾淨的合併。** `audit:deps` 遇到任何高／嚴重 CVE 時都會直接失敗；`check:vuln-ratchet`（osv）僅在相較基準發生_退步_時失敗（目前為 1 個 MODERATE）。兩者語意不同——移除 `audit:deps` 將失去絕對的高／嚴重風險閘門。兩者皆保留。
- **循環偵測**——✅ **已完成**（#15159 G-01/G-02）。此處舊文字將 `check:cycles` 稱為「綠燈、經過篩選的」閘門，並因 `check:circular-deps`（dpdm）回報 91 個循環，而主張其應繼續作為阻擋閘門。該綠燈其實是**假綠燈**：`check:cycles` 僅掃描 5 個子目錄（450 個檔案）、只比對靜態的 `import|export … from`，並捨棄所有 `@/` 和 `@omniroute/open-sse/` 說明符，因此無法看見存放庫中占主導地位的動態匯入 + 別名循環。現已修正：閘門目前會遍歷 `src` + `open-sse`（5023 個檔案），從 TypeScript AST 收集說明符（因此 `import("…")` 會計入，而類型位置的 `typeof import("…")` 不會），並解析 tsconfig `paths`。它找出了 **14** 個循環，而非 0。由於無法在閘門 PR 中修正 14 個既有循環，`check:cycles` 現已改為**棘輪機制**（`--ratchet`，`quality-baseline.json` 中的上限為 `metrics.cycles.value = 14`，`direction: down`）——它會阻擋任何_退步_，且數量只能下降。CI 執行 `npm run check:cycles:ratchet`。逐步消減工作併入 **A-01**。`check:circular-deps`（dpdm）保留為涵蓋範圍更廣的建議性第二意見。
- **複雜度**——✅ **已完成**（`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`）：只進行一次 ESLint 遍歷，依 ruleId 計數，使循環複雜度 + 最大行數與認知複雜度的基準維持獨立；個別的 `check:complexity` / `check:cognitive-complexity` 則保留供本機使用 `--update`。
- **`/api` 反幻覺**——✅ **已完成**（`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`）：只對 `src/app/api` 進行一次 FS 清查，openapi-routes + docs-symbols 仍會各自獨立回報；個別檢查保留供本機執行。
- **`check:node-runtime` 會在 11 個工作中執行**——⚠️ **ROI 偏低。** 每個工作皆使用獨立 runner，而此檢查耗時不到 1 秒；總共僅節省約 10 秒，代價卻是失去成本低廉的逐工作防護。不值得為此進行改動。
- **CI lint 上的 `typecheck:noimplicit:core`**——✅ **已從 lint 工作中移除**（原本是建議性的 `continue-on-error`）；具阻擋效果的類型檢查面為 `typecheck:core` + `check:type-coverage`。本機腳本則予以保留。

### 切換／決策（操作人員政策）

- `check:openapi-security-tiers`（建議性）——❌ **無法直接切換。** 它會以 0 結束，但會警告 `LOCAL_ONLY_API_PREFIXES` 下有數個 `traffic-inspector` 路由缺少 `x-loopback-only: true` 註解。若要強制執行，必須先將這些註解新增至 `openapi.yaml`。
- `typecheck:noimplicit:core`（建議性）——大致已由具阻擋效果的 `check:type-coverage` 棘輪機制涵蓋。可將其切換為棘輪機制，或移除重複的第二次 `tsc` 執行。
- `test:vitest:ui`（目前**具阻擋效果**）——既有失敗已在 `vitest.config.ts` 中透過 `// #8618` 追蹤註解明確排除；新的失敗會使工作失敗。
- `check:secrets`（gitleaks，具阻擋效果的棘輪機制，凍結於 3 個已記錄的誤報）——將這 3 個項目加入允許清單以降至 0，或降級為建議性。與 GitHub 原生秘密掃描 + `check:public-creds` 有重疊。
- `check:pr-evidence`（具阻擋效果，對 PR 內文執行 grep）——誤報風險高；若移除，將削弱硬性規則 #18 的執行力，因此這是真正的政策決策。
- `semgrep`（建議性的獨立工作）——在 OWASP 類別上與 CodeQL 重疊；將其基準連接至棘輪機制，或予以移除。

---

## 相關文件

- 供應鏈（來源證明、SBOM、Trivy、Scorecard）：[`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — 鍵集合一致性閘門

`scripts/i18n/check-key-completeness.mjs`（`npm run i18n:check-keys`，作業 `i18n-ui-coverage`）。
將每個 `src/i18n/messages/<locale>.json` 的葉節點鍵集合與 `en.json` 比較，無論鍵是在何時新增，只要有任何缺少或多餘的葉節點就會失敗。`__MISSING__:` 佔位符會被視為存在（其內容屬於比例閘門的管轄範圍）。它是兩個基於差異／百分比之閘門的絕對補充：`check-ui-keys-coverage` 對每個語系強制設定 80 % 的下限（在約 13,000 個鍵中缺少 43 個，仍會顯示為 99.7 %），而 `check-new-key-coverage` 僅評估 PR 新增至 `en.json` 的鍵。語系批次是以建立其分支當天的 `en.json` 產生，並在基礎分支持續新增鍵的同時進行數天的翻譯；批次 PR 本身未新增任何鍵，因此當批次 1（#13044）合併時，九個語系短缺 43 個鍵，以及批次 2（#13660）八個語系短缺 10 個鍵時（2026-09-15），兩個同級閘門都沒有發出警示。若出現紅燈，請使用 `node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` 修正；`extra` 葉節點表示來源已移除該鍵——請將其從語系檔案中刪除。`--warn` 會回報但不會導致失敗。`--catalog=cli` 會對 `bin/cli/locales` 執行相同的比較（`npm run i18n:check-keys:cli`）；這兩個步驟都位於作業 `i18n-ui-coverage` 中。

#### `check-new-key-coverage` — 新鍵 i18n 閘門

`check-ui-value-drift` 的同級閘門。後者會偵測英文值已被**改寫**但其翻譯未隨之更新的情況；本閘門則會偵測已**新增**英文鍵但部分語系從未收到該鍵的情況。

`check-ui-keys-coverage` 無法發現這類問題：它對每個語系強制設定百分比下限，而在約 13,000 個葉節點鍵中缺少十一個，覆蓋率仍為 99.9%。每種語言的百分比無法表達「此功能在未翻譯的情況下發布」——整項功能可能在新語系中完全沒有文字，卻絲毫不影響該數字。

它所編碼的事件如下：Orchestration Canvas 的第 3 階段已將其十一個鍵翻譯至當時存在的 42 個語系。數小時後，歐盟語言批次（#13044）將儲存庫擴增至 51 個語系，而新增的九個語系（`el`、`et`、`ga`、`hr`、`lt`、`lv`、`mt`、`sl`、`sr`）從未收到這些鍵。`deepMergeFallback` 會以英文取代缺少的鍵，因此失敗模式是未翻譯的 UI，而不是空白 UI——這是真實存在、且因設計使然而悄無聲息的問題。

和它的同級閘門一樣，它**會感知差異**，將合併基準點的英文內容與工作樹比較，因此既有缺漏會維持原狀，而啟用此閘門時不需要進行遷移。

**`__MISSING__:<english>` 標記無法滿足此閘門（自 2026-09-17 起）。** 它過去是文件中指定的延後處理方式——執行階段會回退至正確的英文——直到 2026-09-16 有八個功能 PR 新增了 61 個鍵，並在全部 65 個語系中加入該標記而未進行翻譯：此閘門全數接受，沒有任何機制阻擋這些 PR，而封鎖式的實際翻譯比例閘門隨後在發行版本頂端對所有人失敗（pt-BR 3.2 % > 2.5 % + 0.5）。標記現在會被判定為缺少翻譯。若出現紅燈，請使用 `node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40` 修正，或使用 `npm run i18n:translate-new-keys`（`scripts/i18n/translate-new-keys.sh`，可安全地脫離終端執行；若沒有 `OMNIROUTE_TRANSLATION_*` 環境變數則拒絕啟動）平行處理所有語系。必須保留英文的鍵（固定的產品／引擎／旗標名稱）應放在 `scripts/i18n/untranslatable-keys.json` 中，絕不能藏在標記後方。`vi` 完全禁止標記（`tests/unit/i18n-vi-completeness.test.ts`）。

#### `check-vitest-exclusions` — 暫置測試閘門

`vitest.config.ts` 的 `exclude` 清單中若有檔案，就表示該測試不會執行；但對檢視檔案樹的人而言，它看起來仍像是覆蓋範圍的一部分。有六十二個檔案逐漸累積在註解 `// #8618 — 既有失敗；修正後移除此排除項目` 之下。Issue #8618 已於 2026-08-11 關閉，但它所追蹤的清單卻從 45 個項目增加至 62 個，每個新項目都沿用了一則指向已關閉 Issue 的註解。當最終逐一測量清單中的檔案時（#13204），**62 個檔案中有 51 個無需變更原始碼即可在目前的工作樹上通過**。

此閘門要求每個可解析至實際檔案的排除項目都必須：(a) 指明一個追蹤 Issue；以及 (b) 連同其測量狀態出現在 `config/quality/vitest-exclusions.json` 中。如此一來，新增排除項目時，會在專用檔案中形成可供審查的差異，而不只是在含有 60 個項目的陣列中再增加一行。它刻意不重新執行遭排除的測試——這需要約 10 分鐘，應由週期性作業負責；清單則會記錄每個項目上次測量的時間。
