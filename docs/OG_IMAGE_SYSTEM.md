# PandaCodeGen Open Graph image system

Updated: July 28, 2026

The production social-image endpoint is `/og?path=<route>`. It returns a 1200 × 630 PNG and is referenced by both Open Graph and Twitter/X metadata.

## Visual families

| Family | Routes | Visual treatment |
| --- | --- | --- |
| Migration blueprint | Homepage and service routes | Preserved URL map and inventory/map/launch stages |
| Journal field note | Blog index and all articles | Article number, category, topic terms and evidence principles |
| Case file | Work index and case studies | Real project imagery with ownership, measurement and limitations framing |
| Engagement plan | Pricing, contact and partners | Fit audit, migration plan and delivery sequence |
| Engineering profile | About and founder profiles | Real team portraits and named delivery responsibility |
| Public standard | Policies, manifesto and informational routes | Document-style scope, ownership, evidence and privacy structure |

## Implementation

- `src/app/og/route.tsx`: ImageResponse endpoint and cache headers.
- `src/app/og/art.tsx`: route classification and visual-family components.
- `src/lib/seo/og.ts`: route-specific title, description, label, alt text and versioned image URL.
- `docs/og-previews/`: full-resolution review renders created during visual QA; these are not shipped as public website assets.

## Verification completed

- All 77 blog image endpoints returned HTTP 200, `image/png`, and a non-trivial binary payload.
- Representative service, case-study, pricing, profile and policy cards rendered successfully.
- Production build completed for 115 routes and Pagefind indexed all 77 articles.
- Production-mode request check returned a PNG and the generated article HTML contained the versioned `og-v3-2026-07-28` URL.
