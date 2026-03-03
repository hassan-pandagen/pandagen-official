"use client";

import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Gauge, Lock, Shield, RefreshCcw, Eye } from "lucide-react";

interface WordPressKillerProps {
  onOpenQuote?: () => void;
}

const comparisonRows = [
  { metric: "Load Speed", bad: "2-5s", good: "< 1s", icon: Gauge },
  { metric: "Monthly Cost", bad: "$150+", good: "$0", icon: DollarSign },
  { metric: "Security", bad: "Vulnerable", good: "Bank-Grade", icon: Shield },
  { metric: "Maintenance", bad: "Daily Updates", good: "Zero", icon: RefreshCcw },
  { metric: "Ownership", bad: "Rented", good: "100% Yours", icon: Lock },
  { metric: "AI Search", bad: "Invisible", good: "Optimized", icon: Eye },
];

export default function WordPressKiller({ onOpenQuote }: WordPressKillerProps) {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">

      {/* Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-red-100/30 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-white border border-red-200 shadow-[0_20px_60px_rgba(0,0,0,0.06),0_0_0_1px_rgba(239,68,68,0.08)]">

              <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-0">

                {/* LEFT: The Pain */}
                <div className="p-6 md:p-14 flex flex-col justify-center">

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full w-fit mb-6">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Warning</span>
                  </div>

                  <h2 className="text-2xl md:text-5xl font-bold text-charcoal leading-tight mb-3">
                    Stop Losing Money.
                  </h2>

                  <h3 className="text-3xl md:text-6xl font-black leading-tight mb-6 md:mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                      WordPress is a liability.
                    </span>
                  </h3>

                  <p className="text-base md:text-lg text-stone-600 mb-8 leading-relaxed max-w-md">
                    Plugins break. Databases bloat. Security fails. AI search engines can&apos;t read your page builders. Stop patching a broken ship.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={onOpenQuote}
                      className="group px-6 py-3 md:px-8 md:py-4 bg-charcoal text-white font-bold text-sm md:text-base rounded-full hover:bg-stone-800 transition-all flex items-center justify-center gap-2 hover:scale-105"
                    >
                      Calculate Savings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      data-cal-namespace="discovery"
                      data-cal-link="pandagen/discovery"
                      data-cal-config='{"layout":"month_view"}'
                      className="px-6 py-3 md:px-8 md:py-4 bg-stone-50 border border-gray-200 text-charcoal font-semibold text-sm md:text-base rounded-full hover:bg-stone-100 transition-all"
                    >
                      Book Audit
                    </button>
                  </div>
                </div>

                {/* RIGHT: Enhanced Comparison Table */}
                <div className="p-6 md:p-10 md:border-l border-gray-200 bg-stone-50/50 overflow-x-hidden">

                  {/* Table Header */}
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                    <h4 className="text-lg font-bold text-charcoal">WordPress vs PandaGen</h4>
                  </div>

                  {/* Column Headers */}
                  <div className="grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_110px_110px] gap-2 md:gap-3 pb-3 mb-1">
                    <div className="text-[11px] text-stone-500 uppercase tracking-widest font-bold">Metric</div>
                    <div className="text-[11px] text-red-500 uppercase tracking-widest font-bold text-center">Them</div>
                    <div className="text-[11px] text-cognac uppercase tracking-widest font-bold text-center">Us</div>
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
                        className="grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_110px_110px] gap-2 md:gap-3 items-center py-3 px-3 -mx-3 rounded-xl hover:bg-white transition-all group cursor-default"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center group-hover:bg-stone-50 group-hover:border-stone-300 transition-colors flex-shrink-0">
                            <row.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-stone-500 group-hover:text-cognac transition-colors" />
                          </div>
                          <span className="text-xs md:text-sm text-charcoal font-medium">{row.metric}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] md:text-xs text-red-600 bg-red-50 border border-red-100 px-1.5 md:px-2.5 py-1 rounded-md whitespace-nowrap">{row.bad}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] md:text-xs text-cognac font-bold bg-cognac/10 border border-cognac/20 px-1.5 md:px-2.5 py-1 rounded-md whitespace-nowrap">{row.good}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Savings Breakdown Card */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 p-5 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-green-glow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[11px] text-green-700 uppercase font-bold tracking-wider">Your Potential Savings</p>
                      <div className="h-9 w-9 bg-green-500 rounded-full flex items-center justify-center text-white shadow-green-glow">
                        <DollarSign className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-4">
                      {[
                        { label: "Premium hosting (WP Engine etc.)", amount: "$1,200" },
                        { label: "Plugin licenses & renewals", amount: "$960" },
                        { label: "Security & backup tools", amount: "$600" },
                        { label: "Monthly maintenance retainer", amount: "$2,400" },
                        { label: "Dev fixes & downtime incidents", amount: "$2,400" },
                        { label: "Lost conversions (slow load speed)", amount: "$5,040" },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between text-[11px]">
                          <span className="text-green-800/70">{row.label}</span>
                          <span className="font-bold text-green-800 tabular-nums">{row.amount}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-green-300/60 pt-3 flex items-center justify-between">
                      <span className="text-[11px] text-green-700 uppercase font-bold tracking-wider">Total Per Year</span>
                      <p className="text-2xl font-black text-charcoal">$12,600<span className="text-sm font-medium text-stone-500">/yr</span></p>
                    </div>
                  </motion.div>

                </div>
              </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
