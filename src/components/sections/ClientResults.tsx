"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, DollarSign, Shield } from "lucide-react";

const metrics = [
  {
    label: "Avg Load Time",
    before: "3.2s",
    after: "0.7s",
    improvement: "78% faster",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
  {
    label: "Lighthouse Score",
    before: "45/100",
    after: "98/100",
    improvement: "+118% increase",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
  },
  {
    label: "Monthly Hosting",
    before: "$150",
    after: "$0",
    improvement: "$1,800/yr saved",
    icon: DollarSign,
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "Plugin Dependencies",
    before: "25+",
    after: "0",
    improvement: "100% eliminated",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
  },
];

export default function ClientResults() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-neon mb-6 uppercase tracking-widest">
            Proven Results
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            The Numbers Don't Lie.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Average results across our migration projects. Real data from real builds.
          </p>
        </motion.div>

        {/* Metrics Grid - Mobile Swiper with Scroll Snap */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6">
          <div className="flex gap-6 min-w-max">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-[280px] snap-center flex-shrink-0"
              >
                {/* Hover glow */}
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                {/* Card */}
                <div className="relative bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Label */}
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3">
                    {metric.label}
                  </div>

                  {/* Before/After */}
                  <div className="flex items-center gap-3 mb-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Before</div>
                      <div className="text-lg font-bold text-red-400 line-through">{metric.before}</div>
                    </div>
                    <div className="text-neon text-2xl">→</div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">After</div>
                      <div className="text-lg font-bold text-neon">{metric.after}</div>
                    </div>
                  </div>

                  {/* Improvement Badge */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${metric.color} bg-opacity-10 text-xs font-bold text-white`}>
                      {metric.improvement}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>

                {/* Label */}
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3">
                  {metric.label}
                </div>

                {/* Before/After */}
                <div className="flex items-center gap-3 mb-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Before</div>
                    <div className="text-lg font-bold text-red-400 line-through">{metric.before}</div>
                  </div>
                  <div className="text-neon text-2xl">→</div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">After</div>
                    <div className="text-lg font-bold text-neon">{metric.after}</div>
                  </div>
                </div>

                {/* Improvement Badge */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${metric.color} bg-opacity-10 text-xs font-bold text-white`}>
                    {metric.improvement}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            These are <span className="text-white font-bold">average results</span>. Your project could perform even better.
          </p>
          <button
            data-cal-namespace="discovery"
            data-cal-link="pandagen/discovery"
            data-cal-config='{"layout":"month_view"}'
            className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/15 hover:border-neon transition-all"
          >
            Calculate Your ROI
          </button>
        </motion.div>
      </div>
    </section>
  );
}
