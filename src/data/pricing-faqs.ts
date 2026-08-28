/**
 * Pricing-page FAQs, in the order they render.
 *
 * Single source so the visible text and the FAQPage JSON-LD in page.tsx cannot
 * drift apart. Structured data must mirror text a visitor can actually see; see
 * the history note in components/ui/FAQAccordion.tsx for why that rule exists.
 *
 * The four objection questions (WordPress-faster, busy season, partner or board,
 * should-not-migrate) were added 28 Aug 2026. They answer the standing sales
 * objections on the page rather than only on a call.
 */
export interface PricingFaq {
  q: string;
  a: string;
}

export const pricingFaqs: PricingFaq[] = [
  {
    q: "Which package should I start with?",
    a: "Starter begins at $1,500, Growth at $3,500, and Scale normally falls between $5,000 and $10,000. Choose the closest base; extra pages or features are discussed and priced in the written scope before work starts.",
  },
  {
    q: "Do I need a long contract for every project?",
    a: "No. A straightforward project can use a clear written quote or order summary accepted in email or chat. Regulated, sensitive, or complex work may need a signed statement of work or other detailed agreement. In either case, the accepted written project terms control.",
  },
  {
    q: "How do payment milestones work?",
    a: "A common option is 30% at onboarding and 70% at the delivery milestone defined in the accepted project terms, but the parties may agree to another written schedule. The accepted terms also state currency, taxes, due dates, approval points, and any pause or cancellation terms.",
  },
  {
    q: "What if my project is bigger than Scale?",
    a: "Larger, multi-region, e-commerce, application, and integration-heavy work is scoped separately after discovery. The proposal lists the team, deliverables, dependencies, exclusions, and schedule for that engagement.",
  },
  {
    q: "What support is included?",
    a: "A package discussion may start with 15 business days of support for Starter and 30 business days for Growth and Scale. Support is included only when the accepted project terms state the period, start event, covered defects or minor adjustments, response expectations, exclusions, and any bespoke arrangement. Material new features, extra pages, and third-party changes are separately scoped.",
  },
  {
    q: "When does the 100% refund apply?",
    a: "When that protection is included in the accepted project terms, it applies if PandaCodeGen fails to deliver the promised deliverables under that written scope. The terms define the trigger, verification, and any cure process. It does not apply merely because preferences change, a new direction is requested, or work outside the agreed scope is desired.",
  },
  {
    q: "Can't we just make our current WordPress site faster instead?",
    a: "Often yes, and sometimes that is the right answer. Caching, image handling and removing unused plugins will make a slow site measurably faster without rebuilding it. What that does not change is the shape of the problem: the same plugin count still needs updating, and the next update can still break checkout. So the question is not whether the site can be made faster, it is whether you want a faster version of the current arrangement or a different arrangement. If your diagnosis lands on one plugin or one slow API call, repair it. We publish guides that talk people out of migrations for exactly this reason.",
  },
  {
    q: "Should we wait until after our busy season?",
    a: "That is usually a priorities question rather than a timing one, and it is worth separating the two. A migration of the size we quote most often is a few weeks of work, and your existing site stays live until cutover, so waiting three months mostly moves the same three weeks later. The costs that continue while you wait are the ones you already pay: the plugin and hosting bills, the maintenance time, and the risk that a plugin update breaks something during your busiest period. If the real constraint is that nobody on your side has capacity to review work, that is a genuine reason to wait and we would rather you said so.",
  },
  {
    q: "How do I justify this to a business partner or my board?",
    a: "Most people in that position need support rather than permission, so tell us what they will want to see and we will put it in the scope document. That is usually three things: what exactly is being delivered and what is excluded, what the acceptance criteria are, and what happens if we fail to deliver them. Because pricing is fixed and the performance target is written in with a defined test method, the document itself answers most internal objections without you having to relay them.",
  },
  {
    q: "What if the honest answer is that we should not migrate?",
    a: "Then we say so, and there is no charge for reaching that conclusion. A migration is worth doing when the platform has become the constraint: the plugin stack is the product, nobody will update anything because something breaks each time, or nobody can say what code runs during a purchase. It is not worth doing because a page is slow, because a single feature is missing, or because custom code sounds better. We would rather lose the project than deliver a rebuild that changes the number without explaining it.",
  },
  {
    q: "How should I compare providers?",
    a: "Compare the actual scope, migration plan, acceptance tests, ownership and licensing terms, third-party costs, change process, launch responsibilities, warranty, and remedies, not just the headline price.",
  },
  {
    q: "What determines the quote?",
    a: "The main drivers are URL and content volume, CMS structure, custom design and functionality, integrations, analytics, accessibility and compliance needs, stakeholders, migration risk, and deadline.",
  },
  {
    q: "What happens before you quote?",
    a: "We review your current platform and URL, primary goal, content and traffic scale, required integrations, timeline, budget range, and known constraints. We then document assumptions and open questions before pricing.",
  },
  {
    q: "How is the 90+ performance target checked?",
    a: "The accepted project terms name the representative pages and reproducible Lighthouse conditions for mobile and desktop. Each of three recorded pre-handover runs per agreed page/profile must score 90 or higher. This is a lab acceptance target, not a guarantee of field Core Web Vitals, rankings, revenue, or unchanged results after third-party or client changes.",
  },
];
