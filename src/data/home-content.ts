import { COMMERCIAL, startingPrice } from "@/data/company-facts";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { SITE_URL } from "@/lib/i18n/config";

export const HOME_HEADLINE = ["The system behind", "your website."] as const;
export const HOME_INTRO = "Bookings, payments, reminders, follow-ups and a client portal, built around how your business already works, on a website made to be found by Google and AI search. Work directly with Hassan and Imran, with a fixed price in writing and your accounts in your name.";

const trainingProject = MIGRATION_PROJECT_DETAILS.aStepAboveMedical;
const systemOffer = COMMERCIAL.find(({ label }) => label === "Website + operations system");

export const HOME_MARKDOWN = `# ${HOME_HEADLINE.join(" ")}

PandaCodeGen · ${SITE_URL}/

${HOME_INTRO}

## Websites and business systems

${systemOffer?.value ?? "See the pricing page for website and business system packages."}

Custom websites start at ${startingPrice("Starter")}. [See pricing and what's included](${SITE_URL}/pricing).

- [Websites and booking systems for training businesses](${SITE_URL}/services/training-business-websites)
- [WordPress migration](${SITE_URL}/services/wordpress-migration)
- [Online store development](${SITE_URL}/services/ecommerce)

## A Step Above Medical

${trainingProject.summary}

${trainingProject.firstMonthResult} ${trainingProject.adBudgetNote}

[Read the case study and measurement details](${SITE_URL}/work/a-step-above-medical).

## More about PandaCodeGen

- [How we measured AI referral revenue for our own store, Panda Patches](${SITE_URL}/blog/ai-referral-revenue-2026)
- [Portfolio and client projects](${SITE_URL}/work)
- [Company facts and sources](${SITE_URL}/ai-info)
- [Talk to the founders](${SITE_URL}/contact)
`;
