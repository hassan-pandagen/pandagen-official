"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle, ArrowRight, DollarSign, X } from "lucide-react";

type Platform = "wordpress" | "shopify";

interface RealityCheckProps {
  onOpenQuote?: () => void;
}

export default function RealityCheck({ onOpenQuote }: RealityCheckProps) {
  const [platform, setPlatform] = useState<Platform>("wordpress");

  // REAL DATA based on Reddit/X pain points
  const content = {
    wordpress: {
      trapTitle: "The Maintenance Trap",
      trapSubtitle: "You are a full-time sysadmin now.",
      trapColor: "red",
      hiddenCost: "$150+/mo",
      hiddenCostLabel: "Hosting + Plugins + Security",
      points: [
        {
          label: "Security",
          bad: "SQL Injections via Plugins (Elementor, WooCommerce)",
          good: "Sanitized API Routes (Zero Plugin Access)",
        },
        {
          label: "Speed",
          bad: "Database Bloat (TTFB > 1.2s)",
          good: "Static Edge Rendering (TTFB 0.05s)",
        },
        {
          label: "Stability",
          bad: "Updates Break The Site",
          good: "CI/CD Pipeline (Preview Builds Before Deploy)",
        },
        {
          label: "SEO",
          bad: "Heavy DOM & Layout Shift",
          good: "Perfect Core Web Vitals (Rank Higher)",
        },
      ],
    },
    shopify: {
      trapTitle: "The App Tax Trap",
      trapSubtitle: "Your margins are being eaten alive.",
      trapColor: "orange",
      hiddenCost: "$500+/mo",
      hiddenCostLabel: "App Subscriptions + Transaction Fees",
      points: [
        {
          label: "Cost",
          bad: "Reviews ($100/mo Yotpo) + Subscriptions ($300/mo Recharge)",
          good: "$0 (Built Into Code)",
        },
        {
          label: "SEO",
          bad: "Forced /collections/product URL (Google Hates Deep Nesting)",
          good: "Full Custom URL Control (Rank Better)",
        },
        {
          label: "Design",
          bad: "Liquid Theme Limitations (Can't Do Custom Logic)",
          good: "Pixel-Perfect Freedom (React/Next.js)",
        },
        {
          label: "Checkout",
          bad: "Locked (Shopify Plus Only = Extra $2k/mo)",
          good: "Full Headless Control (Your Rules)",
        },
      ],
    },
  };

  const current = content[platform];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Reality <span className="text-gray-600">Check.</span>
          </h2>
          
          {/* TOGGLE */}
          <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
             <button
               onClick={() => setPlatform("wordpress")}
               className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                 platform === "wordpress" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "text-gray-500 hover:text-white"
               }`}
             >
               vs WordPress
             </button>
             <button
               onClick={() => setPlatform("shopify")}
               className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                 platform === "shopify" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "text-gray-500 hover:text-white"
               }`}
             >
               vs Shopify
             </button>
          </div>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto relative">
          
          {/* LEFT: THE TRAP (Dynamic) */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={platform}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a0505] border border-red-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.1),transparent_70%)] opacity-20" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-8">
                   <div className="p-3 bg-red-500/10 rounded-xl flex-shrink-0">
                      <AlertTriangle className="text-red-500 w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white">{current.trapTitle}</h3>
                      <p className="text-red-400 text-sm mt-1">{current.trapSubtitle}</p>
                   </div>
                </div>

                <div className="space-y-5">
                   {current.points.map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-4"
                      >
                         <div className="mt-1 p-1 rounded-full bg-red-500/10 flex-shrink-0">
                             <X className="text-red-500 w-3 h-3" />
                         </div>
                         <div className="flex-1 min-w-0">
                            <p className="text-[10px] text-red-300 uppercase font-bold tracking-wider mb-1">{item.label}</p>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.bad}</p>
                         </div>
                      </motion.div>
                   ))}
                </div>
              </div>

              {/* THE HIDDEN COST BOX */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-4 rounded-xl bg-red-950/30 border border-red-500/20"
              >
                  <p className="text-xs text-red-400 uppercase font-bold">Hidden Monthly Cost</p>
                  <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-2xl font-bold text-white">{current.hiddenCost}</span>
                      <span className="text-xs text-gray-500">{current.hiddenCostLabel}</span>
                  </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT: THE SOLUTION (Fixed) */}
          <div className="bg-[#051015] border border-cyan-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-8">
                 <div className="p-3 bg-cyan-500/10 rounded-xl flex-shrink-0">
                    <CheckCircle className="text-cyan-400 w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-white">The PandaGen Way</h3>
                    <p className="text-cyan-400 text-sm mt-1">You own your empire.</p>
                 </div>
              </div>

              {/* Solutions that match the problems */}
              <AnimatePresence mode="wait">
                <motion.div 
                    key={platform}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="space-y-5"
                >
                   {current.points.map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="flex items-start gap-4"
                      >
                         <div className="mt-1 p-1 rounded-full bg-cyan-500/20 flex-shrink-0">
                            <CheckCircle className="text-cyan-400 w-3 h-3" />
                         </div>
                         <div className="flex-1 min-w-0">
                            <p className="text-[10px] text-cyan-700 uppercase font-bold tracking-wider mb-1">{item.label}</p>
                            <p className="text-white font-medium text-sm leading-relaxed">{item.good}</p>
                         </div>
                      </motion.div>
                   ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* THE SAVINGS BOX */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20"
            >
                <p className="text-xs text-cyan-400 uppercase font-bold">Your Monthly Cost</p>
                <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-bold text-white">$0</span>
                    <span className="text-xs text-gray-500">You own the code. No monthly taxes.</span>
                </div>
            </motion.div>
          </div>

        </div>

        {/* THE "MIC DROP" - PRICING BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-8"
        >
           <div className="bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8 hover:border-white/20 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
              
              {/* Text Side */}
              <div className="flex items-start gap-4 md:gap-6 flex-1">
                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0 mt-1">
                    <DollarSign className="w-6 h-6 md:w-7 md:h-7" />
                 </div>
                 <div>
                    <h4 className="text-base md:text-lg font-bold text-white leading-tight mb-1">
                        Development Cost? <span className="text-green-400">Same as WordPress.</span>
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base">
                        We charge project fees, not subscriptions. The difference is we give you an asset, not a liability.
                    </p>
                 </div>
              </div>

              {/* Buttons Side */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={onOpenQuote}
                   className="flex-1 sm:flex-none bg-neon text-black font-bold px-6 py-3 rounded-full hover:bg-neon/90 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                 >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                 </motion.button>
                 
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   data-cal-namespace="discovery"
                   data-cal-link="pandagen/discovery"
                   data-cal-config='{"layout":"month_view"}'
                   className="flex-1 sm:flex-none border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                 >
                    Book a Call
                 </motion.button>
              </div>

           </div>
        </motion.div>

      </div>
    </section>
  );
}
