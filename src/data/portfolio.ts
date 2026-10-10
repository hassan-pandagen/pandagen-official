import { MIGRATION_PROJECT_DETAILS } from "./migration-projects";

/** Public display data. Relationships and delivery status follow company facts. */
export type PortfolioProject = {
  name: string; label: string; relationship: "Client" | "Founder-affiliated" | "Concept";
  href: string; image?: string; description?: string; status?: "In progress" | "In testing" | "Preview";
};
export const portfolioProjects: PortfolioProject[] = [
  { name: "NorthDeck Group", label: "Security systems", relationship: "Client", href: "/work/northdeck-group", image: "/work/northdeck-group.png" },
  { name: "Emblematic Studio", label: "Product catalogue", relationship: "Client", href: "/work/emblematic-studio", image: "/work/emblematic-studio.png" },
  { name: "MyCustomPatches", label: "WordPress migration", relationship: "Client", href: "/work/mycustompatches", image: "/work/mycustompatches.png" },
  { name: "Ladies 4 Jesus", label: "Community & publishing", relationship: "Client", href: "/work/ladies-4-jesus", image: "/work/ladies-4-jesus-hero.png" },
  { name: "Saforne", label: "Leather goods store", relationship: "Client", status: "Preview", href: "/work/saforne", image: "/work/saforne.png" },
  { name: "A Step Above Medical", label: "Medical website & training management system", description: "A complete training system for course content, classes, students, payments and certificates.", relationship: "Client", status: MIGRATION_PROJECT_DETAILS.aStepAboveMedical.status, href: "/work/a-step-above-medical", image: "/work/a-step-above-medical-preview-homepage.png" },
  { name: "Panda Patches", label: "Custom commerce", relationship: "Founder-affiliated", href: "/work/panda-patches", image: "/work/panda-patches.png" },
  { name: "Panda Patches CRM", label: "Custom CRM & workflow automation", description: "Our team's custom CRM for customers, orders, production and payments.", relationship: "Founder-affiliated", href: "/work/enterprise-ops", image: "/work/enterprise-ops.png" },
  { name: "Medical Template", label: "Medical website design", description: "A medical practice website demo with treatment pages and a clear consultation journey.", relationship: "Concept", href: "/work/medical-template", image: "/work/medical-template-hero.png" },
  { name: "Panda Publisher", label: "Author services", relationship: "Concept", href: "/work/panda-publisher", image: "/work/panda-publisher-library.png" },
  { name: "Sleek Jackets", label: "Outerwear store", relationship: "Concept", href: "/work/sleek-jackets", image: "/work/sleek-jackets-hero.png" },
];
