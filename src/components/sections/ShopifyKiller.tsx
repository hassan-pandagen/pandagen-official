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
    <section className="py-12 md:py-24 relative overflow-hidden">

      {/* Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-green-100/40 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl md:rounded-4xl overflow-hidden bg-white border border-green-200 shadow-[0_20px_60px_rgba(0,0,0,0.06),0_0_0_1px_rgba(34,197,94,0.08)]">

              <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-0">

                {/* LEFT: The Pain */}
                <div className="p-6 md:p-14 flex flex-col justify-center">

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full w-fit mb-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-green-700 uppercase tracking-wider">App Tax Alert</span>
                  </div>

                  <h2 className="text-2xl md:text-5xl font-bold text-charcoal leading-tight mb-3">
                    Stop Paying App Taxes.
                  </h2>

                  <h3 className="text-3xl md:text-6xl font-black leading-tight mb-6 md:mb-8">
                    <span className="font-serif italic text-cognac">
                      Go headless.
                    </span>
                  </h3>

                  <p className="text-base md:text-lg text-stone-600 mb-8 leading-relaxed max-w-md">
                    Shopify apps drain $1,500+/mo. Liquid themes cap your speed at 3+ seconds. AI search engines skip slow stores. Keep the backend, replace the frontend.
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
                      className="px-6 py-3 md:px-8 md:py-4 bg-stone-50 border border-stone-200 text-charcoal font-semibold text-sm md:text-base rounded-full hover:bg-stone-100 transition-all"
                    >
                      Book Audit
                    </button>
                  </div>
                </div>

                {/* RIGHT: Enhanced Comparison Table */}
                <div className="p-6 md:p-10 md:border-l border-stone-200 bg-stone-50/50 overflow-x-hidden">

                  {/* Table Header */}
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-stone-200">
                    <h4 className="text-lg font-bold text-charcoal">Shopify Theme vs Custom</h4>
                  </div>

                  {/* Column Headers */}
                  <div className="grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_110px_110px] gap-2 md:gap-3 pb-3 mb-1">
                    <div className="text-[11px] text-stone-500 uppercase tracking-widest font-bold">Metric</div>
                    <div className="text-[11px] text-red-500 uppercase tracking-widest font-bold text-center">Theme</div>
                    <div className="text-[11px] text-cognac uppercase tracking-widest font-bold text-center">Custom</div>
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
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center group-hover:bg-stone-50 group-hover:border-stone-300 transition-colors shrink-0">
                            <row.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-stone-500 group-hover:text-cognac transition-colors" />
                          </div>
                          <span className="text-xs md:text-sm text-charcoal font-medium">{row.metric}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] md:text-xs text-red-600 bg-red-50 border border-red-100 px-1.5 md:px-2.5 py-1 rounded-md whitespace-nowrap">{row.bad}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] md:text-xs text-cognac font-bold bg-stone-50 border border-stone-200 px-1.5 md:px-2.5 py-1 rounded-md whitespace-nowrap">{row.good}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Savings Card, Line-Item Breakdown */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 p-5 bg-linear-to-b from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-green-glow"
                  >
                    <p className="text-[11px] text-green-700 uppercase font-bold tracking-wider mb-4">Typical Shopify App Stack (Advanced Plan)</p>
                    <div className="space-y-1.5 mb-4">
                      {[
                        { name: "Shopify Advanced plan",      cost: "$399/mo" },
                        { name: "Email/SMS (Klaviyo)",         cost: "$150/mo" },
                        { name: "Reviews (Yotpo/Okendo)",      cost: "$119/mo" },
                        { name: "Upsell engine (Rebuy)",       cost: "$99/mo"  },
                        { name: "Landing pages (Shogun)",      cost: "$149/mo" },
                        { name: "Helpdesk (Gorgias)",          cost: "$60/mo"  },
                        { name: "Loyalty program",             cost: "$79/mo"  },
                        { name: "Theme dev & maintenance",     cost: "$200/mo" },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center text-xs text-green-800">
                          <span className="text-green-700">{item.name}</span>
                          <span className="font-bold">{item.cost}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-green-200 pt-3 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-green-700 uppercase font-bold tracking-wider">Your Potential Savings</p>
                        <p className="text-xs text-green-600 mt-0.5">vs. $0 to $50/mo on custom code</p>
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-charcoal">$15K to $18K<span className="text-base text-stone-500">/yr</span></p>
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
