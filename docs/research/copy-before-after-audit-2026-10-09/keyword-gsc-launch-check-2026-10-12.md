# Search Console check before launch

12 October 2026, the day before the redesign launch. This follows [the keyword target audit](keyword-target-audit-2026-10-12.md), which compared what the copy targets but had no Search Console data. This note adds that data: what Google shows the site for today, whether the redesign keeps it, and where new searches should come from.

Data: Search Console for `sc-domain:pandacodegen.com`, pulled 12 October. Pages for 6 months (12 Apr to 11 Oct), query and page pairs for 3 months (13 Jul to 11 Oct, 3,786 pairs), queries for 16 months (4,826) and daily totals. The old pages were read from the live site (www.pandacodegen.com, the version deployed on 23 September) and the new pages from the isolated production build of the launch commit. Working files are in `.tmp/keyword-launch-2026-10-12/` on the owner's machine.

## Verdict

**The redesign is safe to launch for search, and it is better positioned for leads than the old site.** It loses nothing measurable that Google currently shows, and it adds dedicated hiring pages for services the old site only mentioned. Those new pages start with no search visibility, so the gain depends on links and time, not on the launch alone.

The keyword target audit is accurate about what changed in the copy. Its own caveat holds: it could not say what the site ranks for. The findings below fill that gap.

## What the redesign keeps

- **Every URL with impressions still works.** 160 URLs had impressions in 6 months. All load in the new build, or redirect (308) to the closest page. The 8 redirects:
  - `webflow-migration-50-to-100-pages` → `webflow-migration-cost`
  - `gohighlevel-migration` → `gohighlevel-keep-crm-replace-website`
  - `why-is-my-website-loading-so-slow` → `how-to-speed-up-your-website`
  - `/ai-info/competitor-comparison` → `top-nextjs-agencies-2026`
  - `/work/panda-codelab` → `/work`
  - three small blog posts

  No page with impressions returns 404, and every one is in the new sitemap.
- **Query coverage is unchanged.** For each of the 3,786 query and page pairs, the old and new pages were compared for the exact phrase and word coverage in the title, H1, headings and body. Only 15 pairs lose coverage: **25 of 51,071 impressions and 1 of 46 clicks**. The 15 are trivial (an old "divi 5.9" mention, a competitor's Trustpilot search, searches for the retired Panda CodeLab page). Every query that produced a click is still covered.
- **Title changes are safe.** 16 pages with 300+ impressions have new titles. None loses coverage of the queries those pages receive. Several get closer to their queries, for example "Lighthouse Agentic Browsing Score" and "Headless Shopify Cost".

Why so little changes: the redesign rebuilt the presentation, services and navigation, and kept the article text, which is where almost all impressions come from.

## The traffic drop that already happened

Search visibility fell before the redesign, on the old site:

| Month | Clicks | Impressions |
| --- | --- | --- |
| July | 89 | 57,563 |
| August | 109 | 72,553 |
| September | 65 | 34,515 |
| 1 to 9 October | 18 | 4,760 |

There are two steps down:

- **20 to 22 August.** Impressions fell from about 3,700 to about 1,200 a day, and average position from 10 to 17-20. Nothing was deployed to the live site between 5 and 22 August. Google's August 2026 spam update started on 18 August and ran 2 days 16 hours (`src/data/google-updates.ts`). The timing matches; it does not prove the cause.
- **17 to 18 September.** Impressions fell from about 1,500 to about 600 a day. Several content and branding commits went live on 16 to 17 September, and Google's September 2026 spam update started on 24 September.

Most of the lost impressions belong to one article:

| Page | Impressions, 25 Jul to 18 Aug | Impressions, 15 Sep to 9 Oct |
| --- | --- | --- |
| `/blog/nextjs-hosting-zero-cost` | 46,385 | 6,879 |

Those were mostly Vercel pricing lookups with a click rate near 0.02%. Homepage clicks held steady at 13 and 14. The clicks that were lost came from a few articles, while the Divi article moved up from position 10 to 6.6.

## Where leads have come from

Organic search has not been the lead source. In 16 months, searches with buying intent (agency, services, cost, hire) produced **5 clicks**. Brand searches ("pandacodegen", "panda codegen", "panda code") account for 26 of the 46 query-level clicks in the last 3 months. Earlier leads most likely came from brand searches, direct visits and referrals.

About a quarter of 3-month impressions are long, machine-written queries typical of AI assistants researching on a user's behalf ("official vercel pricing hobby free plan 2026", "iron horse studio webflow migration cost"). They count as impressions but rarely click.

Countries (3-month query sample): United States 54%, United Kingdom 8%, India 4%, Canada 3%. The US, UK and Canada together are about 65%.

## What the new pages target, and their starting point

The redesign's main commercial targets have almost no visibility today:

| Target | Impressions in 16 months | New destination |
| --- | --- | --- |
| Small business website design | 0 | none dedicated (homepage targets custom website design) |
| Medical website design | 0 | `/work/medical-template` (demo) |
| WordPress design/development | 11 | `/services/wordpress` (new) |
| Custom CRM / software | 20 | `/services/custom-engineering`, `/work/enterprise-ops` |
| CMS development | 57 | `/services/cms-development` (new) |
| AI SEO / GEO / AEO | 85 | `/services/ai-seo` |
| Website speed problems | 8,397 | articles and platform service pages |
| Migration | 10,344 | articles and `/services/wordpress-migration` |

19 sitemap URLs have never appeared in Google:
- **New service pages:** WordPress, CMS, backend and Webflow.
- **New work pages:** medical demo, A Step Above Medical, Saforne, Panda Publisher, Sleek Jackets and NorthDeck.
- **New articles:** seven, including Sanity vs WordPress, website portability and monthly running costs.
- **New language pages:** two, in German and French.

These are where new queries should appear after launch.

## Gaps found

Links from high-impression articles to the matching service page (main content only):

- `/blog/nextjs-hosting-zero-cost`, the highest-impression page (111k impressions in 6 months), links to **no service page**.
- `/blog/wordpress-plugin-security-2026` and `/blog/wordpress-traffic-drop-speed` link only to the Next.js rebuild page. They should also link the new `/services/wordpress`, which is for owners keeping WordPress.
- The other 18 checked articles link their matching service.

Missing destinations with measured demand (owner-supplied estimates, see the keyword audit):

- `small business website design`, about 3,600 US searches a month. The site has no page aimed at it.
- `medical website design`, about 1,300 a month. Only a demo work page targets it.

## Searches close to page one (3 months, position 8 to 30)

| Query | Impressions | Position | Page |
| --- | --- | --- | --- |
| headless commerce | 1,110 | 23 | what-is-headless-commerce |
| website migration cost | 482 | 9.6 | website-migration-cost-2026 |
| what is the cost of website migration | 249 | 9.2 | website-migration-cost-2026 |
| elementor and seo / elementor seo | 541 | 23 to 25 | elementor-kills-seo |
| shopify app pricing | 259 | 11.7 | shopify-app-costs-real-monthly-bill |
| woocommerce add to cart slow / woocommerce slow | 408 | 21 to 27 | woocommerce-too-slow |
| next.js development agency | 189 | 21.7 | top-nextjs-agencies-2026 |
| wordpress to next.js migration services | 153 | 22.3 | services/wordpress-migration |

The Vercel free-tier queries (position 8 to 10, thousands of impressions) are informational and rarely click. They are not a lead priority.

## Recommended actions

Before launch (small, low risk):

1. Add a next-step link from `/blog/nextjs-hosting-zero-cost` to the running-cost guide and the relevant service.
2. Add `/services/wordpress` links to the two WordPress articles above.

Launch day:

3. Submit the sitemap in Search Console. Request indexing for the new service pages and the homepage. Note the launch date so before and after can be compared in equal windows.

First month:

4. Point the planned link building at hiring pages, not articles: `/services/wordpress`, `/services/wordpress-migration`, the homepage and `/services/cms-development`.
5. Improve the near-page-one pages that are closest to buyers: website migration cost, WooCommerce add-to-cart speed, and the WordPress to Next.js migration service.
6. Decide on dedicated pages for small business website design and medical website design. These are the two largest measured gaps.

What this check does not show: rankings after launch, the effect of the redesign on clicks or leads, or why the August and September drops happened. Search Console data excludes anonymised queries, so query-level totals (46 clicks in 3 months) are lower than page-level totals.
