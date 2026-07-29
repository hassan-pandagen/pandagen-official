"use client";

import { useEffect, useState } from "react";

const CONTROLS = [
  { label: "Inventory", detail: "Record framework, plugins, packages, services, versions, and owners." },
  { label: "Exposure", detail: "Map reachable routes, roles, data, secrets, uploads, and integrations." },
  { label: "Advisories", detail: "Check current vendor and vulnerability records, affected ranges, and fixes." },
  { label: "Controls", detail: "Apply updates, least privilege, validation, rate limits, logging, and backups." },
  { label: "Response", detail: "Define monitoring, escalation, containment, recovery, and notification duties." },
];

export default function SecurityShieldAnimation() {
  const [activeControl, setActiveControl] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveControl((step) => (step + 1) % CONTROLS.length);
    }, 1900);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      role="img"
      aria-label="Application security review covering inventory, exposure, current advisories, preventive controls, and incident response"
      className="relative w-full aspect-[4/3] sm:aspect-2/1 overflow-hidden rounded-2xl border border-stone-200 bg-linear-to-br from-stone-50 to-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(180,83,9,0.09),transparent_52%)]" />
      <div className="relative flex h-full flex-col px-5 py-5 md:px-9 md:py-7">
        <div className="mb-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cognac">Security control loop</p>
          <p className="mt-1 text-sm font-semibold text-charcoal md:text-base">Architecture changes the attack surface; it never removes security work.</p>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1.5 md:gap-2">
          {CONTROLS.map((control, index) => {
            const active = index === activeControl;
            return (
              <div
                key={control.label}
                className={`grid grid-cols-[5.5rem_1fr] items-center gap-3 rounded-lg border px-3 py-2 transition-all duration-500 md:grid-cols-[7rem_1fr] ${
                  active ? "border-cognac/40 bg-charcoal text-white" : "border-stone-200 bg-white/90 text-charcoal"
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? "text-orange-300" : "text-cognac"}`}>{control.label}</span>
                <span className={`text-[10px] leading-relaxed md:text-xs ${active ? "text-stone-300" : "text-stone-600"}`}>{control.detail}</span>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-wider text-stone-600 md:text-xs">
          No framework or static architecture has zero attack surface.
        </p>
      </div>
    </div>
  );
}
