# AI SEO page: visual and technical observations

The existing local production build was inspected at desktop 1440 × 1000 and mobile 390 × 844. The rendered content includes the revised $500 floor paragraph and matches the material copy under review. These are local observations, not a public deployment, field Core Web Vitals result or conversion experiment. No enquiry, audit scan or booking was submitted.

## First-screen findings

The typography and colour system are consistent. The opening has a strong visual hierarchy within the heading, but its content order delays the next step: a technical paragraph is followed by an unusually long pricing defence. The main CTA is at document y≈804 on desktop and y≈985 on mobile. The 390 px layout has no detected horizontal overflow.

The first-visit privacy panel occupies part of both viewports. On desktop it partially overlaps the bottom of the hero CTA area and hides the reassurance; on mobile it covers much of the pricing box while the enquiry CTA is already below the first screen. Preserve the privacy choices. Shorten the hero, move detailed pricing lower, and test both first-visit and dismissed-panel states when the page is revised.

| Measurement | Desktop | Mobile |
| --- | ---: | ---: |
| Viewport | 1440 × 1000 | 390 × 844 |
| H1 top | 195 px | 147 px |
| Main enquiry CTA top | 804 px | 985 px |
| First substantive H2 top | 1,039 px | 1,302 px |
| FAQ H2 top | 2,943 px | 4,236 px |
| Service-specific close H2 top | 4,843 px | 7,722 px |
| Global migration CTA H2 top | 5,983 px | 9,558 px |
| Whole document height | 7,349 px | 12,459 px |

Positions describe this build and viewport only. They do not establish a universal fold or prove that readers bounce.

## The complete journey differs from the extracted draft

After the AI SEO close, the page renders all nine other service cards, then a large migration-planning CTA and the normal footer. The supplied review text omits this continuation. The top desktop header also says “Get your migration plan”; the mobile header shortens this to “Get a plan.” These are visible mismatches with an enquiry about AI SEO on an existing site.

Recommended local treatment: retain the AI SEO close, set the route's footer CTA appropriately using the existing `showCta` capability, and show a smaller relevant service selection. Consider a context-appropriate header CTA without silently changing every page. This is a navigation/copy recommendation, not evidence that the global components are technically broken.

The prose invites a free check in the closing section but supplies only enquiry and call buttons there. Add the existing technical-check destination as a text link or adjust the sentence. A generic automated scan should not be labelled a full competitive AI-visibility assessment.

## Enquiry and booking

The main desktop enquiry button opens the shared modal successfully. It shows the corrected heading and “Send your question” submit label, with name and email required. Phone and project details are optional. The form has no dedicated website field; a URL can be included in the details. The visible flow now matches a low-commitment enquiry substantially better than the older migration-form wording.

The local calendar link is unconfigured. The service button retains its discovery namespace, which the global calendar integration catches; source logic supplies an enquiry-form fallback. The separate shared calendar-button component and global integration have inconsistent defaults. Therefore booking is a **configuration and fallback-verification task**, not a proven broken production button. Confirm the deployed setting and behaviour with and without scheduling consent before publishing a booking assurance. No private environment values are retained here.

## Technical observations

- The local route returns HTTP 200. It emits `index, follow` and a self-canonical to `https://www.pandacodegen.com/services/ai-seo`.
- All **27 unique local navigation paths** extracted from the served page returned HTTP 200 to local HEAD checks. External destinations and successful submission/booking were not tested.
- Rendered title: `AI SEO and Answer Engine Optimisation | PandaCodeGen`. The metadata description still contrasts build work with a monthly retainer; this contradicts the optional monthly offer.
- JSON-LD parses and includes site/organisation data plus WebPage, BreadcrumbList and FAQPage. The component's name does not mean that a Service object or current Google rich-result eligibility exists. Adding more schema is lower priority than accurate offer descriptions and visible scope.
- Main copy and FAQ answers are present in the built HTML. There is one page H1. Global consent UI contributes additional H2 elements; that alone is not a heading defect.
- The HTML artifact is roughly 597 KB uncompressed. This is not a transferred-byte measurement or a performance result. No Lighthouse score, field CWV claim or ranking conclusion is inferred from it.
- Sitemap registration and the topical-map destination are present in source. Public crawlability, indexed status, production redirects, live social preview and public calendar configuration remain deployment checks.

## Captures and records

- [Desktop hero](screenshots/desktop-hero.png)
- [Mobile hero](screenshots/mobile-hero.png)
- [Desktop enquiry modal](screenshots/desktop-modal.png)
- [Full desktop capture](screenshots/desktop-full.png)
- [Full mobile capture](screenshots/mobile-full.png)
- [Rendered measurements and metadata](rendered-measurements.json)
- [Local HTTP/link checks](local-link-checks.json)

The full-length captures preserve the page continuation; the first-screen and modal captures support the detailed appearance observations above. Source-level journey findings are separately documented in [buyer-and-implementation.md](buyer-and-implementation.md).
