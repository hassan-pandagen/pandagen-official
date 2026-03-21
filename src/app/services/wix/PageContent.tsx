"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Gauge, Lock, Palette, HelpCircle, FileSearch, Wrench, Rocket, Search } from "lucide-react";
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
    a: "Yes. We set up a built-in content editor (like Sanity) with an easy visual editor. You can edit text, images, and blog posts just like you did on Wix \u2014 but without the speed and SEO limitations."
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
    a: "No. With a built-in content editor, content editing is just as easy. And because there are no plugins or themes to update, there\u2019s actually LESS maintenance. No monthly subscription fees, no broken updates."
  },
];

export default function PageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-paper min-h-screen selection:bg-charcoal selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-20 md:pt-40 pb-12 md:pb-20 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)", backgroundSize: "50px 50px", opacity: 0.03 }} />
        <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-8">
            <Zap className="w-4 h-4" /> Wix Experts
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-tight"
          >
            Outgrown Wix? <br />
            <span className="font-serif italic text-cognac">
              We&apos;ll Get You Unstuck.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Wix got your business online fast. But now it&apos;s holding you back with slow loading, limited SEO, and a monthly subscription that never ends. We help businesses <span className="text-charcoal font-medium">break free and own their platform</span>.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#cost-breakdown" className="px-8 py-4 bg-white border border-stone-200 text-charcoal font-medium rounded-full hover:border-cognac/30 transition-all flex items-center justify-center gap-2">
              See the Cost Breakdown <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. 3-YEAR COST BREAKDOWN */}
      <section id="cost-breakdown" className="py-10 md:py-20 px-6 border-y border-stone-200 bg-stone-50/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">The Real Cost of Wix Over 3 Years</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">The subscription model looks cheap at first. Here&apos;s what you actually pay over 3 years.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Wix Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20"
            >
              <div className="text-red-400 text-sm font-bold uppercase tracking-wider mb-2">Current Platform</div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">Wix Business Plan</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                  <span className="text-stone-600 text-sm">Monthly subscription</span>
                  <span className="text-red-400 font-medium text-sm">$39/mo &times; 36 = $1,404</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                  <span className="text-stone-600 text-sm">Domain</span>
                  <span className="text-red-400 font-medium text-sm">$15/yr &times; 3 = $45</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                  <span className="text-stone-600 text-sm">Premium apps</span>
                  <span className="text-red-400 font-medium text-sm">$20/mo &times; 36 = $720</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-charcoal font-bold">3-Year Total</span>
                  <span className="text-red-400 font-bold text-xl">$2,169+</span>
                </div>
              </div>
              <p className="text-red-400/60 text-xs mt-4 text-center">...and you still own nothing. Cancel and it all disappears.</p>
            </motion.div>

            {/* Custom Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 rounded-2xl bg-stone-50 border border-cognac/20"
            >
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-2">The Alternative</div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">Custom Coded</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                  <span className="text-stone-600 text-sm">One-time build</span>
                  <span className="text-cognac font-medium text-sm">$3,500-$8,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                  <span className="text-stone-600 text-sm">Hosting</span>
                  <span className="text-cognac font-medium text-sm">$0/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                  <span className="text-stone-600 text-sm">Domain</span>
                  <span className="text-cognac font-medium text-sm">$12/yr &times; 3 = $36</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-charcoal font-bold">3-Year Total</span>
                  <span className="text-cognac font-bold text-xl">$3,536-$8,036</span>
                </div>
              </div>
              <p className="text-cognac/60 text-xs mt-4 text-center">You own everything. Cancel nothing. It&apos;s yours forever.</p>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-xl bg-stone-50 border border-stone-200 text-center"
          >
            <p className="text-stone-600 text-sm leading-relaxed">
              Yes, custom code costs a little more upfront. But you <span className="text-charcoal font-bold">OWN</span> a fast, SEO-optimized site that saves <span className="text-cognac font-medium">$720/year</span> in subscriptions, ranks higher on Google, and never has a monthly bill again. With Wix, you&apos;re renting forever and own nothing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. PAIN POINTS */}
      <section className="py-12 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" /> The Hard Truth
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Wix Is Holding You Back</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These are the exact problems growing businesses hit when they try to scale on Wix:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Gauge, pain: "Every Slow Second Costs You Leads and Ad Spend", detail: "Wix injects its own JavaScript framework that can't be removed. Google penalizes slow pages with lower Quality Scores. You pay more per click AND convert fewer visitors. Every slow load is money leaving your business." },
              { icon: DollarSign, pain: "You're Renting a Business Asset You'll Never Own", detail: "Cancel your Wix subscription and your site disappears overnight. Five years of content, design, and SEO work, gone. You're not building an asset. You're paying rent on someone else's platform, indefinitely." },
              { icon: Code2, pain: "Any Feature Beyond the Editor Is Off the Table", detail: "Custom checkout flows, client portals, API integrations, advanced animations. Wix's drag-and-drop editor hits a hard ceiling. Real business logic requires real code, and Wix doesn't do real code." },
              { icon: Search, pain: "Wix Blocks the SEO Tactics That Actually Move Rankings", detail: "No custom schema markup. No server-side rendering. No full URL control. Wix sites consistently score lower in technical SEO audits. You're fighting for rankings with tools your competitors already have." },
              { icon: Palette, pain: "Wix's Branding Shows on Your Professional Website", detail: "Lower Wix plans show 'Made with Wix' on your business site. Enterprise clients notice. Upgrade to remove it and you're paying even more for a site you still don't own." },
              { icon: TrendingUp, pain: "AI Search Can't Index Your Wix Site Properly", detail: "ChatGPT, Perplexity, and AI Overviews now cite specific brands when answering buying questions. They prioritize fast, structured code. Wix's JavaScript-heavy pages make you invisible to the AI search layer your competitors are already winning." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/40 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-500/15 text-red-400 shrink-0 group-hover:bg-red-500/25 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.pain}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section id="comparison" className="py-10 md:py-20 px-6 border-y border-stone-200 bg-stone-50/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">Wix vs Custom Coded</h2>
          <p className="text-stone-600 text-center mb-12">See exactly what you&apos;re missing and what you could have.</p>

          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <div className="min-w-[500px]">
            <div className="grid grid-cols-3 bg-stone-50 p-4 border-b border-stone-200">
              <div className="text-stone-600 font-medium text-sm">Feature</div>
              <div className="text-stone-600 font-bold text-sm text-center">Wix</div>
              <div className="text-cognac font-bold text-sm text-center">Custom Coded</div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? 'bg-white border border-stone-100' : ''} border-b border-stone-200 last:border-b-0`}>
                <div className="flex items-center gap-2 text-charcoal text-sm font-medium">
                  <row.icon className="w-4 h-4 text-stone-400 shrink-0" />
                  {row.feature}
                </div>
                <div className="text-red-400/80 text-sm text-center">{row.wix}</div>
                <div className="text-green-600 text-sm text-center font-medium">{row.custom}</div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE MIGRATE - Process Timeline */}
      <section id="how-it-works" className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How We Migrate Your Wix Site</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A proven 4-step process. Your current Wix site stays live the entire time.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Content Export", desc: "We extract every page, image, blog post, and form from your Wix site. Nothing gets left behind.", icon: FileSearch, duration: "Week 1" },
              { step: "02", title: "Custom Design & Build", desc: "Your new site gets designed and coded from scratch. No templates. Pixel-perfect, unique design that reflects your brand.", icon: Wrench, duration: "Weeks 2-4" },
              { step: "03", title: "SEO Migration", desc: "We map every old URL, set up 301 redirects, and transfer all your SEO metadata. Google sees a faster version of the same site.", icon: Search, duration: "Week 5" },
              { step: "04", title: "Launch & Handover", desc: "We deploy, set up analytics, and hand over the keys. You get a built-in content editor for easy content editing. No coding needed.", icon: Rocket, duration: "Week 6" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-stone-50 border border-cognac/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cognac" />
                  </div>
                  {i < 3 && <div className="w-px h-8 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-gray-600">{item.step}</span>
                    <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-stone-50 border border-stone-200 text-stone-600">{item.duration}</span>
                  </div>
                  <p className="text-stone-600 text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UPGRADE PATH */}
      <section className="py-12 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-stone-500 font-bold tracking-widest uppercase text-sm">The Smarter Path</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">Own Your Platform. Stop Renting.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A custom coded website gives you what Wix never will: full ownership, blazing speed, and zero monthly platform fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Gauge, title: "5x Faster Loading", desc: "Your Wix site loads in 3-5 seconds. A custom site loads in under 1 second. That\u2019s the difference between a bounce and a sale." },
              { icon: Lock, title: "You Own Everything", desc: "Cancel anytime and take your site with you. Your code. Your design. Your data. It\u2019s yours forever \u2014 no platform can take it away." },
              { icon: DollarSign, title: "No More Subscriptions", desc: "Stop paying Wix $17-159/month forever. Host your custom site for $0 to start. You only pay when you scale massively." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 text-stone-300 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DUAL CTA */}
      <section className="py-12 md:py-24 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-16 text-slate-900">Choose Your Future</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Option A: The "safe" choice (de-emphasized) */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white opacity-80 hover:opacity-100 transition-opacity">
              <h3 className="text-lg font-bold text-slate-500 uppercase tracking-widest mb-2">Option A</h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Optimization Only</h4>
              <p className="text-slate-500 mb-8 text-sm">We try to speed up your existing Wix site, but we&apos;re limited by the platform&apos;s heavy JavaScript and template constraints.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-600 text-sm"><CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> Slight speed improvement</li>
                <li className="flex items-center gap-2 text-slate-600 text-sm"><CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> Image compression</li>
                <li className="flex items-center gap-2 text-slate-400 text-sm"><XCircle className="w-4 h-4 text-red-300 shrink-0" /> Still paying monthly fees forever</li>
                <li className="flex items-center gap-2 text-slate-400 text-sm"><XCircle className="w-4 h-4 text-red-300 shrink-0" /> Still locked into Wix</li>
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors"
              >
                Optimize Existing Site
              </button>
            </div>

            {/* Option B: The winner (elevated) */}
            <div className="relative p-10 rounded-3xl border-2 border-charcoal bg-white shadow-2xl md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap">
                Recommended
              </div>
              <h3 className="text-lg font-bold text-cognac uppercase tracking-widest mb-2">Option B</h3>
              <h4 className="text-3xl font-bold text-slate-900 mb-4">Full Migration to Next.js</h4>
              <p className="text-slate-600 mb-8">We rebuild your site from scratch. Perfect scores. Zero monthly fees. Full ownership. Built to last.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> Under a second load times (&lt;0.8s)</li>
                <li className="flex items-center gap-3 text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> 100% SEO Preservation</li>
                <li className="flex items-center gap-3 text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> Zero Monthly Platform Fees</li>
                <li className="flex items-center gap-3 text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> You Own the Code</li>
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full py-4 rounded-xl bg-charcoal text-white font-bold hover:bg-cognac transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Get Migration Plan <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-20 px-6 border-y border-stone-200 bg-stone-50/50">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-cognac" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Common Questions</h2>
          </div>
          <p className="text-stone-600 text-center mb-12">Everything you need to know about migrating from Wix.</p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-200 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-charcoal font-medium text-base">{faq.q}</h3>
                    <div className={`w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                      <span className="text-charcoal text-sm font-bold">+</span>
                    </div>
                  </div>
                  {openFaq === i && (
                    <p className="text-stone-600 text-sm leading-relaxed mt-4 border-t border-stone-200 pt-4">{faq.a}</p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GUARANTEE */}
      <section className="py-10 md:py-20 px-6 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#F0FDF4] border border-green-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheck className="w-10 h-10" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-green-900 mb-3">2x Faster or Your Money Back.</h3>
              <p className="text-green-800 leading-relaxed mb-6">
                We are so confident in our migration process that if your new site isn&apos;t at least 2x faster than your Wix site, we will refund 100% of your payment. No questions asked.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-xs font-bold text-green-700 uppercase tracking-wider mb-6">
                <span>• Legal Contract</span>
                <span>• Escrow Payments</span>
                <span>• US LLC</span>
              </div>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all"
              >
                Book Free Discovery Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Internal Linking */}
      <section className="py-10 md:py-16 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-charcoal text-center mb-3">Explore More Services</h2>
          <p className="text-stone-400 text-center mb-10 text-sm">Every migration is different. Find the right path for your platform.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/wordpress-migration" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Wrench className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">WordPress Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Escape plugin bloat. Get load times under 1 second with custom code.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
            <Link href="/services/squarespace" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Gauge className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Squarespace Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Leave Squarespace behind. Get a site you actually own.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
            <Link href="/services/webflow" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Code2 className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Webflow Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Outgrow Webflow&apos;s constraints with custom architecture.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
