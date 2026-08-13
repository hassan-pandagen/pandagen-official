"use client";

import { useState } from "react";
import { motion } from "@/components/ui/motion";
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
              Model it on your own numbers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              What could <span className="font-serif italic text-cognac">faster</span> be worth to you?
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Page speed and conversion rate are correlated across published retail research. This tool models what that relationship could be worth on your own numbers.
            </p>

            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 mb-8">
              <h3 className="font-bold text-charcoal mb-2">The calculation logic, stated openly</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                The model applies a flat 20% conversion-rate uplift to the traffic, conversion rate and order value <em>you</em> enter. That 20% is our own planning assumption, extrapolated from the Deloitte and Google &ldquo;Milliseconds Make Millions&rdquo; study (2020), which measured an 8.4% retail conversion lift from a 0.1s mobile improvement. It is not a measurement of your site and not a finding of that study.
              </p>
              <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                Your actual result depends on your baseline speed, traffic mix, pricing, checkout and demand. Treat the output as an illustrative estimate for discussion, not a forecast, a promise, or a measured loss.
              </p>
            </div>

            <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"recover_this_revenue",location:"cta"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all hover:scale-105">
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
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#b8410c]"
                  />
                  <div className="flex justify-between text-xs text-stone-500 mt-1">
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
                  <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-3">
                    Modelled annual upside
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-charcoal leading-none tracking-tight">
                    ${annualLoss.toLocaleString('en-US')}
                  </div>
                  <div className="text-sm text-stone-500 font-normal mt-1">per year, estimated</div>
                  <p className="text-[11px] text-stone-500 mt-4 pt-4 border-t border-stone-200">
                    Your inputs &times; a 20% conversion-uplift planning assumption. Extrapolated from Deloitte and Google, &ldquo;Milliseconds Make Millions&rdquo; (2020), which measured 8.4% retail conversion lift from a 0.1s mobile improvement. Not a measurement of your site.
                  </p>
                </div>

                {/* Monthly breakdown */}
                <div className="flex items-center justify-between text-sm text-stone-500 px-1">
                  <span>Monthly revenue from the figures you entered</span>
                  <span className="font-bold text-charcoal">${monthlyRevenue.toLocaleString('en-US')}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-stone-500 px-1 -mt-4">
                  <span>Modelled upside at a 20% conversion uplift</span>
                  <span className="font-bold text-cognac">${lostRevenue.toLocaleString('en-US')}/mo</span>
                </div>
                <p className="px-1 -mt-2 text-xs leading-5 text-stone-600">
                  Illustrative estimate based on your inputs and our stated 20% planning assumption. Not a measurement of your site, a forecast, or a promised result.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
