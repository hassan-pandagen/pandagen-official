"use client";

import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Gauge, ShoppingCart, CreditCard, Globe, Smartphone } from "lucide-react";

interface ShopifyKillerProps {
  onOpenQuote?: () => void;
}

// Metric bars: values normalized to 0-100 so the visual reads at a glance.
// Lower "badValue" = Shopify worse. Higher "goodValue" = Custom better.
const comparisonMetrics = [
  { metric: "Load Speed",   shopifyLabel: "3-5s",       customLabel: "< 1s",         shopifyPct: 25, customPct: 98, shopifyIsBad: true,  icon: Gauge },
  { metric: "Mobile Score", shopifyLabel: "30-50",      customLabel: "95+",          shopifyPct: 40, customPct: 95, shopifyIsBad: true,  icon: Smartphone },
  { metric: "Monthly Fees", shopifyLabel: "$1,255/mo",  customLabel: "$22/mo",       shopifyPct: 100, customPct: 2,  shopifyIsBad: true,  icon: DollarSign },
  { metric: "Checkout",     shopifyLabel: "Generic",    customLabel: "Custom Logic", shopifyPct: 40, customPct: 100, shopifyIsBad: true,  icon: CreditCard },
  { metric: "Design",       shopifyLabel: "Template",   customLabel: "Fully Custom", shopifyPct: 35, customPct: 100, shopifyIsBad: true,  icon: ShoppingCart },
  { metric: "SEO Control",  shopifyLabel: "Locked",     customLabel: "Full Control", shopifyPct: 30, customPct: 100, shopifyIsBad: true,  icon: Globe },
];

// App stack with honest replacement mapping. Brand-name-only labels —
// Shopify owners all recognize Klaviyo, Shogun, Rebuy, etc. — so we skip
// category prefixes to save horizontal space on mobile.
const appStackItems = [
  { name: "Shopify Plan",    cost: 399, replaceName: "Next.js + Vercel", replaceCost: 20, note: "You own the code" },
  { name: "Theme dev",       cost: 200, replaceName: "Built in",         replaceCost: 0,  note: "No ongoing fees" },
  { name: "Klaviyo",         cost: 150, replaceName: "Zeptomail",        replaceCost: 2,  note: "Same automations, 60x cheaper" },
  { name: "Shogun",          cost: 149, replaceName: "Sanity CMS",       replaceCost: 0,  note: "Editors control everything" },
  { name: "Yotpo",           cost: 119, replaceName: "Native code",      replaceCost: 0,  note: "Better SEO, no plugin" },
  { name: "Rebuy",           cost: 99,  replaceName: "Custom code",      replaceCost: 0,  note: "Faster recommendations" },
  { name: "Smile.io",        cost: 79,  replaceName: "Custom code",      replaceCost: 0,  note: "Points + tiers, zero monthly" },
  { name: "Gorgias",         cost: 60,  replaceName: "Tawk.to",          replaceCost: 0,  note: "Free forever" },
];

const shopifyTotal = appStackItems.reduce((sum, i) => sum + i.cost, 0);
const customTotal = appStackItems.reduce((sum, i) => sum + i.replaceCost, 0);
const yearlySavings = (shopifyTotal - customTotal) * 12;

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

                {/* LEFT: The Pain — now with empathetic, educational framing */}
                <div className="p-6 md:p-14 flex flex-col justify-center">

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full w-fit mb-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[11px] font-bold text-green-700 uppercase tracking-[0.2em]">What Your Agency Won&apos;t Tell You</span>
                  </div>

                  <h2 className="text-[2rem] md:text-[3.75rem] font-bold text-charcoal leading-[1.05] tracking-[-0.025em] mb-4">
                    You&apos;re paying for apps
                  </h2>

                  <h3 className="text-[2rem] md:text-[3.75rem] font-bold leading-[1.05] tracking-[-0.025em] mb-8 md:mb-10">
                    <span className="text-charcoal">you don&apos;t </span>
                    <span className="font-serif italic text-cognac">need.</span>
                  </h3>

                  <p className="text-base md:text-lg text-stone-600 mb-5 leading-[1.7] max-w-md font-medium">
                    You&apos;re paying <span className="text-charcoal font-semibold">$150/mo for email</span>. There&apos;s a service that does the same thing for <span className="text-charcoal font-semibold">$2.50</span>. You&apos;re paying <span className="text-charcoal font-semibold">$60/mo for live chat</span>. There&apos;s a free one that works just as well.
                  </p>

                  <p className="text-base md:text-lg text-stone-600 mb-8 leading-[1.7] max-w-md font-medium">
                    Nobody tells you this because <span className="text-charcoal font-semibold">nobody profits from it</span>. Not the apps. Not the agencies. Not Shopify. We&apos;re the agency that does the honest math with you, shows you every cheaper alternative, and builds what replaces them. No pitch. Just receipts.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={onOpenQuote}
                      className="group px-6 py-3 md:px-8 md:py-4 bg-charcoal text-white font-bold text-sm md:text-base rounded-full hover:bg-stone-800 transition-all flex items-center justify-center gap-2 hover:scale-105"
                    >
                      See Your Savings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      data-cal-namespace="discovery"
                      data-cal-link="pandagen/discovery"
                      data-cal-config='{"layout":"month_view"}'
                      className="px-6 py-3 md:px-8 md:py-4 bg-stone-50 border border-stone-200 text-charcoal font-semibold text-sm md:text-base rounded-full hover:bg-stone-100 transition-all"
                    >
                      Get Honest Audit
                    </button>
                  </div>
                </div>

                {/* RIGHT: Pain → Result narrative (App Stack first, Comparison after) */}
                <div className="p-6 md:p-10 md:border-l border-stone-200 bg-stone-50/50 overflow-x-hidden space-y-6">

                  {/* 1. APP STACK — The Pain (with honest replacement mapping) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-card"
                  >
                    {/* Header — editorial style with serif italic accent */}
                    <div className="px-6 md:px-7 py-5 md:py-6 border-b border-stone-200 bg-linear-to-br from-red-50/40 via-white to-white">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-red-500 mb-2">The Quiet Shopify Tax</p>
                          <h3 className="text-xl md:text-2xl font-bold text-charcoal leading-[1.15] tracking-tight">
                            Your <span className="font-serif italic text-cognac">Shopify stack</span><br />
                            <span className="text-stone-500 font-medium text-base md:text-lg">vs. our replacement.</span>
                          </h3>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-2xl md:text-4xl font-black text-red-500 leading-none tracking-tight">${shopifyTotal.toLocaleString()}<span className="text-sm md:text-base font-semibold text-stone-400">/mo</span></p>
                          <p className="text-[11px] text-stone-500 mt-1.5 font-medium italic">what you&apos;re paying now</p>
                        </div>
                      </div>
                    </div>

                    {/* App replacement rows — single horizontal row, works on mobile too with short brand names */}
                    <div className="divide-y divide-stone-100">
                      {appStackItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="grid grid-cols-[1fr_auto_auto_1fr_auto] items-center gap-2 md:gap-4 px-4 md:px-7 py-3 group hover:bg-stone-50/60 transition-colors"
                        >
                          {/* Shopify app name */}
                          <p className="text-xs md:text-sm text-charcoal font-medium truncate">{item.name}</p>
                          {/* Shopify cost */}
                          <p className="text-xs md:text-sm text-red-500 font-bold whitespace-nowrap tracking-tight">${item.cost}</p>
                          {/* Cognac arrow */}
                          <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cognac shrink-0" strokeWidth={2.5} />
                          {/* Replacement name */}
                          <p className="text-xs md:text-sm text-charcoal font-medium truncate">{item.replaceName}</p>
                          {/* Replacement cost */}
                          <p className={`text-xs md:text-sm font-bold whitespace-nowrap tracking-tight ${item.replaceCost === 0 ? 'text-emerald-600' : 'text-cognac'}`}>
                            {item.replaceCost === 0 ? '$0' : `$${item.replaceCost}`}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Totals strip — editorial side-by-side */}
                    <div className="grid grid-cols-2 divide-x divide-stone-200 border-t border-stone-200">
                      <div className="px-5 md:px-7 py-4 bg-red-50/30">
                        <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-red-500 mb-1">Shopify</p>
                        <p className="text-2xl md:text-3xl font-black text-red-500 leading-none tracking-tight">${shopifyTotal.toLocaleString()}<span className="text-sm text-stone-400 font-semibold">/mo</span></p>
                      </div>
                      <div className="px-5 md:px-7 py-4 bg-emerald-50/30">
                        <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-emerald-600 mb-1">Our Build</p>
                        <p className="text-2xl md:text-3xl font-black text-emerald-600 leading-none tracking-tight">${customTotal}<span className="text-sm text-stone-400 font-semibold">/mo</span></p>
                      </div>
                    </div>

                    {/* Savings headline — editorial, serif italic accent */}
                    <div className="px-6 md:px-7 py-5 bg-linear-to-br from-emerald-600 to-green-700 text-white">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white mb-1.5">Your Savings</p>
                          <p className="text-sm text-white/90 font-medium italic">on apps alone, every year.</p>
                        </div>
                        <p className="text-3xl md:text-4xl font-black tracking-tight leading-none text-white">${(yearlySavings / 1000).toFixed(1).replace('.0', '')}K<span className="text-base text-white/80 font-semibold">/yr</span></p>
                      </div>
                    </div>
                  </motion.div>

                  {/* 2. RESULT CARD — Modernized Theme vs Custom (2026 bar-chart style) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="rounded-2xl bg-white border border-stone-200 shadow-card overflow-hidden"
                  >
                    {/* Header — editorial style matching the Stack card */}
                    <div className="px-6 md:px-7 py-5 md:py-6 border-b border-stone-200 bg-linear-to-br from-stone-50 via-white to-white">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-stone-500 mb-2">At A Glance</p>
                          <h3 className="text-xl md:text-2xl font-bold text-charcoal leading-[1.15] tracking-tight">
                            Theme <span className="font-serif italic text-cognac">vs.</span> custom.
                          </h3>
                        </div>
                        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-bold mt-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-400" />
                            <span className="text-red-500">Theme</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-emerald-600">Custom</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bar chart rows */}
                    <div className="px-6 md:px-7 py-5 md:py-6 space-y-5">
                      {comparisonMetrics.map((row, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 }}
                          className="space-y-2"
                        >
                          {/* Label row */}
                          <div className="flex items-center gap-2">
                            <row.icon className="w-4 h-4 text-cognac" strokeWidth={2} />
                            <span className="text-xs md:text-sm text-charcoal font-semibold tracking-tight">{row.metric}</span>
                          </div>
                          {/* Shopify bar */}
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${row.shopifyPct}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease: "easeOut" }}
                                className="h-full bg-linear-to-r from-red-300 to-red-400 rounded-full"
                              />
                            </div>
                            <span className="text-xs md:text-sm text-red-500 font-bold w-[80px] md:w-[100px] text-right shrink-0 tracking-tight">{row.shopifyLabel}</span>
                          </div>
                          {/* Custom bar */}
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${row.customPct}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.06, duration: 0.6, ease: "easeOut" }}
                                className="h-full bg-linear-to-r from-emerald-400 to-green-500 rounded-full"
                              />
                            </div>
                            <span className="text-xs md:text-sm text-emerald-600 font-bold w-[80px] md:w-[100px] text-right shrink-0 tracking-tight">{row.customLabel}</span>
                          </div>
                        </motion.div>
                      ))}
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
