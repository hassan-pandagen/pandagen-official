import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FounderRoleStack from "@/components/about/FounderRoleStack";
import { blogPosts } from "@/data/blog";
import { ogImageForPath } from "@/lib/seo/og";

export const metadata: Metadata = {
  // absolute: this title already ends in "PandaCodeGen", so the root "%s | PandaCodeGen"
  // template would print the brand twice (SEO audit, 4 Oct 2026).
  title: { absolute: "Hassan Jamal | Co-founder and Lead Engineer at PandaCodeGen" },
  description: "Hassan Jamal is PandaCodeGen's co-founder and Lead Engineer. He leads custom website and store builds, Next.js work, performance and migrations.",
  alternates: { canonical: "/about/hassan" },
  openGraph: {
    title: "Hassan Jamal | Co-founder and Lead Engineer at PandaCodeGen",
    description: "Engineering leadership for custom websites and stores, Next.js implementation, performance, migrations, and technical delivery.",
    type: "profile",
    url: "https://www.pandacodegen.com/about/hassan",
    images: [ogImageForPath("/about/hassan")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Jamal | Co-founder and Lead Engineer at PandaCodeGen",
    description: "Engineering leadership for custom websites and stores, Next.js implementation, performance, migrations, and technical delivery.",
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
      image: "https://www.pandacodegen.com/team/hassan.png",
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
    title: "Tell Hassan what you picture",
    body: "Show Hassan the site or store you have in mind, the pages you want, and what frustrates you about your current setup. He helps turn that into a clear plan and tells you what it will take to build.",
  },
  {
    title: "Watch the idea take shape",
    body: "He writes the code for the pages, editing tools, forms and connections you agreed on. You see working versions and can say what needs changing before launch.",
  },
  {
    title: "Leave with a site you own",
    body: "He checks the site before launch, then hands over the code and accounts. You get documentation and a live walkthrough of how to edit your content. If anything is unclear, you can ask Hassan or Imran directly.",
  },
];

export default function HassanProfilePage() {
  const recentPosts = blogPosts.filter((post) => post.author === "Hassan").slice(0, 6);
  const [featuredPost, ...morePosts] = recentPosts;

  return (
    <main className="min-h-screen overflow-x-clip bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />

      <section className="border-b border-stone-300 px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <Link href="/about" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-stone-700 hover:text-cognac">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to PandaCodeGen
            </Link>
            <a href="#hassan-press" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cognac underline underline-offset-4 hover:text-charcoal">
              Quoted in Woman&rsquo;s World <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="mt-6 grid gap-7 sm:mt-8 sm:gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="relative aspect-square w-full max-w-xs overflow-hidden border border-stone-300 bg-stone-200 sm:max-w-sm">
              <Image
                src="/team/hassan.png"
                alt="Hassan Jamal, co-founder of PandaCodeGen"
                fill
                sizes="(max-width: 431px) calc(100vw - 48px), 384px"
                loading="eager"
                className="object-contain"
              />
            </div>
            <div className="border-l-2 border-cognac pl-5 md:pl-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Co-founder and Lead Engineer</p>
              <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">Hassan Jamal</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-700 md:text-xl">
                Tell Hassan the website or store you have in mind. You speak with the founders directly, and you do not need to know how to code. Hassan works out the build with you, shows you a working version, and explains how to use and edit it before handover.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact#contact-quote-form" className="inline-flex min-h-12 items-center justify-center gap-2 bg-charcoal px-6 font-bold text-white hover:bg-cognac">
                  Talk to the founders <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href="https://github.com/hassan-pandagen" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-stone-400 px-6 font-bold hover:border-charcoal">
                  Review public GitHub activity
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independent press. This is one of the few third-party citations we have, so
          it is stated plainly with the link doing the work. No readership or reach
          figure: the article is checkable, an audience number is not. */}
      <section className="px-6 pt-16 md:pt-24" aria-labelledby="hassan-press">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Press</p>
          {/* Heading states the PLACEMENT, not a credential. It read "Quoted as an
              AI expert" until 11 Aug 2026 — the magazine's descriptor, adopted as
              our own H2 on the founder's bio page. Two problems: it claimed an
              expertise we do not sell and cannot evidence, and it contradicted the
              careful paragraph directly beneath it, which says only that he was
              quoted on how that work operates. An H2 on an entity page is a strong
              signal about what this company IS, and "AI expert" is not it. */}
          <h2 id="hassan-press" className="mt-3 scroll-mt-28 text-3xl font-bold md:text-4xl">Quoted in CIO Grid and Woman&rsquo;s World</h2>
          <div className="mt-8 space-y-5 border-y border-stone-400 py-6 md:py-8">
            {/* 20 Oct 2026: CIO Grid expert Q&A, published that day. Describe the topic only. */}
            <p className="max-w-4xl text-lg leading-8 text-stone-700">
              <a
                href="https://ciogrid.com/qa/how-it-leaders-decide-when-to-modernize-aging-systems/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl italic text-cognac underline decoration-cognac/40 underline-offset-4 transition-colors hover:decoration-cognac"
              >
                CIO Grid
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              quoted Hassan on how IT leaders decide when to modernize aging systems, using the Panda Patches
              rebuild as his example. Panda Patches is owned by co-founder Imran Raza Ladhani. October 2026.
            </p>
            <p className="max-w-4xl text-lg leading-8 text-stone-700">
              <a
                href="https://www.womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl italic text-cognac underline decoration-cognac/40 underline-offset-4 transition-colors hover:decoration-cognac"
              >
                Woman&rsquo;s World
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              quoted Hassan Jamal, co-founder and lead engineer at PandaCodeGen, on how remote AI-training work operates. May 2026.
            </p>
          </div>
        </div>
      </section>

      <FounderRoleStack id="hassan-responsibilities" eyebrow="Work with the engineer" heading="Your vision. Hassan builds it." roles={responsibilities} />

      <section className="border-b border-stone-300 bg-paper px-6 py-16 text-charcoal md:py-24" aria-labelledby="hassan-standard">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Before handover</p>
            <h2 id="hassan-standard" className="mt-5 text-3xl font-bold md:text-5xl">How you know the work is ready</h2>
          </div>
          <ol className="border-t border-stone-400">
            {[
              "Old links, page details and forms are checked when a site moves.",
              "Speed and accessibility are tested on the pages and devices agreed for your project.",
              "Search traffic and sales can change for reasons outside the site, so no fixed result is promised.",
              "Your team receives the code, account access and handover documents listed in the agreement.",
            ].map((item, index) => (
              <li key={item} className="flex gap-5 border-b border-stone-400 py-5 text-stone-700">
                <span className="font-mono text-xs font-bold text-cognac">0{index + 1}</span>
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-stone-300 px-6 py-16 md:py-24" aria-labelledby="hassan-writing">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 border-b border-stone-400 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Hassan&apos;s writing</p>
              <h2 id="hassan-writing" className="mt-3 text-3xl font-bold md:text-5xl">Recent articles by Hassan</h2>
            </div>
            <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 font-bold text-charcoal hover:text-cognac">
              Browse all articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          {featuredPost && (
            <article className="grid border-b border-stone-400 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex flex-col justify-between bg-charcoal px-6 py-8 text-white sm:px-9 sm:py-10 lg:min-h-[390px] lg:px-12 lg:py-12">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.17em] text-orange-300">01 / Latest article · {featuredPost.category} · {featuredPost.readTime} read</p>
                  <h3 className="mt-8 max-w-xl font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.7rem]">
                    <Link href={`/blog/${featuredPost.id}`} className="hover:text-orange-300">{featuredPost.title}</Link>
                  </h3>
                  <p className="mt-6 max-w-lg text-base leading-7 text-stone-300">{featuredPost.excerpt}</p>
                </div>
                <Link href={`/blog/${featuredPost.id}`} className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 border-b border-orange-300 font-bold text-orange-300 hover:text-white">
                  Read the article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <Link href={`/blog/${featuredPost.id}`} aria-label={`Read ${featuredPost.title}`} className="relative block min-h-64 overflow-hidden bg-stone-300 sm:min-h-80 lg:min-h-full">
                <Image
                  src={`/blog-covers/${featuredPost.id}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03] motion-reduce:transition-none"
                />
              </Link>
            </article>
          )}
          <ol className="border-b border-stone-400">
            {morePosts.map((post, index) => (
              <li key={post.id} className="group grid gap-3 border-t border-stone-400 py-6 first:border-t-0 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-6 md:items-start md:py-8 lg:grid-cols-[3rem_minmax(0,1.1fr)_minmax(0,0.9fr)_2rem] lg:gap-8">
                <span className="pt-1 font-mono text-xs font-bold tracking-[0.18em] text-cognac">{String(index + 2).padStart(2, "0")}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cognac">{post.category} · {post.readTime} read</p>
                  <h3 className="mt-2 max-w-lg text-xl font-bold leading-snug md:text-2xl">
                    <Link href={`/blog/${post.id}`} className="hover:text-cognac">{post.title}</Link>
                  </h3>
                </div>
                <p className="max-w-lg text-sm leading-6 text-stone-700 sm:col-start-2 lg:col-start-3 lg:text-base lg:leading-7">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} aria-label={`Read ${post.title}`} className="hidden min-h-11 items-start justify-end pt-1 text-cognac transition-transform group-hover:translate-x-1 lg:flex">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </main>
  );
}
