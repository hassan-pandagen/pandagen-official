"use client";

import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Gauge, ShoppingCart, CreditCard, Globe, Smartphone } from "lucide-react";

interface ShopifyKillerProps {
  onOpenQuote?: () => void;
}

const comparisonRows = [
  { metric: "Load Speed", bad: "3-5s", good: "< 1s", icon: Gauge },
  { metric: "App Fees", bad: "$1,500/mo", good: "$0", icon: DollarSign },
  { metric: "Checkout", bad: "Generic", good: "Custom Logic", icon: CreditCard },
  { metric: "Mobile Score", bad: "30-50", good: "95+", icon: Smartphone },
  { metric: "Design", bad: "Template", good: "Fully Custom", icon: ShoppingCart },
  { metric: "SEO Control", bad: "Locked URLs", good: "Full Control", icon: Globe },
];

export default function ShopifyKiller({ onOpenQuote }: ShopifyKillerProps) {
  return (
    <section className="py-12 md:py-24 bg-transparent relative overflow-hidden">

      {/* Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-green-900/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative p-[1px] rounded-2xl md:rounded-[2rem] bg-gradient-to-b from-green-500/30 via-white/10 to-transparent">
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#080c08] to-[#050505] shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_80px_rgba(34,197,94,0.08)]">

              <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-0">

                {/* LEFT: The Pain */}
                <div className="p-6 md:p-14 flex flex-col justify-center">

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/15 border border-green-500/30 rounded-full w-fit mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider">App Tax Alert</span>
                  </div>

                  <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight mb-3">
                    Stop Paying App Taxes.
                  </h2>

                  <h3 className="text-3xl md:text-6xl font-black leading-tight mb-6 md:mb-8">
                    <span
                      style={{
                        backgroundImage: 'linear-gradient(to right, #4ade80, #22d3ee, #4ade80)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Go headless.
                    </span>
                  </h3>

                  <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-md">
                    Shopify apps drain $1,500+/mo. Liquid themes cap your speed at 3+ seconds. AI search engines skip slow stores. Keep the backend, replace the frontend.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={onOpenQuote}
                      className="group px-6 py-3 md:px-8 md:py-4 bg-neon text-black font-bold text-sm md:text-base rounded-full shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all flex items-center justify-center gap-2 hover:scale-105"
                    >
                      Calculate Savings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      data-cal-namespace="discovery"
                      data-cal-link="pandagen/discovery"
                      data-cal-config='{"layout":"month_view"}'
                      className="px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-white/20 text-white font-semibold text-sm md:text-base rounded-full hover:bg-white/10 transition-all"
                    >
                      Book Audit
                    </button>
                  </div>
                </div>

                {/* RIGHT: Enhanced Comparison Table */}
                <div className="p-6 md:p-10 md:border-l border-white/5 bg-white/[0.02]">

                  {/* Table Header */}
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                    <h4 className="text-lg font-bold text-white">Shopify Theme vs Custom</h4>
                  </div>

                  {/* Column Headers */}
                  <div className="grid grid-cols-[1fr_110px_110px] gap-3 pb-3 mb-1">
                    <div className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">Metric</div>
                    <div className="text-[11px] text-red-400/70 uppercase tracking-widest font-bold text-center">Theme</div>
                    <div className="text-[11px] text-neon/70 uppercase tracking-widest font-bold text-center">Custom</div>
                  </div>

                  {/* Rows */}
                  <div className="space-y-1">
                    {comparisonRows.map((row, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="grid grid-cols-[1fr_110px_110px] gap-3 items-center py-3 px-3 -mx-3 rounded-xl hover:bg-white/[0.04] transition-all group cursor-default"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                            <row.icon className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                          </div>
                          <span className="text-sm text-gray-300 font-medium">{row.metric}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-xs text-red-400/80 bg-red-500/[0.08] px-2.5 py-1 rounded-md whitespace-nowrap">{row.bad}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-xs text-neon font-bold bg-neon/[0.08] px-2.5 py-1 rounded-md whitespace-nowrap">{row.good}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Savings Card */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 p-5 bg-gradient-to-r from-green-500/10 to-emerald-900/15 border border-green-500/25 rounded-2xl flex items-center justify-between"
                  >
                    <div>
                      <p className="text-[11px] text-green-400 uppercase font-bold tracking-wider mb-1">Your Potential Savings</p>
                      <p className="text-2xl md:text-3xl font-bold text-white">$18,000<span className="text-lg text-gray-400">/yr</span></p>
                    </div>
                    <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold shadow-[0_0_20px_#22c55e]">
                      <DollarSign className="w-6 h-6" />
                    </div>
                  </motion.div>

                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}