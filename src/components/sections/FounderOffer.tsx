"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Clock, Star } from "lucide-react";

const requirements = [
  "Your site is on WordPress, Webflow, Wix, Squarespace, or GoHighLevel",
  "Under 15 pages (no e-commerce or complex integrations)",
  "You can provide a verified review on Google or Clutch after launch",
  "You are available to give fast feedback during the build week",
];

const spots = [
  { filled: true },
  { filled: false },
  { filled: false },
];

export default function FounderOffer() {
  return (
    <section
      className="bg-white border-y border-stone-200"
      style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}
    >
      <div className="container mx-auto px-6 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-[#0C0A09] overflow-hidden"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-8 pt-8 pb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-stone-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cognac opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cognac" />
              </span>
              Founder Offer. March 2026
            </div>
            <div className="flex items-center gap-2">
              {spots.map((spot, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full border-2 ${
                    spot.filled
                      ? "bg-cognac border-cognac"
                      : "bg-transparent border-stone-500"
                  }`}
                  title={spot.filled ? "Spot taken" : "Spot available"}
                />
              ))}
              <span className="text-xs text-stone-400 ml-1">2 spots left</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0">

            {/* Left: Offer details */}
            <div className="px-8 py-10">
              <div className="flex items-end gap-3 mb-4">
                <span className="text-7xl font-black text-white leading-none">$500</span>
                <div className="pb-2">
                  <div className="text-stone-400 line-through text-sm font-medium">$5,000+</div>
                  <div className="text-cognac text-sm font-bold">Full migration</div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                We migrate your site.<br />
                <span className="font-serif italic text-cognac">You leave us a review.</span>
              </h2>

              <p className="text-stone-400 text-sm leading-relaxed mb-8">
                We are selecting 3 businesses this month for a discounted migration.
                Custom Next.js build, 95+ PageSpeed guaranteed, zero downtime launch.
                In exchange, we ask for an honest verified review after launch.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1.5 text-stone-300 text-xs">
                  <Zap className="w-3.5 h-3.5 text-cognac" />
                  Delivered in 1 week
                </div>
                <div className="flex items-center gap-1.5 text-stone-300 text-xs">
                  <Clock className="w-3.5 h-3.5 text-cognac" />
                  95+ PageSpeed guaranteed
                </div>
                <div className="flex items-center gap-1.5 text-stone-300 text-xs">
                  <Star className="w-3.5 h-3.5 text-cognac" />
                  You own the code
                </div>
              </div>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openFounderModal"))}
                className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all"
              >
                Apply for a Spot <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Requirements */}
            <div className="px-8 py-10 border-t md:border-t-0 md:border-l border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">
                Requirements to qualify
              </h3>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" />
                    <span className="text-stone-300 text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-stone-200 font-medium leading-relaxed">
                  This is not a template build. You get the same custom Next.js architecture
                  we deliver to full-price clients. The only difference is the price,
                  and we ask for an honest review in return.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
