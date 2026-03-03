"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight, Zap, RefreshCcw } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  deepDive?: React.ReactNode;
  painPoints: string[];
  features: { title: string; desc: string; icon: any }[];
  guaranteeText: string;
}

export default function ServicePageTemplate({ title, subtitle, description, deepDive, painPoints, features, guaranteeText }: ServicePageProps) {
  return (
    <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden">
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-40 pb-20 px-6 bg-paper overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-200/40 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-sm text-stone-600 mb-8">
              <Zap className="w-4 h-4" /> PandaGen Engineering
           </motion.div>
           <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-8 leading-tight">
              {title}
           </h1>
           <p className="text-xl text-stone-600 leading-relaxed mb-12">{description}</p>

           <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button
                 data-cal-namespace="discovery"
                 data-cal-link="pandagen/discovery"
                 data-cal-config='{"layout":"month_view"}'
                 className="px-10 py-5 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all hover:scale-105"
               >
                 Start Your Build
               </button>
           </div>
        </div>
      </section>

      {/* Deep Dive Section (if provided) */}
      {deepDive && (
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none text-stone-600 prose-headings:text-charcoal prose-a:text-cognac">
              {deepDive}
            </div>
          </div>
        </section>
      )}

      {/* 2. THE PROBLEM */}
      <section className="py-20 border-y border-stone-200 bg-white">
         <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-bold text-charcoal mb-6">The Hidden Cost of Status Quo</h2>
               <div className="space-y-4">
                  {painPoints.map((pain, i) => (
                     <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                        <div className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                        <p className="text-stone-600 text-sm">{pain}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="h-full bg-white rounded-2xl border border-stone-200 p-8 flex items-center justify-center shadow-card">
               <div className="text-center">
                  <div className="text-6xl font-bold text-charcoal mb-2">40%</div>
                  <div className="text-stone-500 text-sm">Revenue lost due to slow sites</div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. THE SOLUTION (Features) */}
      <section className="py-32 container mx-auto px-6">
         <h2 className="text-3xl font-bold text-charcoal text-center mb-16">The Architecture Upgrade</h2>
         <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
               <div key={i} className="p-8 rounded-3xl bg-white border border-stone-200 hover:border-stone-400 transition-colors group shadow-card hover:shadow-card-hover">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center mb-6 group-hover:bg-charcoal transition-colors duration-300">
                     <feature.icon className="w-6 h-6 text-charcoal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{feature.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 4. THE GUARANTEE */}
      <section className="py-20 px-6">
         <div className="container mx-auto max-w-4xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-[3rem] p-12 relative overflow-hidden shadow-green-glow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/50 blur-[80px] pointer-events-none" />

            <div className="relative z-10 text-center">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <ShieldCheck className="w-4 h-4" /> 30-Day Money-Back Guarantee (from delivery)
               </div>
               <h2 className="text-4xl font-bold text-charcoal mb-6">Zero Risk. 100% Ownership.</h2>
               <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  {guaranteeText}
               </p>
               <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mb-10">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-green-100 rounded-full text-green-700"><RefreshCcw size={16}/></div>
                     <span className="text-sm text-charcoal">Full Refund if not happy</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-green-100 rounded-full text-green-700"><CheckCircle2 size={16}/></div>
                     <span className="text-sm text-charcoal">You own the code</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-green-100 rounded-full text-green-700"><ShieldCheck size={16}/></div>
                     <span className="text-sm text-charcoal">Free 1-Month Support</span>
                  </div>
               </div>

               <button
                 data-cal-namespace="discovery"
                 data-cal-link="pandagen/discovery"
                 data-cal-config='{"layout":"month_view"}'
                 className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all"
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
