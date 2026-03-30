"use client";

import dynamic from "next/dynamic";

const HeroStatusPill = dynamic(
  () => import("./HeroAnimated").then((m) => m.HeroStatusPill),
  { ssr: false, loading: () => (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-bold uppercase tracking-widest text-stone-500 mb-8 shadow-xs">
      <span className="relative flex h-2 w-2">
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cognac" />
      </span>
      Accepting Q2 Clients
    </div>
  )}
);

const HeroCTAs = dynamic(
  () => import("./HeroAnimated").then((m) => m.HeroCTAs),
  { ssr: false, loading: () => (
    <div className="flex flex-col sm:flex-row items-start gap-4">
      <button className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold text-base rounded-full flex items-center justify-center gap-2 shadow-xl">
        Get a Free Quote
      </button>
      <a href="/work" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-charcoal text-charcoal font-bold text-base rounded-full flex items-center justify-center gap-2 shadow-card">
        View Case Studies
      </a>
    </div>
  )}
);

const HeroTrustSignals = dynamic(
  () => import("./HeroAnimated").then((m) => m.HeroTrustSignals),
  { ssr: false }
);

const HeroAuditWidget = dynamic(
  () => import("@/components/audit/AuditWidget"),
  { ssr: false, loading: () => (
    <div className="relative hidden lg:flex justify-center items-center">
      <div className="relative w-full max-w-xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 bg-stone-50/80">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-[10px] font-bold text-[#c2410c] uppercase tracking-wider">AI Audit Engine</span>
        </div>
        <div className="p-6 md:p-8 space-y-5">
          <div>
            <div className="text-xl font-bold text-charcoal leading-tight mb-1">Get Your AI Audit</div>
            <div className="text-sm text-stone-600">11 deep checks beyond PageSpeed. Run AI Audit</div>
          </div>
          <div className="w-full bg-stone-50 border border-gray-200 rounded-xl h-14" />
          <div className="w-full h-14 bg-charcoal rounded-xl" />
        </div>
      </div>
    </div>
  )}
);

export { HeroStatusPill, HeroCTAs, HeroTrustSignals, HeroAuditWidget };
