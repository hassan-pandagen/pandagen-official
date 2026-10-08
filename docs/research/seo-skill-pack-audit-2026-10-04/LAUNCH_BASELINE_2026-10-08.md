# Launch baseline, 8 Oct 2026

Captured on the morning of the redesign launch, so the post-launch checks (days 2, 7, 14 and 28) have a fixed "before" to compare against. Source: Search Console, property `sc-domain:pandacodegen.com`, web search, data state "all" (the last two days are not final).

## Last 28 days (8 Sep to 6 Oct 2026)

- 61 clicks and 25,533 impressions (sum of the daily rows).
- Daily clicks ranged 0 to 5. Days with 0 clicks: 12 Sep, 2 Oct, 4 Oct. The longest zero run was 1 day.
- Average position worsened from about 9.5 (September) to 12 to 14 (1 to 6 Oct). That shift falls inside the September 2026 spam update, which Google's status dashboard still showed as in progress on 8 Oct (started 24 Sep, no end date). It predates the launch.

Pages with clicks:

| Page | Clicks | Impressions | Avg position |
|---|---|---|---|
| /blog/divi-theme-slow | 12 | 919 | 6.9 |
| / | 11 | 305 | 8.4 |
| /blog/squarespace-too-slow | 8 | 564 | 8.0 |
| /blog/gohighlevel-website-speed | 6 | 829 | 6.5 |
| /blog/nextjs-hosting-zero-cost | 6 | 11,360 | 8.8 |
| /blog/nextjs-sanity-stack | 3 | 133 | 7.0 |
| /blog/woocommerce-too-slow | 2 | 552 | 18.3 |
| 13 other pages | 1 each | | |

## Every URL Search Console showed in the last 90 days, checked against the launch build

147 URLs (8 Jul to 6 Oct 2026), requested from a production build of the launch tree on 8 Oct:

- 139 return 200.
- 8 return a permanent redirect (308) to a page that returns 200:

| Old URL | Goes to |
|---|---|
| /blog/why-is-my-website-loading-so-slow | /blog/how-to-speed-up-your-website |
| /ai-info/competitor-comparison | /blog/top-nextjs-agencies-2026 |
| /blog/gohighlevel-migration | /blog/gohighlevel-keep-crm-replace-website |
| /blog/google-march-2026-update | /blog/google-algorithm-updates |
| /blog/how-to-cut-saas-bill-2026 | /blog/saas-software-pricing-audit-2026 |
| /blog/webflow-migration-50-to-100-pages | /blog/webflow-migration-cost |
| /blog/wordpress-killer | /blog/wordpress-vs-custom-code-real-cost-3-years |
| /work/panda-codelab | /work |

- None return 404.

## Alert thresholds after launch (from README "How to ship and measure the redesign")

- Critical: 3 or more complete days in a row with 0 clicks, or rolling 7-day clicks of 4 or fewer.
- Warning: rolling 28-day clicks under 51 on two weekly checks.
