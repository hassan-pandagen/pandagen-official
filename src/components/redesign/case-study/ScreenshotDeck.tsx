import type { CSSProperties } from "react";
import Image from "next/image";
import { T } from "@/components/redesign/tokens";
import styles from "./ScreenshotDeck.module.css";

type Shot = { key: string; src: string; width: number; height: number; alt: string; label: string; body: string };

/** Server-rendered screenshot sequence with a progressive scroll reveal.
 * Complete images and captions remain available without JavaScript or motion. */
export default function ScreenshotDeck({ shots, id, project, chapter }: { shots: Shot[]; id: string; project: string; chapter: string }) {
  return (
    <div style={{ "--deck-paper": T.paperHi, "--deck-ink": T.ink, "--deck-accent": T.accentText, "--deck-rule": T.rule } as CSSProperties}>
      <nav aria-label={`Screenshots: ${chapter}`}>
        <ol className={styles.index}>
          {shots.map((shot, index) => (
            <li key={shot.key}><a href={`#${id}-${shot.key}`}>{String(index + 1).padStart(2, "0")} / {shot.label}</a></li>
          ))}
        </ol>
      </nav>
      <ol className={styles.deck}>
        {shots.map((shot, index) => (
          <li key={shot.key} id={`${id}-${shot.key}`} className={styles.card} style={{ "--deck-index": index } as CSSProperties}>
            <figure className={styles.sheet}>
              <figcaption className={styles.caption}>
                <div className={styles.heading}>
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                  <h4 className={styles.title}>{shot.label}</h4>
                </div>
                <p className={styles.description}>{shot.body}</p>
              </figcaption>
              <a href={shot.src} target="_blank" rel="noopener noreferrer" className={styles.imageLink} aria-label={`Open full-size ${shot.label.toLowerCase()} screenshot (new tab)`}>
                <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="(min-width: 1536px) 1080px, (min-width: 1024px) 70vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)" className={styles.image} />
              </a>
              <div className={styles.footer}><span>{project} / {chapter}</span><span>Open full-size image ↗</span></div>
            </figure>
          </li>
        ))}
      </ol>
    </div>
  );
}
