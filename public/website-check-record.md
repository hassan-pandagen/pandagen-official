# Website check record

Reusable template prepared by PandaCodeGen, 17 September 2026. This is a blank worksheet: no entry
below is evidence of a completed test. Copy or print it freely. Nothing is asked for in return, and
there is no form to fill in to get it.

It accompanies [AI-Built Website Checklist: 8 Checks Before Launch and After Changes](https://www.pandacodegen.com/blog/ai-built-website-checklist).

Website: ____________________  Date and timezone: ____________________

Person doing the checks: ____________________  Site version/release if known: ____________________

Environment: public site / preview / sandbox / other: ____________________

Main customer action: ____________________  Expected business result: ____________________

## Result definitions

- **Pass:** observed behavior meets the expected result for the specific recorded test.
- **Fail:** observed behavior conflicts with the expected result.
- **Not verified:** evidence or access is insufficient. Never turn this into a pass.
- **Not applicable:** this feature does not exist on the site; record why.

## Overview

| Check | Pass / Fail / Not verified / N/A | Evidence reference | Owner and next action |
| --- | --- | --- | --- |
| 1. Offer and next action | | | |
| 2. Enquiry arrives and can be answered | | | |
| 3. Payment, decline, refund and duplicate handling | | | |
| 4. Accounts and permissions | | | |
| 5. Mobile, keyboard and error recovery | | | |
| 6. Search access on intended public pages | | | |
| 7. Analytics and business-record reconciliation | | | |
| 8. Monitoring, alert recipient and recovery | | | |

## Detailed record: copy for each journey

| Field | Fill this in |
| --- | --- |
| URL and customer action | |
| Device, browser and account role | |
| Date/time with timezone | |
| Environment and release version | |
| Test label or reference (use dummy data) | |
| Expected behavior, including downstream result | |
| What actually happened | |
| Evidence references (redacted where shared) | |
| Result and limits | |
| Cause: confirmed / suspected / unknown | |
| Fix or escalation owner | |
| Resolution, if any | |
| Retest date, result and evidence | |
| Next trigger and routine review date | |

## Enquiry trace

Use only the stages in the actual implementation. A form that sends email directly may have no separate stored form record. Mark that stage N/A and explain; do not invent storage.

| Stage | Observed result | Reference or timestamp |
| --- | --- | --- |
| Browser acknowledgement | | |
| Form dashboard / CRM record, if configured | | |
| Sending provider accepted the request | | |
| Provider delivery status | | |
| Receiving inbox / spam folder checked | | |
| Responsible person can reply to test address | | |
| Expected CRM assignment or follow-up, if configured | | |

Delivery to a mail server is not proof of inbox placement or a person reading it. If one stage is unobservable, document the limit. Remove test enquiries from business reporting using the system's supported process.

## Payment trace: use the provider's test environment

| Scenario | Expected result | Observed result and reference |
| --- | --- | --- |
| Successful simulated payment | Correct order, amount/currency and paid state | |
| Declined simulated payment | No paid order or fulfilment instruction | |
| Repeated notification, checked by developer | No duplicate order or fulfilment task | |
| Simulated refund | Correct refund record, notifications and workflow state | |
| Deposit/subscription, if applicable | Agreed partial or recurring behavior | |

Keep sandbox tests away from real fulfilment. Verify production credentials and configuration separately without putting secrets in this worksheet. Follow the processor's go-live guidance; do not charge a real card merely to simulate a transaction where that is prohibited.

## Monitoring and recovery

| Question | Answer |
| --- | --- |
| What condition is monitored? | |
| What is not covered? | |
| Is it enabled on this project and plan? | |
| Last successful check; any credit/usage condition? | |
| Alert recipient and test result? | |
| Who acts, within what agreed response window? | |
| Where are domain, hosting and service accounts controlled? | |
| What restore/rollback route was demonstrated, where and when? | |

## Review decision

Critical failed or unverified journeys: ____________________

Action before launch, promotion or the next affected change: ____________________

Reviewer and date: ____________________

This record covers the listed tests and their conditions. It is not a security certification, full accessibility assessment, SEO guarantee or proof that unrelated workflows passed.
