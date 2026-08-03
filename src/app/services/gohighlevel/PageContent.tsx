"use client";

import { motion } from "@/components/ui/motion";
import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Gauge, Lock, Palette, Users, BarChart3, HelpCircle, FileSearch, Wrench, Rocket, Cable, Database, Workflow, CalendarClock, MessageSquare, Webhook } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingTiers from "@/components/services/PricingTiers";
import PartnerPromise from "@/components/services/PartnerPromise";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

const comparisonData = [
  { feature: "Performance Review", ghl: "Measure the current pages with a defined device, network, and test run", custom: "Set a baseline, budget, and acceptance method for the approved frontend", icon: Gauge },
  { feature: "Access & Rights", ghl: "Account, export, and licensing rights follow GHL's current terms", custom: "Who gets the code, which licences apply, who owns the IP and how it is handed over all follow the proposal", icon: Lock },
  { feature: "Operating Cost", ghl: "Check the plan you are on, the add-ons, what messaging costs and what you get charged for usage", custom: "Work out hosting, third-party services, maintenance and usage for the design being proposed", icon: DollarSign },
  { feature: "Design System", ghl: "Uses the platform's supported builder and components", custom: "Design flexibility depends on the approved scope and accessibility requirements", icon: Palette },
  { feature: "Search Readiness", ghl: "Check what actually renders, the metadata, the content, the links and the structured data", custom: "We implement the controls we agreed. Whether you show up in search is still Google’s call, not ours", icon: TrendingUp },
];

const faqs = [
  {
    q: "Will my GHL automations break during migration?",
    a: "First we list the forms, triggers, pipelines, webhooks and account settings that matter. A parallel build and staged cutover can reduce risk, but continuity depends on GHL's APIs, account configuration, third-party services, and the acceptance checks documented for the project."
  },
  {
    q: "Do I need to cancel GHL?",
    a: "Not necessarily. One path keeps GHL for CRM and connects a separate frontend; another scopes replacement workflows. Discovery determines feasibility, migration risk, and the responsibilities of each system."
  },
  {
    q: "How much does a custom site with GHL integration cost?",
    a: "Price and timing depend on page inventory, design, API access, forms, calendars, workflows, sub-accounts, data, and testing needs. The written proposal states scope, dependencies, commercial terms, support, access, ownership, and the cutover plan."
  },
  {
    q: "Can you build custom landing pages that work with GHL?",
    a: "We can scope landing pages that submit to supported GHL endpoints or webhooks. Performance, data flow, attribution, and error handling are tested against agreed conditions; advertising scores and lead costs are controlled by third parties and are not guaranteed."
  },
  {
    q: "What if I want to leave GHL later?",
    a: "A future replacement can be considered when the initial architecture defines clear integration boundaries. Feasibility still depends on the workflows, data access, exports, provider terms, and a separately approved migration scope."
  },
];

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
            <Zap className="w-4 h-4" /> GoHighLevel Website and CRM Integration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight md:tracking-tighter mb-4 leading-[1.08] md:leading-tight break-words"
          >
            Keep the useful GHL workflows. Review the frontend.{" "}
            <span className="font-serif font-normal italic text-cognac md:block">
              Start with an inventory, baseline, and integration plan.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            data-speakable="true"
            className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            Share your GHL URL and the workflows the public site must support. We can inspect the current implementation, identify integration dependencies, and propose a measured frontend path without promising search, advertising, or lead outcomes.
          </motion.p>

          <div className="mb-8 inline-flex flex-wrap items-center gap-3 justify-center px-5 py-3 rounded-full bg-white border border-stone-200 text-sm">
            <span className="font-bold text-charcoal">Review path:</span>
            <span className="text-stone-600">Current-state inventory</span>
            <span className="text-stone-300">|</span>
            <span className="text-cognac font-bold">Point-in-time tests</span>
            <span className="text-stone-300">|</span>
            <span className="text-stone-600">Written integration scope</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cal-namespace="discovery"
              data-cal-link={process.env.NEXT_PUBLIC_CAL_LINK || undefined}
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get your migration plan <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#how-it-works" className="px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2">
              See How It Works <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-sm text-stone-600 mt-4 text-center max-w-xl mx-auto leading-relaxed">Drop your GHL site URL when you book. We can run a point-in-time diagnostic and <span className="text-charcoal font-medium">identify the inputs needed for a written proposal.</span></p>
        </div>
      </section>

      {/* 2a. GHL IS GREAT FOR CRM */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 text-center">Assess GHL as a CRM and Website Stack</h2>
          <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">GoHighLevel handles CRM, automation and public pages perfectly well. What the right setup looks like depends on your account, your content, what it connects to, what the design has to do, and the frontend numbers you actually measure.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Common GHL uses */}
            <div className="p-6 rounded-2xl bg-white border border-stone-300">
              <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-cognac" /> Common GHL Uses</h3>
              <ul className="space-y-3">
                {["CRM & pipeline management", "Email & SMS automations", "Appointment booking", "Reputation management", "Client communication"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Frontend review areas */}
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-cognac/30">
              <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2"><XCircle className="w-5 h-5 text-cognac" /> Frontend Review Areas</h3>
              <ul className="space-y-3">
                {["Measured loading and interaction behavior", "Design-system and component constraints", "Rendering, metadata, links, and structured data", "Supported customization paths", "Responsive and accessibility testing"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <XCircle className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2c. Delivery and evidence controls */}
      <section className="py-12 md:py-16 px-6 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cognac/20 text-orange-300 rounded-full text-xs font-semibold mb-4">
            <Zap className="w-3 h-3" /> Integration decision controls
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Scope first, <span className="font-serif font-normal italic text-cognac">then commit in writing.</span>
          </h2>
          <p className="text-base text-stone-400 leading-relaxed mb-6">
            A hybrid architecture can place a custom public frontend in front of supported GHL CRM workflows. Discovery verifies API access, forms, calendars, attribution, account configuration, and the current measured baseline.
          </p>
          <p className="text-lg text-stone-300 leading-relaxed mb-6">
            Projects are compared on like-for-like deliverables, dependencies, test methods, support, and handover, not headline prices or generic agency benchmarks. The accepted proposal defines the commercial model and project-specific commitments.
          </p>
          <div className="my-8 p-5 bg-white/5 border-l-4 border-cognac rounded-r-xl">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-300 mb-2">Diagnostic discipline</p>
            <p className="text-stone-300 leading-relaxed">
              A diagnostic is a point-in-time technical review, not proof of lost revenue or a guaranteed business result. We document the test context, distinguish observations from hypotheses, and flag when a frontend replacement may not be justified.
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
              <div className="text-2xl font-bold text-cognac mb-1">Measured baseline</div>
              <p className="text-sm text-stone-600">Record the tool, device, network, date, runs, and page set.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cognac mb-1">Written proposal</div>
              <p className="text-sm text-stone-600">Define scope, assumptions, exclusions, price model, and changes.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cognac mb-1">Defined handover</div>
              <p className="text-sm text-stone-600">State support, access, licensing, ownership, and remedies explicitly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS - Process Timeline */}
      <section id="how-it-works" className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How GoHighLevel Custom Website Integration Works</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A four-phase review and implementation path. Continuity controls and acceptance checks are defined for the approved account and integrations.</p>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-stone-200 -z-10" />
            {[
              { step: "01", title: "GHL Inventory", desc: "We map the in-scope funnels, workflows, pipelines, sub-accounts, locations, forms, calendars, snapshots, custom values, and webhooks.", duration: "Phase 1" },
              { step: "02", title: "API Architecture", desc: "We document supported endpoints, authentication, field mapping, error handling, data responsibilities, and third-party dependencies.", duration: "Phase 2" },
              { step: "03", title: "Frontend Implementation", desc: "We build the approved pages and integrations in reviewable increments, then test data flow against the agreed fixtures and account configuration.", duration: "Phase 3" },
              { step: "04", title: "Cutover & Verification", desc: "The launch plan defines monitoring, rollback, acceptance, client verification, and any post-launch support included in the proposal.", duration: "Phase 4" },
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cognac/20 text-orange-300 border border-cognac/30 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" /> Diagnostic Review
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What to Inspect in a GHL Frontend</h2>
            <p className="text-stone-300 max-w-2xl mx-auto">
              Performance and conversion issues require measurement. These are useful review areas, not assumed defects or revenue-loss calculations:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, pain: "Page Experience", detail: "Measure loading, interaction, and layout behavior across representative pages, devices, networks, and consent states before identifying causes or setting targets." },
              { icon: XCircle, pain: "Search Implementation", detail: "Inspect rendering, indexability, canonicals, metadata, internal links, content quality, and structured data. Search engines control crawling, indexing, and rankings." },
              { icon: DollarSign, pain: "Current Account Economics", detail: "Review the active GHL plan, add-ons, messaging, domains, connected services, and actual usage. Do not infer savings from public list prices alone." },
              { icon: Palette, pain: "Design and Accessibility", detail: "Test whether the current component system supports the brand, content hierarchy, keyboard use, responsive behavior, and accessibility requirements." },
              { icon: Lock, pain: "Operational Concentration", detail: "Map which lead, booking, website, and communication workflows depend on each provider, then define monitoring, fallback, and recovery responsibilities." },
              { icon: BarChart3, pain: "Attribution and Data Flow", detail: "Verify consent, event definitions, form delivery, deduplication, source capture, and CRM field mapping before drawing conclusions about campaign or conversion performance." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cognac/40 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-cognac/20 text-orange-300 w-fit mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.pain}</h3>
                <p className="text-stone-300 leading-relaxed text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section id="comparison" className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">GHL Funnels vs Custom Coded</h2>
          <p className="text-stone-600 text-center mb-12">Keep GHL for CRM. Upgrade your website and funnels.</p>

          <div className="rounded-2xl border border-stone-200 overflow-hidden bg-white">
            {/* Header for desktop only. On mobile, each row gets inline labels. */}
            <div className="hidden md:grid md:grid-cols-3 bg-stone-50 p-4 border-b border-stone-200">
              <div className="text-stone-600 font-medium text-sm">Feature</div>
              <div className="text-cognac font-bold text-sm text-center">GHL Funnels</div>
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
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-stone-600">GHL</span>
                  <span className="text-stone-700 text-sm md:text-center">{row.ghl}</span>
                </div>
                <div className="flex items-center justify-between gap-3 md:justify-center md:text-center">
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-cognac">Custom</span>
                  <span className="text-cognac text-sm font-medium md:text-center">{row.custom}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="mt-8 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <p className="text-sm text-stone-600 text-center">
              <strong>Note:</strong> This page does not assume GHL should be removed. Discovery compares keeping the current frontend, using a separate frontend, or replacing selected workflows. API compatibility, portability, recurring services, repository access, licensing, and IP terms must be verified and written into scope.
            </p>
          </div>
        </div>
      </section>

      {/* 6. SOLUTION CARDS */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-cognac/20 text-sm text-cognac mb-6">
            <Code2 className="w-4 h-4" /> Best of Both Worlds
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Two Ways to Win with GHL + Custom Code
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            One path connects a separate frontend to supported GHL APIs; another evaluates replacing selected CRM workflows. <span className="text-charcoal font-medium">Feasibility, continuity checks, repository access, licensing, IP, and handover depend on the approved scope.</span>
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Gauge, title: "Measured Frontend Work", desc: "Set a reproducible baseline and page-specific budgets, then verify the implementation under the agreed test conditions." },
              { icon: Users, title: "Documented GHL Integration", desc: "Map supported forms, bookings, webhooks, fields, and error paths, with test cases for the approved account configuration." },
              { icon: BarChart3, title: "Search-Ready Foundations", desc: "Implement the agreed technical and content controls while recognizing that crawling, indexing, visibility, and leads remain third-party and market controlled." },
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

      {/* SIGNATURE BLOCK: Keep/Replace Architecture Split (unique to GoHighLevel) */}
      <section id="keep-replace-architecture" className="py-12 md:py-20 px-6 bg-charcoal">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cognac mb-6">
              <Cable className="w-4 h-4" /> The Architecture
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Keep the engine. <span className="font-serif font-normal italic text-cognac">Replace the bodywork.</span>
            </h2>
            <p data-speakable="true" className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
              The architecture can separate a public frontend from selected GHL CRM workflows. Discovery determines which systems remain, which interfaces change, and how data flow, cutover, rollback, access, and acceptance will be verified.
            </p>
          </div>

          {/* Split: KEEP | bridge | REPLACE. Stacks on mobile with bridge between. */}
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-stretch">
            {/* LEFT: KEEP */}
            <div className="rounded-3xl border border-cognac/30 bg-white/5 p-6 md:p-8 md:rounded-r-none">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-5 h-5 text-cognac" />
                <span className="text-xs font-bold uppercase tracking-widest text-cognac">Keep: GHL Backend</span>
              </div>
              <p className="text-sm text-stone-600 mb-6">Candidate systems to retain, subject to account and integration review.</p>
              <ul className="space-y-3">
                {[
                  { icon: Database, label: "CRM, contacts & opportunities" },
                  { icon: BarChart3, label: "Pipelines & deal stages" },
                  { icon: Workflow, label: "Automations & Workflows" },
                  { icon: CalendarClock, label: "Calendars & booking widgets" },
                  { icon: MessageSquare, label: "SMS & email sequences" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <item.icon className="w-5 h-5 text-cognac shrink-0" />
                    <span className="text-sm text-stone-300">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTER: API / WEBHOOK BRIDGE */}
            <div className="relative flex md:flex-col items-center justify-center gap-3 py-2 md:py-0 md:px-4">
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-cognac/40 via-stone-500/40 to-cognac/40" />
              <div className="md:hidden h-px flex-1 bg-linear-to-r from-cognac/40 to-stone-500/40" />
              <div className="relative z-10 flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-charcoal px-4 py-4 shadow-lg">
                <Webhook className="w-6 h-6 text-cognac" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white text-center leading-tight">GHL API<br />/ Webhooks</span>
                <ArrowRight className="w-4 h-4 text-stone-400 rotate-90 md:rotate-0" />
              </div>
              <div className="md:hidden h-px flex-1 bg-linear-to-r from-stone-500/40 to-stone-400/40" />
            </div>

            {/* RIGHT: REPLACE */}
            <div className="rounded-3xl border border-stone-500/40 bg-white/5 p-6 md:p-8 md:rounded-l-none">
              <div className="flex items-center gap-2 mb-1">
                <XCircle className="w-5 h-5 text-stone-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-stone-600">Replace: Public Front-End</span>
              </div>
              <p className="text-sm text-stone-600 mb-6">The public frontend path, subject to approved scope and rights terms.</p>
              <div className="rounded-xl border border-stone-600 bg-stone-800/70 px-4 py-3 mb-3">
                <div className="flex items-center gap-2 mb-1"><Gauge className="w-4 h-4 text-stone-300 shrink-0" /><span className="text-xs font-bold text-stone-200">Before: GHL funnel / site</span></div>
                <p className="text-sm text-stone-300 leading-relaxed">Document the measured baseline, current design constraints, search implementation, exports, and provider terms.</p>
              </div>
              <div className="flex items-center justify-center my-2"><ArrowRight className="w-5 h-5 text-cognac rotate-90" /></div>
              <div className="rounded-xl border border-cognac/30 bg-cognac/10 px-4 py-3">
                <div className="flex items-center gap-2 mb-1"><Code2 className="w-4 h-4 text-cognac shrink-0" /><span className="text-xs font-bold text-orange-300">After: custom Next.js front-end</span></div>
                <p className="text-sm text-stone-300 leading-relaxed">Define the target architecture, test method, accessibility checks, repository access, licensing, and handover in writing.</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-stone-400 mt-8 max-w-2xl mx-auto">
            One bridge, two systems: verify each supported workflow before cutover and monitor it afterward. For a technical overview, read our guide on <Link href="/blog/gohighlevel-keep-crm-replace-website" className="text-orange-300 hover:underline underline-offset-2">keeping the GHL CRM while evaluating a separate website</Link>.
          </p>
        </div>
      </section>

      {/* PRICING TIERS: GoHighLevel site overlay pricing */}
      <PricingTiers
        heading="Choose an integration planning path."
        headingAccent="Confirm commitments after discovery."
        agencyComparison={{
          agencyPrice: "Not assessed",
          agencyNote: "Compare equivalent account, integration, testing, and support scope.",
          ourPrice: "Scoped proposal",
          ourNote: "Price, timing, continuity checks, access, and rights follow discovery.",
        }}
        tiers={[
          {
            tier: "Starter",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "A focused landing-page and GHL data-flow review.",
            includes: [
              "Current-state inventory",
              "Supported endpoint and field mapping",
              "Written test and handover terms",
            ],
            cta: "Get your migration plan",
          },
          {
            tier: "Growth",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "A broader marketing site with content, forms, and supported GHL integrations.",
            includes: [
              "Page, content, and integration inventory",
              "Consent-aware analytics requirements",
              "Written acceptance and support terms",
            ],
            featured: true,
          },
          {
            tier: "Scale",
            price: "Defined after discovery",
            timeline: "Milestones proposed after review",
            fit: "Multi-site, portal, or complex workflow requirements that need deeper review.",
            includes: [
              "Account and permission mapping",
              "Security, failure, and rollback planning",
              "Written licensing, access, and handover terms",
            ],
          },
        ]}
        footnote="The accepted proposal controls scope, price, timing, continuity checks, support, access, licensing, ownership, and remedies."
      />

      {/* Agency delivery-path link */}
      <section className="px-6 pb-10 bg-paper">
        <p className="text-center text-sm text-stone-600 max-w-2xl mx-auto">
          Running a GHL agency? Review delivery-model, confidentiality, acceptance, and handover considerations in our guide to choosing a <Link href="/blog/best-website-builder-for-gohighlevel-agencies" className="text-cognac hover:underline underline-offset-2">website delivery approach for GoHighLevel agencies</Link>.
        </p>
      </section>

      {/* 7. TRIPLE CTA */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8 md:mb-12">Two Paths to Evaluate</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Custom Site + GHL API */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-charcoal/20 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-stone-100 text-cognac text-xs font-bold rounded-full">Popular</div>
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Custom Site + GHL CRM</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Evaluate a separate public frontend connected to the supported GHL workflows identified during discovery.
              </p>
              <ul className="space-y-3 mb-8">
                {["Point-in-time performance baseline", "Supported GHL API and webhook map", "Workflow acceptance tests", "Search-ready implementation scope", "Repository and licensing terms", "Written support and remedies"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"get_custom_plus_ghl_quote",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all">
                Get your migration plan
              </button>
            </div>

            {/* Full Custom CRM + Website */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-cognac/30 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded-full">Full Freedom</div>
              <div className="text-stone-600 text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Custom CRM + Website</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Evaluate replacing selected CRM and website workflows where the data, integration, operational, and migration requirements justify it.
              </p>
              <ul className="space-y-3 mb-8">
                {["CRM workflow requirements", "Frontend and backend architecture", "Automation migration map", "Current service-cost estimate", "Repository and rights terms", "Capacity and monitoring plan"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"build_my_custom_crm",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all">
                Discuss custom CRM scope
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
          <p className="text-stone-600 text-center mb-12">Everything you need to know about GHL integration.</p>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              const buttonId = `gohighlevel-faq-button-${i}`;
              const panelId = `gohighlevel-faq-panel-${i}`;

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
                    hidden={!isOpen}
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

      {/* 9. WRITTEN INTEGRATION TERMS */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl bg-linear-to-br from-[#faf7f2] to-white border border-cognac/30 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cognac/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cognac/10 text-cognac border border-cognac/20 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> Written Integration Terms
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Define the Workflows and How They Will Be Tested.</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              The proposal identifies the in-scope GHL workflows, test fixtures, account assumptions, acceptance process, monitoring, support, and any remedies. This page does not promise uninterrupted third-party services, improved performance, or a refund.
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

      {/* Related Services, expanded to all platforms via reusable component */}
      <section className="py-8 px-6 bg-white border-t border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">Further reading</p>
          <ul className="space-y-2 text-stone-700">
            <li>&rarr; <Link href="/blog/gohighlevel-website-speed" className="text-charcoal hover:text-cognac underline underline-offset-2">How to measure GoHighLevel website performance</Link></li>
            <li>&rarr; <Link href="/blog/gohighlevel-keep-crm-replace-website" className="text-charcoal hover:text-cognac underline underline-offset-2">Keep the GoHighLevel CRM while evaluating the website</Link></li>
            <li>&rarr; <Link href="/blog/core-web-vitals-explained" className="text-charcoal hover:text-cognac underline underline-offset-2">Core Web Vitals explained for business owners</Link></li>
          </ul>
        </div>
      </section>

      <RelatedServicesGrid currentHref="/services/gohighlevel" />

      <Footer />
    </main>
  );
}
