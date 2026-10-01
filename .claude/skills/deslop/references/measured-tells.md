# Measured Tells: What Graphite Counted

The other reference files catalogue patterns people noticed. This one is counted.
Graphite compared 10,000 human web articles, all published before ChatGPT, with
10,000 articles from each of ten models written on the same topics from the same
prompt, and measured which words, phrases and sentence frames each model uses far
more often than people do.

- [AI Tells](https://graphite.io/five-percent/research/ai-tells), 16 Sep 2026: GPT-4.1 to GPT-6 Astra, Claude Opus 4 to Opus 5, Gemini 2.5 Pro and 3.1 Pro
- [AI Tells: Opus 5.5 Update](https://graphite.io/five-percent/research/ai-tells-opus-5-5-update), 1 Oct 2026

Added 1 Oct 2026. The curated lists live in `measured-tells.json`; `scripts/scan.py`
checks a draft against them, and `scripts/build_measured_tells.py` rebuilds them when
Graphite adds a model.

## How to read the numbers

"23x" means the word appears 23 times as often per word of text in that model's
articles as in the human ones. It describes two piles of articles. It says nothing
about the sentence in front of you, and Graphite itself advises against judging
authorship from single tells. Every hard rule in `grammatical-signals.md` applies:
edit for the reader, never to move a score, never quote a score as evidence.

Three limits from the study itself. The texts are web articles written to one fixed
prompt, so chat replies and sales pages may differ. The human articles predate 2022,
so some "tells" may be ordinary style drift since then. And a few listed tells are
topic leftovers ("reheating leftovers"), which the build script filters out.

## The biggest signals are not words

| Measure | Human | Opus 5.5 | Opus 5 | GPT-6 Astra | Gemini 3.1 |
|---|---|---|---|---|---|
| Sentence length, mean (words) | 26.5 | 17.3 | 18.3 | 16.2 | 19.4 |
| Sentence length, spread (SD) | 16.9 | 7.2 | 8.4 | 5.8 | 6.8 |
| Vocabulary variety (MTLD) | 85.6 | 132.4 | 150.3 | 153.6 | 127.1 |
| Word length (characters) | 4.9 | 5.1 | 5.2 | 5.6 | 5.4 |
| Exclamation marks per 1k words | 2.8 | 0.0 | 0.0 | 0.0 | 0.0 |
| Semicolons per 1k words | 1.4 | 0.1 | 0.6 | 0.6 | 0.3 |
| Em dashes per 1k words | 3.1 | 0.0 | 2.9 | 0.4 | 0.0 |

Of all the features Graphite measured, vocabulary variety and word length separate
model writing from human writing most strongly (Cohen's d from 1.0 to 1.6 across the
four models). Models reach for a new word every time they mention a thing; people
repeat the plain one. That is elegant variation from
`grammatical-signals.md`, now with a number on it. Repeat the correct noun, and
prefer the short word.

**Sentence length.** People write longer sentences on average, and far more varied
ones: a 40-word sentence, then a 5-word one. Every model clusters in a narrow band
around 16 to 19 words. "Shorter" is the wrong lesson. Let the length follow the
thought, and expect your spread to sit well above 10 if you are writing naturally.

**Punctuation.** People interrupt themselves with brackets (7.7 asides per 1,000
words in Graphite's chart, against 0.04 to 0.9 for the models) and use semicolons
and exclamation marks. An aside that adds something belongs in brackets. Do not
plant exclamation marks to look human.

**Em dashes** stopped being a tell. Opus 5.5 almost never uses them (0.005x the human
rate), nor does Gemini; Astra uses an eighth as many as people. This site still uses
none: that is the owner's standing house style, enforced by `scripts/unicode_guard.py`,
not a detection rule.

**Lists.** In this corpus people used far more list lines than the models did. A
list is fine when the content is a list.

## Claude: Opus 5.5, with Opus 5 where it differs

These are the habits Claude, which maintains this skill, brings to its own drafts.
Each line gives the measured rate against human writing, then the edit.

**Guide scaffolding.** "this guide explains" 278x, "this article explains" 113x,
"bringing it all" 183x, "looking ahead, the" 40x, "what comes next" 24x,
"this guide walks you through", "final thoughts", "the bottom line". Cut it and open
with the first fact.

**Announcing that something matters.** "this matters because" (never in the human
articles), "this _ matters" 268x, "why _ matters" 92x, "why this matters" 57x,
"matters more than" 27x, "just as importantly". Delete the announcement. If the point
matters, the next sentence shows the cost, the ranking drop or the number.

**Virtue adjectives.** dependable 23x, clearer 14x, steady 11x, practical 11x,
modest 10x, thoughtful 9x, genuine 9x, manageable 9x, meaningful 8x, smoother 8x.
They rate a thing without describing it. "Dependable hosting" becomes "hosting that
stayed up through the Black Friday sale", or nothing.

**Soft frequency.** "often shortened to" 85x, "often called" 58x, "a large share of"
35x, "many people assume", "tends to", "roughly". Give the number and its source, or
make the statement once without the hedge.

**Summing up.** "taken together these" (never in the human articles), "the takeaway is"
(same), "the result is a _ that" 130x, "together these", "the first is... the second
is". Do not restate what the reader just read. End on the last real point.

**Cause and effect asserted.** "reflects a broader", "builds trust" 83x, "signals
that", "points to a", "adds another layer" 27x, "opens the door", "shapes how". Each
claims a cause. Keep it only if you can show the cause; this is the same problem as
the participial clause in `grammatical-signals.md`.

**Not X but Y.** "rather than treating" (never in the human articles), "is more than
a _ it" 98x, "rather than relying" 35x, "rather than simply" 32x, "not simply",
"far more than", "does more than". State Y. Mention X only if your reader actually
believes X.

**Foundation metaphors.** "at its heart", "at its core", "built around" 22x, "a strong
foundation", "sits at the", "central to". Say what the thing does.

**Helpfulness talk, new in Opus 5.5.** Against Opus 5: "is especially helpful" 12x,
"can help you" 8x, "makes it easier" 6x, "helps you avoid" 5x, and "helpful", "helps",
"key", "truly" up three to four times. Say what happens instead: "helps you avoid
downtime" becomes "the site stays up during the switch".

**Superlatives.** Against GPT-6 Astra: "single most" and "arguably the most" (Opus 5,
never in Astra), "every single" 112x, "the most popular" 45x, "perhaps the most" 29x,
"the most powerful" 24x (Opus 5.5). Remove, or prove with a figure and a source. On
this site the public-claims gate blocks many of them anyway.

**Opus 5 emphatics, fading in 5.5.** genuinely 68x, enormously 87x, quietly 33x,
"earns its place", "the honest answer", "matters enormously", "unglamorous". Opus 5.5
cut "is genuinely" by 26x and raised "truly" 3.6x. Swapping one intensifier for
another moves the tell; deleting it removes it.

## GPT: GPT-6 Astra

Relevant here because ChatGPT drafts copy in this repo.

- **Corrective framing**, at 12 times the human rate and rising across versions: "rather than treating", "rather than relying only on", "not simply" 157x, "the _ is not simply" 576x.
- **Hedged negation**: "does not establish" (275x Opus 5.5's rate), "not necessarily", "not by itself", "does not eliminate", "alone does not".
- **Lesson framing**: "that distinction matters" (never in the human articles), "matters because" 357x, "the central lesson", "the broader lesson".
- **Scaffolding nouns**: "another dimension" 117x, "together these" 95x, "a useful starting point", "a stronger foundation", "a framework for".
- **Mild adjectives**: dependable 59x, manageable 34x, practical 26x, approachable 22x, meaningful 13x.
- **Tradeoff dodging**: "without requiring" 70x, "without losing" 22x. If something costs something, say what.
- **Modal softening**: "may provide" (36x Claude's rate), "can reveal", "may offer".

## Gemini: Gemini 3.1 Pro

Relevant here because the site's assistant answers with Gemini.

- **Intensifiers**, 13 times the human rate: incredibly 18x (1,835x Astra's rate), profound 25x, immense 22x, fiercely, flawlessly, "absolutely essential" 32x, massive, deeply, highly.
- **Guide scaffolding**: "this comprehensive guide", "let us explore", "let us dive", "we will explore".
- **Reader conditionals**: "whether you are a _ or", "for anyone looking to", "have you ever".
- **Essence claims**: "the secret lies in", "a testament to", "a profound sense of", "at the _ of this _ is" 400x.
- **Elevation**: "is not just a _ it is" 153x, "more than just a _ it", "goes far beyond".
- **Formal connectives**: furthermore 25x, "ultimately this" 78x, "furthermore the" 43x, "additionally the".
- **Necessity talk**: "ensures that", "is crucial for", "is vital for".
- **Contractions**: almost none (0.001x the human rate).

"Furthermore" and "additionally" are Gemini habits. Claude uses them less than people do,
so a Claude draft with neither has not passed any test.

## Tells move between versions

Within one family, 55% to 72% of the tells differ between consecutive versions. Opus 5.5
lost "genuinely", "enormously" and spelled-out numbers ("thirty", "twenty"), and gained
"helpful", "truly" and "can help you". Any word list goes stale with the next release.
The fixes that last are structural: name the thing, give the number, cut the
announcement, let sentence length follow the thought.

## The human side, and its trap

Graphite's human themes: contractions everywhere; first person ("I", "we", "my
favorite"); casual hedges ("pretty", "a bit", "probably"); reported speech ("he said",
"director of"); loose quantities ("lots of", "a couple of"); reader address ("if you're
looking", "keep in mind"); shorthand ("etc", "via").

They appear because a person was writing about something they did, saw or were told.
Copying the surface gets you the costume: "gonna", a planted "awesome!", an anecdote that
never happened. On this site an invented experience is also a false claim, and
`evidence-audit` treats it as one. Use only what is true. If Hassan ran the migration,
write "we". If a client said it, quote them and write "said".

The raw human lists also contain web boilerplate scraped with the articles: cookie
banners ("label consent leg interest"), recipe steps ("preheat oven to"), "my latest
videos". Ignore those.
