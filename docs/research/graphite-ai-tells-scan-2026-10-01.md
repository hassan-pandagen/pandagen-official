# Graphite AI tells: Opus 5.5 data and a blog-wide scan

**Recorded:** 1 October 2026
**Follows:** [graphite-ai-tells-recheck-2026-09-30.md](graphite-ai-tells-recheck-2026-09-30.md), step 1 onward
**Status:** measured; no article copy changed

## What Graphite published

The [Opus 5.5 update](https://graphite.io/five-percent/research/ai-tells-opus-5-5-update) went
live on 1 October, as VentureBeat had reported. It adds Claude Opus 5.5 to the
[original study](https://graphite.io/five-percent/research/ai-tells): 2,548 tells, 4% fewer than
Opus 5, a word distribution closer to human writing (divergence 0.052 against 0.064), and
almost no em dashes (0.005x the human rate).

Both articles load their explorer tables from public JSON files under
`graphite.io/articles/ai-tells/` and `graphite.io/articles/ai-tells-opus-5-5-update/`. All 93
were downloaded. They hold every tab the page shows: unigrams, bigrams, trigrams, frames,
stylistic features and themes, for each model against human writing and against each other.

## What changed in the deslop skill

- `references/measured-tells.md`: what each model family overuses, by how much, and the edit for each habit.
- `references/measured-tells.json`: 344 to 734 tells per model, kept only when strong and recurring, so topic leftovers ("reheating leftovers") and ordinary technical wording ("confirm that the") stay out.
- `scripts/scan.py`: measures a file or URL. `scripts/build_measured_tells.py` rebuilds the lists.
- New rule 12 and ten quick checks in `SKILL.md`; contractions and sentence-length numbers in rules 6 and 7.

Calibration before trusting it on the blog: three Paul Graham essays from 2006 to 2013 scored
3.0 to 4.6 measured phrases per 1,000 words. A plain first-person paragraph scored 0. A
paragraph written to be full of Claude habits scored 182.

## The blog, measured

`scan.py` read the `<main>` element of all 88 article routes on the dev server: 301,312 words.

| Measure | Blog median | Human (Graphite) | Paul Graham essays |
|---|---|---|---|
| Measured phrases per 1,000 words | 15.5 (range 7.4 to 28.3) | n/a | 3.0 to 4.6 |
| Sentence length, mean | 14.2 | 26.5 | 17.7 to 18.9 |
| Sentence length, spread (SD) | 8.7 | 16.9 | 9.5 to 10.4 |
| Vocabulary variety (MTLD) | 128 | 85.6 | 81 to 105 |
| Contractions per 1,000 words | 0.0 | top human theme | 30 to 34 |

Headings, table cells and list items pull the blog's sentence mean down; the spread is the
better guide, and every article sits in the model range (Opus 5: 8.4, Opus 5.5: 7.2).

Most hits come from the Claude Opus 5 list (2,154) and the GPT-6 Astra list (1,860), which
matches how the articles were drafted.

### Most frequent measured phrases

| Phrase | Times | Articles | Measured rate |
|---|---|---|---|
| rather than | 538 | 87 | 20x to 22x (Opus 5, Astra) |
| rather than a | 176 | 72 | 13x to 38x |
| tells you | 73 | 38 | 11x (Opus 5) |
| the exact | 59 | 35 | 12x (Gemini 3.1) |
| why it matters | 54 | 3 | 32x (Opus 5 and 5.5) |
| the honest (answer) | 42 | 29 | 56x (Opus 5) |
| what actually | 39 | 32 | 37x (Opus 5) |
| a defined | 33 | 21 | 36x to 54x |
| alone does not | 26 | 23 | 334x (Astra) |
| is not automatically | 25 | 20 | never in the human articles (Astra) |
| does not establish | 19 | 15 | never in the human articles (Astra) |

Two shared labels account for repeated hits: "Where this sits" in
`src/components/blog/TopicUpLink.tsx` appears on every article, and "Why it matters" labels
54 glossary entries across three pages.

## What would change the numbers most, for the owner to decide

1. **Contractions.** The 88 article sources contain 7 contractions against 1,031 spelled-out
   negatives ("does not" 486, "cannot" 279, "do not" 266). 76 articles have none. Allowing
   "doesn't", "can't" and "don't" in body copy would touch every article without changing
   a single claim.
2. **"Rather than".** 538 uses on 87 of 88 pages. Most sentences read better stating the
   point without the foil.
3. **Hedged negatives in caveats** ("alone does not", "does not establish", "is not
   automatically"). These carry the site's claim discipline, so every caveat stays. Only the
   phrasing changes: "A PageSpeed score alone does not establish rankings" can become "A
   good PageSpeed score won't get you rankings on its own." Each edit needs the same check
   as any claim edit.
4. **The two shared labels.** One edit each, applied everywhere.

Leave sentence spread alone and re-measure it after the first three; varying lengths on
purpose produces its own pattern.

## Not done

No article was edited. Copy changes go through the evidence process, and another session is
working on blog copy. To re-measure after any pass:

    python .claude/skills/deslop/scripts/scan.py --list urls.txt --rank

with one article URL per line.
