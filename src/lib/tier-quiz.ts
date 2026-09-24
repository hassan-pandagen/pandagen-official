// Tier finder questions and scoring, shared by TierQuiz.tsx (live homepage) and
// the redesign preview. Moved out of TierQuiz.tsx unchanged on 24 Sep 2026 so
// both read one set of questions.

export type Tier = "Starter" | "Growth" | "Scale";

export type Answer = "starter" | "growth" | "scale";

export type Option = { label: string; value: Answer };

export type Step = {
  q: string;
  // Kept short because this text is repeated back to the visitor in the enquiry
  // form, where a full question would bury their own answer.
  shortQ: string;
  options: Option[];
};

// 15 Sep 2026: this section used to end by naming a tier and a price --
// "Scale / From $5,000" -- after three questions. Three questions cannot price
// a project. Page count, whether there is a shop, and whether there are
// integrations do not settle the scope, the content, the data to move or the
// deadline, so every number it produced was a guess presented to the visitor as
// an answer, and the highest-answer-wins rule meant one honest click on
// "several integrations" quoted a small business $5,000.
//
// The three-band price grid added on 13 Sep went with it. That change came from
// a real finding -- three of six competitor homepages put a starting price in a
// section heading -- and the finding still holds, so the floor stays in the
// heading and the published packages keep their own page.
//
// The quiz now does what it can actually do: collect three answers, hand them
// to the enquiry form, and let a person quote from them.
export const steps: Step[] = [
  {
    q: "How many pages does your site have today?",
    shortQ: "Pages today",
    options: [
      { label: "7 pages or fewer", value: "starter" },
      { label: "8 to 20 pages", value: "growth" },
      { label: "More than 20 pages", value: "scale" },
      { label: "No site yet", value: "starter" },
    ],
  },
  {
    q: "Do you sell products online?",
    shortQ: "Selling online",
    options: [
      { label: "No, brochure or service site", value: "starter" },
      { label: "A handful of products, or a blog", value: "starter" },
      { label: "A catalogue I add to regularly", value: "growth" },
      { label: "A large catalogue, subscriptions or custom checkout logic", value: "scale" },
    ],
  },
  {
    q: "Do you need third-party integrations? (HubSpot, Salesforce, Stripe, etc.)",
    shortQ: "Integrations",
    options: [
      { label: "No, just a contact form", value: "starter" },
      { label: "Maybe one or two", value: "growth" },
      { label: "Yes, several integrations, or more than one language", value: "scale" },
    ],
  },
];

// Not shown to the visitor. It is a triage dimension on the GA completion event,
// so we can see which shape of project the quiz actually attracts.
export function pickTier(answers: Answer[]): Tier {
  const rank: Record<Answer, number> = { starter: 0, growth: 1, scale: 2 };
  const reverse: Tier[] = ["Starter", "Growth", "Scale"];
  const max = answers.reduce((acc, a) => Math.max(acc, rank[a]), 0);
  return reverse[max];
}

export function summarise(chosen: Option[]): string {
  const lines = chosen.map((opt, index) => "- " + steps[index].shortQ + ": " + opt.label);
  return "From the questions on your homepage:\n" + lines.join("\n") + "\n\n";
}
