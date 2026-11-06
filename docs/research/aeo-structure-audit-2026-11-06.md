# AEO structure audit, 6 November 2026

On 6 Nov 2026 we ran Nectiv's open-source "AEO Content Structure Optimizer" over seven blog posts and compared it with our own `citability-audit` skill. This file records the results, what we changed and what is still to do.

- **Source:** https://github.com/Nectiv-Digital/nectiv-claude-skills/tree/main/aeo-content-structure-optimizer (Chris Long, Nectiv; blog post 2 Nov 2026).
- **How it was run:** we read the scripts first (`html_to_md.py` and `analyze.py` are stdlib-only and make no network calls), then ran them on the live HTML. The clone lived in a scratchpad and isn't in this repo.

## Results (live site, before the 6 Nov takeaway boxes were deployed)

Citations are Bing Copilot citations from the 1 Nov report (3 months). Nectiv's benchmarks come from its `references/evidence.md`, which cites studies by Kevin Indig, Chris Long and Chris Green.

| Post | Bing citations | Definitive sentences | Question headings | Entity density | Sentences with no entity | HTML tables |
| --- | --- | --- | --- | --- | --- | --- |
| Nectiv benchmark | | 36.2% on cited pages (20.2% on non-cited) | | at least 12% | no more than 25% | 30% of cited pages have one |
| wix-too-slow | 61 | 21.5% | 40.0% | 9.2% | 39.3% | 0 |
| why-competitor-outranks-you | 56 | 16.4% | 7.4% | 7.1% | 59.4% | 0 |
| cloudflare-emdash-wordpress-replacement | 51 | 21.5% | 23.8% | 13.4% | 28.3% | 0 |
| how-to-speed-up-your-website | 44 (via the why-is-my-website-loading-so-slow redirect) | 32.3% | 0.0% | 7.2% | 50.3% | 2 |
| wordpress-migration-cost | not in top list | 24.6% | 9.1% | 7.2% | 48.0% | 1 |
| website-monthly-running-cost | not in top list | 20.9% | 28.6% | 11.8% | 38.5% | 2 |
| top-nextjs-agencies-2026 | not in top list (GSC position about 7, 0 clicks) | 16.7% | 0.0% | 8.6% | 45.5% | 1 |

Every post was updated within the last 8 to 29 days, so freshness passes everywhere. Flesch-Kincaid grades run from 8.5 to 12.1, under the cited-page average of 16.

## What the comparison shows

1. **The heuristics don't predict our citations.** why-competitor-outranks-you is our second most-cited post, yet it scores worst on entity density, empty sentences and tables. Use the scores to find candidate edits, not as targets.
2. **Our posts already front-load.** Most posts open with a "The short answer" box under the author line. Nectiv's checker only recognises headings such as "Key takeaways", "summary", "TL;DR", "at a glance" or "quick answer", so it reports those boxes as missing. AI answer engines don't depend on the label.
3. **Definitive language runs below the 36% benchmark** (16 to 32%). Part of that is deliberate: our evidence rules keep a caveat wherever a claim isn't proven. Never firm up a claim to hit the number.
4. **Nectiv's skill finds statistics online and inserts them. We don't.** Under `evidence-audit`, every number must come from a source that states it.

## Done on 6 Nov (commit e2360032)

We added a "Key takeaways" box, directly after the author line, to:
- cloudflare-emdash-wordpress-replacement (its only summary had been at the bottom);
- how-to-speed-up-your-website;
- wordpress-migration-cost (four bullets; we dropped the bullet that repeated the price box below it);
- website-monthly-running-cost.

The bullets only restate claims already on each page.

## To do later

1. **Question-style headings** on how-to-speed-up-your-website, top-nextjs-agencies-2026 and wordpress-migration-cost (0 to 9% today). Keep the same facts and change only the wording, e.g. "Start with the page that feels slow" becomes "Which page should you test first?". This is the cheapest change.
2. **Names in the first 30% of each post:** swap "the site", "this" and "the platform" for product names, versions and dates.
3. **Summaries for the remaining posts with none near the top** (about 45 at the 6 Nov count). Work in batches, highest impressions first.
4. **Service pages** (/services/wordpress-migration, /services/ecommerce): the headings are brand lines ("A new shop. A happy client.") and there are no tables. Consider an "at a glance" block with question headings and a small comparison table. This is the owner's design call.
5. **Re-measure in Bing AI Performance around 1 Dec 2026** to see whether citations on the four changed posts moved. Re-run Nectiv's analyzer after deploy for the after numbers.
