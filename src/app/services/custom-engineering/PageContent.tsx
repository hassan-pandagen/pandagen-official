"use client";

import { useState } from "react";
import { motion } from "@/components/ui/motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Lock, Cpu, Users, Palette, HelpCircle, FileSearch, Lightbulb, Code, Rocket, Gauge, ShoppingBag, Wrench, Layers, Database, KeyRound, Plug, Server, GitBranch } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingTiers from "@/components/services/PricingTiers";
import PartnerPromise from "@/components/services/PartnerPromise";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import BuiltWith from "@/components/sections/BuiltWith";
import { serviceFaqs } from "@/data/service-faqs";

const comparisonData = [
  { feature: "Capacity Planning", nocode: "Capacity and scaling controls depend on the selected platform and plan", custom: "Load profile, capacity targets, and scaling controls are defined during discovery", icon: Users },
  { feature: "Repository & Rights", nocode: "Export, access, and licensing terms vary by platform", custom: "Who gets the code, which licences apply, when the IP transfers, and how it is handed over. All in the proposal", icon: Lock },
  { feature: "Performance", nocode: "Results vary with templates, scripts, content, and integrations", custom: "We agree the baseline, the test conditions and what counts as done before anyone builds", icon: TrendingUp },
  { feature: "Operating Costs", nocode: "Subscriptions, add-ons, and usage charges require a current account review", custom: "Hosting and service estimates are itemized against the proposed architecture", icon: DollarSign },
  { feature: "Customization", nocode: "Changes are limited by supported extension points and plan features", custom: "Custom workflows can be designed within the agreed scope and dependencies", icon: Palette },
  { feature: "AI Integration", nocode: "Options depend on available APIs, add-ons, and data controls", custom: "Integrations get designed around the data you approved, the security you need, and how it will be judged", icon: Cpu },
];

const faqData = serviceFaqs["custom-engineering"];

export default function PageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-paper min-h-screen selection:bg-charcoal selection:text-white overflow-x-hidden">
      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-20 md:pt-28 pb-8 md:pb-12 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)", backgroundSize: "50px 50px", opacity: 0.03 }} />
        <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-6">
            <Zap className="w-4 h-4" /> Next.js Development Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight md:tracking-tighter mb-4 leading-[1.08] md:leading-tight break-words"
          >
            {/* Named no problem for 2,939 characters, the worst of the eight. */}
            The tool you need does not exist, so you are running it on spreadsheets.{" "}
            <span className="font-serif font-normal italic text-cognac md:block">Validate the scope before committing to delivery.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            We design SaaS platforms, internal dashboards and AI-enabled tools around how you actually work, what they have to connect to, and what gets in the way. All of that comes out of one short call. <span className="text-charcoal font-medium">Who gets the code, which licences apply, who owns the IP, what support you get and how it is handed over are all in the written proposal.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cal-namespace="discovery"
              data-cal-link={process.env.NEXT_PUBLIC_CAL_LINK || undefined}
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get your engineering plan <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#what-we-build" className="px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2">
              See What We Build <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-sm text-stone-600 mt-4 text-center max-w-xl mx-auto leading-relaxed">Tell us the idea or show us the tool you use now. We will tell you what it would take and <span className="text-charcoal font-medium">what it costs.</span> The price comes in writing.</p>
        </div>
      </section>

      {/* Answer-first summary, extractable passage in the citation zone */}
      <section className="px-6 pb-6 md:pb-8 bg-paper">
        <div className="container mx-auto max-w-3xl">
          <p data-speakable="true" className="text-base md:text-lg text-stone-600 leading-relaxed text-center">
            <strong className="text-charcoal">PandaCodeGen scopes and builds custom software, SaaS platforms, dashboards, and internal tools</strong> with technologies such as Next.js, TypeScript, and Supabase. Your written quote says what gets built, the price, the dates, what support you get, and that the code, the accounts and the rights are yours at the end.
          </p>
        </div>
      </section>

      {/* 2. WHAT WE BUILD */}
      <section id="what-we-build" className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-sm text-stone-600 font-bold uppercase tracking-widest mb-6">
              What We Build
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">What Our Next.js Development Agency Builds</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">These capability examples help frame discovery. They are not claims about a completed client project or a promise that every feature belongs in your scope.</p>
          </div>

          <div className="space-y-6">
            {/* SaaS Platforms, Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-cognac/20 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                  <Gauge className="w-8 h-8 text-cognac" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">SaaS Platforms</h3>
                  <p className="text-stone-600 text-base leading-relaxed mb-4">Multi-tenant applications with authentication, subscription billing, user dashboards, and scalable architecture built to grow with your business.</p>
                  <p className="text-sm text-cognac font-medium mb-4">The proposal selects architecture after reviewing tenancy, permissions, data sensitivity, integrations, portability, operational ownership, and expected load.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Subscription management dashboards", "Marketplace platforms with payments", "Project management tools", "CRM & client portals", "Multi-tenant auth with role-based access", "Stripe/payment gateway integration"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Internal Tools, Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-cognac/20 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                  <Users className="w-8 h-8 text-cognac" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">Internal Tools</h3>
                  <p className="text-stone-600 text-base leading-relaxed mb-6">Custom dashboards, admin panels, and workflow automation that replace spreadsheets and manual processes with real-time, automated systems.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Operations & logistics dashboards", "Inventory management systems", "Employee onboarding portals", "Real-time analytics & reporting", "Workflow automation engines", "Custom admin panels"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI-Powered Products, Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-cognac/20 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                  <Cpu className="w-8 h-8 text-cognac" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">AI-Powered Products</h3>
                  <p className="text-stone-600 text-base leading-relaxed mb-6">OpenAI and Claude integration built natively into your product. Chat with your data, intelligent automation, and AI features that give you a competitive edge.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["AI chatbots trained on your data", "Automated document processing", "Intelligent search & recommendations", "Content generation engines", "Smart data extraction pipelines", "Conversational interfaces (AI-powered search)"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. HOW WE BUILD - Process Timeline */}
      <section id="how-we-build" className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-sm text-stone-600 font-bold uppercase tracking-widest mb-6">
              How We Build
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">From Idea to an Agreed Delivery Plan</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">The work runs in stages you review as we go. Your quote has the dates and what has to be working at each one.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-stone-200 -z-10" />
            {[
              { step: "01", title: "Discovery", duration: "Phase 1", desc: "We map what you need, how people will use it, what constrains it and what the options are. The scope then records what we assumed, what it depends on, the milestones, and how you sign it off." },
              { step: "02", title: "Prototype & Validate", duration: "Phase 2", desc: "Where useful, we test important workflows or technical risks before committing to the full implementation path." },
              { step: "03", title: "Implementation", duration: "Phase 3", desc: "We build the approved features and integrations in reviewable increments using the architecture selected for the project." },
              { step: "04", title: "Verification & Handover", duration: "Phase 4", desc: "We run the agreed checks, prepare deployment and documentation, and complete support, access, licensing, and handover steps stated in the proposal." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-stone-50 border-4 border-white shadow-xs flex items-center justify-center text-lg font-black text-cognac mb-6">
                  {item.step}
                </div>
                <div className="text-xs font-semibold text-stone-600 uppercase tracking-widest mb-2">{item.duration}</div>
                <h3 className="font-bold text-lg text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PAIN POINTS */}
      <section className="py-12 md:py-20 px-6 bg-charcoal">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" /> Growth Cap
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The No-Code Ceiling</h2>
            <p className="text-stone-300 max-w-2xl mx-auto">
              These are the problems founders and businesses hit when they try to scale on no-code platforms:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, pain: "Unclear Commercial Assumptions", detail: "A proposal should separate discovery, implementation, third-party services, change requests, and ongoing support so the cost model can be evaluated before commitment." },
              { icon: XCircle, pain: "Architecture Without a Load Model", detail: "Capacity depends on user behavior, data volume, integrations, and failure handling. Those assumptions should be documented and tested against the approved requirements." },
              { icon: Zap, pain: "Incentives Hidden in the Contract", detail: "Fixed-price, hourly, and milestone models each have trade-offs. The selected model, change process, and acceptance criteria should be explicit in the written proposal." },
              { icon: Lock, pain: "Portability and Access Gaps", detail: "Platform exports, repository access, credentials, licensing, and handover vary. Review them before choosing an implementation path or vendor." },
              { icon: TrendingUp, pain: "Technology Chosen Before the Problem", detail: "Technical due diligence examines architecture, operations, security, and maintainability. The stack should follow the product constraints and evidence, not a generic label." },
              { icon: Cpu, pain: "AI Added Without Evaluation", detail: "AI features need suitable provider APIs, data controls, test cases, fallback behavior, and monitoring. Discovery identifies whether native integration is appropriate." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-400 w-fit mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.pain}</h3>
                <p className="text-stone-300 leading-relaxed text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4b. REPORTING LAYER, the differentiator against a plain web shop.

          WHY THIS SECTION EXISTS AND WHY IT IS HERE RATHER THAN ON ITS OWN PAGE
          Keyword Planner, 18 Aug 2026: "automated reporting dashboard", "kpi
          dashboard for small business", "automated business reports" and "all in
          one marketing dashboard" ALL return ZERO_SEARCH_VOLUME. Nobody searches
          for this offer in the words we would describe it with, so a dedicated
          service page would rank for nothing. The demand is on THIS page's terms
          ("web development agency" 4,400/mo, "custom web development" 1,000/mo),
          so the reporting layer earns its keep here as the reason to pick us over
          another agency, not as its own bet. Full data in
          docs/research/keyword-gap-2026-08-18.md. */}
      <section className="py-12 md:py-20 px-6 bg-paper border-t border-stone-200">
        <div className="container mx-auto max-w-5xl">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cognac mb-4">After the build</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5">
              Most businesses cannot say which channel their last ten customers came from
            </h2>
            <p data-speakable="true" className="text-lg text-stone-600 leading-relaxed">
              <strong className="text-charcoal">The reporting layer is where most builds stop short.</strong>{" "}
              The site ships, the leads arrive, and nobody can say whether the spend is going to the
              channel that produces them. We build the part that answers that, because a dashboard you
              have to interpret is not a report.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              {
                title: "The lead arrives as an email",
                detail: "A form fires a notification, nobody records where that visitor came from, and by the time somebody reads it the source is gone. The CRM has a lead source field and it is empty on most records.",
              },
              {
                title: "GA4 answers a different question",
                detail: "It reports sessions and events. You asked which spend produced revenue. Getting from one to the other is a configuration project, not a setting, which is why the tab stays closed.",
              },
              {
                title: "Every platform claims the same sale",
                detail: "Meta counts it, Google counts it, and the CRM counts it. The totals never reconcile, so eventually nobody trusts any of them and the decision gets made on instinct.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-stone-200 bg-white"
              >
                <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-8 md:p-10">
            <h3 className="text-2xl font-bold text-charcoal mb-4">What we build instead</h3>
            <ul className="space-y-3 mb-8">
              {[
                "Lead source captured at the moment of the enquiry and written onto the CRM record, so it survives past the notification email.",
                "One view showing leads by channel next to what that channel cost and what it produced, rather than three tools that disagree.",
                "A scheduled email report, because the dashboard nobody logs into is the same as no dashboard.",
              ].map((line, i) => (
                <li key={i} className="flex gap-3 text-stone-600 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            {/* SCREENSHOT SLOT, deliberately empty.

                To fill it: drop a REDACTED export into public/work/ and uncomment
                the figure below. Redacted means no customer names, no email
                addresses and no individual order values. The existing
                public/work/panda-operations.png does NOT qualify: it shows eight
                named customers with amounts and payment status. It is currently
                the OG image for /work/enterprise-ops, which is worth revisiting
                separately.

            <figure className="my-8">
                <Image src="/work/lead-source-report.png" alt="Lead source report showing enquiry volume by channel, with customer identifiers removed" width={1600} height={900} className="rounded-xl border border-stone-200" />
                <figcaption className="mt-2 text-xs text-stone-500">Lead source view from a live operations platform. Customer identifiers removed.</figcaption>
            </figure>
            */}

            <div className="rounded-xl bg-stone-50 border border-stone-200 p-6">
              <p className="text-sm text-stone-600 leading-relaxed mb-3">
                <strong className="text-charcoal">Where this is already running.</strong> Our{" "}
                <Link href="/work/enterprise-ops" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                  enterprise operations platform
                </Link>{" "}
                reports lead volume by channel across search, social, paid ads, AI and LLM referrals,
                and direct referral, in one place, at 95% process automation.
              </p>
              <p className="text-sm text-stone-500 leading-relaxed">
                <strong className="text-stone-600">What it does not do.</strong> This reports on data you
                already have. It does not recover attribution for traffic that arrived before the
                tracking existed, and no model resolves the buyer who saw an ad, asked a friend, then
                typed your name into Google. Anyone promising that is selling you a guess with a
                confidence interval printed on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section id="comparison" className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">No-Code vs Custom Coded</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-12">Compare what each one limits, what it locks you into, and what it costs to run.</p>

          <div className="rounded-2xl border border-stone-300 overflow-hidden bg-white">
            {/* Header for desktop only. On mobile, each row gets inline labels. */}
            <div className="hidden md:grid md:grid-cols-3 bg-stone-50 p-4 border-b border-stone-200">
              <div className="text-stone-600 font-medium text-sm">Feature</div>
              <div className="text-stone-600 font-bold text-sm text-center">No-Code / Templates</div>
              <div className="text-cognac font-bold text-sm text-center">Custom Coded</div>
            </div>

            {comparisonData.map((row, i) => (
              <div
                key={i}
                className={`p-4 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'} ${i < comparisonData.length - 1 ? 'border-b border-stone-200' : ''} md:grid md:grid-cols-3 md:items-center`}
              >
                <div className="flex items-center gap-2 text-charcoal text-sm font-bold mb-3 md:mb-0 md:font-medium">
                  <row.icon className="w-4 h-4 text-stone-600 shrink-0" />
                  {row.feature}
                </div>
                <div className="flex items-center justify-between gap-3 mb-2 md:mb-0 md:justify-center md:text-center">
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-stone-600">No-Code</span>
                  <span className="text-stone-700 text-sm md:text-center">{row.nocode}</span>
                </div>
                <div className="flex items-center justify-between gap-3 md:justify-center md:text-center">
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-cognac">Custom</span>
                  <span className="text-cognac text-sm font-medium md:text-center">{row.custom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECH STACK */}
      <BuiltWith />

      {/* FOUNDER CREDIBILITY BLOCK */}
      <section className="py-12 md:py-20 px-6 bg-stone-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-40 h-40 rounded-2xl border border-stone-200 shadow-xs bg-cognac/10 flex items-center justify-center text-cognac font-bold text-6xl shrink-0">
              H
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-2">Delivery accountability</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Know the Team and Responsibilities Before Kickoff.</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-4">
                Your written quote names who does the work, who you talk to, how often you review it, and whether anyone outside our team is involved.
              </p>
              <p className="text-stone-600 text-base">
                One call works out how it would be built and what could go wrong. The price, the dates, who builds it and what support you get all go in writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope and evidence framework */}
      <PartnerPromise hideTiers />

      {/* SIGNATURE BLOCK: Build Blueprint Spec (unique to Custom Engineering) */}
      <section id="build-blueprint" className="py-12 md:py-20 px-6 bg-charcoal">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cognac font-mono uppercase tracking-widest mb-6">
              <Server className="w-4 h-4" /> Spec Sheet
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A reviewable <span className="font-serif font-normal italic text-cognac">build blueprint</span> for each project
            </h2>
            <p data-speakable="true" className="text-stone-300 text-lg max-w-2xl leading-relaxed">
              Before we build, you get a written plan of how it works, what it connects to and who is responsible for what. The quote is what counts.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-700 bg-stone-950 overflow-hidden">
            {/* Datasheet header with blueprint stamp */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 md:px-8 py-4 border-b border-stone-700 bg-white/5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-stone-600">SPEC // CUSTOM-ENGINEERING-BUILD</span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange-300">REV 2026.07 · STATUS: REVIEW-READY</span>
            </div>

            {/* Ruled spec rows */}
            <dl>
              {[
                { icon: Layers, field: "ARCHITECTURE", value: "A maintained Next.js App Router release · React Server Components · TypeScript · Tailwind" },
                { icon: Database, field: "DATA_LAYER", value: "Postgres (Supabase) or headless CMS · typed schema · row-level security" },
                { icon: KeyRound, field: "AUTH", value: "Session-based auth · role-based access control · multi-tenant isolation" },
                { icon: Plug, field: "APIS_&_INTEGRATIONS", value: "REST + GraphQL endpoints · Stripe, OpenAI, Claude · inbound/outbound webhooks" },
                { icon: Gauge, field: "PERFORMANCE", value: "Baseline · test environment · budgets · acceptance method · known third-party constraints" },
                { icon: Server, field: "HOSTING", value: "Selected provider · usage assumptions · operational roles · current service estimates" },
                { icon: GitBranch, field: "ACCESS_&_RIGHTS", value: "Repository access · licensing · IP transfer · documentation · handover timing" },
              ].map((row, i, arr) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr] gap-2 md:gap-6 px-6 md:px-8 py-5 ${i < arr.length - 1 ? "border-b border-stone-700/70" : ""} hover:bg-white/5 transition-colors`}
                >
                  <dt className="flex items-center gap-3 font-mono text-sm text-stone-600">
                    <row.icon className="w-4 h-4 text-cognac shrink-0" />
                    <span className="tracking-wider">{row.field}</span>
                  </dt>
                  <dd className="font-mono text-sm md:text-base text-white leading-relaxed">{row.value}</dd>
                </div>
              ))}
            </dl>

            {/* Datasheet footer note */}
            <div className="px-6 md:px-8 py-4 border-t border-stone-700 bg-white/5">
              <p className="font-mono text-xs text-stone-600 leading-relaxed">
                {/* */}These are planning categories, not universal defaults. The approved specification and proposal control the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TIERS: SaaS / custom application pricing */}
      <PricingTiers
        heading="Plan the right engineering scope."
        headingAccent="Confirm commercial terms in writing."
        agencyComparison={{
          agencyPrice: "Not assessed",
          agencyNote: "Compare the same scope and the same contract terms, not headline prices.",
          ourPrice: "Scoped proposal",
          ourNote: "Price, timing, access, support, and rights follow discovery.",
        }}
        tiers={[
          {
            tier: "Tool",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "A focused tool or portal with validated requirements.",
            includes: [
              "Requirements and dependency review",
              "Architecture and integration plan",
              "Written acceptance and handover terms",
            ],
            cta: "Get your migration plan",
          },
          {
            tier: "Platform",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "A SaaS product, client portal, or dashboard with custom workflows.",
            includes: [
              "Validated feature and data scope",
              "Security and integration requirements",
              "Written support and change process",
            ],
            featured: true,
          },
          {
            tier: "Enterprise",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "Complex systems with broader security, integration, or operational requirements.",
            includes: [
              "Architecture and risk assessment",
              "Acceptance method and operational plan",
              "Written licensing, access, and handover terms",
            ],
          },
        ]}
        footnote="Your written quote has the final price, the dates, what is included, who owns the code, and what happens if something breaks."
      />

      {/* 7. DUAL CTA */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-8 md:mb-12">Choose the right validation path.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MVP / Prototype */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-charcoal/30 transition-colors">
              <div className="text-stone-600 text-sm font-bold uppercase tracking-wider mb-4">For Startups</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">MVP / Prototype</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Need to test an idea first? We can build a working prototype of the riskiest part before you commit to the whole thing.
              </p>
              <ul className="space-y-3 mb-8">
                {["Defined validation questions", "Reviewable implementation path", "Documented architecture assumptions", "User-testing plan", "Written acceptance criteria"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"build_my_mvp",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 border border-charcoal text-charcoal font-bold rounded-full hover:bg-cognac hover:text-white hover:border-cognac transition-all">
                Discuss an MVP scope
              </button>
            </div>

            {/* Full Platform */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-charcoal/20 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-stone-100 text-cognac text-xs font-bold rounded-full">Full Build</div>
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-4">For Growing Businesses</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Full SaaS / Platform</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                For products that need AI features, multiple customer accounts, or workflows built around how you actually operate.
              </p>
              <ul className="space-y-3 mb-8">
                {["SaaS architecture review", "AI-provider feasibility", "Responsive application scope", "Administration workflows", "Repository and licensing terms", "Capacity and monitoring plan"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"build_my_platform",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all">
                Discuss a platform scope
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-300 text-sm text-stone-600 mb-6">
              <HelpCircle className="w-4 h-4" /> FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="text-stone-600 text-lg">Straight answers. No sales fluff.</p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, i) => {
              const isOpen = openFaq === i;
              const buttonId = `custom-engineering-faq-button-${i}`;
              const panelId = `custom-engineering-faq-panel-${i}`;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-5 text-left transition-all hover:text-cognac"
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span className="text-base font-medium text-charcoal">{faq.q}</span>
                        <span aria-hidden="true" className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                          <span className="text-sm font-bold text-charcoal">+</span>
                        </span>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t border-stone-200 px-5 py-4"
                  >
                    <p className="text-sm leading-relaxed text-stone-600">{faq.a}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. WRITTEN DELIVERY TERMS */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl bg-linear-to-br from-[#faf7f2] to-white border border-cognac/30 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cognac/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cognac/10 text-cognac border border-cognac/20 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> Written Delivery Terms
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Define How the Build Will Be Verified.</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-2 max-w-2xl mx-auto">
              Your written quote says how much load it handles, how we test it, what support you get, and that the code, the accounts and the rights are yours at handover. It is the quote that counts, not this page.
            </p>
            <p className="text-sm text-stone-600 mb-8">Your quote names who does the work and where they are.</p>
            <button
              data-cal-namespace="discovery"
              data-cal-link={process.env.NEXT_PUBLIC_CAL_LINK || undefined}
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all"
            >
              Get your migration plan
            </button>
          </div>
        </div>
      </section>

      {/* Further Reading: blog cluster links that close the pillar-to-supporting-content loop */}
      <section className="py-10 px-6 bg-white border-t border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">Further reading</p>
          <ul className="space-y-2 text-stone-700">
            <li>&rarr; <Link href="/blog/build-vs-buy-software-2026-cost-comparison" className="text-charcoal hover:text-cognac underline underline-offset-2">Build-versus-buy software planning guide</Link></li>
            <li>&rarr; <Link href="/blog/how-long-does-a-custom-website-take" className="text-charcoal hover:text-cognac underline underline-offset-2">How long does a custom website take to build?</Link></li>
            <li>&rarr; <Link href="/blog/custom-website-5000-whats-included" className="text-charcoal hover:text-cognac underline underline-offset-2">What a custom website scope may include</Link></li>
            <li>&rarr; <Link href="/blog/do-you-own-your-website" className="text-charcoal hover:text-cognac underline underline-offset-2">Repository, licensing, and IP terms explained</Link></li>
          </ul>
        </div>
      </section>

      {/* Related Services, expanded to all platforms via reusable component */}
      <RelatedServicesGrid currentHref="/services/custom-engineering" />

      <Footer />
    </main>
  );
}
