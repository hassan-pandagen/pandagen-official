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
    <section className="py-8 md:py-16 relative overflow-hidden">
      {/* Premium Backlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-stone-200/50 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-100/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-mono mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            SYSTEM STATUS: OPTIMIZED
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-6 tracking-tight">
            We don&apos;t guess. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cognac to-indigo-500">
              We benchmark.
            </span>
          </h2>
        </div>

        {/* THE LIVE TERMINAL BOARD */}
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-3xl overflow-hidden relative shadow-premium hover:shadow-elevated transition-shadow duration-500">
            {/* Top Bar */}
            <div className="h-10 bg-stone-50 border-b border-gray-200 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 text-xs font-mono text-stone-500">pandagen_audit_log.json</div>
            </div>

            {/* Grid Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">

                {/* 1. PERFORMANCE */}
                <StatBox
                    label="Performance"
                    value="98"
                    sub="Desktop Score"
                    icon={Zap}
                    color="text-green-600"
                    chart={[20, 40, 60, 80, 98]}
                />

                {/* 2. SEO */}
                <StatBox
                    label="SEO"
                    value="100"
                    sub="Google Indexing"
                    icon={TrendingUp}
                    color="text-cognac"
                    chart={[50, 80, 90, 95, 100]}
                />

                {/* 3. SECURITY */}
                <StatBox
                    label="Security"
                    value="A+"
                    sub="OWASP Standard"
                    icon={ShieldCheck}
                    color="text-purple-600"
                    textResult="SECURE"
                />

                {/* 4. SERVER */}
                <StatBox
                    label="Time to First Byte"
                    value="40ms"
                    sub="Edge Network"
                    icon={Server}
                    color="text-orange-500"
                    textResult="INSTANT"
                />
            </div>

            {/* Bottom CLI */}
            <div className="bg-stone-50 p-4 border-t border-gray-200 font-mono text-xs text-stone-500 flex justify-between items-center">
                <span>Last Scan: Just now</span>
                <a
                    href="https://pagespeed.web.dev/analysis/https-www.pandacodegen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cognac hover:underline cursor-pointer flex items-center gap-1"
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
        <div className="p-8 group hover:bg-stone-50/50 transition-colors relative">
            <div className="flex justify-between items-start mb-6">
                <div className={`p-2 rounded-lg bg-stone-50 border border-gray-200 ${color}`}>
                    <Icon size={20} />
                </div>
                {textResult && (
                    <span className={`text-[10px] font-bold px-2 py-1 rounded bg-stone-50 border border-gray-200 ${color}`}>
                        {textResult}
                    </span>
                )}
            </div>

            <div className="text-4xl font-bold text-charcoal mb-1">{value}</div>
            <div className="text-xs text-stone-500 uppercase tracking-wider mb-4">{label}</div>
            <div className="text-[10px] text-stone-500">{sub}</div>

            {/* Mini Chart Decoration */}
            {chart && (
                <div className="absolute bottom-0 left-0 w-full h-1 flex items-end gap-0.5 px-8 pb-8 opacity-50">
                    {chart.map((h: number, i: number) => (
                        <div key={i} style={{ height: `${h}%` }} className={`flex-1 ${color.replace('text-', 'bg-')}`} />
                    ))}
                </div>
            )}
        </div>
    )
}
