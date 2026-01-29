"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useSpring } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import QuoteModal from "@/components/ui/QuoteModal";

// Lazy load heavy/below-the-fold components for better initial load performance
const ProofMarquee = dynamic(() => import("@/components/ProofMarquee"));
const MethodToCreativity = dynamic(() => import("@/components/MethodToCreativity"));
const ServicesHub = dynamic(() => import("@/components/sections/ServicesHub"));
const WordPressKiller = dynamic(() => import("@/components/sections/WordPressKiller"));
const UnfairAdvantage = dynamic(() => import("@/components/sections/UnfairAdvantage"));
const FullROIShowcase = dynamic(() => import("@/components/sections/FullROIShowcase"));
const DiscoveryPortal = dynamic(() => import("@/components/DiscoveryPortal"));

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-transparent text-white overflow-x-hidden">
      {/* Global Noise Texture - This fixes the "Flat" look */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay"></div>

      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-neon z-[70] origin-left" style={{ scaleX }} />

      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* Hero Section */}
      <Hero />
      
      {/* THE GUARANTEE BANNER */}
      <div className="w-full bg-[#0A0A0A] border-y border-white/5 py-4 relative overflow-hidden group">
         <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors" />
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-3 text-sm font-bold uppercase tracking-widest text-green-400">
            <ShieldCheck className="w-5 h-5" />
            <span>30-Day Money-Back Guarantee on all Projects</span>
         </div>
      </div>
      
      {/* Proof Marquee (Trusted By) */}
      <ProofMarquee />

      {/* The Process - Vertical Sticky Timeline */}
      <MethodToCreativity />

      {/* Services Hub */}
      <ServicesHub />

      {/* WordPress & Shopify Comparison */}
      <WordPressKiller onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* The Unfair Advantage - Speed, Security, Ownership */}
      <UnfairAdvantage />

      {/* Full ROI Showcase with Detailed Comparisons */}
      <FullROIShowcase onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* Discovery Portal (CTA) */}
      <DiscoveryPortal onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <Footer onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
