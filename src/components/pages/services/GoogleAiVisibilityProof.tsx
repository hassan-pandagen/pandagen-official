import Image from "next/image";
import proof from "../../../../public/proof/google-ai-impressions.json";
import s from "@/components/redesign/CommercialPreview.module.css";
import v from "./ServicesPreview.module.css";

export default function GoogleAiVisibilityProof() {
  const first = proof.rows.slice(0, 28).reduce((sum, row) => sum + row.impressions, 0);
  const last = proof.rows.slice(-28).reduce((sum, row) => sum + row.impressions, 0);
  return <section id="visibility" className={s.section}>
    <div className={s.wrap}>
      <div className={s.sectionHead}>
        <div><p className={s.eyebrow}>First-party evidence / Our own website</p><h2 className={v.storyTitle}>Our Google AI visibility.</h2></div>
        <p>Google Search Console recorded {proof.totalImpressions.toLocaleString("en-US")} Generative AI impressions for pandacodegen.com from June 12 to September 11, 2026. The chart shows every daily reading, including the declines.</p>
      </div>
      <figure>
        <Image src="/proof/google-ai-impressions.svg" alt="Full 92-day Google Generative AI impressions chart for PandaCodeGen, including peaks and dips" width={1912} height={914} sizes="(min-width: 1400px) 1400px, 100vw" />
        <figcaption className={v.caveat}>Recreated from our September 13, 2026 Search Console export. First 28 days: {first.toLocaleString("en-US")} impressions; last 28 days: {last.toLocaleString("en-US")}. This is our own website&apos;s visibility, not an independent client result. Impressions are not visits, enquiries, revenue or ChatGPT citations; this chart does not establish what caused the change.</figcaption>
      </figure>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[14px]">
        <a className={s.textLink} href="/proof/google-ai-impressions.csv" download>Download the daily data ↓</a>
        <a className={s.textLink} href={proof.definitionUrl} target="_blank" rel="noopener noreferrer">Google&apos;s report definition ↗<span className="sr-only"> (opens in a new tab)</span></a>
      </div>
    </div>
  </section>;
}
