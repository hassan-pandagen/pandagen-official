# Free-tool acquisition strategy for PandaCodeGen

Research date: 19 September 2026. Scope: repository inspection and public primary-source research. This is a proposal, not a deployed implementation or evidence of traffic growth. No live audit submission, email delivery test, keyword-volume export, or competitor conversion analytics was performed.

## Decision

Improve `/free-audit` before building another generic scanner. It already has an ungated result, optional email summary, and booking path. The missing value is actionable interpretation: backend findings and fixes are not rendered in the results widget. A better report, accurate positioning, and relevant distribution are a stronger next investment than more keyword landing pages.

Free tools can serve three different jobs: attract searches, earn references, and help existing visitors decide to enquire. Each needs measurement. A tool can work as a conversion aid without ranking for broad terms; search traffic alone does not establish commercial success.

Do not make the whole business migration-led again. This tool serves owners of existing websites and people testing a new public build. People without a website need the existing scope/pricing/contact journey, not a URL input they cannot use.

## What the market demonstrates

These are observed offers, not independently measured successes or endorsements of every vendor claim.

| Example | Observed approach | Applicable lesson |
|---|---|---|
| [HubSpot Website Grader](https://blog.hubspot.com/marketing/website-grader-relaunch) | Free assessment tied to website improvement | The diagnostic should connect to the next buyer decision |
| [Ahrefs Webmaster Tools / Ahrefs Free](https://ahrefs.com/webmaster-tools) | Technical auditing and other tools for verified websites; limits and paid expansion | Useful free functionality can sit beside a paid offer; do not compete on crawler size |
| [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) | Free crawl of up to 500 URLs | Professionals already have substantial free alternatives; a small agency needs another reason to choose its tool |
| [Google PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about) | Lab diagnostics and separately identified real-user data | Merely reskinning a performance score is a weak distinction |
| [HubSpot AI Search Grader](https://www.hubspot.com/ai-search-grader) | Free one-time brand check with an onward continuous-monitoring offer | Separate technical eligibility from measured brand visibility; Panda's HTML scan does not perform this brand analysis |
| [Redirections CSV checker](https://www.redirections.app/tools/redirect-map-checker) | Narrow browser-local check for chains, loops and duplicate sources, with worked examples and limits | A small, specific tool with an explainable result can fit a specialist service |
| [Skribra technical SEO audit](https://skribra.com/tools/technical-seo-audit) | Markets a focused markup audit | Even evidence-oriented positioning has competitors; execution and helpful results matter |
| [Livecheck](https://livecheck.net/) | Launch checks aimed at AI-built sites | AI-built website launch checking is an existing category, not an uncontested new niche |

Public searches for free technical audits and AI website checkers returned numerous competing tools. That establishes supply and competing positioning, not monthly search volume or difficulty. No reliable volume numbers were obtained. Search result sets vary by location and time.

[Ahrefs discusses free tools as an organic acquisition tactic](https://ahrefs.com/blog/how-to-increase-organic-traffic/) and advises validating traffic potential before building. Its own scale and authority do not forecast PandaCodeGen's results. Its [AI referral analysis](https://ahrefs.com/blog/ai-search-traffic-by-page-type-ahrefs/) is a single company's observation, not proof that any free tool will attract AI traffic.

## Repository findings: address before promotion

1. **The useful evidence is missing from the result UI.** `src/lib/audit/deepChecks.ts` returns `findings` and `fix` for each check. In `src/components/audit/AuditWidget.tsx`, both desktop and mobile lists render names, scores and status icons, but not those explanations. Desktop copy even asks visitors to review findings below. Show actual observations and appropriate fixes, with the limitations beside them.
2. **Performance wording exceeds the implementation.** `src/app/free-audit/page.tsx` describes load time and Core Web Vitals. `src/lib/audit/pagespeed.ts` parses Lighthouse FCP, LCP, CLS, TBT and Speed Index; it does not expose field INP or a CrUX field assessment. FCP is not full load time. Label this mobile lab performance. Only add a field assessment after implementing its actual data source, period, URL/origin scope and unavailable state. [Google distinguishes lab and field data](https://developers.google.com/speed/docs/insights/v5/about).
3. **The CTA-placement heuristic is not a viewport measurement.** `checkCTAPlacement` treats the first half of the HTML body string as above the fold and matches English CTA words. That cannot establish visible position, keyboard behavior or usability. Rename it as a limited HTML signal or replace it with a rendered viewport check; do not surface its existing placement verdict as measured fact. Non-English pages need special handling.
4. **The email is a summary, not a useful full report yet.** `buildUserConfirmationText` in `src/app/api/audit/submit-lead/route.ts` sends score, FCP, platform and issue count, without the individual findings. Its closing still refers to reviewing the migration context. Broaden this to the actual website problem and offer separate help when requested.
5. **The analytics event is misleadingly named.** `audit_url_submit` fires after a successful result. There is no start event in this handler, so it cannot alone measure completion or failures. Preserve historical interpretation when introducing explicit started/completed/failed events.
6. **The input competes with an illustrative report.** On desktop the example diagnostics precede the URL input. Put the input and the promise first; keep the example below or collapsible. Validate this in a browser before declaring a conversion benefit.
7. **Scope should be explicit.** The deep checker fetches one submitted page plus supporting root files. This is not a complete website crawl, source-code review, checkout test, penetration test or certification. HTTP access to the scanner is also not proof that every crawler can access the page.

Keep existing strengths: results without an email wall, no score when the HTML cannot be fetched, unavailable performance rather than invented zeroes, explicit limits, safe public fetching, rate-limit infrastructure and report tokens. Their presence in source is not a fresh production security audit.

## Recommended positioning and report

Keep the existing URL `/free-audit`.

Suggested title: **Free Website Audit: Technical SEO & Speed | PandaCodeGen**

Suggested H1: **Free website audit for technical SEO and speed**

Suggested introduction: **Check a public page for mobile lab performance, search-access signals, structured data and common security-header gaps. See the results without signing up.**

Do not promise a universal completion time without observed completion data. Explain one-page scope beside the input. The tool should work for WordPress, Webflow, Shopify, custom and AI-built public pages without implying each platform needs replacement.

For each finding display:

- What was observed, including relevant value or safe snippet.
- Why it may matter, without invented revenue estimates.
- What to do next and whether interpretation needs a human.
- What this test did not establish.
- A contextual explanation link when useful.

Separate verified observations, heuristics, unavailable checks and manual tasks. Avoid an aggregate score obscuring a serious issue. For example, an intentional `noindex` on a staging site is not something to automatically remove; ask whether the page is intended for public indexing.

The reader should leave with a small prioritized action list. Priorities need documented rules and human review of representative examples, not a model inventing business impact from a score.

Lead paths:

1. **Email my results** — requested delivery, with the actual findings included.
2. **Discuss these findings with a founder** — carry the report reference into the contact/calendar flow and ask what the visitor wants to improve. State any review fee or scope before commitment.
3. **Read the fix** — useful DIY guidance. Giving a fix away establishes competence even when the visitor does not buy today.

Do not treat requesting an email copy as requesting a sales campaign. Keep ongoing marketing permission separate. Show relevant service links only when the finding supports that next step; a low score does not justify recommending a migration or an AEO retainer.

## Queries and page ownership

These are intent hypotheses to validate, not volume-ranked keywords.

| Query family | Page responsible | Scope |
|---|---|---|
| free website audit, free technical website audit, website SEO and speed checker | `/free-audit` | Primary tool intent; competitive broad terms |
| website audit without signup, check website technical SEO | `/free-audit` | Supporting wording that accurately describes the experience |
| why is my website slow, how to speed up a website | Relevant diagnostic article and website-speed hub | Explain diagnosis; link to the scan when it becomes useful |
| AI website launch checklist, what to check before launching an AI-built website | Existing checklist article, with tool link | Combine automation with manual form, payment, auth and accessibility testing |
| AI SEO services, AEO implementation | Existing service page | Commercial engagement, not a duplicate tool landing page |
| redirect map checker, migration redirect checker | Potential later distinct tool | Only create after shipping distinct functionality |
| website redesign cost, DIY versus professional website cost | Existing cost content / pricing | Explain assumptions; do not force an audit into a cost query |

Avoid “Google indexing checker” for this public HTML scan: technical eligibility is not actual index inclusion. Avoid “AI citation predictor” and “complete accessibility audit.” [Google says its AI features do not require special optimizations](https://developers.google.com/search/docs/appearance/ai-features); technical checks cannot predict selection.

Validate using GSC with the tool-page filter and query dimension together; do not assign property-level query impressions to a URL. Use country-specific keyword research if available before investing in another tool. Do not choose a tool solely from nominal volume: inspect whether searchers want a free utility, professional research, or paid help.

## Contextual internal linking

[Google recommends concise, relevant anchors and links where they help the reader](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). This is not a request to link every keyword to one page.

Source review already found `/free-audit` links in the homepage hero and several Shopify, WooCommerce, security and accessibility articles. The tool is not starting without links. Audit relevance before adding more; an accessibility article must not imply this tool certifies accessibility.

Priority placements:

| Source | Natural placement / anchor |
|---|---|
| `/blog/how-to-speed-up-your-website` | After explaining measurement: “run a free technical website audit” |
| `/blog/topic/website-speed` | Tool card alongside diagnostic reading |
| `/blog/topic/seo-and-ai-search` | “check your page's technical search foundations” |
| AI-builder checklist article | Beside automated checks, with manual tests clearly separated |
| `/services/webflow` and WordPress service journey | Beside “check before deciding to rebuild”; keep primary enquiry path |
| `/services/ai-seo` | Technical baseline option, explicitly separate from ongoing visibility measurement |
| Tool findings | Return links to the precise explanation or service that helps resolve the issue |

The blog educates, the hub organizes, the tool diagnoses and the service page sells an engagement. Do not retitle all four around “free website audit.” `/ai-info` should describe the tool factually where relevant, not become another checker page.

## What to build later

**Second choice: before/after migration comparison.** Accept explicitly supplied old/new public URLs or a small approved map. Compare status, redirect target, canonical, indexability, title and selected content signals. Produce an exportable exception report. This draws on actual migration expertise and is more distinctive than another score. It still needs manual destination decisions and does not promise ranking preservation. Start with a modest limit; do not crawl arbitrary sites at scale.

**Alternative for new-site buyers: interactive launch checklist.** Progress saving, manual checks and evidence notes could add value to the article. Test reader demand before making it a separate search landing page. An unpublished local build cannot be tested by a public URL scanner.

**Defer generic CAPI verification.** A public website scan cannot verify server-side event delivery, purchase/refund correctness or deduplication. A later authenticated diagnostic or self-assessment could support tracking services, with actual evidence and separately defined scope.

**Defer a generic ROI/savings calculator.** It risks turning assumptions into implied promises. If a cost tool is built, show editable inputs, included/excluded costs and transparent arithmetic. It should answer a costing question independently of the sales CTA.

## Distribution and measurement plan

First improve the report and wording. Then test known fixtures and owner-controlled public sites, including a well-configured page, intentional staging noindex, unavailable lab data and unreachable URL. Do not send real customer emails during development.

Publish a worked example with permission. Panda Patches can demonstrate the tool with the shared-owner relationship stated. Distinguish before/after technical measurements from business outcomes; keep device, method and dates visible. Only describe real observations.

Introduce the tool in relevant existing articles and newsletter/social posts. For backlink outreach, show a specific useful capability to editors maintaining relevant technical resources. Existing Vercel/Sanity/profile links are not automatically missing opportunities. Never require a followed backlink to use or export a report, and do not advertise invented traffic or lead statistics.

Instrument: tool visits, starts, successful results, failure reason category, result-detail interaction, email delivery success, founder enquiry, qualified enquiry, proposal and won project. Avoid sending submitted URLs, emails, raw report text or query-string secrets into general analytics. Respect existing consent choices and keep report identity separate from aggregate analytics.

Evaluate acquisition and business value separately:

- Completion rate = successful results / starts.
- Qualified enquiry rate = qualified enquiries / successful results, using a declared qualification rule.
- Acquisition cost includes development time, hosting/API usage and human follow-up, not just advertising.
- Compare contribution margin from won work with the total ongoing cost; do not call every report recipient a qualified lead.

Use the first month to establish a baseline, not prove SEO success. Check reliability and conversions weekly. Review search discovery over a longer period using actual impressions and clicks; low sample sizes do not justify strong conclusions. Do not add more tools if the existing one attracts usage but produces no useful results or relevant enquiries.

## Implementation order

1. Correct performance/viewport claims and expose evidence plus fixes on mobile and desktop.
2. Improve the summary email, founder handoff and funnel measurement.
3. Make the landing page explicit: input first, scope, example, method and limitations.
4. Add selective contextual links and demonstrate the tool publicly.
5. Validate query and lead data before commissioning a second tool.

Only this research document was added for this task. Existing source changes/deletions were not altered. Recommendations require implementation and runtime verification before being described as complete.
