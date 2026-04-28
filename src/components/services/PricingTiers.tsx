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
  /** Section heading. Cognac italic accent goes on last word/phrase. */
  heading: string;
  headingAccent: string;
  subheading?: string;
  /** The "typical agency" vs PandaCodeGen comparison strip. */
  agencyComparison: {
    agencyPrice: string;
    agencyNote: string;
    ourPrice: string;
    ourNote: string;
  };
  tiers: PricingTier[];
  /** Footer disclaimer text. */
  footnote?: string;
};

export default function PricingTiers({
  heading,
  headingAccent,
  subheading = "Fixed-scope pricing. No hourly traps. Start small, scale when ready.",
  agencyComparison,
  tiers,
  footnote = "All builds include: zero downtime migration, 301 redirect mapping, SEO preservation, your domain stays yours, you own 100% of the code.",
}: Props) {
  return (
    <section className="py-12 md:py-20 px-6 bg-paper">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-3">Honest Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight leading-tight">
            {heading} <br />
            <span className="font-serif italic text-cognac">{headingAccent}</span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg">{subheading}</p>
        </div>

        {/* Agency comparison strip */}
        <div className="max-w-3xl mx-auto mb-10 grid grid-cols-2 gap-4 md:gap-6">
          <div className="p-5 md:p-6 rounded-2xl bg-white border border-red-200 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-red-500 mb-2">Typical Agency</p>
            <p className="text-2xl md:text-3xl font-black text-red-500 tracking-tight leading-none">{agencyComparison.agencyPrice}</p>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">{agencyComparison.agencyNote}</p>
          </div>
          <div className="p-5 md:p-6 rounded-2xl bg-white border border-emerald-300 text-center shadow-card">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-emerald-600 mb-2">PandaCodeGen</p>
            <p className="text-2xl md:text-3xl font-black text-emerald-600 tracking-tight leading-none">{agencyComparison.ourPrice}</p>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">{agencyComparison.ourNote}</p>
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
                  Most Common
                </div>
              )}
              <p className={`text-[11px] uppercase tracking-[0.22em] font-bold mb-2 ${tier.featured ? "text-cognac" : "text-stone-500"}`}>{tier.tier}</p>
              <p className={`text-2xl md:text-3xl font-black leading-tight tracking-tight mb-1 ${tier.featured ? "text-white" : "text-charcoal"}`}>{tier.price}</p>
              <p className={`text-sm mb-4 ${tier.featured ? "text-stone-300" : "text-stone-500"}`}>Ships in {tier.timeline}</p>
              <p className={`text-sm italic mb-5 leading-relaxed ${tier.featured ? "text-stone-300" : "text-stone-600"}`}>{tier.fit}</p>
              <ul className="space-y-2.5 mb-6">
                {tier.includes.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${tier.featured ? "text-stone-200" : "text-stone-600"}`}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-cognac" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className={`w-full px-6 py-3 font-bold rounded-full transition-all ${tier.featured ? "bg-white text-charcoal hover:bg-stone-100" : "bg-charcoal text-white hover:bg-cognac"}`}
              >
                {tier.cta ?? "Get Scoped Quote"}
              </button>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-stone-500 mt-8 max-w-2xl mx-auto">{footnote}</p>
      </div>
    </section>
  );
}
