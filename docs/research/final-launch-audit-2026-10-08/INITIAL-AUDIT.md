# PandaCodeGen redesign launch audit

8 October 2026. The production candidate builds successfully and its structural SEO is sound, but final launch sign-off should wait for the confirmed mobile, translation, accessibility and layout-shift findings below. This is an audit, not a copy rewrite or deployment.

The redesign substantially improves the offer: business websites, stores, suitable WordPress builds, editable custom sites and ongoing help are visible. The GoHighLevel speed and outgrown-builder intent has been restored. The old service-heading/image overlap is resolved at the principal mobile and desktop widths inspected. One narrower WooCommerce heading still clips.

## Coverage and evidence

| Area | Result and scope |
| --- | --- |
| Production build | Next.js 16.3.8; 169 static pages generated in the isolated .next-audit directory |
| Sitemap and structural SEO | All 157 candidate sitemap URLs checked on development and production; zero failures or warnings |
| Browser geometry and runtime | 506 distinct page/engine/viewport checks; zero page JavaScript errors, broken loaded images or document horizontal-overflow findings |
| All-page coverage | Every sitemap URL at 390px and 1440px in Chromium, including all 92 posts |
| Additional widths and engines | 43 core pages at 320px; 43 core pages each at 390px and 1440px in WebKit; 21 important pages each at 768px, 1024px and 1920px |
| Visual review | Mobile and desktop hero contact sheets for 16 important routes; individual screenshots for the reported layout issues |
| Accessibility | 28 axe scans: 14 representative routes at mobile and desktop widths. Four routes have detected violations; other scans still contain manual-review items |
| Forms and controls | Quote validation, server-error display, success/reset, contact success/reset, menu navigation, consent persistence, assistant persistence, search/empty search and audit-failure fallback exercised in both engines and both main widths |
| Actual contact request | A marked test request returned HTTP 200. This does not establish inbox delivery; owner confirmation remains pending |
| Actual automated scan | HTTP 200; public HTML fetched, 11 deep checks, report and both follow-up tokens produced in about 22 seconds. Tokens were not retained |
| Actual assistant answers | Five uncached questions answered successfully; pricing, hosting, first call, outcome guarantees and Sanity/Supabase roles agree with company facts |
| Content and linking | All 92 posts and 11 hubs pass the rendered linking guard; no repeated paragraphs of 160 or more characters found within individual rendered posts |
| Structured data | No JSON parsing errors; one consistent Organization description across the built pages |
| Languages | English/French/German and x-default alternates present across all 15 localized core-page variants |
| Old URLs | Live inventory 146 URLs; candidate 157. Four removed URLs each return a direct permanent 308 to a 200 destination |
| Footer credit | Panda Patches' live credit now explicitly contains nofollow noopener noreferrer |
| Release checks | Typecheck, repository lint, 80 security/form/catalog tests, public-claims gate, date consistency, spec freshness, glossary, retired claims and fresh built-output guards pass |

See [summary.json](summary.json), [browser results](evidence/browser-results.json), [additional viewports](evidence/additional-viewports.json), [interaction and accessibility evidence](evidence/interaction-results-final.json), [content evidence](evidence/content-results.json) and [production SEO log](evidence/production-seo.log).

Browser geometry checks are automated checks, not an individual editorial review of every screenshot. WebKit is a browser-engine test, not a physical iPhone test. Software-keyboard behavior, assistive-technology use and post-deployment hosting behavior retain their own acceptance checks.

## Fix before final sign-off

| Priority | Finding | Concrete correction |
| --- | --- | --- |
| P1 | WooCommerce H1 clips at 320px. Its text exceeds the heading box by 41px; the hero's hidden overflow cuts the word | Adjust the small-screen font minimum or wrapping in [ServicesPreview.module.css](../../../src/components/pages/services/ServicesPreview.module.css:73). Retest 320px and a 400% zoom/reflow scenario |
| P1 | French and German service copy still asserts that standard Shopify themes are slow and custom storefronts load immediately | Replace the universal statements with the scoped store-building/improvement offer. They occur on both localized home and service surfaces: [French dictionary](../../../src/lib/i18n/dictionaries/fr.ts:169), [German dictionary](../../../src/lib/i18n/dictionaries/de.ts:169), and each dictionary's service section around line 448 |
| P1 | French and German pricing still says hosting is not included in the monthly package, conflicting with the owner-confirmed English rule | Translate the actual rule: hosting on the agency Vercel account is included on maintenance or SEO packages if requested; outside a package it is agreed per client. Correct the dictionary paragraphs around line 595 and reconcile the custom-build versus WordPress pricing distinction |
| P1 | Desktop homepage has an intermittent large initial layout shift | Across six cold desktop observations, three showed about 0.201; the follow-up trace reproduces movement of the hero content grid by about 103px. Inspect initial fonts, wrapping and reserved hero dimensions before calling performance complete |
| P1 | Accessibility violations on homepage and work controls | Accessible names override visible labels. Homepage review-card links also say “Visit … website” while pointing to a project page. Align the names with the visible action and actual destination in [ProofSection.tsx](../../../src/components/redesign/ProofSection.tsx) and [WorkReel.tsx](../../../src/components/redesign/WorkReel.tsx) |
| P1 | Services hero caption link is distinguished principally by color | Add a persistent underline or other non-color cue to “See the project.” Axe measures only 1.39:1 contrast against adjacent text |
| P1 | Mobile portability table has 21 low-contrast platform-label findings | Darken the small labels: measured foreground #807b76 on #f5f4f0 is about 3.8:1 at 11px. Normal text needs 4.5:1 for WCAG AA |
| P2 | Closing the assistant after sending a question returns focus to BODY | Preserve the original launcher as the return-focus target instead of overwriting it with the composer during ask(). The behavior is reproduced in Chromium and WebKit |
| P2 | Cookie banner says chat remains off until allowed, while the first-party chat works without that consent | Remove chat from that banner sentence and explain scheduling separately. The Cookie Policy already describes the actual chat behavior |

These are bounded fixes. They do not justify another redesign, mass rewriting of the 92 posts or changing the established URL structure.

The accessibility findings support specific corrections, not a blanket WCAG certification. Axe's incomplete checks require manual assessment. [W3C label in name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html), [W3C contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

The [320px screenshot](evidence/woocommerce-320.png) confirms the clipping. [Layout-shift trace](evidence/layout-shifts.json) records the desktop movement. Font/loading timing is a plausible cause of the shift, but the trace does not by itself prove the root cause.

## Forms and the assistant

Quote-modal and contact-form success/error states work in the tested browser profiles, with 16px modal inputs and panels contained within the viewport. Empty required fields are rejected, a simulated server failure appears visibly, reopening clears the form, and consent choices persist after reload.

The compact cookie control measures 44px square after a choice. The mobile assistant panel measures 374px wide inside a 390px viewport and has no horizontal overflow. Conversation history survives reload, and Escape closes the panel. The remaining focus-return defect matters to keyboard users even though sending and persistence work.

The actual contact test uses the name “FINAL LAUNCH QA - ignore this test,” the agency's public email and an explicit test message. The accepted API request is recorded in [lead evidence](evidence/lead-delivery-valid.json). A prior malformed harness request was correctly rejected for lacking the browser's same-origin metadata; it is not a form defect. The browser success/error tests use mocked delivery so they do not create multiple enquiries.

The actual scan and assistant tests are separate from those mocks. [Scan result](evidence/audit-api.json) confirms the operational report path. [Assistant answers](evidence/assistant-api.json) confirm:

- Custom-build starting tiers and written fixed scope, with approved additions.
- Hosting included on maintenance/SEO packages when requested.
- A free 15-minute first call and the current founder-review offer.
- No Google-ranking or AI-citation guarantee.
- Sanity for content editing; Supabase when the application needs data, accounts or workflows.

These are answers from your own assistant. They are not evidence that an independent answer engine cites or recommends PandaCodeGen.

The test enquiry's receipt could not be confirmed through the provider API from this environment. Confirm its arrival before final customer-contact sign-off. Retest once on the published redesign after deployment.

## Company facts and AI reference pages

The English commercial facts are consistent across pricing, the reference pages, llms.txt and tested assistant retrieval. The fixed-scope rule, optional hosting arrangement and 15-minute consultation are present in the source of truth. The Organization entity uses one description, and the portfolio distinguishes independent clients, founder-affiliated work and concepts.

The translation dictionaries remain a second source of commercial prose and escaped the English claims guard. Add specific multilingual checks for hosting/package terms and unsupported speed promises so the same drift is caught next time.

The reference pages still display the central review date of 10 September 2026, while commercial facts changed on 8 October. Record the substantive commercial review separately or update the shared date after an actual full review; do not move it simply to create a freshness signal. Sitemap content-change dates on affected pricing/reference pages also deserve reconciliation with the real change history.

The metrics guard confirms that 42 declared metrics match their published/withdrawn states across 161 built pages. It does not independently verify private measurement files or attribution databases. The earlier 92-post review and its primary-source corrections remain valuable, but this release audit does not claim to independently verify every external source URL or private case record.

Useful FAQs and factual reference pages can answer real buyer questions. Google does not require special AI schema, and it explicitly says llms.txt does not improve Google Search visibility. Treat those surfaces as maintained information, not a citation guarantee. [Google's generative AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

## SEO and comparison with the live copy

The [copy comparison](copy-comparison.json) contains the observed live title/description/H1 and the candidate equivalent for the homepage, service index, GoHighLevel, Squarespace, WooCommerce and AI reference hub. These are sampled before/after content comparisons, not an assertion that the entire live site's prose was manually compared.

| Page | Current redesign assessment |
| --- | --- |
| Homepage | Clear business-site/store offer, direct founders, editable content and written scope. WordPress work is qualified as quoted to scope |
| Services | H1 now explicitly says website design and development. The previous anonymous slogan problem is resolved |
| GoHighLevel | Title “GoHighLevel Website Speed & Custom Builds” and lead explicitly cover slow sites and outgrowing the builder. CRM retention remains visible |
| WooCommerce | Development, speed and migration all appear in metadata. The old universal checkout accusation has been replaced with a scoped store offer |
| Wix and Squarespace | Descriptions name the Sanity editor and support improving the existing site as well as migration |
| Webflow | H1 and title distinguish optimization from migration |
| WordPress migration | Explicit WordPress-to-Next.js service name retained |
| Sanity and backend services | Dedicated commercial pages now exist, connected to current explanatory guides |

Do not reverse these intent improvements to recreate the old copy. Some live headings made unsupported universal accusations about a visitor's site. Preserve the buyer problem and explain the assessment rather than asserting the problem before examining the site.

Some descriptions are still verbose: about 264 characters for sanity-vs-wordpress, 240 for sanity-vs-supabase and 217 for About in the raw metadata snapshot. Trim where the opening proposition becomes unclear, but there is no universal character limit that makes a title technically invalid. Google truncates title links according to presentation width and may choose other page text. [Google title-link guidance](https://developers.google.com/search/docs/appearance/title-link).

Five older commit-date advisories remain. Review whether the commits substantively changed facts or only templates/links before moving modification dates. The nine reported dash occurrences are style advisories, not failed SEO checks.

## Clusters and buyer keyword ownership

All 92 posts have their declared hub/service parent, a relevant commercial link and related siblings. The 11 hubs are functional and indexable. No exact repeated paragraph of 160 or more characters was found within a rendered post. That does not establish that semantically overlapping articles can never compete.

| Commercial owner | Buyer question family | Supporting content and next useful proof |
| --- | --- | --- |
| /services/wordpress | Small-business WordPress website, build or improve current WordPress site | Show a scoped editing workflow and what maintenance covers |
| /services/wordpress-migration | WordPress to Next.js migration services, content and URL preservation | Migration-cost/process guides plus a dated project record |
| /services/gohighlevel | Speed up GHL site, outgrown builder, keep CRM while replacing website | Existing speed and keep-CRM guides; add an actual verified integration example when available |
| /services/woocommerce | WooCommerce development, slow checkout, headless or full migration | Separate the diagnosis, storefront and operating-model decisions |
| /services/ecommerce | Shopify/WooCommerce store build, custom storefront, checkout requirements | Store-cost and headless guides; show a relevant catalogue/order journey |
| /services/wix and /services/squarespace | Improve current site; migration to an editable custom/Sanity site | Export/portability and cost guides; make content/URL/editor handover explicit |
| /services/webflow | Webflow optimization versus migration | Existing export, migration-cost and platform-cost guides |
| /services/sanity-development | Sanity CMS website development, edit Next.js without coding, CMS migration | sanity-vs-wordpress and nextjs-sanity-stack; prioritize a real editor walkthrough |
| /services/backend-development | Database/auth/storage/admin/API development; Supabase project build | sanity-vs-supabase and workflow evidence; explain authorization, backup and handover |
| /services/custom-engineering | Complete portals, dashboards, internal tools and integrations | Keep its product/workflow intent distinct from the backend-only offer |
| /services/ai-seo | Scoped ongoing AI SEO/AEO research and improvements | Original measurement methods, constraints and meaningful corrections |
| /partners | White-label delivery and web-development partnerships | Partner process, accepted scope and handover responsibilities |

This is an intent map, not a search-volume estimate. The earlier [external research](../seo-aeo-prelaunch-audit-2026-10-07/README.md) contains the broader opportunity set and competitor benchmark; it should inform incremental work after the release.

The US [query baseline](us-query-baseline.json) preserves a bounded existing-page comparison for 8 September to 5 October. It is not the source for new keyword-demand discovery. Query rows are incomplete/anonymized, and operator-looking strings do not prove AI retrieval or citations.

The strongest next content assets are a buyer-facing Sanity editing demo, a reproducible catalogue/quote example, and a backend workflow case with permissions and recovery described. These add evidence competitors cannot reproduce by rephrasing a vendor manual. The Sanity/Supabase distinction and monthly-cost guide already support that direction. Do not publish dozens of near-identical stack pages before launch.

## URL and indexing continuity

The [URL parity record](url-parity.json) shows 142 live inventory URLs retained, 15 candidate additions and four removals. The removals resolve as follows:

| Old path | Permanent destination |
| --- | --- |
| /blog/how-to-cut-saas-bill-2026 | /blog/saas-software-pricing-audit-2026 |
| /blog/why-is-my-website-loading-so-slow | /blog/how-to-speed-up-your-website |
| /blog/wordpress-killer | /blog/wordpress-vs-custom-code-real-cost-3-years |
| /work/panda-codelab | /work |

All four initial responses are 308 and their direct destinations return 200. Keep the redirects after release. These are URL-inventory changes, not evidence that every preserved page has unchanged content.

A 157-URL site is far below the sizes Google uses to describe typical advanced crawl-budget management. Your release priorities are useful pages, consistent URLs, genuine modification dates, correct redirects and reliable public access. The redesign does not consume a fixed lifetime allowance of crawls. [Google crawl-budget guidance](https://developers.google.com/crawling/docs/crawl-budget).

The published Panda Patches footer now has the intended nofollow attribute. Google can observe that on recrawl and process it afterward; there is no need to request indexing for every repeated footer instance.

## Performance and remaining external checks

The [browser timing record](evidence/performance-browser.json) contains three cold mobile and three cold desktop observations of the local production homepage, before consent. Mobile used 150ms latency, 1.6Mbps download and 4x CPU slowdown. Mobile LCP observations were 1.220–1.432 seconds, with observed layout-shift sums around 0.023–0.025. Desktop LCP was 0.300–0.356 seconds, but the intermittent layout shift requires correction.

Those timings do not establish public-network performance, Lighthouse scores, field Core Web Vitals or the effect of optional vendor scripts. The follow-up [trace](evidence/layout-shifts.json) uses the maximum session-window CLS calculation for its three desktop runs.

The full Lighthouse run could not connect to the installed browser's debugging endpoint in this tool environment. The fresh npm audit could not reach the registry's bulk-advisory endpoint. These are tooling/connectivity failures, not evidence of either good scores or a discovered vulnerability. Run both checks in a normal release environment before claiming those gates complete.

Pagefind successfully indexed 103 candidate blog/hub pages into an isolated test directory. The normal release build still needs to regenerate the deployed public search assets; this audit did not replace them. The redesign's tested notebook search itself uses server-side filtering and works.

The Next build emits an Edge Runtime deprecation warning. Move the affected route when appropriate; the warning did not prevent this build. Production-disabled demo routing passes the production smoke test.

WebKit's first local production attempt upgraded HTTP asset requests to HTTPS because of the production CSP. The corrected WebKit interaction harness removes only that upgrade directive from local document responses so an HTTP-only local server can be tested. Application security headers were not changed. Retest the published HTTPS candidate to close the hosting/device check.

## Release sequence

1. Fix the confirmed findings in the table, including the translated commercial claims.
2. Retest the specific changed widths, accessibility selectors, assistant focus and cold desktop layout. Rebuild the production candidate after source changes.
3. Complete the normal release pipeline against fresh output, including the deployed search index, npm audit and representative Lighthouse runs.
4. Confirm the marked test enquiry arrived. After deployment, verify one labelled contact test, scheduling consent, assistant operation and public bot access on HTTPS.
5. Record the actual release timestamp and rollback deployment. Recheck production sitemap, canonical URLs, the four redirects and real 404 behavior.

No deployment, push or application-source edits were performed by this audit. Existing staged cleanup was preserved. The earlier prelaunch report's unverified-browser and stale-build findings are superseded only where this report provides fresh evidence; the confirmed issues above remain open.
