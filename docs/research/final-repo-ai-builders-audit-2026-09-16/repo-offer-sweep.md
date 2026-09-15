# Final repository offer sweep

Checked 16 September 2026 at local HEAD `3efbfec`. Read-only source audit; no deployed-site comparison, browser run or independent CRM verification. Application files were not edited. This is the offer/wording portion of the wider final sweep, not a second complete OPS audit.

## Closed in current source

- English homepage H1 welcomes website buyers; no recommendation to replace it again. `src/components/sections/Hero.tsx:92`.
- Root metadata and Organization description cover websites, stores and software. `/services` metadata no longer gives a universal two-to-four-week promise. `src/app/layout.tsx:58`, `src/data/company-facts.ts:141`, `src/app/services/page.tsx:8`.
- English homepage headings are now “Engineered around how your business runs, and what can break” and “Common questions about working with us.” `src/components/sections/ServicesHub.tsx:42`, `src/components/home/HomeFaqSection.tsx:32`.
- Ecommerce H1 explicitly welcomes new builds and rebuilds. `src/app/services/ecommerce/PageContent.tsx:47`.
- Header and footer use founder-contact wording; custom-engineering hero CTA asks about the reader's workflow. `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx:45`, `src/app/services/custom-engineering/PageContent.tsx:68`.
- AI SEO gives a real monthly starting scope: ten buyer questions, two surfaces, up to five pages, one shipped improvement, reporting and review, from $500. Its attribution paragraph now permits a combined figure with once-per-order classification instead of falsely saying the figures are never combined. This fixes that wording conflict; it does not independently verify the order schema. `src/app/services/ai-seo/PageContent.tsx:54`, `:243`.
- SEO/AEO cluster pillar points to `/services/ai-seo`, not editorial policy. `src/data/topical-map.ts:395`.

## Remaining findings, in priority order

### 1. Homepage still gives two store price floors

`src/app/page.tsx:93` says “From $5,000 for an online store” while the hero and canon allow small stores from $1,500. This answer is actively rendered by `HomeFaqSection` (`page.tsx:364`) and emitted in FAQ structured data (`page.tsx:237`). Restrict the Scale example to large catalogues/subscriptions/custom commerce logic/multiple languages, matching canon. This is a real buyer-facing contradiction, not old unreachable code.

The neighbouring FAQ also publishes broad competitor minimum claims (`page.tsx:89`) despite the company-facts comment saying those Clutch minimum figures were deliberately not published (`src/data/company-facts.ts:80`). This merits its own dated sourcing check, not reuse as differentiation.

### 2. French and German entry points still sell the previous proposition

Both dictionaries contain a broadened summary but retain migration-first metadata and hero language. The hero says the visitor has outgrown WordPress/Wix and promises a move without losing existing traffic. `src/lib/i18n/dictionaries/fr.ts:35-47`, `src/lib/i18n/dictionaries/de.ts:35-47`.

Both contact pages remain migration-plan requests (`fr.ts:648-673`, `de.ts:648-673`) and their About metadata/body remain migration delivery standards (`:701-710`). These strings feed `src/components/i18n/LocalePage.tsx`; they are not unused translation backups.

Pricing summaries correctly call ongoing services optional and allow small stores at Starter (`:497`, `:621`), but operating-terms prose still automatically includes hosting in monthly service and says there is no separate hosting invoice (`:589`, `:595`). English canon says hosting and charge are agreed per client, not a standard inclusion (`src/data/company-facts.ts:105`). Align these actual obligations as well as titles.

English/Urdu working languages are not a reason to remove these locales. The user has explicitly accepted AI-assisted written translation. Simply avoid implying unqualified native spoken support or changing the agreed language policy.

### 3. Shared reference facts still contradict the revised OPS and withdrawal records

`src/data/company-facts.ts:215` describes Enterprise Ops as having **twenty** Edge Functions, although the current case-study registry declares 26. `src/app/ai-info/case-studies/page.tsx:73` renders that PROJECTS list. Fix the shared consumer, not only the work-page table.

`company-facts.ts:213` still groups hosting figures with performance as “withdrawn pending reconciliation.” Current `/services` prose correctly says hosting is permanently retired because invoices were not kept (`src/app/services/PageContent.tsx:67`). Split the different evidence statuses consistently.

The llms revenue paragraph still asserts “this is why most businesses report near-zero AI traffic” without supporting population evidence (`src/data/llms-txt.ts:128`). The observation about this store does not establish the explanation for most businesses.

### 4. The broader offer still lacks balanced buying routes

Header retains WordPress Migration first, then Custom Engineering. Five of nine specific service links are migration-labelled (`src/components/layout/Header.tsx:39-50`). Footer also uses Custom Engineering (`Footer.tsx:106`). Software hero still has the long spreadsheet/scope-validation H1 (`src/app/services/custom-engineering/PageContent.tsx:50`). Shorten that route and use the clearer visible label “Custom software”; the URL can stay unchanged.

The homepage service card title includes New Builds but its badge is “Every old link forwarded,” its prose inventories an existing site and its lower section is platform migration choices (`src/components/sections/ServicesHub.tsx:67-103`). Its ecommerce card still introduces headless rebuilds only (`:190-193`). Its AI foundations card links to About, not the monthly service (`:163-170`). `/services` still begins its three main cards with WordPress Migration (`src/app/services/PageContent.tsx:80`).

No explicit tracking/lead-attribution service route exists in these service menus. Relevant work and custom-engineering content exist, so explain a standalone engagement only if offered; do not invent a public price. Avoid rebuilding the hero to compensate for incomplete next-click routes.

### 5. The existing AI-builder comparison needs correction before another broad warning is added

`/blog/is-it-cheaper-to-build-your-own-website` already gives AI builders credit for competent, responsive layouts (`page.tsx:175`). However, it then says a builder does not give the user error handling, retries or payment webhooks (`:200-204`), restricts the appropriate use case to projects with no customers (`:177-186`), and says buyer-specific answers are something a builder “cannot do” (`:340`). These are universal capability claims; the code gives no current named-platform test to establish them. Distinguish what is supported or can be generated from what was configured and verified for this particular business.

That article also retains “Hosting ... from $20 a month ... no markup ... There is no retainer” (`:315-317`), inconsistent with current per-client hosting terms and optional monthly AI SEO/support. Its “Being readable by machines now produces orders” wording (`:324`) overstates what attributed revenue alone establishes.

By contrast, `/blog/lovable-site-not-showing-on-google` already acknowledges current SSR/pre-rendering and built-in review controls (`page.tsx:164-190`, `:283-295`), says to diagnose before rebuilding, and explicitly corrects the earlier blanket claim about Lovable/Bolt/Replit (`:470`). Preserve that balanced approach. Its own documentation check date is July 31; fresh product verification belongs to the parallel research, not this source audit.

Best addition: a dated, platform-specific production-readiness checklist describing what to verify and showing a reproducible failure where one exists. Do not market hover states, a sitemap or a mobile menu as capabilities AI builders categorically lack. Keep the existing DIY-cost article's commercial intent; add focused sections or a companion checklist only when its intent differs.

### 6. Ecommerce support copy has not caught up with its fairer opening

The opening is fixed, but lower copy says “Every app injects JavaScript that loads before your customer sees a single product” (`src/app/services/ecommerce/PageContent.tsx:183`), “Instant loading” in named cities (`:313`), and “Cut $500/mo in plugins” on a related-service card (`:604`). These broad guarantees/absolutes undermine the earlier instruction to measure the buyer's actual store. The implementation path also assumes an existing Shopify store at every stage (`:136-139`), so add the first-store path without deleting useful Shopify diagnostics.

### 7. Smaller metadata and reference wording drift remains

Homepage Twitter description still centres Next.js and answers assistants “can quote” (`src/app/page.tsx:41-42`) while its normal/OG descriptions use the new ownership/editor offer. This is alignment work, not proof of an SEO loss.

`src/data/company-facts.ts:227` labels the general `/services` link “Migration services”; `src/app/ai-info/page.tsx:197` says “Review migration services”; and `src/data/llms-txt.ts:70` calls About “Team and migration delivery standards.” Update general-company labels to the broader role; keep genuinely migration-specific articles and reference controls specific.

## Decision

Do not declare all copy aligned yet. There is no need for another homepage H1 experiment or a new visual redesign. Close the price/obligation/proof contradictions, align translated entry points and buying routes, and make any AI-builder comparison about tested production responsibilities rather than unsupported platform incapability.
