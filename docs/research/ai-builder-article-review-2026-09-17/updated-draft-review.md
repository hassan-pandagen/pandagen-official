# Review of the updated AI-built website checklist

Reviewed 17 September 2026. File: `blog-drafts/ai-built-website-checklist.md`. Compared against `revised-article-v3.md` and the new AI Overview capture. Review only: no draft, worksheet, production code or deployment was changed.

Reviewed draft SHA-256: `dd899d5af7920297f589a2780ebb6a711131580e2f9dc83025170a23332cff53`.

## Verdict

Keep the title, eight-check structure, fair account of builder capabilities, first-party evidence limits and founder CTA. The additions improve the instructions: recipient configuration, customer auto-replies, payment methods/totals, the post-payment destination, and date-driven renewal checks are worth retaining.

The latest draft needs targeted corrections rather than another rewrite. It is approximately 2,970 whitespace-delimited words after removing the draft comment, versus approximately 2,324 in the reviewed candidate. That is not an SEO word-count problem. Most of the avoidable expansion is repeated email troubleshooting.

## Changes before publication

| Location in reviewed draft | Finding | Suggested wording/action |
| --- | --- | --- |
| Line 44, recipient check | “Generated sites often carry a placeholder address” asserts an unmeasured frequency. | “Check that no placeholder recipient address remains in the configuration.” |
| Line 84, tablet check | “Where generated templates most often stack badly” asserts a comparative failure rate the research does not measure. | “Check a tablet or intermediate screen width too; layouts can change between breakpoints.” |
| Line 92, Search Console | “The only tool” is unnecessary and unsupported. An indexed-page record and a fresh live InspectionTool test are distinct observations. | “Use Google Search Console’s URL Inspection to compare its indexed-page information, where available, with a fresh live test.” Keep the existing instructions and indexing caveat. |
| Line 148, renewals | A missed payment or monitoring-plan renewal need not make the whole website fail. | “Check domain and certificate expiry, service renewals, payment details and alert recipients. A missed renewal can interrupt the site, connected services or monitoring without a code change.” |
| Line 12, byline | “Published 17 September 2026” conflicts with the draft status and absent article route. | Use “Reviewed 17 September 2026” in the draft; set publication date when the article actually goes live. |
| Line 28, worksheet link | Public GET returned 404 for `/website-check-record.md` during this review. The source exists in `public/` and commit `e7078f5`; committed source is not a successful deployment. The proposed article route also returned 404, consistent with draft status. | Deploy and check the worksheet alongside the article before presenting the download as available. Remove the obsolete front-comment instruction about replacing a local worksheet link. |

Google's [URL Inspection documentation](https://support.google.com/webmasters/answer/9012289?hl=en) distinguishes indexed data, live testing and Google-selected canonical information. The current draft already explains most of this correctly; the new exclusive opening is the regression.

## Tighten the email addition, keep the practical benefit

Sender authentication belongs in the guide. However, “success” is an ambiguous mail-provider state, DNS is not the only cause of a missing message, and Google instructs readers to identify their provider's sending/authentication method before following the relevant branch. [Google Workspace guidance](https://knowledge.workspace.google.com/admin/support/troubleshooting/troubleshoot-gmail-not-getting-contact-form-messages)

Resend's instructions apply to verification of the domain or subdomain used with Resend, with records generated for that setup. They do not establish a universal DNS configuration for every form provider. [Resend domain verification](https://resend.com/docs/add-a-domain)

Replace the long DNS paragraph with:

> If the message is missing or lands in spam, check the sending provider’s delivery details and domain-verification status. A successful sending request is not proof of inbox delivery. Ask your provider or administrator to verify the SPF and DKIM setup required for your sending domain or subdomain, using that provider’s instructions. For Google Workspace recipients, an administrator can also inspect Email Log Search. Correct authentication helps address one class of problem; it does not guarantee inbox placement.

Keep the existing Google and Resend source links next to this paragraph. The wording distinguishes the sending service from the receiving mailbox. [Resend's event definitions](https://resend.com/docs/webhooks/event-types) support retaining the earlier distinction between a sending event and delivery to a recipient mail server.

The FAQs currently ask three versions of the email question. Combine “Does a successful form message prove the enquiry arrived?” with “My form says it sent but nothing arrives.” Keep one short diagnostic answer; either remove the separate DNS FAQ or give it one sentence linking back to check 2. Do not repeat the long explanation. A reduction of roughly 150–250 words would improve flow without removing useful checks; that is an editorial estimate, not a target imposed by search engines.

## Search intent and CTA

The title remains appropriate: it promises verification before launch and after changes. The cost-versus-hiring question belongs to the separately refreshed DIY article, which this draft already links. No additional keyword headings or cloned variants are needed to accommodate the additions.

Keep **Ask a founder about your site**. The preceding paragraph asks for the URL, intended behavior and unresolved check, and the destination is contact. It does not invent a free technical audit, guaranteed result or obligation to buy a rebuild.

The strongest remaining original addition is still a real, redacted end-to-end example with a date, expected outcome, downstream evidence and result. The code-path and template incidents do not constitute that complete worked test. They are properly limited in the current text; do not inflate them to fill the gap.

The blank worksheet is useful and now has a real repository asset. It remains a template, not completed testing or proof that the guide works for a nontechnical owner. Browser layout and an owner walkthrough still need actual implementation and testing.

## Caveats on the new AI Overview research note

These affect the supporting research, not the usefulness of the added checks:

- `ai-overview-capture.md` labels a section “Who holds this query today” and reports organic ordering. The preserved JSON contains the Overview answers, not a full organic-results array with destination URLs and positions. Label the ordering as a reported one-session observation unless its underlying capture is retained. It is not a durable rank or keyword-volume finding.
- “Top cause” in the email query means the first suggested cause in one generated answer. It does not measure how frequently that cause occurs.
- The retained launch Overview mentions SSL but does not support every added renewal/payment-card detail. Those are reasonable editorial additions, not verbatim facts established by the Overview.
- Two browser types hitting a CAPTCHA do not isolate the cause to an automation signature. Treat the cause as unknown or explicitly inferred.
- After-launch checking alone is not a unique competitor gap; earlier research found competitors covering recurring checks. The actionable record, clear pass criteria and usable instructions are the stronger distinction.

No new search volumes, difficulty scores, conversion claims or ranking forecasts were inferred. No emails, payments or production tests were run in this review.
