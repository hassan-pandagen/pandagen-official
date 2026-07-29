# Blog Word Count Restoration Audit

**Historical measurement date:** 2026-07-23  
**Scope:** The original 76 audited article routes under `src/app/blog/*/page.tsx`  
**Comparison:** Git `HEAD` versus the current working tree

## Superseding status - 24 July 2026

This document records the integrity check performed immediately after the original 76-route restoration. It is **not a current word-count claim** after the later eight-batch claim remediation. `/blog/nextjs-sanity-stack` is now included in the completed 77-route remediation tracker, but it remains outside this Git `HEAD` comparison.

The final editorial process did not use word count as a proxy for quality or completion. It preserved route and query intent while replacing unsupported claims with verified explanation, limitations, methodology, and decision guidance. Current completion evidence is in `BLOG_REMEDIATION_TRACKER.md`; the 23 July counts below remain reproducible historical evidence only.

## Outcome

The restored working tree contains **227,949 visitor-facing words** compared with **225,471** in Git `HEAD`. The current corpus is **2,478 words larger**, or **101.0990%** of the Git `HEAD` count.

| Measure | Git `HEAD` before | Current working tree | Change |
|---|---:|---:|---:|
| Total visitor-facing words | 225,471 | 227,949 | +2,478 |
| Percentage change | 100% | 101.0990% | +1.0990% |
| Average words per article | 2,966.7 | 2,999.3 | +32.6 |

Route-level results:

- **43 articles are unchanged.**
- **23 articles decreased**, accounting for 106 removed words in total.
- **10 articles increased**, accounting for 2,584 added words in total.
- The net result is **2,478 more words across 76 articles**.

## Reproducible Method

This is a rendered visitor-facing count, not a raw TSX token count.

1. Enumerate every directory matching `src/app/blog/*/page.tsx`. The blog index at `src/app/blog/page.tsx` is excluded.
2. Load each article twice with the same Node, TypeScript, React, and ReactDOM server-rendering harness:
   - **Before:** project source modules are read with `git show HEAD:<path>`.
   - **Current:** project source modules are read from the working tree.
3. Transpile each TSX module with TypeScript and render the returned React tree to static HTML.
4. Use the native `<article>` element as the editorial container when present. For pages without a native `<article>`, use the native top-level editorial sections inside `<main>`.
5. Count text rendered from the page and its matching shared FAQ data. This includes:
   - breadcrumb and back-link text;
   - article title and introduction;
   - visible author and date line;
   - headings, paragraphs, lists, quotations, tables, cards, and inline calls to action;
   - visible FAQ questions and answers from `src/data/blog.ts`.
6. Exclude:
   - imports, TypeScript, identifiers, comments, Tailwind classes, and JSX attributes;
   - metadata, Open Graph data, JSON-LD, schema objects, scripts, styles, and templates;
   - global header, global footer, and related-post cards;
   - URLs stored only in attributes, image alternative text, and `aria-hidden` decoration.
7. Decode HTML entities, normalize whitespace, and count tokens with the Unicode-aware expression `\/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*(?:-[\p{L}\p{N}]+)*\/gu`. Apostrophe compounds and hyphen compounds count as one word.

Because the same renderer and counting rules are applied to both snapshots, the deltas are directly comparable. A word processor may differ slightly because of different rules for slashes, symbols, and compounds. Pagefind's previously reported `7,313 words` is a search-index vocabulary statistic and must not be interpreted as total article prose.

## All 76 Article Results

| Article route | Before | Current | Delta |
|---|---:|---:|---:|
| `/blog/aeo-playbook-built-into-every-website` | 4,542 | 4,542 | 0 |
| `/blog/aeo-web-performance-glossary` | 4,483 | 4,483 | 0 |
| `/blog/agentic-browsing-pagespeed-score` | 2,295 | 2,295 | 0 |
| `/blog/best-website-builder-for-gohighlevel-agencies` | 3,953 | 3,953 | 0 |
| `/blog/build-vs-buy-software-2026-cost-comparison` | 1,106 | 1,106 | 0 |
| `/blog/cheap-web-developer` | 5,253 | 5,252 | -1 |
| `/blog/cloudflare-emdash-wordpress-replacement` | 2,422 | 2,566 | +144 |
| `/blog/core-web-vitals-explained` | 3,089 | 3,089 | 0 |
| `/blog/custom-website-5000-whats-included` | 1,598 | 1,598 | 0 |
| `/blog/divi-theme-slow` | 2,363 | 2,363 | 0 |
| `/blog/do-you-own-your-website` | 1,858 | 1,857 | -1 |
| `/blog/elementor-kills-seo` | 1,631 | 1,631 | 0 |
| `/blog/fix-meta-ad-tracking-2026` | 2,723 | 2,723 | 0 |
| `/blog/for-agencies-offer-custom-web-development` | 2,174 | 2,174 | 0 |
| `/blog/gohighlevel-keep-crm-replace-website` | 3,145 | 3,144 | -1 |
| `/blog/gohighlevel-website-speed` | 4,821 | 4,817 | -4 |
| `/blog/google-march-2026-update` | 2,065 | 2,679 | +614 |
| `/blog/google-universal-commerce-protocol-what-it-means-for-your-store` | 4,028 | 4,025 | -3 |
| `/blog/how-long-does-a-custom-website-take` | 1,252 | 1,232 | -20 |
| `/blog/how-much-does-a-website-cost` | 2,592 | 2,591 | -1 |
| `/blog/how-to-achieve-100-pagespeed` | 2,444 | 2,443 | -1 |
| `/blog/how-to-cut-saas-bill-2026` | 1,103 | 1,103 | 0 |
| `/blog/how-to-fix-slow-wordpress` | 2,719 | 2,719 | 0 |
| `/blog/how-to-migrate-wordpress-to-nextjs` | 2,522 | 2,934 | +412 |
| `/blog/how-to-speed-up-your-website` | 3,451 | 3,450 | -1 |
| `/blog/how-website-speed-affects-seo` | 3,191 | 3,190 | -1 |
| `/blog/is-squarespace-bad-for-seo` | 4,629 | 4,629 | 0 |
| `/blog/leaving-webflow-2026` | 3,520 | 4,149 | +629 |
| `/blog/lovable-site-not-showing-on-google` | 2,631 | 2,631 | 0 |
| `/blog/meta-conversions-api-setup-cost` | 2,017 | 2,017 | 0 |
| `/blog/nextjs-hosting-zero-cost` | 2,954 | 3,064 | +110 |
| `/blog/pagepro-alternatives` | 3,448 | 3,449 | +1 |
| `/blog/saas-price-increases-2026-tracker` | 989 | 989 | 0 |
| `/blog/saas-software-pricing-audit-2026` | 3,092 | 3,051 | -41 |
| `/blog/shopify-app-costs-real-monthly-bill` | 3,345 | 3,339 | -6 |
| `/blog/shopify-conversion-rate-speed-fix` | 2,967 | 2,967 | 0 |
| `/blog/shopify-dawn-theme-slow` | 2,395 | 2,395 | 0 |
| `/blog/shopify-headless` | 2,303 | 2,303 | 0 |
| `/blog/shopify-plus-still-slow` | 1,967 | 1,967 | 0 |
| `/blog/shopify-slow-losing-sales` | 3,060 | 3,060 | 0 |
| `/blog/shopify-stocky-sunset-date-2026` | 3,655 | 3,655 | 0 |
| `/blog/shopify-store-speed-optimization` | 3,501 | 3,754 | +253 |
| `/blog/shopify-vs-custom-website` | 2,748 | 2,748 | 0 |
| `/blog/spending-more-on-ads-fewer-orders-tracking` | 2,709 | 2,709 | 0 |
| `/blog/squarespace-migration-cost` | 3,905 | 3,905 | 0 |
| `/blog/squarespace-too-slow` | 2,177 | 2,176 | -1 |
| `/blog/squarespace-vs-custom-website` | 3,300 | 3,300 | 0 |
| `/blog/top-custom-web-development-agencies-usa-2026` | 6,451 | 6,451 | 0 |
| `/blog/top-nextjs-agencies-2026` | 2,717 | 2,716 | -1 |
| `/blog/webflow-migration-cost` | 4,466 | 4,463 | -3 |
| `/blog/webflow-true-cost` | 2,583 | 2,582 | -1 |
| `/blog/webflow-user-accounts-sunset-date-2026` | 3,934 | 3,937 | +3 |
| `/blog/webflow-vs-custom-website` | 2,569 | 2,569 | 0 |
| `/blog/website-developer-agency` | 2,432 | 2,432 | 0 |
| `/blog/website-migration-cost-2026` | 5,546 | 5,546 | 0 |
| `/blog/website-rebuild-cost-2026` | 5,219 | 5,218 | -1 |
| `/blog/website-redesign-cost` | 5,627 | 5,627 | 0 |
| `/blog/what-is-headless-commerce` | 3,533 | 3,533 | 0 |
| `/blog/why-competitor-outranks-you` | 2,054 | 2,054 | 0 |
| `/blog/why-is-my-website-loading-so-slow` | 2,240 | 2,657 | +417 |
| `/blog/why-we-chose-nextjs-over-wordpress-2026` | 2,158 | 2,158 | 0 |
| `/blog/will-migrating-hurt-my-seo` | 1,418 | 1,417 | -1 |
| `/blog/wix-migration-cost` | 1,852 | 1,852 | 0 |
| `/blog/wix-too-slow` | 3,443 | 3,443 | 0 |
| `/blog/wix-vs-custom-website` | 3,335 | 3,335 | 0 |
| `/blog/woocommerce-migration-cost` | 2,485 | 2,485 | 0 |
| `/blog/woocommerce-too-slow` | 4,628 | 4,627 | -1 |
| `/blog/woocommerce-vs-custom-website` | 2,669 | 2,669 | 0 |
| `/blog/wordpress-ai-security-risk-2026` | 2,068 | 2,069 | +1 |
| `/blog/wordpress-april-2026-evidence` | 2,836 | 2,836 | 0 |
| `/blog/wordpress-killer` | 1,514 | 1,514 | 0 |
| `/blog/wordpress-migration-cost` | 3,875 | 3,867 | -8 |
| `/blog/wordpress-plugins-destroy-speed` | 1,727 | 1,727 | 0 |
| `/blog/wordpress-traffic-drop-speed` | 2,547 | 2,545 | -2 |
| `/blog/wordpress-vs-custom-code-real-cost-3-years` | 2,385 | 2,381 | -4 |
| `/blog/wordpress-vs-nextjs` | 3,025 | 3,023 | -2 |

## Classification of Remaining Deltas

### Approved Google March rewrite

`/blog/google-march-2026-update` changed from **2,065 to 2,679 words**, a delta of **+614**. The approved rewrite replaces unsupported universal update claims with the confirmed rollout record, source-backed Core Web Vitals guidance, Search Console comparison steps, and a more complete diagnostic process. The route is longer because it now distinguishes confirmed facts, hypotheses, and site-specific evidence instead of presenting one cause for every ranking change.

### Approved hosting-guide expansion and correction

`/blog/nextjs-hosting-zero-cost` changed from **2,954 to 3,064 words**, a delta of **+110**. The approved rewrite removes the repeated claim that commercial client sites can use Vercel Hobby as free business hosting, removes unsupported visitor-capacity and reliability assurances, and adds current personal and non-commercial Hobby limitations, commercial-plan budgeting, usage caveats, continuity guidance, decision controls, and updated shared FAQs. This is a factual and terms correction with a net increase in useful visitor-facing material.

### Approved migration-guide expansion

`/blog/how-to-migrate-wordpress-to-nextjs` changed from **2,522 to 2,934 words**, a delta of **+412**. The approved article and shared FAQ revisions add URL inventory, redirect validation, staged crawl QA, canonical and metadata preservation, Google Search Console monitoring, commercial-hosting budgeting, decision controls, validation detail, and clear language that no agency can guarantee rankings. The added material replaces unsupported universal outcomes with a more complete migration-control process.

### Approved four-article evidence repair

The Cloudflare EmDash article changed from **2,422 to 2,566 words** (+144), the Leaving Webflow article from **3,520 to 4,149** (+629), the Shopify speed article from **3,501 to 3,754** (+253), and the slow-website article from **2,240 to 2,657** (+417). All four routes, query topics, useful troubleshooting or decision coverage, FAQs, and internal-link paths remain. The added material replaces unsupported platform ceilings, universal business outcomes, free commercial hosting, ranking and refund promises, and stale vendor conclusions with current primary sources, diagnostic context, migration controls, and explicit evidence boundaries.

### Confidential example generalized safely

`/blog/how-long-does-a-custom-website-take` changed from **1,252 to 1,232 words**, a delta of **-20**. A potentially identifying medical-practice example was replaced with a general regulated or expert-led approval-chain example. The replacement preserves the lesson about asset approval, subject-matter review, decision-makers, response windows, and dependencies without exposing a confidential project context.

### One explicit public-content exclusion

`/blog/saas-software-pricing-audit-2026` accounts for **41 removed words**. The removed sentence presented an unfinished US plastic-surgery project as a recent client result and included a projected payback period. The project is not complete and the owner explicitly instructed that it must not be published as a case study. The remaining difference on that route is a shorter internal-link label.

### Technical labels, public naming, and punctuation

After excluding the confidential-example generalization and the explicit unfinished-project exclusion, the other 21 decreased routes account for **45 words in total**, with no route losing more than 8 words. These differences come from:

- replacing retired `/ai-info/*` and individual case-study links with live `/services`, `/pricing`, and `/work` destinations;
- shortening labels such as `Migration Services reference page` to `services overview` and `Pricing & Guarantees` to `pricing page`;
- replacing the entity wording that the owner instructed must not appear publicly with the MyCustomPatches brand name;
- punctuation normalization, including removal of em-dash constructions;
- small wording corrections required by the restored public route structure.

### Increases

The approved Google March rewrite gained **614 words**, and the two approved migration and hosting guides gained **522 words in total**. The approved Cloudflare, Leaving Webflow, Shopify speed, and slow-website repairs gained **1,443 words in total**. Three other routes gained **5 words in total** through small grammar, clarification, or link-label changes. These ten increased routes account for **2,584 added words**. No article was padded merely to offset a reduction.

## Article Schema Word Counts

The rendered method includes the visible article container and shared FAQs, so these are the correct `Article.wordCount` values under this audit's declared counting standard:

| Article route | Current rendered count | Current schema value | Correct schema value |
|---|---:|---:|---:|
| `/blog/nextjs-hosting-zero-cost` | 3,064 | 3,064 | **3,064** |
| `/blog/how-to-migrate-wordpress-to-nextjs` | 2,934 | 2,934 | **2,934** |
| `/blog/cloudflare-emdash-wordpress-replacement` | 2,566 | 2,566 | **2,566** |
| `/blog/leaving-webflow-2026` | 4,149 | 4,149 | **4,149** |
| `/blog/shopify-store-speed-optimization` | 3,754 | 3,754 | **3,754** |
| `/blog/why-is-my-website-loading-so-slow` | 2,657 | 2,657 | **2,657** |

The application schema now matches the rendered counts recorded by this audit.

## Conclusion

There is no remaining broad unapproved article-body reduction. The seven approved article repairs are **2,579 words larger in total** and contain more evidence, process, terms, validation, and risk-control detail. The two notable reductions are the safe generalization of a confidential medical-project example and the removal of an unfinished project statement that should not have been published as a completed result. The remaining 45 removed words are distributed across technical link labels, required public naming, and punctuation changes while all 76 article URLs, topics, headings, and long-form bodies remain present. The complete corpus is **2,478 words larger** than Git `HEAD`.
