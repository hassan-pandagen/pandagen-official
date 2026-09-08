# Structural Signals: What Survives a Style Edit

Everything else in this skill targets surface: word choice, sentence rhythm, formatting
tells. This file covers the layer underneath, and it exists because of one measured
finding: **fixing the surface does not remove the signal.**

## The study

Russell, Rajendhran, Pham, Iyyer and Wieting, *StoryScope: Investigating idiosyncrasies
in AI fiction*, COLM 2026 (arXiv 2604.03136). 10,272 human-written stories, each mirrored
by five LLMs (Claude, DeepSeek, Gemini, GPT, Kimi), giving 61,608 stories of roughly
5,000 words and 304 extracted features each.

Classifying human vs AI on **narrative structure alone**, with no stylistic cues, reaches
**93.2% macro-F1** — over 97% of what models achieve with style included.

**After editing the stories for style, detection holds at 93.9%.** Deslopping the prose
does not move the number. That is the reason this file exists.

## Read this before applying any of it

**The study is about fiction.** Plot escalation, subplots, protagonist agency, temporal
structure and sensory rendering are properties of stories. Most of them do not exist in a
technical article, an essay or a memo.

So the findings split three ways, and the file marks which is which:

- **MEASURED, TRANSFERS** — the behaviour is about how a writer relates to a reader or to
  the world, not about plot. It applies to any prose.
- **MEASURED, FICTION ONLY** — real result, no counterpart in non-fiction. Listed so
  nobody mistakenly generalises it.
- **INFERRED** — a plausible non-fiction analogue of a fiction finding. Treat as a
  hypothesis, not a rule.

## MEASURED, TRANSFERS

### 1. AI over-explains its own point

| | AI | Human |
|---|---|---|
| Narrator explicitly states the theme | **77%** | 52% |

The paper calls this over-determination: "AI spells out meaning rather than trusting the
reader to infer it."

In non-fiction this is the paragraph after the evidence that tells the reader what the
evidence meant. If the data is on the page, the interpretation sentence is usually the
sentence to cut. This is rule 8 (Trust readers) and rule 10 (Do not dilute), measured.

### 2. Humans name real things; AI gestures at them

| | Human | AI |
|---|---|---|
| References specific texts and authors | **47%** | 24% |
| Balanced mix of explicit and implicit references | **37%** | 16% |
| Vague allusions | 50% | **72%** |

The paper notes AI "avoids naming real brands, places, or works."

This is the single most portable finding in the study, and it is rule 5 (Be specific) with
a number attached. Every "industry experts", "a leading platform", "several studies" is
the AI-shaped choice. Name the vendor, the version, the author, the date.

### 3. Humans write to someone; AI writes as if nobody is there

| | Human | AI |
|---|---|---|
| Breaks the fourth wall | **67%** | 39% |
| Addresses the reader directly | **28%** | 7% |

"Human writing acknowledges its audience as a co-participant; AI writes as though no one
is watching."

Rule 6 (Match register) already says "you" beats "People". The gap here is 4x, which
makes it one of the strongest single signals in the set.

### 4. Human writing is rarer

Mean rarity percentile in feature space: **human 0.71, AI 0.49.** AI outputs from five
different labs cluster in a shared region; human writing scatters.

The practical form: if a structural choice is the one most writers would make here, that
is the AI-shaped choice. This does not license being weird for its own sake. It means the
obvious framing deserves one moment of suspicion before you take it.

## MEASURED, FICTION ONLY

Do not generalise these. They are here so they are not mistaken for general rules.

| Feature | AI | Human |
|---|---|---|
| No subplots | 79% | 57% |
| Protagonist-driven resolution | 69% | 46% |
| Resolution via internal understanding | 47% | 27% |
| Emotion shown through physical sensation | 81% | 38% |
| Explicit emotion labels | 8% | 29% |
| Smell-based imagery | 82% | 57% |
| Dialogue serving philosophical debate | 59% | 34% |

Per-model fingerprints, from six-way attribution at 68.4% macro-F1: Claude produces flat
event escalation, GPT favours gossip as a plot mechanism, Gemini defaults to external
character description.

## INFERRED

Plausible non-fiction analogues. Not measured. Use as prompts for suspicion, not as rules.

**Loose ends.** AI fiction resolves everything and leaves few threads open. The non-fiction
analogue would be an argument with no unresolved part, no acknowledged limit, no question
left standing. A piece that answers every question it raises may be the tidier artefact and
the less human one.

**Single track.** AI stories run one causal chain. An article that never digresses, never
qualifies, never says "this next bit contradicts what I just told you" may be exhibiting
the same shape.

If a claim genuinely has a boundary, state it once and leave it there. This is not a
licence to hedge, which rule 5 and the citability-audit skill both forbid.

## Checks

Add to the Quick Checks in SKILL.md:

- Does a paragraph explain what the preceding evidence meant? Cut it, or cut the evidence.
- Any vague referent where a name, version or date belongs? Name it.
- Does the piece ever address the reader as "you"? If not, ask why not.
- Is every question the piece raises also answered inside it? Real subjects have loose ends.
- Is this the framing most writers would reach for first? Spend one moment on the alternative.

## What this file does not claim

That structural editing defeats detection, or that it should be attempted. The finding is
descriptive: these differences exist and survive a style pass. The reason to care is that
writing which over-explains, gestures instead of naming, and ignores its reader is worse
writing, independent of who or what produced it.
