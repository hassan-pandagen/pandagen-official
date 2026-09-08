# Static-page source audit

Audit date: 2026-07-24  
Scope: the 25 non-article URLs emitted by `src/app/sitemap.ts`  
Environment: current local working tree; no deployment performed

## Final superseding status — 24 July 2026

All **25/25 static routes** completed the final repository source, UX, offer, accessibility-semantic, SEO/AEO/GEO, policy-copy, and public-claim release review. No blocking static-route source failure remains. The final isolated production artifact generated 111 routes, passed release smoke, and passed the structural crawl across all 102 sitemap URLs with **0 failures and 0 warnings**. The final dependency audit reports **0 vulnerabilities**.

The route notes below remain useful evidence of the original and intermediate findings. Any `NEEDS REVIEW` tied only to contracting identity, production configuration, deployment, real-user performance, legal approval, or full manual assistive-technology coverage is an external gate, not an unfinished repository edit. MCP Playwright now covers representative static pages and the main consent, form, dialog, menu, responsive, and console flows; this does not equal a manual WCAG conformance review on every static route.

## Methodology and status boundary

This is a route-by-route source audit, not a template-level shortcut. Each route was inspected for search intent and ICP fit, metadata and canonical coverage, H1 and heading structure, structured-data parity, CTA alignment, factual and commercial evidence, internal-link debt, theme and accessibility risks visible in source, and legal, privacy, or security implications.

The final production-artifact server-HTML crawl on `http://localhost:3000` checked all **102 sitemap URLs with 0 failures and 0 warnings**. `/ai-info`, `/about/hassan`, and `/about/imran` resolve as indexable pages, and the 66 reviewed legacy blog hrefs point directly to canonical destinations. Representative client-side interaction, layout, focus, console, and responsive checks passed separately through MCP Playwright; full per-route manual accessibility coverage remains external.

The final production gate also passes. Next.js 16.2.11 generated **111 pages/routes**, including all 77 articles and the three restored static pages. The artifact was served temporarily on **port 3000**, where release smoke passed and the structural crawl checked **102 URLs with 0 failures and 0 warnings**. Pagefind regenerated from the exact-current artifact and indexed exactly **77 article pages / 4,168 words**. These automated results support release integrity but do not replace production or manual accessibility testing.

The route rows preserve their 22 July browser baseline, so many still say `NOT TESTED`. The final 24 July MCP pass supersedes that baseline for representative shared-template behavior: consent choices, quote-modal semantics and optional-phone validity, abandonment telemetry, loopback audit rejection, desktop/mobile overflow, long-form tables, typography, and final console state were tested. No live lead/email or production third-party integration was triggered, and full screen-reader, contrast, zoom/reflow, and reduced-motion coverage across all 25 routes remains external.

Status meanings:

- **PASS:** no blocking source/content/SEO/policy defect found; browser gate remains open.
- **NEEDS REVIEW:** a current owner decision, evidence check, legal review, visual review, or source remediation is still required.
- **FAIL:** a reproducible public-source or policy defect should be fixed before publication.

Historical intermediate source-audit roll-up: **12 PASS, 13 NEEDS REVIEW, 0 FAIL**. The 24 July superseding status above is current. Row-level `NOT TESTED` cells retain the historical baseline; current representative browser evidence is summarized above.

Shared implementation references used across routes:

- Root metadata, Inter/Playfair font setup, consent wrapper, skip link, and `main-content` target: `src/app/layout.tsx:12-29`, `src/app/layout.tsx:31-72`, `src/app/layout.tsx:93-113`.
- Desktop-only Lenis setup and reduced-motion handling: `src/components/layout/SmoothScroll.tsx:7-55`.
- Current footer destinations: `src/components/layout/Footer.tsx:93-184`, `src/components/layout/Footer.tsx:197-210`.
- Shared service-page WebPage and BreadcrumbList JSON-LD: `src/components/services/ServicePageSchema.tsx:8-33`.
- Shared migration-page H1, CTAs, outline, terms disclaimer, and FAQ rendering: `src/components/services/MigrationLanding.tsx:70-100`, `src/components/services/MigrationLanding.tsx:104-168`, `src/components/services/MigrationLanding.tsx:170-242`.

## Route results

### 1. `/` — PASS

- **Intent / ICP:** Commercial homepage for owners and marketing/operations teams whose revenue-generating WordPress, Webflow, or GoHighLevel site has outgrown its platform.
- **CTA:** “Get your migration plan,” supported by “Review Our Evidence Standard,” plus the optional free technical audit. Sources: `src/components/sections/HeroClient.tsx:6-20`, `src/components/sections/HeroClient.tsx:24-77`.
- **Heading / schema:** One source H1 with a migration-specific promise at `src/components/sections/Hero.tsx:46-57`. Canonical and social metadata are present at `src/app/page.tsx:13-39`. Organization, WebSite, and WebPage JSON-LD are internally consistent with the visible offer at `src/app/page.tsx:47-131`.
- **Key copy / evidence:** The copy correctly limits “SEO-safe” to process controls rather than a ranking guarantee at `src/components/sections/Hero.tsx:65-72`. Public review excerpts link to their original pages; the 22-day MyCustomPatches delivery is labelled as an owner-confirmed record, and Panda Patches is disclosed as owned rather than an independent endorsement at `src/components/home/SocialProof.tsx:31-59`, `src/components/home/SocialProof.tsx:64-95`, `src/components/home/SocialProof.tsx:123-134`. Recheck the external review pages periodically; source inspection did not independently re-verify the live vendor records.
- **Link debt:** No retired `/ai-info/*`, `/about/hassan`, or retired `/work/*` destination is linked by the homepage-owned source. The evidence CTA goes directly to `/work` at `src/components/home/SocialProof.tsx:132-134`.
- **UI / a11y / theme:** H1 and primary copy are server-rendered; the audit and animated CTAs are client-loaded with a stable fallback at `src/components/sections/HeroClient.tsx:6-47`. Cognac, charcoal, stone, Inter, and Playfair match the declared design system. Smoothness, fallback-to-widget layout shift, focus, and mobile stacking remain **NOT TESTED**.
- **Legal / privacy / security:** Optional services are globally consent-managed at `src/app/layout.tsx:96-113`. The free-audit surface is present but endpoint SSRF, origin, and durable rate-limit behavior are API-level checks outside this page-source result.
- **Source refs:** `src/app/page.tsx:13-39`, `src/app/page.tsx:47-165`; `src/components/sections/Hero.tsx:31-79`; `src/components/home/SocialProof.tsx:4-17`, `src/components/home/SocialProof.tsx:64-134`.

### 2. `/services` — PASS

- **Intent / ICP:** Service-category hub for buyers deciding between migration, commerce repair/replatforming, and custom engineering.
- **CTA:** “Get your migration plan,” then “Review example scopes.” Sources: `src/app/services/PageContent.tsx:41-52`, `src/app/services/PageContent.tsx:80-89`.
- **Heading / schema:** One H1 at `src/app/services/PageContent.tsx:43-46`; title, description, and canonical at `src/app/services/page.tsx:4-7`; CollectionPage and BreadcrumbList JSON-LD at `src/app/services/page.tsx:16-42`.
- **Key copy / evidence:** Strong diagnostic positioning avoids claiming custom is automatically cheaper or faster and states that binding details belong in accepted terms at `src/app/services/PageContent.tsx:47-48`, `src/components/sections/UnfairAdvantage.tsx:24-33`, `src/app/services/PageContent.tsx:83-85`.
- **Link debt:** All eight service destinations point directly to current sitemap URLs at `src/app/services/PageContent.tsx:7-34`; no redirect chain found in page-owned links.
- **UI / a11y / theme:** Logical H1-H2-H3 hierarchy and semantic article cards at `src/app/services/PageContent.tsx:56-74`. Stone/cognac/charcoal and midnight sections are consistent. Desktop/mobile card behavior and focus states are **NOT TESTED**.
- **Legal / privacy / security:** Copy appropriately distinguishes marketing content from the statement of work at `src/app/services/PageContent.tsx:83-85`; no page-specific data collection.
- **Source refs:** `src/app/services/page.tsx:4-42`; `src/app/services/PageContent.tsx:7-93`; `src/components/sections/UnfairAdvantage.tsx:3-49`.

### 3. `/pricing` — NEEDS REVIEW

- **Intent / ICP:** Commercial comparison page for migration buyers seeking a starting budget and scope protections before inquiry.
- **CTA:** Repeated “Get your migration plan” actions open the quote modal, with direct service and work links. Hero action: `src/app/pricing/PricingPageClient.tsx:75-84`; package actions: `src/app/pricing/PricingPageClient.tsx:148-180`, `src/app/pricing/PricingPageClient.tsx:197-229`, `src/app/pricing/PricingPageClient.tsx:242-276`.
- **Heading / schema:** One H1 at `src/app/pricing/PricingPageClient.tsx:57-64`; exact price-led metadata at `src/app/pricing/page.tsx:4-21`; WebPage and BreadcrumbList JSON-LD at `src/app/pricing/PricingPageClient.tsx:19-39`.
- **Key copy / evidence:** Starting tiers, 30/70 as a common option, conditional contracted-scope refund protection, 15/30 business-day support starting points, and the three-run 90+ Lighthouse acceptance method are clearly made conditional on accepted written terms at `src/app/pricing/PricingPageClient.tsx:312-327`, `src/app/pricing/PricingPageClient.tsx:347-359`, `src/app/pricing/PricingPageClient.tsx:474-485`. This aligns with the owner decisions, but the legal wording and test protocol still need final contract/counsel review before they are treated as enforceable terms.
- **Link debt:** Service and `/work` links are direct current destinations at `src/app/pricing/PricingPageClient.tsx:228-229`, `src/app/pricing/PricingPageClient.tsx:276-277`, `src/app/pricing/PricingPageClient.tsx:466-467`.
- **UI / a11y / theme:** The three-column comparison is visually table-like but built entirely from `div` elements without table or ARIA grid semantics at `src/app/pricing/PricingPageClient.tsx:388-443`. That relationship should be verified with a screen reader and either made semantic or given an equivalent accessible representation. Modal focus, mobile price-card flow, and contrast are **NOT TESTED**.
- **Legal / privacy / security:** No absolute outcome guarantee is made; the FAQ explicitly separates lab acceptance from field CWV, rankings, revenue, and third-party changes at `src/app/pricing/PricingPageClient.tsx:481-485`. Final wording remains counsel-dependent.
- **Source refs:** `src/app/pricing/page.tsx:4-21`; `src/app/pricing/PricingPageClient.tsx:19-39`, `src/app/pricing/PricingPageClient.tsx:52-88`, `src/app/pricing/PricingPageClient.tsx:312-359`, `src/app/pricing/PricingPageClient.tsx:374-485`.

### 4. `/contact` — PASS

- **Intent / ICP:** High-intent inquiry page for migration prospects ready to share platform, goal, traffic, timing, budget, and constraints.
- **CTA:** “Get your migration plan” form and email fallback. Sources: `src/app/contact/ContactPageClient.tsx:150-166`, `src/app/contact/ContactPageClient.tsx:216-308`.
- **Heading / schema:** One H1 at `src/app/contact/ContactPageClient.tsx:142-148`; title, description, and canonical at `src/app/contact/page.tsx:4-21`; ContactPage, Organization, and BreadcrumbList JSON-LD at `src/app/contact/ContactPageClient.tsx:35-70`.
- **Key copy / evidence:** “What happens next” makes clear that price, schedule, ownership, support, and remedies are documented later at `src/app/contact/ContactPageClient.tsx:183-189`. Required name/email and optional phone/current URL now agree with the UI at `src/app/contact/ContactPageClient.tsx:231-269`.
- **Link debt:** The page-owned jump link resolves to the local form; email is a direct `mailto:`. No redirect chain found.
- **UI / a11y / theme:** Labels, required markers, HTML validation, field-level error text, form busy state, alert regions, honeypot, and success status are present at `src/app/contact/ContactPageClient.tsx:118-131`, `src/app/contact/ContactPageClient.tsx:193-229`, `src/app/contact/ContactPageClient.tsx:231-305`. Submission, keyboard focus after success/error, mobile layout, and abandonment events are **NOT TESTED**.
- **Legal / privacy / security:** The form now links “privacy notice” directly to `/privacy` at `src/app/contact/ContactPageClient.tsx:305-307`. It posts to `/api/submit-quote` at `src/app/contact/ContactPageClient.tsx:89-116`; endpoint controls and production delivery remain outside this static-route source result and browser interaction is still **NOT TESTED**.
- **Source refs:** `src/app/contact/page.tsx:4-21`; `src/app/contact/ContactPageClient.tsx:35-70`, `src/app/contact/ContactPageClient.tsx:82-131`, `src/app/contact/ContactPageClient.tsx:133-317`.

### 5. `/services/wordpress-migration` — PASS

- **Intent / ICP:** Revenue-generating WordPress owners evaluating repair versus a controlled migration without avoidable SEO, editorial, analytics, or operational loss.
- **CTA:** “Get your migration plan” and “Review example scopes” from the shared migration landing at `src/components/services/MigrationLanding.tsx:93-100`, repeated at `src/components/services/MigrationLanding.tsx:233-239`.
- **Heading / schema:** One H1 is generated from the route-specific title at `src/app/services/wordpress-migration/PageContent.tsx:5-9` and rendered at `src/components/services/MigrationLanding.tsx:77-90`. Metadata/canonical at `src/app/services/wordpress-migration/page.tsx:5-15`; shared WebPage and BreadcrumbList schema called at `src/app/services/wordpress-migration/page.tsx:17-18`.
- **Key copy / evidence:** Scope covers URLs, content model, forms, integrations, consent, accessibility, performance, security, rollback, and ownership at `src/app/services/wordpress-migration/PageContent.tsx:8-24`. FAQ explicitly rejects universal migration and ranking guarantees at `src/app/services/wordpress-migration/PageContent.tsx:26-30`.
- **Link debt:** Shared CTAs point directly to `/contact#contact-quote-form` and `/pricing`; no retired destination.
- **UI / a11y / theme:** Shared semantic sections, lists, ordered phases, labelled sections, and details/summary FAQ are source-sound at `src/components/services/MigrationLanding.tsx:104-242`. Render, details keyboard behavior, heading wrapping, and responsive sequence are **NOT TESTED**.
- **Legal / privacy / security:** The acceptance-condition section correctly reserves price, payment, browser, accessibility, performance, remedies, IP, licenses, support, and guarantees for accepted terms at `src/components/services/MigrationLanding.tsx:197-210`.
- **Source refs:** `src/app/services/wordpress-migration/page.tsx:5-18`; `src/app/services/wordpress-migration/PageContent.tsx:5-31`; `src/components/services/MigrationLanding.tsx:70-242`.

### 6. `/services/ecommerce` — PASS

- **Intent / ICP:** Shopify and WooCommerce operators deciding among theme repair, headless frontend, backend retention, or replatforming.
- **CTA:** “Get your migration plan” and “Review example scopes” at `src/app/services/ecommerce/PageContent.tsx:76-92`, plus a diagnostic CTA in `src/components/sections/ShopifyKiller.tsx:54-72`.
- **Heading / schema:** One H1 at `src/app/services/ecommerce/PageContent.tsx:78-83`; metadata/canonical at `src/app/services/ecommerce/page.tsx:4-23`; WebPage and BreadcrumbList JSON-LD at `src/app/services/ecommerce/page.tsx:25-54`.
- **Key copy / evidence:** The route compares three valid architectures instead of asserting headless as the default at `src/app/services/ecommerce/PageContent.tsx:98-110`; the diagnostic explicitly says headless is an option and requires current cost evidence at `src/components/sections/ShopifyKiller.tsx:9-24`, `src/components/sections/ShopifyKiller.tsx:34-42`. FAQ rejects invariant PageSpeed and conversion guarantees at `src/app/services/ecommerce/PageContent.tsx:55-64`.
- **Link debt:** Direct current links to contact and pricing; no redirect chain found.
- **UI / a11y / theme:** Route uses semantic headings, article cards, and cognac/stone/midnight tokens. Interactive FAQ and responsive commerce sections are **NOT TESTED**.
- **Legal / privacy / security:** Scope explicitly includes consent, security, accessibility, data ownership, source, third-party licenses, and support at `src/app/services/ecommerce/PageContent.tsx:136-152`; binding terms remain in the proposal.
- **Source refs:** `src/app/services/ecommerce/page.tsx:4-54`; `src/app/services/ecommerce/PageContent.tsx:55-64`, `src/app/services/ecommerce/PageContent.tsx:68-110`, `src/app/services/ecommerce/PageContent.tsx:136-152`; `src/components/sections/ShopifyKiller.tsx:9-75`.

### 7. `/services/custom-engineering` — NEEDS REVIEW

- **Intent / ICP:** Startups and established teams scoping SaaS products, portals, dashboards, integrations, or AI-enabled internal tools.
- **CTA:** Hero says “Get your migration plan” even though the H1 and ICP describe a new product or custom tool at `src/app/services/custom-engineering/PageContent.tsx:65-96`. Use a route-specific variant such as “Get your engineering plan” while preserving the same lead flow, unless migration-only positioning is intentionally meant to exclude product leads.
- **Heading / schema:** One H1 at `src/app/services/custom-engineering/PageContent.tsx:65-72`; metadata/canonical at `src/app/services/custom-engineering/page.tsx:5-15`; shared WebPage and BreadcrumbList schema called at `src/app/services/custom-engineering/page.tsx:17-18`.
- **Key copy / evidence:** Commercial, repository, licensing, IP, support, and handover boundaries are consistently reserved for the accepted proposal at `src/app/services/custom-engineering/PageContent.tsx:74-104`, `src/app/services/custom-engineering/PageContent.tsx:558-563`. No unsupported performance or refund promise was found in the page-owned source.
- **Link debt:** Supporting article links point directly to current blog routes at `src/app/services/custom-engineering/PageContent.tsx:578-586`.
- **UI / a11y / theme:** The legacy cool/red/green presentation is replaced in source by paper, stone, charcoal, cognac, and a restrained warm warning accent at `src/app/services/custom-engineering/PageContent.tsx:55-115`, `src/app/services/custom-engineering/PageContent.tsx:199-278`, `src/app/services/custom-engineering/PageContent.tsx:341-380`. The comparison hides its desktop header below `md` and supplies mobile row labels at `src/app/services/custom-engineering/PageContent.tsx:277-326`; the two route-specific scope cards stack before `md` at `src/app/services/custom-engineering/PageContent.tsx:447-491`. Motion-start visibility, actual mobile wrapping, focus, contrast, and scroll feel remain **NOT TESTED**.
- **Legal / privacy / security:** AI feasibility is correctly conditioned on provider capabilities, data quality, privacy, evaluation, and approved scope at `src/app/services/custom-engineering/PageContent.tsx:30-35`; no page-specific data collection.
- **Source refs:** `src/app/services/custom-engineering/page.tsx:5-18`; `src/app/services/custom-engineering/PageContent.tsx:30-35`, `src/app/services/custom-engineering/PageContent.tsx:55-104`, `src/app/services/custom-engineering/PageContent.tsx:556-586`.

### 8. `/services/woocommerce` — PASS

- **Intent / ICP:** WooCommerce operators deciding whether to repair the current storefront, build a separate frontend, or replatform while protecting orders, data, and search continuity.
- **CTA:** Shared “Get your migration plan” and pricing CTA at `src/components/services/MigrationLanding.tsx:93-100`, repeated at `src/components/services/MigrationLanding.tsx:233-239`.
- **Heading / schema:** One H1 is generated from the route-specific title at `src/app/services/woocommerce/PageContent.tsx:5-9`; metadata/canonical at `src/app/services/woocommerce/page.tsx:5-15`; shared WebPage and BreadcrumbList schema called at `src/app/services/woocommerce/page.tsx:17-18`.
- **Key copy / evidence:** Route-specific inventory covers catalog, checkout, payments, orders, accounts, subscriptions, consent, feeds, and integrations at `src/app/services/woocommerce/PageContent.tsx:10-24`. FAQ avoids plugin-continuity, order, and ranking guarantees at `src/app/services/woocommerce/PageContent.tsx:26-30`.
- **Link debt:** Shared contact and pricing links are direct; no retired destination.
- **UI / a11y / theme:** Uses the current shared MigrationLanding theme and semantic outline. Render, mobile cards, details keyboard behavior, and responsive overflow are **NOT TESTED**.
- **Legal / privacy / security:** PCI responsibility is identified as something to document, not something the page promises at `src/app/services/woocommerce/PageContent.tsx:18-24`; accepted terms control binding details.
- **Source refs:** `src/app/services/woocommerce/page.tsx:5-18`; `src/app/services/woocommerce/PageContent.tsx:5-30`; `src/components/services/MigrationLanding.tsx:70-242`.

### 9. `/services/wix` — NEEDS REVIEW

- **Intent / ICP:** Wix owners whose design, content, commerce, performance, or integration requirements may justify optimization or migration.
- **CTA:** “Get your migration plan” through the consent-managed Cal.com trigger, plus comparison navigation at `src/app/services/wix/PageContent.tsx:74-87`.
- **Heading / schema:** One H1 at `src/app/services/wix/PageContent.tsx:63-68`; metadata/canonical at `src/app/services/wix/page.tsx:5-15`; shared WebPage and BreadcrumbList schema called at `src/app/services/wix/page.tsx:17-18`.
- **Key copy / evidence:** The page carefully labels April 2026 Reddit posts as individual experiences rather than representative evidence and tells readers to verify against their own account and current documentation at `src/app/services/wix/PageContent.tsx:101-107`. Those mutable outbound sources still need a scheduled recheck; community anecdotes should not displace current primary Wix documentation.
- **Link debt:** Further-reading links are direct current article routes at `src/app/services/wix/PageContent.tsx:573-580`; related-service links are generated from the current route at `src/app/services/wix/PageContent.tsx:586`.
- **UI / a11y / theme:** The Wix route now uses the paper/stone/charcoal/cognac system throughout its hero, evidence, decision, and CTA sections at `src/app/services/wix/PageContent.tsx:49-167`, `src/app/services/wix/PageContent.tsx:252-319`, `src/app/services/wix/PageContent.tsx:454-490`. Its comparison converts the desktop columns into labelled mobile cards below `md` at `src/app/services/wix/PageContent.tsx:212-246`, and the ownership/scoping ledger supplies mobile labels below `sm` at `src/app/services/wix/PageContent.tsx:327-395`. Section length, actual mobile wrapping, modal activation, contrast, focus, and keyboard operation remain **NOT TESTED**.
- **Legal / privacy / security:** Copy explicitly says rankings are not guaranteed and commercial terms/rights are not assumed at `src/app/services/wix/PageContent.tsx:24-41`, `src/app/services/wix/PageContent.tsx:63-71`, `src/app/services/wix/PageContent.tsx:551-553`.
- **Source refs:** `src/app/services/wix/page.tsx:5-18`; `src/app/services/wix/PageContent.tsx:24-41`, `src/app/services/wix/PageContent.tsx:55-107`, `src/app/services/wix/PageContent.tsx:446-486`, `src/app/services/wix/PageContent.tsx:544-586`.

### 10. `/services/squarespace` — NEEDS REVIEW

- **Intent / ICP:** Squarespace owners evaluating optimization versus migration as content, commerce, scheduling, design, or integration requirements change.
- **CTA:** The hero still says “Get Free Consultation,” conflicting with the approved site-wide “Get your migration plan” CTA at `src/app/services/squarespace/PageContent.tsx:74-87`. Later CTAs use the approved wording at `src/app/services/squarespace/PageContent.tsx:630-640`; normalize the hero copy.
- **Heading / schema:** One H1 at `src/app/services/squarespace/PageContent.tsx:63-68`; metadata/canonical at `src/app/services/squarespace/page.tsx:5-15`; shared WebPage and BreadcrumbList schema called at `src/app/services/squarespace/page.tsx:17-18`.
- **Key copy / evidence:** April 2026 Reddit examples are correctly labelled as individual, non-representative experiences and require current provider verification at `src/app/services/squarespace/PageContent.tsx:159-162`. Account/export/capability statements should be rechecked against primary Squarespace documentation before publication.
- **Link debt:** Further-reading and related-service links use direct current routes at `src/app/services/squarespace/PageContent.tsx:734-745`.
- **UI / a11y / theme:** The Squarespace route is rethemed in source to paper, stone, charcoal, cognac, and restrained amber accents across the hero, community evidence, assessment, diagnostic, and decision sections at `src/app/services/squarespace/PageContent.tsx:49-222`, `src/app/services/squarespace/PageContent.tsx:268-464`, `src/app/services/squarespace/PageContent.tsx:600-642`. The assessment grid uses compact two-column mobile cells and expands to labelled three-column rows from `sm` at `src/app/services/squarespace/PageContent.tsx:314-347`; optimization and migration remain distinct CTA paths. The deeply nested visual outline, actual mobile wrapping, contrast, focus, and screen-reader order remain **NOT TESTED**.
- **Legal / privacy / security:** The FAQ correctly reserves price, schedule, data, redirects, support, rights, and remedies for the proposal and rejects risk-free migration at `src/app/services/squarespace/PageContent.tsx:24-41`, `src/app/services/squarespace/PageContent.tsx:709-711`.
- **Source refs:** `src/app/services/squarespace/page.tsx:5-18`; `src/app/services/squarespace/PageContent.tsx:24-41`, `src/app/services/squarespace/PageContent.tsx:55-162`, `src/app/services/squarespace/PageContent.tsx:606-745`.

### 11. `/services/webflow` — PASS

- **Intent / ICP:** Webflow teams evaluating whether changing CMS, interactions, localization, application logic, operating cost, or integrations justify a controlled migration.
- **CTA:** “Get your migration plan” plus “When to Migrate” at `src/app/services/webflow/PageContent.tsx:83-96`; later route-specific modal CTAs at `src/app/services/webflow/PageContent.tsx:436-474`.
- **Heading / schema:** One H1 at `src/app/services/webflow/PageContent.tsx:63-72`; metadata/canonical at `src/app/services/webflow/page.tsx:5-15`; shared WebPage and BreadcrumbList schema called at `src/app/services/webflow/page.tsx:17-18`.
- **Key copy / evidence:** The page uses current official Webflow status history as the primary availability reference and explicitly says a different architecture changes rather than eliminates dependencies at `src/app/services/webflow/PageContent.tsx:101-113`, `src/app/services/webflow/PageContent.tsx:189-200`. Community posts are framed as questions to investigate, not representative results, at `src/app/services/webflow/PageContent.tsx:211-273`.
- **Link debt:** Internal cost, membership, FAQ, and further-reading links are direct current routes at `src/app/services/webflow/PageContent.tsx:110-113`, `src/app/services/webflow/PageContent.tsx:183`, `src/app/services/webflow/PageContent.tsx:562-573`.
- **UI / a11y / theme:** The previously blue “When to Reassess Webflow” section is now stone/white/cognac in source at `src/app/services/webflow/PageContent.tsx:148-183`; no `bg-blue`, `text-blue`, `bg-slate`, or `text-slate` class remains in this file. The preceding charcoal decision-control section is intentional brand contrast at `src/app/services/webflow/PageContent.tsx:101-143`. Render, scroll transition, responsive cards, and focus behavior are **NOT TESTED**.
- **Legal / privacy / security:** The accepted proposal controls commercial terms, support, access, licensing, ownership, and remedies; the page disclaims a performance/refund promise at `src/app/services/webflow/PageContent.tsx:80`, `src/app/services/webflow/PageContent.tsx:541-545`.
- **Source refs:** `src/app/services/webflow/page.tsx:5-18`; `src/app/services/webflow/PageContent.tsx:55-113`, `src/app/services/webflow/PageContent.tsx:148-200`, `src/app/services/webflow/PageContent.tsx:436-474`, `src/app/services/webflow/PageContent.tsx:536-573`.

### 12. `/services/gohighlevel` — NEEDS REVIEW

- **Intent / ICP:** GoHighLevel agencies and businesses considering a separate public frontend while retaining useful CRM, form, calendar, and automation workflows.
- **CTA:** “Get your migration plan” through the consent-managed Cal.com trigger at `src/app/services/gohighlevel/PageContent.tsx:93-106`, with separate “Custom Site + GHL CRM” and replacement-workflow actions later at `src/app/services/gohighlevel/PageContent.tsx:476-514`.
- **Heading / schema:** One H1 at `src/app/services/gohighlevel/PageContent.tsx:63-72`; metadata/canonical at `src/app/services/gohighlevel/page.tsx:5-15`; shared WebPage and BreadcrumbList schema called at `src/app/services/gohighlevel/page.tsx:17-18`.
- **Key copy / evidence:** The route avoids unsupported speed, ranking, advertising, revenue, and lead promises at `src/app/services/gohighlevel/page.tsx:6-7`, `src/app/services/gohighlevel/PageContent.tsx:74-81`. Its diagnostic/evidence controls distinguish point-in-time observations from client-approved outcome proof at `src/app/services/gohighlevel/PageContent.tsx:150-168`.
- **Link debt:** Direct links to current GHL articles and related services at `src/app/services/gohighlevel/PageContent.tsx:411`, `src/app/services/gohighlevel/PageContent.tsx:605-614`; no retired destination.
- **UI / a11y / theme:** The eyebrow now matches the “GoHighLevel Website and CRM Integration” offer at `src/app/services/gohighlevel/PageContent.tsx:59-70`. Legacy cool/red/green modules are replaced by paper, stone, charcoal, cognac, and warm orange accents at `src/app/services/gohighlevel/PageContent.tsx:111-183`, `src/app/services/gohighlevel/PageContent.tsx:221-299`, `src/app/services/gohighlevel/PageContent.tsx:340-412`. The comparison provides mobile labels below `md` at `src/app/services/gohighlevel/PageContent.tsx:264-291`, and the two evaluation paths stack before `md` at `src/app/services/gohighlevel/PageContent.tsx:473-518`. Motion-start visibility, actual responsive layout, modal flow, focus, and contrast remain **NOT TESTED**.
- **Legal / privacy / security:** Data-flow, attribution, consent, supported API, error, access, licensing, IP, and handover dependencies are treated as scope items rather than guarantees at `src/app/services/gohighlevel/PageContent.tsx:225-241`, `src/app/services/gohighlevel/PageContent.tsx:299`, `src/app/services/gohighlevel/PageContent.tsx:583-588`.
- **Source refs:** `src/app/services/gohighlevel/page.tsx:5-18`; `src/app/services/gohighlevel/PageContent.tsx:24-41`, `src/app/services/gohighlevel/PageContent.tsx:55-168`, `src/app/services/gohighlevel/PageContent.tsx:476-545`, `src/app/services/gohighlevel/PageContent.tsx:581-614`.

### 13. `/partners` — PASS

- **Intent / ICP:** Agencies considering white-label or delivery-partner capacity and wanting to test one paid pilot before a recurring arrangement.
- **CTA:** “Propose a pilot” and “Review delivery standards” at `src/app/partners/PartnersContent.tsx:34-50`.
- **Heading / schema:** One H1 at `src/app/partners/PartnersContent.tsx:36-41`; metadata/canonical at `src/app/partners/page.tsx:4-14`; WebPage and BreadcrumbList JSON-LD at `src/app/partners/page.tsx:16-42`.
- **Key copy / evidence:** No commission, margin, capacity, service level, or white-label promise is made from website copy. The page requires a scoped paid pilot and written partner agreement at `src/app/partners/PartnersContent.tsx:6-26`, `src/app/partners/PartnersContent.tsx:72-85`.
- **Link debt:** Contact and About links are direct current routes at `src/app/partners/PartnersContent.tsx:44-49`.
- **UI / a11y / theme:** Logical H1-H2-H3 structure, semantic list, and current stone/cognac/midnight system. Responsive pilot cards, focus, and contrast remain **NOT TESTED**.
- **Legal / privacy / security:** Confidentiality, data handling, account access, permitted client contact, termination, deletion, ownership, support, and incident process are correctly presented as agreement items at `src/app/partners/PartnersContent.tsx:9-25`, `src/app/partners/PartnersContent.tsx:74-84`.
- **Source refs:** `src/app/partners/page.tsx:4-42`; `src/app/partners/PartnersContent.tsx:6-26`, `src/app/partners/PartnersContent.tsx:29-91`.

### 14. `/work` — NEEDS REVIEW

- **Intent / ICP:** Prospects seeking proof of delivery and the methodology used before a case study or outcome claim is published.
- **CTA:** “Get your migration plan” and “Review delivery standards” at `src/app/work/WorkPageClient.tsx:146-163`.
- **Heading / schema:** One H1 at `src/app/work/WorkPageClient.tsx:69-75`; metadata/canonical at `src/app/work/page.tsx:4-22`; CollectionPage and BreadcrumbList JSON-LD at `src/app/work/WorkPageClient.tsx:34-59`.
- **Key copy / evidence:** The page correctly withholds unreconciled performance, ranking, cost, revenue, conversion, and testimonial outcomes. It publishes only the owner-confirmed 22-day MyCustomPatches delivery and discloses Panda Patches as an owned brand at `src/app/work/WorkPageClient.tsx:69-116`. Source safety is good, but the route currently functions more as an evidence policy than a portfolio. It will under-serve proof-seeking prospects until completed, permitted case studies are available; do not publish the unfinished medical/SOW project as a case study.
- **Link debt:** No retired `/work/*` case-study child is linked by this page. CTA destinations are direct current routes.
- **UI / a11y / theme:** Current source uses “22 days,” not the earlier zero-like display, and uses Playfair only as an accent at `src/app/work/WorkPageClient.tsx:97-116`. Visual hierarchy, numeral rendering, mobile evidence cards, and section polish are **NOT TESTED**.
- **Legal / privacy / security:** Publication gates require owner/client permission, dated comparable evidence, limitations, approved testimonials, and structured-data parity at `src/app/work/WorkPageClient.tsx:124-158`; this is appropriate for client-confidential and regulated projects.
- **Source refs:** `src/app/work/page.tsx:4-22`; `src/app/work/WorkPageClient.tsx:6-25`, `src/app/work/WorkPageClient.tsx:34-116`, `src/app/work/WorkPageClient.tsx:124-163`.

### 15. `/about` — PASS

- **Intent / ICP:** Prospects validating who is accountable, company age/location, and the delivery standards behind the migration offer.
- **CTA:** “Get your migration plan” and “Review project evidence” at `src/app/about/AboutPageClient.tsx:92-110`.
- **Heading / schema:** One H1 at `src/app/about/AboutPageClient.tsx:92-96`; exact About metadata/canonical at `src/app/about/page.tsx:4-21`; AboutPage, Organization, founders, February 2026 founding date, and mailing address JSON-LD at `src/app/about/AboutPageClient.tsx:12-51`.
- **Key copy / evidence:** Visible founder names/roles, founding month, and mailing address match the owner-confirmed facts at `src/app/about/AboutPageClient.tsx:118-143`. Claims policy correctly requires dates, method, conditions, permission, and limitations at `src/app/about/AboutPageClient.tsx:187-195`.
- **Link debt:** `/work` and quote routes are direct; no `/about/hassan` redirect is used.
- **UI / a11y / theme:** Logical H1-H2-H3 outline and current stone/cognac treatment. Quote-modal focus, founder-card mobile layout, and responsive rhythm are **NOT TESTED**. No deleted team portrait is referenced in this page-owned source.
- **Legal / privacy / security:** The page avoids presenting website copy as binding acceptance, ownership, warranty, or remedy terms at `src/app/about/AboutPageClient.tsx:54-76`.
- **Source refs:** `src/app/about/page.tsx:4-21`; `src/app/about/AboutPageClient.tsx:12-76`, `src/app/about/AboutPageClient.tsx:79-195`.

### 16. `/blog` — NEEDS REVIEW

- **Intent / ICP:** Research hub for migration, platform, commerce, analytics, and performance queries that can educate prospects before a commercial inquiry.
- **CTA:** Article discovery through Pagefind, categories, featured cards, and the complete 76-article directory at `src/app/blog/BlogPageClient.tsx:55-108`, `src/app/blog/BlogPageClient.tsx:309-318`. There is no forced sales CTA in the hub body, which is appropriate for informational intent; the shared header/footer provide the commercial path.
- **Heading / schema:** One H1 at `src/app/blog/BlogPageClient.tsx:295-300`; exact metadata/canonical at `src/app/blog/page.tsx:42-60`; CollectionPage, BreadcrumbList, Blog, and 76 BlogPosting summaries are generated at `src/app/blog/page.tsx:74-132`.
- **Key copy / evidence:** Date normalization and author-name normalization are deterministic at `src/app/blog/page.tsx:8-40`, and the full directory preserves every restored URL at `src/app/blog/BlogPageClient.tsx:309-318`. However, restored article excerpts and schema summaries inherit an article corpus whose claim/source review is still in progress. Do not treat the hub as finally cleared until all 76 article audits close.
- **Link debt:** Hub-owned article links are generated directly from current slugs at `src/app/blog/BlogPageClient.tsx:119-219`, `src/app/blog/BlogPageClient.tsx:315-318`. Redirect debt inside individual articles is outside this 22-route result.
- **UI / a11y / theme:** H1 uses Inter and the accent uses Playfair via `font-serif` at `src/app/blog/BlogPageClient.tsx:295-300`; the font declarations are `src/app/layout.tsx:12-29`. Category cards intentionally use several illustration colors at `src/app/blog/BlogPageClient.tsx:21-48`, which may feel less brand-consistent than stone/cognac. Search modal, heading wrapping, card truncation, color contrast, keyboard filter state, and mobile layout are **NOT TESTED**.
- **Legal / privacy / security:** No page-specific form. Editorial and commercial safety depends on article-level sourcing and the public editorial policy.
- **Source refs:** `src/app/blog/page.tsx:5-60`, `src/app/blog/page.tsx:62-134`; `src/app/blog/BlogPageClient.tsx:21-48`, `src/app/blog/BlogPageClient.tsx:55-108`, `src/app/blog/BlogPageClient.tsx:282-318`.

### 17. `/manifesto` — PASS

- **Intent / ICP:** Trust and differentiation page for buyers comparing how migration providers scope risk, evidence, change control, ownership, accessibility, privacy, and launch.
- **CTA:** “Review example scopes” and “Describe your migration” at `src/app/manifesto/page.tsx:104-122`.
- **Heading / schema:** One H1 at `src/app/manifesto/page.tsx:71-79`; metadata/canonical at `src/app/manifesto/page.tsx:7-17`; WebPage JSON-LD at `src/app/manifesto/page.tsx:54-68`.
- **Key copy / evidence:** Principles reject framework-first selling and claims about systems outside the agency's control at `src/app/manifesto/page.tsx:19-52`. The copy is specific, differentiating, and aligned with the migration offer.
- **Link debt:** Pricing and contact links are direct current routes.
- **UI / a11y / theme:** Logical ordered-list structure, hidden H2 label, current stone/cognac/midnight palette at `src/app/manifesto/page.tsx:83-124`. Responsive cards, focus, and contrast are **NOT TESTED**.
- **Legal / privacy / security:** Ownership, licensing, privacy, security, accessibility, warranties, support, and remedies are framed as written scope responsibilities, not blanket guarantees at `src/app/manifesto/page.tsx:33-50`.
- **Source refs:** `src/app/manifesto/page.tsx:7-17`, `src/app/manifesto/page.tsx:19-68`, `src/app/manifesto/page.tsx:71-127`.

### 18. `/privacy` — NEEDS REVIEW

- **Intent / ICP:** Privacy notice for visitors, form submitters, audit users, customers, and potential US/EU/UK data subjects.
- **CTA:** Rights/contact requests use `info@pandacodegen.com`; Cookie Policy is linked. Sources: `src/app/privacy/page.tsx:121-147`, `src/app/privacy/page.tsx:187-239`.
- **Heading / schema:** One H1 at `src/app/privacy/page.tsx:35-36`; title, description, canonical, social metadata, and indexability at `src/app/privacy/page.tsx:6-23`. No page-specific JSON-LD, which is not required for a privacy notice.
- **Key copy / evidence:** The notice identifies PandaCodeGen as website operator/controller at `src/app/privacy/page.tsx:41-47`, accurately describes aggregate form-funnel events, audit URL processing, coarse Vercel location, optional email, and no unfinished-field-value database at `src/app/privacy/page.tsx:52-80`, and describes optional providers and consent categories at `src/app/privacy/page.tsx:98-147`.
- **Link debt:** Cookie Policy and email links are direct. The Cookie Policy now supplies current official vendor-policy links, so this route has a clear disclosure path at `src/app/privacy/page.tsx:147` and `src/app/cookies/page.tsx:195-213`.
- **UI / a11y / theme:** Long-form hierarchy is source-sound and uses current tokens. Legal-page scrolling, anchorability, mobile line length, and contrast are **NOT TESTED**.
- **Legal / privacy / security:** The unfinished controller/legal-identity placeholder is removed. The contact section identifies PandaCodeGen as website operator/controller and gives the mailing address at `src/app/privacy/page.tsx:187-195`. The California section now addresses sale or sharing and states that enabled Global Privacy Control keeps marketing disabled at `src/app/privacy/page.tsx:226-239`; matching enforcement exists at `src/components/consent/ConsentProvider.tsx:88-104`, `src/components/consent/ConsentProvider.tsx:262`. Status remains **NEEDS REVIEW**, not FAIL, because US-first/global coverage, legal applicability, lawful bases, retention, international transfers, and controller/processor wording still require qualified privacy counsel and production-configuration verification.
- **Source refs:** `src/app/privacy/page.tsx:6-23`, `src/app/privacy/page.tsx:35-80`, `src/app/privacy/page.tsx:98-168`, `src/app/privacy/page.tsx:187-239`.

### 19. `/terms` — NEEDS REVIEW

- **Intent / ICP:** Website-use terms for visitors, audit users, and inquiry submitters; deliberately not a universal project-services contract.
- **CTA:** Legal contact via email; commercial path remains in the shared footer. Source: `src/app/terms/page.tsx:108-112`.
- **Heading / schema:** One H1 at `src/app/terms/page.tsx:126-127`; title, description, canonical, and indexability at `src/app/terms/page.tsx:5-15`. No page-specific JSON-LD, which is not required.
- **Key copy / evidence:** The page correctly says project terms may be a proposal, SOW, master agreement, or explicitly accepted email/chat summary depending on risk; another client's SOW does not automatically apply at `src/app/terms/page.tsx:67-71`. The 30/70 option, conditional scope-failure refund, 2-3-day initiation/10-12-day settlement expectation, support, Lighthouse method, client/reusable IP split, and third-party licenses are qualified as optional accepted terms at `src/app/terms/page.tsx:76-90`.
- **Link debt:** No retired path; email and shared footer links are direct.
- **UI / a11y / theme:** Semantic H1/H2 content and current legal-page styling. Mobile reading, focus, and scroll behavior are **NOT TESTED**.
- **Legal / privacy / security:** This is intentionally flexible, but source review cannot establish enforceability. Contracting identity, governing law, dispute method, mandatory consumer rules, warranty/liability language, cancellation, e-sign acceptance, and jurisdiction-specific disclosures must be set in the applicable accepted terms and reviewed by qualified counsel before reliance. The page itself acknowledges that boundary at `src/app/terms/page.tsx:20-24`, `src/app/terms/page.tsx:102-112`.
- **Source refs:** `src/app/terms/page.tsx:5-15`, `src/app/terms/page.tsx:20-71`, `src/app/terms/page.tsx:76-112`, `src/app/terms/page.tsx:126-133`.

### 20. `/cookies` — PASS

- **Intent / ICP:** Cookie/similar-technology disclosure and preference explanation for all site visitors.
- **CTA:** Persistent Cookie settings control is described; Privacy Policy and contact email are linked at `src/app/cookies/page.tsx:101-119`, `src/app/cookies/page.tsx:211-228`.
- **Heading / schema:** One H1 at `src/app/cookies/page.tsx:83-87`; title, description, canonical, social metadata, and indexability at `src/app/cookies/page.tsx:6-23`. No page-specific JSON-LD, which is not required.
- **Key copy / evidence:** Inventory covers necessary consent storage, GA4, Clarity, Vercel Analytics, Meta Pixel, Cal.com, and Tawk.to at `src/app/cookies/page.tsx:26-76`; categories, off-by-default behavior, withdrawal, and Global Privacy Control behavior are stated at `src/app/cookies/page.tsx:101-159`. Actual pre-consent blocking and withdrawal cleanup remain **NOT TESTED** in a browser.
- **Link debt:** Privacy and email links are direct. Current official policy links are supplied for Google, Microsoft, Meta, Vercel, Cal.com, and Tawk.to at `src/app/cookies/page.tsx:195-213`.
- **UI / a11y / theme:** The inventory is a real HTML table with a screen-reader caption and a horizontal-scroll container at `src/app/cookies/page.tsx:167-191`. Keyboard/mobile table access and all consent interaction remain **NOT TESTED**.
- **Legal / privacy / security:** The unfinished controller/legal-identity placeholder is removed; PandaCodeGen is identified as website operator/controller with email and mailing address at `src/app/cookies/page.tsx:226-240`. Provider lifetimes are transparently labelled as provider/account controlled at `src/app/cookies/page.tsx:26-76`, and the page links the governing provider notices. GPC is documented at `src/app/cookies/page.tsx:119-123` and enforced at `src/components/consent/ConsentProvider.tsx:88-104`, `src/components/consent/ConsentProvider.tsx:262`. Production configuration and consent behavior still require the global browser gate, but no blocking page-source defect remains.
- **Source refs:** `src/app/cookies/page.tsx:6-23`, `src/app/cookies/page.tsx:26-76`, `src/app/cookies/page.tsx:83-159`, `src/app/cookies/page.tsx:162-228`.

### 21. `/security` — PASS

- **Intent / ICP:** Vulnerability reporters, researchers, customers, and partners needing a private reporting path and scope boundary.
- **CTA:** Direct security-report email with requested reproduction and impact details at `src/app/security/page.tsx:25-32`.
- **Heading / schema:** One H1 at `src/app/security/page.tsx:17-22`; title, description, canonical, and indexability at `src/app/security/page.tsx:5-10`. No page-specific JSON-LD, which is not required.
- **Key copy / evidence:** Scope includes the public site and first-party APIs, excludes destructive/DoS/social-engineering/other-person-data testing, and honestly avoids a fixed response deadline at `src/app/security/page.tsx:35-42`.
- **Link debt:** Direct mailto; `public/.well-known/security.txt:1-5` points back to the canonical policy and has a future expiry.
- **UI / a11y / theme:** Short, readable semantic H1/H2 page with current tokens. Mail-client behavior, mobile layout, and focus are **NOT TESTED**.
- **Legal / privacy / security:** Safe-harbor language, encryption/PGP, acknowledgement targets, and bounty status are not offered. That is not a contradiction because the page expressly avoids fixed promises, but owner/security counsel may add them if operationally supportable.
- **Source refs:** `src/app/security/page.tsx:5-10`, `src/app/security/page.tsx:12-47`; `public/.well-known/security.txt:1-5`.

### 22. `/editorial-policy` — NEEDS REVIEW

- **Intent / ICP:** Readers, clients, competitors, and search/AI systems evaluating how commercial, technical, comparison, and time-sensitive claims are sourced and corrected.
- **CTA:** “Browse the blog” and a direct editorial-correction email at `src/app/editorial-policy/page.tsx:67-72`.
- **Heading / schema:** One H1 at `src/app/editorial-policy/page.tsx:28-33`; title, description, and canonical at `src/app/editorial-policy/page.tsx:7-11`. No page-specific JSON-LD, which is not required.
- **Key copy / evidence:** The policy clearly distinguishes mutable facts, first-party results, estimates, search/performance claims, comparisons, and corrections at `src/app/editorial-policy/page.tsx:13-20`. It requires primary-source freshness checks and openly identifies that older articles still need article-level review at `src/app/editorial-policy/page.tsx:52-64`.
- **Link debt:** Blog and correction-email links are direct current destinations.
- **UI / a11y / theme:** Logical H1-H2-H3 hierarchy, semantic article cards, and current stone/cognac treatment at `src/app/editorial-policy/page.tsx:22-75`. Responsive cards, focus, and contrast are **NOT TESTED**.
- **Legal / privacy / security:** No page-specific data collection beyond email. The operational gap is material: the policy cannot be marked fully implemented until all 76 restored articles satisfy its mutable-fact, evidence, comparison, and correction rules. Keep **NEEDS REVIEW** until the article ledger closes.
- **Source refs:** `src/app/editorial-policy/page.tsx:7-20`, `src/app/editorial-policy/page.tsx:22-75`.

### 23. `/about/hassan` - NEEDS REVIEW

- **Intent / ICP:** Named founder and author profile for prospects, readers, search engines, and AI systems evaluating who is responsible for migration implementation and technical delivery.
- **CTA:** The primary action goes directly to the contact form with “Get your migration plan”; a secondary external action opens Hassan's public GitHub profile with `noopener noreferrer` at `src/app/about/hassan/page.tsx:108-115`.
- **Heading / schema:** One visible H1 at `src/app/about/hassan/page.tsx:104`; unique title, description, canonical, profile Open Graph metadata, and index/follow directives at `src/app/about/hassan/page.tsx:8-18`. Person, ProfilePage, and BreadcrumbList JSON-LD use the canonical profile URL and the shared Organization identifier at `src/app/about/hassan/page.tsx:21-61`.
- **Key copy / evidence:** The visible role matches the owner-confirmed “Co-founder and Lead Engineer” designation. Responsibilities describe implementation, delivery, measurement, and handover without claiming guaranteed rankings, revenue, or field performance at `src/app/about/hassan/page.tsx:64-80`, `src/app/about/hassan/page.tsx:121-153`. The article grid is generated from restored catalog entries attributed to Hassan rather than a manually shortened substitute at `src/app/about/hassan/page.tsx:82-83`, `src/app/about/hassan/page.tsx:158-181`.
- **Link debt:** Internal links go directly to `/about`, `/contact#contact-quote-form`, `/blog`, and current article slugs. No retired `/about/*`, `/ai-info/*`, or `/work/*` destination is introduced by this page. The LinkedIn and GitHub `sameAs` identities and the live GitHub destination were inspected in source only; external account ownership and response status were not independently verified in this refresh.
- **UI / a11y / theme:** Semantic sections, one H1, labelled H2 sections, decorative icons marked `aria-hidden`, minimum-height actions, and a text initial instead of a deleted or unapproved portrait are present. Stone, charcoal, cognac, Inter, and the restrained Playfair initial follow the current source theme. Desktop/mobile wrapping, focus, contrast, article-card height, and external navigation are **NOT TESTED**.
- **Legal / privacy / security:** No patient, medical-project, testimonial, private operational, or deleted team imagery is exposed. Keep **NEEDS REVIEW** until the public profile identities and biography are recorded as approved publication evidence, even though no blocking source defect was found.
- **Source refs:** `src/app/about/hassan/page.tsx:8-61`, `src/app/about/hassan/page.tsx:64-115`, `src/app/about/hassan/page.tsx:121-181`.

### 24. `/about/imran` - NEEDS REVIEW

- **Intent / ICP:** Named founder profile for prospects and evaluators who need to understand responsibility for migration feasibility, data/content architecture, integrations, and handover design.
- **CTA:** The primary action goes directly to the contact form with “Get your migration plan”; the secondary LinkedIn action uses `noopener noreferrer` at `src/app/about/imran/page.tsx:102-108`.
- **Heading / schema:** One visible H1 at `src/app/about/imran/page.tsx:98`; unique title, description, canonical, profile Open Graph metadata, and index/follow directives at `src/app/about/imran/page.tsx:7-18`. Person, ProfilePage, and BreadcrumbList JSON-LD use the canonical profile URL and shared Organization identifier at `src/app/about/imran/page.tsx:20-58`.
- **Key copy / evidence:** The visible role matches the owner-confirmed “Co-founder and Lead Architect” designation. Responsibilities describe feasibility, data/content architecture, and operational design without asserting unsupported outcomes at `src/app/about/imran/page.tsx:60-76`, `src/app/about/imran/page.tsx:115-151`. The owned-brand section clearly labels Panda Patches as an owner-operated reference rather than an independent client testimonial and withholds performance, cost, and revenue claims unless their measurement evidence exists at `src/app/about/imran/page.tsx:153-165`.
- **Link debt:** Internal links go directly to `/about`, `/contact#contact-quote-form`, and `/work`; the Panda Patches and LinkedIn links are external and use `noopener noreferrer`. No intentional site redirect is introduced by this page. The live LinkedIn, Panda Patches, and `sameAs` destinations were not independently verified in this source-only refresh.
- **UI / a11y / theme:** Semantic sections, one H1, labelled H2 regions, decorative icons marked `aria-hidden`, touch-sized actions, and a text initial rather than unapproved portrait imagery are present. Stone, charcoal, cognac, Inter, and Playfair align with the source theme. Desktop/mobile layout, focus, contrast, and link behavior are **NOT TESTED**.
- **Legal / privacy / security:** No confidential client, patient, medical-project, or outcome material is exposed. Keep **NEEDS REVIEW** until the public identity links and biography are captured in the publication-evidence register.
- **Source refs:** `src/app/about/imran/page.tsx:7-58`, `src/app/about/imran/page.tsx:60-108`, `src/app/about/imran/page.tsx:115-165`.

### 25. `/ai-info` - NEEDS REVIEW

- **Intent / ICP:** Human-visible company reference for prospects, search engines, and AI systems needing one canonical summary of the offer, process, commercial starting points, founders, evidence policy, and contact path.
- **CTA:** “Get your migration plan” links directly to the contact form, with a secondary services link at `src/app/ai-info/page.tsx:175-181`. The reference directory points to current services, pricing, work, about, editorial, and security routes at `src/app/ai-info/page.tsx:54-61`, `src/app/ai-info/page.tsx:277-294`.
- **Heading / schema:** One visible H1 at `src/app/ai-info/page.tsx:168-170`; unique metadata, canonical, social URL, and index/follow directives at `src/app/ai-info/page.tsx:12-23`. AboutPage, Organization, visible-answer FAQPage, and BreadcrumbList JSON-LD use consistent canonical IDs and publication/review dates at `src/app/ai-info/page.tsx:9-10`, `src/app/ai-info/page.tsx:90-156`. FAQ markup is descriptive structured data, not a promise of a Google rich result.
- **Key copy / evidence:** The page preserves the owner-confirmed February 2026 founding month, Wyoming formation, mailing address, founder roles, US-first/global service priority, package starting points, and 22-day MyCustomPatches record at `src/app/ai-info/page.tsx:25-34`, `src/app/ai-info/page.tsx:220-258`, `src/app/ai-info/page.tsx:262-272`. It qualifies 30/70 payment, support, refunds, Lighthouse acceptance, ownership, licenses, rankings, and external outcomes as scope-dependent rather than universal guarantees at `src/app/ai-info/page.tsx:63-88`, `src/app/ai-info/page.tsx:201-217`, `src/app/ai-info/page.tsx:242-253`.
- **Link debt:** Page-owned links go directly to current canonical destinations and do not use the consolidated `/ai-info/*` children. The old root `/ai-info` redirect is removed, while the narrow child redirects remain legacy consolidation rules in `next.config.js:41-70`. The current 101-URL structural crawl reports 0 redirect warnings.
- **UI / a11y / theme:** The facts use a semantic description list; migration controls, reference cards, and visible FAQs have labelled headings; decorative icons are hidden from assistive technology. Source colors and typography use paper, stone, charcoal, cognac, Inter, and Playfair. Responsive grids, heading wrap, focus, contrast, and scroll behavior are **NOT TESTED**.
- **Legal / privacy / security:** The page contains no hidden “instructions for AI,” no universal ranking/refund/performance promise, no unfinished medical case study, and no page-specific data collection. Keep **NEEDS REVIEW** because the exact contracting entity/controller identity remains intentionally unpublished, the Wyoming/identity facts are owner-confirmed rather than independently documented here, and production legal/configuration review remains open.
- **Source refs:** `src/app/ai-info/page.tsx:7-34`, `src/app/ai-info/page.tsx:36-88`, `src/app/ai-info/page.tsx:90-156`, `src/app/ai-info/page.tsx:158-315`; `next.config.js:41-70`.

## Static-cohort release blockers and next checks

1. Obtain deployment-specific privacy review for Meta, consent categories, GPC/opt-out applicability, retention, international processing, and US-first/global coverage. The public controller placeholders are fixed, but counsel/configuration review remains open.
2. Squarespace now exposes “Get your migration plan” as its primary path and a separate “Scope Squarespace improvements” option. Custom Engineering retains the shared primary migration CTA plus route-specific MVP/platform scope actions; validate this hierarchy in the browser before changing the offer language again.
3. The Custom Engineering, Wix, Squarespace, GoHighLevel, and Webflow rethemes are complete in source. Their mobile comparison structures are also source-corrected, but none has received the required rendered responsive, focus, contrast, or scroll verification.
4. Make the pricing comparison relationship programmatically clear. The contact privacy link and cookie-table caption are now fixed in source.
5. Close the 76-article source ledger before treating `/blog` and the Editorial Policy implementation as complete.
6. Attach an in-app browser and execute every route at desktop and mobile widths, including keyboard, focus, reduced motion, consent, modal, Cal.com, Tawk, form, console/network, overflow, heading wrap, font, and smooth-scroll checks. Until then, every browser field remains **NOT TESTED**.
7. Current release-integrity gates pass: isolated `.next-audit` production build, 110 generated app routes, port-3013 release smoke, 101-URL production structural crawl with 0 failures/0 warnings, and 76-page Pagefind generation. Rerun them after any later route, sitemap, canonical, internal-link, or content change. Browser verification at the requested port 3000 remains separate and **NOT TESTED**.
