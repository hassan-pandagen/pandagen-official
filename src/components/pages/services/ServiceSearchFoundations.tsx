import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import Link from "next/link";
import { serviceSearchFoundations } from "@/data/service-search-foundations";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

/** Public, server-rendered scope explanation shared with service buyer FAQs. */
export default function ServiceSearchFoundations({ slug }: { slug: string }) {
  const content = serviceSearchFoundations[slug];
  if (!content) return null;
  return (
    <section id="search-foundations" aria-labelledby="search-foundations-title" className="px-6 py-8 md:px-10 md:py-20" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1250px]">
        <p className="text-[12px] font-semibold uppercase leading-relaxed tracking-[0.08em]" style={{ fontFamily: MONO, color: T.accentText }}>Website SEO / Search and AI access</p>
        <div className="mt-4 grid gap-4 md:mt-5 md:grid-cols-2 md:gap-12">
          <h2 id="search-foundations-title" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", lineHeight: 1.15, color: T.ink, textWrap: "balance" }}><HeadingEmphasis text={content.heading} /></h2>
          <p className="text-[16px] leading-[1.65]" style={{ color: T.body }}>{content.summary}</p>
        </div>
        <dl className="mt-6 border-t md:mt-8" style={{ borderColor: T.rule }}>
          {content.checks.map(([heading, body]) => <div key={heading} className="grid gap-2 border-b py-5 md:grid-cols-[1fr_2fr] md:gap-12 md:py-6" style={{ borderColor: T.rule }}>
            <dt className="text-[18px] font-semibold" style={{ color: T.ink }}>{heading}</dt>
            <dd className="text-[16px] leading-[1.65]" style={{ color: T.body }}>{body}</dd>
          </div>)}
        </dl>
        <p className="mt-5 max-w-[55rem] text-[15px] leading-[1.65] md:mt-6" style={{ color: T.body }}>
          Need ongoing buyer research, page improvements and visibility reporting? <Link href="/services/ai-seo" className="font-semibold underline underline-offset-4" style={{ color: T.accentText }}>AI search services</Link> are optional monthly work, scoped separately from the build. Search systems choose which pages they index or cite.
        </p>
      </div>
    </section>
  );
}
