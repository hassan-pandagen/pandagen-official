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
    q: "Do you have a minimum project size?",
    a: "No. We start at $1,500 for a 5 to 7 page site, and a small project is quoted the same way as a large one. Most custom Next.js agencies will not start below $10,000, and several will not start below $50,000, so a small business is often turned away before it gets a price. You get a fixed price before we begin either way.",
  },
  {
    q: "Which package should I start with?",
    a: "Starter begins at $1,500, Growth at $3,500, and Scale normally falls between $5,000 and $10,000. Pick the closest one. Extra pages or features are priced and written into your quote before anything starts.",
  },
  {
    q: "Do I need a long contract for every project?",
    a: "No. Most projects run on a short written quote you accept by email. Only regulated or complex work needs a longer signed agreement. Either way, the written quote is what counts.",
  },
  {
    q: "When do I pay?",
    a: "Usually 30% to start and 70% when the work is delivered. We can agree a different split in writing. Your quote also states the currency, any tax, when payments are due, and what happens if the project pauses or is cancelled.",
  },
  {
    q: "What if my project is bigger than Scale?",
    a: "Bigger stores, apps, multiple regions or heavy integration work are priced on their own after one call. Your quote names the team, what gets built, what does not, and the dates.",
  },
  {
    q: "What support is included?",
    a: "Usually 15 working days after launch on Starter, and 30 on Growth and Scale, for fixing anything that is not working right and small tweaks. Your quote states the exact period and what it covers. New features, extra pages and changes to other people's tools are quoted separately.",
  },
  {
    q: "When does the 100% refund apply?",
    a: "Where your quote includes it, you get your money back if we fail to deliver what the quote promised. Your quote says exactly what triggers it and how it is checked. It does not apply because you changed your mind, want a new direction, or want work that was never in the quote.",
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
    a: "Look past the headline price. Compare what is actually built, how your links get moved, what has to be working before you sign off, who owns the code, what you still pay monthly, and what happens if something breaks.",
  },
  {
    q: "What determines the quote?",
    a: "How many pages and posts you have, how much of the design is custom, what the site connects to, whether you need accessibility or compliance work, how many people sign off, and your deadline.",
  },
  {
    q: "What happens before you quote?",
    a: "We look at your current site, what you want it to do, how big it is, what it connects to, your timeline and your budget. Then we write down what we assumed and what we still need to know, before quoting.",
  },
  {
    q: "How is the 90+ performance target checked?",
    a: "Your quote names which pages we test and on what device. Each one has to score 90 or better on Google PageSpeed, three times in a row, before we hand over. That is a test-bench score. It is not a promise about your rankings, your revenue, or what happens after someone adds a new tool to the site.",
  },
];
