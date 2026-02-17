"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-24 pb-20 md:pt-32 md:pb-0 overflow-hidden bg-transparent">
      
      {/* 1. SUBTLE BACKGROUND AMBIENCE */}
      {/* Main spotlight glow - reduced */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/15 md:bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
      {/* Secondary accent glow - minimal */}
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

            {/* MOBILE STATS PREVIEW (Simplified Dashboard for Mobile) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="lg:hidden mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto"
            >
                {/* Lighthouse Score Card */}
                <div className="bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-bold">Performance</div>
                    <div className="text-4xl font-bold text-neon mb-1">100</div>
                    <div className="text-xs text-gray-400">Lighthouse Score</div>
                </div>

                {/* Load Time Card */}
                <div className="bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-bold">Speed</div>
                    <div className="text-4xl font-bold text-green-400 mb-1">&lt;1s</div>
                    <div className="text-xs text-gray-400">Load Time</div>
                </div>
            </motion.div>

        </div>

        {/* --- RIGHT: THE HOLOGRAPHIC DASHBOARD (Replaces the Void) --- */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:flex justify-center items-center"
        >
            {/* The Glass Container (Made Bigger: max-w-lg) */}
            <motion.div 
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="relative w-full max-w-lg aspect-square bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 overflow-hidden shadow-2xl group cursor-default"
            >
                
                {/* Internal Glow (Pulsing) */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 blur-[80px] pointer-events-none animate-pulse" />

                {/* Animated UI Elements */}
                <div className="space-y-6 relative z-10">
                    
                    {/* Header: System Status */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-6">
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1 font-bold">System Status</div>
                            <div className="text-green-400 font-bold flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" /> 
                                <span className="text-sm">Operational</span>
                            </div>
                        </div>
                        <Cpu className="w-12 h-12 text-white/5 group-hover:text-neon/20 transition-colors duration-500" />
                    </div>

                    {/* Metric 1: Speed (Interactive Bar) */}
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-neon/30 transition-colors duration-300">
                        <div className="flex justify-between mb-3">
                            <span className="text-gray-400 text-sm font-medium">Lighthouse Performance</span>
                            <span className="text-neon font-bold font-mono text-lg">100/100</span>
                        </div>
                        <div className="h-3 bg-black/50 rounded-full overflow-hidden border border-white/5">
                            <motion.div 
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                                className="h-full bg-gradient-to-r from-blue-500 to-neon shadow-[0_0_15px_#22d3ee]" 
                            />
                        </div>
                    </div>

                    {/* Metric 2: Security */}
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex items-center justify-between hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300">
                        <div>
                            <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Security Audit</div>
                            <div className="text-white font-bold text-lg">Bank-Grade Encryption</div>
                        </div>
                        <ShieldCheck className="w-8 h-8 text-green-500" />
                    </div>

                    {/* Floating Code Snippet */}
                    <div className="mt-2 p-5 bg-black rounded-2xl border border-white/10 font-mono text-xs text-gray-400 leading-relaxed relative overflow-hidden">
                        {/* Scanline Effect */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-neon/30 animate-scan" />
                        
                        <div className="flex gap-2 mb-3 opacity-50">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        </div>
                        <p><span className="text-purple-400">const</span> <span className="text-blue-400">revenue</span> = <span className="text-yellow-400">await</span> scale();</p>
                        <p><span className="text-neon">return</span> <span className="text-green-400">"Market Dominance"</span>;</p>
                    </div>

                </div>
            </motion.div>

            {/* Decorative Floating Elements (Moved closer) */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-dashed border-white/10 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute bottom-10 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-30 animate-float" />

        </motion.div>

      </div>

    </section>
  );
}
