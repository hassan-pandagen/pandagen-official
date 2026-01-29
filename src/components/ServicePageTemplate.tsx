"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, RefreshCcw, AlertTriangle, ArrowRight, XCircle, ChevronDown } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  painPoints: string[];
  features: { title: string; desc: string; icon: any }[];
  guaranteeText: string;
  deepDive?: React.ReactNode;
}

export default function ServicePageTemplate({ title, subtitle, description, painPoints, features, guaranteeText, deepDive }: ServicePageProps) {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
      <Header />

      {/* 1. HERO (Filled Space & Ambient Light) */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Massive Background Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
           <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neon mb-8 font-medium backdrop-blur-md"
           >
              <Zap className="w-4 h-4" /> <span className="uppercase tracking-widest text-xs font-bold">{subtitle}</span>
           </motion.div>
           
           <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1] drop-shadow-2xl">
              {title}
           </h1>
           
           <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              {description}
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <button 
                 data-cal-namespace="discovery"
                 data-cal-link="pandagen/discovery"
                 data-cal-config='{"layout":"month_view"}'
                 className="px-10 py-5 bg-neon text-black font-bold text-lg rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(34,211,238,0.3)]"
               >
                 Start Your Build
               </button>
               <span className="text-sm text-gray-500">or scroll to learn more</span>
           </div>
        </div>

        {/* TECH STACK STRIP (Fills the empty space at bottom) */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center">
            <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">Powered By Enterprise Tech</p>
            <div className="flex gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Replace with actual SVGs or Icons for Next.js, Vercel, React, Stripe */}
                <span className="text-xl font-bold text-white">NEXT.js</span>
                <span className="text-xl font-bold text-white">Vercel</span>
                <span className="text-xl font-bold text-white">React</span>
                <span className="text-xl font-bold text-white">Supabase</span>
            </div>
        </div>
      </section>

      {/* 2. THE DEEP DIVE (Business Context) */}
      {deepDive && (
        <section className="py-20 px-6 bg-[#080808] border-y border-white/5">
           <div className="container mx-auto max-w-4xl">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-neon rounded-full" /> 
                    The Engineering Truth
                 </h3>
                 <div className="space-y-4 text-gray-300 leading-relaxed">
                    {deepDive}
                 </div>
              </div>
           </div>
        </section>
      )}

      {/* 3. THE PROBLEM (Redesigned: The "Terminal" Look) */}
      <section className="py-24 border-y border-white/5 bg-[#080808]">
         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Copy */}
            <div>
               <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-2 block">The Bottleneck</span>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Your current stack is <br /> <span className="text-red-500">bleeding money.</span>
               </h2>
               
               <div className="space-y-6">
                  {painPoints.map((pain, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4"
                     >
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                        <p className="text-lg text-gray-300 font-medium">
                           {pain}
                        </p>
                     </motion.div>
                  ))}
               </div>
            </div>
            
            {/* Right: The Visual (Terminal Simulation) */}
            <div className="relative">
                <div className="absolute -inset-1 bg-red-500/20 blur-2xl rounded-3xl" />
                <div className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono text-sm">
                    {/* Fake Browser Header */}
                    <div className="bg-[#1a1a1a] p-3 border-b border-white/5 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <div className="ml-4 px-3 py-1 bg-black/50 rounded text-xs text-gray-500 flex-1 text-center">analysis_report.pdf</div>
                    </div>
                    {/* Content */}
                    <div className="p-8 space-y-6">
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span className="text-gray-400">Mobile Performance</span>
                            <span className="text-red-500 font-bold">32/100 (FAIL)</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span className="text-gray-400">Time to Interactive</span>
                            <span className="text-red-500 font-bold">4.2s (SLOW)</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span className="text-gray-400">Security Vulnerabilities</span>
                            <span className="text-red-500 font-bold">3 Critical</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Est. Revenue Loss</span>
                            <span className="text-white font-bold bg-red-500/20 px-2 py-1 rounded text-red-400">-40%</span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 3. THE SOLUTION (Glass Cards - Lighter) */}
      <section className="py-32 container mx-auto px-6">
         <div className="text-center mb-20">
            <span className="text-neon font-bold tracking-widest text-xs uppercase mb-2 block">The Architecture</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
               How we fix it. Forever.
            </h2>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
               <div key={i} className="p-8 rounded-[2rem] border transition-all duration-300 group
                  bg-white/[0.03] border-white/10 hover:bg-white/[0.05] shadow-none"
               >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors
                     bg-white/5 border-white/10 text-white group-hover:text-neon"
                  >
                     <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{feature.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 4. THE GUARANTEE (Keep this - it is good) */}
      <section className="py-20 px-6">
         <div className="container mx-auto max-w-5xl relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[2.5rem] blur-2xl opacity-30 pointer-events-none" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden border p-12 md:p-20 text-center
               bg-[#080808] border-emerald-500/30"
            >
               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-emerald-500/40 mb-10 transform -rotate-6 group-hover:rotate-0 transition-transform">
                     <ShieldCheck className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                     Zero Risk. <br className="hidden md:block" />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                        100% Ownership.
                     </span>
                  </h2>

                  <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                     {guaranteeText}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 w-full mb-12 text-left">
                     <TrustItem icon={RefreshCcw} title="Money-Back" desc="If we miss our KPIs, we refund the final payment." />
                     <TrustItem icon={CheckCircle2} title="Source Code" desc="You own the Git Repo. No vendor lock-in." />
                     <TrustItem icon={Zap} title="Support Included" desc="30 Days of bug fixes and updates included." />
                  </div>

                  <button 
                    data-cal-namespace="discovery"
                    data-cal-link="pandagen/discovery"
                    data-cal-config='{"layout":"month_view"}'
                    className="px-12 py-6 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-all shadow-xl"
                  >
                    Claim Your Guarantee
                  </button>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

function TrustItem({ icon: Icon, title, desc }: any) {
   return (
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3">
         <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Icon size={20} />
         </div>
         <div>
            <h4 className="font-bold text-white">{title}</h4>
            <p className="text-xs text-gray-400 leading-relaxed mt-1">{desc}</p>
         </div>
      </div>
   )
}
