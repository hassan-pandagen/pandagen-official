import Link from "next/link";
import { serviceSearchFoundations } from "@/data/service-search-foundations";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

/** Public, server-rendered scope explanation shared with service buyer FAQs. */
export default function ServiceSearchFoundations({ slug }: { slug: string }) {
  const content = serviceSearchFoundations[slug];
  if (!content) return null;
  return (
    <section id="search-foundations" aria-labelledby="search-foundations-title" className="px-6 py-16 md:px-10 md:py-20" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1250px]">
        <p className="text-[11px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.accentText }}>Website SEO / Search and AI access</p>
        <div className="mt-5 grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 id="search-foundations-title" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", lineHeight: 1.05, color: T.ink }}>{content.heading}</h2>
          <p className="text-[16px] leading-[1.65]" style={{ color: T.body }}>{content.summary}</p>
        </div>
        <dl className="mt-8 border-t" style={{ borderColor: T.rule }}>
          {content.checks.map(([heading, body]) => <div key={heading} className="grid gap-3 border-b py-6 md:grid-cols-[1fr_2fr] md:gap-12" style={{ borderColor: T.rule }}>
            <dt className="text-[18px] font-semibold" style={{ color: T.ink }}>{heading}</dt>
            <dd className="text-[16px] leading-[1.65]" style={{ color: T.body }}>{body}</dd>
          </div>)}
        </dl>
        <p className="mt-6 max-w-[55rem] text-[14px] leading-[1.65]" style={{ color: T.quiet }}>
          Need ongoing buyer research, page improvements and visibility reporting? <Link href="/services/ai-seo" className="font-semibold underline underline-offset-4" style={{ color: T.accentText }}>AI SEO, AEO and GEO services</Link> are optional monthly work, scoped separately from the build. Search systems choose which pages they index or cite.
        </p>
      </div>
    </section>
  );
}
