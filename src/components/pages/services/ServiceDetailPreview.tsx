import Image from "next/image";
import GoogleAiVisibilityProof from "./GoogleAiVisibilityProof";
import ServiceSearchFoundations from "./ServiceSearchFoundations";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import FaqRows from "@/components/ui/FaqRows";
import PreviewShell from "@/components/redesign/PreviewShell";
import OwnershipCompare from "@/components/redesign/OwnershipCompare";
import { SERVICE_PORTABILITY } from "@/data/platform-portability";
import { CLIENT_REVIEWS } from "@/data/reviews";
import { serviceGuides } from "@/data/service-guides";
import type { ServicePreview } from "./service-data";
import { previewFaqs } from "./preview-faqs";
import s from "@/components/redesign/CommercialPreview.module.css";
import v from "./ServicesPreview.module.css";

export default function ServiceDetailPreview({ service }: { service: ServicePreview }) {
  const review = CLIENT_REVIEWS.find(item => item.id === (service.reviewId ?? "marshall-james"));
  if (!review) throw new Error(`Missing review for ${service.slug}`);
  const reviewMatchesProject = Boolean(service.reviewId);
  const questions = previewFaqs[service.slug] ?? [];
  const related = service.relatedService;
  // 4 Oct 2026: which platforms the "what you keep" comparison covers on this page.
  const keeps = SERVICE_PORTABILITY[service.slug];

  return <PreviewShell condensed><div className={s.page}>
    <header className={v.hero}><div className={s.wrap}>
      {/* 8 Oct 2026, owner: the heading sits in the left column so the work screenshot
          is beside it from the top, not pushed below a full-width headline. */}
      <div className={v.heroGrid}>
        <div className={v.heroCopy}><p className={s.eyebrow}>PandaCodeGen / {service.category}</p><h1 className={v.heroTitle}><span className={v.heroTitleFirst}>{service.title}</span>{" "}<span>{service.accent}</span></h1><p className={v.lead}>{service.lead}</p><div className={v.heroActions}><QuoteModalButton cta={`preview_${service.slug}_hero`} location={service.slug} className={s.button}>Discuss your project ↗</QuoteModalButton><a href={service.slug === "ai-seo" ? "#visibility" : "#work"} className={s.textLink}>{service.slug === "ai-seo" ? "See the visibility report ↓" : "See a completed project ↓"}</a></div><a href="#questions" className={v.questionLink}>Common questions ↓</a></div>
        <figure className={v.heroVisual}><div className={v.imageBar}><span className={v.dots} aria-hidden="true"><i/><i/><i/></span><span>{service.slug === "ai-seo" ? "From our Search Console export" : "From the work archive"}</span></div><Image src={service.image} alt={service.imageAlt} width={1912} height={914} sizes="(min-width: 900px) 45vw, 100vw" priority /><figcaption>{service.imageCaption}</figcaption></figure>
      </div>
    </div></header>

    {service.slug === "ai-seo" && <GoogleAiVisibilityProof />}

    <section id="work" className={`${s.section} ${s.sectionAlt} ${v.workSection}`}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>01 / See the work</p><h2 className={v.storyTitle}>{service.workTitle}</h2></div><p>{service.workIntro}</p></FadeIn>
      <div className={v.workGrid}>
        <FadeIn><Link href={service.workHref} className={v.workImageLink}><Image src={service.workImage} alt={service.workAlt} width={1912} height={914} sizes="(min-width: 900px) 56vw, 100vw" /></Link><div className={v.workCaption}><div><p className={s.eyebrow}>Project / {service.workName}</p><p>{service.workDescription}</p></div><Link href={service.workHref} className={s.textLink}>Explore {service.workName} ↗</Link></div><p className={v.caveat}>{service.workCaveat}</p></FadeIn>
        {service.secondWork ? <FadeIn delay={2}>
          <Link href={service.secondWork.href} className={v.workImageLink}><Image src={service.secondWork.image} alt={service.secondWork.alt} width={1912} height={914} sizes="(min-width: 900px) 40vw, 100vw" /></Link>
          <div className={v.workCaption}><div><p className={s.eyebrow}>Project / {service.secondWork.name}</p><p>{service.secondWork.description}</p></div><Link href={service.secondWork.href} className={s.textLink}>Explore {service.secondWork.name} ↗</Link></div>
          <p className={v.caveat}>{service.secondWork.caveat}</p>
        </FadeIn> : <><FadeIn delay={2}><figure className={v.review}><p className={s.eyebrow}>{reviewMatchesProject ? "The client, in their own words" : "A separate client review"}</p><blockquote>“{review.quote}”</blockquote><figcaption><strong>{review.name}</strong><span>{review.platform} · {review.date}</span><a href={review.href} target="_blank" rel="noopener noreferrer">Read the source ↗</a></figcaption></figure>{!reviewMatchesProject && <p className={v.reviewNote}>This review describes the client&apos;s experience working with us. It is separate from the featured project and does not verify its technical outcomes.</p>}</FadeIn></>}

      </div>
    </div></section>

    <section id="review" className={`${s.section} ${v.reviewSection}`}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>02 / Review your site</p><h2 className={v.storyTitle}>{service.problemTitle}</h2></div><p>{service.problemIntro}</p></FadeIn>
      <div className={v.checkGrid}>{service.checks.map(([title, body], index) => <FadeIn className={v.check} delay={((index % 3) + 1) as 1 | 2 | 3} key={title}><span className={s.eyebrow}>0{index + 1} / Review</span><h3>{title}</h3><p>{body}</p></FadeIn>)}</div>
      <div className={v.detail}>
        <FadeIn className={v.detailHead}><div><p className={s.eyebrow}>What the proposal resolves</p><h3>{service.detailsTitle}</h3></div><p>{service.detailsIntro}</p></FadeIn>
        <div className={v.detailRows}>{service.details.map(([title, body], index) => <FadeIn className={v.detailRow} key={title} delay={((index % 3) + 1) as 1 | 2 | 3}><span className={s.eyebrow}>{String(index + 1).padStart(2, "0")}</span><h4>{title}</h4><p>{body}</p></FadeIn>)}</div>
      </div>
    </div></section>

    <ServiceSearchFoundations slug={service.slug} />

    <section id="approach" className={s.section}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>{service.slug === "ai-seo" ? "03 / AI search services" : "03 / Make the right call"}</p><h2 className={v.storyTitle}>{service.pathTitle}</h2></div><p>{service.slug === "ai-seo" ? "AEO and GEO are overlapping parts of one monthly service. The agreed buyer questions, pages and search surfaces decide the work." : "We recommend the scope that addresses the evidence from your site and team, then put the work and boundaries in writing."}</p></FadeIn>
      <div className={v.pathGrid}>{service.paths.map(([label, title, body], index) => <FadeIn className={v.path} delay={(index + 1) as 1 | 2} key={title}><span className={s.eyebrow}>{service.slug === "ai-seo" ? "Service area" : `Path ${index + 1}`} / {label}</span><h3>{title}</h3><p>{body}</p><span className={v.pathRule} aria-hidden="true" /></FadeIn>)}</div>
    </div></section>

    <section className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <div className={v.processGrid}><div className={v.processIntro}><p className={s.eyebrow}>{service.process?.label ?? "04 / From call to handover"}</p><h2 className={s.heading}>{service.process?.title ?? <>Build, test{" "}<br />and hand over.</>}</h2><p>{service.process?.intro ?? "Each stage creates something you can review. Your proposal names the deliverables and the point where you accept them."}</p></div><div className={v.processList}>{service.steps.map(([title, body], index) => <FadeIn className={v.processStep} delay={((index % 3) + 1) as 1 | 2 | 3} key={title}><b>0{index + 1}</b><div><h3>{title}</h3><p>{body}</p></div></FadeIn>)}</div></div>
    </div></section>

    <section id="scope" className={`${s.section} ${s.sectionDark}`}><div className={s.wrap}>
      <div className={v.scopeGrid}><div><p className={s.eyebrow}>{service.price === "Quoted to scope" ? "05 / Your project price" : "05 / Published starting point"}</p><p className={v.price}>{service.price}</p><p className={v.priceNote}>{service.price === "Quoted to scope" ? "The price is agreed before work starts." : "Starting point, not an instant quote."}</p></div><div><h2 className={s.heading}>{service.priceTitle}</h2><p className={v.scopeCopy}>{service.priceCopy}</p><div className={s.heroActions}><QuoteModalButton cta={`preview_${service.slug}_scope`} location={service.slug} className={s.buttonLight}>Discuss your scope ↗</QuoteModalButton><Link href="/pricing" className={v.darkLink}>See pricing ↗</Link></div></div></div>
      <div className={v.scopeNotes}>{service.scopeNotes.map(([title, body]) => <div key={title}><b>{title}</b><p>{body}</p></div>)}</div>
      {service.costs && <div className={v.runCosts}><div><p className={s.eyebrow}>After launch</p><h3 className={v.runTitle}>{service.costs.title}</h3><p className={v.runIntro}>The build is a one-off. These are the bills that continue, so add them up before you compare quotes.</p></div><div><div className={v.runList}>{service.costs.lines.map(([label, detail]) => <div key={label}><p>{label}</p><span>{detail}</span></div>)}</div>{service.costs.note && <p className={v.runNote}>{service.costs.note}</p>}{service.costs.links && <div className={v.runLinks}>{service.costs.links.map((link) => <Link key={link.href} href={link.href} className={v.darkLink}>{link.label} ↗</Link>)}</div>}</div></div>}
    </div></section>

    {keeps && <OwnershipCompare platforms={keeps} serviceSlug={service.slug} number="06" />}

    <section id="questions" className={s.section}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>{keeps ? "07" : "06"} / Before you decide</p><h2 className={v.storyTitle}>Questions people ask.</h2></div><p>These are starting answers. Project-specific details belong in the written proposal.</p></FadeIn>
      <FaqRows faqs={questions.map(([question, answer]) => ({ question, answer }))} />
      {serviceGuides[service.slug]?.length > 0 && <nav className={v.guides} aria-label="Related service guides">{serviceGuides[service.slug].map(guide => <Link key={guide.href} href={guide.href} className={s.textLink}>{guide.title} ↗</Link>)}</nav>}
      <div className={v.next}><div><p className={s.eyebrow}>Keep exploring</p><Link href="/services" className={s.textLink}>All services ↗</Link></div><div><p className={s.eyebrow}>Related service</p><Link href={related.href} className={s.textLink}>{related.name} ↗</Link></div></div>
    </div></section>
  </div></PreviewShell>;
}
