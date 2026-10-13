"use client";
import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";

import { motion } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PartnerModels from "@/components/partners/PartnerModels";
import FaqRows from "@/components/ui/FaqRows";
import { POST_LAUNCH_SUPPORT } from "@/data/company-facts";
import { partnerFaqs } from "@/data/partner-faqs";
import hover from "./PartnersHover.module.css";

const anton = { className: "font-anton-face" };

const processSteps = [
  {
    step: "01",
    title: "You Pitch. We Scope.",
    desc: "You win the client (that's your skill). Send us the brief + requirements. We aim to return a fixed-scope quote within one to two business days, subject to brief completeness. A mutual NDA is signed before you send client details.",
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

// The site nav owns the page's one quote form; these buttons ask it to open.
const openQuote = () => window.dispatchEvent(new Event("open-quote-modal"));

export default function PartnersContent() {
  return (
    <main data-page="partners" className={`bg-paper min-h-screen overflow-x-hidden relative text-charcoal ${hover.root}`}>

      {/* 1. HERO — empathetic anti-middleman positioning */}
      <section className="relative border-b border-stone-300 bg-paper px-6 pb-12 pt-28 md:pb-14 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 font-mono text-xs font-bold uppercase tracking-[0.18em] text-cognac"
          >
            For agencies / white-label delivery
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`mb-8 leading-[0.95] tracking-tight ${anton.className} ${hover.heroTitle}`}
          >
            <span className="block">White-label web development.</span>
            <span className="block text-cognac">Your client. Your brand.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            data-speakable="true"
            className="text-base md:text-lg text-charcoal max-w-2xl mb-5 leading-[1.7] font-semibold"
          >
            PandaCodeGen builds white-label custom Next.js sites under agency brands, under a mutual NDA, with commercial terms agreed per partner in writing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl mb-5 leading-[1.7] font-medium"
          >
            Keep the client relationship while we handle the build. You review the scope, schedule and work before anything goes to your client.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl mb-10 leading-[1.7] font-medium"
          >
            Start with one project. We agree confidentiality, responsibilities, handover and your commercial terms in writing before work starts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={openQuote}
              className="inline-flex items-center justify-center gap-2 bg-charcoal px-8 py-4 font-bold text-white transition-colors hover:bg-cognac"
            >
              Apply for Partnership <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"book_a_partner_call",location:"cta"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="inline-flex items-center justify-center gap-2 border border-charcoal px-8 py-4 font-bold text-charcoal transition-colors hover:bg-charcoal hover:text-white">
                Book a Partner Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. PROOF STRIP — real numbers */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl md:grid-cols-3">
          {[
            { label: "01 / Start small", title: "One scoped pilot", body: "Test the working relationship on a single project before discussing repeat work." },
            { label: "02 / Keep control", title: "Your client relationship", body: "The NDA, communication route and handover are agreed with your agency." },
            { label: "03 / See the work", title: "Public project records", body: "Review completed work and the relationship behind each example." },
          ].map((item) => (
            <div key={item.title} className={`border-b border-stone-400 py-7 md:pr-10 ${hover.proofCard}`}>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-cognac">{item.label}</p>
              <h2 className={`mt-4 text-3xl leading-none ${anton.className}`}>{item.title}</h2>
              <p className="mt-4 leading-7 text-stone-700">{item.body}</p>
            </div>
          ))}
          <Link href="/work" className={`col-span-full mt-5 font-bold text-cognac underline underline-offset-4 ${hover.textAction}`}>Review the work ↗</Link>
        </div>
      </section>

      {/* 3. HOW THE WHITE-LABEL WORKS */}
      <section className="border-y border-stone-300 bg-[#F5F4F0] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 md:mb-14">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-cognac">The white-label flow</p>
            <h2 className={`text-4xl leading-none md:text-6xl ${anton.className}`}><span className="block">Four steps from</span>{" "}<span className="block text-cognac">brief to handover.</span></h2>
            <p className="mt-5 max-w-xl text-stone-700">Your agency keeps the client relationship and approves each stage of the work.</p>
          </div>

          <div className="border-t border-stone-400">
            {processSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`grid gap-4 border-b border-stone-400 py-7 last:border-b-0 md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8 md:py-9 ${hover.processRow}`}
              >
                <span className="font-mono text-xs font-bold text-cognac">{item.step}</span>
                <h3 className={`text-2xl leading-none md:text-3xl ${anton.className}`}>{item.title}</h3>
                <p className="leading-7 text-stone-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARTNERSHIP TIERS — published commission/margin rates */}
      {/* Was <PricingTiers>, which discards everything below: it renders one
          hardcoded sentence and a shared generic list for every tier, so all three
          partnership models appeared identical and the rates never rendered. That
          gutting was correct for the service pages it protects, and wrong here —
          this page's whole job is to distinguish three ways of working together.
          A commission rate is an offer we control, not an outcome we predict, so
          it belongs in the same category as the published price tiers. The
          competitor hourly comparison PricingTiers also strips is NOT reinstated. */}
      <section className="bg-paper px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-cognac">Choose how we work together</p>
          <h2 className={`mt-4 mb-12 text-4xl leading-none md:text-6xl ${anton.className}`}><span className="block">One project or</span>{" "}<span className="block text-cognac">an ongoing partnership.</span></h2>
      <PartnerModels
        rowClassName={hover.modelRow}
        models={[
          {
            name: "Referral Partner",
            rate: "15% commission",
            commitment: "Zero commitment",
            fit: "Freelancers, designers and marketing agencies who occasionally hit development needs.",
            includes: [
              "Send us a qualified lead by email",
              "We handle everything from there",
              "15% commission on the final sale, paid net-14 after client payment",
              "Standard NDA protects your relationship",
              "No minimum leads, no contract, no quota",
            ],
          },
          {
            name: "White-Label Partner",
            rate: "35% markup",
            commitment: "One pilot project to start",
            fit: "Full-service agencies adding development capacity without hiring engineers.",
            includes: [
              "We stay invisible to your clients",
              "Your GitHub, Vercel, domain and branding",
              "Our fixed scope plus your 35% markup becomes your client quote: our $3,500 becomes your $4,725, which is a 25.9% gross margin on that sale before your own costs",
              "Mutual NDA signed before any project detail is shared",
              "No minimums after the pilot",
              "Priority scheduling over non-partners",
            ],
          },
          {
            name: "Joint Venture Partner",
            rate: "50/50 split",
            commitment: "Ongoing relationship",
            fit: "Established shops wanting a technical partner for a combined offering.",
            includes: [
              "Combined offering with co-branded deliverables",
              "50/50 revenue split on jointly sourced clients",
              "A shared channel with our team",
              "Sales collateral and pitch decks provided",
              "Quarterly strategy session with Hassan",
              "Co-invested marketing, including mutual case studies",
            ],
          },
        ]}
        footnote={`Every partnership includes a mutual NDA, full source-code handoff, and your agency's brand on the delivery. ${POST_LAUNCH_SUPPORT} Scope, price, timing, tests, ownership and remedies are set in the accepted written project terms for each project.`}
      />
        </div>
      </section>

      <section className="border-y border-stone-300 bg-paper px-6 py-12 md:py-16" aria-labelledby="partner-editor">
        <div className="mx-auto max-w-6xl">
          <h2 id="partner-editor" className="text-3xl font-bold text-charcoal md:text-5xl"><HeadingEmphasis text="A Sanity editor built for your client's content." /></h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">The pilot can cover a custom website, Sanity content models, agreed preview and publishing behavior, and an editor walkthrough under your agency's brand. Send representative content and the tasks your client needs to perform; the quote names the templates, migration, training and account handover.</p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">Customer accounts, private portals and custom backend workflows receive a separate scope. We agree who owns the Sanity project, repository and hosting accounts, and who handles support after your client accepts the work.</p>
          <div className="mt-6 flex flex-wrap gap-6"><Link className="font-semibold text-cognac underline underline-offset-4" href="/services/cms-development">See the Sanity service and real editor</Link><Link className="font-semibold text-cognac underline underline-offset-4" href="/services/backend-development">Scope a backend or portal</Link></div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="bg-paper px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-charcoal md:text-5xl">Partner questions</h2>
          <p className="mt-4 mb-10 text-stone-700 md:mb-12">The specific questions agency owners ask before they sign.</p>
          <FaqRows faqs={partnerFaqs.map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="bg-charcoal px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-orange-300">Start with a conversation</p>
            <h2 className={`max-w-[17ch] text-4xl leading-none md:text-7xl ${anton.className}`}>Keep the relationship. Build with us.</h2>
            <p className="mb-8 mt-7 max-w-2xl text-lg leading-8 text-stone-300">
              Tell us about the project. We can discuss the working arrangement, then put the scope and terms in writing.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={openQuote}
                className="inline-flex items-center justify-center gap-2 bg-white px-8 py-4 font-bold text-charcoal hover:bg-orange-300"
              >
                Apply for Partnership <ArrowRight className="w-5 h-5" />
              </button>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center justify-center gap-2 border border-stone-500 px-8 py-4 font-bold text-white hover:border-white"
              >
                Book a Partner Call
              </button>
            </div>
        </div>
      </section>

      {/* What the signed partner agreement actually pins down. Kept from the
          July 2026 remediation pass — it sets expectations without replacing
          the commercial case above it. */}
      <section className="px-6 py-12 md:py-16 bg-paper" aria-labelledby="partner-agreement">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cognac">Before we start</p>
          <h2 id="partner-agreement" className="mt-4 text-3xl font-bold text-charcoal md:text-5xl">
            What goes in the <span className="font-serif italic text-cognac">written agreement.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Everything above describes how we normally work. What actually binds either side is the signed partner agreement, which covers:
          </p>
          <ul className="mt-9 grid border-t border-stone-400 md:grid-cols-2 md:gap-x-10">
            {[
              "Confidentiality and permitted client contact",
              "Branding and white-label boundaries",
              "Scope, acceptance, revisions, and change control",
              "Price, invoicing, tax, commission, and payment timing",
              "Accounts, source, licenses, data, and handover",
              "Support, warranty, incident, and escalation process",
              "Capacity, response targets, dependencies, and holidays",
              "How it ends, what we keep, what we delete, and what carries on",
            ].map((item) => (
              <li key={item} className={`border-b border-stone-400 py-4 leading-7 text-stone-700 ${hover.agreementRow}`}>
                <span aria-hidden="true" className="mr-3 inline-block h-px w-5 translate-y-[-4px] bg-cognac/40" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-stone-600">
            No commission, margin, delivery window, response time, exclusivity, support period, or ownership transfer applies unless it appears in the signed terms for that engagement.
          </p>
        </div>
      </section>

    </main>
  );
}
