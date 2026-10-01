---
name: deslop
description: Remove AI writing patterns from prose. Use this skill when writing, drafting, editing, reviewing, or revising any text to eliminate predictable AI tells, slop, and formulaic patterns. Trigger this skill whenever the user asks to "deslop", "de-AI", "make it sound human," "remove AI patterns," "remove AI tropes," "clean up AI writing," fix "slop," "deslop" text, or review prose for authenticity. Also use when the user asks you to write or draft anything and wants it to sound natural rather than AI-generated. Common use cases include scientific writing (manuscripts, abstracts, cover letters, grant narratives, discussion sections, peer review responses), blog posts, newsletters, memos, reports, and any other substantial prose.
metadata:
  internal: true
---

# Deslop: Remove AI Writing Patterns from Prose

Strip predictable AI patterns from writing. Make prose sound like a specific human wrote it, not like a language model generated it.

## When to Apply

- Any request to "make it sound human" or "deslop" writing
- Any prose (articles, blog posts, essays, memos, newsletters, reports) or scientific writing (manuscripts, abstracts, cover letters, grant narratives, discussion sections, peer review responses) where the user wants it to sound natural rather than AI-generated
- Editing or revising existing text where the user wants it to sound natural rather than AI-generated
- Reviewing text for AI tells

## Core Rules

### 1. Cut filler phrases

Remove throat-clearing openers ("Here's the thing:"), emphasis crutches ("Let that sink in."), business jargon ("navigate the landscape"), and meta-commentary ("In this section, we'll explore..."). See [references/phrases.md](references/phrases.md) for the full catalog.

### 2. Break formulaic structures

Avoid binary contrasts ("Not X. Y."), negative listings ("Not a X. Not a Y. A Z."), dramatic fragmentation ("Speed. That's it. That's the tradeoff."), self-posed rhetorical questions ("The result? Devastating."), and anaphora/tricolon abuse. See [references/structures.md](references/structures.md) for patterns and fixes.

### 3. Eliminate AI tropes

Watch for the full catalog of AI writing tells: "quietly" and other magic adverbs, "delve" and its cousins, the "serves as" dodge, false ranges ("from X to Y" where the range is meaningless), superficial participle analyses ("highlighting its importance"), invented concept labels ("the supervision paradox"), grandiose stakes inflation, patronizing analogies, and false vulnerability. See [references/tropes.md](references/tropes.md) for the complete list with examples.

Each model family has its own measured habits, and 65% of them belong to one family only. Claude announces importance ("this matters", 116x the human rate), sums up ("taken together these", never seen in the human articles) and rates instead of describing ("dependable", 23x). GPT corrects ("rather than", "not simply"). Gemini intensifies ("incredibly", "furthermore"). Check a draft against the family that wrote it: [references/measured-tells.md](references/measured-tells.md).

### 4. Use active voice with human subjects

Prefer active constructions with named actors. "The complaint becomes a fix" is wrong. "The team fixed it" is right. If no specific person fits, use "we" in scientific prose or "you" in blog posts.

### 5. Be specific

No vague declaratives ("The reasons are structural"). Name the specific thing. No lazy extremes ("every," "always," "never") doing vague work. No vague attributions ("Experts argue..."). If you cannot name the expert, you do not have a source.

In scientific writing, domain terminology is fine and expected. "Weighted interval score" is precise language, not jargon. The problem is business buzzwords ("leverage," "landscape," "ecosystem") and AI vocabulary tells ("delve," "tapestry," "nuanced") leaking into technical prose.

### 6. Match register to context

In blog posts and newsletters, put the reader in the room. "You" beats "People." Specifics beat abstractions. No narrator-from-a-distance voice. Use contractions where a person would say them ("it's", "don't", "you'll"). They are the top human theme in Graphite's 2026 study, and current models have nearly stopped producing them; "does not" every time is a register choice, and a measured machine one.

In scientific writing, maintain appropriate formality. Use "we" for your own work, cite specific authors instead of "researchers have shown," and avoid both the distant narrator ("It has long been recognized that...") and the overly casual blog voice. State claims and back them with citations.

### 7. Vary rhythm

Mix sentence lengths widely. People average about 26 words a sentence with a spread (standard deviation) of 17; every model measured sits between 16 and 19 words with a spread of 6 to 8. "Shorter" is the wrong fix: let a sentence run long when the thought does, then stop short. Use as many items as the content has. Three-item lists are a tell, and so are tidy pairs ("the first is... the second is", "taken together"). End paragraphs differently. No em dashes: on this site that is the owner's house style, enforced by `scripts/unicode_guard.py`, not a detection rule (current models barely use them). Do not stack short punchy fragments for manufactured emphasis. Do not write listicles disguised as prose ("The first wall... The second wall...").

### 8. Trust readers

State facts directly. Skip softening, justification, hand-holding. No "Let's break this down." No "Think of it as..." No pedagogical voice unless the audience needs it. No fractal summaries (telling the reader what you are about to say, saying it, then summarizing what you said).

### 9. Watch formatting tells

No bold-first bullets (every list item starting with a bolded keyword). No unicode arrows. No em dashes. No signposted conclusions ("In conclusion..."). No "Despite these challenges..." formulas. These are strong AI signals.

### 10. Do not dilute

One point per section. Do not restate the same argument in ten different ways across thousands of words. Do not beat a single metaphor to death. Do not stack historical analogies for false authority ("Apple didn't build Uber. Facebook didn't build Spotify...").

### 11. Watch the layer under the style

Surface fixes do not remove the AI signal. Classifying fiction on narrative structure
alone, with no stylistic cues, reaches 93.2% macro-F1, and **93.9% after the stories are
edited for style** (StoryScope, COLM 2026). The measured behaviours that carry into
non-fiction: AI explains its own point (narrator states the theme 77% vs 52%), gestures
instead of naming (specific references 24% vs 47%), and writes as though nobody is
reading (direct address 7% vs 28%).

So after a style pass, check the structure: is there a paragraph telling the reader what
the evidence meant, a vague referent where a name belongs, and does the piece ever address
the reader at all. See [references/structural-signals.md](references/structural-signals.md)
for the full findings, including which are fiction-only and must not be generalised.

### 12. Measure, then read

For anything longer than a few paragraphs, run the scanner before reading:

    python .claude/skills/deslop/scripts/scan.py draft.md
    python .claude/skills/deslop/scripts/scan.py http://localhost:3001/blog/<slug>

It reports sentence length and spread, vocabulary variety and contractions against
Graphite's human and model averages, then every measured phrase it finds with its rate.
On three pre-ChatGPT Paul Graham essays it found 3 to 5 phrases per 1,000 words, and
none on a plain first-person sample. Use a hit as a pointer to a sentence worth rereading. Then
rewrite for the reader, keep the claim identical, and never edit to make a number move.
Word lists go stale with each model release (55% to 72% of tells change between
versions), so the structural fixes in rules 5, 7 and 8 outlast any single swap.

## Quick Checks

Run these before delivering any prose:

- Heavy use of adverbs or -ly words? Cut them.
- Any passive voice? Find the actor, make them the subject.
- Inanimate thing doing a human verb? Name the person.
- Any "here's what/this/that" throat-clearing? Cut to the point.
- Any "not X, it's Y" contrasts? State Y directly.
- Any self-posed rhetorical question answered immediately? Fold into a statement.
- Three consecutive sentences match length? Break one.
- Paragraph ends with a punchy one-liner? Vary it.
- Em dash anywhere? Remove it. Use a comma or period or a parenthetical.
  (For rhythm, not as evidence: dash use is model-dependent. See grammatical-signals.md.)
- Vague declarative ("The implications are significant")? Name the specific implication.
- Any sentence starting with What/When/Where/Which/Who/Why/How as a crutch? Restructure.
- Meta-joiners ("The rest of this essay...")? Delete.
- "It's worth noting" or similar filler transitions? Delete.
- Same metaphor used more than twice? Replace or cut repeats.
- "Despite these challenges..." formula? Rewrite.
- Bold-first bullet pattern? Remove bold leads.
- Tricolon (three-item list)? Use two items or one.
- More than one "-ing" clause per paragraph? Split them into sentences. Check each one
  is not smuggling in an unproven cause.
- "-tion/-ment/-ance" noun where a verb works? Use the verb.
- Paired near-synonyms ("clear and transparent")? Delete one.
- Same thing called by three different names? Repeat the correct noun instead.
- A paragraph explaining what the evidence just meant? Cut it, or cut the evidence.
- Vague referent where a name, version or date belongs? Name it.
- Does the piece address the reader as "you" anywhere? If not, ask why not.
- Every question it raises also answered inside it? Real subjects have loose ends.
- "This matters because", "why X matters", "just as importantly"? Delete the announcement and show the consequence.
- "Taken together", "the takeaway is", "the result is a ... that"? Do not sum up what the reader just read.
- Rating words (dependable, steady, thoughtful, modest, genuine, meaningful, practical, smoother)? Replace with the fact that earns them, or cut.
- "Rather than" more than once in a section? State the point without the foil.
- "This guide walks you through", "this article explains"? Open with the first fact.
- "Can help you", "makes it easier", "helps you avoid"? Say what happens.
- "Without sacrificing/losing/compromising/requiring"? Name the cost, or check there is none.
- No contractions anywhere in a blog post? Check the register.
- Sentence lengths all within a few words of each other? Let one run long.
- Swapped one intensifier for another ("genuinely" to "truly")? Delete it instead.

## Scoring

When reviewing text, rate 1-10 on each dimension:

| Dimension    | Question                               |
| ------------ | -------------------------------------- |
| Directness   | Statements or announcements?           |
| Rhythm       | Varied or metronomic?                  |
| Trust        | Respects reader intelligence?          |
| Authenticity | Sounds like a specific human wrote it? |
| Density      | Anything cuttable?                     |

Below 35/50: revise.

## Reference Files

Consult these for detailed catalogs when writing or editing:

- [references/phrases.md](references/phrases.md): Phrases to remove or replace (throat-clearing, emphasis crutches, business jargon, adverbs, meta-commentary, vague declaratives)
- [references/structures.md](references/structures.md): Structural patterns to avoid (binary contrasts, negative listings, dramatic fragmentation, rhetorical setups, false agency, passive voice, rhythm problems)
- [references/tropes.md](references/tropes.md): Full catalog of AI writing tropes (word choice, sentence structure, paragraph structure, tone, formatting, composition)
- [references/examples.md](references/examples.md): Before/after transformations showing how to fix common patterns
- [references/structural-signals.md](references/structural-signals.md): The layer under the style. Measured differences that survive a style edit (StoryScope, COLM 2026), marked as transfers / fiction-only / inferred
- [references/grammatical-signals.md](references/grammatical-signals.md): The non-fiction counterpart. Measured grammatical distributions (PNAS 2025, ACL 2025) — participial clauses, nominalizations, phrasal coordination, elegant variation — plus what is NOT a tell, and why detector scores are never cited
- [references/measured-tells.md](references/measured-tells.md): Graphite's 2026 counts (100,000 articles, ten models): style numbers, and the phrases Claude Opus 5.5 and 5, GPT-6 Astra and Gemini 3.1 Pro overuse, with what to write instead. The scanner's lists are in `measured-tells.json`
- `scripts/scan.py`: measures a file or URL against those lists and baselines. `scripts/build_measured_tells.py` rebuilds the lists when Graphite adds a model

## Examples

See [references/examples.md](references/examples.md) for before/after transformations.

**Quick inline example (scientific writing):**

Before:

> "It's worth noting that these findings have important implications for how we navigate the challenges of forecast ensembling moving forward. Despite these challenges, this work contributes meaningfully to the growing body of literature, highlighting the need for continued evaluation."

After:

> "If individual model rankings are unstable across geography and time, ensemble methods that weight models by past performance may not improve on equal-weight approaches."

Changes: Replaced filler transition, vague declarative, "despite these challenges" formula, and superficial participle analysis with the specific implication.

**Quick inline example (blog post):**

Before:

> "Here's the thing: most bioinformatics pipelines break in production. Not because the code is bad. Because the data is bad. Let that sink in."

After:

> "Most bioinformatics pipelines break in production. The code runs fine. The data doesn't match the assumptions baked into it."

Changes: Removed opener, binary contrast, and emphasis crutch. Named the specific problem.
