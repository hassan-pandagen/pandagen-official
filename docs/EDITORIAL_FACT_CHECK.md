# Editorial fact-check workflow

This workflow implements the public editorial policy and the claims register.
It is a release control, not proof that a statement is correct merely because it
appears in the repository.

On 2026-07-21, all 76 existing article routes received a high-risk remediation
pass. Unsupported PandaCodeGen prices, guarantees, customer outcomes, rankings,
AI-citation promises, personal/company assertions, and unsourced comparative
figures were removed or replaced with evidence-oriented guidance. That pass is
complete; it does not replace a per-assertion source ledger for mutable facts.

## Per-article ledger

For every material assertion, record:

- exact claim and page/section;
- classification: primary-source fact, first-party result, estimate, opinion, or commercial term;
- primary source URL and an internal archived snapshot where licensing permits;
- publication/event date and the date checked;
- plan, version, region, currency, tax, sample, device, percentile, or other material scope;
- calculation and source data for derived numbers;
- wording limitations and correlation-versus-causation treatment;
- owner, reviewer, next review date, and withdrawal trigger;
- permission record for client identity, result, testimonial, screenshot, logo, or personal data.

Do not place confidential evidence or personal data in the public repository.
Store a durable ticket or evidence reference instead.

## Review cadence

| Content | Maximum interval |
|---|---:|
| Prices, plan limits, active incidents, current-year news | 30 days |
| Competitor comparisons and product capabilities | 90 days |
| Market data and performance benchmarks | 90 days |
| Legal, privacy, security, and platform-policy guidance | On change and at least 90 days |
| Stable technical explanations | 12 months or on source change |
| First-party case studies | On methodology/result change or permission withdrawal |

An automated reminder does not replace the review. If a material claim cannot
be reverified, qualify or remove it. Do not change a date while leaving the old
facts untouched.

## Release gate

1. High-risk claims map to an approved entry in `docs/CLAIMS_REGISTER.md`.
2. Metadata, visible copy, FAQ content, structured data, images, and social copy agree.
3. Commercial terms match the approved rate card and signed-contract templates.
4. Lab and field performance are distinguished.
5. No ranking, citation, revenue, conversion, security, availability, or universal score is guaranteed.
6. The article has one primary intent and does not exist only to duplicate another page.
7. Internal and external links resolve, and redirected internal links are updated.
8. The reviewer records approval and the next review date.

## Ongoing backlog

The legacy high-risk sanitization pass is complete. Article-level source ledgers
remain ongoing release work, especially for current-year news, vendor plans and
policies, security incidents, laws, market data, performance/conversion research,
and named comparisons. Do not renew a date without rechecking the underlying
fact, and do not restore a commercial or first-party result claim without the
evidence and permission required by `docs/CLAIMS_REGISTER.md`.
