import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import PreviewShell from "@/components/redesign/PreviewShell";
import { CLIENT_REVIEWS } from "@/data/reviews";
import type { ServicePreview } from "./service-data";
import { servicePreviews } from "./service-data";
import { previewFaqs } from "./preview-faqs";
import s from "@/components/redesign/CommercialPreview.module.css";
import v from "./ServicesPreview.module.css";

export default function ServiceDetailPreview({ service }: { service: ServicePreview }) {
  const review = CLIENT_REVIEWS.find(item => item.id === (service.reviewId ?? "marshall-james"));
  if (!review) throw new Error(`Missing review for ${service.slug}`);
  const reviewMatchesProject = Boolean(service.reviewId);
  const questions = previewFaqs[service.slug] ?? [];
  const next = servicePreviews[(servicePreviews.findIndex(item => item.slug === service.slug) + 1) % servicePreviews.length];

  return <PreviewShell condensed><div className={s.page}>
    <header className={v.hero}><div className={s.wrap}>
      <div className={v.heroGrid}>
        <div className={v.heroCopy}><p className={s.eyebrow}>PandaCodeGen / {service.category}</p><h1 className={v.heroTitle}>{service.title}<br /><span>{service.accent}</span></h1><p className={v.lead}>{service.lead}</p><div className={s.heroActions}><QuoteModalButton cta={`preview_${service.slug}_hero`} location={service.slug} className={s.button}>Talk through your project ↗</QuoteModalButton><a href="#review" className={s.textLink}>See what we would review ↓</a></div></div>
        <FadeIn><figure className={v.heroVisual}><div className={v.imageBar}><span className={v.dots} aria-hidden="true"><i/><i/><i/></span><span>From the work archive</span></div><Image src={service.image} alt={service.imageAlt} width={1912} height={914} sizes="(min-width: 900px) 45vw, 100vw" priority /><figcaption>{service.imageCaption}</figcaption></figure></FadeIn>
      </div>
      <nav className={v.journey} aria-label="Page journey"><a href="#review"><b>01</b> Review the need</a><a href="#work"><b>02</b> See relevant work</a><a href="#approach"><b>03</b> Choose a path</a><a href="#scope"><b>04</b> Scope the project</a></nav>
    </div></header>

    <section id="review" className={s.section}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>01 / Start with the real work</p><h2 className={v.storyTitle}>{service.problemTitle}</h2></div><p>{service.problemIntro}</p></FadeIn>
      <div className={v.checkGrid}>{service.checks.map(([title, body], index) => <FadeIn className={v.check} delay={((index % 3) + 1) as 1 | 2 | 3} key={title}><span className={s.eyebrow}>0{index + 1} / Review</span><h3>{title}</h3><p>{body}</p></FadeIn>)}</div>
    </div></section>

    <section id="work" className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>02 / Relevant delivery</p><h2 className={v.storyTitle}>{service.workTitle}</h2></div><p>{service.workIntro}</p></FadeIn>
      <div className={v.workGrid}>
        <FadeIn><Link href={service.workHref} className={v.workImageLink}><Image src={service.workImage} alt={service.workAlt} width={1912} height={914} sizes="(min-width: 900px) 56vw, 100vw" /></Link><div className={v.workCaption}><div><p className={s.eyebrow}>Project / {service.workName}</p><p>{service.workDescription}</p></div><Link href={service.workHref} className={s.textLink}>Open the project ↗</Link></div><p className={v.caveat}>{service.workCaveat}</p></FadeIn>
        <FadeIn delay={2}><figure className={v.review}><p className={s.eyebrow}>{reviewMatchesProject ? "The client, in their own words" : "A separate client review"}</p><blockquote>“{review.quote}”</blockquote><figcaption><strong>{review.name}</strong><span>{review.platform} · {review.date}</span><a href={review.href} target="_blank" rel="noopener noreferrer">Read the source ↗</a></figcaption></figure>{!reviewMatchesProject && <p className={v.reviewNote}>This review describes the client&apos;s experience working with us. It is separate from the featured project and does not verify its technical outcomes.</p>}</FadeIn>
      </div>
    </div></section>

    <section id="approach" className={s.section}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>03 / Make the right call</p><h2 className={v.storyTitle}>{service.pathTitle}</h2></div><p>We recommend the scope that addresses the evidence from your site and team, then put the work and boundaries in writing.</p></FadeIn>
      <div className={v.pathGrid}>{service.paths.map(([label, title, body], index) => <FadeIn className={v.path} delay={(index + 1) as 1 | 2} key={title}><span className={s.eyebrow}>Path {index + 1} / {label}</span><h3>{title}</h3><p>{body}</p><span className={v.pathRule} aria-hidden="true" /></FadeIn>)}</div>
    </div></section>

    <section className={`${s.section} ${s.sectionAlt}`}><div className={s.wrap}>
      <div className={v.processGrid}><div className={v.processIntro}><p className={s.eyebrow}>04 / From call to handover</p><h2 className={s.heading}>A clear route<br />to done.</h2><p>Each stage creates something you can review. Your proposal names the deliverables and the point where you accept them.</p></div><div className={v.processList}>{service.steps.map(([title, body], index) => <FadeIn className={v.processStep} delay={((index % 3) + 1) as 1 | 2 | 3} key={title}><b>0{index + 1}</b><div><h3>{title}</h3><p>{body}</p></div></FadeIn>)}</div></div>
    </div></section>

    <section id="scope" className={`${s.section} ${s.sectionDark}`}><div className={s.wrap}>
      <div className={v.scopeGrid}><div><p className={s.eyebrow}>05 / Published starting point</p><p className={v.price}>{service.price}</p><p className={v.priceNote}>Starting point, not an instant quote.</p></div><div><h2 className={s.heading}>{service.priceTitle}</h2><p className={v.scopeCopy}>{service.priceCopy}</p><div className={s.heroActions}><QuoteModalButton cta={`preview_${service.slug}_scope`} location={service.slug} className={s.buttonLight}>Discuss your scope ↗</QuoteModalButton><Link href="/pricing" className={v.darkLink}>See pricing ↗</Link></div></div></div>
      <div className={v.scopeNotes}>{service.scopeNotes.map(([title, body]) => <div key={title}><b>{title}</b><p>{body}</p></div>)}</div>
    </div></section>

    <section className={s.section}><div className={s.wrap}>
      <FadeIn className={s.sectionHead}><div><p className={s.eyebrow}>06 / Before you decide</p><h2 className={v.storyTitle}>Questions people ask.</h2></div><p>These are starting answers. Project-specific details belong in the written proposal.</p></FadeIn>
      {questions.map(([question, answer]) => <div className={s.faq} key={question}><h3>{question}</h3><p>{answer}</p></div>)}
      <div className={v.next}><div><p className={s.eyebrow}>Keep exploring</p><Link href="/services" className={s.textLink}>All services ↗</Link></div><div><p className={s.eyebrow}>Related service</p><Link href={`/services/${next.slug}`} className={s.textLink}>{next.name} ↗</Link></div></div>
    </div></section>
  </div></PreviewShell>;
}
