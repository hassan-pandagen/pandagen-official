"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Code2, Clock, CheckCircle2, Lock, Zap, TrendingUp, DollarSign } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/ui/QuoteModal";
import { useState } from "react";

const benefits = [
  {
    icon: Code2,
    title: "White-Label Builds",
    description: "We build under your brand. Your clients never know we exist. Full NDA by default.",
    color: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
  },
  {
    icon: DollarSign,
    title: "Agency Pricing",
    description: "Wholesale rates for partners. The more projects you send, the better the pricing.",
    color: "from-green-500 to-emerald-500",
    iconBg: "bg-green-50",
    iconText: "text-green-600",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "We hit deadlines. Your reputation stays intact. No scope creep, no surprises.",
    color: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-50",
    iconText: "text-purple-600",
  },
  {
    icon: Lock,
    title: "NDA by Default",
    description: "Every partnership starts with a mutual NDA. Your client relationships are protected.",
    color: "from-orange-500 to-red-500",
    iconBg: "bg-orange-50",
    iconText: "text-orange-600",
  },
];

const steps = [
  {
    number: "01",
    title: "Send Us the Brief",
    description: "Share your client's requirements, budget range, and timeline. We'll assess fit within 24 hours.",
    color: "text-blue-600",
  },
  {
    number: "02",
    title: "We Build It",
    description: "Our engineers build the project to your specifications. You get progress updates every week.",
    color: "text-purple-600",
  },
  {
    number: "03",
    title: "You Deliver It",
    description: "We hand off the finished product under your brand. You present it to your client as your own work.",
    color: "text-green-600",
  },
];

const stats = [
  { value: "98/100", label: "Avg PageSpeed Score", icon: Zap },
  { value: "<1s", label: "Avg Load Time", icon: TrendingUp },
  { value: "$0/mo", label: "Hosting Cost", icon: DollarSign },
  { value: "100%", label: "Code Ownership", icon: ShieldCheck },
];

export default function PartnersPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <main className="bg-paper min-h-screen overflow-x-hidden relative">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 text-center bg-paper overflow-hidden">
        {/* Warm stone glow */}
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-stone-200/40 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-sm text-stone-600 mb-8"
          >
            <Users className="w-4 h-4 text-stone-500" />
            Agency Partnerships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6"
          >
            You Handle Clients. <br />
            <span className="font-serif italic font-semibold text-stone-500">
              We Handle the Code.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-stone-600 max-w-2xl mx-auto mb-10"
          >
            White-label web development for agencies. Your brand, our engineering.
            Deliver custom-coded websites to your clients without hiring a dev team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
            >
              Apply for Partnership <ArrowRight className="w-5 h-5" />
            </button>
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-white border border-stone-200 text-charcoal font-bold rounded-full hover:border-stone-400 transition-all inline-flex items-center justify-center gap-2"
            >
              Book a Strategy Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-5 bg-white border border-stone-200 rounded-2xl"
            >
              <stat.icon className="w-5 h-5 text-stone-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-charcoal mb-1">{stat.value}</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Why Agencies Partner With Us</h2>
          <p className="text-stone-500 max-w-xl mx-auto">Everything you need to deliver world-class websites under your own brand.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white border border-stone-200 rounded-2xl p-6 hover:border-stone-400 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-4 group-hover:bg-charcoal group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-stone-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">{benefit.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 pb-20 relative">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              How the Partnership Works
            </h2>
            <p className="text-stone-500 max-w-lg mx-auto">Three simple steps. No complicated onboarding.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white border border-stone-200 rounded-2xl p-8 text-center"
              >
                <div className="text-6xl font-bold text-stone-500 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-stone-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-6 pb-20">
        <div className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">What&apos;s Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Custom-coded websites (no templates)",
                "Full white-label delivery",
                "Mutual NDA signed before every project",
                "Weekly progress updates",
                "Source code handoff",
                "30 days post-launch support",
                "Priority scheduling for partners",
                "Bulk project discounts",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 text-stone-500 p-3 rounded-xl hover:bg-stone-50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-charcoal flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
