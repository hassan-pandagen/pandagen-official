import Link from "next/link";
import AsamSearchEvidenceFigure from "@/components/redesign/case-study/AsamSearchEvidenceFigure";
import { ASAM_SEARCH_EVIDENCE } from "@/data/asam-search-evidence";
import { DISPLAY, T } from "@/components/redesign/tokens";

export default function AsamServiceEvidence() {
  return <section aria-labelledby="client-search-evidence" className="px-6 py-12 md:px-10 md:py-20" style={{ backgroundColor: T.paperHi }}>
    <div className="mx-auto max-w-[1250px]">
      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: T.accentText }}>Independent client / A Step Above Medical</p>
      <div className="mt-5 grid gap-6 lg:grid-cols-2 lg:gap-12">
        <h2 id="client-search-evidence" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", lineHeight: 1.15, textWrap: "balance" }}>A working business website. More visibility after launch.</h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>Students can find a class, register and pay online. Staff manage classes, student emails and certificates in one system. We rebuilt A Step Above Medical&apos;s WordPress website and connected the work behind it.</p>
          <p>Its owner-supplied Search Console screenshots also show higher visibility after the 20 October 2026 relaunch. Here are two daily readings from the account&apos;s Generative AI features report.</p>
        </div>
      </div>
      <dl className="mt-8 grid grid-cols-2 gap-4 border-y py-6" style={{ borderColor: T.rule }}>
        {ASAM_SEARCH_EVIDENCE.aiSamples.map(sample => <div key={sample.date}>
          <dt className="text-sm">{sample.label}</dt>
          <dd className="mt-2"><strong className="text-4xl md:text-5xl" style={{ color: T.accentText }}>{sample.impressions}</strong><span className="mt-2 block text-sm">AI impressions that day</span></dd>
        </div>)}
      </dl>
      <p className="mt-4 text-sm leading-relaxed">Two daily observations, not an average growth rate. These figures do not measure bookings or establish that the rebuild alone caused the increase.</p>
      <AsamSearchEvidenceFigure />
      <div className="mt-6 flex flex-wrap gap-6 font-semibold" style={{ color: T.accentText }}>
        <Link href="/work/a-step-above-medical#search-visibility" className="underline underline-offset-4">See the project and measurement details</Link>
        <Link href="/blog/ai-search-visibility-tracking#measure-ai-search-visibility" className="underline underline-offset-4">How to measure this for your business</Link>
      </div>
    </div>
  </section>;
}
