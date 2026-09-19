# Positioning and company-fact consistency inventory

Read-only source review on September 15, 2026. This inventory checks the current working tree, not production deployment. It distinguishes contradictory company facts from pages that legitimately serve a narrower topic. No application files or external profiles were changed. The homepage offer is now custom business websites and online stores, including first builds and replacement sites; migration controls apply when an existing site moves.

## Priority 1: resolve facts that currently give different answers

| Surface and source location | Current inconsistency | Recommended source of truth |
|---|---|---|
| `src/app/ai-info/page.tsx:69`, `:186` | FAQ and introduction still describe migrations for revenue-generating WordPress/Webflow/GoHighLevel sites as the core business, with custom/commerce/application work available only when a migration requires it. The same page's fact table imports the broader primary offer. | A short company/service description based on `SERVICES` in `src/data/company-facts.ts:71`. These are company-wide descriptions, so the narrower limitation is stale. |
| `src/app/ai-info/page.tsx:77` | The cost FAQ says Starter is a site “we build and update for you,” while the shared facts and nearby pricing table include the client's content editor. It also puts any shop at $5,000. This same FAQ array feeds visible answers and FAQ schema. | Shared Starter editing scope and small-store eligibility. Correct the source FAQ once so visible and structured answers stay aligned. |
| `src/app/ai-info/page.tsx:164`, `:286`, `:294` | Three independently authored descriptions still classify any shop/store as Scale. | Shared commercial tier definitions, including simple catalogues from Starter and complexity-based Scale. |
| `src/data/llms-txt.ts:35`, `:55` | The opening now mentions custom websites and stores, but its company-facts bullet still says the primary offer is migrations. The tier bullet still puts any shop at Scale. | Import a shared short offer and commercial facts; the file currently generates guide/evidence sections but keeps company prose independently authored. |
| `src/app/page.tsx:93` | Homepage migration-cost FAQ says an online store is from $5,000, contradicting the accepted small-store starting price. | Tier rules plus a migration-specific explanation of scope. The question can remain about migration; its general store minimum should be corrected. |
| `src/components/sections/TierQuiz.tsx:21`, `:44`, `:74`, `:89` | Starter says “Nothing to buy”; any answer that the business sells products assigns `scale`; the highest answer wins. This actively recommends a $5,000 minimum even for a simple catalogue. | Shared tier eligibility, with catalogue size/complexity questions sufficient to distinguish small commerce from complex commerce. A text-only fix would leave the wrong recommendation logic. |
| `src/app/pricing/PricingPageClient.tsx:247` | Scale card still includes any shop. Starter copy does not identify the accepted simple-store option. | Shared tier boundaries, rendered with pricing-page detail. |
| `src/data/service-faqs.ts:174` | A full custom store is stated as from $5,000, while commerce FAQ `:130` and WooCommerce FAQ `:276` both explicitly offer Starter stores at $1,500. | Distinguish complex/full scope when genuinely intended; remove a universal store floor. Keep platform-specific product-count scopes separate if they describe real different delivery work. |

`src/data/company-facts.ts` already contains the accepted broader offer at line 71, Starter content editor at line 96, simple-store exception at line 98, and optional ongoing work at line 104. The task is principally to connect or reconcile its consumers, not invent another version of the business.

## Priority 2: align the company-wide description and enquiry path

| Surface | Source locations | What needs review |
|---|---|---|
| Global defaults and Organization description | `src/app/layout.tsx:51`, `:54`, `:142` | Default title/description and Organization description still frame the whole company around migration. The homepage supplies broader own metadata, but shared defaults and the emitted organization entity remain narrow. |
| Homepage structured data | `src/app/page.tsx:133` | Organization description still says the company rebuilds slow named-platform sites. Align the company identity with the broader offer while keeping page-specific service facts where useful. |
| Reference metadata and quotable company description | `src/app/ai-info/page.tsx:15`, `:16`, `:21`, `:29`, `:101`, `:162` | Titles, descriptions and the independently authored company-description array lag the imported facts. The line about moving off Shopify also needs to allow retaining the Shopify backend. |
| Share-image text | `src/lib/seo/og.ts:21`, `:23`; `src/app/opengraph-image.tsx:4`, `:24` | Home share-image copy remains migration-only even though homepage title/description have broadened. These are separate sources from normal metadata. |
| Footer company introduction and contact description | `src/components/layout/Footer.tsx:68`, `:164` | The shared footer still introduces migration planning and asks visitors to describe a current site/migration goal. A new-site enquiry needs equally clear inclusion. |
| Hero badge | `src/components/sections/Hero.tsx:42` | “Website migrations” remains the opening category label despite the broader headline. |
| Contact metadata and schema | `src/app/contact/page.tsx:7`, `:11`, `:19`; `src/app/contact/ContactPageClient.tsx:44` | The company-wide contact route still calls itself “Request a Website Migration Plan.” Match the actual general enquiry form. |
| Price-page enquiry and framing | `src/app/pricing/page.tsx:8`; `src/app/pricing/PricingPageClient.tsx:73`, `:183`, `:225`, `:278` | Migration-only title/buttons and unqualified “no retainer” wording need alignment. “No compulsory retainer for a build” remains true; “we offer no retainer” does not. |

This is not a recommendation to paste the same paragraph everywhere. The repeated **facts** should match; the visible wording should still suit the page, available space and next step. Proposed shared fields would include a short company description, primary service summary, start prices, eligibility, editing/ownership terms, optional ongoing services and general enquiry label. Schema and social drafts should use those facts without turning every surface into a keyword list.

## Already shared, and worth preserving

- The `/ai-info` fact table combines `COMPANY`, `SERVICES`, `COMMERCIAL` and `GOVERNANCE` at `src/app/ai-info/page.tsx:44`. This part receives the changed primary offer and prices; its surrounding hand-written FAQ, introduction and pricing rows do not.
- The reference child pages already import the appropriate shared arrays: migration services (`src/app/ai-info/migration-services/page.tsx:7`), pricing (`src/app/ai-info/pricing-and-guarantees/page.tsx:7`), company/team and case studies. Their factual tables are a useful existing pattern.
- Blog topic pages use `OFFER_LINE` from company facts at `src/app/blog/topic/[topic]/page.tsx:180`. That sentence is broad and does not say the business only migrates sites. It does not need a migration-to-new-build rewrite merely for consistency.
- `ORGANIZATION_PROFILES` at `src/data/company-facts.ts:226` already centralizes the organization profile URLs. Updating those URLs is different from editing the remote profile biographies; this review did not fetch or verify current remote text.
- The `/llms.txt` route at `src/app/llms.txt/route.ts` already uses `buildLlmsTxt()`. Fix its data module rather than editing a static public file that is no longer the served source.

The `OFFER_LINE` comment says it is derived from commercial facts, but its value at `company-facts.ts:120` is an independently authored string. The intended link is editorial, not a computed dependency. If frequently changed prices are included in shared promotional lines, generate those numeric values from structured commercial data rather than expecting comments to prevent drift.

## Blogs, hubs and clusters: preserve the reader's specific task

The SEO/AEO cluster is **already connected to `/services/ai-seo`** at `src/data/topical-map.ts:395`. Its hub uses the anchor “our AI SEO services” at `src/data/hubs.ts:227`. Do not repoint that cluster again because an earlier audit mentioned `/editorial-policy`. One small gap remains: the `MONEY_LABEL` map in `src/app/blog/topic/[topic]/page.tsx:51` omits `/services/ai-seo`, so some labels fall back to “our services.” A descriptive label would improve the reader's route without changing topic intent.

The migration cluster points to `/services/wordpress-migration` at `src/data/topical-map.ts:380`, with an explicit comment explaining that decision. The migration hub's anchor also says WordPress at `src/data/hubs.ts:210`. Since its articles cover several platforms and a general `/services` page exists, review this destination for reader fit. It is a navigation judgment, not proof that the taxonomy is factually wrong or that a new migration page is required.

Platform hubs and articles can remain migration-focused. A WordPress migration guide should answer its migration question; a Shopify performance guide should diagnose a store problem. Neither needs new-business copy inserted into its main argument. The custom-development hub already covers commissioning new work at `src/data/hubs.ts:133`; its existing destination is custom engineering. Likewise, ecommerce strategy already points to commerce at `src/data/topical-map.ts:413`.

The main blog title/description (`src/app/blog/page.tsx:7`) and visible introduction (`src/app/blog/BlogPageClient.tsx:344`) emphasize migration, speed and SEO. They can broaden selectively to reflect the actual collection of guides, but this is editorial navigation rather than an urgent contradiction. Do not rename every article or hub to match the homepage.

For individual posts, review only reusable company descriptions, active offer/pricing assertions and CTA destinations first. For example, `src/app/blog/is-it-cheaper-to-build-your-own-website/page.tsx:316` says “There is no retainer.” Clarify an optional-versus-required distinction if the sentence could imply no ongoing service exists. Leave historical client work, dated vendor prices, article questions and legitimate migration explanations tied to their original evidence.

## Source-of-truth maintenance details

`FACTS_VERIFIED` still says September 10 at `src/data/company-facts.ts:255`, `/ai-info` has `modified = "2026-09-10"` at line 12, and reference-child schema dates remain August 8. The offer and pricing have since changed. Use truthful review/change dates for the affected material, not a blanket freshness update that implies every legal, evidence and historical fact was newly checked.

A separate shared-entity detail is worth reviewing during schema consolidation: the root Organization uses the legal LLC formation date, August 12, at `src/app/layout.tsx:147`, while `/ai-info` uses the brand trading start in February at `src/app/ai-info/page.tsx:114`, with the same organization identifier. Both business dates may be true; they describe different events. Preserve that distinction explicitly when selecting the schema representation instead of silently replacing one fact with the other.

A practical rollout should first correct prices and eligibility, then shared company descriptions/metadata, then general enquiry labels and reusable article offer lines, then descriptive hub links. Review translated core pages and external profile biographies after the canonical English facts are settled. No blanket all-site keyword replacement or claim of an automatic ranking increase follows from this inventory.
