# Quality Gates Reference (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Tämä asiakirja on kaikkien OmniRouten CI-laatuporttien ensisijainen viite.
Siinä kuvataan jokainen portti, mitä se validoi, missä CI-työssä se suoritetaan, käyttääkö se
ratchet-vertailutasoa vai hyväksy/hylkää-käytäntöä ja estääkö se koontiversion muodostamisen vai onko se neuvoa-antava.

Lyhyt yhteenveto ja sallittujen kohteiden luettelon käytäntö ovat `AGENTS.md`-tiedoston
"Quality Gates & Ratchets" -osiossa. Saman järjestelmän kriittinen arviointi, kypsyysluokitus ja
työkaluista riippumaton toisintamissuunnitelma ovat
[laatuporttien käsikirjassa](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Porttien inventaario ja toteutusprofiilit

### Ehdokas pääsy

Kumpikin CI ja Quality Gates -työnkulku antaa vakaan tuloksen: `Gate / CI` ja `Gate / Quality`. Heidän versioidussaan sisäänpääsykäytännössä luetellaan kaikki alkupään työt tarpeen tai neuvoa-antavan mukaan. Soveltuvan vaaditun työn on onnistuttava: puuttuvat, peruutetut, ohitetut, odottavat ja tuntemattomat tulokset eivät voi määrittää PASS. Kelvollinen vain asiakirjoja tai luetteloita koskeva luokitus voi tehdä koodikaistasta käyttökelvottoman. luonnos PR ei ole hyväksytty ehdokas. `hotfix` -merkintä ei luovu todisteista.

Molemmat työnkulut kattavat PRs main/release -haaroihin, työnnät `main` hen, manuaaliset lähetykset ja yhdistämisryhmätapahtumat. Push, lähetä ja yhdistä ryhmä suorittaa koko valikoiman. Työnnät `release/**` hen eivät käynnistä niitä (2026-10-18): jokainen muutos suoritti jo matriisin PR ssä ja yhdistetty yhdistelmä on Release-Greenin työ (`docs/ops/RUNNER_BOX.md` → Hosted lane). Haarukat ja yhdistämisryhmät käyttävät isännöityjä juoksijoita töihin, jotka muutoin valitsevat itseisännöidyt juoksijat; riittävä isännöity kapasiteetti on varmistettava ennen käyttöönottoa.

Jokainen JSON -kuitti tunnistaa uloskirjatun SHA, työnkulun suorituksen ja yrityksen. CLI hylkää checkout/event SHA -epäsopivuuden. Työnkulkutestit sitovat käytäntöjäsenyyden tuomiotyön `needs` luetteloon, joten uusi tai poistettu kaista ei voi kadota hiljaa. Kuitit kattavat heidän oman työnkulkunsa, eivät julkaisua, käyttöönottoa tai olemassa olevan neuvontaskannerin sisäisiä osia. Molempien tarkistusnimien aktivointi haarasäännöissä on erillinen hallinnollinen muutos; näiden töiden lisääminen ei sinänsä suojaa haaraa.

### Staattinen skannausinventaari

Versioitu npm-alias-inventaari ja staattisen skannauksen jäsenyys ovat `config/quality/gate-manifest.json`. Suorita `npm run check:gate-manifest` tarkistaaksesi skriptien nimet ja tarkat komennot `package.json` vastaan; lisäykset, poistot ja komentojen siirtyminen epäonnistuvat sekä paikallisessa koukussa että muutoksen luokittelussa CI ssä. Alias ei ole työnkulkutyö, matriisi-ilmentymä tai testitapaus: näitä lukuja ei saa esittää keskenään vaihdettavissa olevina.

Käytä `npm run quality:scan -- --list` tai `npm run quality:scan:fast -- --list` komentoa tarkistaaksesi valitut aliakset suorittamatta niitä. Runner kutsuu npm-alkupisteen, joten sen ajonaika (mukaan lukien Bun jos se on määritetty) säilyy. Luettelotietueet kirjaavat näiden profiilien ulkopuoliset aliakset erikseen kutsutuina, ja ylläpitokomennot ovat kiellettyjä vain luku -tarkistusprofiileissa.

Nämä profiilit kattavat vain staattisen skannauksen. Ne eivät sertifioi tuotetestejä, kattavuutta, pakkaamista, ulkoisia tarkastuksia tai ehdokkaan täydellistä julkaisun hyväksyntää. Työnkulun sisäänpääsy käyttää linkitettyjä `config/quality/admission-policy.json` ja `scripts/quality/admission-verdict.mjs` koodeja. Release-tarkkailijaprofiilit pysyvät erillisinä; tarkastaa sovellettavat sekit ja kuitit itsenäisesti. Alla oleva proosaluettelo on viite, ei todiste siitä, että portti todella juoksi.

Käsikirjoitukset elävät `scripts/check/` (policy Gates) ja `scripts/quality/` (racket engine) alla. CI totuuden lähde on `.github/workflows/ci.yml`.

### Vapauta PR pikapolku (`quality.yml`)

`.github/workflows/quality.yml` täydentää CI main/release PRs ssä, siirtää `main` hen, lähettää ja yhdistää ryhmiä. PRs käyttää polkusuodatettuja pikatarkistuksia. Pysyvästi poistettu käytöstä kaksoiskoonnos poistettiin; todelliset build/package/boot -sekit pysyvät CI ssa.

| Job                                              | Laajuus                                                                                                                                                                                                                                              | Estäminen                     |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `Docs Gates (fast-path)`                         | Docs/code PRs; API docs refs ja docs-all                                                                                                                                                                                                             | Kyllä                         |
| `Fast Quality Gates`                             | Koodi PRs; staattiset tarkastukset, tyyppitarkistus, kojelaudan tyyppitarkastus, vaikuttaneiden yksiköiden testit                                                                                                                                    | Kyllä                         |
| `Forgotten sibling tests`                        | Koodi PRs; muuttuneet moduulit, jotka on jäljitetty staattisiin kuluttajiin ja ehdokassisarusten testeihin; tynnyri- ja dynaamisen tuontipolut raportoidaan neuvoa-antavia diagnostiikkatietoja, joihin viitataan sallittujen luettelon poikkeuksina | **neuvoa-antava**             |
| `Vitest (fast-path)`                             | Koodi PRs; nopea vitest-sviitti                                                                                                                                                                                                                      | Kyllä                         |
| `Unit Tests fast-path`                           | Koodi PRs; 4-shard-yksikkösviitti                                                                                                                                                                                                                    | Kyllä                         |
| `No new ESLint warnings`                         | Koodi PRs; vaimennustietoinen nukkasuoja                                                                                                                                                                                                             | Kyllä, mukaan lukien haarukat |
| `Merge integrity (changelog + generated skills)` | Ei-luonnos PRs; muutosloki ja luotu taitojen synkronointi                                                                                                                                                                                            | Kyllä, mukaan lukien haarukat |

#### Unohtunut sisarusten testiraportti

`npm run check:forgotten-sibling-tests` käyttää uudelleen tuontiratkaisua testi-vaikutuskartan takana. Jokaiselle muutetulle tuotantomoduulille se raportoi deterministiset `changed module/symbol -> static consumer -> candidate sibling test` ketjut, kun ehdokastesti puuttuu pull-request diff:stä. Markdown-yhteenveto ja JSON -tulos säilytetään `forgotten-sibling-tests` -työnkulun artefaktina kalibrointia varten ennen estävien käyttöönottoa.

Tynnyrijälleenvienti ja dynaaminen tuonti ovat vain resoluutiodiagnostiikkaa; ne eivät koskaan luo estävää löytöä. Arvostellut poikkeukset elävät paikassa `config/quality/forgotten-sibling-allowlist.json`. Jokaisessa merkinnässä on nimettävä kuluttaja- ja ehdokastesti, annettava erityinen perustelu ja linkitettävä GitHub ongelma tai vetopyyntö. Väärin muotoiltujen merkintöjen sulkeminen epäonnistuu. Poikkeukset eivät voi estää poistettua ehdokastestiä tai erotusta, joka lisää `.skip`/`.todo`; väitteen heikennys ja muu peitto jäävät itsenäisesti estävän `check:test-masking` portin omistukseen.

### Työ: `lint`

Toimii jokaisessa PR - `main`. Lohkot sulautuvat epäonnistuessa.

| Käsikirjoitus (`npm run ...`)     | Vahvistaa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Estäminen                                     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `check:node-runtime`              | Node.js -versio on tuetulla alueella                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Kyllä                                         |
| `check:cycles`                    | Kiertotuonti kaikissa `src/` + `open-sse/` issä (AST-pohjainen, tsconfig `paths` ratkaistu). Bare poistuu luvusta 1 aina, kun jokin jakso on olemassa (vika-suljettu #15281 lähtien) ja listaa SCCs. `check:cycles:ratchet` (mitä CI toimii) estää, kun määrä ylittää `metrics.cycles` -katon `quality-baseline.json` ssä — tällä hetkellä 14, `direction: down`, joten se voi vain pudota (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Kyllä (räikkä)                                |
| `check:boundary`                  | `open-sse → src` -kytkentä: yksilöllinen tiedostosta tiedostoon -tuonti moottorista sovellukseen (`scripts/quality/measure-boundary.mjs`; reunaluettelo on v4 core/module-split korjausruuhka). Bare = neuvoa-antava raportti (sama kuin `quality:boundary`). `check:boundary:ratchet` (mitä CI toimii, myös `quality.yml` -pikaporttien räikkäsilmukassa) estää, kun luku ylittää `metrics.boundaryOpenSseToSrc` katon `quality-baseline.json` ssa — joka on kylvetty mitatulla 771, `direction: down`; `--update` vain alentaa sitä; kantasuhteen PRs (`--base-ref`, katso alla)                                                                                                                                                                                                                                                                                                                                                                                                  | Kyllä (räikkä)                                |
| `check:route-validation:t06`      | Zod -skeemat näkyvät kaikilla reiteillä (Tier 6 -käytäntö)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Kyllä                                         |
| `check:any-budget:t11`            | `@ts-expect-error // any` määrä ei ylitä budjettia (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Kyllä                                         |
| `check:provider-consistency`      | Jokaisella `providers.ts` palveluntarjoajalla on vastaava merkintä `providerRegistry.ts` ssä (ja päinvastoin sallittujen luettelossa)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Kyllä                                         |
| `check:model-lifecycle`           | Kolme käsin ylläpidettyä reititystaulukkoa pysyvät yhdenmukaisina sisäänkirjautetun elinkaaren tilannekuvan (#11503) kanssa: `FITNESS_TABLE` (`taskFitness.ts`) ei saa mitään käytöstä poistettua tunnusta, jonka `REGISTRY` voi reitittää; jokainen `BUILT_IN_ALIASES` kohde on läsnä `REGISTRY` :ssä, eikä se ole poistunut-id-tilannekuvasta; jokainen eläkkeellä oleva id, joka on edelleen `REGISTRY` ssä, välitetään tai luetellaan `allowedRetiredInCatalog` ssä; ja mikään `DEFAULT_DEGRADATION_MAP` lähde tai kohde ei näy poistetulta kyseisessä tilannekuvassa. Tämä ei todista, että mallia palvelee tällä hetkellä suora ylävirtaan. Offline- — vertaa `config/quality/model-lifecycle.json`, joka on päivitetty käsin `npm run quality:refresh-model-lifecycle` (verkko; ei langallista CI iin). `allowedRetiredInCatalog` on palava räikkä: lisää merkintä vain, jos on seurantaongelma.                                                                             | Kyllä                                         |
| `check:fetch-targets`             | Jokainen asiakaspuolen `fetch("/api/...")` `src/` ratkaisee todellisen `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Kyllä                                         |
| `check:deps`                      | Kaikki `npm install` -able -deps-arvot jokaisessa repon `package.json` ssä ovat `dependency-allowlist.json` ssä; uudet irrotetut tai syrjäytyneet paketit merkitty                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Kyllä                                         |
| `audit:deps`                      | `npm audit` (juuri + elektroni) — ei high/critical -ohjeita (päällekkäinen osv `check:vuln-ratchet`; katso Rationalization Backlog)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Kyllä                                         |
| `check:lockfile`                  | `package-lock.json` integrity — https-rekisteri, eheystiivisteet, ei isäntäohjauksia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Kyllä                                         |
| `check:licenses`                  | SPDX -lisenssiluettelo tuotantoriippuvuuksille                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Kyllä                                         |
| `check:tracked-artifacts`         | Ei rakennusartefakteja / sitoutuneita `node_modules` -symlinkkejä (suorittaa myös huskyn pre-commitissa; pre-push on tarkoituksella kevyt — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Kyllä                                         |
| `check:ai-attribution`            | Ei AI/bot `Co-Authored-By` -traileria tai AI-sukupolven alatunnistetta PR sitoumuksissa, otsikossa tai tekstissä — kova sääntö #16 ( `quality.yml` fast `main` gates -silmukassa PR→ `release/**` — lukee tapahtuman hyötykuorman, no-op off PRs — PR varten `ci.yml` → myös husky `commit-msg` hook #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `check:vitest-exclusions`         | Jokainen Vitest -poissulkeminen nimeää seurantaongelman ja näkyy `config/quality/vitest-exclusions.json` ssä (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Kyllä                                         |
| `check:file-size`                 | Lähdetiedostot (`.ts`/`.tsx` in `src/`, `open-sse/`, `electron/`, `bin/`) pysyvät `cap` ssä ja testitiedostot (`*.test.ts(x)`) `testCap` ssä ; `file-size-baseline.json` (`frozen` / `testFrozen`) jäädytetyt tiedostot eivät saa kasvaa yli tallennetun koon                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Kyllä                                         |
| `check:error-helper`              | Virhevastaukset executors/handlers käyttävät `buildErrorBody()` / `sanitizeErrorMessage()` (kova sääntö 12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Kyllä                                         |
| `check:migration-numbering`       | Siirto- SQL tiedostot on numeroitu peräkkäin, ei aukkoja tai kaksoiskappaleita                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Kyllä                                         |
| `check:public-creds`              | Ei kirjaimellisia OAuth `client_id`/`client_secret` tai Firebase Web -avaimia `publicCreds.ts` ulkopuolella (kova sääntö 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Kyllä                                         |
| `check:db-rules`                  | Ei raaka- SQL `src/lib/db/` moduulien ulkopuolella; ei tynnyrituontia `localDb.ts` :stä (Hard Rules #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Kyllä                                         |
| `check:known-symbols`             | Toimittajien suorittajat, reititysstrategiat ja heidän lähetystaulukoihinsa rekisteröidyt kääntäjät vastaavat levyllä olevia tiedostoja — ei orpoja tai ilmoittamattomia symboleja                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Kyllä                                         |
| `check:route-guard-membership`    | Jokainen reitti, joka synnyttää lapsiprosessin, luokitellaan `isLocalOnlyPath()` (kovat säännöt #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Kyllä                                         |
| `check:test-discovery`            | Jokaisen repossa olevan `*.test.ts` / `*.spec.ts` tiedoston kerää vähintään yksi koeajo (räikkä: orpoluettelo `test-discovery-baseline.json` :ssä voi vain kutistua)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Kyllä                                         |
| `check:test-tla-order`            | Mikään `tests/unit` alla oleva `node:test` -tiedosto ei rekisteröi testiä, osuu huipputason `await` ja rekisteröi sitten lisää (#18045; räikkä: `test-tla-order-allowlist.json` voi vain kutistua)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Kyllä                                         |
| `check:agent-skills-sync`         | Luodut agenttitaitojen artefaktit vastaavat niiden lähdeluetteloa (ei ajautumista)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `check:provider-asset-provenance` | Palveluntarjoajalla logos/assets on tallennettu alkuperämerkintä                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `lint:json`                       | JSON konfiguraatiotiedostot jäsentävät ja täyttävät repo lint -säännöt                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `typecheck:core`                  | TypeScript -kokoelma ilman virheitä (vain neuvoa-antavat varoitukset)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Kyllä                                         |
| `typecheck:noimplicit:core`       | Tiukka `noImplicitAny` — tulevaisuuteen katsova; monet olemassa olevat soittosivustot tarvitsevat edelleen huomautuksia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **neuvoa-antava** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` scopd to `src/app/(dashboard)/**` (#7033) — `typecheck:core`:n kuratoitu 27-tiedoston sallittu luettelo ei sisällä mitään kojelaudan TSX, eikä `next build` myöskään koskaan tarkista sitä (`next.config.mjs` asettaa `ignoreBuildErrors: true`), joten orpotunnisteiden regressioita oli siellä (#6902 to5) / # 6902 CI. Erottaa jäädytettyyn per-file/per-TS-code -laskennan perusviivaan (`config/quality/dashboard-typecheck-baseline.json`, sama vanhentunut täytäntöönpanokuvio kuin `check:known-symbols`) — vain NEW virheet perusviivan laskentaa ylittävät portin; räikkä alas `--update`, kun olemassa oleva virhe on korjattu.                                                                                                                                                                                                                                                                                                                                    | Kyllä                                         |
| `check:build-typecheck`           | Koko sovelluksen tuotannon tyyppitarkistus `tsconfig.build.json` (`src`, `open-sse`, `packages`, `bin`, `scripts`, `electron/**/*.d.ts`), pinnan `typecheck:core`:n 27 tiedoston sallittujen luettelon ja kojelaudan portti ei kata. Erot `config/quality/build-typecheck-baseline.json` tä vastaan; uusi tai korotettu (tiedosto, koodi) -määrä epäonnistuu, pienempi määrä pyytää sinua räikkäämään. `--update` kieltäytyy, kun ajo sisältää uuden tai korotetun parin, ellei `--force-regressions` ole hyväksytty, ja hylkää hiljattain hiljennetyn tiedoston, ellei `--force-nocheck` ole hyväksytty, joten perusviivan laajentaminen vihreäksi ja pysyvän hiljaisuuden myöntäminen ovat kaksi erillistä tarkoituksellista tekoa. Paljas `--force` hylätään. Tarkistaa myös `@ts-nocheck` :n koontilaajuuden `config/quality/ts-nocheck-baseline.json` vastaan, koska sitä käyttävä tiedosto ei raportoi lainkaan diagnostiikkaa ja olisi muuten näkymätön jokaiselle portille. | Kyllä                                         |

#### Kaksi tyyppitarkistusohjelmaa vastaavat eri tavalla

`typecheck:core` ja `check:build-typecheck` kääntävät eri ohjelmia eri vaihtoehdoilla, ja sama tiedosto voi olla toisessa puhdas ja toisessa täynnä virheitä.

`tsconfig.build.json` asettaa `"strict": false`, joten `noImplicitAny` on pois päältä. Ydinkokoonpano kokoaa kuratoidun 27 tiedoston sallittuluettelon, jossa on tiukemmat vaihtoehdot, ja seuraa kunkin merkinnän tuontikaaviota, joten tiedostot, jotka eivät koskaan näy koontiohjelmassa, tarkistetaan edelleen siellä.

Seurauksella on merkitystä arvioitaessa, onko tiedosto kirjoitettu:** nolladiagnostiikka `check:build-typecheck` n alla ei tarkoita nollaa** . `@ts-nocheck` poistaminen 26 tiedostosta osoitti, että 23 niistä oli puhtaita rakennusohjelmassa; kuusitoista niistä toi esiin noin 120 implisiittistä virhettä tiukassa virheessä. Tarkista molemmat ennen kuin kutsut tiedoston puhtaiksi.

### Työ: `quality-gate`

Juokse `test-coverage` jälkeen. Lohkot sulautuvat epäonnistuessa.

| Käsikirjoitus                | Vahvistaa                                                                                                                                                                     | Estäminen                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `quality:collect`            | Lähettää `quality-metrics.json` (ESLint varoitusmäärä, kattavuus yhdistetystä sirpaleraportista)                                                                              | Kyllä (räikkä ylävirtaan) |
| `quality:ratchet`            | Jokainen `quality-baseline.json` :n mittari ei ole taantunut (ESLint -varoitukset ≤ -perusviiva; kattavuus ≥ perusviiva)                                                      | Kyllä                     |
| `check:duplication`          | Koodin kopiointi (jscpd@4) ei ylitä `quality-baseline.json` n perusviivaa                                                                                                     | Kyllä                     |
| `check:complexity`           | Tiedostotason syklomaattinen monimutkaisuus ei ylitä ylärajaa (ydin ESLint `complexity` + `max-lines-per-function`)                                                           | Kyllä                     |
| `check:cognitive-complexity` | Kognitiivinen monimutkaisuus räikkä (`eslint-plugin-sonarjs`) — erillinen ESLint pass; CI ajaa molemmat yhdistettynä yhdeksi `check:complexity-ratchets` -vaiheeksi           | Kyllä                     |
| `check:dead-code`            | Käyttämättömät viennit / tiedostot räikkä (knip) ei regressio verrattuna perusviivaan                                                                                         | Kyllä                     |
| `check:compression-budget`   | Puristusvertailubudjetti — moottorikohtaisesti merkkien säästöjen lattiat eivät saa heiketä                                                                                   | Kyllä                     |
| `check:type-coverage`        | Prosenttityyppinen räikkä (`type-coverage`) ei regressio; kattaa suurelta osin `typecheck:noimplicit:core`                                                                    | Kyllä                     |
| `check:codeql-ratchet`       | Avoimen CodeQL -hälytysten määrä ei regressio (lukee `gh api` kautta; siro ohitus ilman merkkiä) — päivityspoljinnopeus ja manuaalinen liipaisin: katso "CodeQL ratchet" alla | Kyllä                     |

### Työ: `quality-extended`

Koko työ on neuvoa-antavaa (`continue-on-error: true`). Npm-pohjaiset räikkäät toimivat todellisuudessa; ulkoiset skannerit asentuvat `gh release download` kautta ja ohittavat itsensä (poistu 0), kun binaaria ei vielä ole.

| Käsikirjoitus            | Vahvistaa                                                                                                                                                                                                                         | Estäminen                                 |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `check:circular-deps`    | Ei pyöreitä riippuvuuksia (dpdm)                                                                                                                                                                                                  | **neuvoa-antava**                         |
| `check:bundle-size`      | Paketin koko ei ylitä korkkia                                                                                                                                                                                                     | **neuvoa-antava**                         |
| `check:secrets`          | Salainen skannaus (gitleaks) — ohittaa, jos binääri puuttuu                                                                                                                                                                       | **neuvoa-antava**                         |
| `check:vuln-ratchet`     | Riippuvuushaavoittuvuudet (osv-skanneri) eivät regressio — ohittaa, jos binääri puuttuu                                                                                                                                           | **neuvoa-antava**                         |
| `check:workflows`        | työnkulun nukka (actionlint + zizmor); missing/broken skannerit, virheelliset raportit tai puuttuva räikkäperusviiva epäonnistuvat kuin INCOMPLETE. Kelvolliset havainnot noudattavat valittua strict/advisory/ratchet -käytäntöä | Toteutus vaaditaan; zizmor-räikkä esto CI |
| `check:openapi-breaking` | Julkisen API sopimuksen (`openapi.yaml`) ja perushaaran (oasdiff) muutosten rikkominen — lähettää `openapiBreaking=N`:n; ohittaa, jos oasdiff puuttuu tai perustietoja ei voida ratkaista                                         | **neuvoa-antava**                         |

### Työ: `docs-sync-strict`

Toimii jokaisessa PR - `main`. Lohkot sulautuvat epäonnistuessa.

| Käsikirjoitus                  | Vahvistaa                                                                                                                                                                              | Estäminen                         |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `check:docs-all`               | Meta-portti, joka käyttää alla olevia 6 aliporttia peräkkäin                                                                                                                           | Kyllä                             |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt -versioiden johdonmukaisuus                                                                                                                              | Kyllä                             |
| ↳ `check:docs-counts`          | Proosan määrät (palveluntarjoajien määrä, siirtymämäärä jne.) ovat todellisten lukumäärien räikkäikkunassa                                                                             | Kyllä                             |
| ↳ `check:env-doc-sync`         | Jokainen env var `.env.example` :ssa dokumentoidaan docs-taulukkoon ja päinvastoin                                                                                                     | Kyllä                             |
| ↳ `check:deprecated-versions`  | Asiakirjoissa ei ole vanhentuneiden versioiden merkkijonoja                                                                                                                            | Kyllä                             |
| ↳ `check:doc-links`            | Dokumenttien sisäiset merkintälinkit ratkaisevat oikeita tiedostoja (`[text]`/`(path)` -lomake)                                                                                        | Kyllä                             |
| ↳ `check:fabricated-docs`      | Docsissa mainitut reitit, env vars, CLI -komennot, koukkujen nimet ja tiedostopolut ovat olemassa koodikannassa. Kova portti `--strict` n kautta; pehmeä epäonnistuminen ilman lippua. | Kyllä ( `--strict` kautta CI:ssä) |
| `check:cli-i18n`               | CLI -komentojonot ovat kaikissa i18n-kielitiedostoissa                                                                                                                                 | Kyllä                             |
| `check:openapi-coverage`       | OpenAPI spec kattaa ainakin räikkäkerroksen todellisia reittejä                                                                                                                        | Kyllä                             |
| `check:openapi-security-tiers` | Suojaustason merkinnät `openapi.yaml` ssa ovat yhdenmukaisia `routeGuard.ts` -luokituksen kanssa                                                                                       | **neuvoa-antava**                 |
| `check:openapi-routes`         | Jokainen polku `openapi.yaml` päättyy todelliseen `route.ts` :hen (anti-hallusinaatioihin)                                                                                             | Kyllä                             |
| `check:docs-symbols`           | Jokainen `/api/...` -viittaus `docs/**/*.md` :ssä ratkaisee todellisen `route.ts` (anti-hallusinaatiot)                                                                                | Kyllä                             |
| `i18n translation drift`       | Kääntämättömät avaimet i18n-kielitiedostoissa — varoittaa vain                                                                                                                         | **neuvoa-antava**                 |

Kaksitoista README SVGs `docs/diagrams/` alla luodaan (`scripts/docs/gen-readme-<name>.mjs`; `npm run docs:readme-diagrams` regeneroi ne kaikki). Jokaisella on tavuvertailuyksikkötesti (`tests/unit/docs/readme-*-svg.test.ts`, työ `test-unit`), joka epäonnistuu, kun sitoutunut tiedosto on vanhentunut, ja `check:docs-counts` lukee kanoniset luvut `<text>` solmuistaan — minkä vuoksi ääriviivausvaihe pitää jokaisen tiedoston ääriviivatun merkkijonon näkymättömänä `<text>`. SVG kanonisten lukujen tarkistus lukee tiedostot, jotka on lueteltu `SVG_DIAGRAM_FILES` ssä (`scripts/check/check-docs-counts-sync.mjs`): `docs/diagrams/readme-hero.svg`, `free-tier-budget.svg`, `promise-pillars.svg`, `comparison-table.svg`, `cli-terminal.svg`, `tier-cascade.svg` sekä `public/images/tier-flow-dark.svg` ja `tier-flow-light.svg`; Ilmainen ikuisesti, luettelomerkintä, toistuva pooli ja pisteytystekijät sisältävät myös `promise-pillars.svg`, `free-tier-budget.svg` ja `strategies-grid.svg`. `free-tier-budget.svg` hakee lukunsa live-luettelolatausohjelmasta, joten muutos `FREE_MODEL_BUDGETS` tai palveluntarjoajan näyttönimeen on punainen CI kunnes tiedosto on luotu uudelleen.

### Työ: `i18n-ui-coverage`

| Käsikirjoitus                     | Vahvistaa                                                                                                                                                                                                     | Estäminen         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `check-ui-keys-coverage` (inline) | UI i18n avaimen kattavuus on ≥ 65 %                                                                                                                                                                           | Kyllä             |
| `check-ui-value-drift` (inline)   | Uudelleen kirjoitettu englanti** arvo** ei jätä vanhentunutta käännöstä taakseen                                                                                                                              | Kyllä             |
| `check-new-key-coverage` (inline) | A** uusi** Englanninkielinen avain käännetään jokaisessa — -kielessä `__MISSING__:` -merkki hylätään                                                                                                          | Kyllä             |
| `check-translation-ratio`         | Todellinen käännössuhde kielikohtaisesti (identtinen englanniksi / paikkamerkki / puuttuvat lehdet sallittujen luettelon ulkopuolella) ei saa ylittää `config/quality/i18n-translation-baseline.json` + slack | **neuvoa-antava** |

Tarvitsee `fetch-depth: 0` — arvon ajautumisen portti eroaa `en.json` yhdistämispohjaa vastaan.

#### `check-ui-value-drift` — vanhentunut käännösportti

Saa kiinni yhden i18n-regression, jota muut portit eivät rakenteellisesti näe: englanninkielinen arvo kirjoitetaan uudelleen ja _aiemmasta_ englannin kielestä johdetut käännökset jäävät jäljelle, joten muut kuin englanninkieliset käyttäjät lukevat edelleen luottavaisesti muotoiltua, nyt väärää kopiota.

Tämä toimitettiin todella. `oauthModal.googleOAuthWarning` kirjoitettiin uudelleen, kun Antigravity kirjautumisapuohjelma laskeutui (#5203);** 39/43 aluetta** piti tekstiä, jossa operaattoreita kehotettiin "kopioimaan koko URL ja liittämään se alle" — kulku, jota ei voida suorittaa kyseiselle tarjoajalle. Se jäi huomaamatta numeroon 8463 asti, koska:

- `sync-ui-keys` täyttää vain ne avaimet, jotka ovat** poissa** , ei koskaan sellaisia, jotka ovat** tunkkainen** ;
- `check-ui-keys-coverage` laskee avaimen _presence_, joten vanhentunut käännös lasketaan katetuksi;
- `check-translation-drift` tracks the `docs/i18n/<locale>/**.md` documentation mirrors — it never reads `src/i18n/messages/*.json`. Blocking in job `docs-sync-strict` since the 2026-09 re-sync: edit a core doc → `npm run i18n:run -- --files=<doc>` (section-level, cheap).

**Erotietoinen, ei perustason tukema.** Se vertaa `en.json` yhdistämispisteessä työpuuhun; jokaiselle avaimelle, jonka englanninkielinen arvo muuttui, kaikki alueet, joilla on edelleen koskematon käännös, ovat vanhentuneet. Tämä tarkoituksella** jäädyttää olemassa olevan velan** — a diff ei voi paljastaa, mistä vanhasta englannista pitkäaikainen käännös on peräisin, joten portti arvioi vain sen, mitä nykyinen muutos koskettaa. Vaihtoehto (avainkohtainen hash-perusviiva) maksaisi ~ 600 KB luodun tiedoston, 3 × suurimman olemassa olevan perusviivan, joka vaihtuisi joka i18n PR.

Kaksi tapaa tyydyttää se:

1. päivittää käännökset, joihin vaikuttaa, tai
2. aseta ne arvoon `__MISSING__:<new english>` — the runtime palvelee sitten korjattua englantia (`src/i18n/request.ts::deepMergeFallback`, #7258) ja käännösavainjonoja.

Jos merkkijono on** merkitys** muuttunut, mieluummin** avaimen uudelleennimeäminen** : uusi avain ei voi periä vanhentunutta käännöstä. Tämä on käytetty malli #8463.

```bash
npm run i18n:check-value-drift          # strict (what CI runs)
npm run i18n:check-value-drift:warn     # report only
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Poistuu 0:sta `SKIP reason=base-unresolved`, kun perusluetteloa ei voida lukea (matala klooni ilman perusviitettä), peilataan `check-openapi-breaking`.

### Työ: `i18n`

Täysi i18n-vahvistusmatriisi (yksi työ maa-asetusta kohden). Koko työ on neuvoa-antavaa.

| Käsikirjoitus                   | Vahvistaa                                | Estäminen                                                 |
| ------------------------------- | ---------------------------------------- | --------------------------------------------------------- |
| `validate_translation.py quick` | Käännöksen täydellisyys kielikohtaisesti | **neuvoa-antava** (`continue-on-error: true` koko työssä) |

### Työ: `pr-test-policy`

Toimii vain vetopyyntöjen yhteydessä.

| Käsikirjoitus          | Vahvistaa                                                                                                                                  | Estäminen |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| `check:pr-test-policy` | PRs, joka muuttaa tuotantokoodia `src/` ssä, `open-sse/`, `electron/` tai `bin/`, on sisällettävä tai päivitettävä testejä (kova sääntö 8) | Kyllä     |
| `check:test-masking`   | Muutetut testitiedostot eivät vähennä väitteiden nettomäärää tai lisää `assert.ok(true)` tautilogioita                                     | Kyllä     |
| `check:pr-evidence`    | PR body lainaa test/VPS todisteita muutoksesta (koneisoi kovaa sääntöä #18 greppingillä PR prose — fragile, katso Backlog)                 | Kyllä     |

### Työ: `test-vitest`

Juokse `build` jälkeen. Lohkot sulautuvat epäonnistuessa.

| Sviitti          | Vahvistaa                                                          | Estäminen                                                                                                                        |
| ---------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP palvelin (110 työkalua), autoCombo, välimuisti — vitest runner | Kyllä                                                                                                                            |
| `test:vitest:ui` | UI komponentti testaa — vitest runneria                            | **Estäminen** — olemassa olevat viat on nimenomaisesti suljettu pois `vitest.config.ts`:ssä; uudet epäonnistumiset epäonnistuvat |

### Iltatyönkulku (aikataulutettu, neuvoa-antava)

Nämä toimivat cron-aikataululla (ja `workflow_dispatch`), eivät koskaan PRs llä. Kaikki ovat neuvoa-antavia.

| Työnkulku              | Vahvistaa                                                                                                                                                          | Estäminen         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `nightly-property`     | pikatarkista ominaisuustestit satunnaisella siemenmäärällä + korkea ajomäärä                                                                                       | **neuvoa-antava** |
| `nightly-resilience`   | kasan kasvuportti, kaaosvika-injektio, k6 load/soak                                                                                                                | **neuvoa-antava** |
| `nightly-llm-security` | promptfoo-ruiskutussuoja (estotila) + garak -anturit (ohitettu ilman palveluntarjoajan salaisuutta)                                                                | **neuvoa-antava** |
| `nightly-schemathesis` | OpenAPI -sopimus sumea (skeema) elävää OmniRoute vastaan käyttämällä `docs/openapi.yaml` — pintojen spesifikaatiorikkomuksia / käsittelemättömät 500s (Fase 8 B.4) | **neuvoa-antava** |
| `nightly-mutation`     | Stryker-mutaatiotestauksen pisteet nopealla yksikkökaistalla — selviytyneet mutantit pinnalla heikot väitteet                                                      | **neuvoa-antava** |
| `nightly-compat`       | Solmumoottorin yhteensopivuusmatriisi tuetuilla `engines.node` -alueilla                                                                                           | **neuvoa-antava** |

Suorituskyvyn perusviivat (keko, TTFB, rakennusaika) tallennetaan, ei portitettuja: katso [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## Nopeusvaihe (2026-08-30 → v4.0 LTS): jokaista vertailutasoa lievennetty 20 %

Omistajan päätös (2026-08-30): v4.0:n modularisointiin asti julkaisunopeus on tärkeämpää
kuin teknisen velan rajan säilyttäminen. Jokaista **numeerista** kiristyvän rajan vertailutasoa lievennettiin 20 %
yhdellä auditoitavalla muutoksella, ja vaihe on määritelty tiedostossa `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Mikä muuttui                                                                                                                                                                                                              | Missä                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — pienempi-on-parempi-määrät ×1,2, suurempi-on-parempi-prosentit ÷1,2 (kattavuuden alaraja 60 säilytettiin, `eslintErrors` pysyy arvossa 0, `eslintWarnings` 0 → 20 % jäädytettyjen ohitusten määrästä) | `quality-baseline.json` (`_relax_velocity_2026_08_30`-huomautus luettelee jokaisen ennen → jälkeen -muutoksen) |
| `count` ×1,2 / `percentage` ×1,2                                                                                                                                                                                          | `complexity-baseline.json`, `duplication-baseline.json`                                                        |
| `cap`, `testCap`, jokainen `frozen[*]`- / `testFrozen[*]`-rivien raja ×1,2                                                                                                                                                | `file-size-baseline.json`                                                                                      |
| tiedostokohtaiset / TS-koodikohtaiset määrät ×1,2                                                                                                                                                                         | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`         |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                       | `scripts/check/check-openapi-coverage.mjs`                                                                     |
| `--require-tighten` muuttuu neuvoa-antavaksi, kun `_policy.requireTighten === false`                                                                                                                                      | `scripts/quality/check-quality-ratchet.mjs`                                                                    |
| öinen `bank-ratchet-shrinks` keskeytetään (se tallentaisi mitatun pienenemisen ja poistaisi liikkumavaran)                                                                                                                | `.github/workflows/nightly-release-green.yml`                                                                  |

Sallittujen poikkeusten luettelot (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **eivät** ole budjetteja, eikä niitä muutettu. Hyväksytty/hylätty-käytäntöportit (salaisuudet, SQL-säännöt,
dokumentaation ja ympäristön välinen sopimus, i18n-yhdenmukaisuus, yksikkötestit) eivät muutu — hylätty testi on edelleen hylätty testi.

**Työkalut**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — kertaluonteinen
  lievennys (`scripts/quality/relax-baselines.mjs`); kieltäytyy suorittamasta toimintoa kahdesti samalla
  huomautuksella.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  mittaa jokaisen numeerisen portin samalla tavalla kuin CI ja tulostaa kunkin portin jäljellä olevan liikkumavaran
  (`scripts/quality/baseline-headroom.mjs`). Öinen `baseline-headroom`-työ julkaisee
  taulukon työnkulun suorituksen yhteenvedossa ja lataa sen JSON-/Markdown-raportin artefaktina
  `baseline-headroom-<run_id>`, jota säilytetään 90 päivää. Varoitus- ja kriittiset rivit osoittavat portit,
  jotka ovat enintään 10 %:n päässä ylärajastaan tai jo ylittävät sen. Käytä näitä raportteja varhaisena varoituksena
  budjettien kulumisesta; tarkista kyseisen portin `_rebaseline_*`-huomautukset. Työ ei
  enää luo tai päivitä pysyvää issue-tikettiä; #12149 säilyttää aiemman raporttihistorian.

**Uuden koodin tila (Clean-as-You-Code) — 2026-08-30 alkaen, vain PR-pikapolulla**

`pull_request`-tapahtumissa `quality.yml` välittää parametrin `--base-ref <PR base SHA>` komennoille `check:file-size`,
`check:complexity-ratchets` ja `check:dead-code`. Portit `check:complexity-ratchets` ja
`check:dead-code` vertaavat HEAD-versiota yhdistämiskantaan **rajoittuen PR:n muuttamiin tiedostoihin**
(`scripts/check/newCodeMode.mjs`: yhdistämiskanta luodaan väliaikaiseen
`git worktree` -työpuuhun, ESLint/knip suoritetaan siinä ja HEAD-versiossa, minkä jälkeen tiedostokohtaisia määriä verrataan):

- **estävä** — PR lisäsi syklomaattisen/kognitiivisen kompleksisuuden rikkomuksia tai kuolleita vientejä muuttamiinsa tiedostoihin
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` lokissa);
- **neuvoa-antava** — kokonaismäärä suhteessa jäädytettyyn vertailutasoon. Peritty poikkeama ei koskaan hylkää
  viatonta PR:ää; poikkeama jäädytetään uudelleen julkaisun täsmäytyksessä, ja liikkumavaratarkistus valvoo sitä.

`check:file-size` käyttää kantaviitettä omien sääntöjensä mukaisesti (`scripts/check/check-file-size.mjs`, #8522):
se tarkistaa puun jokaisen lähdekoodi- ja testitiedoston, lukee kunkin rivimäärän PR:n kannassa
komennolla `git show` ja hylkää tiedoston vain, jos se kasvaa suuremmaksi kuin sen vertailutason yläraja
(`frozen` / `testFrozen` tai vertailutason ulkopuolisen tiedoston tapauksessa `cap` / `testCap`) tai sen koko
kannassa sen mukaan, kumpi näistä on suurempi. Tiedosto, joka on jo poikennut kannassa, ei siten koskaan hylkää viatonta PR:ää.

`check:boundary:ratchet` soveltaa samaa sääntöä yksittäiseen lukuarvoonsa
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): PR-tapahtumissa sekä
`quality.yml`-työnkulun nopeat portit että `ci.yml`-työnkulun lint-työ saavat PR:n perushaaran SHA:n, peruscommit
mitataan `git archive` -viennistä, ja PR epäonnistuu vain, kun sen `open-sse → src` -reunojen
määrä ylittää arvosta `metrics.boundaryOpenSseToSrc` ja peruscommitin määrästä suuremman. Raja-arvon
ylittävästä perustason poikkeamasta ilmoitetaan (`peritty perustason poikkeama`), mutta se ei koskaan merkitse viatonta PR:ää epäonnistuneeksi; push → main
säilyttää absoluuttisen raja-arvon, ja perus-SHA, jota ei voida selvittää, käyttää varoituksen kera tätä arvoa varavaihtoehtona.

`workflow_dispatch`-ajot, julkaisun vihreän tilan tarkistusajo ja öinen liikkumavaran tarkistustyö eivät saa PR:n perustasoa,
joten ne säilyttävät absoluuttisen (globaalin) vertailun. Kattavuus, duplikaatio ja tyyppikattavuus pysyvät
toistaiseksi globaaleina (niiden työkalut eivät tuota tiedostokohtaista diffiä edullisesti) — ne ovat ehdokkaita samalle käsittelylle.

**Vaiheen päättäminen versiossa v4.0 (LTS = aiempaa tiukempi, ei "paluu normaaliin")**

1. Puhtaan `release/v4.0.0`-haaran kärjessä: suorita dokumentointia varten `npm run quality:headroom --json`, sitten
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` sekä kunkin tyyppitarkistusportin
   `--update` — jokainen perustaso laskee mitattuun arvoon.
2. Poista `_policy` tiedostosta `quality-baseline.json` (ottaa `--require-tighten`-toiminnon ja öisen
   liikkumavaran kerryttämisen uudelleen käyttöön) ja palauta `THRESHOLD = 36` (tai suurempi) tiedostossa `check-openapi-coverage.mjs`.
3. Tiukenna mitattuja arvoja pidemmälle siellä, missä modularisointi tuotti tulosta: tiedostokoon `cap` takaisin arvoon 1000
   (tai 800), kattavuuden alarajoihin +5 ja kuolleiden vientien määräksi 0 modularisoiduissa paketeissa.

## Ratchet-perustaso (`quality-baseline.json`)

Ratchet-moottori (`scripts/quality/check-quality-ratchet.mjs`) lukee tiedoston `quality-baseline.json`
ja vertaa sitä juuri kerättyyn `quality-metrics.json`-tiedostoon. Jos jokin mittari heikkenee
epsilon-arvoaan enemmän, koonti epäonnistuu.

Tällä hetkellä seurattavat mittarit:

| Mittari               | Suunta | Merkitys                               |
| --------------------- | ------ | -------------------------------------- |
| `eslintWarnings`      | `down` | ESLint-varoitusten määrä ei saa kasvaa |
| `coverage.statements` | `up`   | Lausekattavuus ei saa laskea           |
| `coverage.lines`      | `up`   | Rivikattavuus ei saa laskea            |
| `coverage.functions`  | `up`   | Funktiokattavuus ei saa laskea         |
| `coverage.branches`   | `up`   | Haarakattavuus ei saa laskea           |

Päivitä perustaso aidon parannuksen jälkeen seuraavasti:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update`-valitsin kirjoittaa nykyiset mitatut arvot tiedostoon `quality-baseline.json`.
Commitoi tämä tiedosto yhdessä mittaria parantaneen muutoksen kanssa. PR, joka parantaa
mittaria päivittämättä perustasoa, havaitaan `--require-tighten`-valitsimella (vaihe 6A.5,
toteutus odottaa).

### CodeQL-ratchet: päivitysväli ja manuaalinen käynnistys

`check:codeql-ratchet` lukee **repositoriotilaa, joka päivitetään ajastetusti — ei PR-kohtaisesti.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` ilmoittaa
`state: configured`, `schedule: weekly`: kyseessä on GitHubin oletusasetuksen tarkistus, ei jokaisen
pushin yhteydessä suoritettava analyysi. Tästä seuraa, että kun hälytyksiä KORJAAVA PR on yhdistetty,
ratchet lukee edelleen vanhaa, suurempaa määrää seuraavan ajastetun tarkistuksen suorittamiseen asti —
joten se ilmoittaa regressiosta jokaisessa avoimessa PR:ssä, myös korjaavan PR:n omissa
jatkomuutoksissa, kunnes tarkistus saa tilanteen ajan tasalle.

**Manuaalinen päivitys**: `gh workflow run codeql.yml --ref release/vX.Y.Z` suorittaa
analyysin uudelleen ja julkaisee hälytykset uudelleen muutamassa minuutissa. Lue ensin
`.github/workflows/codeql.yml` — sen otsikko selittää, että se käyttää vain
`workflow_dispatch`-käynnistystä, **koska se on ristiriidassa GitHubin oletusasetuksen kanssa**
(`CodeQL analyses from advanced configurations cannot be processed when the default setup is enabled`).
`push`/`pull_request`/`schedule`-käynnistysten palauttaminen edellyttää ensin **omistajan toimenpidettä**:
Settings → Code security → CodeQL: Default → Advanced. Älä lisää `schedule:`-käynnistystä ilman tätä
vaihtoa — se tuottaa ainoastaan epäonnistuvia suorituksia.

**Tiukenna perustasoa määrän laskettua** — `node scripts/check/check-codeql-ratchet.mjs
--update` kirjoittaa uuden mitatun määrän tiedostoon `quality-baseline.json` →
`metrics.codeqlAlerts.value`, jotta ratchet ei salli huomaamatta regressiota takaisin
vanhaan ylärajaan. Käytännön esimerkki (2026-09-02/03): PR #12502 korjasi 7 todellista hälytystä
(13 → 6 mitattua avointa hälytystä); PR #12530 tiukensi jäädytettyä perustasoa arvosta 11 arvoon 6
vastaamaan mittaustulosta; jäljellä olevat 6 hälytystä hylättiin tämän jälkeen hälytyskohtaisin
perusteluin, jolloin avoimia hälytyksiä jäi 0.

**Hylkäykset ovat operaattorin päätettävissä (ehdoton sääntö #14)** — älä koskaan hylkää
CodeQL-hälytystä kirjaamatta teknistä perustelua hylkäyskommenttiin: `won't fix`, jos kyseessä
on ylemmän tason protokollavaatimus, `used in tests`, jos kyseessä on testifixture, ja
`false positive`, jos kyseessä on puhdistus, jota CodeQL ei pysty havaitsemaan
(ennakkotapaus: `docs/security/ERROR_SANITIZATION.md`).

---

## Testien uudelleenyrityskäytäntö (WS5.4, v3.8.49)

Uudelleenyritykset määritetään suorittajakohtaisesti, eivät koskaan yleisenä käytäntönä — yleinen uudelleenyritys muuttaa todelliset regressiot
näkymättömiksi satunnaisiksi häiriöiksi:

| Suorittaja               | Käytäntö                                                                                                                                                           | Miksi                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e)         | `retries: 1` vain CI:ssä sekä `trace: on-first-retry`                                                                                                              | Selaimen/verkon ajoitus on aidosti epädeterministinen; yksi uudelleenyritys ja jäljitys tekevät satunnaisesta häiriöstä diagnosoitavan artefaktin |
| Vitest                   | EI yleistä uudelleenyritystä. Todistetusti epävakaalle testille määritetään eksplisiittinen testikohtainen uudelleenyritys (näkyy diffissä ja tarkastetaan PR:ssä) | Pitää karanteeniluettelon repossa eikä koskaan läpinäkymättömänä                                                                                  |
| node:test (yksikkötesti) | EI uudelleenyrityksiä koskaan                                                                                                                                      | Epävakaa yksikkötesti on testissä oleva virhe — korjaa se, älä vain suorita sitä uudelleen                                                        |

Tavoiteltavat SLO:t, kun epävakaustelemtria on käytössä (WS5.2/5.3): <1 %:n epävakausaste testiä kohden
(”korjaa nyt” -kynnys), ≥95 %:n läpäisyaste putkea kohden. Toimialan viitearvoja —
kalibroi ne uudelleen omien mittaustemme perusteella.

## Julkaisutason räikän poikkeama (WS5.5, v3.8.49)

Kun räikkä (tiedostokoko, monimutkaisuus, eslint-varoitukset) taantuu PUHTAAN julkaisun
kärjessä — eli yhdistämisten YHDISTELMÄ aiheutti taantuman eikä yksikään PR yksinään toista
taantumaa omassa haarassaan — korjaus kuuluu **julkaisuvastaavalle, kerran,
julkaisuhaarassa**: suosi erottamista/refaktorointia; määritä perustaso uudelleen vain dokumentoidun
perustelumerkinnän kanssa. Älä koskaan siirrä yhdistelmäpoikkeamaa osallistujan PR:ään äläkä koskaan
määritä perustasoa uudelleen PR-kohtaisesti (se piilottaa todelliset regressiot). Tee ensin ero:
toista virhe puhdasta kärkeä vasten erillisessä worktree-työpuussa, ennen kuin oletat PR:si aiheuttaneen sen.

## Räikkärajojen pienennysten tallettaminen — alaspäin suuntautuva liike (#8584)

Räikkä on vain puoliksi automaattinen, ja juuri väärältä puolelta. Ylärajan **nostaminen** on
manuaalinen JSON-muokkaus, joka kestää kymmenen sekuntia ja on nopein tapa vapauttaa virhetilassa oleva PR.
Ylärajan **laskeminen** edellyttää, että joku suorittaa komennon `--update` ja commitoi tuloksen — ja ennen kuin
`bank-ratchet-shrinks`-työ otettiin käyttöön, mikään työnkulku ei tehnyt sitä. Mitattu seuraus
(2026-07-25): 18 jäädytettyä tiedostoa oli jo uusien tiedostojen 800 rivin ylärajan tasolla tai sen alapuolella, pahin
132-kertaisesti (`src/shared/validation/schemas.ts`, 19 rivillä 2 523:n yläraja);
monimutkaisuuden yläraja nousi `1794 → 2169` noin 37 perustason uudelleenmääritysmerkinnän aikana ja laski tasan kerran
(−1); ja ”tiukenna komennolla `--update` seuraavalla kierroksella” kirjoitettiin 31 kertaa mutta toteutettiin
kerran. Yläraja, joka säilyy sen oikeuttaneen koodin jälkeen, muuttaa huomaamatta jokaisen valmiin
pilkkomisen kasvunvaraksi sille, joka muokkaa tiedostoa seuraavaksi.

`nightly-release-green.yml` → työ **`bank-ratchet-shrinks`** sulkee tämän silmukan:

|           |                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| Suoritus  | `schedule` (3×/päivä) + `workflow_dispatch` — tarkoituksella **ei** `push`                                   |
| Mittaus   | korkein `release/vX.Y.Z`, sama ratkaisu- ja injektiosuoja kuin `release-green`                               |
| Kirjoitus | `check:file-size --update` ja `check:complexity-ratchets --update` (molemmat rakenteeltaan vain pienentäviä) |
| Varmistus | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                     |
| Toimitus  | yksi aina ajan tasalla oleva PR julkaisuhaaraa vasten — pakkopäivitetään, ei koskaan roskapostiteta          |

Tallettaminen tehdään erissä eikä jokaisen pushin yhteydessä, koska sille ei ole viivevaatimusta (8 tunnin
kuluessa talletettu pienennys riittää), kun taas yhdistämiskohtainen suoritus rakentaisi PR-haaran toistuvasti
uudelleen yhdistämiskampanjoiden aikana ja maksaisi täydestä ESLint-läpikäynnistä joka kerta. Havaitseminen tapahtuu edelleen
pushin yhteydessä (`release-green`); vain tallettaminen tehdään erissä.

### Turvallisuuden varmistin

Työ kirjoittaa perustasoihin ilman valvontaa, joten `verify-ratchet-bank.mjs` tekee
tästä hyväksyttävää. Se vertaa komennon `--update` jälkeistä puuta `HEAD`:iin ja **keskeyttää työn
ennen minkään commitin luomista** — avaamatta PR:ää — ellei jokainen muutos ole jokin seuraavista:

- numeerisen `frozen`- / `testFrozen`-merkinnän **laskeminen** tai **poistaminen**
- `complexity-baseline.json` → `count` **laskettu**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **laskettu**

Kaikki muu epäonnistuu: luvun nostaminen, merkinnän lisääminen, `cap`/`testCap`-arvon muuttaminen tai
`_rebaseline_*`-merkinnän poistaminen/uudelleenkirjoittaminen (nämä merkinnät ovat tarkastusketju sille, miksi kukin
yläraja on olemassa, ja ne tallennetaan samaan `frozen`-objektiin kuin tiedostomerkinnät).
Botti, joka voisi nostaa ylärajaa, olisi ehdottomasti nykytilannetta huonompi. Regressiosuoja:
`tests/unit/verify-ratchet-bank.test.ts`.

Työ ei koskaan pushaa haaraan `release/*` — ihminen yhdistää PR:n, joten virheellinen mittaus
ei voi päätyä mukaan ilman tarkastusta.

## Sallittujen poikkeusten käytäntö

Jokainen tarkistus, joka ei voi epäonnistua ennestään olemassa olevien rikkomusten vuoksi, käyttää jäädytettyä sallittujen poikkeusten luetteloa
(esim. `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Käytäntö on:

**Korjaa juurisyy; käytä sallittujen poikkeusten luetteloa vain, kun rikkomus on ollut olemassa jo ennestään eikä sitä voida korjata samassa PR:ssä.**

Kun lisäät merkinnän sallittujen poikkeusten luetteloon:

1. Lisää kommentti, jossa perustelet poikkeuksen.
2. Viittaa seurantatehtävään (esim. `// #3498 — Vaiheen 2 ominaisuus, ei vielä toteutettu`).
3. Poista merkintä samassa PR:ssä, joka korjaa rikkomuksen — vanhentunut merkintä, joka ei enää
   ohita aktiivista rikkomusta, on itsessään virhe (6A.3:n vanhentuneiden sääntöjen valvonta
   hylkää tarkistuksen irrallisen sallittujen poikkeusten merkinnän vuoksi, kun se on toteutettu).

**Älä** lisää sallittujen poikkeusten merkintöjä vain saadaksesi testit läpäistyä nopeammin. Läpäisty tarkistus ja samalla kasvava
sallittujen poikkeusten luettelo luovat väärän käsityksen laadusta.

### Kun tarkistus epäonnistuu PR:ssäsi

1. **Lue tarkistuksen tuloste huolellisesti** — se kertoo täsmälleen, mikä tiedosto tai symboli rikkoi
   sääntöä.
2. **Korjaa rikkomus** — useimmat tarkistukset ovat deterministisiä tiedostojärjestelmän tarkistuksia, jotka läpäistään heti,
   kun koodi on oikein.
3. **Jos rikkomus on ollut olemassa jo ennestään** (eli et aiheuttanut sitä, mutta tarkistus
   kattaa sen nyt): lisää sallittujen poikkeusten merkintä, perustelukommentti ja viittaus seurantatehtävään.
4. **Jos tarkistus on räikkätyyppinen** (kattavuus, ESLint-varoitukset, duplikaatio, kompleksisuus):
   muutoksesi heikensi mittaria. Korjaa taustalla oleva ongelma tai suorita (harvoin)
   `npm run quality:ratchet -- --update`, jos muutos on tarkoituksellinen ja mittarin
   heikkeneminen hyväksyttävää — mutta dokumentoi syy PR:n kuvauksessa.
5. **Neuvoa-antavat tarkistukset** (`continue-on-error: true`) ovat informatiivisia — ne eivät estä
   yhdistämistä, mutta näkyvät CI-yhteenvedossa. Korjaa ne silti.

---

## Uuden tarkistuksen lisääminen

1. Luo `scripts/check/check-<name>.mjs` (tai `.ts`). Käytäntötarkistukset palauttavat lopetuskoodin 0/1.
   Räikkätyyppiset tarkistukset kirjoittavat mittarin tiedostoon `quality-metrics.json` komentosarjan `collect-metrics.mjs` kautta.
2. Lisää `"check:<name>": "node scripts/check/check-<name>.mjs"` tiedostoon `package.json`.
3. Kytke se tiedostossa `.github/workflows/ci.yml` asianmukaiseen työhön
   (käytäntö → `lint` tai `docs-sync-strict`; räikkä → `quality-gate`).
4. Jos sillä on sallittujen poikkeusten luettelo, käytä funktiota `reportStaleEntries()` tiedostosta
   `scripts/check/lib/allowlist.mjs`, jotta vanhentuneet merkinnät havaitaan automaattisesti.
5. Kirjoita hakemistoon `tests/unit/build/` testi, joka kattaa tarkistuksen tunnistuslogiikan.
6. Päivitä tämä asiakirja (lisää rivi asianmukaiseen työtaulukkoon).

---

## Agenttityökalut: LSP osana työnkulkua (valinnainen)

CI-tarkistusten lisäksi OmniRoute sisältää **valinnaisen** `agent-lsp`-rungon
(projektitason `.mcp.json`, vaihe 7, tehtävä 15). Luo `.mcp.json`
ja tuo TypeScript-kielipalvelin ohjelmointiagenttien saataville, jotta ne selvittävät symbolit /
diagnostiikan **ennen** koodin kirjoittamista — se täydentää `typecheck:core`-tarkistusta kääntämällä ennen väitteiden esittämistä
ja vähentää ”keksittyjen symbolien” virheitä niiden alkulähteellä. Sitä ei tarkoituksella
ladata automaattisesti (valitset ja varmennat MCP↔LSP-sillan itse); virheellinen merkintä kirjaa vain
yhteysvirheen lokiin eikä koskaan riko istuntoja.

---

## Rationalisointijono (ROI-katselmointi — vaihe 9, aalto 3)

Tämä luettelo täsmäytettiin `ci.yml`-tiedostoon 2026-06-17 (aiemmasta versiosta puuttuivat
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Täsmäytetyn kokonaisuuden ROI-katselmoinnissa
tunnistettiin seuraavat rationalisointiehdokkaat. **Yhdistämiset ovat mekaanisia CI-muutoksia;
käännöt ja poistot ovat operaattorille varattuja käytäntöpäätöksiä.** Mitään alla olevista
ei ole vielä toteutettu.

**Lisäksi yllä dokumentoimatta** (neuvoa-antavia, signaaliltaan heikkoja): `docs-lint`-työ
(markdownlint + Vale, koko työllä `continue-on-error`) ja erilliset tarkistustyönkulut
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` on
`quality-baseline.json`-tiedostossa, mutta sitä ei ole kytketty estävään räikkään `ci.yml`-tiedostossa — mittari
on tällä hetkellä irrallinen.

### Yhdistäminen / päällekkäisyyksien poisto (mekaaninen, pienempi riski)

Jokainen ehdokas validoitiin aktiivista porttitilaa vasten 2026-06-17 (luota, mutta varmista);
useat ”ilmeiset” yhdistämiset osoittautuivat peittävän velkaa, eivätkä ne ole **suoraan**
korvattavissa.

- **`check:docs-sync` suoritetaan kahdesti** — erillisenä `lint`-työssä ja uudelleen `check:docs-all`-tarkistuksen (`docs-sync-strict`) sekä husky-esitoimituskoukun sisällä. ✅ **VALMIS** — erillinen `lint`-kutsu poistettu.
- **CVE-tarkistus** — ❌ **EI suoraan yhdistettävissä.** `audit:deps` epäonnistuu ehdottomasti minkä tahansa vakavan/kriittisen CVE:n kohdalla; `check:vuln-ratchet` (osv) epäonnistuu vain baselineen nähden tapahtuvasta _regressiosta_ (tällä hetkellä 1 MODERATE). Semantiikka on erilainen — `audit:deps`-tarkistuksen poistaminen poistaisi ehdottoman vakavien/kriittisten haavoittuvuuksien portin. Säilytä molemmat.
- **Syklien tunnistus** — ✅ **VALMIS** (#15159 G-01/G-02). Vanha teksti kutsui `check:cycles`-tarkistusta ”vihreäksi, kuratoiduksi” portiksi ja perusteli sen säilyttämistä estävänä, koska `check:circular-deps` (dpdm) raportoi 91 sykliä. Tuo vihreä tulos oli **väärä positiivinen onnistuminen**: `check:cycles` tarkisti 5 alihakemistoa (450 tiedostoa), tunnisti vain staattiset `import|export … from` -rakenteet ja hylkäsi kaikki `@/`- ja `@omniroute/open-sse/`-määritteet, joten se ei voinut havaita dynaamisten tuontien ja aliasten muodostamia syklejä, jotka hallitsivat tietovarastoa. Korjattu: portti käy nyt läpi `src`- ja `open-sse`-hakemistot (5023 tiedostoa), kerää määritteet TypeScriptin AST:stä (joten `import("…")` lasketaan, mutta tyyppisijainnissa olevaa `typeof import("…")` -rakennetta ei) ja selvittää tsconfigin `paths`-määritykset. Se löytää **14** sykliä, ei 0:aa. Koska 14:ää jo olemassa olevaa sykliä ei voida korjata portin PR:ssä, `check:cycles` on nyt **räikkä** (`--ratchet`, yläraja `metrics.cycles.value = 14` tiedostossa `quality-baseline.json`, `direction: down`) — se estää minkä tahansa _regression_, ja määrä voi vain laskea. CI suorittaa komennon `npm run check:cycles:ratchet`. Velan vähentäminen etenee kohteen **A-01** mukana. `check:circular-deps` (dpdm) säilyy neuvoa-antavana laajempana toisena arviona.
- **Monimutkaisuus** — ✅ **VALMIS** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): yksi ESLint-läpikäynti, laskenta ruleId:n mukaan, jotta syklomaattisen monimutkaisuuden ja enimmäisrivimäärän sekä kognitiivisen monimutkaisuuden baselinet pysyvät erillisinä; yksittäiset `check:complexity` / `check:cognitive-complexity` säilyvät paikallista `--update`-käyttöä varten.
- **`/api`-hallusinaationesto** — ✅ **VALMIS** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): yksi `src/app/api`-hakemiston tiedostojärjestelmäinventaario; openapi-routes ja docs-symbols raportoivat edelleen itsenäisesti; yksittäiset tarkistukset säilyvät paikallisia suorituksia varten.
- **`check:node-runtime` suoritetaan 11 työssä** — ⚠️ **pieni ROI.** Jokainen käyttää erillistä suoritusympäristöä ja tarkistus kestää alle sekunnin; kokonaissäästö olisi noin 10 sekuntia, mutta samalla menetettäisiin edullinen työkohtainen suojaus. Ei muutostyön arvoista.
- **`typecheck:noimplicit:core` CI:n lint-tarkistuksessa** — ✅ **poistettu lint-työstä** (oli neuvoa-antava `continue-on-error`); estävä tyyppipinta muodostuu tarkistuksista `typecheck:core` + `check:type-coverage`. Paikallinen komentosarja säilytetty.

### Käännä / päätä (operaattorin käytäntö)

- `check:openapi-security-tiers` (neuvoa-antava) — ❌ **EI voida siirtää suoraan estäväksi.** Se palauttaa arvon 0, mutta varoittaa, että useilta `LOCAL_ONLY_API_PREFIXES`-määrityksen alaisilta `traffic-inspector`-reiteiltä puuttuu `x-loopback-only: true` -annotaatio. Sen pakottaminen edellyttää näiden annotaatioiden lisäämistä ensin `openapi.yaml`-tiedostoon.
- `typecheck:noimplicit:core` (neuvoa-antava) — estävä `check:type-coverage`-räikkä korvaa sen suurelta osin. Muuta räikäksi tai poista redundantti toinen `tsc`-läpikäynti.
- `test:vitest:ui` (nyt **estävä**) — jo olemassa olevat epäonnistumiset on nimenomaisesti rajattu pois `vitest.config.ts`-tiedostossa `// #8618`-seurantakommenteilla; uudet epäonnistumiset kaatavat työn.
- `check:secrets` (gitleaks, estävä räikkä lukittuna kolmeen dokumentoituun väärään positiiviseen) — lisää nämä 3 sallittujen luetteloon nollatason saavuttamiseksi tai alenna tarkistus neuvoa-antavaksi. Päällekkäinen GitHubin sisäänrakennetun salaisuuksien tarkistuksen ja `check:public-creds`-tarkistuksen kanssa.
- `check:pr-evidence` (estävä, hakee PR-kuvauksen proosasta) — suuri väärien positiivisten riski; poistaminen heikentää ehdottoman säännön nro 18 valvontaa, joten tämä on todellinen käytäntöpäätös.
- `semgrep` (neuvoa-antava erillistarkistus) — päällekkäinen CodeQL:n kanssa OWASP-perheiden osalta; kytke sen baseline räikkään tai poista.

---

## Aiheeseen liittyvä dokumentaatio

- Toimitusketju (alkuperä, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — avainjoukkojen yhtäläisyyden tarkistus

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, työ `i18n-ui-coverage`).
Vertaa jokaisen `src/i18n/messages/<locale>.json`-tiedoston lehtiavainten joukkoa `en.json`-tiedostoon ja epäonnistuu,
jos yksikin lehtiavain puuttuu tai on ylimääräinen riippumatta siitä, milloin avain lisättiin. `__MISSING__:`-paikkamerkit
katsotaan olemassa oleviksi (niiden sisältö kuuluu suhdelukutarkistukselle). Tämä täydentää absoluuttisesti
kahta diff-pohjaista/prosenttipohjaista tarkistusta: `check-ui-keys-coverage` vaatii jokaiselle
kielialueelle vähintään 80 %:n kattavuuden (43 puuttuvaa avainta noin 13 000:sta näyttää edelleen lukeman 99,7 %), ja `check-new-key-coverage` arvioi
vain avaimet, jotka PR lisää `en.json`-tiedostoon. Kielialue-erä luodaan sen päivän `en.json`-tiedostosta,
jona sen haara luodaan, ja käännöstyö jatkuu päiviä samalla, kun pohjahaaraan lisätään avaimia; erän PR ei itse lisää
yhtään avainta, joten kumpikaan rinnakkaistarkistus ei reagoinut, kun erä 1 (#13044) yhdistettiin siten, että yhdeksästä
kielialueesta puuttui 43 avainta, ja erästä 2 (#13660) puuttui 10 avainta kahdeksasta kielialueesta (2026-09-15). Korjaa punainen tulos komennolla
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; `extra`-lehtiavain
tarkoittaa, että lähteestä on poistettu kyseinen avain — poista se kielialueesta. `--warn` raportoi epäonnistumatta.
`--catalog=cli` suorittaa saman vertailun hakemistolle `bin/cli/locales` (`npm run i18n:check-keys:cli`);
molemmat vaiheet ovat työssä `i18n-ui-coverage`.

#### `check-new-key-coverage` — uusien avainten i18n-tarkistus

Tarkistuksen `check-ui-value-drift` rinnakkaistarkistus. Se havaitsee englanninkielisen arvon, joka on **kirjoitettu uudelleen**
mutta jonka käännöksiä ei ole päivitetty; tämä havaitsee englanninkielisen avaimen, joka on **lisätty**
mutta jota jotkin kielialueet eivät koskaan saaneet.

`check-ui-keys-coverage` ei pysty havaitsemaan tätä tapausta: se vaatii prosentuaalisen vähimmäiskattavuuden kielialuekohtaisesti, ja
yksitoista puuttuvaa avainta noin 13 000 avaimesta jättää kattavuudeksi 99,9 %. Kielikohtainen prosenttiluku ei pysty
ilmaisemaan, että ”tämä ominaisuus julkaistiin kääntämättömänä” — kokonainen ominaisuus voidaan lisätä uuteen kielialueeseen ilman
tekstiä lukeman muuttumatta lainkaan.

Tarkistuksen taustalla oleva häiriö: Orchestration Canvasin vaiheessa 3 sen yksitoista avainta käännettiin
kaikille tuolloin olemassa olleille 42 kielialueelle. Tunteja myöhemmin EU-kielten erä (#13044) kasvatti repositorion
51 kielialueeseen, eivätkä yhdeksän uutta tulokasta (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) koskaan
saaneet niitä. `deepMergeFallback` korvaa puuttuvan avaimen englanninkielisellä tekstillä, joten seurauksena oli
kääntämätön eikä tyhjä käyttöliittymä — todellinen ongelma, joka jäi rakenteensa vuoksi huomaamatta.

Rinnakkaistarkistuksensa tavoin tämä on **diff-tietoinen**: se vertaa yhdistämiskannan englanninkielisiä tekstejä työpuuhun,
joten ennestään olemassa olevat puutteet pysyvät jäädytettyinä eikä tarkistuksen käyttöönotto edellyttänyt migraatiota.

**`__MISSING__:<english>`-merkintä ei täytä vaatimusta (2026-09-17 alkaen).** Aiemmin se oli
dokumentoitu lykkäyskeino — suoritusaikainen varajärjestely käyttää oikeaa englanninkielistä tekstiä — kunnes kahdeksan ominaisuus-PR:ää
lisäsi 2026-09-16 yhteensä 61 avainta ja lisäsi merkinnän kaikkiin 65 kielialueeseen kääntämisen sijasta: tämä
tarkistus hyväksyi ne kaikki, mikään ei estänyt PR:iä, ja estävä todellisten käännösten suhdelukutarkistus
epäonnistui sitten julkaisuhaaran kärjessä kaikilla (pt-BR 3,2 % > 2,5 % + 0,5). Merkintä tulkitaan nyt
puuttuvaksi käännökseksi. Korjaa punainen tulos komennolla
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40`, tai
kaikki kielialueet rinnakkain komennolla `npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`,
toimii irrotetussa tilassa, eikä suostu käynnistymään ilman `OMNIROUTE_TRANSLATION_*`-ympäristömuuttujia). Avain, jonka on pysyttävä
englanninkielisenä (kiinteä tuotteen, moottorin tai lipun nimi), kuuluu tiedostoon `scripts/i18n/untranslatable-keys.json`,
ei koskaan merkinnän taakse. `vi` kieltää merkinnät kokonaan (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — sivuun jätettyjen testien tarkistus

Tiedosto `vitest.config.ts`-tiedoston `exclude`-luettelossa on testi, jota ei suoriteta, vaikka se näyttää
kattavuudelta lähdekoodipuuta lukevalle. Kommentin
`// #8618 — pre-existing failure; remove this exclusion when fixed` taakse kertyi 62 tiedostoa. Ongelma #8618 suljettiin
2026-08-11 samalla, kun sen seuraama luettelo kasvoi 45 merkinnästä 62 merkintään ja jokainen uusi merkintä peri kommentin,
joka viittasi suljettuun ongelmaan. Kun luettelo lopulta mitattiin tiedosto kerrallaan (#13204), **51 tiedostoa 62:sta
läpäisi testit nykyistä lähdekoodipuuta vasten ilman lähdekoodimuutoksia**.

Tarkistus vaatii, että jokainen todelliseen tiedostoon viittaava poissulku (a) nimeää seurantaongelman ja
(b) esiintyy tiedostossa `config/quality/vitest-exclusions.json` mitatun tilansa kanssa, jotta uuden poissulun lisääminen on
tarkasteltava diff sille tarkoitetussa tiedostossa eikä vain jälleen yksi rivi 60 merkinnän taulukossa. Tarkistus ei tarkoituksella
suorita poissuljettuja testejä uudelleen — se maksaa noin 10 minuuttia ja kuuluu säännöllisesti suoritettavaan työhön;
luettelo tallentaa, milloin kukin testi mitattiin viimeksi.
