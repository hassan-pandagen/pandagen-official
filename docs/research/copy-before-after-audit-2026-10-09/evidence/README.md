# Evidence index and current scope

9 October 2026. Read this index before treating a captured finding as a current defect.

## Original audit snapshots

The following files describe the site **before** the approved copy corrections and later service-intent work. Their original findings remain preserved as evidence of what was inspected; they are not current open-bug lists:

- `summary.json`, including its original `mustResolve` and `websiteCopyChanged: false` fields.
- `visible-copy-findings.json` and `withdrawn-copy-findings.json`.
- `current-core-all.json`, `before-after-core.json` and `article-comparison.json`.
- `current-home-desktop.png` and `current-services-desktop.png`.
- `editorial-review.json`: editorial assessment, not an AI-authorship detector or independent search-performance measurement.

The dated follow-ups in [the main audit](../README.md) explain the applied corrections. [Current status](CURRENT-STATUS.json) records their scope and remaining limits without overwriting the original snapshots.

## Keyword and source evidence

- `keyword-batch-owner-2026-10-09.json` and `keyword-batch-owner-2026-10-09-02.json`: owner-pasted US results, 21 unique seeds, 13 numeric estimates and eight no-data responses. Updates range from May to October; these are not a common-period October demand forecast.
- `service-keyword-direct-2026-10-09.json`: additional requests received access-denied responses. This file contains **no successful new volume measurements**.
- `service-intent-before-after-2026-10-09.json`: source headings, leads and metadata immediately before/after the service-intent pass. Later host-migration confirmation is documented separately in the main audit.
- `keyword-target-before-after-2026-10-12.json`: eighteen current candidate destinations, selected historical source excerpts and all twenty-five buyer/search-foundation questions verified in initial HTML and Question schema. This is copy-target coverage, not a ranking report. The accompanying [keyword target audit](../keyword-target-audit-2026-10-12.md) distinguishes new destinations, broader offers, promoted wording and retained intent.

No-data results are not zero demand. Advertiser competition is not organic difficulty. Related phrases are not summed as independent audiences, and Google searches about AI are not counts of AI-product prompts.

## Copied verification results

`verification/` retains actual runner output copied from the local working artifacts:

- `service-intent-responsive.json`: 78 passing cases from the service-intent phase, across twelve services plus 404 in Chromium/WebKit. This predates the later host-migration FAQ and final article corrections; those received their own follow-up checks.
- `service-index.json`: twelve distinct service destinations verified at mobile and desktop widths.
- `assistant-buyer-questions.json`: fourteen buyer questions retrieved with the correct service and exact answer after host-migration confirmation.
- `article-layouts.json`: the final two corrected articles at 390px/1440px on the isolated production candidate.

These results are measured local/emulated checks. They do not establish field performance, physical-device behavior, ranking uplift, conversion improvement or a live model's answer quality. A new independent review should inspect current source and fresh build output, not simply accept these files' pass flags.

## Release limitations

The latest recorded homepage performance observation remains **75 mobile / 93 desktop**, from the prior launch-audit follow-up. It is not a current three-run acceptance median. A production HTTPS preview and physical iPhone/Android check remain required for unconditional sign-off. No push or deployment was performed by this audit work.

The CMS-choice guide, cost/timeline opening polish and additional keyword research are follow-up content work, rather than prerequisites for the corrected service pages to exist. The remaining technical release check should be completed before calling the full redesign launch cleared.

## Sanity-only preview correction - 12 October

- `sanity-only-previews-html-2026-10-12.json`: fifteen service destinations retain enlargement controls and original copy, links, titles and schema; only Sanity images receive numbered markers.
- `sanity-only-previews-browser-2026-10-12.json`: forty-five Chromium/WebKit cases across the service index and fourteen detail pages, with ordinary previews unannotated and enlargement/zoom controls retained.
- `sanity-only-previews-regression-2026-10-12.json`: eight blog/case-study cases verifying all seven annotated Sanity editor assets.

These results supersede the broader service annotations recorded in `service-preview-expansion-*` for the owner's latest presentation preference. Browser checks used simulated APIs and local HTTP; they do not establish physical-device or deployed HTTPS behavior.

## Service ownership and Panda Patches proof - 13 October

- `service-ownership-and-panda-proof-browser-2026-10-13.json`: forty-two responsive ownership-layout checks across all fourteen service detail pages, including paired project screenshots and Sanity preview controls.
- `service-ownership-and-panda-proof-chart-browser-2026-10-13.json`: six responsive chart checks proving the full displayed timeline remains inside the CSS crop and the original screenshot opens/zooms without annotations.
- `service-ownership-and-panda-proof-final-html-2026-10-13.json`: fourteen final HTML comparisons retain titles and ownership wording, with other content/schema changes limited to the approved AI proof replacement.

The Panda Patches screenshot is an owner-provided, founder-affiliated Search Console record. Its 77.5k total is rounded. No underlying daily dataset was provided for this screenshot. Earlier `google-ai-impressions.*` assets concern PandaCodeGen's different property and period; they are retained as historical evidence and are no longer used by the AI SEO service previews.

## Shared italic heading accents - 13 October

- `heading-italic-consistency-html-2026-10-13.json`: 162 built HTML comparisons retain copy, titles, links and schema.
- `heading-italic-consistency-screen-2026-10-13.json`: 320 static style cases across 160 sitemap destinations, checking accent contrast and clipping at 320/1440px.
- `heading-italic-consistency-browser-2026-10-13.json`: 75 JavaScript-enabled Chromium/WebKit cases across 25 destinations, verifying the Georgia-italic accent, weight/case handling, responsive bounds and scoped accessibility.

These are local and emulated-browser results, with simulated APIs and a local-HTTP CSP adjustment for WebKit. They do not constitute physical-device or production performance verification.

## PT Serif typography - 13 October

- `pt-serif-typography-html-2026-10-13.json`: 162 HTML comparisons retain copy, titles, links and schema.
- `pt-serif-typography-screen-2026-10-13.json`: 320 whole-site style cases check font roles, heading clipping and emphasis contrast.
- `pt-serif-typography-browser-2026-10-13.json`: 108 Chromium/WebKit cases verify PT Serif reading/italic text, Anton display headings, Inter interface text and responsive geometry.
- `pt-serif-typography-interface-loading-2026-10-13.json`: four interface checks plus six local cold-cache checks confirm same-origin font loading and observed layout-shift sums below 0.1.

These supersede earlier Georgia-italic font observations. Local browser checks do not establish physical-device or deployed HTTPS performance.

## Concrete workflow automation - 13 October

- `workflow-automation-keywords-2026-10-13.json`: eight anonymous US keyword requests, six estimates and two no-data responses; preserves cache dates and raw provider fields.
- `workflow-automation-browser-2026-10-13.json`: ten responsive homepage/custom-engineering cases with question, workflow, accessibility and schema checks.
- `workflow-automation-html-2026-10-13.json`: metadata, destinations and content outside the approved sections retained on both affected pages.
- `workflow-automation-knowledge-2026-10-13.json`: all five new service questions are present in the assistant retrieval source with the same answers.
