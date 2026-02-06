"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";

// Data for Marquee
const STACK = ["NEXT.JS 15", "VERCEL", "REACT", "TYPESCRIPT", "SUPABASE", "STRIPE", "SANITY", "TAILWIND"];

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-24 pb-40 md:pt-32 md:pb-0 overflow-hidden bg-transparent">
      
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
                className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-6 leading-[1]"
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
                Stop paying for bloated templates. We engineer <span className="text-white font-bold">bespoke Next.js architectures</span> that rank higher, load in under 1 second, and convert cold traffic into revenue.
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

      {/* 2. INFINITE SCROLLING TECH STACK */}
      <div className="absolute bottom-0 w-full border-t border-white/10 md:border-white/5 bg-black/20 backdrop-blur-sm py-6 overflow-hidden z-20">
         <div className="flex w-max animate-marquee gap-16 items-center opacity-70 md:opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {[...STACK, ...STACK, ...STACK].map((tech, i) => (
                <span key={i} className="text-lg font-bold text-white/80 md:text-white/60 flex items-center gap-2">
                    {tech}
                </span>
            ))}
         </div>
      </div>

    </section>
  );
}
