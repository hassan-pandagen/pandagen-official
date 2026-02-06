"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingUp, Activity, Server, Database, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function PerformanceStats() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section className="py-24 bg-transparent" />;

  return (
    <section className="py-12 md:py-24 bg-transparent relative overflow-hidden">
      {/* Backlight Glow - Stronger on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/20 md:bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            SYSTEM STATUS: OPTIMIZED
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-xl">
            We don't guess. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
              We benchmark.
            </span>
          </h2>
        </div>

        {/* THE LIVE TERMINAL BOARD */}
        <div className="max-w-5xl mx-auto bg-[#0F0F0F] border border-white/30 md:border-white/20 rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Top Bar */}
            <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="ml-4 text-xs font-mono text-gray-400">pandagen_audit_log.json</div>
            </div>

            {/* Grid Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                {/* 1. PERFORMANCE */}
                <StatBox 
                    label="Performance" 
                    value="98" 
                    sub="Desktop Score" 
                    icon={Zap} 
                    color="text-green-400" 
                    chart={[20, 40, 60, 80, 98]} 
                />

                {/* 2. SEO */}
                <StatBox 
                    label="SEO" 
                    value="100" 
                    sub="Google Indexing" 
                    icon={TrendingUp} 
                    color="text-blue-400" 
                    chart={[50, 80, 90, 95, 100]} 
                />

                {/* 3. SECURITY */}
                <StatBox 
                    label="Security" 
                    value="A+" 
                    sub="OWASP Standard" 
                    icon={ShieldCheck} 
                    color="text-purple-400" 
                    textResult="SECURE"
                />

                {/* 4. SERVER */}
                <StatBox 
                    label="Time to First Byte" 
                    value="40ms" 
                    sub="Edge Network" 
                    icon={Server} 
                    color="text-orange-400" 
                    textResult="INSTANT"
                />
            </div>

            {/* Bottom CLI */}
            <div className="bg-black/50 p-4 border-t border-white/10 font-mono text-xs text-gray-400 flex justify-between items-center">
                <span>Last Scan: Just now</span>
                <a
                    href="https://pagespeed.web.dev/analysis/https-www.pandacodegen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon hover:underline cursor-pointer flex items-center gap-1"
                >
                    View Source Report <ArrowRight size={12} />
                </a>
            </div>
        </div>

      </div>
    </section>
  );
}

function StatBox({ label, value, sub, icon: Icon, color, chart, textResult }: any) {
    return (
        <div className="p-8 group hover:bg-white/[0.02] transition-colors relative">
            <div className="flex justify-between items-start mb-6">
                <div className={`p-2 rounded-lg bg-white/5 ${color}`}>
                    <Icon size={20} />
                </div>
                {textResult && (
                    <span className={`text-[10px] font-bold px-2 py-1 rounded bg-white/5 border border-white/10 ${color}`}>
                        {textResult}
                    </span>
                )}
            </div>
            
            <div className="text-4xl font-bold text-white mb-1">{value}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-4">{label}</div>
            <div className="text-[10px] text-gray-500">{sub}</div>

            {/* Mini Chart Decoration */}
            {chart && (
                <div className="absolute bottom-0 left-0 w-full h-1 flex items-end gap-0.5 px-8 pb-8 opacity-20">
                    {chart.map((h: number, i: number) => (
                        <div key={i} style={{ height: `${h}%` }} className={`flex-1 ${color.replace('text-', 'bg-')}`} />
                    ))}
                </div>
            )}
        </div>
    )
}
