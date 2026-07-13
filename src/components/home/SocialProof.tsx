"use client";

import { motion } from "@/components/ui/motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// Real reviews. Add `imgSrc` (a real headshot URL) per reviewer when available;
// until then the card falls back to the initials avatar. Never use stock/fake faces.
const reviews = [
  {
    platform: "Clutch",
    platformColor: "#b91c25",
    starColor: "#e8222f",
    title: "Available at any time. Response always under an hour.",
    name: "Matt Conner",
    initials: "MC",
    initialsColor: "#b91c25",
    detail: "MC Patches LLC",
    date: "Nov 2025",
    imgSrc: "/matt-conner.jpg",
  },
  {
    platform: "Trustpilot",
    platformColor: "#007a54",
    starColor: "#00b67a",
    title: "Hassan made all the difference",
    name: "Marshall James",
    initials: "MJ",
    initialsColor: "#007a54",
    detail: "",
    date: "Mar 2026",
    imgSrc: "/marshall-james.jpg",
  },
  {
    platform: "Trustpilot",
    platformColor: "#007a54",
    starColor: "#00b67a",
    title: "They worked with me to make a website I could afford",
    name: "James Peace",
    initials: "JP",
    initialsColor: "#1e7e34",
    detail: "",
    date: "Mar 2026",
    imgSrc: "/james-peace.jpeg",
  },
  {
    platform: "Client review",
    platformColor: "#1c1917",
    starColor: "#f4b400",
    title: "PandaCodeGen really understood what I needed",
    name: "Richard Junior",
    initials: "RJ",
    initialsColor: "#1a73e8",
    detail: "",
    date: "Apr 2026",
    imgSrc: "/richard-junior.jpg",
  },
];

const platformBadges = [
  { name: "Clutch", rating: "5.0", count: "1", color: "#e8222f", url: "https://clutch.co/profile/panda-code-gen" },
  { name: "Trustpilot", rating: "5★", count: "2", color: "#00b67a", url: "https://www.trustpilot.com/review/pandacodegen.com" },
  { name: "GoodFirms", rating: "5.0", count: "1", color: "#b8860b", url: "https://www.goodfirms.co/company/pandacodegen" },
];

function Stars({ color, count = 5 }: { color: string; count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4" style={{ color }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

type Review = (typeof reviews)[number] & { tempId: number };

// Staggered card deck. Click a side card (or use the arrows) to bring it to center.
// No animation library — pure CSS transitions, so it stays light.
function ReviewDeck() {
  const [cardSize, setCardSize] = useState(340);
  const [list, setList] = useState<Review[]>(reviews.map((r, i) => ({ ...r, tempId: i })));

  const handleMove = (steps: number) => {
    setList((prev) => {
      const next = [...prev];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = next.shift();
          if (!item) return prev;
          next.push({ ...item, tempId: -item.tempId - 1000 - i });
        }
      } else if (steps < 0) {
        for (let i = steps; i < 0; i++) {
          const item = next.pop();
          if (!item) return prev;
          next.unshift({ ...item, tempId: -item.tempId - 1000 + i });
        }
      }
      return next;
    });
  };

  useEffect(() => {
    const update = () => {
      const matches = typeof window !== "undefined" && window.matchMedia("(min-width: 640px)").matches;
      setCardSize(matches ? 340 : 280);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: cardSize + 160 }}>
      {list.map((r, index) => {
        const position = list.length % 2 ? index - (list.length + 1) / 2 : index - list.length / 2;
        const isCenter = position === 0;
        return (
          <div
            key={r.tempId}
            onClick={() => handleMove(position)}
            className={`absolute left-1/2 top-1/2 cursor-pointer rounded-2xl border-2 p-7 transition-[transform,opacity,background-color,border-color,box-shadow] duration-500 ease-in-out flex flex-col select-none ${
              isCenter
                ? "z-10 bg-charcoal text-white border-charcoal shadow-2xl"
                : "z-0 bg-white text-charcoal border-stone-200 hover:border-cognac/50"
            }`}
            style={{
              width: cardSize,
              height: cardSize,
              transform: `translate(-50%, -50%) translateX(${(cardSize / 1.6) * position}px) translateY(${
                isCenter ? -55 : position % 2 ? 14 : -14
              }px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
            }}
          >
            {/* Avatar: real photo if provided, else initials */}
            {r.imgSrc ? (
              <Image
                src={r.imgSrc}
                alt={r.name}
                width={56}
                height={56}
                className="mb-5 h-14 w-14 rounded-full object-cover border-2 border-white/40"
              />
            ) : (
              <div
                className="mb-5 h-14 w-14 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: isCenter ? "rgba(255,255,255,0.18)" : r.initialsColor }}
              >
                {r.initials}
              </div>
            )}

            <Stars color={isCenter ? "#fbbf24" : r.starColor} />

            <h3 className={`text-lg sm:text-xl font-bold leading-snug mt-3 ${isCenter ? "text-white" : "text-charcoal"}`}>
              &ldquo;{r.title}&rdquo;
            </h3>

            <div className="mt-auto pt-4 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <div className={`text-sm font-bold ${isCenter ? "text-white" : "text-charcoal"}`}>{r.name}</div>
                <div className={`text-xs ${isCenter ? "text-white/60" : "text-stone-500"}`}>
                  {r.detail}{r.detail && " · "}{r.date}
                </div>
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shrink-0"
                style={{ backgroundColor: r.platformColor, color: "#fff" }}
              >
                {r.platform}
              </span>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          onClick={() => handleMove(-1)}
          aria-label="Previous review"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-stone-200 shadow-md text-stone-600 hover:bg-charcoal hover:text-white transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          aria-label="Next review"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-stone-200 shadow-md text-stone-600 hover:bg-charcoal hover:text-white transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section
      className="bg-[#faf9f7] border-b border-stone-200/80"
      style={{ paddingTop: "var(--space-section-sm)", paddingBottom: "var(--space-section-sm)" }}
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Platform Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-4"
        >
          {platformBadges.map((b) => (
            <a
              key={b.name}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full text-xs font-bold text-stone-600 hover:border-stone-400 transition-all"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: b.color }} />
              {b.name} {b.rating} · {b.count} {Number(b.count) === 1 ? "review" : "reviews"}
            </a>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">What Our Clients Say</h2>
          <p className="text-stone-500 text-sm">Real projects. Real results. Real people. Tap a card to read it.</p>
        </motion.div>

        {/* Stacked review deck */}
        <ReviewDeck />

        {/* Review CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8 mb-12">
          <a
            href="https://www.trustpilot.com/review/pandacodegen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-stone-200 bg-white text-xs font-bold text-stone-700 shadow-xs hover:bg-[#00b67a] hover:text-white hover:border-[#00b67a] transition-all"
          >
            Review us on Trustpilot
          </a>
          <a
            href="https://clutch.co/profile/panda-code-gen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-stone-200 bg-white text-xs font-bold text-stone-700 shadow-xs hover:bg-charcoal hover:text-white hover:border-charcoal transition-all"
          >
            Review us on Clutch
          </a>
        </div>

      </div>
    </section>
  );
}
