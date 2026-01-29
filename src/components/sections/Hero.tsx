"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Cpu, ChevronRight } from "lucide-react";
import Link from "next/link";

// Data for Marquee
const STACK = ["NEXT.JS 15", "VERCEL", "REACT", "TYPESCRIPT", "SUPABASE", "STRIPE", "SANITY", "TAILWIND"];

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-32 overflow-hidden bg-transparent">
      
      {/* 1. BACKGROUND AMBIENCE (Subtle & Deep) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT: HIGH-CONVERSION COPY --- */}
        <div className="max-w-2xl">
            {/* Status Pill */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neon mb-8 backdrop-blur-md"
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
                className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6 leading-[1]"
            >
                Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-blue-500 to-purple-500 animate-gradient-x">
                    Done Right.
                </span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg"
            >
                Stop paying for bloated templates. We engineer <span className="text-white font-bold">bespoke Next.js architectures</span> that rank higher, load instantly (0.1s), and convert cold traffic into revenue.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <button 
                    data-cal-namespace="discovery"
                    data-cal-link="pandagen/discovery"
                    data-cal-config='{"layout":"month_view"}'
                    className="px-8 py-4 bg-neon text-black font-bold text-lg rounded-full hover:bg-neon/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105"
                >
                    Get Free Quote <ArrowRight className="w-5 h-5" />
                </button>
                <Link href="/work" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    View Case Studies
                </Link>
            </motion.div>

            {/* Micro Social Proof */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5 }}
                className="mt-12 flex items-center gap-6 text-sm text-gray-500 font-mono"
            >
                <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" /> 
                    <span>99/100 Speed Score</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-500" /> 
                    <span>Zero Vulnerabilities</span>
                </div>
            </motion.div>
        </div>

        {/* --- RIGHT: THE HOLOGRAPHIC DASHBOARD (Replaces the Void) --- */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
        >
            {/* The Glass Container */}
            <div className="relative w-full max-w-md ml-auto aspect-square bg-[#0A0A0A]/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 overflow-hidden shadow-2xl">
                
                {/* Internal Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 blur-[80px] pointer-events-none" />

                {/* Animated UI Elements */}
                <div className="space-y-6 relative z-10">
                    
                    {/* Header: System Status */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-6">
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">System Status</div>
                            <div className="text-green-400 font-bold flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Operational
                            </div>
                        </div>
                        <Cpu className="w-10 h-10 text-white/10" />
                    </div>

                    {/* Metric 1: Speed */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-400 text-sm">Lighthouse Performance</span>
                            <span className="text-neon font-bold">100/100</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 0.8 }}
                                className="h-full bg-neon shadow-[0_0_10px_#22d3ee]" 
                            />
                        </div>
                    </div>

                    {/* Metric 2: Security */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                        <div>
                            <div className="text-gray-400 text-sm mb-1">Security Audit</div>
                            <div className="text-white font-bold">Bank-Grade Encryption</div>
                        </div>
                        <ShieldCheck className="w-6 h-6 text-green-500" />
                    </div>

                    {/* Floating Code Snippet */}
                    <div className="mt-4 p-4 bg-black rounded-xl border border-white/10 font-mono text-xs text-gray-500 opacity-80">
                        <div className="flex gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                        <p><span className="text-purple-400">const</span> <span className="text-blue-400">profit</span> = <span className="text-yellow-400">await</span> scale();</p>
                        <p><span className="text-neon">return</span> "Market Dominance";</p>
                    </div>

                </div>
            </div>

            {/* Decorative Floating Elements behind the card */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border border-dashed border-white/10 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute top-1/2 -left-12 w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-40 animate-float" />

        </motion.div>

      </div>

      {/* 2. INFINITE SCROLLING TECH STACK (The Fix) */}
      <div className="absolute bottom-0 w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-6 overflow-hidden">
         <div className="flex w-max animate-marquee gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Duplicate list to create seamless loop */}
            {[...STACK, ...STACK, ...STACK].map((tech, i) => (
                <span key={i} className="text-lg font-bold text-white/60 flex items-center gap-2">
                    {tech}
                </span>
            ))}
         </div>
      </div>

    </section>
  );
}
