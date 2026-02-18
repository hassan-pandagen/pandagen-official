"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Gauge, Lock, Palette, Users, BarChart3, HelpCircle, FileSearch, Wrench, Rocket, Cable } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

const comparisonData = [
  { feature: "Page Load Speed", ghl: "3.4-5.2 seconds (funnel pages)", custom: "Under 1 second", icon: Gauge },
  { feature: "Code Ownership", ghl: "You own nothing (SaaS lock-in)", custom: "100% yours forever", icon: Lock },
  { feature: "Google PageSpeed Score", ghl: "30-55 average (mobile)", custom: "90-95/100 guaranteed", icon: TrendingUp },
  { feature: "Monthly Cost", ghl: "$97-497/mo subscription", custom: "$0 to start. Pay only when you scale massively", icon: DollarSign },
  { feature: "Design Freedom", ghl: "Template-based funnel builder", custom: "Unlimited, pixel-perfect designs", icon: Palette },
  { feature: "SEO Capability", ghl: "Minimal, funnels don't rank", custom: "Full SEO that Google, ChatGPT and AI search love", icon: TrendingUp },
];

const faqs = [
  {
    q: "Will my GHL automations break during migration?",
    a: "No. We build the new site in parallel while your GHL funnels stay live. When we launch, all forms and triggers connect to your existing GHL pipelines through the API. Everything keeps working."
  },
  {
    q: "Do I need to cancel GHL?",
    a: "Not if you don't want to. Option B keeps GHL for CRM while upgrading your website. Option C replaces GHL entirely with a custom CRM. Most clients choose Option B because GHL's automation engine is solid."
  },
  {
    q: "How much does a custom site with GHL integration cost?",
    a: "A custom website with GHL API integration typically ranges from $5,000-$15,000. If you want a fully custom CRM to replace GHL, that's $15,000-$35,000. Both options eliminate your slow funnel pages and give you real SEO."
  },
  {
    q: "Can you build custom landing pages that work with GHL?",
    a: "Yes. We build custom landing pages that load in under 1 second and push leads directly into your GHL CRM via API. Higher Quality Scores on Google Ads = lower cost per lead."
  },
  {
    q: "What if I want to leave GHL later?",
    a: "If you chose Option B, your custom website already works independently. We can replace the GHL API connections with a custom backend whenever you're ready. No vendor lock-in, no rebuilding from scratch."
  },
];

export default function PageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-transparent min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay" />
      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-8">
            <Zap className="w-4 h-4" /> GHL Experts
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-tight"
          >
            Keep GHL. Upgrade <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(to right, #60a5fa, #818cf8, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Your Website.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Keep GHL for what it&apos;s best at — CRM, automations, and pipelines. But don&apos;t let its funnel builder be your website. We build custom-coded sites that <span className="text-white font-medium">integrate seamlessly with GHL&apos;s API</span>, so you get real SEO, instant load times, and full code ownership.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-neon text-black font-bold rounded-full hover:bg-neon/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#how-it-works" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-blue-400/50 hover:bg-blue-500/5 transition-all flex items-center justify-center gap-2">
              See How It Works <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. GHL IS GREAT FOR CRM */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">GHL Is Great for CRM. Not for Websites.</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">GoHighLevel excels at automations, pipelines, and client management. But when it comes to your actual website and landing pages, here&apos;s the reality:</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What GHL does well */}
            <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
              <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Where GHL Shines</h3>
              <ul className="space-y-3">
                {["CRM & pipeline management", "Email & SMS automations", "Appointment booking", "Reputation management", "Client communication"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Where GHL falls short */}
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2"><XCircle className="w-5 h-5" /> Where GHL Falls Short</h3>
              <ul className="space-y-3">
                {["Funnel pages load in 3-5 seconds", "Templates look generic and cheap", "Zero organic SEO capability", "No custom design flexibility", "Mobile experience is poor"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Hidden Cost of GHL Funnels</h2>
          </div>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            You&apos;re paying for ads to drive traffic to your GHL funnel pages. But those pages are killing your conversions:
          </p>

          <div className="space-y-4">
            {[
              { pain: "Slow funnel pages = higher Cost Per Lead", detail: "Google Ads penalizes slow landing pages with lower Quality Scores. You're literally paying more per click because GHL pages load slowly." },
              { pain: "Your funnels don't rank on Google", detail: "GHL funnel pages have zero SEO capability. You'll never get organic traffic. Every lead costs ad spend. Forever." },
              { pain: "You're paying $97-497/month for a website builder", detail: "GHL's pricing is for CRM and automations, not for hosting a proper website. You're overpaying for what the funnel builder delivers." },
              { pain: "Generic templates destroy trust", detail: "Prospects can spot a template funnel. It screams 'small operation.' A custom site builds authority and converts cold traffic better." },
              { pain: "You're dependent on one platform", detail: "If GHL goes down, raises prices, or changes features, your entire online presence is at risk. No code ownership means no control." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">{item.pain}</p>
                    <p className="text-gray-400 text-base mt-1">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS - Process Timeline */}
      <section id="how-it-works" className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">How the Integration Works</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">A proven 4-step process. Your GHL stays running the entire time.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "GHL Audit", desc: "We map your current funnels, automations, pipelines, and workflows. We identify which GHL features to keep and which to replace with custom code for better performance.", icon: FileSearch, duration: "Week 1" },
              { step: "02", title: "API Architecture", desc: "We design the integration between your custom website and GHL's API. Forms, lead capture, booking widgets, and pipeline triggers — everything connects seamlessly.", icon: Cable, duration: "Week 2" },
              { step: "03", title: "Custom Site Build", desc: "Your new website gets built in Next.js with GHL API integration baked in. Landing pages load instantly. Forms push directly into your GHL CRM. All automations keep firing.", icon: Wrench, duration: "Weeks 3-5" },
              { step: "04", title: "Testing & Launch", desc: "We test every automation, every form submission, every pipeline trigger. You verify everything works. Then we launch with zero disruption to your existing GHL workflows.", icon: Rocket, duration: "Week 6" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-neon" />
                  </div>
                  {i < 3 && <div className="w-px h-8 bg-white/10 mt-2" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-gray-600">{item.step}</span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">{item.duration}</span>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section id="comparison" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">GHL Funnels vs Custom-Coded (Next.js)</h2>
          <p className="text-gray-400 text-center mb-12">Keep GHL for CRM. Upgrade your website and funnels.</p>

          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 p-4 border-b border-white/10">
              <div className="text-gray-400 font-medium text-sm">Feature</div>
              <div className="text-blue-400 font-bold text-sm text-center">GHL Funnels</div>
              <div className="text-neon font-bold text-sm text-center">Custom-Coded (Next.js)</div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5 last:border-b-0`}>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <row.icon className="w-4 h-4 text-gray-500" />
                  {row.feature}
                </div>
                <div className="text-red-400/80 text-sm text-center">{row.ghl}</div>
                <div className="text-green-400 text-sm text-center font-medium">{row.custom}</div>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="mt-8 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
            <p className="text-sm text-blue-300 text-center">
              <strong>Note:</strong> We&apos;re not saying drop GHL. Keep it for CRM, automations, and pipelines — just don&apos;t use it as your website builder. Your website is your business&apos;s front door, and it deserves custom code. We integrate seamlessly with GHL&apos;s API. And if you ever want to replace GHL entirely? We custom-code your CRM and automations too — build once, own forever, no monthly fees.
            </p>
          </div>
        </div>
      </section>

      {/* 6. SOLUTION CARDS */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon/10 border border-neon/20 text-sm text-neon mb-6">
            <Code2 className="w-4 h-4" /> Best of Both Worlds
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Two Ways to Win with GHL + Custom Code
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Keep your GHL automations and pipelines running. We either build a custom website that plugs into your existing GHL setup via API — or we build you an entirely custom CRM + website that connects to your automations. Either way, <span className="text-white font-medium">you own the code</span>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Gauge, title: "Instant Landing Pages", desc: "Your ad traffic lands on pages that load in under 1 second. Higher Quality Score = lower CPC = more leads for the same budget." },
              { icon: Users, title: "Seamless GHL API Integration", desc: "Forms, bookings, and lead capture flow directly into your GHL CRM. All your existing automations and pipelines keep working. Zero disruption." },
              { icon: BarChart3, title: "Organic Traffic (Free Leads)", desc: "Custom sites rank on Google. For the first time, you'll get leads WITHOUT paying for ads. GHL funnels can't do this." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.08] border border-white/10 hover:border-neon/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon/20 transition-colors">
                  <item.icon className="w-6 h-6 text-neon" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRIPLE CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Path</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* GHL Optimization */}
            <div className="p-8 rounded-3xl bg-white/[0.08] border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-xl font-bold text-white mb-4">GHL Funnel Optimization</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Want to stick with GHL funnels? We&apos;ll optimize your existing pages for better speed and conversions within the platform.
              </p>
              <ul className="space-y-3 mb-8">
                {["Funnel page speed optimization", "Design & copy improvements", "A/B testing setup", "Conversion rate analysis"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 border border-blue-500/30 text-blue-400 font-bold rounded-full hover:bg-blue-500/10 transition-all"
              >
                Optimize My Funnels
              </button>
            </div>

            {/* Custom Site + GHL API */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-neon/5 to-transparent border border-neon/30 hover:border-neon/50 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-neon/20 text-neon text-xs font-bold rounded-full">Popular</div>
              <div className="text-neon text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Site + GHL CRM</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Keep your GHL CRM and automations. We build a custom-coded website that integrates with GHL&apos;s API. You own the code.
              </p>
              <ul className="space-y-3 mb-8">
                {["Sub-second landing pages", "Full GHL API integration", "All automations keep working", "Organic SEO (free leads)", "100% code ownership", "30-day money-back guarantee"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-neon flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 bg-neon text-black font-bold rounded-full hover:bg-neon/90 transition-all"
              >
                Get Custom + GHL Quote
              </button>
            </div>

            {/* Full Custom CRM + Website */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-purple-500/5 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full">Full Freedom</div>
              <div className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4">Option C</div>
              <h3 className="text-xl font-bold text-white mb-4">Custom CRM + Website</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Want to own everything? We build a custom CRM and website connected to your automations. No monthly platform fees. You own the code.
              </p>
              <ul className="space-y-3 mb-8">
                {["Custom CRM dashboard", "Website + CRM in one codebase", "Connect existing automations", "No SaaS subscription fees", "100% code ownership", "Scale without limits"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 border border-purple-500/30 text-purple-300 font-bold rounded-full hover:bg-purple-500/10 transition-all"
              >
                Build My Custom CRM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-neon" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Common Questions</h2>
          </div>
          <p className="text-gray-400 text-center mb-12">Everything you need to know about GHL integration.</p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-white font-medium text-base">{faq.q}</h3>
                    <div className={`w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                      <span className="text-white text-sm font-bold">+</span>
                    </div>
                  </div>
                  {openFaq === i && (
                    <p className="text-gray-400 text-sm leading-relaxed mt-4 border-t border-white/5 pt-4">{faq.a}</p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GUARANTEE */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> 30-Day Money Back Guarantee
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your GHL Automations Keep Working. We Guarantee It.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We seamlessly integrate with your existing GHL workflows. If anything breaks or the site doesn&apos;t outperform your current funnels, full refund. No questions.
            </p>
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
            >
              Book Free Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Related Services - Internal Linking */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white text-center mb-3">Explore More Services</h2>
          <p className="text-gray-500 text-center mb-10 text-sm">Every migration is different. Find the right path for your platform.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/custom-engineering" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">Custom Engineering</h3>
              <p className="text-gray-500 text-sm">SaaS platforms, dashboards, and APIs built from scratch.</p>
            </Link>
            <Link href="/services/wordpress-migration" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">WordPress Migration</h3>
              <p className="text-gray-500 text-sm">Escape plugin bloat. Get sub-second load times with custom code.</p>
            </Link>
            <Link href="/services/wix" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">Wix Migration</h3>
              <p className="text-gray-500 text-sm">Break free from Wix limitations. Own your code.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
