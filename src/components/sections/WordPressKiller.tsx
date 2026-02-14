"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, TrendingUp, CheckCircle2, X, Sparkles, DollarSign } from "lucide-react";

interface RealityCheckProps {
  onOpenQuote?: () => void;
}

export default function RealityCheck({ onOpenQuote }: RealityCheckProps) {
  const [platform, setPlatform] = useState<"wordpress" | "shopify">("wordpress");

  // Dynamic Data based on Platform
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
    <section className="py-12 md:py-20 bg-transparent relative overflow-hidden">
      
      {/* 1. ATMOSPHERE GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* 2. THE HEADER & TOGGLE */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">The Reality Check.</h2>
            
            {/* The Toggle Pill */}
            <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md relative">
                <button
                    onClick={() => setPlatform("wordpress")}
                    className={`relative z-10 px-5 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                        platform === "wordpress" ? "bg-red-500/20 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]" : "text-gray-400 hover:text-white"
                    }`}
                >
                    vs WordPress
                </button>
                <button
                    onClick={() => setPlatform("shopify")}
                    className={`relative z-10 px-5 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                        platform === "shopify" ? "bg-green-500/20 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]" : "text-gray-400 hover:text-white"
                    }`}
                >
                    vs Shopify
                </button>
            </div>
        </div>

        {/* 3. THE "MEGA CARD" (Combines everything) */}
        <motion.div
          layout
          className="max-w-6xl mx-auto"
        >
          <div className="relative p-[1px] rounded-2xl md:rounded-[3rem] bg-gradient-to-b from-white/15 via-white/5 to-transparent">
            <div className="relative rounded-2xl md:rounded-[3rem] overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#050505] h-full shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_100px_rgba(34,211,238,0.1)]">

               <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 p-5 md:p-16 items-center">

                  {/* LEFT: THE PAIN (Dynamic) */}
                  <div className="flex flex-col justify-center">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={platform}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/15 border border-red-500/30 rounded-full w-fit mb-6 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Warning</span>
                            </div>

                            <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight mb-3 md:mb-4">
                                Stop Losing Money.
                            </h2>

                            {/* MAIN FOCUS - WordPress/Shopify Pain Point */}
                            <h3 className="text-3xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-red-400 leading-tight mb-6 md:mb-8 [text-shadow:0_0_60px_rgba(239,68,68,0.6),0_0_30px_rgba(249,115,22,0.4)] [-webkit-text-stroke:0.5px_rgba(239,68,68,0.4)] animate-pulse">
                                {current.pain}
                            </h3>

                            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-md">
                                {current.sub}
                            </p>
                        </motion.div>
                    </AnimatePresence>

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

                  {/* RIGHT: THE TABLE (Dynamic) */}
                  <div className="flex flex-col justify-center">
                    <div className="bg-black/40 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-inner relative overflow-hidden backdrop-blur-sm">
                       
                      <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4 relative z-10">
                         <h3 className="text-xl font-bold text-white">The Comparison</h3>
                         <span className="text-xs text-gray-400">vs PandaGen</span>
                      </div>

                      <div className="space-y-2 relative z-10">
                        {/* Headers */}
                        <div className="grid grid-cols-3 gap-4 pb-2 text-xs text-gray-400 uppercase tracking-wider font-bold">
                            <div>Metric</div>
                            <div className="text-center text-red-400">Them</div>
                            <div className="text-center text-neon">Us</div>
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
                                <div key={i} className="grid grid-cols-3 gap-4 items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/10 hover:border-white/10 transition-all duration-300 rounded-lg px-2 -mx-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:-translate-y-0.5">
                                    <div className="text-sm text-gray-300 font-medium group-hover:text-white">{row.metric}</div>
                                    <div className="text-center text-sm text-red-400/80 group-hover:text-red-400">{row.bad}</div>
                                    <div className="text-center text-sm text-neon font-bold shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">{row.good}</div>
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
                            className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-900/20 border border-green-500/30 rounded-2xl flex items-center justify-between shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                        >
                            <div>
                                <p className="text-xs text-green-400 uppercase font-bold mb-1">Your Potential Savings</p>
                                <p className="text-2xl md:text-3xl font-bold text-white">{current.loss}</p>
                            </div>
                            <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold shadow-[0_0_20px_#22c55e]">
                                <DollarSign className="w-6 h-6" />
                            </div>
                        </motion.div>
                      </AnimatePresence>

                    </div>
                  </div>

               </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
