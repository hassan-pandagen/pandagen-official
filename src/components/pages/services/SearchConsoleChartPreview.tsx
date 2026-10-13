import Image from "next/image";
import { pandaPatchesAiProof as proof } from "./panda-patches-ai-proof";
import styles from "./SearchConsoleChartPreview.module.css";

/** A CSS viewport onto the full chart and date axis; the source image stays intact. */
export default function SearchConsoleChartPreview({ priority = false, summary = false }: { priority?: boolean; summary?: boolean }) {
  return <>
    {summary && <div className={styles.heroSummary}><p>Generative AI impressions</p><strong>{proof.displayedTotal}</strong><p>{proof.period} · Rounded total</p></div>}
    <div className={styles.crop}>
      <Image src={proof.src} alt={proof.alt} width={1920} height={945}
        sizes="(min-width: 1051px) 90vw, 128vw" priority={priority} className={styles.image} />
    </div>
  </>;
}
