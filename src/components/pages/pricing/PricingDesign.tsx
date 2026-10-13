import Image from "next/image";
import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import PriceAmount from "@/components/redesign/PriceAmount";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import FaqRows from "@/components/ui/FaqRows";
import { COMMERCIAL } from "@/data/company-facts";
import { pricingFaqs } from "@/data/pricing-faqs";
import { CLIENT_REVIEWS } from "@/data/reviews";
import s from "@/components/redesign/CommercialPreview.module.css";
import v from "./PricingPreview.module.css";


function fact(label: string) {
  const value = COMMERCIAL.find(item => item.label === label)?.value;
  if (!value) throw new Error(`Missing commercial fact: ${label}`);
  return value;
}

const tiers = [
  { name: "Starter", number: "01", note: "A focused first website", detail: fact("Starter"), timing: fact("Delivery, Starter") },
  { name: "Growth", number: "02", note: "More content or a full move", detail: fact("Growth"), timing: fact("Delivery, Growth") },
  { name: "Scale", number: "03", note: "A larger or connected build", detail: fact("Scale"), timing: fact("Delivery, Scale") },
];

const questions = [
  "Which package should I start with?",
  "What can I change myself, and what still needs you?",
  "When do I pay?",
  "What support is included?",
  "How is the 90+ performance target checked?",
  "What if the honest answer is that we should not migrate?",
];

/**
 * The pricing FAQs this page shows, in order. The live /pricing builds its
 * FAQPage data from this (30 Sep 2026), so it lists only visible questions.
 */
export function pricingPageFaqs() {
  return questions.map((q) => {
    const faq = pricingFaqs.find((item) => item.q === q);
    if (!faq) throw new Error(`Missing pricing FAQ: ${q}`);
    return faq;
  });
}

export function PricingPreview() {
  const review = CLIENT_REVIEWS.find(item => item.id === "emblematic-studio");
  if (!review) throw new Error("Missing Emblematic Studio review");
  return <PreviewShell condensed><div className={s.page}>
    <header className={v.hero}><div className={`${s.wrap} ${v.heroGrid}`}>
      <div><p className={s.eyebrow} style={{ color: "#E8763A" }}>PandaCodeGen / Example scopes</p><h1 className={v.heroTitle}>A better site.{" "}<br /><span style={{ color: "#ebe9e4" }}><HeadingEmphasis text="A clear price." phrase="clear price" onDark /></span></h1><p className={v.heroCopy}>Custom website builds start at <strong><PriceAmount value="$1,500" onDark /></strong>. WordPress builds are quoted to their own scope. We agree the pages, features, handover checks and final price in writing before work begins.</p><div className={s.heroActions}><a href="#find-your-fit" className={s.buttonLight}>Find your starting point ↓</a><QuoteModalButton cta="pricing_preview_hero" location="pricing" className={s.buttonLight}>Talk about your project ↗</QuoteModalButton></div></div>
      <div className={v.proposal} aria-label="Illustration of the three parts of a written proposal"><div className={v.proposalTop}><span>Example custom build</span><span>01 / 03</span></div><p className={v.proposalPrice}><PriceAmount value="$1,500" /></p><p className={v.proposalLabel}>Published starting price for a focused custom website. Your quote sets the final amount.</p><div style={{ marginTop: 34 }}><div className={v.proposalRow}><span>What gets built</span><span>Named</span></div><div className={v.proposalRow}><span>How it is checked</span><span>Named</span></div><div className={v.proposalRow}><span>What you own</span><span>Named</span></div></div></div>
    </div></header>

    <section id="find-your-fit" className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>01 / Your starting point</p><h2 className={s.heading}>What are you{" "}<br /><span className={v.sectionAccent}>building?</span></h2></div><p>You do not need to know your page count yet. Start with the kind of work; we will identify the closest published scope after seeing what the site needs to do.</p></FadeIn>
      <div className={v.pathGrid}>
        <FadeIn delay={1}><a href="#starter" className={v.pathCard}><div><span className={s.eyebrow}>A first or smaller site</span><strong>A focused website.</strong><p>Core pages and an editor for the words and images your team changes.</p></div><span>Explore Starter ↗</span></a></FadeIn>
        <FadeIn delay={2}><a href="#growth" className={v.pathCard}><div><span className={s.eyebrow}>A fuller website or migration</span><strong>More to connect.</strong><p>More content, a tailored editor, or an existing site with URLs to move.</p></div><span>Explore Growth ↗</span></a></FadeIn>
        <FadeIn delay={3}><a href="#scale" className={v.pathCard}><div><span className={s.eyebrow}>Commerce or complexity</span><strong>A bigger system.</strong><p>Large catalogues, subscriptions, multiple languages or custom logic.</p></div><span>Explore Scale ↗</span></a></FadeIn>
      </div>
    </div></section>

    <section id="scopes" className={s.section}><div className={s.wrap}>
      <div className={s.sectionHead}><div><p className={s.eyebrow}>01 / Starting points</p><h2 className={s.heading}>Find the shape{" "}<br /><HeadingEmphasis text="of your project." /></h2></div><p>These are custom-build starting prices, not instant quotes. Page count helps place a project; content, integrations, approvals and migration risk set its actual scope. WordPress work is quoted separately.</p></div>
      <div className={s.tierList}>{tiers.map(tier => {
        const price = tier.detail.match(/From \$[\d,]+/)?.[0];
        if (!price) throw new Error(`Missing price in ${tier.name} fact`);
        return <FadeIn className={`${s.tier} ${v.tierAnchor}`} id={tier.name.toLowerCase()} key={tier.name}>
          <div><span className={s.tag}>{tier.number} / {tier.note}</span><h3 className={s.tierName}>{tier.name}</h3></div>
          <div><p className={s.tierBody}>{tier.detail.replace(`${price}. `, "")}</p><p className={s.tierMeta}>Planning delivery range: {tier.timing}</p></div>
          <div><p className={s.tierPrice}><PriceAmount value={price.replace("From ", "")} /></p><p className={s.tierMeta}>Starting price{" "}<br />Final amount in your written quote</p></div>
        </FadeIn>;
      })}</div>
      <p style={{ maxWidth: 760, marginTop: 28, fontSize: 15, lineHeight: 1.65, color: "#5E5B55" }}>{fact("Above that range")} Delivery ranges overlap; the accepted written terms set your project&apos;s dates. <Link href="/services/wordpress" className={s.textLink}>Explore WordPress website builds ↗</Link></p>
      <div className={s.rail}><a href="#quote">How quotes work ↓</a><a href="#questions" className={s.questionJump}>Common questions ↓</a><Link href="/services/wordpress-migration">WordPress migration example ↗</Link></div>
    </div></section>

    <section className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <FadeIn className={v.caseBand}><div><Image src="/work/emblematic-studio.png" alt="Emblematic Studio product website built by PandaCodeGen" width={1912} height={914} sizes="(min-width: 900px) 54vw, 100vw" className={v.caseImage} /></div><div><p className={s.eyebrow}>A client project / Emblematic Studio</p><blockquote className={v.caseQuote}>“{review.quote}”</blockquote><p className={v.caseAttribution}>{review.name} · <a href={review.href} target="_blank" rel="noopener noreferrer" className={s.textLink}>{review.platform} review ↗</a></p><Link href="/work/emblematic-studio" className={s.textLink}>See the project ↗</Link></div></FadeIn>
    </div></section>

    <section id="quote" className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <div className={s.sectionHead}><div><p className={s.eyebrow}>02 / The agreement</p><h2 className={s.heading}>The useful detail{" "}<br /><span className={v.sectionAccent}>is in writing.</span></h2></div><p>The starting price starts a conversation. The approved proposal is where the deliverables, exclusions, payment dates, third-party fees and acceptance checks become specific.</p></div>
      <div className={s.numberGrid}>
        <div className={s.numberItem}><span className={s.eyebrow}>Before work</span><strong>Scope.</strong><p>We list pages, content, integrations, responsibilities and what is outside the build.</p></div>
        <div className={s.numberItem}><span className={s.eyebrow}>Before handover</span><strong>Checks.</strong><p>{fact("Performance acceptance")}</p></div>
        <div className={s.numberItem}><span className={s.eyebrow}>After launch</span><strong>Control.</strong><p>{fact("Ownership on handover")} Support and hosting are agreed separately.</p></div>
      </div>
      <div className={s.proof} style={{ marginTop: 54 }}><strong>Ongoing costs{" "}<br />and ownership.</strong><p>{fact("Ongoing services")} {fact("Hosting")}</p></div>
    </div></section>

    <section id="questions" className={s.section}><div className={s.wrap}>
      <div className={s.sectionHead}><div><p className={s.eyebrow}>03 / Questions</p><h2 className={s.heading}>Before you{" "}<br />commit.</h2></div><p>Answers are kept visible so you can read the conditions as well as the headline.</p></div>
      <FaqRows faqs={pricingPageFaqs().map(({ q, a }) => ({ question: q, answer: a }))} />
      <div className={s.heroActions} style={{ marginTop: 30 }}><QuoteModalButton cta="pricing_preview_close" location="pricing" className={s.button}>Talk through your project ↗</QuoteModalButton><Link className={s.textLink} href="/pricing">Read all pricing questions ↗</Link></div>
    </div></section>
  </div></PreviewShell>;
}
