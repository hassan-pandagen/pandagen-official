# Site-wide keyword ownership and cannibalisation audit

Review date: 19 September 2026

## Executive decision

The site does not have a general duplicate-title or duplicate-H1 problem. A rendered review covered 135 English URLs from the sitemap and found:

- zero duplicate titles;
- zero duplicate H1s;
- zero missing titles, descriptions or H1s after the two initially cold routes finished compiling;
- 43 lexical-overlap pairs worth reviewing, most of which are legitimate service, guide, comparison and cost distinctions rather than competing pages.

One cluster did have avoidable intent overlap: the commercial `/partners` page, the agency topic hub and the white-label article all led with the same broad phrase. That cluster has been separated in this revision. The commercial page keeps **white-label web development**; the hub now owns **agency web development partnership guides**; the article now owns **how to structure a white-label web development partnership**.

The AI reference pages should remain factual brand/entity references. Their titles have been made brand-first, and the parent title no longer repeats `PandaCodeGen`. This reduces the chance that a page such as `/ai-info/migration-services` looks like the primary commercial migration page.

The blog and work indexes were still describing the earlier migration-led business. Their metadata and the blog H1 now cover websites, ecommerce, software, performance and search without trying to own a narrow article query.

## What cannibalisation can and cannot be proved here

Shared words do not prove cannibalisation. A service page, cost guide and implementation guide may all mention the same platform while satisfying different tasks. Harmful overlap is demonstrated when the same query repeatedly switches between URLs, multiple URLs divide clicks and impressions for the same intent, or Google selects the wrong destination.

The retained GSC exports contain separate query and page tables. They cannot establish which URL earned a query's impressions. The exact-query Pages export is still required for empirical diagnosis. Until that exists, this audit classifies intent and on-page signals; it does not claim that every structurally distinct page already ranks as intended.

For each important query family in Search Console:

1. filter the exact query or anchored query family;
2. open/export the Pages table for the same dates, country, device and Web search type;
3. compare complete 28-day periods, then a 56-day view where volume is low;
4. treat switching between two URLs with the same task as a collision;
5. treat stable guide-versus-service ownership as healthy even when both pages contain the same nouns.

## Page ownership map

| Search task | Primary owner | Supporting pages | Rule |
| --- | --- | --- | --- |
| Find a company for a new website, redesign or migration | `/services` | homepage, pricing, work | The service index owns broad commercial wording. The homepage explains the company; it does not need every service keyword. |
| Website redesign services | `/services` | `/blog/website-redesign-cost`, `/blog/website-rebuild-cost-2026` | Cost and decision articles remain informational. |
| Website migration services / SEO migration services | `/services` | `/blog/topic/website-migration`, migration-risk and cost guides | Keep the broad service family together. Do not create separate synonym service pages. |
| WordPress to Next.js migration services / agency | `/services/wordpress-migration` | WordPress hub, tutorial, comparison and cost guide | Service owns hiring; tutorial owns execution; comparison owns choice; cost guide owns budget. |
| Webflow optimisation or Webflow-to-Next.js migration services | `/services/webflow` | Webflow hub, exit guide and cost guide | The service page covers repair or rebuild. The exit guide owns export and leaving questions. |
| Wix migration services | `/services/wix` | Wix cost, speed and comparison articles | Wix is service-owned and correctly has no second topic hub. |
| Squarespace migration services | `/services/squarespace` | Squarespace hub, cost, speed and comparison articles | Keep `Guides` in the hub signals and transactional wording on the service. |
| WooCommerce migration/storefront work | `/services/woocommerce` | cost, speed, comparison and conversion articles | Platform service owns commissioning; articles own individual diagnoses. |
| Shopify or WooCommerce custom storefront / headless commerce development | `/services/ecommerce` | Shopify hub and ecommerce hub | The commerce hub explains architecture and tracking; the service sells implementation. |
| GoHighLevel website and CRM integration | `/services/gohighlevel` | keep-CRM guide and speed guide | Use retained-CRM and external-site questions as sections, not separate service pages. |
| Custom web development agency / custom software | `/services/custom-engineering` | custom-development hub, build-vs-buy and ownership guides | Client portals, dashboards, internal tools and attribution are use cases under this page until evidence supports their own service. |
| White-label web development | `/partners` | agency hub and partnership-structure article | Commercial, directory and instructional intent are now separated. |
| AI SEO services / AEO services | `/services/ai-seo` | SEO-and-AI-search hub and evidence articles | Service owns hiring and monthly scope; articles own definitions, measurements and limitations. |
| PandaCodeGen facts, pricing, evidence and governance | `/ai-info` and its children | service and work pages as the substantive sources | Reference pages stay brand-first. They should not be rewritten as keyword landing pages. |
| Website cost | `/blog/how-much-does-a-website-cost` | redesign, rebuild and migration cost guides | Each supporting guide must keep its scope modifier; do not collapse distinct buyer decisions. |
| Website speed diagnosis | `/blog/how-to-speed-up-your-website` | speed hub, platform-specific speed guides, Core Web Vitals explainer | Generic checklist owns the broad task; platform pages own platform symptoms. `/free-audit` owns the action. |
| Meta Conversions API setup cost | `/blog/meta-conversions-api-setup-cost` | tracking diagnostic articles, ecommerce and custom-engineering services | Keep cost, broken-tracking diagnosis and broader attribution as separate tasks. |
| Lead attribution system / custom reporting | `/services/custom-engineering` | AI SEO attribution section and enterprise-ops proof | Keep this as a use case until a standalone deliverable, entry price and boundary are defined. |

## The ten GSC exclusion-report pages

| URL | Intended query/task | Collision decision |
| --- | --- | --- |
| `/blog/wordpress-vs-custom-code-real-cost-3-years` | WordPress versus custom-code three-year cost | Distinct from the migration-cost guide because it owns ongoing TCO, not project price. |
| `/blog/website-rebuild-cost-2026` | website rebuild cost; redesign versus rebuild | Distinct from redesign cost and migration cost when it keeps the full-rebuild decision explicit. |
| `/blog/wix-vs-custom-website` | Wix versus custom website | Distinct platform decision page; do not turn it into another migration-service page. |
| `/blog/why-competitor-outranks-you` | why a competitor ranks higher; SEO gap diagnosis | Distinct diagnostic intent. Live URL Inspection remains the indexing action. |
| `/blog/shopify-conversion-rate-speed-fix` | low Shopify conversion rate and speed in the funnel | Distinct from generic Shopify speed because conversion measurement is the task. |
| `/blog/cheap-web-developer` | cheap web developer trade-offs | Supports agency selection; should not imitate the custom-development service title. |
| `/blog/for-agencies-offer-custom-web-development` | how to structure a white-label development partnership | Retitled in this revision to separate it from `/partners`. |
| `/blog/shopify-plus-still-slow` | why Shopify Plus can still be slow | Distinct plan-versus-storefront diagnosis. |
| `/blog/leaving-webflow-2026` | leaving Webflow; export and replacement requirements | Distinct from service and cost pages. |
| `/blog/how-to-speed-up-your-website` | how to speed up a website | Broad diagnostic guide; platform-specific articles remain children. |

## Long-tail coverage: use sections before creating URLs

Google's current generative-search guidance explicitly warns against creating a separate page for every possible query variation. The long tails below belong as headings, FAQ questions, comparison rows or worked examples on the named owner unless query-to-page data later proves a distinct task.

### Highest-priority commercial families

These have the strongest retained demand evidence. Provider volumes are historical US estimates from the September 2026 reconstruction, not current Google counts and not additive audience totals.

| Family | Retained evidence | Owner | Variants to answer on that page |
| --- | ---: | --- | --- |
| website redesign services | 6,600/mo, KD 10 | `/services` | website redesign company; redesign an existing business website; redesign without changing every URL; redesign versus rebuild |
| AI SEO agency | 1,600/mo, KD 0 | `/services/ai-seo` | AI SEO agency for small business; ongoing AI SEO; AI visibility monitoring service; AI referral tracking |
| AI SEO services | 1,300/mo, KD 2 | `/services/ai-seo` | monthly AI SEO services; what an AI SEO retainer includes; AI SEO implementation versus recommendations |
| website migration services | 720/mo, KD 3 | `/services` | website migration company; migrate an existing website; SEO-safe migration process; migration implementation versus consulting |
| white-label web development | 320/mo, KD 1 | `/partners` | white-label developer for marketing agencies; NDA and no-poach terms; who talks to the client; code and IP handover |
| website migration SEO checklist | 260/mo, KD 4 | existing migration-risk guide | pre-launch migration checklist; redirect map checklist; post-launch Search Console checks; rollback conditions |
| website redesign cost | 260/mo, KD 5 | `/blog/website-redesign-cost` | small-business redesign cost; what changes the quote; redesign versus rebuild price; content and integration costs |
| SEO migration services | 170/mo, KD 0 | `/services` | redirect mapping service; metadata and canonical migration; launch monitoring; search-continuity scope |

### Existing GSC opportunity families

| Observed query family | Historical property-level signal | Owner and action |
| --- | --- | --- |
| `website migration cost` | 428 impressions, 1 click, average position 14.14 | Keep `/blog/website-migration-cost-2026` as the broad seven-platform cost owner. Improve only from query-to-page and CTR evidence. |
| `wordpress to next.js migration services` | 138 impressions, average position 12.22 | `/services/wordpress-migration`; preserve explicit service, Next.js, proof and scope. Landing URL is still unconfirmed in the retained export. |
| `wordpress to next.js migration agency` | 16 impressions, average position 9.56 | Same service page; do not mint an agency spelling variant. |
| `wordpress to next.js migration cost` | 16 impressions, average position 7.88 | `/blog/wordpress-migration-cost`; link clearly to the service. |
| `next.js development agency` + `nextjs development agency` | 246 + 97 impressions, positions about 23 | `/services/custom-engineering`; retain Next.js in body/examples while the title stays buyer-readable as custom web development. |

### Useful long tails that should remain sections

- `/services/webflow`: **Webflow to Next.js migration service**, **migrate Webflow CMS to Next.js**, **who edits the site after leaving Webflow**, **Webflow form notifications not arriving**.
- `/services/gohighlevel`: **keep GoHighLevel CRM and replace the website**, **connect a custom website to GoHighLevel**, **GoHighLevel external website integration**, **move a site out of GoHighLevel without losing automations**.
- `/services/custom-engineering`: **custom client portal development**, **customer order portal**, **replace spreadsheets with an internal tool**, **custom lead attribution dashboard**, **server-side lead-source capture**.
- `/services/ecommerce`: **headless Shopify development**, **custom Shopify storefront**, **Shopify theme versus headless**, **WooCommerce headless storefront**, **ecommerce replatforming service**.
- `/blog/meta-conversions-api-setup-cost`: **Meta CAPI implementation cost**, **Conversions API deduplication**, **browser and server event matching**, **Purchase event refunds**, **Meta CAPI for a custom Next.js store**.
- `/services/ai-seo`: **answer engine optimisation service**, **AI search visibility monitoring**, **AI-referred lead tracking**, **AI SEO monthly retainer**, **technical implementation included or recommended**.
- `/blog/why-competitor-outranks-you`: **why does a competitor rank above me**, **SEO content gap analysis**, **competitor has fewer backlinks but ranks higher**, **wrong page ranking for a keyword**.
- `/blog/how-to-speed-up-your-website`: **why is my website slow on mobile**, **how to find what is slowing a website**, **Lighthouse score versus Core Web Vitals**, **third-party scripts slowing a website**.

## Pages not to create yet

- A separate `GEO agency`, `AEO agency` and `AI SEO agency` page. One commercial AI SEO destination can cover the related hiring vocabulary.
- A standalone lead-attribution service page until the entry engagement, supported platforms, implementation boundary and price are defined.
- Spelling variants for `Next.js`, `NextJS` and `next js`.
- A page for every platform plus every modifier. Platform cost, service, comparison and troubleshooting pages are enough when their tasks stay distinct.
- More `ai-info` pages for keywords. `/ai-info` is a reference system, not a second marketing site.
- UK, Canada or other English-country duplicates. Use one English page unless the offer, currency, legal terms or evidence truly differs by market.

## AI information and hub assessment

`/ai-info` is useful as a canonical company-reference surface because it states ownership, evidence limits, pricing, service scope and contact facts consistently. It should not be sold as a Google ranking mechanism. Google says that its AI features use ordinary Search eligibility and do not require special AI files or markup. The current `llms.txt` implementation correctly describes itself as a navigation aid, is generated from the taxonomy, and carries `X-Robots-Tag: noindex` so it does not become a low-value competing search result.

The topic hubs are structurally sound: each has authored introductory text, a commercial destination and deterministic article membership. Their purpose is to own **guides about a topic**, while service pages own **hiring a provider**. Preserve the words `guides`, `cost`, `comparison`, `checklist`, `why`, or `how` where those modifiers express the page's actual task.

## Evidence and sources

- [Google: optimising for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) — ordinary SEO still applies; avoid making separate pages for every query variation; unique, non-commodity content matters.
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) — no additional technical requirements or special schema are needed for AI Overviews or AI Mode.
- [Google: title-link guidance](https://developers.google.com/search/docs/appearance/title-link) — titles should be distinct, concise and avoid repeated boilerplate.
- [Google: canonicalisation](https://developers.google.com/search/docs/crawling-indexing/canonicalization) — similar pages may be clustered and Google may choose a different canonical; self-canonicals do not resolve different pages competing for the same task.
- Retained demand reconstruction: `docs/evidence-audit/KEYWORD_RECONSTRUCTION_VALIDATION_2026-09-14.md`.
- Retained query evidence: `docs/research/wordpress-migration-audit-2026-09-18/query-technical-links.md`.

## Release measurement

Treat this as one metadata and intent-separation release. Record deployment time and preserve the rendered titles. Check after recrawl:

- exact-query landing URLs for the priority families above;
- impressions, clicks, CTR and average position by page;
- whether `/partners`, its hub and its article settle into separate query groups;
- whether AI reference pages appear mainly for branded/company-fact queries;
- qualified enquiries and accepted work by landing page.

Do not judge success from total impressions alone. A rise in informational or unrelated impressions can hide no change in commercial discovery.
