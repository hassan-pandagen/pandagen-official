# Language alignment and international market priorities

Researched 15 September 2026. Read-only application audit plus external market research. Application code, live content, campaigns and indexing were not changed. New files in this directory are research and reproducible evidence capture only.

## Recommendation

**Target the UK and English-speaking Canada with the English offer. Keep and repair the French/German discovery pages; those customers can work with English-speaking founders and translation-assisted written communication. Test a selected English-speaking business audience in the Netherlands next; Germany and France remain worthwhile inbound markets and small acquisition tests. Do not add several new languages at once.**

This order is a judgment about service fit and the cost of supporting customers, not a measured search-volume or competition ranking. **Owner clarification, 15 September:** the founders speak English and Urdu, not French or German, and are willing to use AI translation. Native French/German staff are not a prerequisite for serving those markets. Reliable communication is the requirement: English-speaking customers and checked translations can provide it. Germany versus France should follow qualified enquiries, acceptance of English calls and project economics, not the existence of translated pages alone.

Suggested localized-contact disclosure: **“Our founders work in English. You’re welcome to write in French or German; we use translation tools for written replies. Calls and project documentation are in English.”** This is recommended copy, not a claim that it has been deployed. Explain it near contact, booking and proposal expectations; it need not occupy the homepage hero. Review pricing, scope and acceptance criteria carefully across translations. AI assistance does not justify changing the commercial promise between languages.

The 2024 Eurobarometer found that 47% of Europeans spoke English as a foreign language. This is not a survey of agency buyers, and country/segment differences matter; it supports avoiding a blanket claim that almost every European prospect is comfortable buying in English. A buyer may search in French or German and still be happy to work in English. [European Commission summary, 21 May 2024](https://luxembourg.representation.ec.europa.eu/actualites-et-evenements/actualites/new-eurobarometer-shows-europeans-positive-attitude-towards-language-learning-2024-05-21_en).

## What the language audit verified

All 15 corresponding home, services, pricing, contact and about URLs were fetched from localhost and the public domain. Local capture completed at **15:46:21 UTC**; public capture completed at **15:46:44 UTC**. Each group contained five English, five French and five German URLs.

In both environments all 15 returned HTTP 200, declared the expected document language, used one self-referencing canonical, and emitted the four reciprocal `en`/`fr`/`de`/`x-default` alternatives inside the HTML head. This is successful response/tag verification, not evidence of Google indexing, rankings, hydration or visual quality. The source sitemap includes all ten translated URLs. There are no automatic IP/language redirects in the inspected proxy.

The public English pages still carried the older migration-led titles at capture, while localhost carried the new broad offer. French and German were migration-led in both environments. Thus a correct local change must not be reported as already deployed.

Evidence: [local response capture](localhost-locale-capture.json), [public response capture](public-locale-capture.json), [capture script](capture-locales.mjs). Captures include timestamp, response fingerprint, metadata, headings, form text, links and structured data. Source hashes record the inspected localization files at capture time.

### Highest-priority content and functional gaps

| Priority | Finding | Required work |
| --- | --- | --- |
| First | Both translated homepages still publish the withdrawn MyCustomPatches hosting result, $150/month to $0/month. | Remove the retired claim from both dictionaries; retain only supported project facts and disclosures. |
| First | All ten localized titles describe migration; homepage H1s ask whether the buyer has outgrown WordPress/Wix. | Align page-specific titles, descriptions, visible headings, introductions and social text with the actual broader offer. |
| First | Shared CTAs still request a migration plan; Contact copy assumes an existing site and migration constraints. | Match the founder-led English enquiry journey and include new-site buyers. |
| First | Any shop is still assigned to the $5,000 tier; summaries say no retainer while lower sections describe monthly care. | Allow the scoped small-store entry at $1,500; distinguish one-off build fees, optional care and monthly AI SEO. |
| First | The form no longer supplies the `(FR)`/`(DE)` service suffix used by the API's inbox language marker. | Pass a validated locale explicitly or derive it from an allowed route. Current code falls back to English; no actual email was submitted during this audit. |
| Next | Contact note, FAQ and form reassurance disagree about spoken/written service languages. | Publish one accurate answer for written replies, calls, contracts, training and support. |
| Next | The English contact redesign and founder photos did not propagate to the separate locale template; OG images reuse English assets. | Bring those experiences into parity and review mobile layouts after translation. |
| Next | Only five pages exist per translated language. | Complete the chosen service and proof journey before translating large numbers of articles. |

The translated forms already have localized labels and new-site/store placeholders. Starter already includes translated editor/training bullets. Pricing already explicitly names USD. There was no literal universal 2–4-week promise in these dictionaries. English customer quotations are intentionally preserved and marked English; that is appropriate.

Full source references and detailed issues: [French/German audit](locale-copy-audit.md).

## Market choices and what supports them

| Market | Language | Recommendation and evidence |
| --- | --- | --- |
| UK | English | First focused expansion test. The official start-2025 estimate counts 5.69m private businesses, including 1.42m employers. Large buyer base; existing English sales journey. This does not quantify businesses currently buying websites. [UK statistics](https://www.gov.uk/government/statistics/business-population-estimates-2025/business-population-estimates-for-the-uk-and-regions-2025-statistical-release). |
| Canada outside Quebec | English | Next or parallel English test if capacity permits. June-2026 statistics report 1.37m employer businesses, generally counted by operating location; this differs from the UK definition. Quote in explicit US dollars if invoicing USD. [Statistics Canada](https://www150.statcan.gc.ca/n1/daily-quotidien/260814/dq260814d-eng.htm). |
| Germany | German discovery; English calls/delivery | Targeted engineering/ecommerce test with buyers comfortable working in English, using translated written communication where useful. Existing-business redesign, performance and integrations fit a mature website market. KfW also records a recent decline in digitalization activity, so controlled scope matters more than a claim of booming demand. [KfW, April 2026](https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-Digitalisierungsbericht-Mittelstand/KfW-Digitalisierungsbericht-2025.pdf). |
| France | French discovery; English calls/delivery | Targeted test for creation/refonte and ecommerce with the working language clear before a call or quote. France Num 2025 found 65% website ownership overall, 81% for SMEs, and 37% difficulty finding a suitable digital provider. These populations differ from Eurostat's enterprise survey. [France Num](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2025-le). |
| Ireland | English | Sensible smaller English-language follow-on. CSO reports 401,359 active enterprises in the 2023 business economy, 99.8% SMEs; released December 2025. This establishes a business base, not current agency demand. [CSO](https://www.cso.ie/en/releasesandpublications/ep/p-biiilb/businessinireland2023-insightsonthelifecycleofbusinesses/keyfindings/). |
| Netherlands | English pilot; Dutch later | Test a specific international-business audience for technical services before adding Dutch. High English proficiency does not prove English search preference or purchasing behavior. [EF methodology and limitations](https://www.ef.nl/epi/about-epi/). |
| Austria, selected Swiss and Belgian regions | German/French as appropriate | Extend a working language journey where the actual offer applies. Neither Switzerland nor Belgium is covered by one national-language assumption. [Swiss languages](https://www.aboutswitzerland.eda.admin.ch/en/language), [Belgian communities](https://www.belgium.be/en/about_belgium/government/communities). |
| Quebec | Canadian French | Separate decision from English Canada. French-only first official language was 82.2% in the 2021 Census. A France-oriented homepage is not a complete Quebec sales/support journey. [Census table](https://www150.statcan.gc.ca/n1/daily-quotidien/220817/t005a-eng.htm). |

For Germany, Austria, Netherlands and several Nordics, Eurostat reports website ownership above 90% among surveyed firms in 2025. The survey covers firms with at least ten workers in specified sectors, not every small business. **Keep redesign, commerce improvements and integration services alongside new builds**; do not assume these buyers all need their first website. [Eurostat, May 2026 extraction](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=E-business_integration).

This is a shortlist, not a conclusion that Italy, Spain, Poland or other markets lack opportunity. There is not sufficient buyer or language-delivery evidence in this pass to fund additional language sites ahead of repairing French/German and testing English-market acquisition.

## Keywords: native buyer terminology, not translated keyword stuffing

Thirteen agency examples were reviewed across the [UK/Canada report](uk-canada-markets.md) and [Europe report](europe-markets.md). They support the vocabulary below. Supplier page wording is not search-volume evidence; these are candidate families requiring country-specific validation.

| Market | Shorter commercial candidates | Longer candidates |
| --- | --- | --- |
| UK | web design agency; website redesign services; ecommerce development agency | small business website design; bespoke ecommerce website development; website redesign cost UK |
| Canada / English | web design company; custom website development; ecommerce web design | website design for small businesses; ecommerce website cost Canada; custom web development Canada |
| Germany / German | Webdesign Agentur; Website erstellen lassen; Website Relaunch | Website erstellen lassen für kleine Unternehmen; Website Relaunch Kosten; Onlineshop erstellen lassen |
| France / French | création site internet; refonte site internet; agence web | prix création site internet professionnel; création site internet pour PME; site e-commerce sur mesure |

For AI SEO, validate `AI SEO services`, `AI search optimisation/optimization`, `GEO Agentur`, `KI SEO Agentur`, `agence GEO` and related longer phrases separately. Some are unsettled category terms. Keep one relevant commercial service destination per intent; do not build separate near-identical money pages for AEO, GEO and AI SEO synonyms.

Suggested French homepage title for editorial review: **Création de sites web et boutiques en ligne | PandaCodeGen**. Suggested German title: **Webdesign und Onlineshop-Entwicklung | PandaCodeGen**. These describe the real offer; neither is represented as a volume-winning title. Software and existing-site redesign/migration can be explained in the description, subhead and linked service sections.

Suggested founder CTA equivalents: **Parlez aux fondateurs** / **Mit den Gründern sprechen**, with adjacent copy making clear that the action opens a message form. Have a fluent reviewer check tone and grammar across the whole journey rather than approving isolated buttons.

### Required demand validation before asserting an opportunity

No callable keyword-volume provider was available in this session. No country-specific volume, KD or CPC was invented, and no GSC queries were used as external demand evidence. The prior September 13 capture is US-only and cannot establish UK, Canadian or European demand.

Use separate UK-English, Canada-English, Germany-German and France-French exports. Quebec-French and Netherlands-Dutch are later candidates if delivery and pilot results justify them. Request the latest twelve complete months available (ideally September 2025–August 2026; label any reporting lag), plus monthly breakdown, location, language, provider/tool date, network and currency. Preserve the raw output. Keyword Planner search averages include close variants; its competition column measures advertisers, not organic ranking difficulty. [Google Ads metric definitions](https://support.google.com/google-ads/answer/3022575?hl=en-uk), [location/language settings](https://support.google.com/google-ads/answer/6325025?hl=En).

Review a country-specific search-result sample for each family to distinguish agencies from DIY builders, jobs, courses, informational answers and local-map intent. Compare qualified enquiries, proposal acceptance, delivery effort and project margin as well as impressions. Decide expansion from those results, not from how many translated URLs can be published.

## International SEO: preserve the working foundation

Keep the existing `.com`, English URLs, and generic `/fr` and `/de` language versions. A generic language can serve several countries. There is no need to create copied `/uk`, `/canada`, `/austria` or city pages merely to add place names. Real country variants become useful when currency, offer, proof or delivery information differs; then plan reciprocal regional annotations such as `en-GB`/`en-CA` or `fr-CA`. English `og:locale=en_US` is social metadata, not a restriction preventing UK/Canada visibility.

The current HTML alternate links already provide the supported relationship; there is no benefit to adding a second hreflang method simply because it is possible. Do not change French/German canonicals to English. Do not replace generic-language targeting with France-only/Germany-only annotations without an actual country-version decision. [Google localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions).

Google recommends language-specific URLs and visible language selection. Main content should actually be in the intended language; navigation-only translation is not a complete localized experience. Country names or geographic meta tags do not substitute for relevant regional content. [Google multilingual/multiregional guidance](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites).

## Recommended work sequence

1. Remove withdrawn proof and resolve pricing, monthly-service, hosting and language promises in both dictionaries.
2. Align the ten existing localized pages and fix form language routing, localized errors, founder presentation and social previews.
3. Complete one commercial service and relevant case-study journey for the language that can actually be supported. Keep original disclosures and limitations beside the evidence.
4. Test UK and English Canada acquisition without cloning the English site. Ireland and a narrow Netherlands English audience are additional low-translation-cost candidates, not simultaneous full campaigns.
5. Add localized service content and selected helpful articles after keyword and enquiry evidence identifies a worthwhile audience. Do not translate every blog before the buyer has a usable service, proof, price and contact destination.

The work above is recommended, not implemented by this audit. The full report records source findings, public/local response evidence, competitor observations and remaining demand-data limitations separately.
