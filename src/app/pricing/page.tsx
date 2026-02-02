"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, RefreshCcw } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PricingPage() {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-40 pb-20 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
           Simple, Transparent <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-purple-500">Investment.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
           We don't charge hourly. We charge for outcomes.
        </p>
      </section>

      {/* 2. PRICING CARDS */}
      <section className="container mx-auto px-6 pb-32">
         <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
            
            {/* TIER 1: LANDING PAGE */}
            <PricingCard 
               title="Conversion Microsite"
               price="$2,500"
               description="For campaigns that need to convert cold traffic. Perfect for SaaS launches or high-ticket offers."
               features={[
                  "1 Long-Form 3D Landing Page",
                  "Next.js + Framer Motion Animations",
                  "Copywriting & VSL Integration",
                  "0.1s Load Speed Guarantee",
                  "1 Week Delivery"
               ]}
               cta="Start Build"
               highlight={false}
            />

            {/* TIER 2: MIGRATION (The Star) */}
            <PricingCard 
               title="Business Engine"
               price="$5,500+"
               description="The complete package. We migrate your WordPress site to a custom Next.js architecture."
               features={[
                  "5-10 Custom Pages (Home, About, Services)",
                  "CMS Integration (Sanity/Strapi)",
                  "Blog Engine (MDX) for SEO",
                  "Admin Dashboard for Content",
                  "Zero-Downtime Migration",
                  "30 Days Support"
               ]}
               cta="Book Discovery Call"
               highlight={true}
               tag="Most Popular"
            />

            {/* TIER 3: E-COMMERCE */}
            <PricingCard 
               title="Enterprise Store"
               price="$12,000+"
               description="Headless Shopify/Stripe integration. For brands doing $500k+ revenue."
               features={[
                  "Full Headless Shopify Storefront",
                  "Custom Checkout Logic",
                  "Role-Based User Accounts",
                  "Subscription & Inventory Sync",
                  "Global CDN & Multi-Currency",
                  "Priority Engineering Support"
               ]}
               cta="Contact for Scope"
               highlight={false}
            />

         </div>
          </section>

          {/* 2.4. THE "WHY" EXPLAINER */}
          <section className="container mx-auto px-6 pb-32">
             <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Why our pricing is "Fixed" (and why you should care).</h2>
                <div className="grid md:grid-cols-2 gap-12 text-gray-300 leading-relaxed">
                   <div>
                      <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                        <span>🚫</span> The Hourly Billing Trap
                      </h3>
                      <p>
                         Most agencies charge $100/hour. This punishes efficiency. If they work slow, you pay more. 
                         You never know the final bill until it's too late. It creates a conflict of interest.
                      </p>
                   </div>
                   <div>
                      <h3 className="text-neon font-bold mb-2 flex items-center gap-2">
                        <span>✅</span> The PandaGen Flat Fee
                      </h3>
                      <p>
                         We charge for the <strong>Outcome</strong>. Whether it takes us 50 hours or 500 hours to build your perfect platform, you pay the same agreed price. 
                         We take the risk, not you. This aligns our incentives: we both want it done perfectly and efficiently.
                      </p>
                   </div>
                </div>
             </div>
          </section>

          {/* 2.5. RISK-FREE GUARANTEE BADGE */}
         <section className="container mx-auto px-6 pb-32">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-[2rem] p-12 relative overflow-hidden text-center"
         >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                  <ShieldCheck className="w-4 h-4" /> 30-Day Money Back Guarantee
               </div>
               <h2 className="text-4xl font-bold text-white mb-6">Zero Risk. 100% Ownership.</h2>
               <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                  We are so confident in our work that if you're not happy with your investment, we'll refund your full payment. No questions asked.
               </p>
               <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center gap-3">
                     <div className="p-3 bg-green-500/10 rounded-full text-green-400"><RefreshCcw size={20}/></div>
                     <span className="text-sm text-white font-medium">Full Refund if not happy</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                     <div className="p-3 bg-green-500/10 rounded-full text-green-400"><CheckCircle2 size={20}/></div>
                     <span className="text-sm text-white font-medium">You own the code</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                     <div className="p-3 bg-green-500/10 rounded-full text-green-400"><ShieldCheck size={20}/></div>
                     <span className="text-sm text-white font-medium">Free 1-Month Support</span>
                  </div>
               </div>
            </div>
         </motion.div>
         </section>

         {/* 3. COMPARISON TABLE */}
      <section className="container mx-auto px-6 pb-32">
         <h2 className="text-3xl font-bold text-white text-center mb-12">The ROI Calculation</h2>
         <div className="border border-white/[0.15] rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.08] to-transparent max-w-4xl mx-auto shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-white/5 font-bold text-white">
               <div>Feature</div>
               <div>Standard Agency</div>
               <div className="text-neon">PandaGen</div>
            </div>
            <TableRow label="Technology" bad="WordPress / Elementor" good="Next.js (React)" />
            <TableRow label="Load Time" bad="2.0s - 4.0s" good="0.1s - 0.5s" />
            <TableRow label="Security" bad="Plugin Vulnerabilities" good="Bank-Grade (Static)" />
            <TableRow label="Ownership" bad="Locked to Theme" good="100% Code Ownership" />
            <TableRow label="Monthly Cost" bad="$150+ (Maintenance)" good="$0 (Deploy & Forget)" />
         </div>
      </section>

      {/* 4. FAQ */}
      <section className="container mx-auto px-6 pb-32 max-w-3xl">
         <h2 className="text-3xl font-bold text-white text-center mb-12">Common Questions</h2>
         <div className="space-y-6">
            <FAQ 
               q="What if I need more custom work?"
               a="Every project is unique. After the discovery call, we'll provide a custom quote. The tiers above are our starting point, not a ceiling."
            />
            <FAQ 
               q="Do you do retainers after launch?"
               a="Yes. Most clients keep us for ongoing maintenance ($500/mo for hosting + updates) or priority new feature development."
            />
            <FAQ 
               q="Why is your price higher than 99designs?"
               a="Because we're not building templates. We're building assets. Your $5,500 investment will make you $50k+ in revenue within a year. That's the math that matters."
            />
            <FAQ 
               q="What's included in the 'Discovery Call'?"
               a="We audit your current site (if any), understand your revenue goals, and map out the tech stack. This is free and non-binding."
            />
         </div>
      </section>

      <Footer />
    </main>
  );
}

function PricingCard({ title, price, description, features, cta, highlight, tag }: any) {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all ${highlight ? 'bg-gradient-to-b from-white/[0.12] to-transparent border-neon shadow-[0_0_40px_rgba(34,211,238,0.1),inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:scale-105 lg:z-10' : 'bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]'}`}
      >
         {tag && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon text-black font-bold text-xs rounded-full uppercase tracking-wider">
               {tag}
            </div>
         )}
         <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
         <div className="text-4xl font-bold text-white mb-4">{price}</div>
         <p className="text-gray-400 text-sm mb-8 leading-relaxed h-16">{description}</p>
         
         <a 
            href="/contact"
            className={`w-full py-4 rounded-xl font-bold mb-8 transition-all flex items-center justify-center gap-2 ${highlight ? 'bg-neon text-black hover:bg-neon/90' : 'bg-white/10 text-white hover:bg-white/20'}`}
         >
            {cta}
            <ArrowRight className="w-4 h-4" />
         </a>

         <div className="space-y-4 flex-grow">
            {features.map((f: string, i: number) => (
               <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlight ? 'text-neon' : 'text-gray-500'}`} />
                  <span>{f}</span>
               </div>
            ))}
         </div>
      </motion.div>
   )
}

function TableRow({ label, bad, good }: any) {
   return (
      <div className="grid grid-cols-3 p-6 border-b border-white/5 text-sm hover:bg-white/[0.02] transition-colors">
         <div className="text-white font-medium">{label}</div>
         <div className="text-gray-500">{bad}</div>
         <div className="text-neon font-bold flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> {good}</div>
      </div>
   )
}

function FAQ({ q, a }: any) {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 10 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors"
      >
         <h3 className="text-lg font-bold text-white mb-3">{q}</h3>
         <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
      </motion.div>
   )
}
