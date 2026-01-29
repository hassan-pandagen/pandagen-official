"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Rocket, Terminal, Code2, Cpu } from "lucide-react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import QuoteModal from "@/components/ui/QuoteModal";

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <main className="bg-[#050505] min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* 1. HERO with DNA STRIP */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8">
            <Terminal className="w-4 h-4 text-neon" /> <span>The Anti-Agency</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-tight">
            We don't build websites. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">We build assets.</span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            Most agencies sell you a template and disappear. We are engineers who grew up breaking WordPress sites and fixing them. PandaGen was born from a simple truth: <strong>The web is too slow, and business owners are paying the price.</strong>
          </p>
        </div>

        {/* DNA STRIP (Fills the empty space) */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-white/[0.02] py-4">
            <div className="flex justify-center gap-8 md:gap-16 text-xs md:text-sm font-mono text-gray-600 uppercase tracking-widest">
                <span>Next.js 15</span>
                <span>TypeScript</span>
                <span>Server Actions</span>
                <span>Edge Computing</span>
            </div>
        </div>
      </section>

      {/* 2. THE ENGINEERS (Real Photos) */}
      <section className="container mx-auto px-6 py-20">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Meet the Engineers</h2>
            <p className="text-gray-500">No account managers. You talk directly to the architects.</p>
         </div>

         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* IMRAN */}
            <div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-colors duration-500">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
               <div className="h-96 w-full relative">
                  <Image src="/team/imran.png" fill alt="Imran" className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
               </div>
               <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded w-fit mb-2">Strategy</div>
                  <h3 className="text-3xl font-bold text-white mb-1">Imran</h3>
                  <p className="text-blue-400 font-mono text-sm mb-4">Lead Solutions Architect</p>
                  <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">"My job is to ensure your investment turns into measurable ROI."</p>
               </div>
            </div>

            {/* HASSAN */}
            <div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden hover:border-neon/50 transition-colors duration-500">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
               <div className="h-96 w-full relative">
                  <Image src="/team/hassan.png" fill alt="Hassan" className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
               </div>
               <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="px-3 py-1 bg-neon/20 text-neon text-[10px] font-bold uppercase tracking-wider rounded w-fit mb-2">Engineering</div>
                  <h3 className="text-3xl font-bold text-white mb-1">Hassan</h3>
                  <p className="text-neon font-mono text-sm mb-4">Lead Full-Stack Engineer</p>
                  <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">"I obsess over milliseconds. I build the engines that run the business."</p>
               </div>
            </div>
         </div>
      </section>

      {/* 3. OPERATING GLOBALLY (SVG Map Fix) */}
      <section className="py-32 px-6 text-center bg-[#080808] border-y border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 100 50" preserveAspectRatio="none">
                <pattern id="grid" width="2" height="2" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.5" className="text-white/20" /></pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
         </div>
         <div className="relative z-10 container mx-auto">
             <h2 className="text-white font-bold text-3xl mb-12">Global Footprint</h2>
             <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
                <LocationPoint city="Karachi, PK" role="Engineering Lab" color="bg-neon" pulse />
                <LocationPoint city="Dubai, UAE" role="Client Hub" color="bg-purple-500" />
                <LocationPoint city="Missouri, USA" role="HQ & Strategy" color="bg-blue-500" />
             </div>
         </div>
      </section>

      {/* 4. MANIFESTO (Terminal Style) */}
      <section className="py-20 px-6">
         <div className="container mx-auto max-w-4xl bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden font-mono text-sm shadow-2xl">
            <div className="bg-[#1a1a1a] p-3 border-b border-white/5 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>
                <div className="ml-4 text-gray-500">mission_statement.md</div>
            </div>
            <div className="p-8 md:p-12 text-gray-300 space-y-6">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">mission</span> = <span className="text-green-400">"Eradicate Bloat"</span>;</p>
                <p>
                    In 2026, WordPress still powers 43% of the web. Agencies make billions from plugin subscriptions. 
                    Business owners pay thousands per month for websites that feel like 2010.
                </p>
                <p className="border-l-2 border-neon pl-4 text-white">
                    We build websites using modern architecture. No bloat. No recurring plugin fees. 
                    You get an asset you own, not a service you rent.
                </p>
            </div>
         </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}

function LocationPoint({ city, role, color, pulse }: any) {
    return (
        <div className="flex flex-col items-center gap-3">
            <div className={`w-4 h-4 rounded-full ${color} ${pulse ? 'animate-ping' : ''} shadow-[0_0_20px_currentColor]`} />
            <div className="text-center">
                <div className="text-white font-bold text-lg">{city}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{role}</div>
            </div>
        </div>
    )
}
