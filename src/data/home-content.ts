import { COMMERCIAL, startingPrice } from "@/data/company-facts";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { SITE_URL } from "@/lib/i18n/config";

export const HOME_HEADLINE = ["The system behind", "your website."] as const;
export const HOME_INTRO = "Bookings, payments, reminders, follow-ups and a client portal, built around how your business already works, on a website made to be found by Google and AI search. Work directly with Hassan and Imran, with a fixed price in writing and your accounts in your name.";

const trainingProject = MIGRATION_PROJECT_DETAILS.aStepAboveMedical;
const systemOffer = COMMERCIAL.find(({ label }) => label === "Website + operations system");
// Read from company-facts.ts so the markdown never drifts from the site.
const fact = (label: string) => COMMERCIAL.find((f) => f.label === label)?.value ?? "";

export const HOME_MARKDOWN = `# PandaCodeGen: ${HOME_HEADLINE.join(" ")}

> **Source:** ${SITE_URL}/
> **Format:** text/markdown, the homepage for AI agents and LLMs. Full index: ${SITE_URL}/llms.txt

${HOME_INTRO}

## Websites and business systems

${systemOffer?.value ?? "See the pricing page for website and business system packages."}

Custom websites start at ${startingPrice("Starter")}. [See pricing and what's included](${SITE_URL}/pricing).

- [Websites and booking systems for training businesses](${SITE_URL}/services/training-business-websites)
- [Medical website design](${SITE_URL}/services/medical-website-design)
- [Small business website design](${SITE_URL}/services/small-business-website-design)
- [Website migration: move off WordPress, Wix, Squarespace or Shopify with every URL redirected](${SITE_URL}/services/wordpress-migration)
- [Online store development (Shopify and custom)](${SITE_URL}/services/ecommerce)
- [AI SEO and generative engine optimization](${SITE_URL}/services/ai-seo)

Every build includes the AI-search setup: answer-first pages, structured data and an llms.txt file.

## Monthly plans (optional)

${fact("Ongoing services")}

## Terms

- ${fact("Payment structure")}
- ${fact("Refunds")} If we don't deliver the signed scope, we refund 100% of the fees paid for it, starting within 4 to 5 business days.
- ${fact("Ownership on handover")}
- US Eastern business hours; your named lead answers the same day. Three past clients take reference calls before you sign.

## A Step Above Medical

${trainingProject.summary}

${trainingProject.firstMonthResult} ${trainingProject.adBudgetNote}

[Read the case study and measurement details](${SITE_URL}/work/a-step-above-medical).

## More about PandaCodeGen

- [How we measured AI referral revenue for our own store, Panda Patches](${SITE_URL}/blog/ai-referral-revenue-2026)
- [Portfolio and client projects](${SITE_URL}/work)
- [Company facts and sources](${SITE_URL}/ai-info)
- [Talk to the founders](${SITE_URL}/contact): info@pandacodegen.com. The first step is a free written check or a 15-minute call.
`;
