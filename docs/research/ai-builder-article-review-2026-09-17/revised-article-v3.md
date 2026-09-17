<!--
Draft v3 for review, 17 September 2026. Not published.
Research and implementation notes: docs/research/ai-builder-article-review-2026-09-17/README.md
Title tag: AI-Built Website Checklist: 8 Practical Checks
Description: Check enquiries, payments, mobile use and search access on your AI-built website. Eight practical checks, evidence to save and when to repeat them.
Proposed route: /blog/ai-built-website-checklist (not created).
The local worksheet link below must become a working public download during implementation.
-->

# AI-Built Website Checklist: 8 Checks Before Launch and After Changes

An AI website builder can get your small business online, connect services and help you test the result. Some now monitor published sites and alert you to problems. The useful question is what those checks cover on your site, and whether the enquiry, booking or purchase your customer started actually completed.

**Start here:** complete your main customer journey, find the resulting record in the system that handles it, and check that the person responsible can act on it. Repeat the affected checks after changes. You can do the owner checks below yourself; payment simulations and permission testing may need your developer or platform support.

## Choose the checks that apply to your site

| Your site | Start with | Add when relevant |
| --- | --- | --- |
| A business website taking enquiries | Offer and buttons, form delivery, mobile use, search access, measurement and monitoring | Booking and chat integrations |
| An online store | Those checks plus payment, refund and fulfilment tests | Customer accounts, subscriptions and staff permissions |
| A portal or custom application | The main user task, account access, saved records and recovery | Payments, notifications and separate user roles |

These are checks for essential customer journeys. They do not replace a full security, accessibility or performance assessment.

**Keep a record:** [copy the website check record](website-check-record.md). Save the date, action, expected result, actual result, evidence and next test trigger. Use “not verified” when you cannot inspect the result.

Jump to: [offer](#1-check-the-offer-and-the-next-action), [enquiries](#2-follow-an-enquiry-through-to-the-person-answering-it), [payments](#3-test-payments-and-refunds-in-the-providers-test-environment), [accounts](#4-check-account-access-with-test-users), [mobile and keyboard](#5-complete-the-main-task-on-mobile-and-with-a-keyboard), [search](#6-check-the-pages-you-want-search-engines-to-find), [measurement](#7-reconcile-measurement-with-business-records), [monitoring](#8-confirm-who-notices-a-failure-and-how-you-recover).

## 1. Check the offer and the next action

Read your main pages as a customer. Confirm the price, what it includes, delivery terms, contact details and any results or testimonials. Replace invented examples or unsupported promises left in generated copy.

Then follow each important button. A button promising a quotation should lead somewhere that explains how to request one. A booking button should open the right calendar. Check the mobile menu, footer and any language versions you publish.

**Pass:** the offer is accurate and each action reaches its intended destination. Record the page and destination. If a claim has no supporting source, correct it before directing customers to it.

## 2. Follow an enquiry through to the person answering it

Submit a clearly labelled test enquiry using an address you control. Put a unique label in the message so you can find the same submission later. Repeat this for each separate contact form, quote form, booking widget or chat route.

Check the stages your setup uses:

1. The website acknowledges the submission.
2. The enquiry appears in the form dashboard or CRM, if one is configured.
3. The email service records the notification, if email is part of the route.
4. The intended inbox receives it, and the responsible person can reply to the test address.

Email status needs interpretation. Resend distinguishes a sending request from delivery to the recipient's mail server. Neither status proves that a person saw the message. Check the receiving inbox and spam folder too. [Resend's event definitions](https://resend.com/docs/webhooks/event-types)

**Pass:** you can trace the test to the person or system meant to handle it. Save the reference, time and delivery result. If you only saw a success screen, delivery remains unverified. Where a provider hides logs, record the inbox result and ask support about the missing stage.

## 3. Test payments and refunds in the provider's test environment

For a store, use the payment provider's sandbox or test mode. Simulate a successful payment, a decline and a refund. If you sell subscriptions or take deposits, include those paths.

Do not default to charging your own real card as a test. Stripe explicitly directs testing to its sandbox and prohibits using real payment details for live-mode testing. Follow the current instructions for your processor. [Stripe testing guidance](https://docs.stripe.com/testing)

Have your developer verify that repeated payment notifications do not create duplicate orders or fulfilment tasks. Stripe documents that webhook events can arrive more than once. [Stripe webhook guidance](https://docs.stripe.com/webhooks)

**Pass:** one successful transaction produces the expected order; a decline does not mark it paid; refund records and customer/staff notifications match your refund workflow. A refund notification may be correct. An instruction to manufacture or ship an order that should be stopped is not.

Keep simulations away from live fulfilment. Before launch, separately verify production configuration, then reconcile genuine orders when they arrive. Sandbox success alone does not prove the live setup is correct.

## 4. Check account access with test users

Skip this section if the site has no customer accounts or staff roles. Otherwise, create authorised test accounts with dummy records. Confirm that each role can do its own job and cannot access another customer's or team's restricted information.

An owner can test login, logout, password recovery and what each account displays. A developer should also check server-side permission enforcement; hiding a link is not enough to establish that access is blocked.

**Pass:** the expected task works for each role, and prohibited access is denied in the checks performed. Save the role and test result without exposing real customer data. If an account can read or change another account's private records, restrict that feature and get it fixed before wider use.

## 5. Complete the main task on mobile and with a keyboard

Use an actual phone to open the menu, read the offer and complete the enquiry or booking journey. Check that a banner, sticky button or on-screen keyboard does not cover the action you need.

On a computer, repeat the task using the keyboard. Focus should remain visible, labels should identify the fields, and errors should explain what to fix. Try an empty required field and an invalid email format. Confirm that valid entries are retained where appropriate.

**Pass:** you complete the tested task with both input methods and can recover from the tested errors. Save the device/browser and any blocked step. This is a basic usability check; W3C notes that easy checks can pass while other accessibility barriers remain. [W3C accessibility checks](https://www.w3.org/WAI/test-evaluate/preliminary/)

## 6. Check the pages you want search engines to find

Choose representative public pages: your homepage, an important service or product page, and a recently added page. Include different page templates where possible.

In Google Search Console's URL Inspection, first read the indexed-page result. Then select **Test live URL**, followed by **View tested page → HTML**, to inspect the current deployment's rendered content. Confirm that the main content is present and the intended public page is accessible for indexing.

Keep the results separate: the live test does not guarantee indexing, and Google's selected canonical is determined during indexing. An intentional private or excluded page should not be made public just to pass this check. [Google's URL Inspection instructions](https://support.google.com/webmasters/answer/9012289?hl=en)

**Pass for this check:** the sampled intended public pages have accessible content and no unexplained indexing block. Record indexing status separately. For a Lovable-specific problem, use our [Lovable search diagnostic](https://www.pandacodegen.com/blog/lovable-site-not-showing-on-google).

## 7. Reconcile measurement with business records

Choose a period with enough activity to compare, and use the same timezone and definitions. Compare recorded enquiries with the form system or CRM, and orders with the commerce/payment records. Separate test submissions, spam, failed payments, duplicates and refunds.

A button click is not necessarily an enquiry. A payment notification is not necessarily a new order. Check which event your analytics counts before comparing totals.

Consent choices, blocked scripts and processing delays can explain differences. Record the gap you can explain and investigate the rest; do not force totals to match by changing definitions. Where source attribution matters, distinguish captured referrers or campaign details from customers saying how they found you.

**Pass:** the events represent the intended actions, and the scope and known gaps are documented. A small or incomplete sample should remain inconclusive. Identical totals alone do not prove every order or enquiry was matched correctly.

## 8. Confirm who notices a failure and how you recover

Open the monitoring settings available in your builder, hosting and connected services. Check what is enabled, the last successful run, the alert recipient, and any plan or credit conditions. A site-availability check answers a different question from a completed checkout test.

Use a provider's alert-test feature where available, or a controlled test environment. Confirm that the responsible person receives the alert and knows the next step. Do not break a live checkout to test monitoring.

Also establish who can access the domain and provider accounts, restore important data and roll back a bad release. A developer should demonstrate recovery in an appropriate test environment. Our [website ownership guide](https://www.pandacodegen.com/blog/do-you-own-your-website) explains what to confirm at handover.

**Pass:** the monitored conditions, recipient and response owner are known, with a tested alert where supported and a recorded recovery route. Unknown coverage remains a gap even when the dashboard is green.

## What current AI builders already check

The tools are improving. Blanket claims that they only generate a page once are inaccurate. These are documented examples checked on 17 September 2026, not a ranking or a test of your project.

| Product | Documented help | What to verify on your project |
| --- | --- | --- |
| [Lovable](https://docs.lovable.dev/features/project-monitoring) | Scheduled code and visitor-error monitoring, with email findings, on eligible plans | Whether it is enabled, its schedule and edit condition, available credits and who reviews findings |
| [Replit](https://docs.replit.com/features/publishing/monitoring-a-deployment) | Scheduled uptime checks and downtime emails when enabled; separate [SEO checks after publishing](https://docs.replit.com/features/publishing/seo-rating) | Which checks ran and whether your customer journey also completed |
| [Bolt](https://support.bolt.new/integrations/stripe) | Stripe integration and documented payment-testing workflows | Correct configuration and the results of successful, failed and refund scenarios |
| [v0](https://v0.app/docs/agentic-features) | Browser and test tools, plus deployment investigation | The specific tasks tested and the downstream results inspected |
| [Wix Harmony/Wix](https://support.wix.com/en/article/wix-automations-understanding-run-logs) | Automation run records, alongside Harmony's accessibility tooling | The relevant automation's steps, actual destination and receipt |
| [Framer](https://www.framer.com/help/articles/framer-form-webhook-setup/) | Form-webhook delivery with retries | Whether the receiving system completed the requested action |
| [Webflow](https://help.webflow.com/hc/en-us/articles/51704193319955-AEO-agents-overview) | Recurring AEO-agent recommendations on eligible plans | The enabled scope and checks outside technical/content recommendations |

Use the help already available. Keep a record of the complete business result, including any stage the tool's report cannot establish.

## Why we check beyond the success screen

Our own quote-form code contains an anti-spam path that deliberately returns a success response without sending an email. An automated test can trigger that path. That demonstrates why the browser response alone is insufficient evidence of delivery; it does not establish that a real customer's enquiry was lost.

We also have a dated internal source-audit record from 15 September 2026: two newly added email templates in our own operations platform could not send until a syntax error was found and fixed that day. The record does not establish how many messages, if any, staff or customers missed.

That platform runs Panda Patches, the business owned by our co-founder Imran. It is our own operating experience. The [case study](https://www.pandacodegen.com/work/enterprise-ops) describes the platform; the incident account above comes from our internal audit, not an independent assessment or a published production-delivery dataset.

The same questions apply to custom code, an AI-built site or a hosted template: what did you test, what happened downstream, and what evidence did you keep?

## When to repeat the checks

Repeat the affected journey after changes to a form, recipient, payment integration, permissions, domain or publishing setup. Check new public page templates for usability and search access. There is no useful universal promise that this takes one hour or two.

For a small enquiry site, a weekly delivery check can be a starting policy. For a busy store, consider daily reconciliation and automated alerts for critical failures. These are suggested starting points: choose a frequency based on transaction volume, the impact of a missed failure and the monitoring already available.

If you can complete the checks and someone owns the follow-up, you may not need an agency. If you are deciding whether to build or hire, our [DIY website cost guide](https://www.pandacodegen.com/blog/is-it-cheaper-to-build-your-own-website) covers that separate decision.

## Not sure whether your site passes?

Send the URL, what the site should do and the check you could not complete. A founder will reply and explain the next step. Any paid work is scoped and quoted before it starts.

[Ask a founder about your site](https://www.pandacodegen.com/contact)

You do not need to decide on a rebuild before getting in touch.

## Common questions

**Can an AI-built website rank on Google?**

Yes. The relevant question is whether the actual pages are accessible, useful and suitable for indexing. A builder's SEO report is useful evidence about its checks, rather than a guarantee of indexing or rankings.

**Does a successful form message prove the enquiry arrived?**

No. Check the configured destination and, where available, the sending record. Confirm receipt and reply from the inbox or system your team uses.

**Do I need all eight checks for a simple website?**

Only the relevant ones. Record payments or accounts as not applicable if the site has neither. Keep the enquiry, usability, offer and operational checks that your business depends on.

**Can AI help run these checks?**

Yes. Supported tools can exercise interfaces, inspect code and interpret logs. Give them the expected result and verify what evidence they actually observed. A tool that cannot access the receiving inbox cannot confirm its contents.

**Does a failed check mean I need a new website?**

No. Investigate the cause first. A configuration change or repair may be sufficient; a rebuild needs a separate reason tied to what the business requires.

*Method: current vendor/provider documentation, this repository's form code and a dated internal operations audit. We did not run a controlled comparison across the seven builders or measure their failure rates. The check record is a reusable template, not a claim that these tests have been completed on your site.*
