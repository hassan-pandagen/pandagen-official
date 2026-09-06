"use client";

import FadeIn from "@/components/ui/FadeIn";
import { SEARCH_IMPLEMENTATION_AUDIT, AI_DISCOVERABILITY_AUDIT } from "@/data/assessment-controls";
import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Gauge, Lock, Palette, HelpCircle, FileSearch, Wrench, Rocket, Search, Scale, Unlock } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingTiers from "@/components/services/PricingTiers";
import PartnerPromise from "@/components/services/PartnerPromise";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import { serviceFaqs } from "@/data/service-faqs";

const comparisonData = [
  { feature: "Performance", wix: "Measure representative pages, scripts, media, and apps", custom: "Agree a baseline, budgets, and test conditions", icon: Gauge },
  { feature: "Access & Rights", wix: "Review account, export, domain, and provider terms", custom: "State repository, licensing, IP, and handover terms", icon: Lock },
  { feature: "Operating Cost", wix: "Review the active plan, apps, commerce, and usage", custom: "Estimate hosting, services, maintenance, and usage", icon: DollarSign },
  { feature: "Customization", wix: "Map current editor, Velo, and extension capabilities", custom: "Scope required components and application logic", icon: Palette },
  { feature: "Search Controls", wix: "Audit rendering, metadata, links, and structured data", custom: "Implement agreed controls; outcomes remain third-party controlled", icon: TrendingUp },
];

const faqs = serviceFaqs["wix"];

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-6 animate-fade-in-up">
            <Zap className="w-4 h-4" /> Wix Migration Service
          </div>

          <h1 className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight md:tracking-tighter mb-4 leading-[1.08] md:leading-tight break-words animate-fade-in-up">
            {/* Already reader-facing, but "outgrown its current setup" is abstract.
                Names the specific wall people actually hit on Wix. */}
            The change you need on your Wix site is one Wix will not let you make.{" "}
            <span className="font-serif font-normal italic text-cognac md:block">
              Start with a measured migration assessment.
            </span>
          </h1>

          <p className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto animate-fade-in-up-2">
            Wix is a fine place to start. If your design, your content, your shop, your speed or the tools you connect to have outgrown it, we will show you what a custom build costs next to what you pay now. <span className="text-charcoal font-medium">From $1,500, fixed before we start, no minimum project size, 2 to 4 weeks, and you own the code.</span>
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
              Compare migration options <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-stone-600 mt-4 text-center max-w-xl mx-auto leading-relaxed">Drop your Wix address when you book. We will test your site live on the call and <span className="text-charcoal font-medium">give you a fixed price for the move.</span></p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-xs font-bold uppercase tracking-widest text-stone-600">
            <span>Current-state review</span>
            <span>&bull;</span>
            <span>Migration inventory</span>
            <span>&bull;</span>
            <span>Written scope and acceptance</span>
            <span>&bull;</span>
            <span>Terms in writing</span>
          </div>
        </div>
      </section>

      {/* 2c. Linked community discussions provide anecdotal context only. */}
      <section id="real-voices" className="py-12 md:py-20 px-6 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-charcoal text-white rounded-full mb-4">Linked Community Discussions</div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">Examples of Issues to Investigate</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl">
            These April 2026 posts describe individual experiences and are not representative performance or pricing evidence. Follow the links for context, then verify relevant issues against your own account and current provider documentation.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Quote 1: Lock-in + can't export */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                One user described difficulty exporting site assets and moving away from the platform.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">u/Temporary-Mix8022</strong> · r/WIX · Apr 3, 2026</span>
                <a href="https://www.reddit.com/r/WIX/comments/1scmih1/warning_do_not_use_wix/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 2: Mobile + 3x work */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                The same user reported frustration adapting layouts across breakpoints and languages.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">u/Temporary-Mix8022</strong> · r/WIX · Apr 3, 2026</span>
                <a href="https://www.reddit.com/r/WIX/comments/1scmih1/warning_do_not_use_wix/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 3: $ wasted + vendor lock-in */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                Another user described an iOS loading issue, a support interaction, and additional rebuild work.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">u/jn024</strong> · r/WIX · Apr 3, 2026</span>
                <a href="https://www.reddit.com/r/WIX/comments/1scmih1/warning_do_not_use_wix/oece1a3/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Discussion 4: migration experience */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                A user described moving to a Next.js site while an existing Wix subscription term remained unresolved.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">u/AnshulJ999</strong> · r/WIX · Apr 4, 2026</span>
                <a href="https://www.reddit.com/r/WIX/comments/1sdh7kp/my_experience_with_migrating_away_from_wix_to/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>
          </div>

          {/* Bridging CTA */}
          <div className="mt-8 p-6 bg-charcoal text-white rounded-2xl text-center">
            <p className="text-lg font-bold mb-2">Use anecdotes to form questions, not conclusions.</p>
            <p className="text-stone-400 text-sm mb-4 max-w-2xl mx-auto">
              Before you move, someone should check what Wix will not let you change, what you can actually export, your domains, your apps, how the site behaves on a phone, how fast it is now, and what the account really costs you. Your written quote, not this page, has your price, your dates and what happens if something goes wrong.
            </p>
            <a href="/contact#contact-quote-form" className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
              Get your migration plan <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. HOW WE MIGRATE - Process Timeline */}
      <section id="how-it-works" className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How We Migrate Your Wix Site</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A four-phase planning and delivery path. The proposal defines milestones, continuity controls, responsibilities, and acceptance for the approved site.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Inventory & Export Review", desc: "We list your pages, media, posts, forms, products, bookings, members, domains, metadata, apps and whatever Wix will let you export. Then we write down the gaps and what has to be done by hand.", icon: FileSearch, duration: "Phase 1" },
              { step: "02", title: "Design & Workflow Mapping", desc: "We say what is kept, what is redesigned, what is reshaped and what is dropped. That covers how it behaves on every screen, accessibility, the content and the integrations.", icon: Wrench, duration: "Phase 2" },
              { step: "03", title: "Build & Redirect Plan", desc: "We build the agreed scope and map every old URL to its new home. Redirects cut the risk. They do not guarantee your rankings or your traffic.", icon: Search, duration: "Phase 3" },
              { step: "04", title: "Cutover & Handover", desc: "We follow the agreed DNS, content, functional, analytics, accessibility, monitoring, rollback, training, access, and support checks.", icon: Rocket, duration: "Phase 4" },
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
                    <span className="text-xs font-mono text-gray-600">{item.step}</span>
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

      {/* 4. COMPARISON TABLE */}
      <section id="comparison" className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">Wix vs a Custom Built Site</h2>
          <p className="text-stone-600 text-center mb-12">Compare current constraints with a project-specific architecture and operating model.</p>

          <div className="rounded-2xl border border-stone-200 overflow-hidden bg-white">
            {/* Header for desktop only. On mobile, each row gets inline labels. */}
            <div className="hidden md:grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)_minmax(0,1.1fr)] bg-stone-50 p-4 border-b border-stone-200">
              <div className="text-stone-600 font-medium text-sm">Feature</div>
              <div className="text-stone-600 font-bold text-sm text-center">Wix</div>
              <div className="text-cognac font-bold text-sm text-center">Custom Coded</div>
            </div>

            {comparisonData.map((row, i) => (
              <div
                key={i}
                className={`p-4 sm:p-5 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'} ${i < comparisonData.length - 1 ? 'border-b border-stone-200' : ''} md:grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-center md:gap-4`}
              >
                {/* Feature */}
                <div className="flex items-center gap-2 text-charcoal text-sm font-bold mb-3 md:mb-0 md:font-medium">
                  <row.icon className="w-4 h-4 text-stone-600 shrink-0" />
                  {row.feature}
                </div>
                {/* Wix value */}
                <div className="grid gap-1.5 rounded-xl border border-stone-200 bg-stone-50 p-3 mb-2 md:mb-0 md:block md:rounded-none md:border-0 md:bg-transparent md:p-0 md:text-center">
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-stone-600">Current Wix setup</span>
                  <span className="text-stone-700 text-sm leading-relaxed md:text-center">{row.wix}</span>
                </div>
                {/* Custom value */}
                <div className="grid gap-1.5 rounded-xl border border-cognac/20 bg-cognac/[0.04] p-3 md:block md:rounded-none md:border-0 md:bg-transparent md:p-0 md:text-center">
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-cognac">Custom built</span>
                  <span className="text-charcoal text-sm font-medium leading-relaxed md:text-center">{row.custom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PAIN POINTS */}
      <section className="py-12 md:py-20 px-6 bg-charcoal">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cognac/15 text-amber-200 border border-cognac/30 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" /> Diagnostic Review
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What to Review Across the Wix Stack</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Wix products, plans, and capabilities change. Review the actual editor, Velo code, apps, store, bookings, content, scripts, and account settings in use before recommending optimization or migration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Gauge, pain: "Performance Baseline", detail: "Measure representative pages across agreed devices, networks, cache states, and consent states. Identify scripts, media, apps, and templates before setting targets." },
              { icon: DollarSign, pain: "Account and Operating Costs", detail: "Review the actual plan, apps, commerce, bookings, domains, integrations, support, and maintenance, then compare them with a complete migration estimate." },
              { icon: Code2, pain: "Workflow Fit", detail: "Map checkout, portals, forms, bookings, APIs, and editorial workflows to determine what the current platform supports and what a replacement would require." },
              { icon: Search, pain: "Search Implementation", detail: SEARCH_IMPLEMENTATION_AUDIT },
              { icon: Palette, pain: "Design and Accessibility", detail: "Check whether the current editor and components support the required brand, responsive states, keyboard use, and accessibility criteria." },
              { icon: TrendingUp, pain: "AI Discoverability", detail: AI_DISCOVERABILITY_AUDIT },
            ].map((item, i) => (
              <FadeIn
                key={i}
                className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cognac/50 transition-colors group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cognac/15 text-amber-200 shrink-0 group-hover:bg-cognac/25 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.pain}</h3>
                    <p className="text-stone-600 leading-relaxed text-sm">{item.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UPGRADE PATH */}
      <section className="py-12 md:py-20 px-6 bg-stone-100 border-b border-stone-200">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-cognac font-bold tracking-widest uppercase text-sm">The Smarter Path</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-charcoal">Choose the Architecture That Fits.</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              A custom implementation can provide different design, integration, and deployment controls. The proposal defines measurable targets, recurring services, support, repository access, licensing, IP, and handover.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Gauge, title: "Measured Experience", desc: "Define page-specific performance, responsive, and accessibility acceptance checks under documented conditions." },
              { icon: Lock, title: "Clear Access and Rights", desc: "Record repository access, third-party licenses, IP transfer, deployment responsibilities, and handover in the accepted proposal." },
              { icon: DollarSign, title: "Documented Operating Model", desc: "Estimate hosting and connected services, then state maintenance and support responsibilities for the proposed architecture." },
            ].map((item, i) => (
              <FadeIn
                key={i}
                className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-cognac/30 hover:shadow-md transition-all"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 text-cognac flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Scope and evidence framework */}
      <PartnerPromise />

      {/* SIGNATURE BLOCK: SEO Control Ledger (unique to Wix) */}
      <section id="seo-control-ledger" className="py-12 md:py-20 px-6 bg-paper">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-widest bg-stone-50 border border-stone-200 text-cognac rounded-full mb-4">
              <Scale className="w-4 h-4" /> The SEO Control Ledger
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Review each search control, then define the{" "}
              <span className="font-serif font-normal italic text-cognac">scoped implementation.</span>
            </h2>
            <p data-speakable="true" className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">
              PandaCodeGen moves Wix sites to custom Next.js code you own. From $1,500 for a 5 to 7 page site at a fixed price, from $3,500 with your blog moved and every old link forwarded. No minimum project size and no retainer. Each row below is something we check on your site, because what Wix allows changes by plan and by app.
            </p>
          </div>

          {/* Ledger panel: single bordered panel, centered vertical rule, ruled rows */}
          <div className="rounded-3xl border border-stone-200 bg-white overflow-hidden">
            {/* Ledger headers */}
            <div className="hidden sm:grid sm:grid-cols-2 border-b-2 border-stone-200 bg-stone-50/60">
              <div className="flex items-center gap-2 p-4 md:p-5 border-r border-stone-200">
                <Lock className="w-4 h-4 text-stone-600 shrink-0" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-stone-600">Current-State Question</span>
              </div>
              <div className="flex items-center gap-2 p-4 md:p-5">
                <Unlock className="w-4 h-4 text-cognac shrink-0" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-cognac">Possible Scoped Response</span>
              </div>
            </div>

            {/* Ruled ledger rows, aligned row-for-row across the centered rule */}
            {[
              { locked: "Verify robots.txt and per-route indexing controls", owned: "Define required crawl directives and validate the deployed output" },
              { locked: "Audit supported structured-data fields and custom markup", owned: "Implement and validate agreed JSON-LD without promising eligibility or visibility" },
              { locked: "Inventory URL patterns, slugs, canonicals, and redirects", owned: "Define the target URL map and migration verification process" },
              { locked: "Inspect rendered HTML and client-side dependencies", owned: "Choose a rendering strategy based on content and application requirements" },
              { locked: "Measure Core Web Vitals and identify controllable causes", owned: "Set budgets, test conditions, and third-party exclusions in the specification" },
              { locked: "Review available logs, reports, sitemaps, and crawl signals", owned: "Define observability and search-monitoring responsibilities for the proposed stack" },
            ].map((row, i, arr) => (
              <div
                key={i}
                className={`grid sm:grid-cols-2 ${i < arr.length - 1 ? "border-b border-stone-200" : ""}`}
              >
                <div className="p-4 md:p-5 border-b border-stone-200 sm:border-b-0 sm:border-r">
                  <span className="sm:hidden block mb-2 text-[11px] font-bold uppercase tracking-wider text-stone-500">Current-state question</span>
                  <div className="flex items-start gap-2">
                    <FileSearch className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-600 leading-relaxed">{row.locked}</span>
                  </div>
                </div>
                <div className="p-4 md:p-5 bg-cognac/[0.025] sm:bg-transparent">
                  <span className="sm:hidden block mb-2 text-[11px] font-bold uppercase tracking-wider text-cognac">Possible scoped response</span>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal font-medium leading-relaxed">{row.owned}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom balance line: net SEO control gained */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-5 md:p-6 bg-charcoal text-white border-t-2 border-stone-200">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-stone-300">
                <Scale className="w-4 h-4 text-cognac" /> Net Balance
              </div>
              <p className="text-sm md:text-base text-center sm:text-right text-stone-300">
                Six review areas documented <span className="text-white font-bold">→ final controls, access, and responsibilities follow the approved scope.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <PricingTiers
        heading="Choose a migration planning path."
        headingAccent="Confirm commitments after discovery."
        agencyComparison={{
          agencyPrice: "Not assessed",
          agencyNote: "Compare equivalent content, app, commerce, integration, and support scope.",
          ourPrice: "From $1,500, fixed",
          ourNote: "Price, timing, services, access, and rights follow discovery.",
        }}
        tiers={[
          {
            tier: "Starter",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "A focused brochure or portfolio migration with validated inputs.",
            includes: [
              "A list of every page, post and app you have",
              "Design and redirect requirements",
              "Written acceptance and handover terms",
            ],
            cta: "Get your migration plan",
          },
          {
            tier: "Growth",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "A business site with broader content, forms, or interaction requirements.",
            includes: [
              "Content and integration mapping",
              "Consent-aware analytics requirements",
              "Written support and change process",
            ],
            featured: true,
            cta: "Get your migration plan",
          },
          {
            tier: "Scale",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "Commerce, bookings, localization, data, or complex integration requirements.",
            includes: [
              "Export and data-risk assessment",
              "Launch day plan, and how we switch back if needed",
              "Written licensing, access, and handover terms",
            ],
            cta: "Get your migration plan",
          },
        ]}
      />

      {/* 7. DUAL CTA */}
      <section className="py-12 md:py-20 px-6 bg-stone-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-16 text-charcoal">Choose Your Future</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Option A: The "safe" choice (de-emphasized) */}
            <div className="p-8 rounded-2xl border border-stone-200 bg-white hover:border-cognac/30 transition-colors">
              <h3 className="text-lg font-bold text-stone-500 uppercase tracking-widest mb-2">Option A</h3>
              <h4 className="text-2xl font-bold text-charcoal mb-4">Optimization Only</h4>
              <p className="text-stone-600 mb-8 text-sm">Audit the current site and scope improvements that are feasible within its account, editor, script, app, and template constraints.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-stone-700 text-sm"><CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> Measured optimization opportunities</li>
                <li className="flex items-center gap-2 text-stone-700 text-sm"><CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> Image compression</li>
                <li className="flex items-center gap-2 text-stone-500 text-sm"><XCircle className="w-4 h-4 text-stone-600 shrink-0" /> Current subscriptions and apps remain</li>
                <li className="flex items-center gap-2 text-stone-500 text-sm"><XCircle className="w-4 h-4 text-stone-600 shrink-0" /> Platform constraints still apply</li>
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"scope_wix_improvements",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full py-3 rounded-xl border border-stone-300 text-charcoal font-bold hover:border-cognac hover:text-cognac transition-colors">
                Scope Wix improvements
              </button>
            </div>

            {/* Option B: The winner (elevated) */}
            <div className="relative p-10 rounded-3xl border-2 border-charcoal bg-white shadow-2xl md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap">
                Recommended
              </div>
              <h3 className="text-lg font-bold text-cognac uppercase tracking-widest mb-2">Option B</h3>
              <h4 className="text-3xl font-bold text-charcoal mb-4">Full Migration to Next.js</h4>
              <p className="text-stone-600 mb-8">A custom site from $1,500, fixed price, 2 to 4 weeks, with the code and every account handed to you at the end.</p>
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
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50/50">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-cognac" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Common Questions</h2>
          </div>
          <p className="text-stone-600 text-center mb-12">Everything you need to know about migrating from Wix.</p>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              const buttonId = `wix-faq-button-${i}`;
              const panelId = `wix-faq-panel-${i}`;

              return (
                <FadeIn key={faq.q} style={{ transitionDelay: `${i * 50}ms` }}>
                  <div className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
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
          <div className="bg-stone-100 border border-cognac/25 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-full bg-white border border-cognac/20 flex items-center justify-center text-cognac shadow-sm">
                <ShieldCheck className="w-10 h-10" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 tracking-tight">Define the migration <span className="font-serif font-normal italic text-cognac">and acceptance method.</span></h3>
              <p className="text-stone-700 leading-relaxed mb-6">
                Your written quote lists the pages, the speed test we run, the link forwarding, what you need to give us, what support you get after launch, and who owns what at the end. It is the quote that counts, not this page.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start text-xs font-bold text-cognac uppercase tracking-wider mb-6">
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
            <li>&rarr; <Link href="/blog/wix-migration-cost" className="text-charcoal hover:text-cognac underline underline-offset-2">Wix migration scoping and cost inputs</Link></li>
            <li>&rarr; <Link href="/blog/wix-vs-custom-website" className="text-charcoal hover:text-cognac underline underline-offset-2">Wix vs custom website: the honest comparison</Link></li>
            <li>&rarr; <Link href="/blog/wix-too-slow" className="text-charcoal hover:text-cognac underline underline-offset-2">How to diagnose Wix performance</Link></li>
          </ul>
        </div>
      </section>

      {/* Related Services, expanded to all platforms via reusable component */}
      <RelatedServicesGrid currentHref="/services/wix" />

      <Footer />
    </main>
  );
}
