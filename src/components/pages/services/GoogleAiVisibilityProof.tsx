import SearchConsoleChartPreview from "./SearchConsoleChartPreview";
import ServicePreviewEnlarge from "./ServicePreviewEnlarge";
import { pandaPatchesAiProof as proof } from "./panda-patches-ai-proof";
import chart from "./SearchConsoleChartPreview.module.css";
import s from "@/components/redesign/CommercialPreview.module.css";
import v from "./ServicesPreview.module.css";

export default function GoogleAiVisibilityProof() {
  return <section id="visibility" className={s.section}>
    <div className={s.wrap}>
      <div className={chart.heading}>
        <div><p className={`${s.eyebrow} ${v.eyebrow}`}>First-party evidence / Founder-affiliated business</p><h2 className={v.storyTitle}>Panda Patches&apos; Google AI visibility.</h2></div>
        <p>The Panda Patches Search Console screenshot shows {proof.displayedTotal} Generative AI impressions for {proof.period}. The chart includes the full displayed period, with its peaks and dips.</p>
      </div>
      <dl className={chart.metrics}>
        <div><dt>Displayed impressions</dt><dd className={chart.total}>{proof.displayedTotal}</dd></div>
        <div><dt>Report period</dt><dd>{proof.period}</dd></div>
        <div><dt>Screenshot captured</dt><dd>{proof.captured}</dd></div>
      </dl>
      <figure className={chart.figure}>
        <SearchConsoleChartPreview />
        <div className={chart.controls}><ServicePreviewEnlarge src={proof.src} alt={proof.alt} /></div>
        <figcaption className={v.caveat} style={{ padding: "0 16px 16px", maxWidth: "none" }}>The total is rounded as displayed by Search Console. Panda Patches is founder-affiliated, not independent client proof. Impressions are not visits, enquiries, revenue or ChatGPT citations; this screenshot does not establish what caused the change. Enlarge preview opens the unmodified screenshot.</figcaption>
      </figure>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[14px]">
        <a className={s.textLink} href={proof.src} target="_blank" rel="noopener noreferrer">View the original screenshot ↗</a>
        <a className={s.textLink} href="/work/panda-patches">Explore Panda Patches ↗</a>
        <a className={s.textLink} href={proof.definitionUrl} target="_blank" rel="noopener noreferrer">Google&apos;s report definition ↗<span className="sr-only"> (opens in a new tab)</span></a>
      </div>
    </div>
  </section>;
}
