"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import AuditWidget from "@/components/audit/AuditWidget";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-paper">

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none" />

      {/* Subtle stone grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.03,
        }}
      />

      {/* Soft warm glow — far less aggressive than the blue orbs */}
      <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* --- LEFT: EDITORIAL COPY --- */}
        <div className="max-w-2xl">

          {/* Status pill — cognac pulse dot */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-bold uppercase tracking-widest text-stone-500 mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cognac opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cognac" />
            </span>
            Accepting Q2 Clients
          </motion.div>

          {/* Headline: LCP element — must render immediately, no opacity animation */}
          <h1 className="text-5xl md:text-7xl font-sans font-bold text-charcoal tracking-tight mb-6 leading-[1.1]">
            Your slow website is <br />
            <span className="font-serif italic text-stone-500">
              costing you revenue.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-lg font-medium"
          >
            We replace slow WordPress, Shopify, Wix, Squarespace, and drag and drop sites with{" "}
            <span className="text-charcoal font-bold underline decoration-cognac/40 decoration-2 underline-offset-2">
              custom built websites that actually perform
            </span>
            . Under 1 second. No monthly fees. No vendor lock-in.
          </motion.p>

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
              className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold text-base rounded-full hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5 text-cognac" />
            </button>

            {/* Secondary CTA: White surface card */}
            <Link
              href="/work"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-stone-200 text-charcoal font-bold text-base rounded-full hover:bg-stone-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-card"
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

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 text-sm text-stone-500 font-medium"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cognac flex-shrink-0" />
              <span>&lt;1s Load Time</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-charcoal flex-shrink-0" />
              <span>Bank Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-charcoal flex-shrink-0" />
              <span>Fixed Pricing</span>
            </div>
          </motion.div>

        </div>

        {/* --- RIGHT: AUDIT WIDGET on white card lifted off the paper bg --- */}
        <div className="relative">
          {/* Warm white halo behind widget for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10">
            <AuditWidget />
          </div>
        </div>

      </div>
    </section>
  );
}
