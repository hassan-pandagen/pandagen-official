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
