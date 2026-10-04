# F: Internal links, backlinks and content opportunities (4 Oct 2026)

Scope: the new build at http://localhost:3400 (151 sitemap URLs, all crawled), the source snapshot in `scratchpad\newsite`, GSC exports in `scratchpad\gsc`, and 24 requests to the live site (the top 20 pages, plus re-fetches of 3 of them to check landmarks and one landmark test page). Raw data: `scratchpad\fcrawl\graph_new.json`, `graph_live20.json`, `analysis.json`; scripts `crawl.py`, `crawl_live.py`, `analyze.py` in the same folder.

How "body" links were separated: a link counts as body only if it sits inside `<main>` and not inside any `<footer>` or the old `header.fixed`. The new site header and its menu, the new dark footer, and the old header/footer markup (which is still in the HTML on 117 pages, see M3) are all counted as chrome. Inside the body I also split out breadcrumbs, the table of contents, the "topic uplink" box (`aside[data-topic-uplink]`), and the related-post cards (`[data-related-posts]`). Everything else in the body is "prose".

## Top findings (ranked by impact)

1. **CONFIRMED. The redesigned service pages dropped 30 pillar-to-post links.** The new `/services/*` pages render the redesign components (for example `src/app/services/wordpress-migration/page.tsx` now renders `WordPressMigrationPreview` from `/preview/services`), and the old `PageContent.tsx` files that held the guide links are no longer used. The deployed source (`git show origin/main:src/app/services/*/PageContent.tsx`) links 30 blog posts that the new pages do not: wordpress-migration 7, woocommerce 5, ecommerce 4, custom-engineering 3, squarespace 3, webflow 3, gohighlevel 3, wix 2. The losses include three of the site's highest-impression posts: `/blog/gohighlevel-website-speed` (4,065 impressions, position 7.9, 37 clicks, the #2 click page), `/blog/woocommerce-too-slow` (4,763 impressions) and `/blog/shopify-store-speed-optimization` (3,592 impressions). Fix this before the redesign ships.
2. **CONFIRMED. The pillars barely link down to their own clusters, and none link to their hub.** In the new build, each service page links 0 to 2 of its cluster's posts in the body. For example, /services/wordpress-migration links 2 of 17, /services/ai-seo 1 of 11, /pricing 0 of 6 and /partners 0 of 6. No pillar links to its `/blog/topic/*` hub. The upward direction is healthy: 94 of 98 post-to-cluster memberships link the cluster's money page in the body. The gap is one-way.
3. **CONFIRMED (GSC plus crawl). Several near-ranking pages are under-linked.** These pages sit at positions 6 to 17 with real impressions, but get half or less of the median post's 10 body inbound links: gohighlevel-website-speed (5 body inbound), best-website-builder-for-gohighlevel-agencies (3), cloudflare-emdash-wordpress-replacement (4), wordpress-plugin-security-2026 (5), webflow-user-accounts-sunset-date-2026 (6), top-nextjs-agencies-2026 (7, only 4 in prose) and top-custom-web-development-agencies-usa-2026 (6). Table in section 1.3.
4. **CONFIRMED. The redesign left blog posts' own body links untouched, but the homepage lost its only link to /free-audit.** For 19 of the top 20 pages, the body link sets are the same on the live site and the new build (only `/blog/shopify-headless` gained one link). The homepage body drops `/free-audit` and gains `/privacy`, `/services/wordpress`, `/work/ladies-4-jesus` and `/work/panda-patches`. /free-audit is the money page of the speed cluster. It is in no header or footer, so after the redesign it is linked only from 17 posts and hubs.
5. **CONFIRMED. No guard checks inbound links from body content.** `seo-audit.mjs:746-777` flags a page as orphaned only if it has zero links from anywhere, and the footer and menu always provide those. `scripts/link_guard.py` checks post to hub, post to money page, and sibling counts. Nothing checks pillar to post links or adds links to new posts from older ones. That is how finding 1 got through.
6. **CONFIRMED. Two new editorial deep links since the 17 Sep backlink baseline.** Scepter Marketing (28 Sep 2026, by Matt Hall) links `/blog/gohighlevel-website-speed`. Farabiulder (27 Aug 2026) cites and links `/blog/shopify-app-costs-real-monthly-bill`. The outreach ledger still records 0 acquired links. What earns citations here is sourced cost and speed explainers about one platform. The backlink coverage is partial (no backlink tool), and I found nothing that warrants a disavow.
7. **CONFIRMED (GSC). The best content openings are reworks of pages that already rank 8 to 20, not new topics.** These are GoHighLevel speed "optimization" wording (about 616 clean impressions at position 11 to 12), website migration cost (about 1,000 clean impressions at position 9 to 13), Shopify app pricing (245 at 11.7, plus variants), and WordPress to Next.js migration services (165 at 14.1, with the service page and the how-to post competing). Of the structural gaps, "Is Wix bad for SEO" and the WooCommerce checkout and add-to-cart slow intents have the best evidence. Shortlist in section 3.
8. **CONFIRMED. About half of query impressions are machine-generated and should not drive content choices.** 70 AI-persona queries (341 impressions) were excluded. 1,644 more queries (26,693 impressions, 1 click) carry fan-out tells: a year suffix, "official", "evaluate the", `-site:` chains or "per month". Most of the Vercel volume is in this group, which agrees with the GSC_TRACKER.md analysis of 6 Sep.
9. **CONFIRMED. A link-mechanism weakness: related-post cards concentrate.** Four posts each get 16 related-card links (aeo-web-performance-glossary, wordpress-april-2026-evidence, cms-market-share-2026, nextjs-sanity-stack), while 37 of 88 posts get none. The cause is `getRelatedPostIds` in `src/data/topical-map.ts`, which breaks ties by recency.

---

## 1. Internal linking audit

### Step 0: answers and fallbacks

- Tiers were inferred from URLs and `src/data/topical-map.ts` and `src/data/hubs.ts`: home (1), service pillars `/services/*` (10, plus the /services index), money pages (/pricing, /contact, /partners, /free-audit), topic hubs `/blog/topic/*` (11), posts (88), case studies `/work/*` (10), about/legal (9), /ai-info (5), and locale pages /fr and /de (10).
- Mechanism: links come from both structured components (topic uplink box, related cards, hub grids, breadcrumbs) and inline prose links. Both were measured.
- Search Console: yes, via the exports.
- Growth: the 88 posts all belong to a cluster (0 posts outside a cluster, 0 cluster ids without a live post).

### Step 1: the expected shape (yardstick)

| From | Should link to | Why |
|---|---|---|
| Post | its cluster money page (service/pricing/partners/free-audit) and its hub | pass authority up, give a next step |
| Hub | every member post and the money page | collector page |
| Service pillar | its hub and its strongest cluster posts, plus its case studies | pass authority down to the posts that actually rank |
| Case study | its service, ideally the matching guide | proof layer |
| Home | every pillar, the money pages | top of the tree |

### Step 2: link graph against the shape

**Up direction (post to money page): healthy. CONFIRMED.** 94 of 98 post-to-cluster memberships link the money page in the body, and 68 of them do it in prose. The 4 misses are posts with two clusters that link the other cluster's pillar: meta-conversions-api-setup-cost (custom), aeo-web-performance-glossary (performance), and will-migrating-hurt-my-seo and how-website-speed-affects-seo (seo-aeo). Every post has a topic-uplink box (176 uplink links, 2 per post).

**Hubs: healthy. CONFIRMED.** All 11 hubs link every member post (100%) and their money page. They get 13 to 27 body inbound links, all from breadcrumbs, uplink boxes and the "Other topics" nav. None come from prose, which is fine for a collector page.

**Down direction (pillar to post): the headline gap. CONFIRMED.**

| Pillar (cluster) | Cluster posts | Linked in body (new) | Links lost vs deployed source |
|---|---|---|---|
| /services/wordpress-migration (wordpress, 17) | 17 | 2 | 7 (elementor-kills-seo, how-to-fix-slow-wordpress, wordpress-ai-security-risk-2026, wordpress-killer, wordpress-plugins-destroy-speed, wordpress-traffic-drop-speed, wordpress-vs-nextjs) |
| /services/ecommerce (shopify 9, ecommerce-strategy 9) | 9 + 9 | 2 and 1 | 4 (shopify-conversion-rate-speed-fix, shopify-plus-still-slow, shopify-slow-losing-sales, shopify-store-speed-optimization) |
| /services/woocommerce | 4 | 1 | 5 (incl. woocommerce-too-slow, woocommerce-vs-custom-website, woocommerce-low-conversion-rate, what-is-headless-commerce, wordpress-plugins-destroy-speed) |
| /services/custom-engineering | 8 | 1 | 3 (custom-website-5000-whats-included, do-you-own-your-website, how-long-does-a-custom-website-take) plus /work/lead-source-report, which now returns 404, so dropping it is correct |
| /services/gohighlevel | 3 | 1 | 3 (gohighlevel-website-speed, best-website-builder-for-gohighlevel-agencies, core-web-vitals-explained) |
| /services/squarespace | 4 | 1 | 3 (is-squarespace-bad-for-seo, squarespace-too-slow, squarespace-vs-custom-website) |
| /services/webflow | 5 | 1 | 3 (leaving-webflow-2026, webflow-true-cost, webflow-vs-custom-website) |
| /services/wix | 3 | 1 | 2 (wix-too-slow, wix-vs-custom-website) |
| /services/ai-seo | 11 | 1 | 0 (it linked 1 before too) |
| /pricing (pricing) | 6 | 0 | not compared |
| /partners (agency) | 6 | 0 | not compared |
| /free-audit (performance) | 9 | 1 | not compared |

None of the 10 pillars links its hub. Pillars do link to each other, but only in a chain: each service page links exactly one other service in the body (wordpress to wordpress-migration, ecommerce to woocommerce, and so on), which is fine.

The "lost" column compares the deployed `PageContent.tsx` source with the rendered new HTML. That the old pages rendered those links is inferred from the source; I did not fetch the live service pages, to stay within the 20-page live limit.

**Other tier checks. CONFIRMED.**
- `/services/wordpress` (the "build or improve a WordPress site" page) gets 0 body links from any post. Its 5 body links come from /, /pricing, /services/wordpress-migration, /services/ai-seo and /ai-info. It had 0 impressions in 90 days (it is absent from pages_90d). Every WordPress post's uplink points to /services/wordpress-migration, so a reader with a speed problem on an existing WordPress site (the Divi, Elementor and plugin posts) is only ever sent to the migration page.
- Case studies to posts: 0 of 10 case studies link any blog post in the body. Posts to case studies: 31 of 88 posts link one, concentrated on /work/mycustompatches (18) and /work/panda-patches (14). Four case studies have 1 body inbound link: /work/medical-template, /work/panda-publisher, /work/sleek-jackets and /work/a-step-above-medical.
- Home body links 3 posts (how-to-achieve-100-pagespeed, how-to-fix-slow-wordpress, what-is-headless-commerce), 9 of 10 pillars (not /services/ai-seo, which is only in the menu and footer), and no hub.
- Near-orphans by body links: /manifesto (0 body, chrome only), /ai-info/case-studies (1, yet 122 impressions at position 19.0), /ai-info/team-and-company (1), /ai-info/migration-services (2), /blog/which-website-builders-can-go-headless (2), /blog/web-accessibility-statistics-2026 (3) and /blog/best-website-builder-for-gohighlevel-agencies (3).
- Broken internal links: none. All 197 internal URLs referenced in anchors (151 pages, 44 images, 1 .md, 1 .csv) return 200, with no redirect hops.
- GSC pages that no longer exist in the new build (all 308-redirect locally): /ai-info/competitor-comparison to /pricing (515 impressions, position 7.3, almost all from one templated query, "bejamas vs pagepro, for next.js projects in united states"), /work/panda-codelab to /work, /blog/webflow-migration-50-to-100-pages to /blog/webflow-migration-cost, /blog/gohighlevel-migration to /blog/gohighlevel-keep-crm-replace-website, and /blog/google-march-2026-update to /blog/google-algorithm-updates. The /pricing target does not answer a "X vs Y agency" query. That is a redirect-relevance question for the migration group.

**Tier medians of body inbound links:** post 10, pillar 13, case study 4.5, hub 17, money page 21.

### 1.3 Step 3: near-ranking and under-linked, ranked

Filter: GSC 90-day page position between 5 and 20, at least 150 impressions, and body inbound links below or at the post median of 10. Ranked by impressions divided by (body inbound + 1), then adjusted by hand for commercial value.

| # | Page | Impr | Clicks | Pos | Body in (prose) | Note |
|---|---|---|---|---|---|---|
| 1 | /blog/gohighlevel-website-speed | 4,065 | 37 | 7.9 | 5 (5) | Lost /services/gohighlevel link. Top queries "go high level website speed optimization" 12.3, "speed up go high level website" 11.4 |
| 2 | /blog/best-website-builder-for-gohighlevel-agencies | 743 | 2 | 8.9 | 3 (3) | Lost /services/gohighlevel link |
| 3 | /blog/cloudflare-emdash-wordpress-replacement | 853 | 0 | 12.7 | 4 (4) | Queries "cloudflare wordpress replacement" 12.3, "cloudflare wordpress alternative" 15.6 |
| 4 | /blog/wordpress-plugin-security-2026 | 992 | 3 | 8.1 | 5 (5) | |
| 5 | /blog/top-nextjs-agencies-2026 | 1,228 | 0 | 15.7 | 7 (4) | "next.js development agency" 211 impressions at 22.2 |
| 6 | /blog/shopify-stocky-sunset-date-2026 | 1,559 | 2 | 7.2 | 10 (4) | Only 4 prose links |
| 7 | /blog/webflow-user-accounts-sunset-date-2026 | 800 | 0 | 6.4 | 6 (5) | |
| 8 | /blog/is-squarespace-bad-for-seo | 665 | 3 | 15.2 | 8 (8) | Lost /services/squarespace link. "is squarespace bad for seo" at 25.7 |
| 9 | /blog/top-custom-web-development-agencies-usa-2026 | 465 | 0 | 17.3 | 6 (6) | |
| 10 | /blog/wix-migration-cost | 412 | 1 | 13.1 | 8 (7) | |
| 11 | /blog/gohighlevel-keep-crm-replace-website | 287 | 0 | 7.2 | 5 (4) | |
| 12 | /blog/web-accessibility-statistics-2026 | 197 | 0 | 12.0 | 3 (3) | |
| 13 | /blog/google-universal-commerce-protocol-what-it-means-for-your-store | 156 | 0 | 17.2 | 5 (5) | |
| 14 | /ai-info/case-studies | 122 | 1 | 19.0 | 1 (1) | |

Deliberately not ranked: `/blog/nextjs-hosting-zero-cost` (101,772 impressions, position 8.5, 10 body inbound). GSC_TRACKER.md (6 Sep, "VERCEL CONCENTRATION ANALYSIS") shows its volume is mostly machine fan-out verification queries with a click rate of 0.02%. More internal links will not turn that into visits.

### 1.4 Step 4: mechanism findings

- **M1, no inbound backfill or pillar-down check. CONFIRMED.** `seo-audit.mjs:746-777` counts any internal link, chrome included, toward the orphan check, so a page linked only from the footer passes. `scripts/link_guard.py` (docstring, lines 1-20) checks post to hub, post to money page, 2 to 4 siblings, and hub membership. Nothing checks (a) pillar to cluster post links, or (b) when a post is published, which existing posts should now link to it. Finding 1 is exactly what (a) would have caught.
- **M2, related cards concentrate. CONFIRMED.** 51 posts get at least one related-card link. Four get 16 each. 37 of 88 posts get none. `getRelatedPostIds` (`src/data/topical-map.ts`, around line 473) sorts by shared clusters and then by recency, so the newest members of the large WordPress and SEO clusters take the slots on every sibling page.
- **M3, old chrome markup still ships. CONFIRMED in HTML; ranking effect INFERRED as minor.** 117 pages carry the old header and footer markup: 99 blog and topic pages, 10 locale pages, and /about/hassan, /about/imran, /free-audit, /partners, /ai-info, /privacy, /terms and /cookies. That is about 37 extra links per page. It is hidden with `display:none` (`src/app/blog/BlogRedesign.module.css:25-28` and `src/components/redesign/Restyled.module.css:9-11`), except that the locale pages keep the old footer visible by design. The targets duplicate the visible chrome, so the link graph barely changes. The cost is page weight (blog HTML is about 770 to 810 KB) and two navigation blocks in the DOM.
- **M4, anchor text: no generic anchors. CONFIRMED.** Zero body links use "click here", "read more", "learn more" or an empty anchor. Inbound anchors to pillars are descriptive and varied (for example "how we scope a WordPress migration" 20, "WordPress migration service" 13). Minor points:
  - "pricing page" is used 45 times to /pricing.
  - "Lighthouse" is the anchor 28 times on links to /blog/how-to-achieve-100-pagespeed. The anchor names a tool, not the page.
  - Related-card anchors are the whole card text (category, read time, title and excerpt run together, for example "AEO 24 min AEO & Web Performance Glossary: 26 terms defined..."). A shorter title-only anchor would be cleaner. INFERRED low impact.
- **M5, outbound body links per post are healthy.** The median post has 19 internal body links. The thinnest are ai-referral-revenue-2026, ai-search-visibility-tracking, cms-market-share-2026 and what-is-llms-txt, at 5 prose links each.

### 1.5 Live old site vs new build (top 20 pages by 90-day impressions)

The live site was fetched for these 20 pages only, so full-site inbound counts for the old site cannot be computed. I compared each page's outbound body links, live against new, and the inbound links within the 20-page set. Because posts' body links are unchanged, any change in inbound links to these pages has to come from non-post templates (home, services, work). Those are covered by the source comparison in section 1.2.

| Page | Live body out | New body out | Removed | Added | Inbound from the other 19 (live / new) |
|---|---|---|---|---|---|
| /blog/nextjs-hosting-zero-cost | 19 | 19 | 0 | 0 | 1 / 2 |
| /blog/shopify-app-costs-real-monthly-bill | 22 | 22 | 0 | 0 | 4 / 4 |
| /blog/divi-theme-slow | 23 | 23 | 0 | 0 | 1 / 1 |
| /blog/woocommerce-too-slow | 19 | 19 | 0 | 0 | 0 / 0 |
| /blog/gohighlevel-website-speed | 18 | 18 | 0 | 0 | 0 / 0 |
| /blog/shopify-store-speed-optimization | 23 | 23 | 0 | 0 | 5 / 5 |
| /blog/what-is-headless-commerce | 22 | 22 | 0 | 0 | 6 / 6 |
| /blog/website-migration-cost-2026 | 20 | 20 | 0 | 0 | 2 / 2 |
| /blog/shopify-stocky-sunset-date-2026 | 17 | 17 | 0 | 0 | 4 / 4 |
| /blog/agentic-browsing-pagespeed-score | 13 | 13 | 0 | 0 | 1 / 1 |
| /blog/shopify-headless | 22 | 23 | 0 | 1 (/blog/nextjs-hosting-zero-cost) | 5 / 5 |
| /blog/top-nextjs-agencies-2026 | 23 | 23 | 0 | 0 | 0 / 0 |
| /blog/elementor-kills-seo | 23 | 23 | 0 | 0 | 1 / 1 |
| / | 22 | 25 | 1 (/free-audit) | 4 | 19 / 19 |
| /blog/wordpress-plugin-security-2026 | 12 | 12 | 0 | 0 | 2 / 2 |
| /blog/how-to-migrate-wordpress-to-nextjs | 16 | 16 | 0 | 0 | 4 / 4 |
| /blog/cloudflare-emdash-wordpress-replacement | 13 | 13 | 0 | 0 | 0 / 0 |
| /blog/webflow-user-accounts-sunset-date-2026 | 16 | 16 | 0 | 0 | 0 / 0 |
| /blog/squarespace-too-slow | 17 | 17 | 0 | 0 | 0 / 0 |
| /blog/shopify-dawn-theme-slow | 16 | 16 | 0 | 0 | 4 / 4 |

A note on method: on the live site, the homepage and two posts put the old header and footer inside `<main>`. A naive "everything in main" count would wrongly show 23 links "lost" on each of those two posts. The table uses the corrected rule.

Chrome: the live footer carried 35 links. The new site adds a header menu of about 31 links (all 10 services, 4 case studies, the founders, /partners, /manifesto, /editorial-policy, /security) and a new footer of 36. Neither old nor new chrome links /free-audit or any blog post.

### 1.6 Action plan, ordered by estimated impact

1. **Before deploy: put the 30 lost pillar-to-post links back into the redesigned service pages.** The highest-value ones are /services/gohighlevel to gohighlevel-website-speed and best-website-builder-for-gohighlevel-agencies, /services/woocommerce to woocommerce-too-slow, /services/ecommerce to shopify-store-speed-optimization, and /services/squarespace to is-squarespace-bad-for-seo and squarespace-too-slow. A "Guides for this service" block rendered from `clusters[].postIds` (top 4 to 6 by GSC impressions) would also cover the posts that were never linked.
2. **Link each pillar to its hub** (one line, for example "All WordPress migration guides"). This affects 10 pages.
3. **Add a pillar-down rule to `link_guard.py`:** each service page must link at least N of its cluster's posts in the body, and the check must ignore chrome. Also add a backfill report: for every post, list sibling posts that share a cluster and do not link it yet.
4. **Contextual links into the under-linked near-rankers in table 1.3.** Aim for 3 to 5 new prose links each from same-cluster posts with descriptive anchors. Start with the GoHighLevel pair, cloudflare-emdash and the two "top agencies" posts.
5. **Restore a homepage body link to /free-audit,** or add it to the footer. It is the speed cluster's money page and lost its only homepage link.
6. **Spread the related cards:** break ties by low inbound count or by GSC impressions, not by recency.
7. **Give /services/wordpress some inbound links:** link it from the WordPress speed and theme posts (divi-theme-slow, elementor-kills-seo, how-to-fix-slow-wordpress, wordpress-plugins-destroy-speed) for readers who want to keep WordPress. This is a positioning call for the owner, because the topical map sends that whole cluster to the migration page on purpose.
8. Low priority: remove the hidden old header and footer markup from the blog and restyled templates, and add 1 or 2 body links into the four thin case studies and /ai-info/case-studies.

---

## 2. Backlink profile audit

### Step 0: data completeness (read first)

**Coverage is partial.** No backlink index is connected, and the gsc-readonly tools do not expose the Links report. Sources used:
- The owner-supplied GSC Links snapshot of 17 Sep 2026 (22 linking sites, 249 links), transcribed in `docs/research/backlink-outreach-2026-09-16/existing-links-and-mentions.md`
- `outreach-ledger.json`
- The Backlinks section of GSC_TRACKER.md (lines 680-720)
- Three web searches and four page scrapes, done today

I found no disavow file in the repo and no mention of a manual action. Link-building is active: the ledger records 5 sends, 0 acquired links, Indie Maker Diaries awaiting reply, and the Netlify templates email bounced.

### Step 1 and 2: risk review, one decision per link

| Source | What it is | Risk read | Recommendation |
|---|---|---|---|
| pandapatches.com (171 linking pages, GSC 17 Sep) | Sitewide "Built by PandaCodeGen" footer credit on a site with the same owner | Low. Google's link-spam policy lists widely distributed footer and template links as an example, but this is one owned site with a disclosed relationship | No disavow. You control the site, so the option is to edit at the source: point the credit at /work/panda-patches or add rel="nofollow". Owner's call, not urgent |
| emblematicstudio.com (seen today on several pages, "Built by www.pandacodegen.com") | Client footer credit | Low | No action, same option as above |
| wordpress-website-design-agency-in-united-states.com (1 link) | Exact-match-domain site; page not inspected | Unknown | Inspect the page. One link from one domain is not a pattern, so no disavow without evidence of a scheme |
| mnplasticsurgery.com (1) | Probably a client site credit (GSC_TRACKER mentions an "MNPS footer") | Low | None |
| seznam.cz (2) | Czech search portal | None | None |
| Store Owner Tips (deep link to what-is-headless-commerce on a "0.8 to 1.2 seconds" claim the article does not make) | Inaccurate citation | Accuracy, not spam | The ledger says the owner declined to send a correction (`closed_owner_declined`). No disavow |
| BlogBowl (`blogbowl.io/blog/blog-templates-11-best-picks...`) | Quotes "Websites loading in 1 second have conversion rates three times higher than those loading in 5 seconds" and credits PandaCodeGen. Link not confirmed | Accuracy | Check whether the site still publishes that line. If it does not, use the same correction playbook as Store Owner Tips. No disavow |
| lowcodeplatforms.org/tools/pandacodegen | Directory entry describing PandaCodeGen as a code-generation "tool" | Low, wrong description | Ignore, or ask for a correction. No disavow |
| muffingroup.com (Betheme blog, June 2026) | Search snippet credits "PandaCodeGen's 2026 WordPress site audits" on W3 Total Cache. My scrape query failed, so the link and wording are unverified | Accuracy check | Verify the wording against what the site publishes before treating it as an asset |

**Disavow: none recommended.** No link above has a specific reason that meets the skill's bar of a manipulative pattern that cannot be removed, or a manual action.

### Step 3: opportunity

**What already earns links. CONFIRMED.** Specific, sourced explainers about one platform's cost or speed:
- Scepter Marketing to /blog/gohighlevel-website-speed (28 Sep 2026, confirmed in the page's link list)
- Farabiulder to /blog/shopify-app-costs-real-monthly-bill (27 Aug 2026, quoted in a numbered sources list)
- what-is-headless-commerce (2 links in the 17 Sep GSC snapshot)

All three are newer than the homepage-heavy GSC baseline, where 247 of 249 links pointed to /. The `rel` attribute was not checked on the two new links.

**Realistic angles:**
1. Keep the two cited explainers accurate and dated. They are the link magnets. Pair this with internal fix 1 so the authority they receive flows on to /services/gohighlevel and /services/ecommerce.
2. Reclaim unlinked or misattributed mentions: DC House (correction already sent), BlogBowl, Muffin Group. Ask only for accuracy, as the README plan says.
3. greeto.studio publishes "Best WordPress to Next.js Migration Services in 2026" and separately names PandaCodeGen in a migration case study. Check whether the listicle includes you and whether the facts are right. This is a natural, relevant inclusion route.
4. The README plan still stands: one reusable technical resource, then Sanity, Vercel and Supabase community routes. Those are drafted but waiting on access.

### Step 4: internal blind spot

The internal audit above found a fixable loss of 30 pillar links and a missing down-link pattern. Under the skill's own rule, that work comes before chasing new external links.

---

## 3. Content opportunity discovery

### Step 0: answers and fallbacks

- GSC: yes, 3,859 queries and 3,958 page-query rows over 90 days. Query rows are anonymised, so the query totals (56,725 impressions) are below the page totals.
- Inventory: the sitemap plus `topical-map.ts` clusters.
- Keyword tool: none. Bing Webmaster is not connected and would be worth connecting, since it is free.
- What succeeds here: platform-specific "slow" and "cost" explainers and sunset-date pages (GSC_TRACKER notes the sunset-date format as a winner).
- Value skew: service-adjacent queries (migration cost, platform speed, migration services) are weighted above pure informational ones (Vercel limits, definitions).

**Filtering. CONFIRMED.**
- 70 AI-persona queries (12 or more words, or starting "i am", "as a" and similar) with 341 impressions were excluded. Examples: "how much does it cost to migrate from wordpress to a visual builder?" and the "evaluate the brand - e-commerce software providers company wix on platform migrations" templates.
- 1,644 more queries with fan-out tells (a year suffix, "official", "evaluate the", `-site:`, "per month", "number of websites", or quoted strings) carry 26,693 impressions and 1 click. They are excluded from volume scoring. This is an upper bound, because some year-suffixed queries are human.
- Clean queries: 2,145 queries, 29,691 impressions, 45 clicks.

### Step 1: near-miss groups (clean queries, positions 8 to 20)

| Topic group (variants merged) | Clean near-miss impressions | Avg pos | Page ranking |
|---|---|---|---|
| Vercel free tier, hobby and commercial use | about 5,000 (most of it fan-out) | 8 to 10 | nextjs-hosting-zero-cost |
| Website migration cost ("website migration cost" 516 at 13.3, "what is the cost of website migration" 239 at 9.2, "website migration service cost" 95 at 12.0, "...cost of a website migration service" 38 at 12.6) | about 890 | 9 to 13 | website-migration-cost-2026 (pos 8.7) |
| GoHighLevel speed optimization (9 variants: "optimization", "speed up", "improve page loading", "performance optimization") | about 616 | 11 to 14 | gohighlevel-website-speed |
| Shopify app pricing ("shopify app pricing" 245 at 11.7, "instant.one shopify app pricing" 100 at 9.2, "shopify app costs" 42 at 13.1, "shopify app charges" 33 at 12.7) | about 420 | 9 to 13 | shopify-app-costs-real-monthly-bill |
| WordPress to Next.js migration services ("...migration services" 165 at 14.1, "wordpress to nextjs migration" 44 at 17.5) | about 210 | 14 to 18 | split between /services/wordpress-migration (21.7) and the how-to post (26.8) |
| Cloudflare EmDash / WordPress replacement | about 270 | 12 to 16 | cloudflare-emdash-wordpress-replacement |
| Divi performance | about 260 | 9 to 19 | divi-theme-slow |
| WooCommerce slow ("woocommerce too slow" 96 at 16.5, "backend very slow" 73 at 18.6, "backend slow" 55 at 19.6) plus near-near "add to cart slow" 264 at 21.9 and "checkout slow" 354 at 33.6 | about 225 in range, about 2,000 overall | 16 to 34 | woocommerce-too-slow |
| Squarespace slow ("why is squarespace so slow" 61 at 10.0, "squarespace slow" 31 at 8.1) | about 190 | 8 to 10 | squarespace-too-slow |
| Headless commerce ("headless commerce definition" 85 at 17.9, "headless commerce guide" 35 at 18.5); head term "headless commerce" 971 at 23.2 | about 240 | 18 to 23 | what-is-headless-commerce |
| Website migration time ("how long does it take to migrate a website in 2026?" 72 at 9.5) | 72 | 9.5 | website-migration-cost-2026 (FAQ) |

Also noticed:
- Elementor SEO: 891 impressions at 23 to 30, just outside the band.
- "next.js development agency": 211 at 22.2.
- "bejamas vs pagepro, for next.js projects in united states": 339 at 6.7. It looks templated, and its landing page now redirects to /pricing.

### Step 2: structural gaps (platform x content type)

| | Cost | Slow / speed | Migration how-to | vs custom | Alternatives | SEO | Service page |
|---|---|---|---|---|---|---|---|
| WordPress | yes (2) | yes (5) | yes | yes (2) | yes (emdash, wordpress-killer) | elementor-kills-seo | yes (2) |
| Webflow | yes (2) | **missing** | leaving-webflow (partial) | yes | **missing** | **missing** | yes |
| Shopify | app costs, headless cost | yes (5) | **missing (off-Shopify)** | yes | **missing** | **missing** | /services/ecommerce only |
| WooCommerce | migration cost | yes (1, covers checkout, cart and backend under generic H2s) | **missing** | yes | **missing** | **missing** | yes |
| Wix | migration cost | yes | **missing** | yes | **missing** | **missing** | yes |
| Squarespace | migration cost | yes | **missing** | yes | **missing** | yes | yes |
| GoHighLevel | **missing** | yes | keep-crm (partial) | **missing (GHL vs WordPress)** | builder roundup (partial) | **missing** | yes |
| Next.js | hosting cost | n/a | WP to Next.js | WP vs Next.js | agencies lists | n/a | custom-engineering |

GSC shows almost no demand yet for the missing cells. That is expected, because the pages do not exist. So these candidates rest on SERP checks and the proven shape of their sibling cells, not on GSC numbers.

### Step 4: intent checks (web search today, top 8 results)

- "website migration cost": cost guides with price ranges (cmsMinds, Cloudways, Suff Digital, Tenet), plus Reddit. The article format matches.
- "go high level website speed optimization": the HighLevel help portal, GHL Experts, Reddit, a speed tool, and Scepter Marketing (which links us). The how-to format matches.
- "wordpress to next.js migration services": service pages (Raze, Go To Agency), how-to posts, and a greeto.studio "best services" listicle. Commercial intent, so the service page should be the target, not the how-to post.
- "woocommerce checkout slow" and "woocommerce add to cart slow": separate troubleshooting pages per symptom (Pantheon, WisdmLabs, WP Speed Fix, WooCommerce docs, Reddit). That supports symptom-level pages or symptom H2s.
- "is wix bad for seo": test-and-review articles (Seobility, Tooltester, Website Builder Expert, Wix's own page, Reddit). Our is-squarespace-bad-for-seo is the same format.
- "webflow site slow how to fix": Webflow help and university pages hold the top 4 spots, then agencies (Flowout). Hard to break into.
- "shopify to custom website migration cost": results are about migrating to Shopify. There is no clear intent for "off Shopify", so this cell is weak.
- "how long does a website migration take": articles (Cloudways, Pagepro published one 6 days ago, The 215 Guys). It fits, but it is crowded and already answered in our FAQ.
- "gohighlevel vs wordpress website": Reddit and Facebook threads, YouTube, Elegant Themes, small agencies. Article intent, with mostly weak competitors.

### Step 5: ranked shortlist

Score = demand (clean near-miss impressions or a proven sibling) x likelihood (current position, intent fit) x value (service adjacency). H = high, M = medium, L = low.

| # | Candidate | Source | Evidence | Intent (checked) | Build | Score |
|---|---|---|---|---|---|---|
| 1 | GoHighLevel speed "optimization" rework | near-miss | about 616 clean impressions at 11 to 14 over 9 variants. The page holds 7.9 overall with 37 clicks, its body inbound is 5, and it lost the /services/gohighlevel link. New external link from Scepter (28 Sep) | how-to | Rework the H2s and steps around "speed up / optimize", and restore the internal links | H/H/H |
| 2 | Website migration cost rework | near-miss | "website migration cost" 516 at 13.3, plus 3 variants for about 890 clean. The page is at 8.7 with 2,260 impressions and is well linked (28 body inbound) | cost guide with ranges | Sharpen the answer-first range table and service-cost wording | H/H/H |
| 3 | WordPress to Next.js migration services, consolidated onto /services/wordpress-migration | near-miss, cannibalisation | 165 at 14.1, with the service page at 21.7 and the how-to at 26.8 for the same query | commercial (service pages and a listicle) | The how-to links the service with this anchor; the service page carries the phrase in the H1 and title (the new title already does) | M/M/H |
| 4 | Shopify app pricing rework | near-miss | "shopify app pricing" 245 at 11.7 plus 3 variants. The page has 5,556 impressions at 13.1, and Farabiulder cites it | cost explainer | A pricing-model table by app type, kept current | H/M/M |
| 5 | WooCommerce checkout slow and add-to-cart slow (split or symptom H2s) | near-miss plus structural | "add to cart slow" 264 at 21.9, "checkout slow" 354 at 33.6, "backend slow" 128 at 18 to 20, all on one generic post (4,763 impressions at 23.4). It also lost the /services/woocommerce link | per-symptom troubleshooting | Two symptom-specific sections or pages that link the service | H/M/H |
| 6 | Cloudflare EmDash / WordPress replacement | near-miss | about 270 at 12 to 16. Only 4 body inbound links. The page was just updated to EmDash 1.0 (commit 83239234) | news and explainer | Add internal links, and tune the H1 and intro to "WordPress replacement / alternative" | M/H/M |
| 7 | Is Wix bad for SEO (new) | structural | The Squarespace sibling gets 665 impressions at 15.2. "wix seo migration" 25 at 20.7. A wix cluster exists, owned by /services/wix | review and test articles | New post in the is-squarespace-bad-for-seo format, linking /services/wix | M/M/M |
| 8 | Squarespace slow rework | near-miss | "why is squarespace so slow" 61 at 10.0, "squarespace slow" 31 at 8.1. The page has 789 impressions at 9.1 and 10 clicks. It lost the /services/squarespace link | why/how article | Question-form H2 and opening answer, restore the link | M/H/M |
| 9 | Headless commerce definition rework | near-miss | "headless commerce definition" 85 at 17.9, "guide" 35 at 18.5, and the head term 971 at 23.2. This is the site's only page with 2 external links | definition | A one-sentence definition block at the top | M/M/L-M |
| 10 | GoHighLevel vs WordPress for agency websites (new) | structural | The GHL cluster has 3 posts plus a service page; the GHL speed post is the top converter. No GSC data yet | comparison article with weak competitors | New post that links /services/gohighlevel and the keep-CRM post | M/M/H |
| 11 | Squarespace price increase 2026 (new, tracker format) | structural plus small near-miss | "squarespace price increase" 8 at 17.1, "price hike" 3 at 9.7, "renewal price" 2 at 9.5, all landing on the migration-cost post. The format is proven by saas-price-increases-2026-tracker and the sunset pages | dated price-change page | Short dated tracker page that cites Squarespace's own notices | L/M/M |
| 12 | Divi performance and speed optimization | near-miss | "divi performance" 31 at 16.4, "divi speed optimization" 22 at 19.3. The page has 5,160 impressions at 8.7 and 40 clicks | how-to | Add a "Divi speed settings" section | L/M/M |
| 13 | Webflow site slow (new) | structural | Every other builder has a "too slow" post except Webflow. No GSC demand data | how-to; Webflow's own docs hold the top 4 | Lower odds. Build only after 1 to 8 | L/L/M |
| 14 | Vercel Hobby vs Pro and commercial use (section, not a new page) | near-miss | Clean subset: "vercel hobby plan commercial use allowed?" 99 at 9.6, "is vercel pro worth it" 38 at 8.3, "vercel free vs pro" 37 at 9.3, "vercel hobby vs pro" 22 at 7.6. The rest is fan-out | fact lookup (Vercel's own pages win) | One answer block in nextjs-hosting-zero-cost. Little commercial value | M/M/L |

Not recommended:
- "Shopify migration cost (off Shopify)": the SERP intent is the reverse direction.
- "Bejamas vs Pagepro": the query looks machine-generated, and it is a competitor comparison that needs the owner's sign-off.
- Platform "alternatives" pages: there is no GSC demand, and the SERPs are big-publisher listicles. Not checked in depth.

Hand-off: feed items 1 to 6 into the refresh process (golden-standard-blog and evidence-audit), and items 7, 10 and 11 into new-post planning.

---

## Not checked, and why

- **Old site inbound counts for the whole site:** only 20 live pages were fetched, per the brief. The service-page losses are proven from the deployed source, not from the live HTML.
- **The GSC Links report and a full backlink list:** not available through the connected tools. The 17 Sep owner transcription was used. `rel` attributes on the Scepter and Farabiulder links were not inspected. The Muffin Group wording and link are unverified (the scrape query failed). The BlogBowl link is unverified.
- **Keyword volumes outside GSC:** no keyword tool and no Bing Webmaster connection. Structural-gap demand rests on SERP checks and sibling-page performance.
- **JavaScript-only links:** the crawl read server HTML only. Links added client-side after hydration would be missed. The redesign is server-rendered, so I expect few or none (INFERRED).
- **Whether hidden (`display:none`) chrome links are discounted by Google:** not testable here. Treated as a minor effect.
- **/fr and /de link structure:** crawled and counted, but not assessed against the English tiers.
- **I made no edits to the repo, submitted no forms, and did not use the URL inspection quota.**
