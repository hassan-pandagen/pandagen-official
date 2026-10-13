import Image from "next/image";
import type { ImageProps } from "next/image";
import { CmsPreviewLegend, CmsPreviewMarkers } from "./CmsPreviewAnnotations";
import ServicePreviewEnlarge from "./ServicePreviewEnlarge";
import { editorPreviewFor } from "./editor-preview-data";
import styles from "./CmsPreviewAnnotations.module.css";

export function EditorPreviewNotes({ src, alt, enlargeUnannotated = false }: { src: string; alt: string; enlargeUnannotated?: boolean }) {
  const annotation = editorPreviewFor(src);
  if (!annotation && !enlargeUnannotated) return null;
  return <div className={styles.notes}>
    {annotation && <CmsPreviewLegend src={src} annotation={annotation} />}
    <ServicePreviewEnlarge src={src} alt={alt} />
  </div>;
}

export default function EditorScreenshot({ src, alt, notes = true, enlargeUnannotated = false, ...image }: Omit<ImageProps, "src"> & { src: string; notes?: boolean; enlargeUnannotated?: boolean }) {
  const annotation = editorPreviewFor(src);
  const annotated = Boolean(annotation);
  return <>
    <div className={styles.imageFrame}>
      <Image src={src} alt={alt} {...image} style={annotated ? { ...image.style, transform: "none" } : image.style} />
      <CmsPreviewMarkers src={src} annotation={annotation} />
    </div>
    {notes && <EditorPreviewNotes src={src} alt={alt} enlargeUnannotated={enlargeUnannotated} />}
  </>;
}
