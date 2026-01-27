"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight, Zap, RefreshCcw } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  painPoints: string[];
  features: { title: string; desc: string; icon: any }[];
  guaranteeText: string;
}

export default function ServicePageTemplate({ title, subtitle, description, painPoints, features, guaranteeText }: ServicePageProps) {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neon mb-8">
              <Zap className="w-4 h-4" /> PandaGen Engineering
           </motion.div>
           <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-tight">
              {title}
           </h1>
           <p className="text-xl text-gray-400 leading-relaxed mb-12">{description}</p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button 
                 data-cal-namespace="discovery"
                 data-cal-link="pandagen/discovery"
                 data-cal-config='{"layout":"month_view"}'
                 className="px-10 py-5 bg-neon text-black font-bold rounded-full hover:bg-neon/90 transition-all hover:scale-105"
               >
                 Start Your Build
               </button>
           </div>
        </div>
      </section>

      {/* 2. THE PROBLEM (Why they need you) */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
         <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-bold text-white mb-6">The Hidden Cost of Status Quo</h2>
               <div className="space-y-4">
                  {painPoints.map((pain, i) => (
                     <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                        <div className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{pain}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="h-full bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl border border-white/[0.15] p-8 flex items-center justify-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
               <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">40%</div>
                  <div className="text-gray-500 text-sm">Revenue lost due to slow sites</div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. THE SOLUTION (Features) */}
      <section className="py-32 container mx-auto px-6">
         <h2 className="text-3xl font-bold text-white text-center mb-16">The Architecture Upgrade</h2>
         <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
               <div key={i} className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] hover:border-neon/30 transition-colors group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-neon/10 transition-colors">
                     <feature.icon className="w-6 h-6 text-white group-hover:text-neon" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 4. THE GUARANTEE (Your New USP) */}
      <section className="py-20 px-6">
         <div className="container mx-auto max-w-4xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-[3rem] p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 text-center">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                  <ShieldCheck className="w-4 h-4" /> 30-Day Money Back Guarantee
               </div>
               <h2 className="text-4xl font-bold text-white mb-6">Zero Risk. 100% Ownership.</h2>
               <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  {guaranteeText}
               </p>
               <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mb-10">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-green-500/10 rounded-full text-green-400"><RefreshCcw size={16}/></div>
                     <span className="text-sm text-white">Full Refund if not happy</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-green-500/10 rounded-full text-green-400"><CheckCircle2 size={16}/></div>
                     <span className="text-sm text-white">You own the code</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-green-500/10 rounded-full text-green-400"><ShieldCheck size={16}/></div>
                     <span className="text-sm text-white">Free 1-Month Support</span>
                  </div>
               </div>
               
               <button 
                 data-cal-namespace="discovery"
                 data-cal-link="pandagen/discovery"
                 data-cal-config='{"layout":"month_view"}'
                 className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
               >
                 Claim Your Guarantee
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
