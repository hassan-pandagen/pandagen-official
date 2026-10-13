import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import EditorScreenshot from "./EditorScreenshot";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import PreviewShell from "@/components/redesign/PreviewShell";
import ServicePreviewEnlarge from "./ServicePreviewEnlarge";
import { CLIENT_REVIEWS } from "@/data/reviews";
import { servicePreviews } from "./service-data";
import s from "@/components/redesign/CommercialPreview.module.css";
import v from "./ServicesPreview.module.css";


const wordpress = {
  name: "WordPress to Next.js migration",
  slug: "wordpress-migration",
  lead: "Move from WordPress to a custom Next.js site with content, editing, URLs and integrations scoped before launch.",
};

const summaries: Record<string, string> = {
  "cms-development": "CMS websites, WordPress improvements, Sanity editors, content migration and a practical handover.",
  "backend-development": "Databases, sign-in and admin screens for your business, usually on Supabase, scoped with access and recovery checks.",
  wordpress: "WordPress design, development, redesign and host-to-host moves, scoped with a written quote.",
  "custom-engineering": "Custom CRM development, workflow automation, customer portals and staff dashboards.",
  ecommerce: "Ecommerce website development, Shopify/WooCommerce redesign and custom storefronts.",
  woocommerce: "WooCommerce development, slow-checkout investigation and store improvements, or a scoped migration.",
  wix: "Wix website design and redesign, mobile-layout improvements and migration when it fits.",
  squarespace: "Squarespace website design and redesign, with content, forms and scheduling in scope.",
  webflow: "Webflow development and redesign, CMS editing improvements, forms and platform moves.",
  gohighlevel: "GoHighLevel website design, slow-page repairs and connections to forms, bookings and pipelines.",
  "ai-seo": "AI SEO, AEO and GEO: buyer-question research, one agreed improvement and a monthly report.",
};

export default function ServicesPreviewIndex() {
  const review = CLIENT_REVIEWS.find(item => item.id === "emblematic-studio");
  if (!review) throw new Error("Missing Emblematic Studio review");
  const wordpressBuild = servicePreviews.find(item => item.slug === "wordpress");
  if (!wordpressBuild) throw new Error("Missing WordPress website service");
  const all = [wordpressBuild, wordpress, ...servicePreviews.filter(item => item.slug !== "wordpress")];
  return <PreviewShell condensed><div className={`${s.page} ${v.servicePage}`}>
    {/* 8 Oct 2026, owner: the headline on two lines like /pricing, copy on the left and
        real client work on the right, instead of a four-line headline and no image. */}
    <header className={v.hubHero}><div className={`${s.wrap} ${v.hubHeroGrid}`}><div><p className={`${s.eyebrow} ${v.eyebrow}`} style={{ color: "#E8763A" }}>PandaCodeGen / Services</p><h1 className={v.hubTitle}>Website design.{" "}<br /><span style={{ color: "#ebe9e4" }}><HeadingEmphasis text="Development, too." phrase="Development" onDark /></span></h1><p className={v.hubLead}>Website design and development for small businesses, custom sites and online stores. Build a new website, redesign what you have, fix a specific problem or plan a platform move. We agree the work and price before starting.</p><div className={s.heroActions}><a href="#choose" className={s.buttonLight}>Explore the services ↓</a><QuoteModalButton cta="services_preview_hero" location="services" className={s.buttonLight}>Talk to the founders ↗</QuoteModalButton></div></div><figure className={`${v.heroVisual} ${v.hubVisual}`}><div className={v.imageBar}><span className={v.dots} aria-hidden="true"><i/><i/><i/></span><span>From the work archive</span></div><EditorScreenshot notes={false} src="/work/emblematic-studio-home.png" alt="Emblematic Studio homepage, a custom brand and product site" width={1440} height={900} sizes="(min-width: 1051px) 46vw, 100vw" priority /><figcaption>Independent client / Emblematic Studio. <Link href="/work/emblematic-studio">See the project ↗</Link></figcaption><ServicePreviewEnlarge src="/work/emblematic-studio-home.png" alt="Emblematic Studio homepage, a custom brand and product site" /></figure></div></header>

    <section id="choose" className={s.section}><div className={s.wrap}>
      <FadeIn className={`${s.sectionHead} ${v.sectionHead}`}><div><p className={`${s.eyebrow} ${v.eyebrow}`}>01 / Find your route</p><h2 className={v.storyTitle}>What do you need to build or improve?</h2></div><p>A simple WordPress site is welcome here. So is a store, a custom build or an existing site that needs attention. Talk directly with the founders, compare the options and get the scope and cost before work starts.</p></FadeIn>
      <div className={v.hubRows}>{all.map((item, index) => <Link href={`/services/${item.slug}`} className={v.hubRow} key={item.slug}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.name}</strong><p>{item.slug === "wordpress-migration" ? wordpress.lead : summaries[item.slug]}</p><span aria-hidden="true">↗</span></Link>)}</div>
    </div></section>

    <section className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <FadeIn className={v.hubFeature}>
        <div className={v.hubFeatureMedia}>
          <Link href="/work/emblematic-studio" className={v.hubFeatureImage}>
            <EditorScreenshot notes={false} src="/work/emblematic-studio.png" alt="Emblematic Studio custom website" width={1912} height={914} sizes="(min-width: 761px) 55vw, calc(100vw - 48px)" />
          </Link>
          <div className={v.hubFeatureControls}>
            <ServicePreviewEnlarge src="/work/emblematic-studio.png" alt="Emblematic Studio custom website" />
          </div>
        </div><div><p className={`${s.eyebrow} ${v.eyebrow}`}>02 / Client work you can inspect</p><h2 className={v.storyTitle}>The work is the proof.</h2><blockquote>“{review.quote}”</blockquote><p>{review.name} · <a href={review.href} target="_blank" rel="noopener noreferrer">{review.platform} review ↗</a></p><Link href="/work/emblematic-studio" className={s.textLink}>Explore Emblematic Studio ↗</Link></div></FadeIn>
    </div></section>

    <section className={`${s.section} ${s.sectionDark}`}><div className={s.wrap}>
      <p className={`${s.eyebrow} ${v.eyebrow}`}>03 / A clear agreement</p><h2 className={s.heading}>You know the work{" "}<br />before it starts.</h2><p className={s.darkIntro}>Custom website builds start at $1,500; WordPress work is quoted to scope. Monthly AI SEO starts at $500. The final price, content, integrations, checks and handover responsibilities go into a written scope.</p><div className={s.heroActions}><Link href="/pricing" className={s.buttonLight}>Explore starting prices ↗</Link><QuoteModalButton cta="services_preview_close" location="services" className={s.buttonLight}>Discuss your project ↗</QuoteModalButton></div>
    </div></section>
  </div></PreviewShell>;
}
