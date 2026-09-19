# Service and blog structure audit

PandaCodeGen should keep its direct answers, technical detail and publication safeguards, while changing the order and presentation of that material. The service pages spend too much of their opening argument discussing assessment, platform problems and written terms before showing relevant work. The blogs have useful answers, but the reading experience varies across 87 bespoke pages: summaries can arrive late, repeated promotional copy interrupts informational openings, and most long articles lack navigation within the article.

The priority is **a clearer buying sequence for services and a clearer reading sequence for blogs**. More content, more summary boxes and more CTA buttons would not resolve the identified problems. The detailed recommendations below preserve the actual scope, project relationships and evidence limits already established on the site.

## Coverage and evidence

| Area | Coverage | Practical limit |
|---|---|---|
| Services | The hub, all eight canonical service details, their shared components and the WordPress redirect | Structure, copy, proof and CTA review; individual platform specifications were not exhaustively re-verified |
| Own blogs | Structural census of all 87 articles; close editorial review of 20 across pricing, comparisons, tutorials, AEO, news, agency and research formats | The remaining 67 bodies were inventoried, not comprehensively fact-checked |
| Own browser layouts | All nine service pages, the blog index and six articles at 1440px and 390px widths | 32 page/viewport captures; local production output, not a claim about the deployed version |
| External services | Seven full service/practice references and two hubs across Bejamas, Naturaily, FocusReactive and Fueled/10up | One hub was available as a discovery extract; Pagepro service bodies could not be reviewed |
| External blogs | Eleven full articles across Pagepro, FocusReactive, Naturaily, Bejamas, Prismic, Sanity and 10up | A purposeful sample; vendors and enterprise agencies have different commercial goals |
| External browser layouts | Naturaily Shopify service and three articles from Naturaily, Bejamas and FocusReactive, desktop and mobile | Pagepro browser requests returned security interstitials; its readable blog extracts remain text evidence only |

The evidence snapshot is dated **14 September 2026**, based on local revision `decb148` and the production preview on port 3002. Existing working-tree changes are not represented by the revision alone. This report recommends changes; it does not record a service/blog implementation or deployment. Competitor page patterns do not establish conversion uplift, ranking advantage or market leadership.

Detailed evidence and implementation references:

- [Service-by-service comparison, proposed flows and copy](service-comparison.md)
- [Blog findings and 20-article editorial review](blog-internal-audit.md)
- [All 87 articles: structural inventory](blog-inventory.md)
- [Eleven competitor articles and format comparisons](competitor-blog-comparison.md)
- [Desktop/mobile findings and screenshots](visual-findings.md)
- [Service source register](service-source-notes.md), [blog census data](blog-inventory.json), [rendered measurements](rendered-measurements.json)

## Main findings

| Priority | Finding | Recommended response |
|---|---|---|
| P1: correction | 48 articles render two equivalent FAQ headings | Give the shared FAQ block one heading owner. Keep its answers visible |
| P1: correction | Engineering's closing CTA still offers a migration plan; several service heroes promise a final price during an initial call while later sections require discovery | Match every action label to its actual booking/form destination and the outcome that can honestly be provided |
| P1: evidence reconciliation | The service hub and proof components still contain figures outside the reconciled central evidence, including an engineering automation percentage | Verify the source and measurement context before featuring those figures. An absent record is not proof a number is false |
| P1: editorial consistency | Exact passages repeat inside some pricing and commerce articles; dates/read-time presentation varies | Remove true duplication and align maintained metadata with visible content |
| P2: reading structure | None of the 85 non-glossary articles has a linked contents list; many are long, multi-part guides | Add contents navigation where the article has distinct tasks or decisions. Short announcements do not need it |
| P2: answer timing | The WordPress comparison's short answer follows three quotations; the migration tutorial opens with case-study history and a withdrawal explanation | Lead with the answer to the article's question. Keep project-specific context and limitations beside the project example |
| P2: proof | Four platform service pages have no in-body work link, and the shared service proof cards have no screenshots | Add relevant real work with a clear role, relationship and direct case-study path |
| P2: relevance | 49 article bodies contain the no-minimum-project-size message, including 36 within their first eight paragraphs | Keep this commercial detail where it answers a buying concern. Let informational introductions establish the problem and answer |
| P2: discovery | The blog index presents topic hubs and a second set of filter categories before the articles | Give readers one primary topic system plus search; preserve useful hub URLs |

P1 items are identifiable inconsistencies or unresolved evidence. P2 items are reasoned editorial/design recommendations; their commercial effects require measurement. Counts and examples are preserved in the linked inventories rather than treated as estimated industry averages.

## How the reference sites differ

The most useful distinction is the job each page performs. Agency service pages sell an engagement. Buyer articles help select an approach. Technical articles help complete an operation. Project articles explain delivery judgment. PandaCodeGen currently mixes these jobs inside many pages.

| Reference pattern | Observation | Application to PandaCodeGen |
|---|---|---|
| Service and project connection | Bejamas links its service scope to delivery stages and named work; complete cases are not always near the top | Show a relevant preview early as a deliberate local improvement, then link the full case where its evidence is useful. [Migration service](https://bejamas.com/services/website-migration) |
| A next action that is easy to understand | Naturaily's Shopify page asks for a project estimate, introduces buyer situations and distinguishes storefront approaches | Explain what the buyer needs and what the enquiry produces. Keep Panda's own capabilities and commercial terms. [Shopify service](https://naturaily.com/services/shopify-development-company) |
| Navigation for a long buyer guide | FocusReactive's migration article has opening takeaways, a desktop contents rail and a contextual plan-review action | Use a shorter contents list tied to the actual H2s, with a compact mobile treatment. Its enterprise prices and outcome claims are not Panda benchmarks. [Migration guide](https://focusreactive.com/blog/cms-migration/) |
| An answer in the introduction | Naturaily's headless SEO article makes the platform-versus-implementation distinction before the main sections | State the important condition immediately rather than building suspense around a yes/no decision. [Headless SEO article](https://naturaily.com/blog/headless-cms-seo-ai-discoverability) |
| Work as an explanation | Bejamas' rebuild story uses concrete artifacts and describes difficult decisions | Publish a bounded story about an actual build or workflow, with its limitations, rather than repeatedly describing a generic process. [Rebuild story](https://bejamas.com/insights/migration/how-we-rebuilt-our-website-in-2024) |

Long pages also exist among these references. Naturaily and FocusReactive repeat some arguments and CTAs; Bejamas' project story takes time to establish its history. These are useful examples to assess, not complete templates to copy. The full comparison distinguishes primary-site observations from recommendations.

## Are the headings, TLDRs and summaries right?

### Keep a direct answer, give each opening element a different purpose

A title tells the reader what question or task the page addresses. A short introduction establishes who the answer applies to. A TLDR gives the decision or essential finding. A contents list provides navigation. A conclusion resolves what to do next. These should not be five versions of the same paragraph.

For a substantial decision guide, use **one opening answer block**. It can be a short paragraph or a few concise bullets. If the introduction already answers the question completely, omit a second summary or use it for genuinely different decision criteria. Forty articles have recognizable summary labels somewhere, but that count includes closing takeaways; it does not mean 40 have an effective opening TLDR. [Blog census](blog-inventory.md).

The redesign-cost article demonstrates both the value and the presentation problem. Its short answer starts around 787px down on mobile and clearly labels Panda's own starting prices. Four separately padded cards make the summary bulky. Keep the answer and qualification, but render them as a compact list with one surrounding treatment. The WordPress comparison already gives a balanced answer in its lead, but its labeled short-answer block starts around 2,380px down, after quotations. Consolidate the opening answer before any optional quotations, retaining quotations only where they support a specific decision. [Visual evidence](visual-findings.md).

The Agentic Browsing article uses seven repeated Quick Answer labels as well as an opening summary. Local section summaries can be helpful, but repeating the same decorated label reduces the distinction between an actual warning, a finding and ordinary explanation. Begin each section with its concise answer; reserve highlighted boxes for the few points whose significance warrants emphasis. This recommendation does not require deleting the technical qualifications. [Article review](blog-internal-audit.md).

### Make headings describe the answerable task

Use one descriptive H1, H2s for the main decisions or steps, and H3s for their parts. Avoid a second generic heading immediately before a component that generates its own heading. W3C explains that headings communicate document organization and support navigation, including through assistive technology. [W3C heading guidance](https://www.w3.org/WAI/tutorials/page-structure/headings/).

Headings can be questions, instructions or concise noun phrases. Choose the form that makes the next section easiest to recognize. There is no reason to force every H2 into a keyword question. Nielsen Norman Group's eye-tracking work supports meaningful, visually distinct headings for scanning; it does not establish a search-ranking formula. [Heading/scanning research](https://www.nngroup.com/articles/layer-cake-pattern-scanning/).

Examples of proposed editorial direction:

| Current location or pattern | Proposed heading or structure | Reason |
|---|---|---|
| Migration tutorial opens with reasons to leave WordPress | Open with the migration sequence; then “Keep WordPress as the CMS, or replace it?” | The reader arrived for the migration task and its first architectural decision |
| Generic validation/architecture sections on service pages | “What moves across, what we rebuild and what stays” | Names concrete responsibilities |
| Agentic article mixes audit explanation with sales attribution | Keep the audit steps together; link the separate attribution study with a short relevance note | Avoids changing the reader's task halfway through |
| Repeated FAQ title | One FAQ heading followed by actual remaining questions | Removes a visible defect without hiding answers |
| Cost article repeats scope caveats | One price answer, then a table of cost drivers and worked scope examples | Turns the qualification into useful comparison material |

### Put detail in the order readers need it

The Office for National Statistics' content guidance recommends frontloading important information, using descriptive sections and linking reusable background rather than repeating it. Its rules are written for statistical publishing; the transferable principle is prioritizing the reader's task, not enforcing that institution's entire style guide on an agency. [ONS content structure](https://service-manual.ons.gov.uk/content/writing-for-users/structuring-content).

For PandaCodeGen, this means a practical answer before broad platform commentary, a useful example before another explanation of assessment, and the next step after enough information to choose it. It also means retaining sections that matter even when they are long: a redirect mapping example, a migration validation sequence or an honest comparison of editing workflows has more value than a shorter but vague article.

## Recommended service-page structure

| Order | Section | What it must establish |
|---|---|---|
| 1 | Service and fit | What is being delivered, for whom, and the main reason to consider it; one enquiry action and one work link |
| 2 | Relevant project | Real screenshot, actual delivered scope, relationship and direct case link; measured results only when supported |
| 3 | Scope and boundaries | What moves, what is rebuilt, what stays with the current provider, and what the client can edit |
| 4 | Decision aid | When to improve the existing system, when a rebuild fits, and where the offer is unsuitable |
| 5 | Delivery stages | What Panda does, what the client supplies and what each approval produces |
| 6 | Price and ongoing responsibility | Existing starting points where applicable, scope drivers, provider costs and separately agreed support |
| 7 | Remaining objections | Specific questions not already resolved by the scope or pricing sections |
| 8 | Enquiry | A clearly labeled action, what happens next and only the information needed to start |

This is an editorial sequence, not a requirement for eight large visual bands. A decision aid and scope map may share a section. A short service can resolve objections inline. The repeated PartnerPromise/PricingTiers explanations should become one coherent account of engagement terms. The detailed service report maps this structure to each of the eight pages.

Project selection should be relevant to the service, while keeping the requested work-index order unchanged. MyCustomPatches can support WordPress migration despite being sixth on the portfolio. The operations platform can support engineering with the founder relationship and its actual React/Vite stack. Panda Patches must not be relabeled as a Shopify or GHL implementation. Where no matching project is documented, state that a case is related experience. [Project mapping and boundaries](service-comparison.md).

### Draft service opening

For the WordPress service, a supported starting direction is:

> **WordPress migration for the website you've outgrown.**
>
> We rebuild your website in custom code around the content, integrations and editing tools your business needs. The migration plan covers your existing URLs, redirect mapping and launch checks.
>
> **Book a WordPress migration call** · **See the MyCustomPatches build**

This names the service and scope without promising preserved rankings, universal savings or an automatic final quote. The first action should use the existing booking flow. A separate quote-form action should explicitly describe the enquiry or quote request. The case retains its project-specific disclosure and withdrawn-result notice.

## Recommended blog formats and CTAs

| Article type | Information flow | Natural next action |
|---|---|---|
| Cost / buying guide | Answer and price basis → scope comparison → worked examples → recurring costs → how to compare quotes | View the relevant pricing scope or describe the project |
| Platform comparison | Fit verdict → decision table → operating/editing trade-offs → relevant example → migration implications | Review the matching service or case; allow the conclusion that the current platform fits |
| How-to / troubleshooting | Task and prerequisites → diagnostic test → steps → expected result → checks/recovery → limits | Continue with a technical guide; offer help where the reader's situation exceeds the example |
| News / emerging technology | What changed and when → who is affected → what is established versus experimental → action/no-action criteria → sources | Read the implementation guidance or a dated update; do not force a sales block |
| First-party research | Finding and scope → sample/definitions → results → interpretation/limitations → practical implication | Inspect the method, relevant project or related engineering capability |
| Project narrative | Relationship and completed work → starting constraints → decisions → artifacts → supported results/limits → lesson | Read the full case or discuss similar work |

Use a shared reading design with these different briefs. A shared design does not require every article to contain a TLDR, comparison grid, FAQ, code sample and sales panel. It requires each module to be used consistently when it has a job.

### Example migration opening and contents

> **How to migrate WordPress to Next.js: an SEO checklist**
>
> Start by recording the existing URLs and deciding whether WordPress will remain the CMS. Map the content and redirects, rebuild and test on staging, then check important URLs, forms and tracking before and after launch. These controls reduce avoidable migration errors; rankings can still change.

Suggested contents: choose the CMS approach; inventory content and URLs; build the redirect map; rebuild templates and integrations; validate staging; launch and monitor; decide when to get help. A project example belongs beside the step it illustrates. Its measurement caveat remains attached to that example.

After the reader has used the checklist, a contextual service link can say **See our WordPress migration scope**. At the end, **Discuss your migration** can lead to the existing enquiry form. Neither wording implies an instant downloadable plan or a completed technical audit.

### CTA rules for this site

An action should describe its immediate destination: read a case, view scope, open an enquiry form or book a call. Explain the subsequent deliverable separately. W3C's link-purpose guidance supports meaningful names and continuity between a link and its destination. [Link-purpose guidance](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html).

Keep one principal commercial goal for a page while allowing contextual evidence and learning links. Repeating an action after a new decision point can be reasonable. Repeating a large sales panel before the reader receives useful information is the pattern to remove. The global header, an article CTA and the footer should be reviewed together so their wording and destinations agree.

The SEO/AEO topic currently routes readers toward editorial policy, and the playbook contains service-style material despite the unresolved standalone offer. A policy link is useful for standards; it does not explain a commercial service. Reconcile the existing blog offer with confirmed delivery scope before promoting it or inventing a new AEO service page. [AEO article findings](blog-internal-audit.md).

## Implementation order and acceptance criteria

| Stage | Work | Acceptance check |
|---|---|---|
| 1. Correct inconsistencies | Duplicate FAQ headings, repeated paragraphs, incorrect action labels, stale shared work wording and mismatched visible metadata | One FAQ heading per block; no duplicated passages; each action matches the destination; dates represent actual changes/reviews |
| 2. Reconcile proof | Service illustration figures, shared case metrics, engineering automation percentage and MCP delivery-record conflict | Every published result has an actual retrievable source and appropriate nearby context; unresolved figures do not become hero claims |
| 3. Establish the service pattern | Apply the new sequence first to WordPress and engineering, then adapt the six remaining details and hub | A buyer can identify fit, relevant work, included scope, costs and next action without reading repeated policy sections |
| 4. Establish the reading pattern | Apply shared heading, summary, contents, figure/table and CTA components to comparison, pricing and how-to pilots | The title's question is answered early; contents links work; mobile summary is compact; keyboard focus and readable tables/code are retained |
| 5. Edit by article intent | Use the 20-article matrix, then triage remaining census entries | Each introduction, body sequence and CTA serves the article's actual task; no blanket deletion based on length |
| 6. Improve discovery | Simplify blog taxonomy controls, curate adjacent reads and preserve useful topic routes | Readers can find a topic and then a relevant article; related recommendations follow intent rather than loose shared tags |

After implementation, compare completed qualified enquiries as well as clicks. Separate service enquiries from tutorial reading and author/source clicks. Record which page and CTA location led to the form or booking step, and whether the submission actually completed. A before/after change is observational unless the design and traffic support a controlled comparison; multiple changes in one release cannot be credited individually.

Technical acceptance should include current production rendering, mobile/desktop and zoom review, semantic headings, working in-page links, visible focus, image alternatives and table/code overflow. Forms can be checked for labels and destination behavior without submitting a real enquiry during an editorial audit.

## Search guidance and evidence limits

Google's content guidance emphasizes useful, original, trustworthy material and explicitly rejects a preferred word-count target. This audit therefore recommends removing repetition and filling real answer gaps, not shortening every page to a benchmark length. Clear authorship and relevant first-hand examples should remain. [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

Google also states that AI Overviews and AI Mode require no special additional optimization or AI-specific markup. A TLDR, FAQ or repeated answer label is not a documented requirement for those features. Their value here is helping readers understand and navigate the material. This statement concerns Google's features; it is not a claim about every AI provider. [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).

Published and modified dates, the actual author and article metadata should describe the visible article accurately. Google's Article guidance defines those properties and supports author-identifying links. Use genuine review dates and avoid changing years as a cosmetic refresh. [Article metadata guidance](https://developers.google.com/search/docs/appearance/structured-data/article).

The recommendations are supported by source inspection, competitor page observations and local rendered evidence. They do not establish competitor conversion rates, an optimal CTA count, guaranteed rankings, a new service entitlement or a complete factual review of every article. Source details, dates and access limits are retained in the linked reports and the [visual evidence appendix](visual-findings.md).
