# Questions for the CRM repo — to make the Enterprise Ops case study canon

**Who this is for:** the assistant working in the Panda Patches CRM / operations repo.
**What it is for:** `pandacodegen.com/work/enterprise-ops` publishes about 30 numeric
claims about your repo. None of them is declared in our single source of truth, so none
is checked by our build. We are moving every one of them into
`src/data/case-study-facts.json`, where a claim either carries a method or is withdrawn.

**Ground rules, please read before answering.**

1. **Answer from the repo and the records, not from the marketing page.** Several
   questions below quote what the page currently claims. That is context, not the answer.
   If the repo says something different, the repo wins.
2. **"I don't know" and "that was an estimate" are correct answers.** They are more
   useful than a reconstructed number. Anything without a method gets withdrawn from the
   site, which is a fine outcome. Do not work backwards to justify a published figure.
3. **Give the measurement period and the date** for anything that is not a simple count
   of what exists today.
4. **Say who measured it** — a script, a person, a commissioned reviewer, an estimate by
   the founders.
5. Where a number is a count of things in the repo, **say where you counted** (path,
   table, directory) so we can recount later without asking again.

---

## Section A — counts you can take directly from the repo

For each: the current number, the number today, and where you counted. If the page's
number was never right, say so.

| # | Page currently claims | Question |
|---|---|---|
| A1 | 23 staff routes | How many distinct authenticated app routes exist today, and where is the route table defined? |
| A2 | 8+ reporting modules | How many reporting modules are there today, and what are their names? The page lists Sales, P&L, Income Statement, Product Mix, Attribution. |
| A3 | 20 Supabase Edge Functions | How many Edge Functions are deployed today, and what are their names? |
| A4 | 13 order statuses | How many statuses does the order pipeline have today? The page shows 9 by name (NEW_ORDER, IN_PRODUCTION, QUALITY_ASSURANCE, SHIPPED, DELIVERED, REMAKE, CANCELLED, REFUNDED, FEEDBACK) but claims 13. What are the other four, or is 13 wrong? |
| A5 | 3 roles · 11 granular JSONB permissions | How many roles and how many permissions exist today? We are told DIGITIZER and PRODUCTION SUPERVISOR are new, so 3 is presumably stale. |
| A6 | 10 DB migrations | How many migrations are in the repo today? |
| A7 | 3 database views (`orders_with_details`, `sales_agent_reports`, `active_attendance_sessions`) | Still three, still those names? |
| A8 | 100% TypeScript, zero implicit `any` | Is `strict` on, is `noImplicitAny` on, and does the build currently pass with zero implicit `any`? A one-line `tsc` result is enough. |
| A9 | Row-Level Security on every table | Is RLS enabled on **every** table today, or on most? If there are exceptions, name them. |
| A10 | Attendance: PKT (UTC+5), 5AM business-day cutoff, 10-hour auto-clockout | Are all three still exactly these values? |
| A11 | Square and Stripe payments, Meta CAPI, Sentry APM | All still live in production today? |

---

## Section B — the measured business claims

**These are the ones that cannot stay on the site without a method.** They are the four
headline stat cards and the before/after table. Each needs a denominator, a period, and
a measurer.

### B1. "95% Process Automation" — sub-label "was near-zero manual processes"

This is the single most-repeated claim about your repo. It is in the page title metadata,
the OG description, and a headline stat card.

- 95% **of what?** What is the denominator — a list of business processes, a count of
  tasks, hours of manual work, something else?
- Is there a **written inventory** of those processes anywhere in the repo or in a doc?
  If yes, where, and how many items does it have?
- Over what **period** was the before/after measured, and by whom?
- Was this measured, or was it a founder's estimate of how much of the day-to-day now
  runs without manual steps? **Estimate is an acceptable answer** — we will publish it as
  an estimate or withdraw it.

### B2. "10× Efficiency Gain" — sub-label "team of 7, one platform"

- 10× **on what axis?** Throughput, orders handled per person, time to complete a task,
  reports produced?
- What was the before value and the after value, over what period?
- Who measured it, and is there a record?
- Is "team of 7" still the headcount today?

### B3. "9.0/10 Developer Rating" — Code 9.4 · Arch 9.3 · UX 9.0

The page qualifies this deep in the body as *"an internal senior-developer code review
[that] was commissioned by us"*, but the headline stat card carries no qualifier.

- **Who** performed the review — name or role, and their relationship to PandaCodeGen
  (employee, contractor, independent)?
- **When**, and against **what rubric**? Is the rubric written down?
- Is the review document still in the repo or anywhere retrievable? Path, please.
- Was the reviewer told the desired outcome, or was it blind?

### B4. The before/after table

| Claim on the page | What we need |
|---|---|
| "7 spreadsheets → 1 platform" | Is 7 a counted list? Can you name them? |
| "10+ hrs saved weekly" | Measured how, over what period, by whom? |
| "Monthly reports took 20 hours to compile manually" | Where does 20 come from? |
| "Google Sheets: 8 hrs/wk" | Same question. |
| "Separate CRM: $50/mo" and "Manual attendance tracking: $30/mo" | Are these actual invoiced amounts, and for which months? |
| "Decisions that took 30 minutes now take 1 click" | Is 30 minutes measured or illustrative? |
| "Zero version conflicts" | Is this observed since launch, or expected-by-design? |
| "7 team members editing the same Google Sheet" | Still the right historical number? |

### B5. Pricing claim

The page's FAQ says a comparable custom dashboard *"typically starts at $10,000 to
$25,000 depending on the number of roles, data tables, and automation"*. Is that a
PandaCodeGen price, a market observation, or an estimate? If it is a market figure, what
is the source?

---

## Section C — what has changed since the page was written

The page was last modified 10 August 2026. You have since added, at least: **DIGITIZER**
and **PRODUCTION SUPERVISOR** roles, new transactional emails, a thread-count chart, and
production sheets.

- C1. What is the **full list** of what has shipped since 10 August 2026?
- C2. For each new role: what can it see and do, and did it change the permission count?
- C3. The new emails — what triggers each one, and did they add Edge Functions?
- C4. The **thread count chart** — what does it actually count, and where does that data
  come from? We want to describe it accurately rather than guess from the name.
- C5. **Production sheets** — what is the artefact, who uses it, and what did it replace?
- C6. Is anything on the current page now **wrong** rather than merely out of date? Those
  matter most; we will correct them first.

---

## The shape an answer should come back in

So it can go straight into our canon. One block per claim:

```json
{
  "id": "process-automation",
  "label": "Process automation",
  "value": "95% of the 40 processes in the July 2026 inventory",
  "status": "verified",
  "method": {
    "kind": "record",
    "date": "2026-07-14",
    "note": "Counted against the process inventory at docs/process-inventory.md; before/after measured over June-July 2026."
  },
  "approvedBy": "Imran Raza Ladhani",
  "approvedDate": "2026-07-14"
}
```

- `status` is **`verified`** or **`withdrawn`**. There is no third option, and no
  "pending" — a claim we cannot source comes off the site until it can be sourced.
- `method.kind` is **`record`** (something written down: an inventory, an invoice, a
  commit, a review document) or **`field`** (an observation made in a running system:
  a dashboard reading, a monitored window).
- `method.note` must say what was counted and over what period. "Measured internally" is
  not a method.
- A `withdrawn` metric needs no value — just tell us it cannot be sourced and why, and we
  will render the withdrawal note instead of the number everywhere at once.

## What we will do with the answers

Every number moves into `case-study-facts.json` and the page renders from there, so it
cannot drift again. Anything that comes back without a method is withdrawn from the page,
the metadata, the OG description and the schema in one change.

We would rather publish six numbers we can defend than thirty we cannot. This project is
founder-affiliated and already carries that disclosure, so the bar for its evidence is
higher than for independent client work, not lower.
