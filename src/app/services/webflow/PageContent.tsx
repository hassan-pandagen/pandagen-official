"use client";

import { useState } from "react";
import { motion } from "@/components/ui/motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Gauge, Lock, Server, Database, Globe, FileSearch, Wrench, Rocket, HelpCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import PricingTiers from "@/components/services/PricingTiers";
import PartnerPromise from "@/components/services/PartnerPromise";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";

const comparisonData = [
  { feature: "Performance", webflow: "Measure the current pages and scripts", custom: "Agree a baseline, budgets, and test conditions", icon: Gauge },
  { feature: "Access & Rights", webflow: "Review account, export, and hosting terms", custom: "Say who gets the code, which licences apply, who owns the IP, and how it is handed over", icon: Lock },
  { feature: "Operating Cost", webflow: "Check the plan you are on, the seats, the add-ons and what you actually use", custom: "Work out hosting, third-party services, maintenance and usage", icon: DollarSign },
  { feature: "Application Logic", webflow: "Map supported native features and extensions", custom: "Scope the APIs, how people sign in, and what data is involved", icon: Server },
  { feature: "Content Model", webflow: "List the collections, how they relate, which languages, and where Webflow stops you", custom: "Choose a CMS and model against validated requirements", icon: Database },
];

const faqData = [
  {
    q: "Is custom code harder to use than Webflow's visual editor?",
    a: "What editing feels like depends on which CMS you pick, who is allowed to do what, whether they can preview, how publishing flows, and how content is structured. Discovery compares those requirements with Webflow's current editor and records any training, maintenance, or developer dependency in scope.",
  },
  {
    q: "Can you recreate my Webflow animations in code?",
    a: "We can inventory Webflow interactions and evaluate equivalent or revised implementations. Feasibility, accessibility, reduced-motion behavior, browser support, assets, and acceptance criteria are defined for the approved interactions.",
  },
  {
    q: "What about Webflow's CMS?",
    a: "We can map your Webflow collections, fields, references, assets, languages, slugs and publishing flow onto a CMS that fits. Export coverage, provider limits, data cleanup, API access, and migration verification vary by project and provider.",
  },
  {
    q: "How much does it cost to migrate from Webflow?",
    a: "Price and timing depend on how many pages there are, the design system, the interactions, the CMS data, the languages, whether you sell, what it connects to, the redirects, and how you sign it off. The written proposal states the commercial model, milestones, assumptions, support, access, licensing, ownership, and remedies.",
  },
  {
    q: "What if Webflow adds the features I need later?",
    a: "It is possible, and platform capabilities change. The decision should use current Webflow documentation, your actual account and roadmap tolerance, and a like-for-like comparison of implementation and operating responsibilities.",
  },
];

export default function WebflowPageContent() {
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
          <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-8">
            <Zap className="w-4 h-4" /> Webflow Migration Service
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight md:tracking-tighter mb-4 leading-[1.08] md:leading-tight break-words"
          >
            {/* Opened by naming our own service. The reader's situation is a plan
                boundary they cannot move, which is why teams actually leave Webflow. */}
            You have hit a Webflow limit that no plan tier removes.{" "}
            <span className="font-serif font-normal italic text-cognac md:block">
              Preserve the design intent. Reassess the architecture.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            Webflow is a strong visual tool. If what you need from content, interactions, application logic, speed, other languages or day-to-day running has moved on, we can compare the current site with a scoped replacement. <span className="text-charcoal font-medium">What you pay, what support you get, who has access, which licences, who owns it and how it is handed over all get written down after discovery.</span>
          </motion.p>

          <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cal-namespace="discovery"
              data-cal-link={process.env.NEXT_PUBLIC_CAL_LINK || undefined}
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get your migration plan <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#when-to-migrate" className="px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2">
              When to Migrate <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-sm text-stone-600 mt-4 text-center max-w-xl mx-auto leading-relaxed">Drop your Webflow URL when you book. We can run a point-in-time diagnostic, review migration inputs, and <span className="text-charcoal font-medium">identify what is needed for a written proposal.</span></p>
        </div>
      </section>

      {/* 2c. Delivery and evidence controls */}
      <section className="py-12 md:py-16 px-6 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cognac/20 text-orange-300 rounded-full text-xs font-semibold mb-4">
            <Zap className="w-3 h-3" /> Migration decision controls
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Scope first, <span className="font-serif font-normal italic text-orange-300">then commit in writing.</span>
          </h2>
          <p className="text-base text-stone-400 leading-relaxed mb-6">
            Look at what the account costs you today, and at who would run the replacement day to day. Availability incidents should be checked against <a href="https://status.webflow.com" target="_blank" rel="nofollow noopener noreferrer" className="text-orange-300 hover:underline">Webflow&apos;s current status history</a>; a different hosting architecture changes dependencies but does not eliminate outage risk. <Link href="/blog/webflow-true-cost" className="text-orange-300 hover:underline">See the Webflow cost-input guide</Link>.
          </p>
          <p className="text-lg text-stone-300 leading-relaxed mb-6">
            Compare vendors on the same scope: the same pages, design work, CMS, languages, commerce, integrations, testing, support and handover. Not on headline prices or generic benchmarks. The accepted proposal defines the commercial model and project-specific commitments.
          </p>
          <div className="my-8 p-5 bg-white/5 border-l-4 border-cognac rounded-r-xl">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-300 mb-2">Diagnostic discipline</p>
            <p className="text-stone-300 leading-relaxed">
              A diagnostic is a point-in-time technical review, not proof of lost revenue or a guaranteed business result. We document the test context, distinguish observations from hypotheses, and flag when a migration may not be justified.
            </p>
          </div>
          <div className="my-8 p-5 bg-cognac/10 border-l-4 border-cognac rounded-r-xl">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-300 mb-2">Evidence before outcomes</p>
            <p className="text-stone-300 leading-relaxed">
              Public URLs can be inspected as implementation references, but they do not by themselves verify a client relationship, historical performance, revenue, costs, or commercial terms. Outcome claims require dated, client-approved source records and a reproducible method.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cognac-light mb-1">Measured baseline</div>
              <p className="text-sm text-stone-600">Record the page set, tool, device, network, date, and repeated runs.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cognac-light mb-1">Written proposal</div>
              <p className="text-sm text-stone-600">Define scope, assumptions, exclusions, price model, and changes.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cognac-light mb-1">Defined handover</div>
              <p className="text-sm text-stone-600">State support, access, licensing, ownership, and remedies explicitly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHEN TO MIGRATE */}
      <section id="when-to-migrate" className="py-12 md:py-20 px-6 bg-stone-100 border-y border-stone-200">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cognac/10 text-cognac border border-cognac/20 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" /> The Ceiling
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">When to Reassess Webflow</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Not every Webflow site needs to migrate. These signals justify discovery, not a predetermined platform decision:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, signal: "Account Economics Need Review", detail: "Before comparing anything, list what you pay for now: the site plan, workspace seats, languages, the store, apps, bandwidth, support and maintenance." },
              { icon: Server, signal: "Required Logic Relies on Extensions", detail: "Map authentication, payments, databases, real-time data, and third-party tools, then compare supported Webflow paths with a custom architecture." },
              { icon: Database, signal: "Content Model Is Under Pressure", detail: "Review current collection limits, relationships, localization, editorial workflows, exports, and growth assumptions against current provider documentation." },
              { icon: Code2, signal: "Website and Application Needs Are Converging", detail: "Dashboards, portals, role-based access, and live data may require application architecture. Discovery should validate the exact workflows and security requirements." },
              { icon: Lock, signal: "Portability Is Unclear", detail: "Test exports and document domains, assets, CMS data, code, credentials, repository access, licensing, and handover before choosing a migration path." },
              { icon: Globe, signal: "Discoverability Needs Evidence", detail: "Audit crawlability, rendering, entity clarity, structured data, content quality, and source credibility. Search and AI systems control indexing, rankings, and citations." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white border border-stone-200 hover:bg-cognac/5 hover:border-cognac/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-cognac/10 text-cognac w-fit mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-charcoal font-bold text-lg mb-2">{item.signal}</h3>
                <p className="text-stone-400 leading-relaxed text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-stone-600 text-sm leading-relaxed text-center mt-8 max-w-2xl mx-auto">
            Product capabilities and retirement dates can change. If gated content or login flows matter, confirm the current status in Webflow&apos;s official documentation and inventory your implementation before relying on our <Link href="/blog/webflow-user-accounts-sunset-date-2026" className="text-cognac hover:underline underline-offset-2">overview of membership migration questions</Link>.
          </p>
        </div>
      </section>

      {/* Availability dependency review */}
      <section id="uptime" className="py-10 md:py-14 px-6 bg-cognac/5 border-y border-cognac/20">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-cognac text-white rounded-full mb-4">Availability Review</div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Map Hosting and Service Dependencies</h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Review <a href="https://status.webflow.com/history" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Webflow&apos;s current official status history</a> when availability matters to the migration case. Status records are time-sensitive and should be read in their original context.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            An incident does not establish a specific revenue or lead loss without the business&apos;s own traffic, transaction, attribution, and recovery data. Document critical journeys and an evidence method before estimating impact.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Third-party monitors such as <a href="https://isdown.app/status/webflow" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">IsDown</a> may provide additional signals, but their classifications and windows require verification. Use current provider records, your own monitoring, and the agreed service requirements.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            A custom deployment introduces a different set of hosting, DNS, CDN, data, monitoring, and operational dependencies. The architecture and proposal should state responsibilities, recovery controls, support, and acceptance without promising uninterrupted availability.
          </p>
        </div>
      </section>

      {/* 3.5. Linked community discussions provide anecdotal context only. */}
      <section id="real-voices" className="py-12 md:py-20 px-6 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-charcoal text-white rounded-full mb-4">Linked Community Discussions</div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">Examples of Issues to Investigate</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl">
            These posts describe individual experiences and are not representative performance or pricing evidence. Follow the links for context, then verify relevant issues against your own account and current provider documentation.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Discussion 1: agency workflow */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                One agency participant described friction in configuring a simple editing workflow for clients.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">Small agency owner</strong> · r/webflow</span>
                <a href="https://www.reddit.com/r/webflow/comments/1mdhvcx/why_does_webflow_make_hosting_so_expensive_and/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Discussion 2: workspace economics */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                A participant questioned the workspace economics for small client sites with limited editing needs.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">Quick_Custard5288</strong> · r/webflow agency owner</span>
                <a href="https://www.reddit.com/r/webflow/comments/1mdhvcx/why_does_webflow_make_hosting_so_expensive_and/n6872kw/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Discussion 3: hosting economics */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                One community participant described a hosting-cost concern for a high-bandwidth site; verify the original context and current pricing.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">memetican</strong> · Webflow community participant</span>
                <a href="https://www.reddit.com/r/webflow/comments/1mdhvcx/why_does_webflow_make_hosting_so_expensive_and/n63wfd3/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Discussion 4: agency service model */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                The same participant contrasted Webflow&apos;s design capabilities with the economics of an all-in-one agency service.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">Quick_Custard5288</strong> · r/webflow</span>
                <a href="https://www.reddit.com/r/webflow/comments/1mdhvcx/why_does_webflow_make_hosting_so_expensive_and/n6872kw/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>
          </div>

          {/* Bridging CTA */}
          <div className="mt-8 p-6 bg-charcoal text-white rounded-2xl text-center">
            <p className="text-lg font-bold mb-2">Use anecdotes to form questions, not conclusions.</p>
            <p className="text-stone-400 text-sm mb-4 max-w-2xl mx-auto">
              A migration assessment should verify editor workflows, CMS exports, interactions, localization, ecommerce, account costs, performance, and third-party terms. Any white-label arrangement, price, timing, support, confidentiality, access, ownership, or remedy belongs in the written proposal.
            </p>
            <a href="/contact#contact-quote-form" className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-800 transition-all">
              Get your migration plan →
            </a>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section id="comparison" className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">Webflow vs Custom Coded</h2>
          <p className="text-stone-600 text-center mb-12">Compare current constraints with a project-specific architecture and operating model.</p>

          <div className="rounded-2xl border border-stone-200 overflow-hidden bg-white">
            {/* Header for desktop only. On mobile, each row gets inline labels. */}
            <div className="hidden md:grid md:grid-cols-3 bg-stone-50 p-4 border-b border-stone-200">
              <div className="text-stone-600 font-medium text-sm">Feature</div>
              <div className="text-stone-600 font-bold text-sm text-center">Webflow</div>
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
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-stone-600">Webflow</span>
                  <span className="text-stone-700 text-sm md:text-center">{row.webflow}</span>
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

      {/* 5. HOW WE MIGRATE */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How We Migrate Your Webflow Site</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A four-phase planning and delivery path. The proposal identifies included interactions, content, dependencies, milestones, and acceptance checks.</p>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-stone-200 -z-10" />
            {[
              { step: "01", title: "Webflow Inventory", desc: "We review structure, pages, components, interactions, collections, assets, forms, domains, localization, ecommerce, and integrations.", duration: "Phase 1" },
              { step: "02", title: "Architecture & Design Mapping", desc: "We define what is retained, redesigned, rebuilt, transformed, or excluded, including content, responsive states, accessibility, and technical dependencies.", duration: "Phase 2" },
              { step: "03", title: "Implementation & Data Validation", desc: "We build the approved scope in reviewable increments and verify migrated content and integrations against agreed samples and checks.", duration: "Phase 3" },
              { step: "04", title: "Cutover & Handover", desc: "We follow the agreed deployment, DNS, redirect, analytics, monitoring, rollback, access, licensing, documentation, and support plan.", duration: "Phase 4" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs hover:border-cognac/30 hover:shadow-md transition-all"
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

      {/* 6. WHAT YOU GET */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-cognac/20 text-sm text-cognac mb-6">
            <Code2 className="w-4 h-4" /> What You Get
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Define What the Replacement Must Do.
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            A custom implementation can provide different application, content, and deployment controls. The proposal defines measurable targets, recurring services, support, repository access, licensing, IP, and handover.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Gauge, title: "Measured Experience", desc: "Define visual, responsive, accessibility, and performance acceptance checks for representative pages and interactions." },
              { icon: Server, title: "Scoped Application Logic", desc: "Assess authentication, payments, data, and API integrations against security, provider, and operational requirements." },
              { icon: DollarSign, title: "Documented Operating Model", desc: "Estimate hosting and connected services, then state maintenance, support, repository access, licensing, and handover responsibilities." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-cognac/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center mb-4 group-hover:bg-stone-100 transition-colors">
                  <item.icon className="w-6 h-6 text-cognac" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-stone-600 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope and evidence framework */}
      <PartnerPromise />

      {/* PRICING TIERS: an initial offer with an agency comparison */}
      <PricingTiers
        heading="Choose a migration planning path."
        headingAccent="Confirm commitments after discovery."
        agencyComparison={{
          agencyPrice: "Not assessed",
          agencyNote: "Compare equivalent design, content, interaction, integration, and support scope.",
          ourPrice: "Scoped proposal",
          ourNote: "Price, timing, services, access, and rights follow discovery.",
        }}
        tiers={[
          {
            tier: "Starter",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "A focused marketing-site migration with validated inputs.",
            includes: [
              "Page, component, and content inventory",
              "Design and redirect requirements",
              "Written acceptance and handover terms",
            ],
            cta: "Get your migration plan",
          },
          {
            tier: "Growth",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "A business site with broader interactions and content-model requirements.",
            includes: [
              "Interaction and CMS mapping",
              "Consent-aware analytics requirements",
              "Written support and change process",
            ],
            featured: true,
          },
          {
            tier: "Scale",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "Localization, ecommerce, data, or complex application requirements.",
            includes: [
              "Export and data-risk assessment",
              "Cutover, rollback, and verification plan",
              "Written licensing, access, and handover terms",
            ],
          },
        ]}
      />

      {/* 7. DUAL CTA */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-8 md:mb-12">Improve the current system, or plan the migration.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Webflow Optimization */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-charcoal/30 transition-colors">
              <div className="text-stone-600 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Webflow Optimization</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Not ready to leave Webflow? We can audit the current site and scope feasible improvements within its account, editor, script, content, and integration constraints.
              </p>
              <ul className="space-y-3 mb-8">
                {["Performance optimization", "SEO improvements", "CMS restructuring", "Interaction refinements"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"optimize_my_webflow",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all">
                Scope Webflow improvements
              </button>
            </div>

            {/* Migrate to Custom Code */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-charcoal/20 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-stone-100 text-cognac text-xs font-bold rounded-full">Recommended</div>
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Migrate to Custom Code</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Scope a replacement implementation around the required design system, content model, application logic, performance method, and operating responsibilities.
              </p>
              <ul className="space-y-3 mb-8">
                {["Documented performance budgets", "Scoped server-side requirements", "Validated content model", "Written repository and rights terms", "Current hosting and service estimate", "Written support and remedies"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"get_migration_quote",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all">
                Get your migration plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
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
              const buttonId = `webflow-faq-button-${i}`;
              const panelId = `webflow-faq-panel-${i}`;

              return (
                <div key={faq.q} className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50/50">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. WRITTEN MIGRATION TERMS */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl bg-linear-to-br from-stone-50 to-white border border-cognac/30 rounded-[3rem] p-12 relative overflow-hidden shadow-xl shadow-stone-300/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cognac/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cognac/10 text-cognac border border-cognac/20 text-xs font-bold uppercase tracking-[0.22em] mb-6">
              <ShieldCheck className="w-4 h-4" /> Written Migration Terms
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight leading-tight">
              Define the migration <span className="font-serif font-normal italic text-cognac">and acceptance method.</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              The accepted proposal states the page set, test conditions, redirect and data checks, client responsibilities, accessibility criteria, support, access, licensing, ownership, handover, and any remedies. This page does not create a performance or refund promise.
            </p>
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

      {/* Further Reading: blog cluster links */}
      <section className="py-10 px-6 bg-white border-t border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">Further reading</p>
          <ul className="space-y-2 text-stone-700">
            <li>&rarr; <Link href="/blog/webflow-migration-cost" className="text-charcoal hover:text-cognac underline underline-offset-2">Webflow migration scoping and cost inputs</Link></li>
            <li>&rarr; <Link href="/blog/webflow-true-cost" className="text-charcoal hover:text-cognac underline underline-offset-2">How to review Webflow&apos;s total operating cost</Link></li>
            <li>&rarr; <Link href="/blog/leaving-webflow-2026" className="text-charcoal hover:text-cognac underline underline-offset-2">Leaving Webflow in 2026: what actually happened</Link></li>
            <li>&rarr; <Link href="/blog/webflow-vs-custom-website" className="text-charcoal hover:text-cognac underline underline-offset-2">Webflow vs custom website 2026 comparison</Link></li>
          </ul>
        </div>
      </section>

      {/* Related Services, expanded to all platforms via reusable component */}
      <RelatedServicesGrid currentHref="/services/webflow" />

      <Footer />
    </main>
  );
}
