"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import { MONO, T } from "@/components/redesign/tokens";

const slides = portfolioProjects.filter(project => project.href !== "/work/sleek-jackets");

export default function WorkCard() {
  const [i, setI] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [userPlayed, setUserPlayed] = useState(false);
  const current = useRef(0);
  const locked = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const playing = !stopped && (userPlayed || (desktop && !reducedMotion));

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const update = () => { setReducedMotion(motion.matches); setDesktop(pointer.matches); };
    update();
    motion.addEventListener("change", update);
    pointer.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      pointer.removeEventListener("change", update);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const advance = useCallback((delta: number) => {
    if (locked.current) return;
    const next = (current.current + delta + slides.length) % slides.length;
    setDirection(delta);
    setPrevious(reducedMotion ? null : current.current);
    current.current = next;
    setI(next);
    if (!reducedMotion) {
      locked.current = true;
      timer.current = setTimeout(() => { setPrevious(null); locked.current = false; }, 520);
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (!playing || hovered) return;
    const id = window.setInterval(() => advance(1), 7000);
    return () => window.clearInterval(id);
  }, [playing, hovered, advance]);

  const s = slides[i];
  const move = (delta: number) => { setStopped(true); setUserPlayed(false); advance(delta); };
  return (
    <div role="region" aria-label="Selected portfolio projects" aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={e => { if (!(e.target as HTMLElement).closest("[data-rotation-control]")) { setStopped(true); setUserPlayed(false); } }}>
      <div className="relative aspect-[1912/914] overflow-hidden rounded-[4px]"
        style={{ backgroundColor: T.dark, boxShadow: "0 24px 50px -24px rgba(28,25,23,0.55)", border: "6px solid " + T.dark, touchAction: "pan-y" }}
        onTouchStart={e => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; swiped.current = false; }}
        onTouchEnd={e => {
          if (!touch.current) return;
          const dx = e.changedTouches[0].clientX - touch.current.x;
          const dy = e.changedTouches[0].clientY - touch.current.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { swiped.current = true; move(dx < 0 ? 1 : -1); }
          touch.current = null;
        }}
        onClickCapture={e => { if (swiped.current) { e.preventDefault(); e.stopPropagation(); swiped.current = false; } }}>
        {[...(previous === null ? [] : [previous]), i].map(index => {
          const project = slides[index];
          const active = index === i;
          return <div key={index} aria-hidden={!active} inert={!active}
            className="absolute inset-0"
            style={{ animation: previous === null ? undefined : `work-${active ? "enter" : "leave"}-${direction > 0 ? "next" : "previous"} 500ms cubic-bezier(.22,.61,.36,1) both` }}>
            <Link href={project.href} prefetch={false} className="relative block h-full w-full" aria-label={"Open " + project.name + " project"}>
              {project.image && <Image src={project.image} alt={project.name + (project.status === "Preview" ? " design preview" : " website or application")} fill sizes="(min-width: 1600px) 840px, (min-width: 1024px) 53vw, 90vw" priority={index === 0} className="object-cover object-top" />}
            </Link>
          </div>;
        })}
      </div>
      <div className="mt-4 flex flex-wrap items-start justify-between gap-x-5 gap-y-3">
        <div className="min-h-[8rem] min-w-0 flex-1 basis-[15rem]" aria-live={playing ? "off" : "polite"} aria-atomic="true">
          <p className="text-[20px] font-semibold leading-[1.25]" style={{ color: T.ink }}>{s.name}</p>
          <p className="mt-1 text-[15px] leading-[1.5]" style={{ color: T.body }}>{s.description ?? s.label}</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.08em]" style={{ fontFamily: MONO, color: T.quiet }}>
            {s.relationship}{s.status ? " · " + s.status : ""}
          </p>
        </div>
        <div className="flex shrink-0 gap-1">
          <button type="button" aria-label="Previous project" onClick={() => move(-1)} className="flex h-11 w-11 items-center justify-center border" style={{ borderColor: T.rule, color: T.ink }}><ArrowLeft size={16} aria-hidden="true" /></button>
          <button type="button" data-rotation-control aria-label={playing ? "Pause project slideshow" : "Play project slideshow"} onClick={() => { setStopped(playing); setUserPlayed(!playing); }} className="flex h-11 w-11 items-center justify-center border" style={{ borderColor: T.rule, color: T.ink }}>{playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}</button>
          <button type="button" aria-label="Next project" onClick={() => move(1)} className="flex h-11 w-11 items-center justify-center border" style={{ borderColor: T.rule, color: T.ink }}><ArrowRight size={16} aria-hidden="true" /></button>
        </div>
      </div>
      <style>{`
        @keyframes work-enter-next { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes work-leave-next { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        @keyframes work-enter-previous { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes work-leave-previous { from { transform: translateX(0); } to { transform: translateX(100%); } }
        @media (prefers-reduced-motion: reduce) { [aria-roledescription="carousel"] [style*="animation"] { animation: none !important; } }
      `}</style>
    </div>
  );
}
