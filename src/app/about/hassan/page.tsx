import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, FileCheck2, Gauge, Route } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blog";
import { ogImageForPath } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Hassan Jamal | Co-founder and Lead Engineer at PandaCodeGen",
  description: "Meet Hassan Jamal, PandaCodeGen co-founder and Lead Engineer for SEO-safe website migrations, Next.js implementation, performance, and technical delivery.",
  alternates: { canonical: "/about/hassan" },
  openGraph: {
    title: "Hassan Jamal | Co-founder and Lead Engineer at PandaCodeGen",
    description: "Engineering leadership for website migrations, Next.js implementation, performance, and technical delivery.",
    type: "profile",
    url: "https://www.pandacodegen.com/about/hassan",
    images: [ogImageForPath("/about/hassan")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Jamal | Co-founder and Lead Engineer at PandaCodeGen",
    description: "Engineering leadership for website migrations, Next.js implementation, performance, and technical delivery.",
    images: [ogImageForPath("/about/hassan")],
  },
  robots: { index: true, follow: true },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
      name: "Hassan Jamal",
      jobTitle: "Co-founder and Lead Engineer",
      url: "https://www.pandacodegen.com/about/hassan",
      worksFor: { "@id": "https://www.pandacodegen.com/#organization" },
      sameAs: [
        "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
        "https://github.com/hassan-pandagen",
      ],
      knowsAbout: [
        "Next.js",
        "Website migration",
        "Technical SEO",
        "Core Web Vitals",
        "Accessibility",
        "Web application engineering",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.pandacodegen.com/about/hassan#webpage",
      url: "https://www.pandacodegen.com/about/hassan",
      name: "Hassan Jamal | Co-founder and Lead Engineer at PandaCodeGen",
      mainEntity: { "@id": "https://www.pandacodegen.com/#/schema/person/hassan" },
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://www.pandacodegen.com/about" },
        { "@type": "ListItem", position: 3, name: "Hassan Jamal", item: "https://www.pandacodegen.com/about/hassan" },
      ],
    },
  ],
};

const responsibilities = [
  {
    icon: Route,
    title: "Migration implementation",
    body: "Turn the approved URL, content, redirect, integration, analytics, and cutover plan into a testable production implementation.",
  },
  {
    icon: Code2,
    title: "Engineering delivery",
    body: "Build and review the Next.js application, content interfaces, forms, integrations, and repository handover defined in the project scope.",
  },
  {
    icon: Gauge,
    title: "Measured quality",
    body: "Record the agreed devices, pages, runs, accessibility checks, and performance conditions instead of presenting a single lab score as a business outcome.",
  },
];

export default function HassanProfilePage() {
  const recentPosts = blogPosts.filter((post) => post.author === "Hassan").slice(0, 6);

  return (
    <main className="min-h-screen overflow-x-hidden bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
      <Header />

      <section className="border-b border-stone-300 px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link href="/about" className="inline-flex min-h-11 items-center text-sm font-semibold text-stone-700 hover:text-cognac">
            Back to PandaCodeGen
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div className="flex aspect-square max-w-sm items-end overflow-hidden rounded-[2.5rem] border border-stone-300 bg-charcoal p-8 text-white shadow-elevated">
              <div>
                <p className="font-serif text-8xl font-normal italic text-orange-300" aria-hidden="true">H</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-stone-300">Engineering lead</p>
              </div>
            </div>
            <div className="border-l-2 border-cognac pl-5 md:pl-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Co-founder and Lead Engineer</p>
              <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">Hassan Jamal</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-700 md:text-xl">
                Hassan leads implementation at PandaCodeGen. His work covers SEO-safe website migrations, custom Next.js applications, performance engineering, technical QA, and the handover required to keep clients in control of their platform.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact#contact-quote-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 font-bold text-white hover:bg-cognac">
                  Get your migration plan <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href="https://github.com/hassan-pandagen" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-400 bg-white px-6 font-bold hover:border-charcoal">
                  Review public GitHub activity
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="hassan-responsibilities">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Delivery responsibility</p>
          <h2 id="hassan-responsibilities" className="mt-3 max-w-3xl text-3xl font-bold md:text-5xl">Engineering follows the written migration plan.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {responsibilities.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-3xl border border-stone-300 bg-white p-7">
                <Icon className="h-7 w-7 text-cognac" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-16 text-white md:py-24" aria-labelledby="hassan-standard">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <FileCheck2 className="h-8 w-8 text-orange-300" aria-hidden="true" />
            <h2 id="hassan-standard" className="mt-5 text-3xl font-bold md:text-5xl">What the engineering claim should mean</h2>
          </div>
          <ul className="space-y-4">
            {[
              "URLs, redirects, canonicals, metadata, and structured data are checked against an inventory.",
              "Performance is measured on the pages, profiles, and conditions agreed for acceptance.",
              "Rankings, revenue, field traffic, and third-party behavior are monitored outcomes, not universal guarantees.",
              "The client receives the repository, accounts, documentation, and licenses described in the accepted terms.",
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-stone-700 bg-stone-900 p-5 text-stone-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Independent press. This is one of the few third-party citations we have, so
          it is stated plainly with the link doing the work. No readership or reach
          figure: the article is checkable, an audience number is not. */}
      <section className="px-6 pt-16 md:pt-24" aria-labelledby="hassan-press">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Press</p>
          <h2 id="hassan-press" className="mt-3 text-3xl font-bold md:text-4xl">Quoted as an AI expert</h2>
          <div className="mt-6 rounded-2xl border border-stone-300 bg-stone-50 p-6 md:p-8">
            <p className="text-lg leading-8 text-stone-700">
              <a
                href="https://www.womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl italic text-cognac underline decoration-cognac/40 underline-offset-4 transition-colors hover:decoration-cognac"
              >
                Woman&rsquo;s World
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              quoted Hassan Jamal, co-founder and lead engineer at PandaCodeGen, on how remote AI-training
              work actually operates. The article is public, names him directly, and links back here.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="hassan-writing">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Engineering journal</p>
              <h2 id="hassan-writing" className="mt-3 text-3xl font-bold md:text-5xl">Recent articles by Hassan</h2>
            </div>
            <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 font-bold text-charcoal hover:text-cognac">
              Browse all articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <article key={post.id} className="flex flex-col rounded-3xl border border-stone-300 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cognac">{post.category}</p>
                <h3 className="mt-3 text-xl font-bold leading-snug">{post.title}</h3>
                <p className="mt-3 line-clamp-3 leading-7 text-stone-700">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold hover:text-cognac">
                  Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
