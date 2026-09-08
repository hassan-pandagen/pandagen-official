# Prompt for ChatGPT — paste this

You are editing blog posts on the PandaCodeGen website (Next.js, files at
`src/app/blog/<slug>/page.tsx`). Your job is **copy editing only**. You are not writing new content,
not doing SEO, not checking facts.

## The problem

A previous pass removed unsupportable marketing claims. It worked, but it left the prose stiff and
noun-heavy — it reads like a compliance document. Example of what is wrong:

> "Compare only the costs that the build would actually replace, and include migration, hosting,
> support, maintenance, security, integrations, adoption, and internal ownership."

Nothing in that sentence is *doing* anything. It is a list of abstract nouns. Fix:

> "Only count the costs the build would actually replace. Then add the ones people forget: moving
> the data, hosting it, supporting it, keeping it patched, wiring it to your other tools, training
> the team, and owning it from then on."

## The one rule you must not break

> **Make it shorter and more human WITHOUT making it braver.**

Never add a claim the original did not make. If it said "may improve", keep "may" or "can" — never
"will" or "does". If a sentence cannot be made plainer without becoming a stronger claim, leave it
exactly as it is and move on.

## What to do

1. Turn lists of abstract nouns into sentences with real verbs, or into "you" statements.
2. Turn nominalisations back into verbs: "before implementation" → "before you build it".
3. Give sentences a subject. Say who does the thing.
4. When a technical term is the real name of something, keep it — but say what it means once, the
   first time it appears.
5. **Use "is" and "are".** Do not write "serves as", "stands as", "functions as".

## What NOT to do

**Do not make it sound like AI wrote it.** These posts currently contain zero AI-tell words and that
must stay true. Never introduce:

*delve, tapestry, testament, underscore, pivotal, boasts, garner, intricate, interplay, meticulous,
vibrant, showcase, foster, enduring, crucial, valuable insights, align with, resonate, evolving
landscape, realm of, navigate the, unlock, harness, seamless, robust, leverage, cutting-edge,
game-changer, revolutionize, empower, holistic.*

Also never:
- Start a sentence with "Additionally,"
- Open with "In today's…" / "In the world of…" / "In an era…"
- Write "…, highlighting its importance." or "…, ensuring optimal performance." (`-ing` tails)
- Write "Not just X, but Y" or "It's not about X, it's about Y"
- Write "Experts argue…" / "Industry reports suggest…"
- Write "Despite these challenges, …"

## Never change these facts

- Performance is a **90+ Lighthouse handover target** on mobile and desktop, for pages named in the
  written scope, checked over three recorded runs. **Never** call it a guarantee. Any sentence that
  says it is *not* a guarantee must stay a negation.
- Prices: Starter from $1,500, Growth from $3,500, Scale $5,000–$10,000. Payment normally 30% at
  onboarding, 70% at delivery. Accepted written terms control the final price.
- "SEO-safe" describes the process controls; search engines still control rankings. Keep that clause.
- Panda Patches is **owned by Imran Raza Ladhani, a PandaCodeGen co-founder** — founder-affiliated,
  not independent proof. MyCustomPatches **is** an independent client. Never blur these.
- Dated review lines ("Reviewed July 28, 2026 against current Meta documentation…") keep their date
  and source.
- No new numbers. No new client results. No em-dashes as separators.

If something looks factually wrong, **write it in a list at the end. Do not fix it.**

---

## START HERE — task 1

The phrase **"rather than"** is over-used. Across the site it appears 152 times. Most uses are fine
and carry real meaning ("use the median rather than the best result") — **do not delete those.**

But in these posts it is clustered enough to be a tic. In each one, keep roughly half and rephrase
the rest so no two sit close together:

| Count | File |
|---|---|
| 10 | `src/app/blog/website-redesign-cost/page.tsx` |
| 10 | `src/app/blog/shopify-dawn-theme-slow/page.tsx` |
| 8 | `src/app/blog/shopify-conversion-rate-speed-fix/page.tsx` |
| 8 | `src/app/blog/for-agencies-offer-custom-web-development/page.tsx` |
| 6 | `src/app/blog/website-rebuild-cost-2026/page.tsx` |
| 6 | `src/app/blog/meta-conversions-api-setup-cost/page.tsx` |
| 6 | `src/app/blog/is-squarespace-bad-for-seo/page.tsx` |
| 6 | `src/app/blog/elementor-kills-seo/page.tsx` |
| 6 | `src/app/blog/cheap-web-developer/page.tsx` |

**Rephrasing must not change the meaning.** "A rather than B" can become "A, not B" or "Use A. B
gives you the wrong number." It must never become just "A".

## Task 2 — the top-of-post boxes, all 77 posts

The worst writing is in the **summary box and the takeaway bullets at the top of each post**. That is
the first thing a reader sees and the part AI search quotes. Fix those in every post, even ones that
otherwise read fine.

## Task 3 — full body, worst 12 posts

`build-vs-buy-software-2026-cost-comparison`, `website-migration-cost-2026`,
`wordpress-ai-security-risk-2026`, `google-universal-commerce-protocol-what-it-means-for-your-store`,
`woocommerce-migration-cost`, `webflow-migration-cost`, `nextjs-sanity-stack`,
`website-developer-agency`, `why-competitor-outranks-you`, `wordpress-killer`,
`cloudflare-emdash-wordpress-replacement`, `meta-conversions-api-setup-cost`

---

## Before you hand back

1. `npx tsc --noEmit -p tsconfig.json` passes
2. `npx eslint src` passes
3. `npm run build` passes, blog count still **77**
4. No banned AI word appears anywhere it did not before
5. The rewrite has **more** "is"/"are" than the original, not fewer
6. No new "guarantee", "always", "will rank", "will increase", "proven to", "ensures"
7. Read three summary boxes aloud. Not a contract, not a chatbot. Just a person explaining something.

Do not change headings, schema, internal links, or file structure.
