"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

// 1. RICH CONTENT (Restored Professional Detail)
const steps = [
  {
    id: "01",
    title: "Discovery & Audit",
    icon: Search,
    description: "We don't guess. We deep-dive into your current architecture, analyze competitor weaknesses, and map out a user journey that converts.",
    tags: ["Market Analysis", "Tech Stack Selection", "User Personas"],
  },
  {
    id: "02",
    title: "Architecture Strategy",
    icon: PenTool,
    description: "Blueprints before bricklaying. We design the database schema, API routes, and component hierarchy to ensure scale.",
    tags: ["System Design", "UI/UX Wireframes", "Database Schema"],
  },
  {
    id: "03",
    title: "Execution (Sprint)",
    icon: Code2,
    description: "The heavy lifting. We work in 1-week sprints with transparent updates. Using Next.js 15, we build components that are 100% type-safe.",
    tags: ["Clean Code", "Weekly Sprints", "CI/CD Setup"],
  },
  {
    id: "04",
    title: "Launch & Scale",
    icon: Rocket,
    description: "Deployment is just the beginning. We configure edge caching, set up analytics, and stress-test the server before handing over the keys.",
    tags: ["Vercel Deployment", "SEO Tuning", "Performance Audit"],
  }
];

export default function MethodToCreativity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!isMounted) return <section className="py-24 bg-transparent min-h-screen" />;

  return (
    <section ref={containerRef} className="relative py-32 bg-transparent overflow-hidden">
      
      {/* 2. LOCAL GLOW (To make sure it's not 'Too Black') */}
      {/* This puts a purple light RIGHT behind the timeline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1000px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* LEFT: Sticky Header */}
          <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-32 flex flex-col justify-start pt-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-neon mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                 The Protocol
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                From Concept <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">to Empire.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-sm leading-relaxed mb-8">
                A military-grade development process designed to eliminate risk and guarantee speed.
              </p>
              
              <button 
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-neon hover:text-black hover:border-neon transition-all w-fit shadow-lg"
              >
                Start Your Build
              </button>
            </div>
          </div>

          {/* RIGHT: Scrollable Timeline */}
          <div className="lg:w-2/3 py-10">
            <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-24">
              
              {/* Glowing Progress Line */}
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute left-[-2px] top-0 bottom-0 w-1 bg-gradient-to-b from-neon via-purple-500 to-orange-500 shadow-[0_0_25px_#22d3ee]"
              />

              {steps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative pl-8 md:pl-16"
    >
      {/* 3. ICON (Architectural Look) */}
      <span className="absolute -left-3 md:-left-12 top-8 flex h-6 w-6 md:h-24 md:w-24 items-center justify-center z-10">
         {/* The Halo */}
         <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-[#050505] border border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <step.icon size={20} />
         </div>
         {/* Mobile Dot */}
         <div className="md:hidden w-4 h-4 rounded-full bg-[#050505] border-2 border-neon box-content" />
      </span>

      {/* 4. THE CARD (Glass Upgrade - NO BLACK BACKGROUND) */}
      <div className="group relative p-8 rounded-3xl transition-all duration-500
        bg-white/[0.02] border border-white/10 backdrop-blur-sm
        hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
      >
        <div className="absolute -top-4 left-8 px-4 py-1 bg-[#0A0A0A] border border-white/20 rounded-full text-xs font-mono text-neon uppercase tracking-wider">
          Phase {step.id}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-2 group-hover:text-neon transition-colors">
            {step.title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed mb-8 text-base md:text-lg">
          {step.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 font-mono group-hover:text-white transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
