"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Zap, DollarSign, Clock, TrendingUp, CheckCircle2, X, Sparkles } from "lucide-react";

interface HighConversionAdProps {
  onOpenQuote?: () => void;
}

export default function HighConversionAd({ onOpenQuote }: HighConversionAdProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 45 });
  const [currentStat, setCurrentStat] = useState(0);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Rotating stats
  const stats = [
    { value: "214%", label: "Avg. Traffic Increase" },
    { value: "0.08s", label: "Load Time" },
    { value: "$0", label: "Monthly Plugin Fees" },
    { value: "100%", label: "Code Ownership" },
  ];

  useEffect(() => {
    const statTimer = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(statTimer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-[#050505] via-[#0A0A14] to-[#050505] relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon/30 rounded-full"
            initial={{ x: Math.random() * 1000, y: Math.random() * 800 }}
            animate={{
              y: [null, Math.random() * 800],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* URGENCY BANNER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 border border-orange-500/30 rounded-full backdrop-blur-sm">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
            </motion.div>
            <span className="text-sm font-bold text-white">
              <span className="text-orange-400">LIMITED OFFER:</span> First 5 Projects This Month Get 30% Off + Free SEO Audit
            </span>
            <div className="flex items-center gap-1 text-xs font-mono text-orange-300">
              <Clock className="w-3 h-3" />
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
        </motion.div>

        {/* MAIN AD CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#0A0A0A] to-[#050505] shadow-[0_0_80px_rgba(6,182,212,0.15)]">

            {/* Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12">

              {/* LEFT: VALUE PROPOSITION */}
              <div className="flex flex-col justify-center">

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full w-fit mb-6"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Performance Guaranteed</span>
                </motion.div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                  Stop Losing Money to
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-gradient-x">
                    Slow Websites.
                  </span>
                </h2>

                {/* Subheadline */}
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  We <span className="text-neon font-semibold">guarantee</span> 90+ Lighthouse scores, <span className="text-neon font-semibold">0.1s load times</span>, and <span className="text-neon font-semibold">30% higher conversions</span> — or you don't pay.
                </p>

                {/* Rotating Stats */}
                <div className="mb-8 h-20 relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStat}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon/20 to-blue-500/20 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-neon" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">{stats[currentStat].value}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{stats[currentStat].label}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {[
                    "Google loves fast sites = Higher rankings",
                    "Users stay longer = More conversions",
                    "Zero monthly fees = Keep your profits",
                    "Full code ownership = Scale unlimited",
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-neon flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenQuote}
                    className="relative group overflow-hidden px-8 py-4 bg-neon text-black font-bold rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Claim 30% Off <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-cal-namespace="discovery"
                    data-cal-link="pandagen/discovery"
                    data-cal-config='{"layout":"month_view"}'
                    className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-neon/50 transition-all"
                  >
                    Free Consultation
                  </motion.button>
                </div>

                {/* Trust Badge */}
                <p className="text-xs text-gray-500 mt-4">
                  <span className="text-green-400">✓</span> No credit card required • <span className="text-green-400">✓</span> 60-day money-back guarantee
                </p>
              </div>

              {/* RIGHT: COMPARISON TABLE */}
              <div className="flex flex-col justify-center">
                <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">

                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    Why Businesses Switch to Us
                  </h3>

                  <div className="space-y-4">
                    {/* Headers */}
                    <div className="grid grid-cols-3 gap-2 pb-3 border-b border-white/10">
                      <div className="text-xs text-gray-500 uppercase tracking-wider"></div>
                      <div className="text-xs text-red-400 font-bold text-center">WordPress</div>
                      <div className="text-xs text-neon font-bold text-center">PandaGen</div>
                    </div>

                    {/* Rows */}
                    {[
                      { metric: "Load Speed", wp: "2-5s", us: "0.1s" },
                      { metric: "Monthly Cost", wp: "$150+", us: "$0" },
                      { metric: "Security Risk", wp: "High", us: "Zero" },
                      { metric: "Lighthouse", wp: "40-60", us: "95+" },
                      { metric: "Ownership", wp: "Rented", us: "100%" },
                    ].map((row, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="grid grid-cols-3 gap-2 items-center py-2"
                      >
                        <div className="text-sm text-gray-300 font-medium">{row.metric}</div>
                        <div className="text-center">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-xs text-red-400">
                            <X className="w-3 h-3" /> {row.wp}
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-neon/10 border border-neon/20 rounded-full text-xs text-neon font-bold">
                            <CheckCircle2 className="w-3 h-3" /> {row.us}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* ROI Calculator Teaser */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Your Potential Savings</p>
                        <p className="text-2xl font-bold text-green-400">$12,600/yr</p>
                      </div>
                      <DollarSign className="w-8 h-8 text-green-400" />
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-black/30 backdrop-blur-sm px-8 py-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-neon" />
                    </div>
                    <span>14-Day Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-neon" />
                    </div>
                    <span>30% Higher Conversions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-neon" />
                    </div>
                    <span>Money-Back Guarantee</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Only <span className="text-orange-400 font-bold">3 spots</span> left this month
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-400 mb-3">Trusted by industry leaders</p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-40">
            {["NOVATECH", "Fixteria", "TRUVISION"].map((name, i) => (
              <motion.span
                key={i}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="text-lg font-bold tracking-tighter text-white transition-all cursor-pointer"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
