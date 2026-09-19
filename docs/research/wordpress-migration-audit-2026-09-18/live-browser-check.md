# Live WordPress service verification

Checked 18 September 2026, starting **15:05:27 UTC** (20:05:27 Asia/Karachi). Public URL: https://www.pandacodegen.com/services/wordpress-migration. Repository baseline: `0b1b8251f74032e4fecc03bfc501ef17da9a3483`.

Historical capture: a later same-day repository revision changes the project-proof section and placement. These observations, screenshots and pixel measurements are not verification of that revised working tree or a subsequent deployment. See [implementation follow-up](implementation-follow-up.md).

Method: automated Chromium, fresh contexts at 390×900 and 1440×900, default device scale, fonts loaded and initial animation settled. Optional cookies rejected; no form submitted, message sent, booking made or optional analytics consent granted. Captured the original document response as well as hydrated DOM, scrolled the page, clicked the savings and hero buttons. A separate JavaScript-disabled context checked rendered visibility after CSS animations settled. This is a functional browser check, not Lighthouse, CrUX, Googlebot or a full accessibility audit.

## Observed response and technical controls

- HTTP **200**, final URL unchanged; `text/html`, Vercel prerender/cache response.
- Response SHA-256: `6f28e99d0bff672e0233b1800a593220d09f7862b4666f34fefff24375829498`.
- Title: **WordPress Website Migration | PandaCodeGen**.
- Description: **Plan a WordPress migration around content, URLs, metadata, forms, integrations, accessibility, analytics, launch validation, rollback, and ownership.**
- Canonical: the exact public URL above. Robots meta: **index, follow**. No `X-Robots-Tag` exclusion observed.
- One H1. Hero and Next.js content occur in the initial HTML, not only after hydration.
- `/robots.txt` returned 200, allows `/`, excludes `/api/` and `/_next/data/`; this page is not excluded.
- `/sitemap.xml` returned 200 and lists this URL. Its `lastmod` is **2026-08-03**, predating later substantive repository changes.
- Five FAQ schema questions/answers match the FAQ text in the DOM. All answers are rendered; each is inside a button with a plus icon, but none of the five buttons declares `aria-expanded`. The source toggles the icon without toggling the answer. Prefer static question/answer content or a correctly implemented disclosure.
- No page-script exceptions, failed loaded images after the scroll sweep, broken fragment targets, or horizontal overflow observed in either tested viewport. These bounded checks do not establish that every link or all assistive-technology behavior works.
- JavaScript-disabled H1 opacity was 1 after settling; no reveal elements remained at opacity 0. **Do not report the animation as a demonstrated no-JavaScript visibility/indexing failure.**

## Buyer-path observations

| Observation | 390×900 | 1440×900 |
|---|---:|---:|
| Hero primary CTA top, CSS pixels from document top | 790 | 905 |
| First evidence H2 top | 4,454 | 3,023 |
| Main migration-process H2 top | 11,603 | 7,573 |
| Pricing section H2 top | 23,406 | 13,825 |
| Document height after scrolling | 36,629 | 20,919 |
| Rendered body words including navigation/footer/UI | 4,396 | 4,406 |

The H1 reads: “Your WordPress site got slower every year you kept it. Here is what that actually costs, and when a rebuild is worth it.” The screenshot confirms that at 1440×900 the hero action is below the initial viewport. The shorter mobile headline still uses most of the opening screen alongside the paragraph; the CTA begins near its bottom. These are layout observations, not evidence of actual bounce rate or a direct ranking penalty. Word counts include shared UI and differ with responsive navigation; they are not article-only counts.

**Calculate Savings:** clicking caused no modal, URL change or visible result in either viewport. This agrees with the repository: the optional handler is not passed to `PlatformKillerChart`.

**Get Free Consultation:** opened the generic **What would you like help with?** enquiry modal in both tested sessions. It did not open a calendar in this production configuration. The adjacent promise of a 30-minute call and an on-the-spot fixed quote therefore does not describe the immediate next step. No enquiry submission or email-delivery test was performed.

No direct `/work/mycustompatches` case-study link was present in the initial captured state. Source review shows that selecting Matt Conner's review in the testimonial carousel renders a direct case-study link (`StaggerTestimonials.tsx:132`–139; `reviews.ts:134`). Carousel navigation was not tested in this browser run. Project cards themselves lead to external live sites, with a generic `/work` link below them. The recommendation is a prominent permanent link beside the migration facts, rather than relying on the conditional carousel link.

## Capture files

Local reproducibility artifacts are in `audit/wordpress-migration-audit-2026-09-18/` (ignored by Git):

- `live-check.cjs`: read-only browser script.
- `live-results.json`: response headers, SHA, exact observations and times.
- `response.html`, `rendered-390.txt`, `rendered-1440.txt`.
- `wordpress-390.png`, `wordpress-1440.png`, `wordpress-nojs-1440.png`.
- `wordpress-hero-action-390.png`, `wordpress-hero-action-1440.png`.
- `robots.txt`, `sitemap.xml`.

The web search fetch initially returned an older cached version. Findings described as live in the main report use these direct browser captures instead. Current Google-selected canonical/index status, field Core Web Vitals, origin logs, completed-enquiry delivery and query-to-URL attribution were not available from this check.
