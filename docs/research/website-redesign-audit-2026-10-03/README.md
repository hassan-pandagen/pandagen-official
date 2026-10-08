# Website redesign: before and after audit

3 October 2026. **Before** means the publicly crawled pages at `www.pandacodegen.com`; **after** means the redesign running locally at `127.0.0.1:3001`. The public page snapshots available for comparison were crawled one to three weeks before this audit. They establish the earlier copy and page structure, but are not a same-day visual capture. Local screenshots are in [screenshots](./screenshots/). Search Console data is for the public domain, not an experiment measuring the redesign.

## Decision

**Carry the redesign forward.** It makes the offer easier to understand, shows the work sooner, and gives different visitors a clearer route to a relevant service or conversation. Carry forward the earlier site's concrete written-scope, ownership, acceptance, and client-evidence details. Do not restore its migration-only framing, dense first-screen explanations, or the withdrawn `200+ URLs` claim. Do not call the redesign an SEO or conversion winner until it has been deployed and measured on equivalent traffic.

## Review of the supplied Claude audit

The user supplied screenshots of a second audit on 3 October. Its method states that it compared live pages with a local production build at matched desktop and iPhone sizes, fetched 153 impression-bearing URLs, analyzed 3,942 page/query pairs for **3 July–30 September**, and ran Lighthouse 12.8 on mobile. Those measurements are **attributed to that audit**; the underlying exports, request logs, and Lighthouse reports were not supplied here, so this report cannot independently certify its `0 broken URLs`, `~2× page weight`, `~70% less service text`, or numeric speed conclusions. Its 163,274 impressions cover a different starting date from the complete July–September monthly totals below, so the figures should not be treated as conflicting totals.

Its mobile screenshots establish an important omission in my first review: the redesign header hid the direct contact action below 640px. The code confirmed this with `hidden ... sm:inline-flex`. I restored a compact “Talk” button in the mobile header that opens the existing founder inquiry dialog. The screenshots also showed blog topics behind a closed “Browse topics” control; the code confirmed that, and the blog now displays search and topic links in its opening section. TypeScript and lint checks pass for these changes. A subsequent headless Edge check with explicit device metrics found no horizontal overflow on [Home at 320px](./screenshots/--320-now.png), [Services at 390px](./screenshots/-services-390-now.png), [WordPress migration at 390px](./screenshots/-services-wordpress-migration-390-now.png), or [Blog at 390px](./screenshots/-blog-390-now.png). These captures check layout, not whether the contact dialog submits successfully.

The second audit also makes a persuasive **content and journey** case: the new work walkthroughs, page hierarchy and project imagery are stronger; the old pages more clearly explained commercial terms, platform tradeoffs, and what a visitor gets from an inquiry. Restore selected, verified details where they answer buyer questions. Do not equate more words with better SEO, reinstate unsupported project numbers, or assume Search Console impressions measure conversions. The old Panda Patches revenue/tooling headline needs a current source and approved time period before reuse.

The performance concern deserves a matched production retest before release. Next.js 16 can prefetch visible links in production, and the navigation/footer contain many links, but the claimed contribution of those requests to the measured weight has not been isolated here. Capture the two Lighthouse reports and a production network trace; then tune prefetch and hero image loading against the actual largest-contentful-paint element. The installed project does not currently include Lighthouse or a browser automation package.

**Release priority:** keep the new design and structural SEO fixes; investigate the reported weight regression. Next, add concise evidence and terms to service, pricing, and About pages, and make page-specific CTAs explicit. The mobile header now provides a contact route and the blog exposes search/topics; check those interactions in a full browser pass and watch article discovery and mobile scroll length.

## Search Console and search baseline

The connected read-only Search Console account has site-owner access to `sc-domain:pandacodegen.com`. The existing sitemap is `https://www.pandacodegen.com/sitemap.xml`; Search Console reports no sitemap processing warnings or errors. URL inspection returned **submitted and indexed** for `/`, `/work`, `/services/wordpress-migration`, and `/blog/divi-theme-slow`, with self canonicals. The sitemap API's `indexed: 0` field conflicts with those inspections and must not be reported as zero indexed pages. This connection can read performance and inspection data; it cannot submit a sitemap or request indexing. A different “new GSC” property has not been identified in the account.

| Month, 2026 | Clicks | Impressions | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| July | 89 | 57,563 | 0.155% | 10.02 |
| August | 109 | 72,553 | 0.150% | 11.55 |
| September | 60 | 33,869 | 0.177% | 10.76 |

September had **45% fewer clicks and 53% fewer impressions** than August, while CTR rose slightly. This does not establish a redesign effect or its cause. Search Console page data for July–September shows the blog supplying 206 clicks, the home page 39, and the seven visible service-detail pages together 6. Leading blog entrances include `/blog/divi-theme-slow` (40 clicks), `/blog/gohighlevel-website-speed` (37), `/blog/nextjs-hosting-zero-cost` (25), and `/blog/woocommerce-too-slow` (19). Preserve those URLs, their topical relevance, and the route from each article to an appropriate service, project example, and contact action. The hosting article generated exceptionally many impressions relative to clicks; review its query intent and search snippet before rewriting it. Page totals and query rows can differ because Search Console withholds some data.

## Visitor and page comparison

| Area | Earlier public site | Local redesign | Judgment |
| --- | --- | --- | --- |
| Home first screen | A useful business-focused promise and a direct contact form; the mobile header also kept “Talk to us” visible. | The same strong business promise is larger, with founder and work actions in the hero. An AI assistant occupies substantial desktop space. The mobile header contact action was missing in the first review and has now been restored in code. | **New is clearer visually; old offered a faster contact path.** Keep the earlier plain-English promise and founder accountability. Check whether a compact first-screen contact option improves the journey. [New desktop](./screenshots/tmp-audit-home.png), [mobile](./screenshots/tmp-audit-home-mobile.png). |
| Services | “Capabilities & Architecture” and three broad engineering categories lean toward migrations; individual service pages carry more buyer detail. | Starts with the visitor's job and groups builds, improvements, stores, software, and migrations more clearly. Individual pages are shorter but retain some scope details in FAQs and later sections. | **New wins for discovery; depth needs a page-by-page review.** Keep separate detailed URLs for relevant searches, and restore useful owner quotes, tradeoffs and cost explanations where verifiable. [New desktop](./screenshots/tmp-audit-services.png), [mobile](./screenshots/tmp-audit-services-mobile.png). |
| Work | Opens with evidence methodology and limits, which builds trust but delays seeing the projects. | Shows client work, founder-affiliated work, and portfolio concepts in distinct reels. | **New wins for browsing.** Keep relationship labels, real project records, verification links, and limitations close to every claim. [New desktop](./screenshots/tmp-audit-work.png), [mobile](./screenshots/tmp-audit-work-mobile.png). |
| About | Strong delivery standards and ownership explanation. | Founder portrait and a more personal opening. | **Combine them:** new introduction, old specificity about who does the work and what is written down. [New desktop](./screenshots/tmp-audit-about.png). |
| Pricing | Detailed migration packages, payment, support, acceptance, ownership and change terms; heavy on first read. | Clearer starting price and project-shape choices. | **New hierarchy wins.** Keep the earlier contractual detail lower on the page, always qualifying example prices and optional support. [New desktop](./screenshots/tmp-audit-pricing.png). |
| Contact | Asks for migration plans and platform details, narrowing the funnel. | Founder-led invitation and a simpler inquiry form. | **New wins for broader demand.** Retain a direct email path and a clear statement of what happens after submission. [New desktop](./screenshots/tmp-audit-contact.png). |
| Copy and proof | Specific terms and method, but long passages, migration jargon, and some claims that required correction. | More direct copy, stronger headings, and better project visuals. | **Use new copy as the main voice.** Preserve verifiable detail and source attribution; reject withdrawn numbers and generic performance claims. |

The local mobile screenshots show the primary home and services actions within the first viewport. The services page leaves a sizable blank area below its hero before the next section enters view; reduce that space if a device review confirms it across common heights. Desktop case studies should keep the image aligned with the opening copy, as requested in the design review. This audit did not run a timed task study, accessibility assistive-technology review, analytics funnel, or matched live-site screenshot test.

## SEO and content work completed in this audit

The structural release crawl tested **151 sitemap URLs** on the local redesign. It checks rendered HTML, canonicals, titles, descriptions, landmarks, internal links, robots and sitemap consistency. It initially found three failures and two warnings. Fixes made here:

1. Gave the French and German services pages descriptions distinct from their respective home pages.
2. Added a `<main>` landmark to the blog index.
3. Added a visible, expandable project directory below each work reel, so every project record has a server-rendered internal link and visitors can navigate directly without stepping through the carousel.

The crawl now reports **0 failures and 0 warnings**. TypeScript type checking passes. This is a structural result; it does not establish rankings, Core Web Vitals, accessibility compliance, or lead conversion.

## What to measure after release

1. Confirm the production deployment serves all 151 intended sitemap URLs, stable canonicals, reciprocal language links, and redirects for any genuinely retired URLs. Do not submit or overwrite the existing sitemap until the new build is actually live.
2. In Search Console, compare matched 28-day windows by **page and query**, separating blog, home, services and work. Watch impressions and index status for the four leading blog pages and the service pages before judging the rewrite. Search Console reporting lags and is affected by demand and ranking changes outside this release.
3. Measure the customer path from blog/service/work entry to pricing, founder contact, form submission and booked conversation. Treat clicks as behavior data, not proof that a message persuaded the visitor. Check mobile as its own funnel.
4. Run a production visual and accessibility review at desktop and mobile widths: hero clipping, service image alignment, reel controls, focus order, text contrast, form errors, and perceived wait time. Capture baseline and after metrics under the same conditions.

Public content references used in this comparison: [home](https://www.pandacodegen.com/), [services](https://www.pandacodegen.com/services), [work](https://www.pandacodegen.com/work), [about](https://www.pandacodegen.com/about), [pricing](https://www.pandacodegen.com/pricing), [contact](https://www.pandacodegen.com/contact). Search figures and index inspections came from the connected Search Console property on 3 October 2026.
