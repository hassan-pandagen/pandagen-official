# Proof, commercial coverage and keyword evidence

Reviewed 15 September 2026 against local commit `93ec417`. This is a source/evidence audit, not a deployment, a fresh keyword-account export, or an inspection of private order records. No live forms were submitted and no secret environment values or customer-level records were read. The current French/German corrections are part of this commit; findings from the earlier international audit must not be repeated as if still open.

**Assessment: there are useful, inspectable receipts, and the offer has broadened materially. It is not accurate to say every claim is reconciled, every service has equal proof, or SEO results have already improved.** Stronger descriptions and a broader set of buying paths are progress in readiness. They are not yet measured gains in rankings, qualified enquiries or revenue.

## 1. What changed, and what can be measured today

The [13 September baseline](../../evidence-audit/BASELINE_2026-09-13.md) records a homepage H1 that assumed an existing WordPress/Wix/Squarespace site and promised no traffic loss. The current [company facts](../../../src/data/company-facts.ts) explicitly cover a first website, a replacement website and a store, with migration controls when something must move. Its Organization description includes software and integrations, plus separately scoped ongoing AI SEO/support. The entry website/store price is $1,500; the $5,000 Scale tier no longer makes every small store a Scale project. These are material offer corrections.

The AI SEO offer is now a buyer-evaluable recurring engagement. [The scope table](../../../src/app/services/ai-seo/PageContent.tsx:54) names ten buyer questions, two agreed AI surfaces, up to five priority pages in one product/service area, one implemented improvement with verification and a revision round, a monthly report, and a review. The first month still ships an improvement; a substantial setup is quoted before commitment. Attribution and dashboards are separately scoped additions. This is much stronger than an undefined $500 monitoring retainer.

The main gap has moved from the homepage's promise to the routes underneath it. New-store buyers reach an [ecommerce page](../../../src/app/services/ecommerce/page.tsx:11) titled "Shopify & WooCommerce Storefront Engineering", whose [opening](../../../src/app/services/ecommerce/PageContent.tsx:53) still sells migrating high-volume brands. This is not yet an equally clear new-store offer. Software has a real [commercial page](../../../src/app/services/custom-engineering/PageContent.tsx:51), but its Next.js label and defensive scope language are more prominent than the business use cases. CAPI and lead attribution have articles and supporting engineering sections but no dedicated service route in `src/app/services`.

Fresh arithmetic check of the preserved 13 September archives:

| Archive / aggregation | Period / rows | Checked total |
|---|---|---:|
| Web Search `Chart.csv` | 12 June–11 September 2026, 92 daily rows | 259 clicks; 157,920 impressions |
| Generative AI Features `Chart.csv` | Same 92 dates | 9,843 impressions |
| Generative AI Features `Pages.csv` | 97 exported page rows | 9,899 impressions |

The [Web archive](../../../GSC/pandacodegen.com-Performance-on-Search-2026-09-13.zip) and [AI archive](../../../GSC/pandacodegen.com-Performance-on-Search-Generative-AI-Features-2026-09-13.zip) are present and inspectable. Their contents were recomputed locally, not reauthenticated through Google. These observations precede the latest changes. They cannot demonstrate improvement caused by those changes, external market demand, or the site's current position for keywords it has never appeared for. Do not sum chart and page aggregations or treat impressions as leads.

## 2. Receipt inventory: different evidence supports different claims

| Subject | What is actually inspectable here | Classification and safe conclusion |
|---|---|---|
| Website/store delivery | Current portfolio pages, public preview assets, detailed project descriptions and relationship disclosures in [case-study-facts.json](../../../src/data/case-study-facts.json) | **Published scope + owner-approved summaries.** Real portfolio assets are stronger than hypothetical examples, but this audit did not inspect the other businesses' source repositories, accepted scopes or approval correspondence. Describe actual completed work; do not imply every portfolio figure is independently audited. |
| MyCustomPatches delivery | Central entries for about 22 days, 200+ URLs, 13 templates and cutover monitoring; each records a date and approver | **Owner-approved records recorded in a registry.** The underlying dated inventories/approval documents were not inspected here. The registry status is not itself a raw receipt. Preserve legitimate delivery scope while reconciling the ranking evidence conflict below. |
| MyCustomPatches performance/hosting | Explicit withdrawal/retirement entries and explanation that hosting invoices were not retained | **Withdrawn / permanently retired hosting figures.** Do not reinstate $150→$0, PageSpeed, load-time or field-CWV claims from old screenshots or prose. The absence of old invoices is expressly documented. |
| Agency-site AI visibility | Actual zipped CSV archive, method, dates and exact arithmetic | **Inspectable export.** Supports a historical Google-specific visibility count; does not show client-retainer results or sales caused by the agency's SEO work. |
| Panda Patches March–18 August attribution | [Aggregate source dataset](../../../src/data/ai-referral-data.json) and [typed arithmetic guard](../../../src/data/ai-referral-facts.ts) | **Inspectable aggregate, private underlying order system not audited.** Recomputed 760 orders / $271,620.61 total; 63 AI-classified orders / $16,783.76 = 6.1791%, rounded 6.2%. Valid arithmetic does not independently validate classification, refunds, repeat orders or incremental causation. |
| Panda Patches August attribution | [First-party registry](../../../src/data/first-party-measurements.json) names 36 orders / $11,186.59 and the private reports view for 1–31 August | **Summarized private-source record.** Do not confuse it with the March–18 August window or call it an independently checked order export. Gross, net and classified revenue need explicit handling when quoting shares. |
| AI/source dashboard images | Inspected `public/blog-images/ai-referred-orders.png` and `capi-source-with-chatgpt.png`; both contain aggregate channel tables | **Inspectable UI examples.** They show different totals from the later published windows and do not display sufficient period metadata to authenticate those later totals. Useful demonstrations of the reporting interface, not interchangeable receipts for any chosen date range. |
| Meta CAPI reporting | Inspected `public/blog-images/capi-conversions-lift-10pct.jpeg` | **Inspectable founder-affiliated platform screenshot.** Its tooltip reports 10.4% additional reported Lead events from CAPI alongside the pixel over a displayed seven-day comparison, with Lead EMQ 9.0/10. Capture year is not visible. This is reported event coverage, not 10.4% more actual leads, more sales, controlled lift or current-account verification. |
| CAPI data-quality monitoring | Inspected `public/blog-images/capi-tracked-vs-untracked.png`; 19 tracked / 17 untracked of 36 sent | **Inspectable internal dashboard screenshot.** Shows that the interface distinguishes event data availability. It does not prove Meta accepted every event, deduplicated correctly or attributed purchases correctly. Internal quote-adoption tiles are not CAPI conversion rates. |
| Agency-site source capture | [trafficSource.ts](../../../src/lib/analytics/trafficSource.ts), shared form payloads and quote-request parser | **Inspectable implementation.** UTM/referrer classification and session first-touch fields can be inspected in code. This is not validation of the separate Panda Patches CRM, live mail delivery, CRM ingestion or an end-to-end revenue reconciliation. |
| Agency-site Meta implementation | [FacebookPixel.tsx](../../../src/components/FacebookPixel.tsx) and consent-managed mounting | **Browser Pixel implementation with consent checks.** No server-side CAPI adapter was found in this site's `src/lib`/`src/app/api`. That does not show CAPI is absent from the separate store/operations project; it means this checkout cannot authenticate that project's implementation. |
| Operations software / CAPI refund handling | Detailed [operations case](../../../src/app/work/enterprise-ops/page.tsx), including source reporting and asserted purchase/lead events with refund reversal | **Capability and project-scope descriptions.** Production code, deployment configuration, retry/deduplication logs and refund reconciliation were not inspected. Do not promote "refund reversal" into a verified Meta platform behavior on the basis of a case-study sentence. |
| 48-site agent-accessibility study | Registry names three source files; `outreach/tools/webflo_clients.json` exists, but `outreach/tools/sweep2.json` and `outreach/tools/stack_vs_agentic.json` do not exist at those recorded paths | **Partially retrievable source chain.** The full 37/48 result was not independently reproduced. A registry method and sample warning are useful, but repair the raw-source location before treating this as a fully retrievable study. |

Panda Patches, its CRM and CodeLab carry founder-affiliation in the central relationship record. This makes them legitimate operating experience, not arm's-length client proof. That distinction is now considerably clearer than the baseline described.

## 3. Current canon and evidence conflicts to fix before saying "all reconciled"

1. **The release register itself is stale.** [CLAIMS_REGISTER.md](../../CLAIMS_REGISTER.md) still labels itself release control, says Texas formation, migration as the primary offer, custom development secondary to migration, telephone withheld, and outdated case/publication rules. [company-facts.ts](../../../src/data/company-facts.ts:53) says Wyoming and the current broader offer. This is an internal control failure even where public pages now agree. Mark superseded rows explicitly and point operational facts to the active canon; do not let a future agent republish the old register.

2. **AI attribution has two incompatible method descriptions.** [AI SEO page](../../../src/app/services/ai-seo/PageContent.tsx:242) says Panda Patches keeps captured and declared evidence apart rather than reporting one total. [The data file](../../../src/data/ai-referral-data.json) and [AI-revenue article](../../../src/app/blog/ai-referral-revenue-2026/page.tsx:168) say both feed one source field. Separate raw evidence is the recommended future/current control, but the actual implementation needs checking. A new recommendation must not silently become a claim about existing production behavior.

3. **The broad AI-referrer claims survived outside the corrected service page.** The [AI-revenue article](../../../src/app/blog/ai-referral-revenue-2026/page.tsx:157) says most businesses measure worse, mobile apps pass nothing, and asking is the only way to see missing-referrer traffic. [llms-txt.ts](../../../src/data/llms-txt.ts:128) repeats a general explanation for most businesses' near-zero AI traffic. The code comment in `trafficSource.ts` still calls labelled AI traffic a floor. None follows from one store's aggregate records. Preserve the useful method and experience; remove the untested population/platform generalizations.

4. **95% process automation has no inspectable denominator.** It remains on [custom engineering](../../../src/app/services/custom-engineering/PageContent.tsx:343), operations OG/Twitter descriptions and [operations hero](../../../src/app/work/enterprise-ops/page.tsx:348). `enterprise-ops.metrics` is empty in the case registry. No task inventory, weights, baseline, period or calculation was located. The honest state is unsubstantiated here, not proved false. Describe the actual automated steps unless the calculation is supplied.

5. **The commissioned developer rating needs qualification wherever displayed.** The [operations FAQ](../../../src/app/work/enterprise-ops/page.tsx:46) correctly identifies the review as commissioned and internal. Metadata and the hero's 9.0/10 badge omit that qualification. The rubric/review report itself was not inspected. An internal score is less persuasive than a specific demonstrated workflow and should not resemble an external certification.

6. **MyCustomPatches ranking status conflicts across the records.** [case-study-facts.json](../../../src/data/case-study-facts.json) marks no rankings lost in 30 days as verified with a 21 July owner approval. The [new retirement entry](../../../src/data/retired-claims.json:85) includes a retired assertion about rankings held and says the dated confirmation is not held. Resolve precisely which record is missing and which claim is retired. Do not erase supported delivery facts or keep a verified label merely because it already exists.

7. **Software pricing and tracking scope still need one clear commercial answer.** Custom engineering says work starts at $1,500; the operations FAQ says a business dashboard typically starts at $10,000–$25,000; CAPI content describes inclusion in an accepted Scale build from $5,000. These could represent different scopes, but a standalone software/CAPI buyer needs an explicit explanation, not three floors that appear to apply to the same enquiry. Do not invent a universal CAPI price.

These are targeted corrections. They do not justify removing useful case studies or making every page defensive. The stronger presentation is a specific completed task, a dated redacted example and one nearby limitation.

## 4. Preserved external keyword evidence, without overstating it

The September corpus contains **83 reconstructed rows from five 13 September calls**, saved on 14 September, plus **16 separately captured rows on 14 September**. Both name DataForSEO through Percuity MCP `get_keyword_data`, US `2840`, English `en`, difficulty included. The [provenance README](../../evidence-audit/keyword-evidence/README.md), [reconstruction](../../evidence-audit/keyword-evidence/reconstruction-2026-09-13.json) and [fresh capture](../../evidence-audit/keyword-evidence/capture-2026-09-14.json) exist under tracked `docs` paths.

The second capture is stronger than reconstruction, but all its monthly arrays stop in **February 2026**, seven months before capture. The headline measurement period, endpoint/wrapper mapping and CPC currency are not preserved fully. No UK, Canada, French or German volume capture is present in these files. A fresh rerun cannot retroactively authenticate the original response.

| Exact phrase | Preserved estimated volume/month | KD | Evidence | Suggested destination / decision |
|---|---:|---:|---|---|
| website redesign services | 6,600 | 10 | 14 Sep capture | Broad services/redesign offer; strongest reported relevant service phrase in this shortlist, not a forecast |
| website for small business | 1,900 | 51 | 13 Sep reconstruction only | Homepage / new-website service content; important to the expanded audience |
| business website design | 1,300 | 40 | 13 Sep reconstruction only | Same new-website buying path; avoid a second near-duplicate page |
| custom website development | 880 | 38 | 13 Sep reconstruction only | Website development offer; distinguish websites from bespoke business software |
| ecommerce website development | 1,300 | 26 | 13 Sep reconstruction only | Broaden ecommerce to serve first stores as well as existing-store work |
| website migration services | 720 | 3 | 14 Sep capture | Retain the established migration expertise within the broader offer |
| seo migration services | 170 | 0 | 14 Sep capture | Explain actual migration controls; avoid a duplicate page built for one wording |
| website redesign cost | 260 | 5 | 14 Sep capture | Existing cost article and pricing links |
| website migration seo checklist | 260 | 4 | 13 Sep reconstruction only | Existing migration guide/checklist coverage |
| ai seo agency | 1,600 | 0 | 14 Sep capture | One real AI SEO commercial page |
| ai seo services | 1,300 | 2 | 14 Sep capture | Same page; do not treat close variants as separate audiences |
| aeo services | 480 | 9 | 14 Sep capture | Same page, with AEO terminology explained naturally |
| geo agency | 720 | 24 | 14 Sep capture | Validate SERP intent before expanding claims; abbreviation can be ambiguous |
| white label web development | 320 | 1 | 14 Sep capture | Existing partners page, subject to actual capacity and agreement |
| nextjs development agency | 10 | 14 | 14 Sep capture | Secondary technical qualifier, not a reason to exclude plain-language buyers |

Every non-null row above carries the wrapper's `VIABLE` status. That status does not establish commercial viability for PandaCodeGen. `NO_VOLUME_REPORTED` means no value was returned, not zero demand and not a diagnosed reporting floor. The phrase `ai website builder for business` changes from 30 in the reconstruction to null in the fresh capture; the cause is unknown.

Provider methodology was rechecked on 15 September: [DataForSEO's difficulty model](https://dataforseo.com/help-center/what-is-keyword-difficulty-and-how-is-it-calculated) uses backlink-derived domain/page scores from top-ten results and is country-specific. It does not predict this site's credibility or ranking. [Grouped keyword volumes](https://dataforseo.com/help-center/sv-broad-exact-phrase-match) mean adjacent estimates should not be added as distinct people. [Missing-volume documentation](https://dataforseo.com/help-center/no-search-volume-data-for-some-keywords) establishes reasons besides low demand; it does not identify the cause for these specific null rows.

### Important missing keyword families

The following are **candidates to validate, not measured-volume opportunities**. The September captures do not cover them adequately:

| Offer | Shorter commercial families | More specific buyer tasks | Recommended route |
|---|---|---|---|
| New websites | website design services; small business web design | website with content editor; new business website with booking; website design fixed price | Broad website service path, with relevant examples and scope |
| Business software | custom software development; web application development; workflow automation | custom client portal development; replace spreadsheet order tracking; CRM integration for enquiries | Improve existing custom-engineering page first; add distinct use-case pages only where proof and buyer needs differ |
| Meta CAPI | Meta Conversions API setup; server-side tracking services | fix duplicate Meta Purchase events; connect CRM leads to Meta; Meta Pixel CAPI deduplication | A measurement/integrations service path if sold standalone; existing diagnostic articles support it |
| Lead attribution | lead attribution; marketing attribution setup | track website enquiry source in CRM; connect campaign source to orders; AI referral revenue tracking | Same measurement path where scope overlaps, with a clear method and redacted example |
| AI SEO | AI SEO audit; AI search optimisation services | monthly AI SEO for small business; improve product information for AI search; measure AI referrals to enquiries | Existing AI SEO offer, with services matching the accepted monthly scope |

Use separate named-period country/language captures for US, UK and Canada first, preserving full requests/responses and monthly rows. Pair them with actual result-page intent checks. GSC remains useful to observe this site's exposure after launch; it cannot supply the external opportunity universe.

## 5. What would make the proof commercially stronger

The next improvement is not more claims. Build one compact evidence packet for each main buying path:

- **Website/store:** a relevant approved finished example, exact work delivered, client versus founder relationship, editing/handover demonstration, and agreed scope rather than an implied universal speed result.
- **Software:** redacted workflow before/after, user roles, systems connected, actual acceptance checks, and any time-saving calculation with its denominator and period.
- **CAPI:** agreed event map and source-of-truth records, browser/server event-ID handling, relevant consent behavior, accepted-event reconciliation and refund/retry treatment. A platform screenshot supports only its displayed observation.
- **AI SEO:** a dated sample monthly work record showing the researched questions, selected pages, implemented change, verification and resulting next decision. Historical visibility can provide context without pretending to be a retainer case study.
- **Attribution:** preserve captured source and customer declaration separately, state first/last-touch and repeat/refund rules, reconcile orders once, and publish only a redacted aggregate example. Recorded attribution is not incremental revenue caused by SEO or advertising.

Keep private evidence private; publish a useful summary and record where the accountable owner can retrieve the underlying material. Canon should identify the fact, evidence location, window, owner, permitted wording and retirement status. It should not grant a fact credibility merely by calling it canonical.
