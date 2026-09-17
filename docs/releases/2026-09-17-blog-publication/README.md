# Article publication, 17 September 2026

Approved publication of the refreshed DIY cost article and the new AI-built website
checklist. Existing article commits: `d52057d` (DIY), `dc5b01f` (checklist).

## Published content in this release

- `/blog/is-it-cheaper-to-build-your-own-website`: preserves the original URL and
  publication date; compares scope, cash costs and owner time with a labelled
  illustrative one/three-year calculation. Links to the checklist for testing.
- `/blog/ai-built-website-checklist`: eight practical checks, seven vendors' documented
  capabilities, five visible FAQs, dated source limits and founder-affiliation disclosure.
  Registered in the blog, sitemap, custom-development hub and related-post system.
- `/website-check-record.md`: ungated downloadable worksheet. Updated to match the
  recipient, customer confirmation, payment method/totals/redirect and renewal checks.
- Eight vendor-capability records added to the spec freshness register; all 51 existing
  records preserved. These records remind maintainers to reverify the cited capabilities;
  the guard does not independently inspect vendor sites.

## Release dependency fixes

The required npm advisory check found ten existing vulnerabilities (six high, four
moderate). Compatible updates removed them. PostCSS's direct dependency and override
are now `8.5.23`; Sharp's override is `0.35.4`. A targeted lock refresh updates affected
transitive packages. Next remains `16.3.3`, React/React DOM `19.2.4`, ESLint `9.39.2`.
`npm run audit:dependencies` reports **zero vulnerabilities** after installation.

## Verification of the final local build

- `npm run verify`: passed, including TypeScript, ESLint, 63 existing tests, claims/date
  checks, the production build and all six content/evidence guards.
- Production build: 157 generated routes; Pagefind indexes 99 blog/topic pages.
- `npm run smoke:release -- http://localhost:3002`: passed.
- Structural SEO crawl: 146 sitemap URLs, zero failures and zero warnings.
- Chromium 153 via Playwright 1.63: both articles at widths 390, 768 and 1440. No page
  overflow or page errors; one H1 and one BreadcrumbList each; every contents target
  exists. Representative contents clicks land 100px below the top at all widths.
- FAQ answers are visible without interaction (five checklist, seven DIY). Table
  regions accept keyboard focus. The worksheet download succeeds at all three widths.
- Results: [browser-results.json](browser-results.json). Local screenshots and execution
  logs are under ignored `audit/article-publication-2026-09-17/`.
- Added-diff credential-pattern scan and `git diff --check` passed.

Scope limits: Chromium and basic keyboard/layout checks, not a full accessibility or
security assessment. No real enquiry, payment or customer data was used. Passing the
structural checks does not promise indexing, rankings or conversions.

## Deployment boundary

At **2026-09-17 18:33:51 UTC**, before this push, the checklist and worksheet returned
404; the public DIY article still used its old `(2026)` title. The sitemap and topic hub
did not link to the checklist. The timestamped response status/title/hash capture is
preserved locally as `audit/article-publication-2026-09-17/before-push-live.json`.

The push and first verified live response will be recorded separately. Treat subsequent
performance as an observational before/after of the full deployed bundle, not proof of
an individual wording change. Unrelated uncommitted outreach/profile research is not
part of this release.
