import React from "react";

export function BlogHeader({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-16 mb-6 leading-tight">
      {children}
    </h2>
  );
}

export function BlogText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8">
      {children}
    </p>
  );
}

export function BlogList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mb-10">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-xl shadow-card">
          <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-charcoal text-white flex items-center justify-center text-[10px] font-bold">✓</div>
          <span className="text-stone-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BlogHighlight({ children }: { children: React.ReactNode }) {
  return <span className="text-charcoal font-semibold">{children}</span>;
}

export function BlogQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative my-12 p-8 bg-stone-50 border-l-4 border-cognac rounded-r-xl italic text-xl md:text-2xl text-charcoal font-serif leading-relaxed">
      <span className="absolute top-0 left-2 text-6xl text-cognac opacity-30">"</span>
      {children}
    </blockquote>
  );
}

// Comparison Table for Blog
export function ComparisonTable() {
  return (
    <div className="my-12 border border-stone-200 rounded-2xl overflow-hidden shadow-card">
      <div className="grid grid-cols-3 bg-stone-50 p-5 border-b border-stone-200 font-bold text-charcoal text-sm md:text-base uppercase tracking-wider">
        <div>Feature</div>
        <div className="text-red-600">WordPress</div>
        <div className="text-charcoal">PandaCodeGen</div>
      </div>
      <TableRow label="Hosting Cost" bad="$150/mo (Kinsta)" good="$0 (Vercel)" />
      <TableRow label="Security" bad="Plugin Risks" good="Bank Level Static" />
      <TableRow label="Load Time" bad="1.5s - 4.0s" good="0.8-1.2s" />
      <div className="grid grid-cols-3 p-5 bg-stone-50 text-charcoal font-bold border-t border-stone-200">
        <div>Total / Year</div>
        <div className="text-red-600">-$3,000+</div>
        <div className="text-charcoal">+$20</div>
      </div>
    </div>
  );
}

function TableRow({ label, bad, good }: { label: string; bad: string; good: string }) {
  return (
    <div className="grid grid-cols-3 p-5 border-b border-stone-200 text-sm md:text-lg hover:bg-stone-50 transition-colors">
      <div className="text-charcoal font-medium">{label}</div>
      <div className="text-stone-600">{bad}</div>
      <div className="text-charcoal font-bold">{good}</div>
    </div>
  );
}

// ─── InsightBox ────────────────────────────────────────────────────────────────
// Usage: <InsightBox variant="warning">Google penalises slow sites.</InsightBox>
// Variants: "info" (blue) | "warning" (orange) | "tip" (green) | "danger" (red)
type InsightVariant = "info" | "warning" | "tip" | "danger";

const insightStyles: Record<InsightVariant, { border: string; bg: string; label: string; labelColor: string }> = {
  info:    { border: "border-blue-400",   bg: "bg-blue-50",   label: "Key Insight", labelColor: "text-blue-600" },
  warning: { border: "border-orange-400", bg: "bg-orange-50", label: "Watch Out",   labelColor: "text-orange-600" },
  tip:     { border: "border-green-500",  bg: "bg-green-50",  label: "Pro Tip",     labelColor: "text-green-700" },
  danger:  { border: "border-red-500",    bg: "bg-red-50",    label: "Critical",    labelColor: "text-red-600" },
};

export function InsightBox({ children, variant = "info", label }: { children: React.ReactNode; variant?: InsightVariant; label?: string }) {
  const s = insightStyles[variant];
  return (
    <div className={`my-10 p-6 rounded-r-xl border-l-4 ${s.border} ${s.bg}`}>
      <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${s.labelColor}`}>
        {label ?? s.label}
      </div>
      <p className="text-lg font-serif italic text-charcoal leading-relaxed">{children}</p>
    </div>
  );
}

// ─── CodeWindow ────────────────────────────────────────────────────────────────
// Usage: <CodeWindow filename="next.config.js">{"images: { formats: ['image/avif'] }"}</CodeWindow>
export function CodeWindow({ children, filename = "code" }: { children: string; filename?: string }) {
  const lines = children.trim().split("\n");
  return (
    <div className="my-10 rounded-2xl overflow-hidden border border-stone-800 bg-[#0D0F14] shadow-xl">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#13151F] border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-[11px] text-white/30 font-mono">{filename}</span>
      </div>
      {/* Code body */}
      <div className="p-5 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="select-none text-white/20 text-xs w-5 shrink-0 text-right pt-0.5">{i + 1}</span>
              <span className="text-green-300">{line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

// ─── ComparisonGrid ────────────────────────────────────────────────────────────
// Usage:
// <ComparisonGrid
//   left={{ label: "WordPress", items: ["Plugin bloat", "3.8s load"] }}
//   right={{ label: "Next.js", items: ["Zero deps", "0.8s load"] }}
// />
export function ComparisonGrid({
  left,
  right,
}: {
  left: { label: string; items: string[] };
  right: { label: string; items: string[] };
}) {
  return (
    <div className="my-10 grid grid-cols-2 gap-4">
      {/* Left, Bad */}
      <div className="p-5 bg-red-50 border border-red-200 rounded-2xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] font-bold shrink-0">✗</div>
          <span className="font-bold text-red-700 text-sm uppercase tracking-wider">{left.label}</span>
        </div>
        <ul className="space-y-2">
          {left.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-red-800">
              <span className="text-red-400 mt-0.5 shrink-0">, </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* Right, Good */}
      <div className="p-5 bg-green-50 border border-green-200 rounded-2xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0">✓</div>
          <span className="font-bold text-green-800 text-sm uppercase tracking-wider">{right.label}</span>
        </div>
        <ul className="space-y-2">
          {right.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-green-900">
              <span className="text-green-500 mt-0.5 shrink-0">+</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── StatCard ──────────────────────────────────────────────────────────────────
// Usage: <StatCard stat="50%" label="Reduction in LCP" context="After migrating to Next.js" />
// Pass multiple in a row inside a <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
export function StatCard({ stat, label, context }: { stat: string; label: string; context?: string }) {
  return (
    <div className="flex flex-col gap-1 p-6 bg-white border border-stone-200 rounded-2xl shadow-xs">
      <div className="text-4xl md:text-5xl font-bold text-charcoal leading-none">{stat}</div>
      <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mt-2">{label}</div>
      {context && <div className="text-sm text-stone-400 mt-1 leading-snug">{context}</div>}
    </div>
  );
}

// ─── BlogAuthor ────────────────────────────────────────────────────────────────
export function BlogAuthor({
  name = "Hassan Jamal",
  role = "Co-Founder & Lead Engineer · PandaCodeGen",
  bio,
  linkedIn,
  date,
  readTime,
}: {
  name?: string;
  role?: string;
  bio?: string;
  linkedIn?: string;
  date?: string;
  readTime?: string;
}) {
  const nameEl = linkedIn ? (
    <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="font-semibold text-charcoal hover:text-cognac transition-colors">
      {name}
    </a>
  ) : (
    <span className="font-semibold text-charcoal">{name}</span>
  );

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2.5">
        <img
          src="/team/hassan.png"
          alt={name}
          className="w-8 h-8 rounded-full object-cover border border-stone-200 shrink-0"
        />
        <p className="text-sm text-stone-500">
          {nameEl}
          {date && <><span className="mx-1.5 text-stone-300">·</span>{date}</>}
          {readTime && <><span className="mx-1.5 text-stone-300">·</span>{readTime}</>}
          {!date && !readTime && <><span className="mx-1.5 text-stone-300">·</span><span className="text-xs">{role}</span></>}
        </p>
      </div>
    </div>
  );
}
