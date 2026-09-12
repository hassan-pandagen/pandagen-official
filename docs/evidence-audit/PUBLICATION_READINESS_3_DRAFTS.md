# Publication readiness — the 3 unpublished drafts

Checked 12 September 2026. Covers evidence, keyword targeting, cannibalisation, hub/cluster
placement and `/ai-info`.

These are the only genuinely unpublished blog posts in `blog-drafts/`. Five superseded files
were deleted 12 September 2026 (each had a live post under the same slug), and two remaining
files are not blog posts at all — `linkedin-48-sites-post` and
`information-gain-researcher-prompt`.

## Verdict at a glance

| Draft | Evidence | Cannibalisation | Cluster | Blocking work |
|---|---|---|---|---|
| `is-it-cheaper-to-build-your-own-website` | ✅ audited, 8 fixes | 🟢 low | `pricing` | Trim the pricing pitch; add the security link |
| `perfect-seo-score-no-traffic` | ✅ audited, 3 fixes | 🟡 manageable | `seo-aeo` + `performance` | Enforce study-vs-explainer split; add channel figures to the source JSON |
| `what-is-llms-txt` | ✅ all 5 resolved, 8 fixes | ✅ cleared 12 Sep | `seo-aeo` | **Ready to convert to TSX** |

---

## 1. `is-it-cheaper-to-build-your-own-website`

**Target query:** "Is it cheaper to build a website myself?" (QuestionFinder, buyer intent 76),
alongside "Is $1500 a good price for a website?" and "Is $1000 a good price for a website?"

### Evidence — clean
Two fixes applied 12 Sept:
- The unsourced "Most custom Next.js agencies will not start below $10,000 and several will
  not start below $50,000" was **cut**. Your own 10 Sept research samples Next.js suppliers
  advertising from $1,250 and $1,500–$6,000, so the claim was contradicted in-house.
  Replaced with the sourced Pagepro $25,000 Clutch minimum plus the advice to ask for the
  minimum before the quote.
- The notes block still carried "440,000+ blocked attempts" after the body had been
  corrected to quote the two Wordfence figures separately. **Fixed** — summing two
  approximations produces a number neither source states.

Everything else is first-party and dated: Panda Patches $11,186.59 / 36 orders / 14.7% of
August 2026 revenue, labelled founder-affiliated in the body. PageSpeed claims are
reproducible by the reader.

### Cannibalisation — low
Only `build-vs-buy-software-2026-cost-comparison` matches "cheaper to build", and that post
is about software, not websites. Nothing on the site targets "build a website myself" or
the $1,500/$1,000 price questions. Clear lane.

**One caveat.** The draft carries the full pricing pitch — tiers, ownership, hosting,
PageSpeed guarantee. That overlaps `how-much-does-a-website-cost` and
`custom-website-5000-whats-included`, both of which own the cost query properly. Cut it to
two or three sentences and link out, or the post starts competing with your own cost pillar.

### Before publishing
1. Trim the pricing section to a short mention + link to `how-much-does-a-website-cost`.
2. Add the internal link to `wordpress-plugin-security-2026` where the Wordfence figures appear.
3. Convert to TSX and register in `src/data/blog.ts` with `category: "Pricing"`.
4. Add to the `pricing` cluster in `src/data/topical-map.ts`.

---

## 2. `perfect-seo-score-no-traffic`

**Title:** "We Measured 48 Small-Business Websites. 37 Fail the Check AI Assistants Use."

### Evidence — clean, and the strongest of the three
This is a genuine first-party study and it is disciplined: sample size and dates stated
(48 sites, measured 1–3 September 2026), the confounder tested and reported as a **null
result** ("sites with no page builder at all failed at 90%, higher than any builder group"),
and the traffic-threshold caveat handled (44 of 48 below the CrUX reporting threshold).

No external sources to verify — every number is yours.

### Cannibalisation — manageable, but needs enforcing
"Agentic browsing" and "accessibility tree" appear across six or more live pages.
`agentic-browsing-pagespeed-score` owns the concept as the **explainer**. I confirmed it
does **not** already contain the 48-site study, so this post is genuinely new evidence.

The split is legitimate — explainer versus evidence — but only if you enforce it:
- The study must **not** re-explain what the checks are. Link to the explainer instead.
- The explainer should cite the study as its evidence and link down to it.
- Queries stay separate: "what is the agentic browsing check" belongs to the explainer;
  "how many small business sites fail" and the study data belong to the new post.

Leave both explaining the checks and you have two pages competing for the same query.

### Before publishing
1. Strip any re-explanation of the checks; replace with a link to `agentic-browsing-pagespeed-score`.
2. Add a reciprocal link from the explainer to the study.
3. Register with `category: "Research"`, add to `seo-aeo` and `performance` clusters.

---

## 3. `what-is-llms-txt` — audited and cleared

**Primary keyword:** "what is llms.txt" (24%). Secondary: "llms.txt example" (23%).

### Cannibalisation — ✅ resolved 12 September
`aeo-web-performance-glossary` was targeting both of this draft's primary queries in its
`keywords` metadata. Both were removed; the glossary keeps its llms.txt definition, which is
what a definitions index should carry. No other live page targets the query.

### Evidence — all 5 sources resolved, 8 fixes applied

| Source | Outcome |
|---|---|
| ppc.land (97% of 137,210 domains, zero llms.txt requests May 2026) | ✅ verified — the post's load-bearing stat holds |
| Google Search Central AI optimization guide | ✅ **re-sourced to the primary.** Google's own words: "Google Search itself doesn't use them… Google Search ignores them." The draft had cited a blog summarising Google; now cites Google |
| llmstxt.org | ✅ primary spec, low risk |
| baselinelabs.ai | ➖ no longer needed — superseded by citing Google directly |
| presenc.ai | 🔴 **FAILED — do not cite** |

**The presenc.ai failure.** It states "Perplexity: publicly confirmed" and "Anthropic:
publicly confirmed" for llms.txt consumption, and cites **no source for either**. Research
found that both companies *publish* an llms.txt for their own documentation — which is a
different claim entirely. Publishing a file is not consuming one.

The draft had repeated this as fact in five places: the quick answer, the "who actually
reads it" list, the SEO-stack ranking, and **two FAQ answers that feed `FAQPage` schema** —
so the unsourced claim would have shipped as structured data. All five are corrected.

This improves the post rather than weakening it. Its stated premise is that "most guides
either oversell or dismiss"; it now delivers on that by being the page that checked the
claim everyone repeats and found nothing behind it.

### Before publishing
1. Convert to TSX, register with `category: "AEO"`, add to the `seo-aeo` cluster.
2. Link the glossary's llms.txt definition down to the post once it is live.
3. The draft's own note says to stagger publication — respect it; do not ship the same day
   as another AEO post.

---

## Does anything join `/ai-info`?

**No, not automatically.** `/ai-info` is a company reference page, not a blog index. Its
sections are company facts, canonical description, migration controls, commercial reference,
project evidence, a reference directory and an FAQ. Posts do not get listed there as a
matter of course.

**One exception worth making.** `/ai-info` has an `evidence-reference` section that labels
project evidence by relationship and method. The 48-site study in `perfect-seo-score-no-traffic`
is exactly that kind of asset — first-party, dated, method disclosed, with a stated null
result. Adding a line there pointing at the study would strengthen the page, and the study
is the only one of the three that qualifies.

The other two do not belong on `/ai-info`.

## Hub and cluster summary

All three join existing clusters. **No new hub should be minted** for any of them —
`seo-aeo` and `pricing` already exist and already have 10 and 6 posts respectively.

| Draft | Cluster(s) | Hub |
|---|---|---|
| `is-it-cheaper-to-build-your-own-website` | `pricing` | existing |
| `perfect-seo-score-no-traffic` | `seo-aeo`, `performance` | existing |
| `what-is-llms-txt` | `seo-aeo` | existing |

Note that `woocommerce`, `wix` and `gohighlevel` are flagged `serviceOwned: true` and get no
hub, because a `/services/*` page already owns their intent. None of these three drafts
falls into that situation.
