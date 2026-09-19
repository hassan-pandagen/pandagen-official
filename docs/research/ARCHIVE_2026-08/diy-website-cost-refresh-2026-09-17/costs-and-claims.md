# DIY website costs and claim checks

Checked 17 September 2026 for the rewrite of `/blog/is-it-cheaper-to-build-your-own-website`. Sources below are official providers or the repository's company canon. No application source files changed by this research task.

## Two suitable named price examples

Use these as dated **USD reference subscription examples**, not as universal checkout quotes or complete website budgets. Neither was purchased; country-specific checkout totals were not verified. Annual arithmetic is calculated from each published equivalent monthly rate.

| Product | Published annual-billing example | First-year base subscription arithmetic | What the example can illustrate |
| --- | --- | --- | --- |
| WordPress.com Personal | $4/month, billed annually | $4 × 12 = $48 | A hosted site subscription can be inexpensive before owner time, optional services and other purchases. |
| Wix Light | $17/month with annual billing | $17 × 12 = $204 | A non-commerce hosted business website has a named recurring platform cost; this is not a custom design/implementation quote. |

**WordPress.com evidence:** [pricing requested in USD](https://wordpress.com/pricing/?currency=USD) explicitly states the $4 annual-equivalent rate in its FAQ and displays Personal at that rate. The unparameterized pricing response mixed Polish-currency headings with dollar comparison rows, so use the USD URL. The [Personal plan support page](https://wordpress.com/support/plan-features/personal-plan/), last reviewed 11 August 2026, confirms hosting, 6 GB storage, SSL, removal of WordPress.com ads and an eligible annual-plan domain for its first year. Domain renewal is separate afterward. It now supports plugin installation and custom code: do not repeat the historical claim that these require Business. Third-party plugin licences, connected services and labour are not established as included by this price.

**Wix evidence:** its [official cost explanation](https://www.wix.com/blog/how-much-is-a-wix-website) lists Light at $17/month, 2 GB storage, hosting, two collaborators and a first-year domain. Its billing FAQ explains annual subscriptions are paid in full. Light does not include native online payment acceptance; Core is the first plan for that and is listed at $29/month, equivalent to $348 for twelve months. Core also adds basic ecommerce and scheduling. The same article identifies premium apps, integrations, domain renewals and payment processing as possible additional expenses. These are feature and billing examples, not proof that every buyer needs every addition.

The [Wix plan page](https://www.wix.com/plans) explicitly warns that price/currency vary by location, its displayed USD rates are references, annual subscriptions are prepaid and checkout determines tax and the final price. Its extracted text in this pass also combined stray `.77` and GST strings with the plan cards. Do not infer a $17.77 US rate or a tax-inclusive US quote from that extraction. Cite the coherent official cost article for the $17 reference and tell readers to check their billing country and checkout total.

If a third example is necessary, Wix Core is source-supported, but two distinct providers plus an ecommerce scope checklist is cleaner than implying their entry plans are interchangeable.

## Shopify: exact US price deliberately omitted

The [Shopify pricing page](https://www.shopify.com/pricing) served Basic at $19 USD/month annually and $25 USD/month monthly in this research session. Meanwhile the [official explanation of Shopify](https://www.shopify.com/blog/what-is-shopify) states Basic costs $29/month billed annually. An official search snippet agrees with the latter, but the fetched rate card does not establish the United States market. USD is a currency, not proof of US regional pricing.

The sources conflict for this research context. Do not silently pick the more familiar $29 or publish $19 as the US rate. Omit the exact price until a clearly US-specific rate card or checkout is available. No secondary comparison site was used to resolve the conflict.

For an ecommerce example, ask readers to compare the total for their actual requirements: catalogue and variants, payment methods and processing, tax/shipping, subscriptions if needed, staff access, receipts and refunds, inventory/fulfilment integrations, domain, email, and any paid apps. A brochure-site subscription is not a like-for-like commerce implementation budget.

## Cost comparison framing

Keep cash costs and the value assigned to owner time separate:

- Cash: platform or hosting, domain renewals, chosen paid services, payment fees where relevant, professional help and applicable tax.
- Owner time: planning, content, setup, testing, learning, edits and support administration.
- Bought implementation: what a written quote actually includes and excludes, followed by its own recurring costs.

A calculation can be illustrative if its assumptions are labelled. Do not invent a typical number of owner hours, average lost sales, required monthly support or a guaranteed break-even point. A buyer may reasonably choose DIY when the requirements fit the product and they can handle the work. Having real customers does not by itself make DIY inappropriate.

## Lovable monitoring claim

[Lovable project monitoring documentation](https://docs.lovable.dev/features/project-monitoring), checked 17 September 2026, describes a beta available on Pro, Business and Enterprise. Enabled per project, it examines code and recent visitor errors, supports daily or weekly schedules, and emails the owner about important findings. Defaults include an edit-based run condition; configurable conditions can differ. Completed runs consume credits and checks can be skipped for insufficient credits or unmet edit thresholds. It documents both missed issues and false positives and says monitoring does not replace testing.

Safe article wording: **Some AI builders already provide recurring checks. Lovable, for example, documents scheduled project monitoring on eligible plans. Check what is enabled, what it inspects, who receives findings and whether credits or run conditions can stop a check.**

Remove claims that all builders stop checking after generation, that nothing reruns, or that all recurring checking must be manual. Do not claim a particular user's inbox, payment or fulfilment workflow was verified merely because a monitoring feature exists.

## PandaCodeGen commercial canon checked locally

Authoritative local source: `src/data/company-facts.ts`, `COMMERCIAL`, read on 17 September 2026.

| Claim | Current canon and article use |
| --- | --- |
| Entry build | Starter from $1,500, up to seven pages, editor for words/images/business details, setup, documentation and training. Scope and final price agreed before work. |
| Small stores | A simple catalogue can start at Starter. Do not state every store begins at $5,000. |
| Larger builds | Growth from $3,500; Scale from $5,000. Do not copy the full tier matrix into a general DIY article unless it helps the buying decision. |
| Monthly services | Optional and separate. AI SEO starts at $500/month; support is quoted against site and connected systems. $500 is not a general maintenance or unlimited monitoring price. |
| Hosting | Not a standard inclusion. Arrangement and charges are agreed per client and recorded in the quote. Do not say all custom builds have free hosting or no recurring infrastructure fees. |
| Ownership | Code, design files, CMS models, documentation and production accounts transferred to or created under client control. |
| Timing | Tier-specific ranges and written project dates. Do not promise every project takes two to four weeks. |
| Performance | Scoped 90+ Lighthouse lab handover target across representative pages and three recorded runs. It is not a whole-site field-performance, ranking or revenue guarantee. |
| Subscription independence | No PandaCodeGen build requires a support subscription. That does not erase hosting, domain or connected-service bills. |

Suggested comparison sentence: **Our custom builds start at $1,500, with the scope and price agreed before work begins. Hosting arrangements and any optional ongoing support are set out separately. That buys implementation and handover; a DIY subscription buys access to a platform, so compare the work included as well as the amount paid.**

No provider price is evidence that hiring PandaCodeGen is cheaper overall. The defensible conclusion is that DIY can minimise initial cash spending, while the better choice depends on requirements, available time, the implementation quote and the cost of operating either option.
