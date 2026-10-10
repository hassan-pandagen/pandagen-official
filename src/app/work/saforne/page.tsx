import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import WorkCaseTitle from "@/components/redesign/case-study/WorkCaseTitle";
import { DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import { PROJECTS } from "@/data/company-facts";

const path = "/work/saforne";
const title = "Saforne Website Design Preview";
const description = "A leather goods storefront design preview for an independent client. See the website and its current status; the store is not yet open for sale.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: path },
  openGraph: { title, description, type: "website", url: "https://www.pandacodegen.com" + path, images: [{ url: "/work/saforne.png", width: 1912, height: 914, alt: "Saforne storefront preview" }] },
  twitter: { card: "summary_large_image", title, description },
};

export default function SaforneProjectPage() {
  const project = PROJECTS.find(item => item.name === "Saforne");
  if (!project) throw new Error("Missing Saforne project facts");
  return <PreviewShell condensed footerLinksOnly>
    <section className="px-6 pb-20 pt-12 md:px-10 md:pt-24" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-6 text-[12px] uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: T.quiet }}><Link href="/work">Work</Link> / Independent client / Design preview</p>
        <WorkCaseTitle>Saforne</WorkCaseTitle>
        <p className="mt-4 text-[22px] font-semibold" style={{ fontFamily: DISPLAY_SM, color: T.ink }}>A leather goods storefront in preview.</p>
        <p className="mt-6 max-w-[42rem] text-[17px] leading-relaxed" style={{ color: T.body }}>{project.fact}</p>
        <a href="https://dtc-brand-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium" style={{ backgroundColor: T.ink, color: T.paper }}>Open the design preview <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        <figure className="mt-10 border" style={{ borderColor: T.rule, backgroundColor: T.paperHi }}>
          <Image src="/work/saforne.png" alt="Saforne leather goods storefront design preview" width={1912} height={914} sizes="(min-width: 1100px) 1100px, 100vw" priority />
          <figcaption className="px-4 py-3 text-[12px] uppercase tracking-[0.08em]" style={{ fontFamily: MONO, color: T.quiet }}>Design preview / Not yet open for sale</figcaption>
        </figure>
        <div className="mt-10 grid gap-8 border-t pt-6 md:grid-cols-2" style={{ borderColor: T.rule }}>
          <div><h2 className="text-[20px] font-semibold">Relationship</h2><p className="mt-3 text-[15px] leading-relaxed" style={{ color: T.body }}>Independent client project. Saforne is listed separately from founder-affiliated businesses.</p></div>
          <div><h2 className="text-[20px] font-semibold">Current status</h2><p className="mt-3 text-[15px] leading-relaxed" style={{ color: T.body }}>The preview shows the design. It does not establish completed checkout, live sales or measured growth. No commerce, traffic or performance figures are published.</p></div>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[15px] underline underline-offset-4">
          <Link href="/services/ecommerce">Explore ecommerce website development</Link>
          <Link href="/work">Browse all projects</Link>
        </div>
      </div>
    </section>
  </PreviewShell>;
}
