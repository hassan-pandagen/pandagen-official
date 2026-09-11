import Link from "next/link";
import { ArrowRight, Calculator, ListFilter, Inbox } from "lucide-react";

/**
 * Features built into the site, and what the owner can edit in each one.
 *
 * The 10 Sep feature and plugin-cost audit found the savings argument already
 * prominent on the service pages and the feature argument missing from the
 * homepage. Its recommended placement was after a real project and before the
 * packages, carrying three concrete feature examples, proof of what the client
 * edits, and the licence distinction stated once.
 *
 * Deliberately NOT a savings section. UnfairAdvantage further down already
 * makes the commercial case the honest way, by telling the reader to add up
 * their own invoices, and the same audit's first priority was to stop
 * repeating cost-removal claims rather than give them more prominence. So this
 * section argues the thing that is true regardless of anyone's plugin bill:
 * the feature fits the business, and the person who runs the business can
 * change it.
 *
 * Every example here is scoped per project, so the copy says "can be part of"
 * rather than naming them as included. Claiming them as delivered case studies
 * would need a permissioned, completed client build to point at.
 *
 * Kept deliberately short. The 9 Sep structure audit measured the mobile
 * homepage at ~30,000px and found the buying decisions arriving too late, and
 * the resequencing that followed moved the tier finder up to roughly 13,400px.
 * A first draft of this section ran 2,361px at 390 and pushed it to 15,795,
 * undoing part of that. Anything added here is paid for in how far a phone
 * reader has to scroll before being asked to choose a package.
 */

const features = [
  {
    icon: Calculator,
    title: "A calculator that prices your own work",
    body:
      "Someone puts in their numbers and gets a figure that follows your pricing rules. Deposits, minimums, volume bands and the jobs you turn down are all part of the logic.",
    edits: "Your rates, tiers and the wording of the result",
  },
  {
    icon: ListFilter,
    title: "A finder for your services, courses or locations",
    body:
      "Filters that match how customers actually choose, and a page for each result that search engines can index on its own.",
    edits: "Entries, categories, filter options and the empty-result message",
  },
  {
    icon: Inbox,
    title: "An enquiry form that routes by the answer",
    body:
      "Questions that change with what the visitor picks, then the enquiry lands in the right inbox with the context already attached.",
    edits: "Questions, answer options and where each type of enquiry lands",
  },
];

export default function CustomFeatures() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cognac">Built in, not bolted on</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal md:text-5xl">
            Features built around your business.{" "}
            <span className="font-serif font-normal italic text-cognac">Fewer subscriptions to manage.</span>
          </h2>
          <p data-speakable="true" className="mt-5 text-lg leading-8 text-stone-700">
            A quote calculator, a service finder or an enquiry form that routes itself can be part of the
            build rather than three more products to license. Each one follows your rules, and the person
            who runs the business can change how it behaves without booking a developer.
          </p>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-stone-300 bg-stone-300 md:grid-cols-3">
          {features.map(({ icon: Icon, title, body, edits }) => (
            <article key={title} className="bg-white p-6 md:p-7">
              <Icon aria-hidden="true" className="h-6 w-6 text-cognac" />
              <h3 className="mt-4 text-lg font-bold text-charcoal md:text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">{body}</p>
              <p className="mt-4 border-t border-stone-200 pt-3 text-sm leading-6 text-stone-700">
                <span className="font-bold text-charcoal">You edit:</span> {edits}
              </p>
            </article>
          ))}
        </div>

        {/* The licence distinction, stated once. The audit was specific that the
            claim only holds for the components themselves, and that a page
            making it has to say what still bills. */}
        <div className="mt-8 max-w-3xl">
          <p className="text-base leading-7 text-stone-700">
            The features we build you carry no separate monthly licence, and no vendor can retire one or
            change its price. That is the part we can promise. Running costs are a different question:
            hosting, email delivery, your content system and anything taking payments still have their own
            plans, and your quote names them before you commit. Which of your current subscriptions can
            actually end, we answer from your invoices rather than a table of list prices.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-7 text-sm font-bold text-white transition-colors hover:bg-cognac"
            >
              Get a feature and running-cost comparison <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/custom-engineering"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 px-7 text-sm font-bold text-charcoal transition-colors hover:border-cognac hover:text-cognac"
            >
              See how custom features get scoped
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
