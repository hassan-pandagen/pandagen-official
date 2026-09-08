# Production operations runbook

This document defines the repository-side response process. Names, paging
channels, recovery objectives, and provider-specific backup policies must be
completed by the business before the site is treated as fully production-ready.

## Ownership to configure

| Responsibility | Owner | Backup | Status |
|---|---|---|---|
| Production deployment and rollback | Unassigned | Unassigned | Required |
| Security incident response | Unassigned | Unassigned | Required |
| Website/API availability | Unassigned | Unassigned | Required |
| Lead-delivery and Resend reputation | Unassigned | Unassigned | Required |
| Privacy requests and vendor register | Unassigned | Unassigned | Required |
| Search Console and indexing health | Unassigned | Unassigned | Required |

Record an out-of-band contact method for each role. Do not put personal phone
numbers, access tokens, or recovery codes in this repository.

## Service map

- Next.js application and route handlers: primary website and APIs.
- Vercel: expected deployment/runtime platform and request geo headers.
- Redis REST provider: required production rate-limit and anti-replay state.
- Google PageSpeed Insights: upstream dependency for public audits.
- Resend: quote and audit-lead email delivery.
- Optional, consent-gated browser vendors: GA4, Clarity, Vercel Analytics, Meta,
  Cal.com, and Tawk.to.

The per-client limiter trusts only Vercel's `x-vercel-forwarded-for` header when
the runtime sets `VERCEL=1`. Generic forwarding headers are used only in local
development. A non-Vercel production deployment intentionally places clients in
one conservative `unknown` bucket until its proxy and header-overwrite behavior
are reviewed and an explicit adapter is added. Reconfirm this assumption after
any CDN, reverse-proxy, or hosting change.

## First response

1. Confirm the incident time, affected route(s), deployment identifier, region,
   and whether the failure affects browsing, audits, or lead delivery.
2. Preserve relevant platform logs and provider event IDs. Never paste secrets or
   unredacted personal data into issues or chat.
3. Check the latest deployment diff and provider status pages.
4. If a release caused material breakage, promote the last known-good deployment
   or revert through a reviewed commit/PR. Do not rewrite shared Git history.
5. For suspected compromise, restrict the affected endpoint, rotate exposed
   credentials, preserve evidence, and follow the security-reporting process.
6. Record impact, decisions, timestamps, and follow-up owners.

## Common failure modes

### Public audit returns 503

- Confirm the Redis REST URL, token, mode, and HMAC secret are configured.
- Check Redis reachability and command errors. Production intentionally fails
  closed when durable limits cannot be enforced.
- Check the PageSpeed API key/quota only after rate limiting is healthy.
- Do not switch production to the in-memory limiter as an outage workaround.

### Public audit returns 400/502

- A 400 can be an intentional public-network/URL-policy rejection.
- Check PageSpeed response status/quota and bounded-fetch timeout logs for 502s.
- Do not weaken private-address, redirect, port, decompression, or size controls
  to make one target pass.

### Leads do not arrive

- Check the route response and Resend event/delivery status.
- Verify `RESEND_FROM_EMAIL`, `AUDIT_NOTIFY_EMAIL`, domain authentication, and
  inbox filtering.
- Check rate-limit/idempotency logs before retrying; avoid duplicate messages.
- Review bounce/complaint rates and pause a compromised form endpoint if needed.

### Analytics or chat is missing

- First confirm the visitor granted the relevant consent category.
- Check only the selected vendor's configuration and network requests.
- Missing optional analytics must never block forms or core navigation.

### Unexpected third-party requests

- Reproduce with a fresh profile before consent and after each individual choice.
- Disable the responsible integration if it loads outside its category.
- Preserve the request URL, initiator, consent state, route, and deployment ID.

## Recovery and retention decisions still required

Document approved RTO/RPO values and verify, rather than assume, provider backup
and export behavior. At minimum cover source control, deployment configuration,
DNS, Redis configuration, Resend delivery records, analytics properties, consent
vendor settings, Search Console, and the inbox/CRM that is the current lead
system of record. Test a recovery exercise at least annually.

Redis rate-limit and anti-replay keys are disposable controls, not a lead backup.
Email notifications should not be the only long-term customer record once a CRM
is selected.

## Post-incident review

For a material incident, record scope, user impact, data affected, root cause,
detection gap, recovery actions, whether notification duties were assessed, and
preventive tasks with owners and dates. Update tests and this runbook with what
was learned.
