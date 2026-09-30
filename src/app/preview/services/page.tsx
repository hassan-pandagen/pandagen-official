import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import PreviewShell from "@/components/redesign/PreviewShell";
import { CLIENT_REVIEWS } from "@/data/reviews";
import { servicePreviews } from "./service-data";
import s from "@/components/redesign/CommercialPreview.module.css";
import v from "./ServicesPreview.module.css";

export const metadata: Metadata = { title: "Services preview", robots: { index: false, follow: false } };

const wordpress = {
  name: "WordPress migration",
  slug: "wordpress-migration",
  lead: "Move content, enquiries and important addresses with a tested cutover plan.",
};

const summaries: Record<string, string> = {
  "custom-engineering": "Software and internal tools shaped around your actual workflow.",
  ecommerce: "New stores and custom storefronts, from product discovery to order handoff.",
  woocommerce: "Investigate checkout and extensions, then repair or rebuild with a plan.",
  wix: "Move beyond Wix when editing, design or integrations have become a constraint.",
  squarespace: "Map the content and connections before a tailored rebuild.",
  webflow: "Improve the current site or move beyond its CMS and frontend limits.",
  gohighlevel: "Keep the CRM functions you need while improving the public site.",
  "ai-seo": "Research buyer questions, ship improvements and report what the evidence shows.",
};

export default function ServicesPreviewIndex() {
  const review = CLIENT_REVIEWS.find(item => item.id === "emblematic-studio");
  if (!review) throw new Error("Missing Emblematic Studio review");
  const all = [wordpress, ...servicePreviews];
  return <PreviewShell condensed><div className={s.page}>
    <header className={v.hubHero}><div className={`${s.wrap} ${v.hubHeroGrid}`}><div><p className={s.eyebrow} style={{ color: "#E8763A" }}>PandaCodeGen / Services</p><h1 className={v.hubTitle}>Build what<br /><span>comes next.</span></h1></div><div><p className={v.hubLead}>A first website, a store, a move from the platform you have outgrown or software for the work behind it. Start with what your team needs to do; we will scope the right build.</p><div className={s.heroActions}><a href="#choose" className={s.buttonLight}>Explore the services ↓</a><QuoteModalButton cta="services_preview_hero" location="services" className={s.buttonLight}>Talk to the founders ↗</QuoteModalButton></div></div></div></header>

    <section id="choose" className={s.section}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>01 / Find your route</p><h2 className={v.storyTitle}>What needs to work better?</h2></div><p>You do not need to pick a technology first. These pages explain the questions we ask, the work we can show and how each project is scoped.</p></FadeIn>
      <div className={v.hubRows}>{all.map((item, index) => <Link href={`/services/${item.slug}`} className={v.hubRow} key={item.slug}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.name}</strong><p>{index === 0 ? wordpress.lead : summaries[item.slug]}</p><span aria-hidden="true">↗</span></Link>)}</div>
    </div></section>

    <section className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <FadeIn className={v.hubFeature}><Link href="/work/emblematic-studio"><Image src="/work/emblematic-studio.png" alt="Emblematic Studio custom website" width={1912} height={914} sizes="(min-width: 800px) 55vw, 100vw" /></Link><div><p className={s.eyebrow}>02 / Client work you can inspect</p><h2 className={v.storyTitle}>The work is the proof.</h2><blockquote>“{review.quote}”</blockquote><p>{review.name} · <a href={review.href} target="_blank" rel="noopener noreferrer">{review.platform} review ↗</a></p><Link href="/work/emblematic-studio" className={s.textLink}>Explore Emblematic Studio ↗</Link></div></FadeIn>
    </div></section>

    <section className={`${s.section} ${s.sectionDark}`}><div className={s.wrap}>
      <p className={s.eyebrow}>03 / A clear agreement</p><h2 className={s.heading}>You know the work<br />before it starts.</h2><p className={s.darkIntro}>Projects start at $1,500 for a focused build. Monthly AI SEO starts at $500. The final price, content, integrations, checks and handover responsibilities go into a written scope.</p><div className={s.heroActions}><Link href="/pricing" className={s.buttonLight}>Explore starting prices ↗</Link><QuoteModalButton cta="services_preview_close" location="services" className={s.buttonLight}>Discuss your project ↗</QuoteModalButton></div>
    </div></section>
  </div></PreviewShell>;
}
