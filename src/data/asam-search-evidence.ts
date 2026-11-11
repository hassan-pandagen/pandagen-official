/** Owner-supplied Search Console screenshots reviewed 11 November 2026.
 * Daily tooltip values, not matched-period totals or a causal experiment.
 * Property: astepabovemed.com; three-month view; Web (text).
 * Generative AI features (Beta) is the label shown in this account.
 */
export const ASAM_SEARCH_EVIDENCE = {
  reviewedOn: "2026-11-11",
  screenshot: {
    src: "/proof/asam-generative-ai-2026-11-04.png",
    alt: "A Step Above Medical Search Console chart showing higher daily Generative AI impressions after 20 October 2026, with 132 impressions selected on 4 November.",
    baselineSrc: "/proof/asam-generative-ai-2026-10-19.png",
  },
  summary: "Owner-supplied Google Search Console screenshots show increased search visibility after the 20 October 2026 relaunch. The account's Generative AI features report shows 11 impressions on 19 October and 132 on 4 November. These are two daily observations, not a period-wide growth rate or evidence that the rebuild alone caused the increase.",
  aiSamples: [
    { date: "2026-10-19", label: "19 October 2026", impressions: 11 },
    { date: "2026-11-04", label: "4 November 2026", impressions: 132 },
  ],
  webSummary: "The separate Web performance report shows 9 clicks and 77 impressions on 20 October, and 25 clicks and 414 impressions on 9 November. These Web figures are not AI-only traffic.",
  limits: "Source: screenshots supplied by the site owner and reviewed on 11 November 2026. The Generative AI report displays 2.22k impressions across the selected three-month window, including time before launch. Impressions measure visibility, not visits, bookings or revenue. A matched-period export is needed to calculate a before-and-after growth rate.",
} as const;
