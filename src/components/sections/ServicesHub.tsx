"use client";

import { motion } from "framer-motion";
import { Code, ShoppingCart, Cloud, ArrowUpRight, Database, Server } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ServicesHub() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <span className="text-neon tracking-widest text-sm font-bold uppercase">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
              We Don't Just Code. <br />
              <span className="text-gray-500">We Engineer Revenue.</span>
            </h2>
          </div>
          <Link href="/services" className="hidden md:flex items-center gap-2 text-white border-b border-neon pb-1 hover:text-neon transition-colors">
            View All Services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* BENTO GRID */}
         {/* Mobile: Stacked, Desktop: Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px] md:grid-rows-2">
           
           {/* 1. WORDPRESS MIGRATION (Data Transfer) */}
           <BentoCard 
             colSpan="md:col-span-1" 
             rowSpan="md:row-span-1"
             title="WordPress Migration"
             subtitle="Make Your Site Instant"
             icon={Database}
             gradient="from-orange-500/20 via-amber-500/5"
           >
              <MigrationDecoration />
           </BentoCard>

           {/* 2. WEB APPS & DASHBOARDS (Typing Code) */}
           <BentoCard 
             colSpan="md:col-span-2" 
             rowSpan="md:row-span-1"
             title="Web Apps & Dashboards"
             subtitle="Build Your Own Software (SaaS)"
             icon={Code}
             gradient="from-blue-500/20 via-purple-500/5"
           >
              <TypingCodeDecoration />
           </BentoCard>

           {/* 3. HIGH-PERFORMANCE STORES (Growing Graph) */}
           <BentoCard 
             colSpan="md:col-span-1" 
             rowSpan="md:row-span-2"
             title="High-Performance Stores"
             subtitle="Custom Shopify (No Templates)"
             icon={ShoppingCart}
             gradient="from-green-500/20 via-emerald-500/5"
           >
             <RevenueGraphDecoration />
           </BentoCard>

           {/* SPACER - Hidden on desktop, takes no space on mobile */}
           <div className="hidden md:block" />

         </div>
      </div>
    </section>
  );
}

// --- DECORATION COMPONENTS (The "Life" inside the boxes) ---

function TypingCodeDecoration() {
  const [text, setText] = useState("");
  const fullText = `const future = await build();\nreturn "Excellence";`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0; }, 2000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute right-4 bottom-4 md:right-6 md:bottom-6 w-full max-w-[250px] opacity-50 pointer-events-none">
      <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-3 md:p-4 rounded-lg font-mono text-[9px] md:text-xs text-blue-300 shadow-xl">
        <div className="flex gap-1.5 mb-3">
           <div className="w-2 h-2 rounded-full bg-red-500/50" />
           <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
           <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        <pre className="whitespace-pre-wrap break-all">{text}<span className="animate-pulse">|</span></pre>
      </div>
    </div>
  );
}

function RevenueGraphDecoration() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 flex items-end justify-around px-4 md:px-6 pb-0 pointer-events-none">
       {[30, 60, 45, 80, 55, 90].map((height, i) => (
          <motion.div 
            key={i}
            initial={{ height: "10%" }}
            whileInView={{ height: `${height}%` }}
            animate={{ height: [`${height}%`, `${height - 20}%`, `${height}%`] }}
            transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut"
            }}
            className="w-2 md:w-4 bg-gradient-to-t from-green-500/40 to-green-400/10 rounded-t-sm border-t border-green-500/30" 
          />
       ))}
    </div>
  );
}

function MigrationDecoration() {
    return (
        <div className="absolute bottom-6 right-6 left-6 pointer-events-none">
            <div className="flex justify-between text-[10px] text-orange-200 mb-2 font-mono uppercase tracking-wider">
                <span className="animate-pulse">Transferring Core...</span>
                <span>98 TB/s</span>
            </div>
            
            {/* The Track */}
            <div className="relative h-2 w-full bg-gray-800/50 rounded-full overflow-hidden border border-white/5">
                
                {/* The Fill */}
                <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-orange-600 to-amber-400"
                />

                {/* The Flashy Beam (Shoots across) */}
                <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                    className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-70 blur-sm"
                />
            </div>

            {/* Floating Data Particles */}
            <div className="absolute -top-8 right-0 flex gap-1">
                 {[1,2,3].map((i) => (
                    <motion.div 
                        key={i}
                        animate={{ y: [0, -20], opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="text-[8px] text-orange-400 font-mono"
                    >
                        01
                    </motion.div>
                 ))}
            </div>
        </div>
    )
}

function SaaSDecoration() {
    return (
        <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-20 h-20 md:w-24 md:h-24 pointer-events-none">
            {/* Central Server Icon */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <Server className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
            </div>
            
            {/* Ripples */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute inset-0 border border-cyan-500/30 rounded-full"
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.6,
                        ease: "easeOut"
                    }}
                />
            ))}
            
            {/* Connection Dot */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
        </div>
    )
}


// --- MAIN CARD COMPONENT ---

function BentoCard({ colSpan, rowSpan, title, subtitle, icon: Icon, gradient, children }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative group overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.15] bg-gradient-to-b from-white/[0.08] to-transparent p-6 md:p-8 flex flex-col justify-between h-64 md:h-auto ${colSpan} ${rowSpan} transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]`}
    >
      {/* Background Gradient on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
          <Icon 
            strokeWidth={1.5} 
            className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
          />
        </div>
        <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-xs md:text-sm font-medium">{subtitle}</p>
      </div>

      {children}

      {/* Hover Arrow */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
    </motion.div>
  );
}
