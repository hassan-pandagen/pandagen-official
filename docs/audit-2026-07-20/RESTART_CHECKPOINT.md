# Restart checkpoint — July 24, 2026

## Final completion checkpoint - 24 July 2026

The repository working-copy scope is complete and saved. No commit or deployment was made.

- **77/77 article routes** completed claim-level remediation/revalidation in eight documented batches. The original finding rows remain historical evidence; the current controller is `BLOG_REMEDIATION_TRACKER.md`.
- **77/77 article routes** passed the strict MCP Playwright rendered predicate on the final localhost production artifact.
- Representative 390x844 and 1440x900 checks covered the homepage, blog index, long-form migration/cost/performance articles, deliberate table overflow, consent, quote-modal semantics and optional-phone validation, abandonment telemetry, and loopback SSRF rejection.
- `npm run check` passed TypeScript, full ESLint, all **35/35** tests, and the narrow claim regression guard.
- Next.js **16.2.11** generated **111 pages/routes**; Pagefind indexed **77 article pages / 4,168 words**.
- Release smoke passed. The structural SEO crawl checked **102 sitemap URLs / 0 failures / 0 warnings**.
- `npm run audit:dependencies` reported **0 vulnerabilities**.
- The final localhost browser navigation produced no new console errors, and Vercel Analytics correctly stayed unmounted on localhost even when analytics consent was stored.

Remaining work is external: the owner's deployment, production vendor/dashboard and email verification, field Core Web Vitals and Search Console monitoring, exact legal/entity and contract review, and full manual assistive-technology coverage. The private Git-history residual remains owner-accepted.

## Historical correction and resumed batch checkpoint

The former completion checkpoint was inaccurate and is withdrawn. The engineering gates listed below remain evidence, but they did not clear the detailed article claim ledger.

- Authoritative article baseline: **5 PASS, 15 NEEDS REVIEW, 56 FAIL** across the original 76 routes.
- `/blog/nextjs-sanity-stack` required the same route-level assessment at this checkpoint and was later completed in the eight-batch tracker.
- Seven articles received documented full rewrites. Mechanical edits across the wider corpus did not justify upgrading every route.
- The former **8.2/10 score was withdrawn**; approximately **7.4/10** was the internally consistent intermediate score at this checkpoint.
- Remediation has resumed in batches of roughly ten routes, using the claim ledger and current primary sources. Each route must independently clear visible copy, metadata, FAQ, schema, CTA, and intent-preservation checks.

All work completed in this audit session is saved in the working tree. No commit or deployment was made. Audit-managed temporary production servers were stopped after their checks; the final current-artifact smoke used port 3000.

The current-scope section below controls route/build evidence. The later `Owner-policy and SOW update` controls commercial, support, performance, entity, repository, and vendor policy wherever an earlier historical checkpoint differs.

## Historical scope correction - July 22, 2026

This section supersedes any later historical sentence that describes the older 98-URL tree, its build, its crawl warning count, or its browser pass as the current release state.

- `src/app/sitemap.ts` now emits **25 static routes** and `src/data/blog.ts` currently supplies **77 article routes**, for **102 indexable sitemap URLs**. The original route-level article audit covers 76; the concurrently added `/blog/nextjs-sanity-stack` remains explicitly not audited.
- `/ai-info`, `/about/hassan`, and `/about/imran` were restored as indexable source pages. Their old root/profile redirect mappings were removed; the five narrow `/ai-info/*` legacy-reference redirects remain intentional consolidations.
- The three restored routes were individually source-audited. Each has unique metadata, a canonical, one H1, visible/schema parity, direct current internal links, qualified commercial/evidence copy, and no deleted team portrait or unfinished medical-project material. Each remains **NEEDS REVIEW** pending public-identity/legal evidence and browser verification.
- Static source-audit roll-up: **12 PASS, 13 NEEDS REVIEW, 0 FAIL** across 25 routes. Article source-audit roll-up after the seven approved repairs: **5 PASS, 15 NEEDS REVIEW, 56 FAIL** across 76 routes. Article `FAIL` means repair the existing URL in place; it never authorizes deletion, shortening, or intent-changing redirects.
- `PAGE_BY_PAGE_AUDIT.md` now contains all 101 route rows, and every source/claims/final cell points to its exact route verdict in `STATIC_PAGE_AUDIT.md` or `BLOG_ARTICLE_AUDIT.md`. Both render columns remain **NOT TESTED**.
- The final current production structural crawl checked **102 sitemap URLs with 0 failures and 0 warnings**. Seven reviewed legacy blog-link patterns were remediated across 66 href occurrences, and the post-change source scan returned zero matches.
- The then-latest production build passed. Next.js 16.2.10 generated **111 static pages/routes**, including all 77 article routes and the restored `/ai-info`, `/about/hassan`, and `/about/imran` pages.
- The final current artifact was served temporarily on **port 3002**; release smoke passed there, and the production structural crawl passed **102 URLs / 0 failures / 0 warnings**. The temporary server was stopped afterward.
- Pagefind regenerated from that checkpoint artifact and indexed **77 pages / 7,360 words**. At that time, the original route-level article audit covered 76 and `/blog/nextjs-sanity-stack` remained separately unaudited.
- A July 21 advisory affected Next.js's transitive `sharp` 0.34.5 range. `package.json` now overrides `sharp` to patched **0.35.3**, the lockfile and installed tree resolve 0.35.3, and the current `npm audit` reports **0 vulnerabilities**.
- The in-app browser inventory returned `[]` at this historical checkpoint. The final completion checkpoint above now records current MCP Playwright coverage.
- No deployment or commit was performed.

## Owner decisions already applied

- Primary positioning: SEO-safe migrations for revenue-generating WordPress, Webflow, and GoHighLevel sites; custom engineering is secondary.
- Primary CTA: “Get your migration plan.”
- Published package starting points: Starter $1,500; Growth $3,500; Scale $5,000–$10,000. Extra pages/features are separately discussed and scoped in writing.
- Commercial model: package figures are starting defaults. Straightforward work may be confirmed through a clear quote or order summary explicitly accepted in email/chat; regulated or complex work may use a detailed signed SOW or other appropriate agreement. Another client's SOW never applies automatically.
- Refund: a 100% contracted-scope failure protection applies only when expressly included in the accepted project terms; it is not a preference/change-of-mind refund.
- Support: published defaults are 15 business days for Starter and 30 business days for Growth and Scale; the accepted project terms define when support begins, what it covers, and whether bespoke work differs.
- Performance: when incorporated into accepted project terms, the published default is 90+ Lighthouse on both mobile and desktop, with each of three recorded runs passing for every agreed representative page/profile.
- Founded February 2026.
- Hassan Jamal: Co-founder and Lead Engineer.
- Imran Raza Ladhani: Co-founder and Lead Architect.
- Mailing address: 701 Tillery St Ste 12, Austin, TX 78702, United States; it is not the registered or service-office address.
- MyCustomPatches: delivered in 22 days.
- Panda Patches: a PandaCodeGen-owned brand.
- Typography is unchanged: Inter + Playfair Display. `next/font` self-hosts the fetched font assets in the production build.

## Major remediation saved

- Phone is optional in both UI forms and the quote API.
- Quote route has bounded text-only multipart parsing, strict origin checks, validation, Redis-backed production abuse controls, idempotency, and escaped email output.
- Public audit has public-address validation, DNS/connected-peer protection, redirect/time/body/content limits, durable production abuse controls, and an opaque single-use email-summary token.
- GA4, Meta Pixel, Clarity, Vercel Analytics, Cal.com, and Tawk.to are default-denied and category-gated.
- Aggregate, consented form-start/progress/validation/error/abandonment/completion events are implemented without typed values or PII. See `docs/FORM_FUNNEL_ANALYTICS.md`.
- A browser-discovered consent cleanup gap for legacy `twk_uuid*` cookies was fixed and retested.
- Accessibility fixes include mobile navigation/dialog focus handling, quote/audit dialog focus traps, accessible FAQ patterns, and BlogSearch focus handling.
- Public indexing APIs were removed; upload handling remains disabled; production Redis paths fail closed.
- Unverified and privacy-sensitive case-study/team/testimonial assets and conflicting public claims were removed or withheld.
- The 76-route article directory remained structurally complete after the earlier destructive high-risk copy pass was rolled back. At the seven-article checkpoint it stood at 5 PASS, 15 NEEDS REVIEW, and 56 FAIL. The later eight-batch process completed all 77 current routes and is recorded in the final completion checkpoint and remediation tracker.
- Contact/footer/about/home schema and visible company facts use the confirmed address, founding date, and leadership roles. At that earlier checkpoint public phone/social profiles were withheld; the restored founder routes now expose selected LinkedIn/GitHub destinations, so identity and account ownership remain an explicit current review item.
- The audit report and claims register are saved in `docs/audit-2026-07-20/`.

## Historical validation completed before the current 101-URL restoration

- `npm.cmd run check`: passed TypeScript, ESLint, and all 35 tests after the final copy/CTA changes.
- `npm.cmd run build`: passed after allowing network access for the existing Inter and Playfair Display font download; 107 routes generated and 76 Pagefind pages indexed.
- `npm.cmd run audit:dependencies`: passed with 0 vulnerabilities.
- `npm.cmd run smoke:release -- http://localhost:3002`: passed against the final production build; the temporary server was stopped.
- `npm.cmd run seo:check -- --base-url http://localhost:3000`: checked the then-current 98 sitemap URLs with 0 failures and 0 warnings. This result is historical and must not be used as validation of the current 101-URL tree.
- MCP Playwright responsive homepage check passed at 390, 820, 1024, and 1440 CSS pixels: no horizontal overflow, no broken images, and computed fonts were Inter and Playfair Display.
- MCP Playwright mobile menu: accessible dialog, first-control focus, Escape close, and trigger-focus restoration passed.
- MCP Playwright quote dialog: `aria-modal`, accessible name/description, initial focus, tab containment, Escape close, delayed trigger-focus restoration, all control labels, optional phone, and only name/email required all passed.
- MCP Playwright consent test: first-visit prompt appeared; no optional vendor resources loaded before choice; Reject Optional stored all optional categories false and loaded no optional vendor resources.
- MCP Playwright verified the old Tawk cookie was removed after the cleanup fix.
- MCP Playwright form analytics test emitted `lead_form_started`, `lead_form_progress`, and `lead_form_abandoned` with `form_id`, counts, field identifier, elapsed time, and reason; the typed test value was absent.
- MCP Playwright contact check: phone optional, only name/email required, all visible controls labelled, confirmed address visible, no mobile overflow.
- MCP Playwright pricing check at 390 px: all three prices, support/refund/performance wording and CTA present; `$5,000–$10,000` stayed within the viewport; no overflow or broken images.
- MCP Playwright work/about check: the two owner-confirmed project facts, February 2026, address, and both founder roles appeared; disputed result figures did not.

Visual captures saved in the workspace root:

- `home-mobile-390.png`
- `pricing-mobile-390.png` (captured during entry animation)
- `pricing-mobile-390-settled.png` (settled state; use this one for review)

## Final continuation completed

1. The duplicate Work title was corrected and the final source/build gates passed.
2. MCP Playwright was reattached and the final critical-route, responsive, consent, form-abandonment, menu/modal, pricing/terms, 404, and private-target audit checks passed at `http://localhost:3000`.
3. The package/commercial model was made flexible: concise written quote/order acceptance in chat or email is supported, while regulated or complex work can use a detailed SOW or other appropriate agreement. The healthcare SOW is not a universal template.
4. The pricing hero now exposes `Get your migration plan` inside the initial 390x844 viewport.
5. Production build/smoke, the then-current 98-URL structural SEO crawl, Pagefind, dependency audit, source scans, and `git diff --check` passed for that earlier tree. No deployment or commit was performed. For the current tree, the 111-route build, port-3002 smoke, 102-URL production crawl, 77-page Pagefind generation, and dependency audit now pass. Browser verification at port 3000 remains pending because no browser is attached.

## Decisions/evidence still needed from the owner

- Formal legal contracting entity, jurisdiction, governing law/dispute forum, authorized signatory, and privacy-controller identity.
- Exact event that triggers the final 70%, plus acceptance, cancellation, cure, refund-verification, and convenience-termination treatment.
- Successful-project code/design/account ownership and licensing-transfer timing; the full-refund boundary is already recorded below.
- Exact Lighthouse representative-page/template inventory, version, device/network/location, cache/consent state, exclusions, retained evidence, and contractual remedy.
- A verified public phone remains withheld. The LinkedIn/GitHub destinations now linked from the restored founder pages still need a publication-evidence record confirming identity and account ownership.
- MyCustomPatches: whether 22 means calendar or business days, exact start/end milestones and scope, authoritative before/after performance evidence, invoices/cost period, actual project price, and original approved testimonial.
- Whether any November 2025 work/review should be described as founder prior work because PandaCodeGen was founded in February 2026.
- Panda Patches: legal owner, platform sequence, dated cost/revenue definitions and periods, and exact approved testimonial/source records.
- Partner/white-label offer status and commercial agreement.

Operational/customer/order/revenue screenshots remain deleted because authorization to use aggregate costs or testimonials does not authorize publishing personal or confidential operational data.

## Continuation update — July 21, 2026

This section supersedes the earlier “Exact remaining work after restart” list.

- Duplicate metadata suffixes were fixed on Work, Manifesto, Partners, and About.
- Blog catalog titles/excerpts were synchronized to all 76 routes; only verified
  publication dates remain, and six potentially pre-founding dates were replaced
  with honest July 21 update labels.
- Pagefind now removes its old output before every generation. The final clean
  build indexed 76 pages without carrying deleted fragments forward.
- Optional Meta, Cal, and Tawk identities moved to environment configuration and
  remain off when blank. Analytics no longer sends audit hostnames, form-field
  values, booking dates/titles, or exact performance scores; audit scores are
  coarse bands and platforms are allowlisted.
- Reduced-motion handling now covers Lenis and Framer Motion; audit errors and
  scrollable results have accessible relationships/regions; Pagefind highlights
  render through a narrow React parser; breadcrumbs have an accessible label.
- Production `error`/`warn` logging is preserved. Rate-limit client identity is
  pinned to Vercel's managed header when `VERCEL=1`, with a regression test and
  operations documentation.
- The internal featured-products route returns 404 in production. The unverified
  Yandex Webmaster token was removed pending owner confirmation.
- The unrequested MIT license was removed. The repository decision is final:
  private and proprietary, with no public open-source license. The owner accepted
  the residual private-history risk and deferred a rewrite; reassess that choice
  before widening collaborator access or making the repository public. See
  `docs/operations/GIT_HISTORY_PRIVACY_REMEDIATION.md`.
- Final `npm.cmd run check` passed TypeScript, ESLint, and 35/35 tests.
- Final `npm.cmd run audit:dependencies` reported 0 vulnerabilities.
- Final `npm.cmd run build` passed, generated 107 routes, and regenerated 76
  Pagefind pages.
- Final production release smoke passed on the production artifact at port 3002,
  including the retired API/file/demo 404 checks.
- The historical structural SEO crawl passed on that production artifact: 98 sitemap URLs,
  0 failures, 0 warnings. It predates the current 101-URL route restoration.
- The temporary production server on port 3002 was stopped. The user-managed
  development server on port 3000 was left running.
- The in-app MCP browser was reattached after restart. The final Playwright pass
  at `http://localhost:3000` is recorded in `AUDIT_REPORT.md`; production-vendor
  network behavior and full manual assistive-technology coverage remain external.

The final working-copy audit is `docs/audit-2026-07-20/AUDIT_REPORT.md`. Its
current conservative score is about 7.4/10, explicitly not production readiness;
the earlier 7.9/10 assessment remains historical only.

## Owner-policy and SOW update — July 21, 2026

- The common package starting schedule is 30% at onboarding and 70% at the delivery milestone defined in the accepted project terms; another written schedule may be used.
- A refund that is due or approved is normally initiated within 2-3 business days; the receiving bank/payment provider may take up to 10-12 business days to settle it.
- When selected, a full contracted-scope failure refund returns the client's content, data, brand assets, and client-owned accounts, but grants no right to unpaid/refunded custom code. PandaCodeGen keeps reusable tools, templates, and pre-existing code.
- Published support defaults are 15 business days for Starter and 30 business days for Growth/Scale. The accepted terms control; the start event and boundary between revisions, defects, and minor adjustments remain project-specific.
- The published Lighthouse option applies to mobile and desktop. When incorporated, every agreed page/profile must have three recorded passing runs. The exact page/template inventory and reproducible environment remain project-specific.
- The supplied healthcare SOW is a risk-specific document for that medical project, not PandaCodeGen's universal contract or operating policy. Simpler clients may explicitly accept a concise written project summary in chat/email.
- The supplied unsigned SOW identifies MC Patches LLC, doing business as PandaCodeGen, in its header, payment, and signature sections, but also uses `PandaCodeGen LLC` in Section 1. The public legal pages therefore remain on temporary brand-only wording until the exact active entity/DBA, controller, registered/service address, and authority of each intended signer are verified. The Austin address is mailing-only.
- The repository is private and proprietary, with no public open-source license. The owner has deferred a Git-history rewrite because the repository is private; deleted blobs remain a documented collaborator/backup risk but are not part of a clean deployment artifact.
- The owner intends to enable GA4, Microsoft Clarity, Meta Pixel, Cal.com, Tawk.to, and Vercel Web Analytics. Intent and an existing live deployment do not prove each production identifier, consent path, email path, or Redis failure mode.
- The supplied healthcare SOW was reviewed in full. It identifies `MC Patches LLC d/b/a PandaCodeGen` in several places but also uses `PandaCodeGen LLC`, has blank execution fields, and names a different signatory structure from the website facts. Exact current entity/authority must be verified before signature.
- The owner confirmed that portfolio use should show only PandaCodeGen-created public-facing work and link to the live site, while patient imagery, testimonials, clinical outcomes, and confidential metrics require separate written approval. The current SOW's written-only portfolio permission needs expansion for screenshots. Its `dofollow` requirement is rejected: any contract-required branded development credit will use `rel="nofollow"` with no ranking-credit promise; future voluntary editorial credits remain the client's independent choice.
- The SOW's detailed delivery, acceptance, refund, support/warranty, HIPAA/tracking, performance, accessibility, IP, account, backlink, insurance, exclusivity, and liability issues are saved in `docs/operations/SOW_REVIEW_CHECKLIST.md`.

## Brand and visual-system correction - July 22, 2026

- Replaced the homepage's generic numbered migration strip and repetitive summary with an asymmetric dark "Migration continuity ledger." It explains search, revenue, measurement, and operating continuity through client-readable artifacts rather than repeating the later four-stage process section.
- Restored the intended brand hierarchy: Inter remains the UI/body typeface; Playfair Display italic is again used for deliberate editorial emphasis; cognac now structures rules, rails, markers, panels, and primary actions instead of appearing only in tiny labels.
- Reworked the shared WordPress/WooCommerce `MigrationLanding` presentation. The hero, diagnostic sheet, migration ledger, delivery sequence, and acceptance section now form one cohesive editorial system rather than a stack of generic cards.
- Removed the visible `01` through `04` phase-number treatment. The apparent giant `0` was caused by a global `article > p:first-of-type::first-letter` drop-cap selector leaking into service cards. That global selector was deleted.
- Removed all em dashes from customer-facing source and public copy, replacing them with natural punctuation or shorter sentences. A normalization boundary also protects dynamic shared-migration copy.
- Restored the homepage proof section as an editorial evidence panel instead of the deleted carousel. It uses three short source-linked Clutch and Trustpilot excerpts recorded in the claims register, the owner-confirmed 22-day MyCustomPatches project delivery, and a clear disclosure that Panda Patches is an owned brand rather than an independent client. It deliberately excludes reviewer headshots, aggregate star claims, unsupported outcome figures, medical-project material, and the entity name the owner said not to publish. The linked directory profiles still contain stale company-authored claims that should be reconciled before deployment.
- Verification after these changes: homepage and WordPress migration routes return HTTP 200 on localhost; the homepage response contains the continuity ledger and restored proof section; the WordPress response contains the restored branded structure and no `01` phase label; TypeScript, ESLint, and all 35 security/regression tests pass; the production build generates all 107 routes and indexes all 76 blog pages; `rg` reports no em dashes and no global drop-cap selector in `src` or `public`.
- MCP Playwright visually checked the homepage and WordPress migration page at 1440x1000 and 390x844. Both had no horizontal overflow. Computed body/UI typography was Inter, editorial accents were Playfair Display italic, cognac resolved to the intended brand color, the migration page exposed zero old `01` through `04` phase labels, and the browser console reported zero errors.

## Scroll and commercial-heading correction - July 22, 2026

- Rebuilt Lenis initialization around its current package contract: one interpolation model, automatic RAF, immediate client loading, same-page anchor support with the fixed-header offset, navigation inertia cleanup, desktop viewport reconciliation, and correct reduced-motion teardown.
- Native CSS smooth scrolling now acts only as the mobile or no-Lenis fallback. When Lenis is active, native smooth behavior is disabled so two scroll engines do not compete. Reduced-motion users always receive immediate scrolling.
- Added the current recommended Lenis CSS and marked every nested scrolling surface with `data-lenis-prevent`, covering the mobile menu, quote dialog, cookie dialog, blog search, and audit result lists.
- Removed nine redundant fixed full-screen noise overlays because the body already supplies the paper texture. The fixed header no longer applies a continuous backdrop blur. These changes reduce scroll-time paint and compositor work without removing the visible brand texture.
- Added an explicit defensive reset for generic article first letters. The screenshot's apparent giant zero was the capital `O` in `Owner-confirmed fact` receiving the old drop-cap treatment from stale or overbroad CSS. The redesigned fact panels no longer use that vulnerable paragraph structure.
- Rebuilt the Work first fold as a branded evidence-standard hero with a cognac rail, selective Playfair italic, a publication-threshold panel, and two clearly differentiated owner-confirmed fact panels. The public-facing audit-progress notice was removed.
- Added the same restrained hero treatment to About, Services, Partners, Manifesto, and E-commerce. Eight live headings with unconditional hard breaks now stay inline on mobile and break deliberately from the medium breakpoint upward.
- Final validation after this batch: TypeScript, ESLint, all 35 regression/security tests, the 107-route production build, and the 76-page Pagefind generation pass. Twelve representative local routes returned HTTP 200. The approved in-app browser backend was unavailable for a final measured wheel/trackpad trace, so a hard-refresh visual and feel check remains the only pending step for this batch.

## Blog recovery correction and exhaustive-audit gate - July 22, 2026

- The earlier statement that all 76 articles had completed a safe evidence/copy pass is superseded. That pass removed too much of the long-form corpus and is not accepted as the final blog state.
- All 76 article page files and `src/data/blog.ts` were restored to the last intact Git version and verified with zero content differences. Six article evidence images and ten blog-only animation components required by 64 routes were also restored.
- The newer security, consent, form, analytics, accessibility, migration-positioning, claim-safe blog-card, search-XSS, and complete article-directory work remains in place.
- The shared author component again renders the article-provided Hassan Jamal byline, role/date/read-time, and LinkedIn target without restoring the deleted team portrait.
- The current blog hub keeps migration-focused metadata and accessible contrast. Its schema now derives deterministic 2026 publication dates from the restored catalog and keeps `lastModified` separate. TypeScript passes after the merge.
- The Webflow `When to Reassess Webflow` section was moved from an unrelated navy/blue palette to the site's stone, white, charcoal, and cognac system without changing its copy, link, or heading structure.
- Post-recovery gates completed so far: TypeScript passed, ESLint completed with 0 errors and 9 pre-existing/restored warnings, and all 35 security/regression tests passed.
- The one-row-per-indexable-route ledger at `docs/audit-2026-07-20/PAGE_BY_PAGE_AUDIT.md` now covers all 101 sitemap URLs. Every route maps to its completed source verdict, and browser checks remain `NOT TESTED` until a browser is attached.
- The in-app browser runtime initialized successfully, but its browser inventory returned `[]`; no visual result is claimed from that run. No deployment or commit was made.

## Approved four-blog repair batch - July 23, 2026

- Repaired `/blog/cloudflare-emdash-wordpress-replacement`, `/blog/leaving-webflow-2026`, `/blog/shopify-store-speed-optimization`, and `/blog/why-is-my-website-loading-so-slow` in place after owner approval. No route was deleted, merged, redirected, or stripped to a short article.
- Preserved the four GSC baselines recorded before editing: Cloudflare 1 click / 547 impressions, Leaving Webflow 1 / 1,541, Shopify speed 0 / 413, and slow website 0 / 105.
- Rendered word counts increased from 2,422 to 2,566, 3,520 to 4,149, 3,501 to 3,754, and 2,240 to 2,657. The 76-article corpus is now 2,478 words larger than Git `HEAD` under the documented rendered-count method.
- Replaced unsupported free commercial hosting, fixed platform ceilings, universal speed, ranking, revenue and refund outcomes, undocumented anecdotes, and invented Google-update effects with current primary sources, measurement context, and controlled migration guidance.
- Updated each matching blog card, FAQ data, metadata, schema, modified date, CTA, and evidence boundary. Article schema word counts now match the independently rendered totals.
- Added a page-specific slow-site diagnostic visual using the current LCP, INP, and CLS model. The old shared visual with retired FID logic was not changed globally because neighboring articles have not yet been approved for repair.
- Current official sources were checked for Cloudflare/EmDash status, Webflow plan transitions and export limits, Vercel commercial terms, Shopify performance reports and theme/app guidance, and Google Core Web Vitals, page experience, site moves, and update records.
- Full TypeScript, ESLint, and 35 security/regression tests pass. All four localhost routes return 200, expose one H1, use the correct canonical, parse their JSON-LD, and keep FAQ/data/schema parity.
- The isolated production build passed after the sandbox was allowed to fetch the existing Inter and Playfair Display files. Next.js generated 111 static pages/routes in the current working tree; that count includes the separately added, unreviewed `/blog/nextjs-sanity-stack` route. The artifact was served temporarily on port 3014, release smoke passed, and the production structural SEO crawl checked all 102 sitemap URLs with 0 failures and 0 warnings. The temporary server was stopped afterward.
- At this historical checkpoint, article source-audit totals were 5 PASS, 15 NEEDS REVIEW, and 56 FAIL. The browser-client inventory was empty, so desktop/mobile Playwright columns were recorded as NOT TESTED. The final completion checkpoint above supersedes both statuses.
