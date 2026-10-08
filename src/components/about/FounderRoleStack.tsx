"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDownLeft } from "lucide-react";

const anton = { className: "font-anton-face" };
const ROW = 88;
const NAV = 96;

type Role = { title: string; body: string };

export default function FounderRoleStack({ id, eyebrow, heading, roles }: { id: string; eyebrow: string; heading: string; roles: Role[] }) {
  const stackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isStacked, setIsStacked] = useState(false);

  useEffect(() => {
    const updateStack = () => {
      const stack = stackRef.current;
      const section = sectionRef.current;
      if (!stack || !section) return;

      const active = window.matchMedia("(min-width: 768px)").matches
        && stack.getBoundingClientRect().top <= NAV
        && section.getBoundingClientRect().bottom > NAV + roles.length * ROW;
      setIsStacked(active);
    };

    updateStack();
    window.addEventListener("scroll", updateStack, { passive: true });
    window.addEventListener("resize", updateStack);
    return () => {
      window.removeEventListener("scroll", updateStack);
      window.removeEventListener("resize", updateStack);
    };
  }, [roles.length]);

  function renderItem(index: number): ReactNode {
    const role = roles[index];
    if (!role) return null;

    return (
      <div className={`founder-role-item ${index > 0 ? "founder-role-inner" : ""}`}>
        <div
          className="founder-role-head grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-4 border-t border-stone-700 bg-charcoal py-4 md:grid-cols-12 md:gap-8 md:py-0"
          style={{ ["--role-top" as string]: `${NAV + index * ROW}px`, zIndex: 20 + roles.length - index }}
        >
          <span className={`${anton.className} text-3xl leading-none text-stone-100 md:col-span-5 md:text-5xl`}>{String(index + 1).padStart(2, "0")}.</span>
          <h3 className={`${anton.className} text-2xl leading-none text-stone-100 md:col-span-6 md:text-4xl`}>{role.title}</h3>
          <ArrowDownLeft className="h-5 w-5 text-stone-400 md:col-span-1 md:h-7 md:w-7 md:justify-self-end" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 pb-14 pt-5 md:grid-cols-12 md:gap-8 md:pb-10 md:pt-6">
          <p className="col-start-2 max-w-xl font-sans text-lg leading-8 text-stone-300 md:col-span-6 md:col-start-6">{role.body}</p>
        </div>
        {renderItem(index + 1)}
        {index === roles.length - 1 && <div aria-hidden="true" className="founder-role-tail" />}
      </div>
    );
  }

  return (
    <section ref={sectionRef} className={`bg-charcoal px-6 pb-16 pt-20 text-white md:pb-20 md:pt-28 ${isStacked ? "founder-role-stacked" : ""}`} aria-labelledby={id}>
      <div className="mx-auto max-w-6xl">
        <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-orange-300">{eyebrow}</p>
        <h2 id={id} className={`${anton.className} mt-4 max-w-3xl text-4xl leading-none md:text-6xl`}>{heading}</h2>
        <div ref={stackRef} className="founder-role-stack mt-12 md:mt-28">{renderItem(0)}</div>
        <div aria-hidden="true" className="founder-role-spacer" />
      </div>
      <style>{`
        @media (min-width: 768px) {
          .founder-role-head { position: sticky; top: var(--role-top); height: ${ROW}px; }
          .founder-role-item { display: flow-root; }
          .founder-role-inner { margin-bottom: -${ROW}px; }
          .founder-role-tail, .founder-role-spacer { height: ${(roles.length - 1) * ROW}px; }
          .founder-role-stacked .founder-role-stack > .founder-role-item > .founder-role-head::before {
            content: ""; position: absolute; left: 0; right: 0; bottom: 100%; height: ${NAV + 8}px; background: #1c1917;
          }
        }
      `}</style>
    </section>
  );
}
