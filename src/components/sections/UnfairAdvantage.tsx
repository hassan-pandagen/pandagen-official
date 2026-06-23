"use client";

import { motion } from "@/components/ui/motion";
import { TrendingDown, Target, Receipt, ArrowUpRight } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    number: "40-70%",
    title: "Lower Subscription Tax",
    body: "We replace the paid apps, plugins, and platform fees bleeding you every month with custom code you own. Clients cut their software bills 40 to 70 percent.",
    borderRight: true,
  },
  {
    icon: Target,
    number: "20-40%",
    title: "Conversions Recovered",
    body: "iOS, ad blockers, and cookie limits hide 20 to 40 percent of your sales from Meta and Google. Our server-side tracking sends every purchase straight to them, so your ad budget optimizes on real buyers, not guesses.",
    borderRight: true,
  },
  {
    icon: Receipt,
    number: "$1,500",
    title: "Fixed Price, No Surprises",
    body: "Published pricing from $1,500. No hourly billing, no change-order traps, no $15,000 enterprise minimum. You know the number before you ever talk to us.",
    borderRight: false,
  },
];

export default function UnfairAdvantage() {
  return (
    <section className="py-12 md:py-20 bg-white text-charcoal">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              The Unfair{" "}
              <span className="font-serif italic text-cognac">Advantage.</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Most agencies sell you a pretty site and walk away. The unfair part is everything underneath:
              lower monthly bills, ad tracking that actually sees your sales, and a fixed price you know
              before you ever call.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <ArrowUpRight className="w-12 h-12 text-stone-200" />
          </div>
        </motion.div>

        {/* Financial Grid Layout */}
        <div className="grid md:grid-cols-3 border-t border-stone-200">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group border-b ${stat.borderRight ? "border-r-0 md:border-r" : ""} border-stone-200 p-6 md:p-10 hover:bg-stone-50 transition-colors duration-500`}
            >
              <div className="mb-8">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-cognac transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-stone-500 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div className="text-7xl font-sans font-bold text-charcoal tracking-tighter mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">{stat.title}</h3>
              <p className="text-stone-500 leading-relaxed text-sm">{stat.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
