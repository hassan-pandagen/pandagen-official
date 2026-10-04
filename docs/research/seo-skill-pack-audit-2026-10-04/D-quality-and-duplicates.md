# D: Quality and duplicates audit (new site, 4 Oct 2026)

Skills run: duplicate-intent-audit, page-quality-audit, content-creation-standards.
Target: the uncommitted redesign served at http://localhost:3400 (151 sitemap URLs, all crawled, all 200, all self-canonical, all indexable).
Data: GSC exports in scratchpad\gsc (90d = 5 Jul to 3 Oct 2026), 3 URL Inspection calls, one fetch each of the live sitemap, one live page and one live redirect.
Working files (crawl HTML, extracted text, scripts): scratchpad\audit\D\

## Top findings (ranked by impact)

1. **BLOCKER: MyCustomPatches is still labelled an independent client, but whether it is independent is an open question in the repo.** `src/data/case-study-facts.ts:97-103` (29 Sep) says the owners are checking whether MC Patches LLC is Panda Patches' own legal entity. If it is, the project is founder-affiliated and "its relationship, disclosure and the Clutch review wording must all change". The new build still says "Independent client. PandaCodeGen has no ownership or financial stake in the business" on /work/mycustompatches. It also lists the project under "Sites and systems built for independent clients" on /work. And it shows the Matt Conner Clutch review (signed "Executive, MC Patches LLC") on /, /services/wordpress-migration and /services/ecommerce. CONFIRMED from the rendered pages. Settle this before deploying.
2. **The migration-cost hub competes with its own platform pages.** /blog/website-migration-cost-2026 has a full H2 section for every platform, and it collects impressions on platform queries that the dedicated pages answer better. Example: on "webflow migration cost 2026" the hub got 67 impressions at position 17.8, against 49 at 5.8 for /blog/webflow-migration-cost. In the last 28 days the spokes dropped out. wordpress-migration-cost went from 381 to 2 impressions and webflow-migration-cost from 368 to 29. URL Inspection today shows webflow-migration-cost as "Crawled - currently not indexed" (last crawl 9 Aug). The overlap is CONFIRMED from data. That the hub caused the drop is INFERRED.
3. **Three URLs split "wordpress to next.js migration services", and none reaches page 1.** The numbers: /services/wordpress-migration 151 impressions at 21.7, /blog/how-to-migrate-wordpress-to-nextjs 134 at 26.8, /blog/wordpress-migration-cost 38 at 53.9. The redesign adds to this. The new meta description on the migration service page opens "Build or improve a WordPress website", which is the job of the new /services/wordpress page. On the live site the description is about migration only. CONFIRMED.
4. **NorthDeck Group and Saforne have relationship labels that live outside the canonical registry, so the disclosure build guard never checks them.** Neither is in `case-study-facts.json`. /work/northdeck-group hand-types "no ownership or financial stake", sourced from "the owners' own statement" (`src/app/work/northdeck-group/page.tsx:5-9`). Saforne appears under three labels: "Client" on the home page, "Client project" on /ai-info/case-studies and "Independent client" in WorkIndexDesign. It also sits under the "built for independent clients" heading on /work. Item 1 of the rollout plan's inconsistency list is still open. CONFIRMED.
5. **The /ai-info/competitor-comparison redirect points somewhere that does not match the searches.** It 301s to /pricing (`next.config.js:58`). In 90 days it still collected 515 impressions (81 in the last 28), 339 of them on "bejamas vs pagepro" at position 6.7. On that same query, /blog/top-nextjs-agencies-2026 ranked 3.7. A shortlist page fits that search better than a price list. CONFIRMED data; the better target is INFERRED. The repo's dated reason for not rebuilding the page still holds, so this is the owner's call.
6. **Four pairs of posts answer the same question, and each pair barely registers in search.** These are low-risk merges, because almost no search traffic is at stake:
   - wordpress-killer (17 impressions) and wordpress-vs-custom-code-real-cost-3-years (18): both are three-year WordPress cost models. This is the highest prose overlap in the blog (9.8%).
   - how-to-cut-saas-bill-2026 (10) and saas-software-pricing-audit-2026 (724).
   - how-to-speed-up-your-website (37) and why-is-my-website-loading-so-slow (28): "12 checks" against "12 causes".
   - shopify-slow-losing-sales (51) and shopify-conversion-rate-speed-fix (46).

   The same intent is CONFIRMED by titles, descriptions and H2s. GSC has no shared-query rows for these pairs because the data is too thin, so this is not proven cannibalization.
7. **Readers can't see when a post was updated.** 7 of the 8 sampled posts show only the original publish date in the byline (for example "Mar 13, 2026"), while their JSON-LD dateModified is in August 2026. The eighth, shopify-store-speed-optimization, shows "Updated August 1, 2026" while its schema says 2026-08-20. CONFIRMED.
8. **The new /work pages are thin and under-built compared with the existing case studies.** medical-template, panda-publisher, sleek-jackets and a-step-above-medical:
   - They run 331 to 488 words.
   - In page content they are linked only from /work.
   - They have no page-level schema. The older /work pages carry Article, BreadcrumbList and FAQPage.
   - Titles run 64 to 87 characters and descriptions 156 to 183.
   - medical-template's meta description promises "provider bios" that the page never shows.
   - a-step-above-medical is an indexable placeholder that says "nothing on this page should be read as a finished case study".

   CONFIRMED.
9. **What holds up well.** Site-level AI disclosure is clear (/editorial-policy section 04) and every blog post links to it. Bylines resolve to /about/hassan. There are no invented reviewers. Reddit, Trustpilot and Clutch quotes link to their sources. Outcome language across the sample is carefully hedged. The one overclaim found is on wordpress-plugin-security-2026: the title says "Speed Is the Only Real Defence" and the H1 says "nothing is secure, only fast", while the body is careful. CONFIRMED.

---

## Part 1: Duplicate-intent audit

### Step 0 answers (fallbacks used)

- **How content is produced:** hand-written with AI assistance, according to /editorial-policy. There are 88 blog posts on one shared article template. The service pages use a shared redesign template (9 of 10), and so do the /work pages.
- **Naming drift:** yes. The same kind of page exists under several slug patterns: `-cost`, `-true-cost`, `-real-cost-3-years`, `-killer`, `-too-slow`, `-slow`, `-speed`, `-speed-fix`, `-optimization`.
- **Search Console:** used. page_query_90d holds 3,958 rows covering 57,088 impressions. That is only 35% of the 161,550 page-level impressions, because GSC hides rare queries. Missing pair evidence is therefore not proof that a pair is clean.
- **Already merged:** webflow-migration-50-to-100-pages, gohighlevel-migration and google-march-2026-update (all Jul/Aug 2026), plus panda-codelab (30 Sep). None of these is re-flagged here.

### Method

- Clusters were built from entity plus content type, using the title, H1, description and H2 list of every rendered page.
- Text overlap is a secondary signal only. It is measured as word 6-gram containment between the two pages' main content, after removing shingles that appear in at least 25% of blog posts (author box, CTA, footer cards). "A-in-B" means the share of A's shingles that also appear in B.
- GSC figures are 90-day clicks / impressions / average position, plus impressions for the previous 28 days and the last 28 days.

### Cluster 1: Website migration cost (hub plus six platform pages). CONFIRMED overlap

| URL | 90d c / imp / pos | prev28 → last28 imp | Top query (imp @ pos) |
|---|---|---|---|
| /blog/website-migration-cost-2026 (hub) | 2 / 2,260 / 8.7 | 1,394 → 762 | website migration cost (463 @ 9.6) |
| /blog/wordpress-migration-cost | 0 / 439 / 25.9 | 381 → 2 | website migration cost (81 @ 46.7) |
| /blog/webflow-migration-cost | 1 / 412 / 30.5 | 368 → 29 | webflow migration cost 2026 (49 @ 5.8) |
| /blog/squarespace-migration-cost | 2 / 658 / 10.2 | 157 → 146 | how much does it cost to migrate a website (31 @ 23.0) |
| /blog/wix-migration-cost | 1 / 412 / 13.1 | 206 → 63 | how much does it cost to migrate a website (25 @ 40.6) |
| /blog/woocommerce-migration-cost | 0 / 51 / 10.4 | 8 → 5 | cost to migrate to woocommerce (19 @ 16.7) |

Queries where two or more of these pages both appear (from page_query_90d):

| Query | Pages (imp @ pos) |
|---|---|
| website migration cost | hub 463 @ 9.6; wordpress-migration-cost 81 @ 46.7 |
| website migration costs | hub 283 @ 5.3; wordpress-migration-cost 34 @ 46; /blog/topic/website-migration 8 @ 30.1 |
| how much does it cost to migrate a website | hub 65 @ 10.8; squarespace 31 @ 23.0; wix 25 @ 40.6; wordpress 5 @ 71.8 |
| webflow migration cost 2026 | hub 67 @ 17.8; webflow-migration-cost 49 @ 5.8; leaving-webflow-2026 17 @ 13.5; webflow-true-cost 17 @ 38.2 |
| webflow migration cost | hub 43 @ 15.6; webflow-migration-cost 37 @ 7.0 |
| website migration service cost | hub 91 @ 11.3; wordpress-migration-cost 8 @ 40.1 |
| how much does wordpress migration cost? | hub 8 @ 6.0; wordpress-migration-cost 8 @ 8.1 |

Across 10 shared queries, the hub and wordpress-migration-cost together drew 1,259 impressions. The hub and webflow-migration-cost shared 7 queries (275 impressions).

- **Text overlap:** low (hub against wordpress spoke 4.1% / 3.9%). They are not copy-pasted. The overlap is in intent: the hub has H2s titled "WordPress migration cost", "Webflow migration cost", "Wix migration cost" and so on, each answering the spoke's question.
- **Index state today (URL Inspection):** wordpress-migration-cost is "Submitted and indexed" (last crawl 6 Aug) but drew 2 impressions in the last 28 days. webflow-migration-cost is "Crawled - currently not indexed" (last crawl 9 Aug). This was the site's top impression page back in May (GSC_TRACKER.md wk 9-10).
- **Likely root cause:** a hub-and-spoke set where the hub was written as a full answer for every platform. The tracker shows it was created in May "to funnel" webflow-migration-cost traffic (GSC_TRACKER.md:255).
- **Survivor and merge plan:** keep all seven URLs. Do not merge the spokes into the hub. The data supports keeping them: on its own query the spoke ranked 5.8 to 7.0 while the hub ranked 15.6 to 17.8.
  - Cut each per-platform H2 on the hub down to 2 or 3 sentences plus the matrix row and a link, so the hub owns "website migration cost" and each spoke owns "[platform] migration cost".
  - Once the new build is live, ask Google to recrawl webflow-migration-cost.
  - Watch whether wordpress-migration-cost and webflow-migration-cost come back within 4 weeks. If they don't, re-check before taking any further action.

### Cluster 2: WordPress to Next.js migration, service page against blog posts. CONFIRMED split

| Query | Pages (imp @ pos) |
|---|---|
| wordpress to next.js migration services | /services/wordpress-migration 151 @ 21.7; /blog/how-to-migrate-wordpress-to-nextjs 134 @ 26.8; /blog/wordpress-migration-cost 38 @ 53.9 |
| wordpress to nextjs migration | blog how-to 29 @ 20.6; service 17 @ 13.6 |
| wordpress to next.js migration agency | service 21 @ 27.6; blog how-to 20 @ 21.0 |
| wordpress to next.js migration | blog how-to 22 @ 25.3; service 7 @ 11.9; cost 1 @ 15 |
| wordpress website to next js migration | blog how-to 10 @ 23.6; service 8 @ 13.4 |
| migrate wordpress to nextjs | blog how-to 9 @ 29.3; service 8 @ 14.9 |

The service page and the how-to post co-appear on 10 queries (500 impressions).

- **Page totals (90d):** service 2 / 599 / 15.5; how-to 6 / 992 / 19.0.
- **Text overlap:** under 3%. The content types differ, which is fine. The problem is that Google has not settled which page answers the commercial query.
- **New in the redesign:**
  - The service page title changed from "WordPress Website Migration" (live) to "WordPress to Next.js Migration Services". That is a good match.
  - Its new meta description reads "Build or improve a WordPress website, or plan a move to Next.js", and the body opens with "Start. Improve. Or migrate." plus "Build the WordPress site you need."
  - The new /services/wordpress (title "WordPress Website Design & Development") owns "build a WordPress site". The two service pages now share part of their stated purpose.
- **Survivor:** /services/wordpress-migration for commercial ("services", "agency") queries. The how-to post stays for "how to" queries. No merge, because the content types differ.
- **Plan:**
  - Point the migration service page's meta description back at migration only.
  - Keep the short "Path A" router paragraph that links to /services/wordpress.
  - In the how-to post and the cost post, change the anchor text pointing at the service page. Today it reads "how we scope a WordPress migration" and "WordPress migration service page". Use the commercial phrase instead, "WordPress to Next.js migration services".
- **Caveat:** this pair is on page 2-3 for every query. The split is real, but fixing it alone will not reach page 1.

### Cluster 3: /ai-info/competitor-comparison redirect against Next.js agency lists. CONFIRMED data, INFERRED fix

- **Redirect:** /ai-info/competitor-comparison → /pricing (308 locally and live; `next.config.js:58`).
- **Search data:** the URL still drew 515 impressions in 90 days (372 in the previous 28, 81 in the last 28) at position 7.3.
- **Main query:** "bejamas vs pagepro – for next.js projects in united states". Impressions: competitor-comparison 339 @ 6.7, /blog/top-nextjs-agencies-2026 49 @ 3.7, /blog/pagepro-alternatives 1 @ 1.
- **The mismatch:** a comparison query lands on a price page. The repo comment explains why the page itself was retired: it "would need vendor pricing this environment cannot verify". That reason does not stop pointing the redirect at the disclosed shortlist post.
- **Recommendation for the owner:** retarget the 301 to /blog/top-nextjs-agencies-2026, or leave it as it is. The cost of leaving it: the 81 impressions a month still served from the old URL land on /pricing.

### Cluster 4: Near-invisible same-intent pairs. CONFIRMED same intent; data too thin to prove cannibalization

| Pair | 90d imp (pos) | Text overlap | Evidence of same intent | Survivor and plan |
|---|---|---|---|---|
| /blog/wordpress-killer vs /blog/wordpress-vs-custom-code-real-cost-3-years | 17 (6.9) vs 18 (9.3) | 9.8% / 8.5%, the highest blog pair | Both are "3-year WordPress cost" models. Descriptions: "Calculate three-year WordPress cost from invoices..." vs "Compare WordPress and custom code over three years with editable inputs..." | Keep wordpress-vs-custom-code-real-cost-3-years: the slug matches the intent and it has a worked model with numbers filled in. Move the invoice-ledger section from wordpress-killer into it and 301 the killer slug. Both pages are nearly invisible, so no search equity is at risk. |
| /blog/how-to-cut-saas-bill-2026 vs /blog/saas-software-pricing-audit-2026 | 10 (8.3) vs 724 (5.6) | 4.9% / 3.5% | Both are step-by-step SaaS spend audits ("five-step audit" vs "8-step audit") | Keep saas-software-pricing-audit-2026. Fold in the "Shopify app billing two-path check" section and 301. |
| /blog/how-to-speed-up-your-website vs /blog/why-is-my-website-loading-so-slow | 37 (7.1) vs 28 (11.2) | 3.1% / 3.5% | "12 Checks" vs "12 Causes + Fixes", both a general site-speed diagnosis | Keep how-to-speed-up-your-website: it has a worked example measured on its own page and is the redesign's flagship article template. Move the "why it seems fast to you" and "how to tell if it is actually slow" sections across, then 301. Check with the owner first, because the redesign gave this route special treatment. |
| /blog/shopify-slow-losing-sales vs /blog/shopify-conversion-rate-speed-fix | 51 (17.1) vs 46 (13.2) | 3.9% / 2.9% | Both "join funnel data with performance, model impact as a range"; both have numbered steps ending in "repair or rebuild" | Keep shopify-conversion-rate-speed-fix (14 steps, clearer search phrase). Fold in the "four different numbers" framing and 301. |

### Clusters checked and cleared (distinct intent, no action)

| Cluster | Pages | Why it is cleared |
|---|---|---|
| Redesign vs rebuild vs general cost | website-redesign-cost (133 imp), website-rebuild-cost-2026 (98), how-much-does-a-website-cost (78), custom-website-5000-whats-included (54) | Each page defines itself against the others: redesign = same platform, rebuild = new build. They share no queries in the data. 5.6% overlap. Watch, don't merge. |
| Platform "too slow" series | squarespace/wix/woocommerce-too-slow, gohighlevel-website-speed, divi-theme-slow, shopify-dawn-theme-slow | Different entity on each page. At most 3% overlap. One shared query: "woocommerce low conversion rate" hits woocommerce-low-conversion-rate (29 @ 18.1) and woocommerce-too-slow (10 @ 52.2). Minor. |
| WordPress speed | how-to-fix-slow-wordpress, wordpress-plugins-destroy-speed, wordpress-traffic-drop-speed, elementor-kills-seo | Different angle on each (method ladder, plugin audit, traffic diagnosis, builder SEO). 5-8% overlap. No shared queries. |
| Shopify speed | shopify-store-speed-optimization (3,592 imp), shopify-dawn-theme-slow, shopify-plus-still-slow | Distinct, apart from the pair in Cluster 4. Dawn against conversion-rate-speed-fix shows 9.2% overlap; watch it. |
| Webflow | webflow-true-cost (using Webflow), webflow-migration-cost (leaving it), leaving-webflow-2026 (deciding), webflow-vs-custom-website, /services/webflow | Distinct jobs. leaving-webflow-2026 and webflow-vs-custom-website both answer "stay or go", but they share no queries and both are growing (178 and 111 imp last 28d). Watch. Note: webflow-true-cost dropped 705 → 10 and is listed as crawled-not-indexed in GSC_TRACKER (21 Sep). /services/webflow has never been crawled (0 imp). |
| Headless | what-is-headless-commerce, shopify-headless, which-website-builders-can-go-headless | Definition, cost and builder list. One shared query, "what is a headless storefront" (7 vs 1 imp). Note: shopify-headless fell 1,276 → 8 imp yet is "Submitted and indexed" (URL Inspection). The commit 6a016b46 repositioning came after that, so this is not a duplicate issue. |
| Meta tracking | fix-meta-ad-tracking-2026 (787), spending-more-on-ads-fewer-orders-tracking (5), meta-conversions-api-setup-cost (291) | fix-meta and spending-more overlap on "reconcile orders against Meta events", but spending-more starts from the business symptom and also covers Google enhanced conversions. Possible duplicate, not confirmed. Make the difference sharper rather than merging. |
| Agency lists | top-custom-web-development-agencies-usa-2026, top-nextjs-agencies-2026, pagepro-alternatives, website-developer-agency | Different entity or angle on each. Shared queries are tiny (3 + 1 imp). |
| GoHighLevel | gohighlevel-website-speed, gohighlevel-keep-crm-replace-website, best-website-builder-for-gohighlevel-agencies, /services/gohighlevel | Distinct. "speed up go high level website": blog 80 @ 11.2 vs service 1 @ 31. Normal. |
| WordPress security | wordpress-plugin-security-2026, wordpress-ai-security-risk-2026, wordpress-april-2026-evidence | Different incidents. 3-5% overlap. |
| Brand query | "pandacodegen" (176 imp spread over 15 URLs) | Normal behaviour for a brand search, not cannibalization. |

### /ai-info reference pages against the main pages (two hubs for one entity)

- /ai-info/team-and-company: 77% of its 6-grams also appear on /ai-info/case-studies. The governance block (evidence policy, paid placement, review sourcing, BAA, crawl policy, corrections) is rendered on both pages. The identity facts are repeated on /ai-info.
- /ai-info/pricing-and-guarantees: 48% of its 6-grams appear on /pricing.
- **GSC:** almost nothing (25 to 122 imp each in 90d, mostly odd queries).
- The repo documents restoring these pages on purpose on 8 Aug (`next.config.js:51-56`), so this is a design choice. A cheap fix: render the governance block on one page only and link to it from the other. Low priority.

### Step 2: Pages still built at redirected URLs

None found. Every redirect source in `next.config.js` (/ai-info/competitor-comparison, /blog/topic, /blog/webflow-migration-50-to-100-pages, /blog/gohighlevel-migration, /blog/google-march-2026-update, /work/panda-codelab) has no route under src/app. None of them is in the new sitemap, and no crawled page links to any of them. `src/proxy.ts` only sets headers and contains no rewrites. The /preview/* routes are built but carry `noindex, nofollow` (checked /preview/work, /preview/work/northdeck-group, /preview/blog, /preview/services/wordpress). /demo/featured-products returns 404 with noindex. CONFIRMED.

### Step 4: Prevention

`scripts/similarity_audit.py` and `scripts/dupe_prose.py` already catch duplicate text. Nothing catches duplicate intent, which is what all four Cluster 4 pairs are: same intent, under 10% text overlap. Proposal:

- Add an `intent: { entity, type }` field to every entry in `src/data/blog.ts`. Example: `{ entity: 'wordpress', type: 'tco-model' }` or `{ entity: 'website-migration', type: 'cost' }`.
- Add a guard that fails the build when two posts share both values.
- For hubs, require a list of the spokes they cover, and fail when a hub H2 matches a spoke's primary query.
- For comparison posts, the guard should also look for the reversed pair.

---

## Part 2: Page quality audit

### Step 0 answers (fallbacks used)

- **YMYL:** money-adjacent (cost and pricing guides, vendor shortlists). The stricter standard was applied.
- **Production method:** stated at site level on /editorial-policy section 04: "researched, drafted and edited by a named person with AI assistance".
- **Verification process:** stated on /editorial-policy. Release guards in scripts/ (metrics_guard, link_guard, check_dates, spec_freshness).
- **Template sizes:** 88 blog posts, 10 service pages, 10 /work pages, 11 topic hubs, 5 /ai-info pages.

### Shared boilerplate by template (main content only; nav, header and footer removed)

| Template | Pages | Exact repeated blocks shared with at least 1 other page, % of words (range) | Shared with at least half the family | Notes |
|---|---|---|---|---|
| Blog post | 88 | 3.4% to 12.8% | 0.3% to 3.2% | Mostly the author box, CTA and related cards. Fine. |
| Service page | 10 | 18.5% to 23.5% (wordpress-migration 3.1%) | 13.7% to 18.3% | Section labels plus a shared process and proposal copy ("Each stage creates something you can review...", "These are starting answers..."). 6-gram overlap between pairs is 6% to 13%. Moderate. Platform-specific content carries each page. |
| /work case study | 10 | 0.9% to 4.3% | 0.9% to 1.9% | Good. |
| Topic hub | 11 | 10.8% to 37.4% | 9.8% to 22.7% | Thin pages (445 to 1,033 words) that share an intro byline and a pricing blurb. /blog/topic/website-migration is the highest at 37%. |
| /ai-info | 4 sub-pages | 2.5% to 78% | | See Part 1. |

### Sampled pages

Sample:

- Home.
- Service pages: /services/wordpress-migration, /services/webflow, /services/wordpress (new).
- Blog posts. The top 6 by 90-day impressions: nextjs-hosting-zero-cost (101,772), shopify-app-costs-real-monthly-bill (5,556), divi-theme-slow (5,160), woocommerce-too-slow (4,763), gohighlevel-website-speed (4,065), shopify-store-speed-optimization (3,592). Two low-traffic posts: how-to-cut-saas-bill-2026 (10), will-migrating-hurt-my-seo (4). One extra for the overclaim check: wordpress-plugin-security-2026.
- Work: /work/northdeck-group, /work/mycustompatches, /work/a-step-above-medical, /work/medical-template.
- About: /about, /about/hassan, /about/imran.
- Disclosure pages: /editorial-policy, /ai-info.

#### Attribution and disclosure honesty

| Page | Finding | Status |
|---|---|---|
| Site level | /editorial-policy section 04 states that AI is used (research, drafting, restructuring, prose checks), what it is not used for (publishing unreviewed output), and that a person verifies every claim against a primary source. All 88 posts and all 11 hubs link to it. It has a corrections channel (info@). Good. One weak point: "Last reviewed July 23, 2026", although the site has been substantially rewritten since. | CONFIRMED |
| Blog bylines | Every sampled post names Hassan Jamal and links to /about/hassan, which has role, LinkedIn and press links. No named reviewer appears anywhere, and none is invented. | CONFIRMED |
| Blog quotes | shopify-app-costs: 3 Reddit quotes, each with user, subreddit, date, vote count and a permalink. The nextjs-hosting-zero-cost Trustpilot quote links to the Trustpilot profile. Whether the quotes match their threads was not re-checked (live-load limit; commit fed61361 says this was done). | CONFIRMED links; quote text not re-verified |
| Home and service testimonials | Every quote carries a name, platform, month and source link. /services/webflow states that the review "does not verify [the featured project's] technical outcomes". Good practice. | CONFIRMED |
| /work/mycustompatches plus the Matt Conner review on /, /services/wordpress-migration, /services/ecommerce | Labelled "Independent client" while `case-study-facts.ts:97-103` records an open question that could make it founder-affiliated. See Top finding 1. | CONFIRMED (blocker) |
| /work/northdeck-group | "Independent client... no ownership or financial stake", hand-typed in the page and not drawn from case-study-facts.json, so the build guard skips it. The source given is the owners' own statement. Its design-scenario section is honestly labelled as illustrative. | CONFIRMED label; independence INFERRED from the owner's statement |
| Saforne (/work reel, home) | Three different labels across the site, and placed under "built for independent clients". Not in the registry. | CONFIRMED |
| /work/a-step-above-medical | Disclosed honestly as in progress, with "nothing on this page should be read as a finished case study". The disclosure itself is fine. Whether the page should be indexed is a separate question (Part 3). | CONFIRMED |
| Concept builds (medical-template, panda-publisher, sleek-jackets) | Each says "Demo, not client work" and sits under "Portfolio concepts" on /work. Good. Sleek Jackets' registry note says ownership is "undecided between a founder-owned brand and a client-run store". Holding it as a demo is the safe call. | CONFIRMED |
| Panda Patches, Enterprise Ops | Founder-affiliated, with disclosures on /work, /about/imran ("Imran owns Panda Patches. It is not a client testimonial") and in the ai-referral-revenue post description. Good. | CONFIRMED |
| Visible "updated" date | See Top finding 7. Body-level "checked August 2, 2026" notes exist on price facts, which partly covers it. | CONFIRMED |

#### Non-commodity element (Step 2)

| Page | Non-commodity element | Verdict |
|---|---|---|
| nextjs-hosting-zero-cost | A worked sizing example (100 GB at 2 MB vs 500 KB pages), plus "How we set up Vercel hosting on a client build" | Pass |
| shopify-app-costs-real-monthly-bill | A dated price register for 15 apps, curated Reddit merchant quotes and the four charge types. The Panda Patches receipt that the tracker credited for the June breakout is now withdrawn ("We're not publishing unreconciled revenue, app-cost or performance figures"). The page is now mostly published prices plus method. | Weak pass. Closest to the restated-table trap of any sampled page. |
| divi-theme-slow | "Two Divi sites we measured on 29 August 2026 scored 0 of 3 and 0 of 2" (CLS 0.906) | Pass |
| woocommerce-too-slow | Version-specific edge case (cart-fragments changed in WooCommerce 7.8), separate add-to-cart, checkout and backend sections, HPOS limits | Pass |
| gohighlevel-website-speed | The split between what you control and what the platform controls. The earlier "14 GHL sites audit" receipt is gone ("We don't publish a typical score range"). | Pass, on analysis rather than data |
| shopify-store-speed-optimization | Shopify Theme Store acceptance bar; debunks the "March 2026 Shopify threshold" claim | Pass |
| how-to-cut-saas-bill-2026 | Generic five-step audit. Its only distinct section (Shopify app billing) belongs in saas-software-pricing-audit-2026. | Fail. Merge (Part 1, Cluster 4). |
| will-migrating-hurt-my-seo | Process plus an honest note on Panda Patches as evidence. No first-party data. | Borderline |
| Service pages | Platform-specific running costs (for example /services/webflow: Webflow plan prices "as of September 2026"), plus scope and process. /services/webflow and /services/wordpress state they have no delivered Webflow or WordPress project to show. That is honest, but it means neither page has platform proof. | Pass on honesty; weak on proof |
| Concept and in-progress /work pages | Annotated screenshots of the build | Pass for a portfolio page, but thin |

#### Overclaimed or unhedged language (Step 4)

- **Sampled commercial pages:** none found. The scan looked for "guarantee", "will rank/save/increase", "always", "proven", "Nx", "%" and "refund". Every match was already hedged, for example "We cannot guarantee a citation" on the home page and "No one can promise that" on /services/webflow.
- **Sampled posts:** hedging is consistent throughout ("It can't guarantee stable rankings", "Don't turn a speed association into a guaranteed revenue or conversion claim").
- **The one exception:** /blog/wordpress-plugin-security-2026 has the title "WordPress Plugin Security in 2026: Speed Is the Only Real Defence" and the H1 "WordPress plugin security: nothing is secure, only fast". Its first answer says "Platform choice on its own is not a security outcome" and argues that time-to-patch is the variable you control. The headline claims more than the body. The page drew 992 imp at 8.1 in 90 days. This is flagged as a question for the owner, not a rewrite.
- **Count mismatch:** the glossary card copy in `src/data/blog.ts:144` says "23 ... terms" while the title says 26 (`blog.ts:141-143`). The card copy appears on /blog, /about/hassan and related-post cards. The actual term count was not verified.

#### Answers the reader's real question (Step 5)

| Page | Reader's likely question (from GSC top queries) | Answered? |
|---|---|---|
| nextjs-hosting-zero-cost | "Is Vercel free?" | Yes, in the H1 and the first sections |
| shopify-app-costs-real-monthly-bill | "How much do Shopify apps cost per month?" | Yes, dated price table |
| divi-theme-slow | "divi performance", "how many websites use Divi" (71 imp) | Yes, both have their own H2 |
| woocommerce-too-slow | "woocommerce checkout slow" (354 @ 33.6), "add to cart slow" (264 @ 21.9) | Yes, a dedicated H2 for each. Ranking is still weak, so this is not a content gap. |
| gohighlevel-website-speed | "speed up go high level website" | Yes |
| shopify-store-speed-optimization | "shopify speed optimization" (265 @ 31.8) | Yes. Covers the question fully but ranks 30. |
| how-to-cut-saas-bill-2026 | "how do I cut my SaaS bill" | Partly. No worked numbers. |
| will-migrating-hurt-my-seo | "will migrating hurt my SEO" | Yes. Answers honestly ("It can..."). |
| /services/wordpress-migration | "Who can migrate my WordPress site to Next.js, and for how much?" | Yes: proof, price from $1,500 and process. Diluted by the opening section about building on WordPress. |
| /services/webflow | "Can you migrate my Webflow site?" | Yes, with the honest note that it has no Webflow project. |
| /about, /about/hassan, /about/imran | "Who are these people?" | Yes. /about is 370 words. |

#### Structural defect on every page of the blog template

48 of 88 posts render two H2s in a row, "Frequently asked questions" followed by "Frequently Asked Questions", above one FAQ list (for example gohighlevel-website-speed). The live site has the same problem (checked on one live page), so the redesign did not introduce it. CONFIRMED.

---

## Part 3: Content-creation standards, applied to the redesign's new routes

New routes, found by comparing the local and live sitemaps (151 vs 146 URLs):

- Added: /services/wordpress, /work/a-step-above-medical, /work/medical-template, /work/northdeck-group, /work/panda-publisher, /work/sleek-jackets.
- Removed: /work/panda-codelab, which now 301s to /work (65 imp in 90 days; fine).

Git shows the new /work and /services/wordpress routes as already committed. 84 commits are ahead of origin/main, which is still at 8fad4fca from 23 Sep. The untracked files are components and data (for example `src/data/service-guides.ts` and `src/components/redesign/WorkReel.tsx`), not new routes. All 6 pages were checked; this is not a sample.

Step 0: these are portfolio and service pages built as a batch from one template, on a site that is still growing its coverage. Full scrutiny was applied.

| Check | /services/wordpress | /work/northdeck-group | /work/a-step-above-medical | /work/medical-template | /work/panda-publisher | /work/sleek-jackets |
|---|---|---|---|---|---|---|
| **1. Not a duplicate** | FAIL (partial). /services/wordpress-migration's new meta description and opening section also claim "build or improve a WordPress website" (Part 1, Cluster 2) | PASS | PASS | PASS | PASS | PASS |
| **2a. Accuracy, claims traced** | PASS. Webflow and WordPress cost lines carry dates | PASS. Facts traced to the project README (`company-facts.ts:239-244`) | PASS. Dates from migration-projects.ts | PASS | PASS | PASS |
| **2b. Non-commodity value** | WEAK. No WordPress build to show; uses Emblematic Studio as a design reference and says so | PASS. Annotated walkthrough | WEAK. 331 words, no outcome yet | PASS for a demo (391 words) | PASS for a demo (488 words) | WEAK. 370 words |
| **2c. Honest attribution** | PASS | **FAIL until confirmed.** The independence claim is hand-typed outside the registry | PASS | PASS ("Demo, not client work") | PASS | PASS (held as a demo while ownership is undecided) |
| **2d. Hedged, not overclaimed** | PASS | PASS ("No performance figures published") | PASS | PASS | PASS | PASS |
| **2e. Legal and regulatory** | PASS | PASS | PASS | PASS. Fictional medical prices and treatments (Botox, GLP-1) are labelled fictional on the page and on the demo itself | PASS | PASS ("purchases not live") |
| **3a. Unique title and meta, within limits, matching the body** | PASS (53 / 154 chars) | FAIL. Title 87 chars, description 183 | FAIL. Title 68, description 176 | FAIL. Title 65, description 180; the description promises "provider bios" the page never shows | FAIL. Title 64, description 182 | FAIL (minor). Title 67, description 156 |
| **3b. Structured data matches the page** | PASS (WebPage, BreadcrumbList, FAQPage) | FAIL. Site-wide Organization/WebSite only; no page-level schema, unlike the other 5 /work pages (Article, BreadcrumbList, FAQPage) | FAIL. Same | FAIL. Same | FAIL. Same | FAIL. Same |
| **3c. Heading hierarchy** | PASS | PASS | PASS (h1, h2 ×3) | PASS | PASS | PASS |
| **4a. Outbound links from the body** | PASS (/pricing, /services/wordpress-migration, /work/emblematic-studio) | PASS (/services/custom-engineering) | PASS (/services/wordpress-migration) | WEAK (/services only) | WEAK (/services only) | PASS (/services/ecommerce) |
| **4b. Inbound links from existing pages** | PASS. Linked in body from /, /pricing, /ai-info, /services/ai-seo, /services/wordpress-migration | PASS. Site nav plus /services/gohighlevel and /work | FAIL. Body link only from /work; /services/wordpress-migration does not link to it | FAIL. Only /work | FAIL. Only /work | FAIL. Only /work; /services/ecommerce does not link to it |

**Blockers before publish:**

1. Confirm NorthDeck's relationship and move it into case-study-facts.json so the disclosure guard covers it. Do the same for Saforne.
2. Fix the medical-template meta description: it claims "provider bios" that the page does not show.
3. Decide whether a-step-above-medical should be indexed before launch. It is a 331-word placeholder that tells readers not to treat it as a case study. A `noindex` until launch is the cautious option.
4. Add the page-level schema (WebPage, BreadcrumbList, and Article for case studies) that the other /work pages already carry.
5. Shorten the titles and descriptions on the five /work pages.
6. Add body links: /services/wordpress-migration → /work/a-step-above-medical, and /services/ecommerce → /work/sleek-jackets if the demo is meant to support that service.
7. Narrow /services/wordpress-migration's meta description back to migration.

---

## Not checked, and why

- **Whether the Reddit and Trustpilot quotes still match the source threads.** That needs many live third-party fetches. Rule 6 limits live load, and commit fed61361 says this was just done.
- **Actual term count in the AEO glossary (23 vs 26).** Only the copy mismatch in blog.ts was confirmed.
- **Locale duplicates (/de, /fr against English pages).** Translations are not duplicate intent if hreflang is right. hreflang and locale indexing belong to the technical and indexing group.
- **Per-page daily GSC trends.** The exports are page totals per window, not page-by-date, so the drops in Cluster 1 can't be pinned to a date or matched to commits.
- **Index status of the 4 Cluster 4 pairs and of the hub.** Only 3 URL Inspection calls were used, to keep within the quota.
- **Whether Saforne and Sleek Jackets are the same business.** Both are outerwear or leather storefront previews, and Saforne's image alt mentions a "hooded jacket". Nothing in the repo links them, so this is not a finding.
- **Blog posts outside the sample, beyond the shared-boilerplate, overlap and duplicate-FAQ scans.** These ran across all 88 posts. The attribution and comprehensiveness checks covered only the 9 sampled posts.
- **Live site parity.** The only live checks were one sitemap fetch, one page and one redirect.
