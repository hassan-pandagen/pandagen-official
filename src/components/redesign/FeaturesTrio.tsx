import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// Built-in features. Redesign candidate, 24 Sep 2026. Body copy, links and
// destinations unchanged from CustomFeatures.tsx; the three icon cards become
// three numbered columns on hairlines. Titles renamed by the owner (24 Sep):
// the original phrasing ("A calculator that...") read as a description, not a
// named, searchable service, so each is now the term a buyer would type.

const features = [
  {
    title: "Quote & pricing calculators",
    body: "Someone puts in their numbers and gets a figure that follows your pricing rules. Deposits, minimums, volume bands and the jobs you turn down are all part of the logic.",
    edits: "Your rates, tiers and the wording of the result",
  },
  {
    title: "Service & location finders",
    body: "Filters that match how customers actually choose, and a page for each result that search engines can index on its own.",
    edits: "Entries, categories, filter options and the empty-result message",
  },
  {
    title: "Routed enquiry forms",
    body: "Questions that change with what the visitor picks, then the enquiry lands in the right inbox with the context already attached.",
    edits: "Questions, answer options and where each type of enquiry lands",
  },
];

export default function FeaturesTrio() {
  return (
    <section aria-labelledby="features-title" className="px-6 py-24 md:px-10 md:py-36" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2
            id="features-title"
            className="lg:col-span-7"
            style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
          >
            Features built around your business. Fewer subscriptions to manage.
          </h2>
          <p className="max-w-[34rem] self-end text-[17px] leading-[1.6] lg:col-span-5" style={{ color: T.body }}>
            A quote calculator, a service finder or an enquiry form that routes itself can be part of the build rather
            than three more products to license. Each one follows your rules, and the person who runs the business can
            change how it behaves without booking a developer.
          </p>
        </div>

        <ol className="mt-16 grid border-t md:mt-24 md:grid-cols-3" style={{ borderColor: T.rule }}>
          {features.map((f, i) => (
            <li
              key={f.title}
              className="feature-col flex flex-col border-b pb-10 pt-8 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
              style={{ borderColor: T.rule, borderLeft: i > 0 ? `1px solid ${T.rule}` : undefined }}
            >
              <span style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.accent, fontSize: "3.4rem", lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.75rem", lineHeight: 1.1 }}>
                {f.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.6]" style={{ color: T.body }}>
                {f.body}
              </p>
              <p className="mt-auto pt-8 text-[13px] leading-[1.6]" style={{ fontFamily: MONO, color: T.quiet }}>
                <span className="uppercase tracking-[0.12em]" style={{ color: T.ink }}>
                  You edit:
                </span>{" "}
                {f.edits}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-8 border-t pt-10 md:grid-cols-12" style={{ borderColor: T.rule }}>
          <p className="max-w-[46rem] text-[16px] leading-[1.7] md:col-span-8" style={{ color: T.body }}>
            The features we build you carry no separate monthly licence, and no vendor can retire one or change its
            price. That is the part we can promise. Running costs are a different question: hosting, email delivery,
            your content system and anything taking payments still have their own plans, and your quote names them
            before you commit. Which of your current subscriptions can actually end, we answer from your invoices rather
            than a table of list prices.
          </p>
          <div className="flex flex-col items-start gap-4 md:col-span-4 md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Get a feature and running-cost comparison <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/services/custom-engineering" className="text-[15px] font-medium" style={{ color: T.ink }}>
              See how custom features get scoped
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
