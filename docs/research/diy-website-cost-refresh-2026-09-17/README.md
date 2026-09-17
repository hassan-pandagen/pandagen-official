# DIY website cost article: research and implemented refresh

Reviewed and changed locally on 17 September 2026. User requested a substantive fix to the existing article, including competitor research, search intent and long-tail coverage. This explicitly authorizes the article changes; no production deployment or indexing request was made.

Article: `/blog/is-it-cheaper-to-build-your-own-website`.

## Decision

Keep the URL and its DIY-versus-hiring intent. The new title and H1 are **Is It Cheaper to Build Your Own Website? DIY vs Hiring**. The old "Yes, Until It Has a Job" framing dismissed viable commercial uses of builders and did not answer cost clearly.

Seven competitor articles and official provider documentation were read. Competing articles already cover subscriptions and owner time, so those topics alone are not an original finding. The improvement is an explicit same-scope example, separate cash and time totals, a scenario in which DIY wins, named billing conditions, and targeted professional help as a third route.

## Implemented in source

- Replaced the cost essay with a direct answer, three choices, dated provider subscription examples, one- and three-year arithmetic, recurring-cost checklist, DIY/hiring decision criteria and quote questions.
- Added server-rendered contents navigation, with section labels shared between headings and links. No hydration is required to access the contents.
- Clarified the difference between buying a platform, hiring somebody to configure it, and commissioning a custom website.
- Removed unrelated AI-readability sample and AI-referral revenue figures from this article and its blog card/FAQs. Neither establishes DIY-versus-hired total cost or an AI-builder failure rate. This is removal from an irrelevant comparison, not a re-audit or withdrawal of the originating evidence.
- Corrected the blanket claims that a business with customers must hire, that all additional costs start after launch, and that no builder checks ongoing operation.
- Removed the fixed five-to-seven-page/$1,500/two-to-four-week promise. The offer and hosting paragraphs now read their values from `COMMERCIAL` in `src/data/company-facts.ts`; the FAQ also derives Starter wording there.
- Rewrote seven FAQs for the cost decision, synchronized title/description/OG/Twitter/card/Article/WebPage/FAQ content, preserved publication date, and set the substantial revision date to September 17 across source and sitemap input.
- Removed this article's redundant `speakable` declaration and metadata keyword list. Neither was necessary to answer the question or provide a Google keyword-ranking mechanism. Accurate Article, WebPage, Breadcrumb and visible FAQ data remain.
- Removed the duplicate FAQ heading; retained the previous `#faq` destination as an anchor.
- Replaced the service-link CTA with **Ask a founder about your site**, linking to the contact page. Includes buyers without an existing URL. No free audit, quote, response deadline or maintenance scope invented.
- Retained existing hub and related-article navigation. Existing crawlable incoming links already include the blog index, topic hub and sampled siblings. No new keyword-variant URL or sitewide exact-match link was created.

Source files changed by this task:

- `src/app/blog/is-it-cheaper-to-build-your-own-website/page.tsx`
- The existing article entry in `src/data/blog.ts`, plus its canon import.

Existing unrelated workspace edits and research directories were left in place.

## Research and evidence

- [Search intent, seven competitor pages and fourteen query families](search-intent-competitors.md)
- [Provider prices, capability checks and commercial canon](costs-and-claims.md)
- [Indexability audit and post-deployment steps](indexability.md)
- [Public HTML/HTTP discovery capture](public-indexability-capture.json)

The exact primary query has no preserved volume row in the inspected evidence. Related September 13 DataForSEO figures are historical US estimates, often reconstructed from previous responses. New long-tail suggestions are intent hypotheses, not newly measured demand. No keyword research API was available in the callable tool inventory in this turn. Public searches and competitor pages supplied current qualitative intent evidence, not current search volumes or Google rank positions.

## Assertion ledger

| Claim | Type and source | Scope/limit | Review or withdrawal trigger |
| --- | --- | --- | --- |
| WordPress.com Personal $4/month on annual billing; $48/year | Provider fact + multiplication; [USD pricing](https://wordpress.com/pricing/?currency=USD), [plan support](https://wordpress.com/support/plan-features/personal-plan/) | USD reference, plan only, annual term; eligible domain first year; checkout/tax/renewal can differ | Recheck by October 17, 2026 or on plan change; remove exact rate if not corroborated |
| Wix Light $17/month on annual billing; $204/year | Provider fact + multiplication; [official cost article](https://www.wix.com/blog/how-much-is-a-wix-website), [plan caveats](https://www.wix.com/plans) | Published USD reference; hosting/eligible first-year domain; no native online payments; not a complete website quote | Recheck by October 17 or on plan change; no regional checkout verified |
| Shopify has subscription, payment-related and optional fees | Provider fact; [pricing](https://www.shopify.com/pricing) | Exact US price omitted because the fetched page and other official reference differed by unresolved region | Recheck by October 17; never infer country from USD currency alone |
| Lovable offers recurring project monitoring | Provider fact; [documentation](https://docs.lovable.dev/features/project-monitoring) | Eligible plans; settings, credits, coverage and run conditions matter; not end-to-end assurance | Recheck by December 16 or on change |
| Starter and hosting terms | Approved first-party commercial facts; `src/data/company-facts.ts`, `COMMERCIAL` | Published starting scope; accepted quote controls actual price/hosting; general support is not the AI SEO $500 retainer | Imported canon changes with source; recheck on commercial change |
| DIY can be appropriate for a business; hire when a specified requirement or time constraint justifies it | Editorial recommendation | Not a universal outcome or ranking/ROI promise | Revise when reader evidence establishes a material omission |
| Cost example | Explicit hypothetical arithmetic | Same brochure site/platform/features; all inputs assumed, no real client or provider quote, no lost-revenue estimate | Change only with corresponding arithmetic and assumptions |
| No obvious sampled crawl blocker | Observed public HTTP/HTML evidence, user GSC screenshot and [Google report definitions](https://support.google.com/webmasters/answer/7440203?hl=en) | Not authenticated GSC access, historical Googlebot logs, selected canonical or indexing proof | Recheck after deployment; examine logs/URL Inspection if still unvisited |

Review owner: PandaCodeGen editorial owner. Research and implementation review performed by the coding agent, with separate source/intent and implementation review passes. No native builder workflow or purchase was tested. Source findings are paraphrased in the linked dated reports; full third-party articles are not copied into this repository.

## Arithmetic and limitations

Assume USD platform 20/month, tools 10/month and domain 20/year in both options; setup fee 0 versus 1,500; owner setup hours 40 versus 8; ongoing owner time 1 hour/month in both; time value 25/hour. Same-scope professional builder setup is being compared, not PandaCodeGen's custom-build offer.

- One-year cash: `(20 + 10) × 12 + 20 = 380`; hired `380 + 1,500 = 1,880`.
- One-year time: `(40 + 12) × 25 = 1,300`; hired `(8 + 12) × 25 = 500`.
- One-year combined: 1,680 and 2,380.
- Three-year cash: `(20 + 10) × 36 + 20 × 3 = 1,140`; hired 2,640.
- Three-year time: `(40 + 36) × 25 = 1,900`; hired `(8 + 36) × 25 = 1,100`.
- Three-year combined: 3,040 and 3,740.
- Cost per setup hour saved: `1,500 / (40 - 8) = 46.875`, shown rounded to 46.88.

Prices and workload are held constant for illustration. Tax, transaction fees, purchased content, paid maintenance, later redesigns and future price changes are excluded explicitly. The example does not compare outcomes, accessibility, conversion rates or quality; these need their own requirements and evidence. Time value is a planning input, not a claim of forgone earnings. At the stated inputs DIY remains cheaper; the calculation is not engineered to sell custom work.

## Publication boundary

Local edits do not change the live page or establish a new Search Console status. After deployment: verify the exact URL's public title, canonical, updated answer and dates, then inspect in GSC and request indexing once if eligible. Do not change the URL or repeatedly submit unchanged pages to address the supplied screenshot.

The separate AI-built launch-checklist article remains unpublished. This refresh deliberately does not link to an unavailable route. When that article is implemented and verified, add a contextual link from the short AI testing paragraph; keep the detailed launch checklist there and the cost decision here.

## Validation

`npm.cmd run check` passed: TypeScript, ESLint, 63 existing tests, public claims and date consistency. `npm.cmd run build` and all six existing guards passed. A second production build followed the final breadcrumb correction. The redundant article-level breadcrumb schema was removed because the shared visible breadcrumb component already generates the correct four-step schema.

[Built HTML verification](built-verification.json) passed 15 focused checks: one H1; original self-canonical; indexable directive; aligned descriptions; nine server-rendered contents links with valid anchors; unique IDs; one FAQ heading; all seven schema questions/answers visible; one correct breadcrumb trail; matching modification dates; retained publication date; removed stale text; correct contact destination; and expected cost totals. Every internal link target found in that HTML has a generated static page. The article contains approximately 2,382 words including its FAQ and related navigation.

**Visual limitation, now closed.** At the time of writing no browser was available, so desktop/mobile screenshots, visual table layout and a real keyboard walkthrough were not completed. Playwright was available later the same day and that pass has been run: see [browser QA](browser-qa.md). It confirmed the layout, heading order, anchors, focus order and keyboard operation, and found one defect that only a browser could surface. Clicking a contents link on desktop did not move the reader to the section, on this article and on three other published pages, because Lenis resolved the anchor against its own unsynced scroll value. Fixed in `src/components/layout/SmoothScroll.tsx` and reverified. Chromium only; no other browser and no real assistive technology was used. A temporary local production server was stopped after this check; no external form submission, payment or message was made.
