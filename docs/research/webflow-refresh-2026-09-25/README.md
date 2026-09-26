# Webflow pages: research and revision, 25 September 2026

## Scope and baseline

Revised `/services/webflow` and `/blog/webflow-true-cost`. No deployment performed in this task. Indexing is Google's decision; these revisions do not establish why Google excluded either page or guarantee inclusion.

Direct Search Console URL Inspection returned:

- Service: discovered, currently not indexed; no crawl time reported.
- Cost article: crawled, currently not indexed; last crawl 6 August 2026, successful fetch, crawling and indexing allowed, user and Google canonicals both the intended www URL.

Public browser checks returned HTTP 200 and correct canonicals/index directives for both pages. The public pages still contain the pre-revision copy. Historical impressions do not override today's inspection status.

## Observed demand, not keyword volume estimates

Search Console final web data, 25 June–23 September 2026, queried with both query and page dimensions. Selected cost-article rows:

| Query | Impressions | Average position |
| --- | ---: | ---: |
| webflow cost | 34 | 27.94 |
| webflow price | 19 | 30.63 |
| webflow price increase | 15 | 45.47 |
| webflow pricing 2026 | 13 | 21.38 |
| webflow hosting cost | 11 | 39.82 |
| webflow monthly cost | 9 | 31.78 |
| how much does webflow cost | 7 | 32.00 |

These rows had zero clicks. No service-page row was returned in this query. That is not evidence that nobody searches for the service. Some cost queries also surface the migration-cost guide; overlap alone is not proof of harmful cannibalization.

## Distinct page purposes

| Page | Buyer question |
| --- | --- |
| Service | Who can investigate, optimize or migrate my Webflow implementation, and what will they check? |
| True cost | What will I pay monthly and annually, and what belongs in my budget? |
| Migration cost | What does a one-time move involve and cost? |
| Webflow vs custom website | Which operating model fits my requirements? |
| Webflow topic hub | Which guide answers my current question? |

Contextual links connect these decisions without making each page repeat every adjacent query. Existing topic and related-post components remain in place.

## Competitor review

- [Flowroles pricing guide](https://www.flowroles.com/blog/how-much-does-webflow-website-cost): direct pricing answers and site-type budgets. Our article previously delayed the answer with complaints; it now answers first and supplies a reproducible budget with explicit assumptions.
- [Raze Growth migration service](https://razegrowth.com/services/webflow-to-nextjs-migration): concrete CMS, SEO and forms migration scope. Our service now explains the inventory and launch checks rather than relying on generic benefits.
- [PageSpeed Matters Webflow optimization](https://www.pagespeedmatters.com/services/webflow-speed-optimization): investigation within the existing platform is a distinct buying route. Our page keeps that route and explains when a scoped fix can be appropriate.

These are observations about published positioning, not proof of competitors' delivery quality, traffic or rankings.

## Corrections and useful additions

The cost article now leads with monthly versus yearly billing, distinguishes Site plans from Workspaces, explains renewal applicability, and uses shared verified vendor facts. It removes the premise that all extra costs are absent from invoices, unnecessary paid-Workspace assumptions and unsupported thresholds for abandoning Webflow. Billing FAQs replace unrelated migration FAQs.

The original worked budget separates supplier cash from internal time. Only the base subscription is a vendor price; other inputs are explicitly illustrative. A public blank CSV helps readers construct their own budget. It is not an interactive calculator or a client receipt.

The service now names optimization and migration in its H1, provides review deliverables, distinguishes public automated checks from scoped private-system investigation, and lists migration acceptance checks. Existing WordPress-origin work is labelled as such; no Webflow case study or outcome is invented. Unsupported ease and savings assertions were removed.

Dates reflect this substantive revision. The article's original publication date remains unchanged. Shared FAQs feed visible answers and structured data.

## Primary source checks

- [Webflow pricing](https://webflow.com/pricing): base Site and Workspace prices and bundled Team route.
- [May 2026 plan transition](https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026): monthly billing and account-specific transition timing.
- [Workspace invoices](https://help.webflow.com/hc/en-us/articles/33961279888019-Workspace-billing-and-invoices): where owners/admins review charges.
- [Billing overview](https://help.webflow.com/hc/en-us/articles/33961371683987-Webflow-billing).
- [Form submissions](https://help.webflow.com/hc/en-us/articles/33961344521235-Form-submissions): avoid invented paid submission overages.
- [Code export](https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code): a ZIP is not a functioning CMS/forms/search replacement.
- [Ecommerce overview](https://help.webflow.com/hc/en-us/articles/33961345384339-Webflow-Ecommerce-overview): separate store setup and payment-provider requirements; exact charges depend on plan/terms.

## Validation and deployment boundary

`npm run check` passed: types, lint, audit/form tests, claims and date checks. An isolated production build passed. All six built-output guards passed; unicode guard retained existing advisory findings, with no invisible characters. Mobile and desktop browser results and raw GSC responses are stored locally under ignored `audit/webflow-refresh-2026-09-25/`. Raw analytics are not committed.

After deployment, verify the live copy, canonical, sitemap modification dates, enquiry buttons and CSV download. Run URL Inspection's live test and request indexing once for each revised URL. Repeated requests do not accelerate crawling. See [Google's recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl). Compare later outcomes observationally; do not attribute changes to an individual edit in this bundle.

Final browser verification: both pages returned 200 at 390px and 1440px, with one server-rendered H1, no horizontal overflow, no broken section anchors and no browser errors. Both primary enquiry modals opened. Worksheet download returned 200. Both sitemap entries show 25 September 2026. Hero and content screenshots were visually inspected.
