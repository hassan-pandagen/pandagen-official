"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Sparkles } from "lucide-react";

interface DiscoveryPortalProps {
  onOpenQuote?: () => void;
}

export default function DiscoveryPortal({ onOpenQuote }: DiscoveryPortalProps) {
  return (
    <section className="py-24 px-4 md:px-6 bg-slate-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] bg-[#0B1120] overflow-hidden px-8 py-20 md:px-20 md:py-24 text-center shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle blue ambient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cognac/6 blur-[140px] rounded-full pointer-events-none" />

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Top highlight line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative z-10 max-w-3xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Accepting Q2 Clients · 2026
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Ready to build<br />
              <span className="font-serif italic text-stone-400">
                something legendary?
              </span>
            </h2>

            {/* Subhead */}
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop losing revenue to slow load times. We re-engineer your entire web infrastructure in 30 days. Fixed price. Guaranteed results.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary — White on blue = maximum contrast */}
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full sm:w-auto px-10 py-5 bg-white text-[#0B1120] text-lg font-bold rounded-full hover:scale-[1.03] transition-transform shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Book Strategy Call
              </button>

              {/* Secondary */}
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-10 py-5 bg-white/10 border border-white/25 text-white text-lg font-bold rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Fixed Price Quote
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust strip */}
            <div className="mt-16 pt-10 border-t border-white/15 flex flex-wrap justify-center gap-x-10 gap-y-3">
              {["30-Day Money-Back", "Fixed Price. No Surprises", "US-Registered LLC"].map((item) => (
                <span key={item} className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                  ✓ {item}
                </span>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
