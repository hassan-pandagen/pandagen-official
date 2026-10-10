"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./WorkReel.module.css";

export type ReelProject = {
  name: string;
  label: string;
  relationship: string;
  href: string;
  image: string;
  thumbnailImage?: string;
  thumbnailLabel?: string;
  status?: string;
  external?: boolean;
};

type Props = {
  id: string;
  number: string;
  title: string;
  description: string;
  projects: ReelProject[];
  dark?: boolean;
};

export default function WorkReel({ id, number, title, description, projects, dark = false }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];
  const next = () => setActiveIndex(index => (index + 1) % projects.length);
  const previous = () => setActiveIndex(index => (index - 1 + projects.length) % projects.length);

  return (
    <section id={id} className={`${styles.section} ${dark ? styles.dark : ""}`} aria-labelledby={`${id}-title`}>
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>{number} / Project reel</p>
            <h2 id={`${id}-title`} className={styles.sectionTitle}>{title}</h2>
          </div>
          <p className={styles.sectionDescription}>{description}</p>
        </div>

        <div className={styles.theatre}>
          <div className={styles.screen}>
            <div className={styles.screenBar}>
              <span className={styles.screenDots} aria-hidden="true"><i /><i /><i /></span>
              <span>On screen / {String(activeIndex + 1).padStart(2, "0")} of {String(projects.length).padStart(2, "0")}</span>
            </div>
            <div className={styles.screenImage}>
              <Image key={active.image} src={active.image} alt={`${active.name} project screenshot`} fill sizes="(min-width: 1100px) 65vw, (min-width: 700px) 90vw, 100vw" priority={number === "01" && activeIndex === 0} className={styles.fullImage} />
            </div>
            <div className={styles.screenBottom}><span>{active.label}</span><span>Still frame / Project archive</span></div>
          </div>

          <div className={styles.projectInfo}>
            <p className={styles.projectIndex}>Frame {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</p>
            <div aria-live="polite" aria-atomic="true">
              <p className={styles.relationship}>{active.relationship}</p>
              <h3 className={styles.projectTitle}>{active.name}</h3>
              <p className={styles.projectLabel}>{active.label}</p>
              {active.status && <p className={styles.status}>{active.status}</p>}
            </div>
            <div className={styles.infoBottom}>
              <Link href={active.href} {...(active.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={styles.projectLink}>
                {active.external ? "Open the preview build" : "Explore the project"}<ArrowUpRight size={18} aria-hidden="true" />
                {active.external && <span className="sr-only"> (opens in a new tab)</span>}
              </Link>
              <div className={styles.controls} aria-label={`Browse ${title.toLowerCase()}`}>
                <button type="button" onClick={previous} aria-label="Previous project"><ArrowLeft size={20} aria-hidden="true" /></button>
                <button type="button" onClick={next} aria-label="Next project"><ArrowRight size={20} aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.filmstrip} role="group" aria-label={`Choose a ${title.toLowerCase()} project`}>
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.href}
              onClick={() => setActiveIndex(index)}
              className={`${styles.frame} ${index === activeIndex ? styles.active : ""}`}
              aria-pressed={index === activeIndex}
            >
              <span className={styles.frameImage}><Image src={project.thumbnailImage ?? project.image} alt="" fill sizes={projects.length <= 2 ? "(min-width: 1000px) 50vw, (min-width: 700px) 45vw, 180px" : "(min-width: 1000px) 20vw, 180px"} /></span>
              <span className={styles.frameMeta}><span>{String(index + 1).padStart(2, "0")} / {project.thumbnailLabel ?? project.name}</span><span aria-hidden="true">↗</span></span>
              <span className="sr-only">: show {project.name}</span>
            </button>
          ))}
        </div>
        <details className={styles.projectDirectory}>
          <summary>All projects in this reel</summary>
          <nav aria-label={`${title} project pages`}>
            {projects.map((project) => (
              <Link key={project.href} href={project.href} {...(project.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {project.name}<ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </section>
  );
}
