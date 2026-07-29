# Blog Plain-English Rewrite Brief

**Status:** not started
**Scope:** 77 blog posts under `src/app/blog/*/page.tsx`
**Owner of this pass:** ChatGPT
**Measured:** 29 July 2026

---

## 1. The problem, measured

The claim-safety remediation removed unsupportable claims correctly. But replacing confident
sentences with hedged, precise ones produced noun-heavy prose across the whole blog corpus.

| Signal | Current blogs | Plain business English |
|---|---|---|
| Nominalisation rate (words ending -tion, -ment, -ity, -ance, -ence) | **7.0 – 8.7%** | ~3 – 4% |
| Words per sentence | **19 – 26** | 15 – 20 |
| Posts measured | 77 | |
| Median density score | 37.9 | |

At 8% nominalisation, roughly one word in twelve is an abstraction. That is compliance-document
density. The **median** post is affected, not only the worst ones.

### The dominant failure pattern

It is **not** mainly long sentences. It is **comma-separated inventories of abstract nouns**:

> "…include migration, hosting, support, maintenance, security, integrations, adoption, and internal ownership."

> "Set functional, SEO, accessibility, security and performance acceptance."

> "Price depends on strategy, pages, templates, content, design, data, integrations, accessibility, …"

These are short. They score fine on sentence length. They are still unreadable, because nothing in
them is doing anything. No subject, no real verb, just a list of concepts.

### Where it hurts most

The densest writing sits in the **summary box and the takeaway bullets at the top of each post**.
That is the worst possible location: it is the first thing a human reads, and it is the exact zone
AI answer engines lift when they quote a page.

---

## 2. The one hard rule

> **Make it shorter and more human WITHOUT making it braver.**

The reason this prose exists is that it is hard to say "this will make you money" safely. Rewriting
for plainness naturally pulls toward confident phrasing, and confident phrasing is exactly where the
original false claims came from.

**No rewrite may add a claim the hedged version did not already make.** If the original said
"may improve event delivery", the rewrite says "can improve event delivery" or "often improves event
delivery" — never "improves event delivery" and never "will improve".

If a sentence cannot be made plainer without becoming a stronger claim, leave it alone and move on.

---

## 3. The four patterns to fix

### Pattern A — noun inventory → sentence with verbs

Break the list into something a person is doing, or turn it into "you" statements.

| Before | After |
|---|---|
| "Compare only the costs that the build would actually replace, and include migration, hosting, support, maintenance, security, integrations, adoption, and internal ownership." | "Only count the costs the build would actually replace. Then add the ones people forget: moving the data, hosting it, supporting it, keeping it patched, wiring it to your other tools, training the team, and owning it from then on." |
| "Set functional, SEO, accessibility, security and performance acceptance." | "Agree in writing what 'done' means. Does it work, does it still rank, can everyone use it, is it secure, is it fast." |
| "Sandboxing is a useful control, not immunity. Authentication, dependencies, deployment permissions, data handling, configuration, backups, logging, and incident response still have to be designed and tested." | "A sandbox helps. It does not make you safe. You still have to design and test who can log in, what your dependencies pull in, who can deploy, how data is handled, how you back things up, what you log, and what you do when something breaks." |

### Pattern B — nominalisation → the verb it came from

| Before | After |
|---|---|
| "Before implementation, document the purpose…" | "Before you build it, write down why…" |
| "These requirements should be priced as explicit workstreams with named acceptance evidence." | "Price these as separate pieces of work, and say what proof signs each one off." |
| "Transport compatibility is not automatic distribution." | "Being able to connect does not mean anyone will send you traffic." |

### Pattern C — subjectless statement → say who

| Before | After |
|---|---|
| "Each exposed ability should have explicit authorization, input validation, logging and a…" | "For every action you expose, check who is allowed to call it, check what they send, and log it." |
| "A ranking difference is an observation, not a diagnosis." | "Ranking lower tells you something is different. It does not tell you what is wrong." |

### Pattern D — jargon with no gloss

Keep the technical term when it is the real name of the thing, but say what it means once, in the
same sentence, the first time it appears.

| Before | After |
|---|---|
| "Event Match Quality is a diagnostic about the customer-information parameters available for…" | "Event Match Quality is Meta's score for how much customer detail you managed to send. It is a diagnostic, not a measure of how well your ads are doing." |
| "Server-side delivery is not a consent bypass." | "Sending events from your own server does not get you around consent rules." |

---

## 4. Do not swap jargon for AI slop

This is the trap in this pass. The prose is currently dense and careful. The natural direction of a
"make it friendlier" edit is straight into the register of an AI chatbot: warm, confident, empty.
That would be a worse outcome than the jargon, because jargon reads as *stiff* while AI slop reads
as *untrustworthy*, and this site's entire differentiator is that it does not overclaim.

Reference: [Wikipedia:Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

### Current baseline: the corpus is clean. Keep it that way.

A scan of all 77 posts for the standard AI-vocabulary set returned almost nothing:

| Word | Occurrences across 77 posts |
|---|---|
| delve, tapestry, testament, underscore, pivotal, vibrant, showcase, meticulous, intricate, interplay, fostering, enduring, boasts, garner, bolstered, seamless, holistic, cutting-edge, revolutionize, empower | **0** |
| leverage | 1 |
| unlocking | 1 |

**This is a strength of the existing content.** Any rewrite that introduces these words makes the
post worse, not better.

### Banned vocabulary

Do not introduce any of: *delve, tapestry, testament, underscore(s/ing), pivotal, boasts, bolstered,
garner, intricate, intricacies, interplay, meticulous(ly), vibrant, showcase(s/ing), foster(s/ing),
enduring, crucial, valuable insights, align with, resonate(s), evolving landscape, indelible, deeply
rooted, realm of, navigate the, unlock(ing), harness(ing), seamless(ly), robust, leverage,
cutting-edge, game-changer, revolutionize, empower(ing), holistic.*

Also avoid starting a sentence with **"Additionally,"** and avoid **"In today's…"** / **"In the world
of…"** / **"In an era…"** openers.

### Banned patterns

| Pattern | Example to avoid |
|---|---|
| Undue significance | "This marks a pivotal moment in…", "reflects a broader shift toward…" |
| Superficial `-ing` tail | "…, highlighting its importance.", "…, ensuring optimal performance." |
| Negative parallelism | "Not just a migration, but a transformation.", "It's not about speed, it's about trust." |
| Rule of three | "faster, cleaner, and more reliable" as reflex padding |
| Vague attribution | "Experts argue…", "Industry reports suggest…", "Observers have noted…" |
| Challenges-and-future formula | "Despite these challenges, …" followed by a hopeful close |
| Copula avoidance | "serves as a", "stands as a", "functions as a" where "is" is correct |

On that last one: **use "is" and "are".** Writing "Next.js serves as the rendering layer" instead of
"Next.js renders the pages" is the single most common way a rewrite starts sounding generated.

### The one pattern NOT to hunt

`X rather than Y` appears **152 times** across the corpus. Leave it broadly alone. Sampling shows the
instances carry real meaning:

> "use the median **rather than** the best result"
> "One H1 per page, describing the page **rather than** the brand"
> "relocates the risk **rather than** removing it"

These are genuine technical distinctions, not padding. Stripping them would remove advice. You may
vary the phrasing where three or more appear close together, purely for rhythm, but do not treat the
construction as a defect and do not change what any of them mean.

### Why the risk is real here

The hedging that produced the jargon and the confidence that produces AI slop are two failure modes
of the same sentence. "Cost depends on the events, systems, consent model, identifiers,
deduplication, testing and monitoring required" is unreadable *because* it is careful. The tempting
rewrite is "Getting Conversions API right can transform your attribution" — readable, generated-
sounding, and a claim the original never made.

The correct rewrite is neither: "What it costs depends on how many events you send, what systems
they come from, and how much testing it takes to trust the numbers."

---

## 5. Priority order

Work top-down. Scores are the composite density measure (higher = worse).

| # | Score | Post |
|---|---|---|
| 1 | 49.1 | `build-vs-buy-software-2026-cost-comparison` |
| 2 | 48.9 | `website-migration-cost-2026` |
| 3 | 47.5 | `wordpress-ai-security-risk-2026` |
| 4 | 45.6 | `google-universal-commerce-protocol-what-it-means-for-your-store` |
| 5 | 45.2 | `woocommerce-migration-cost` |
| 6 | 44.7 | `webflow-migration-cost` |
| 7 | 44.4 | `nextjs-sanity-stack` |
| 8 | 43.8 | `website-developer-agency` |
| 9 | 43.8 | `why-competitor-outranks-you` |
| 10 | 43.7 | `wordpress-killer` |
| 11 | 43.1 | `cloudflare-emdash-wordpress-replacement` |
| 12 | 42.9 | `pagepro-alternatives` |
| 13 | 42.4 | `wordpress-traffic-drop-speed` |
| 14 | 42.1 | `aeo-web-performance-glossary` |
| 15 | 42.1 | `aeo-playbook-built-into-every-website` |
| 16 | 41.9 | `shopify-headless` |
| 17 | 41.6 | `webflow-user-accounts-sunset-date-2026` |
| 18 | 41.3 | `wix-vs-custom-website` |

### Known blind spot in that ranking

`meta-conversions-api-setup-cost` does **not** appear above, yet it is one of the worst offenders by
eye. Its bad lines are *short* fragments in bullet boxes ("The lawful consent state and approved
customer-information parameters."), which a sentence-length measure cannot see.

**Therefore: do not trust the ranking alone.** For every post, read the summary box and the takeaway
bullets regardless of its score.

### Two passes

1. **Pass 1 (all 77):** summary box + takeaway bullets + opening paragraph only. Highest read,
   highest citation value, worst affected, cheapest to fix.
2. **Pass 2 (posts 1–18 above):** full body.

---

## 6. Must NOT change

These are load-bearing. Changing them reintroduces problems that took a full remediation to remove.

- **The performance wording.** It is a *90+ Lighthouse handover target* on mobile and desktop, for
  representative pages named in the written scope, verified across three recorded runs. Never a
  "guarantee". Never "guaranteed". Any negation around it stays a negation.
- **Prices and terms.** Starter from $1,500, Growth from $3,500, Scale $5,000–$10,000. Payment
  normally 30% at onboarding, 70% at delivery. Accepted written terms control the final price.
- **"SEO-safe" gloss.** "SEO-safe" describes the process controls; search engines still control
  rankings. That clause stays wherever it appears.
- **Relationship labels.** Panda Patches is **owned by Imran Raza Ladhani, a PandaCodeGen
  co-founder** — founder-affiliated, not independent proof. MyCustomPatches **is** an independent
  client. Never blur these.
- **Dated evidence lines** ("Reviewed July 28, 2026 against current Meta documentation…"). Keep the
  date and the source. You may make the sentence plainer; you may not drop what it cites.
- **No new numbers, no new claims, no new client outcomes.** If a figure is not already on the page,
  it does not go on the page.
- **No em-dashes as separators.**

### Metadata `description` fields

Lower priority. Rewrite only if it reads as a pure noun inventory. Keep every fact and the price,
and keep it inside ~155 characters.

---

## 7. QA gate before handing back

1. `npx tsc --noEmit -p tsconfig.json` passes.
2. `npx eslint src` passes.
3. `npm run build` passes; blog page count still **77**.
4. Nominalisation rate on rewritten sections drops below **5%**.
5. Diff check: no rewritten sentence introduces any of — "guarantee", "guaranteed", "always",
   "never fails", "will rank", "will increase", "proven to", "ensures" — unless it was already there
   inside a negation.
6. **AI-tell diff check.** The corpus currently scores near zero on AI vocabulary (§4). Re-run that
   count after the rewrite. If any banned word appears where it did not before, the rewrite failed
   even if it reads better. Target stays at zero.
7. Count "is" and "are". If the rewrite has *fewer* of them than the original, it has drifted toward
   the generated register. Plain English uses more copulas, not fewer.
8. Spot-read three rewritten summary boxes aloud. If a sentence cannot be said in one breath without
   sounding like a contract, it is not done. If it sounds like a chatbot being encouraging, it is
   also not done.

---

## 8. What this pass is NOT

- It is **not** an SEO pass. Do not add keywords, headings, or sections.
- It is **not** a fact-check pass. Do not add, remove or correct facts.
- It is **not** a restructure. Heading order, schema, and internal links stay exactly as they are
  (the site currently has 901 internal links, zero orphans, zero broken — do not disturb it).

Anything found that looks factually wrong: **flag it in a list, do not fix it.**
