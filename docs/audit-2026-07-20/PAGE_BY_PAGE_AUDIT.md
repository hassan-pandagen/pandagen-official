# Page-by-page audit ledger

Audit date: 2026-07-24  
Scope: the 102 indexable sitemap URLs in the current working tree (25 static routes plus 77 articles)  
Deployment: none; this ledger describes local source and local test evidence only

## Final superseding status - 24 July 2026

- All **102/102 sitemap URLs** passed the final production-artifact structural crawl with 0 failures and 0 warnings.
- All **77/77 article routes** completed claim-level remediation/revalidation and passed the strict MCP Playwright rendered predicate.
- The 25 static routes completed source review. Representative homepage, commercial, consent, quote-modal, mobile-menu, policy, and long-form browser flows were tested at desktop and mobile sizes.
- Final gates pass on the exact current source: TypeScript, full ESLint, 35/35 tests, claim regression guard, Next.js 16.2.11 build with 111 pages/routes, Pagefind 77 pages / 4,168 words, release smoke, and 0 dependency vulnerabilities.

The route rows below preserve the original and intermediate finding ledger. Their `NOT TESTED`, `FAIL`, and `NEEDS REVIEW` cells are historical evidence and do not override this final status or `BLOG_REMEDIATION_TRACKER.md`. This does not claim deployment, production integration delivery, field performance, legal approval, or a manual accessibility certification on every route.

## Historical correction and batch starting point - 24 July 2026

The former statement that all 102 routes had no blocking source defect was withdrawn at this checkpoint. The structural crawl did pass all **102 sitemap URLs with 0 failures and 0 warnings**, and Pagefind did index all 77 article pages, but those engineering results alone did not clear factual, evidentiary, commercial, or attribution defects. The subsequent route-level work earned the final status above.

At this historical checkpoint, the original article cohort stood at **5 PASS, 15 NEEDS REVIEW, and 56 FAIL**, with `/blog/nextjs-sanity-stack` still awaiting assessment. The later eight-batch remediation and current browser evidence in the final status above supersede that checkpoint.

## Recovery boundary

The prior evidence-safety rewrite shortened the full blog corpus too aggressively. That rewrite was superseded. At this checkpoint, all 76 article `page.tsx` files and `src/data/blog.ts` matched the last intact Git version byte-for-byte; six referenced article images and ten blog-only animation components were also restored. The later controlled remediation then changed the article sources route-by-route while preserving the newer consent, security, form, accessibility, migration-positioning, safe blog-card copy, and full directory work.

A named-author rendering merge restores Hassan Jamal's byline without restoring deleted team portraits. The blog hub derives ISO publication dates from the restored 2026 display dates and retains modified dates separately.

## Evidence rules

- A route is not marked PASS from a template or aggregate result alone.
- Each route receives its own source/content/SEO/claim review and strict rendered-structure check; shared-template visual and interaction behavior is tested on representative desktop/mobile routes.
- Shared-component findings may be linked across routes, but every affected route still gets an explicit result.
- Browser rows that say `NOT TESTED` record the 22 July baseline. The final 24 July MCP Playwright result is recorded in the superseding status above.
- Performance is tested against a frozen production build, not the Next.js development server.
- Baseline and final scores use identical checks. Missing baseline evidence is UNTESTED, not inferred.
- PASS means no blocking finding within the audited checks; NEEDS REVIEW means owner evidence or a 2026 source is required; FAIL means a reproducible defect or policy violation.

## Required route checks

Every route receives HTTP/indexability/canonical/sitemap, metadata, H1, structured-data, source/content/claim, internal-link, and search-intent checks. Every article also receives an individual FAQ, author, citation, CTA, and GSC-preservation review plus the strict rendered predicate. Console/network, consent, responsive overflow, keyboard/focus, reduced-motion, and visual behavior are checked on representative shared templates. Full manual WCAG 2.2 AA coverage remains external and is not inferred from representative testing.

## Status ledger

Final current evidence, 24 July 2026: the Next.js 16.2.11 production artifact generated 111 pages/routes, release smoke passed on port 3000, the structural crawl passed all 102 sitemap URLs with 0 failures and 0 warnings, Pagefind indexed 77 article pages / 4,168 words, and MCP Playwright passed the strict predicate on all 77 articles. The temporary production server was stopped.

Historical automated structural crawl on `http://localhost:3000`, 2026-07-22: **101 sitemap URLs checked, 0 failures, 0 warnings**. `/ai-info`, `/about/hassan`, and `/about/imran` resolved as indexable pages. Seven reviewed legacy blog-link patterns were remediated across 66 `href` occurrences, and the post-change source scan returned zero matching hrefs.

Current production-artifact structural crawl, 2026-07-23: the isolated build was served temporarily on port 3014 and checked **102 sitemap URLs, 0 failures, and 0 warnings**. Release smoke also passed. The additional URL is the concurrently added `/blog/nextjs-sanity-stack`, which remains explicitly **NOT AUDITED / NEEDS REVIEW** rather than inheriting a content verdict from the crawl.

Historical isolated-production evidence used `PANDACODEGEN_AUDIT_BUILD=1` with output in `.next-audit`: after the then-current corrections, Next.js 16.2.10 generated **110 app routes**, including **76 articles** and the restored `/ai-info`, `/about/hassan`, and `/about/imran` pages. The artifact was served on **port 3013**; release smoke passed, and the production-artifact structural crawl passed **101 URLs, 0 failures, 0 warnings**. Pagefind indexed **76 pages / 7,313 words** at that checkpoint.

Historical route-matched verdicts at the 23 July checkpoint resolved to **17 PASS, 29 NEEDS REVIEW, and 56 FAIL** across 102 sitemap URLs. Those values are retained as the baseline finding ledger and are superseded by the 24 July status above. Both render columns retain their historical `NOT TESTED` values; the current MCP Playwright result is recorded above.

| Route | Cohort | Source | Source/content/SEO | Desktop render | Mobile render | Claims/sources | Final |
|---|---|---|---|---|---|---|---|
| `/` | Static | `src/app/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/services` | Static | `src/app/services/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/pricing` | Static | `src/app/pricing/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/contact` | Static | `src/app/contact/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/services/wordpress-migration` | Static | `src/app/services/wordpress-migration/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/services/ecommerce` | Static | `src/app/services/ecommerce/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/services/custom-engineering` | Static | `src/app/services/custom-engineering/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/services/woocommerce` | Static | `src/app/services/woocommerce/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/services/wix` | Static | `src/app/services/wix/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/services/squarespace` | Static | `src/app/services/squarespace/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/services/webflow` | Static | `src/app/services/webflow/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/services/gohighlevel` | Static | `src/app/services/gohighlevel/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/partners` | Static | `src/app/partners/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/work` | Static | `src/app/work/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/about` | Static | `src/app/about/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/about/hassan` | Static | `src/app/about/hassan/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/about/imran` | Static | `src/app/about/imran/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/ai-info` | Static | `src/app/ai-info/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog` | Static | `src/app/blog/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/manifesto` | Static | `src/app/manifesto/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/privacy` | Static | `src/app/privacy/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/terms` | Static | `src/app/terms/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/cookies` | Static | `src/app/cookies/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/security` | Static | `src/app/security/page.tsx` | See static audit: PASS | NOT TESTED | NOT TESTED | See static audit: PASS | PASS |
| `/editorial-policy` | Static | `src/app/editorial-policy/page.tsx` | See static audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See static audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/aeo-web-performance-glossary` | Article | `src/app/blog/aeo-web-performance-glossary/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/lovable-site-not-showing-on-google` | Article | `src/app/blog/lovable-site-not-showing-on-google/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/fix-meta-ad-tracking-2026` | Article | `src/app/blog/fix-meta-ad-tracking-2026/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/wix-migration-cost` | Article | `src/app/blog/wix-migration-cost/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/woocommerce-migration-cost` | Article | `src/app/blog/woocommerce-migration-cost/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/woocommerce-vs-custom-website` | Article | `src/app/blog/woocommerce-vs-custom-website/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/agentic-browsing-pagespeed-score` | Article | `src/app/blog/agentic-browsing-pagespeed-score/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/custom-website-5000-whats-included` | Article | `src/app/blog/custom-website-5000-whats-included/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/meta-conversions-api-setup-cost` | Article | `src/app/blog/meta-conversions-api-setup-cost/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/spending-more-on-ads-fewer-orders-tracking` | Article | `src/app/blog/spending-more-on-ads-fewer-orders-tracking/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/will-migrating-hurt-my-seo` | Article | `src/app/blog/will-migrating-hurt-my-seo/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/how-long-does-a-custom-website-take` | Article | `src/app/blog/how-long-does-a-custom-website-take/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/do-you-own-your-website` | Article | `src/app/blog/do-you-own-your-website/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/saas-price-increases-2026-tracker` | Article | `src/app/blog/saas-price-increases-2026-tracker/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/build-vs-buy-software-2026-cost-comparison` | Article | `src/app/blog/build-vs-buy-software-2026-cost-comparison/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/how-to-cut-saas-bill-2026` | Article | `src/app/blog/how-to-cut-saas-bill-2026/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/saas-software-pricing-audit-2026` | Article | `src/app/blog/saas-software-pricing-audit-2026/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/top-nextjs-agencies-2026` | Article | `src/app/blog/top-nextjs-agencies-2026/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/wordpress-april-2026-evidence` | Article | `src/app/blog/wordpress-april-2026-evidence/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/aeo-playbook-built-into-every-website` | Article | `src/app/blog/aeo-playbook-built-into-every-website/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/website-developer-agency` | Article | `src/app/blog/website-developer-agency/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/how-much-does-a-website-cost` | Article | `src/app/blog/how-much-does-a-website-cost/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/why-is-my-website-loading-so-slow` | Article | `src/app/blog/why-is-my-website-loading-so-slow/page.tsx` | See article audit: PASS | NOT TESTED | NOT TESTED | See article audit: PASS | PASS |
| `/blog/shopify-store-speed-optimization` | Article | `src/app/blog/shopify-store-speed-optimization/page.tsx` | See article audit: PASS | NOT TESTED | NOT TESTED | See article audit: PASS | PASS |
| `/blog/is-squarespace-bad-for-seo` | Article | `src/app/blog/is-squarespace-bad-for-seo/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/gohighlevel-keep-crm-replace-website` | Article | `src/app/blog/gohighlevel-keep-crm-replace-website/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/pagepro-alternatives` | Article | `src/app/blog/pagepro-alternatives/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/website-redesign-cost` | Article | `src/app/blog/website-redesign-cost/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/cheap-web-developer` | Article | `src/app/blog/cheap-web-developer/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/how-to-speed-up-your-website` | Article | `src/app/blog/how-to-speed-up-your-website/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/website-migration-cost-2026` | Article | `src/app/blog/website-migration-cost-2026/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/shopify-stocky-sunset-date-2026` | Article | `src/app/blog/shopify-stocky-sunset-date-2026/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/webflow-user-accounts-sunset-date-2026` | Article | `src/app/blog/webflow-user-accounts-sunset-date-2026/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/website-rebuild-cost-2026` | Article | `src/app/blog/website-rebuild-cost-2026/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/core-web-vitals-explained` | Article | `src/app/blog/core-web-vitals-explained/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/squarespace-vs-custom-website` | Article | `src/app/blog/squarespace-vs-custom-website/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/wix-vs-custom-website` | Article | `src/app/blog/wix-vs-custom-website/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/squarespace-migration-cost` | Article | `src/app/blog/squarespace-migration-cost/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/top-custom-web-development-agencies-usa-2026` | Article | `src/app/blog/top-custom-web-development-agencies-usa-2026/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/divi-theme-slow` | Article | `src/app/blog/divi-theme-slow/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/wix-too-slow` | Article | `src/app/blog/wix-too-slow/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/leaving-webflow-2026` | Article | `src/app/blog/leaving-webflow-2026/page.tsx` | See article audit: PASS | NOT TESTED | NOT TESTED | See article audit: PASS | PASS |
| `/blog/cloudflare-emdash-wordpress-replacement` | Article | `src/app/blog/cloudflare-emdash-wordpress-replacement/page.tsx` | See article audit: PASS | NOT TESTED | NOT TESTED | See article audit: PASS | PASS |
| `/blog/google-march-2026-update` | Article | `src/app/blog/google-march-2026-update/page.tsx` | See article audit: PASS | NOT TESTED | NOT TESTED | See article audit: PASS | PASS |
| `/blog/webflow-vs-custom-website` | Article | `src/app/blog/webflow-vs-custom-website/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/shopify-vs-custom-website` | Article | `src/app/blog/shopify-vs-custom-website/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/squarespace-too-slow` | Article | `src/app/blog/squarespace-too-slow/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/woocommerce-too-slow` | Article | `src/app/blog/woocommerce-too-slow/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/webflow-migration-cost` | Article | `src/app/blog/webflow-migration-cost/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/wordpress-migration-cost` | Article | `src/app/blog/wordpress-migration-cost/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/gohighlevel-website-speed` | Article | `src/app/blog/gohighlevel-website-speed/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/best-website-builder-for-gohighlevel-agencies` | Article | `src/app/blog/best-website-builder-for-gohighlevel-agencies/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/shopify-app-costs-real-monthly-bill` | Article | `src/app/blog/shopify-app-costs-real-monthly-bill/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/webflow-true-cost` | Article | `src/app/blog/webflow-true-cost/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/nextjs-hosting-zero-cost` | Article | `src/app/blog/nextjs-hosting-zero-cost/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/nextjs-sanity-stack` | Article | `src/app/blog/nextjs-sanity-stack/page.tsx` | NOT AUDITED: concurrent route outside approved four-article batch | NOT TESTED | NOT TESTED | NOT AUDITED | NEEDS REVIEW |
| `/blog/how-to-migrate-wordpress-to-nextjs` | Article | `src/app/blog/how-to-migrate-wordpress-to-nextjs/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/wordpress-vs-nextjs` | Article | `src/app/blog/wordpress-vs-nextjs/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/how-website-speed-affects-seo` | Article | `src/app/blog/how-website-speed-affects-seo/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/shopify-dawn-theme-slow` | Article | `src/app/blog/shopify-dawn-theme-slow/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/for-agencies-offer-custom-web-development` | Article | `src/app/blog/for-agencies-offer-custom-web-development/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/why-we-chose-nextjs-over-wordpress-2026` | Article | `src/app/blog/why-we-chose-nextjs-over-wordpress-2026/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/wordpress-vs-custom-code-real-cost-3-years` | Article | `src/app/blog/wordpress-vs-custom-code-real-cost-3-years/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/google-universal-commerce-protocol-what-it-means-for-your-store` | Article | `src/app/blog/google-universal-commerce-protocol-what-it-means-for-your-store/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/wordpress-ai-security-risk-2026` | Article | `src/app/blog/wordpress-ai-security-risk-2026/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |
| `/blog/wordpress-killer` | Article | `src/app/blog/wordpress-killer/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/shopify-headless` | Article | `src/app/blog/shopify-headless/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/elementor-kills-seo` | Article | `src/app/blog/elementor-kills-seo/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/wordpress-plugins-destroy-speed` | Article | `src/app/blog/wordpress-plugins-destroy-speed/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/shopify-plus-still-slow` | Article | `src/app/blog/shopify-plus-still-slow/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/wordpress-traffic-drop-speed` | Article | `src/app/blog/wordpress-traffic-drop-speed/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/shopify-slow-losing-sales` | Article | `src/app/blog/shopify-slow-losing-sales/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/shopify-conversion-rate-speed-fix` | Article | `src/app/blog/shopify-conversion-rate-speed-fix/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/why-competitor-outranks-you` | Article | `src/app/blog/why-competitor-outranks-you/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/how-to-achieve-100-pagespeed` | Article | `src/app/blog/how-to-achieve-100-pagespeed/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/how-to-fix-slow-wordpress` | Article | `src/app/blog/how-to-fix-slow-wordpress/page.tsx` | See article audit: FAIL | NOT TESTED | NOT TESTED | See article audit: FAIL | FAIL |
| `/blog/what-is-headless-commerce` | Article | `src/app/blog/what-is-headless-commerce/page.tsx` | See article audit: NEEDS REVIEW | NOT TESTED | NOT TESTED | See article audit: NEEDS REVIEW | NEEDS REVIEW |

## Non-page behavior still requiring separate rows

These are outside the 101 indexable URL total but remain mandatory before release: the current intentional redirect rules (five legacy `/ai-info/*` routes, four retired `/work/*` paths, two merged article URLs, malformed `/$`, and HTTP canonicalization), `/demo/featured-products` production 404 behavior, the generic not-found and error states, three API endpoints, robots/sitemap/manifest/llms/security/Bing files, two generated Open Graph image routes, trailing-slash policy, and retired private/API/file routes. The restored `/ai-info`, `/about/hassan`, and `/about/imran` roots are not part of this redirect cohort, and the audited blog source no longer links to the legacy redirect routes.
