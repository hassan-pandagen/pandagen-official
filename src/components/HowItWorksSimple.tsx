"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
        <div className="text-[11px] text-stone-400 font-mono">yoursite.com · audit running</div>
      </div>
      {[
        { label: "Performance", score: 42, w: "42%", color: "bg-red-400" },
        { label: "SEO",         score: 38, w: "38%", color: "bg-orange-400" },
        { label: "Speed",       score: 51, w: "51%", color: "bg-yellow-400" },
        { label: "Accessibility", score: 61, w: "61%", color: "bg-yellow-300" },
      ].map((m) => (
        <div key={m.label} className="flex items-center gap-3">
          <div className="text-xs text-stone-500 w-20 shrink-0">{m.label}</div>
          <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
            <div className={`h-full ${m.color} rounded-full`} style={{ width: m.w }} />
          </div>
          <div className="text-xs font-bold text-stone-600 w-5 text-right">{m.score}</div>
        </div>
      ))}
      <div className="text-xs text-red-500 font-semibold pt-1 flex items-center gap-1.5">
        <span>⚠</span> 12 critical issues found
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-300 text-stone-600 font-bold text-xs">Pages</div>
          <div className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-300 text-stone-600 font-bold text-xs">API</div>
          <div className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-300 text-stone-600 font-bold text-xs">DB</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-px h-4 bg-stone-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-300 border border-stone-400" />
          <div className="w-px h-4 bg-stone-300" />
        </div>
        <div className="px-5 py-2 rounded-xl bg-charcoal/10 border border-charcoal/30 text-charcoal font-bold text-sm">
          Next.js App
        </div>
        <div className="w-px h-4 bg-stone-300" />
        <div className="px-4 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-500 font-medium text-xs">
          Edge CDN · Global
        </div>
      </div>
    </div>
  );
}

function BuildDiagram() {
  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Sprint Progress</span>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-stone-100 border border-stone-200">
          <div className="w-1.5 h-1.5 rounded-full bg-cognac animate-pulse" />
          <span className="text-[10px] font-bold text-stone-600">AI Assisted</span>
        </div>
      </div>
      {[
        { label: "Week 1", w: "100%", done: true,  note: "Discovery + Setup" },
        { label: "Week 2", w: "100%", done: true,  note: "Core build" },
        { label: "Week 3", w: "65%",  done: false, note: "In progress..." },
      ].map((s) => (
        <div key={s.label} className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-600">{s.label}</span>
            <span className="text-[10px] text-stone-400">{s.note}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${s.done ? "bg-emerald-400" : "bg-cognac/70"}`} style={{ width: s.w }} />
            </div>
            <span className={`text-xs font-bold ${s.done ? "text-emerald-500" : "text-stone-300"}`}>✓</span>
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
        <div className="rounded-xl bg-red-50 border border-red-200 p-3">
          <div className="text-xs text-red-400 font-semibold mb-1">Before</div>
          <div className="text-3xl font-black text-red-400 leading-none">3.2s</div>
          <div className="text-[10px] text-red-300 mt-1">Avg Load Time</div>
        </div>
        <div className="rounded-xl bg-emerald-50 border border-emerald-300 p-3">
          <div className="text-xs text-emerald-500 font-semibold mb-1">After</div>
          <div className="text-3xl font-black text-emerald-500 leading-none">0.8s</div>
          <div className="text-[10px] text-emerald-400 mt-1">Avg Load Time</div>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-white border border-stone-200 px-3 py-2">
        <span className="text-xs text-stone-500 font-medium">Google PageSpeed Score</span>
        <span className="text-base font-black text-cognac">98 / 100</span>
      </div>
    </div>
  );
}

/* ── Step card data ── */
const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We audit your existing site for performance gaps, SEO issues, and revenue leaks, then map the fastest route to load times under one second.",
    Diagram: DiscoveryDiagram,
  },
  {
    number: "02",
    title: "Architecture",
    description: "Database schema, component tree, API design — all planned before a single line of production code is written.",
    Diagram: ArchitectureDiagram,
  },
  {
    number: "03",
    title: "Build",
    description: "AI-accelerated sprints with senior engineers. Production-grade code shipped in weekly cycles with full transparency.",
    Diagram: BuildDiagram,
  },
  {
    number: "04",
    title: "Launch",
    description: "Edge deployment, full Git repo handover, zero monthly fees. You own everything. We disappear.",
    Diagram: LaunchDiagram,
  },
];

export default function HowItWorksSimple() {
  return (
    <section className="relative py-12 md:py-20 bg-paper overflow-hidden">
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
            <span className="font-serif italic text-stone-500">Launch.</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Four steps. No complexity. No confusion. Just results.
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
                className="group relative bg-white rounded-2xl border border-stone-200 p-7 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-xl hover:border-stone-300 transition-all duration-300 cursor-default"
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
          <button
            data-cal-namespace="discovery"
            data-cal-link="pandagen/discovery"
            data-cal-config='{"layout":"month_view"}'
            className="px-10 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-2"
          >
            Start with Step 1 <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-stone-400 mt-3">Response within 2 hours. No credit card required.</p>
        </motion.div>

      </div>
    </section>
  );
}
