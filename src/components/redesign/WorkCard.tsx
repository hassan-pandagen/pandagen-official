"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MONO, T } from "@/components/redesign/tokens";

// Hero card that cycles through real project screenshots (the Grigoletti hero
// shows a live project in the same corner). Client work, plus Panda Patches
// with its founder-affiliated label; each slide links to its record. Stands
// still on the first slide for reduced motion, and pauses
// while hovered or focused so nobody chases a moving link.

const slides: { src: string; name: string; href: string; external?: boolean; tag?: string }[] = [
  { src: "/work/northdeck-group.png", name: "NorthDeck Group", href: "https://northdeckgroup.com/", external: true },
  { src: "/work/emblematic-studio.png", name: "Emblematic Studio", href: "/work/emblematic-studio" },
  { src: "/work/mycustompatches.png", name: "MyCustomPatches", href: "/work/mycustompatches" },
  // Our own store, added by the owner 24 Sep. Always carries its label here, as
  // it does everywhere else on the site.
  { src: "/work/panda-patches.png", name: "Panda Patches", href: "/work/panda-patches", tag: "Founder-affiliated" },
];

export default function WorkCard() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % slides.length), 3800);
    return () => window.clearInterval(id);
  }, [paused]);

  const s = slides[i];
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <Link
        href={s.href}
        {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group relative block aspect-[1912/914] overflow-hidden rounded-[6px]"
        style={{ backgroundColor: T.dark, boxShadow: "0 24px 50px -24px rgba(28,25,23,0.55)", border: `6px solid ${T.dark}` }}
        aria-label={`${s.name} website${s.external ? " (opens in a new tab)" : ""}`}
      >
        {slides.map((sl, n) => (
          <Image
            key={sl.src}
            src={sl.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 420px, 90vw"
            priority={n === 0}
            className="object-cover object-top transition-[opacity,transform] duration-700 group-hover:scale-[1.03]"
            style={{ opacity: n === i ? 1 : 0 }}
          />
        ))}
      </Link>
      <div className="mt-3 flex items-center justify-between gap-4 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
        <span>
          Selected work · <span style={{ color: T.ink }}>{s.name}</span>
          {s.tag ? ` · ${s.tag}` : ""}
        </span>
        <span className="flex gap-1.5" aria-hidden="true">
          {slides.map((sl, n) => (
            <span key={sl.src} className="h-[3px] w-6 transition-colors duration-500" style={{ backgroundColor: n === i ? T.ink : T.rule }} />
          ))}
        </span>
      </div>
    </div>
  );
}
