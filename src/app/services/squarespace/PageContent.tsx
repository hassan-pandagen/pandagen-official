"use client";

import FadeIn from "@/components/ui/FadeIn";
import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Gauge, Lock, Palette, Search, HelpCircle, FileSearch, Wrench, Rocket, PenTool, Heart, AlertOctagon, Anchor, Wallet, Layout, Smartphone, Check, ChevronDown, Unlock } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingTiers from "@/components/services/PricingTiers";
import PartnerPromise from "@/components/services/PartnerPromise";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

const squarespaceComparison = [
  { metric: "Performance", bad: "Measure current", good: "Agree target", icon: Zap },
  { metric: "Operating Cost", bad: "Review account", good: "Estimate scope", icon: Wallet },
  { metric: "Access & Rights", bad: "Check terms", good: "Write terms", icon: Lock },
  { metric: "Search Controls", bad: "Audit current", good: "Define work", icon: Search },
  { metric: "Design System", bad: "Map limits", good: "Scope changes", icon: Layout },
];

const faqs = [
  {
    q: "Will my Squarespace site design transfer to custom code?",
    a: "We list the design, the content, the components, how it behaves on each screen and what accessibility needs. The proposal then defines what is retained, redesigned, or excluded, along with the method used to review visual fidelity and performance."
  },
  {
    q: "Can I still use Squarespace for my online store?",
    a: "A full migration is not always necessary. We can evaluate retaining Squarespace Commerce or using a supported checkout integration, with fees, product data, tax, shipping, payments, and operational responsibilities reviewed before a recommendation."
  },
  {
    q: "How much does a Squarespace migration cost?",
    a: "Price and timing depend on how many pages and how much content there is, the design, whether you sell, scheduling, member areas, integrations, the data, redirects, and how you sign it off. The written proposal states the commercial model, milestones, assumptions, support, access, licensing, ownership, and remedies."
  },
  {
    q: "What if I have a blog on Squarespace?",
    a: "We can list the posts, media, authors, dates, URLs, metadata and what your editors need. The migration plan records what can be exported, transformed, redirected, manually recreated, or excluded; performance is measured against an agreed baseline."
  },
  {
    q: "Is the migration disruptive to my business?",
    a: "Building alongside the live site and switching DNS in stages cuts the disruption. No migration is risk free. The proposal defines backups, DNS responsibilities, verification, monitoring, rollback, and the maintenance window for the approved site."
  },
];

export default function SquarespacePageContent() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-6 animate-fade-in-up">
            <Zap className="w-4 h-4" /> Squarespace Migration Service
          </div>

          <h1 className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight md:tracking-tighter mb-4 leading-[1.08] md:leading-tight break-words animate-fade-in-up">
            Has your Squarespace site outgrown its current setup?{" "}
            <span className="font-serif font-normal italic text-cognac md:block">
              Start with a measured migration assessment.
            </span>
          </h1>

          <p className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto animate-fade-in-up-2">
            Squarespace is a practical starting point. If what you need from design, content, selling, speed or integrations has moved on, we can put your current site next to a scoped custom implementation. <span className="text-charcoal font-medium">We do not assume anything about search results, what you pay, your support, access, licences, ownership or handover. Those get agreed.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-4">
            <button
              data-cal-namespace="discovery"
              data-cal-link={process.env.NEXT_PUBLIC_CAL_LINK || undefined}
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get your migration plan <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#comparison" className="px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2">
              Scope Squarespace improvements <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-stone-600 mt-4 text-center max-w-xl mx-auto leading-relaxed">Drop your Squarespace URL when you book. We can run a point-in-time diagnostic, review migration inputs, and <span className="text-charcoal font-medium">identify what is needed for a written proposal.</span></p>
        </div>
      </section>

      {/* 2a. SQUARESPACE PIVOT - Split Card */}
      <section className="py-12 md:py-20 px-6 bg-paper border-y border-stone-200">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Reassess the Platform as Requirements Change
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              How much you turn over does not decide the right platform. Look at how you work, your content, the design, what it connects to, whether you can take it elsewhere, what it costs to run, and who maintains it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT: The Past (faded) */}
            <FadeIn className="p-6 md:p-10 rounded-3xl bg-white border border-stone-200 shadow-[0_18px_50px_rgba(28,25,23,0.05)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cognac/10 text-cognac border border-cognac/20 rounded-lg">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-charcoal">Why You Started</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Beautiful templates looked good immediately.",
                  "Drag-and-drop editor made changes easy.",
                  "All-in-one hosting meant no setup headaches.",
                  "Basic analytics to track your visitors.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-cognac/70 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* RIGHT: The Present (sharp/elevated) */}
            <FadeIn
              delay={2}
              className="p-6 md:p-10 rounded-3xl bg-white border border-cognac/30 shadow-[0_22px_60px_rgba(184,65,12,0.08)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cognac/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cognac/10 text-cognac border border-cognac/20 rounded-lg">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-charcoal">What to Review Now</h3>
              </div>
              <ul className="space-y-5">
                {[
                  { title: "Performance:", body: "Measure real example pages, then work out which scripts, images, templates and integrations are moving the number." },
                  { title: "Design System:", body: "Write down what the editor has to handle: every screen size, the components, the content, and accessibility." },
                  { title: "Portability and Cost:", body: "Check what you can export, who controls the domain, your account terms, the subscriptions and add-ons, and what a replacement would actually cost." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-700">
                    <Anchor className="w-4 h-4 text-cognac mt-1 shrink-0" />
                    <span><strong>{item.title}</strong> {item.body}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2c. Linked community discussions provide anecdotal context, not representative evidence. */}
      <section id="real-voices" className="py-12 md:py-20 px-6 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-charcoal text-white rounded-full mb-4">Linked Community Discussions</div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">Examples of Issues to Investigate</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl">
            These April 2026 posts describe individual experiences and are not representative performance evidence. Follow the links for the original context, then verify any relevant issue against your own account and current provider documentation.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Quote 1: Customization ceiling */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                One user described difficulty applying local typography changes and maintaining image layouts across responsive breakpoints.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">u/WholeHuckleberry7081</strong> · r/squarespace · Apr 8, 2026</span>
                <a href="https://www.reddit.com/r/squarespace/comments/1sec045/hate_ss_but_unsure_what_platform_to_move_to/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 2: Mobile/desktop layout breaks */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                Another user reported frustration while adapting a desktop layout for mobile and compared the workflow with other builders.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">u/Gabsnmaia</strong> · r/squarespace · Apr 30, 2026</span>
                <a href="https://www.reddit.com/r/squarespace/comments/1szxt8p/why_cant_we_customize_desktop_and_mobile/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 3: Domain hostage / lock-in */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                A user described repeated difficulty obtaining the authorization code needed for a domain transfer.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">u/alihusain007</strong> · r/squarespace · Apr 7, 2026</span>
                <a href="https://www.reddit.com/r/squarespace/comments/1sha064/squarespace_will_not_send_auth_code_to_transfer/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Discussion 4: outage response */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                A user described a service incident that affected a booking path and dissatisfaction with the support response.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">u/sandywilli</strong> · r/squarespace · Apr 25, 2026</span>
                <a href="https://www.reddit.com/r/squarespace/comments/1sx6skq/503_service_unavailable/oiksgiq/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>
          </div>

          {/* Bridging CTA */}
          <div className="mt-8 p-6 bg-charcoal text-white rounded-2xl text-center">
            <p className="text-lg font-bold mb-2">Use anecdotes to form questions, not conclusions.</p>
            <p className="text-stone-400 text-sm mb-4 max-w-2xl mx-auto">
              A migration assessment should check what the editor will not let you do, how it behaves on every screen, who controls the domain, what you can export, what your uptime depends on, how fast it is now, and any third-party terms. The written proposal, not this page, defines price, timing, support, repository access, licensing, ownership, and remedies.
            </p>
            <a href="/contact#contact-quote-form" className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
              Get your migration plan →
            </a>
          </div>
        </div>
      </section>

      {/* 3. HOW WE MIGRATE - Process Timeline */}
      <section id="how-it-works" className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How We Migrate Your Squarespace Site</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A four-phase planning and delivery path. The proposal defines milestones, continuity controls, responsibilities, and acceptance for the approved site.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Inventory & Export Review", desc: "We inventory pages, posts, media, products, members, forms, scheduling, domains, metadata, and available exports, then record gaps or manual work.", icon: FileSearch, duration: "Phase 1" },
              { step: "02", title: "Design & Content Mapping", desc: "We say what is kept, what is redesigned, what is reshaped and what is dropped, including how it behaves on each screen and what accessibility needs.", icon: PenTool, duration: "Phase 2" },
              { step: "03", title: "Build & Redirect Plan", desc: "We implement the approved scope and prepare a source-to-destination URL map. Redirects reduce migration risk but do not guarantee rankings or traffic.", icon: Wrench, duration: "Phase 3" },
              { step: "04", title: "Cutover & Verification", desc: "We work through the agreed checks: DNS, content, does it work, analytics, accessibility, monitoring, rollback, training and handover.", icon: Rocket, duration: "Phase 4" },
            ].map((item, i) => (
              <FadeIn
                key={i}
                className="flex gap-6 items-start"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-stone-50 border border-cognac/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cognac" />
                  </div>
                  {i < 3 && <div className="w-px h-8 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-stone-600">{item.step}</span>
                    <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-stone-50 border border-stone-200 text-stone-600">{item.duration}</span>
                  </div>
                  <p className="text-stone-600 text-base leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON, Squarespace Killer Card */}
      <section id="comparison" className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-cognac/10 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-100/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl md:rounded-4xl overflow-hidden bg-white border border-stone-200 shadow-[0_24px_80px_rgba(28,25,23,0.08)]">
              <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-0">

                {/* LEFT: The Pain */}
                <div className="p-6 md:p-14 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-50 border border-cognac/25 rounded-full w-fit mb-6">
                    <div className="w-2 h-2 bg-cognac rounded-full" />
                    <span className="text-xs font-bold text-cognac uppercase tracking-wider">Assessment</span>
                  </div>
                  <h2 className="text-2xl md:text-5xl font-bold text-charcoal leading-tight mb-3">
                    Compare the Current Site.
                  </h2>
                  <h3 className="text-3xl md:text-6xl font-bold leading-tight mb-6 md:mb-8">
                    <span className="font-serif font-normal italic text-cognac">
                      Define the migration case.
                    </span>
                  </h3>
                  <p className="text-base md:text-lg text-stone-600 mb-8 leading-relaxed max-w-md">
                    Measure the current implementation, review account and export terms, and compare the effort, risks, and operating responsibilities of staying versus migrating.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      data-cal-namespace="discovery"
                      data-cal-link={process.env.NEXT_PUBLIC_CAL_LINK || undefined}
                      data-cal-config='{"layout":"month_view"}'
                      className="group px-6 py-3 md:px-8 md:py-4 bg-charcoal text-white font-bold text-sm md:text-base rounded-full hover:bg-cognac transition-all flex items-center justify-center gap-2 hover:scale-105"
                    >
                      Get your migration plan <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      data-cal-namespace="discovery"
                      data-cal-link={process.env.NEXT_PUBLIC_CAL_LINK || undefined}
                      data-cal-config='{"layout":"month_view"}'
                      className="px-6 py-3 md:px-8 md:py-4 bg-stone-50 border border-stone-200 text-charcoal font-semibold text-sm md:text-base rounded-full hover:bg-stone-100 transition-all"
                    >
                      Scope Squarespace improvements
                    </button>
                  </div>
                </div>

                {/* RIGHT: Comparison + Savings */}
                <div className="p-6 md:p-10 md:border-l border-stone-200 bg-stone-50/50 overflow-x-hidden">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-stone-200">
                    <h4 className="text-lg font-bold text-charcoal">Current Setup vs Proposed Scope</h4>
                  </div>

                  {/* Column Headers */}
                  <div className="hidden sm:grid sm:grid-cols-[minmax(0,1fr)_96px_96px] md:grid-cols-[minmax(0,1fr)_110px_110px] gap-2 md:gap-3 pb-3 mb-1">
                    <div className="text-[11px] text-stone-600 uppercase tracking-widest font-bold">Metric</div>
                    <div className="text-[11px] text-stone-600 uppercase tracking-widest font-bold text-center">Current</div>
                    <div className="text-[11px] text-cognac uppercase tracking-widest font-bold text-center">Proposal</div>
                  </div>

                  {/* Rows */}
                  <div className="space-y-1">
                    {squarespaceComparison.map((row, i) => (
                      <FadeIn
                        key={i}
                        className="grid grid-cols-2 sm:grid-cols-[minmax(0,1fr)_96px_96px] md:grid-cols-[minmax(0,1fr)_110px_110px] gap-2 md:gap-3 items-stretch sm:items-center p-3 rounded-xl border border-stone-200/70 sm:border-transparent hover:bg-white hover:border-stone-200 transition-all group cursor-default"
                        style={{ transitionDelay: `${i * 60}ms` }}
                      >
                        <div className="col-span-2 sm:col-span-1 flex min-w-0 items-center gap-3">
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center group-hover:bg-stone-50 group-hover:border-stone-200 transition-colors shrink-0">
                            <row.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-stone-600 group-hover:text-cognac transition-colors" />
                          </div>
                          <span className="text-xs md:text-sm text-charcoal font-medium">{row.metric}</span>
                        </div>
                        <div className="min-w-0 text-center">
                          <span className="mb-1 block text-[9px] font-bold uppercase tracking-wider text-stone-500 sm:hidden">Current</span>
                          <span className="flex min-h-8 w-full items-center justify-center rounded-md border border-stone-200 bg-stone-100 px-2 py-1 text-center text-[10px] leading-tight text-stone-700 md:text-xs">{row.bad}</span>
                        </div>
                        <div className="min-w-0 text-center">
                          <span className="mb-1 block text-[9px] font-bold uppercase tracking-wider text-cognac sm:hidden">Proposal</span>
                          <span className="flex min-h-8 w-full items-center justify-center rounded-md border border-cognac/20 bg-cognac/5 px-2 py-1 text-center text-[10px] font-bold leading-tight text-cognac md:text-xs">{row.good}</span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>

                  {/* Commercial-input review card */}
                  <FadeIn
                    delay={6}
                    className="mt-6 p-5 bg-stone-50 border border-cognac/20 rounded-2xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs text-cognac uppercase font-bold tracking-wider">Commercial Inputs to Verify</p>
                      <div className="h-9 w-9 bg-cognac rounded-full flex items-center justify-center text-white">
                        <DollarSign className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      {[
                        { label: "Current subscription and add-ons", amount: "Review" },
                        { label: "Commerce, scheduling, and member fees", amount: "Review" },
                        { label: "Migration implementation scope", amount: "Scope" },
                        { label: "Hosting and connected services", amount: "Estimate" },
                        { label: "Maintenance and support", amount: "Define" },
                        { label: "Content, data, and client inputs", amount: "Confirm" },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <span className="text-stone-600">{row.label}</span>
                          <span className="font-bold text-charcoal tabular-nums">{row.amount}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-stone-200 pt-3 flex items-center justify-between gap-4">
                      <span className="text-xs text-cognac uppercase font-bold tracking-wider">Final Terms</span>
                      <p className="text-2xl font-black text-charcoal">Written proposal</p>
                    </div>
                  </FadeIn>

                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. THE HIDDEN COST OF SQUARESPACE */}
      <section className="py-12 md:py-20 px-6 bg-charcoal">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cognac/15 text-amber-200 border border-cognac/35 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" /> Diagnostic Review
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What to Review Before Migrating</h2>
            <p className="text-stone-300 max-w-2xl mx-auto">
              These are useful areas to test against your requirements; they are not assumed defects or financial-loss estimates:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Gauge, pain: "Performance Baseline", detail: "Measure representative pages across agreed devices, networks, cache states, and consent states. Identify scripts, media, templates, and integrations before setting targets." },
              { icon: Palette, pain: "Design and Accessibility", detail: "Check whether the current component system supports the required brand expression, content hierarchy, responsive states, keyboard use, and accessibility criteria." },
              { icon: DollarSign, pain: "Account and Operating Costs", detail: "Review the actual subscription, commerce, scheduling, member, domain, integration, and maintenance costs, then compare them with a complete migration estimate." },
              { icon: Search, pain: "Search Implementation", detail: "Audit rendering, indexability, canonicals, metadata, content, internal links, redirects, and structured data. Search engines control crawling, indexing, and rankings." },
              { icon: Code2, pain: "Workflow Fit", detail: "Map portals, bookings, forms, commerce, APIs, and editorial workflows to determine what the current platform supports and what a replacement would require." },
              { icon: TrendingUp, pain: "AI Discoverability", detail: "Review crawlability, entity clarity, structured data, content quality, and source credibility. Inclusion and citation by AI systems remain controlled by third parties." },
            ].map((item, i) => (
              <FadeIn
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cognac/60 hover:bg-white/[0.07] transition-colors group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cognac/15 text-amber-200 border border-cognac/25 shrink-0 group-hover:bg-cognac/25 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.pain}</h3>
                    <p className="text-stone-300 leading-relaxed text-sm">{item.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE SOLUTION - WHAT YOU GET */}
      <section className="py-12 md:py-20 px-6 bg-stone-900 border-t border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-stone-300 font-bold tracking-widest uppercase text-sm">The Smarter Path</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">Choose the Architecture That Fits.</h2>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              A custom implementation can provide different design, integration, and deployment controls. The proposal defines measurable targets, recurring services, support, repository access, licensing, IP, and handover.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: "Scoped Design System", desc: "Define the components, responsive behavior, content states, and accessibility checks needed for the approved experience." },
              { icon: Search, title: "Search-Ready Implementation", desc: "Implement the agreed rendering, metadata, internal linking, structured-data, and performance controls without promising rankings or citations." },
              { icon: Lock, title: "Clear Access and Rights", desc: "Record repository access, third-party licenses, IP transfer, deployment responsibilities, recurring services, and handover in the accepted proposal." },
            ].map((item, i) => (
              <FadeIn
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cognac/50 hover:bg-white/[0.07] transition-colors"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-cognac/15 text-amber-200 border border-cognac/25 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Migration scoping note */}
      <section className="py-10 md:py-16 px-6 bg-paper">
        <div className="container mx-auto max-w-3xl">
          <div className="p-6 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-xs flex gap-5 items-start">
            <div className="w-14 h-14 rounded-full bg-cognac/10 border border-cognac/20 flex items-center justify-center text-cognac font-bold text-xl shrink-0" aria-hidden="true">S</div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-3">Migration scoping note</p>
              <p className="text-lg md:text-xl text-charcoal leading-relaxed font-medium mb-3">
                Review Squarespace migrations at the component and workflow level. Inventory Fluid Engine layouts, Commerce products, scheduling, member areas, exports, and integrations before committing to a build or cutover plan.
              </p>
              <p className="text-sm text-stone-600">Project staffing, delivery roles, and responsibilities are confirmed in the written proposal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LSI entity paragraph for Squarespace-specific topical authority */}
      <section className="py-8 md:py-12 px-6 bg-white border-t border-stone-200">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-stone-600 leading-relaxed">
            A Squarespace 7.1 assessment can cover Fluid Engine layouts, Commerce products, payments, Acuity or Squarespace Scheduling, Member Areas, scripts, domains, DNS, blog content, metadata, and redirects. Export availability and replacement feasibility vary by account and feature. Performance and interaction behavior are measured before and after under the same documented conditions. For the factors that shape a proposal, read our <Link href="/blog/squarespace-migration-cost" className="text-cognac hover:underline font-medium">Squarespace migration scoping guide</Link>.
          </p>
        </div>
      </section>

      {/* Scope and evidence framework */}
      <PartnerPromise />

      {/* SIGNATURE BLOCK: Template Ceiling Pairs (unique to Squarespace) */}
      <section id="template-ceiling" className="py-12 md:py-20 px-6 bg-paper">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-50 border border-stone-200 text-xs font-bold uppercase tracking-widest text-cognac mb-4">
              <Layout className="w-3.5 h-3.5" /> The Template Ceiling
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Match each observed constraint to a <span className="font-serif font-normal italic text-cognac">scoped response.</span>
            </h2>
            <p data-speakable="true" className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Platform behavior can vary by plan, template, account, extensions, and current product changes. Each pair below is a review question and a possible implementation direction, not a universal limitation or promised outcome.
            </p>
          </div>

          <div className="space-y-10 md:space-y-12">
            {[
              { icon: Layout, ceiling: "Review whether the current template supports the required structure", liberation: "Scope components and layouts around the approved content and user flows." },
              { icon: Code2, ceiling: "Review supported code injection, extensions, APIs, and exports", liberation: "Define source access, routes, integrations, repository access, and licensing in writing." },
              { icon: FileSearch, ceiling: "Audit control over semantic markup and structured data", liberation: "Implement agreed HTML and schema, then validate output without promising search or AI visibility." },
              { icon: Gauge, ceiling: "Measure the current script, media, and interaction baseline", liberation: "Set project-specific budgets and verify them under documented test conditions." },
              { icon: Palette, ceiling: "Test the current grid across required responsive states", liberation: "Define the target design system and accessibility acceptance checks." },
            ].map((pair, i) => (
              <FadeIn key={i} style={{ transitionDelay: `${i * 70}ms` }} className="relative">
                {/* Constraint tile (muted, top) */}
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 md:p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-200/70 border border-stone-200 flex items-center justify-center shrink-0">
                    <pair.icon className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest font-bold text-stone-600 mb-1 flex items-center gap-1.5">
                      <Lock className="w-3 h-3" /> Current-state question
                    </p>
                    <p className="text-charcoal font-semibold leading-snug">{pair.ceiling}</p>
                  </div>
                </div>

                {/* Connector */}
                <div className="flex justify-center -my-3 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-cognac text-white flex items-center justify-center shadow-md shadow-cognac/20">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Liberation tile (accent, bottom) */}
                <div className="rounded-2xl border border-cognac/30 bg-white p-5 md:p-6 flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-cognac/10 border border-cognac/20 flex items-center justify-center shrink-0">
                    <Unlock className="w-5 h-5 text-cognac" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest font-bold text-cognac mb-1 flex items-center gap-1.5">
                      <Unlock className="w-3 h-3" /> Possible scoped response
                    </p>
                    <p className="text-charcoal leading-snug">{pair.liberation}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <PricingTiers
        heading="Choose a migration planning path."
        headingAccent="Confirm commitments after discovery."
        agencyComparison={{
          agencyPrice: "Not assessed",
          agencyNote: "Compare equivalent content, commerce, integration, and support scope.",
          ourPrice: "Scoped proposal",
          ourNote: "Price, timing, services, access, and rights follow discovery.",
        }}
        tiers={[
          {
            tier: "Starter",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "A focused brochure or portfolio migration with validated inputs.",
            includes: [
              "Page and content inventory",
              "Design and redirect requirements",
              "Written acceptance and handover terms",
            ],
            cta: "Get your migration plan",
          },
          {
            tier: "Growth",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "A business site with broader content, forms, or commerce requirements.",
            includes: [
              "Content and integration mapping",
              "Consent-aware analytics requirements",
              "Written support and change process",
            ],
            featured: true,
          },
          {
            tier: "Scale",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "Commerce, scheduling, member, data, or complex integration requirements.",
            includes: [
              "Export and data-risk assessment",
              "Cutover, rollback, and verification plan",
              "Written licensing, access, and handover terms",
            ],
          },
        ]}
      />

      {/* 7. DUAL CTA */}
      <section className="py-12 md:py-20 px-6 bg-paper border-y border-stone-200">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-16 text-charcoal">Choose Your Future</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Option A: The "safe" choice (de-emphasized) */}
            <div className="p-8 rounded-2xl border border-stone-200 bg-white shadow-[0_16px_45px_rgba(28,25,23,0.05)]">
              <h3 className="text-lg font-bold text-stone-500 uppercase tracking-widest mb-2">Option A</h3>
              <h4 className="text-2xl font-bold text-charcoal mb-4">Optimization Only</h4>
              <p className="text-stone-600 mb-8 text-sm">Audit the current site and scope improvements that are feasible within the account, template, extension, and editor constraints.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-stone-700 text-sm"><CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> Measured optimization opportunities</li>
                <li className="flex items-center gap-2 text-stone-700 text-sm"><CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> Image compression</li>
                <li className="flex items-center gap-2 text-stone-500 text-sm"><XCircle className="w-4 h-4 text-stone-600 shrink-0" /> Current subscriptions and add-ons remain</li>
                <li className="flex items-center gap-2 text-stone-500 text-sm"><XCircle className="w-4 h-4 text-stone-600 shrink-0" /> Platform constraints still apply</li>
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"optimize_existing_site",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full py-3 rounded-xl border border-cognac/30 text-cognac font-bold hover:bg-cognac hover:text-white transition-colors">
                Scope Squarespace improvements
              </button>
            </div>

            {/* Option B: The winner (elevated) */}
            <div className="relative p-10 rounded-3xl border-2 border-charcoal bg-white shadow-2xl md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap">
                Recommended
              </div>
              <h3 className="text-lg font-bold text-cognac uppercase tracking-widest mb-2">Option B</h3>
              <h4 className="text-3xl font-bold text-charcoal mb-4">Full Migration to Next.js</h4>
              <p className="text-stone-600 mb-8">Scope a replacement implementation with explicit measurements, dependencies, recurring services, access, licensing, support, and handover terms.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-charcoal font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> Documented performance baseline and budgets</li>
                <li className="flex items-center gap-3 text-charcoal font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> URL mapping and migration checks</li>
                <li className="flex items-center gap-3 text-charcoal font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> Current hosting and service estimate</li>
                <li className="flex items-center gap-3 text-charcoal font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> Written repository and rights terms</li>
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"get_migration_plan",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full py-4 rounded-xl bg-charcoal text-white font-bold hover:bg-cognac transition-all shadow-lg flex items-center justify-center gap-2">
                Get your migration plan <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-cognac" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Common Questions</h2>
          </div>
          <p className="text-stone-600 text-center mb-12">Everything you need to know about migrating from Squarespace.</p>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              const buttonId = `squarespace-faq-button-${i}`;
              const panelId = `squarespace-faq-panel-${i}`;

              return (
                <FadeIn key={faq.q} style={{ transitionDelay: `${i * 50}ms` }}>
                  <div className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50/50">
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
                          <span aria-hidden="true" className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-50 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
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
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. WRITTEN MIGRATION TERMS */}
      <section className="py-10 md:py-14 px-6 bg-white border-t border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-stone-50 border border-cognac/25 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left shadow-[0_18px_50px_rgba(28,25,23,0.05)]">
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-full bg-cognac/10 border border-cognac/20 flex items-center justify-center text-cognac">
                <ShieldCheck className="w-10 h-10" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 tracking-tight">Define the migration <span className="font-serif font-normal italic text-cognac">and acceptance method.</span></h3>
              <p className="text-stone-700 leading-relaxed mb-6">
                The accepted proposal states the page set, test conditions, redirect checks, content responsibilities, accessibility criteria, support, access, licensing, ownership, handover, and any remedies. This page does not create a performance or refund promise.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-xs font-bold text-cognac uppercase tracking-wider mb-6">
                <span>• Written Scope</span>
                <span>• Defined Acceptance</span>
                <span>• Recorded Responsibilities</span>
              </div>
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
        </div>
      </section>

      {/* Further Reading: blog cluster links that close the pillar-to-supporting-content loop */}
      <section className="py-10 px-6 bg-white border-t border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">Further reading</p>
          <ul className="space-y-2 text-stone-700">
            <li>&rarr; <Link href="/blog/squarespace-migration-cost" className="text-charcoal hover:text-cognac underline underline-offset-2">Squarespace migration scoping and cost inputs</Link></li>
            <li>&rarr; <Link href="/blog/squarespace-vs-custom-website" className="text-charcoal hover:text-cognac underline underline-offset-2">Squarespace vs custom website: the honest comparison</Link></li>
            <li>&rarr; <Link href="/blog/is-squarespace-bad-for-seo" className="text-charcoal hover:text-cognac underline underline-offset-2">How to audit Squarespace search implementation</Link></li>
            <li>&rarr; <Link href="/blog/squarespace-too-slow" className="text-charcoal hover:text-cognac underline underline-offset-2">How to diagnose Squarespace performance</Link></li>
          </ul>
        </div>
      </section>

      {/* Related Services, expanded to all platforms via reusable component */}
      <RelatedServicesGrid currentHref="/services/squarespace" />

      <Footer />
    </main>
  );
}
