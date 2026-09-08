"use client";

import { motion } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { trackGAEvent } from "@/components/GoogleAnalytics";

export function HeroCTAs() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start gap-4"
      >
        {/* Primary CTA: Charcoal (signals seriousness, not SaaS).
            Opens the quote form (lower friction than Cal.com, better on mobile). */}
        <button
          onClick={() => {
            trackGAEvent("cta_click", { cta: "get_migration_plan", location: "hero" });
            window.dispatchEvent(new Event("open-quote-modal"));
          }}
          className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold text-base rounded-full hover:bg-cognac transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 hover:scale-105 cursor-pointer"
        >
          Get your migration plan <ArrowRight className="w-5 h-5 text-cognac" />
        </button>

        {/* Secondary CTA: White surface card */}
        <Link
          href="/work"
          onClick={() => trackGAEvent("cta_click", { cta: "view_case_studies", location: "hero" })}
          className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-charcoal text-charcoal font-bold text-base rounded-full hover:bg-charcoal hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-card hover:scale-105 cursor-pointer"
        >
          See our work <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </>
  );
}
