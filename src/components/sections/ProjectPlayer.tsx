"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./ProjectPlayer.module.css";

const projects = [
  {
    name: "NorthDeck Group",
    kind: "Client website",
    image: "/work/northdeck-group.png",
    href: "https://northdeckgroup.com/",
    external: true,
  },
  {
    name: "MyCustomPatches",
    kind: "Independent client",
    image: "/work/mycustompatches.png",
    href: "/work/mycustompatches",
    external: false,
  },
  {
    name: "Emblematic Studio",
    kind: "Independent client",
    image: "/work/emblematic-studio.png",
    href: "/work/emblematic-studio",
    external: false,
  },
  {
    name: "Ladies 4 Jesus",
    kind: "Client website",
    image: "/work/ladies-4-jesus.png",
    href: "/work/ladies-4-jesus",
    external: false,
  },
  {
    name: "Panda Patches",
    kind: "Founder-owned project",
    image: "/work/panda-patches.png",
    href: "/work/panda-patches",
    external: false,
  },
] as const;

export default function ProjectPlayer() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const current = projects[index];
  const next = projects[(index + 1) % projects.length];

  const step = (direction: number) => {
    setIndex((value) => (value + direction + projects.length) % projects.length);
  };

  const projectLink = current.external ? (
    <a href={current.href} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
      Open live site <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  ) : (
    <Link href={current.href} className={styles.projectLink}>
      View project <ArrowUpRight aria-hidden="true" size={16} />
    </Link>
  );

  return (
    <div
      className={styles.player}
      role="region"
      aria-label="Selected website projects"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); step(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); step(1); }
      }}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const distance = event.changedTouches[0]?.clientX - touchStartX.current;
        if (Math.abs(distance) > 55) step(distance < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      <div className={styles.topline}>
        <span>Selected websites</span>
        <span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
      </div>

      <div className={styles.viewport}>
        <div className={styles.activeFrame} key={current.name}>
          <Image
            src={current.image}
            alt={`${current.name} website front page`}
            fill
            sizes="(min-width: 1024px) 430px, (min-width: 640px) 70vw, 76vw"
            className={styles.screenshot}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : undefined}
          />
        </div>
        <div className={styles.nextFrame} aria-hidden="true">
          <Image
            src={next.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 220px, 36vw"
            className={styles.screenshot}
          />
        </div>
        <div className={styles.controls}>
          <button type="button" onClick={() => step(-1)} aria-label="Previous website" className={styles.arrow}>
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next website" className={styles.arrow}>
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>

      <div className={styles.caption} aria-live="polite" aria-atomic="true">
        <div>
          <p className={styles.kind}>{current.kind}</p>
          <p className={styles.name}>{current.name}</p>
        </div>
        {projectLink}
      </div>
    </div>
  );
}
