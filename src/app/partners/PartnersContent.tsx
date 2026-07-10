"use client";

import { motion } from "@/components/ui/motion";
import { ArrowRight, ShieldCheck, Users, Code2, CheckCircle2, Lock, Zap, FileSearch, Wrench, Rocket, HelpCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingTiers from "@/components/services/PricingTiers";
import { useState } from "react";
import dynamic from "next/dynamic";

// Lazy load: QuoteModal pulls in framer-motion (~37KB gzipped). Stays out of the
// Partners page static bundle until a partner clicks "Send brief" / opens the modal.
const QuoteModal = dynamic(() => import("@/components/ui/QuoteModal"), { ssr: false });

const processSteps = [
  {
    step: "01",
    title: "You Pitch. We Scope.",
    desc: "You win the client (that's your skill). Send us the brief + requirements. We return a fixed-scope quote within 24 business hours. NDA signed before you send anything.",
    duration: "Same day",
  },
  {
    step: "02",
    title: "We Build. Invisibly.",
    desc: "Custom Next.js build under your brand. Your GitHub, your Vercel, your domain, your deploys. We communicate only with you. Your client never knows we exist.",
    duration: "Days 4-14",
  },
  {
    step: "03",
    title: "You Review. Client Approves.",
    desc: "You get weekly check-ins and a staging URL. Your client reviews. Any changes route through you. Delivery under your agency brand.",
    duration: "Days 15-18",
  },
  {
    step: "04",
    title: "You Invoice. You Keep the Margin.",
    desc: "You invoice the client at your rate. You pay us our fixed scope. You keep the spread. No revenue share surprises. No hidden fees.",
    duration: "Day 21",
  },
];

const partnerFaqs = [
  {
    q: "Do you sign NDAs before we share client details?",
    a: "Yes. Mutual NDA signed before you send us a single client detail. We have a standard template ready (takes 5 minutes to sign). Your client relationship stays yours, end to end. We communicate only with you.",
  },
  {
    q: "Will our clients know PandaCodeGen is building the site?",
    a: "No. We stay completely invisible. Your GitHub, your Vercel deployment, your custom domain, your brand emails if you want them routed that way. Your client sees YOUR agency as the builder.",
  },
  {
    q: "What if the client wants to meet the developer?",
    a: "Your call. You can loop us in as a \"senior engineering partner\" on the call (no branding mentioned), or keep us fully invisible. Most partners keep us invisible. Some introduce us as their \"dev team lead.\" We follow your lead.",
  },
  {
    q: "How does the white-label handoff actually work?",
    a: "We push the code to YOUR GitHub repo, deploy to YOUR Vercel account, use YOUR brand colors in any internal docs, and hand over complete source code + documentation. You own everything from day one. If you ever stop working with us, the site keeps running untouched.",
  },
  {
    q: "What's the minimum commitment?",
    a: "Referral Partner: zero commitment. Send a lead, get commission, done. White-Label Partner: 1 pilot project to start, no minimums after that. Most white-label partners send 1-3 projects/month once they see how it works.",
  },
  {
    q: "How fast can you start on a project?",
    a: "Typically within 1 week of brief approval. Rush timelines available for partners with urgent client deadlines. Our 3-week average build time is exactly what helps agencies win clients who expect speed.",
  },
  {
    q: "What happens if my client asks for changes after launch?",
    a: "Scope changes under the original brief: included free. New feature requests: priced per your agency's rate, we quote you our internal cost, you keep the margin. Most partners price maintenance retainers at 3-5x our internal rate.",
  },
  {
    q: "What technologies do you build with?",
    a: "Next.js, React, TypeScript, Tailwind CSS, Sanity CMS, Supabase or Postgres, Stripe, and Vercel. Every site scores 90+ on Google PageSpeed. No WordPress, no Webflow, no page builders. Pure custom code.",
  },
];

export default function PartnersContent() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-paper min-h-screen overflow-x-hidden relative">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* 1. HERO — empathetic anti-middleman positioning */}
      <section className="relative pt-24 md:pt-40 pb-14 md:pb-20 px-6 bg-paper overflow-hidden">
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-stone-200/40 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-xs mb-8"
          >
            <Users className="w-3.5 h-3.5 text-cognac" />
            <span className="text-[11px] font-bold text-stone-600 uppercase tracking-[0.22em]">What Your Current Dev Partner Won&apos;t Tell You</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[2.5rem] md:text-[4.5rem] font-bold text-charcoal leading-[1.05] tracking-[-0.025em] mb-8 md:mb-10"
          >
            White label web development.
            <span className="block font-serif italic text-cognac">You handle clients. We stay invisible.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            data-speakable="true"
            className="text-base md:text-lg text-charcoal max-w-2xl mb-5 leading-[1.7] font-semibold"
          >
            PandaCodeGen builds white-label custom Next.js sites under agency brands, with mutual NDA and published 15/35/50 partner rates.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl mb-5 leading-[1.7] font-medium"
          >
            You&apos;re paying an offshore dev shop $50/hr and still missing deadlines. Or you&apos;re juggling three freelancers who all ghost you mid-project. Your client blames YOU when it breaks. You eat the margin hit to fix it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl mb-10 leading-[1.7] font-medium"
          >
            We ship in 3 weeks. Your client thinks you did it. No account managers. No middle-men. You talk to the engineer writing the code. We stay invisible. Your brand. Your client. Your margin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all inline-flex items-center justify-center gap-2 hover:scale-105"
            >
              Apply for Partnership <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"book_a_partner_call",location:"cta"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="px-8 py-4 bg-white border border-stone-200 text-charcoal font-bold rounded-full hover:border-stone-400 transition-all inline-flex items-center justify-center gap-2">
                Book a Partner Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. PROOF STRIP — real numbers */}
      <section className="container mx-auto px-6 pb-14 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "3", label: "Founding agency partners", sub: "mutual NDAs signed" },
              { value: "First 3", label: "White-label builds shipped", sub: "under partner brands" },
              { value: "Founding-rate", label: "Partner pricing available", sub: "for early partners" },
              { value: "3 weeks", label: "Avg build time", sub: "vs 8-12 typical" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-5 md:p-6 bg-white border border-stone-300 rounded-2xl shadow-md"
              >
                <p className="text-2xl md:text-3xl font-black text-charcoal tracking-tight leading-none">{stat.value}</p>
                <p className="text-xs text-stone-600 font-semibold mt-2 leading-snug">{stat.label}</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-stone-500 mt-4 italic">Numbers as of July 2026. Honest, not inflated.</p>
          <p className="text-center text-sm text-stone-600 mt-3">
            The proof is public: <Link href="/work" className="text-cognac font-bold hover:underline underline-offset-2">see the builds in our work portfolio</Link>.
          </p>
        </div>
      </section>

      {/* 3. HOW THE WHITE-LABEL WORKS */}
      <section className="py-12 md:py-20 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-3">The White-Label Flow</p>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight leading-tight">
              White-label web development, four steps. <span className="font-serif italic text-cognac">Zero surprises.</span>
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto">Your client never knows we exist. You keep the relationship, the brand, and the margin.</p>
          </div>

          <div className="space-y-8">
            {processSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-cognac font-mono font-bold text-sm">
                    {item.step}
                  </div>
                  {i < processSteps.length - 1 && <div className="w-px h-8 bg-stone-200 mt-2" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
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

      {/* 4. PARTNERSHIP TIERS — published commission/margin rates */}
      <PricingTiers
        heading="Three ways to partner."
        headingAccent="All transparent. All published."
        subheading="Most partner programs hide their commission rates until you apply. We publish them. Because if you don't know the math, you can't sell it to your client."
        agencyComparison={{
          agencyPrice: "$50-120/hr + overhead",
          agencyNote: "Offshore or freelancer. Unclear delivery. Client blames you when it breaks.",
          ourPrice: "Fixed-scope pricing",
          ourNote: "3-week timeline. NDA signed. White-label by default. Your brand, our engineering.",
        }}
        tiers={[
          {
            tier: "Referral Partner",
            price: "15% commission",
            timeline: "zero commitment",
            fit: "Freelancers, designers, marketing agencies who occasionally hit dev needs.",
            includes: [
              "Send us a qualified lead via email",
              "We handle everything from there",
              "15% commission on the final sale, paid net-14 after client payment",
              "Standard NDA protects your relationship",
              "No minimum leads required",
              "No contract, no quota",
            ],
            cta: "Join as Referral",
          },
          {
            tier: "White-Label Partner",
            price: "35% margin",
            timeline: "1 project minimum",
            fit: "Full-service agencies wanting to add dev capacity without hiring engineers.",
            includes: [
              "We stay 100% invisible to your clients",
              "Your GitHub, Vercel, domain, branding",
              "Our internal cost + your 35% markup = your client quote",
              "Mutual NDA signed before any project",
              "1 pilot project to start, no minimums after",
              "Priority scheduling over non-partners",
            ],
            featured: true,
            cta: "Become a White-Label Partner",
          },
          {
            tier: "Joint Venture Partner",
            price: "50/50 revenue split",
            timeline: "ongoing relationship",
            fit: "Established shops wanting a tech partner for combined offerings and shared growth.",
            includes: [
              "Combined offering with co-branded deliverables",
              "50/50 revenue split on jointly-sourced clients",
              "Dedicated Slack/Discord channel with us",
              "Sales collateral + pitch decks provided",
              "Quarterly strategy sync with Hassan",
              "Co-invested marketing (mutual case studies)",
            ],
            cta: "Start Joint Venture",
          },
        ]}
        footnote="All partnerships include: mutual NDA, full source code handoff, 15 to 30 days of post-launch support depending on the client's tier, and your agency brand on all deliverables. Commissions and margins paid net-14 after client payment."
      />

      {/* 5. FAQ */}
      <section className="py-12 md:py-20 px-6 bg-white border-y border-stone-200">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-cognac" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Partner Questions</h2>
          </div>
          <p className="text-stone-600 text-center mb-10 md:mb-12">The specific stuff agency owners ask before they sign.</p>

          <div className="space-y-3">
            {partnerFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-stone-300 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-charcoal font-semibold text-base">{faq.q}</h3>
                    <div className={`w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>
                      <span className="text-charcoal text-sm font-bold">+</span>
                    </div>
                  </div>
                  <p className={`text-stone-600 text-sm leading-relaxed mt-4 border-t border-stone-200 pt-4 ${openFaq === i ? "block" : "hidden"}`}>{faq.a}</p>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-linear-to-br from-charcoal to-stone-900 rounded-[3rem] p-10 md:p-14 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cognac/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-[0.22em] text-cognac mb-6">
              <ShieldCheck className="w-4 h-4" /> NDA-First Partnership
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Keep your client. <span className="font-serif italic text-cognac">Keep your margin.</span>
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Apply today, NDA signed within 24 hours, first project quote within 48. You keep running your agency. We stay invisible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-8 py-4 bg-white text-charcoal font-bold rounded-full hover:bg-stone-100 transition-all inline-flex items-center justify-center gap-2"
              >
                Apply for Partnership <ArrowRight className="w-5 h-5" />
              </button>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                Book a Partner Call
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
