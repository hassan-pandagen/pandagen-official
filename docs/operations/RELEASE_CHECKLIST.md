# Release and rollback checklist

## Before merge

- [ ] Claims, prices, guarantees, case-study figures, dates, and schema match the
      approved claims register.
- [ ] The legal contracting entity, privacy controller, signer authority, and
      governing terms have been verified and approved by the responsible owner.
- [x] Repository licensing decision recorded: private proprietary repository;
      no public open-source license is granted.
- [x] Current files were reviewed for customer/order data, personal information,
      secrets, and withdrawn verification tokens; the private-history residual is
      documented and owner-accepted for the current private repository.
- [ ] Reassess and, where required, coordinate history remediation before
      widening collaborator access or making the repository public.
- [ ] `npm ci` succeeds from the lockfile.
- [ ] `npm run check` passes.
- [ ] `npm run build` passes without relying on developer-only secrets.
- [ ] Dependency and secret scans have been reviewed.
- [ ] Changed forms/API routes have success, validation, abuse, replay, and
      upstream-failure tests.
- [ ] Changed UI has keyboard, focus, reduced-motion, 390/768/1024/1440 px, and
      accessibility checks.
- [ ] Changed indexable routes have correct status, canonical, robots, metadata,
      sitemap membership, internal links, and structured data.
- [ ] Search-console/Webmaster verification files belong to an approved,
      monitored account; obsolete tokens and production demo routes return 404.
- [ ] Exact production provider identifiers and operational owners are approved;
      denied and granted consent-network paths are both verified without secrets.
- [ ] No optional vendor loads before its consent category is granted.
- [ ] A rollback owner and last known-good deployment have been identified.

## Preview verification

- [ ] Smoke-test `/`, `/services`, `/pricing`, `/work`, `/blog`, `/contact`, an
      article, legal pages, an unknown URL, `robots.txt`, `sitemap.xml`, and the
      manifest.
- [ ] Submit test quote/audit leads using approved test addresses and remove the
      test records afterward.
- [ ] Verify audit rate limiting and SSRF policies without targeting third-party
      private systems.
- [ ] Check CSP reports and all allowed vendor paths before enforcement changes.
- [ ] Record three mobile and three desktop runs for every agreed representative
      page/profile under the named conditions; every contractual run passes.

## Production verification

- [ ] Confirm the deployed commit/content matches the audited artifact and the
      older broad custom-development/AI-search positioning is absent.
- [ ] Confirm deployment identifier, status, redirects, TLS, and security headers.
- [ ] Confirm one safe lead-delivery smoke test and provider delivery event.
- [ ] Confirm no unexpected 4xx/5xx, Redis, PageSpeed, or Resend spike.
- [ ] Confirm consent withdrawal removes/blocks the corresponding vendors.
- [ ] Annotate monitoring and analytics with the release time.

## Rollback

Rollback when core navigation/forms fail, privacy/security controls regress, data
integrity is at risk, or error rates materially exceed baseline. Promote the last
known-good deployment or submit a focused revert, then repeat production checks.
Preserve the failed deployment and logs for diagnosis; never solve a rollback by
force-pushing or deleting evidence.
