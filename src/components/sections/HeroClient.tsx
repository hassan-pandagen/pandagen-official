"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HeroCTAs = dynamic(
  () => import("./HeroAnimated").then((m) => m.HeroCTAs),
  { ssr: false, loading: () => (
    <div className="flex flex-col sm:flex-row items-start gap-4">
      <button
        onClick={() => { if (typeof window !== "undefined") window.dispatchEvent(new Event("open-quote-modal")); }}
        className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold text-base rounded-full flex items-center justify-center gap-2 shadow-xl cursor-pointer"
      >
        Get your migration plan
      </button>
      <a href="/work" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-charcoal text-charcoal font-bold text-base rounded-full flex items-center justify-center gap-2 shadow-card">
        See our work
      </a>
    </div>
  )}
);


const AuditWidgetLazy = dynamic(
  () => import("@/components/audit/AuditWidget"),
  { ssr: false }
);

function AuditFallback() {
  return (
    <div
      className="relative flex justify-center items-center w-full"
      style={{ contain: "layout" }}
    >
      <div className="relative w-full max-w-xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 bg-stone-50/80">
          <span className="text-[10px] font-bold text-[#c2410c] uppercase tracking-wider">Technical Website Audit</span>
        </div>
        <div className="p-5 md:p-6 space-y-3 md:space-y-4">
          <div className="text-base md:text-xl font-bold text-charcoal leading-tight">Run a Free Technical Audit</div>
          <div className="w-full bg-stone-50 border border-gray-200 rounded-xl h-11 md:h-12" />
          <div className="w-full h-11 md:h-12 bg-charcoal rounded-xl" />
        </div>
      </div>
    </div>
  );
}

function HeroAuditWidget() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Desktop: load immediately (audit is above the fold on desktop lg breakpoint)
    // Mobile/tablet: defer until scrolled near it
    if (window.innerWidth >= 1024) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? <AuditWidgetLazy /> : <AuditFallback />}</div>;
}

export { HeroCTAs, HeroAuditWidget };
