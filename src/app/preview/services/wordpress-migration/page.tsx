import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import { COMMERCIAL } from "@/data/company-facts";
import { requiredMetric } from "@/data/case-study-facts";
import { CLIENT_REVIEWS } from "@/data/reviews";
import s from "@/components/redesign/CommercialPreview.module.css";
import v from "./MigrationPreview.module.css";

export const metadata: Metadata = { title: "WordPress migration preview", robots: { index: false, follow: false } };

function fact(label: string) {
  const value = COMMERCIAL.find(item => item.label === label)?.value;
  if (!value) throw new Error(`Missing commercial fact: ${label}`);
  return value;
}

function startingPrice(label: string) {
  const value = fact(label).match(/From (\$[\d,]+)/)?.[1];
  if (!value) throw new Error(`Missing starting price: ${label}`);
  return value;
}

/**
 * The page's visible FAQ. The live /services/wordpress-migration builds its
 * FAQPage data from this same list (30 Sep 2026), so the two cannot differ.
 */
export function migrationFaqs(): { q: string; a: string }[] {
  return [
    { q: "Will every old address keep working?", a: "The inventory identifies addresses in scope. We preserve them where possible and map changed addresses to relevant destinations. Redirects reduce avoidable loss; search engines still control indexing and rankings." },
    { q: "Can my team edit the new site?", a: "Yes, for the fields and workflows agreed in the build. The quote lists what your editors can change and which new features or templates would require development." },
    { q: "What will it cost?", a: `The published starting points are Starter at ${startingPrice("Starter")}, Growth at ${startingPrice("Growth")} and Scale at ${startingPrice("Scale")}. The inventory determines the right scope; your proposal sets the final price, third-party charges and delivery dates.` },
  ];
}

const stages = [
  { title: "Find what needs to move", body: "We inventory the pages, posts, images, forms, search metadata, connected tools and important URLs. The list tells us what can move directly and what needs rebuilding." },
  { title: "Build while the current site stays live", body: "The replacement takes shape on staging. Your team reviews its content, editing workflow and key journeys before we change the public site." },
  { title: "Test every agreed path", body: "We check the URL map, changed-address redirects, internal links, forms, analytics and representative pages against the accepted scope." },
  { title: "Switch over, then watch", body: "The launch plan assigns cutover, monitoring and rollback responsibilities. We inspect live behaviour and Search Console after the switch; search outcomes remain outside any agency's control." },
];

export default function WordPressMigrationPreview() {
  const review = CLIENT_REVIEWS.find(item => item.id === "mycustompatches");
  if (!review) throw new Error("Missing MyCustomPatches review");
  return <PreviewShell condensed><div className={s.page}>
    <header className={v.hero}><div className={s.wrap}>
      <div className={v.heroGrid}>
        <div><p className={s.eyebrow}>PandaCodeGen / WordPress migration</p><h1 className={v.heroTitle}>Outgrown<br />WordPress?<br /><span>Move with care.</span></h1><p className={v.heroLead}>Keep the content, enquiries and important addresses in view while we build a site your team can run.</p><div className={s.heroActions}><QuoteModalButton cta="wp_preview_hero" location="wordpress_migration" className={s.button}>Talk through your site ↗</QuoteModalButton><a href="#client-work" className={s.textLink}>See a completed move ↓</a></div></div>
        <FadeIn><div className={v.browser}><div className={v.browserBar}><span className={v.dots} aria-hidden="true"><i/><i/><i/></span><span>Completed client work / MyCustomPatches</span></div><Image src="/work/mycustompatches.png" alt="MyCustomPatches storefront after the WordPress migration" width={1912} height={914} sizes="(min-width: 900px) 45vw, 100vw" priority /><p className={v.browserCaption}>A real customer site, rebuilt while the previous WordPress site stayed live.</p></div></FadeIn>
      </div>
      <nav className={v.route} aria-label="Page journey"><a href="#client-work"><b>01</b> See the work</a><a href="#decision"><b>02</b> Repair or rebuild?</a><a href="#process"><b>03</b> How the move works</a></nav>
    </div></header>

    <section id="client-work" className={s.section}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>01 / See the work</p><h2 className={v.narrativeTitle}>A client migration you can inspect.</h2></div><p>MyCustomPatches moved from WordPress to a custom site. The delivery facts below come from its approved project record. Performance figures awaiting reconciliation are left out.</p></FadeIn>
      <div className={v.proofGrid}>
        <FadeIn><Image src="/work/mycustompatches-product-template.png" alt="MyCustomPatches product template on the completed site" width={1912} height={914} sizes="(min-width: 900px) 54vw, 100vw" className={v.proofImage} /><div className={v.proofFacts}><div><strong>{requiredMetric("mycustompatches", "delivery-days")}</strong><span>Recorded delivery</span></div><div><strong>{requiredMetric("mycustompatches", "urls-migrated")}</strong><span>URLs moved</span></div><div><strong>{requiredMetric("mycustompatches", "templates")}</strong><span>Distinct templates</span></div></div><Link href="/work/mycustompatches" className={v.imageLink}>Explore the complete project record ↗</Link></FadeIn>
        <FadeIn delay={2}><figure className={v.review}><p className={s.eyebrow} style={{ color: "#E8763A", marginBottom: 18 }}>The client, in their own words</p><blockquote>“{review.snippet}”</blockquote><figcaption><p>Matt Conner, Executive<br /><a href={review.href} target="_blank" rel="noopener noreferrer">Verified Clutch review ↗</a></p></figcaption></figure><p style={{ fontSize: 14, lineHeight: 1.6, color: "#5E5B55", marginTop: 25 }}>The project record reports {requiredMetric("mycustompatches", "downtime")} at cutover. This describes that launch; it is not a promise for another site.</p></FadeIn>
      </div>
      <FadeIn className={v.related}><Image src="/work/panda-patches.png" alt="Panda Patches storefront" width={640} height={306} sizes="200px" /><div><span className={s.eyebrow}>Another WordPress rebuild / Founder-affiliated</span><h3>Panda Patches</h3><p>A storefront, content editor and operations system. Panda Patches shares an owner with PandaCodeGen, so this is first-party work rather than independent client proof.</p></div><Link href="/work/panda-patches" className={s.textLink}>See the build ↗</Link></FadeIn>
    </div></section>

    <section id="decision" className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>02 / Decide what the site needs</p><h2 className={v.narrativeTitle}>First, find the real problem.</h2></div><p>A slow page alone does not justify replacing a website. We inspect the cause, the work your team repeats and the risk of changing platforms.</p></FadeIn>
      <div className={v.choiceGrid}><FadeIn className={v.choice} delay={1}><span className={s.eyebrow}>Path A / Repair</span><strong>Fix what you have.</strong><p>If the problem is an oversized image, one slow integration or a few unnecessary plugins, targeted work may be the better choice.</p><span className={v.choiceFooter}>Keep WordPress when it still serves the business.</span></FadeIn><FadeIn className={v.choice} delay={2}><span className={s.eyebrow}>Path B / Rebuild</span><strong>Change the structure.</strong><p>If publishing, checkout or operations depend on a fragile stack of plugins and manual handoffs, we can scope a replacement around the workflow you need.</p><span className={v.choiceFooter}>Move when the platform has become the constraint.</span></FadeIn></div>
      <p style={{ marginTop: 28, fontSize: 15, lineHeight: 1.7, maxWidth: 830, color: "#5E5B55" }}>We can document migration controls and measure the new site. We cannot guarantee rankings, traffic or a recovery date; search engines decide those outcomes.</p>
    </div></section>

    <section id="process" className={s.section}><div className={s.wrap}>
      <div className={v.processGrid}><div className={v.processIntro}><p className={s.eyebrow}>03 / The move</p><h2 className={s.heading}>A clear path<br />to launch.</h2><p style={{ fontSize: 17, lineHeight: 1.65, color: "#5E5B55", maxWidth: 380, marginTop: 25 }}>The inventory becomes the work list. The written scope says what moves, what changes, how we test it and who signs it off.</p></div><div className={v.processList}>{stages.map((stage, index) => <FadeIn className={v.processStep} key={stage.title} delay={(index % 3 + 1) as 1 | 2 | 3}><b>0{index + 1}</b><div><h3>{stage.title}</h3><p>{stage.body}</p></div></FadeIn>)}</div></div>
    </div></section>

    <section className={`${s.section} ${s.sectionDark}`}><div className={s.wrap}>
      <div className={v.scopeGrid}><div><p className={s.eyebrow}>04 / Starting price</p><p className={v.scopePrice}>$1,500</p><p style={{ color: "#A8A49C", fontSize: 14, marginTop: 15 }}>For a Starter scope of up to 7 pages. Larger content and integrations change the quote.</p></div><div><h2 className={s.heading}>No mystery<br />at handover.</h2><p className={v.scopeCopy}>Your quote states the pages, content responsibilities, redirects, checks, ownership and third-party costs. It sets the actual price and dates before work begins.</p><div className={s.heroActions}><Link href="/pricing" className={s.buttonLight}>Explore all starting scopes ↗</Link><QuoteModalButton cta="wp_preview_scope" location="wordpress_migration" className={s.buttonLight}>Discuss your site ↗</QuoteModalButton></div></div></div>
      <div className={v.scopeList}><div><b>Written scope</b>The inventory, deliverables and exclusions are named.</div><div><b>Handover check</b>{fact("Performance acceptance")}</div><div><b>Your control</b>{fact("Ownership on handover")}</div></div>
    </div></section>

    <section className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>05 / Before you decide</p><h2 className={v.narrativeTitle}>Questions worth asking.</h2></div><p>We answer these against your real website and put the project-specific answers into the quote.</p></FadeIn>
      {migrationFaqs().map((f) => <div key={f.q} className={s.faq}><h3>{f.q}</h3><p>{f.a}</p></div>)}
      <div style={{ marginTop: 30 }}><QuoteModalButton cta="wp_preview_close" location="wordpress_migration" className={s.button}>Show us your current site ↗</QuoteModalButton></div>
    </div></section>
  </div></PreviewShell>;
}
