# Quality Gates Reference (Latviešu)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Šis dokuments ir autoritatīvā atsauce visām OmniRoute CI kvalitātes kontrolēm.
Tajā ir aprakstīta katra kontrole, ko tā validē, kurā CI uzdevumā tā tiek izpildīta, vai tā izmanto
pakāpeniski paaugstināmu bāzes līmeni vai izpildes/neizpildes politiku un vai tā bloķē būvējumu vai ir tikai informatīva.

Īsu kopsavilkumu un atļauto elementu saraksta politiku skatiet `AGENTS.md` sadaļā
"Quality Gates & Ratchets". Šīs pašas sistēmas kritisko novērtējumu, brieduma klasifikāciju un no rīkiem neatkarīgu
replikācijas plānu skatiet
[Quality Gate Playbook](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Vārtu inventarizācija un izpildes profili

### Kandidātu uzņemšana

Katra CI un Quality Gates darbplūsma rada stabilu spriedumu: `Gate / CI` un `Gate / Quality`. Viņu versijās uzņemšanas politikā ir uzskaitīti visi iepriekšējie darbi pēc nepieciešamības vai ieteikumi. Piemērojamam obligātajam darbam ir jābūt veiksmīgam: trūkstošo, atcelto, izlaisto, gaidošo un nezināmo rezultātu nevar noteikt PASS. Derīga klasifikācija tikai dokumentiem vai tikai katalogam var padarīt koda joslu nepiemērojamu; projekts PR nav pieņemts kandidāts. `hotfix` etiķete neatceļ pierādījumus.

Abas darbplūsmas aptver PRs main/release zaros, nospiež uz `main`, manuālu nosūtīšanu un grupu sapludināšanu. Nosūtīšanas, nosūtīšanas un sapludināšanas grupa izpilda pilnu atlasi. Nospiežot uz `release/**` tās nesāk (2026-10-18): katra izmaiņa jau palaida matricu savā PR, un apvienotā kombinācija ir Release-Green darbs (`docs/ops/RUNNER_BOX.md` → Hosted lane). Forks un sapludināšanas grupas izmanto mitinātos skrējējus darbiem, kuros citādi tiek atlasīti pašmitinātie skrējēji; pirms izlaišanas ir jāpārbauda pietiekama mitinātā jauda.

Katrs JSON kvīts identificē izņemto SHA, darbplūsmas izpildi un mēģinājumu. CLI noraida checkout/event SHA neatbilstību. Darbplūsmas testi saista dalību politikā ar sprieduma darba `needs` sarakstu, tāpēc jauna vai noņemta josla nevar klusībā pazust. Kvītis attiecas uz viņu pašu darbplūsmu, nevis uz publicēšanu, izvietošanu vai esošā konsultatīvā skenera iekšējiem elementiem. Abu čeku nosaukumu aktivizēšana filiāles noteikumos ir atsevišķa administratīva izmaiņa; šo darbu pievienošana pati par sevi neaizsargā filiāli.

### Statiskās skenēšanas inventārs

Versionētais npm-alias krājums un statiskās skenēšanas dalība ir pieejama `config/quality/gate-manifest.json`. Palaidiet `npm run check:gate-manifest`, lai pārbaudītu skriptu nosaukumus un precīzas komandas pret `package.json`; papildinājumi, noņemšana un komandu novirzīšana neizdodas gan vietējā āķa, gan izmaiņu klasifikācijas uzdevumos programmā CI. Pseidonīms nav darbplūsmas uzdevums, matricas gadījums vai testa gadījums: šos skaitļus nedrīkst uzrādīt kā savstarpēji aizstājamus.

Izmantojiet `npm run quality:scan -- --list` vai `npm run quality:scan:fast -- --list` lai pārbaudītu atlasītos aizstājvārdus, tos neizpildot. Runner izsauc npm ievades punktu, tāpēc tā izpildlaiks (tostarp Bun ja tas ir konfigurēts) tiek saglabāts. Manifesta ierakstu aizstājvārdi ārpus šiem profiliem ir atsevišķi izsaukti, un uzturēšanas komandas ir aizliegtas tikai lasāmos skenēšanas profilos.

Šie profili aptver tikai statisko skenēšanu. Tie nesertificē produktu testus, pārklājumu, iepakojumu, ārējās pārbaudes vai kandidāta pilnīgu izlaišanas apstiprinājumu. Darbplūsmas uzņemšana izmanto saistītos `config/quality/admission-policy.json` un `scripts/quality/admission-verdict.mjs`. Izlaiduma novērotāju profili paliek atsevišķi; neatkarīgi pārbaudīt savus piemērojamos čekus un kvītis. Tālāk sniegtais prozas saraksts ir atsauce, nevis pierādījums tam, ka vārti patiešām skrēja.

Skripti atrodas zem `scripts/check/` (politikas vārti) un `scripts/quality/` (sprūdrata dzinēja). CI patiesības avots ir `.github/workflows/ci.yml`.

### Atlaidiet PR ātro ceļu (`quality.yml`)

`.github/workflows/quality.yml` papildina CI uz main/release PRs, pārsūta uz `main`, nosūta un apvieno grupas. PRs izmantojiet ceļa filtrētas ātrās pārbaudes. Tika noņemts pastāvīgi atspējots dublikāts; reālās build/package/boot pārbaudes paliek CI.

| Darbs                                            | Darbības joma                                                                                                                                                                                                        | Bloķēšana            |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `Docs Gates (fast-path)`                         | Docs/code PRs; API docs refs un docs-all                                                                                                                                                                             | Jā                   |
| `Fast Quality Gates`                             | Kods PRs; statiskās pārbaudes, tipa pārbaude, paneļa tipa pārbaude, ietekmēto vienību testi                                                                                                                          | Jā                   |
| `Forgotten sibling tests`                        | Kods PRs; mainīti moduļi, kas izsekot statiskiem patērētājiem un kandidātu brāļu un māsu testiem; mucas un dinamiskā importa ceļi tiek ziņoti kā konsultatīva diagnostika ar atsaucēm uz atļauju saraksta izņēmumiem | **Konsultatīvs**     |
| `Vitest (fast-path)`                             | Kods PRs; fast vitest suite                                                                                                                                                                                          | Jā                   |
| `Unit Tests fast-path`                           | Kods PRs; 4-shard vienības komplekts                                                                                                                                                                                 | Jā                   |
| `No new ESLint warnings`                         | Kods PRs; slāpēšanas izturīgs pret plūksnām                                                                                                                                                                          | Jā, ieskaitot dakšas |
| `Merge integrity (changelog + generated skills)` | Bez melnraksta PRs; izmaiņu žurnāls un ģenerētā prasmju sinhronizācija                                                                                                                                               | Jā, ieskaitot dakšas |

#### Aizmirsta brāļu un māsu pārbaužu atskaite

`npm run check:forgotten-sibling-tests` atkārtoti izmanto importēšanas atrisinātāju aiz testa ietekmes kartes. Par katru mainīto ražošanas moduli tas ziņo par deterministiskām `changed module/symbol -> static consumer -> candidate sibling test` ķēdēm, ja kandidāta tests nav iekļauts pull-request diff. Markdown kopsavilkums un JSON rezultāts tiek saglabāti kā `forgotten-sibling-tests` darbplūsmas artefakts kalibrēšanai pirms jebkādas bloķēšanas izlaišanas.

Mucu reeksports un dinamiskais imports ir tikai izšķirtspējas diagnostika; tie nekad nerada bloķējošu atradumu. Pārskatītie izņēmumi dzīvo šeit: `config/quality/forgotten-sibling-allowlist.json`. Katrā ierakstā ir jānosauc patērētāja un kandidāta tests, jāsniedz konkrēts pamatojums un jāsaista GitHub problēma vai izvilkšanas pieprasījums. Nepareizi veidotus ierakstus neizdodas aizvērt. Izņēmumi nevar apspiest dzēstu kandidāta testu vai atšķirību, kas pievieno `.skip`/`.todo`; apgalvojumu vājināšanās un cita maskēšana paliek neatkarīgi bloķējošajiem `check:test-masking` vārtiem.

### Darbs: `lint`

Darbojas katrā PR līdz `main`. Neveiksmes gadījumā bloki tiek apvienoti.

| Skripts (`npm run ...`)           | Validē                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Bloķēšana                                    |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `check:node-runtime`              | Node.js versija ir atbalstītajā diapazonā                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Jā                                           |
| `check:cycles`                    | Apļveida importēšana visā `src/` + `open-sse/` (pamatojoties uz AST, tsconfig `paths` atrisināta). Bare iziet no 1 ikreiz, kad pastāv kāds cikls (neatteices aizvērts kopš #15281) un uzskaita SCCs. `check:cycles:ratchet` (kas darbojas CI ) bloķē, ja skaits pārsniedz `metrics.cycles` griestus `quality-baseline.json` — pašlaik 14, `direction: down`, tāpēc tas var tikai krist (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Jā (sprūdrats)                               |
| `check:boundary`                  | `open-sse → src` savienojums: unikāls failu imports no programmas uz programmu (`scripts/quality/measure-boundary.mjs`; malu saraksts ir v4 core/module-split labošanas uzkrājums). Bare = konsultatīvais ziņojums (tāds pats kā `quality:boundary`). `check:boundary:ratchet` (kas darbojas CI, arī `quality.yml` ātro vārtu sprūdrata cilpā) bloķē, ja skaits pārsniedz `metrics.boundaryOpenSseToSrc` griestus `quality-baseline.json` — kas iesēts pie izmērītā 771, `direction: down`; `--update` to tikai pazemina; bāzes relatīvais uz PRs (`--base-ref`, skatīt zemāk)                                                                                                                                                                                                                                                                                                                                                                            | Jā (sprūdrats)                               |
| `check:route-validation:t06`      | Zod shēmas ir pieejamas visos maršrutos (6. līmeņa politika)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Jā                                           |
| `check:any-budget:t11`            | `@ts-expect-error // any` skaits nepārsniedz budžetu (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Jā                                           |
| `check:provider-consistency`      | Katram `providers.ts` pakalpojumu sniedzējam ir atbilstošs ieraksts `providerRegistry.ts` (un otrādi, atļauju sarakstā).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Jā                                           |
| `check:model-lifecycle`           | Trīs manuāli uzturētās maršrutēšanas tabulas atbilst reģistrētā dzīves cikla momentuzņēmumam (#11503): `FITNESS_TABLE` (`taskFitness.ts`) nenorāda, ka `REGISTRY` var maršrutēt; katrs `BUILT_IN_ALIASES` mērķis ir iekļauts `REGISTRY` un nav iekļauts novecojušā ID momentuzņēmumā; katrs atvaļinātais ID, kas joprojām ir `REGISTRY`, tiek pārsūtīts vai norādīts `allowedRetiredInCatalog`; un neviens `DEFAULT_DEGRADATION_MAP` avots vai mērķis šajā momentuzņēmumā nešķiet pārtraukts. Tas nepierāda, ka modeli pašlaik apkalpo tiešraide augštecē. Bezsaistes — salīdzina ar `config/quality/model-lifecycle.json`, kas ir manuāli atsvaidzināts ar `npm run quality:refresh-model-lifecycle` (tīkls; nav pievienots CI). `allowedRetiredInCatalog` ir sadedzināts sprūdrats: pievienojiet ierakstu tikai tad, ja ir izsekošanas problēma.                                                                                                        | Jā                                           |
| `check:fetch-targets`             | Katrs `fetch("/api/...")` klienta puses `src/` atrisina īstu `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Jā                                           |
| `check:deps`                      | Visi `npm install` -able deps katrā `package.json` repo ir `dependency-allowlist.json`; jaunas atspraustas vai piespraustas paketes atzīmētas ar karodziņu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Jā                                           |
| `audit:deps`                      | `npm audit` (saknes + elektrons) — nav high/critical ieteikumu (pārklājas osv `check:vuln-ratchet`; skatiet Racionalizācijas atpalicību)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Jā                                           |
| `check:lockfile`                  | `package-lock.json` integrity — https reģistrs, integritātes jaucējkodoli, nav saimniekdatora ignorēšanas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Jā                                           |
| `check:licenses`                  | SPDX licences atļauju saraksts ražošanas atkarībām                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Jā                                           |
| `check:tracked-artifacts`         | Nav būvēšanas artefaktu/izmantotas `node_modules` simsaites (darba arī tiek veikta iepriekšēja apstiprināšana; pirms nospiešana ir apzināti viegla — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Jā                                           |
| `check:ai-attribution`            | Nav AI/bot `Co-Authored-By` piekabes vai AI paaudzes kājenes PR saistībās, virsraksts vai pamatteksts — cietais noteikums Nr. 16 ( `quality.yml` ātro vārtu cilpā PR→ `release/**` — nolasa notikuma lietderīgo slodzi, `ci.yml` -op off PRs — PR→ `main` arī husky `commit-msg` hook atļauts;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `check:vitest-exclusions`         | Katrs Vitest izņēmums nosauc izsekošanas problēmu un tiek parādīts `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Jā                                           |
| `check:file-size`                 | Avota faili (`.ts`/`.tsx` `src/`, `open-sse/`, `electron/`, `bin/`) paliek `cap` un testa faili (`*.test.ts(x)`) `testCap`; `file-size-baseline.json` (`frozen` / `testFrozen`) iesaldētie faili nedrīkst pārsniegt ierakstīto lielumu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Jā                                           |
| `check:error-helper`              | Kļūdu atbildes executors/handlers izmanto `buildErrorBody()` / `sanitizeErrorMessage()` (cietais noteikums Nr. 12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Jā                                           |
| `check:migration-numbering`       | Migrācijas SQL faili ir secīgi numurēti, bez atstarpēm vai dublikātiem                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Jā                                           |
| `check:public-creds`              | Bez burtiskām OAuth `client_id`/`client_secret` vai Firebase tīmekļa atslēgām ārpus `publicCreds.ts` (cietais noteikums Nr. 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Jā                                           |
| `check:db-rules`                  | Nav neapstrādāta SQL ārpus `src/lib/db/` moduļiem; bez mucu importa no `localDb.ts` (Cietie noteikumi Nr. 2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Jā                                           |
| `check:known-symbols`             | Pakalpojumu sniedzēju izpildītāji, maršrutēšanas stratēģijas un tulkotāji, kas reģistrēti to nosūtīšanas tabulās, sakrīt ar diskā esošajiem failiem — nav bāreņu vai nedeklarētu simbolu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Jā                                           |
| `check:route-guard-membership`    | Katrs maršruts, kas rada bērnu procesu, tiek klasificēts pēc `isLocalOnlyPath()` (stingri noteikumi Nr. 15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Jā                                           |
| `check:test-discovery`            | Katru repo `*.test.ts` / `*.spec.ts` failu savāc vismaz viens testa dalībnieks (ratchet: bāreņu saraksts `test-discovery-baseline.json` var tikai sarukt)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Jā                                           |
| `check:test-tla-order`            | Neviens `node:test` fails zem `tests/unit` nereģistrē testu, sasniedz augstākā līmeņa `await`, pēc tam reģistrē vairāk (#18045; sprūdrata: `test-tla-order-allowlist.json` var tikai sarukt)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Jā                                           |
| `check:agent-skills-sync`         | Ģenerētie aģentu prasmju artefakti atbilst to avota katalogam (bez novirzes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `check:provider-asset-provenance` | Pakalpojumu sniedzējam logos/assets ir reģistrēts izcelsmes ieraksts                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `lint:json`                       | JSON konfigurācijas faili tiek parsēti un atbilst repo lint noteikumiem                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `typecheck:core`                  | TypeScript kompilācija bez kļūdām (tikai ieteikuma brīdinājumi)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Jā                                           |
| `typecheck:noimplicit:core`       | Stingrs `noImplicitAny` — uz nākotni vērsts; daudzām jau esošām zvanu vietnēm joprojām ir nepieciešamas anotācijas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | **Konsultatīvs** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` ietverts `src/app/(dashboard)/**` (#7033) — `typecheck:core` atlasītajā 27 failu atļaušanas sarakstā nav iekļauts neviens informācijas panelis TSX, un arī `next build` nekad to nepārbauda (`next.config.mjs` iestata `ignoreBuildErrors: true`), tāpēc bezrecepšu identifikatoru regresijas bija neredzamas (#6902 līdz5)/#6902 CI. Atšķirības pret iesaldētu per-file/per-TS-code skaitīšanas bāzes līniju (`config/quality/dashboard-typecheck-baseline.json`, tāds pats novecojušais izpildes modelis kā `check:known-symbols`) — tikai NEW kļūdas, kas pārsniedz bāzes līniju skaitu, neizdodas nodrošināt vārtus; nospiediet uz leju ar `--update`, kad ir novērsta jau esošā kļūda.                                                                                                                                                                                                                                                         | Jā                                           |
| `check:build-typecheck`           | Visas lietotnes ražošanas veida pārbaude `tsconfig.build.json` (`src`, `open-sse`, `packages`, `bin`, `scripts`, `electron/**/*.d.ts`), virsmas `typecheck:core` 27 failu atļaušanas saraksts un informācijas paneļa vārti neaptver. Atšķirības pret `config/quality/build-typecheck-baseline.json`; jauns vai paaugstināts per (fails, kods) skaits neizdodas, mazāks skaits prasa sprūdratu. `--update` atsakās, kamēr izpildē ir jauns vai paaugstināts pāris, ja vien `--force-regressions` nav nokārtots, un noraida tikko apklusināto failu, ja vien `--force-nocheck` nav izturēts, tāpēc bāzes līnijas paplašināšana, lai iegūtu zaļu krāsu, un pastāvīga klusuma piešķiršana ir divas atsevišķas apzinātas darbības. Pliks `--force` tiek noraidīts. Skenē arī `@ts-nocheck` veidošanas tvērumu pret `config/quality/ts-nocheck-baseline.json`, jo fails, kas to izmanto, vispār neziņo par diagnostiku un citādi būtu neredzams visiem vārtiem. | Jā                                           |

#### Divas tipa pārbaudes programmas atbild atšķirīgi

`typecheck:core` un `check:build-typecheck` apkopo dažādas programmas ar dažādām opcijām, un viens un tas pats fails var būt tīrs vienā un pilns ar kļūdām otrā.

`tsconfig.build.json` iestata `"strict": false`, tāpēc `noImplicitAny` ir izslēgts. Galvenā konfigurācija apkopo atlasītu 27 failu atļaušanas sarakstu ar stingrākām opcijām un seko katra ieraksta importēšanas diagrammai, tāpēc faili, kas nekad netiek rādīti veidošanas programmā, joprojām tiek pārbaudīti.

Sekas ir svarīgas, vērtējot, vai fails ir drukāts:** nulles diagnostika zem `check:build-typecheck` nenozīmē nulli** . Izņemot `@ts-nocheck` no 26 failiem, 23 no tiem tika parādīti tīri būvēšanas programmā; sešpadsmit no tiem atklāja aptuveni 120 netiešas kļūdas stingrajā. Pirms faila izsaukšanas pārbaudiet abus.

### Darbs: `quality-gate`

Skrien pēc `test-coverage`. Neveiksmes gadījumā bloki tiek apvienoti.

| Skripts                      | Validē                                                                                                                                                                                            | Bloķēšana              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `quality:collect`            | Izdala `quality-metrics.json` (ESLint brīdinājumu skaits, pārklājums no apvienotā shard ziņojuma)                                                                                                 | Jā (augšpus sprūdrata) |
| `quality:ratchet`            | Katrs `quality-baseline.json` rādītājs nav regresējis (ESLint brīdinājumi ≤ bāzes līnija; pārklājuma ≥ bāzes līnija)                                                                              | Jā                     |
| `check:duplication`          | Koda dublēšana (jscpd@4) nepārsniedz `quality-baseline.json` bāzes līniju                                                                                                                         | Jā                     |
| `check:complexity`           | Faila līmeņa ciklomātiskā sarežģītība nepārsniedz maksimālo robežu (kodols ESLint `complexity` + `max-lines-per-function`)                                                                        | Jā                     |
| `check:cognitive-complexity` | Kognitīvās sarežģītības sprūdrata (`eslint-plugin-sonarjs`) — atsevišķa ESLint caurlaide; CI palaiž abus apvienotus kā vienu `check:complexity-ratchets` soli                                     | Jā                     |
| `check:dead-code`            | Neizmantotā eksporta / failu sprūdrata (knip) neregresē salīdzinājumā ar bāzes līniju                                                                                                             | Jā                     |
| `check:compression-budget`   | Kompresijas etalona budžeta — vienam dzinējam marķiera ietaupījuma zemākās vērtības nedrīkst regresēt                                                                                             | Jā                     |
| `check:type-coverage`        | Procentu tipa sprūdrata (`type-coverage`) neregresē; lielā mērā ietver `typecheck:noimplicit:core`                                                                                                | Jā                     |
| `check:codeql-ratchet`       | Atvērtā CodeQL brīdinājumu skaits neregresē (nolasa, izmantojot `gh api`; gracioza izlaišana bez pilnvaras) — atsvaidzināšanas kadence un manuāls trigeris: skatiet tālāk sadaļu "CodeQL ratchet" | Jā                     |

### Darbs: `quality-extended`

Visam darbam ir padomdevēja raksturs (`continue-on-error: true`). Uz npm balstītie sprūdrati darbojas pa īstam; ārējie skeneri tiek instalēti, izmantojot `gh release download` un pašizlaižot (izeja 0), ja bināra faila joprojām nav.

| Skripts                  | Validē                                                                                                                                                                                                                         | Bloķēšana                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `check:circular-deps`    | Nav apļveida atkarību (dpdm)                                                                                                                                                                                                   | **Konsultatīvs**                                     |
| `check:bundle-size`      | Paketes izmērs nepārsniedz vāciņu                                                                                                                                                                                              | **Konsultatīvs**                                     |
| `check:secrets`          | Slepenā skenēšana (gitleaks) — izlaiž, ja nav bināra                                                                                                                                                                           | **Konsultatīvs**                                     |
| `check:vuln-ratchet`     | Atkarības ievainojamības (osv-skeneris) neregresē — izlaiž, ja nav bināra                                                                                                                                                      | **Konsultatīvs**                                     |
| `check:workflows`        | Darbplūsmas savārstījums (actionlint + zizmor); missing/broken skeneri, nederīgi ziņojumi vai trūkstoša sprūdrata bāzes līnija neizdodas kā INCOMPLETE. Derīgie atradumi atbilst atlasītajai strict/advisory/ratchet politikai | Nepieciešama izpilde; zizmora sprūdrata bloķēšana CI |
| `check:openapi-breaking` | Pārtraucot izmaiņas publiskajā API līgumā (`openapi.yaml`) salīdzinājumā ar bāzes filiāli (oasdiff), — izstaro `openapiBreaking=N`; izlaiž, ja oasdiff nav vai bāzes specifikācija nav atrisināma                              | **Konsultatīvs**                                     |

### Darbs: `docs-sync-strict`

Darbojas katrā PR līdz `main`. Neveiksmes gadījumā bloki tiek apvienoti.

| Skripts                        | Validē                                                                                                                                                      | Bloķēšana                          |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `check:docs-all`               | Meta vārti, kas secīgi vada 6 apakšvārtus                                                                                                                   | Jā                                 |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt versijas konsekvence                                                                                                          | Jā                                 |
| ↳ `check:docs-counts`          | Skaitļi prozā (pakalpojumu sniedzēju skaits, migrācijas skaits utt.) atrodas reālo skaitu sprūdlodziņā                                                      | Jā                                 |
| ↳ `check:env-doc-sync`         | Katrs env var `.env.example` ir dokumentēts dokumentu tabulā un otrādi                                                                                      | Jā                                 |
| ↳ `check:deprecated-versions`  | Dokumentos nav novecojušu versiju virkņu                                                                                                                    | Jā                                 |
| ↳ `check:doc-links`            | Iekšējās atzīmes saites dokumentos veido reālus failus (forma `[text]`/`(path)` )                                                                           | Jā                                 |
| ↳ `check:fabricated-docs`      | Maršruti, env vars, CLI komandas, āķa nosaukumi un failu ceļi, kas minēti dokumentos, pastāv kodu bāzē. Cietie vārti caur `--strict`; soft-fail bez karoga. | Jā (izmantojot `--strict` iekš CI) |
| `check:cli-i18n`               | CLI komandu virknes ir visos i18n lokalizācijas failos                                                                                                      | Jā                                 |
| `check:openapi-coverage`       | OpenAPI spec aptver vismaz reālu maršrutu sprūdratu grīdu                                                                                                   | Jā                                 |
| `check:openapi-security-tiers` | Drošības līmeņa anotācijas `openapi.yaml` atbilst `routeGuard.ts` klasifikācijām                                                                            | **Konsultatīvs**                   |
| `check:openapi-routes`         | Katrs `openapi.yaml` ceļš ved uz īstu `route.ts` (anti-halucināciju)                                                                                        | Jā                                 |
| `check:docs-symbols`           | Katra `/api/...` atsauce `docs/**/*.md` izvēršas par īstu `route.ts` (anti-halucināciju)                                                                    | Jā                                 |
| `i18n translation drift`       | Netulkotās atslēgas i18n lokalizācijas failos — brīdina tikai                                                                                               | **Konsultatīvs**                   |

Tiek ģenerēti divpadsmit README SVGs zem `docs/diagrams/` (`scripts/docs/gen-readme-<name>.mjs`; `npm run docs:readme-diagrams` tos visus atjauno). Katrai no tām ir baitu salīdzināšanas vienību pārbaude (`tests/unit/docs/readme-*-svg.test.ts`, job `test-unit`), kas neizdodas, ja piesaistītais fails ir novecojis, un `check:docs-counts` nolasa kanoniskos skaitļus no saviem `<text>` mezgliem — tāpēc kontūru veidošanas darbība saglabā katru failā esošo kontūru virkni kā neredzamu `<text>`. SVG kanonisko skaitļu pārbaude nolasa failus, kas norādīti `SVG_DIAGRAM_FILES` (`scripts/check/check-docs-counts-sync.mjs`): `docs/diagrams/readme-hero.svg`, `free-tier-budget.svg`, `promise-pillars.svg`, `comparison-table.svg`, `cli-terminal.svg`, `tier-cascade.svg`, kā arī `public/images/tier-flow-dark.svg` un `tier-flow-light.svg`; bezmaksas uz visiem laikiem, kataloga ieraksta, periodiskā kopuma un vērtēšanas faktoru pretenzijas ir arī `promise-pillars.svg`, `free-tier-budget.svg` un `strategies-grid.svg`. `free-tier-budget.svg` ņem savus skaitļus no tiešā kataloga ielādētāja, tāpēc izmaiņas uz `FREE_MODEL_BUDGETS` vai nodrošinātāja parādāmo nosaukumu reds CI līdz šis fails tiek atjaunots.

### Darbs: `i18n-ui-coverage`

| Skripts                             | Validē                                                                                                                                                                                                  | Bloķēšana        |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `check-ui-keys-coverage` (iekļauts) | UI i18n atslēgas pārklājums ir ≥ 65%                                                                                                                                                                    | Jā               |
| `check-ui-value-drift` (iekļauts)   | Pārrakstīta angļu valoda** vērtību** neatstāj novecojušu tulkojumu                                                                                                                                      | Jā               |
| `check-new-key-coverage` (iekļauts) | A** jauns** Angļu valodas atslēga tiek tulkota katrā lokalizācijā — `__MISSING__:` marķieris tiek noraidīts                                                                                             | Jā               |
| `check-translation-ratio`           | Reālā tulkojuma attiecība uz lokalizāciju (identiski angļu valodai / vietturis / trūkstošās lapas ārpus atļaušanas saraksta) nedrīkst pārsniegt `config/quality/i18n-translation-baseline.json` + slack | **Konsultatīvs** |

Nepieciešams `fetch-depth: 0` — vērtības novirzes vārti diffs `en.json` pret sapludināšanas bāzi.

#### `check-ui-value-drift` — novecojuši tulkošanas vārti

Uztver vienu i18n regresiju, ko citi vārti strukturāli neredz: angļu valodas vērtība tiek pārrakstīta, un tulkojumi, kas iegūti no _iepriekšējās_ angļu valodas, paliek aiz muguras, tāpēc lietotāji, kas nav angļu valoda, turpina lasīt pārliecinoši formulētu, tagad nepareizu kopiju.

Tas tika nosūtīts pa īstam. `oauthModal.googleOAuthWarning` tika pārrakstīts, kad nokļuva Antigravity pieteikšanās palīgs (#5203);** 39 no 43 vietām** tika saglabāts teksts, kurā operatoriem tika teikts, ka "nokopē pilnu URL un ielīmējiet to zemāk" — plūsmu, ko nevar pabeigt šim pakalpojumu sniedzējam. Tas palika nepamanīts līdz #8463, jo:

- `sync-ui-keys` aizpilda tikai atslēgas, kas ir** prombūtnē** , nekad tādi, kas ir** novecojis** ;
- `check-ui-keys-coverage` skaita taustiņu _presence_, tāpēc novecojušais tulkojums tiek uzskatīts par aptvertu;
- `check-translation-drift` izseko `docs/i18n/<locale>/**.md` dokumentāciju, kas atspoguļo — tā nekad neizlasa `src/i18n/messages/*.json`. Darbības `docs-sync-strict` bloķēšana kopš 2026. gada 2026. gada atkārtotās sinhronizācijas: rediģējiet pamatdokumentu → `npm run i18n:run -- --files=<doc>` (sadaļas līmenī, lēti).

**Atšķirības apzinās, nav bāzes līnijas atbalstīts.** Tas salīdzina `en.json` sapludināšanas bāzē ar darba koku; katrai atslēgai, kuras angļu valodas vērtība ir mainījusies, jebkura lokalizācija, kurā joprojām ir neskarts tulkojums, ir novecojusi. Tas apzināti** iesaldē jau esošo parādu** — a diff nevar atklāt, no kuras vecās angļu valodas nācis ilgstošs tulkojums, tāpēc vārti vērtē tikai to, ko skar pašreizējās izmaiņas. Alternatīva (katras atslēgas jaucējkoda bāzes līnija) izmaksātu ~ 600 KB ģenerētais fails, kas ir 3 × lielākais esošais bāzes līnija, kas maina katru i18n PR.

Divi veidi, kā to apmierināt:

1. atjauniniet ietekmētos tulkojumus vai
2. iestatiet tos uz `__MISSING__:<new english>` — izpildlaikā, pēc tam apkalpo laboto angļu valodu (`src/i18n/request.ts::deepMergeFallback`, #7258) un tulkošanas atslēgas rindas.

Ja aukla ir** nozīmē** mainīts, dod priekšroku** pārdēvējot atslēgu** : jauna atslēga nevar mantot novecojušu tulkojumu. Tas ir izmantotais modelis #8463.

```bash
npm run i18n:check-value-drift          # strict (what CI runs)
npm run i18n:check-value-drift:warn     # report only
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Iziet no 0 ar `SKIP reason=base-unresolved` ja pamata katalogu nevar nolasīt (sekla klons bez bāzes atsauces), atspoguļojot `check-openapi-breaking`.

### Darbs: `i18n`

Pilna i18n validācijas matrica (viens darbs katrā lokalizācijā). Viss darbs ir konsultatīvs.

| Skripts                         | Validē                                         | Bloķēšana                                                   |
| ------------------------------- | ---------------------------------------------- | ----------------------------------------------------------- |
| `validate_translation.py quick` | Tulkošanas pilnīgums atkarībā no lokalizācijas | **Konsultatīvs** (`continue-on-error: true` par visu darbu) |

### Darbs: `pr-test-policy`

Darbojas tikai vilkšanas pieprasījumos.

| Skripts                | Validē                                                                                                                                 | Bloķēšana |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `check:pr-test-policy` | PRs, kas maina ražošanas kodu `src/`, `open-sse/`, `electron/` vai `bin/` ir jāiekļauj vai jāatjaunina testi (Cietais noteikums Nr. 8) | Jā        |
| `check:test-masking`   | Mainītie testa faili nesamazina neto apgalvojumu skaitu un nepievieno `assert.ok(true)` tautoloģijas                                   | Jā        |
| `check:pr-evidence`    | PR pamatteksts citē test/VPS pierādījumus par izmaiņām (mehānizē Hard Rule #18, grepping PR prose — fragile, skatiet atpalicību)       | Jā        |

### Darbs: `test-vitest`

Skrien pēc `build`. Neveiksmes gadījumā bloki tiek apvienoti.

| Suite            | Validē                                                        | Bloķēšana                                                                                                     |
| ---------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP serveris (110 rīki), autoCombo, kešatmiņa — vitest runner | Jā                                                                                                            |
| `test:vitest:ui` | UI komponents pārbauda — vitest runner                        | **Bloķēšana** — iepriekš esošās kļūmes ir skaidri izslēgtas `vitest.config.ts`; jaunas neveiksmes nedod darbu |

### Nakts darbplūsmas (plānotas, konsultatīvas)

Tie darbojas pēc cron grafika (un `workflow_dispatch`), nekad ne PRs. Visi ir konsultatīvi.

| Darbplūsma             | Validē                                                                                                                                                              | Bloķēšana        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `nightly-property`     | ātrās pārbaudes īpašību testi ar izlases veida sēklu + augstu palaišanas skaitu                                                                                     | **Konsultatīvs** |
| `nightly-resilience`   | kaudzes augšanas vārti, haosa vainas iesmidzināšana, k6 load/soak                                                                                                   | **Konsultatīvs** |
| `nightly-llm-security` | promptfoo injekcijas aizsargs (bloķēšanas režīms) + garak zondes (izlaists bez pakalpojumu sniedzēja noslēpuma)                                                     | **Konsultatīvs** |
| `nightly-schemathesis` | OpenAPI kontrakta izplūšana (shēma) pret dzīvu OmniRoute, izmantojot `docs/openapi.yaml` — virsmu specifikācijas pārkāpumus / neapstrādātas 500 s (8. gadījums B.4) | **Konsultatīvs** |
| `nightly-mutation`     | Stryker mutāciju pārbaudes rezultāts ātrās vienības joslā — izdzīvojušo mutantu virsmas vāji apgalvojumi                                                            | **Konsultatīvs** |
| `nightly-compat`       | Mezglu dzinēja saderības matrica atbalstītajos `engines.node` diapazonos                                                                                            | **Konsultatīvs** |

Veiktspējas bāzes līnijas (kaudze, TTFB, izveides laiks) tiek reģistrētas, nevis ierobežotas: skatiet [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## Ātruma posms (2026-08-30 → v4.0 LTS): visas bāzes robežvērtības atvieglotas par 20%

Atbildīgās personas lēmums (2026-08-30): līdz v4.0 modularizācijai piegādes ātrums ir svarīgāks
par tehniskā parāda ierobežošanu. Visas **skaitliskās** sprūdrata bāzes robežvērtības vienā
auditējamā piegājienā tika atvieglotas par 20%, un posms ir deklarēts failā `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Kas mainījās                                                                                                                                                                                                                                      | Kur                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — skaitļi, kuriem mazāka vērtība ir labāka, ×1.2; procenti, kuriem lielāka vērtība ir labāka, ÷1.2 (pārklājuma minimums saglabāts 60, `eslintErrors` paliek 0, `eslintWarnings` 0 → 20% no fiksētā apspiešanas gadījumu skaita) | `quality-baseline.json` (`_relax_velocity_2026_08_30` piezīmē uzskaitītas visas vērtību izmaiņas pirms → pēc) |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                                  | `complexity-baseline.json`, `duplication-baseline.json`                                                       |
| `cap`, `testCap`, katra `frozen[*]` / `testFrozen[*]` rindu robežvērtība ×1.2                                                                                                                                                                     | `file-size-baseline.json`                                                                                     |
| skaits katram failam / katram TS kodam ×1.2                                                                                                                                                                                                       | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`        |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                               | `scripts/check/check-openapi-coverage.mjs`                                                                    |
| `--require-tighten` kļūst konsultatīvs, kamēr `_policy.requireTighten === false`                                                                                                                                                                  | `scripts/quality/check-quality-ratchet.mjs`                                                                   |
| iknakts `bank-ratchet-shrinks` tiek apturēts (tas saglabātu izmērīto samazinājumu un atceltu rezerves palielinājumu)                                                                                                                              | `.github/workflows/nightly-release-green.yml`                                                                 |

Atļauto vienumu saraksti (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **nav** budžeti un netika mainīti. Izpildes/neizpildes politikas vārtejas (noslēpumi, SQL noteikumi,
dokumentācijas/vides līgums, i18n paritāte, vienībtesti) nav mainītas — nesekmīgs tests joprojām ir nesekmīgs tests.

**Rīki**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — vienreizējā
  atvieglošana (`scripts/quality/relax-baselines.mjs`); atsakās darboties divreiz ar vienu un to
  pašu piezīmi.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  mēra katru skaitlisko vārteju tāpat kā CI un izvada katras vārtejas atlikušo rezervi
  (`scripts/quality/baseline-headroom.mjs`). Ik nakti izpildāmais `baseline-headroom` uzdevums publicē
  tabulu darbplūsmas izpildes kopsavilkumā un augšupielādē tās JSON/Markdown pārskatu kā
  `baseline-headroom-<run_id>`, saglabājot to 90 dienas. Brīdinājuma un kritiskās rindas norāda vārtejas,
  kuru vērtības ir 10% robežās no to maksimālās robežvērtības vai jau to pārsniedz. Pārskatiet šos pārskatus
  kā agrīnus brīdinājumus par budžetu izlietošanu; pārbaudiet attiecīgās vārtejas `_rebaseline_*` piezīmes. Uzdevums
  vairs neveido un neatjaunina pastāvīgu problēmas pieteikumu; #12149 saglabā agrāko pārskatu vēsturi.

**Jaunā koda režīms (Clean-as-You-Code) — kopš 2026-08-30, tikai PR paātrinātais ceļš**

`pull_request` notikumos `quality.yml` nodod `--base-ref <PR base SHA>` komandām `check:file-size`,
`check:complexity-ratchets` un `check:dead-code`. Vārtejas `check:complexity-ratchets` un
`check:dead-code` salīdzina HEAD ar sapludināšanas bāzi, **ierobežojot pārbaudi līdz failiem, kurus PR
ir mainījis** (`scripts/check/newCodeMode.mjs`: sapludināšanas bāze tiek materializēta pagaidu
`git worktree`, ESLint/knip tiek palaisti tajā un HEAD versijā, un katra faila skaita vērtības tiek salīdzinātas):

- **bloķējošs** — PR mainītajos failos pievienoja ciklomātiskās/kognitīvās sarežģītības pārkāpumus vai neizmantotus eksportus
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` žurnālā);
- **konsultatīvs** — globālā kopsumma salīdzinājumā ar fiksēto bāzes robežvērtību. Mantotā novirze nekad nepadara
  nevainīgu PR nesekmīgu; novirze tiek atkārtoti fiksēta laidiena saskaņošanas laikā, un to uzrauga rezerves uzdevums.

`check:file-size` izmanto bāzes atsauci pēc saviem noteikumiem (`scripts/check/check-file-size.mjs`, #8522):
tas pārbauda katru avota un testa failu kokā, nolasa katra faila rindu skaitu PR bāzē,
izmantojot `git show`, un atzīmē failu kā nesekmīgu tikai tad, ja tas pārsniedz lielāko no tā bāzes griestiem
(`frozen` / `testFrozen` vai `cap` / `testCap` failam, kas nav iekļauts bāzē) un bāzes izmēra.
Tādēļ fails, kuram bāzē jau ir novirze, nekad nepadara nevainīgu PR nesekmīgu.

`check:boundary:ratchet` piemēro to pašu noteikumu savam vienīgajam skaitlim
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): PR notikumos gan
`quality.yml` ātrās pārbaudes, gan `ci.yml` lintēšanas uzdevums nodod PR bāzes SHA, bāzes komits
tiek izmērīts no `git archive` eksporta, un PR neizdodas tikai tad, ja tā `open-sse → src` malu
skaits pārsniedz lielāko no `metrics.boundaryOpenSseToSrc` un bāzes skaita. Par bāzes novirzi
virs griestiem tiek ziņots (`base drift herdado`), taču tā nekad nepadara nevainīgu PR nesekmīgu;
push → main saglabā absolūtos griestus, un neatrisināms bāzes SHA ar brīdinājumu atkāpjas uz tiem.

`workflow_dispatch` izpildēm, laidiena zaļā statusa pilnajai pārbaudei un iknakts rezerves uzdevumam nav PR bāzes,
tāpēc tie saglabā absolūto (globālo) salīdzinājumu. Pārklājums, dublēšanās un tipu pārklājums pagaidām
paliek globāli (to rīki nevar lēti izveidot katra faila atšķirību) — tie ir kandidāti tādai pašai pieejai.

**Posma noslēgšana versijā v4.0 (LTS = stingrāks nekā iepriekš, nevis „atpakaļ pie ierastā”)**

1. Tīrajā `release/v4.0.0` galotnē: ierakstam palaidiet `npm run quality:headroom --json`, pēc tam
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, kā arī katras tipu pārbaudes barjeras
   `--update` — visas bāzes vērtības samazinās līdz izmērītajai vērtībai.
2. Izdzēsiet `_policy` no `quality-baseline.json` (tas no jauna aktivizē `--require-tighten` un iknakts
   rezerves uzkrāšanu), atjaunojiet `THRESHOLD = 36` (vai augstāku) failā `check-openapi-coverage.mjs`.
3. Padariet ierobežojumus stingrākus par izmērītajiem tur, kur modularizācija ir atmaksājusies: faila izmēra `cap` atkal iestatiet uz 1000
   (vai 800), pārklājuma minimumus palieliniet par 5, bet modularizētajām pakotnēm neizmantoto eksportu skaitu iestatiet uz 0.

## Ratchet bāzes līnija (`quality-baseline.json`)

Ratchet dzinis (`scripts/quality/check-quality-ratchet.mjs`) nolasa `quality-baseline.json`
un salīdzina to ar tikko apkopoto `quality-metrics.json`. Jebkura metrika, kas pasliktinās
vairāk par tai noteikto epsilonu, izraisa būvējuma kļūmi.

Pašlaik izsekotās metrikas:

| Metrika               | Virziens | Nozīme                                     |
| --------------------- | -------- | ------------------------------------------ |
| `eslintWarnings`      | `down`   | ESLint brīdinājumu skaits nedrīkst pieaugt |
| `coverage.statements` | `up`     | Izteikumu pārklājums nedrīkst samazināties |
| `coverage.lines`      | `up`     | Rindu pārklājums nedrīkst samazināties     |
| `coverage.functions`  | `up`     | Funkciju pārklājums nedrīkst samazināties  |
| `coverage.branches`   | `up`     | Zaru pārklājums nedrīkst samazināties      |

Lai pēc reāla uzlabojuma atjauninātu bāzes līniju:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Karodziņš `--update` ieraksta pašreizējās izmērītās vērtības failā `quality-baseline.json`.
Komitojiet šo failu kopā ar izmaiņām, kas uzlaboja metriku. PR, kas uzlabo metriku,
neatjauninot bāzes līniju, tiks konstatēts ar `--require-tighten` (6A.5. fāze,
ieviešana vēl nav pabeigta).

### CodeQL ratchet: atsvaidzināšanas biežums un manuāla palaišana

`check:codeql-ratchet` nolasa **repozitorija stāvokli, kas tiek atsvaidzināts pēc grafika, nevis katram PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` ziņo
`state: configured`, `schedule: weekly`: tas ir GitHub noklusējuma iestatījuma skenējums, nevis
analīze pēc katras izmaiņu nosūtīšanas. Sekas: pēc tam, kad tiek sapludināts PR, kas IZLABO
brīdinājumus, ratchet turpina nolasīt veco, lielāko skaitu, līdz tiek izpildīts nākamais
ieplānotais skenējums, tādēļ tas ziņo par regresiju katrā atvērtajā PR, tostarp paša
labojuma PR turpmākajās izmaiņās, līdz skenējums atjaunina datus.

**Manuāla atsvaidzināšana**: `gh workflow run codeql.yml --ref release/vX.Y.Z` atkārtoti palaiž
analīzi un dažu minūšu laikā atkārtoti publicē brīdinājumus. Vispirms izlasiet
`.github/workflows/codeql.yml` — tā galvenē ir paskaidrots, ka tas izmanto tikai
`workflow_dispatch`, **jo tas konfliktē ar GitHub "default setup"**
(`CodeQL analyses from advanced configurations cannot be processed when the default setup is enabled`).
Lai atjaunotu `push`/`pull_request`/`schedule` trigerus, vispirms nepieciešama
**īpašnieka darbība**: Settings → Code security → CodeQL: Default → Advanced.
Nepievienojiet `schedule:` trigeri bez šīs pārslēgšanas — tas radīs tikai nesekmīgas izpildes.

**Samaziniet bāzes līniju pēc skaita krituma** — `node scripts/check/check-codeql-ratchet.mjs
--update` ieraksta jauno izmērīto skaitu faila `quality-baseline.json` laukā
`metrics.codeqlAlerts.value`, lai ratchet klusējot nepieļautu regresiju atpakaļ līdz
vecajai augšējai robežai. Praktisks piemērs (2026-09-02/03): PR #12502 izlaboja 7 reālus
brīdinājumus (izmērītais atvērto brīdinājumu skaits: 13 → 6); PR #12530 samazināja fiksēto
bāzes līniju no 11 līdz 6, lai tā atbilstu faktiskajam skaitam; atlikušie 6 pēc tam tika
noraidīti, katram brīdinājumam norādot pamatojumu, līdz atvērto brīdinājumu skaits sasniedza 0.

**Par noraidīšanu lemj operators (Stingrais noteikums #14)** — nekad nenoraidiet CodeQL
brīdinājumu, noraidīšanas komentārā nenorādot tehnisko pamatojumu: `won't fix`, ja to
pieprasa augšupstraumes protokols, `used in tests` testa fiksatūrai, `false positive`,
ja izmantots sanitizētājs, ko CodeQL nevar konstatēt (precedents:
`docs/security/ERROR_SANITIZATION.md`).

---

## Testu atkārtošanas politika (WS5.4, v3.8.49)

Atkārtošana tiek konfigurēta katram izpildītājam atsevišķi, nekad globāli — vispārēja atkārtošana pārvērš reālas regresijas
neredzamās nestabilitātēs:

| Izpildītājs      | Politika                                                                                                                       | Kāpēc                                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` tikai CI vidē ar `trace: on-first-retry`                                                                          | Pārlūkprogrammas/tīkla laika parametri ir patiesi nedeterministiski; viens atkārtojums ar trasējumu pārvērš nestabilitāti diagnosticējamā artefaktā |
| Vitest           | NAV globālas atkārtošanas. Pierādīti nestabilam testam piešķir tiešu katra testa atkārtošanu (redzama izmaiņās, pārskatīta PR) | Nestabilo testu izolācijas saraksts tiek glabāts repozitorijā un nekad nav necaurredzams                                                            |
| node:test (unit) | Atkārtošanas NAV nekad                                                                                                         | Nestabils vienībtests ir testa kļūda — izlabojiet to, nevis mēģiniet izpildīt vēlreiz                                                               |

Mērķa SLO pēc nestabilitātes telemetrijas ieviešanas (WS5.2/5.3): <1% nestabilitātes līmenis katram testam
(“labot nekavējoties” slieksnis), ≥95% sekmīgas izpildes līmenis katram konveijeram. Nozares atsauces vērtības —
jāpārkalibrē atbilstoši mūsu pašu mērījumiem.

## Laidiena līmeņa sprūdrata novirze (WS5.5, v3.8.49)

Ja sprūdrata ierobežojums (faila lielums, sarežģītība, eslint brīdinājumi) regresē TĪRĀ laidiena
galotnē — proti, to izraisījusi apvienojumu KOMBINĀCIJA un neviens atsevišķs PR neatveido
regresiju savā zarā — labojums ir jāveic **laidiena atbildīgajam vienu reizi laidiena
zarā**: dodiet priekšroku koda izdalīšanai/refaktorēšanai; bāzes līmeni mainiet tikai ar dokumentētu
pamatojuma ierakstu. Nekad neuzveliet kombinācijas novirzi līdzstrādnieka PR un nekad
nemainiet bāzes līmeni katram PR atsevišķi (tas slēpj reālas regresijas). Vispirms nošķiriet cēloni: atveidojiet
kļūdu pret tīro galotni pārbaudes darba kokā, pirms pieņemat, ka to izraisīja jūsu PR.

## Sprūdrata samazinājumu uzkrāšana — lejupvērstais virziens (#8584)

Sprūdrats ir automatizēts tikai daļēji, turklāt nepareizajā daļā. Augšējās robežas **paaugstināšana** ir
manuāla JSON rediģēšana, kas aizņem desmit sekundes un ir ātrākais veids, kā atbloķēt nesekmīgu PR.
Tās **pazemināšanai** kādam ir jāpalaiž `--update` un jākomitē rezultāts — un līdz
`bank-ratchet-shrinks` uzdevuma ieviešanai neviena darbplūsma to nedarīja. Izmērītās sekas
(2026-07-25): 18 fiksēti faili jau sasniedza vai nepārsniedza jauno failu 800 rindu ierobežojumu, sliktākais
gadījums — 132× (`src/shared/validation/schemas.ts`, 19 rindām saglabāts 2,523 ierobežojums);
sarežģītības augšējā robeža pieauga `1794 → 2169` aptuveni 37 bāzes līmeņa maiņas piezīmēs ar tieši vienu
samazinājumu (−1); un frāze “pastiprināt ar `--update` nākamajā ciklā” tika ierakstīta 31 reizi, bet izpildīta
vienreiz. Ierobežojums, kas pārdzīvo kodu, kura dēļ tas tika noteikts, nemanāmi pārvērš katru pabeigto
sadalīšanu izaugsmes rezervē tam, kurš nākamais rediģēs failu.

`nightly-release-green.yml` → uzdevums **`bank-ratchet-shrinks`** noslēdz šo ciklu:

|          |                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------- |
| Palaiž   | `schedule` (3× dienā) + `workflow_dispatch` — apzināti **ne** `push`                                                 |
| Mēra     | augstāko `release/vX.Y.Z`, izmantojot tādu pašu atrisināšanu un injekcijas aizsardzību kā `release-green`            |
| Raksta   | `check:file-size --update` un `check:complexity-ratchets --update` (abi pēc uzbūves tikai samazina)                  |
| Pārbauda | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                             |
| Piegādā  | vienu vienmēr aktuālu PR pret laidiena zaru — piespiedu kārtā atjauninātu, nekad neradot atkārtotu paziņojumu lavīnu |

Uzkrāšana tiek veikta paketēs, nevis katrā `push`, jo tai nav latentuma prasības (8 stundu laikā
uzkrāts samazinājums ir pieņemams), savukārt palaišana pēc katras apvienošanas atkārtoti pārbūvētu PR zaru
apvienošanas kampaņu laikā un katru reizi prasītu pilnu ESLint caurskati. Noteikšana joprojām notiek pēc
`push` (`release-green`); tikai uzkrāšana tiek veikta paketēs.

### Drošības pārbaudītājs

Uzdevums bez uzraudzības raksta bāzes līmeņos, tāpēc `verify-ratchet-bank.mjs` padara
to pieņemamu. Tas salīdzina koku pēc `--update` ar `HEAD` un **pārtrauc uzdevumu,
pirms ir izveidots jebkāds komits** — neatverot PR — ja vien katra izmaiņa nav viena no šīm:

- `frozen` / `testFrozen` skaitliska ieraksta **samazināšana** vai **noņemšana**
- `complexity-baseline.json` → `count` **samazināšana**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **samazināšana**

Jebkas cits izraisa kļūmi: skaitļa palielināšana, ieraksta pievienošana, `cap`/`testCap` mainīšana vai
`_rebaseline_*` piezīmes dzēšana/pārrakstīšana (šīs piezīmes ir audita pieraksti par katras
augšējās robežas pastāvēšanas iemeslu un tiek glabātas tajā pašā `frozen` objektā, kur failu ieraksti).
Bots, kas varētu paaugstināt ierobežojumu, būtu nepārprotami sliktāks par pašreizējo situāciju. Regresijas
aizsardzība: `tests/unit/verify-ratchet-bank.test.ts`.

Uzdevums nekad neveic `push` uz `release/*` — PR apvieno cilvēks, tādēļ kļūdains mērījums
nevar nonākt zarā bez pārskatīšanas.

## Atļauto vienumu saraksta politika

Katra pārbaude, kas nevar neizdoties jau pastāvošu pārkāpumu dēļ, izmanto fiksētu atļauto vienumu sarakstu
(piemēram, `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Politika ir šāda:

**Novērsiet pamatcēloni; izmantojiet atļauto vienumu sarakstu tikai tad, ja pārkāpums jau pastāvēja un
to nevar novērst tajā pašā PR.**

Pievienojot ierakstu atļauto vienumu sarakstam:

1. Iekļaujiet komentāru ar pamatojumu.
2. Norādiet izsekošanas problēmu (piemēram, `// #3498 — 2. posma funkcionalitāte vēl nav ieviesta`).
3. Noņemiet ierakstu tajā pašā PR, kurā tiek novērsts pārkāpums — novecojis ieraksts, kas vairs
   nenomāc aktīvu pārkāpumu, pats par sevi ir defekts (pēc 6A.3 novecojušo ierakstu kontroles
   ieviešanas pārbaude neizdosies, ja atļauto vienumu sarakstā būs bāreņieraksts).

**Nepievienojiet** atļauto vienumu saraksta ierakstus, lai testi izpildītos ātrāk. Sekmīga pārbaude ar augošu
atļauto vienumu sarakstu rada maldīgu kvalitātes iespaidu.

### Ja pārbaude jūsu PR neizdodas

1. **Rūpīgi izlasiet pārbaudes izvadi** — tajā ir precīzi norādīts, kurš fails vai simbols
   pārkāpa noteikumu.
2. **Novērsiet pārkāpumu** — vairums pārbaužu ir deterministiskas failu sistēmas pārbaudes, kas ir sekmīgas, tiklīdz
   kods ir pareizs.
3. **Ja pārkāpums jau pastāvēja** (t. i., jūs to neieviesāt, bet pārbaude tagad
   to aptver): pievienojiet atļauto vienumu saraksta ierakstu ar pamatojuma komentāru un izsekošanas problēmu.
4. **Ja pārbaude ir sprūdrata tipa** (pārklājums, ESLint brīdinājumi, dublēšanās, sarežģītība):
   jūsu izmaiņas pasliktināja metriku. Novērsiet pamatproblēmu vai (retos gadījumos) izpildiet
   `npm run quality:ratchet -- --update`, ja izmaiņas ir apzinātas un metrikas
   pasliktināšanās ir pieņemama, taču dokumentējiet iemeslu PR aprakstā.
5. **Konsultatīvās pārbaudes** (`continue-on-error: true`) ir informatīvas — tās nebloķē
   sapludināšanu, taču tiek parādītas CI kopsavilkumā. Tik un tā tās novērsiet.

---

## Jaunas pārbaudes pievienošana

1. Izveidojiet `scripts/check/check-<name>.mjs` (vai `.ts`). Politikas pārbaudes beidz darbu ar kodu 0/1.
   Sprūdrata tipa pārbaudes izvada metriku failā `quality-metrics.json`, izmantojot `collect-metrics.mjs`.
2. Pievienojiet `"check:<name>": "node scripts/check/check-<name>.mjs"` failam `package.json`.
3. Pievienojiet to `.github/workflows/ci.yml` atbilstošajā uzdevumā
   (politika → `lint` vai `docs-sync-strict`; sprūdrats → `quality-gate`).
4. Ja pārbaudei ir atļauto vienumu saraksts, izmantojiet `reportStaleEntries()` no
   `scripts/check/lib/allowlist.mjs`, lai novecojušie ieraksti tiktu noteikti automātiski.
5. Uzrakstiet testu direktorijā `tests/unit/build/`, kas aptver pārbaudes noteikšanas loģiku.
6. Atjauniniet šo dokumentu (pievienojiet rindu attiecīgā uzdevuma tabulai).

---

## Aģentu rīki: LSP-in-the-loop (pēc izvēles)

Papildus CI pārbaudēm OmniRoute ietver **pēc izvēles izmantojamu** `agent-lsp` sagatavi
(projekta līmeņa `.mcp.json`, Fase 7 Task 15). Izveidojiet `.mcp.json`,
lai kodēšanas aģentiem nodrošinātu piekļuvi TypeScript valodas serverim un tie atrisinātu simbolus /
diagnostikas problēmas **pirms** koda rakstīšanas — tas ir kompilēšanas pirms apgalvošanas papildinājums
`typecheck:core`, kas novērš „izdomātu simbolu” kļūdas jau to rašanās vietā. Tas apzināti
netiek ielādēts automātiski (jūs izvēlaties un pārbaudāt MCP↔LSP tiltu); bojāts ieraksts tikai reģistrē
savienojuma kļūdu un nekad nepārtrauc sesijas.

---

## Racionalizācijas neizdarīto darbu saraksts (ROI pārskats — 9. fāze, 3. vilnis)

Šis inventārs 2026-06-17 tika saskaņots ar `ci.yml` (iepriekšējā versijā bija izlaisti
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Saskaņotās kopas ROI pārskatā
tika identificēti tālāk norādītie racionalizācijas kandidāti. **Apvienošanas ir mehāniskas CI
izmaiņas; pārslēgšanas/atmešanas ir politikas lēmumi, kas atstāti operatora ziņā.** Nekas no tālāk minētā
vēl nav piemērots.

**Iepriekš nav dokumentēti arī** (konsultatīvi, zems signāla līmenis): `docs-lint` darbs
(markdownlint + Vale, visam darbam iestatīts `continue-on-error`) un savrupās skenēšanas darbplūsmas
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` ir ietverts
`quality-baseline.json`, bet nav piesaistīts bloķējošam sprūdratam failā `ci.yml` — šī metrika
pašlaik ir bāreņmetrika.

### Apvienošana / dublikātu novēršana (mehāniski, zemāks risks)

Katrs kandidāts 2026-06-17 tika pārbaudīts pret aktuālo vārtu stāvokli (uzticies, bet pārbaudi);
vairākas „acīmredzamas” apvienošanas tomēr slēpa tehnisko parādu un **nav** tīri, tieši aizstājēji.

- **`check:docs-sync` tiek palaists divreiz** — atsevišķi `lint` darbā un vēlreiz `check:docs-all` (`docs-sync-strict`) ietvaros un husky pirmskomita āķī. ✅ **PABEIGTS** — atsevišķā izsaukšana `lint` darbā ir noņemta.
- **CVE skenēšana** — ❌ **NAV tīri apvienojama.** `audit:deps` izraisa stingru kļūmi jebkuras augstas/kritiskas CVE gadījumā; `check:vuln-ratchet` (osv) izraisa kļūmi tikai _regresijas_ gadījumā salīdzinājumā ar bāzes līmeni (pašlaik 1 MODERATE). Atšķirīga semantika — atmetot `audit:deps`, tiktu zaudēti absolūtie augstas/kritiskas nozīmības vārti. Paturēt abus.
- **Ciklu noteikšana** — ✅ **PABEIGTS** (#15159 G-01/G-02). Iepriekšējā tekstā `check:cycles` bija nosaukts par „zaļajiem, rūpīgi atlasītajiem” vārtiem, un to bloķējošais statuss tika pamatots ar to, ka `check:circular-deps` (dpdm) ziņoja par 91 ciklu. Šis zaļais statuss bija **kļūdaini zaļš**: `check:cycles` skenēja 5 apakšdirektorijus (450 failus), atpazina tikai statiskos `import|export … from` un atmeta katru `@/` un `@omniroute/open-sse/` specifikatoru, tādēļ tas nevarēja konstatēt dinamiskās importēšanas un aizstājvārdu ciklus, kas dominēja repozitorijā. Labots: tagad vārti apstaigā `src` + `open-sse` (5023 failus), apkopo specifikatorus no TypeScript AST (tādēļ `import("…")` tiek ieskaitīts, bet tipa pozīcijas `typeof import("…")` — netiek) un atrisina tsconfig `paths`. Tas atrod **14** ciklus, nevis 0. Tā kā 14 iepriekš pastāvošus ciklus nevar novērst vārtu PR ietvaros, `check:cycles` tagad ir **sprūdrats** (`--ratchet`, griesti `metrics.cycles.value = 14` failā `quality-baseline.json`, `direction: down`) — tas bloķē jebkuru _regresiju_, un ciklu skaits var tikai samazināties. CI izpilda `npm run check:cycles:ratchet`. Pakāpeniskā samazināšana notiek kopā ar **A-01**. `check:circular-deps` (dpdm) paliek konsultatīvs kā plašāks otrais viedoklis.
- **Sarežģītība** — ✅ **PABEIGTS** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): viena ESLint apstaigāšana, uzskaite pēc ruleId, lai ciklomātiskās sarežģītības+max-lines un kognitīvās sarežģītības bāzes līmeņi paliktu neatkarīgi; individuālie `check:complexity` / `check:cognitive-complexity` paliek lokālai `--update` izmantošanai.
- **`/api` prethalucināciju pārbaude** — ✅ **PABEIGTS** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): viena `src/app/api` failu sistēmas inventarizācija; openapi-routes + docs-symbols joprojām sniedz pārskatus neatkarīgi; individuālās pārbaudes paliek lokālai izpildei.
- **`check:node-runtime` tiek palaists 11 darbos** — ⚠️ **zema ROI.** Katrs izmanto atsevišķu izpildītāju, un pārbaude ilgst <1 s; kopējais ietaupījums ir ~10 s, taču tiktu zaudēta lēta katra darba aizsargpārbaude. Nav vērts radīt izmaiņu troksni.
- **`typecheck:noimplicit:core` CI lintēšanas darbā** — ✅ **noņemts no lintēšanas darba** (bija konsultatīvs `continue-on-error`); bloķējošo tipu virsmu nodrošina `typecheck:core` + `check:type-coverage`. Lokālais skripts ir saglabāts.

### Pārslēgt / izlemt (operatora politika)

- `check:openapi-security-tiers` (konsultatīvs) — ❌ **NAV tīri pārslēdzams.** Tas iziet ar kodu 0, bet brīdina, ka vairākiem `traffic-inspector` maršrutiem zem `LOCAL_ONLY_API_PREFIXES` trūkst anotācijas `x-loopback-only: true`. Lai to padarītu obligātu, vispirms šīs anotācijas jāpievieno failam `openapi.yaml`.
- `typecheck:noimplicit:core` (konsultatīvs) — lielākoties to aizstāj bloķējošais `check:type-coverage` sprūdrats. Pārslēgt uz sprūdratu vai atmest lieko otro `tsc` izpildi.
- `test:vitest:ui` (tagad **bloķējošs**) — iepriekš pastāvošās kļūmes ir tieši izslēgtas failā `vitest.config.ts` ar `// #8618` izsekošanas komentāriem; jaunas kļūmes izraisa darba kļūmi.
- `check:secrets` (gitleaks, bloķējošs sprūdrats, iesaldēts pie 3 dokumentētiem kļūdaini pozitīviem rezultātiem) — pievienot šos 3 atļauto vienumu sarakstam, lai sasniegtu 0, vai pazemināt līdz konsultatīvam statusam. Pārklājas ar GitHub iebūvēto slepeno datu skenēšanu + `check:public-creds`.
- `check:pr-evidence` (bloķējošs, meklē atbilstības PR apraksta prozas tekstā) — augsts kļūdaini pozitīvu rezultātu risks; atmešana vājinātu Stingrā noteikuma Nr. 18 izpildi, tāpēc šis ir īsts politikas lēmums.
- `semgrep` (konsultatīva savrupā pārbaude) — OWASP kategorijās pārklājas ar CodeQL; piesaistīt tā bāzes līmeni sprūdratam vai atmest.

---

## Saistītā dokumentācija

- Piegādes ķēde (izcelsme, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — atslēgu kopu paritātes pārbaude

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, darbs `i18n-ui-coverage`).
Salīdzina katra `src/i18n/messages/<locale>.json` lapu atslēgu kopu ar `en.json` un izraisa kļūdu,
ja trūkst kādas lapas atslēgas vai ir kāda lieka, neatkarīgi no tā, kad atslēga tika pievienota.
Vietturi `__MISSING__:` tiek uzskatīti par esošiem (to saturs ir attiecības pārbaudes kompetencē).
Šī pārbaude ir absolūts papildinājums abām uz izmaiņām/procentiem balstītajām pārbaudēm:
`check-ui-keys-coverage` katrai lokalizācijai nosaka 80 % minimumu (43 trūkstošas atslēgas no
~13 000 joprojām uzrāda 99,7 %), bet `check-new-key-coverage` vērtē tikai tās atslēgas, ko PR
pievieno failam `en.json`. Lokalizāciju pakete tiek ģenerēta no tās dienas `en.json`, kad tiek
izveidots tās zars, un tulkošana turpinās vairākas dienas, kamēr pamata zarā tiek pievienotas
jaunas atslēgas; pats paketes PR nepievieno nevienu atslēgu, tādēļ abas saistītās pārbaudes
klusēja, kad 1. pakete (#13044) tika sapludināta ar 43 trūkstošām atslēgām deviņās lokalizācijās
un 2. pakete (#13660) — ar 10 trūkstošām atslēgām astoņās lokalizācijās (2026-09-15). Kļūdu
novērsiet ar `node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; `extra`
lapas atslēga nozīmē, ka avotā tā ir noņemta — izdzēsiet to no lokalizācijas. `--warn` ziņo,
neizraisot kļūdu. `--catalog=cli` veic tādu pašu salīdzināšanu direktorijā `bin/cli/locales`
(`npm run i18n:check-keys:cli`); abas darbības atrodas darbā `i18n-ui-coverage`.

#### `check-new-key-coverage` — jauno atslēgu i18n pārbaude

`check-ui-value-drift` saistītā pārbaude. Tā konstatē gadījumu, kad angļu valodas vērtība ir
**pārrakstīta**, bet tās tulkojumi nav atjaunināti; šī pārbaude konstatē gadījumu, kad angļu
valodas atslēga ir **pievienota**, bet dažas lokalizācijas to nekad nav saņēmušas.

`check-ui-keys-coverage` nevar konstatēt šīs kategorijas problēmas: tā katrai lokalizācijai nosaka
procentuālu minimumu, un vienpadsmit trūkstošas atslēgas no ~13 000 saglabā pārklājumu 99,9 %
līmenī. Procentuāls rādītājs katrai valodai nevar izteikt, ka „šis līdzeklis tika izlaists
netulkots” — viss līdzeklis var nonākt jaunā lokalizācijā bez jebkāda teksta, nemaz nemainot šo
skaitli.

Notikums, ko tā kodificē: Orchestration Canvas 3. posmā tā vienpadsmit atslēgas tika iztulkotas
visās 42 tobrīd esošajās lokalizācijās. Dažas stundas vēlāk ES valodu pakete (#13044) palielināja
repozitorija lokalizāciju skaitu līdz 51, un deviņas jaunpienācējas (`el`, `et`, `ga`, `hr`, `lt`,
`lv`, `mt`, `sl`, `sr`) tās nekad nesaņēma. `deepMergeFallback` trūkstošas atslēgas vietā izmanto
angļu valodu, tādēļ problēma izpaudās kā netulkota, nevis tukša lietotāja saskarne — reāla un pēc
uzbūves klusa.

Tāpat kā saistītā pārbaude, arī šī **ņem vērā izmaiņas**, salīdzinot angļu valodu sapludināšanas
bāzē ar darba koku, tādēļ iepriekš pastāvējušie iztrūkumi paliek iesaldēti un pārbaudes
ieslēgšanai nebija nepieciešama migrācija.

**Marķieris `__MISSING__:<english>` to neapmierina (kopš 2026-09-17).** Iepriekš tas bija
dokumentētais atlikšanas mehānisms — izpildlaikā tiek izmantota pareizā angļu valodas vērtība —,
līdz astoņi līdzekļu PR 2026-09-16 pievienoja 61 atslēgu un tulkošanas vietā ievietoja marķieri
visās 65 lokalizācijās: šī pārbaude pieņēma ikvienu no tiem, nekas nebloķēja PR, un bloķējošā
īsto tulkojumu attiecības pārbaude pēc tam neizdevās laidiena galotnē visiem (pt-BR 3,2 % >
2,5 % + 0,5). Marķieris tagad tiek vērtēts kā trūkstošs tulkojums. Kļūdu novērsiet ar
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40` vai
visās lokalizācijās paralēli ar `npm run i18n:translate-new-keys`
(`scripts/i18n/translate-new-keys.sh`, drošs lietošanai atvienotā režīmā, atsakās sākt darbu bez
vides mainīgajiem `OMNIROUTE_TRANSLATION_*`). Atslēgai, kurai jāpaliek angļu valodā
(fiksētam produkta, dzinēja vai karoga nosaukumam), jāatrodas failā
`scripts/i18n/untranslatable-keys.json`, un tā nekad nav slēpjama aiz marķiera. `vi` marķieri
aizliedz pilnībā (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — atlikto testu pārbaude

Fails `vitest.config.ts` sarakstā `exclude` ir tests, kas netiek izpildīts, lai gan ikvienam,
kurš aplūko koku, tas izskatās pēc pārklājuma. Aiz komentāra
`// #8618 — iepriekš pastāvoša kļūme; pēc izlabošanas noņemiet šo izņēmumu` bija sakrājušies
sešdesmit divi faili. Problēma #8618 tika aizvērta 2026-08-11, kamēr tās izsekotais saraksts
pieauga no 45 līdz 62 ierakstiem un katrs jaunais ieraksts mantoja komentāru ar atsauci uz
slēgtu problēmu. Kad saraksts beidzot tika pārbaudīts failu pa failam (#13204), **51 no 62
testiem pašreizējā kokā izdevās bez avota koda izmaiņām**.

Pārbaude pieprasa, lai katrs izņēmums, kas norāda uz reālu failu, (a) nosauktu izsekošanas
problēmu un (b) būtu iekļauts failā `config/quality/vitest-exclusions.json` kopā ar tā izmērīto
statusu, lai jauna izņēmuma pievienošana būtu pārskatāma izmaiņa īpaši tam paredzētā failā,
nevis vēl viena rinda 60 ierakstu masīvā. Tā apzināti neizpilda izslēgtos testus atkārtoti —
tas aizņem ~10 minūtes un ir periodiska darba uzdevums; uzskaitē tiek reģistrēts, kad katrs
tests pēdējo reizi tika pārbaudīts.
