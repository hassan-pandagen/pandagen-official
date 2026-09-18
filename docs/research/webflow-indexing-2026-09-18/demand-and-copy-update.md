# Webflow demand research and page revision

18 September 2026. Local implementation, not committed or deployed.

## Decision

The service page should welcome someone who knows their Webflow problem before they know their replacement framework. It now leads with performance, costs, CMS/search, forms and integrations, then explains the two existing paths: scoped improvements within Webflow or a Next.js rebuild when justified.

This is an expansion of the page's explanation, not the invention of a maintenance subscription, emergency support service or Webflow partner status. Before this revision, the page already offered a Webflow Optimization route to audit and scope feasible improvements. The revised pricing makes the distinction explicit: **custom rebuilds from $1,500; improvements within Webflow quoted to scope**.

## What the research supports

There is evidence of people seeking help and considering alternatives. It does not establish the total market or the volume of every phrase.

- The saved [DataForSEO capture](../../evidence-audit/keyword-evidence/capture-2026-09-14.json) records `webflow alternative` at **320 estimated US searches/month**. Capture date: September 14; language: English. The attached trend stops in February, and the estimate cannot be reconciled arithmetically to that stale trend. It is neither a fresh September demand count nor 320 agency buyers. The phrase belongs primarily to the existing alternatives/comparison articles.
- The reconstructed September 13 rows for specific Webflow-to-Next.js phrases returned no volume value. Missing values are not proof that nobody searches.
- Separate May–July 2026 user discussions describe actual renewal decisions and questions about alternatives. Their bills and experiences are self-reported; they are not averages or verified outcomes.
- Six reviewed suppliers demonstrate distinct commercial offers: Raze and Khod cover migration away; Digidop and Foursets migrate into Webflow; PageSpeed Matters sells improvements within Webflow; Workshore offers ongoing maintenance. The existence of an offer is not measured demand or evidence of its conversion rate.

See [the search-intent and competitor research](search-intent-research.md) for all six direct links, exact keyword evidence and page ownership. See [the user-problem research](user-problems-research.md) for eight issue clusters, discussion dates and current official documentation.

## Problems and candidate queries

These are intent candidates, not newly measured volume or difficulty figures. The commercial page explains what PandaCodeGen can assess; supporting guides can answer detailed DIY questions.

| Buyer issue | Candidate phrases | Page treatment |
| --- | --- | --- |
| Slow mobile experience | Webflow speed optimization; Webflow slow on mobile; improve Webflow Core Web Vitals | Review media, scripts, interactions and native publishing settings first. |
| Running costs | Webflow bandwidth cost; Webflow pricing increase; Webflow too expensive | Compare the actual bill and renewal terms with the full ongoing cost of any replacement; link the cost guide. |
| Content/search constraints | Webflow CMS limits; Webflow CMS filters; Webflow site search limitations | Distinguish CMS capacity, relationships, listing behavior and search; assess native options and integrations. |
| Enquiries fail to reach operations | Webflow forms not working; Webflow form not sending email; Webflow CRM integration | Trace the submission through notifications, spam controls and CRM; scope a repair and a complete journey test. |
| Account/application requirements | Webflow membership alternatives; Webflow custom backend; Webflow customer portal | Compare membership apps and custom software; a marketing site may remain on Webflow. |
| Moving away | Webflow migration services; migrate from Webflow; export Webflow CMS; Webflow to Next.js migration | Explain the direction, editor, content, URLs, missing export behavior, implementation scope and price. |

Do not target generic `Webflow development agency` as if PandaCodeGen were selling every kind of native Webflow design engagement. Do not turn `Webflow maintenance` into a commercial target without a defined recurring offer. Keep `Webflow alternative` comparisons in the existing guides rather than duplicating them across new landing pages.

## Current capabilities that change the argument

- Webflow supports [per-page JavaScript and optional asynchronous loading](https://help.webflow.com/hc/en-us/articles/38265301927059-Understanding-per-page-JavaScript-and-asynchronously-loading-JavaScript). A low mobile score does not establish that migration is required.
- [Plan changes](https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026) expanded CMS allowances and affect accounts on different renewal schedules. They do not increase every customer's total bill.
- [Native search](https://help.webflow.com/hc/en-us/articles/33961242348179-Site-search) and CMS Collection-list pagination are different features. The service copy avoids obsolete universal CMS-cap numbers.
- [User Accounts retirement](https://help.webflow.com/hc/en-us/articles/36046006227731-User-Accounts-sunset) is a completed change; third-party memberships remain an option. The page does not present a future deadline or promise to recover already-lost user data.
- [Code export](https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code) does not produce all the hosted CMS, forms and search behavior. The migration offer explains the reconstruction work.

## Implemented message and flow

**Title:** Webflow Optimization & Migration Services

**H1:** Get more from your Webflow website.

**Opening:** Slow mobile pages, rising bills, CMS limits or forms that miss your CRM? We assess the cause, scope improvements within Webflow, and rebuild in Next.js when your needs justify a move.

**Price line:** Custom rebuilds from $1,500. Webflow improvements quoted to scope.

**CTA:** Ask about your Webflow site. Opens the existing enquiry form; a founder replies and paid work is scoped first.

The next sections now show six recognizable problems with official references, two work options, the migration process and client inputs, deliverables, cost drivers, rebuild tiers, nine FAQs and a founder contact close. There is a contextual link to work without claiming those projects originated on Webflow. The publication policy remains linked.

Removed: four cards repeating one Reddit discussion; the long opening evidence-method block; the separate outage essay; the vendor price table and AI Overview anecdote; repeated comparison and option panels. Important scope, performance and ownership qualifications remain alongside the relevant offer. Rendered text including navigation/footer fell from **4,152 to 3,100 words**, using the same extraction method. This is a readability change, not a ranking signal claim.

Header link, related-service cards, Webflow hub description and OG content now reflect the broader assessment route. Existing URL and canonical are unchanged. No new pages were created.

## Pricing correction found during research

The vendor facts and some related wording implied that Team always sits on top of separate site charges. The current [pricing page](https://webflow.com/pricing) and official plan FAQ state that Team includes a site and Workspace. The price remains $2,500/month on an annual contract; additional sites and extras require a Webflow quote.

Corrected `spec-facts.json`, the three related Webflow cost/comparison articles and the corresponding shared FAQ. Their modified dates agree across metadata/schema/blog data; unrelated August price snapshots retain their original verification dates.

## Verification and limitations

- `npm.cmd run check` passed: TypeScript, ESLint, existing tests, public claims and date consistency.
- Isolated Next production build passed with `PANDACODEGEN_AUDIT_BUILD=1`; no ordinary `.next` build was replaced.
- All six guards returned success against the isolated build/source; the Unicode guard retains its existing advisory findings rather than claiming a completely empty report.
- Structural SEO crawl checked 146 sitemap URLs: zero failures, zero warnings.
- Browser checks at 390px and 1440px: correct title/canonical, one H1, nine visible FAQ answers matching schema, working enquiry modal, no horizontal overflow or page JavaScript errors. Screenshots were reviewed.
- Pagefind built an isolated search index successfully for 99 pages. Public search assets were not overwritten; a normal release build will regenerate them.
- A separate read-only review found no blocking claim or offer mismatch in the revised service copy. `git diff --check` passed.

Artifacts are in ignored `audit/webflow-indexing-2026-09-18/`. The previous indexing audit remains a dated record of the first pass. This revision does not establish why Google delayed crawling or guarantee indexing. A fresh GSC URL Inspection result is still needed for that diagnosis. No commit, push, indexing request or external outreach was performed in this task.
