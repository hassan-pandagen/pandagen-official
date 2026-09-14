# AI SEO service page: revision 2 audit

Reviewed **15 September 2026**. Scope: the [review export](../ai-seo-page-for-review-2026-09-14.md), current application source, existing local production build, desktop/mobile presentation, CTA behaviour, supporting metadata, evidence and relevant primary documentation. Application content was not changed, committed or deployed.

**Verdict: the monthly offer is now evaluable, but the page is not ready to publish unchanged. Keep the $500 table and the ability to quote broader work. Correct the remaining contradictions and claims, move the offer earlier, and shorten repeated explanations.** The additions themselves are not the main problem.

The review export says the previous findings were fixed, “plus everything else it raised.” That overstates completion. The build-only positioning, exclusions, citation FAQ, llms.txt claims, attribution-method qualification and migration footer remain. The matrix below separates what is resolved from what still needs work.

## Answers to the four review questions

| Question | Answer |
| --- | --- |
| Do the additions clarify or dilute the starting offer? | **They clarify the available scale of work.** The explicit starting scope and written agreement protect the anchor. Compress the additions into coverage, production/implementation and measurement. Explain which work is an initial project and which increases monthly delivery. “Separately quoted additions” describes the public offer more clearly: individual prices are agreed privately, not displayed on this page. |
| Is attribution hedged enough? | **No.** Platform feasibility is only one boundary. Tracking can connect available source information to records; it cannot reconstruct every missing origin. Distinguish captured referrals from customer-declared discovery. Remove the unsupported market-majority claim. |
| Is approximately 1,800 words and nine sections too much? | **There is no useful universal cutoff. This version repeats too much.** The FAQ is 594 words, about 35% of the service-specific text. The scope follows two explanatory/evidence sections. Cut repetition before cutting the offer, useful limitations or relationship disclosure. |
| Does anything still overclaim or hedge too hard? | **Both.** “So it is read either way,” the attribution promise and “live” data overstate certainty. “No target of any kind,” the unqualified citation answer and the build-only conclusion make the actual monthly service sound less useful than it is. |

These are editorial and commercial judgments based on the inspected page, not conversion-test results.

## What is now right

- **A real monthly scope:** ten buyer questions, two agreed surfaces, up to five priority pages, one implemented and verified improvement with a revision round, report and review. This is owner-adopted scope; no further approval for its existence is needed.
- **Pricing:** from $500 per month, quoted for project size and scope. No per-website multiplication. Larger work is agreed before commitment.
- **Month one:** establishes a baseline and still ships an improvement; substantial setup is identified separately.
- **The comparison with much larger retainers is gone.** This avoids implying equivalent deliverables at different prices.
- **Supporting surfaces acknowledge the retainer:** metadata description, related-services card and llms.txt. The title now contains “Services.”
- **The primary CTA works:** “Ask us about your site” opens the matching low-pressure enquiry form. The founder-response reassurance is consistent.
- **The evidence retains important boundaries:** own property, dates, Google-only impressions, no claim that impressions are visits or sales, and a co-founder relationship disclosure.
- **The date correction is in the registry:** the June 12–September 11 window is 92 days. The old percentage is removed from rendered copy, although its replacement still needs a small correction below.

## Corrections before publishing

### 1. Make the whole page describe the monthly service

The H1 still sells websites “built in from the start.” The opening explains JavaScript rendering. After the monthly table, the exclusions conclude that what the buyer receives is a newly built site at a fixed project price. The final CTA asks whether the problem needs a build or an edit.

A customer with an existing functioning website can reasonably wonder whether this service is for them. A midsize buyer also needs to understand the ongoing research and improvement cycle without inferring a rebuild.

**Recommended change:** lead with the monthly offer; make foundations included in a new build one short supporting explanation. Remove the old build-only “What you do get” paragraph from the retainer section. Keep rebuilds separately scoped.

Possible opening, using the adopted offer:

> **AI SEO services with practical improvements every month.**
>
> We research what your buyers ask, monitor an agreed set of AI-search results, and improve the pages they rely on. Monthly services start at $500, with the work and fee agreed around your project's size and scope.

Keep the existing primary CTA and reassurance. This is proposed copy, not a new promise of citations, traffic or revenue.

Source: [page component](../../../src/app/services/ai-seo/PageContent.tsx), opening and lines 301–305, 329–334.

### 2. Resolve the scope contradictions

| Current wording | Buyer problem | Correction |
| --- | --- | --- |
| Included page/content improvements, but “Content written for you” is excluded | Is adding missing buyer information included or another bill? | Include edits within the agreed page improvement. Separately scope new long-form pieces, interviews and substantial original research. |
| The quote names “who publishes,” but PandaCodeGen unconditionally ships the change | A client with a controlled release process cannot tell how delivery works | Say you implement and verify with agreed access and approval. Where the client's team must release it, state that dependency in the quote. |
| Large backlog work is an addition, then excluded from “a monthly fee” | Appears excluded even from a larger retainer | Say it is outside the **starting scope**, and separately scoped as initial work or a larger monthly engagement. |
| No citation, ranking or traffic “target of any kind” | Removes business objectives as well as guarantees | Exclude guaranteed results; agree objectives, delivered work and measurement. |

“Small technical task” needs an agreed definition before delivery. One concrete example would help buyers: adding verified delivery information to a priority page, or fixing an agreed indexing issue. Label examples as illustrative; do not turn them into extra included deliverables.

The written scope should also identify the stable question set, market/language, check cadence, access dependencies and review format. Ten monitored questions do not establish search volume or represent all AI-search demand. Research should distinguish observed customer questions, external demand evidence and proposed test prompts.

The page does not tell a subscribing buyer the commitment/notice period, or whether tool costs are included. Its general [terms](../../../src/app/terms/page.tsx) defer these matters to accepted project terms. Replace a repetitive FAQ with the actual commercial answer when established; do not invent “cancel anytime,” a minimum term, or included software.

Source: [page](../../../src/app/services/ai-seo/PageContent.tsx), lines 53–57 and 197–224; [FAQ](../../../src/data/service-faqs.ts), lines 57–78.

### 3. Keep attribution, but describe what it can establish

“An enquiry or order carries where it came from” is too complete. Requests can omit referrer information; server-side processing does not recreate absent evidence. An attributed order also does not prove incremental revenue caused by the service. [MDN referrer-policy documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy), [Google's server-event attribution requirements](https://developers.google.com/analytics/devguides/collection/protocol/ga4/use-cases).

**Suggested replacement:**

> **Source tracking for enquiries and orders**
>
> Where your setup supports it, we can connect available referral and campaign information to enquiries or orders, including server-side tracking where needed. We check what your platform already records and agree the integration before quoting. Some sources remain unknown; this cannot identify every AI-assisted purchase.

Keep the experience claim separately and accurately: Panda Patches uses captured referrers **and customer-declared sources**, according to the [measurement registry](../../../src/data/first-party-measurements.json), line 108. Do not describe every record as a directly observed AI referral. This audit did not inspect the private order database or validate its matching rules.

The platform hedge is sensible, but custom development is not a prerequisite for all attribution: Shopify documents order-linked referral information, including AI sources. Inspect native capabilities before quoting additional engineering. [Shopify conversion summaries](https://help.shopify.com/en/manual/fulfillment/managing-orders/analytics/conversion-summary).

Remove “Most AI-search reporting stops at visibility.” This selected comparison did not establish a market majority. WebFX advertises downstream revenue attribution and Impression reports LLM referrals and conversions. Their published capabilities also contradict the source comment that competitors structurally cannot match this work. They do not prove that those agencies implement every integration or that it is included in every plan. [WebFX OmniSEO](https://www.webfx.com/technology/revenuecloudfx/omniseo/), [Impression GEO](https://www.impressiondigital.com/generative-engine-optimisation-agency/).

For dashboards, replace “live” with an agreed refresh schedule and named data sources. A dashboard being accessible continuously does not make every upstream metric real-time. Scope build cost, maintenance, software charges and handover. [GA4 data freshness](https://support.google.com/analytics/answer/11198161?hl=en).

The fuller evidence and proposed implementation boundaries are in [attribution-review.md](attribution-review.md).

### 4. Tighten proof without weakening honest disclosure

The registry supports 9,843 AI-feature impressions and 157,920 Web-search impressions over the same dates; 6.2% is the rounded chart-to-chart ratio. Describe it as a share of **Web-search impressions**, not “everything.” These are observed appearances, not evidence that this retainer caused business growth.

The replacement “5,583 **of them**” still suggests that the page-level figure is a subset of the displayed property-level count. Those aggregation levels differ. Use:

> The hosting-bandwidth article recorded 5,583 page-level impressions in the same period.

The [registry](../../../src/data/first-party-measurements.json), lines 310–336, now explicitly records the two totals: 9,843 for the chart and 9,899 for the page table. The [previous raw-archive check](../ai-seo-audit-2026-09-14/claims-and-measurement.md) remains the arithmetic evidence; this revision did not obtain a new authenticated export. Google documents the report's scope in its [Generative AI performance report guide](https://support.google.com/webmasters/answer/16984139?hl=en).

Keep “a business our co-founder owns.” Remove the following “our own company”: the [case page](../../../src/app/work/panda-patches/page.tsx), line 313, explicitly states PandaCodeGen has no ownership stake. A short method link or redacted tracking example would support the implementation claim more directly than a general migration case. Do not invent a new result or import unreviewed revenue figures.

Move this proof below the starting offer. A large developer-research impression count is not the strongest opening evidence for a business buying recurring AI SEO.

### 5. Correct and shorten the FAQ

- Change the citation question to **“Can you guarantee citations or rankings?”** Answer that you cannot guarantee engine selection, then explain the controlled work. Remove “anyone who says otherwise is selling something.” Helping improve eligibility is different from promising selection.
- Replace “so it is read either way” with **“so important content is available without running JavaScript.”** Availability does not establish retrieval, indexing or citation. Google can process JavaScript; rebuilding a site is not a universal prerequisite. [Google's AI optimisation guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- Shorten or link out the llms.txt answer. The broad Cursor/Copilot claim needs a documented workflow; a fetch in a server log does not establish use in an answer. Training, search and user-triggered retrieval should not be conflated. See the [prior claim-by-claim review](../ai-seo-audit-2026-09-14/claims-and-measurement.md).
- The Lighthouse claim is misleading without context: its llms.txt check treats an absent file returning 404 as not applicable. Agentic Browsing is experimental, and a particular count of checks is not a permanent specification. [Chrome llms.txt audit](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt), [scoring documentation](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring).
- The monthly FAQ repeats the table, and the proof FAQ repeats the statistics. Short answers can point to the relevant sections instead. Use the space for existing-site eligibility, commitment/cancellation and what happens when work exceeds the starting scope.

Fix the shared FAQ data itself: it supplies both visible answers and FAQ JSON-LD. A body-only correction would leave the same claims in structured data.

## Structure, design and CTA findings

The visual system is coherent: restrained colour, readable type, distinct offer/attribution boxes and a table that fits both inspected widths. The mobile table is dense, but it does **not** overflow horizontally. The design needs stronger hierarchy and less repetition rather than another decorative section.

Measured from the existing local production build:

| Check | Desktop, 1440 × 1000 | Mobile, 390 × 844 |
| --- | --- | --- |
| First service enquiry button, top of element | 758 px | 871 px, below the initial viewport |
| Monthly scope section starts | 2,208 px | 3,222 px |
| Additions section starts | 2,961 px | 4,525 px |
| Full page height, including shared sections/footer | 8,919 px | 15,204 px |
| Table width / scroll width | 768 / 768 px | 342 / 342 px |

The service-specific sections contain **1,678 words** using whitespace tokenisation; including related services gives **1,781**. Small differences from the export's 1,682/1,795 reflect extraction boundaries and counting conventions, not a material defect. There are seven service-body H2s, plus related services and the footer CTA: nine visible page-content H2s. The export omits shared content while quoting a broader section count.

The FAQ contributes **594 words**. The additions contribute **271**. The strongest cut opportunity is repeated explanation across the hero, readability section, exclusions and FAQs. Google's guidance explicitly rejects an ideal page length; this recommendation concerns comprehension and buying flow. [Google's page-length guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

**Recommended sequence:**

1. Monthly AI SEO proposition, starting price, fit and primary CTA.
2. The existing monthly scope table and first-month explanation.
3. Relevant first-party proof, with method and relationship limits beside it.
4. Compact additions: measurement; more coverage; more content/implementation.
5. Short scope boundaries and the few useful buying FAQs.
6. One service-specific closing CTA, then ordinary footer navigation.

Fold the readability explanation into a short supporting block or FAQ. A practical editing budget is roughly 1,200–1,400 service words, subject to clarity; it is **not** an SEO target or a requirement to remove useful detail. Avoid adding a TLDR that repeats the table and creates yet another opening.

Keep **“Ask us about your site.”** Change the close to invite the site's URL and the product/service the buyer wants customers to find. Its present text invites a free check without providing that link locally; either provide the link or remove that invitation.

The shared header and footer still promote **“Get your migration plan.”** The footer adds a large migration pitch after the service has already closed. Disable that optional CTA on this page (`showCta={false}`) and use a service-appropriate header CTA through the shared component's design. This is a recommendation, not an applied change.

**Booking check:** in this local build, “Book a call” has no configured calendar URL and opens the enquiry form via the fallback. The button is not dead, but its destination does not match its label. Verify production configuration before launch; this local observation does not establish a production failure. No form or calendar booking was submitted.

Screenshots: [desktop opening](screenshots/desktop-hero.png), [mobile opening](screenshots/mobile-hero.png), [mobile scope](screenshots/mobile-scope.png), [additions](screenshots/desktop-additions.png), [migration footer](screenshots/desktop-footer.png), [enquiry form](screenshots/desktop-enquiry-modal.png). On the fresh desktop visit, the consent banner covers part of the reassurance; the other review captures follow rejecting optional features in the isolated browser.

## SEO and implementation checks

| Check | Result |
| --- | --- |
| Local route | HTTP 200; the HTML response already contains monthly scope, attribution and FAQ content |
| Canonical and robots | Correct self-canonical; `index, follow` in inspected build |
| Metadata | Commercial service title and optional $500 retainer description are present |
| Heading structure | One H1; relevant nested H2/H3 structure; shared footer adds the irrelevant migration H2 |
| Structured data | Parseable WebSite/Organization and WebPage/BreadcrumbList/FAQPage graphs; FAQ uses shared rendered data |
| Internal destinations | All 27 extracted local link destinations returned HTTP 200 |
| Discovery | Service is in sitemap, related-service links and the AEO topical pillar; it is not orphaned |
| Navigation | AI SEO is absent from the header's service menu and ordinary footer service list; add an appropriate route into the offer |
| Blog separation | Current AEO playbook metadata is instructional; keep detailed how-to content there and commercial scope on this page |

The title is now appropriate. The visible H1 and opening still need to match that commercial intent. A shorter description could foreground the research, monitoring and implemented monthly improvement instead of leading with build foundations. There is no need to insert every agency/AEO/GEO keyword variant into headings or create separate overlapping money pages.

This revision did not collect new keyword volumes, difficulty scores or rankings. Historical US-only estimates do not establish current difficulty, UK demand, guaranteed ranking or zero cannibalisation. Keep the service/blog distinction and evaluate actual landing-page behaviour after publication.

The schema component's name does not mean it emits a `Service` node; it currently emits WebPage, breadcrumbs and FAQs. Adding accurate Service markup is optional semantic work, below the copy/offer corrections in priority. It is not evidence of improved rankings. No Lighthouse score, Core Web Vitals claim or production indexing result is asserted from these checks.

## Handoff and verification boundary

The work is a **review**, not an implementation. Prioritise correcting the offer contradictions, attribution language and FAQ claims; then reorder/compress and fix the CTA context. Do not reopen the approved price or scope, add invented deliverables, or expand the page with another list of promises.

Retained evidence: [rendered measurements](rendered-measurements.json), [local link results](local-link-checks.json), [CTA/HTML checks](cta-and-html-checks.json), [capture script](capture-render.mjs), and [input manifest](input-manifest.json). Supporting independent reviews: [buyer review](buyer-review.md) and [attribution review](attribution-review.md).

The visual checks used an isolated local browser and the existing production build; no fresh build was required because no application code changed. Online sources were checked on 15 September 2026. Published competitor capabilities are claims about their offers, not independent proof of their delivery. Private order records, live conversion outcomes, production calendar settings and fresh Search Console exports were not inspected.
