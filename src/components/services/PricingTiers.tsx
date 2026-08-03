"use client";

import { motion } from "@/components/ui/motion";
import { CheckCircle2 } from "lucide-react";

export type PricingTier = {
  tier: string;
  price: string;
  timeline: string;
  fit: string;
  includes: string[];
  featured?: boolean;
  cta?: string;
};

type Props = {
  /** Retained for call-site compatibility; unsafe promotional headings are not rendered. */
  heading: string;
  headingAccent: string;
  subheading?: string;
  /** Retained for call-site compatibility; competitor figures are not rendered. */
  agencyComparison: {
    agencyPrice: string;
    agencyNote: string;
    ourPrice: string;
    ourNote: string;
  };
  tiers: PricingTier[];
  /** Retained for call-site compatibility; the component renders its own qualification. */
  footnote?: string;
};

const proposalItems = [
  "What you get, what you do not, and what we need from you",
  "What we are waiting on, how you sign it off, and how changes get approved",
  "When you pay, what support you get, who owns it, which licences, and how it is handed over",
];

export default function PricingTiers({ tiers }: Props) {
  return (
    <section className="py-12 md:py-20 px-6 bg-paper">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-3">Scope and Commercial Review</p>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight leading-tight">
            Choose a planning path.{" "}
            <span className="font-serif font-normal italic text-cognac md:block">Confirm the project in writing.</span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg">
            These are here to shape the first conversation. They are not quotes and not delivery promises. The scope, price, timing, tests, support, ownership and remedies are stated in the accepted written project terms, which may be a concise quote or order summary or a more detailed agreement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          <div className="p-5 md:p-6 rounded-2xl bg-white border border-stone-300 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-stone-600 mb-2">Before Discovery</p>
            <p className="text-xl md:text-2xl font-black text-charcoal tracking-tight leading-none">Working assumptions</p>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">We still have to look at the features, the integrations, the content, what could go wrong in the migration, and what it depends on.</p>
          </div>
          <div className="p-5 md:p-6 rounded-2xl bg-[#faf7f2] border border-cognac/30 text-center shadow-card">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-2">After Discovery</p>
            <p className="text-xl md:text-2xl font-black text-charcoal tracking-tight leading-none">Written proposal</p>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">The approved scope is where we write down what we committed to, what we assumed, what is excluded, the milestones, and how you sign it off.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl p-6 md:p-8 border ${tier.featured ? "bg-charcoal text-white border-cognac shadow-elevated" : "bg-white text-charcoal border-stone-200 shadow-card"}`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cognac text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                  Planning Path
                </div>
              )}
              <p className={`text-[11px] uppercase tracking-[0.22em] font-bold mb-2 ${tier.featured ? "text-orange-300" : "text-stone-600"}`}>Scope option</p>
              <h3 className={`text-2xl md:text-3xl font-black leading-tight tracking-tight mb-2 ${tier.featured ? "text-white" : "text-charcoal"}`}>{tier.tier}</h3>
              <p className={`text-sm mb-5 leading-relaxed ${tier.featured ? "text-stone-300" : "text-stone-600"}`}>
                We review what this actually needs before committing to anything commercially or on delivery.
              </p>
              <ul className="space-y-2.5 mb-6">
                {proposalItems.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${tier.featured ? "text-stone-200" : "text-stone-600"}`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.featured ? "text-orange-300" : "text-cognac"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event", "cta_click", { cta: "pricing_tier", location: "service_pricing" }); window.dispatchEvent(new Event("open-quote-modal")); } }}
                className={`w-full px-6 py-3 font-bold rounded-full transition-all ${tier.featured ? "bg-white text-charcoal hover:bg-stone-100" : "bg-charcoal text-white hover:bg-cognac"}`}
              >
                Get your migration plan
              </button>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-stone-600 mt-8 max-w-2xl mx-auto">
          Examples on a website are not a quote. Third-party fees, what we need from you, migration risk and anything out of scope get identified during discovery and documented in the proposal.
        </p>
      </div>
    </section>
  );
}
