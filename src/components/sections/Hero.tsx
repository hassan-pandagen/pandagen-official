"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState, MouseEvent } from "react";
import PandaEngine from "./PandaEngine"; // Keep your engine
import { ArrowRight, ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenQuote?: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse Spotlight Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#050505] selection:bg-neon selection:text-black"
      onMouseMove={handleMouseMove}
    >
      {/* 1. MOVING SPOTLIGHT BEHIND EVERYTHING */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* 2. THE 3D RETRO GRID FLOOR */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{ perspective: "1000px" }}
        >
          <div className="absolute inset-0 bg-grid-white animate-grid origin-top [transform:rotateX(60deg)_translateZ(-100px)] h-[200%]" />
        </div>
      </div>

      {/* 3. ATMOSPHERIC GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: TEXT */}
          <motion.div style={{ y: y1, opacity }} className="text-center lg:text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 group cursor-pointer hover:border-neon/50 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                Accepting Projects for Feb 2026
              </span>
              <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-neon group-hover:translate-x-0.5 transition-all" />
            </motion.div>

            {/* Headline with Gradient Text */}
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8">
              <span className="text-white">Digital</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-blue-400 to-purple-400 animate-gradient-x">
                Done Right
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Stop paying for bloated templates. We build <span className="text-white font-semibold">bespoke Next.js engines</span> that rank higher, load instantly, and convert better.
            </p>

            {/* CTA Buttons with "Glow" Borders */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button onClick={onOpenQuote} className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-base font-medium text-white backdrop-blur-3xl transition-all hover:bg-slate-900">
                  Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </button>
              
              <Link href="/work" className="px-8 py-4 rounded-full font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all inline-block">
                View Case Studies
              </Link>
            </div>

            {/* Metrics */}
            <div className="mt-16 pt-8 border-t border-white/10 flex gap-12 justify-center lg:justify-start opacity-80">
                <div>
                    <h4 className="text-3xl font-bold text-white">0.1s</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Load Time</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-white">100%</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Ownership</p>
                </div>
            </div>

          </motion.div>

          {/* RIGHT: ENGINE (Floating) */}
          <motion.div
             style={{ y: y1 }}
             className="relative z-10 hidden lg:block perspective-1000"
          >
             {/* This glowing orb sits behind your 3D engine to give it presence */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full" />
             <div className="relative z-10 hover:scale-105 transition-transform duration-700 ease-out">
                <PandaEngine />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
