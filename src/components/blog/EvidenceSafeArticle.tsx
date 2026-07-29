import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogAuthor } from "@/components/ui/BlogStyles";
import RelatedPosts from "@/components/ui/RelatedPosts";

interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

interface ArticleSource {
  label: string;
  href: string;
}

export default function EvidenceSafeArticle({
  slug,
  title,
  description,
  date,
  readTime,
  takeaways,
  sections,
  sources,
}: {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  takeaways: string[];
  sections: ArticleSection[];
  sources: ArticleSource[];
}) {
  const canonical = `https://www.pandacodegen.com/blog/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: canonical,
    dateModified: "2026-07-21",
    author: { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", name: "PandaCodeGen" },
    publisher: { "@type": "Organization", name: "PandaCodeGen", url: "https://www.pandacodegen.com" },
  };

  return (
    <main className="min-h-screen bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <article className="px-5 pb-24 pt-28 md:px-8 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: title }]} />
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Evidence-first guide</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-stone-700">{description}</p>
          <BlogAuthor date={date} readTime={readTime} />

          <aside className="mt-10 rounded-2xl border border-stone-300 bg-white p-6">
            <h2 className="text-xl font-bold">What to take away</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
              {takeaways.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-bold tracking-tight">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-stone-700">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12 border-t border-stone-300 pt-8">
            <h2 className="text-2xl font-bold">Primary references and verification</h2>
            <p className="mt-3 text-stone-700">
              Product behavior, prices, policies, and experimental features can change. Check the dated primary source before making a decision.
            </p>
            <ul className="mt-4 space-y-2">
              {sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline underline-offset-4">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 rounded-2xl bg-charcoal p-7 text-white md:p-10">
            <h2 className="text-3xl font-bold">Need a scoped diagnosis?</h2>
            <p className="mt-3 max-w-2xl text-stone-300">
              Share the current URL, platform, goal, traffic band, timeline, and budget. Any recommendation will distinguish measured observations from assumptions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-bold text-charcoal">Get your migration plan</Link>
              <Link href="/editorial-policy" className="rounded-full border border-white/30 px-6 py-3 font-bold text-white">Read the editorial policy</Link>
            </div>
          </section>

          <RelatedPosts currentPostId={slug} />
        </div>
      </article>
      <Footer />
    </main>
  );
}
