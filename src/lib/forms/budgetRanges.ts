// Budget choices on the contact form (and the Cal.com booking form, set up by hand
// in the Cal.com dashboard). 14 Nov 2026, owner: the ranges follow the published
// tier prices, Starter from $1,500, Growth from $3,500 and Scale from $5,000, so a
// visitor's choice maps straight onto a tier. company-facts.ts checks these
// boundaries against COMMERCIAL and fails the build if a tier price changes
// without this list.
//
// No imports on purpose: quoteRequest.ts reads this file and the Node tests load
// quoteRequest.ts directly, without the "@/" path alias.

export const BUDGET_TIER_STARTS = { Starter: 1500, Growth: 3500, Scale: 5000 } as const;
const BUDGET_UPPER_BAND = 15000;

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const { Starter, Growth, Scale } = BUDGET_TIER_STARTS;

export const BUDGET_RANGES = [
  `Under ${usd(Starter)}`,
  `${usd(Starter)}–${usd(Growth - 1)}`,
  `${usd(Growth)}–${usd(Scale - 1)}`,
  `${usd(Scale)}–${usd(BUDGET_UPPER_BAND - 1)}`,
  `${usd(BUDGET_UPPER_BAND)}+`,
  "Need help scoping",
] as const;

// Values the form offered before 14 Nov 2026. Still accepted, so a visitor with
// the old page open can submit after a deploy.
export const LEGACY_BUDGETS = ["Under $3,500", "$3,500–$7,500", "$7,500–$15,000", "Not sure"] as const;
