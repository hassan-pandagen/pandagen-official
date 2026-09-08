# PandaCodeGen website

Remediated working copy intended for [PandaCodeGen.com](https://www.pandacodegen.com), built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. A passive audit check on 21 July 2026 found that the live domain still served the older site; this working copy is not represented as deployed or production-verified.

This is a private proprietary repository. PandaCodeGen's primary offer is SEO-safe migration for revenue-generating WordPress, Webflow, and GoHighLevel sites, with custom web engineering available when the migration scope requires it. "SEO-safe" describes the migration controls; search engines, not PandaCodeGen, determine rankings.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4 and Framer Motion
- Pagefind static blog search
- Resend transactional email
- Google PageSpeed Insights for the public technical audit
- Optional, consent-gated GA4, Meta Pixel, Microsoft Clarity, Tawk.to, Cal.com, and Vercel Analytics

## Repository map

```text
src/
  app/                    Routes, metadata, policies, services, blog, and APIs
    api/audit/            Website analysis and opaque-token email summary
    api/submit-quote/     Text-only quote request handler
    editorial-policy/     Public evidence and corrections standard
    security/             Public security information
  components/
    audit/                Audit widget, results, and email dialog
    consent/              Granular default-deny consent controls
    layout/               Header and footer
    services/             Shared migration/service components
    ui/                   Forms, dialogs, search, and other primitives
  data/                   Blog and internal topical relationships
  hooks/                  Privacy-safe form funnel instrumentation
  lib/
    audit/                SSRF policy, rate limits, tokens, and audit scoring
    forms/                Quote request validation
  proxy.ts                Response security headers
docs/
  audit-2026-07-20/       Audit, remediation status, and rescoring
  operations/             Performance, release, and incident runbooks
```

The `/work` route publishes the evidence standard used before project results are released. Detailed case studies and personal profiles are withheld until the facts, permissions, and owner record are confirmed.

## Local development

Prerequisites: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy [`.env.example`](.env.example) and configure the services you intend to use. `PAGESPEED_API_KEY` powers the public audit. Production form and audit routes require the durable Redis REST configuration and `AUDIT_RATE_LIMIT_SECRET`; they fail closed when those controls are unavailable.

The public audit accepts only public HTTP(S) sites on ports 80/443. It validates DNS and the connected peer on every redirect and bounds redirects, time, content type, and bytes. The quote route accepts only a small, allowlisted, text-only multipart body. Public uploads are disabled until an access-controlled quarantine and scanning workflow exists.

## Validation commands

| Command | Purpose |
|---|---|
| `npm run check` | Type-check, lint, and run the security-focused tests |
| `npm run build` | Production build and Pagefind index |
| `npm run audit:dependencies` | Query current npm advisories and fail on high/critical findings |
| `npm run smoke:release -- <origin>` | Check routes, hostile origins, headers, retired endpoints, and 404 behavior |
| `npm run seo:check -- --base-url <origin>` | Crawl the sitemap and enforce structural SEO checks |
| `npm run analyze` | Build with the bundle analyzer |

CI runs the relevant static, test, dependency, and build checks. See [SECURITY.md](SECURITY.md) for vulnerability reporting and [docs/operations/RELEASE_CHECKLIST.md](docs/operations/RELEASE_CHECKLIST.md) for release controls.

## Privacy and measurement

Optional browser vendors are default-denied until the corresponding consent choice is granted. Form progress and abandonment events are aggregate GA4 events emitted only after analytics consent; typed values, names, email addresses, phone numbers, and message content are never sent. See [docs/FORM_FUNNEL_ANALYTICS.md](docs/FORM_FUNNEL_ANALYTICS.md).

Code support and owner intent do not prove production activation. Exact vendor identifiers, denied/granted consent-network behavior, Redis/Resend configuration, and end-to-end lead delivery must be verified against the deployed Vercel project without exposing secrets.

Real-user performance should be evaluated with consented LCP, INP, and CLS distributions alongside controlled lab tests. See [docs/operations/PERFORMANCE_BUDGET.md](docs/operations/PERFORMANCE_BUDGET.md).

## Offer and published package terms

The primary call to action is **Get your migration plan**. Published package starting points are:

- Starter: **$1,500**, with 15 business days of included support.
- Growth: **$3,500**, with 30 business days of included support.
- Scale: **$5,000-$10,000**, with 30 business days of included support.

Pages, features, integrations, and other additions are discussed and documented in written project terms accepted by both parties. For a straightforward project, that record may be a concise quote or order summary explicitly accepted in email or chat; regulated or complex work may use a detailed signed proposal, SOW, or master agreement. The published package defaults are 30% at onboarding and 70% at the agreed delivery milestone, plus 15 business days of included support for Starter or 30 business days for Growth and Scale. A project may use different written terms.

When the accepted project terms include 100% contracted-scope protection, PandaCodeGen refunds the fees paid under that scope if it fails to deliver the promised deliverables. The project terms define the trigger, verification, cure process, and work-product consequences; this is not a preference or change-of-mind guarantee. A refund that is due or approved is normally initiated within 2-3 business days, while bank or payment-provider settlement may take up to 10-12 business days. The published performance default is a 90+ Lighthouse target on both mobile and desktop for the agreed representative pages, with all three recorded pre-handover runs for each agreed page/profile passing. Only provisions expressly included in the accepted project terms apply to an engagement.

## Company and claims status

PandaCodeGen was founded in February 2026. Hassan Jamal is Co-founder and Lead Engineer; Imran Raza Ladhani is Co-founder and Lead Architect. The published mailing address is 12250 S Kirkwood Rd, Apt 1128, Stafford, TX 77477, United States; it is not represented as the registered office.

**Entity resolved 24 August 2026.** PandaCodeGen is the trading name of **Panda Group Ventures L.L.C.**, formed in Texas. This supersedes the earlier Wyoming formation and the Austin mailing address, and it closes the long-standing `MC Patches LLC d/b/a PandaCodeGen` versus `PandaCodeGen LLC` conflict in the unsigned SOW: neither was the operating entity. MC Patches LLC is the separate, unrelated entity belonging to an independent client, MyCustomPatches. The legal name is stored once in `src/data/company-facts.ts` and every surface reads from there.

The delivery/acceptance milestone, cancellation and cure process, support start event, and successful-project ownership/licensing timing must be confirmed for each engagement rather than copied from another client. On a full refund, the client keeps its content, data, brand assets, and client-owned accounts, while it receives no right to use unpaid/refunded custom code; PandaCodeGen retains its reusable tools, templates, and pre-existing code. Detailed case-study metrics, cost baselines, testimonial wording, attribution, and permission records also remain pending reconciliation before publication. These unresolved items are tracked in the [claims register](docs/CLAIMS_REGISTER.md) and must be settled in the accepted project terms where applicable.

The current audit and remediation status is in [docs/audit-2026-07-20/AUDIT_REPORT.md](docs/audit-2026-07-20/AUDIT_REPORT.md). This is a proprietary private repository; no public open-source license is granted. Third-party dependencies and assets retain their own license terms.
