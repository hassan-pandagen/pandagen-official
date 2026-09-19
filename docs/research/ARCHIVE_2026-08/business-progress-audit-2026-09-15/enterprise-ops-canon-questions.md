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
   useful than a reconstructed number. Do not work backwards to justify a published
   figure. Note what "estimate" means downstream: our canon has two states, `verified`
   and `withdrawn`, and an estimate is not evidence, so it is withdrawn from the site
   rather than published with a softer label. Telling us it was an estimate is still the
   most useful possible answer, because it ends the question permanently.
3. **Give the measurement period and the date** for anything that is not a simple count
   of what exists today.
4. **Say who measured it** — a script, a person, a commissioned reviewer, an estimate by
   the founders.
5. Where a number is a count of things in the repo, **say where you counted** (path,
   table, directory) so we can recount later without asking again. Include the commit
   or revision you counted at.
6. **Separate what the repository contains from what is actually running.** A folder of
   Edge Functions does not prove they are deployed; a migration file does not prove RLS
   is enabled on the production database; a payment integration in the code does not
   prove it is live. Where a claim is about the running system, check the running system
   and say so. Where you can only check the repository, say that instead — both are
   useful, they are just different claims.
7. **This case study describes a system as it was; the system has moved on.** A larger
   count today does not prove the old count was wrong. If you can tell when a number
   changed, say so. Do not treat the page's hardcoded `dateModified` as evidence of
   when the source last changed.

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
  "id": "<SHORT-KEBAB-ID>",
  "label": "<WHAT THE READER SEES>",
  "value": "<THE FIGURE, WITH ITS SCOPE IN THE STRING>",
  "status": "verified",
  "method": {
    "kind": "record",
    "date": "<YYYY-MM-DD YOU CHECKED>",
    "note": "<WHAT WAS COUNTED, WHERE, OVER WHAT PERIOD>"
  },
  "sourceLocator": "<PATH, TABLE, OR QUERY — AND THE COMMIT OR REVISION>",
  "approvedBy": "<WHO IS ANSWERABLE FOR IT>",
  "approvedDate": "<YYYY-MM-DD>"
}
```

Every angle-bracket value above is a placeholder. **Do not copy the shape and leave a
plausible-looking number in it** — an illustrative denominator that gets pasted into canon
is worse than no answer, because it arrives pre-laundered.

- `status` is **`verified`** or **`withdrawn`**. There is no third option, and no
  "pending" — a claim we cannot source comes off the site until it can be sourced.
- `method.kind` is one of four: **`record`** (something written down — an inventory, a
  commit, a review document), **`field`** (an observation of a running system — a live
  query, a dashboard reading, a monitored window), **`invoice`** (a billing document),
  or **`lab`** (a controlled test run under stated conditions). Pick the one that
  describes how you actually know, not the one that sounds strongest.
- A **withdrawn** entry needs its real `withdrawnDate` and `withdrawnReason`. Do not
  invent an approver or a date to fill a field.
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

---

# Round two — invoices, payments, and three claims the first round missed

Added 15 September 2026, after the first round came back. Same ground rules above.
Round one settled the counts; these are the claims the site makes that nobody has
checked yet.

## Section D — the paid invoice email

We have published, on the owner's word, that the platform emails the customer a paid
invoice once payment lands. It is currently the only claim on that page sourced to a
person rather than to your repository, so it is the one most worth closing.

- **D1.** Does a paid-invoice email exist? Give the template id or name and the file it
  is defined in. If it does not exist under that description, say so plainly — we will
  remove the claim rather than soften it.
- **D2.** What fires it? A Square webhook on payment captured, an order status change,
  a manual action, or a cron? Name the trigger.
- **D3.** Does it fire for **every** payment route, or only some? The routes we know of
  are Square checkout, the public payment link at `/pay/:token`, and any payment an
  agent records by hand. If a route is not covered, that matters more than the ones that
  are.
- **D4.** Does it **attach a PDF**, link to a hosted invoice, or render the invoice as
  HTML in the email body? The site lists `@react-pdf/renderer` for "Invoices / PDFs", so
  we would like to know which of those is actually the invoice.
- **D5.** What does the invoice show? Specifically: line items, quantity, unit price,
  tax, shipping, discount or loyalty code, amount paid, and — where a deposit was taken
  — the balance still outstanding.
- **D6.** **Partial payments.** If a customer pays a deposit, does the email say "paid"
  for the deposit, or does it show a balance due? Our published wording is "a paid
  invoice emailed to the customer on payment", and if a deposit produces the same email,
  that wording is misleading and we will change it.
- **D7.** **Refunds and cancellations.** Is anything sent when an order is refunded or
  cancelled after an invoice went out — a credit note, a corrected invoice, nothing?
- **D8.** Who receives it? The customer only, or also the CC email and the company
  contact on B2B accounts?
- **D9.** Is there a **record that it sent** — a log table, a communications row on the
  order, a provider message id? This is the difference between "the system sends it" and
  "the system is supposed to send it". Given that a `send-email` syntax error silently
  blocked two templates for roughly three weeks until it was found, a delivery record is
  the claim worth having.
- **D10.** Currency and tax: is the invoice USD only? Does it show tax for the five
  shipping countries the platform tracks, or is tax handled outside it?

## Section E — the payment history, which is a better story than the current claim

The owner says the business ran **Stripe and PayPal**, then moved to **Square** because it
suited the business better. Our page has just been corrected to say Square only, which is
right for today but throws away the more interesting fact — that a live payment stack was
migrated on a running business without losing orders.

- **E1.** Confirm the history from the repository: were Stripe and PayPal both live in
  production, and roughly when was each removed? Commits, migrations, or deleted
  functions are all fine evidence.
- **E2.** Is there a **cutover record** — the date Square went live, whether the two ran
  in parallel, and whether any orders were taken on both?
- **E3.** Do historical orders still carry Stripe or PayPal payment references, and can
  a refund still be issued against an old one? This is the honest detail a buyer with an
  existing payment processor actually wants to know.
- **E4.** Was anything lost or reconciled by hand during the move — orphaned payments,
  duplicate records, webhooks that had to be replayed?
- **E5.** The reason for moving is the owner's to state, not yours. But if the repository
  shows a **technical** reason (an API limitation, a webhook reliability problem, fees
  encoded somewhere), say what you can see.

> Why we want this: "we migrated a live payment stack from two processors to one without
> losing an order" is a claim with a date, a diff and a reconciliation behind it. That is
> worth more than any of the round-one numbers we just withdrew, and it is the kind of
> evidence the rest of the site is short of.

## Section F — three claims the first round did not ask about

An external reviewer of round one pointed out that a numbers-only review misses claims
that are absolute rather than numeric. These three are on the page now.

- **F1. "Built in 10 weeks."** What are the start and end dates, and what marks each? First
  commit to first production use, or something else? Does the 10 weeks include the work
  shipped since, or only the original build?
- **F2. "Any production issue is caught before the team notices."** This is an absolute,
  and absolutes are hard to hold. What is the actual alerting setup — Sentry alert rules,
  who is notified, how quickly? Has an issue ever reached the team before the monitoring
  did? If so the sentence is wrong as written and we will rewrite it to describe the
  monitoring instead of promising the outcome.
- **F3. "100% TypeScript with zero implicit any."** Round one confirmed `strict: true` and
  a clean `tsc`. Those are not the same claim. Is **all** source TypeScript — any `.js`
  files, any generated code, any `@ts-expect-error` or explicit `any` in the codebase? A
  file-extension count and a grep for explicit `any` settle it.

## One correction to round one, ours not yours

The example JSON we sent contained a realistic-looking denominator — "95% of the 40
processes in the July 2026 inventory" — with an illustrative date and approver. There is
no 40-process inventory; we made the number up to show the shape. That was careless in a
document whose entire purpose is to stop invented figures reaching canon, and the block
now uses angle-bracket placeholders. If round one's answers were drafted against the old
example, check that none of it was carried across.
