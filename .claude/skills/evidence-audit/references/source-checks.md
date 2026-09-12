# Source checks — full protocol

Expanded reference for pass 2 of `evidence-audit`. Derived from
`docs/evidence-audit/ai-writing-and-wikipedia-research.md` §6, adapted to the pages we actually publish:
platform comparisons, vendor cost guides, migration services.

## The six checks in order

Run them in this order. Each one is cheaper than the next, and a failure early means you
can stop.

### 1. Existence — can the source be located at all?

Search the exact title, then the author plus a distinctive phrase, then the DOI or ISBN.
For a vendor page, search the product name plus "pricing".

| Verdict | When |
|---|---|
| **Exists** | Located at a stable URL |
| **Moved** | Located at a different URL — update our link |
| **Unverified** | Cannot locate after a genuine search |
| **Fabricated** | Author, title and publisher all return nothing, and the claimed venue has no record |

Never jump to *fabricated* from a failed first search. Vendor docs get reorganised
constantly; academic pages move between preprint and published versions.

### 2. Identity — do the bibliographic details agree?

Compare every field we published against the record: title, author, publisher, year, DOI,
ISBN, plan name, tier name.

The failure that matters most for us: **a resolving link to the wrong thing.** A DOI that
opens is not a DOI that matches. Open it and read the title.

For vendor pricing, "identity" means the tier. Citing ACF PRO at $249 when the claim is
about a single site is an identity failure, not a price error — $249 is the unlimited-site
plan and it is real.

### 3. Relevance — is the source about this subject?

A real, authoritative source attached to the wrong sentence is a common defect when
citations get moved during editing. Check that the source addresses the same:

- **entity** (this vendor, this product, not a competitor)
- **period** (this year's pricing, not the 2024 table)
- **population or region** (US pricing vs EUR pricing vs UK inc-VAT)
- **measure** (monthly-equivalent-billed-annually vs month-to-month)

### 4. Support — does it state *this* claim?

**The check that fails most and gets skipped most.** Read the passage. Then compare it to
our sentence word by word.

Ask specifically:

- Does the source state this as fact, or as a possibility, forecast, or someone's opinion?
- Does our sentence widen the scope? (source: "on the Business plan" → us: "on all plans")
- Does our sentence strengthen the verb? (source: "may reduce" → us: "reduces")
- Does our sentence drop a condition? (source: "for supported fixed bundles" → us: "for bundles")
- Has a correlation in the source become a causation in ours?
- Has a tentative single finding become "research shows"?

### 5. Quotation — does the wording match exactly?

Any text in quotation marks must match the source character for character, or be marked as
paraphrase. Check the page or section reference too. Edition and translation differences
are legitimate explanations for a mismatch, but they must be stated.

### 6. Access — does the link resolve today?

Last, and least informative. Record the check date. For anything load-bearing, capture an
archive link. Vendor pricing pages change without notice — the `2026-09-10` and
`2026-09-11` research reports in this repo are correct to model this by dating every
price they quote.

## Alternative explanations — check before escalating

A defect has an innocent explanation more often than not. Rule these out first:

| What you found | Check this before calling it fabrication |
|---|---|
| Source not found | Renamed doc, moved vendor page, preprint vs published version, another edition |
| Metadata disagrees | Transcription error, different edition or printing, author name order |
| Wrong subject | Citation moved during an edit and lost its anchor |
| Claim unsupported | Our overstatement, not their error — fix our wording first |
| Quote mismatch | Translation, paraphrase presented as quote, different edition pagination |
| Link dead | Link rot, paywall, region block, robots exclusion, temporary outage |
| Numbers disagree | Different year, different currency, different tier, annual vs monthly billing |

## Base rates — why "the link opens" is not a check

From the research file, all historical and condition-bound:

| Study | Setting | Finding |
|---|---|---|
| Walters & Wilder 2023 | 636 references across 84 generated papers | 55% of GPT-3.5 and 18% of GPT-4 references fabricated; among real ones, 43% and 24% had substantive errors |
| Linardon et al. 2025 | 33 fabricated references from GPT-4o | 21 shipped with DOIs resolving to unrelated papers |
| Liu, Zhang & Liang 2023 | Four generative search products | 51.5% of generated sentences fully supported; 74.5% of citations supported their sentence |

These are dated experimental conditions, not present-day rates for any current tool. Quote
them only with their year and setting attached. Their use here is to justify the *support*
check, not to characterise any model in use today.

## Worked examples

Adapted to our domain. Each shows the finding and the fix.

**Support failure — scope widened.**
Draft: "Shopify Bundles is free for bundles."
Source: free for *supported fixed bundles and multipacks*.
→ Finding: scope widened. Fix: restore the qualifier.

**Identity failure — wrong tier.**
Draft: "ACF costs $249/year, which a custom build removes."
Source: $249 is the unlimited-site plan; single-site is $49.
→ Finding: tier mismatch inflating the saving. Fix: use the tier the client actually needs.

**Relevance failure — wrong period.**
Draft: "Webflow's CMS plan is $23/month."
Source: a 2024 plan table; current Premium is $25/month billed yearly under the May 2026
pricing change.
→ Finding: superseded source. Fix: re-cite the current page and note the legacy-plan caveat.

**Unsupported synthesis.**
Draft: "The store migrated in March and revenue rose 20% — the rebuild drove the increase."
Sources: a migration date and a revenue figure. Neither connects them.
→ Finding: unsupported causation. Fix: state both facts, drop the causal claim, or get a
source that makes the link.

**Access failure handled correctly.**
Draft cites a vendor PDF that now 404s.
→ Finding: unverified, not fabricated. Fix: find the archived copy, or mark the claim
unverified on the page. Do not silently keep a dead citation.

**A good source in a bad draft.**
A draft with three fabricated citations also cites the real Stripe Billing pricing page
accurately.
→ Keep it. Verify and retain. Contamination elsewhere is not grounds to discard a
legitimate source.

**Working DOI, wrong paper.**
A citation about storefront performance resolves to a paper on classroom attendance.
→ Finding: identity failure. Search for the corrected identifier before declaring the
intended paper nonexistent.
