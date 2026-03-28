"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function HeroStatusPill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-bold uppercase tracking-widest text-stone-500 mb-8 shadow-xs"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cognac opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cognac" />
      </span>
      Accepting Q2 Clients
    </motion.div>
  );
}


export function HeroCTAs() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start gap-4"
      >
        {/* Primary CTA: Charcoal (signals seriousness, not SaaS) */}
        <button
          data-cal-namespace="discovery"
          data-cal-link="pandagen/discovery"
          data-cal-config='{"layout":"month_view"}'
          className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold text-base rounded-full hover:bg-cognac transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 hover:scale-105 cursor-pointer"
        >
          Get a Free Quote <ArrowRight className="w-5 h-5 text-cognac" />
        </button>

        {/* Secondary CTA: White surface card */}
        <Link
          href="/work"
          className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-charcoal text-charcoal font-bold text-base rounded-full hover:bg-charcoal hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-card hover:scale-105 cursor-pointer"
        >
          View Case Studies <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* Social proof micro-line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-xs text-stone-400 mt-1"
      >
        WordPress · Shopify · Wix · Squarespace · Any platform · 100/100 PageSpeed · $0/mo hosting
      </motion.p>
    </>
  );
}

export function HeroTrustSignals() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.55 }}
      className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 text-sm text-stone-500 font-medium"
    >
      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4 text-cognac shrink-0" />
        <span>&lt;1s Load Time</span>
      </div>
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-charcoal shrink-0" />
        <span>Bank Grade Security</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-charcoal shrink-0" />
        <span>Fixed Pricing</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-charcoal shrink-0" />
        <span>Zero Maintenance</span>
      </div>
    </motion.div>
  );
}
