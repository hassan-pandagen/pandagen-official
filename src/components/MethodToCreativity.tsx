"use client";

import { useRef, useState, useEffect, type ElementType } from "react";
import { motion } from "@/components/ui/motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

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
    description: "The heavy lifting. We work in 1-week sprints with transparent updates. Using Next.js 16, we build components that are 100% type-safe.",
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
  const timelineRef = useRef<HTMLDivElement>(null);
  const borderContainerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const progressHeadRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updateProgress = () => {
      if (!timelineRef.current || !progressLineRef.current || !progressHeadRef.current || !borderContainerRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = rect.top;
      const total = rect.height + windowHeight;
      const current = windowHeight - start;

      const progress = Math.max(0, Math.min(1, current / total));

      progressLineRef.current.style.transform = `scaleY(${progress})`;
      progressHeadRef.current.style.transform = `translateY(${progress * rect.height}px)`;

      // Animate border from light stone to cognac
      const opacity = 0.15 + (progress * 0.7);
      borderContainerRef.current.style.borderLeftColor = `rgba(234, 88, 12, ${opacity})`;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  if (!isMounted) return <section className="py-24 bg-transparent" style={{ minHeight: '100vh' }} />;

  return (
    <section className="relative py-12 md:py-24 bg-paper overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* LEFT: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start flex flex-col justify-start pt-10" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-50 border border-stone-200 text-xs font-bold text-cognac mb-6 uppercase tracking-widest">
                The Protocol
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">
                From Concept <br />
                <span className="font-serif italic text-cognac">to Empire.</span>
              </h2>
              <p className="text-stone-600 text-lg max-w-sm leading-relaxed mb-8">
                A proven development process designed to eliminate risk and guarantee speed.
              </p>

              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"start_your_build",location:"cta"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="px-8 py-4 bg-charcoal text-white rounded-full font-bold hover:bg-stone-800 transition-all w-fit">
                Start Your Build
              </button>
            </div>
          </div>

          {/* RIGHT: Scrollable Timeline */}
          <div ref={timelineRef} className="lg:w-2/3 py-10">
            <div ref={borderContainerRef} className="relative border-l-2 border-stone-200 ml-4 md:ml-12 space-y-12 md:space-y-24 pb-32 transition-colors duration-300">

              {/* Progress Line */}
              <div
                ref={progressLineRef}
                className="absolute left-[-3px] top-0 w-[3px] bg-linear-to-b from-cognac to-stone-400 z-30 transition-transform duration-75 ease-linear"
                style={{ height: "100%", transformOrigin: "top", transform: "scaleY(0)" }}
              />

              {/* Progress Head */}
              <div
                ref={progressHeadRef}
                className="absolute left-[-8px] top-0 w-5 h-5 rounded-full bg-cognac border-2 border-white shadow-[0_0_12px_rgba(234,88,12,0.4)] z-40 animate-pulse transition-transform duration-75 ease-linear"
                style={{ transform: "translateY(0px)" }}
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

function StepCard({ step, index }: { step: { id: string; title: string; icon: ElementType; description: string; tags: string[] }, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative pl-8 md:pl-16"
    >
      {/* Icon */}
      <span className="absolute -left-3 md:-left-12 top-8 flex h-6 w-6 md:h-24 md:w-24 items-center justify-center z-10">
        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-stone-200 text-stone-500 shadow-card group-hover:border-cognac/30 transition-all duration-500">
          <step.icon size={20} />
        </div>
        <div className="md:hidden w-4 h-4 rounded-full bg-white border-2 border-cognac box-content shadow-[0_0_8px_rgba(234,88,12,0.3)]" />
      </span>

      {/* Card */}
      <div className="group relative p-8 rounded-3xl transition-all duration-500 bg-white border border-stone-200 shadow-card hover:shadow-card-hover hover:-translate-y-1">
        <div className="absolute -top-4 left-8 px-4 py-1 bg-white border border-stone-300 rounded-full text-xs font-mono text-cognac uppercase tracking-wider shadow-card group-hover:border-cognac/30 transition-all duration-500">
          Phase {step.id}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 mt-2 group-hover:text-cognac transition-colors">
          {step.title}
        </h3>

        <p className="text-stone-600 leading-relaxed mb-8 text-base md:text-lg">
          {step.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-500 font-mono group-hover:text-charcoal transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
