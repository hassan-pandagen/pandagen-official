"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap, Gauge } from "lucide-react";

const comparisons = [
  {
    label: "Our Site (pandacodegen.com)",
    score: 98,
    color: "text-green-600",
    bgColor: "bg-green-500",
    barColor: "from-green-500 to-green-400",
  },
  {
    label: "Average WordPress Site",
    score: 42,
    color: "text-red-500",
    bgColor: "bg-red-500",
    barColor: "from-red-500 to-orange-500",
  },
];

export default function LiveProof() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-white to-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-600 mb-6">
            <Gauge className="w-4 h-4 text-cognac" />
            Live Speed Test
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Don&apos;t Take Our Word For It.{" "}
            <span className="text-cognac">Test It Yourself.</span>
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Run a Google PageSpeed test on our site vs. any WordPress site. The difference speaks for itself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-gray-200 rounded-3xl p-4 md:p-8 lg:p-10 shadow-premium"
        >
          <div className="space-y-8">
            {comparisons.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-charcoal">{item.label}</span>
                  <span className={`text-2xl font-bold ${item.color}`}>{item.score}/100</span>
                </div>
                <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.3, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${item.barColor}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-stone-500 text-sm">
              Scores from Google PageSpeed Insights, verified in real-time.
            </p>
            <a
              href="https://pagespeed.web.dev/analysis/https-www-pandacodegen-com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-50 border border-gray-200 text-charcoal text-sm font-bold rounded-full hover:bg-stone-100 hover:border-gray-300 transition-all"
            >
              <Zap className="w-4 h-4 text-cognac" />
              Test Our Site Yourself
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
