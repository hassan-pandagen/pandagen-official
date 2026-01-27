"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Audit",
    icon: Search,
    description: "We don't guess. We deep-dive into your current architecture, analyze competitor weaknesses, and map out a user journey that converts. No code is written until the math makes sense.",
    tags: ["Market Analysis", "Tech Stack Selection", "User Personas"],
  },
  {
    id: "02",
    title: "Architecture Strategy",
    icon: PenTool,
    description: "Blueprints before bricklaying. We design the database schema, API routes, and component hierarchy. This ensures your app scales to millions of users without needing a rewrite.",
    tags: ["System Design", "UI/UX Wireframes", "Database Schema"],
  },
  {
    id: "03",
    title: "Execution (Sprint)",
    icon: Code2,
    description: "The heavy lifting. We work in 1-week sprints with transparent updates. Using Next.js and TypeScript, we build components that are 100% type-safe and optimized for Core Web Vitals.",
    tags: ["Clean Code", "Weekly Sprints", "CI/CD Setup"],
  },
  {
    id: "04",
    title: "Launch & Scale",
    icon: Rocket,
    description: "Deployment is just the beginning. We configure edge caching, set up analytics, and stress-test the server. We hand over the keys only when the lighthouse score hits 100.",
    tags: ["Vercel Deployment", "SEO Tuning", "Performance Audit"],
  }
];

export default function MethodToCreativity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Smooth out the progress bar to prevent jitter
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative bg-[#050505] -mt-[1px] py-24">
      {/* STATIC Background Ambience (Moved out of scroll container for performance) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT: Sticky Header */}
          <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-neon" />
                <span className="text-neon tracking-widest text-sm font-bold uppercase">The Methodology</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                From Concept <br />
                <span className="text-gray-600">to Empire.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-sm">
                A military-grade development process designed to eliminate risk and guarantee speed.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-neon/50 transition-all w-fit"
              >
                Start Your Build
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT: Scrollable Timeline */}
          <div className="lg:w-2/3 py-10">
            <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-24">
              
              {/* Optimized Progress Line - GPU Accelerated */}
              <motion.div 
                style={{ scaleY }}
                className="absolute left-[-1px] top-0 bottom-0 w-1 bg-gradient-to-b from-neon via-purple-500 to-orange-500 origin-top will-change-transform"
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative pl-8 md:pl-16"
    >
      {/* Icon Bubble */}
      <span className="absolute -left-3 md:-left-12 top-0 flex h-6 w-6 md:h-24 md:w-24 items-center justify-center rounded-full bg-[#050505] border border-white/10 group-hover:border-neon transition-colors z-10">
         <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-white">
            <step.icon size={20} />
         </div>
         {/* Mobile Dot */}
         <div className="md:hidden w-3 h-3 rounded-full bg-neon" />
      </span>

      <div className="group relative bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] hover:border-white/20 p-8 rounded-2xl transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
      <div className="absolute -top-6 left-8 bg-[#050505] px-4 py-1 border border-white/[0.15] rounded-full text-sm font-mono text-neon">
          Phase {step.id}
        </div>
        
        <h3 className="text-3xl font-bold text-white mb-4 mt-2">{step.title}</h3>
        <p className="text-gray-400 leading-relaxed mb-6 text-lg">
          {step.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {step.tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-black/50 border border-white/10 rounded text-xs text-gray-300">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
