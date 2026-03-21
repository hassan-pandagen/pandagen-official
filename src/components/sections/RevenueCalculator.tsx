"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, AlertCircle, ArrowRight } from "lucide-react";

export default function RevenueCalculator() {
  const [visitors, setVisitors] = useState(50000);
  const [conversion, setConversion] = useState("1.5");
  const [aov, setAov] = useState("100");

  const conversionNum = parseFloat(conversion) || 0;
  const aovNum = parseFloat(aov) || 0;
  const monthlyRevenue = visitors * (conversionNum / 100) * aovNum;
  const lostRevenue = Math.round(monthlyRevenue * 0.2);
  const annualLoss = lostRevenue * 12;

  return (
    <section className="py-12 md:py-24 pb-16 md:pb-24 bg-paper border-y border-stone-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cognac/5 border border-cognac/20 text-cognac text-xs font-bold uppercase tracking-widest mb-6">
              <AlertCircle className="w-4 h-4" />
              The Cost of Inaction
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              How much is &ldquo;Slow&rdquo; costing you?
            </h2>
            <p className="text-lg text-stone-500 mb-8 leading-relaxed">
              Amazon found that every 100ms of latency costs 1% in sales. If your site loads in 3+ seconds, you are bleeding revenue every single day.
            </p>

            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 mb-8">
              <h3 className="font-bold text-charcoal mb-2">The Calculation Logic</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Based on Google &amp; Deloitte data: a 2-second speed improvement typically lifts conversion rates by 20%. Custom Next.js sites average 0.8s vs. 3-5s on WordPress/Squarespace.
              </p>
            </div>

            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all hover:scale-105"
            >
              Recover This Revenue <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* RIGHT: Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white p-5 md:p-8 rounded-3xl shadow-xs border border-stone-200">
              <h3 className="text-xl font-bold text-charcoal mb-6 border-b border-stone-100 pb-4">
                Revenue Recovery Calculator
              </h3>

              <div className="space-y-6">
                {/* Monthly Visitors Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="visitors-range" className="text-xs font-bold text-stone-500 uppercase tracking-wider">Monthly Visitors</label>
                    <span className="font-mono font-bold text-charcoal text-sm">{visitors.toLocaleString('en-US')}</span>
                  </div>
                  <input
                    id="visitors-range"
                    type="range" min="5000" max="500000" step="5000"
                    value={visitors}
                    onChange={(e) => setVisitors(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#EA580C]"
                  />
                  <div className="flex justify-between text-xs text-stone-400 mt-1">
                    <span>5K</span><span>500K</span>
                  </div>
                </div>

                {/* Conversion + AOV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                      Conv. Rate (%)
                    </label>
                    <input
                      type="number" min="0.1" max="20" step="0.1"
                      value={conversion}
                      onChange={(e) => setConversion(e.target.value)}
                      placeholder="1.5"
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl font-bold text-charcoal focus:outline-hidden focus:border-stone-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                      Avg Order ($)
                    </label>
                    <input
                      type="number" min="1" max="10000" step="10"
                      value={aov}
                      onChange={(e) => setAov(e.target.value)}
                      placeholder="100"
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl font-bold text-charcoal focus:outline-hidden focus:border-stone-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Result Box, Bank Statement style */}
                <div className="mt-4 p-6 bg-stone-50 border border-stone-200 rounded-2xl">
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">
                    Revenue Recovered Per Year
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-charcoal leading-none tracking-tight">
                    ${annualLoss.toLocaleString('en-US')}
                  </div>
                  <div className="text-sm text-stone-400 font-normal mt-1">per year</div>
                  <p className="text-[11px] text-stone-400 mt-4 pt-4 border-t border-stone-200">
                    Based on 20% CVR lift from a 2s speed improvement (Google &amp; Deloitte, 2023)
                  </p>
                </div>

                {/* Monthly breakdown */}
                <div className="flex items-center justify-between text-sm text-stone-500 px-1">
                  <span>Monthly revenue at current speed</span>
                  <span className="font-bold text-charcoal">${monthlyRevenue.toLocaleString('en-US')}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-stone-500 px-1 -mt-4">
                  <span>Revenue lost to slow load times</span>
                  <span className="font-bold text-cognac">-${lostRevenue.toLocaleString('en-US')}/mo</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
