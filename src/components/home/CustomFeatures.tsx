import { businessFeatureCopy, businessFeatures } from "@/data/business-features";
import Link from "next/link";
import { ArrowRight, Calculator, Inbox, PackageCheck, MessageCircle } from "lucide-react";

// Four scoped business workflows; copy shared with the redesign preview.

export default function CustomFeatures() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cognac">Built in, not bolted on</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal md:text-5xl">
            {businessFeatureCopy.heading}
          </h2>
          <p data-speakable="true" className="mt-5 text-lg leading-8 text-stone-700">
            {businessFeatureCopy.intro}
          </p>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-stone-300 bg-stone-300 md:grid-cols-2">
          {businessFeatures.map(({ title, body, edits, fit }, index) => {
            const Icon = [Calculator, Inbox, PackageCheck, MessageCircle][index];
            return (
            <article key={title} className="bg-white p-6 md:p-7">
              <Icon aria-hidden="true" className="h-6 w-6 text-cognac" />
              <h3 className="mt-4 text-lg font-bold text-charcoal md:text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">{body}</p>
              <p className="mt-3 text-sm leading-6 text-stone-600"><span className="font-bold">Good for:</span> {fit}</p>
              <p className="mt-4 border-t border-stone-200 pt-3 text-sm leading-6 text-stone-700">
                <span className="font-bold text-charcoal">You edit:</span> {edits}
              </p>
            </article>
            );
          })}
        </div>

        {/* The licence distinction, stated once. The audit was specific that the
            claim only holds for the components themselves, and that a page
            making it has to say what still bills. */}
        <div className="mt-8 max-w-3xl">
          <p className="text-base leading-7 text-stone-700">
            {businessFeatureCopy.costs}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-7 text-sm font-bold text-white transition-colors hover:bg-cognac"
            >
              Discuss a feature for your website <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/custom-engineering"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 px-7 text-sm font-bold text-charcoal transition-colors hover:border-cognac hover:text-cognac"
            >
              See what we can build
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
