"use client";

import { motion } from "framer-motion";
import { UserX, Code, LockOpen, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: UserX,
    title: "No Account Managers",
    body: "You speak directly to the lead engineer building your product. Zero communication lag. Zero 'let me get back to you on that.' Direct access, always.",
  },
  {
    icon: Code,
    title: "Zero Outsourcing",
    body: "We don't outsource to offshore teams. Every line of code is written by our core engineers, the same people you speak to on the discovery call.",
  },
  {
    icon: LockOpen,
    title: "You Own The IP",
    body: "We hand over the full source code on day one. We deploy to your hosting account, not ours. No monthly maintenance retainer required. You are in full control.",
  },
];

export default function AntiAgency() {
  return (
    <section className="py-12 md:py-24 bg-[#0C0A09] text-white relative overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cognac/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-stone-400 text-xs font-bold uppercase tracking-widest mb-6">
            The Engineering Standard
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We are not a &ldquo;Digital Agency.&rdquo;
          </h2>
          <p className="text-xl text-stone-400 leading-relaxed">
            Agencies sell hours. We sell engineered outcomes. We removed every layer of bloat that makes B2B projects fail on time and over budget.
          </p>
        </motion.div>

        {/* White Cards on Midnight */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 md:mb-16">
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-linear-to-b from-white to-stone-50 border border-white shadow-xl shadow-stone-900/10 ring-1 ring-stone-900/5 rounded-2xl hover:border-cognac/30 hover:shadow-2xl hover:shadow-cognac/10 hover:-translate-y-1 transition-all duration-500 group text-center"
            >
              <div className="w-14 h-14 mx-auto bg-stone-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-stone-200 transition-colors">
                <item.icon className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed text-base">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-white/5 border border-white/10"
        >
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg">Ready to work with engineers, not account managers?</p>
            <p className="text-stone-400 text-sm mt-1">Book a 30-minute technical discovery call. No sales pitch.</p>
          </div>
          <button
            data-cal-namespace="discovery"
            data-cal-link="pandagen/discovery"
            data-cal-config='{"layout":"month_view"}'
            className="shrink-0 flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-full hover:bg-stone-100 transition-all hover:scale-105"
          >
            Book Technical Call <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
