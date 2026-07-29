# MIXED article review log

**Started:** 2026-07-28
**Method:** Read each article in full against its HEAD version. No grep-based classification, no structural shortcuts. For every removed passage, decide: was it (a) accurate and non-risky, therefore restore; (b) inaccurate or unsupportable, therefore correctly removed; or (c) accurate but stale, therefore restore with current verification.
**Why:** the Part 1 review classified these 41 articles as MIXED by reading diffs rather than checking facts. That method produced a 4-of-12 error rate on the BAD CUT list. These are being re-done properly.

**Rule adopted:** nothing is restored because it was removed. It is restored because it is true, useful, and non-risky. Any figure that cannot be verified is either attributed, reframed as a range, or omitted.

---

## Order of work

Priority is fresh GSC traffic (Apr 26 – Jul 25 2026), highest value first, because that is where a real loss costs the most.

## Status key

- **DONE** — read in full, decision made, changes applied and verified
- **NO CHANGE** — read in full, nothing was genuinely lost, no action correct
- **PENDING** — not yet read

---

## Log

| # | Article | Impressions | Clicks | Status | Finding |
|---:|---|---:|---:|---|---|
| 1 | webflow-user-accounts-sunset-date-2026 | 5,500 | 2 | **DONE** | Partly valid. Rewrite was accurate and well-sourced but abstract. Restored 3 genuine losses. Rejected the SaaS pricing table and expired discounts. 335 → 395 lines. |
| 2 | wordpress-migration-cost | 1,836 | 1 | **DONE** | Partly valid. Rewrite was strong on process but had no buyer-protection or anti-sales content. Restored both. Rejected market pricing tiers and ROI math. 348 → 412 lines. |
| 3 | top-nextjs-agencies-2026 | 917 | 1 | **DONE** | MIXED label largely wrong — rewrite is exemplary. Restored selection methodology + pricing-model difference. Rejected competitor ratings, minimums, jurisdiction and refund-comparison claims. 400 → 438 lines. |
| 4 | shopify-dawn-theme-slow | 830 | 6 | PENDING | |
| 5 | how-much-does-a-website-cost | 377 | 2 | PENDING | |
| 6 | meta-conversions-api-setup-cost | 184 | 4 | PENDING | |
| 7 | shopify-conversion-rate-speed-fix | — | — | PENDING | |
| 8 | shopify-slow-losing-sales | — | — | PENDING | |
| 9 | shopify-vs-custom-website | — | — | PENDING | |
| 10 | shopify-headless | — | — | PENDING | |
| 11 | shopify-plus-still-slow | — | — | PENDING | |
| 12 | squarespace-migration-cost | — | — | PENDING | |
| 13 | squarespace-vs-custom-website | — | — | PENDING | |
| 14 | squarespace-too-slow | — | — | PENDING | |
| 15 | webflow-true-cost | — | — | PENDING | |
| 16 | webflow-vs-custom-website | — | — | PENDING | |
| 17 | wix-migration-cost | — | — | PENDING | |
| 18 | wix-vs-custom-website | — | — | PENDING | |
| 19 | wix-too-slow | — | — | PENDING | |
| 20 | woocommerce-migration-cost | — | — | PENDING | |
| 21 | website-rebuild-cost-2026 | — | — | PENDING | |
| 22 | website-redesign-cost | — | — | PENDING | |
| 23 | website-developer-agency | — | — | PENDING | |
| 24 | how-to-speed-up-your-website | — | — | PENDING | |
| 25 | how-to-fix-slow-wordpress | — | — | PENDING | |
| 26 | how-to-cut-saas-bill-2026 | — | — | PENDING | |
| 27 | core-web-vitals-explained | — | — | PENDING | |
| 28 | why-competitor-outranks-you | — | — | PENDING | |
| 29 | do-you-own-your-website | — | — | PENDING | |
| 30 | elementor-kills-seo | — | — | PENDING | |
| 31 | cheap-web-developer | — | — | PENDING | |
| 32 | custom-website-5000-whats-included | — | — | PENDING | |
| 33 | for-agencies-offer-custom-web-development | — | — | PENDING | |
| 34 | gohighlevel-keep-crm-replace-website | — | — | PENDING | |
| 35 | google-universal-commerce-protocol-what-it-means-for-your-store | — | — | PENDING | |
| 36 | top-custom-web-development-agencies-usa-2026 | — | — | PENDING | |
| 37 | saas-price-increases-2026-tracker | — | — | PENDING | |
| 38 | wordpress-plugins-destroy-speed | — | — | PENDING | |
| 39 | wordpress-april-2026-evidence | — | — | PENDING | |
| 40 | wordpress-vs-custom-code-real-cost-3-years | — | — | PENDING | |
| 41 | what-is-headless-commerce | — | — | PENDING | |

---

## Findings detail

### 1. webflow-user-accounts-sunset-date-2026 — DONE 2026-07-28

**Read:** current file in full, plus the 564-line HEAD version in full.

**Verdict on the MIXED label: partly valid.** The rewrite is genuinely good — it cites Webflow's official sunset article, states verified dates, carries a requirements matrix and a 10-step recovery playbook, and explicitly explains why the old "fixed 14-day recovery" timetable was removed (correct: that timetable was invented). It is accurate. It is also abstract, and three concrete things were lost.

**Restored:**
1. **The June 27, 2025 Webflow Logic sunset.** A verifiable, related deprecation the rewrite dropped entirely. Sites affected by both are facing two gaps, not one.
2. **The three failure modes** — login stopped, member records not carried over, gated pages became public — restored as explained sections rather than a bullet list. Zero claim risk, high diagnostic value. Kept the Stripe-still-charging pairing, which is the commercially urgent one.
3. **The own-versus-rent argument.** The rewrite explained *how* to replace User Accounts but never *why* the replacement choice matters. Restored as a decision frame ("is membership a feature or the business?") rather than as an attack on Memberstack or Outseta.

**Rejected, correctly removed and not restored:**
- The 3-year cost table comparing Memberstack, Outseta and custom (specific SaaS pricing that changes; unverifiable now).
- Named migration discounts ("50% off 12 months plus VIP migration"). Time-limited offers, almost certainly expired. Replaced with generic advice to price on the year-two standard rate.
- The forum-user quote, which was unattributed.
- "90+ PageSpeed guaranteed or full refund" in the About box.

**Result:** 335 → 395 lines. Typecheck and lint clean.

### 2. wordpress-migration-cost — DONE 2026-07-28

**Read:** current file in full, plus the 617-line HEAD version (full section outline and relevant passages).

**Verdict on the MIXED label: partly valid.** The rewrite is genuinely strong on process — tier table, migration inventory, export limits, plugin capability vs count, editorial experience, SEO scope, accessibility, security, schedule drivers, cutover. Its corrections box is also honest about what it removed and why ($1,500/$2,000 floor contradiction, competitor price criticism, payback promises, unreconciled MyCustomPatches figures). All of that was correctly removed.

What it lost was the **buyer-facing half** of a cost article: how to tell a real quote from a cheap one, and when not to buy at all.

**Restored:**
1. **What a cheap quote leaves out** — eight items to check explicitly in any written scope (redirect map vs homepage redirect, reconciliation vs export, page-builder layouts needing rebuild, form handling end to end, editorial experience, analytics/consent continuity, accessibility, launch and rollback). Zero claim risk; it is a checklist for evaluating anyone, including us.
2. **What typically gets added after signing** — framed as the predictable consequence of quoting before inventorying rather than as seller dishonesty, with the instruction to get mid-project scope pricing in writing.
3. **When you should stay on WordPress** — six honest cases for not migrating, including "nobody will own maintenance afterwards", which is the one most likely to make a rebuild fail. This section directly matches the manifesto positioning and its absence was conspicuous in a cost article.

**Rejected, correctly removed and not restored:**
- "The 5 Price Tiers, From $2K Brochure to $25K Store" — unverifiable market pricing.
- "Freelancer at $5K, Agency at $40K, Same Migration" — unverifiable competitor claims.
- "How Do You Calculate Migration ROI?" — payback math; the corrections box explicitly names this as removed, correctly.

**Result:** 348 → 412 lines. Typecheck and lint clean.

### 3. top-nextjs-agencies-2026 — DONE 2026-07-28

**Read:** current file in full, plus the 436-line HEAD version.

**Verdict on the MIXED label: largely wrong.** This rewrite is the best on the site. It carries an explicit commercial disclosure (PandaCodeGen publishes the comparison, is one of the eight, table is alphabetical and non-ranked, nobody paid), names all eight competitors with outbound links, provides a four-column comparison table, and states its method and limits including what was removed and why. It also correctly killed the original's central claim that these were "the agencies most cited by AI engines," which was unverifiable.

**Restored:**
1. **Selection methodology** — the eight came from repeated appearance across public 2026 Next.js roundups (DesignRush, Clutch, GitNation, Design Revision, and two agency-published lists). Restored *with* the caveat that several of those roundups are published by agencies listing themselves, exactly as this page does. That caveat makes it honest transparency rather than borrowed authority.
2. **Exclusion rationale** — restored as *category* differences (enterprise staff augmentation, general consultancies, design-led studios) with no named firms and no pejorative characterisation.
3. **The pricing-model difference** — published fixed tiers versus inquiry-based quoting, presented as two failure modes rather than a superiority claim, ending in the genuinely useful point that quotes differing by 3x usually describe different projects.

**Rejected, correctly removed and not restored:**
- "Every agency in this list has 4.9/5 or 5.0/5 Clutch ratings" — unverified third-party ratings about named companies.
- "Netguru... $50,000+ minimums", "BairesDev (large enterprise body shop)", "Halo Lab (primarily design agency)" — unverified commercial claims and pejorative characterisations of named third parties.
- The geography/US-LLC comparison, including HIPAA BAA execution claims. Also currently inaccurate: the LLC is being re-formed.
- "Only PandaCodeGen publishes a written 90+ PageSpeed refund guarantee" plus "multiple case studies show 90+ scores" for the other seven — a comparative claim requiring verification of seven competitors' contracts.

**Error found in the original:** HEAD listed Netguru as agency #6 *and* named it in "Agencies Not Included and Why." The original contradicted itself.

**Result:** 400 → 438 lines. Typecheck and lint clean.
