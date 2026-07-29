"use client";

import { ArrowRight, CheckCircle2, Gauge, Receipt, ShoppingCart } from "lucide-react";

interface ShopifyKillerProps {
  onOpenQuote?: () => void;
}

const decisions = [
  {
    icon: ShoppingCart,
    title: "Keep the commerce backend when it fits",
    body: "A headless storefront can retain Shopify or WooCommerce for catalog, checkout, payment, and operations. Replacing the backend is a separate decision with a separate risk and cost model.",
  },
  {
    icon: Gauge,
    title: "Measure the actual bottleneck",
    body: "Collect field and lab performance by template, then identify theme code, apps, tags, images, checkout constraints, and operational dependencies before recommending a rebuild.",
  },
  {
    icon: Receipt,
    title: "Price the whole operating model",
    body: "Compare plan, app, payment, hosting, database, email, analytics, monitoring, maintenance, support, and engineering costs using current provider terms and realistic usage.",
  },
];

export default function ShopifyKiller({ onOpenQuote }: ShopifyKillerProps) {
  const openQuote = () => {
    if (onOpenQuote) onOpenQuote();
    else window.dispatchEvent(new Event("open-quote-modal"));
  };

  return (
    <section className="relative overflow-hidden px-6 py-12 md:py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-stone-300 bg-white p-7 shadow-card md:p-12">
        <p className="text-sm font-bold uppercase tracking-widest text-cognac">Commerce diagnostic</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Headless commerce is an option, not a default answer.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
          The right architecture depends on measured storefront constraints, catalog and checkout needs, team workflow, integrations, traffic, change frequency, compliance, budget, and the cost of operating both the current and proposed stack.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {decisions.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-2xl border border-stone-300 bg-stone-50 p-6">
              <Icon className="h-7 w-7 text-cognac" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-charcoal">{title}</h3>
              <p className="mt-3 leading-7 text-stone-700">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-8 rounded-2xl bg-midnight p-7 text-white md:grid-cols-[1fr_auto] md:items-center md:p-9">
          <div>
            <h3 className="text-2xl font-bold">Evidence to bring to discovery</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Representative URLs and field metrics", "Current plan and app invoices", "Catalog, checkout, and account requirements", "Analytics, consent, and integration map", "Content and merchandising workflow", "Traffic, timeline, budget, and acceptance criteria"].map((item) => (
                <li key={item} className="flex gap-3 text-stone-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={openQuote}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-bold text-charcoal hover:bg-orange-100"
          >
            Get your migration plan <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
