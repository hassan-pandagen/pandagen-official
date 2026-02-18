"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import AuditWidget from "@/components/audit/AuditWidget";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-24 pb-20 md:pt-32 md:pb-0 overflow-hidden bg-transparent">

      {/* 1. SUBTLE BACKGROUND AMBIENCE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/15 md:bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-500/10 md:bg-purple-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* --- LEFT: HIGH-CONVERSION COPY --- */}
        <div className="max-w-2xl relative">

            {/* Status Pill */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-neon mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Accepting Projects for Feb 2026
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 leading-[1]"
            >
                Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 [text-shadow:0_0_40px_rgba(34,211,238,0.5)] [-webkit-text-stroke:1px_rgba(34,211,238,0.3)]">
                    Done Right.
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-lg md:text-xl text-gray-400 mb-4 font-medium"
            >
                You don&apos;t have a traffic problem. <span className="text-white font-bold">You have a website problem.</span>
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-lg"
            >
                We engineer <span className="text-white font-bold">custom-coded websites, e-commerce stores & SaaS platforms</span> <span className="text-gray-500">(Next.js)</span> that replace slow WordPress & Shopify setups, loading in <span className="text-neon font-bold">under 1 second</span>, <span className="text-neon font-bold">ranking higher</span>, and turning visitors into revenue.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4"
            >
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    {/* PRIMARY CTA */}
                    <button
                        data-cal-namespace="discovery"
                        data-cal-link="pandagen/discovery"
                        data-cal-config='{"layout":"month_view"}'
                        className="w-full sm:w-auto px-5 py-2.5 bg-neon text-black font-medium text-sm rounded-full hover:bg-neon/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-[1.01] group"
                    >
                        Get Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* SECONDARY CTA */}
                    <Link
                        href="/work"
                        className="w-full sm:w-auto px-5 py-2.5 bg-transparent border border-white/20 text-white font-medium text-sm rounded-full hover:border-neon hover:bg-neon/10 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        View Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-4 text-sm mt-6"
            >
                <div className="flex items-center gap-2 text-gray-400">
                    <Zap className="w-4 h-4 text-neon" />
                    <span>Sub-1s Load Times</span>
                </div>
                <span className="text-gray-600">•</span>
                <div className="flex items-center gap-2 text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span>30-Day Money Back</span>
                </div>
            </motion.div>

        </div>

        {/* --- RIGHT: SPEED AUDIT WIDGET --- */}
        <AuditWidget />

      </div>

    </section>
  );
}
