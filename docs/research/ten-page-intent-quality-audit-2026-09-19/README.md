# Ten-page search-intent and content-quality audit

**Reviewed:** 19 September 2026  
**Scope:** the ten URLs shown in Google Search Console under **Crawled — currently not indexed**.  
**Question:** does each page answer a distinct search task, add something beyond commodity advice, connect to the correct topic and commercial journey, and earn any 2026 framing it uses?

## Method and limits

I compared the live search-result pattern for each primary query with the page title, opening answer, section structure and next step. I then checked every page's canonical, topic-cluster membership, contextual internal links, commercial destination, source basis and dated claims.

Search results are volatile and personalized. This is an intent comparison, not a volume forecast. The retained Search Console exports do not join queries to landing pages, so they cannot prove that a property-level query belongs to one of these URLs. No title or H1 was changed merely because a competing page used different wording.

Current reference points included:

- [Google guidance for AI features and websites](https://developers.google.com/search/docs/appearance/ai-features)
- [Google guidance for helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search ranking overview](https://www.google.com/search/howsearchworks/how-search-works/ranking-results/)
- [Shopify web-performance overview](https://help.shopify.com/en/manual/online-store/web-performance/overview)
- [Shopify store-speed and conversion analysis](https://www.shopify.com/enterprise/blog/store-speed-conversion)
- [Webflow User Accounts sunset](https://help.webflow.com/hc/en-us/articles/36046006227731-User-Accounts-sunset)
- [Webflow current plans and pricing](https://webflow.com/pricing)
- [Chrome UX Report methodology](https://developer.chrome.com/docs/crux/methodology)
- [web.dev on field and lab data](https://web.dev/articles/lab-and-field-data-differences)

## Decision

All ten pages serve a distinct purpose in the 2026 site. None should be deleted, redirected or merged on the evidence available. Their boundaries are coherent enough to avoid obvious same-intent cannibalization:

- comparison pages decide between approaches;
- cost pages build or normalize a price model;
- diagnostic pages find a cause before recommending work;
- service pages explain what PandaCodeGen sells;
- cluster hubs organize the topic rather than repeating the article answer.

The pages were not equally strong. Six were already defensible. Four needed claim or journey corrections, which were made in this review.

## Page-by-page findings

| Page | Primary search task | Non-commodity value | Contextual journey | 2026 verdict | Result |
|---|---|---|---|---|---|
| `wordpress-vs-custom-code-real-cost-3-years` | Compare three-year WordPress and custom-code ownership cost | Auditable formula, shared capability baseline, internal-labor treatment, sensitivity and break-even method | WordPress cluster → migration/custom engineering → pricing/work | Earned by current WordPress and provider terms. Keep one evergreen URL and update it; do not make a 2027 clone. | **Pass after correction** |
| `website-rebuild-cost-2026` | Price and scope a rebuild, distinct from redesign or migration | Seven-line scope model, provider-fit comparison, quote normalization, own published tiers | Pricing cluster → redesign/migration cost guides → relevant services/pricing | Earned by current PandaCodeGen tiers and current project requirements. | **Pass after correction** |
| `wix-vs-custom-website` | Decide whether Wix or a custom site fits stated requirements | Requirements matrix across editing, capabilities, Velo, export, ownership, cost and exit | Wix cluster → Wix migration service → platform-specific cost guide and proof | Earned by current Wix CMS, Velo, export and transfer documentation. | **Pass** |
| `why-competitor-outranks-you` | Diagnose a ranking gap without pretending one metric gives the cause | Seven evidence groups, observed/estimated/inferred split, page-level link workflow, prioritization method | SEO/AEO cluster → AI SEO service → proof/work | Current because it now cites current Google Search, spam, helpful-content and AI-feature guidance plus Bing AI Performance. | **Pass after correction** |
| `shopify-conversion-rate-speed-fix` | Determine whether speed contributes to a Shopify funnel problem | Route/device/source segmentation, field-versus-lab split, falsifiable hypothesis, release validation and scenario math | Shopify and ecommerce-strategy clusters → ecommerce service → adjacent Shopify diagnostics | Current official Shopify reporting and 2026 conversion analysis support the time-sensitive parts. | **Pass** |
| `cheap-web-developer` | Vet an affordable developer without assuming low price means low quality | Scope-of-work checklist, portfolio verification, payment/handoff controls, evidence labels and first-party relationship disclosure | Agency cluster → pricing, services, ownership and proof pages | 2026 is supported by dated primary references and current AI-builder buying context. | **Pass** |
| `for-agencies-offer-custom-web-development` | Structure a white-label or co-delivery partnership | Delivery-model taxonomy, fit gate, step sequence, RACI-style responsibility matrix, ownership and post-launch rules | Agency cluster → `/partners` → custom engineering/contact | The method is mostly evergreen; 2026 is a freshness modifier, not a factual dependency. Keep updating this URL rather than cloning by year. | **Pass** |
| `shopify-plus-still-slow` | Diagnose an enterprise Shopify storefront before re-theme or headless work | Separates plan entitlement from route performance, production tracing, safe app-isolation procedure, governance and acceptance controls | Shopify cluster → ecommerce service → speed, app-cost and headless guides | Current Shopify Plus, performance-report, theme and Storefront API sources make it current. | **Pass** |
| `leaving-webflow-2026` | Decide whether to stay, optimize or migrate from Webflow | Current plan-change analysis, export inventory, feature-sunset implications, evidence sprint and destination criteria | Webflow cluster → Webflow service → migration cost, TCO and platform comparison | Strongest justified year modifier in the set: May 2026 plan changes and the January 2026 User Accounts sunset materially change the answer. | **Pass** |
| `how-to-speed-up-your-website` | Diagnose a slow route in the correct order | A reproducible measured example on the page itself, route-level workflow, field/lab separation and regression controls | Performance cluster → free audit → platform-specific guides and services | Earned by a dated first-party run and current Google, Chrome and CrUX guidance. | **Pass after correction** |

## Corrections made

### 1. Rebuild-cost page: removed unsupported market numbers

The page quoted freelancer, agency and small-business rebuild ranges without a source capable of supporting a 2026 market-wide claim. Those figures were removed. The comparison now tells the reader to normalize scope, hours, exclusions and internal effort rather than positioning PandaCodeGen against an invented market average.

The page also said Growth covered 10–20 pages while the canonical pricing source says 8–20. It now matches the canon.

### 2. WordPress-versus-custom model: separated arithmetic from market evidence

The worked example remains because it is the page's main non-commodity asset. It now says explicitly that the WordPress values are constructed scenario assumptions rather than observed market ranges. The unsupported claim that custom builds generally start around $5,000 and run past $20,000 was removed. The reader is told which figure is PandaCodeGen's price and which figures must be replaced with current invoices and quotes.

### 3. Competitor-ranking page: removed false certainty and fixed the commercial path

The page previously said links were the most common remaining explanation after content and technical checks. Public Google material does not support that universal weighting. The section now treats page-level links as evidence worth investigating while preserving uncertainty about causation.

Its offer section was still a migration pitch. A reader asking why a competitor ranks higher now goes to the AI SEO service, which starts from $500 per month, with a rebuild mentioned only when the platform blocks an accepted requirement. Google Search, helpful-content, spam and AI-feature sources were added to the cited source set.

### 4. Website-speed page: turned score bands into triage rather than diagnosis

The prior table inferred likely causes from Lighthouse score bands. A score does not establish whether an image, script, origin or third party caused the result. Each row now states what the score actually proves and sends the reader to the trace.

The raw-HTML check also overreached. Finding text in a response is useful evidence for that response and user agent; it does not prove what every search or assistant crawler renders. The text now states that limit. The close now asks the reader to bring the slow route for diagnosis instead of assuming a migration plan.

## Internal-link assessment

Every page has all four useful link types:

1. a cluster-level parent through `TopicUpLink`;
2. contextual links inside the argument to narrower or adjacent guides;
3. a commercial destination that matches the reader's next task;
4. related reading for discovery after the main answer.

The network is especially strong around performance, Shopify, Wix and Webflow. The weakest commercial link was the competitor-ranking page's migration-first offer; that is now routed to `/services/ai-seo`. The generic speed guide correctly remains in the performance cluster whose parent is `/free-audit`, while its body links to platform-specific services only where the diagnosis makes them relevant.

No additional internal links were added merely to increase link counts. The ten pages already receive contextual inbound links from their service pages, adjacent guides, case studies or pricing content. Repeating the same anchor on more unrelated pages would add noise rather than topical clarity.

## Cannibalization boundaries to preserve

| Owner page | Keep it focused on | Do not let it absorb |
|---|---|---|
| WordPress vs custom three-year model | like-for-like TCO decision | migration quote, generic website price, WordPress-to-Next.js process |
| Website rebuild cost | rebuild scope and quote normalization | visual redesign-only cost or platform-move-only cost |
| Wix vs custom | platform choice | Wix migration price or service delivery |
| Competitor outranks | diagnostic comparison | a generic definition of AEO or an AI SEO sales page |
| Shopify conversion and speed | causal funnel analysis | general store-speed checklist or Plus architecture |
| Cheap web developer | hiring due diligence | agency shortlist or PandaCodeGen pricing page |
| White-label partnership | how the operating relationship works | partner landing-page conversion copy |
| Shopify Plus speed | enterprise route diagnosis | generic Shopify optimization or headless definition |
| Leaving Webflow | stay/optimize/leave decision | Webflow migration quote or step-by-step service delivery |
| Speed up website | platform-neutral diagnostic sequence | “why is my site slow” symptom primer or Lighthouse-score explainer |

## What would improve the set next

The next useful input is Search Console page-by-query data after deployment. It can show whether Google assigns overlapping queries to multiple URLs and whether one page is receiving impressions for a task its title does not answer. The current exports cannot establish that relationship.

For content quality, the next gain is more first-party measurement on pages that currently rely on a framework: anonymized proposal line items for rebuild cost, a downloadable TCO worksheet populated from a real consenting business, and before/after route-level Shopify measurements with confounders recorded. Those would add evidence. More generic prose, more year labels or more related-post links would not.
