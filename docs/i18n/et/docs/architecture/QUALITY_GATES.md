# Quality Gates Reference (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

See dokument on kõigi OmniRoute’i CI kvaliteediväravate autoriteetne viide.
See kirjeldab iga väravat, mida see valideerib, millises CI töös see käivitatakse, kas see kasutab
ratchet-lähtejoont või läbitud/läbikukutud poliitikat ning kas see blokeerib järgu või on nõuandev.

Lühikokkuvõtte ja lubatud loendi poliitika leiate faili `AGENTS.md` jaotisest „Quality Gates & Ratchets“.
Sama süsteemi kriitilise hinnangu, küpsusklassifikatsiooni ja tööriistast sõltumatu
replikatsiooniplaani leiate dokumendist
[Quality Gate Playbook](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Väravate inventuuri ja täitmisprofiilid

### Kandidaadi vastuvõtt

CI ja Quality Gatesi töövood annavad mõlemad stabiilse otsuse: `Gate / CI` ja `Gate / Quality`. Nende versioonis sisseastumispoliitika loetleb kõik eelnevad töökohad vastavalt vajadusele või soovitustele. Kohaldatav nõutav töö peab õnnestuma: puuduvad, tühistatud, vahele jäetud, ootel ja tundmatud tulemused ei saa luua PASS. Kehtiv ainult dokumentide või ainult kataloogide klassifikatsioon võib muuta koodiraja kohaldamatuks; PR mustandit ei aktsepteerita. `hotfix` silt ei loobu tõenditest.

Mõlemad töövood hõlmavad PRs main/release harudeks, tõuke `main`, käsitsi saatmist ja rühmade ühendamise sündmusi. Tõuke, saatmise ja ühendamise rühm käivitab täieliku valiku. Tõuked `release/**` -le neid ei käivita (2026-10-18): iga muudatus käivitas maatriksi juba oma PR ja ühendatud kombinatsioon on Release-Greeni töö (`docs/ops/RUNNER_BOX.md` → Hosted lane). Kahvlid ja liitrühmad kasutavad hostitud jooksjaid tööde jaoks, mis muidu valivad ise hostitud jooksjaid; enne levitamist tuleb kontrollida piisav hostitud võimsus.

Iga JSON kviitung tuvastab väljamakstud SHA, töövoo käitamise ja katse. CLI lükkab tagasi checkout/event SHA mittevastavuse. Töövoo testid seovad poliitika liikmesuse otsuse töö `needs` loendiga, nii et uus või eemaldatud rada ei saa vaikselt kaduda. Kviitungid hõlmavad nende enda töövoogu, mitte avaldamist, juurutamist ega olemasoleva nõuandeskanneri sisemisi andmeid. Mõlema kontrollinime aktiveerimine harureeglites on eraldi haldusmuudatus; nende töökohtade lisamine ei kaitse filiaali.

### Staatilise skannimise inventar

Versiooniga npm-aliase inventar ja staatilise skannimise liikmesus asuvad `config/quality/gate-manifest.json`. Käivitage `npm run check:gate-manifest` skriptide nimede ja täpsete käskude kinnitamiseks `package.json` vastu; täiendused, eemaldamised ja käskude triivimine nurjuvad nii kohalikus konksus kui ka muutmise-klassifikatsiooni töödes CI. Alias ei ole töövootöö, maatrikseksemplar ega testjuhtum: neid loendusi ei tohi esitada vahetatavatena.

Valitud varjunimede kontrollimiseks ilma neid käivitamata kasutage `npm run quality:scan -- --list` või `npm run quality:scan:fast -- --list`. Runner kutsub npm-i sisendpunkti, nii et selle käitusaeg (sealhulgas Bun kui see on konfigureeritud) säilib. Manifest salvestab varjunimed väljaspool neid profiile eraldi kutsutuna ja hoolduskäsud on kirjutuskaitstud kontrolliprofiilides keelatud.

Need profiilid hõlmavad ainult staatilist skannimist. Nad ei sertifitseeri tooteteste, katvust, pakendeid, väliseid kontrolle ega kandidaadi täielikku vabastamist. Töövoo sissepääs kasutab lingitud `config/quality/admission-policy.json` ja `scripts/quality/admission-verdict.mjs`. Väljalaske-vaatleja profiilid jäävad eraldi; kontrollige iseseisvalt nende kohaldatavaid tšekke ja kviitungeid. Allolev proosaloend on viide, mitte tõend, et värav tegelikult jooksis.

Skriptid elavad `scripts/check/` (policy gates) ja `scripts/quality/` (ratchet engine) all. CI tõe allikas on `.github/workflows/ci.yml`.

### Vabastage PR kiirtee (`quality.yml`)

`.github/workflows/quality.yml` täiendab CI main/release PRs, surub `main` sse, saadab ja ühendab rühmi. PRs kasutab teefiltriga kiirkontrolle. Püsivalt keelatud duplikaatjärg eemaldati; tõelised build/package/boot tšekid jäävad CI.

| Töö                                              | Ulatus                                                                                                                                                                                                               | Blokeerimine            |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `Docs Gates (fast-path)`                         | Docs/code PRs; API docs refs ja docs-all                                                                                                                                                                             | Jah                     |
| `Fast Quality Gates`                             | Kood PRs; staatilised kontrollid, tüübikontroll, armatuurlaua tüübikontroll, mõjutatud üksuste testid                                                                                                                | Jah                     |
| `Forgotten sibling tests`                        | Kood PRs; muudetud moodulid, mis on jälgitud staatiliste tarbijate ja kandidaatide õdede testidega; barrel- ja dünaamilise impordi teed esitatakse soovitusliku diagnostikana koos viidatud lubamisloendi eranditega | **Nõuandev**            |
| `Vitest (fast-path)`                             | Kood PRs; kiire vitest komplekt                                                                                                                                                                                      | Jah                     |
| `Unit Tests fast-path`                           | Kood PRs; 4-kilduga ühikukomplekt                                                                                                                                                                                    | Jah                     |
| `No new ESLint warnings`                         | Kood PRs; summutustest teadlik ebemekaitse                                                                                                                                                                           | Jah, sealhulgas kahvlid |
| `Merge integrity (changelog + generated skills)` | Süvisevaba PRs; muudatuste logi ja loodud oskuste sünkroonimine                                                                                                                                                      | Jah, sealhulgas kahvlid |

#### Unustatud õdede-vendade testide aruanne

`npm run check:forgotten-sibling-tests` taaskasutab test-mõju kaardi taga olevat impordi lahendajat. Iga muudetud tootmismooduli kohta teatab see deterministlikest `changed module/symbol -> static consumer -> candidate sibling test` ahelatest, kui kandidaattest puudub tõmbamistaotluse erinevusest. Markdowni kokkuvõte ja JSON -tulemus säilitatakse `forgotten-sibling-tests` -töövoo artefaktina kalibreerimiseks enne mis tahes blokeerivat levitamist.

Tünnireeksport ja dünaamiline import on ainult eraldusvõime diagnostika; nad ei loo kunagi blokeerivat leidu. Arvustatud erandid elavad kohas `config/quality/forgotten-sibling-allowlist.json`. Iga kirje peab nimetama tarbija ja kandidaadi testi, esitama konkreetse põhjenduse ja linkima GitHub probleemi või tõmbetaotluse. Vigaste kirjete sulgemine nurjub. Erandid ei saa maha suruda kustutatud kandidaadi testi ega diferentsi, mis lisab `.skip`/`.todo`; kinnituse nõrgenemine ja muu maskeerimine jäävad iseseisvalt blokeeriva `check:test-masking` värava omaks.

### Töökoht: `lint`

Töötab iga PR kuni `main` puhul. Plokid liidetakse ebaõnnestumise korral.

| Skript (`npm run ...`)            | Kinnitab                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Blokeerimine                             |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `check:node-runtime`              | Node.js versioon on toetatud vahemikus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Jah                                      |
| `check:cycles`                    | Ringimportimine kogu `src/` + `open-sse/` ulatuses (AST-põhine, tsconfig `paths` lahendatud). Bare väljub väärtusest 1 iga kord, kui mõni tsükkel eksisteerib (tõrge suletud alates #15281) ja loetleb SCCs. `check:cycles:ratchet` (mida CI jookseb) blokeerib, kui arv ületab `metrics.cycles` ülemmäära `quality-baseline.json` — praegu 14, `direction: down`, nii et see võib ainult kukkuda (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Jah (põrkmehhanism)                      |
| `check:boundary`                  | `open-sse → src` sidumine: kordumatu failist faili importimine mootorist rakendusse (`scripts/quality/measure-boundary.mjs`; servaloend on v4 core/module-split parandamise mahajäämus). Paljas = nõuandearuanne (sama mis `quality:boundary`). `check:boundary:ratchet` (mida CI töötab, ka `quality.yml` kiirvärava põrkahelas) blokeerib, kui loendus ületab `metrics.boundaryOpenSseToSrc` ülemmäära `quality-baseline.json` — mõõdetud 771 juures, `direction: down`; `--update` ainult alandab seda; baassuhteline PRs (`--base-ref`, vt allpool)                                                                                                                                                                                                                                                                                                                                                                                                    | Jah (põrkmehhanism)                      |
| `check:route-validation:t06`      | Zod skeemid on olemas kõigil marsruutidel (6. taseme eeskirjad)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Jah                                      |
| `check:any-budget:t11`            | `@ts-expect-error // any` arv ei ületa eelarvet (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Jah                                      |
| `check:provider-consistency`      | Igal `providers.ts` teenusepakkujal on `providerRegistry.ts` sobiv kirje (ja vastupidi, lubatud loendis)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Jah                                      |
| `check:model-lifecycle`           | Kolm käsitsi hooldatavat marsruutimistabelit on kooskõlas registreeritud elutsükli hetktõmmisega (#11503): `FITNESS_TABLE` (`taskFitness.ts`) ei anna ühtegi vananenud ID-d, mida `REGISTRY` saaks marsruutida; iga `BUILT_IN_ALIASES` sihtmärk on `REGISTRY` ja puudub pensioni-id hetktõmmises; iga `REGISTRY` olev pensionile jäänud ID edastatakse või loetletakse `allowedRetiredInCatalog`; ja ükski `DEFAULT_DEGRADATION_MAP` allikas ega sihtmärk ei paista sellel hetktõmmisel olevat kasutuselt kõrvaldatud. See ei tõesta, et mudelit teenindab praegu otseülekanne. Võrguühenduseta — võrreldakse `config/quality/model-lifecycle.json` ga, mida värskendatakse käsitsi `npm run quality:refresh-model-lifecycle` (võrk; pole CI iga ühendatud). `allowedRetiredInCatalog` on põlenud põrkmehhanism: lisage kirje ainult jälgimisprobleemiga.                                                                                                  | Jah                                      |
| `check:fetch-targets`             | Iga `fetch("/api/...")` kliendipoolses `src/` -s lahendatakse tõeliseks `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Jah                                      |
| `check:deps`                      | Kõik `npm install` -able dep-d repos igas `package.json` on `dependency-allowlist.json`; märgistatud uued lahtised või nööritud pakendid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Jah                                      |
| `audit:deps`                      | `npm audit` (juur + elektron) — ei high/critical nõuandeid (kattub osv `check:vuln-ratchet`; vt Ratsionaliseerimise mahajäämus)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Jah                                      |
| `check:lockfile`                  | `package-lock.json` terviklikkus — https-register, terviklikkuse räsid, hosti eirata                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Jah                                      |
| `check:licenses`                  | SPDX litsentsilubade loend tootmissõltuvuste jaoks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Jah                                      |
| `check:tracked-artifacts`         | Ehitamata artefakte / kinnitatud `node_modules` sümlinke (töötab ka husky eelkinnitusrežiimis; pre-push on tahtlikult kerge — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Jah                                      |
| `check:ai-attribution`            | AI/bot `Co-Authored-By` treilerit ega tehisintellekti generatsiooni jalust PR kohustustes, pealkirjas või kehas — kõva reegel nr 16 ei `main`( `quality.yml` kiirvärava tsüklis PR→ `release/**` — loeb sündmuse kasulikku koormust, no-op off PRs — ja PR-i `ci.yml` PR→; ka husky `commit-msg` konks lubatud;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `check:vitest-exclusions`         | Iga Vitest välistamine nimetab jälgimisprobleemi ja kuvatakse `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Jah                                      |
| `check:file-size`                 | Lähtefailid (`.ts`/`.tsx` `src/`, `open-sse/`, `electron/`, `bin/`) jäävad `cap` -sse ja testfailid (`*.test.ts(x)`) `testCap`-sse; `file-size-baseline.json` (`frozen` / `testFrozen`) külmutatud failid ei tohi kasvada üle nende salvestatud suuruse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Jah                                      |
| `check:error-helper`              | Veavastustes executors/handlers kasutatakse `buildErrorBody()` / `sanitizeErrorMessage()` (kõva reegel nr 12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Jah                                      |
| `check:migration-numbering`       | Migratsiooni SQL failid on järjestikku nummerdatud, ilma lünkadeta ega duplikaatideta                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Jah                                      |
| `check:public-creds`              | Väljaspool `publicCreds.ts` puuduvad sõnasõnalised OAuth `client_id`/`client_secret` või Firebase'i veebivõtmed (kõva reegel nr 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Jah                                      |
| `check:db-rules`                  | Toores SQL puudub väljaspool `src/lib/db/` mooduleid; `localDb.ts` -st tünniimporti ei toimu (Kõvad reeglid nr 2/5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Jah                                      |
| `check:known-symbols`             | Pakkuja täitjad, marsruutimisstrateegiad ja nende väljasaatmistabelites registreeritud tõlkijad vastavad kettal olevatele failidele — puuduvad orvuks jäänud või deklareerimata sümbolid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Jah                                      |
| `check:route-guard-membership`    | Iga marsruut, mis loob alamprotsessi, on klassifitseeritud `isLocalOnlyPath()` järgi (karmid reeglid nr 15/17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Jah                                      |
| `check:test-discovery`            | Iga repos oleva `*.test.ts` / `*.spec.ts` -faili kogub vähemalt üks testija (ratchet: `test-discovery-baseline.json` orbide loend võib ainult kahaneda)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Jah                                      |
| `check:test-tla-order`            | Ükski `tests/unit` all olev `node:test` fail ei registreeri testi, saavutab tipptasemel `await`, seejärel registreerib rohkem (#18045; põrkmehhanism: `test-tla-order-allowlist.json` saab ainult kahaneda)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Jah                                      |
| `check:agent-skills-sync`         | Loodud agendioskuste artefaktid vastavad nende lähtekataloogile (ei triivi)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `check:provider-asset-provenance` | Pakkujal logos/assets on registreeritud päritolukanne                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `lint:json`                       | JSON konfiguratsioonifailid sõeluvad ja vastavad repo lint-reeglitele                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `typecheck:core`                  | TypeScript kompileerimine ilma vigadeta (ainult soovituslikud hoiatused)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Jah                                      |
| `typecheck:noimplicit:core`       | Range `noImplicitAny` — tulevikku vaatav; paljud olemasolevad kõnesaidid vajavad siiski märkusi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | **Nõuandev** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` ulatus `src/app/(dashboard)/**` (#7033) — `typecheck:core` kureeritud 27-faililine lubade loend ei sisalda armatuurlauda TSX ja `next build` ei kontrolli seda kunagi (`next.config.mjs` määrab `ignoreBuildErrors: true`), nii et orvuks jäänud identifikaatorite regressioonid olid seal nähtamatud (#6902 kuni 5) / #6902 kuni CI. Erineb külmutatud per-file/per-TS-code -loenduse lähtejoonega (`config/quality/dashboard-typecheck-baseline.json`, sama aegunud jõustamismuster nagu `check:known-symbols`) — ainult NEW vead, mis ületavad baasjoone loendust, ei suuda väravat täita; põrkama `--update` kui olemasolev viga on parandatud.                                                                                                                                                                                                                                                                                                  | Jah                                      |
| `check:build-typecheck`           | Terve rakenduse tootmistüübi kontroll `tsconfig.build.json` (`src`, `open-sse`, `packages`, `bin`, `scripts`, `electron/**/*.d.ts`), pinna `typecheck:core` 27-faililist lubade loendit ja armatuurlaua väravat ei kata. Erinevused `config/quality/build-typecheck-baseline.json` vastu; uus või tõstetud per-(fail, kood) loendus ebaõnnestub, väiksem arv palub teil põrkama. `--update` keeldub, kui käivitamine sisaldab uut või tõstetud paari, välja arvatud juhul, kui `--force-regressions` on läbitud, ja keeldub äsja vaigistatud failist, välja arvatud juhul, kui `--force-nocheck` on läbitud, seega on baasjoone laiendamine roheliseks saamiseks ja püsiva vaikuse andmine kaks eraldi tahtlikku tegevust. Paljas `--force` lükatakse tagasi. Samuti skannib `@ts-nocheck` ehitamise ulatust `config/quality/ts-nocheck-baseline.json` vastu, kuna seda kasutav fail ei teata üldse diagnostikast ja oleks muidu igale väravale nähtamatu. | Jah                                      |

#### Kaks tüübikontrolli programmi vastavad erinevalt

`typecheck:core` ja `check:build-typecheck` kompileerivad erinevate valikute all erinevaid programme ja sama fail võib ühes olla puhas ja teises vigu täis.

`tsconfig.build.json` määrab `"strict": false`, seega on `noImplicitAny` välja lülitatud. Põhikonfiguratsioon koostab kureeritud 27 failist koosneva rangemate suvanditega lubatud loendi ja järgib iga kirje impordigraafikut, nii et failid, mida ehitusprogrammis kunagi ei kuvata, kontrollitakse seal endiselt.

Tagajärg on oluline, kui otsustatakse, kas fail on trükitud:** nulldiagnostika `check:build-typecheck` all ei tähenda nulli** . 26 failist `@ts-nocheck` eemaldamine näitas, et 23 failist olid ehitusprogrammis puhtad; kuueteistkümnel neist ilmnes umbes 120 kaudset viga – ranges veas. Enne faili puhtaks kutsumist kontrollige mõlemat.

### Töökoht: `quality-gate`

Jookseb `test-coverage` järel. Plokid liidetakse ebaõnnestumise korral.

| Skript                       | Kinnitab                                                                                                                                                                                 | Blokeerimine                     |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `quality:collect`            | Väljastab `quality-metrics.json` (ESLint hoiatuste arv, katvus ühendatud killuaruandest)                                                                                                 | Jah (põrkmehhanismist ülesvoolu) |
| `quality:ratchet`            | Iga `quality-baseline.json` mõõdik ei ole taandunud (ESLint hoiatused ≤ baasjoon; katvus ≥ baasjoon)                                                                                     | Jah                              |
| `check:duplication`          | Koodi dubleerimine (jscpd@4) ei ületa `quality-baseline.json` algväärtust                                                                                                                | Jah                              |
| `check:complexity`           | Failitaseme tsüklomaatiline keerukus ei ületa piirmäära (core ESLint `complexity` + `max-lines-per-function`)                                                                            | Jah                              |
| `check:cognitive-complexity` | Kognitiivse keerukuse põrk (`eslint-plugin-sonarjs`) — eraldi ESLint pass; CI töötab mõlemad liidetuna ühe `check:complexity-ratchets` sammuna                                           | Jah                              |
| `check:dead-code`            | Kasutamata ekspordid / failid põrkega (knip) ei taandu algtasemega võrreldes                                                                                                             | Jah                              |
| `check:compression-budget`   | Kompressiooni etaloneelarve — mootori kohta märgisäästu alammäärad ei tohi taanduda                                                                                                      | Jah                              |
| `check:type-coverage`        | Protsenditüüpi põrkmehhanism (`type-coverage`) ei taandu; hõlmab suures osas `typecheck:noimplicit:core`                                                                                 | Jah                              |
| `check:codeql-ratchet`       | Avatud CodeQL hoiatuste arv ei taandu (loeb `gh api` kaudu; graatsiline vahelejätmine ilma märgita) — värskendamise kadents ja käsitsi päästik: vaadake allpool jaotist "CodeQL ratchet" | Jah                              |

### Töökoht: `quality-extended`

Kogu töö on nõuandev (`continue-on-error: true`). Npm-põhised põrkmehhanismid töötavad päriselt; välised skannerid installivad `gh release download` kaudu ja jätavad vahele (exit 0), kui binaarfail ikka veel puudub.

| Skript                   | Kinnitab                                                                                                                                                                                                        | Blokeerimine                                             |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `check:circular-deps`    | Ringikujulisi sõltuvusi pole (dpdm)                                                                                                                                                                             | **Nõuandev**                                             |
| `check:bundle-size`      | Kimbu suurus ei ületa korki                                                                                                                                                                                     | **Nõuandev**                                             |
| `check:secrets`          | Salajane skannimine (gitleaks) — jätab kahendkoodi puudumisel vahele                                                                                                                                            | **Nõuandev**                                             |
| `check:vuln-ratchet`     | Sõltuvuste haavatavused (osv-skanner) ei taanda — vahelejätmist, kui binaarne puudub                                                                                                                            | **Nõuandev**                                             |
| `check:workflows`        | Töövoo lint (actionlint + zizmor); missing/broken -skannerid, kehtetud aruanded või puuduv põrkmehhanismi baasjoon ebaõnnestuvad INCOMPLETE. Kehtivad leiud järgivad valitud strict/advisory/ratchet poliitikat | Vajalik täitmine; zizmori põrkmehhanismi blokeerimine CI |
| `check:openapi-breaking` | Avaliku API lepingu (`openapi.yaml`) muudatuste katkestamine vs põhiharu ( oasdiff ) — kiirgab `openapiBreaking=N`; jätab vahele, kui oasdiff puudub või põhispetsifikatsioon on lahendamatu                    | **Nõuandev**                                             |

### Töökoht: `docs-sync-strict`

Töötab iga PR kuni `main` puhul. Plokid liidetakse ebaõnnestumise korral.

| Skript                         | Kinnitab                                                                                                                                                 | Blokeerimine               |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `check:docs-all`               | Metavärav, mis juhib järjestikku 6 allväravat                                                                                                            | Jah                        |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt versiooni järjepidevus                                                                                                     | Jah                        |
| ↳ `check:docs-counts`          | Proosas esinevad loendused (pakkujate arv, migratsiooniloend jne) jäävad tegelike loenduste põrkaknasse                                                  | Jah                        |
| ↳ `check:env-doc-sync`         | Iga env var `.env.example` on dokumenteeritud dokumentide tabelis ja vastupidi                                                                           | Jah                        |
| ↳ `check:deprecated-versions`  | Dokumendis puuduvad aegunud versioonistringid                                                                                                            | Jah                        |
| ↳ `check:doc-links`            | Sisemised allahindluslingid dokumentides lahendavad tegelikud failid (vorm `[text]`/`(path)` )                                                           | Jah                        |
| ↳ `check:fabricated-docs`      | Dokumendis viidatud marsruudid, env vars, CLI käsud, konksu nimed ja failiteed on koodibaasis olemas. Kõvavärav `--strict` kaudu; soft-fail ilma liputa. | Jah ( `--strict` kaudu CI) |
| `check:cli-i18n`               | CLI käsustringid on olemas kõigis i18n lokaadifailides                                                                                                   | Jah                        |
| `check:openapi-coverage`       | OpenAPI spetsifikatsioon hõlmab vähemalt põrkunud põrandat tõelistest marsruutidest                                                                      | Jah                        |
| `check:openapi-security-tiers` | `openapi.yaml` turvataseme annotatsioonid on kooskõlas `routeGuard.ts` klassifikatsioonidega                                                             | **Nõuandev**               |
| `check:openapi-routes`         | Iga `openapi.yaml` tee lahendab tõelise `route.ts` (antihallutsinatsiooni)                                                                               | Jah                        |
| `check:docs-symbols`           | Iga `/api/...` viide `docs/**/*.md` s lahendab tõelise `route.ts` (antihallutsinatsiooni)                                                                | Jah                        |
| `i18n translation drift`       | Ainult tõlkimata võtmed i18n lokaadifailides hoiatavad ainult —                                                                                          | **Nõuandev**               |

`docs/diagrams/` all olevad kaksteist README SVGs genereeritakse (`scripts/docs/gen-readme-<name>.mjs`; `npm run docs:readme-diagrams` regenereerib need kõik). Igal neist on baitide võrdluse ühikutest (`tests/unit/docs/readme-*-svg.test.ts`, töö `test-unit`), mis ebaõnnestub, kui määratud fail on aegunud, ja `check:docs-counts` loeb kanoonilisi numbreid nende `<text>` sõlmedest — mistõttu kontuurimise samm hoiab failis iga kontuuriga stringi nähtamatuna `<text>`. SVG kanooniliste arvude kontroll loeb `SVG_DIAGRAM_FILES` (`scripts/check/check-docs-counts-sync.mjs`) loendis olevaid faile: `docs/diagrams/readme-hero.svg`, `free-tier-budget.svg`, `promise-pillars.svg`, `comparison-table.svg`, `cli-terminal.svg`, `tier-cascade.svg` pluss `public/images/tier-flow-dark.svg` ja `tier-flow-light.svg`; igavesti tasuta, kataloogikirje, korduva kogumi ja punktitegurite väited loevad ka `promise-pillars.svg`, `free-tier-budget.svg` ja `strategies-grid.svg`. `free-tier-budget.svg` tõmbab oma arvud reaalajas kataloogilaadijast, nii et `FREE_MODEL_BUDGETS` või pakkuja kuvatava nime muutmine punastab CI kuni see fail uuesti genereeritakse.

### Töökoht: `i18n-ui-coverage`

| Skript                            | Kinnitab                                                                                                                                                                                 | Blokeerimine |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `check-ui-keys-coverage` (inline) | UI i18n võtme katvus on ≥ 65%                                                                                                                                                            | Jah          |
| `check-ui-value-drift` (inline)   | Ümberkirjutatud inglise keel** väärtus** ei jäta maha jäänud tõlget                                                                                                                      | Jah          |
| `check-new-key-coverage` (inline) | A** uus** Ingliskeelne võti tõlgitakse igas lokaadis — `__MISSING__:` -marker lükatakse tagasi                                                                                           | Jah          |
| `check-translation-ratio`         | Päris tõlke suhe lokaadi kohta (identne inglise keelega / kohatäide / puuduvad lehed väljaspool lubatud loendit) ei tohi ületada `config/quality/i18n-translation-baseline.json` + slack | **Nõuandev** |

Vajab `fetch-depth: 0` — väärtuse triivi värav diffs `en.json` võrreldes liitmisbaasi.

#### `check-ui-value-drift` — aegunud tõlkevärav

Saab kinni ühe i18n regressiooni, mida teised väravad struktuurselt ei näe: ingliskeelne väärtus kirjutatakse ümber ja _eelmisest_ inglise keelest tuletatud tõlked jäävad maha, nii et mitteingliskeelsed kasutajad loevad enesekindlalt sõnastatud, nüüd vale koopiat.

See saadeti päriselt. `oauthModal.googleOAuthWarning` kirjutati ümber, kui Antigravity sisselogimisabi maandus (#5203);** 39 43-st lokaadist** hoidis teksti, mis käskis operaatoritel "kopeerida täielik URL ja kleepida see alla" — voogu, mida ei saa selle pakkuja jaoks lõpule viia. See jäi märkamatuks kuni #8463, sest:

- `sync-ui-keys` täidab ainult need võtmed, mis on** puudub** , mitte kunagi selliseid, mis on** vananenud** ;
- `check-ui-keys-coverage` loeb klahvi _presence_, nii et aegunud tõlge loetakse hõlmatuks;
- `check-translation-drift` jälgib `docs/i18n/<locale>/**.md` dokumentatsiooni, peegeldab — ei loe kunagi `src/i18n/messages/*.json`. Töö `docs-sync-strict` blokeerimine alates 2026-2009 uuesti sünkroonimisest: muutke põhidokumenti → `npm run i18n:run -- --files=<doc>` (jaotise tasemel, odav).

**Diff-teadlik, mitte lähtetasemega tagatud.** See võrdleb `en.json` liitmisaluses tööpuuga; iga võtme puhul, mille ingliskeelne väärtus on muutunud, on iga lokaat, millel on veel puutumata tõlge, vananenud. Seda meelega** külmutab olemasoleva võla** — a diff ei saa paljastada, millisest vanast inglise keelest ammune tõlge pärineb, seega hindab värav ainult seda, mida praegune muudatus puudutab. Alternatiiv (võtmepõhine räsi baasjoon) maksaks ~ 600 KB genereeritud faili, mis on 3 × suurim olemasolev baasjoon, mis kahandab iga i18n PR.

Selle rahuldamiseks on kaks võimalust:

1. värskendage mõjutatud tõlkeid või
2. määrake need väärtusele `__MISSING__:<new english>` — the runtime, seejärel teenindab parandatud inglise keelt (`src/i18n/request.ts::deepMergeFallback`, #7258) ja tõlke võtmejärjekordi.

Kui string on** tähenduses** muutunud, eelistada** võtme ümbernimetamine** : uus võti ei saa pärida aegunud tõlget. See on muster #8463.

```bash
npm run i18n:check-value-drift          # strict (what CI runs)
npm run i18n:check-value-drift:warn     # report only
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Väljub 0-st koos `SKIP reason=base-unresolved`, kui põhikataloogi ei saa lugeda (madal kloon ilma põhiviiteta), peegeldades `check-openapi-breaking`.

### Töökoht: `i18n`

Täielik i18n valideerimismaatriks (üks töö lokaadi kohta). Kogu töö on nõuandev.

| Skript                          | Kinnitab                       | Blokeerimine                                            |
| ------------------------------- | ------------------------------ | ------------------------------------------------------- |
| `validate_translation.py quick` | Tõlke täielikkus lokaadi järgi | **Nõuandev** (`continue-on-error: true` kogu töö kohta) |

### Töökoht: `pr-test-policy`

Töötab ainult tõmbamistaotluste korral.

| Skript                 | Kinnitab                                                                                                                             | Blokeerimine |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| `check:pr-test-policy` | PRs, mis muudavad tootmiskoodi `src/`, `open-sse/`, `electron/` või `bin/` peavad sisaldama või värskendama teste (kõva reegel nr 8) | Jah          |
| `check:test-masking`   | Muudetud testfailid ei vähenda väidete arvu ega lisa `assert.ok(true)` tautoloogiaid                                                 | Jah          |
| `check:pr-evidence`    | PR keha tsiteerib test/VPS tõendeid muutuse kohta (mehhaniseerib kõva reegli nr 18, grepping PR prose — fragile, vt Backlog)         | Jah          |

### Töökoht: `test-vitest`

Jookseb `build` järel. Plokid liidetakse ebaõnnestumise korral.

| Sviit            | Kinnitab                                                        | Blokeerimine                                                                                                                  |
| ---------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP server (110 tööriista), autoCombo, vahemälu — vitest runner | Jah                                                                                                                           |
| `test:vitest:ui` | UI komponent testib — vitest jooksjat                           | **Blokeerimine** — olemasolevad tõrked on `vitest.config.ts` s selgesõnaliselt välistatud; uued ebaõnnestumised ebaõnnestuvad |

### Igaõhtused töövood (plaanitud, nõuandev)

Need töötavad cron-graafiku (ja `workflow_dispatch`) alusel, mitte kunagi PRs. Kõik on soovituslikud.

| Töövoog                | Kinnitab                                                                                                                                                                     | Blokeerimine |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `nightly-property`     | kiire kontrolli omaduste testid juhusliku seemne + suure käivituste arvuga                                                                                                   | **Nõuandev** |
| `nightly-resilience`   | kuhjakasvu värav, kaose rikkesüst, k6 load/soak                                                                                                                              | **Nõuandev** |
| `nightly-llm-security` | promptfoo süstimiskaitse (blokeerimisrežiim) + garaki sondid (vahele jäetud ilma teenusepakkuja saladuseta)                                                                  | **Nõuandev** |
| `nightly-schemathesis` | OpenAPI lepingu hägustamine (skematees) aktiivse OmniRoute vastu, kasutades `docs/openapi.yaml` — pindade spetsifikatsiooni rikkumisi / töötlemata 500 sekundit (faas 8 B.4) | **Nõuandev** |
| `nightly-mutation`     | Strykeri mutatsioonitesti skoor kiire ühiku raja — ellujäänud mutandid pinnal nõrgad väited                                                                                  | **Nõuandev** |
| `nightly-compat`       | Sõlmemootori ühilduvusmaatriks toetatud `engines.node` vahemikes                                                                                                             | **Nõuandev** |

Jõudluse baasjooned (kuhja, TTFB, ehitusaeg) salvestatakse, mitte ei piirata: vt [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## Kiirusefaas (2026-08-30 → v4.0 LTS): iga lähtetaset lõdvendati 20%

Omaniku otsus (2026-08-30): kuni v4.0 modulariseerimiseni on tarnimiskiirus olulisem
kui tehnilise võla piiri hoidmine. Iga **numbrilist** astmelise kontrolli lähtetaset lõdvendati ühe
auditeeritava toiminguga 20% ning faas on deklareeritud failis `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Mis muutus                                                                                                                                                                                           | Kus                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — väiksem-on-parem arvud ×1.2, suurem-on-parem protsendid ÷1.2 (katvuse alampiiriks jäi 60, `eslintErrors` jääb väärtusele 0, `eslintWarnings` 0 → 20% külmutatud erandite arvust) | `quality-baseline.json` (märkus `_relax_velocity_2026_08_30` loetleb kõik enne → pärast väärtused)     |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                     | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, iga `frozen[*]` / `testFrozen[*]` rea ülempiir ×1.2                                                                                                                                | `file-size-baseline.json`                                                                              |
| failipõhised / TS-koodi põhised arvud ×1.2                                                                                                                                                           | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                  | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` muutub soovituslikuks, kui `_policy.requireTighten === false`                                                                                                                    | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| igaöine `bank-ratchet-shrinks` peatatakse (see talletaks mõõdetud vähenemise ja tühistaks puhvri)                                                                                                    | `.github/workflows/nightly-release-green.yml`                                                          |

Lubatud loendid (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **ei ole** eelarved ja neid ei muudetud. Läbitud/nurjunud olekuga poliitikakontrollid (saladused, SQL-i reeglid,
dokumentatsiooni/keskkonna leping, i18n-i vastavus, ühiktestid) ei muutu — nurjunud test on endiselt nurjunud test.

**Tööriistad**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — ühekordne
  lõdvendamine (`scripts/quality/relax-baselines.mjs`); keeldub sama märkusega teist korda käivitumast.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  mõõdab iga numbrilist kontrolli samamoodi nagu CI ja väljastab iga kontrolli allesjäänud puhvri
  (`scripts/quality/baseline-headroom.mjs`). Igaöine töö `baseline-headroom` avaldab
  tabeli töövoo käivituse kokkuvõttes ja laadib selle JSON-/Markdown-aruande üles artefaktina
  `baseline-headroom-<run_id>`, mida säilitatakse 90 päeva. Hoiatus- ja kriitilised read tähistavad kontrolle,
  mis on oma ülempiirist kuni 10% kaugusel või on selle juba ületanud. Vaadake neid aruandeid
  varajase hoiatusena eelarvete ammendumise kohta; kontrollige probleemi põhjustava kontrolli märkusi
  `_rebaseline_*`. Töö ei loo ega värskenda enam püsivat probleemi; #12149 säilitab varasema
  aruandeajaloo.

**Uue koodi režiim (Clean-as-You-Code) — alates 2026-08-30, ainult PR-i kiirtee**

Sündmuste `pull_request` korral edastab `quality.yml` argumendi `--base-ref <PR base SHA>` käskudele
`check:file-size`, `check:complexity-ratchets` ja `check:dead-code`. Kontrollide
`check:complexity-ratchets` ja `check:dead-code` puhul võrdleb kontroll HEAD-i ühendamisbaasiga,
**piirdudes failidega, mida PR muutis** (`scripts/check/newCodeMode.mjs`: ühendamisbaas materialiseeritakse
ajutises `git worktree`-s, ESLint/knip käivitatakse seal ja HEAD-is ning failipõhiste arvude erinevused leitakse):

- **blokeeriv** — PR lisas muudetud failidesse tsüklomaatilise/kognitiivse keerukuse rikkumisi või surnud eksporte
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` logis);
- **soovituslik** — globaalne koguarv võrreldes külmutatud lähtetasemega. Päritud kõrvalekalle ei muuda
  süütut PR-i kunagi nurjunuks; kõrvalekalle külmutatakse väljalaske kooskõlastamisel uuesti ja puhvrikontroll jälgib seda.

`check:file-size` kasutab baasviidet oma reeglite järgi (`scripts/check/check-file-size.mjs`, #8522):
see kontrollib puus iga lähtekoodi- ja testifaili, loeb käsuga `git show` iga faili ridade arvu PR-i baasis
ning märgib faili nurjunuks ainult siis, kui see kasvab suuremaks oma lähtetaseme ülempiirist
(`frozen` / `testFrozen` või lähtetasemest puuduva faili puhul `cap` / `testCap`) ja baassuurusest.
Seetõttu ei muuda juba baasis kõrvalekaldunud fail süütut PR-i kunagi nurjunuks.

`check:boundary:ratchet` rakendab sama reeglit oma ainsale arvule
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): PR-i sündmuste korral edastavad nii
`quality.yml`-i kiirkontrollid kui ka `ci.yml`-i lintimistöö PR-i baasi SHA, baaskommitit
mõõdetakse `git archive`-i ekspordist ning PR ebaõnnestub ainult siis, kui selle `open-sse → src` servade
arv ületab väärtustest `metrics.boundaryOpenSseToSrc` ja baasi servade arv suurema.
Ülempiiri ületav baasi triiv raporteeritakse (`päritud baasi triiv`), kuid see ei muuda süütut PR-i
kunagi punaseks; push → main säilitab absoluutse ülempiiri ning lahendamatu baasi SHA korral
võetakse hoiatusega kasutusele absoluutne ülempiir.

`workflow_dispatch`-i käivitustel, väljalaske rohelisuse kontrollil ja igaöisel varuruumi tööl puudub PR-i baas
ning need kasutavad endiselt absoluutset (globaalset) võrdlust. Testikate, duplikaadid ja tüübikate jäävad
praegu globaalseks (nende tööriistad ei võimalda failipõhist erinevust odavalt arvutada) — need on kandidaadid
samaks käsitluseks.

**Faasi lõpetamine versioonis v4.0 (LTS = varasemast rangem, mitte „tagasi tavapäraseks“)**

1. Puhta `release/v4.0.0` tipu peal: dokumenteerimiseks `npm run quality:headroom --json`, seejärel
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` ning iga tüübikontrolli värava
   `--update` — kõik lähtetasemed langetatakse mõõdetud väärtuseni.
2. Kustuta failist `quality-baseline.json` `_policy` (aktiveerib uuesti `--require-tighten`-i ja igaöise
   varuruumi kogumise), taasta failis `check-openapi-coverage.mjs` `THRESHOLD = 36` (või suurem).
3. Karmista piiranguid mõõdetust enam seal, kus modulariseerimine end ära tasus: failisuuruse `cap` tagasi väärtusele 1000
   (või 800), testikatte alampiirid +5, surnud ekspordid modulariseeritud pakettides 0.

## Ratchet’i baastase (`quality-baseline.json`)

Ratchet’i mootor (`scripts/quality/check-quality-ratchet.mjs`) loeb faili `quality-baseline.json`
ja võrdleb seda värskelt kogutud failiga `quality-metrics.json`. Iga mõõdik, mis halveneb
rohkem kui selle epsilon lubab, põhjustab järgu nurjumise.

Praegu jälgitavad mõõdikud:

| Mõõdik                | Suund  | Tähendus                                |
| --------------------- | ------ | --------------------------------------- |
| `eslintWarnings`      | `down` | ESLinti hoiatuste arv ei tohi suureneda |
| `coverage.statements` | `up`   | Lausete katvus ei tohi väheneda         |
| `coverage.lines`      | `up`   | Ridade katvus ei tohi väheneda          |
| `coverage.functions`  | `up`   | Funktsioonide katvus ei tohi väheneda   |
| `coverage.branches`   | `up`   | Harude katvus ei tohi väheneda          |

Baastaseme värskendamiseks pärast tegelikku paranemist tehke järgmist:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Lipp `--update` kirjutab praegu mõõdetud väärtused faili `quality-baseline.json`.
Kommiteerige see fail koos muudatusega, mis mõõdikut parandas. PR, mis parandab
mõõdikut ilma baastaset värskendamata, tuvastatakse lipuga `--require-tighten` (etapp 6A.5,
rakendamine on ootel).

### CodeQL-i ratchet: värskendamissagedus ja käsitsi käivitamine

`check:codeql-ratchet` loeb **hoidla olekut, mida värskendatakse ajakava alusel — mitte iga PR-i korral.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` annab tulemuseks
`state: configured`, `schedule: weekly`: see on GitHubi vaikeseadistuse kontroll, mitte iga tõuke
korral tehtav analüüs. Tagajärg: pärast hoiatusi PARANDAVA PR-i mestimist loeb ratchet
endiselt vana, suuremat arvu kuni järgmise ajastatud kontrolli käivitumiseni — seega teatab see
halvenemisest iga avatud PR-i puhul, sealhulgas parandava PR-i enda järelmuudatuste puhul, kuni kontroll järele jõuab.

**Käsitsi värskendamine**: `gh workflow run codeql.yml --ref release/vX.Y.Z` käivitab
analüüsi uuesti ja avaldab hoiatused mõne minuti jooksul uuesti. Lugege esmalt faili `.github/workflows/codeql.yml`
— selle päis selgitab, et see on ainult `workflow_dispatch`-põhine, **sest see on vastuolus
GitHubi „vaikeseadistusega“** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Käivitajate `push`/`pull_request`/
`schedule` taastamine nõuab esmalt **omaniku toimingut**: Settings → Code security →
CodeQL: Default → Advanced. Ärge lisage käivitajat `schedule:` ilma seda ümberlülitust tegemata — see
tekitab ainult nurjunud käivitusi.

**Pärast arvu vähenemist karmistage baastaset** — `node scripts/check/check-codeql-ratchet.mjs
--update` kirjutab uue mõõdetud arvu faili `quality-baseline.json` →
`metrics.codeqlAlerts.value`, et ratchet ei lubaks vaikimisi halvenemist tagasi
vana ülempiirini. Läbitöötatud näide (2026-09-02/03): PR #12502 parandas 7 tegelikku hoiatust
(13 → 6 mõõdetud avatud hoiatust); PR #12530 karmistas fikseeritud baastaseme 11 → 6, et see vastaks tulemusele;
ülejäänud 6 märgiti seejärel iga hoiatuse kohta esitatud põhjendusega lahendatuks, kuni avatuks jäi 0 hoiatust.

**Hoiatuste lahendatuks märkimise otsustab operaator (range reegel #14)** — ärge märkige CodeQL-i hoiatust
kunagi lahendatuks ilma tehnilist põhjendust lahendatuks märkimise kommentaari lisamata: `won't fix`
ülesvooluprotokolli nõude korral, `used in tests` testifixtuuri korral, `false positive`
sellise puhastaja korral, mida CodeQL ei suuda tuvastada (pretsedent: `docs/security/ERROR_SANITIZATION.md`).

---

## Testide korduskatsete poliitika (WS5.4, v3.8.49)

Korduskatseid hallatakse iga käitaja kohta eraldi, mitte kunagi üldise lausreeglina — üldine korduskatse muudab tegelikud regressioonid nähtamatuteks ebastabiilsusteks:

| Käitaja          | Poliitika                                                                                                                                            | Põhjus                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` ainult CI-s koos seadega `trace: on-first-retry`                                                                                        | Brauseri/võrgu ajastus on tõepoolest mittedeterministlik; üks korduskatse koos jäljega muudab ebastabiilsuse diagnoositavaks artefaktiks |
| Vitest           | EI OLE üldist korduskatset. Tõendatult ebastabiilsele testile määratakse selgesõnaline testipõhine korduskatse (nähtav diffis, vaadatakse PR-is üle) | Hoiab karantiiniloendi repos, mitte kunagi läbipaistmatuna                                                                               |
| node:test (unit) | MITTE KUNAGI korduskatset                                                                                                                            | Ebastabiilne üksustest on testi viga — paranda see, ära lihtsalt käivita uuesti                                                          |

Siht-SLO-d pärast ebastabiilsuse telemeetria valmimist (WS5.2/5.3): <1% ebastabiilsuse määr testi kohta
(„paranda kohe” lävend), ≥95% läbimismäär konveieri kohta. Valdkonna võrdlusväärtused —
kalibreerida ümber meie enda mõõtmiste põhjal.

## Väljalasketaseme põrkmehhanismi nihe (WS5.5, v3.8.49)

Kui põrkmehhanism (faili suurus, keerukus, eslint-i hoiatused) halveneb PUHTA väljalaskeharu
tipus — st ühendamiste KOMBINATSIOON põhjustas regressiooni ja ükski PR eraldi ei taasesita
regressiooni oma harus — vastutab paranduse eest **üks kord väljalaskeharus väljalaskejuht**:
eelistada eraldamist/refaktoreerimist; lähtetaseme uuendamine on lubatud ainult koos dokumenteeritud
põhjenduskirjega. Ära kunagi lükka kombinatsioonist tulenevat nihet kaastöötaja PR-i kanda ega
uuenda lähtetaset iga PR-i kohta (see peidab tegelikud regressioonid). Esmalt erista põhjus:
taasesita ebaõnnestumine puhta tipu põhjal prooviks loodud worktree-s, enne kui eeldad, et selle põhjustas sinu PR.

## Põrkmehhanismi piirmäärade langetamise talletamine — allapoole liikumine (#8584)

Põrkmehhanism on ainult pooleldi automaatne ja automatiseeritud on vale pool. Piirmäära
**tõstmine** on käsitsi tehtav JSON-i muudatus, mis võtab kümme sekundit ja on kiireim viis
ebaõnnestunud PR-i blokeeringust vabastamiseks. Piirmäära **langetamiseks** peab keegi käivitama
`--update` ja tulemuse commit'ima — ning kuni töö `bank-ratchet-shrinks` lisamiseni ei käivitanud
seda ükski töövoog. Mõõdetud tagajärg (2026-07-25): 18 fikseeritud faili olid juba uute failide
800-realise piirmäära juures või sellest allpool, halvim neist 132× (`src/shared/validation/schemas.ts`,
19 rida, kuid piirmäär 2,523); keerukuse ülempiir liikus umbes 37 lähtetaseme uuendamise märkme jooksul
`1794 → 2169`, kusjuures toimus täpselt üks langus (−1); ning „kitsenda järgmises tsüklis käsuga
`--update`” kirjutati 31 korda ja järgiti ühe korra. Piirmäär, mis püsib kauem kui selle tinginud
kood, muudab iga lõpetatud osadeks jaotamise vaikimisi kasvuruumiks järgmisele faili muutjale.

`nightly-release-green.yml` → töö **`bank-ratchet-shrinks`** sulgeb selle tsükli:

|            |                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| Käivitub   | `schedule` (3× päevas) + `workflow_dispatch` — teadlikult **mitte** `push`                                                 |
| Mõõdab     | kõrgeimat `release/vX.Y.Z`, kasutades sama resolutsiooni ja sisestuskaitset nagu `release-green`                           |
| Kirjutab   | `check:file-size --update` ja `check:complexity-ratchets --update` (mõlemad saavad konstruktsiooni järgi ainult vähendada) |
| Kontrollib | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                                   |
| Tarnib     | ühe alati ajakohase PR-i väljalaskeharu vastu — sunduuendatakse, rämpsu ei tekitata                                        |

Talletamine toimub paketi kaupa, mitte iga push'i järel, sest sellel pole latentsusnõuet
(8 tunni jooksul talletatud langus on piisav), samas kui iga ühendamise järel käivitamine
ehitaks ühendamiskampaaniate ajal PR-i haru korduvalt ümber ja teeks iga kord täieliku ESLint-i
läbivaatuse. Tuvastamine jääb push'i peale (`release-green`); ainult talletamine toimub paketi kaupa.

### Ohutuse kontrollija

Töö kirjutab lähtetasemeid järelevalveta, mistõttu muudab selle vastuvõetavaks
`verify-ratchet-bank.mjs`. See võrdleb `--update`-järgset puud `HEAD`-iga ja **katkestab töö
enne ühegi commit'i loomist** — PR-i avamata — kui iga muudatus ei ole üks järgmistest:

- `frozen` / `testFrozen` numbriline kirje on **langetatud** või **eemaldatud**
- `complexity-baseline.json` → `count` on **langetatud**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` on **langetatud**

Kõik muu ebaõnnestub: arvu tõstmine, kirje lisamine, `cap`/`testCap` muutmine või
`_rebaseline_*` märkme kustutamine/ümberkirjutamine (need märkmed on auditijälg selle kohta,
miks iga ülempiir eksisteerib, ning neid hoitakse failikirjetega samas objektis `frozen`).
Robot, mis võiks piirmäära tõsta, oleks praegusest olukorrast selgelt halvem. Regressioonikaitse:
`tests/unit/verify-ratchet-bank.test.ts`.

Töö ei tee kunagi push'i harusse `release/*` — PR-i ühendab inimene, seega ei saa vigane mõõtmine
ilma ülevaatuseta harusse jõuda.

## Lubatud loendi poliitika

Iga kontroll, mis ei saa olemasolevate rikkumiste tõttu ebaõnnestuda, kasutab fikseeritud lubatud loendit
(nt `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Poliitika on järgmine:

**Parandage algpõhjus; kasutage lubatud loendit ainult siis, kui rikkumine on juba olemas ja
seda ei saa samas PR-is parandada.**

Kirje lisamisel lubatud loendisse:

1. Lisage kommentaar koos põhjendusega.
2. Viidake jälgimisülesandele (nt `// #3498 — 2. etapi funktsioon, pole veel rakendatud`).
3. Eemaldage kirje samas PR-is, mis rikkumise parandab — aegunud kirje, mis enam
   aktiivset rikkumist ei eira, on ise viga (pärast rakendamist nurjab 6A.3 aegunud jõustamise kontroll
   üksiku lubatud loendi kirje korral kontrollvärava läbimise).

**Ärge** lisage lubatud loendisse kirjeid selleks, et testid kiiremini läbiksid. Roheline kontrollvärav koos kasvava
lubatud loendiga loob petliku kvaliteeditunde.

### Kui kontrollvärav teie PR-is ebaõnnestub

1. **Lugege kontrollvärava väljundit hoolikalt** — see ütleb täpselt, milline fail või sümbol
   reeglit rikkus.
2. **Parandage rikkumine** — enamik kontrollväravaid on deterministlikud failisüsteemi kontrollid, mis läbivad testi kohe,
   kui kood on korrektne.
3. **Kui rikkumine on juba olemas** (st teie ei tekitanud seda, kuid kontrollvärav
   nüüd hõlmab seda): lisage lubatud loendisse kirje koos põhjendava kommentaari ja jälgimisülesandega.
4. **Kui kontrollvärav on põrkmehhanism** (koodikate, ESLinti hoiatused, dubleerimine, keerukus):
   teie muudatus halvendas mõõdikut. Parandage algpõhjus või käivitage (harvadel juhtudel)
   `npm run quality:ratchet -- --update`, kui muudatus on tahtlik ja mõõdiku
   halvenemine vastuvõetav — kuid dokumenteerige PR-i kirjelduses põhjus.
5. **Nõuandvad kontrollväravad** (`continue-on-error: true`) on informatiivsed — need ei blokeeri
   liitmist, kuid kuvatakse CI kokkuvõttes. Parandage need sellegipoolest.

---

## Uue kontrollvärava lisamine

1. Looge `scripts/check/check-<name>.mjs` (või `.ts`). Poliitika kontrollväravad lõpetavad koodiga 0/1.
   Põrkmehhanismi tüüpi kontrollväravad väljastavad mõõdiku faili `quality-metrics.json` skripti `collect-metrics.mjs` kaudu.
2. Lisage `"check:<name>": "node scripts/check/check-<name>.mjs"` faili `package.json`.
3. Ühendage see failis `.github/workflows/ci.yml` sobiva töö alla
   (poliitika → `lint` või `docs-sync-strict`; põrkmehhanism → `quality-gate`).
4. Kui sellel on lubatud loend, rakendage `reportStaleEntries()` failist
   `scripts/check/lib/allowlist.mjs`, et aegunud kirjed tuvastataks automaatselt.
5. Kirjutage kausta `tests/unit/build/` test, mis katab kontrollvärava tuvastamisloogika.
6. Uuendage seda dokumenti (lisage vastava töö tabelisse rida).

---

## Agendi tööriistad: LSP tsüklis (valikuline)

Lisaks CI kontrollväravatele sisaldab OmniRoute **valikulist** `agent-lsp` alustaristut
(projektitaseme `.mcp.json`, 7. faasi ülesanne 15). Looge `.mcp.json`,
et teha TypeScripti keeleserver programmeerimisagentidele kättesaadavaks, võimaldades neil lahendada sümbolid /
diagnostika **enne** koodi kirjutamist — see on kompileeri-enne-väidet kaaslane käsule
`typecheck:core`, mis vähendab „väljamõeldud sümbolite” vigu juba nende tekkekohas. Seda ei laadita tahtlikult
automaatselt (MCP↔LSP silla valite ja kontrollite teie); vigane kirje logib ainult
ühendusvea ega katkesta kunagi seansse.

---

## Ratsionaliseerimise mahajäämus (ROI ülevaatus — 9. etapp, 3. laine)

See inventuur viidi 2026-06-17 vastavusse failiga `ci.yml` (eelmisest versioonist puudusid
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Kooskõlastatud kogumi ROI ülevaatus
tuvastas järgmised ratsionaliseerimise kandidaadid. **Ühendamised on mehaanilised CI
muudatused; ümberlülitamised/eemaldamised on käitaja otsustada olevad poliitikavalikud.** Midagi alltoodust
pole veel rakendatud.

**Ülalpool on dokumenteerimata ka** (soovituslik, madala signaaliga): töö `docs-lint`
(markdownlint + Vale, kogu tööl `continue-on-error`) ja eraldiseisvad skanneri töövood
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` asub failis
`quality-baseline.json`, kuid pole failis `ci.yml` ühendatud blokeeriva põrkmehhanismiga — mõõdik on
praegu orvuks jäänud.

### Ühendamine / dubleerimise eemaldamine (mehaaniline, väiksem risk)

Iga kandidaati kontrolliti 2026-06-17 aktiivse kontrollvärava oleku suhtes (usalda, kuid kontrolli);
mitu „ilmselget“ ühendamist osutusid varjatud võlga sisaldavaks ega ole **puhtad** asendused.

- **`check:docs-sync` käivitub kaks korda** — eraldiseisvalt töös `lint` ning uuesti `check:docs-all` (`docs-sync-strict`) sees ja husky commit'i-eelses konksus. ✅ **TEHTUD** — eraldiseisev `lint`-käivitus eemaldatud.
- **CVE-skannimine** — ❌ **EI OLE puhas ühendamine.** `audit:deps` nurjub kohe iga kõrge/kriitilise CVE korral; `check:vuln-ratchet` (osv) nurjub ainult baasjoonega võrreldes toimunud _regressiooni_ korral (praegu 1 MODERATE). Semantika on erinev — `audit:deps` eemaldamine kaotaks absoluutse kõrge/kriitilise taseme kontrollvärava. Säilitage mõlemad.
- **Tsüklite tuvastamine** — ✅ **TEHTUD** (#15159 G-01/G-02). Siinne vana tekst nimetas `check:cycles` kontrolli „roheliseks, kureeritud“ kontrollväravaks ja põhjendas selle blokeerivana hoidmist sellega, et `check:circular-deps` (dpdm) tuvastas 91 tsüklit. See roheline tulemus oli **valepositiivne roheline**: `check:cycles` skannis 5 alamkataloogi (450 faili), sobitas ainult staatilisi `import|export … from` konstruktsioone ning jättis välja kõik `@/` ja `@omniroute/open-sse/` spetsifikaatorid, mistõttu ei suutnud see näha dünaamilise impordi ja aliase tsükleid, mis repositooriumis domineerisid. Parandatud: kontrollvärav läbib nüüd kataloogid `src` + `open-sse` (5023 faili), kogub spetsifikaatorid TypeScripti AST-st (seega läheb `import("…")` arvesse, kuid tüübipositsioonis `typeof import("…")` mitte) ning lahendab tsconfigi `paths`-väärtused. See leiab **14** tsüklit, mitte 0. Kuna 14 olemasolevat tsüklit ei saa kontrollvärava PR-is parandada, on `check:cycles` nüüd **põrkmehhanism** (`--ratchet`, ülempiir `metrics.cycles.value = 14` failis `quality-baseline.json`, `direction: down`) — see blokeerib iga _regressiooni_ ja arv saab ainult väheneda. CI käivitab `npm run check:cycles:ratchet`. Vähendamine toimub koos üksusega **A-01**. `check:circular-deps` (dpdm) jääb laiema teise arvamusena soovituslikuks.
- **Keerukus** — ✅ **TEHTUD** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): üks ESLinti läbimine, loendamine `ruleId` järgi, et tsüklomaatilise keerukuse + maksimaalse ridade arvu ja kognitiivse keerukuse baasjooned püsiksid sõltumatuna; eraldiseisvad `check:complexity` / `check:cognitive-complexity` säilivad kohaliku `--update` jaoks.
- **`/api` hallutsinatsioonivastane kontroll** — ✅ **TEHTUD** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): üks `src/app/api` failisüsteemi inventuur, openapi-routes + docs-symbols annavad endiselt aru sõltumatult; eraldiseisvad kontrollid säilivad kohalikeks käivitusteks.
- **`check:node-runtime` käivitub 11 töös** — ⚠️ **madal ROI.** Igaüks kasutab eraldi käitajat ja kontroll võtab <1 s; kogusääst ~10 s, kuid selle hinnaks oleks odava tööpõhise kaitse kaotamine. Muudatuste vaeva ei väärt.
- **`typecheck:noimplicit:core` CI lintimisel** — ✅ **lint-tööst eemaldatud** (oli soovituslik `continue-on-error`); blokeeriv tüübipind on `typecheck:core` + `check:type-coverage`. Kohalik skript säilitati.

### Ümberlülitamine / otsustamine (käitaja poliitika)

- `check:openapi-security-tiers` (soovituslik) — ❌ **EI OLE puhtalt ümberlülitatav.** See lõpetab koodiga 0, kuid hoiatab, et mitmel `traffic-inspector` marsruudil jaotises `LOCAL_ONLY_API_PREFIXES` puudub annotatsioon `x-loopback-only: true`. Selle jõustamiseks tuleb esmalt lisada need annotatsioonid faili `openapi.yaml`.
- `typecheck:noimplicit:core` (soovituslik) — blokeeriv `check:type-coverage` põrkmehhanism katab seda suuresti. Muutke see põrkmehhanismiks või eemaldage üleliigne teine `tsc` läbimine.
- `test:vitest:ui` (nüüd **blokeeriv**) — olemasolevad tõrked on failis `vitest.config.ts` selgesõnaliselt välistatud jälgimiskommentaaridega `// #8618`; uued tõrked nurjavad töö.
- `check:secrets` (gitleaks, blokeeriv põrkmehhanism, mis on külmutatud 3 dokumenteeritud valepositiivse tulemuse juures) — lisage need 3 lubatud loendisse, et jõuda nullini, või alandage kontroll soovituslikuks. Kattub GitHubi sisseehitatud saladuste skannimisega + `check:public-creds`.
- `check:pr-evidence` (blokeeriv, otsib PR-i kirjeldusest teksti) — suur valepositiivsete tulemuste risk; eemaldamine nõrgendaks range reegli nr 18 jõustamist, seega on see tõeline poliitikaotsus.
- `semgrep` (soovituslik eraldiseisev kontroll) — kattub OWASP-i kategooriate puhul CodeQL-iga; ühendage selle baasjoon põrkmehhanismiga või eemaldage.

---

## Seotud dokumentatsioon

- Tarkvara tarneahel (päritolu, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — võtmekogumite võrdsuse kontroll

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, töö `i18n-ui-coverage`).
Võrdleb iga faili `src/i18n/messages/<locale>.json` lehtvõtmete kogumit failiga `en.json` ja nurjub
mis tahes puuduva või üleliigse lehe korral, olenemata sellest, millal võti lisati. Kohatäited
`__MISSING__:` loetakse olemasolevaks (nende sisu kuulub suhtarvukontrolli vastutusalasse). See on
kahe erinevuspõhise/protsendipõhise kontrolli absoluutne täiendus: `check-ui-keys-coverage` nõuab iga
lokaadi puhul vähemalt 80% katvust (43 puuduvat võtit umbes 13 000-st annavad endiselt tulemuseks
99,7%) ja `check-new-key-coverage` hindab ainult võtmeid, mille PR lisab faili `en.json`. Lokaadipakk
luuakse selle päeva failist `en.json`, mil selle haru luuakse, ning seda tõlgitakse mitu päeva, samal
ajal kui baasharusse lisatakse jätkuvalt võtmeid; paki PR ise ei lisa ühtegi võtit, mistõttu ei
reageerinud kumbki sõsarkontroll, kui pakk 1 (#13044) liideti nii, et üheksas lokaadis puudus 43
võtit, ja pakk 2 (#13660) nii, et kaheksas lokaadis puudus 10 võtit (2026-09-15). Kõrvalda tõrge
käsuga `node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; `extra`-leht
tähendab, et lähtefailist on see eemaldatud — kustuta see lokaadist. `--warn` raporteerib ilma
nurjumiseta. `--catalog=cli` käitab sama võrdlust kataloogis `bin/cli/locales`
(`npm run i18n:check-keys:cli`); mõlemad sammud asuvad töös `i18n-ui-coverage`.

#### `check-new-key-coverage` — uute võtmete i18n-kontroll

Kontrolli `check-ui-value-drift` sõsarkontroll. Too tuvastab ingliskeelse väärtuse, mis **kirjutati
ümber**, samal ajal kui selle tõlked jäid muutmata; see kontroll tuvastab ingliskeelse võtme, mis
**lisati**, kuid mida mõni lokaat ei saanud.

`check-ui-keys-coverage` ei suuda sellist olukorda tuvastada: see nõuab iga lokaadi puhul minimaalset
katvusprotsenti ning üheteistkümne puuduva võtme korral umbes 13 000-st jääb katvuseks 99,9%.
Keelepõhine protsent ei suuda väljendada olukorda „see funktsioon avaldati tõlkimata“ — terve
funktsioon võib jõuda uude lokaati ilma igasuguse tekstita, ilma et number üldse muutuks.

Juhtum, mille see fikseerib: Orchestration Canvase 3. etapis tõlgiti selle üksteist võtit kõigisse
tol ajal olemas olnud 42 lokaati. Mõni tund hiljem suurendas EL-i keelte pakk (#13044) hoidla
lokaadid 51-ni ning üheksa uut lokaati (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) ei
saanud neid võtmeid kunagi. `deepMergeFallback` asendab puuduva võtme ingliskeelse tekstiga, mistõttu
oli tõrke ilminguks tõlkimata, mitte tühi kasutajaliides — tegelik probleem, mis jäi oma ülesehituse
tõttu märkamatuks.

Nagu sõsarkontrollgi, on see **erinevusteadlik**: see võrdleb liitmisbaasi ingliskeelset versiooni
tööpuuga, mistõttu olemasolevad lüngad jäävad muutumatuks ja kontrolli sisselülitamiseks ei olnud
migraati vaja.

**Marker `__MISSING__:<english>` ei rahulda seda kontrolli (alates 2026-09-17).** Varem oli see
dokumenteeritud edasilükkamisviis — käitusaeg kasutab korrektset ingliskeelset varuvarianti —, kuni
kaheksa funktsiooni-PR-i lisasid 2026-09-16 kokku 61 võtit ja lisasid tõlkimise asemel markeri kõigisse
65 lokaati: see kontroll aktsepteeris neid kõiki, miski ei blokeerinud PR-e ning blokeeriv tegeliku
tõlke suhtarvukontroll nurjus seejärel väljalaske viimase versiooni puhul kõigil (pt-BR 3,2% > 2,5%

- 0,5). Marker loetakse nüüd puuduvaks tõlkeks. Kõrvalda tõrge käsuga
  `node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40` või
  kõigis lokaatides paralleelselt käsuga `npm run i18n:translate-new-keys`
  (`scripts/i18n/translate-new-keys.sh`, toimib lahtiühendatult, keeldub käivitumast ilma
  keskkonnamuutujateta `OMNIROUTE_TRANSLATION_*`). Võti, mis peab jääma ingliskeelseks (fikseeritud
  toote-, mootori- või lipunimi), kuulub faili `scripts/i18n/untranslatable-keys.json`, mitte kunagi
  markeri taha. `vi` keelab markerid täielikult (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — ootele pandud testide kontroll

Fail, mis on faili `vitest.config.ts` loendis `exclude`, on test, mida ei käitata, kuid puu lugejale
näib see katvusena. Kommentaari `// #8618 — pre-existing failure; remove this exclusion when fixed`
taha kogunes kuuskümmend kaks faili. Probleem #8618 suleti 2026-08-11, samal ajal kui selle jälgitav
loend kasvas 45 kirjelt 62-ni ning iga uus kirje päris kommentaari, mis viitas suletud probleemile.
Kui loend lõpuks failhaaval üle mõõdeti (#13204), **läbis 62 failist 51 testi praeguse puu suhtes
ilma lähtekoodi muutmata**.

Kontroll nõuab, et iga välistus, mis osutab tegelikule failile, (a) nimetaks jälgimisprobleemi ja
(b) esineks failis `config/quality/vitest-exclusions.json` koos mõõdetud olekuga, nii et välistuse
lisamine oleks eraldi failis ülevaadatav erinevus, mitte lihtsalt järjekordne rida 60 kirjega massiivis.
Kontroll ei käita välistatud teste tahtlikult uuesti — see võtab umbes 10 minutit ja kuulub
perioodilisse töösse; register talletab iga testi viimase mõõtmise aja.
