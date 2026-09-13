# Keyword volume and difficulty evidence

*Moved 14 Sep from `audit/keyword-volume-2026-09-13/`, which is excluded by the `/audit/`
rule in `.gitignore` and therefore existed only on one machine. Now under `docs/`, which is
tracked.*

Provenance for the volume/KD/CPC figures cited in
`docs/evidence-audit/CHANGES_FOR_REVIEW_2026-09-13.md` and in commits `d3771ce`,
`d98d4ec` and `394b554`.

## Answer to the reviewer's question

**Provider:** DataForSEO.
**Accessed via:** the Percuity MCP server, tool `get_keyword_data`.
**Not** Google Keyword Planner directly, not Ahrefs, not Semrush, and not a saved export
from a prior session.

**Call shape:**

```
run_tool(
  name = "get_keyword_data",
  args = {
    keywords:           [ ... ],
    location_code:      2840,       # United States
    language_code:      "en",
    include_difficulty: true
  }
)
```

Five calls were made on 13 September 2026, in this order:

| # | Set | Keywords |
|---|---|---:|
| 1 | General service terms | 20 |
| 2 | AI and commercial terms | 18 |
| 3 | Validation of the `keyword-gap-2026-09-13` P1 list | 18 |
| 4 | AEO commercial intent | 16 |
| 5 | AI-website-builder variants | 11 |

Every row returned is in `reconstruction-2026-09-13.json`, grouped by call, with the fields the provider
returned: `search_volume`, `cpc`, `competition`, `competition_index`, `keyword_difficulty`
and `status`.

## Why the reviewer could not find it, and that is a fair criticism

**The raw results were not saved when the figures were first reported.** The numbers went
from the tool response straight into a review document and three commit messages, with the
provider named nowhere. That is the same defect class this session spent the day removing
from the site: a figure asserted without a retrievable source.

`reconstruction-2026-09-13.json` was written on **14 September**, reconstructing the 13 September
responses. It is a record of what was returned, not a fresh capture. A re-run today would be
a different capture and should be saved as its own dated file.

## What these numbers are, and are not

- `search_volume` is a **provider estimate**, not a measured count. DataForSEO derives it
  from Google Ads Keyword Planner data, which Google itself documents as an estimate
  covering a keyword and its close variants under the selected date, geography and network.
- `keyword_difficulty` is a **modelled score of backlink competition**. It does not measure
  whether Google treats a given site as a credible answer. A low score is not a prediction
  that a new page will rank.
- `status: NO_VOLUME_REPORTED` means **no search-volume value was returned for that term
  under the recorded settings. The cause is not established.** An earlier version of this
  file said it meant "below the reporting floor"; that was a diagnosis, not something the
  response supports, and a reviewer was right to reject it. DataForSEO documents other
  causes of a null volume, including advertising-policy restrictions.

  **There is now first-party evidence that the status is unstable.** `ai website builder for
  business` returned `search_volume: 30` on 13 September and `NO_VOLUME_REPORTED` on
  14 September, same location, same language, 24 hours apart — see
  `capture-2026-09-14.json`. A status that flips overnight cannot be read as a property of
  the keyword. Every conclusion in the review resting on a null is weaker than it was
  presented, and the only defensible reading is "no value was returned under these settings
  on that date".
- `competition` and `competition_index` describe **paid advertising** competition, not
  organic difficulty. They were not used to support any organic claim.
- **US only.** No UK or other-market capture was taken, though the business serves both.
  Anything reported as a global or UK figure would be unsupported by this evidence.
- Volumes on newer terms are volatile. `ai seo agency` at KD 0 and `ai seo services` at KD 2
  are unusually low for terms carrying $41–45 CPC, which is consistent with a category that
  barely existed eighteen months ago. Those scores should not be assumed stable.

## How to reproduce

Re-run the same five calls with the parameters above and compare against
`reconstruction-2026-09-13.json`. Differences are expected and one has already been
observed within 24 hours (see the null-status note above).

An earlier version of this file claimed the six-month trend arrays showed 2–4x
month-to-month swings. **That was not checkable, because this reconstruction did not
preserve the arrays** — a fair reviewer finding. `capture-2026-09-14.json` now preserves
them for sixteen decision-critical terms, and the real spreads are wider than 2–4x: 6.2x on
`website redesign services`, 9.8x on `seo migration services`, 8x on
`white label web development`. That file also records a caveat that matters more than the
volatility itself: every trend array ends at 2026-02, seven months before capture, so none
of it describes recent demand.

For a stronger basis than this capture provides, the `keyword-gap-2026-09-13` research
already specifies what would be needed: separate US and UK Keyword Planner exports for the
shortlisted families, English, Google Search, with a named 12-month period and monthly
breakdown, preserving the raw export, tool date, country, language and network.
