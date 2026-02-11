"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Database, ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Blazing Speed",
    stat: "<1s",
    statLabel: "Load Time",
    description: "Google ranks fast sites higher. We strip away the bloat and serve raw HTML at the edge. 90+ Lighthouse scores are our baseline, not a goal.",
    icon: Zap,
    colorClass: "text-cyan-400",
    gradient: "from-cyan-500/20 to-blue-600/5",
    borderColor: "group-hover:border-cyan-400/30"
  },
  {
    title: "Fort Knox Security",
    stat: "0",
    statLabel: "Vulnerabilities",
    description: "No plugins means no backdoors. We build bank-grade architecture compliant with OWASP standards. Your data stays yours, forever.",
    icon: ShieldCheck,
    colorClass: "text-emerald-400",
    gradient: "from-emerald-500/20 to-green-600/5",
    borderColor: "group-hover:border-emerald-400/30"
  },
  {
    title: "Total Ownership",
    stat: "100%",
    statLabel: "Code Access",
    description: "Stop renting your business from Shopify or Wix. We hand over the Git repository. You own the IP, the data, and the roadmap.",
    icon: Database,
    colorClass: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-600/5",
    borderColor: "group-hover:border-purple-400/30"
  }
];

export default function UnfairAdvantage() {
  return (
    <section className="py-12 md:py-20 bg-transparent relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
           <span className="text-neon tracking-widest text-sm font-bold uppercase">Why PandaGen</span>
           <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
             The Unfair <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Advantage.</span>
           </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-b ${pillar.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              <div className={`relative h-full bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.15] rounded-3xl p-8 flex flex-col justify-between overflow-hidden group-hover:border-white/20 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ${pillar.borderColor}`}>
                 
                 {/* Top: Icon & Stat */}
                 <div>
                   <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]`}>
                     <pillar.icon className={`w-7 h-7 ${pillar.colorClass} drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
                   </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom: The Big Stat */}
                <div className="pt-8 border-t border-white/5 flex items-end justify-between">
                  <div>
                    <div className={`text-5xl font-bold ${pillar.colorClass} mb-1`}>{pillar.stat}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">{pillar.statLabel}</div>
                  </div>
                  <div className={`opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 ${pillar.colorClass}`}>
                    <ArrowRight />
                  </div>
                </div>

                {/* Decorative Background Pattern */}
                <div className="absolute right-0 top-0 p-8 opacity-5 pointer-events-none">
                  <pillar.icon className="w-64 h-64 -translate-y-1/2 translate-x-1/2" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
