"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Database, Code2, ShoppingCart, CheckCircle2, Server, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-neon selection:text-black overflow-x-hidden relative">
      {/* Global Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay"></div>

      <Header />

      {/* 1. HERO */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            Engineering Department
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]"
          >
            Capabilities <span className="text-gray-700">&</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-blue-400 to-purple-400">
              Architecture.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* 2. THE BIG 3 PILLARS (Now Linked & Animated) */}
      <div className="space-y-40 pb-40">
        
        {/* PILLAR 1 */}
        <ServiceSection 
          id="01"
          title="WordPress Migration"
          subtitle="Make Your Site Instant & Secure"
          description="Is your WordPress site slow, getting hacked, or constantly breaking? We move you to a modern technology (Next.js) that loads in 0.1 seconds."
          tags={["Fix Slow Loading", "Bank-Grade Security", "Keep Your SEO Rankings"]}
          features={["No More Plugin Updates", "Perfect Google PageSpeed Score", "Impossible to Hack (Static)", "We Handle All Data Transfer"]}
          align="left"
          icon={Database}
          gradient="from-orange-500/20 to-red-600/5"
          href="/services/wordpress-migration"
        >
          <RingPortalDecoration />
        </ServiceSection>

        {/* PILLAR 2 */}
        <ServiceSection 
          id="02"
          title="Web Apps & Dashboards"
          subtitle="Build Your Own Software (SaaS)"
          description="For founders who need more than just a website. We build custom client portals, internal dashboards, AI tools, and mobile apps."
          tags={["Client Portals", "AI Integration", "Mobile Apps (PWA)"]}
          features={["Works on iPhone & Android", "Chat with your Data (AI)", "Subscription Payments", "Real-time Admin Panels"]}
          align="right"
          icon={Code2}
          gradient="from-blue-500/20 to-purple-600/5"
          href="/services/custom-engineering"
        >
           <DashboardDecoration />
        </ServiceSection>

        {/* PILLAR 3 */}
        <ServiceSection 
          id="03"
          title="High-Performance Stores"
          subtitle="Custom Shopify (No Templates)"
          description="Standard Shopify themes are slow. We build fully custom storefronts that load instantly, creating unique shopping experiences."
          tags={["Custom Checkout", "3D Product Views", "Instant Loading"]}
          features={["Stop Paying Monthly App Fees", "Rank #1 on Google", "Custom Upsell Logic", "Connects to Shopify Inventory"]}
          align="left"
          icon={ShoppingCart}
          gradient="from-green-500/20 to-emerald-600/5"
          href="/services/ecommerce"
        >
           <EcommerceDecoration />
        </ServiceSection>

      </div>

      <Footer />
    </main>
  );
}

// --- UPDATED SERVICE SECTION (With Link Button) ---
function ServiceSection({ id, title, subtitle, description, tags, features, align, icon: Icon, gradient, children, href }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.3], [align === 'left' ? -50 : 50, 0]);

  return (
    <section ref={ref} className="container mx-auto px-6">
      <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* TEXT SIDE */}
        <motion.div style={{ opacity, x }} className="flex-1">
           <div className="flex items-center gap-4 mb-8">
              <span className="text-7xl font-bold text-white/5 font-mono">{id}</span>
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} border border-white/10 shadow-lg`}>
                 <Icon className="w-8 h-8 text-white" />
              </div>
           </div>
           
           <h2 className="text-5xl font-bold text-white mb-3">{title}</h2>
           <p className="text-2xl text-neon mb-8 font-medium tracking-tight">{subtitle}</p>
           <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">{description}</p>
           
           <div className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag: string, i: number) => (
                 <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-medium">
                    {tag}
                 </span>
              ))}
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature: string, i: number) => (
                 <div key={i} className="flex items-center gap-3 text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-neon flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                 </div>
              ))}
           </div>

           {/* NEW: THE EXPLORE BUTTON */}
           <Link href={href} className="inline-flex items-center gap-2 text-white font-bold border-b border-neon pb-1 hover:gap-4 transition-all">
              Explore {title} <ArrowRight className="w-5 h-5 text-neon" />
           </Link>

        </motion.div>

        {/* VISUAL SIDE */}
        <div className="flex-1 w-full h-[500px] lg:h-[600px]">
           <div className={`w-full h-full rounded-[2.5rem] border border-white/10 bg-[#080808] relative overflow-hidden group shadow-2xl hover:border-white/20 transition-all`}>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${gradient} opacity-20 blur-[100px] group-hover:opacity-30 transition-opacity duration-700`} />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                 {children}
              </div>
           </div>
        </div>

      </div>
    </section>
  )
}

// --- ANIMATED DECORATIONS ---

function RingPortalDecoration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[2px] bg-gradient-to-r from-orange-500/50 to-neon/50 blur-[1px]" />
            <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
                className="absolute left-[10%] w-32 h-32 rounded-full border border-dashed border-orange-500/30 flex items-center justify-center"
            >
                <div className="w-24 h-24 rounded-full bg-orange-900/20 border border-orange-500/50 flex items-center justify-center backdrop-blur-md">
                    <Database className="text-orange-500 w-8 h-8" />
                </div>
            </motion.div>
            <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
                className="absolute right-[10%] w-32 h-32 rounded-full border border-dashed border-neon/30 flex items-center justify-center"
            >
                <div className="w-24 h-24 rounded-full bg-cyan-900/20 border border-neon/50 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                    <Server className="text-neon w-8 h-8" />
                </div>
            </motion.div>
            {/* Animated Particles */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ x: [-50, 50], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                    className="absolute w-2 h-2 bg-white rounded-full blur-[1px] shadow-[0_0_10px_white]"
                />
            ))}
        </div>
    )
}

function DashboardDecoration() {
    return (
        <div className="w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden shadow-2xl transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700">
            <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex h-64">
                <div className="w-16 border-r border-white/5 flex flex-col items-center py-4 gap-4">
                    <div className="w-8 h-8 rounded bg-blue-500/20" />
                    <div className="w-8 h-8 rounded bg-white/5" />
                </div>
                <div className="flex-1 p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-white/5 rounded border border-white/5 p-3 relative overflow-hidden">
                             <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ duration: 1 }} className="absolute bottom-0 left-0 w-full bg-blue-500/10" />
                             <div className="text-2xl font-bold text-white relative z-10">98%</div>
                        </div>
                        <div className="h-24 bg-white/5 rounded border border-white/5 p-3">
                             <div className="text-2xl font-bold text-blue-400">2.4s</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function EcommerceDecoration() {
    return (
        <div className="relative w-64 h-80 bg-[#111] border border-white/10 rounded-2xl p-4 flex flex-col gap-4 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
             <div className="flex-1 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:border-green-500/50 transition-colors">
                 <Layers className="w-20 h-20 text-green-500 opacity-50 group-hover:opacity-100 transition-opacity" />
             </div>
             <div className="flex justify-between items-center mt-2">
                 <div className="text-lg font-bold text-white">$240.00</div>
                 <button className="px-4 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-neon hover:text-black transition-colors">Buy</button>
             </div>
        </div>
    )
}
