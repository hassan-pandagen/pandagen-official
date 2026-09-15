# Homepage follow-up: rendered copy and form check

The revised H1, shared $1,500 starting price, form heading and submit label are present in the existing local production build. The reply note has moved underneath the inline submit button. However, the broader positioning has not carried through the rest of the homepage, and the inline and modal forms share their heading and submit label rather than identical copy or fields.

## Evidence and scope

Checked 15 September 2026 against local build `dl6UBJDkM4ldU4H7q9GLn`, whose `BUILD_ID` modification time was 13:23:56 UTC (18:23:56 Pakistan time). The audit started the existing build on a temporary local port; it did not build or edit the application. Four viewport widths were inspected: 390, 1024, 1279 and 1440 pixels. Screenshots were inspected at 390 and 1440 pixels. No form was submitted and no personal data was entered.

The [raw measurements](rendered-measurements.json) preserve the build identifier, collection timestamp and SHA-256 hashes of eight relevant source files before and after the run. Those files were unchanged during collection. The visible H1, price and form strings matched current source. This checks those surfaces, not that every file in the build is identical to every current source file.

A separate fresh browser navigation to the public homepage failed with `net::ERR_NETWORK_ACCESS_DENIED`. The [public navigation record](public-homepage.json) preserves that result and time. The error screenshot is an environment access failure, not evidence that the public site is broken. This browser check cannot establish deployment status, visitor exposure or a deployment date.

## What the buyer actually sees

| Surface | Observed copy or behavior | Assessment |
| --- | --- | --- |
| H1 | “Websites built for the way you do business.” | The new broad website positioning is rendered. |
| Price line | “Websites and online stores from $1,500. Scope and price agreed before work starts, and you work directly with the founders.” | The price correction is visible. This audit does not define what a starter store includes. |
| Eyebrow | “Website migrations · Fixed scope · Code you own” | Still narrows the business immediately above the broader H1. |
| Hero action | “Ask us about your site” opens the enquiry modal. | Matches the low-commitment question destination. |
| Desktop header | “Ask us about your site” | Matches the hero. |
| Compact header | “Ask a question” | The earlier “Get a plan” label is gone. This is an appropriate shorter variation. |
| Inline heading and submit | “What would you like help with?” → “Send your question” | Both match the modal. |
| Inline note below submit | Founder reply timing, first-reply fit/scope explanation, “It is not a sales sequence.” | Placement fixed, but this is not the same reassurance sentence as “whether or not it turns into a quote.” |
| Inline introduction | Website-focused invitation, followed by the every-message/no-quote reassurance | The explicit permission not to buy remains above the fields. |
| Inline email action | Email address displayed as a button; source opens the quote modal | “Email us” still promises a different interaction from the adjacent form, but sends the buyer into another form. This should be labelled to describe the actual action or made a genuine email link. |

The inline details placeholder still leads with “A migration, a redesign, faster pages,” while the modal asks what the visitor is “trying to fix.” A buyer with no existing website has to infer that these invitations also cover a first build. An inclusive sentence such as “Tell us what you want to build, improve or ask about” would carry the revised positioning into the enquiry.

The claim that both journeys now contain the same three sentences is too strong. The modal has optional phone and “Project details”; the inline form has optional website and “What you have in mind.” Both require only name and email. Different field sets are not automatically wrong, but shared heading/submit labels should not be described as complete form equivalence.

Under the modal submit is “No obligation” plus the privacy notice. Above it is a separate file-security notice despite there being no file control. On mobile this notice and the optional phone field contribute to a scrollable modal whose submit begins below the initially visible panel area. This is an opportunity to simplify, not a demonstrated conversion defect or evidence that the button cannot be reached. Submission and keyboard interaction were outside this bounded copy review.

## Placement and responsive measurements

Coordinates below are document positions after fonts settled and optional cookies were rejected in the isolated browser. They are observations from one local Chromium run, not Core Web Vitals results.

| Viewport | Hero height | Work heading begins | Primary hero button height | Secondary hero button height | Inline submit top | Reply note top |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 390 × 844 | 1,682px | 2,174px | 56px | 60px | 1,262px | 1,334px |
| 1024 × 900 | 1,026px | 1,399px | 80px | 84px | 649px | 721px |
| 1279 × 900 | 1,039px | 1,412px | 80px | 84px | 649px | 721px |
| 1440 × 1000 | 971px | 1,344px | 56px | 60px | 625px | 697px |

The submit button is 48px tall at all four widths, so the note starts 24px below its bottom. The note is 80px tall on mobile, 60px at 1024/1279, and 40px at 1440. Its position directly after the button is verified; “forty lines away” describes the source history rather than a measured visual distance.

The primary and secondary hero buttons fit the documented current dimensions: stacked on mobile, taller at the intermediate two-column widths. No horizontal page overflow appeared. This does not independently establish CLS, test the 768px breakpoint, or prove that a fallback-to-hydrated transition has no shift.

The mobile work heading is still more than two viewport heights from the page top. The full inline form, direct-contact block and summary all precede the project section. The shorter headline has not implemented the earlier recommendation to bring project proof ahead of the full mobile form. Whether the current order suppresses enquiries requires visitor evidence, but its visual consequence is clear.

The broader homepage still includes “Migrations engineered around what can break,” “Common questions about migrating your platform,” and a final platform-move CTA. The summary immediately below the hero still introduces a Next.js studio that rebuilds slow sites. The revised H1 therefore starts a repositioning that these supporting sections have not completed.

## Word-count interpretation

Counting `main.innerText.trim().split(/\s+/)` yielded 3,194 words at 390/1024/1279 and 3,213 at 1440; `document.body.innerText` yielded six more at each width. These are mechanical rendered-DOM totals, including responsive navigation and ancillary content, and even visually offscreen honeypot text reported by `innerText`. They are not an editorial-body-only count and do not independently falsify a 2,980-word count taken under a different definition.

No matched before/after extraction with the author's counting rule was supplied in this audit. Consequently, “2,980 words, unchanged in size” is not independently reproduced here. A reproducible comparison should state which DOM region is counted, how hidden/offscreen and navigation text are handled, and the exact before/after versions. In any case, word count alone does not establish information flow or a conversion improvement.

## Screenshots

- [390px hero](screenshots/home-390-hero.png)
- [390px inline form and reassurance](screenshots/home-390-form.png)
- [390px modal on opening](screenshots/home-390-modal.png)
- [1440px hero and inline form](screenshots/home-1440-hero.png)
- [1440px modal](screenshots/home-1440-modal.png)

Source inspection: [Hero](../../../../src/components/sections/Hero.tsx), [inline form](../../../../src/components/forms/HeroLeadForm.tsx), [modal](../../../../src/components/ui/QuoteModal.tsx), [header](../../../../src/components/layout/Header.tsx). These paths are relative to this evidence directory. No application changes were made.
