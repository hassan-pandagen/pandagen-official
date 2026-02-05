import React from "react";

export function BlogHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6 leading-tight border-l-4 border-neon pl-6">
      {children}
    </h2>
  );
}

export function BlogText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light">
      {children}
    </p>
  );
}

export function BlogList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 mb-10 bg-[#0A0A0A] border border-white/10 p-8 rounded-2xl">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 text-gray-300 text-lg">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0 shadow-[0_0_10px_#22d3ee]" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BlogHighlight({ children }: { children: React.ReactNode }) {
  return <span className="text-neon font-semibold">{children}</span>;
}

export function BlogQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative my-12 p-8 bg-white/5 border-l-4 border-neon rounded-r-xl italic text-xl md:text-2xl text-white font-serif leading-relaxed">
      <span className="absolute top-0 left-2 text-6xl text-neon opacity-20">"</span>
      {children}
    </blockquote>
  );
}

// Comparison Table for Blog
export function ComparisonTable() {
  return (
    <div className="my-12 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-3 bg-white/5 p-5 border-b border-white/10 font-bold text-white text-sm md:text-base uppercase tracking-wider">
        <div>Feature</div>
        <div className="text-red-400">WordPress</div>
        <div className="text-neon">PandaGen</div>
      </div>
      <TableRow label="Hosting Cost" bad="$150/mo (Kinsta)" good="$0 (Vercel)" />
      <TableRow label="Security" bad="Plugin Risks" good="Bank-Grade Static" />
      <TableRow label="Load Time" bad="1.5s - 4.0s" good="0.8-1.2s" />
      <div className="grid grid-cols-3 p-5 bg-neon/10 text-white font-bold border-t border-white/10">
        <div>Total / Year</div>
        <div className="text-red-400">-$3,000+</div>
        <div className="text-neon">+$20</div>
      </div>
    </div>
  );
}

function TableRow({ label, bad, good }: any) {
  return (
    <div className="grid grid-cols-3 p-5 border-b border-white/5 text-sm md:text-lg hover:bg-white/[0.02] transition-colors">
      <div className="text-white font-medium">{label}</div>
      <div className="text-gray-500">{bad}</div>
      <div className="text-neon font-bold">{good}</div>
    </div>
  );
}
