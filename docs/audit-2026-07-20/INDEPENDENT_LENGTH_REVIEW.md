# Independent review: remediation pass, was every cut good or bad

**Reviewer:** Claude (independent check, not part of the Codex/ChatGPT remediation process)
**Date:** 2026-07-25 (Part 1, blogs) · 2026-07-27 (Part 2, non-blog pages)

This document now has two parts:

- **Part 1 — the 77 blog routes.** Original review. Findings below are unchanged.
- **Part 2 — every non-blog page** (homepage, partners, services, work, about, ai-info, pricing, contact, legal, plus `public/` assets and site-wide config). Added 2026-07-27, same method.

---

# Part 1 — Blog routes

**Scope:** all 77 live blog routes. 76 checked (all remediated articles); `nextjs-sanity-stack` excluded (new article, not part of this remediation). 2 articles (`how-to-migrate-wordpress-to-nextjs`, `google-march-2026-update`) were part of the earlier, separately-approved July 23 batch and were not independently re-checked here — they already grew in length and were vetted then.
**Method:** for every article, pulled `git show HEAD:<path>` (pre-remediation original) against the current working-tree file, compared section-by-section (not just headers — read the actual prose), and classified every removed passage as either **legitimate** (unsupported stat, causal claim without evidence, self-serving comparison, unverified dollar figure, absolute/guarantee language) or **collateral damage** (neutral, accurate, non-risky content — how-to steps, platform facts, decision frameworks, sourced case studies — removed anyway as a side effect of a full rewrite).
**Who did the work:** 6 articles read in full by hand (Claude, main thread); 71 articles read in full by 9 independent subagents dispatched in parallel, each doing the same git-diff-and-judge process. `wordpress-vs-nextjs` was checked twice, independently, by two different subagents — both readings are kept below since they converge on the same substance from different angles.

This is not a claims audit — `BLOG_ARTICLE_AUDIT.md`, `BLOG_CLAIM_DECISION_LEDGER.md`, and `BLOG_REMEDIATION_TRACKER.md` already do that job, and do it well. This document answers the one question those don't: **did fixing the claims require cutting this much, article by article, or did the rewrite also throw away good content along with the bad?**

---

## Headline numbers

**Aggregate length: 409,253 → 185,615 tokens across 77 articles = 45.4% of original volume.** 72 of 77 articles (93.5%) shrank more than the project's own 5%-without-approval rule allows.

**Qualitative verdict, all 76 checked articles:**

| Verdict | Count | Meaning |
|---|---:|---|
| **GOOD CUT** | 9 | Claim removal was the right call; no meaningful collateral damage; new content often better-sourced than the original |
| **MIXED** | 41 | Claim removal was mostly legitimate, but real non-risky content (how-to steps, platform facts, decision tools, sourced case studies) was also cut, unrelated to any flagged claim |
| **BAD CUT (overcorrection)** | 12 | The article lost its actual substance or purpose — not just risky claims, but the thing the title promises |
| **CLEAN** | 10 | Length held steady (78–111% of original); spot-checked and confirmed no issue |
| **NEEDS ATTENTION** | 1 | Length held steady, but still lost a real sourced section |
| Not re-verified this round | 2 | Already vetted in the earlier, separate July 23 batch |

**Reading:** the claim-removal work is real and mostly justified — every batch found genuinely fabricated statistics, unsupported causal claims, and self-serving comparisons, and removed them correctly. But **53 of 76 articles (MIXED + BAD CUT, 70%) also lost real, non-risky content as a side effect of doing full rewrites instead of targeted edits.** That collateral damage is avoidable and is the actual issue to fix — not the claim removal itself.

---

## ⚠️ VERIFICATION RESULT, 2026-07-28 — this table has a high error rate

Before restoring anything, **all twelve** BAD CUT entries were re-checked against the current file and against primary sources, rather than against the diff.

**Final tally: 3 held, 5 held partly, 4 were wrong.**

| | Count | Articles |
|---|---:|---|
| ✅ Verdict held | 3 | `how-long-does-a-custom-website-take`, `woocommerce-too-slow`, `shopify-stocky-sunset-date-2026` |
| 🟡 Partly held | 5 | `is-squarespace-bad-for-seo`, `shopify-app-costs-real-monthly-bill`, `saas-software-pricing-audit-2026`, `spending-more-on-ads-fewer-orders-tracking`, `fix-meta-ad-tracking-2026` |
| ❌ **Wrong** | 4 | `how-website-speed-affects-seo`, `website-migration-cost-2026`, `pagepro-alternatives`, `woocommerce-vs-custom-website` |

Detail:

| Article | Original verdict held? | What was actually true |
|---|---|---|
| `how-long-does-a-custom-website-take` | ✅ Yes | Timeline table genuinely gone. Restored. |
| `woocommerce-too-slow` | ✅ Yes | Cart-fragments and image mechanisms genuinely gone. Restored. |
| `shopify-stocky-sunset-date-2026` | ✅ Yes | Recovery playbook genuinely gone. |
| `is-squarespace-bad-for-seo` | 🟡 Partly | On-page checklist genuinely gone (restored), but the audit process survived. |
| `shopify-app-costs-real-monthly-bill` | 🟡 Partly | Named apps genuinely gone (restored). **But the "billing warning" cited as a loss was factually backwards and correctly removed.** |
| `saas-software-pricing-audit-2026` | 🟡 Partly | Dated vendor changes gone (restored, Microsoft figures verified). **But "lost its entire well-sourced core" was false — all three primary sources survived.** |
| `spending-more-on-ads-fewer-orders-tracking` | 🟡 Partly | Screenshots and the 10.4% figure gone; Event Match Quality discussion survived. |
| `how-website-speed-affects-seo` | ❌ **No** | **Swappie is still cited.** The Panda Patches example was removed, but the central claim of the entry was wrong. |
| `website-migration-cost-2026` | ❌ **No** | **Pricing tiers were never removed** — they sit in a speakable box near the top. The old price table it "lost" mixed advertised tiers, owner brands, forum posts and competitor quotes and was genuinely invalid methodology. |
| `pagepro-alternatives` | ❌ **No** | **The named-competitor comparison is fully intact**, and now cites each company's own services page — better sourced than the original. |
| `woocommerce-vs-custom-website` | ❌ **No** | **The decision table is intact** and is now a three-way comparison (WooCommerce / headless WooCommerce / custom), which is more useful than the original two-way. What was actually removed were performance and cost claims ("under 1 second, 90+ PageSpeed, $20/month") — correctly scoped. |
| `fix-meta-ad-tracking-2026` | 🟡 Partly | A Shopify section survived; the three keyword-targeted sub-questions did not. Those were restored 2026-07-28 as explanatory content. "Entire section deleted" was overstated. |

**Honest conclusion: roughly half of the BAD CUT classifications do not survive inspection.** The failure mode was structural — Part 1 was produced by reading `git diff` and judging what *disappeared*, without checking whether the disappeared text was *true* or whether an equivalent survived elsewhere in the file. That is the same error this document criticises Codex for, pointed the other way: he deleted without verifying, this review accused without verifying.

The genuine finding that survives: **real practical content was lost across the corpus** — timeline tables, named entities, technical mechanisms, on-page checklists, dated vendor data. That part is confirmed and is being restored. The *scale* was overstated and several specific accusations were wrong.

Treat the counts below (12 BAD / 41 MIXED / 45.4% volume) as **unverified**. The 45.4% token measurement is arithmetic and stands; the qualitative labels attached to it do not, until each is checked the way the seven above were.

---

## Structural analysis of all 77 articles, 2026-07-28 — what was *actually* lost

Rather than trust the MIXED labels, every article was measured structurally: HEAD vs current, counting tables, images, formal citations, unique external domains and word volume. Two findings overturn parts of this document.

**1. Sourcing improved. It did not degrade.**
The formal `sources` array went **up** in nearly every article, typically from 2 entries to between 5 and 19 primary URLs. Unique external domains went **down** sharply (commonly 22 → 4). Read together, these say Codex replaced many scattered inline links — secondary blogs, competitor pages, low-authority references — with a smaller set of authoritative primary sources (Google Search Central, web.dev, Shopify, WooCommerce, Meta, vendor docs).

Cross-cutting issue #2 in Part 1 ("well-sourced third-party citations were deleted as if they were the risky part") is therefore **wrong as a general claim**. Citation *count by domain* fell; citation *quality and formality* rose. Some individually good citations were lost inside that consolidation, but the corpus-wide direction was an improvement.

**2. The genuine systematic loss is TABLES.**
This is the finding that survives scrutiny, and it is consistent across the corpus:

| Article | Tables | Article | Tables |
|---|---|---|---|
| `squarespace-migration-cost` | 5 → 1 | `core-web-vitals-explained` | 3 → 0 |
| `wordpress-vs-nextjs` | 5 → 1 | `wix-too-slow` | 3 → 0 |
| `what-is-headless-commerce` | 4 → 1 | `cheap-web-developer` | 3 → 1 |
| `webflow-migration-cost` | 4 → 2 | `gohighlevel-website-speed` | 2 → 0 |
| `woocommerce-too-slow` | 4 → 2 | `how-to-speed-up-your-website` | 2 → 0 |
| `wordpress-migration-cost` | 2 → 1 | `divi-theme-slow` | 2 → 0 |

Tables carry comparison data, decision frameworks, pricing matrices and threshold rules. They are also the single most extractable format for AI Overview citation — which matters because all four of this site's GSC-flagged AI Overview breakouts were cost/comparison pages. Restoring tables (with verified contents) is the highest-value remaining work in the corpus, and is a far more precise instruction than "restore 41 MIXED articles."

**Revised guidance:** ignore the MIXED labels. Work the table-loss list above in GSC traffic order, verify each table's contents against primary sources before restoring, and leave the citation consolidation alone.

---

## The 12 BAD CUTs — as originally classified (see verification table above before acting on any entry)

| Article | What went wrong |
|---|---|
| `saas-software-pricing-audit-2026` | Lost its entire well-sourced core: 9 dated, cited vendor price changes (Webflow, Microsoft 365, Klaviyo, etc.) and the real pricing-comparison table. Confirmed independently by 3 separate reads. No longer delivers what its own title promises. |
| `how-website-speed-affects-seo` | Deleted the Swappie case study (a real Google web.dev case study, specifically re-sourced and cited in a commit two weeks before this rewrite) and the verified Panda Patches case study, plus all how-to content. Zero real evidence left in an evidence-based article. |
| `woocommerce-too-slow` | Deleted two well-sourced sections with named, dated security incidents (Patchstack/TechCrunch citations) and real market data (Google UCP launch, StoreLeads, Gartner), replacing both with generic unsourced paragraphs. Also lost every concrete technical mechanism (cart-fragments AJAX, wp_options bloat diagnostic). |
| `spending-more-on-ads-fewer-orders-tracking` | Deleted all four real first-party dashboard screenshots (the site's own live Meta Events Manager data) and Meta's own reported "~10% more Lead conversions" text — evidence that was already responsibly hedged. Converted an evidence-backed article to pure abstraction. |
| `fix-meta-ad-tracking-2026` | Deleted the entire "Fixing Meta Ad Tracking on Shopify" section (~150 lines) and its whole targeted keyword cluster along with it — a distinct audience segment dropped entirely, not just a risky claim. |
| `how-long-does-a-custom-website-take` | Deleted the actual timeline table (Starter 1-2wks, Growth 2-4wks, etc.) — the one thing the article's own title asks. Replaced with an abstract phase list with zero time estimates. |
| `website-migration-cost-2026` | Deleted nearly all pricing data from a cost-focused article, plus verified Panda Patches/MyCustomPatches proof points (real, per brand records) alongside the one actually-fake testimonial. |
| `shopify-stocky-sunset-date-2026` | Deleted the actionable 14-day recovery playbook and ALL PandaCodeGen pricing tiers, despite very little of the original actually being risky — the most disproportionate cut found. |
| `woocommerce-vs-custom-website` | Deleted the entire decision-framework table (catalog size / budget thresholds) and all WooCommerce-specific technical depth, leaving a generic, platform-agnostic shell. |
| `is-squarespace-bad-for-seo` | Deleted a full, legitimate, evergreen on-page SEO reference guide (title tags, schema, sitemaps, alt text, robots.txt) that had zero claim risk, alongside one bad statistic. |
| `shopify-app-costs-real-monthly-bill` | **PARTLY RETRACTED 2026-07-28.** The claim that removing the "uninstalling an app doesn't cancel billing" warning was a loss of *"zero risk, purely useful"* content was **wrong**. The original warning was factually backwards: Shopify's own documentation states that uninstalling a Shopify-billed app **does** cancel future recurring charges (a current-cycle charge can still appear), while uninstalling does **not** cancel an externally-billed subscription. Codex's replacement makes exactly that distinction and cites the source. Removing the original was correct. **What does stand:** the article lost nearly all named-app specificity (HEAD named Klaviyo, Gorgias, Judge.me, Okendo, ReCharge, Smile.io, Bold; the rewrite named two), which is a genuine title/content gap on a page whose value is naming apps. Restored 2026-07-28 as named categories without dollar figures, since vendor pricing goes stale. |
| `pagepro-alternatives` | Lost the actual named-competitor comparison (Pagepro vs. Naturaily vs. Blazity) that the title promises — the same title/content mismatch pattern as the original "30 tools" issue that started this review. |

---

## The 9 GOOD CUTs — worth learning from, since they show it's possible to do this right

`squarespace-too-slow`, `lovable-site-not-showing-on-google` (a genuine factual correction — Lovable's rendering behavior actually changed), `how-to-achieve-100-pagespeed`, `wordpress-vs-custom-code-real-cost-3-years`, `why-we-chose-nextjs-over-wordpress-2026`, `wordpress-ai-security-risk-2026`, `wordpress-traffic-drop-speed`, `divi-theme-slow`, `wordpress-killer`.

Common thread: these replaced fabricated stats with genuinely better methodology (real CVEs with sources, honest "we don't know" framing, self-documented corrections) **without** deleting whole sections that had nothing to do with the flagged claims. This is the proof that targeted fixing was achievable — the other 53 articles just didn't get that treatment.

---

## Cross-cutting patterns found across every batch

1. **Real, verified, first-party evidence keeps getting deleted alongside fake evidence.** MyCustomPatches and Panda Patches case studies (real clients, per this project's own brand-canon records) were repeatedly cut in the same pass as actually-fabricated anecdotes, rather than being kept with proper hedging — which several *other* articles in the same batches did correctly (e.g., `fix-meta-ad-tracking-2026` kept the Panda Patches EMQ figure and just re-captioned it responsibly — proof this was possible everywhere, just not applied consistently).
2. **Well-sourced third-party citations were deleted as if they were the risky part.** NNGroup, DebugBear, Deloitte, TechCrunch/Patchstack, Google's own web.dev case studies (Swappie, Vodafone, Cdiscount) — all real, all cited — removed wholesale alongside genuinely unsupported claims sitting next to them.
3. **Practical "how do I actually do this" content was the most consistent casualty.** Week-by-week migration playbooks, named tool lists, step-by-step diagnostics, decision-threshold tables — none of these carry claim risk, and nearly every article lost some version of this anyway.
4. **"Key Takeaways" and "Related Reading" sections vanished across the board** — pure recap/internal-linking value, zero claim risk, apparently just incidental to full-rewrite-by-default.
5. **The rewrite quality itself is frequently excellent** — several articles gained genuinely new rigor (real CVE citations, corrected factual errors like the Shopify app-uninstall billing rule, honest "we withheld this because we can't verify it" disclosures). The problem is consistently *scope*, not *competence*.

---

## The open question, unchanged from the original finding

**Was the length reduction actually required by the claim removal, or is "rewrite the whole article" the default method regardless of how load-bearing the flagged claims were?** The evidence across all 76 articles points to the latter: the 9 GOOD CUTs prove targeted fixing is achievable, which means the 53 MIXED/BAD articles didn't lose real content *because* they had to — they lost it because full rewrite was the default approach.

---

## Full verdict table (76 articles)

| Article | Length % | Verdict |
|---|---:|---|
| top-custom-web-development-agencies-usa-2026 | 21.5% | MIXED (honest, well-disclosed, but genuinely thin) |
| google-universal-commerce-protocol-what-it-means-for-your-store | 22.0% | MIXED |
| is-squarespace-bad-for-seo | 22.3% | **BAD CUT** |
| website-redesign-cost | 23.1% | MIXED |
| squarespace-migration-cost | 23.6% | MIXED (leans over) |
| website-rebuild-cost-2026 | 23.6% | MIXED (leans over) |
| gohighlevel-website-speed | 23.7% | MIXED (leans over) |
| wix-too-slow | 26.4% | MIXED (closest to good — worst original stat density) |
| website-migration-cost-2026 | 26.6% | **BAD CUT** |
| how-to-speed-up-your-website | 27.2% | MIXED (new 12-step methodology arguably better) |
| shopify-stocky-sunset-date-2026 | 28.3% | **BAD CUT** |
| squarespace-vs-custom-website | 28.5% | MIXED |
| pagepro-alternatives | 28.8% | **BAD CUT** (title/content mismatch risk) |
| shopify-app-costs-real-monthly-bill | 29.0% | **BAD CUT** |
| wix-vs-custom-website | 30.4% | MIXED (leans bad) |
| webflow-migration-cost | 30.5% | MIXED |
| webflow-user-accounts-sunset-date-2026 | 30.7% | MIXED |
| cheap-web-developer | 31.3% | MIXED |
| what-is-headless-commerce | 31.5% | MIXED |
| saas-software-pricing-audit-2026 | 31.6% | **BAD CUT** (confirmed by 3 independent reads) |
| gohighlevel-keep-crm-replace-website | 31.7% | MIXED |
| shopify-slow-losing-sales | 33.2% | MIXED (best-executed of its batch) |
| shopify-conversion-rate-speed-fix | 33.3% | MIXED (leans over) |
| how-website-speed-affects-seo | 33.7% | **BAD CUT** |
| wordpress-migration-cost | 33.9% | MIXED (leans over) |
| shopify-dawn-theme-slow | 34.4% | MIXED |
| woocommerce-too-slow | 34.7% | **BAD CUT** |
| how-to-fix-slow-wordpress | 35.2% | MIXED (best-justified — worst original fabrication density) |
| core-web-vitals-explained | 36.5% | MIXED (best cut-to-damage ratio) |
| spending-more-on-ads-fewer-orders-tracking | 36.5% | **BAD CUT** |
| shopify-vs-custom-website | 36.9% | MIXED (leans over) |
| how-much-does-a-website-cost | 38.0% | MIXED (leans over) |
| wordpress-vs-nextjs | 38.2% | MIXED (two independent reads: one GOOD, one MIXED — genuine claim fixes, some technical explainers lost) |
| squarespace-too-slow | 38.5% | **GOOD CUT** |
| lovable-site-not-showing-on-google | 39.3% | **GOOD CUT** (genuine factual correction) |
| how-to-achieve-100-pagespeed | 39.5% | **GOOD CUT** |
| website-developer-agency | 39.6% | MIXED (leans over) |
| webflow-true-cost | 39.7% | MIXED |
| for-agencies-offer-custom-web-development | 40.1% | MIXED |
| webflow-vs-custom-website | 40.6% | MIXED |
| fix-meta-ad-tracking-2026 | 42.7% | **BAD CUT** |
| wordpress-vs-custom-code-real-cost-3-years | 43.7% | **GOOD CUT** |
| why-we-chose-nextjs-over-wordpress-2026 | 45.2% | **GOOD CUT** |
| meta-conversions-api-setup-cost | 45.4% | MIXED |
| wordpress-april-2026-evidence | 45.6% | MIXED |
| woocommerce-migration-cost | 45.9% | MIXED |
| top-nextjs-agencies-2026 | 46.6% | MIXED |
| woocommerce-vs-custom-website | 46.8% | **BAD CUT** |
| shopify-headless | 47.9% | MIXED |
| shopify-plus-still-slow | 48.6% | MIXED |
| saas-price-increases-2026-tracker | 49.7% | MIXED (leans bad — 6 of 9 vendor entries dropped) |
| wordpress-ai-security-risk-2026 | 50.5% | **GOOD CUT** (best rewrite of its batch) |
| wordpress-traffic-drop-speed | 50.6% | **GOOD CUT** |
| how-long-does-a-custom-website-take | 53.2% | **BAD CUT** |
| why-competitor-outranks-you | 53.8% | MIXED |
| do-you-own-your-website | 53.9% | MIXED |
| wix-migration-cost | 54.1% | MIXED |
| elementor-kills-seo | 56.0% | MIXED |
| divi-theme-slow | 56.4% | **GOOD CUT** |
| how-to-cut-saas-bill-2026 | 60.2% | MIXED |
| wordpress-plugins-destroy-speed | 61.1% | MIXED |
| custom-website-5000-whats-included | 62.3% | MIXED (leans bad — lost entire CAPI/ad-tracking differentiator) |
| wordpress-killer | 63.9% | **GOOD CUT** |
| agentic-browsing-pagespeed-score | 78.0% | CLEAN |
| cloudflare-emdash-wordpress-replacement | 81.2% | CLEAN |
| aeo-playbook-built-into-every-website | 83.2% | CLEAN |
| aeo-web-performance-glossary | 85.2% | CLEAN |
| why-is-my-website-loading-so-slow | 85.7% | CLEAN |
| build-vs-buy-software-2026-cost-comparison | 89.9% | CLEAN |
| shopify-store-speed-optimization | 90.7% | **NEEDS ATTENTION** (lost a sourced 2026 benchmark section despite stable length) |
| will-migrating-hurt-my-seo | 93.1% | CLEAN |
| best-website-builder-for-gohighlevel-agencies | 93.4% | CLEAN |
| leaving-webflow-2026 | 99.7% | CLEAN |
| nextjs-hosting-zero-cost | 104.0% | CLEAN |
| how-to-migrate-wordpress-to-nextjs | 107.1% | Not re-verified (July 23 batch) |
| google-march-2026-update | 111.4% | Not re-verified (July 23 batch) |

*(`nextjs-sanity-stack` omitted — new article added this session, not part of the remediation baseline.)*

---

## Questions for the process that did this work

1. For each MIXED/BAD CUT article, was the length reduction actually required to remove the flagged claims, or is "rewrite the whole article" the default method regardless of how load-bearing the flagged claims were? The 9 GOOD CUTs prove targeted, minimal-collateral-damage fixes are achievable — why weren't they applied consistently?
2. Verified, real, first-party evidence (Panda Patches, MyCustomPatches case studies; live Meta Events Manager screenshots) was repeatedly deleted in the same pass as genuinely fabricated claims, even in articles where *other* real evidence was correctly kept and just re-hedged. What's the actual rule being applied for "keep and re-caption" vs. "delete entirely"?
3. Well-sourced third-party citations (Deloitte, NNGroup, DebugBear, TechCrunch/Patchstack, Google's own web.dev case studies) were deleted alongside unsupported claims sitting next to them. Citations aren't claims — why were they treated as equally risky?
4. Is there a plan to restore the practical, non-risky content that's now missing corpus-wide: timeline tables, named tool/vendor lists, decision frameworks, "Key Takeaways" recaps, "Related Reading" internal links — none of which carry claim risk?
5. Several of the worst-hit articles were flagged in the original `BLOG_ARTICLE_AUDIT.md` as high-GSC-impression "critical preservation" routes. Was search-traffic risk from this scale of content reduction weighed against the claim-accuracy benefit?
6. The project's own rule (`BLOG_CLAIM_DECISION_LEDGER.md`) caps unapproved reduction at 5%. 72 of 77 articles now exceed it, some by 15-20x. What's the reasoning for treating claim-accuracy remediation as an exception to that rule?

---
---

# Part 2 — Non-blog pages

> **Correction notice, 2026-07-27 (post-rebuttal).** Codex challenged this section and was right on three points. They are corrected in place below and listed here for transparency:
>
> 1. **The 90+ offer was not erased.** The original claim ("216 → 20 mentions, survivors are negations") was a measurement artifact — the grep pattern `90+ pagespeed` treats `+` as a literal in basic grep, and the site says **"90+ Lighthouse"**. The offer is present and properly scoped on `/pricing` in six places. The corrected, narrower finding is about *prominence*, not erasure.
> 2. **`/work` is not proof-free.** It retains two owner-confirmed evidence blocks with dated figures. The original wording was written from a partial read of the file. The real loss is the four detailed case-study routes.
> 3. **`lastModified` was not removed from every route.** Blog entries still emit it conditionally; only static routes lost it, and Google ignores `lastmod` it judges unreliable, so the removal was defensible.
>
> Also conceded: `llms.txt` was overstated as a "core AEO asset" (Google Search does not use it); `telephone`/`geo` **are** identity/location assertions and do carry claim risk; the Yandex tag cannot be re-added without a valid token; `sameAs` should be restored selectively, not wholesale. The root cause of all three errors was the same one this document criticises: **asserting from a partial read.**
>
> **Fourth error, found during the 2026-07-28 restoration pass (Part 1, not Part 2).** The `shopify-app-costs-real-monthly-bill` entry in the BAD CUT table claimed Codex removed a *"zero risk, purely useful"* billing warning. That was wrong — the warning was **factually backwards**, and removing it was correct. Details in the table entry itself. This one matters beyond the single article: it means the **"12 BAD CUTs" count is soft**. Each of the remaining entries needs the same verification before its content is restored, because at least one classification was made by comparing what was removed rather than checking whether the removed text was true. A blind `git checkout` of these articles would have republished a false statement about a named company's billing terms.
>
> **Method change adopted for the restoration pass:** no article is restored by reverting. For each one, the removed content is checked against primary sources first; only content that is both non-risky *and* accurate is merged back into the claim-corrected version. Figures that cannot be verified are restored as attributed ranges or omitted entirely rather than reasserted.

**Date:** 2026-07-27
**Scope:** every changed file outside `src/app/blog/` — homepage, `/partners`, all 9 `/services` routes, `/work`, `/about`, `/ai-info`, `/pricing`, `/contact`, `/manifesto`, legal pages, `src/components/`, `public/` assets, and site-wide config (`layout.tsx`, `sitemap.ts`, `next.config.js`, `llms.txt`).
**Method:** same as Part 1 — `git diff HEAD` per file, read the actual removed prose (not just headings), classify each removal as legitimate claim-safety or collateral damage. Additionally verified objective breakage: dangling references to deleted files, redirect coverage for deleted routes, orphaned components, and a full TypeScript typecheck.

---

## Headline numbers

**Non-blog aggregate: +7,778 / −20,623 lines = net −12,845 lines.** Proportionally a deeper cut than the blog corpus, applied to the pages that carry the commercial funnel.

| Surface | HEAD | Now | |
|---|---:|---:|---|
| Homepage rendered sections | 15 | 6 | −60% |
| `/partners` (`PartnersContent.tsx`) | 367 | 92 | −75% |
| `/services` hub (`PageContent.tsx`) | 478 | 95 | −80% |
| `/services/wordpress-migration` | 706 | 34 | collapsed into shared template |
| `/services/woocommerce` | 699 | 34 | collapsed into shared template |
| `/services/ecommerce` | 761 | 211 | −72% |
| `/work` (`WorkPageClient.tsx`) | 370 | 181 | −51%, all 4 case studies deleted |
| `/about` | 356 | 215 | −40% |
| `/ai-info` | 525 | 316 | −40%, plus 5 subpages deleted |
| `/contact` | 510 | 353 | −31% |
| `/manifesto` | 235 | 129 | −45% |
| `/pricing` | 584 | 522 | −11% |
| `public/llms.txt` | 964 | 30 | **−97%** |
| ~~`90+ PageSpeed` / `guarantee` mentions~~ | ~~216~~ | ~~20~~ | **RETRACTED — bad regex.** The offer survives, properly scoped, on `/pricing`. See correction notice. |
| Files containing `FAQPage` schema | 99 | 78 | −21 |

**9 pages were deleted outright:** `/work/panda-patches`, `/work/mycustompatches`, `/work/enterprise-ops`, `/work/panda-codelab`, and all five `/ai-info` subpages (`case-studies`, `competitor-comparison`, `migration-services`, `pricing-and-guarantees`, `team-and-company`). Their directories exist but are empty.

**Reading:** the same pattern as Part 1, with the same split. The technical, legal, and consent work is genuinely good and should not be rolled back. The commercial content reduction went well past claim safety and removed first-party proof, entity signals, and the core offer.

---

## GOOD — keep these, do not roll back

| Change | Assessment |
|---|---|
| **301 redirects for all 9 deleted routes** (`next.config.js:44-92`) | Every deleted URL is caught with `permanent: true`. No 404s, no dangling internal references anywhere in the codebase. Verified by grep. This was done properly. |
| **Consent layer added** (`layout.tsx`) | `ConsentProvider` + `CookieConsent` + `ConsentManagedServices` now gate analytics. Vercel Analytics was previously loaded unconditionally — a real GDPR/ePrivacy exposure. Correct fix. |
| **`Review` schema removed from homepage** | Correct and non-negotiable. Self-serving `Review` markup about your own `Organization` violates Google's structured-data guidelines. The "James Peace" review also advertised a **$300 website** against a $1,500 published floor — a live pricing liability. |
| **Homepage `metadata` export added** | Canonical, OpenGraph, and Twitter tags now set at page level rather than inherited. Genuine improvement. |
| **`founder[]` added to Organization schema** | Both founders named with job titles. E-E-A-T gain. |
| **SocialProof reduced to linked, verifiable reviews** | Cut from 4 reviews to 2, each linking to its live Trustpilot source. Unverifiable Clutch/GoodFirms counts and platform rating badges removed. Defensible. |
| **New trust surfaces** | `SECURITY.md`, `/security`, `/editorial-policy`, `public/.well-known/security.txt` are all net-new and appropriate. |
| **Typecheck** | `tsc --noEmit` exits 0. The refactor is technically clean. |

---

## BAD — overcorrection, restore these

**1. All four `/work` case studies deleted. The single worst change on the site.**
Removed content included the Panda Patches record: *$38K → ~$50K/mo on ~$55/mo tooling (Supabase ~$25, Vercel ~$20, ~$10 AI generator), Next.js / Sanity / Supabase / Square, real-time pricing calculator, 7-agent sales dashboard*; the MyCustomPatches migration (*3.2s → under 1s, $150/mo → $0/mo hosting, ~22 days, rankings held*); and the enterprise-ops platform build.

Panda Patches is **owned by co-founder Imran Raza Ladhani** (PandaCodeGen built the platform but holds no ownership stake — this was stated incorrectly on the live page as "owned by PandaCodeGen" and has since been fixed). Owner permission is trivially obtainable, and per this project's own brand-canon records these figures are authoritative. The unverifiable-claim rationale does not apply.

**Corrected scope of the loss:** `/work` does retain two owner-confirmed evidence blocks with dated figures (MyCustomPatches 3.2s→0.7s, 45→90+, $150→$0, 22 days; Panda Patches $7,000+ tagged orders, ~10.4% additional Lead events, 9.0/10 EMQ), each with a limitations note. The earlier wording "a proof page containing no proof" was written from a partial read and is withdrawn. What was actually lost is the four detailed routes: the narrative, architecture, stack detail, screenshots, and client testimonial. This is still the same pattern flagged as cross-cutting issue #1 in Part 1, on the page whose entire job is proof — but it is depth loss, not total loss.

**2. `sameAs` stripped from Organization schema — 14 entity links.**
LinkedIn (company + personal), GitHub, Clutch, Trustpilot, GoodFirms, Crunchbase, DesignRush, Sortlist, F6S, Sanity Exchange, Behance, dev.to, Reddit. A `sameAs` entry asserts *that a profile exists*, not anything about its ratings — it is the primary Knowledge-Graph entity-disambiguation signal. Removing it is not claim safety, and it directly contradicts the entity/semantic-triples strategy the site is built on.

**3. The homepage answer-first `data-speakable` summary paragraph is gone.**
This was the extractable passage deliberately placed in the citation zone (first 30% of the page) — the most AEO-load-bearing element on the site, and the thing the site's own AEO playbook article tells readers to build.

**4. Homepage FAQ block deleted** — 6 Q&As, roughly 1,100 words of intent-matched answer content, plus the `FAQPage` schema. FAQ *rich results* are deprecated; the underlying content still feeds AI Overviews and AI-engine extraction. Site-wide, 21 files lost `FAQPage`.

**5. The 90+ target lost its prominence — but the offer itself is intact and better scoped.** *(Corrected — the original version of this item claimed the offer was "effectively erased". That was wrong, caused by a faulty grep. Retracted.)*

`/pricing` carries the commitment in six places, correctly qualified: 90+ Lighthouse on mobile **and** desktop, named representative pages, three recorded passing runs per page/profile, stated test conditions, refund terms per the accepted written scope. That is a **stronger** formulation than the pre-remediation version and should be kept as written.

The real finding is narrower: the target no longer appears on the homepage or any service page, so a prospect meets the site's only risk-reversal late in the funnel, if at all. The fix is to surface the existing, properly-scoped `/pricing` language upstream — not to rewrite it.

**6. Homepage cut from 15 sections to 6.**
Removed: `UnfairAdvantage`, `WhoWeHelp`, `AIPowered`, `RevenueCalculator`, `FounderSection`, `AntiAgency`, `TierQuiz`, `HomeFaqSection`, and the speakable summary. `RevenueCalculator` and `TierQuiz` were lead-qualification tools — conversion paths, now deleted files. `FounderSection` was visible E-E-A-T. Current homepage is Hero → TrustLogoBar → SocialProof → ServicesHub → HowItWorks → LatestBlog.

**7. `/partners` reduced to a legal notice (367 → 92 lines).**
Removed: the mutual-NDA process, the white-label invisibility model, the 4-step delivery flow, the invoicing/margin explanation, the tech stack, start timelines, post-launch change policy, and 8 FAQs — plus the `QuoteModal` CTA and `PricingTiers`. Almost all of that is **process description, not claims**. "We sign a mutual NDA before you send client details" carries no claim risk. The page now closes on *"Website content is not a partner agreement."* No agency owner converts off that. (Removing the published 15/35/50 rates and the "3-week average build time" was correct.)

**8. `/services/wordpress-migration` and `/services/woocommerce` collapsed into one shared template.**
Both are now ~34-line prop objects feeding `MigrationLanding.tsx`. `wordpress-migration` is the **highest-priority commercial route in the sitemap (0.9)** and the platform the whole brand is positioned against. The two pages now share an identical section skeleton and at least one verbatim identical string (*"Field and lab performance by representative template"*). That is thin/duplicate-content risk on the most important money page. Both also lost their `QuoteModal` conversion path.

**9. `public/llms.txt` cut 964 → 30 lines (−97%).** A core AEO asset reduced to a 7-link nav stub. The replacement is honest and well-written, but it is a fraction of the entity and fact surface.

**10. `sitemap.ts` lost `lastModified` on every route.** `<lastmod>` is a real crawl-scheduling signal and feeds IndexNow. Pure signal loss with no liability upside.

**11. Local/entity signals removed:** `telephone`, `geo`, `areaServed`, `potentialAction` (SearchAction), `speakable`, and the entire `ProfessionalService` / `LocalBusiness` node with `hasOfferCatalog` and `priceRange`. `knowsAbout` cut 16 → 6 entries; `serviceType` cut 6 → 2.

**12. Yandex verification file deleted** (`public/yandex_059f4080fe1cdf8a.html`) with no replacement meta tag in `layout.tsx`. Yandex Webmaster verification will break on next re-check.

**13. Orphaned code left behind.** `src/components/home/WhoWeHelp.tsx` and `src/components/home/HomeFaqSection.tsx` are now referenced by zero files.

**14. Brand voice replaced with compliance boilerplate.**
Representative new sentence, from the `/services/wordpress-migration` summary:

> "PandaCodeGen scopes WordPress migrations around the content model, URL inventory, forms, integrations, analytics, consent, accessibility, performance, security, editorial workflow, cutover, rollback, and ownership."

A 13-noun list in one sentence. Every service FAQ answer now opens with "No." The prose is accurate and unreadable, and it is not the voice on any page a customer previously converted from.

---

## Cross-cutting patterns, Part 2

1. **Identical to Part 1 pattern #1:** verified first-party evidence was deleted alongside unverifiable evidence. Panda Patches and MyCustomPatches appear in the Part 1 findings for the same reason — this is now confirmed as corpus-wide, not article-specific.
2. **Entity/schema signals were treated as claims.** `sameAs` links, `telephone`, `geo`, and `lastModified` carry no claim risk whatsoever. Removing them is indistinguishable from an SEO downgrade.
3. **Conversion paths were removed as a side effect,** not as a decision: `QuoteModal` dropped from `/partners`, `/services/wordpress-migration`, `/services/woocommerce`; `RevenueCalculator` and `TierQuiz` deleted outright. No claim was attached to any of them.
4. **Disclaiming replaced selling.** The site now argues against its own offer in ~20 places. A guarantee that exists contractually but is denied on the website is worse than either stating it properly or not mentioning it.
5. **The technical execution is, again, excellent.** Redirects are complete, consent is correct, typecheck is clean, new security/editorial surfaces are appropriate. As in Part 1: the problem is *scope*, not *competence*.

---

## Proposed restoration list, Part 2

Targeted restore, not rollback — same shape as the Part 1 remedy:

*(Revised 2026-07-27 after the corrections above. Items for `telephone`/`geo`, the Yandex tag, blanket `sameAs` restoration, and rewriting the 90+ offer have been dropped or narrowed.)*

1. **Rebuild** the four `/work` case-study routes with dated sources, ownership disclosure, and limitations — not a git revert of the old copy. Remove their four redirects.
2. **Surface** the existing `/pricing` 90+ language on the homepage and service pages. Do not rewrite it; it is already correct.
3. Restore the homepage speakable summary paragraph and the FAQ block; `FAQPage` schema optional, visible content mandatory.
4. Restore `sameAs` **selectively** — only profiles PandaCodeGen controls and that currently resolve. Restore `areaServed` as "United States first, worldwide engagements considered." Leave `telephone` and `geo` out until a real public business number exists and the address question is settled (Austin is a mailing address; `LocalBusiness` + `geo` would misrepresent it).
5. Rebuild `/partners` process and conversion content minus the 15/35/50 rates and the "3-week average" claim. The NDA, white-label, handoff, and margin process is safe to state.
6. Add unique commercial depth to `/services/wordpress-migration` and `/services/woocommerce`. Sharing layout code is fine; sharing rendered substance is not.
7. Restore `RevenueCalculator` / `TierQuiz` or replace their conversion function deliberately; restore `QuoteModal` on the three pages that lost it.
8. Delete the two orphaned components. **Do not** re-add a Yandex tag — the old token was unverified and a replacement requires a valid credential from the current Webmaster property.
9. Expand `llms.txt` with **verified facts only**. Do not restore length for its own sake; Google Search does not consume this file.
10. Add truthful, automatically-maintained `lastModified` for static routes rather than restoring hardcoded dates.
11. **Preserve the homepage AI-citation positioning.** `GSC_TRACKER.md` records the homepage as the site's #1 converter at 7.5–7.8% CTR / position ~4.9 — roughly 37× the site-wide average — and attributes it explicitly to the "Get Cited by AI Search" angle. The claim is also well-evidenced (four GSC-flagged AI Overview breakouts, one traced paid client, a captured chatgpt.com referrer). Reframe it from an outcome promise to a capability claim with the evidence attached; do not replace the keyword.

---

## Questions for the process that did this work, Part 2

1. `/work` existed to show proof. After the pass it contains no project outcomes at all, only a description of the standard by which outcomes would be published. Was replacing the evidence with the evidence *policy* the intended end state, or a staging step with restoration planned?
2. Panda Patches is owner-operated by a co-founder. What prevented "keep the figures, state the ownership relationship, add the limitation" — the exact treatment applied correctly to `fix-meta-ad-tracking-2026` in Part 1?
3. `sameAs`, `telephone`, `geo`, and sitemap `lastModified` carry no claims. On what basis were they removed in a claim-safety pass?
4. The 90+ PageSpeed guarantee is a contractual offer the business actually makes. Was the decision to remove it a legal review conclusion, or a side effect of the absolute-language sweep? If the former, the written offer itself needs changing too, not just the website.
5. `/services/wordpress-migration` is the highest-priority commercial route in the sitemap. Was the duplicate-content risk of templating it against `/services/woocommerce` assessed before the collapse?
6. Four conversion components were deleted and `QuoteModal` was dropped from three pages. Was funnel impact weighed, or were these incidental to section removal?
7. The same 5%-without-approval rule from `BLOG_CLAIM_DECISION_LEDGER.md` — does it apply to static pages? If so, the homepage (−60% of sections), `/partners` (−75%), and `/services` hub (−80%) all exceed it by a wide margin without individual approval.
