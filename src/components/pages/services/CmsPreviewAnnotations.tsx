import type { CSSProperties } from "react";
import styles from "./CmsPreviewAnnotations.module.css";

import { editorPreviewFor } from "./editor-preview-data";
import type { PreviewAnnotations } from "./editor-preview-data";

export function CmsPreviewMarkers({ src = "/work/ladies-4-jesus-editor-devotional.png", detailed = false, annotation = editorPreviewFor(src) }: { src?: string; detailed?: boolean; annotation?: PreviewAnnotations }) {
  const steps = annotation?.steps;
  if (!steps) return null;
  return <div className={`${styles.markers} ${detailed ? styles.detailed : ""}`} aria-hidden="true">
    {steps.map((step, index) => <span key={step.label} className={styles.pin}
      style={{ "--pin-x": step.x, "--pin-y": step.y } as CSSProperties}>
      <span className={styles.number}>{index + 1}</span>
      {detailed && <span className={`${styles.label} ${step.side === "left" ? styles.labelLeft : styles.labelRight}`}>{step.label}</span>}
    </span>)}
  </div>;
}

export function CmsPreviewLegend({ src = "/work/ladies-4-jesus-editor-devotional.png", detailed = false, annotation = editorPreviewFor(src) }: { src?: string; detailed?: boolean; annotation?: PreviewAnnotations }) {
  const steps = annotation?.steps;
  if (!steps) return null;
  return <ol className={`${styles.legend} ${detailed ? styles.legendDetailed : ""}`} aria-label={annotation?.legendLabel ?? "How this content editor works"}>
    {steps.map((step, index) => <li key={step.label}>
      <span className={styles.legendNumber} aria-hidden="true">{index + 1}</span>
      <div><strong>{step.label}</strong>{detailed && <p>{step.detail}</p>}</div>
    </li>)}
  </ol>;
}
