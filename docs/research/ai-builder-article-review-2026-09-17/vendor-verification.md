# Vendor verification: the draft's recurring-check claim does not survive research

Researched 17 September 2026. Scope: current official product documentation for Lovable, Replit, Bolt, v0, Wix Harmony, Framer and Webflow. This is a documentation review, not a hands-on benchmark. No vendor account or production project was tested. Plans, settings and coverage matter. Documented capability does not prove it is enabled or effective in a particular project; absence from the pages reviewed does not prove a product lacks a feature.

## Publication blocker

The draft says no listed builder checks the site next month, and expands Lovable's on-demand **SEO review** limitation into a claim that no checks rerun and nobody is alerted. This is factually contradicted by multiple official sources. Rewrite the thesis, not just the vendor table.

- **Lovable Project monitoring** runs scheduled code and visitor-error checks and emails important findings. Examples include failing payments, unsaved inputs, failing cron jobs and integrations. The documentation even uses a contact-form send failure as an investigation example.
- **Replit App Monitoring** performs recurring uptime checks and sends downtime emails. Its separate **SEO Rating** recalculates after every successful publish.
- **Webflow AEO agents** refresh technical and content recommendations on a recurring schedule, subject to plans and settings.
- **Bolt** automatically checks security vulnerabilities during publishing. **Framer** blocks publishing for some detected errors and automatically retries unsuccessful form webhooks.

These are different types of assurance. None establishes that an arbitrary site's complete business workflow is correct. But it is inaccurate to say the products simply generate once and never check anything again.

## What each vendor actually documents

| Product | Generation / user-triggered review | Repeated or operational behavior | What remains a legitimate question |
| --- | --- | --- | --- |
| Lovable | SEO and AI-search scans are on demand; they do not automatically rerun on publish. Security scanning is a separate system. | Project monitoring is a beta on Pro, Business and Enterprise. Per-project daily or weekly checks review code and visitor errors. Important findings trigger owner emails. Default condition is changes since the last scan; owners can choose every scheduled run. Scans consume credits and can be skipped without sufficient credits. | Is monitoring enabled, what does it cover, when did it last run, and who acts on findings? The vendor explicitly warns that monitoring can miss issues or report false positives and does not replace testing. It does not automatically fix findings. |
| Replit | Agent can test in a browser; the SEO Agent is an additional user-triggered workflow. | Uptime checks run on a schedule and email downtime alerts when enabled, on eligible paid plans. Separately, the SEO Rating runs Lighthouse against public deployment URLs after every successful publish. | An uptime pass is not a completed order or received enquiry. Which business scenarios have been exercised and reconciled? Check eligible deployment type, enabled settings and the scope of the SEO crawl. |
| Bolt | Project security audit can be run manually; integration setup produces payment functions and webhook handling. | Publish workflow automatically checks security vulnerabilities. Stripe integration automatically registers webhooks and verifies signatures. | Bolt's own payment guide asks owners to test successful/failed payments, webhook processing and subscription flows. The pages reviewed do not establish a native recurring end-to-end business-journey test; that is an evidence limitation, not proof of absence. |
| v0 | Browser use, terminal tests, production-log inspection and MCP integrations are documented capabilities. | Tools can investigate deployed apps when requested. No native recurring business-journey monitoring schedule was established in the reviewed v0 pages. Its Vercel hosting environment and connected tools must be considered separately. | Which test assertions, environments and downstream records were actually checked? A user can ask the agent to inspect a signup flow; writing that users must manually execute every check would also be too broad. |
| Wix Harmony | SEO assistant and Accessibility Wizard support review. Wizard coverage excludes several areas, including checkout, side carts, CMS and third-party apps. | Wix's Accessibility Monitor scans live sites and explicitly supports Harmony. Wix Automations records each triggered run and step outcomes; notification summaries expose trigger counts. | Did the desired workflow run, and did the recipient actually receive its message? Wix documents cases where automation recipients stay on an old address and where a sent email is filtered by the recipient's provider. Do not describe this as an absence of monitoring tools. |
| Framer | Agents can revise the site; native forms and webhook destinations are documented. | Publishing can be blocked on detected errors, including form configuration problems. Form webhook destinations returning non-2xx responses get up to five retries. | A server returning 2xx does not establish that the intended downstream action completed. Validate the actual destination and stored record. No general scheduled end-to-end workflow monitor was established in the reviewed Framer docs. |
| Webflow | Ordinary Audit panel reviews missing SEO/accessibility elements, with component/CMS alt-text blind spots and user review of generated content. | Separate AEO agents on Team/Enterprise Platform plans refresh recommendations automatically on a recurring schedule; technical agents cover metadata, schema, alt text and broken links. Content agents require Enterprise plus Analyze. | Distinguish ordinary Audit panel from AEO agents. Recurring technical recommendations do not verify enquiry delivery, payments or business operations. Generated changes are reviewed and published by the user. |

## Primary sources and exact boundaries

### Lovable

- [Project monitoring](https://docs.lovable.dev/features/project-monitoring): daily/weekly schedules, conditional execution, beta availability, code/visitor-error signals, email alerts, credits, false positives/missed issues and no automatic fixes. No release date displayed; record the retrieval date instead of inventing a launch date.
- [SEO and AI search](https://docs.lovable.dev/features/seo-aeo): SEO review remains on demand and does not rerun automatically on publish. That sentence concerns the SEO review only.
- [Security overview](https://docs.lovable.dev/features/security): separate before-publish/on-demand scans and Enterprise scheduled deep scans. Use-case requirements remain the owner's responsibility.

### Replit

- [Monitoring your app](https://docs.replit.com/features/publishing/monitoring-a-deployment): scheduled uptime checks, downtime email, request/status/duration charts and deployment logs. Core, Pro and Enterprise; excludes Scheduled Deployments. Uptime must be enabled in publish settings.
- [SEO Rating](https://docs.replit.com/features/publishing/seo-rating): automatic Lighthouse audit after each successful publish, limited to public web-facing deployment URLs. This directly refutes the generic no-rerun claim.
- [App Monitoring announcement, 29 April 2026](https://replit.com/blog/app-monitoring): Agent investigations can access production logs and a production database read-only. Do not present investigation as an automatic repair guarantee.
- [App Testing](https://docs.replit.com/core-concepts/agent/app-testing): browser-based testing during development when enabled. This is distinct from scheduled monitoring of a published business journey.

### Bolt

- [Publishing](https://support.bolt.new/cloud/hosting/publish): automatic security checks each publish.
- [Security](https://support.bolt.new/building/security): manually triggered project audit and database checks; some findings require action in external services.
- [Stripe](https://support.bolt.new/integrations/stripe): built-in handling and explicit test-mode scenarios. Prefer its current prerequisites allowing Bolt Database or Supabase over the conflicting older introduction that says Supabase is required.

### v0

- [Agentic features](https://v0.app/docs/agentic-features): browser testing, terminal commands, marketplace/MCP tools and deployment-log investigation.
- [Terminal commands](https://v0.app/docs/terminal-commands): tests and CLI access are available, with permission modes. These documents establish actionable test tooling, not a recurring schedule.

### Wix

- [Harmony Accessibility Wizard](https://support.wix.com/en/article/wix-harmony-editor-using-the-accessibility-wizard): supported scope and manual checks.
- [Accessibility Monitor](https://support.wix.com/en/article/accessibility-checking-site-accessibility-with-the-accessibility-monitor): live-site status and explicit Harmony support; recommends checking after publication. The reviewed page does not specify an automatic scan interval or alert schedule.
- [Automation run logs](https://support.wix.com/en/article/wix-automations-understanding-run-logs): records runs and per-step status, including skipped/failed runs.
- [Automation troubleshooting](https://support.wix.com/en/article/the-new-automation-builder-troubleshooting-wix-automations): stale recipients and recipient-side filtering are concrete operational failure scenarios. This is stronger supporting evidence than speculation that all AI forms silently fail.

### Framer

- [Publishing errors](https://www.framer.com/help/articles/resolving-publishing-errors/): built-in publication safeguards.
- [Form webhooks](https://www.framer.com/help/articles/framer-form-webhook-setup/): POST delivery, non-2xx retry behavior and submission IDs. Server acknowledgement and completed business processing must be distinguished.

### Webflow

- [Audit and improve SEO & AEO](https://help.webflow.com/hc/en-us/articles/45696502240147-Audit-and-improve-SEO-AEO-with-Webflow-AI), updated 11 September 2026: ordinary Audit panel, plan/locale/coverage conditions and reviewing generated material.
- [AEO agents overview](https://help.webflow.com/hc/en-us/articles/51704193319955-AEO-agents-overview), updated 31 July 2026: recommendations refresh on a recurring schedule; users review/apply/publish. This is an important counterexample missing from the earlier research.

## Editorial corrections

1. Replace the opening claim with: **"AI builders can generate sites, run audits and, on some plans, monitor them after launch. Your job is to confirm which checks are enabled and whether they cover the enquiry, booking or purchase your business depends on."**
2. Replace "Every one of them hands the checking back to you" with **"What the built-in checks cover, and what your business still needs to verify."**
3. Delete the general "Nothing re-runs, and nobody is told" passage. Use a specific conditional: **"If the relevant check is disabled, out of credits or does not cover the downstream system, a problem can go unnoticed."**
4. Replace "The tool builds. You verify" with a precise distinction among generation, static review, monitoring and business acceptance. Tools can help at all four stages; the owner must still decide what successful behavior means.
5. Do not infer that an accessibility limitation proves form/email monitoring is absent. The present limits table compares unrelated features and cannot support a common conclusion.
6. Drop the earlier research file's "No builder writes the content" statement. It contradicts the documented content-generation capabilities, including Webflow content agents and Framer Agents. Replit SEO Agent's narrower remit does not describe every feature of Replit, much less all products.
7. Keep vendor detail short in the reader-facing article. A compact capability/coverage box and linked source notes support the actionable checklist; a long software comparison changes search intent and ages quickly.

## What would justify a materially stronger article

Publish a reusable acceptance worksheet: business action, expected outcome, records to match, pass/fail, last tested date, owner, next trigger and enabled automated checks. Show one fully evidenced example with redacted records. That creates a resource readers can use and cite without asserting vendor failure rates.

For a genuine builder comparison, run the same disclosed brief on named plans/versions/dates, distinguish default generation from assisted repair, preserve prompts and test output, and test representative business journeys. Documentation alone cannot support "most common failure", missed-item counts, guarantees or a claim of superiority over the builders.

The existing `builder-gaps-verified-2026-09-17.md` research needs an explicit correction before publication: its universal no-recurring-check conclusion is superseded by the primary evidence above. The original draft and that research file were not edited in this subtask.
