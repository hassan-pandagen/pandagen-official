# First-party evidence, internal links and offer fit

Reviewed 17 September 2026 against local HEAD `24581c2354401d1270a3c7a61019d676fe35015c` and the current draft `blog-drafts/ai-website-builder-small-business-checklist.md` (v2). This is a source/evidence review. No enquiries, payments, refunds, email sends or production changes were performed. The separate CRM repository and its live database were not inspected. A method recorded in this site's canon is evidence of the dated source audit it describes, not a substitute for the underlying incident log.

## Main finding

The distinctive article can be a practical verification guide with an honest account of what PandaCodeGen itself checked. Its existing four-incident section overstates the available evidence. Most seriously, an automated test tripping a deliberate spam filter is described as a broken business enquiry flow. The code establishes a mismatch between the confirmation screen and downstream delivery under that test condition; it does not establish that a legitimate customer's message was lost.

The earlier review's claim that the screenshots contain only 58 items should be withdrawn. The local dated capture records 19 copy items, 20 interface items and 20 SEO items. The vertical “Scroll back to top” item is easy to omit when counting the interface screenshot. There is no sound basis here for correcting 59 to 58.

## Incident-by-incident evidence

| Draft assertion | What the repository supports | Publication decision |
| --- | --- | --- |
| Quote form showed success but discarded a message; discovered through Playwright and Resend logs (draft lines 82–88) | `src/app/api/submit-quote/route.ts:79` explicitly comments that honeypot and timing rejects return the ordinary success body deliberately, with nothing sent or stored. The timing branch is at line 92. `src/lib/forms/quoteRequest.ts:273` documents the threshold and `:284` describes it as a weak client-provided signal layered with other checks. `src/lib/forms/__tests__/quoteTiming.test.mjs:18` explicitly tests rejection of an instant submission. The source supports intentional behavior. The dated builder research repeats the delivery-log account at `builder-gaps-verified-2026-09-17.md:82`, but no redacted Playwright trace/provider record was located in the reviewed evidence. | Call it a **synthetic delivery test that triggered anti-spam**, not a proven real-enquiry incident. State customer impact was not measured. Omit the exact live filter threshold and variable name because they do not help the owner perform the test. Do not imply a fix was shipped: this behavior remains intentional in current source. |
| “A syntax error stopped two customer emails for over a week” (draft lines 90–92) | `src/data/case-study-facts.json:367` records three added template IDs: `INTERNAL_ORDER_STOPPED`, `CUSTOMER_ORDER_UPDATED`, `INTERNAL_ORDER_UPDATED`. Its dated method at line 374 says **two of the three** existed in code from about 5 September and could not send until a syntax error was found and fixed on 15 September. Only one of the three IDs is explicitly customer-facing. | Replace with **two newly added email templates could not send until a syntax error was found and fixed on 15 September**. Do not call both customer emails. Do not claim a measured number of lost deliveries. “Broke its deploy” is more specific than the recorded method and needs deploy evidence. Approximate code-introduction date is not an exact outage start. |
| Refund/cancellation sent a production-start notification (draft lines 94–96) | No dated incident record describing this specific behavior, affected order states, corrective commit, deployment, or retest was located in this repository. The template entry above includes an internal stopped-order template but does not prove this incident. `case-study-facts.json:353` describes Meta CAPI reversal on cancellation/refund, which is a different system behavior. | Hold this story until its CRM incident record is linked. Preserve whether the trigger was refund, cancellation, or both; do not combine them without evidence. Record code defect versus observed production occurrence separately. |
| RLS caused every supervisor's digitizer picker to be empty; nobody could assign work (draft lines 98–100) | No dated, reproducible incident record was located in this repository. The enterprise questions mention the new roles, but do not answer this incident. An aggregate monitoring note says three production faults were found manually; it does not identify all three or substantiate “every” supervisor. | Hold until a dated CRM query/reproduction and repair record identifies roles, route, affected scope and test result. “One tested production-supervisor account could not see eligible assignees” would be defensible only if that is what the actual test showed. |
| None was caught by monitoring; 26 server functions have no error tracking (draft lines 102–105) | `case-study-facts.json:406` records a 16 September source audit: Sentry covers browser errors/page-load traces; Deno functions log to Supabase without alerts; three production faults in the preceding two days were found by investigation. It does not prove the setup is still unchanged on publication day. | Use dated past tense: **“Our 16 September audit found that monitoring covered the browser but not the affected server paths.”** State remediation only when evidenced. A historical gap can illustrate responsibility; an unqualified claim about the current whole server estate adds little buyer value and becomes stale quickly. |

The final limitation at draft line 187 says all four faults include the dates they were found. They do not: the form, refund, and picker paragraphs give no specific discovery dates. Fix that statement even if those incidents are retained.

## Wording that existing evidence can support

### Synthetic form test

> During an automated test of our own contact form, the page displayed success but no email was sent. The test had triggered a deliberate anti-spam rule. Checking the sending service exposed the difference between what the page showed and what the system had done. This was a test submission; we have not established that a customer's enquiry was lost.

This is an example of why UI-only acceptance is inadequate, not proof the form was broken or evidence of an AI-builder failure. If the test artifacts cannot be published, identify it as an internal test account and avoid precision beyond what the record preserves.

### Email templates

> Our 15 September source audit found that two newly added email templates could not send because of a syntax error. The error was fixed that day. The audit did not establish how many messages, if any, customers or staff missed.

The canon currently supports a source-audit account and correction date. To make this an original, independently inspectable receipt, preserve the affected template names, the relevant change and fix commits, deployment IDs/dates, and a redacted successful retest. Do not reconstruct these from memory.

## What would make the evidence section substantially stronger

Publish one resolved, documented example with these fields instead of four dramatic but unevenly evidenced stories:

| Field | What belongs in it |
| --- | --- |
| System and relationship | PandaCodeGen site or founder-owned Panda Patches operations platform; state that it is our own system. |
| Observed behavior | Precisely what the test/user saw, and where the downstream record differed. |
| Test date and version | Date, route/component, relevant source revision or release. |
| Impact | Demonstrated affected requests/accounts; explicitly unknown if no count was measured. |
| Cause | The actual evidenced cause; separate inference. |
| Resolution | Fix, deployment date and successful retest; or explicitly not a defect/unchanged behavior. |
| Repeat check | What now detects recurrence, owner and cadence; only describe monitoring already implemented. |
| Receipt | Redacted screenshot, trace or source excerpt that can support the adjacent claim. |

The business lesson should follow the receipt. The article should not use ownership of a custom platform to imply that custom builds avoid the same maintenance responsibility.

## Other unsupported first-party claims

- **“More often it is a list of fixes” (draft line 167)** is a frequency claim about PandaCodeGen engagements. No tally was located. Use “That may mean fixing the site you have; a rebuild is only one possible outcome.”
- **“A recurring hour or two … every time the site changes” (line 113)** is an unmeasured universal time estimate. A text edit, checkout change and permission change have different test scope. Use a suggested cadence matrix tied to changed journeys; call time boxes optional planning examples.
- **“What is the most common problem…” (line 208)** requires a defined sample and measured counts. These incidents do not supply one. Use “How can I tell whether my contact form actually works?” and answer with a reproducible test.
- **“All four … got past us” (line 79)** is inaccurate for the deliberate spam filter. Its behavior was a written and tested contract before the recent test, rather than an unknown implementation defect.
- **“The failure that costs money is invisible by looking, which is why it is not on [the screenshots]” (lines 68–70)** asserts one explanation for someone else's editorial choices. Say the screenshots do not include end-to-end delivery checks, without inventing why.
- **“Widely shared” (line 61)** is not established by three owner-supplied screenshots. The dated record itself correctly calls these one creator's three lists, not a survey. Name the creator/source and use that narrow scope, or omit the count because it distracts from the reader's checklist.

## Search intent and overlap within the current site

The draft says it was rewritten around recurring cost rather than a launch checklist. That is exactly the argument already owned by `/blog/is-it-cheaper-to-build-your-own-website`:

- Source line 170: four costs arrive after launch.
- Lines 190–207: integrations, quiet form failure, payment retries.
- Line 219 onward: keeping the site running.
- Lines 258–267: the founder's Saturday/opportunity cost.
- Lines 286–294: when DIY stops being cheaper.
- Lines 347–360: the summary about operations and quiet Friday failures.

The new draft's “who checks next month,” recurring time cost, delayed checklist and rebuild-versus-repair sales close substantially repeat this existing route. This is **content/intent overlap**, not proof of present ranking cannibalisation: the new draft is not published and there are no joint query results to analyze.

Recommended ownership:

| Route | Reader's job |
| --- | --- |
| Existing DIY cost article | Decide whether to build, buy or hire, including ongoing ownership costs. |
| New checklist | Verify an already built website before relying on it and after important changes. Provide exact checks, pass evidence and next action. |
| Existing `/blog/lovable-site-not-showing-on-google` | Diagnose publishing, canonical, crawl/index and ranking problems for a specific builder. |

The new article can briefly explain why retesting matters, then link to the DIY-cost article for the economics. It should link to the Lovable diagnostic from the search-check row instead of reproducing that long troubleshooting sequence. The Lovable article's source at lines 306–364 already distinguishes crawl, index, canonical selection and ranking.

## Internal links and CTA fit

- The proposed `custom-development` cluster in the draft's pre-publication notes does **not** match the current `TOPIC_CLUSTERS` ID. `src/data/topical-map.ts:317` uses `custom`, labelled Custom Engineering, with `/services/custom-engineering` as pillar. Verify the appropriate registry during implementation rather than silently minting a duplicate cluster.
- `/contact` is a good primary CTA destination. `src/app/contact/page.tsx:7` is “Talk to the founders” and says a founder replies directly by email. The article can use **“Ask us about your AI-built site”** with “Send the URL and what you want to check. A founder will reply.” This accurately describes a question, not a promised free audit.
- `/services/custom-engineering` is an appropriate secondary link for custom workflows and integrations but is currently framed around SaaS platforms, dashboards and internal tools (`PageContent.tsx:67`, `:89`). It is not a named recurring website QA plan. Do not present its $1,500 build floor as the price of taking over verification.
- The draft's $1,500 website-build starting price and optional ongoing support are consistent with `src/data/company-facts.ts:96` and `:104`. They answer a different question than **“What it costs to hand over”** in an article about recurring QA. Remove the price from that close, or explicitly label it as a build price with a `/pricing` link. Any maintenance scope/fee needs an actual agreed offer.
- A link to `/work/enterprise-ops` belongs beside the own-system example, with founder-affiliated disclosure, once the specific incident receipt exists. A generic case study does not itself substantiate the incident.
- Useful contextual sibling links are the existing DIY-cost article, ownership article (`/blog/do-you-own-your-website`), Lovable diagnostic, and tracking guide when the reader reaches reconciliation. Do not insert all siblings solely to meet a numeric link quota.

## Checks before a final publish decision

1. Lead with the actual eight-check tool and identify who it is for; keep the recurring-cost discussion short and linked out.
2. Narrow the form story to a synthetic test, correct email template wording, and omit unsupported refund/picker stories pending records.
3. Preserve and link one redacted successful retest or worked example. Clearly mark illustrative screenshots if no real artifact exists.
4. Replace unsupported frequency/time claims and move evidence limits beside the relevant example.
5. Keep the contact CTA promise aligned with the founder reply and avoid inventing a free audit, maintenance bundle or guaranteed repair.
6. Use the real topic registry ID and include a link back from a relevant existing article when the new page is implemented.

No code or article prose was edited in this review.
