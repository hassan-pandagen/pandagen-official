"use client";

import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MethodToCreativity from "@/components/MethodToCreativity";
import DiscoveryPortal from "@/components/DiscoveryPortal";
import QuoteModal from "@/components/ui/QuoteModal";
import WordPressKiller from "@/components/sections/WordPressKiller";
import ProofMarquee from "@/components/ProofMarquee";
import ServicesHub from "@/components/sections/ServicesHub";
import UnfairAdvantage from "@/components/sections/UnfairAdvantage";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Global Noise Texture - This fixes the "Flat" look */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay"></div>

      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-neon z-[70] origin-left" style={{ scaleX }} />

      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
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

      {/* Discovery Portal (CTA) */}
      <DiscoveryPortal onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <Footer onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
