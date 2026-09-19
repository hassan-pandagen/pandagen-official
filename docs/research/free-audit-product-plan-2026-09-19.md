# Free audit: product, lead capture and search implementation plan

Date: 19 September 2026. Status: implementation specification, not shipped functionality. Builds on `free-tool-growth-strategy-2026-09-19.md` and the owner's decision to capture both emailed-report leads and founder-review leads.

## Product decision

One main tool at `/free-audit`, with platform-aware advice and two distinct lead actions. Free automated results remain visible on screen. A free founder review is a separate, bounded service. Do not make a second collection of near-identical audit landing pages at launch.

Primary buyer: an owner or marketing lead who knows the website needs attention but needs understandable next steps. Also support developers who want evidence they can act on. A person without a public website gets a link to discuss their new website, not a broken audit journey.

Success: useful completed scans, relevant review requests, and qualified enquiries. An emailed report is a lead, not automatically a sales opportunity. Count one contact with multiple actions rather than inflating contact totals.

## Page and copy specification

Title: **Free Website Audit: SEO, Speed & Expert Review | PandaCodeGen**

Meta description: **Check your website's technical SEO and mobile lab speed. Get plain-English findings, email your report, or request a free founder review.**

H1: **Free website audit. Know what to fix next.**

Intro: **Check a public page for speed and technical SEO issues. See what the tests found, what it means, and what to do next—with advice for your website platform.**

Supporting line: **Results on screen. No signup required. Want a second opinion? Request a free founder review.**

Primary button: **Check my website**

Input-level scope: **The automated scan checks one public page and supporting site files. It does not test purchases or submit forms.**

Use this copy only when findings and platform advice actually ship. Do not publish the future capability before implementation.

Page order:

1. Clear heading, short promise, URL input and optional platform/goal controls.
2. Results in the same page, with prioritized observations and expandable evidence.
3. Two actions: email results / request founder review.
4. What the automated scan checks and what a founder adds.
5. Platform guidance, including what the owner can change themselves.
6. One worked example, explicitly illustrative or dated with permission.
7. Short FAQs: free scope, supported platforms, account access, response timing, what scores mean.

Do not put a simulated failing report above the input. Keep methodology and limitations readable without making the opening defensive or excessively long. Use one `audit-widget` anchor; source inspection found the page wrapper and widget currently both declare that ID.

## Inputs and progressive disclosure

Required for scan: public URL only. Accept ordinary domain input and normalize through the existing safe-fetch path.

Optional controls: platform (WordPress/WooCommerce, Wix, Squarespace, Shopify, Webflow, custom/other, not sure); goal (speed, search visibility, enquiries/bookings, ecommerce, checking a launch). Do not block the scan for these answers.

Store detected platform and user-declared platform separately. When they disagree, explain uncertainty and allow correction; do not silently overwrite either. Platform detection is a hint, not proof of backend architecture.

Founder-review form: email, main concern, optional two additional same-business page URLs. Carry over scan URL and platform. The automated V1 scan remains one page; the human reviews up to three. This avoids pretending a multi-page crawler already exists.

Allow a review request even when the public scan fails. Clearly show that no automated result was available. Do not create fake scores to satisfy a lead token requirement.

## Results specification

Show up to three prioritized actions followed by all checks. Each action includes: observation, affected URL, significance, platform-specific next step, person responsible, evidence, limits, and how to verify the fix.

Use separate states: observed issue, needs interpretation, no issue detected, unavailable, not applicable. A missing measurement is not a failure. Avoid translating every check into a percentage score. Keep existing proprietary scores secondary and labelled.

V1 checks: lab performance, technical metadata/indexability signals, headings and structured data detection, response headers and publicly detectable page signals. Render the existing backend `findings` and `fix` only after reviewing their wording: not every current suggestion is safe as an unconditional instruction.

Priority examples: unintended noindex on a public sales page deserves review; noindex on staging can be correct. Missing field data is not evidence of poor performance. A detected script does not prove it fired successfully. A working-looking button does not prove delivery to a CRM.

Correct known issues first:

- FCP is first content appearance, not total load time. Current parser reads Lighthouse metrics, not a complete CrUX field assessment. Rename current promises accordingly.
- First half of HTML is not above the fold. Remove that verdict or implement a genuine rendered viewport test.
- CTA keyword matching is English-biased. Do not penalize another language as if it had no CTA.
- The current PSI failure explanation asserts a retry usually works because of a first visit. Replace with an explanation that only states the observed unavailability.
- Raw HTML fetches cannot establish exactly what Google or every assistant sees.

Platform instructions should distinguish editor changes, developer changes, and provider-controlled limitations. Never infer that WordPress, Wix or Squarespace requires migration from platform detection or a low score.

## Lead capture and operations

### Report lead

Button: **Email my audit report**. Require email only; inherit context. Send the actual findings and useful next steps, not just a score/count. Include a separate invitation to request the founder review.

### Founder-review lead

Heading: **Want a founder's opinion on what to fix first?**

Copy: **Tell us what your website needs to do. We'll review up to three public pages and email our top three recommendations, with practical next steps. Free, with no obligation to hire us.**

Button: **Request my free founder review**.

Timing: the owner proposed 24-hour delivery. Model the actual due date before publication. A literal 24-hour promise requires weekend coverage; otherwise recommend and clearly display one business day with defined operating days/timezone. Do not silently treat these as equivalent. If the team cannot cover the next deadline, show the available delivery date before submission. Never display invented scarcity.

Pilot: start with a small manageable intake; review the first 10 requests for actual time spent and usefulness. Proposed capacity is an operational setting, not a claim that three daily slots already exist. No payment, security penetration test, account login or implementation is included in the free public-page review.

Manual response template:

1. Your goal and pages reviewed.
2. Three recommendations, evidence and order of work.
3. What appears fine / what could not be checked.
4. Optional next step: reply if you want an implementation scope and price.

Do not invent three faults when fewer exist. Explain the most useful manual checks instead.

### Data and delivery requirements

Store one contact keyed by normalized email, separate business/site records, and append-only request/action history. Do not merge different email addresses just because they share a domain. Suggested fields: contact ID, website, detected/declared platform, goal, report ID and version, lead actions, source page, created time, requested delivery, assigned reviewer, status and delivered time. Keep marketing choice separate from delivery permission.

The current route is email delivery plus notification, not an established durable lead pipeline. It consumes a token once; owner notification failures are logged while the visitor can still receive success. A manual-review workflow therefore needs durable storage and a visible queue before promising delivery.

Use separate idempotent report-delivery and review-request actions bound to server-held report data. A report request must not consume the only ability to ask for review. Retries must not send duplicates. Queue review requests before acknowledging acceptance; notification email is an alert, not the sole record. Handle mail failure with retry status and an operator-visible exception.

Keep existing origin validation, bounded inputs, rate limits, SSRF protection and token integrity. Do not turn report IDs into public enumerable pages. Additional public URLs need the same URL/DNS/redirect protections as the initial scan. Render snippets as escaped text. Retain only necessary data, define deletion/retention rules, and do not put emails, submitted URLs or report content in analytics.

## Keyword research and ownership

Public searches on the research date found existing platform-specific audit offers. These are qualitative intent observations; no search-volume, CPC or keyword-difficulty dataset was obtained. Priorities below reflect product fit, not measured volume.

| Priority | Query family | Intent / destination |
|---|---|---|
| Primary | free website audit; website audit tool; technical website audit | Run a diagnostic: `/free-audit` |
| Supporting | free website audit report; website audit without signup | Obtain useful results: same page and its delivery flow |
| Supporting | website audit for small business; website health check | Understand problems: same page, plain-English example and scope |
| Platform | WordPress website audit; WordPress SEO audit | Platform section/report first; dedicated page only after distinct coverage |
| Platform | Wix SEO audit; Wix website audit | Platform section/report with Wix-specific actions |
| Platform | Squarespace SEO audit; Squarespace website audit | Platform section/report with Squarespace-specific actions |
| Adjacent | why is my website slow; why is my Wix site slow | Diagnostic article; contextual link to scan |
| Adjacent | AI-built website checklist | Existing `/blog/ai-built-website-checklist`; link at automated-check step |
| Commercial | technical SEO services; website redesign; migration services | Relevant service pages, not the free-tool title |
| Later | conversion tracking audit; migration redirect checker | Distinct functionality required; not current scan claims |

Do not create pages for every permutation of free/platform/SEO/speed/audit. Do not market this as a security audit, verified indexing-status checker, full accessibility assessment or AI citation predictor.

Competitor references and what they show:

- [Rabbit SEO](https://www.rabbitseo.com/wix-seo-audit): Wix-specific crawl and prioritized remediation positioning.
- [Wix SEO Assistant](https://www.wix.com/seo/learn/resource/wix-seo-assistant-auditing-tool): native on-page auditing already exists.
- [SEOSpace](https://seospace.squarespace.com/squarespace-seo-audit-score): Squarespace audit with onward action-plan offer.
- [WP Audit](https://wpaudit.cc/wordpress-website-audit/): WordPress free audit with report/export positioning.
- [DevsTeam](https://www.devsteam.com/services/website-audit/): WordPress agency-audit positioning.
- [ACMeridian](https://www.acmeridian.co/audit): plain-English review with human follow-up. Plain English alone is not unique.

These descriptions reflect public offers, not independent tests of their accuracy or business results. PandaCodeGen's proposed differentiation is transparent evidence, appropriate platform advice and a bounded founder review. This remains a positioning hypothesis to test.

## Internal linking map

All links below are planned. Preserve relevant existing links and avoid duplicate CTAs in the same section.

| Source | Placement | Suggested anchor / destination |
|---|---|---|
| `/blog/how-to-speed-up-your-website` | After measurement introduction | check your page's speed and technical SEO → `/free-audit` |
| `/blog/ai-built-website-checklist` | Automated checks, before manual launch testing | run the free website audit → `/free-audit` |
| `/blog/why-competitor-outranks-you` | Technical diagnosis only | check your technical SEO signals → `/free-audit` |
| `/blog/topic/website-speed` | Existing relevant tool path | keep and verify existing free-audit relationship |
| `/blog/topic/seo-and-ai-search` | Supporting diagnostic resource | free technical website audit → `/free-audit`; keep service CTA |
| `/services/wordpress`, `/services/wix`, `/services/squarespace`, `/services/webflow` | Check before deciding to rebuild | check your current website → `/free-audit` |
| `/services/ai-seo` | Technical baseline explanation | check your page's search foundations → `/free-audit` |
| Homepage | Existing audit link | retain secondary role; do not displace founder enquiry |
| Tool result | Specific finding | corresponding explanation article, then relevant service if appropriate |

Use real crawlable links with concise contextual anchors, consistent with [Google's linking guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). Do not use internal UTM parameters; source placement can be measured with events. Do not change the homepage H1 or unrelated blog positioning for this launch.

Keep the landing page's title, description, OG/Twitter copy and visible offer aligned. Keep private results out of the sitemap; do not index reports for arbitrary submitted domains. Platform selection states should not generate competing indexed copies. No new country or translated tool pages until the workflow and language-specific checks are supported.

## Implementation sequence and acceptance criteria

1. **Reliable report:** correct labels and heuristics; render findings/fixes; single responsive result component where practical; fix duplicate anchor. Verify good, bad, unavailable and not-applicable cases with known fixtures.
2. **Both leads:** durable action storage, report email, founder request, deduplication, retry handling and owner queue. Verify report then review, review first, double submit, expired token and mail/notification failure. Use mocked delivery for tests.
3. **Buyer experience:** platform and goal controls; input first; example and methodology; preserve input on errors; keyboard/focus/live status and mobile checks. Record observed completion times before advertising speed.
4. **Search/distribution:** update metadata, add contextual links from the map, verify rendered HTML/canonicals and all destinations; retain original articles' intent.
5. **Pilot measurement:** starts, completions, failures, report requests/delivery, review requests/delivery, qualified leads, proposals and sales. Record unique contacts separately from actions; respect consent and avoid PII in analytics.

Before launch, demonstrate that report-only contacts are captured and can upgrade to a review without rescanning, and that every accepted human request appears in a persistent queue with its promised due date. Verify sender and delivery configuration using owner-controlled testing, not customer contacts.

Read the repository's installed Next.js documentation before application edits. Run relevant lead/security regression tests, project checks and browser verification after implementation. Do not describe this specification, its capacity settings or its proposed internal links as deployed work.
