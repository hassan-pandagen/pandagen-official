"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, TrendingUp, CheckCircle2, X, Sparkles, ShieldCheck, DollarSign, Zap, Globe } from "lucide-react";

export default function RealityCheck() {
  const [platform, setPlatform] = useState<"wordpress" | "shopify">("wordpress");

  const content = {
    wordpress: {
      loss: "$12,600/yr",
      pain: "WordPress is a liability.",
      sub: "Plugins break. Databases bloat. Security fails. Stop patching a broken ship.",
      comparison: [
        { metric: "Load Speed", bad: "2-5s", good: "1s" },
        { metric: "Monthly Cost", bad: "$150+", good: "$0" },
        { metric: "Security", bad: "Vulnerable", good: "Bank-Grade" },
        { metric: "Maintenance", bad: "Daily Updates", good: "Zero" },
        { metric: "Ownership", bad: "Rented", good: "100% Yours" },
      ]
    },
    shopify: {
      loss: "$18,000/yr",
      pain: "The App Tax is killing you.",
      sub: "You pay $1,500/mo for apps that slow down your site. We build those features natively.",
      comparison: [
        { metric: "App Fees", bad: "$1,500/mo", good: "$0" },
        { metric: "URL Structure", bad: "Locked", good: "Custom SEO" },
        { metric: "Checkout", bad: "Generic", good: "Custom Logic" },
        { metric: "Mobile Score", bad: "30-50", good: "95+" },
        { metric: "Vendor Lock", bad: "High", good: "None" },
      ]
    }
  };

  const current = content[platform];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

      {/* Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-stone-200/40 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header & Toggle */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-charcoal mb-8">The Reality Check.</h2>

            {/* Toggle Pill */}
            <div className="inline-flex bg-stone-100 p-1 rounded-full border border-gray-200 relative">
                <button
                    onClick={() => setPlatform("wordpress")}
                    className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                        platform === "wordpress" ? "bg-white text-red-600 shadow-card border border-red-100" : "text-stone-600 hover:text-charcoal"
                    }`}
                >
                    vs WordPress
                </button>
                <button
                    onClick={() => setPlatform("shopify")}
                    className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                        platform === "shopify" ? "bg-white text-green-600 shadow-card border border-green-100" : "text-stone-600 hover:text-charcoal"
                    }`}
                >
                    vs Shopify
                </button>
            </div>
        </div>

        {/* Mega Card */}
        <motion.div
          layout
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white border border-gray-200 shadow-elevated">

               <div className="relative z-10 grid md:grid-cols-2 gap-12 p-8 md:p-16 items-center">

                  {/* LEFT: The Pain */}
                  <div className="flex flex-col justify-center">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={platform}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full w-fit mb-6">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Warning</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold text-charcoal leading-tight mb-6">
                                Stop Losing Money.<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-gradient-x font-extrabold">
                                    {current.pain}
                                </span>
                            </h2>

                            <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-md font-medium">
                                {current.sub}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        className="group px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:shadow-[0_12px_40px_rgba(37,99,235,0.25)] transition-all flex items-center justify-center gap-2 hover:scale-105"
                      >
                        Calculate Savings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                         data-cal-namespace="discovery"
                         data-cal-link="pandagen/discovery"
                         data-cal-config='{"layout":"month_view"}'
                         className="px-8 py-4 bg-stone-50 border border-gray-200 text-charcoal font-semibold rounded-full hover:bg-stone-100 transition-all"
                      >
                        Book Audit
                      </button>
                    </div>
                  </div>

                  {/* RIGHT: The Table */}
                  <div className="flex flex-col justify-center">
                    <div className="bg-stone-50 border border-gray-200 rounded-3xl p-8 shadow-card relative overflow-hidden">

                      <div className="flex justify-between items-end mb-6 border-b border-gray-200 pb-4 relative z-10">
                         <h3 className="text-xl font-bold text-charcoal">The Comparison</h3>
                         <span className="text-xs text-stone-500">vs PandaGen</span>
                      </div>

                      <div className="space-y-2 relative z-10">
                        {/* Headers */}
                        <div className="grid grid-cols-3 gap-4 pb-2 text-xs text-stone-500 uppercase tracking-wider font-bold">
                            <div>Metric</div>
                            <div className="text-center text-red-500">Them</div>
                            <div className="text-center text-cognac">Us</div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={platform}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-2"
                            >
                                {current.comparison.map((row, i) => (
                                <div key={i} className="grid grid-cols-3 gap-4 items-center py-4 border-b border-gray-100 last:border-0 hover:bg-white transition-colors rounded-lg px-2 -mx-2">
                                    <div className="text-sm text-charcoal font-medium">{row.metric}</div>
                                    <div className="text-center text-sm text-red-500">{row.bad}</div>
                                    <div className="text-center text-sm text-cognac font-bold">{row.good}</div>
                                </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* ROI Result */}
                      <AnimatePresence mode="wait">
                        <motion.div
                            key={platform}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl flex items-center justify-between shadow-green-glow"
                        >
                            <div>
                                <p className="text-xs text-green-700 uppercase font-bold mb-1">Your Potential Savings</p>
                                <p className="text-3xl font-bold text-charcoal">{current.loss}</p>
                            </div>
                            <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-green-glow">
                                <DollarSign className="w-6 h-6" />
                            </div>
                        </motion.div>
                      </AnimatePresence>

                    </div>
                  </div>

               </div>

               {/* Tech Stack Strip */}
               <div className="border-t border-gray-200 bg-stone-50 px-8 py-6 flex flex-col items-center">
                  <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] mb-4 font-bold">Enterprise Tech Stack</p>
                  <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <span className="text-lg font-bold text-charcoal flex gap-2 items-center"><Zap size={16}/> Next.js 15</span>
                    <span className="text-lg font-bold text-charcoal flex gap-2 items-center"><Globe size={16}/> Vercel</span>
                    <span className="text-lg font-bold text-charcoal flex gap-2 items-center"><DollarSign size={16}/> Stripe</span>
                    <span className="text-lg font-bold text-charcoal flex gap-2 items-center"><ShieldCheck size={16}/> Supabase</span>
                  </div>
               </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
