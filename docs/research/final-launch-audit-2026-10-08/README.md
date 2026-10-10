# PandaCodeGen final launch fixes and validation

8 October 2026. All nine confirmed findings from the initial audit have been corrected. The fixed production build, structural SEO, content guards, forms, navigation and detected accessibility issues pass the checks below. No commit, push or deployment was performed. Existing staged cleanup was preserved.

Performance is improved, but the local mobile homepage observation remains below 90: **75 mobile, 93 desktop** (latest 9 October follow-up). The production HTTPS candidate still needs its own performance and device check before unconditional launch sign-off. The full dependency audit also retains one unpatched advisory in development-only lint tooling; the installed production dependency audit is clean.

The [initial comprehensive audit](INITIAL-AUDIT.md) retains the 506-check all-page baseline, old/new copy comparison, company-facts review, 92-post and 11-hub coverage, keyword ownership map and URL-continuity analysis. [Initial summary](initial-summary.json) preserves its pre-fix status. This report supersedes its open-bug and unavailable-tool statements.

## Confirmed findings corrected

| Finding | Change and verification |
| --- | --- |
| WooCommerce heading clipped at 320px | Adjusted the shared service heading scale below 360px. Chromium and WebKit checks at 320px pass; [viewport screenshot](evidence/fixes/woocommerce-320.png). This also exercises the CSS width used by 1280px at 400% page zoom, without claiming a physical-device zoom test. |
| French/German universal Shopify speed claims | Replaced the claims with scoped store-building and improvement language on both home and service surfaces. Added both dictionaries and specific regression patterns to the public-claims gate. |
| French/German hosting and price contradictions | Localized the owner-confirmed hosting arrangement, distinguished custom-build starting tiers from individually scoped WordPress work, and clarified fixed scope, written approval for additions and the agreed payment schedule. |
| Intermittent desktop headline shift | Matched the Anton fallback's condensed text advance and vertical metrics, and used Anton's actual 400 weight. With Anton deliberately delayed by one second, the headline remains two lines before and after loading; [trace](evidence/fixes/delayed-font-trace.log). |
| Misleading review-link and reel accessible names | Review links now describe the client project they open. Reel controls retain the visible label and append the project name for screen readers. The final axe scans report no violations. |
| Services caption link relied on color | Added a persistent underline. |
| Low-contrast mobile platform labels | Removed the opacity that washed out the small labels. The portability page passes the final mobile and desktop axe scans. |
| Assistant closed with focus on BODY | Preserved the opener and added a launcher fallback. Safari clicks explicitly remember the clicked button. Closing after a conversation returns focus correctly in both tested engines. |
| Cookie banner incorrectly said chat was blocked | Removed chat from the optional-consent sentence. Analytics, advertising and scheduling remain named; first-party chat behavior agrees with the Cookie Policy. |

The reel's new hidden labels initially exposed a Safari overflow during the broader sweep. Positioning each thumbnail button contains its label; the final work-page checks pass at 320px, 390px and 1440px in WebKit.

## Additional release corrections

- Patched sharp from 0.35.4 to 0.35.5 and source-map-js from 1.2.1 to 1.2.2. Aligned Next's ESLint configuration and bundle analyzer to 16.3.8. The framework itself remains 16.3.8.
- Fixed the explicit square dimensions and cropping of the founder CTA avatars. Lighthouse's aspect-ratio finding is cleared.
- Kept the decorative shader off touch devices and software renderers, using the existing CSS paper treatment.
- Replaced the hero's runtime SVG turbulence filter with a 19,484-byte lossless texture generated from the same self-authored SVG. Regenerate with node scripts/generate-hero-grain.mjs.
- Replaced decorative feature-chip motion with CSS and server rendering. Forms and audit controls retain their own reduced-motion handling. The hover effect and reduced-motion behavior were exercised.
- Removed the global animation provider. The full menu now mounts on first opening and remains mounted for its closing transition; hidden menu links prefetch only after opening.
- Recorded the substantive commercial review separately as 8 October; retained the broader company-facts review date. Reconciled the affected reference schema and sitemap dates, including changed localized pages.
- Shortened the About search description around its actual service and delivery scope.
- Regenerated the deployed public search assets from the final isolated build.

## Final validation

| Check | Result |
| --- | --- |
| Production build | Passed; 169 static pages generated in .next-audit |
| Typecheck, full repository lint and tests | Passed; all 80 security, form and catalog tests passed. The final build typechecked the later UI changes, and targeted lint passed for the later edited components and texture generator. |
| Structural SEO | All 157 sitemap URLs pass; zero failures and warnings. [Log](evidence/fixes/seo.log) |
| Release smoke | Passed against the final production candidate. [Log](evidence/fixes/smoke.log) |
| Source content gates | Claims, date consistency, spec freshness, glossary and retired-claim checks pass. Existing modification-date advisories remain informational. |
| Built content | All 92 posts and 11 hubs pass their hub, service and sibling link guard. All 42 declared metrics match their published/withdrawn states. [Log](evidence/fixes/built-guards.log) |
| Search assets | Pagefind indexed 103 blog/hub pages into public/_pagefind. [Log](evidence/fixes/pagefind.log) |
| Geometry after corrections | 144 template/engine/viewport checks pass with no heading clipping, document overflow, broken loaded images or page JavaScript errors. Chromium: 320, 390, 768, 1024, 1440 and 1920px; WebKit: 320, 390 and 1440px. Two extra records are long-screenshot tool limits, not failed geometry checks. [Evidence](evidence/fixes/template-layouts.json) |
| Last menu-change recheck | 36 further checks on home, work, WooCommerce and portability pass across the same widths and engines. [Evidence](evidence/fixes/last-change-layouts.json) |
| Interactive workflows | All 28 checks pass: consent, navigation, quote errors/success/reopen, contact validation/reset, assistant persistence/focus, search and audit-failure fallback in both engines at mobile and desktop widths. Delivery is mocked in these repeated tests. |
| Accessibility | All 28 final axe scans pass without detected violations. Manual-review items remain; this is not a WCAG certification. [Evidence](evidence/fixes/controls-and-accessibility.json) |
| Actual enquiry delivery | Both clearly marked QA enquiries are shown as delivered by Resend. The initially stalled browser request did also send; no additional real enquiries were sent during the fix regression. This is provider delivery evidence, not a manual check of inbox placement. [Receipts](evidence/fixes/email-receipts.json) |

The initial all-page coverage remains separately documented; these follow-up template checks do not pretend that every external source in all 92 posts was independently reverified again. The broader fix sweep covered another 302 page/viewport cases and caught the Safari label issue before the final passing rechecks.

## Performance observations and remaining limits

These are single completed Lighthouse observations of the earlier 8 October fix candidate, before the portfolio/CMS/assistant follow-up and before optional consent. The 9 October section below records the newer candidate. Mobile uses Lighthouse's simulated mobile profile; desktop uses 1440px, 40ms RTT, 10Mbps and 1x CPU. They are not three-run acceptance medians or field Core Web Vitals.

| Metric | Mobile | Desktop |
| --- | --- | --- |
| Performance | 76 | 93 |
| Accessibility / best practices / SEO | 100 / 100 / 100 | 100 / 100 / 100 |
| First contentful paint | 1.4s | 0.4s |
| Largest contentful paint | 4.3s | 1.0s |
| Total blocking time | 380ms | 180ms |
| Cumulative layout shift | 0 | 0.005 |

The [mobile report](evidence/fixes/lighthouse-mobile.json) and [desktop report](evidence/fixes/lighthouse-desktop.json) are authoritative for the exact observed values. The first completed mobile observation was 47, with 3,200ms blocking time; the later changes reduced startup work substantially. The headline shift is corrected, but **the mobile 90+ performance target has not been met in this local observation**. Validate representative pages on a production HTTPS preview and optimize any remaining font, transfer and rendering delays before recording a 90+ acceptance result. Do not reinterpret a good desktop observation as a mobile pass.

The [production dependency audit](evidence/fixes/dependencies-production.json) reports zero known advisories. The [full audit](evidence/fixes/dependencies-all.json) reports five high-severity package entries, all from the single [unpatched braces advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) through ESLint's fast-glob/micromatch chain. braces 3.0.3 remains the latest published version at this check. These are development-tool dependencies; the application does not import them to process public request patterns. This exposure assessment follows the installed dependency paths, not an assertion that all build tooling is universally safe. A forced downgrade of the framework tooling was not applied. The other reviewed fixes are documented in the [sharp advisory](https://github.com/advisories/GHSA-wq5f-xc86-pv6w) and [source-map-js advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q).

Physical iPhone/Android behavior, software keyboards, real assistive technology and deployed HTTPS hosting still need their release checks. Local WebKit responses strip only upgrade-insecure-requests in the harness so the HTTP-only test server can load assets; application security headers are unchanged. The build's Edge Runtime deprecation warning remains nonblocking.

The production candidate is available locally on port 3003. Restart the developer-owned dev server when convenient to load patched native dependencies; its process was preserved. Before publishing, verify the HTTPS candidate's forms, optional-consent scheduling, assistant, public bot access, sitemap, canonical URLs, four legacy redirects and real 404 behavior. Record the release and rollback deployment when actually publishing.

## Portfolio, CMS and assistant follow-up — 9 October 2026

The homepage now rotates every 2.4 seconds through all 11 current projects. Previous/next and pause/play controls remain usable at narrow widths, hover and keyboard focus pause rotation, and reduced-motion preferences disable automatic rotation unless the visitor starts it. Founder-affiliated work, portfolio concepts, previews and in-progress projects retain their labels. A Step Above Medical uses an explicit placeholder rather than presenting its old public website as our delivered rebuild.

Homepage portfolio links now consistently open internal project records. Saforne has a new preview record with a separate external preview link and no sales or performance claims. The Ladies 4 Jesus hero now includes its existing public-homepage screenshot. Mobile portfolio thumbnails are visible without requiring hover; [320px example](evidence/portfolio-followup/portfolio-320.png).

The service is now **CMS Website Development & Integration** at /services/cms-development. The old /services/sanity-development URL returns a verified permanent 308 redirect on both development and production-candidate servers. Navigation, footer, supporting blog links, service metadata, OG copy, sitemap, machine-readable service links and assistant retrieval use the current URL. Sanity remains the usual editor for custom Next.js builds; WordPress improvements remain a separate option with scoped pricing. The machine-readable project list also includes Saforne and the in-progress medical project.

The assistant's inline homepage prompt, launcher and panel now use the site's charcoal, paper and orange palette, compact square controls and display typography, with a professional conversation icon. Privacy disclosures, source links, live-chat controls, conversation persistence and focus restoration remain implemented; [mobile welcome panel](evidence/portfolio-followup/assistant-390.png).

The AI SEO hero uses the agency's genuine Search Console Generative AI export. The branded chart is explicitly labelled as a recreation, shows all 92 daily readings from **12 June–11 September 2026**, and includes declines. Its **9,843 impressions** are verified against the original September 13 export: all 92 daily values match exactly. Daily CSV data and Google's report definition are linked from the page. These are the agency's own impressions, not visits, revenue, ChatGPT citations, independent client outcomes or evidence of causation. [Source verification](evidence/portfolio-followup/proof-verification.json), [CMS preview](evidence/portfolio-followup/cms-desktop.png), [AI SEO preview](evidence/portfolio-followup/ai-seo-desktop.png).

| Check | Result |
| --- | --- |
| Required check | Type check, full lint, all 80 automated tests, public-claims gate and date checks pass. Existing five commit-date warnings remain informational. |
| Production build and search index | Next.js 16.3.8 build passes. Pagefind regenerated from this isolated build: 103 blog and hub pages. |
| Structural SEO and release smoke | 158 sitemap URLs, zero structural failures or warnings; release smoke passes. All 92 posts retain their required hub, money-page and sibling links. |
| Content guards | Metrics, links, encoding, spec freshness, glossary and retired-claims checks pass. |
| Changed-template review | 45 page/browser/width cases reviewed. This caught 320px clipping inside the homepage's overflow-hidden hero, which a document-overflow summary alone did not reveal. |
| Corrected homepage | Ten final viewport cases pass: Chromium 320, 360, 390, 768, 1024, 1440 and 1920px; WebKit 320, 390 and 1440px. All 11 slides and controls remain inside the viewport. |
| Interaction and accessibility | 28 workflow checks and 28 additional axe scans pass. Changed-template and final-homepage scans report no detected axe violations. Repeated enquiries and assistant messages were mocked. This is not a physical-device or WCAG certification. |

[Follow-up summary](evidence/portfolio-followup/summary.json), [corrected homepage geometry](evidence/portfolio-followup/homepage-layouts.json), [workflow evidence](evidence/portfolio-followup/controls-and-accessibility.json).

The latest single local Lighthouse observations are **75 mobile and 93 desktop**, with accessibility, best practices and SEO at 100 on both profiles. [Mobile report](evidence/portfolio-followup/lighthouse-mobile.json), [desktop report](evidence/portfolio-followup/lighthouse-desktop.json). These supersede the earlier 76-mobile observation for this candidate; the mobile 90+ performance target remains unmet. A production HTTPS preview, physical devices and release/rollback verification remain required before unconditional launch sign-off. The homepage serves 200 on port 3001; no 404 was reproduced in the final checks. No commit, push or deployment was performed.


## Emblematic screenshot and 404 follow-up — 9 October 2026

The Squarespace service hero now shows Emblematic Studio's real homepage screenshot (embroidered mountain patch), replacing the enquiry-page screenshot. Its description and image caption identify the homepage.

The 404 page now uses the shared condensed display font, paper/charcoal/orange palette, rectangular buttons, site navigation and footer. It preserves a real HTTP 404 response and noindex metadata. The Return home action works. The production build and changed-file lint pass. Twelve page/engine/viewport checks on Squarespace and a genuine missing URL pass in Chromium and WebKit at 320, 390 and 1440px, with no detected clipping or axe violations. These changes do not establish a new homepage performance observation.

[Verification](evidence/emblematic-404/results.json), [desktop 404](evidence/emblematic-404/1440-404.png), [mobile 404](evidence/emblematic-404/320-404.png), [Emblematic homepage on Squarespace](evidence/emblematic-404/1440-squarespace.png).

CMS remains one service page at /services/cms-development. The permanent 308 only forwards the old /services/sanity-development address to that page; it does not create a duplicate service. No redirect would have been needed for a label-only change with the old address retained.


## Assistant, 404 and ownership polish — 9 October 2026

The assistant now welcomes visitors with “Something in mind? Let's talk it through.” Three task cards cover building a website, improving an existing site and understanding pricing. Each sends a specific question; free-text entry remains available. A visible route to the founders complements the existing live-chat availability logic. The homepage uses the same starting actions and a shorter input placeholder. The design follows [Microsoft's first-interaction guidance](https://learn.microsoft.com/en-us/azure/bot-service/bot-service-design-first-interaction?view=azure-bot-service-4.0): explain the available tasks and offer choices alongside free-form input.

The 404 is now a compact page with a small error badge, a clear heading, four destination cards, Return home, an assistant opener and a minimal footer. Footer spacing reserves room for the fixed assistant and cookie controls. The real HTTP 404 and noindex metadata remain verified.

The ownership/export comparison now has a stronger heading, a project-handover callout, dark column headers, an accent header for our build, status icons and badges, sticky desktop headers and labelled mobile cards. External source links have 32px targets. The underlying platform details, ownership statement, status meanings, source links and licence qualifications still come from the existing shared data.

Production build, changed-file lint and public-claims checks pass. The 104-case comparison/assistant runner passes across ten service pages in Chromium at 320, 390, 768, 1024 and 1440px and WebKit at 320, 390 and 1440px. The final 404/Squarespace recheck passes all 12 cases. The 28 interaction regressions and 28 additional axe scans pass; actual delivery was mocked. Structural SEO remains clean across 158 URLs. These are emulated browser checks, not physical-device or WCAG certification. No fresh performance score is claimed and nothing was deployed.

[Summary](evidence/assistant-404-ownership/summary.json), [runner record](evidence/assistant-404-ownership/comparison-and-assistant-checks.log), [final 404 checks](evidence/assistant-404-ownership/final-404-results.json), [workflow evidence](evidence/assistant-404-ownership/final-interactions.json), [assistant preview](evidence/assistant-404-ownership/390-assistant.png), [cleaner 404](evidence/assistant-404-ownership/1440-404.png), [desktop comparison](evidence/assistant-404-ownership/1440-ownership-table.png), [mobile comparison](evidence/assistant-404-ownership/390-ownership-table.png).


## Larger 404 and plain-English service ownership — 9 October 2026

This follow-up supersedes the small error badge and four destination cards in the previous 404 iteration. The 404 now has a large error number, “This page isn't on our website” copy and simple editorial destination rows. It retains the paper/charcoal/orange theme, Return home, the assistant opener, a compact footer, a real HTTP 404 and noindex. The changed preview is also confirmed on port 3001.

[External search-intent research and the service query map](../plain-english-ownership-2026-10-09/README.md) explain the plain-English approach. Search Console and PandaCodeGen traffic data were not used to discover these questions. The research is qualitative; it does not claim measured US volumes, difficulty or citation outcomes.

All twelve service pages now have their own ownership introduction and two sourced buyer questions. CMS and backend development gained the previously missing handover section. Website assets is a prominent heading and a larger desktop table header; the accepted comparison style remains. Table details use ordinary language for website files, content downloads, editable lists and the website address. The source quotations, licence qualifications, export status meanings and company handover canon remain. The paid Webflow Workspace condition and Sanity's inaccessible-file limitation are made explicit.

The same 24 answers are visible on the pages, included in each page's existing FAQ schema and available to Panda Assistant. Its source links use stable answer anchors. Accurate FAQ markup is maintained for consistency; special AI markup and guaranteed citations are not claimed.

Verification on the final isolated production candidate:

- Production build, type check, lint, all 80 existing tests, public-claim and date checks pass.
- Source guards for specifications, glossary and retired claims pass. Built metrics, hub/link and Unicode guards pass; the existing reported Unicode occurrences remain.
- All **78 responsive cases and 78 axe scans** pass: twelve services and a genuine 404 in Chromium at 320, 390, 768 and 1440px, and WebKit at 390 and 1440px. No clipping, horizontal overflow or axe violations were detected. Visible ownership answers match FAQ schema in every service case. The 404 home navigation and assistant opener also work.
- The offline assistant retrieval check passes all **24 exact questions**, with matching answer text and the expected source anchor. No topic pins are unresolved. This checks retrieval consistency, not a live model's answer quality.
- Structural SEO passes across **158 sitemap URLs**, with no failures or warnings. Release smoke passes.
- The comparison guide's modified date is 9 October across its metadata, schema, visible date and sitemap source. Its shared content changed meaningfully; the platform baseline source-check date remains 8 October. Pagefind was regenerated for 103 pages.
- The whitespace check passes. No real enquiry or assistant messages were sent in these regressions; browser delivery was mocked.

[Summary](evidence/plain-english-ownership/summary.json), [responsive/schema/accessibility results](evidence/plain-english-ownership/responsive-results.json), [assistant retrieval](evidence/plain-english-ownership/assistant-knowledge-results.json), [build](evidence/plain-english-ownership/build.log), [required checks](evidence/plain-english-ownership/check.log), [SEO](evidence/plain-english-ownership/seo.log), [desktop 404](evidence/plain-english-ownership/1440-404.png), [mobile 404](evidence/plain-english-ownership/390-404.png), [desktop website assets](evidence/plain-english-ownership/1440-ownership-assets.png), [mobile website assets](evidence/plain-english-ownership/390-ownership-assets.png).

**Not checked:** measured US keyword demand, future AI citations, production HTTPS deployment, physical devices, actual provider delivery, live model answer quality or a new three-run Lighthouse acceptance. The earlier 75-mobile performance observation remains the latest recorded performance result; this revision does not clear the 90+ launch target. Nothing was committed, pushed or deployed.


## Before and after copy audit 9 October 2026

The [copy audit](../copy-before-after-audit-2026-10-09/README.md) captured 25 current core pages and scanned the titles/openings of 92 articles, with pre-switch source comparisons and external agency benchmarks. It recommends keeping the redesign and resolving four copy issues before content sign-off:

- The homepage FAQ still renders the withdrawn MyCustomPatches “200-plus pages” figure. The metric guard's literal stored value “200+” did not catch that wording.
- The homepage hosting/account FAQ needs the owner-confirmed included-hosting option and the agency-account-to-client-account arrangement stated accurately.
- The monthly AI SEO page displays build-specific editor-training and Starter-package handover text.
- The WordPress security article's exclusive headline is stronger than its balanced body and the official layered-control guidance.

The prior passing test and structural-SEO results remain valid within their tested scope. They do not clear these semantic copy findings. The new report includes smaller reader-path and heading changes, coverage limits and proposed wording. No website copy was changed as part of this audit.
