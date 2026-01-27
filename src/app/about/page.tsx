"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Rocket, Terminal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/ui/QuoteModal";

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false); // For Header button
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* 1. HERO: THE MANIFESTO */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8"
          >
            <Terminal className="w-4 h-4 text-neon" />
            <span>The Anti-Agency</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-tight"
          >
            We don't build websites. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-purple-500">
              We build assets.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Most agencies sell you a template and disappear. We are engineers who grew up breaking WordPress sites and fixing them. PandaGen was born from a simple truth: <strong>The web is too slow, and business owners are paying the price.</strong>
          </motion.p>
        </div>
      </section>

      {/* 2. THE LEADERSHIP (The Real Team) */}
      <section className="container mx-auto px-6 py-20">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Meet the Engineers</h2>
            <p className="text-gray-500">No account managers. You talk directly to the architects.</p>
         </div>

         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* IMRAN */}
            <div className="group relative bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] rounded-3xl overflow-hidden hover:border-blue-500/50 transition-colors duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
               
               <div className="h-96 bg-gradient-to-br from-blue-600/20 to-blue-900/20 w-full relative flex items-center justify-center overflow-hidden">
                  <Image 
                     src="/team/imran.png" 
                     fill 
                     alt="Imran" 
                     className="object-cover object-top" 
                     priority
                  />
                  <div className="text-6xl font-bold text-blue-500/40 hidden group-hover:flex">I</div>
               </div>

               <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="flex items-center gap-2 mb-2">
                     <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded">Strategy</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">Imran</h3>
                  <p className="text-blue-400 font-mono text-sm mb-4">Lead Solutions Architect</p>
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                     I bridge the gap between business goals and technical execution. My job is to ensure your investment turns into measurable ROI.
                  </p>
               </div>
            </div>

            {/* HASSAN */}
            <div className="group relative bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] rounded-3xl overflow-hidden hover:border-neon/50 transition-colors duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
               
               <div className="h-96 bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 w-full relative flex items-center justify-center overflow-hidden">
                  <Image 
                     src="/team/hassan.png" 
                     fill 
                     alt="Hassan" 
                     className="object-cover object-top" 
                     priority
                  />
                  <div className="text-6xl font-bold text-neon/40 hidden group-hover:flex">H</div>
               </div>

               <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="flex items-center gap-2 mb-2">
                     <span className="px-3 py-1 bg-neon/20 text-neon text-[10px] font-bold uppercase tracking-wider rounded">Engineering</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">Hassan</h3>
                  <p className="text-neon font-mono text-sm mb-4">Lead Full-Stack Engineer</p>
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                     I obsess over milliseconds. If your site takes more than 0.2s to load, I take it personally. I build the engines that run the business.
                  </p>
               </div>
            </div>

         </div>
      </section>

      {/* 3. THE "PANDA STANDARD" (Values) */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-16">The PandaGen Standard</h2>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
               
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                     <ShieldCheck className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">No Plugins. Ever.</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     We don't install Elementor. We write semantic, clean code. Your site never breaks because of an update.
                  </p>
               </div>

               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                     <Globe className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Global Scale.</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     From Dubai to USA, our code runs on the Edge. We deploy to CDNs that serve your content from the closest server to your user.
                  </p>
               </div>

               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center">
                     <Rocket className="w-6 h-6 text-neon" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Speed is a Feature.</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     We don't optimize for speed at the end. We build for it from line one. 100/100 Lighthouse scores are our baseline.
                  </p>
               </div>

            </div>
         </div>
      </section>

      {/* 4. GLOBAL FOOTPRINT (Visual Trust) */}
      <section className="py-32 px-6 text-center">
         <h2 className="text-white font-bold text-3xl mb-8">Operating Globally</h2>
         <div className="relative max-w-4xl mx-auto h-64 border border-white/[0.15] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent flex items-center justify-center overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            
            <div className="flex gap-16 relative z-10">
               <div className="text-center">
                  <div className="w-3 h-3 bg-neon rounded-full mx-auto mb-2 animate-pulse" />
                  <div className="text-white font-bold">Code Lab</div>
                  <div className="text-xs text-gray-500">Pakistan</div>
               </div>
               <div className="text-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2" />
                  <div className="text-white font-bold">Client Hub</div>
                  <div className="text-xs text-gray-500">Dubai</div>
               </div>
               <div className="text-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-2" />
                  <div className="text-white font-bold">Client Hub</div>
                  <div className="text-xs text-gray-500">USA</div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. WHY WE EXIST */}
      <section className="py-20 px-6 border-t border-white/5">
         <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12">Why PandaGen Exists</h2>
            
            <div className="space-y-8">
               <div>
                  <h3 className="text-xl font-bold text-neon mb-3">The Problem We Solve</h3>
                  <p className="text-gray-400 leading-relaxed">
                     In 2024, WordPress still powers 43% of the web. Agencies make billions from plugin subscriptions, security add-ons, and expensive retainers. Business owners pay thousands per month for websites that feel like 2010.
                  </p>
               </div>
               
               <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">What We Do Differently</h3>
                  <p className="text-gray-400 leading-relaxed">
                     We build websites using modern architecture. No bloat. No recurring plugin fees. No "emergency" maintenance calls. You get a asset you own, not a service you rent.
                  </p>
               </div>
               
               <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Who We Work With</h3>
                  <p className="text-gray-400 leading-relaxed">
                     Scaling SaaS companies, e-commerce brands doing $1M+/year, and agencies tired of WordPress maintenance. We solve the problem at the root instead of patching it.
                  </p>
               </div>
            </div>
         </div>
      </section>

      <Footer />

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </main>
      );
      }
