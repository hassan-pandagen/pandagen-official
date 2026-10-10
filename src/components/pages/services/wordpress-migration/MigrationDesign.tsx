import Image from "next/image";
import Link from "next/link";
import ServiceSearchFoundations from "../ServiceSearchFoundations";
import type { ReactNode } from "react";
import FadeIn from "@/components/ui/FadeIn";
import PreviewShell from "@/components/redesign/PreviewShell";
import OwnershipCompare from "@/components/redesign/OwnershipCompare";
import { SERVICE_PORTABILITY } from "@/data/platform-portability";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import FaqRows from "@/components/ui/FaqRows";
import { migrationFaqs } from "@/data/wordpress-migration-faqs";
export { migrationFaqs } from "@/data/wordpress-migration-faqs";
import { COMMERCIAL } from "@/data/company-facts";
import { requiredMetric } from "@/data/case-study-facts";
import { CLIENT_REVIEWS } from "@/data/reviews";
import { spec } from "@/data/spec-facts";
import s from "@/components/redesign/CommercialPreview.module.css";
import v from "./MigrationPreview.module.css";


function fact(label: string) {
  const value = COMMERCIAL.find(item => item.label === label)?.value;
  if (!value) throw new Error(`Missing commercial fact: ${label}`);
  return value;
}

const stages = [
  { title: "Find what needs to move", body: "We inventory the pages, posts, images, forms, search metadata, connected tools and important URLs. The list tells us what can move directly and what needs rebuilding." },
  { title: "Build while the current site stays live", body: "The replacement takes shape on staging. Your team reviews its content, editing workflow and key journeys before we change the public site." },
  { title: "Test every agreed path", body: "We check the URL map, changed-address redirects, internal links, forms, analytics and representative pages against the accepted scope." },
  { title: "Switch over, then watch", body: "The launch plan assigns cutover, monitoring and rollback responsibilities. We inspect live behaviour and Search Console after the switch; search outcomes remain outside any agency's control." },
];

// 3 Oct 2026: carried over from the earlier live page, which asked owners to total
// these from their own billing. Its old claims ("No monthly fees", "Full code
// ownership on day one") are not carried over; hosting is named with its price.
const costLines = [
  ["Hosting", "Your host's invoice"],
  ["Plugin and theme licences", "Renewal emails"],
  ["Security and backup tools", "Card statement"],
  ["Maintenance retainer", "Your agency or developer"],
  ["Fixes and downtime", "Your own records"],
] as const;

// 3 Oct 2026: owner quotes carried over from the earlier live page, but only
// sentences confirmed word for word against Reddit through Firecrawl search
// excerpts that day. The old page had drifted: it dropped words ("swears that"),
// changed others ("monthly/yearly subscriptions etc."), and spliced two of
// corey_brown's sentences so the warning "nearly everything you want will need
// to be custom coded" disappeared. The original poster's username could not be
// confirmed, so it is not given.
const THREAD = "https://www.reddit.com/r/nextjs/comments/18pyr4p/would_love_to_upgrade_from_wordpress_but_need/";
const ownerQuotes = [
  { text: "For almost a decade I have been \u201csuffering from WordPressitis\u201d, experimenting with various plugins, themes and suspicious developers.", who: "Original poster, r/nextjs" },
  { text: "I either stumble on an agency charging me 100k for one site, or an UpWork specialist who swears that his templates are the right ones\u2026", who: "Original poster, r/nextjs" },
  { text: "Next absolutely can do just about anything you want, but nearly everything you want will need to be custom coded.", who: "corey_brown, r/nextjs" },
] as const;

const paths = [
  { label: "Start", title: "Build the WordPress site you need.", body: "If straightforward pages, forms and editing cover the job, we can build a WordPress site around that scope. You do not need a migration or a custom stack to get a useful site.", note: "Explore WordPress website builds", href: "/services/wordpress" },
  { label: "Improve", title: "Fix the part slowing you down.", body: "An oversized image, a slow integration or a few unnecessary plugins may call for targeted work. We look at the cause before recommending a rebuild.", note: "Keep WordPress when it still serves the business." },
  { label: "Migrate", title: "Move when the structure holds you back.", body: "If publishing, checkout or operations depend on fragile plugins and manual handoffs, we can plan a replacement around the workflow you need.", note: "See how the move works", href: "#process" },
] as const;

export function WordPressMigrationPreview() {
  const review = CLIENT_REVIEWS.find(item => item.id === "mycustompatches");
  const ladiesReview = CLIENT_REVIEWS.find(item => item.id === "ladies-4-jesus");
  if (!review || !ladiesReview) throw new Error("Missing migration client review");

  // Match the homepage's nested sticky rows so all three release together.
  function renderPath(index: number): ReactNode {
    const path = paths[index];
    if (!path) return null;
    return <div className={`${v.pathItem} ${index > 0 ? v.pathItemInner : ""}`} key={path.label}>
      <div className={v.pathHead} style={{ top: `${96 + index * 82}px`, zIndex: 6 - index }}>
        <span>0{index + 1}.</span><h3>{path.title}</h3><span className={v.pathArrow} aria-hidden="true">↙</span>
      </div>
      <div className={v.pathBody}><div><p className={v.pathLabel}>Path {String.fromCharCode(65 + index)} / {path.label}</p><p>{path.body}</p>{"href" in path ? <Link href={path.href} className={v.pathLink}>{path.note} ↗</Link> : <p className={v.pathNote}>{path.note}</p>}</div></div>
      {renderPath(index + 1)}
      {index === paths.length - 1 && <div className={v.pathTail} aria-hidden="true" />}
    </div>;
  }

  return <PreviewShell condensed><div className={`${s.page} ${v.migrationPage}`}>
    <header className={v.hero}><div className={s.wrap}>
      {/* 4 Oct 2026: this page owns "WordPress to Next.js migration" (indexed, and every
          WordPress post links up to it). Building or fixing a WordPress site belongs to
          /services/wordpress, which the "Start" path below links to.
          8 Oct 2026, owner: heading in the left column, screenshot beside it from the top. */}
      <div className={v.heroGrid}>
        <div><p className={s.eyebrow}>WordPress to Next.js migration</p><h1 className={v.heroTitle}><span className={v.heroTitleFirst}>Move from WordPress to Next.js.</span>{" "}<span>Keep what works.</span></h1><p className={v.heroLead}>Thinking of moving your WordPress site to Next.js? Tell Hassan what the site needs to do. We&apos;ll explain what can move as it is, what needs rebuilding, and how your team will edit it after launch. Only need a WordPress site built or fixed? <Link href="/services/wordpress">See WordPress websites</Link>.</p><div className={v.heroActions}><QuoteModalButton cta="wp_preview_hero" location="wordpress_migration" className={s.button}>Discuss your website ↗</QuoteModalButton><a href="#client-work" className={s.textLink}>See a completed project ↓</a></div><a href="#questions" className={v.questionLink}>Common questions ↓</a></div>
        <div className={v.browser}><div className={v.browserBar}><span className={v.dots} aria-hidden="true"><i/><i/><i/></span><span>Completed client work / Ladies 4 Jesus</span></div><Image src="/work/ladies-4-jesus.png" alt="Ladies 4 Jesus community homepage after its WordPress rebuild" width={1912} height={914} sizes="(min-width: 900px) 45vw, 100vw" priority /><p className={v.browserCaption}>A WordPress community site rebuilt for owner-managed publishing and moderated submissions. <Link href="/work/ladies-4-jesus">See the case study ↗</Link></p></div>
      </div>
    </div></header>

    <section id="client-work" className={`${s.section} ${v.clientWork}`}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>01 / See the work</p><h2 className={v.narrativeTitle}>A new shop. A happy client.</h2></div><p>MyCustomPatches moved from an older WordPress store to a custom site. Explore the finished shop and hear from the client about working with Hassan. The changeover had no recorded downtime.</p></FadeIn>
      <div className={v.proofGrid}>
        <FadeIn><Image src="/work/mycustompatches-product-template.png" alt="MyCustomPatches product template on the completed site" width={1912} height={914} sizes="(min-width: 900px) 54vw, 100vw" className={v.proofImage} /><div className={v.proofFacts}><div><strong>{requiredMetric("mycustompatches", "delivery-days")}</strong><span>Recorded delivery</span></div><div><strong>{requiredMetric("mycustompatches", "templates")}</strong><span>Distinct templates rebuilt</span></div><div><strong>{requiredMetric("mycustompatches", "downtime")}</strong><span>Recorded downtime at launch</span></div></div><Link href="/work/mycustompatches" className={v.imageLink}>Explore the complete project record ↗</Link></FadeIn>
        <FadeIn delay={2}><figure className={v.review}><p className={v.reviewLabel}>In the client&apos;s words</p><blockquote>“{review.snippet}”</blockquote><figcaption><p>{review.name}{" "}<br /><a href={review.href} target="_blank" rel="noopener noreferrer">Read the verified Clutch review ↗</a></p></figcaption></figure><p className={v.proofNote}>That delivery time and cutover result describe this project. Your site gets its own written scope and launch plan.</p></FadeIn>
      </div>
      <FadeIn className={v.ladiesReview}><div><p className={s.eyebrow}>Ladies 4 Jesus / Client review excerpt</p><blockquote>“I am so glad I chose to work with them.”</blockquote></div><div className={v.ladiesAttribution}><Link href="/work/ladies-4-jesus" className={v.ladiesImage}><Image src="/work/ladies-4-jesus-devotionals.png" alt="Ladies 4 Jesus devotional publishing page" width={640} height={306} sizes="(min-width: 900px) 300px, 90vw" /></Link><strong>{ladiesReview.name}</strong><span>Trustpilot, {ladiesReview.date}</span><a href={ladiesReview.href} target="_blank" rel="noopener noreferrer">Read the full review ↗</a><Link href="/work/ladies-4-jesus">See the Ladies 4 Jesus project ↗</Link></div></FadeIn>
      <FadeIn className={v.related}><Image src="/work/panda-patches.png" alt="Panda Patches storefront" width={640} height={306} sizes="200px" /><div><span className={s.eyebrow}>Another WordPress rebuild / Founder-affiliated</span><h3>Panda Patches</h3><p>A storefront, content editor and operations system. Panda Patches shares an owner with PandaCodeGen, so this is first-party work rather than independent client proof.</p></div><Link href="/work/panda-patches" className={s.textLink}>See the build ↗</Link></FadeIn>
    </div></section>

    <section id="decision" className={`${s.section} ${v.decision}`}><div className={s.wrap}>
      <div className={v.decisionIntro}><div><p className={s.eyebrow}>02 / Decide what the site needs</p><h2>Start. Improve.{" "}<br /><span>Or migrate.</span></h2></div><p>Tell us what is working and what is getting in the way. We will explain the fit and cost of each relevant option before you choose a platform.</p></div>
      <div className={v.pathStack}>{renderPath(0)}</div><div className={v.pathSpacer} aria-hidden="true" />
      <p className={v.decisionNote}>We can document migration controls and measure the new site. Rankings, traffic and recovery timing remain decisions for search engines.</p>
    </div></section>

    <ServiceSearchFoundations slug="wordpress-migration" />

    <section id="owner-voices" className={`${s.section} ${v.voices}`}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>From owners on Reddit</p><h2 className={v.narrativeTitle}>Plugins, quotes and code.</h2></div><p>Three lines from one r/nextjs thread, where a WordPress owner asked how to move on. They are Reddit users, not our clients, quoted word for word as checked on 3 October 2026.</p></FadeIn>
      <div className={v.voiceGrid}>{ownerQuotes.map((quote) => <FadeIn key={quote.text}><figure className={v.voice}><blockquote>{quote.text}</blockquote><figcaption><span>{quote.who}</span><a href={THREAD} target="_blank" rel="noopener noreferrer">Read the thread ↗</a></figcaption></figure></FadeIn>)}</div>
    </div></section>

    <section id="running-costs" className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <div className={v.costGrid}>
        <div><p className={s.eyebrow}>03 / What you pay today</p><h2 className={v.costTitle}>Add up what{" "}<br />the site costs.</h2><p className={v.processLead}>Hosting, plugin licences and maintenance usually arrive as separate bills, and few owners have added them up. That total is what any change has to beat, so it&apos;s the figure we quote against.</p></div>
        <div>
          <div className={v.costList}>{costLines.map(([label, source], index) => <div key={label}><b aria-hidden="true">0{index + 1}</b><p>{label}</p><span>{source}</span></div>)}</div>
          <div className={v.costNote}><h3>What changes after a rebuild</h3><p>Keeping and improving WordPress keeps these lines. A move to a custom build removes the plugin licences and plugin updates, but not hosting: a commercial Next.js site on Vercel&apos;s Pro plan starts at {spec("vercel-pro-price").value} ({spec("vercel-pro-price").qualifier}), and dependency updates take the place of plugin updates.</p></div>
          <div className={v.costAction}><QuoteModalButton cta="wp_preview_costs" location="wordpress_migration" className={s.textLink}>Send us your renewal list and we&apos;ll total it ↗</QuoteModalButton></div>
        </div>
      </div>
    </div></section>

    <section id="process" className={s.section}><div className={s.wrap}>
      <div className={v.processGrid}><div className={v.processIntro}><p className={s.eyebrow}>04 / The move</p><h2 className={v.processTitle}>A move with{" "}<br />a plan.</h2><p className={v.processLead}>Before we build, you see what happens to your content, links and connected tools. The plan also names the launch checks, who approves the site and how we return to the previous version if needed.</p></div><div className={v.processList}>{stages.map((stage, index) => <div className={v.processStep} key={stage.title}><b>0{index + 1}</b><div><h3>{stage.title}</h3><p>{stage.body}</p></div></div>)}</div></div>
    </div></section>

    <section className={`${s.section} ${s.sectionDark}`}><div className={s.wrap}>
      <div className={v.scopeGrid}><div><p className={s.eyebrow}>05 / Starting price</p><p className={v.scopePrice}>$1,500</p><p className={v.scopeQualifier}>Starter scope, up to 7 pages. More content or integrations change the quote.</p></div><div><h2 className={v.scopeTitle}>Know the scope.{" "}<br /><span>Own the result.</span></h2><p className={v.scopeCopy}>Your quote names the pages, content responsibilities, redirects, checks, ownership and third-party costs. You know the price and dates before work begins.</p><div className={s.heroActions}><Link href="/pricing" className={s.buttonLight}>Explore all starting scopes ↗</Link><QuoteModalButton cta="wp_preview_scope" location="wordpress_migration" className={s.buttonLight}>Discuss your site ↗</QuoteModalButton></div></div></div>
      <div className={v.scopeList}><div><b>01 / Written scope</b><p>The inventory, deliverables and exclusions are named.</p></div><div><b>02 / Handover check</b><p>{fact("Performance acceptance")}</p></div><div><b>03 / Your control</b><p>{fact("Ownership on handover")}</p></div></div>
    </div></section>

    {/* 4 Oct 2026: what moves off WordPress and what you keep from our build. */}
    <OwnershipCompare platforms={SERVICE_PORTABILITY["wordpress-migration"]} serviceSlug="wordpress-migration" number="06" alt={false} />

    <section id="questions" className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>07 / Before you decide</p><h2 className={v.narrativeTitle}>Questions worth asking.</h2></div><p>We answer these against your real website and put the project-specific answers into the quote.</p></FadeIn>
      <FaqRows faqs={migrationFaqs().map(({ q, a }) => ({ question: q, answer: a }))} />
      <nav className={v.guides} aria-label="WordPress migration guides">
        <Link href="/blog/wordpress-migration-cost">What affects a WordPress migration quote ↗</Link>
        <Link href="/blog/how-to-migrate-wordpress-to-nextjs">The WordPress to Next.js migration steps ↗</Link>
        <Link href="/blog/will-migrating-hurt-my-seo">What a website move means for SEO ↗</Link>
        <Link href="/blog/wordpress-vs-nextjs">WordPress or Next.js: requirements and cost ↗</Link>
        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years">What WordPress costs over three years ↗</Link>
        <Link href="/blog/how-to-fix-slow-wordpress">How to fix a slow WordPress site ↗</Link>
        <Link href="/blog/wordpress-plugins-destroy-speed">Do WordPress plugins slow your site? ↗</Link>
        <Link href="/blog/elementor-kills-seo">Does Elementor hurt SEO? ↗</Link>
        <Link href="/blog/wordpress-traffic-drop-speed">Why WordPress traffic drops ↗</Link>
        <Link href="/blog/wordpress-ai-security-risk-2026">WordPress AI plugin security ↗</Link>
      </nav>
      <div style={{ marginTop: 30 }}><QuoteModalButton cta="wp_preview_close" location="wordpress_migration" className={s.button}>Show us your current site ↗</QuoteModalButton></div>
    </div></section>
  </div></PreviewShell>;
}
