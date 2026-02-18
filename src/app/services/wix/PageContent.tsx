"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, Code2, Gauge, Lock, Palette, HelpCircle, FileSearch, Wrench, Rocket, Search } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

const comparisonData = [
  { feature: "Page Load Speed", wix: "3.4-5.2 seconds", custom: "Under 1 second", icon: Gauge },
  { feature: "Code Ownership", wix: "You own nothing (hosted on Wix)", custom: "100% yours, deploy anywhere", icon: Lock },
  { feature: "Google PageSpeed Score", wix: "30-55 average (mobile)", custom: "90-95/100 guaranteed", icon: TrendingUp },
  { feature: "Monthly Cost", wix: "$17-159/mo subscription forever", custom: "$0 to start. Pay only when you scale massively", icon: DollarSign },
  { feature: "Customization", wix: "Limited to drag-and-drop editor", custom: "Unlimited, any design possible", icon: Palette },
  { feature: "SEO Control", wix: "Basic, can't edit meta robots or schema", custom: "Full control over everything Google, ChatGPT and AI search love", icon: TrendingUp },
];

const faqs = [
  {
    q: "Will I lose my Google rankings if I leave Wix?",
    a: "No. We set up 301 redirects from every old URL to the new URL. Google treats it as the same content at a faster address. Rankings typically improve within 30-60 days because the new site is significantly faster."
  },
  {
    q: "Can I still edit my website without coding?",
    a: "Yes. We set up a headless CMS (like Sanity) with an easy visual editor. You can edit text, images, and blog posts just like you did on Wix \u2014 but without the speed and SEO limitations."
  },
  {
    q: "How long does it take to migrate from Wix?",
    a: "4-6 weeks for a standard business site. Week 1: content export. Weeks 2-4: design and build. Week 5: SEO migration. Week 6: launch."
  },
  {
    q: "What about my Wix forms and contact pages?",
    a: "All forms get rebuilt with better functionality. We can integrate with any email service (Mailchimp, ConvertKit) or CRM. Form submissions work exactly as before, but the page loads 5x faster."
  },
  {
    q: "Is custom code harder to maintain than Wix?",
    a: "No. With a headless CMS, content editing is just as easy. And because there are no plugins or themes to update, there\u2019s actually LESS maintenance. No monthly subscription fees, no broken updates."
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-8">
            <Zap className="w-4 h-4" /> Wix Experts
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-tight"
          >
            Outgrown Wix? <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(to right, #c084fc, #f472b6, #fb7185)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              We&apos;ll Get You Unstuck.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Wix got your business online fast. But now it&apos;s holding you back with slow loading, limited SEO, and a monthly subscription that never ends. We help businesses <span className="text-white font-medium">break free and own their platform</span>.
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
            <Link href="#cost-breakdown" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-purple-400/50 hover:bg-purple-500/5 transition-all flex items-center justify-center gap-2">
              See the Cost Breakdown <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. 3-YEAR COST BREAKDOWN */}
      <section id="cost-breakdown" className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">The Real Cost of Wix Over 3 Years</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">The subscription model looks cheap at first. Here&apos;s what you actually pay over 3 years.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Wix Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20"
            >
              <div className="text-red-400 text-sm font-bold uppercase tracking-wider mb-2">Current Platform</div>
              <h3 className="text-2xl font-bold text-white mb-6">Wix Business Plan</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-400 text-sm">Monthly subscription</span>
                  <span className="text-red-400 font-medium text-sm">$39/mo &times; 36 = $1,404</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-400 text-sm">Domain</span>
                  <span className="text-red-400 font-medium text-sm">$15/yr &times; 3 = $45</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-400 text-sm">Premium apps</span>
                  <span className="text-red-400 font-medium text-sm">$20/mo &times; 36 = $720</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-white font-bold">3-Year Total</span>
                  <span className="text-red-400 font-bold text-xl">$2,169+</span>
                </div>
              </div>
              <p className="text-red-400/60 text-xs mt-4 text-center">...and you still own nothing. Cancel and it all disappears.</p>
            </motion.div>

            {/* Custom Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-neon/5 border border-neon/20"
            >
              <div className="text-neon text-sm font-bold uppercase tracking-wider mb-2">The Alternative</div>
              <h3 className="text-2xl font-bold text-white mb-6">Custom-Coded (Next.js)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-400 text-sm">One-time build</span>
                  <span className="text-neon font-medium text-sm">$3,500-$8,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-400 text-sm">Hosting (Vercel)</span>
                  <span className="text-neon font-medium text-sm">$0/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-400 text-sm">Domain</span>
                  <span className="text-neon font-medium text-sm">$12/yr &times; 3 = $36</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-white font-bold">3-Year Total</span>
                  <span className="text-neon font-bold text-xl">$3,536-$8,036</span>
                </div>
              </div>
              <p className="text-neon/60 text-xs mt-4 text-center">You own everything. Cancel nothing. It&apos;s yours forever.</p>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 rounded-xl bg-white/[0.04] border border-white/10 text-center"
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              Yes, custom code costs a little more upfront. But you <span className="text-white font-bold">OWN</span> a fast, SEO-optimized site that saves <span className="text-neon font-medium">$720/year</span> in subscriptions, ranks higher on Google, and never has a monthly bill again. With Wix, you&apos;re renting forever and own nothing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. PAIN POINTS */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Wix Was Great to Start. But...</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">These are the exact problems businesses tell us about before they switch:</p>

          <div className="space-y-4">
            {[
              { pain: "Your site loads in 3-5 seconds on mobile", detail: "Wix injects heavy JavaScript frameworks that can't be removed. Google penalizes slow sites with lower rankings and higher ad costs." },
              { pain: "You're paying $17-159/month forever and own nothing", detail: "Cancel Wix and your site disappears. Your content, your design, your domain setup, all gone. You're renting, not building." },
              { pain: "You can't customize beyond the template editor", detail: "Need a custom checkout? A unique animation? API integration? Wix's drag-and-drop editor has a hard ceiling that blocks real business growth." },
              { pain: "Your SEO is capped because you can't control the code", detail: "No custom schema markup. No server-side rendering. Limited URL structures. Wix sites consistently score lower in technical SEO audits." },
              { pain: "Wix Ads show on lower plans, on YOUR business site", detail: "You're paying Wix to advertise on your own website. Your customers see 'Made with Wix' while you're trying to look professional." },
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

      {/* 4. COMPARISON TABLE */}
      <section id="comparison" className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Wix vs Custom-Coded (Next.js)</h2>
          <p className="text-gray-400 text-center mb-12">See exactly what you&apos;re missing and what you could have.</p>

          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 p-4 border-b border-white/10">
              <div className="text-gray-400 font-medium text-sm">Feature</div>
              <div className="text-purple-400 font-bold text-sm text-center">Wix</div>
              <div className="text-neon font-bold text-sm text-center">Custom-Coded (Next.js)</div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5 last:border-b-0`}>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <row.icon className="w-4 h-4 text-gray-500" />
                  {row.feature}
                </div>
                <div className="text-red-400/80 text-sm text-center">{row.wix}</div>
                <div className="text-green-400 text-sm text-center font-medium">{row.custom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE MIGRATE - Process Timeline */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">How We Migrate Your Wix Site</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">A proven 4-step process. Your current Wix site stays live the entire time.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Content Export", desc: "We extract every page, image, blog post, and form from your Wix site. Nothing gets left behind.", icon: FileSearch, duration: "Week 1" },
              { step: "02", title: "Custom Design & Build", desc: "Your new site gets designed and coded from scratch. No templates. Pixel-perfect, unique design that reflects your brand.", icon: Wrench, duration: "Weeks 2-4" },
              { step: "03", title: "SEO Migration", desc: "We map every old URL, set up 301 redirects, and transfer all your SEO metadata. Google sees a faster version of the same site.", icon: Search, duration: "Week 5" },
              { step: "04", title: "Launch & Handover", desc: "We deploy, set up analytics, and hand over the keys. You get a headless CMS for easy content editing. No coding needed.", icon: Rocket, duration: "Week 6" },
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

      {/* 6. UPGRADE PATH */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon/10 border border-neon/20 text-sm text-neon mb-6">
            <Code2 className="w-4 h-4" /> The Smarter Path
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Own Your Platform. Stop Renting.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            A custom-coded website gives you what Wix never will: full ownership, blazing speed, unlimited customization, and zero monthly platform fees.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Gauge, title: "5x Faster Loading", desc: "Your Wix site loads in 3-5 seconds. A custom site loads in under 1. That's the difference between a bounce and a sale." },
              { icon: Lock, title: "You Own Everything", desc: "Cancel anytime and take your site with you. Your code. Your design. Your data. Forever." },
              { icon: DollarSign, title: "No More Subscriptions", desc: "Stop paying Wix $17-159/month. Host your custom site for $0 to start. You only pay when you scale massively. The kind of problem every business dreams of." },
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

      {/* 7. DUAL CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Ready to Level Up?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Wix Optimization */}
            <div className="p-8 rounded-3xl bg-white/[0.08] border border-white/10 hover:border-purple-500/30 transition-colors">
              <div className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-2xl font-bold text-white mb-4">Wix Optimization</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Not ready to leave Wix? We&apos;ll optimize what you have with better SEO setup, faster images, and cleaner design to get the most out of your current platform.
              </p>
              <ul className="space-y-3 mb-8">
                {["SEO audit & optimization", "Speed improvements (where possible)", "Design cleanup", "Analytics setup", "Content strategy"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 border border-purple-500/30 text-purple-400 font-bold rounded-full hover:bg-purple-500/10 transition-all"
              >
                Optimize My Wix Site
              </button>
            </div>

            {/* Custom Coded */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-neon/5 to-transparent border border-neon/30 hover:border-neon/50 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-neon/20 text-neon text-xs font-bold rounded-full">Recommended</div>
              <div className="text-neon text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom-Coded (Next.js)</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Migrate from Wix to a custom-coded platform you own forever. Faster, better SEO, zero monthly fees, unlimited customization.
              </p>
              <ul className="space-y-3 mb-8">
                {["Sub-second load times", "100/100 PageSpeed score", "Zero monthly platform fees", "Full code ownership", "Unlimited customization", "30-day money-back guarantee"].map((item, i) => (
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
                Migrate to Custom
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
          <p className="text-gray-400 text-center mb-12">Everything you need to know about migrating from Wix.</p>

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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">No Risk. We Guarantee Results.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              If your new custom-coded site isn&apos;t faster, doesn&apos;t rank better, and doesn&apos;t look better than your Wix site, we&apos;ll refund you. Simple as that.
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
            <Link href="/services/wordpress-migration" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">WordPress Migration</h3>
              <p className="text-gray-500 text-sm">Escape plugin bloat. Get sub-second load times with custom code.</p>
            </Link>
            <Link href="/services/squarespace" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">Squarespace Migration</h3>
              <p className="text-gray-500 text-sm">Leave Squarespace behind. Get a site you actually own.</p>
            </Link>
            <Link href="/services/webflow" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">Webflow Migration</h3>
              <p className="text-gray-500 text-sm">Outgrow Webflow&apos;s constraints with custom architecture.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
