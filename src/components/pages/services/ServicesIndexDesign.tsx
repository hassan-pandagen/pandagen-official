import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import PreviewShell from "@/components/redesign/PreviewShell";
import { CLIENT_REVIEWS } from "@/data/reviews";
import { servicePreviews } from "./service-data";
import s from "@/components/redesign/CommercialPreview.module.css";
import v from "./ServicesPreview.module.css";


const wordpress = {
  name: "WordPress websites & migration",
  slug: "wordpress-migration",
  lead: "Build or improve a WordPress site, or move it with a tested content and URL plan.",
};

const summaries: Record<string, string> = {
  "sanity-development": "Custom websites with a Sanity editor, content migration and a practical handover.",
  "backend-development": "Databases, sign-in and admin screens for your business, usually on Supabase, scoped with access and recovery checks.",
  wordpress: "A WordPress website you can update, with a written quote and a live editing walkthrough.",
  "custom-engineering": "Software and internal tools shaped around your actual workflow.",
  ecommerce: "New stores and custom storefronts, from product discovery to order handoff.",
  woocommerce: "Investigate checkout and extensions, then repair or rebuild with a plan.",
  wix: "Build, improve or move a Wix website around the editing and integrations you need.",
  squarespace: "Build, improve or move a Squarespace website with its content and connections mapped.",
  webflow: "Build or improve a Webflow site, or plan a move beyond its CMS and frontend limits.",
  gohighlevel: "Keep the CRM functions you need while improving the public site.",
  "ai-seo": "Research buyer questions, ship improvements and report what the evidence shows.",
};

export default function ServicesPreviewIndex() {
  const review = CLIENT_REVIEWS.find(item => item.id === "emblematic-studio");
  if (!review) throw new Error("Missing Emblematic Studio review");
  const all = [wordpress, ...servicePreviews.filter(item => item.slug !== "wordpress")];
  return <PreviewShell condensed><div className={s.page}>
    {/* 8 Oct 2026, owner: the headline on two lines like /pricing, copy on the left and
        real client work on the right, instead of a four-line headline and no image. */}
    <header className={v.hubHero}><div className={`${s.wrap} ${v.hubHeroGrid}`}><div><p className={s.eyebrow} style={{ color: "#E8763A" }}>PandaCodeGen / Services</p><h1 className={v.hubTitle}>Website design.{" "}<br /><span>Development, too.</span></h1><p className={v.hubLead}>A first website, a store, a move from the platform you have outgrown or software for the work behind it. Start with what your team needs to do; we will scope the right build.</p><div className={s.heroActions}><a href="#choose" className={s.buttonLight}>Explore the services ↓</a><QuoteModalButton cta="services_preview_hero" location="services" className={s.buttonLight}>Talk to the founders ↗</QuoteModalButton></div></div><figure className={`${v.heroVisual} ${v.hubVisual}`}><div className={v.imageBar}><span className={v.dots} aria-hidden="true"><i/><i/><i/></span><span>From the work archive</span></div><Image src="/work/emblematic-studio-home.png" alt="Emblematic Studio homepage, a custom brand and product site" width={1440} height={900} sizes="(min-width: 1051px) 46vw, 100vw" priority /><figcaption>Independent client / Emblematic Studio. <Link href="/work/emblematic-studio">See the project ↗</Link></figcaption></figure></div></header>

    <section id="choose" className={s.section}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>01 / Find your route</p><h2 className={v.storyTitle}>What do you need to build or improve?</h2></div><p>A simple WordPress site is welcome here. So is a store, a custom build or an existing site that needs attention. Talk directly with the founders, compare the options and get the scope and cost before work starts.</p></FadeIn>
      <div className={v.hubRows}>{all.map((item, index) => <Link href={`/services/${item.slug}`} className={v.hubRow} key={item.slug}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.name}</strong><p>{item.slug === "wordpress-migration" ? wordpress.lead : summaries[item.slug]}</p><span aria-hidden="true">↗</span></Link>)}</div>
    </div></section>

    <section className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <FadeIn className={v.hubFeature}><Link href="/work/emblematic-studio"><Image src="/work/emblematic-studio.png" alt="Emblematic Studio custom website" width={1912} height={914} sizes="(min-width: 800px) 55vw, 100vw" /></Link><div><p className={s.eyebrow}>02 / Client work you can inspect</p><h2 className={v.storyTitle}>The work is the proof.</h2><blockquote>“{review.quote}”</blockquote><p>{review.name} · <a href={review.href} target="_blank" rel="noopener noreferrer">{review.platform} review ↗</a></p><Link href="/work/emblematic-studio" className={s.textLink}>Explore Emblematic Studio ↗</Link></div></FadeIn>
    </div></section>

    <section className={`${s.section} ${s.sectionDark}`}><div className={s.wrap}>
      <p className={s.eyebrow}>03 / A clear agreement</p><h2 className={s.heading}>You know the work{" "}<br />before it starts.</h2><p className={s.darkIntro}>Custom website builds start at $1,500; WordPress work is quoted to scope. Monthly AI SEO starts at $500. The final price, content, integrations, checks and handover responsibilities go into a written scope.</p><div className={s.heroActions}><Link href="/pricing" className={s.buttonLight}>Explore starting prices ↗</Link><QuoteModalButton cta="services_preview_close" location="services" className={s.buttonLight}>Discuss your project ↗</QuoteModalButton></div>
    </div></section>
  </div></PreviewShell>;
}
