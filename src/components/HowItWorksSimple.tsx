"use client";

import { motion } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";
import { trackGAEvent } from "@/components/GoogleAnalytics";

/* ── Step-specific mini diagrams ── */

function DiscoveryDiagram() {
  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 space-y-3">
      <div className="flex items-center gap-2 pb-3 border-b border-stone-200">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="text-[11px] text-stone-600 font-mono">migration inventory</div>
      </div>
      {[
        { label: "URLs", status: "Mapped" },
        { label: "Content", status: "Inventoried" },
        { label: "Analytics", status: "Baselined" },
        { label: "Integrations", status: "Reviewed" },
      ].map((m) => (
        <div key={m.label} className="flex items-center gap-3">
          <div className="text-xs text-stone-600 w-20 shrink-0">{m.label}</div>
          <div className="h-px flex-1 bg-stone-200" />
          <div className="text-xs font-bold text-stone-600">{m.status}</div>
        </div>
      ))}
      <div className="text-xs text-stone-600 font-semibold pt-1">
        Risks and unknowns become written scope inputs
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  const apps = [
    { name: "CMS", decision: "Keep or migrate" },
    { name: "Forms", decision: "Rebuild or connect" },
    { name: "Analytics", decision: "Preserve" },
    { name: "Integrations", decision: "Test" },
  ];
  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 space-y-2.5">
      <div className="text-[11px] font-bold uppercase tracking-wider text-stone-600 pb-1">
        Current-stack decisions
      </div>
      {apps.map((a) => (
        <div key={a.name} className="flex items-center justify-between">
          <span className="text-xs text-stone-600 flex items-center gap-1.5">
            <span className="text-cognac">•</span> {a.name}
          </span>
          <span className="text-xs font-mono text-stone-600">{a.decision}</span>
        </div>
      ))}
      <div className="flex items-center justify-between border-t border-stone-200 pt-2.5">
        <span className="text-xs font-bold text-charcoal flex items-center gap-1.5">
          <span className="text-cognac">→</span> Target architecture documented
        </span>
        <span className="text-xs font-mono font-bold text-stone-600">Reviewed</span>
      </div>
    </div>
  );
}

function BuildDiagram() {
  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">Build checkpoints</span>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-stone-100 border border-stone-200">
          <div className="w-1.5 h-1.5 rounded-full bg-cognac animate-pulse" />
          <span className="text-[10px] font-bold text-stone-600">Reviewable</span>
        </div>
      </div>
      {[
        { label: "Foundation", w: "100%", done: true, note: "Environment + structure" },
        { label: "Migration", w: "100%", done: true, note: "Content + features" },
        { label: "QA", w: "65%", done: false, note: "Review + fixes" },
      ].map((s) => (
        <div key={s.label} className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-600">{s.label}</span>
            <span className="text-[10px] text-stone-600">{s.note}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${s.done ? "bg-emerald-700" : "bg-cognac"}`} style={{ width: s.w }} />
            </div>
            <span className={`text-xs font-bold ${s.done ? "text-emerald-700" : "text-stone-600"}`}>✓</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function LaunchDiagram() {
  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 space-y-3">
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="rounded-xl bg-white border border-stone-200 p-3">
          <div className="text-xs text-stone-600 font-semibold mb-1">Redirects</div>
          <div className="text-lg font-black text-charcoal leading-none">Checked</div>
          <div className="text-[10px] text-stone-600 mt-1">Old URL → target</div>
        </div>
        <div className="rounded-xl bg-white border border-stone-200 p-3">
          <div className="text-xs text-stone-600 font-semibold mb-1">Lead forms</div>
          <div className="text-lg font-black text-charcoal leading-none">Tested</div>
          <div className="text-[10px] text-stone-600 mt-1">Validation → delivery</div>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-white border border-stone-200 px-3 py-2">
        <span className="text-xs text-stone-600 font-medium">Analytics and rollback plan</span>
        <span className="text-sm font-black text-cognac">Launch checklist</span>
      </div>
    </div>
  );
}

/* ── Step card data ── */
const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We inventory the current URLs, content, forms, analytics, integrations, and measurable baselines before recommending a migration scope.",
    Diagram: DiscoveryDiagram,
  },
  {
    number: "02",
    title: "Architecture",
    description: "We document what should stay, move, integrate, or be replaced, along with dependencies, risks, acceptance criteria, and operating costs.",
    Diagram: ArchitectureDiagram,
  },
  {
    number: "03",
    title: "Build",
    description: "The new implementation is delivered in reviewable checkpoints so content, behavior, integrations, and edge cases can be validated before cutover.",
    Diagram: BuildDiagram,
  },
  {
    number: "04",
    title: "Launch",
    description: "Before cutover, we test redirects, forms, analytics, accessibility, metadata, monitoring, and the rollback path against the approved launch checklist.",
    Diagram: LaunchDiagram,
  },
];

export default function HowItWorksSimple() {
  return (
    <section className="relative pt-8 pb-12 md:pt-12 md:pb-20 bg-paper overflow-hidden">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight">
            From First Call to{" "}
            <span className="font-serif italic text-cognac">Launch.</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Four reviewable stages, with the important decisions recorded before launch.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {steps.map((step, i) => {
            const Diagram = step.Diagram;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl border border-stone-300 p-7 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-xl hover:border-stone-400 transition-all duration-300 cursor-default"
              >
                {/* Step number */}
                <div className="text-[11px] font-black tracking-widest text-cognac uppercase">
                  Step {step.number}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-charcoal leading-tight">
                  <span className="font-serif italic">{step.title}</span>
                </h3>

                {/* Description */}
                <p className="text-base text-stone-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Diagram */}
                <div className="flex-1 flex flex-col justify-end">
                  <Diagram />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button onClick={() => { if (typeof window !== "undefined") { trackGAEvent("cta_click", { cta: "start_discovery", location: "process" }); window.dispatchEvent(new Event("open-quote-modal")); } }} className="px-10 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-2">
                Start with Discovery <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-stone-600 mt-3">Tell us your current platform, primary risk, and target timeline.</p>
        </motion.div>

      </div>
    </section>
  );
}
