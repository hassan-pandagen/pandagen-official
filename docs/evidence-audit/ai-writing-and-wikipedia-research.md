# AI Writing and Wikipedia

AI-generated writing has recognizable tendencies, but no word, punctuation mark, paragraph pattern, or generic detector score proves that an arbitrary passage was written by AI. The strongest investigations combine evidence about how the text was produced with direct checks of its claims and references. Writing quality, factual accuracy, authorship, and compliance with a publication's rules are separate questions.

This report covers English Wikipedia's AI-writing guidance and related pages, linguistic patterns, technical leftovers, citation failures, human and automated detection, mixed authorship, multilingual limitations, watermarking, publishing implications, and practical review methods. It reflects sources checked on **11 September 2026**. It is a broad evidence review, not an audit of every Wikipedia article or an enumeration of every possible behavior of every model. Wikipedia rules discussed here apply to **English Wikipedia**.

**Evidence key:** Wikipedia project pages document community experience; journal and conference studies test particular populations and systems; preprints offer provisional findings. The procedures and invented examples below are analytical recommendations, not a validated authorship-scoring instrument.

## Contents

1. [What AI writing includes](#1-what-ai-writing-includes)
2. [The Wikipedia source map](#2-the-wikipedia-source-map)
3. [The pattern inventory](#3-the-pattern-inventory)
4. [What each kind of evidence establishes](#4-what-each-kind-of-evidence-establishes)
5. [Detailed examination of writing patterns](#5-detailed-examination-of-writing-patterns)
6. [References and factual failures](#6-references-and-factual-failures)
7. [What empirical studies found](#7-what-empirical-studies-found)
8. [How detection works and fails](#8-how-detection-works-and-fails)
9. [Current Wikipedia rules](#9-current-wikipedia-rules)
10. [AI writing beyond Wikipedia](#10-ai-writing-beyond-wikipedia)
11. [A practical investigation workflow](#11-a-practical-investigation-workflow)
12. [Worked examples](#12-worked-examples)
13. [Improving writing](#13-improving-writing)
14. [Unresolved questions and limitations](#14-unresolved-questions-and-limitations)
15. [Sources](#15-sources)

## 1 What AI writing includes

The following operational distinctions prevent an oversimplified human-versus-machine verdict.

| Category | Meaning in this report | What a review needs to establish |
|---|---|---|
| Generated prose | A model composes substantial wording from a request or supplied material. | Which passages were generated and how they were checked. |
| Assisted planning | A person uses AI for questions, outlines, or approaches. | Whether final claims and wording came from independent work or generated drafts. |
| AI polishing | Human prose receives grammar, phrasing, or style changes. | Local correction versus substantive rewriting. |
| Mixed authorship | Human and generated passages are combined or repeatedly revised. | The contribution history, preferably at passage level. |
| Translation | A system converts content between languages. | Fidelity, attribution, and the destination's rules. |
| Summarization | A system compresses source material. | Preservation of qualifications, contradictions, and attribution. |
| Template automation | Software fills a prescribed structure from data. | Data quality and transformation rules; automation is not necessarily LLM generation. |

These are practical categories, not universal legal definitions. Actual writing sessions often involve repeated changes to intent, style, and content. Research on real Copilot and WildChat interactions documents this collaborative complexity. [Mysore and colleagues][S25]

The distinction matters to detection. Saha and Feizi evaluated twelve detectors using 15,000 samples with different degrees of AI polishing. Detectors frequently classified lightly polished human text as generated and struggled to distinguish levels of involvement. An apparent AI signal therefore does not reveal who supplied the ideas or how much rewriting occurred. [APT-Eval study][S24]

**AI use, plagiarism, and factual error are separate dimensions.** Generated prose need not copy an identifiable passage; humans can plagiarize; either can contain falsehoods. A similarity match establishes textual overlap that needs interpretation. It does not establish a generation process. An AI classification does not establish plagiarism. This analytical distinction underlies the review.

### How generated prose is produced

Many LLMs produce text as a sequence of tokens, choosing each continuation from a distribution conditioned on the preceding context. Output is therefore influenced by the prompt and generation procedure; its fluent appearance does not itself verify the claims it contains. The text-watermarking literature describes this generation mechanism explicitly. [Nature study][S44]

In research on generated references, a **hallucination** includes a plausible-looking but nonexistent publication. More generally, reviewers should distinguish unsupported generated content from a verified statement. Calling a mistake a hallucination does not establish that a human contributor intended to deceive. [Citation fabrication study][S31]

Retrieving web pages and attaching citations adds evidence that can be checked, but does not guarantee that a generated answer correctly represents that evidence. Citation existence, relevance, and support still require examination. [Generative search study][S33]

## 2 The Wikipedia source map

Wikipedia has several kinds of pages about AI. Their authority should be identified before relying on them.

| Page | Status when checked | Purpose |
|---|---|---|
| [Writing articles with large language models][S2] | Content guideline | Article generation restrictions and limited exceptions. |
| [Large language models][S3] | Information page | Risks and contextual guidance. |
| [WikiProject AI Cleanup][S4] | Volunteer project | Examination and cleanup. |
| [AI Cleanup guide][S5] | Project guidance | Investigation methods and resources. |
| [Speedy deletion G15][S6] | Part of a policy | Narrow threshold for unambiguous cases. |
| [Presumptive removal][S7] | Deletion guideline | Removal under specified editor and contribution conditions. |
| [AI-generated maintenance template][S8] | Template documentation | Marking content for review. |
| [Reliable sources][S9] | Content guideline | Source reliability, including machine-produced material. |
| [Verifiability][S10] | Policy | Appropriate support for article content. |
| [No original research][S11] | Policy | Unpublished analysis and unsupported synthesis. |

Related pages include [AI-generated comments][S13], [LLM unblock requests][S14], [LLM-written incident reports][S15], [fictitious references][S16], [metacoverage][S17], [marketing buzzspeak][S18], and [elegant variation][S19]. These address particular problems; their existence does not independently validate authorship judgments.

## 3 The pattern inventory

[Signs of AI writing][S1] is English Wikipedia WikiProject advice, not policy. The inspected revision was edited September 9, 2026, and contains an update-needed notice. Its observations are not a validated diagnostic scoring system.

**Coverage index:** inflated significance; media name-dropping; superficial analysis; promotion; vague attribution; formulaic challenges/futures; titles treated as proper nouns; awards sections. **Language:** vocabulary clusters; copula avoidance; vague associations; negative parallelisms; tricolons. **Presentation:** redundant titles; title case; empty parent headings; boldface; inline-header lists; dashes; emoji; unnecessary tables; smart quotes; skipped levels; H1s; horizontal rules. **Leftovers:** chatbot correspondence; cutoff/source-gap disclaimers; placeholders. **Markup:** Markdown; broken wikitext; ChatGPT/Gemini/Grok/DeepSeek/Perplexity/unclassified residue; invented categories/templates. **Citations:** broken URLs; invalid identifiers; unrelated DOIs; unverifiable book references; reference misuse; tracking parameters; unused named references. **Discussion:** comment-specific patterns. **Summaries:** policy assurances; preservation/avoidance statements; citation emphasis; template minutiae; AfC references. **Behavior:** style shifts; submission statements; preplaced maintenance banners; canned profiles; permissions gaming; model differences; political bias. **Counterevidence:** chronology; explainable editorial choices; syntax. **Ineffective indicators:** grammar, register, blandness, formality, transitions, missing citations, strange markup. **Historical:** didactic disclaimers; conclusions; refusals; cutoffs; stale access dates; synonym variation. **Caveats:** human judgments and detector scores can both fail. [Permanent guide revision][S1]

## 4 What each kind of evidence establishes

This hierarchy is an analytical framework, with no numerical confidence thresholds.

| Evidence | Reasonable conclusion | Remaining uncertainty |
|---|---|---|
| A word, dash, or polished paragraph | The style resembles some generated or edited writing. | Humans also produce it. |
| Several unusual patterns in comparable passages | Closer investigation may be useful. | The patterns may share a human cause or template. |
| A nonexistent source or contradicted claim | A demonstrable sourcing or accuracy problem exists. | Humans also fabricate or miscite sources. |
| Chatbot instructions or internal residue | A generation interface may have entered the production chain. | Quotation, demonstration, or copying another person's output remains possible. |
| Authenticated drafts, logs, or relevant disclosure | Specific production steps can be established. | Records may cover only part of the final text. |
| Validated watermark result | Evidence connects text to a compatible watermarking process. | Coverage, transformations, and error properties still matter. |

Keep two judgments separate: **What needs fixing?** and **What can be established about provenance?** A reviewer can confidently identify an unsupported assertion while leaving authorship unresolved. The investigation need not depend on an unnecessary accusation.

## 5 Detailed examination of writing patterns

### Vocabulary and word choice

Words such as *delve*, *intricate*, and *underscore* attracted attention because their frequencies increased in scientific writing. Juzek and Ward identified 21 focal words through a systematic comparison. Their analysis supports lexical overrepresentation but does not settle a single causal explanation. Model comparisons are consistent with a role for preference training; the experimental evidence is more complicated. Claims that one known group of trainers definitively caused every favored word exceed this evidence. [COLING study][S20]

**Practical interpretation:** record concentration and context rather than banning a word. Does a passage repeatedly choose abstract praise where a specific noun or verb would explain the event? Does the same phrase recur across unrelated sections? An accurate technical term is not suspicious merely because models use it. Compare similar genres, not scientific abstracts with casual conversation.

Population evidence differs from individual accusation. Kobak and colleagues analyzed more than 15 million biomedical abstracts and estimated a lower bound of 13.5% LLM-processed abstracts in 2024. Their method explicitly does **not** identify which individual abstracts were processed. Processing includes assistance, not necessarily complete machine authorship. [Science Advances study][S21]

### Grammar and recurring constructions

Some terms in the inventory need translation into ordinary language. **Copula avoidance** means replacing a simple linking expression such as "is" with a phrase such as "serves as." **Negative parallelism** sets up a contrast such as "not X, but Y." A **tricolon** arranges three parallel units. **Register** means the kind of language suited to a setting, such as formal academic prose or casual conversation. These definitions describe ordinary language structures; none supplies an authorship test.

Editorial observations worth recording include repeated sentence openings, recurring contrast structures, and clauses that append an interpretation to a fact. They become useful review questions when they replace specific explanation or make unrelated sentences interchangeable.

Reinhart and colleagues compared GPT-4o, GPT-4o Mini, and four Llama 3 variants across two corpora and 66 linguistic features. Retained samples contained 8,290 and 9,615 human texts; models continued passages and were compared with authentic continuations. GPT-4o used present-participial clauses at 5.3 times the human rate, nominalizations at 2.1 times, and phrasal coordination at 1.9 times. Different model families sometimes had opposite preferences. These are distributional findings, not proof from an individual construction. [PNAS study and manuscript][S22]

A separate ACL study compared six models with human New York Times writing using a formal grammar framework. It found systematic distributional differences **within that genre**. A pattern established for professional news prose is not automatically a rule for encyclopedias, translated articles, or student essays. [News syntax study][S23]

For clarity, a **nominalization** expresses an action or quality as a noun, such as “implementation” in place of a verb-based expression. A **participial clause** can append an action or interpretation, as in “The branch opened, increasing local access.” These constructions are normal English; the latter example needs evidence for its claimed effect.

### Inflated significance and promotional language

An article may announce that a routine event changed an entire field without evidence of that impact. Ask: **Which source establishes the influence, and what observable consequence does it describe?** A conference appearance, award, or newspaper mention does not automatically establish a much broader conclusion.

Wikipedia's established wording guidance addresses unsupported praise, vague attribution, and language steering readers toward an evaluation. These are longstanding editorial issues. Replacing a superlative with a milder adjective does not supply evidence. [Words to watch][S12]

Marketing prose can conceal missing information. A sentence about superior solutions may reveal nothing about products, customers, dates, or independently documented results. Specific sourced facts are more useful than generic praise. An accurately identified award can be relevant; an unexplained claim of being award-winning conveys much less. [Marketing buzzspeak][S18]

### Media name-dropping and manufactured authority

Some prose emphasizes prestigious publications that covered a subject while barely describing the coverage. Read the source and state the relevant fact, criticism, or opinion with accurate attribution. Naming a publication remains appropriate when its identity matters. The problem is substituting evidence of publicity for substantive information. [Metacoverage][S17]

Another pattern invokes unnamed experts, observers, or studies. Ask for identifiable support. A real opinion should not become an unattributed fact merely to make the prose smoother. [Words to watch][S12]

### Superficial analysis and unsupported synthesis

The failure can occur between accurate facts. One source establishes an opening date; another describes economic growth. A sentence claiming that the opening **caused** the growth needs support for that relationship. Accurate ingredients do not automatically justify the conclusion assembled from them.

Wikipedia's no-original-research policy addresses unsupported synthesis. Identify the additional step: causation, importance, motive, trend, comparison, or prediction. Then determine whether a source makes that step. This is more precise than calling the prose vague or robotic. [No original research][S11]

### Paragraph structure and informational substance

An editorial review can ask whether sections repeatedly announce a subject, list generic advantages and challenges, and restate its importance. Does each paragraph contribute a supported fact or necessary explanation? Regular organization can be useful; predictable organization alone does not imply generation.

Research on introductions, bodies, and conclusions found differences in how human and model writing varied across segments. The body could be particularly informative for features involving continuity of language. This complicates the idea that checking only an introduction or conclusion is sufficient. [Beyond Checkmate][S26]

For Wikipedia, judge structure against encyclopedia conventions. A lead, section hierarchy, and references are ordinary requirements, not tells. Empty or redundant divisions can be layout defects regardless of origin. [Manual of Style on layout][S27]

### Formatting and punctuation

Markdown headings, bullets, bold labels, and tables are ordinary features of Markdown. Their meaning changes when they appear as unintended literal syntax in Wikipedia article source. A feature natural in one medium may be an import mistake in another.

Wikitext enclosed in Markdown code fences has its own Wikipedia case guide. Opening or closing fences and a language label can survive a pasted chatbot answer. Inspect the edit and its context: a help discussion demonstrating syntax differs from accidental residue in an article. [Wikitext code-fence guide][S28]

**Em dashes are not a universal AI signature.** A 2026 preprint tested twelve models from five providers and found substantial variation in dash production and persistence under formatting instructions. Its proposed explanation involving Markdown training is a hypothesis, not settled causal knowledge. The model-dependent findings undermine treating the character as a universal detector. [The Last Fingerprint][S29]

Smart quotes and tidy formatting can also arise from keyboards, word processors, editors, or house style. These are plausible alternatives, not quantitative claims about their frequency.

### Repetition and unnecessary synonym changes

Three differently worded paragraphs may repeat one idea. Conversely, forcing every mention of one person or institution to use a different label can obscure identity and imply false distinctions.

Wikipedia's elegant-variation essay describes this established prose problem. Repeat the correct name when needed, remove redundant information, and retain technical distinctions. Mechanical synonym substitution can make writing less accurate. [Elegant variation essay][S19]

### Chatbot leftovers and internal residue

A response addressed to a requester, a model-limitation statement, an unfilled drafting placeholder, or unexplained internal citation syntax may reveal production material. These are stronger provenance leads than an adjective, but still need context.

G15 identifies chatbot communication, implausible references, and technical artifacts as relevant categories. Templates can legitimately contain instructions, and citation anomalies can have innocent explanations. A single irregularity is not an automatic verdict. [G15 policy][S6]

Examples of technical strings worth contextual investigation include `oaicite`, `contentReference`, and internal search identifiers such as `turn0search0`. These examples are not unique model-version fingerprints. [G15 policy][S6]

Preserve exact residue before cleaning it. Establish whether it occurs in an original contribution, quotation, tutorial, or later edit. Do not infer an exact model version from a format that can change or be copied.

### Discussion comments and editor behavior

The comments guide describes generic policy assurances, mistaken policy references, canned appeals, unusual subject lines, and excessive formal structure. Its examples include users **suspected** of AI use. This is not a known-ground-truth dataset and supplies no validated false-positive rate. [Comments guide][S13]

Check whether an apology or complaint describes the actual issue. An unblock request with an unfilled reason or an unrelated restriction needs clarification. Unfamiliarity, language difficulties, or writing assistance can produce similar features. [Unblock-request guidance][S14]

A long incident report with many policy labels creates a verification burden when accusations connect poorly to evidence. Review the linked events separately; numbered allegations and professional language do not prove generation. [Incident-report essay][S15]

Avoid a self-sealing accusation in which denial, apology, or a request for evidence becomes proof. Specific passages and diffs permit a fairer discussion. A tag on a collaborative article does not establish that every contributor is responsible. [Guidance for disputed accusations][S30]

## 6 References and factual failures

Bibliographic appearance, source existence, and claim support are distinct.

| Check | Failure to investigate | Alternative explanation |
|---|---|---|
| Existence | Alleged publication cannot be located. | Another title, spelling, edition, language, or incomplete catalog. |
| Identity | DOI, ISBN, author, title, and year disagree. | Transcription error or another edition. |
| Relevance | Real source addresses another subject. | Citation attached to the wrong sentence. |
| Support | Source does not establish the assertion. | Overstatement or missing additional evidence. |
| Quotation | Wording or page cannot be matched. | Edition mismatch, translation, or inaccurate quotation. |
| Access | Link fails or full text is unavailable. | Link rot, access controls, regional blocking, or archives. |

This is an audit framework, not a list of automatic proof. The essay on fictitious references distinguishes nonexistent sources from real but irrelevant or misrepresented ones. Unavailable or obscure material cannot simply be declared invented. [Fictitious references][S16]

Walters and Wilder examined 636 references in 84 generated papers across 42 topics. In that 2023 experiment, 55% of GPT-3.5 references and 18% of GPT-4 references were fabricated. Among real references, substantive errors affected 43% and 24%, respectively. These are historical experimental rates, not present-day universal rates. [Citation fabrication study][S31]

A functioning link is insufficient. A small 2025 GPT-4o study found that 21 of 33 fabricated references supplied with DOIs pointed to unrelated papers. Its abstract and discussion disagree on another error count, so its combined error headline warrants caution. Compare the resolved record with the citation instead of merely checking whether the link opens. [JMIR study][S32]

An evaluation of four generative search products in 2023 reported that 51.5% of generated sentences were fully supported, while 74.5% of attached citations supported their associated sentence. These measure different things: coverage and citation correctness. Neither is a current product ranking. [Generative search verifiability study][S33]

A source can be genuine but weak, irrelevant, or inaccurately represented. Wikipedia's reliable-sources guidance treats reliability as contextual and warns against machine-produced sources and convincing fabricated citations. [Reliable sources][S9]

**Practical expansion:** audit numbers, dates, units, names, quotations, and relationships as well as the bibliography. Confirm that a quoted source concerns the same entity, period, population, and measure. A finding of correlation should not silently become causation; a tentative result should not become consensus. These are recommended reading checks, not claims that every model makes every error.

## 7 What empirical studies found

The selection represents both useful detection and its limits. Metrics are not interchangeable.

| Study | Setting | Finding | Interpretation limit |
|---|---|---|---|
| [Liang et al., 2023][S34] | Seven detectors; 91 human TOEFL essays and 88 US eighth-grade essays. | Mean false-positive rate was 61.22% on TOEFL essays. | Early tools and specific populations; not all current nonnative writing. |
| [Weber-Wulff et al., 2023][S35] | Fourteen tools; 54 controlled documents; 756 tests. | Every tool's overall accuracy was below 80%; transformations worsened performance. | Historical versions and a small controlled collection. |
| [RAID, 2024][S36] | Over six million generations; eleven models, eight domains, eleven attacks, four decoding strategies. | Results varied with models, domains, settings, and modifications. | Benchmark conditions; Wikipedia was one domain. |
| [Binoculars, 2024][S37] | Several text domains. | Over 90% detection at a 0.01% false-positive rate in studied settings. | Conditional success; a separate appendix GPT-4 test yielded 54/129 detections, not a result at that same stated false-positive rate. |
| [Tufts et al., 2025][S38] | Seven detectors; seven tasks and four languages. | At 1% false-positive rate, overall true-positive rates ranged from 3% to 58%. | Particular benchmark and model versions. |
| [Russell et al., 2025][S39] | Three hundred balanced human/AI nonfiction American-English articles. | Majority vote of five selected experts misclassified one article. | Experts were screened for high performance; not ordinary readers generally. |
| [Sadasivan et al., 2025][S40] | Stress tests and mathematical analysis. | Paraphrasing and spoofing challenged multiple approaches. | Conditional theoretical limits do not make every current output undetectable. |
| [Van Vlasselaer et al., 2026][S41] | 160 papers, including forty human papers from nonnative-English graduates. | Three tools had no false positives on those forty human papers; hybrid results varied. | Small sample, May 2025 generated stimuli, inconsistent generator labels. |
| [El Attar et al., 2026 preprint][S42] | 284 linguistic features; 27 models; ten domains. | Lexical richness was relatively robust; many features depended on context. | Macro F1 fell from .827 in a mixed-domain setting to .588 in one held-out setting; older generators limit currency. |

A detector can work well on a known genre and fail on another model or hybrid text. A selected expert team can outperform ordinary readers without establishing that expert judgment is universally safe. A system can have excellent specificity while missing many generated passages.

The 2026 graduate-paper study also shows why historical bias findings should not become permanent claims. Zero errors in forty cases is evidence about those cases, not a guarantee of zero population risk. Its exploratory scan of 1,163 theses lacked verified authorship ground truth; its flags are not confirmed AI prevalence. [Higher-education study][S41]

## 8 How detection works and fails

### Classifiers and statistical measures

Systems may use learned text representations, linguistic features, or language-model scores. **Perplexity** concerns how surprising a sequence is under a particular model, not a direct measurement of authorship. Predictable text can be human, and generated text can be varied. Performance depends on the population and threshold used for evaluation. [Liang et al.][S34]; [Binoculars][S37]

“Burstiness” is often used loosely for variation in sentence length or predictability. Unless a tool defines the quantity, validates it on relevant data, and explains its threshold, the term supplies little actionable evidence. Ask for an operational definition.

A score should not automatically be read as the percentage of generated words, the chance of cheating, or the model's intellectual contribution. AI polishing creates a separate measurement problem. [APT-Eval][S24]

### Domain changes and model attribution

Evaluation should include unseen generators, relevant genres, translation, revisions, and mixed passages. RAID demonstrates sensitivity to generation conditions and transformations. Favorable results on one dataset cannot establish general performance under these shifts. [RAID][S36]

Model attribution is a different task. Sun and colleagues reported 97.1% held-out accuracy distinguishing outputs from five named models. That was **not** human-versus-AI detection. Formatting and vocabulary contributed; the result does not establish reliable attribution to later versions of those systems. [Idiosyncrasies study][S43]

### False-positive arithmetic

Consider an **invented example**, not a measured finding:

- Of 10,000 documents, 1% are AI-written: 100 AI texts and 9,900 human texts.
- A detector catches 90% of AI texts: 90 true positives.
- It falsely flags 1% of human texts: 99 false positives.
- It produces 189 flags; only 90 are correct: **47.6%**.

Thus 99% specificity does not mean a flagged text has a 99% probability of being AI-written. Starting prevalence matters. Accuracy, sensitivity, specificity, precision, AUROC, and macro F1 answer different questions.

Five correlated style observations are also not five independent confirmations. One template could cause matching headings, lists, punctuation, and paragraph lengths. Counting each as an independent vote exaggerates the evidence.

### Watermarks and provenance

Watermarking introduces a statistical signature during generation. SynthID-Text research demonstrated a deployable scheme and evaluated quality using approximately twenty million Gemini responses. That number concerns quality and user feedback, not twenty million independent authorship-classification trials. Detection depends on the scheme, sufficient usable text, and preservation through edits. No watermark does not mean human authorship. [Nature study][S44]

Content Credentials document provenance through a different mechanism. C2PA emphasizes that valid provenance does not establish factual truth, histories can be incomplete, and metadata can be removed. Such records are useful where available; they are not universal certificates accompanying every copied paragraph. [C2PA explainer][S45]

For ordinary article review, preserved edits and source material often provide more actionable evidence than an unexplained score. This is a recommendation, not an assertion that all histories are complete or authentic.

## 9 Current Wikipedia rules

### Article creation and rewriting

As checked in September 2026, English Wikipedia's content guideline prohibits LLM generation or rewriting of article content. It permits limited, reviewed correction of simple mistakes in an editor's own writing, with source support preserved, and translation under separate guidance. This is not blanket permission for substantive AI rewriting. Sanctions require evidence beyond basic stylistic or linguistic signs. [Article-writing guideline][S2]

The related information page explains fabricated material, unsupported synthesis, neutrality problems, and review burden. These can remain after obvious stylistic quirks are removed. [LLM information page][S3]

### Cleanup and maintenance tags

AI Cleanup prioritizes unsupported or likely inaccurate content and recognizes that generated material can contain fabricated, irrelevant, or useful sources. A legitimate source need not be discarded because it appeared in a problematic draft. [AI Cleanup][S4]

The maintenance template supports article, section, and partial-content forms. A tag requests review, not a validated judgment about every sentence or contributor. Its stronger certainty option calls for stronger evidence. Tag counts do not measure confirmed AI prevalence. [Template documentation][S8]

### Deletion and presumptive removal

G15 is narrowly defined for unambiguous cases. Subjective style alone is insufficient; citation problems require checks for mundane explanations. Borderline cases should follow the appropriate discussion process. An essay or old template description cannot override the current policy. [G15][S6]

Presumptive removal requires specified editor-status/history conditions or noticeboard consensus, subject to additional safeguards. LLMPROD concerns eligible pages where the implicated editor is the only significant contributor. Deletion requires an uncontested tag for at least five days and review by an uninvolved administrator. A notice alone is insufficient. [Presumptive-removal guideline][S7]

### Content standards regardless of authorship

Check whether sources support the actual claim and distinguish what they say from what an editor infers. Verifiability does not require resolving authorship first. Human-written unsupported assertions can require correction just as generated ones can. [Verifiability][S10]

## 10 AI writing beyond Wikipedia

### Academic writing and assessment

Identify the rule being evaluated: prohibited assistance, missing disclosure, copied text, fabricated evidence, or insufficient student work. These are different allegations. Drafts, research notes, and a person's explanation of the work can be relevant, but should be interpreted in context rather than as a ritual proof of innocence.

Medical publishing offers a concrete separate standard. ICMJE recommends disclosure of AI assistance, does not permit chatbots as authors, and assigns responsibility for accuracy, integrity, originality, and attribution to humans. These are recommendations for that publishing context; a school, employer, or other journal may have different applicable rules. [ICMJE][S46]

### Websites and search

Assess accurate specifications, attributable evidence, relevant experience, and information useful to the reader. A polished page that says little can be poor content regardless of production method. AI assistance alone does not determine usefulness.

Google's current guidance says generative tools can help research and structure content, while producing many pages without user value may violate scaled-content-abuse rules. Those rules focus on purpose and value rather than forbidden phrases. A low detector score does not establish originality, usefulness, or search-policy compliance. [Google guidance][S47]; [spam policies][S48]

### News and biographies

Prioritize quotations, allegations, dates, credentials, and achievements. Record the original document and relevant passage. Separate a subject's own statements from independent reporting. A list of media outlets is not substantive corroboration; the metacoverage distinction is useful beyond encyclopedia writing. [Metacoverage][S17]

For investigative purposes, ask whether the publication can explain its reporting and corrections. This is an editorial recommendation, not an assumption that fluent prose is unreliable.

### Creative writing and personal experience

Predictable plots, generic praise, repetitive imagery, or impersonal voice may be writing criticism, but do not establish provenance. Fiction permits invention; factual reporting cannot present invented evidence as real. A review claiming personal product use raises a different question from a description of published specifications.

State the intended function first: personal experience, source synthesis, entertainment, or persuasion. Evaluate success and authenticity against that function. These are analytical distinctions, not detector rules.

### Translation and multilingual writing

English findings cannot simply be transferred to Urdu, Arabic, Spanish, or code-switched text. MULTITuDE contains 74,081 human and generated texts in eleven languages and outputs from eight multilingual models to study cross-language and cross-generator detection. Its language set did not include Urdu. [MULTITuDE][S49]

For translation, compare meaning, names, quantities, negation, and uncertainty with the original. A polished translation can preserve human research while altering surface style; a rough translation can be human. Neither is adequately characterized by an English word blacklist.

### Copyright and adjacent questions

Keep output copyrightability, copying protected expression, and the legality of training uses separate. An AI detector resolves none of them. The U.S. Copyright Office separates these topics in its official AI initiative and reports. This is a jurisdiction-specific starting point, not a rule for every country. [Copyright Office][S50]

Consent, confidentiality, impersonation, accessibility, and synthetic material entering later datasets are also relevant. Each requires distinct evidence and context. A stylistic diagnosis cannot settle them. This report does not claim to be an exhaustive legal survey or complete review of model-training science.

## 11 A practical investigation workflow

This is an original synthesis intended to make findings reviewable, not generate an authorship percentage.

**Step 1 — Preserve the material.** Save the passage, URL, date, and revision. Identify the edit that inserted suspicious text and distinguish later changes. Page histories and tools such as WikiBlame help locate original additions. [AI Cleanup guide][S5]

**Step 2 — Define the question.** Record whether the concern is accuracy, source quality, prohibited assistance, undisclosed generation, copying, or style. Avoid a vague assignment to prove AI. A precise question permits a finding such as “the source does not support the employment date.”

**Step 3 — Record observations first.** Preserve exact wording or artifacts and describe them plainly: a placeholder remains; a DOI resolves to another title; unnamed experts allegedly support a claim. Record location without immediately converting observation into accusation.

**Step 4 — Check consequential claims.** Prioritize identity, dates, numbers, quotations, awards, accusations, and causation. Verify source existence, metadata, and the supporting passage. Sampling can reveal a problem but cannot certify the whole document. Expand review when failures indicate wider contamination.

**Step 5 — Evaluate alternatives.** Consider templates, translation, editing, multiple contributors, quotations of AI output, imported secondary material, citation errors, and link rot. Alternatives should be plausible and relevant. Untested suspicions should remain suspicions.

**Step 6 — Examine production evidence.** Review legitimately available drafts, source notes, histories, disclosures, or authenticated tool records. Identify what they cover. An AI-written edit summary does not logically establish generated article prose. A manual revision history does not guarantee no earlier assistance.

**Step 7 — Treat detectors as supplementary.** Record the tool, date, input length, language, handling of references and quotations, score, and documented threshold. Do not combine unexplained scores into a vote: similar systems may share the same errors.

**Step 8 — State the narrowest supported finding.** Useful labels include unsupported claim, citation mismatch, unresolved source access, probable chatbot residue, documented polishing, and insufficient evidence of generation. Explain checks and uncertainty. Do not invent numerical confidence.

**Step 9 — Match the action to the evidence.** Correct the defect, request support, or apply the relevant publication procedure. If an authorship rule is at issue, present specific evidence and allow a response. Avoid aesthetic judgments about sounding sufficiently human.

### Reusable Markdown worksheet

~~~markdown
# Writing review record

- Document or article:
- URL and revision:
- Review date:
- Question being investigated:
- Applicable publication rule:

| Passage | Observation | Source exists | Metadata matches | Exact support | Alternative explanation | Finding | Action |
|---|---|---|---|---|---|---|---|
| | | Yes / No / Unknown | Yes / No / Unknown | | | | |

- Provenance evidence:
- Detector details, if used:
- Material not checked:
- Supported conclusion:
- Remaining uncertainty:
~~~

## 12 Worked examples

These are invented teaching examples, not excerpts from suspected authors or experimentally validated diagnostic rules.

**Unsupported impact.** “The new branch transformed the city's cultural life.” The source records only its opening date and address. The finding is an unsupported impact claim. State the documented opening or find evidence of effects. Authorship remains unknown.

**Working DOI, wrong identity.** A river-pollution citation resolves to a classroom-attendance paper. This fails an identity check. Search for a corrected identifier before declaring the intended paper nonexistent.

**Relevant source, wrong numbers.** An article reports 8,000 employees in 2024; its source reports 800 in 2014. The discrepancy establishes a content error, not its origin. Check both figure and period.

**Ordinary punctuation.** “The exhibition opened in May—three months behind schedule.” The dash communicates a relationship and supplies no useful authorship conclusion by itself.

**An ordinary three-item list.** “The kit contains a battery, cable, and charger.” There may simply be three actual items. Counting rhetorical shapes without examining function creates false alarms.

**Drafting residue.** “[ADD VERIFIED FOUNDING DATE]” remains in article prose. It proves an unfinished drafting step. Establish whether it came from a template, imported document, or generated response.

**Mixed authorship.** A researcher writes a draft and uses AI to correct grammar. A detector flags edited sentences. Available editing records may establish assistance; the flag does not establish that ideas, data, or the entire paper were generated.

**Polite denial.** A contributor formally asks an accuser to identify disputed passages. That request is not AI evidence. Supply the passages and explain the concern.

**Overlapping clues.** Sections have matching headings, list lengths, and closing sentences. Check whether a publication template explains them before treating them as independent signals.

**Accurate generated text and inaccurate human text.** One verified paragraph has a disclosed chatbot draft; another contains a fabrication typed entirely by a person. Accuracy, authorship, originality, and compliance need separate findings.

## 13 Improving writing

These recommendations address quality and do not promise detector evasion or certify human authorship.

1. **Build a claim-and-source outline.** Identify evidence for important assertions before polishing.
2. **Write what is established.** Preserve observation, interpretation, opinion, and uncertainty.
3. **Prefer informative detail.** Names, dates, mechanisms, and supported examples explain more than broad praise.
4. **Make paragraphs contribute.** Remove repeated conclusions and template-filling sections.
5. **Keep precise terminology.** Arbitrary synonym changes can damage meaning.
6. **Audit references independently.** Rewording a fabricated citation does not make it genuine.
7. **Use structure for the task.** Tables suit comparisons; prose suits explanations.
8. **Preserve the research trail.** Retain sources, drafts, and meaningful changes where appropriate.
9. **Describe assistance accurately.** Follow destination rules and disclose actual help when required.
10. **Recheck meaning after editing.** Simplification, correction, and translation can change qualifications.

Intentional errors, fabricated personal experiences, or arbitrary sentence variation damage quality. They do not resolve provenance. Accurate, supported writing is a more useful objective than a particular detector score.

## 14 Unresolved questions and limitations

**System currency.** A 2026 paper may test 2025 outputs or much older generators. Publication date is not model currency. Performance figures must travel with their conditions.

**Individual attribution.** Population vocabulary trends, controlled classifier success, selected expert performance, and community experience supply different evidence. They cannot be freely substituted for one another.

**Language and genre coverage.** Short messages, low-resource languages, multilingual mixtures, accessible writing, and heavy editing require appropriate validation. Benchmark mismatch can produce false accusations.

**Selection effects.** A collection of suspicious submissions generates hypotheses but does not contain the ordinary human comparison cases needed to measure specificity. Suspected examples must not silently become confirmed ground truth.

**Chronology.** An old revision may rule out a later tool; pre-ChatGPT does not mean pre-automation or pre-language-model research. A recent creation date also does not establish generation.

**No universal scoring system.** No validated points-based checklist emerged from this review. Use style to direct attention, verify claims directly, examine relevant production evidence, and state uncertainty. A clear content defect often supports useful action without resolving every authorship question.

## 15 Sources

Dynamic guidance was checked on 11 September 2026. Years below refer to publication unless indicated otherwise. Wikipedia essays and project advice document observations, not independent detection validation.

1. English Wikipedia contributors. [Signs of AI writing][S1]. WikiProject advice; permanent revision edited 9 September 2026. Status and pattern index.
2. English Wikipedia contributors. [Writing articles with large language models][S2]. Content guideline. Restrictions and exceptions.
3. English Wikipedia contributors. [Large language models][S3]. Information page. Risks and review.
4. English Wikipedia contributors. [WikiProject AI Cleanup][S4]. Project page. Cleanup priorities.
5. English Wikipedia contributors. [WikiProject AI Cleanup Guide][S5]. Investigation methods.
6. English Wikipedia contributors. [Criteria for speedy deletion G15][S6]. Policy. Unambiguous cases and qualifications.
7. English Wikipedia contributors. [Presumptive removal of AI-generated content][S7]. Deletion guideline.
8. English Wikipedia contributors. [Template AI-generated documentation][S8]. Maintenance and review.
9. English Wikipedia contributors. [Reliable sources][S9]. Content guideline.
10. English Wikipedia contributors. [Verifiability][S10]. Policy.
11. English Wikipedia contributors. [No original research][S11]. Policy.
12. English Wikipedia contributors. [Manual of Style Words to watch][S12]. Wording guidance.
13. English Wikipedia contributors. [Signs of AI-generated comments][S13]. Project advice.
14. English Wikipedia contributors. [Identifying LLM unblock requests][S14]. Information page.
15. English Wikipedia contributors. [The LLM-written ANI report][S15]. Essay.
16. English Wikipedia contributors. [Fictitious references][S16]. Essay.
17. English Wikipedia contributors. [Metacoverage][S17]. Essay.
18. English Wikipedia contributors. [Marketing buzzspeak][S18]. Essay.
19. English Wikipedia contributors. [The problem with elegant variation][S19]. Essay.
20. Tom S. Juzek and Zina B. Ward. [Why Does ChatGPT “Delve” So Much? Exploring the Sources of Lexical Overrepresentation in Large Language Models][S20]. COLING, January 2025, pp. 6397–6411.
21. Kobak et al. [Delving into LLM-assisted writing in biomedical publications through excess vocabulary][S21]. Science Advances, July 2025. DOI 10.1126/sciadv.adt3813.
22. Reinhart et al. [Do LLMs write like humans? Variation in grammatical and rhetorical styles][S22]. PNAS, February 2025. DOI 10.1073/pnas.2422455122; linked full author manuscript.
23. Zamaraeva et al. [Comparing LLM-generated and human-authored news text using formal syntactic theory][S23]. ACL, July 2025.
24. Shoumik Saha and Soheil Feizi. [Almost AI, Almost Human: The Challenge of Detecting AI-Polished Writing][S24]. Findings of ACL, July 2025.
25. Mysore et al. [Prototypical Human-AI Collaboration Behaviors from LLM-Assisted Writing in the Wild][S25]. EMNLP, November 2025.
26. Tripto et al. [Beyond Checkmate: Exploring the Creative Choke Points for AI Generated Texts][S26]. EMNLP, November 2025.
27. English Wikipedia contributors. [Manual of Style Layout][S27]. Article organization.
28. English Wikipedia contributors. [Wikitext wrapped in Markdown code blocks from chatbots][S28]. Project advice.
29. E. M. Freeburg. [The Last Fingerprint: How Markdown Training Shapes LLM Prose][S29]. arXiv preprint, 27 March 2026.
30. English Wikipedia contributors. [Help, I've been accused of using AI!][S30]. Essay.
31. William H. Walters and Esther Isabelle Wilder. [Fabrication and errors in the bibliographic citations generated by ChatGPT][S31]. Scientific Reports, 2023.
32. Jake Linardon et al. [Influence of Topic Familiarity and Prompt Specificity on Citation Fabrication in Mental Health Research Using Large Language Models: Experimental Study][S32]. JMIR Mental Health, 12 November 2025, e80371. Reporting inconsistency noted.
33. Nelson F. Liu, Tianyi Zhang, and Percy Liang. [Evaluating Verifiability in Generative Search Engines][S33]. Findings of EMNLP, 2023.
34. Weixin Liang et al. [GPT detectors are biased against non-native English writers][S34]. Patterns, July 2023. DOI 10.1016/j.patter.2023.100779; linked author manuscript.
35. Debora Weber-Wulff et al. [Testing of detection tools for AI-generated text][S35]. International Journal for Educational Integrity, 2023. DOI 10.1007/s40979-023-00146-z.
36. Dugan et al. [RAID: A Shared Benchmark for Robust Evaluation of Machine-Generated Text Detectors][S36]. ACL, August 2024.
37. Hans et al. [Spotting LLMs With Binoculars: Zero-Shot Detection of Machine-Generated Text][S37]. ICML, 2024. Full manuscript includes limitations and Appendix A.10.
38. Tufts, Zhao, and Li. [A Practical Examination of AI-Generated Text Detectors for Large Language Models][S38]. Findings of NAACL, April 2025.
39. Russell, Karpinska, and Iyyer. [People who frequently use ChatGPT for writing tasks are accurate and robust detectors of AI-generated text][S39]. ACL, July 2025.
40. Sadasivan et al. [Can AI-Generated Text Be Reliably Detected? Stress Testing AI Text Detectors Under Various Attacks][S40]. TMLR, 2025; preprint began in 2023.
41. Van Vlasselaer, Van Droogenbroeck, and Spruyt. [Who wrote this? Evaluating the reliability of AI detection tools in higher education][S41]. International Journal for Educational Integrity, 29 June 2026.
42. El Attar, Dönmez, Maurer, and Falenska. [A Systematic Analysis of Linguistic Features in AI-Generated Text Detection Across Domains and Models][S42]. arXiv preprint, 2 June 2026.
43. Sun et al. [Idiosyncrasies in Large Language Models][S43]. ICML, 2025; author manuscript version 2.
44. Dathathri et al. [Scalable watermarking for identifying large language model outputs][S44]. Nature 634, 818–823, 23 October 2024.
45. Coalition for Content Provenance and Authenticity. [C2PA and Content Credentials Explainer][S45]. Specification version 2.2.
46. International Committee of Medical Journal Editors. [Defining the Role of Authors and Contributors][S46]. Current recommendations, especially AI-assisted technology.
47. Google Search Central. [Guidance on using generative AI content on your website][S47]. Current documentation.
48. Google Search Central. [Spam policies for Google web search][S48]. Current documentation.
49. Macko et al. [MULTITuDE: Large-Scale Multilingual Machine-Generated Text Detection Benchmark][S49]. EMNLP, 2023.
50. U.S. Copyright Office. [Copyright and Artificial Intelligence][S50]. Official initiative and reports.

[S1]: https://en.wikipedia.org/w/index.php?title=Wikipedia:Signs_of_AI_writing&oldid=1374066235
[S2]: https://en.wikipedia.org/wiki/Wikipedia:Writing_articles_with_large_language_models
[S3]: https://en.wikipedia.org/wiki/Wikipedia:Large_language_models
[S4]: https://en.wikipedia.org/wiki/Wikipedia:WikiProject_AI_Cleanup
[S5]: https://en.wikipedia.org/wiki/Wikipedia:WikiProject_AI_Cleanup/Guide
[S6]: https://en.wikipedia.org/wiki/Wikipedia:Criteria_for_speedy_deletion#G15._Unambiguously_LLM-generated_pages
[S7]: https://en.wikipedia.org/wiki/Wikipedia:Presumptive_removal_of_AI-generated_content
[S8]: https://en.wikipedia.org/wiki/Template:AI-generated/doc
[S9]: https://en.wikipedia.org/wiki/Wikipedia:Reliable_sources#Sources_produced_by_machine_learning
[S10]: https://en.wikipedia.org/wiki/Wikipedia:Verifiability
[S11]: https://en.wikipedia.org/wiki/Wikipedia:No_original_research
[S12]: https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Words_to_watch
[S13]: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI-generated_comments
[S14]: https://en.wikipedia.org/wiki/Wikipedia:Identifying_LLM_unblock_requests
[S15]: https://en.wikipedia.org/wiki/Wikipedia:The_LLM-written_ANI_report
[S16]: https://en.wikipedia.org/wiki/Wikipedia:Fictitious_references
[S17]: https://en.wikipedia.org/wiki/Wikipedia:Metacoverage
[S18]: https://en.wikipedia.org/wiki/Wikipedia:Marketing_buzzspeak
[S19]: https://en.wikipedia.org/wiki/Wikipedia:The_problem_with_elegant_variation
[S20]: https://aclanthology.org/2025.coling-main.426/
[S21]: https://pmc.ncbi.nlm.nih.gov/articles/PMC12219543/
[S22]: https://arxiv.org/html/2410.16107v2
[S23]: https://aclanthology.org/2025.acl-long.443/
[S24]: https://aclanthology.org/2025.findings-acl.1303/
[S25]: https://aclanthology.org/2025.emnlp-main.852/
[S26]: https://aclanthology.org/2025.emnlp-main.600/
[S27]: https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Layout
[S28]: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing/Wikitext_wrapped_in_Markdown_code_blocks_from_chatbots
[S29]: https://arxiv.org/abs/2603.27006
[S30]: https://en.wikipedia.org/wiki/Wikipedia:Help,_I've_been_accused_of_using_AI!
[S31]: https://pmc.ncbi.nlm.nih.gov/articles/PMC10484980/
[S32]: https://mental.jmir.org/2025/1/e80371/
[S33]: https://aclanthology.org/2023.findings-emnlp.467/
[S34]: https://arxiv.org/html/2304.02819
[S35]: https://link.springer.com/article/10.1007/s40979-023-00146-z
[S36]: https://aclanthology.org/2024.acl-long.674/
[S37]: https://arxiv.org/html/2401.12070v2
[S38]: https://aclanthology.org/2025.findings-naacl.271/
[S39]: https://aclanthology.org/2025.acl-long.267/
[S40]: https://arxiv.org/html/2303.11156v4
[S41]: https://link.springer.com/article/10.1007/s40979-026-00226-w
[S42]: https://arxiv.org/html/2606.04177v1
[S43]: https://arxiv.org/html/2502.12150v2
[S44]: https://www.nature.com/articles/s41586-024-08025-4
[S45]: https://spec.c2pa.org/specifications/specifications/2.2/explainer/Explainer.html
[S46]: https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html
[S47]: https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
[S48]: https://developers.google.com/search/docs/essentials/spam-policies
[S49]: https://aclanthology.org/2023.emnlp-main.616/
[S50]: https://www.copyright.gov/ai/
