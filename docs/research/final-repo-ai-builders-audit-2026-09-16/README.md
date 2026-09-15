# Final repository sweep and current AI-builder research

**Latest review:** [Follow-up at `961e2ee`](follow-up-961e2ee.md), 16 September 2026, distinguishes completed corrections from the remaining contents-navigation bug, translated hosting-policy drift and residual ecommerce claims. The findings below are the earlier `3efbfec` baseline, not a current list of unresolved issues.

16 September 2026. Repository reviewed at **`3efbfec`**, including unpushed local work. This is a source review of the site's broader positioning and launch-related features, plus current public documentation for six builders. The public PandaCodeGen website was not used as the baseline and no browser/deployment comparison was performed in this pass. Application files were not edited.

## Decision

**The audit is complete; the site is not yet fully aligned. AI builders have improved substantially, so publish a practical verification checklist rather than a blanket claim that they miss the screenshots' features.** No new homepage H1 experiment is needed.

The screenshots combine useful editorial principles, technical checks and optional interface features. They are not a controlled evaluation of any builder. This research establishes documented capabilities, not typical omission rates, first-prompt quality, conversion improvements or an independently tested product ranking.

## Current repository status

The main English improvements are real: a broader homepage, broader root/service metadata, founder-contact CTAs, a first-store ecommerce opening and a defined $500 monthly AI SEO service. The AEO cluster already links to its service page. Keep these changes.

Latest OPS commit `3efbfec` fixes the lower statistics array, the $80/20-hour FAQ tail and the wording that prohibited combined attribution totals. Do not keep those exact items on an open list. The source still has a 13-status branch caption, a 30-minute reporting comparison, Meta-optimisation/refund assertions and absolute security/correctness claims. Its revised attribution wording permits a combined total, but this checkout does not independently establish how the private order fields are stored or classified.

Five finishing groups remain:

1. **Price and commercial terms.** Homepage FAQ `src/app/page.tsx:93` still says online stores start at $5,000, conflicting with the $1,500 small-store offer. That array also feeds FAQ structured data. The DIY-cost article still states provider-direct hosting from $20 and “There is no retainer,” despite negotiated hosting and optional ongoing services.
2. **Shared evidence facts.** `src/data/company-facts.ts:215` still calls the OPS platform twenty Edge Functions; current case facts say 26. Its MyCustomPatches summary still combines permanent hosting retirement with pending performance reconciliation. The llms summary generalises one store's source-measurement experience to most businesses.
3. **French/German parity.** Broader summary text is present, but localised heroes, metadata, About/contact copy and parts of hosting terms retain the earlier proposition. These feed active locale components. Preserve the user's English/Urdu working-language policy and AI-assisted written translations; do not invent native-language delivery.
4. **Recognisable service routes.** Header still puts WordPress Migration first and calls software “Custom Engineering.” Software's long heading and the migration/headless emphasis in service cards need alignment. CAPI/attribution remain capabilities without a clear standalone commercial destination; define scope only if sold separately, with project-specific quoting if appropriate.
5. **Supporting claims and article flow.** Ecommerce retains broad app/performance/cost assertions below its improved opening. The DIY-cost article overstates what builders cannot provide. The three sampled long guides still lack article contents navigation in the inspected source. General-company labels in reference pages and social metadata also lag the new positioning.

Detailed references, closed items and limits: [repository offer sweep](repo-offer-sweep.md). These are current source findings, not deployment differences or claims of lost search traffic.

## What six current builders actually provide

| Builder | Verified documentation finding | Implication for our copy |
| --- | --- | --- |
| Lovable | Current docs describe SSR for new apps from 13 May 2026 and crawler prerendering for older hosted apps; built-in SEO review covers metadata, sitemap, robots, canonicals and other checks | Do not say all Lovable sites are empty HTML or require a rebuild to be crawlable. The docs explicitly say SEO items are not always generated up front and reviews do not rerun automatically on publishing. |
| Bolt | SEO prerendering, backend/payment integration, security auditing and reusable writing/SEO instructions are documented | Do not say it only makes a front end or cannot implement webhooks/retries. Check configuration, credentials and actual successful/failed transactions. |
| v0 | Full-stack Next.js development, backend-capable previews and browser/test tools are documented | Do not describe it as only a mockup generator or unable to test an application. |
| Wix Harmony | AI-assisted SEO, automatic mobile adaptation, forms and accessibility tooling | A mobile menu, metadata or skip-link capability is not a missing product-wide feature. Its accessibility wizard has documented coverage limits. |
| Framer | June 2026 Agents support layouts/interactions, copy/metadata, CMS and audit tasks; published pages are pre-rendered with sitemap/robots infrastructure | Do not base the comparison solely on older Wireframer. Native campaign capture also exists on specified plans, so attribution is not categorically unavailable. |
| Webflow AI | Multi-page generation and SEO/AEO audit/generation tools | Configuration, paid-plan/credit limits, primary-locale restrictions and component/CMS audit blind spots matter. “No issues found” is not verification of every route and workflow. |

Primary sources: [Lovable SEO](https://docs.lovable.dev/features/seo-aeo), [Bolt release notes](https://support.bolt.new/release-notes), [v0 full-stack development](https://v0.app/docs/full-stack-apps), [Wix Harmony SEO](https://support.wix.com/en/article/wix-harmony-editor-optimizing-your-site-with-seo), [Framer 3.0](https://www.framer.com/blog/framer-3/), [Webflow AI audit](https://help.webflow.com/hc/en-us/articles/45696502240147-Audit-and-improve-SEO-AEO-with-Webflow-AI).

Detailed dates, limitations and source links: [Lovable/Bolt/v0](ai-app-builders.md) and [Wix/Framer/Webflow](ai-site-builders.md). Hosted behaviour must not automatically be assumed for exported projects on a different host. Vendor-reported improvements are not measured improvements in conversion or rankings.

## How to apply the screenshots

### Copy

Keep specific headings, manageable paragraphs, clear offer/price/scope, truthful proof, and CTAs that describe the next action. Put the relevant reassurance near the decision: price exclusions by pricing, delivery expectations by the form, and evidence limits by the result.

Do not turn useful advice into rigid rules. Three bullets is not a universal limit; em dashes are not an SEO defect; a ready buyer need not read every objection before an enquiry button appears. “One buyer” is useful for a particular service or section, not a reason a company homepage cannot offer both websites and software. Write for busy readers rather than describing them as lazy.

### Interface

| Screenshot items | How to treat them |
| --- | --- |
| Mobile menu, hover states, skip links, form feedback, useful 404 | Check keyboard/touch/focus, labels, errors and recovery as well as visual presence. |
| Dark mode, floating contact, sticky header, scroll-to-top/progress, print stylesheet | Add only when they help the intended reader or task. Extra overlays and motion can also create friction. |
| Site search | Valuable for larger content collections. Existing blog search is useful; absence of full-site search is not automatically a defect. |
| Expandable FAQ | Optional presentation. Current FAQs can remain visible; collapsing is not a prerequisite for quality. |
| Password visibility, clipboard controls, confirmation dialogs | Use where the corresponding task exists. Do not add irrelevant controls to an agency site. |
| Newsletter signup | Requires a real publishing/subscription purpose and working delivery; not a universal launch requirement. |
| Loading animations | Provide honest progress/error feedback; do not add artificial waiting or ignore reduced-motion preferences. |
| Cookie banner | Verify the configured script behaviour and withdrawal choices, not just whether a banner is visible. This checklist is not a legal compliance assessment. |

The repo already contains a custom 404, responsive mobile navigation, focus styles, reduced-motion handling, a skip link, blog search, consent-managed services, form validation/error handling and campaign/referrer capture. Source presence is not an end-to-end guarantee, but “these basics are all missing” would not describe this repo either.

### Search and measurement

- Check page titles, descriptions, canonical destinations, headings, meaningful links, sitemap entries and actual rendering. Do not equate the existence of a tag with accurate content or guaranteed indexing.
- Keep intentional `noindex` on pages that should not appear in search; investigate accidental exclusion of intended landing pages. Google's documentation explicitly supports intentional `noindex`. It is not access control. [Google noindex guidance](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- Write appropriate image alternatives; decorative images normally need an empty alternative rather than invented descriptions. [W3C image guidance](https://www.w3.org/WAI/tutorials/images/decorative/)
- Use clear semantic heading hierarchy. One main H1 is a sensible house convention; “exactly one H1 or Google will not rank you” is not established by this research. [W3C headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- Tag acquisition campaigns consistently. Measure internal CTA interactions as events rather than tagging every internal navigation link as a new acquisition campaign. The screenshot's “UTM tracking on links” is not a complete attribution method. [Google campaign URL guidance](https://support.google.com/analytics/answer/10917952)
- Use truthful publication/modification dates after actual changes. Do not update every post date to make a site look fresh. [Google publication-date guidance](https://developers.google.com/search/docs/appearance/publication-dates)
- Structured data must match the page and supported purpose. A backlink strategy, Search Console connection or high lab score is not a switch that guarantees rankings. [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## What is worth selling and proving

The valuable deliverable is the customer's working implementation, with agreed tests and responsibilities. Examples to specify where relevant:

- Enquiry: validation, failed delivery, retry/duplicate handling, inbox or CRM arrival, available source attached.
- Store: successful/failed payment, delayed webhook, duplicate notification, refund handling and the actual reporting effect.
- Software: roles, permitted actions, denied access, concurrent edits, recovery and operational handover.
- Website: mobile/keyboard use, meaningful content, indexable intended routes and working next steps.
- Monthly AI SEO: the agreed questions/pages, changes shipped, observations and limits; not guaranteed citation.

These are suggested acceptance checks, not assertions that all were run for every PandaCodeGen project or that AI builders fail them. Public proof must show the test actually performed and its scope. The existing OPS/guard drift is a reason to apply this standard to our own work first, not to substitute “human-built” for verification.

## Recommended copy and placement

Suggested section for the relevant service/DIY article; not published by this audit:

> **Already built a website with AI?**
>
> We can review the pages, forms and integrations your business relies on, explain what needs attention and agree the work before changing it. That can include enquiry delivery, mobile usability, search setup and connecting available source information to your leads.
>
> **Talk to the founders**

Suggested educational title: **“AI-built website checklist: what to verify before launch.”** Lead with a fair acknowledgement of current tool capabilities, then explain the acceptance tasks with dated, reproducible examples. This does not require another homepage H1 or a blanket anti-builder section across all services.

First correct the existing DIY-cost article's universal statements about missing error handling, retries/webhooks and buyer-specific answers. Its cost intent can stay. The Lovable diagnostic already acknowledges SSR/prerendering and recommends diagnosis before a rebuild; preserve that useful distinction. If adding a separate checklist, keep its launch-verification intent distinct and link the related articles rather than duplicating them.

Do not repurpose the 48-site accessibility sample as a failure rate for AI builders: it is a selected small-business sample, not a controlled comparison of current named builder outputs. A failed heuristic check also does not establish that every assistant cannot read a site. For comparative failure-rate claims, preserve the builder/version/plan/date, identical brief, prompt/iteration budget, outputs and tests, including repairs and successful results.

## Validation

- `npm.cmd run typecheck`: passed.
- `npm.cmd run claims:check`: passed within that check's limited coverage; it did not detect all editorial contradictions above.
- `npm.cmd run test:forms`: **24 passed**. These are existing locale/timing/URL tests, not real email delivery or production CRM verification.
- Initial `npm` invocation was blocked by PowerShell's script execution policy; the ordinary `npm.cmd` executable completed the checks without changing policy.
- No full build, website deployment, live enquiries, advertising changes, generated builder projects or public profile updates were performed.

The remaining work is a bounded consistency/claims pass, buying-route and translation alignment, and a fair update to the existing AI-builder discussion. It is not a reason to keep redesigning the homepage.
