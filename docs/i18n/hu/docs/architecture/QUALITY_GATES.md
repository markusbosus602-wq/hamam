# Quality Gates Reference (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Ez a dokumentum az OmniRoute összes CI-minőségi kapujának mérvadó referenciája.
Ismerteti az egyes kapukat, az általuk ellenőrzött szempontokat, azt, hogy melyik CI-feladatban futnak, hogy
küszöbérték-alapvonalat vagy megfelelt/nem felelt meg szabályt használnak-e, valamint hogy blokkolják-e a buildet, vagy csak tájékoztató jellegűek.

Rövid összefoglalóért és az engedélyezési lista szabályzatáért lásd az „Quality Gates & Ratchets” szakaszt
az `AGENTS.md` fájlban. Ugyanezen rendszer kritikai értékelését, érettségi besorolását és eszközfüggetlen
replikációs tervét lásd a
[Minőségi kapuk kézikönyvében](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Kapuleltár és végrehajtási profilok

### Jelölt felvétel

A CI és a Quality Gates munkafolyamatok egyaránt stabil ítéletet adnak ki: `Gate / CI` és `Gate / Quality`. Verziózott felvételi szabályzatuk minden felfelé irányuló munkát felsorol, amennyiben szükséges vagy tanácsos. Egy megfelelő kötelező feladatnak sikeresnek kell lennie: hiányzó, törölt, kihagyott, függőben lévő és ismeretlen eredmények nem hozhatók létre PASS. Egy érvényes, csak dokumentumokra vagy csak katalógusra vonatkozó besorolás alkalmatlanná tehet egy kódsávot; egy tervezet PR nem elfogadott jelölt. A `hotfix` címke nem mond le a bizonyítékról.

Mindkét munkafolyamat lefedi PRs main/release ágakra, `main`-re történő átküldést, a kézi feladást és a csoportos összevonási eseményeket. Push, dispatch és merge-group futtatja a teljes kijelölést. `release/**` re történő tolások nem indítják el őket (2026-10-18): minden változtatás már futtatta a mátrixot PR jén, és az egyesített kombináció Release-Green feladata (`docs/ops/RUNNER_BOX.md` → Hosted lane). Az elágazások és az összevonási csoportok hosztolt futókat használnak azokhoz a feladatokhoz, amelyek egyébként önkiszolgáló futókat választanak ki; elegendő hosztolt kapacitást kell ellenőrizni a közzététel előtt.

Minden JSON nyugta azonosítja a kivett SHA, a munkafolyamat futtatását és kísérletét. A CLI elutasítja a checkout/event SHA eltérést. A munkafolyamat-tesztek a házirend-tagságot az ítélet-feladat `needs` listájához kötik, így egy új vagy eltávolított sáv nem tud csendben eltűnni. A nyugták a saját munkafolyamatukat fedik le, nem pedig a közzétételt, a telepítést vagy a meglévő tanácsadó szkenner belső elemeit. Mindkét csekknév aktiválása az ágszabályokban külön adminisztratív változás; ezeknek a munkáknak a hozzáadása önmagában nem védi meg a fióktelepet.

### Statikus szkennelési leltár

A verziózott npm-alias leltár és a static-scan tagság `config/quality/gate-manifest.json` ban található. Futtassa `npm run check:gate-manifest` a szkriptnevek és a pontos parancsok ellenőrzéséhez `package.json` ellen; a kiegészítések, az eltávolítások és a parancssodródás mind a helyi hook, mind a CI változás-osztályozási munkája sikertelen. Az álnév nem munkafolyamat-feladat, mátrixpéldány vagy teszteset: ezeket a számokat nem szabad felcserélhetőként bemutatni.

`npm run quality:scan -- --list` vagy `npm run quality:scan:fast -- --list` segítségével ellenőrizheti a kiválasztott álneveket anélkül, hogy végrehajtaná őket. A futtató meghívja az npm belépési pontot, így annak futásideje (beleértve Bun ahol be van állítva) megmarad. A jegyzékrekordok a profilokon kívüli álneveket külön hívják meg, és a karbantartási parancsok tiltottak a csak olvasható vizsgálati profilokban.

Ezek a profilok csak a statikus vizsgálatot fedik le. Nem tanúsítják a termékteszteket, a lefedettséget, a csomagolást, a külső ellenőrzéseket vagy a jelölt teljes kiadási elfogadását. A munkafolyamat-felvétel a kapcsolódó `config/quality/admission-policy.json` és `scripts/quality/admission-verdict.mjs` használja. A kiadás-megfigyelő profilok külön maradnak; függetlenül vizsgálja meg a vonatkozó csekkeket és nyugtákat. Az alábbi prózai leltár referencia, nem annak bizonyítéka, hogy valóban befutott egy kapu.

A szkriptek `scripts/check/` (policy gates) és `scripts/quality/` (racsnis motor) alatt élnek. Az igazság CI forrása `.github/workflows/ci.yml`.

### PR gyorsút (`quality.yml`) felszabadítása

`.github/workflows/quality.yml` kiegészíti CI main/release PRs, átküldi `main`, csoportokat küld és egyesít. PRs útvonalszűrt gyors ellenőrzéseket használ. A véglegesen letiltott duplikált build eltávolítva; a valódi build/package/boot -ellenőrzések a CI ban maradnak.

| Munka                                            | Hatály                                                                                                                                                                                                                                         | Blokkolás                     |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `Docs Gates (fast-path)`                         | Docs/code PRs; API docs refs és docs-all                                                                                                                                                                                                       | Igen                          |
| `Fast Quality Gates`                             | Kód PRs; statikus ellenőrzések, típusellenőrzés, műszerfali típusellenőrzés, érintett egységtesztek                                                                                                                                            | Igen                          |
| `Forgotten sibling tests`                        | Kód PRs; megváltozott modulok, amelyek statikus fogyasztókra és jelölt testvértesztekre vezethetők vissza; a hordós és a dinamikus importálási útvonalakat tanácsadó diagnosztikaként jelentik, a hivatkozott engedélyezési lista kivételeivel | **Tanácsadó**                 |
| `Vitest (fast-path)`                             | Kód PRs; gyors vitest suite                                                                                                                                                                                                                    | Igen                          |
| `Unit Tests fast-path`                           | Kód PRs; 4 darabos egységcsomag                                                                                                                                                                                                                | Igen                          |
| `No new ESLint warnings`                         | Kód PRs; elnyomást tudó szöszvédő                                                                                                                                                                                                              | Igen, beleértve a villákat is |
| `Merge integrity (changelog + generated skills)` | Nem huzat PRs; változásnapló és generált készségszinkronizálás                                                                                                                                                                                 | Igen, beleértve a villákat is |

#### Elfelejtett testvérteszt-jelentés

`npm run check:forgotten-sibling-tests` újra felhasználja az importfeloldót a teszt-hatástérkép mögött. Minden módosított termelési modulnál determinisztikus `changed module/symbol -> static consumer -> candidate sibling test` láncokat jelent, ha a jelölt teszt hiányzik a lekérési kérés különbségéből. A Markdown összegzése és JSON eredménye a `forgotten-sibling-tests` munkafolyamat mellékterméke marad a blokkoló közzététel előtti kalibráláshoz.

A hordós reexport és a dinamikus import csak felbontási diagnosztikát jelent; soha nem hoznak létre blokkoló megállapítást. A felülvizsgált kivételek élnek itt: `config/quality/forgotten-sibling-allowlist.json`. Minden bejegyzésnek meg kell neveznie a fogyasztói és jelölt tesztet, meg kell adnia egy konkrét indoklást, és csatolnia kell egy GitHub problémát vagy lekérési kérést. A hibás formátumú bejegyzések lezárása sikertelen. A kivételek nem tilthatják el a törölt jelölt tesztet vagy `.skip`/`.todo`-t hozzáadó diff-et; Az állításgyengítés és az egyéb maszkolás továbbra is a független blokkoló `check:test-masking` kapu tulajdonában marad.

### Munka: `lint`

Minden PR tól `main` fut. A blokkok összeolvadnak hiba esetén.

| forgatókönyv (`npm run ...`)      | Érvényesíti                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Blokkolás                                 |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `check:node-runtime`              | Node.js verzió a támogatott tartományon belül van                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Igen                                      |
| `check:cycles`                    | Körkörös importálás `src/` + `open-sse/` teljes területén (AST-alapú, tsconfig `paths` megoldva). A Bare kilép 1-ből, amikor bármilyen ciklus létezik (hiba zárva #15281 óta), és kilistázza a SCCs. `check:cycles:ratchet` (mi CI fut) blokkolja, ha a szám meghaladja a `metrics.cycles` plafont `quality-baseline.json` — -ben jelenleg 14, `direction: down`, tehát csak eshet (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Igen (racsnis)                            |
| `check:boundary`                  | `open-sse → src` csatolás: egyedi fájlról fájlra importálás a motorból az alkalmazásba (`scripts/quality/measure-boundary.mjs`; az éllista a v4 core/module-split helyreállítási hátralék). Bare = tanácsadó jelentés (ugyanaz, mint `quality:boundary`). `check:boundary:ratchet` (ami CI fut, a `quality.yml` gyorskapu racsnis hurokban is) blokkolja, ha a szám meghaladja a `metrics.boundaryOpenSseToSrc` plafont `quality-baseline.json` — ban a mért 771-en, `direction: down`; `--update` csak csökkenti; alaprelatív a PRs (`--base-ref`, lásd lent)                                                                                                                                                                                                                                                                                                                                                                                                                                       | Igen (racsnis)                            |
| `check:route-validation:t06`      | Zod sémák jelen vannak minden útvonalon (Tier 6 házirend)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Igen                                      |
| `check:any-budget:t11`            | `@ts-expect-error // any` száma nem haladja meg a költségvetést (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Igen                                      |
| `check:provider-consistency`      | Minden `providers.ts` szolgáltató rendelkezik egy megfelelő bejegyzéssel `providerRegistry.ts` ben (és fordítva, az engedélyezési listán belül)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Igen                                      |
| `check:model-lifecycle`           | A három kézzel karbantartott útválasztási tábla konzisztens marad a bejegyzett életciklus-pillanatfelvétellel (#11503): `FITNESS_TABLE` (`taskFitness.ts`) nem ér el olyan visszavont azonosítót, amelyet `REGISTRY` irányíthatna; minden `BUILT_IN_ALIASES` cél megtalálható `REGISTRY` ben, és hiányzik a visszavont azonosító pillanatképéből; minden `REGISTRY` ben lévő nyugdíjas azonosítót továbbítanak vagy listáznak `allowedRetiredInCatalog` ben; és ezen a pillanatfelvételen egyetlen `DEFAULT_DEGRADATION_MAP` forrás vagy cél sem tűnik kivontnak. Ez nem bizonyítja, hogy egy modellt jelenleg élő upstream szolgál ki. Az offline — összehasonlítása `config/quality/model-lifecycle.json`-vel, kézzel frissítve `npm run quality:refresh-model-lifecycle` (hálózat; nincs bekötve CI). `allowedRetiredInCatalog` egy leégett racsnis: csak nyomkövetési problémával adjon hozzá bejegyzést.                                                                                        | Igen                                      |
| `check:fetch-targets`             | Az ügyféloldali `src/` -ben minden `fetch("/api/...")` valódi `route.ts` vé oldódik fel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Igen                                      |
| `check:deps`                      | Minden `npm install` -able deps a repo minden `package.json` jében `dependency-allowlist.json` ben van; az új rögzítetlen vagy csúszott csomagok megjelölve                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Igen                                      |
| `audit:deps`                      | `npm audit` (gyökér + elektron) — nincs high/critical figyelmeztetés (átfed az osv `check:vuln-ratchet`; lásd: Racionalizálási hátralék)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Igen                                      |
| `check:lockfile`                  | `package-lock.json` integrity — https registry, integrity hash, nincs gazdagép felülírása                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Igen                                      |
| `check:licenses`                  | SPDX licenc engedélyezési listája a termelési függőségekhez                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Igen                                      |
| `check:tracked-artifacts`         | Nincsenek összeállítási műtermékek / elkötelezett `node_modules` szimbolikus linkek (husky pre-commit módban is fut; a pre-push szándékosan light — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Igen                                      |
| `check:ai-attribution`            | Nincs AI/bot `Co-Authored-By` előzetes vagy mesterséges intelligencia generációs lábléc PR commitokban, cím vagy törzs — kemény szabály #16 (a `quality.yml` gyorskapu hurokban PR→ `release/**` — beolvassa az esemény hasznos terhelését, a no-op off PRs — lépést a PR `ci.yml` -`main` PR a `commit-msg` →#14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `check:vitest-exclusions`         | Minden Vitest kizárás megnevez egy nyomkövetési problémát, és megjelenik `config/quality/vitest-exclusions.json` ben (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Igen                                      |
| `check:file-size`                 | A forrásfájlok (`.ts`/`.tsx` a `src/`, `open-sse/`, `electron/`, `bin/`) `cap` n belül maradnak, a tesztfájlok (`*.test.ts(x)`) pedig a `testCap` n belül; `file-size-baseline.json` (`frozen` / `testFrozen`) lefagyasztott fájlok nem nőhetnek túl a rögzített méretükön                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Igen                                      |
| `check:error-helper`              | executors/handlers hibaválaszai `buildErrorBody()` / `sanitizeErrorMessage()` parancsot használják (12. kemény szabály)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Igen                                      |
| `check:migration-numbering`       | A migrációs SQL fájlok sorrendben vannak számozva, nincsenek hiányosságok vagy ismétlődések                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Igen                                      |
| `check:public-creds`              | Nincsenek szó szerinti OAuth `client_id`/`client_secret` vagy Firebase webkulcsok `publicCreds.ts` kívül (11. kemény szabály)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Igen                                      |
| `check:db-rules`                  | Nincs nyers SQL `src/lib/db/` modulokon kívül; nincs hordóimport `localDb.ts` ből (Kemény szabályok #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Igen                                      |
| `check:known-symbols`             | A szolgáltató végrehajtói, útválasztási stratégiái és a kiküldési táblájukban regisztrált fordítók megegyeznek a lemezen lévő fájlokkal — nincs árva vagy nem deklarált szimbólum                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Igen                                      |
| `check:route-guard-membership`    | Minden olyan útvonalat, amely gyermekfolyamatot hoz létre, `isLocalOnlyPath()` osztályoz (Kemény szabályok #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Igen                                      |
| `check:test-discovery`            | A repo minden `*.test.ts` / `*.spec.ts` fájlját legalább egy tesztfutó gyűjti össze (racsnis: `test-discovery-baseline.json` árva listája csak zsugorodhat)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Igen                                      |
| `check:test-tla-order`            | `tests/unit` alatt egyetlen `node:test` fájl sem regisztrál tesztet, eltalálja a legfelső szintű `await`, majd többet regisztrál (#18045; racsnis: `test-tla-order-allowlist.json` csak zsugorodhat)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Igen                                      |
| `check:agent-skills-sync`         | A generált ügynöki készségek műtermékei megegyeznek a forráskatalógusukkal (nincs eltolódás)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `check:provider-asset-provenance` | A logos/assets szolgáltató rögzített származási bejegyzéssel rendelkezik                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `lint:json`                       | JSON konfigurációs fájlok elemzik, és megfelelnek a repo lint szabályoknak                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `typecheck:core`                  | TypeScript összeállítás hibák nélkül (csak figyelmeztetés)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Igen                                      |
| `typecheck:noimplicit:core`       | Szigorú `noImplicitAny` — előremutató; sok már létező hívóoldalnak még mindig szüksége van megjegyzésekre                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | **Tanácsadó** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` `src/app/(dashboard)/**` (#7033) — `typecheck:core` kurált, 27 fájlból álló engedélyezési listája nem tartalmaz semmilyen irányítópult TSX, és `next build` sem típusellenőrzi azt (`next.config.mjs` beállítja `ignoreBuildErrors: true`), így árva azonosítók regressziói voltak ott (#6902 to5)/#6902 CI. Eltér a befagyott per-file/per-TS-code számlálási alapvonaltól (`config/quality/dashboard-typecheck-baseline.json`, ugyanaz az elavult érvényesítési minta, mint `check:known-symbols`) — csak az alapvonalon túli NEW hibák nem teljesítik a kaput; racsni le `--update`, ha egy már meglévő hibát javítottak.                                                                                                                                                                                                                                                                                                                                                                   | Igen                                      |
| `check:build-typecheck`           | Az egész alkalmazás gyártási típusának ellenőrzése `tsconfig.build.json` felett (`src`, `open-sse`, `packages`, `bin`, `scripts`, `electron/**/*.d.ts`), a felületi `typecheck:core` 27 fájlból álló engedélyezési listája és a műszerfal kapuja nem terjed ki. Diff ellen `config/quality/build-typecheck-baseline.json`; egy új vagy emelt per(fájl, kód) számláló meghiúsul, alacsonyabb számláló esetén racsni kell. `--update` visszautasítja, ha a futás új vagy emelt párt tartalmaz, kivéve, ha `--force-regressions` átadásra kerül, és visszautasítja az újonnan elnémított fájlt, hacsak nem `--force-nocheck` t, tehát az alapvonal kiszélesítése zöldre váltáshoz és az állandó elnémítás két külön szándékos cselekedet. A csupasz `--force` elutasítva. Szintén ellenőrzi a `@ts-nocheck` összeállítási hatókörét `config/quality/ts-nocheck-baseline.json` ellen, mert az ezt használó fájl egyáltalán nem jelent diagnosztikát, és egyébként láthatatlan lenne minden kapu számára. | Igen                                      |

#### Két típusellenőrző program eltérően válaszol

`typecheck:core` és `check:build-typecheck` különböző opciók mellett különböző programokat fordít le, és ugyanaz a fájl lehet az egyikben tiszta, a másikban hibás.

`tsconfig.build.json` beállítja `"strict": false`, tehát `noImplicitAny` ki van kapcsolva. Az alapkonfiguráció összeállít egy kurált, 27 fájlból álló engedélyezési listát szigorúbb beállításokkal, és követi az egyes bejegyzések importálási grafikonját, így a build programban soha nem megjelenő fájlok továbbra is ott ellenőrzik.

A következmény számít annak megítélésekor, hogy egy fájl be van-e írva:** a nulla diagnosztika `check:build-typecheck` alatt nem jelent nullát** . `@ts-nocheck` eltávolítása 26 fájlból 23-at mutatott tisztanak a build programban; ezek közül tizenhat körülbelül 120 implicit hibát talált a szigorúnál. Ellenőrizze mindkettőt, mielőtt tiszta fájlt hívna.

### Munka: `quality-gate`

`test-coverage` után fut. A blokkok összeolvadnak hiba esetén.

| Forgatókönyv                 | Érvényesíti                                                                                                                                                                     | Blokkolás              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `quality:collect`            | `quality-metrics.json` bocsát ki (ESLint figyelmeztetések száma, lefedettség az egyesített szilánkjelentésből)                                                                  | Igen (a racsnis előtt) |
| `quality:ratchet`            | `quality-baseline.json` ban minden metrika nem regresszált (ESLint figyelmeztetések ≤ alapvonal; lefedettség ≥ alapvonal)                                                       | Igen                   |
| `check:duplication`          | A kódduplikáció (jscpd@4) nem haladja meg `quality-baseline.json` alapvonalát                                                                                                   | Igen                   |
| `check:complexity`           | A fájlszintű ciklomatikus összetettség nem haladja meg a felső határt (core ESLint `complexity` + `max-lines-per-function`)                                                     | Igen                   |
| `check:cognitive-complexity` | Kognitív komplexitás racsnis (`eslint-plugin-sonarjs`) — külön ESLint pass; CI mindkettő összevonva fut, egyetlen `check:complexity-ratchets` lépésként                         | Igen                   |
| `check:dead-code`            | A fel nem használt exportok / fájlok racsnis (knip) nem lép vissza az alapvonalhoz képest                                                                                       | Igen                   |
| `check:compression-budget`   | A kompressziós referencia-költségvetési — motoronkénti token-megtakarítási szintje nem csökkenhet                                                                               | Igen                   |
| `check:type-coverage`        | A százalékos típusú racsnis (`type-coverage`) nem regresál; nagyrészt magában foglalja `typecheck:noimplicit:core`                                                              | Igen                   |
| `check:codeql-ratchet`       | A nyitott CodeQL riasztások száma nem regresál (olvasás `gh api` keresztül; kecses átugrás token nélkül) — frissítési ütem és kézi trigger: lásd alább a "CodeQL ratchet" részt | Igen                   |

### Munka: `quality-extended`

A teljes munkakör tanácsadói jellegű (`continue-on-error: true`). Az npm-alapú racsnisok valódiak; a külső szkennerek `gh release download` keresztül és önkihagyással (0. kilépés) települnek, ha a bináris még mindig hiányzik.

| Forgatókönyv             | Érvényesíti                                                                                                                                                                                                                                       | Blokkolás                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `check:circular-deps`    | Nincsenek körkörös függőségek (dpdm)                                                                                                                                                                                                              | **Tanácsadó**                                      |
| `check:bundle-size`      | A köteg mérete nem haladja meg a kupakot                                                                                                                                                                                                          | **Tanácsadó**                                      |
| `check:secrets`          | A titkos szkennelés (gitleaks) — kihagyja, ha bináris nincs jelen                                                                                                                                                                                 | **Tanácsadó**                                      |
| `check:vuln-ratchet`     | A függőségi sebezhetőségek (osv-szkenner) nem lépnek vissza, — kihagyja, ha bináris nincs jelen                                                                                                                                                   | **Tanácsadó**                                      |
| `check:workflows`        | Munkafolyamat-szösz (actionlint + zizmor); missing/broken szkennerek, érvénytelen jelentések vagy hiányzó racsnis alapvonal INCOMPLETE-ként hibásodik meg. Az érvényes megállapítások követik a kiválasztott strict/advisory/ratchet szabályzatot | Végrehajtás szükséges; zizmor racsnis blokkolás CI |
| `check:openapi-breaking` | A nyilvános API szerződés (`openapi.yaml`) és az alapág (oasdiff) változásainak megszakítása — `openapiBreaking=N` bocsát ki; kihagyja, ha az oasdiff hiányzik vagy az alapspecifikáció feloldhatatlan                                            | **Tanácsadó**                                      |

### Munka: `docs-sync-strict`

Minden PR tól `main` fut. A blokkok összeolvadnak hiba esetén.

| Forgatókönyv                   | Érvényesíti                                                                                                                                                                           | Blokkolás                         |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `check:docs-all`               | Meta-kapu, amely az alábbi 6 alkaput szekvenciálisan futtatja                                                                                                                         | Igen                              |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt verzió konzisztenciája                                                                                                                                  | Igen                              |
| ↳ `check:docs-counts`          | A prózai számlálások (szolgáltatók száma, migrációs számláló stb.) a valós számlálások racsnis ablakán belül vannak                                                                   | Igen                              |
| ↳ `check:env-doc-sync`         | Minden env var `.env.example` -ban egy dokumentumtáblázatban van dokumentálva, és fordítva                                                                                            | Igen                              |
| ↳ `check:deprecated-versions`  | Nincsenek elavult verziójú karakterláncok a dokumentumokban                                                                                                                           | Igen                              |
| ↳ `check:doc-links`            | A dokumentumok belső leértékelési hivatkozásai valódi fájlokat eredményeznek (`[text]`/`(path)` űrlap)                                                                                | Igen                              |
| ↳ `check:fabricated-docs`      | A dokumentumokban hivatkozott útvonalak, env vars, CLI parancsok, hook-nevek és fájl elérési utak léteznek a kódbázisban. Kemény kapu `--strict` keresztül ; soft-fail zászló nélkül. | Igen ( `--strict` n keresztül CI) |
| `check:cli-i18n`               | CLI parancssorok minden i18n területi fájlban megtalálhatók                                                                                                                           | Igen                              |
| `check:openapi-coverage`       | OpenAPI specifikációja a valódi útvonalak legalább egy racsnis padlóját lefedi                                                                                                        | Igen                              |
| `check:openapi-security-tiers` | `openapi.yaml` biztonsági szintjei összhangban vannak `routeGuard.ts` besorolással                                                                                                    | **Tanácsadó**                     |
| `check:openapi-routes`         | `openapi.yaml` -ban minden út egy igazi `route.ts` (anti-hallucináció) vezet.                                                                                                         | Igen                              |
| `check:docs-symbols`           | `docs/**/*.md` -ben minden `/api/...` hivatkozás valódi `route.ts` (anti-hallucináció) oldódik fel.                                                                                   | Igen                              |
| `i18n translation drift`       | Lefordítatlan kulcsok az i18n nyelvi fájlokban, csak — figyelmeztet                                                                                                                   | **Tanácsadó**                     |

A `docs/diagrams/` alatti tizenkét README SVGs generálódik (`scripts/docs/gen-readme-<name>.mjs`; `npm run docs:readme-diagrams` mindegyiket regenerálja). Mindegyik rendelkezik egy bájt-összehasonlítási egységteszttel (`tests/unit/docs/readme-*-svg.test.ts`, job `test-unit`), amely sikertelen, ha a véglegesített fájl elavult, és `check:docs-counts` beolvassa a kanonikus számokat `<text>` — csomópontjaiból, ezért a körvonalazás lépése a fájl minden körvonalazott karakterláncát láthatatlan `<text>` ként tartja meg. A SVG kanonikus számok ellenőrzése beolvassa a `SVG_DIAGRAM_FILES` ben (`scripts/check/check-docs-counts-sync.mjs`) felsorolt fájlokat: `docs/diagrams/readme-hero.svg`, `free-tier-budget.svg`, `promise-pillars.svg`, `comparison-table.svg`, `cli-terminal.svg`, `tier-cascade.svg`, plusz `public/images/tier-flow-dark.svg` és `tier-flow-light.svg`; a szabad örökkévalóság, a katalógus-bejegyzés, az ismétlődő gyűjtemény és a pontozási tényezők állításai `promise-pillars.svg`, `free-tier-budget.svg` és `strategies-grid.svg` szavakat is tartalmazzák. `free-tier-budget.svg` az élő katalógusbetöltőből meríti a számadatokat, így `FREE_MODEL_BUDGETS` vagy a szolgáltató megjelenített nevére történő módosítás CI pirossá teszi, amíg a fájl újra nem jön létre.

### Munka: `i18n-ui-coverage`

| Forgatókönyv                     | Érvényesíti                                                                                                                                                                                                   | Blokkolás     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `check-ui-keys-coverage` (soros) | UI i18n kulcslefedettsége a ≥ 65%-a                                                                                                                                                                           | Igen          |
| `check-ui-value-drift` (soros)   | Egy átírt angol** érték** nem hagy maga után elavult fordítást                                                                                                                                                | Igen          |
| `check-new-key-coverage` (soros) | A** új** Az angol kulcsot minden — nyelven lefordítják, a `__MISSING__:` jelölőt elutasítják                                                                                                                  | Igen          |
| `check-translation-ratio`        | A nyelvi nyelvenkénti valós fordítási arány (az angollal azonos / helyőrző / hiányzó levelek az engedélyezési listán kívül) nem haladhatja meg `config/quality/i18n-translation-baseline.json` + laza értéket | **Tanácsadó** |

Szüksége van `fetch-depth: 0` —, az érték-sodródási kapu eltér `en.json` től az egyesítési alaphoz képest.

#### `check-ui-value-drift` — elavult fordítási kapu

Elkapja azt az i18n regressziót, amelyet a többi kapu szerkezetileg nem lát: egy angol érték átírásra kerül, és az _korábbi_ angolból származó fordítások hátramaradnak, így a nem angol felhasználók továbbra is magabiztosan megfogalmazott, most hibás példányt olvasnak.

Ezt valóban szállították. `oauthModal.googleOAuthWarning` át lett írva, amikor a Antigravity bejelentkezési segéd leszállt (#5203);** 39/43 terület** folyamatosan szöveg, amely azt mondta az operátoroknak, hogy "másolják ki a teljes URL és illessze be alább" — egy folyamatot, amely nem fejezhető be az adott szolgáltató számára. #8463-ig észrevétlen maradt, mert:

- `sync-ui-keys` csak azokat a kulcsokat tölti ki, amelyek vannak** hiányzó** , soha olyanokat, amelyek azok** állott** ;
- `check-ui-keys-coverage` a kulcs _jelenlétet_ számítja, így az elavult fordítás lefedettnek minősül;
- `check-translation-drift` tracks the `docs/i18n/<locale>/**.md` documentation mirrors — it never reads `src/i18n/messages/*.json`. Blocking in job `docs-sync-strict` since the 2026-09 re-sync: edit a core doc → `npm run i18n:run -- --files=<doc>` (section-level, cheap).

**Diff-tudatos, nem alapvonal-támogatással.** Összehasonlítja `en.json` az egyesítési bázison a működő fával; minden olyan kulcsnál, amelynek angol értéke megváltozott, minden olyan területi beállítás, amely érintetlen fordítást tartalmaz, elavult. Ezt szándékosan** befagyasztja a már meglévő adósságot** — a diff nem tudja felfedni, hogy egy régóta létező fordítás melyik régi angolból származik, így a kapu csak azt ítéli meg, hogy az aktuális változás mit érint. Az alternatíva (a kulcsonkénti kivonat alapvonala) egy ~ 600 KB generált fájlba kerülne, amely 3 × a legnagyobb létező alapvonal, amely minden i18n PR esetén kavar.

Kétféleképpen lehet kielégíteni:

1. frissítse az érintett fordításokat, vagy
2. állítsa be őket `__MISSING__:<new english>` — értékre a futtatókörnyezetben, majd a javított angol nyelvet (`src/i18n/request.ts::deepMergeFallback`, #7258) és a kulcssorokat szolgálja ki a fordításhoz.

Ha a húr** jelentése** megváltozott, inkább** a kulcs átnevezése** : egy új kulcs nem örökölheti az elavult fordítást. Ez a használt #8463 minta.

```bash
npm run i18n:check-value-drift          # strict (what CI runs)
npm run i18n:check-value-drift:warn     # report only
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Kilép a 0- `SKIP reason=base-unresolved` val, ha az alapkatalógus nem olvasható (sekély klón az alap ref nélkül), tükrözve `check-openapi-breaking`.

### Munka: `i18n`

Teljes i18n érvényesítési mátrix (helyszínenként egy feladat). Az egész munkakör tanácsadó jellegű.

| Forgatókönyv                    | Érvényesíti                                        | Blokkolás                                                  |
| ------------------------------- | -------------------------------------------------- | ---------------------------------------------------------- |
| `validate_translation.py quick` | A fordítás teljessége területi beállítások szerint | **Tanácsadó** (`continue-on-error: true` az egész munkára) |

### Munka: `pr-test-policy`

Csak lekérésre fut.

| Forgatókönyv           | Érvényesíti                                                                                                                                                         | Blokkolás |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `check:pr-test-policy` | PRs, amely megváltoztatja a gyártási kódot `src/`, `open-sse/`, `electron/` vagy `bin/` -ben, teszteket kell tartalmaznia vagy frissítenie kell (8. kemény szabály) | Igen      |
| `check:test-masking`   | A módosított tesztfájlok nem csökkentik a nettó állítások számát, és nem adnak hozzá `assert.ok(true)` tautológiákat                                                | Igen      |
| `check:pr-evidence`    | PR test test/VPS bizonyítékát idézi a változásra (a 18-as kemény szabályt gépesíti PR prózai — fragile gréppelésével, lásd a hátralékot)                            | Igen      |

### Munka: `test-vitest`

`build` után fut. A blokkok összeolvadnak hiba esetén.

| Kíséret          | Érvényesíti                                                      | Blokkolás                                                                                                           |
| ---------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP szerver (110 eszköz), autoCombo, gyorsítótár — vitest runner | Igen                                                                                                                |
| `test:vitest:ui` | UI komponens teszteli — vitest runnert                           | **Blokkolás** — a már meglévő hibákat kifejezetten kizárja `vitest.config.ts`; az új kudarcok tönkreteszik a munkát |

### Éjszakai munkafolyamatok (ütemezett, tanácsadó)

Ezek cron ütemezés szerint futnak (és `workflow_dispatch`), soha nem PRs-n. Mindegyik tanácsadó jellegű.

| Munkafolyamat          | Érvényesíti                                                                                                                                                             | Blokkolás     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `nightly-property`     | gyorsellenőrzési tulajdonságtesztek véletlenszerű vetőmag + magas futási számmal                                                                                        | **Tanácsadó** |
| `nightly-resilience`   | halom-növekedés kapuja, káoszhiba-injekció, k6 load/soak                                                                                                                | **Tanácsadó** |
| `nightly-llm-security` | promptfoo befecskendezési védő (blokk üzemmód) + garak szondák (szolgáltatói titok nélkül átugorva)                                                                     | **Tanácsadó** |
| `nightly-schemathesis` | OpenAPI szerződés-fuzzing (sématézis) egy élő OmniRoute vel szemben `docs/openapi.yaml` — felületek specifikációi megsértésével / kezeletlen 500-asok (8 B.4-es verzió) | **Tanácsadó** |
| `nightly-mutation`     | Stryker mutációtesztelési pontszáma a gyors egységsávon — túlélő mutánsok felszínén gyenge állítások                                                                    | **Tanácsadó** |
| `nightly-compat`       | Csomópont-motor kompatibilitási mátrix a támogatott `engines.node` tartományokban                                                                                       | **Tanácsadó** |

A teljesítmény alapvonalait (kupac, TTFB, felépítési idő) rögzíti, nem kapuzott: lásd [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## Gyorsasági fázis (2026-08-30 → v4.0 LTS): minden alapérték 20%-kal enyhítve

Tulajdonosi döntés (2026-08-30): a v4.0 modularizálásáig a kiadási sebesség fontosabb, mint
a technikai adósság szinten tartása. Minden **numerikus** ratchet-alapértéket 20%-kal enyhítettünk
egyetlen auditálható lépésben, a fázis pedig a `config/quality/quality-baseline.json` fájlban van deklarálva:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Mi változott                                                                                                                                                                                                                                  | Hol                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — az alacsonyabb értéknél jobb darabszámok ×1,2, a magasabb értéknél jobb százalékok ÷1,2 (a lefedettségi minimum maradt 60, az `eslintErrors` maradt 0, az `eslintWarnings` 0 → a befagyasztott elnyomási darabszám 20%-a) | `quality-baseline.json` (a `_relax_velocity_2026_08_30` megjegyzés minden előtte → utána értéket felsorol) |
| `count` ×1,2 / `percentage` ×1,2                                                                                                                                                                                                              | `complexity-baseline.json`, `duplication-baseline.json`                                                    |
| `cap`, `testCap`, valamint minden `frozen[*]` / `testFrozen[*]` sorkorlát ×1,2                                                                                                                                                                | `file-size-baseline.json`                                                                                  |
| fájlonkénti / TS-kódonkénti darabszámok ×1,2                                                                                                                                                                                                  | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`     |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                           | `scripts/check/check-openapi-coverage.mjs`                                                                 |
| a `--require-tighten` csak tájékoztató jellegű, amíg `_policy.requireTighten === false`                                                                                                                                                       | `scripts/quality/check-quality-ratchet.mjs`                                                                |
| az éjszakai `bank-ratchet-shrinks` szünetel (eltárolná a mért csökkenést, és megszüntetné a tartalékot)                                                                                                                                       | `.github/workflows/nightly-release-green.yml`                                                              |

Az engedélyezési listák (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **nem** keretek, ezért nem módosultak. A sikeres/sikertelen állapotot meghatározó szabálykapuk
(titkok, SQL-szabályok, dokumentációs/környezeti szerződés, i18n-paritás, egységtesztek) változatlanok
— a sikertelen teszt továbbra is sikertelen teszt.

**Eszközök**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — az
  egyszeri enyhítés (`scripts/quality/relax-baselines.mjs`); ugyanazzal a megjegyzéssel nem
  hajlandó kétszer lefutni.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  minden numerikus kaput ugyanúgy mér, ahogy a CI, és kapunként kiírja a fennmaradó tartalékot
  (`scripts/quality/baseline-headroom.mjs`). Az éjszakai `baseline-headroom` feladat közzéteszi
  a táblázatot a munkafolyamat futási összegzésében, JSON-/Markdown-jelentését pedig
  `baseline-headroom-<run_id>` néven tölti fel, 90 napos megőrzéssel. A figyelmeztetési és kritikus
  sorok azonosítják azokat a kapukat, amelyek a korlátjuk 10%-án belül vannak, vagy már túl is
  lépték azt. Ezeket a jelentéseket tekintse a keretek felhasználásának korai figyelmeztetéseként;
  vizsgálja meg az érintett kapu `_rebaseline_*` megjegyzéseit. A feladat többé nem hoz létre és
  nem frissít állandó hibajegyet; a #12149 őrzi a korábbi jelentések előzményeit.

**Új kód mód (Clean-as-You-Code) — 2026-08-30 óta, csak a PR gyorsított útvonalán**

A `pull_request` eseményeknél a `quality.yml` átadja a `--base-ref <PR base SHA>` argumentumot
a `check:file-size`, `check:complexity-ratchets` és `check:dead-code` parancsoknak. A
`check:complexity-ratchets` és `check:dead-code` esetében a kapu a HEAD állapotot az egyesítési
bázissal hasonlítja össze, **kizárólag a PR által érintett fájlokra korlátozva**
(`scripts/check/newCodeMode.mjs`: az egyesítési bázis egy eldobható `git worktree` munkafában
materializálódik, az ESLint/knip ott és a HEAD állapoton is lefut, majd a fájlonkénti darabszámok
különbségét számítja ki):

- **blokkoló** — a PR ciklomatikus/kognitív komplexitási szabálysértéseket vagy nem használt exportokat
  adott hozzá az általa módosított fájlokban (`complexityNewCode=`, `cognitiveComplexityNewCode=`,
  `deadExportsNewCode=` a naplóban);
- **tájékoztató** — a globális összesítés összevetése a befagyasztott alapértékkel. Az örökölt
  eltérés soha nem tesz sikertelenné egy vétlen PR-t; az eltérést a kiadási egyeztetéskor ismét
  befagyasztjuk, és a tartalékot figyelő feladat követi nyomon.

A `check:file-size` a saját szabályai szerint használja a bázisreferenciát
(`scripts/check/check-file-size.mjs`, #8522): ellenőrzi a fában található összes forrás- és
tesztfájlt, mindegyik sorszámát beolvassa a PR bázisából a `git show` használatával, és csak akkor
minősíti sikertelennek a fájlt, ha az nagyobbra nő, mint az alapérték szerinti felső korlátja
(`frozen` / `testFrozen`, illetve az alapértéken kívüli fájloknál `cap` / `testCap`) és a bázisbeli
mérete közül a nagyobbik. Ezért egy már a bázison eltért fájl soha nem tesz sikertelenné egy
vétlen PR-t.

A `check:boundary:ratchet` ugyanezt a szabályt alkalmazza az egyetlen számára
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): PR-eseményeknél mind a
`quality.yml` gyors ellenőrzései, mind a `ci.yml` lintelési feladata átadja a PR alapjának SHA-ját, az alapcommit
mérése egy `git archive`-exportból történik, és a PR csak akkor bukik meg, ha az `open-sse → src` éleinek
száma meghaladja a `metrics.boundaryOpenSseToSrc` értéke és az alapon mért szám közül a nagyobbat. A felső
korlátot meghaladó alapeltolódást jelzi (`base drift herdado`), de emiatt egy vétlen PR soha nem bukik meg; a push → main
megtartja az abszolút felső korlátot, egy feloldhatatlan alap-SHA esetén pedig figyelmeztetés mellett erre áll vissza.

A `workflow_dispatch` futtatásoknak, a kiadás előtti teljes zöld ellenőrzésnek és az éjszakai tartalékfeladatnak nincs PR-alapja,
ezért megtartják az abszolút (globális) összehasonlítást. A lefedettség, a duplikáció és a típuslefedettség egyelőre globális
marad (az eszközeik nem állítanak elő olcsón fájlonkénti különbséget) — ezek ugyanilyen kezelésre jelöltek.

**A fázis lezárása a v4.0 verziónál (LTS = a korábbinál szigorúbb, nem „vissza a normál állapotba”)**

1. A tiszta `release/v4.0.0` ágcsúcson: dokumentálás céljából `npm run quality:headroom --json`, majd
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, valamint minden typecheck-kapu
   `--update` opcióval — minden alapérték a mért értékre csökken.
2. Törölje a `_policy` elemet a `quality-baseline.json` fájlból (újra aktiválja a `--require-tighten` ellenőrzést és az éjszakai
   tartalékolást), és állítsa vissza a `THRESHOLD = 36` értéket (vagy magasabbat) a `check-openapi-coverage.mjs` fájlban.
3. Ahol a modularizálás kifizetődött, szigorítsa a határértékeket a mért értékeken túl: a fájlméret `cap` értéke legyen ismét 1000
   (vagy 800), a lefedettségi minimumok +5, a nem használt exportok száma pedig 0 a modularizált csomagoknál.

## Ratchet-alapérték (`quality-baseline.json`)

A ratchet-motor (`scripts/quality/check-quality-ratchet.mjs`) beolvassa a `quality-baseline.json`
fájlt, és összehasonlítja a frissen összegyűjtött `quality-metrics.json` fájllal. Ha bármelyik
metrika az epszilonján túl romlik, a build sikertelen lesz.

Jelenleg követett metrikák:

| Metrika               | Irány  | Jelentés                                   |
| --------------------- | ------ | ------------------------------------------ |
| `eslintWarnings`      | `down` | Az ESLint-figyelmeztetések száma nem nőhet |
| `coverage.statements` | `up`   | Az utasításlefedettség nem csökkenhet      |
| `coverage.lines`      | `up`   | A sorlefedettség nem csökkenhet            |
| `coverage.functions`  | `up`   | A függvénylefedettség nem csökkenhet       |
| `coverage.branches`   | `up`   | Az áglefedettség nem csökkenhet            |

Az alapérték frissítése valódi javulás után:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

A `--update` jelző az aktuálisan mért értékeket írja a `quality-baseline.json` fájlba.
Ezt a fájlt a metrikát javító módosítással együtt commitolja. Ha egy PR javít egy
metrikát az alapérték frissítése nélkül, azt a `--require-tighten` észleli (6A.5. fázis,
megvalósításra vár).

### CodeQL-ratchet: frissítési gyakoriság és kézi indítás

A `check:codeql-ratchet` a **tároló ütemezetten frissített állapotát olvassa — nem PR-enként.**
A `gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` a következőt jelenti:
`state: configured`, `schedule: weekly`: ez a GitHub alapértelmezett beállítású vizsgálata,
nem pedig pushonkénti elemzés. Következmény: egy riasztásokat JAVÍTÓ PR egyesítése után a
ratchet továbbra is a régi, magasabb számot olvassa a következő ütemezett vizsgálat
lefutásáig — ezért minden nyitott PR esetében regressziót jelez, beleértve a javító PR
utólagos módosításait is, amíg a vizsgálat utol nem éri az állapotot.

**Kézi frissítés**: a `gh workflow run codeql.yml --ref release/vX.Y.Z` perceken belül
újrafuttatja az elemzést, és ismét közzéteszi a riasztásokat. Először olvassa el a
`.github/workflows/codeql.yml` fájlt — a fejlécében szerepel, hogy **azért csak
`workflow_dispatch` használatával indítható, mert ütközik a GitHub „alapértelmezett
beállításával”** (`CodeQL analyses from advanced configurations cannot be processed when the default setup is enabled`).
A `push`/`pull_request`/`schedule` eseményindítók visszaállításához először **tulajdonosi
műveletre van szükség**: Beállítások → Kódbiztonság → CodeQL: Alapértelmezett → Speciális.
E váltás nélkül ne adjon hozzá `schedule:` eseményindítót — az csak sikertelen futásokat
eredményez.

**A darabszám csökkenése után szigorítsa az alapértéket** — a `node scripts/check/check-codeql-ratchet.mjs
--update` az újonnan mért darabszámot a `quality-baseline.json` →
`metrics.codeqlAlerts.value` mezőbe írja, így a ratchet nem engedélyezi észrevétlenül,
hogy a szám visszanőjön a régi felső határig. Kidolgozott példa (2026-09-02/03): a #12502
PR 7 valódi riasztást javított (13 → 6 mért nyitott riasztás); a #12530 PR a rögzített
alapértéket 11-ről 6-ra szigorította, hogy megfeleljen ennek; a fennmaradó 6 riasztást
ezután riasztásonkénti indoklással elutasították, így 0 maradt nyitva.

**Az elutasítás az üzemeltető döntése (14. szigorú szabály)** — soha ne utasítson el
CodeQL-riasztást anélkül, hogy az elutasítási megjegyzésben rögzítené a műszaki indoklást:
`won't fix` külső protokollkövetelmény esetén, `used in tests` teszt-fixtúra esetén,
`false positive` pedig olyan tisztítómechanizmus esetén, amelyet a CodeQL nem képes
észlelni (előzmény: `docs/security/ERROR_SANITIZATION.md`).

---

## Teszt-újrapróbálkozási szabályzat (WS5.4, v3.8.49)

Az újrapróbálkozás futtatónként történik, soha nem globálisan — az általános újrapróbálkozás a valódi regressziókat
láthatatlan, időszakos hibákká alakítja:

| Futtató          | Szabályzat                                                                                                                                                          | Indok                                                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` csak CI-ben, `trace: on-first-retry` beállítással                                                                                                      | A böngésző és a hálózat időzítése valóban nem determinisztikus; egyetlen, nyomkövetéssel végzett újrapróbálkozás diagnosztizálható műtermékké alakítja az időszakos hibát |
| Vitest           | NINCS globális újrapróbálkozás. Egy bizonyítottan időszakosan hibás teszt explicit, tesztszintű újrapróbálkozást kap (látható a diffben, felülvizsgálandó a PR-ben) | A karanténlistát a repóban tartja, soha nem átláthatatlanul                                                                                                               |
| node:test (unit) | SOHA nincs újrapróbálkozás                                                                                                                                          | Az időszakosan hibás egységteszt a teszt hibája — javítsd ki, ne futtasd újra szerencsepróbaként                                                                          |

Cél-SLO-k az időszakos hibák telemetriájának elkészülte után (WS5.2/5.3): tesztenként <1%-os időszakos hibaarány
(„azonnal javítandó” küszöb), folyamatonként ≥95%-os sikerességi arány. Iparági referenciaértékek —
a saját méréseink alapján újrakalibrálandók.

## Kiadásszintű racsni-eltérés (WS5.5, v3.8.49)

Amikor egy racsni (fájlméret, komplexitás, eslint-figyelmeztetések) visszalépést mutat a TISZTA kiadási
csúcson — vagyis az összeolvasztások KOMBINÁCIÓJA okozta a visszalépést, és azt egyetlen PR sem reprodukálja
a saját ágán —, a javítás **egyszeri alkalommal, a kiadási ágon a kiadásfelelős feladata**: előnyben részesítendő a kiemelés/refaktorálás; új alapérték csak dokumentált
indoklási bejegyzéssel állítható be. A kombinációs eltérést soha ne hárítsd egy közreműködő PR-jére, és soha ne
állíts be új alapértéket PR-enként (ez elrejti a valódi regressziókat). Először különítsd el az okot: reprodukáld a
hibát a tiszta csúcson egy vizsgálati worktree-ben, mielőtt azt feltételeznéd, hogy a te PR-ed okozta.

## A racsnik csökkenéseinek elkönyvelése — a lefelé mutató irány (#8584)

A racsni csak félig automatikus, ráadásul éppen a rossz fele az. Egy felső korlát **emelése** kézi
JSON-szerkesztés, amely tíz másodpercet vesz igénybe, és ez a leggyorsabb módja egy hibás PR blokkolásának feloldására.
Egy korlát **csökkentéséhez** valakinek futtatnia kell a `--update` kapcsolót, és commitolnia kell az eredményt — a
`bank-ratchet-shrinks` feladat bevezetéséig pedig ezt egyetlen munkafolyamat sem futtatta. A mért következmény
(2026-07-25): 18 befagyasztott fájl már elérte vagy alulmúlta az új fájlokra vonatkozó 800 soros korlátot, a legrosszabb
132-szeres eltéréssel (`src/shared/validation/schemas.ts`, 19 sorhoz 2,523-as korlát tartozik); a
komplexitási plafon `1794 → 2169` értékre nőtt ~37 új alapértékről szóló megjegyzés során, pontosan egyetlen
csökkenéssel (−1); a „szigorítás `--update` használatával a következő ciklusban” szöveget pedig 31-szer írták le, és
egyszer tartották be. Egy korlát, amely túléli az azt indokolttá tevő kódot, észrevétlenül növekedési keretté alakít
minden befejezett felbontást annak számára, aki legközelebb szerkeszti a fájlt.

A `nightly-release-green.yml` → **`bank-ratchet-shrinks`** feladat lezárja ezt a hurkot:

|            |                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| Futás      | `schedule` (naponta 3×) + `workflow_dispatch` — szándékosan **nem** `push`                                             |
| Mérés      | a legmagasabb `release/vX.Y.Z`, ugyanazzal a feloldási + injektálási védelemmel, mint a `release-green`                |
| Írás       | `check:file-size --update` és `check:complexity-ratchets --update` (felépítésükből adódóan mindkettő csak csökkenthet) |
| Ellenőrzés | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                               |
| Szállítás  | egyetlen, mindig naprakész PR a kiadási ágra — kényszerítetten frissítve, kéretlen PR-ek halmozása nélkül              |

Az elkönyvelés kötegelve, nem pedig minden push alkalmával történik, mert nincs késleltetési követelménye (a 8 órán
belül elkönyvelt csökkenés megfelelő), míg egy összeolvasztásonkénti futtatás az összeolvasztási kampányok során
ismételten újraépítené a PR-ágat, és minden alkalommal egy teljes ESLint-vizsgálat költségével járna. Az észlelés továbbra is
push esetén történik (`release-green`); csak az elkönyvelés kötegelt.

### A biztonsági ellenőrző

A feladat felügyelet nélkül írja az alapértékeket, ezért a `verify-ratchet-bank.mjs` teszi ezt
elfogadhatóvá. Összehasonlítja a `--update` utáni fát a `HEAD` állapotával, és **még bármilyen commit létrejötte
előtt megszakítja a feladatot** — így nem nyit PR-t —, hacsak nem minden módosítás az alábbiak egyike:

- egy `frozen` / `testFrozen` numerikus bejegyzés **csökkentése** vagy **eltávolítása**
- `complexity-baseline.json` → `count` **csökkentése**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **csökkentése**

Minden más hibát eredményez: egy szám növelése, bejegyzés hozzáadása, a `cap`/`testCap` módosítása vagy
egy `_rebaseline_*` megjegyzés törlése/átírása (ezek a megjegyzések képezik az egyes plafonok indoklásának
auditnaplóját, és ugyanabban a `frozen` objektumban találhatók, mint a fájlbejegyzések).
Egy korlát emelésére képes bot egyértelműen rosszabb lenne a jelenlegi helyzetnél. Regresszióvédelmi teszt:
`tests/unit/verify-ratchet-bank.test.ts`.

A feladat soha nem végez push műveletet a `release/*` ágakra — a PR-t ember olvasztja össze, így egy hibás mérés
nem kerülhet be felülvizsgálat nélkül.

## Engedélyezési lista szabályzata

Minden olyan ellenőrzési kapu, amely már meglévő szabálysértések miatt nem bukhat el, rögzített engedélyezési listát használ
(pl. `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). A szabályzat:

**Javítsd ki a kiváltó okot; az engedélyezési listát csak akkor használd, ha a szabálysértés már korábban is fennállt, és
ugyanabban a PR-ban nem javítható.**

Amikor bejegyzést adsz egy engedélyezési listához:

1. Mellékelj egy megjegyzést az indoklással.
2. Hivatkozz a nyomon követési hibajegyre (pl. `// #3498 — 2. fázisú funkció, még nincs implementálva`).
3. Távolítsd el a bejegyzést ugyanabban a PR-ban, amely kijavítja a szabálysértést — az elavult bejegyzés, amely már
   nem nyom el aktív szabálysértést, önmagában is hiba (a 6A.3 elavult kikényszerítési ellenőrzése a megvalósítása után
   elbuktatja a kaput egy árva engedélyezési lista-bejegyzés miatt).

**Ne** adj hozzá engedélyezési lista-bejegyzéseket csak azért, hogy a tesztek gyorsabban átmenjenek. Egy zöld kapu növekvő
engedélyezési listával hamis minőségérzetet kelt.

### Ha egy kapu elbukik a PR-odon

1. **Olvasd el figyelmesen a kapu kimenetét** — pontosan megmondja, melyik fájl vagy szimbólum sértette meg
   a szabályt.
2. **Javítsd ki a szabálysértést** — a legtöbb kapu determinisztikus fájlrendszer-ellenőrzést végez, amely azonnal átmegy,
   amint a kód helyes.
3. **Ha a szabálysértés már korábban is fennállt** (vagyis nem te vezetted be, de a kapu most már lefedi): adj hozzá egy engedélyezési lista-bejegyzést indokló megjegyzéssel és egy nyomon követési hibajeggyel.
4. **Ha a kapu racsnis elven működik** (lefedettség, ESLint-figyelmeztetések, duplikáció, komplexitás):
   a módosításod rontott a mérőszámon. Javítsd ki a kiváltó problémát, vagy (ritkán) futtasd az
   `npm run quality:ratchet -- --update` parancsot, ha a módosítás szándékos, és a mérőszám romlása
   elfogadható — de dokumentáld ennek okát a PR leírásában.
5. **Tájékoztató kapuk** (`continue-on-error: true`) csak információs célúak — nem akadályozzák
   az összevonást, de megjelennek a CI összegzésében. Ettől függetlenül javítsd ki őket.

---

## Új kapu hozzáadása

1. Hozd létre a `scripts/check/check-<name>.mjs` (vagy `.ts`) fájlt. A szabályzati kapuk 0/1 kilépési kóddal lépnek ki.
   A racsnis jellegű kapuk a `collect-metrics.mjs` segítségével mérőszámot írnak a `quality-metrics.json` fájlba.
2. Add hozzá a `"check:<name>": "node scripts/check/check-<name>.mjs"` bejegyzést a `package.json` fájlhoz.
3. Kösd be a `.github/workflows/ci.yml` megfelelő feladatába
   (szabályzat → `lint` vagy `docs-sync-strict`; racsni → `quality-gate`).
4. Ha rendelkezik engedélyezési listával, alkalmazd rá a `reportStaleEntries()` függvényt a
   `scripts/check/lib/allowlist.mjs` fájlból, hogy az elavult bejegyzések automatikusan észlelhetők legyenek.
5. Írj egy tesztet a `tests/unit/build/` könyvtárban, amely lefedi a kapu észlelési logikáját.
6. Frissítsd ezt a dokumentumot (adj hozzá egy sort a megfelelő feladattáblázathoz).

---

## Ügynökeszközök: LSP a munkafolyamatban (választható)

A CI-kapuk mellett az OmniRoute egy **választható** `agent-lsp` vázat is biztosít
(egy projektszintű `.mcp.json`, Fase 7 15. feladat). Hozd létre a `.mcp.json` fájlt,
hogy TypeScript nyelvi kiszolgálót tegyél elérhetővé a kódoló ügynökök számára, így azok a szimbólumokat /
diagnosztikát **a kód megírása előtt** feloldhatják — ez a `typecheck:core` „fordítás az állítás előtt” elvű kiegészítője,
amely már a forrásnál csökkenti a „kitalált szimbólumokból” eredő hibákat. Szándékosan
nem töltődik be automatikusan (te választod ki és ellenőrzöd az MCP↔LSP hidat); egy hibás bejegyzés csak
kapcsolódási hibát naplóz, és soha nem szakítja meg a munkameneteket.

---

## Racionalizálási hátralék (ROI-felülvizsgálat — 9. fázis, 3. hullám)

Ezt a leltárt 2026-06-17-én összevetettük a `ci.yml` tartalmával (az előző verzióból kimaradt az
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Az egyeztetett készlet ROI-felülvizsgálata
a következő racionalizálási jelölteket azonosította. **Az összevonások mechanikus CI-módosítások;
az átállítások/eltávolítások az üzemeltető számára fenntartott szabályzati döntések.** Az alábbiak közül
még semmi sem lett alkalmazva.

**Fent szintén nem dokumentált** (tanácsadó jellegű, alacsony jelértékű): a `docs-lint` feladat
(markdownlint + Vale, a teljes feladaton `continue-on-error`), valamint az önálló ellenőrző munkafolyamatok:
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. A `semgrepFindings: 0` szerepel a
`quality-baseline.json` fájlban, de nincs blokkoló racsnihoz kötve a `ci.yml` fájlban — a metrika
jelenleg árva.

### Összevonás / deduplikáció (mechanikus, alacsonyabb kockázat)

Minden jelöltet ellenőriztünk az éles kapuállapot alapján 2026-06-17-én (bízz, de ellenőrizd);
több „kézenfekvő” összevonásról kiderült, hogy rejtett adósságot takar, ezért **nem** alkalmazhatók közvetlenül.

- **A `check:docs-sync` kétszer fut** — önállóan a `lint` feladatban, majd ismét a `check:docs-all` (`docs-sync-strict`) részeként és a husky pre-commit hookban. ✅ **KÉSZ** — az önálló `lint`-meghívás eltávolítva.
- **CVE-ellenőrzés** — ❌ **NEM vonható össze tisztán.** Az `audit:deps` minden magas/kritikus CVE esetén hibával leáll; a `check:vuln-ratchet` (osv) csak az alapértékhez viszonyított _regresszió_ esetén áll le hibával (jelenleg 1 MODERATE). Eltérő szemantika — az `audit:deps` eltávolításával elveszne az abszolút magas/kritikus kapu. Mindkettőt meg kell tartani.
- **Ciklusészlelés** — ✅ **KÉSZ** (#15159 G-01/G-02). A korábbi szöveg a `check:cycles` ellenőrzést „zöld, gondosan összeállított” kapunak nevezte, és azzal indokolta blokkolóként való megtartását, hogy a `check:circular-deps` (dpdm) 91 ciklust jelzett. Ez a zöld állapot **hamis zöld** volt: a `check:cycles` 5 alkönyvtárat (450 fájlt) vizsgált, csak a statikus `import|export … from` mintára illeszkedett, és minden `@/` és `@omniroute/open-sse/` specifikátort eldobott, így nem láthatta a repót uraló dinamikus importálási és aliasciklusokat. Javítva: a kapu most bejárja a `src` + `open-sse` könyvtárakat (5023 fájl), a TypeScript AST-ből gyűjti a specifikátorokat (így az `import("…")` számít, a típuspozícióban lévő `typeof import("…")` viszont nem), és feloldja a tsconfig `paths` beállításait. **14** ciklust talál, nem 0-t. Mivel 14 már meglévő ciklus nem javítható ki egy kapu-PR-ben, a `check:cycles` mostantól **racsni** (`--ratchet`, a felső korlát `metrics.cycles.value = 14` a `quality-baseline.json` fájlban, `direction: down`) — minden _regressziót_ blokkol, és az érték csak csökkenhet. A CI az `npm run check:cycles:ratchet` parancsot futtatja. A fokozatos leépítés az **A-01** részeként történik. A `check:circular-deps` (dpdm) tanácsadó jelleggel megmarad szélesebb körű másodvéleményként.
- **Komplexitás** — ✅ **KÉSZ** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): egyetlen ESLint-bejárás, ruleId szerinti számlálással, így a ciklomatikus+max-lines és a kognitív alapértékek függetlenek maradnak; az egyedi `check:complexity` / `check:cognitive-complexity` ellenőrzések megmaradnak a helyi `--update` használatához.
- **`/api` hallucináció elleni védelem** — ✅ **KÉSZ** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): a `src/app/api` egyetlen fájlrendszer-leltározása; az openapi-routes + docs-symbols továbbra is egymástól függetlenül jelent; az egyedi ellenőrzések megmaradnak helyi futtatáshoz.
- **A `check:node-runtime` 11 feladatban fut** — ⚠️ **alacsony ROI.** Mindegyik külön futtatókörnyezet, az ellenőrzés pedig <1 másodperc; a teljes megtakarítás ~10 másodperc lenne, miközben elveszne egy olcsó, feladatonkénti védőkorlát. Nem éri meg a vele járó változtatás.
- **`typecheck:noimplicit:core` a CI lintelésében** — ✅ **eltávolítva a lint feladatból** (tanácsadó jellegű `continue-on-error` volt); a blokkoló típusfelületet a `typecheck:core` + `check:type-coverage` biztosítja. A helyi szkript megmaradt.

### Átállítás / döntés (üzemeltetői szabályzat)

- `check:openapi-security-tiers` (tanácsadó jellegű) — ❌ **NEM állítható át tisztán.** 0-s kilépési kódot ad, de figyelmeztet arra, hogy a `LOCAL_ONLY_API_PREFIXES` alá tartozó több `traffic-inspector` útvonalról hiányzik az `x-loopback-only: true` annotáció. A kikényszerítéséhez először hozzá kell adni ezeket az annotációkat az `openapi.yaml` fájlhoz.
- `typecheck:noimplicit:core` (tanácsadó jellegű) — nagyrészt lefedi a blokkoló `check:type-coverage` racsni. Állítsa át racsnivá, vagy távolítsa el a redundáns második `tsc` futtatást.
- `test:vitest:ui` (most **blokkoló**) — a már meglévő hibák kifejezetten ki vannak zárva a `vitest.config.ts` fájlban `// #8618` nyomonkövetési megjegyzésekkel; az új hibák meghiúsítják a feladatot.
- `check:secrets` (gitleaks, blokkoló racsni, 3 dokumentált téves pozitívnál befagyasztva) — tegye engedélyezési listára a 3 találatot a 0 eléréséhez, vagy minősítse vissza tanácsadó jellegűvé. Átfedésben van a GitHub natív titokellenőrzésével és a `check:public-creds` ellenőrzéssel.
- `check:pr-evidence` (blokkoló, grep segítségével vizsgálja a PR-törzs prózáját) — magas a téves pozitív eredmények kockázata; eltávolítása gyengítené a 18. szigorú szabály kikényszerítését, így ez valódi szabályzati döntés.
- `semgrep` (tanácsadó jellegű, önálló) — az OWASP-családok tekintetében átfedésben van a CodeQL-lel; kösse az alapértékét racsnihoz, vagy távolítsa el.

---

## Kapcsolódó dokumentáció

- Ellátási lánc (eredetigazolás, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — kulcskészlet-paritási kapu

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, `i18n-ui-coverage` feladat).
Összehasonlítja minden `src/i18n/messages/<locale>.json` levélkulcsainak készletét az `en.json`
kulcsaival, és hibát jelez bármely hiányzó vagy többletkulcs esetén, függetlenül attól, hogy a kulcsot
mikor adták hozzá. A `__MISSING__:` helyőrzők jelen lévőnek számítanak (a tartalmuk az aránykapu
hatáskörébe tartozik). Ez a két diffalapú/százalékos kapu abszolút kiegészítője: a
`check-ui-keys-coverage` területi beállításonként 80 %-os alsó korlátot követel meg (a ~13 000-ből
43 hiányzó kulcs még mindig 99,7 %-ot mutat), a `check-new-key-coverage` pedig csak azokat a
kulcsokat vizsgálja, amelyeket egy PR ad hozzá az `en.json` fájlhoz. Egy területi köteget az adott
nap `en.json` fájljából állítanak elő, amikor a hozzá tartozó ágat létrehozzák, majd napokon át
fordítják, miközben az alapágon továbbra is új kulcsok jelennek meg; maga a köteg PR-je nem ad hozzá
kulcsot, ezért egyik rokon kapu sem jelzett, amikor az 1. köteg (#13044) kilenc területi beállításban
43 kulccsal kevesebbel, a 2. köteg (#13660) pedig nyolcban 10 kulccsal kevesebbel került be
(2026-09-15). A hibát a
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` paranccsal javítsa; egy
`extra` levélkulcs azt jelenti, hogy a forrásból eltávolították — törölje a területi beállításból.
A `--warn` hibajelzés nélkül készít jelentést. A `--catalog=cli` ugyanazt az összehasonlítást futtatja
a `bin/cli/locales` tartalmán (`npm run i18n:check-keys:cli`); mindkét lépés az
`i18n-ui-coverage` feladatban található.

#### `check-new-key-coverage` — új kulcsokra vonatkozó i18n-kapu

A `check-ui-value-drift` rokonkapuja. Az utóbbi azt észleli, ha egy angol értéket **átírtak**,
miközben a fordításai változatlanok maradtak; ez pedig azt észleli, ha egy angol kulcsot
**hozzáadtak**, de egyes területi beállítások soha nem kapták meg.

A `check-ui-keys-coverage` nem képes észlelni ezt az esetet: területi beállításonként százalékos
alsó korlátot követel meg, és a ~13 000-ből tizenegy hiányzó kulcs mellett a lefedettség még mindig
99,9%. A nyelvenkénti százalékos érték nem képes kifejezni, hogy „ez a funkció fordítás nélkül
jelent meg” — egy teljes funkció kerülhet szöveg nélkül egy új területi beállításba úgy, hogy a
számérték meg sem változik.

Az itt rögzített incidens: az Orchestration Canvas 3. fázisának tizenegy kulcsát lefordították az
akkor létező 42 területi beállításra. Órákkal később az uniós nyelvi köteg (#13044) 51-re növelte a
tárolóban lévő területi beállítások számát, és a kilenc új (`el`, `et`, `ga`, `hr`, `lt`, `lv`,
`mt`, `sl`, `sr`) soha nem kapta meg ezeket. A `deepMergeFallback` egy hiányzó kulcs helyett az
angol szöveget használja, így a hiba nem üres, hanem lefordítatlan felhasználói felületként
jelentkezett — valós problémaként, amely kialakításából adódóan észrevétlen maradt.

Rokonkapujához hasonlóan ez is **différzékeny**: az egyesítési alap angol szövegét hasonlítja össze
a munkafával, így a már korábban meglévő hiányosságok változatlanok maradnak, és a kapu
bekapcsolásához nem volt szükség migrációra.

**Egy `__MISSING__:<english>` jelölő nem elégíti ki a feltételt (2026-09-17 óta).** Korábban ez volt
a dokumentált halasztási módszer — futásidőben a rendszer visszaáll a helyes angol szövegre —, amíg
2026-09-16-án nyolc funkció-PR 61 kulcsot adott hozzá, és fordítás helyett mind a 65 területi
beállításban elhelyezte a jelölőt: ez a kapu mindegyiket elfogadta, semmi sem blokkolta a PR-eket,
majd a kiadási ág csúcsán mindenkinél meghiúsult a valódi fordítások arányát blokkoló kapu
(pt-BR 3,2 % > 2,5 % + 0,5). A jelölő mostantól hiányzó fordításnak minősül. A hibát a
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40`
paranccsal javítsa, vagy az összes területi beállítást párhuzamosan az
`npm run i18n:translate-new-keys` használatával (`scripts/i18n/translate-new-keys.sh`,
leválasztott állapotban is biztonságos, és az `OMNIROUTE_TRANSLATION_*` környezeti változók nélkül
nem hajlandó elindulni). Azoknak a kulcsoknak, amelyeknek angolul kell maradniuk (rögzített
termék-, motor- vagy jelzőnevek), a `scripts/i18n/untranslatable-keys.json` fájlban van a helyük,
soha nem egy jelölő mögött. A `vi` teljesen tiltja a jelölőket
(`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — félretett tesztek kapuja

A `vitest.config.ts` `exclude` listáján szereplő fájl olyan teszt, amely nem fut le, miközben a
fát olvasók számára úgy tűnik, mintha lefedettséget biztosítana. Hatvankét fájl halmozódott fel a
`// #8618 — pre-existing failure; remove this exclusion when fixed` megjegyzés mögött. A #8618-as
hibajegyet 2026-08-11-én lezárták, miközben az általa nyomon követett lista 45-ről 62 bejegyzésre
nőtt, és minden új bejegyzés egy már lezárt hibajegyre mutató megjegyzést örökölt. Amikor a listát
végül fájlonként felmérték (#13204), **a 62-ből 51 a forrás bármilyen módosítása nélkül sikeresen
lefutott az aktuális fán**.

A kapu megköveteli, hogy minden valódi fájlra feloldható kizárás (a) megnevezzen egy nyomon követési
hibajegyet, és (b) szerepeljen a `config/quality/vitest-exclusions.json` fájlban a mért állapotával
együtt, így egy kizárás hozzáadása egy erre szolgáló fájl áttekinthető diffje lesz, nem pedig egy
újabb sor egy 60 bejegyzéses tömbben. Szándékosan nem futtatja újra a kizárt teszteket — ez
körülbelül 10 percet vesz igénybe, és egy időszakos feladathoz tartozik; a leltár rögzíti, hogy
mikor mérték fel őket legutóbb.
