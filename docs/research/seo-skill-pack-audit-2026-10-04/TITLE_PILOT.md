# Title pilot 1: three titles, three controls

Set up 4 Oct 2026, after the SEO skill-pack audit (G-ctr-and-legal.md, sections 3 to 5).
The audit's own candidates (shopify-app-costs-real-monthly-bill, wix-too-slow,
cloudflare-emdash-wordpress-replacement) are all being edited by other fixes, or sit in an
Experiment 5 cohort, so this pilot uses six pages that nothing else in this round touches.

## Start condition

**The pilot starts the day the redesign deploys (call it D).** The new titles are already in
the working tree and ship with that deploy. Nothing goes out before it.

From D until the 28-day read, leave all six pages alone: no title, description, body, date or
schema edits. If one of them has to change for an accuracy reason, log the date here and
treat that pair as broken.

## The six pages

| Role | Page | Paired with |
|---|---|---|
| Test 1 | /blog/agentic-browsing-pagespeed-score | Control 1 |
| Test 2 | /blog/how-to-achieve-100-pagespeed | Control 2 |
| Test 3 | /blog/squarespace-migration-cost | Control 3 |
| Control 1 | /blog/fix-meta-ad-tracking-2026 | Test 1 |
| Control 2 | /blog/meta-conversions-api-setup-cost | Test 2 |
| Control 3 | /blog/wix-migration-cost | Test 3 |

How they were picked:

- Each page has real impressions in the 90 days to 3 Oct, ranks inside about position 14 over
  that window, and has no content commit on 3 or 4 Oct.
- None is on the list of pages other fixes are editing in this round, none is in an
  Experiment 5 cohort (GSC_TRACKER.md, 29 Aug), and none is one of the two top click earners
  (divi-theme-slow, gohighlevel-website-speed).
- squarespace-too-slow and wordpress-traffic-drop-speed were left out as controls even though
  they matched well. The audit (F-links-and-opportunities.md) recommends restoring links to
  both from /services/squarespace and /services/wordpress-migration, which would move a
  control for a reason that has nothing to do with titles.
- Pairs are matched on 90-day impressions and position, and on page type where possible:
  Test 3 and Control 3 are both platform migration-cost posts built on the same template with
  the same price tiers. Test 2 and Control 2 have almost the same 90-day numbers (296 against
  291 impressions, 3 clicks each).

## Old and new titles

Only `<title>`, `og:title` and `twitter:title` change. The H1, the JSON-LD headline, the
description and the blog.ts card title keep the old wording. Widths are Arial 20px, the usual
proxy for a desktop result title.

| Page | Old title | New title |
|---|---|---|
| agentic-browsing-pagespeed-score | Lighthouse Agentic Browsing Checks Explained (2026) (484px) | Lighthouse Agentic Browsing Score: The 3 Checks and Fixes (541px) |
| how-to-achieve-100-pagespeed | How to Reach 90+ PageSpeed: A Repeatable 2026 Process (534px) | PageSpeed Analysis: What Your Score Means and 8 Steps to 90+ (589px) |
| squarespace-migration-cost | Squarespace Migration Cost 2026: What Leaving Costs (493px) | Squarespace Migration Cost in 2026: Our Prices, From $1,500 (556px) |

Controls keep their titles:

- fix-meta-ad-tracking-2026: Meta Ad Tracking Not Working? A 2026 Diagnostic Guide
- meta-conversions-api-setup-cost: Meta Conversions API Setup Cost: A Scope-Based Guide
- wix-migration-cost: Wix Migration Cost 2026: What Leaving Wix Costs

### Why each new title, and what in the body backs it

**agentic-browsing-pagespeed-score.** People search "lighthouse agentic browsing", "agentic
browsing lighthouse" and "agentic browsing score", and the page ranks about 7 to 9 for them.
Clicks fell from 4 to 0 between the two 28-day windows while position held at 7.1 to 7.2. The
old title promises an explanation. The searcher has a score in front of them and wants to know
what it counts and how to fix it. The body has both: "Which three checks make up the score?"
(accessibility tree, layout shift, llms.txt, with the three WebMCP audits shown as not
applicable for most sites) and "How do you fix each of the three?".

**how-to-achieve-100-pagespeed.** The queries are "pagespeed analysis" (6.8), "page speed
analysis" (8.3), "pagespeed score" (5.5) and "website speed analysis" (4.6). The old title only
talks about reaching 90+. The body opens with "First understand the number" (what the
Lighthouse score bands mean and what they don't), then "Run the test before you read the rest"
(how to run and read PageSpeed Insights), then Steps 1 to 8. Some of these searches are people
looking for the tool itself, which no title fixes, so treat any lift as a direction only.

**squarespace-migration-cost.** A cost query wants a price, and the old title gives none. The
body states our terms in its first paragraph ("from $1,500 at a fixed price agreed before we
start") and lists the Starter, Growth and Scale tiers. "Our" keeps it clear that this is our
price and not a market average. The figure is COMMERCIAL's Starter price in
src/data/company-facts.ts. If that price changes, this title changes with it (log it here).

## Baseline: last 28 days (6 Sep to 3 Oct 2026)

From pages_last28.json, Search Console export of 4 Oct (dataState=all, so the last two days
were still filling in). Re-pull the same window on the day of the deploy if it is more than a
week away, and add the new numbers below. Keep these as they are.

| Page | Clicks | Impressions | CTR | Avg position |
|---|---|---|---|---|
| Test 1: agentic-browsing-pagespeed-score | 0 | 773 | 0.00% | 7.1 |
| Test 2: how-to-achieve-100-pagespeed | 0 | 128 | 0.00% | 10.1 |
| Test 3: squarespace-migration-cost | 0 | 146 | 0.00% | 7.7 |
| **Tests combined** | **0** | **1,047** | **0.00%** | |
| Control 1: fix-meta-ad-tracking-2026 | 0 | 91 | 0.00% | 4.7 |
| Control 2: meta-conversions-api-setup-cost | 0 | 45 | 0.00% | 7.8 |
| Control 3: wix-migration-cost | 0 | 63 | 0.00% | 6.7 |
| **Controls combined** | **0** | **199** | **0.00%** | |

For context, the previous 28 days (9 Aug to 5 Sep) and the 90 days to 3 Oct:

| Page | Prev 28d clicks / impr / pos | 90d clicks / impr / CTR / pos |
|---|---|---|
| agentic-browsing-pagespeed-score | 4 / 529 / 7.2 | 6 / 1,310 / 0.46% / 7.1 |
| how-to-achieve-100-pagespeed | 0 / 64 / 19.8 | 3 / 296 / 1.01% / 13.8 |
| squarespace-migration-cost | 0 / 157 / 9.3 | 2 / 658 / 0.30% / 10.2 |
| fix-meta-ad-tracking-2026 | 0 / 62 / 8.6 | 2 / 787 / 0.25% / 12.5 |
| meta-conversions-api-setup-cost | 0 / 96 / 10.3 | 3 / 291 / 1.03% / 10.1 |
| wix-migration-cost | 1 / 206 / 11.1 | 1 / 412 / 0.24% / 13.1 |

## Top queries per page

Query rows only exist in the 90-day export (page_query_90d.json, 5 Jul to 3 Oct). They cover a
small share of each page's impressions. The rest are anonymised. Format: query (clicks,
impressions, position).

**agentic-browsing-pagespeed-score** (16 rows, 133 impressions): lighthouse agentic browsing
(1, 58, 8.2); agentic browsing lighthouse (1, 25, 9.2); lighthouse agentic browsing scoring
(0, 14, 8.4); agentic browsing score (0, 13, 6.7); google lighthouse agentic browsing (0, 4,
10.0).

**how-to-achieve-100-pagespeed** (17 rows, 95 impressions): analyze page speed (0, 22, 12.1);
pagespeed analysis (0, 20, 6.8); page speed analysis (0, 16, 8.3); pagespeed score (0, 8, 5.5);
pagespeed web (0, 8, 20.0); website speed analysis (0, 5, 4.6).

**squarespace-migration-cost** (21 rows, 82 impressions): how much does it cost to migrate a
website (0, 31, 23.0); a long machine-style "how much do migration services cost to move from
squarespace to a visual no-code builder?" (0, 9, 8.0); squarespace price increase (0, 8, 17.1);
squarespace enterprise migration (0, 5, 14.8); ecommerce squarespace migration (0, 4, 14.0).

**fix-meta-ad-tracking-2026** (9 rows, 14 impressions): meta ads tracking problem (0, 3, 28.7);
how to fix missing facebook ad conversions (0, 1, 36.0). The other rows are operator or
machine queries.

**meta-conversions-api-setup-cost** (2 rows, 3 impressions): meta conversions api gateway
pricing official (0, 2, 4.0); meta conversions api pricing (0, 1, 5.0).

**wix-migration-cost** (16 rows, 109 impressions): how much does it cost to migrate a website
(0, 25, 40.6); wix seo migration (0, 25, 20.7); a machine-style "evaluate the brand ... wix on
platform migrations" (0, 20, 6.8); wix website migratie (0, 13, 61.6); migration wix (0, 8,
23.8).

## Read dates

- **Read 1, D+14.** Pull page-level clicks, impressions, CTR and position for all six pages for
  D to D+13. Search Console lags about two days, so pull on D+16. This read is for the revert
  rule only; don't call a result from two weeks of data at this volume.
- **Read 2, D+28.** Pull D to D+27 (on about D+30) and compare it with the 28-day baseline
  above, pair by pair and combined. This is the decision read.

## How to score it

- **Pass:** the three test pages together gain at least 5 more clicks than the three controls
  over the same 28 days, and each test page's average position stays within 1.5 places of its
  baseline. A higher CTR that comes from falling impressions doesn't count.
- **Flat:** neither side moves by 5 clicks. Record it. One more try on a different diagnosis is
  allowed, then the pages go back on the watch list.
- At these volumes 1 to 3 clicks either way is noise. Every baseline above is 0 clicks.

## Revert rule

Restore the old title (from the table above) on any test page where, at either read:

- test clicks fall against control clicks over the same dates, or
- the test page drops more than 2 positions while its control holds within 1 place.

Revert the title only, in all three places it was changed, and log the date here.

## Confounds

- **The redesign deploy is the big one.** It changes the template of every page on the site,
  including all six of these, on the same day the titles change. A before/after on the test
  pages alone would mostly measure the redesign. The controls exist to absorb that: they get
  the same redesign on the same day and keep their titles, so whatever the tests gain
  beyond the controls can be put down to the titles.
- Other uncommitted changes ship in the same deploy and touch every blog post the same way
  (on 4 Oct the working tree also changes the byline date and the FAQ heading on all six of
  these pages). They hit tests and controls alike, so the controls absorb them too.
- Volume: the tests carry about five times the controls' impressions in the last 28 days
  (1,047 against 199), because there are few clean, comparable pages left. Compare changes
  against each page's own baseline, not raw totals between arms.
- If any internal links to these six pages are added or removed after D (for example the
  pillar-to-post links the audit recommends restoring), log it here with the date and the page.

## Log

- 4 Oct 2026: titles changed in the working tree (page.tsx metadata of the three test pages).
  Not deployed. D is not yet set.
- 8 Oct 2026, before D: accuracy fixes to /blog/agentic-browsing-pagespeed-score (Lighthouse 13.5.0
  added a seventh Agentic Browsing audit; body, table, one FAQ and dates updated). Title and
  description untouched. Made before the deploy, so it ships on D with everything else and the pair
  stays usable. The blog fact-check (docs/research/blog-fact-check-2026-10-08/README.md) is checking
  the other five pilot pages before the deploy for the same reason.
