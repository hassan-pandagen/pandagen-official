# Homepage render check — 15 September 2026

The existing production build (`.next/BUILD_ID`, last written 02:56:56 local time) rendered successfully at all four requested widths. No build or application changes were made. This is a bounded layout and copy inspection, not a new CLS, Lighthouse, conversion or accessibility audit.

## What the render confirms

**The positioning issue is visible, not hypothetical.** At 1440px the H1 is 254px high, with “for WordPress, Wix and Squarespace” taking two large italic lines. The neighbouring form is broader: “Have a project or a question in mind?” and “Every message gets an answer, whether or not it ever turns into a quote.” The button “Get your migration plan” therefore promises something more specific than the enquiry form explains. Moving platform names down would also make the headline's most visually distinctive text describe the offer instead of the starting software.

**One header variant still differs.** Desktop visibly says “Ask us about your site”; the compact mobile header says **“Get a plan.”** This is a separate literal in [Header.tsx](../../../src/components/layout/Header.tsx), line 301, alongside the other labels at lines 278 and 394. Include it when aligning CTA copy. The screenshot confirms this is rendered behaviour, not just an unused string.

**The current form is readable and usable at the inspected sizes.** Name and email are required; website and the message are optional. The website field uses the neutral `example.com` placeholder. The message placeholder still lists migration first. At 390px that placeholder needs an internal textarea scrollbar to show its final words; shortening it to a simple invitation would be cleaner. No form was submitted and delivery was not tested.

**The two principal hero CTAs fit on the first 390×844 screen after optional cookies are rejected.** The inline form's heading begins near the bottom of that screen and its fields begin below it. On desktop the complete form and submit button are visible alongside the hero. This is a meaningful change in emphasis between breakpoints, not an overflow defect.

## Measurements

Coordinates are CSS pixels from the document top, captured after fonts and initial hydration settled. These are current-layout observations, not future constraints on replacement copy.

| Viewport | H1 height | Main CTA top / height | Inline form fields start | Work heading starts | Document height |
| --- | ---: | ---: | ---: | ---: | ---: |
| 390×844 | 110 | 545 / 56 | 970 | 2,242 | 25,076 |
| 768×1024 | 72 | 452 / 56 | 741 | 1,743 | 17,767 |
| 1024×900 | 139 | 754 / 80 | 387 | 1,417 | 15,403 |
| 1440×1000 | 254 | 750 / 56 | 333 | 1,332 | 15,094 |

At 1024px both primary and secondary CTA labels wrap; their measured heights are 80px and 84px. The existing 84px reservation at that breakpoint therefore remains relevant. Recheck replacement labels at all four widths rather than assuming a shorter H1 removes this constraint.

No horizontal document overflow was detected at any inspected width. The DOM has one H1, followed by H2/H3 section hierarchy without a downward rank skip. The enquiry form being an H2 is reasonable. This does not establish keyboard, screen-reader, contrast or complete-page accessibility conformance.

The project section is still well below the opening screen, especially on mobile. That follows from the full inline form, its contact alternatives, the technical scan link and the summary before the work section. Keep the clear work CTA; if proof needs to arrive sooner, changing only the H1 cannot accomplish that. Page heights show the current amount of content, but are not themselves a conversion finding or a reason to impose an arbitrary word limit.

## Evidence and limits

- [Desktop hero, after rejecting optional cookies](screenshots/home-1440-hero.png).
- [Mobile hero, after rejecting optional cookies](screenshots/home-390-hero.png).
- [Mobile form detail](screenshots/home-390-form.png).
- [Desktop first-visit consent state](screenshots/home-1440-first-visit.png): the banner occupies the bottom of the screen without covering the two main hero buttons.
- [Raw measurements and rendered copy](home-rendered-measurements.json), [capture script](capture-home-render.mjs).

Screenshots were visually inspected at 390px and 1440px; 768px and 1024px were measured through the rendered DOM. The capture did not exercise every lower-page interaction or measure layout shifts over time. The existing build may differ from concurrent source edits; these files preserve what was actually rendered.

Only this task's server and browser root processes were stopped. Both recorded PIDs disappeared and ports 3007 and 9337 stopped accepting connections; [cleanup record](render-cleanup.json). No unrelated server or browser was targeted.
