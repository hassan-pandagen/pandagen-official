import { serviceBuyerQuestions } from "@/data/service-buyer-questions";
import { COMMERCIAL, WORDPRESS_HOST_MIGRATION } from "@/data/company-facts";

function startingPrice(label: string) {
  const value = COMMERCIAL.find(item => item.label === label)?.value.match(/From (\$[\d,]+)/)?.[1];
  if (!value) throw new Error(`Missing starting price: ${label}`);
  return value;
}

/**
 * Shared by the visible migration page, its FAQ schema and the website assistant.
 */
export function migrationFaqs(): { q: string; a: string }[] {
  return [
    ...serviceBuyerQuestions("wordpress-migration"),
    { q: "Will every old address keep working?", a: "The inventory identifies addresses in scope. We preserve them where possible and map changed addresses to relevant destinations. Redirects reduce avoidable loss; search engines still control indexing and rankings." },
    // 20 Oct 2026: Hassan's rule of thumb as quoted by CIO Grid that day (company-facts "Press").
    { q: "How do I know it's time to move off WordPress?", a: "Look at where the work happens. If quotes, orders and customer messages are handled outside the site, in email, spreadsheets or another tool, it's probably costing your team time, and adding more plugins rarely fixes that. While the fixes still fit inside the system, keep maintaining it; once they live outside it, start planning a move. Hassan gave that rule of thumb to CIO Grid in October 2026, using the Panda Patches rebuild as his example." },
    { q: "Should we repair WordPress or migrate?", a: "We review what is making the current site hard to run. If a focused fix meets your needs, we can scope that work. If publishing, checkout or connected tools need a different structure, we plan a migration. You see the recommendation and cost before deciding." },
    // 20 Oct 2026: answers the "can you do it for me" follow-up for a host-only move.
    { q: "Can you move my WordPress site to a new host instead?", a: `Yes. First check whether your new host includes free migration; if it covers your site, use it. If it doesn't, or the site runs a store, business email or connected services: ${WORDPRESS_HOST_MIGRATION}` },
    { q: "What if I just need a simple WordPress site?", a: "That may be the right fit. Tell us which pages and editing tools you need. We can discuss a straightforward WordPress setup and scope it if it meets your needs. We explain the cost and tradeoffs of another build only when it is relevant." },
    { q: "What moves in a WordPress to Next.js migration?", a: "We inventory the pages, posts, images, search metadata, URLs, forms and connected tools in scope. Content can be transferred, but WordPress themes and plugins do not become Next.js features automatically. We agree which features will be rebuilt, replaced or kept before quoting. Store products, customer accounts and order history need their own transfer plan." },
    { q: "Can my team edit the new site?", a: "Yes. We agree the fields and workflows your team will control, then provide written instructions and a live editing demo. We choose the content system with you; that can mean a new editor or keeping WordPress for publishing where it fits. New templates and features are scoped separately." },
    { q: "How long does a WordPress migration take?", a: "Our published planning ranges are 1 to 2 weeks for Starter, 2 to 4 weeks for Growth and 3 to 6 weeks for Scale. Content volume, store data, integrations and approvals determine the dates in your proposal. Your current site stays live during the build; the launch window and fallback plan are agreed separately." },
    { q: "How much does a WordPress migration cost?", a: `The published starting points are Starter at ${startingPrice("Starter")}, Growth at ${startingPrice("Growth")} and Scale at ${startingPrice("Scale")}. The inventory determines the right scope; your proposal sets the final price, third-party charges and delivery dates.` },
  ];
}

