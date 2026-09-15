# AI app builders: current capability review

Research date: 16 September 2026. Products: Lovable, Bolt.new and v0. Sources are public vendor documentation, release notes and announcements available on the research date. No paid account, generated test project or customer production application was used. This establishes documented capabilities and changes, not a measured failure rate or an independent quality ranking. Application code was not changed.

## Finding

The tools have expanded materially. A claim that AI builders cannot supply crawlable HTML, metadata, mobile layouts, authentication, payments, analytics or security checks would be inaccurate. Whether those features are supported, enabled for a particular project, configured correctly and verified in production are four different questions.

The screenshots are useful prompts for reviewing a finished website. They are not evidence that a particular builder omits those items, or that every listed feature belongs on every site. No current default-output comparison was performed here.

The existing repository article at `src/app/blog/lovable-site-not-showing-on-google/page.tsx` already acknowledges current SSR/prerendering. Preserve that qualification; a new blanket anti-builder argument would contradict the more accurate article.

## Dated improvements

| Product | Documented change | Implication |
| --- | --- | --- |
| Lovable | The 18 May 2026 changelog announces the SEO/AI-search review and states that apps created from 13 May use TanStack Start SSR by default, except Enterprise. Older React/Vite apps receive request-time prerendering for verified crawlers. | The old blanket empty-HTML-shell criticism does not describe all current hosted Lovable apps. |
| Lovable | The same changelog records reusable workspace skills and optional Wiz scanning; 8 September adds browser testing behind Cloud-backed login. | Review and testing capabilities are improving alongside generation. |
| Bolt.new | The 14 August 2025 Cloud announcement describes built-in SEO prerendering. The 2 October 2025 v2 article describes SEO Boost and integrated backend/auth/payment infrastructure. | Bolt has documented rendering and backend features beyond a generated front end. |
| Bolt.new | July 2026 release notes add reusable instructions, with curated writing, web-design and SEO/GEO skills; 27 July–2 August adds a project-wide security audit. | Copy standards and launch reviews can be configured inside the tool. |
| v0 | Its FAQ dates a major update to 4 February 2026: repository import, branch/PR workflows, full editor and previews supporting server code and databases. | Reviewing v0 solely as a UI mockup generator is outdated. |

Sources: [Lovable changelog](https://docs.lovable.dev/changelog), [Bolt Cloud announcement](https://bolt.new/blog/scale-with-bolt-cloud), [Bolt v2 announcement](https://bolt.new/blog/introducing-bolt-v2), [Bolt release notes](https://support.bolt.new/release-notes), [v0 FAQ](https://v0.app/docs/faqs). Dates above are the dates displayed by the vendors, not independently established rollout dates. Bolt's release notes group v2 under September 2025 while its announcement is dated 2 October; do not invent a single precise rollout date.

## What current documentation supports

### Lovable

The SEO review covers sitemap, robots rules, page metadata, canonicals, semantic structure, alt text, indexing, accessibility, mobile usability and performance. Some checks need a published public URL; not everything runs against a preview. The docs distinguish SSR for new apps from crawler prerendering for older apps. In the final source check, the SEO page also links an upgrade path for older projects; do not repeat an older blanket statement that upgrading is unavailable. It explicitly says SEO elements are not always generated up front and that reviews do not rerun automatically when publishing. These hosting behaviors should not be assumed after exporting code to another host. [SEO documentation](https://docs.lovable.dev/features/seo-aeo)

Publishing generates starter metadata, a Lovable favicon and a screenshot-based social image. The publishing workflow tells owners to review these and rerun SEO checks after publication/domain changes. This establishes a starting point, not unique and accurate metadata on every route. [Publishing documentation](https://docs.lovable.dev/features/publish)

Lovable has basic and deep security scanning, including access-control and endpoint checks. Its own documentation says these do not replace a thorough review or guarantee complete security, and assigns use-case requirements to the owner. [Security documentation](https://docs.lovable.dev/features/security)

### Bolt.new

Bolt publicly documents SEO Boost prerendering. Its current August 2026 article continues to describe hosting-level SEO management, while explicitly retaining owner responsibility for requirements, customer validation, operations and final approval. This does not establish that every deployment has correct per-page metadata or indexable routes. [Current launch guidance](https://bolt.new/blog/is-an-ai-app-builder-enough-to-launch-a-business)

Stripe integration supports one-time payments/subscriptions, server functions and webhook handling. The documentation still requires credentials/configuration and testing successful and failed payments, webhooks and subscription flows. Its overview says Supabase is required, whereas prerequisites allow Bolt Database or Supabase; do not present the overview's narrower wording as settled. [Stripe integration](https://support.bolt.new/integrations/stripe)

The security audit examines code/database access, authentication, misuse and exposed secrets, and may leave actions in connected services for the owner. Paid-plan project auditing and all-plan database checks are separate. [Security documentation](https://support.bolt.new/building/security)

Paid Bolt Hosting includes traffic analytics, source/location reports and missing-page reports. Current docs say bots are included without a built-in way to separate them. That is a concrete, sourced reporting limitation; it is not proof that custom conversion tracking cannot be built. [Analytics documentation](https://support.bolt.new/cloud/hosting/analytics)

### v0

v0 defaults to Next.js and supports server components, backend endpoints, databases and external APIs. Its recommended workflow adds authentication, functionality and optimization iteratively, with detailed instructions to avoid assumptions. This supports full-stack capability, not the claim that a one-prompt output has every production requirement. [Full-stack documentation](https://v0.app/docs/full-stack-apps)

v0 explicitly offers copy revision, marketing pages, SEO research, responsive applications and basic accessibility improvements. The docs describe capabilities, not a conversion-rate comparison or automatic compliance certification. [Product documentation](https://v0.app/docs)

Its agent can use a browser to inspect interfaces and test flows, run terminal commands/tests and fix errors. Therefore, “AI builders cannot test what they build” is also too broad. A described test capability is not evidence that a specific site's critical workflows have been exercised. [Agent documentation](https://v0.app/docs/agentic-features)

Security guidance distinguishes server/client secrets and calls for correct access settings, environment separation and key management. Vercel platform protections should not be described as independent verification of all generated business logic. [Security documentation](https://v0.app/docs/security)

## What PandaCodeGen can fairly say

Recommended framing: **“What to check before launching an AI-built website.”** This is useful to someone who has already built something and does not require an unproven claim that their chosen tool fails.

Suggested short passage, subject to matching the service actually offered:

> AI builders can now create much of a working website, including search-friendly pages and connected forms. Before you rely on it, check the details that matter to your business: whether enquiries arrive, payments and permissions behave correctly, pages work on mobile, and reporting matches what actually happened. We review the implementation, explain the gaps and agree the work before changing it.

Prefer demonstrable review outputs over decorative feature counts:

- A tested enquiry from submission through delivery and CRM recording, with failure feedback.
- A crawl/indexing review of actual routes and rendered metadata, with intentional exclusions preserved.
- Keyboard/mobile checks and accessible error, loading, focus and menu behavior.
- Payment, authentication and role scenarios where the site actually uses those features.
- Source attribution definitions, consent behavior, deduplication and documented reporting limits.
- A clear owner, editing process, recovery plan and handover for the resulting implementation.

These are recommended acceptance checks, not findings that the three products fail them. A dark-mode toggle, floating button, newsletter signup or progress bar is not automatically a requirement. Nor does having them prove the important user journeys work.

Do not publish “AI sites cannot rank,” “builders only make front ends,” “they do not include SEO/security,” or “we supply what AI cannot.” Also avoid implying that any agency-built site automatically passes these checks. The strongest promise is specific work verified on the customer's actual implementation.

## Evidence needed for a stronger comparison

To claim frequency or superiority, build the same disclosed brief in each product with named version/date, plan, model, hosting and iteration budget. Preserve prompts, outputs and test results. Separate first generation, built-in review and repaired output. Include functional, accessibility and crawl checks; do not generalize from three homepages or tool marketing copy. This research did not perform that experiment.

The source pages can change. This document records the interpreted findings and original URLs as observed on the research date; it is not an immutable archive of the vendors' complete pages. No current keyword volumes or ranking gains were measured.
