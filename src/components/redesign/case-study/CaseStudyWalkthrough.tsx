import HeadingEmphasis from "../HeadingEmphasis";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import ScreenshotDeck from "./ScreenshotDeck";
import { T } from "../tokens";
import styles from "./CaseStudyWalkthrough.module.css";

export type WalkthroughShot = { key: string; src: string; width: number; height: number; alt: string; label: string; body: string };

export type WalkthroughChapter = {
  id: string;
  label: string;
  title: string;
  description: string;
  detail: string;
  note: string;
  shots: WalkthroughShot[];
  /** Optional link out (e.g. to a related case study), shown at the end of this chapter's copy. */
  more?: { href: string; label: string };
};

/**
 * The sticky-sidebar chapter walkthrough, extracted from the Panda Patches
 * build so the next case study reuses the pattern, not a copy of Panda's
 * content. See PandaPatchesWalkthrough.tsx for the reference usage.
 *
 * Chapters and shots are the caller's evidence to gather, same as Panda's:
 * real screenshots, real width/height, copy checked against the live
 * product -- this component only supplies the shared layout and motion.
 */
export default function CaseStudyWalkthrough({
  slug,
  projectName,
  eyebrow,
  heading,
  lead,
  navAriaLabel,
  chapters,
  handoff,
}: {
  slug: string;
  /** Real project name, e.g. "Ladies 4 Jesus" -- shown in each screenshot's caption footer. */
  projectName: string;
  eyebrow: string;
  heading: ReactNode;
  lead: ReactNode;
  navAriaLabel: string;
  chapters: WalkthroughChapter[];
  handoff: string;
}) {
  const titleId = `${slug}-walkthrough-title`;

  return (
    <section
      id={`${slug}-walkthrough`}
      aria-labelledby={titleId}
      className={styles.walkthrough}
      style={{ "--walk-paper": T.paper, "--walk-ink": T.ink, "--walk-body": T.body, "--walk-quiet": T.quiet, "--walk-accent": T.accentText, "--walk-rule": T.rule } as CSSProperties}
    >
      <header className={styles.intro}>
        <div className={styles.introCopy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id={titleId}>{heading}</h2>
          <p className={styles.lead}>{lead}</p>
        </div>
        <nav aria-label={navAriaLabel} className={styles.navigation}>
          <p className={styles.overviewLabel}>Explore the build</p>
          {chapters.map((chapter, index) => (
            <a key={chapter.id} href={`#${slug}-${chapter.id}`}>
              <span className={styles.chapterNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span><strong>{chapter.label}</strong><span className={styles.chapterSummary}>{chapter.title}</span></span>
              <span className={styles.chapterArrow} aria-hidden="true">↘</span>
            </a>
          ))}
        </nav>
      </header>
      {chapters.map((chapter, index) => (
        <section key={chapter.id} id={`${slug}-${chapter.id}`} aria-labelledby={`${slug}-${chapter.id}-title`} className={styles.chapter}>
          <div className={styles.explanation}>
            <p className={styles.eyebrow}>{String(index + 1).padStart(2, "0")} / {chapter.label}</p>
            <h3 id={`${slug}-${chapter.id}-title`}><HeadingEmphasis text={chapter.title} /></h3>
            <p>{chapter.description}</p>
            <p>{chapter.detail}</p>
            <p className={styles.note}>{chapter.note}</p>
            {chapter.more && (
              <Link className={styles.more} href={chapter.more.href}>
                {chapter.more.label} <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
          <div className={styles.screens}>
            <ScreenshotDeck id={`${slug}-${chapter.id}-screen`} project={projectName} chapter={chapter.label} shots={chapter.shots} />
          </div>
        </section>
      ))}
      <p className={styles.handoff}>{handoff}</p>
    </section>
  );
}
