"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import { MONO, T } from "@/components/redesign/tokens";

const slides = portfolioProjects.filter(project => project.href !== "/work/sleek-jackets");

export default function WorkCard() {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [motionOverride, setMotionOverride] = useState(false);
  // 10 Oct 2026: hovering or focusing the carousel pauses automatic rotation, but
  // Play sits inside it, so pressing Play by keyboard (focus stays on it) or mouse
  // (pointer stays over it) never resumed. After an explicit Play, rotation runs
  // until the visitor pauses or steps, as in the WAI-ARIA carousel pattern.
  const [userPlayed, setUserPlayed] = useState(false);
  const playing = !stopped && (!reducedMotion || motionOverride);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if ((held && !userPlayed) || !playing) return;
    const id = window.setInterval(() => setI(n => (n + 1) % slides.length), 2400);
    return () => window.clearInterval(id);
  }, [held, userPlayed, playing]);
  const s = slides[i];
  const move = (delta: number) => { setStopped(true); setUserPlayed(false); setI(n => (n + delta + slides.length) % slides.length); };
  return (
    <div role="region" aria-label="Selected portfolio projects" aria-roledescription="carousel"
      onMouseEnter={() => setHeld(true)} onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setHeld(false); }}>
      <Link href={s.href} prefetch={false} className="group relative block aspect-[1912/914] overflow-hidden rounded-[4px]"
        style={{ backgroundColor: T.dark, boxShadow: "0 24px 50px -24px rgba(28,25,23,0.55)", border: "6px solid " + T.dark }}
        aria-label={"Open " + s.name + " project"}>
        {s.image ? <Image key={s.image} src={s.image} alt={s.name + (s.status === "Preview" ? " design preview" : " website or application")} fill sizes="(min-width: 1600px) 600px, (min-width: 1024px) 38vw, 90vw" priority={i === 0} className="object-cover object-top" /> :
          <span className="flex h-full flex-col items-center justify-center gap-2 px-5 text-center" style={{ color: T.onDark }}>
            <span className="text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.onDarkQuiet }}>In progress / Preview to follow</span>
            <span className="text-[24px] font-semibold">{s.name}</span>
            <span className="text-[13px]" style={{ color: T.onDarkQuiet }}>Open the project status ↗</span>
          </span>}
      </Link>
      <div className="mt-4 flex flex-wrap items-start justify-between gap-x-5 gap-y-3">
        <div className="min-w-0 flex-1 basis-[15rem]" aria-live={playing ? "off" : "polite"} aria-atomic="true">
          <p className="text-[20px] font-semibold leading-[1.25]" style={{ color: T.ink }}>{s.name}</p>
          <p className="mt-1 text-[15px] leading-[1.5]" style={{ color: T.body }}>{s.description ?? s.label}</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.08em]" style={{ fontFamily: MONO, color: T.quiet }}>
            {s.relationship}{s.status ? " · " + s.status : ""}
          </p>
        </div>
        <div className="flex shrink-0 gap-1">
          <button type="button" aria-label="Previous project" onClick={() => move(-1)} className="flex h-11 w-11 items-center justify-center border" style={{ borderColor: T.rule, color: T.ink }}><ArrowLeft size={16} aria-hidden="true" /></button>
          <button type="button" aria-label={playing ? "Pause project slideshow" : "Play project slideshow"} onClick={() => { setStopped(playing); setMotionOverride(!playing); setUserPlayed(!playing); }} className="flex h-11 w-11 items-center justify-center border" style={{ borderColor: T.rule, color: T.ink }}>{playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}</button>
          <button type="button" aria-label="Next project" onClick={() => move(1)} className="flex h-11 w-11 items-center justify-center border" style={{ borderColor: T.rule, color: T.ink }}><ArrowRight size={16} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}
