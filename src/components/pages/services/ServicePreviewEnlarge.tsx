"use client";

import Image from "next/image";
import { Expand, X, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { CmsPreviewLegend, CmsPreviewMarkers } from "./CmsPreviewAnnotations";
import styles from "./ServicePreviewEnlarge.module.css";
import { editorPreviewFor } from "./editor-preview-data";

export default function ServicePreviewEnlarge({ src, alt }: { src: string; alt: string }) {
  const annotation = editorPreviewFor(src);
  const annotated = Boolean(annotation);
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [imageWidth, setImageWidth] = useState(1912);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trigger = triggerRef.current;
    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  function closePreview() {
    setOpen(false);
    setZoomed(false);
  }

  return <>
    <div className={styles.launchRow}>
      <button ref={triggerRef} type="button" className={styles.trigger} aria-haspopup="dialog"
        aria-label={`Enlarge preview: ${alt}`} onClick={() => setOpen(true)}>
        <Expand size={16} aria-hidden="true" /> Enlarge preview
      </button>
    </div>
    {open && createPortal(
      <dialog ref={dialogRef} className={styles.dialog} aria-labelledby={titleId} data-lenis-prevent
        onCancel={event => { event.preventDefault(); closePreview(); }}
        onClose={closePreview}
        onKeyDown={event => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>('button, [tabindex="0"]');
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={event => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closePreview();
        }}>
        <div className={styles.toolbar}>
          <h2 id={titleId}>Preview</h2>
          <button type="button" className={styles.zoom} aria-pressed={zoomed} onClick={() => {
            setZoomed(!zoomed);
            viewportRef.current?.scrollTo({ left: 0, top: 0, behavior: "instant" });
          }}>
            {zoomed ? <ZoomOut size={18} aria-hidden="true" /> : <ZoomIn size={18} aria-hidden="true" />}
            {zoomed ? "Fit to screen" : "Zoom in"}
          </button>
          <button type="button" className={styles.close} aria-label="Close enlarged preview" onClick={closePreview}>
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <div ref={viewportRef} className={`${styles.viewport} ${zoomed ? styles.zoomed : ""}`} data-lenis-prevent
          tabIndex={0} role="region" aria-label="Screenshot preview" style={{ "--preview-width": `${imageWidth}px`, "--preview-ratio": annotation?.ratio ?? 1 } as CSSProperties}>
          <div className={`${styles.canvas} ${annotated ? styles.annotatedCanvas : ""}`}>
            <Image src={src} alt={alt} width={1912} height={914} unoptimized loading="eager" className={styles.image}
              onLoad={event => setImageWidth(event.currentTarget.naturalWidth)} />
            {annotated && <CmsPreviewMarkers src={src} annotation={annotation} detailed />}
          </div>
        </div>
        {annotated && <CmsPreviewLegend src={src} annotation={annotation} detailed />}
        <p className={styles.caption}>{alt}</p>
      </dialog>, document.body
    )}
  </>;
}
