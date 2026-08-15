import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import {
  BlogAuthor,
  BlogHeader,
  BlogList,
  BlogText,
  InsightBox,
} from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const slowWebsiteFAQs =
  blogPosts.find((post) => post.id === "why-is-my-website-loading-so-slow")?.faqs ?? [];

const DiagnosticVisual = lazyLoad(
  () => import("@/components/blog/SlowSiteDiagnosticVisual"),
);
const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Why Is My Website Loading So Slow? 12 Causes + Fixes",
  description:
    "Diagnose a slow website with field data, lab traces and 12 common causes. Learn what to fix, how to validate it and when a rebuild is justified.",
  alternates: {
    canonical: "/blog/why-is-my-website-loading-so-slow",
  },
  keywords: [
    "why is my website loading so slow",
    "slow website fix",
    "website loading slow",
    "how to speed up a website",
    "website speed test",
    "Core Web Vitals fix",
    "slow website on mobile",
    "PageSpeed Insights",
    "website performance audit",
    "slow website causes",
    "why does my website seem fast to me but slow to visitors",
    "how to test website speed",
  ],
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  openGraph: {
    title: "Why Is My Website Loading So Slow? 12 Causes and Fixes",
    description:
      "A measurement-first guide to slow websites: field data, lab traces, 12 causes, practical fixes and an optimize-versus-rebuild decision framework.",
    type: "article",
    publishedTime: "2026-05-13T00:00:00-05:00",
    modifiedTime: "2026-08-01T00:00:00-05:00",
    authors: ["Hassan Jamal"],
    url: "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow",
    images: [ogImageForPath("/blog/why-is-my-website-loading-so-slow")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Is My Website Loading So Slow? 12 Causes and Fixes",
    description:
      "Find the slow layer before paying for the wrong fix. Test field data, lab traces, templates, scripts, media, hosting and platform constraints.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id":
        "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow#article",
      headline: "Why Is My Website Loading So Slow? 12 Causes and Fixes",
      description:
        "A measurement-first guide to diagnosing slow websites with field data, lab traces, twelve common causes, practical fixes and a rebuild decision framework.",
      image: ogImageUrlForPath("/blog/why-is-my-website-loading-so-slow"),
      datePublished: "2026-05-13T00:00:00-05:00",
      dateModified: "2026-08-01T00:00:00-05:00",
      author: {
        "@type": "Person",
        "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
        name: "Hassan Jamal",
        jobTitle: "Co-founder and Lead Engineer",
        url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Next.js", "Website migration", "Web performance", "Technical SEO", "Content management systems"],
        image: {
          "@type": "ImageObject",
          url: "https://www.pandacodegen.com/team/hassan.png",
          width: 400,
          height: 400,
        },
        sameAs: [
          "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
          "https://github.com/hassan-pandagen",
        ],
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        name: "PandaCodeGen",
        url: "https://www.pandacodegen.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.pandacodegen.com/logo.png",
          width: 655,
          height: 113,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow#webpage",
      },
      articleSection: "Performance",
      keywords: [
        "why is my website loading so slow",
        "slow website fix",
        "website speed test",
        "Core Web Vitals",
        "PageSpeed Insights",
        "website performance audit",
      ],
      inLanguage: "en-US",
            wordCount: 2883,
            timeRequired: "PT14M",
      about: [
        {
          "@type": "Thing",
          name: "Website performance",
          description:
            "Network, origin, browser and user-experience conditions that affect how a web page loads and responds",
        },
        {
          "@type": "Thing",
          name: "Core Web Vitals",
          description:
            "Real-user loading, responsiveness and visual-stability metrics",
        },
        {
          "@type": "Thing",
          name: "PageSpeed Insights",
          description:
            "Google tooling that presents field data when available and a controlled Lighthouse lab test",
        },
      ],
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "[data-speakable='true']"],
      },
      citation: [
        {
          "@type": "CreativeWork",
          name: "Core Web Vitals threshold methodology",
          url: "https://web.dev/articles/defining-core-web-vitals-thresholds",
        },
        {
          "@type": "CreativeWork",
          name: "Optimize Largest Contentful Paint",
          url: "https://web.dev/articles/optimize-lcp",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.pandacodegen.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.pandacodegen.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Why Is My Website Loading So Slow?",
          item:
            "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow#webpage",
      url: "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow",
      name: "Why Is My Website Loading So Slow? 12 Causes and Fixes",
      description:
        "A measurement-first guide to diagnosing and fixing a slow website without assuming one platform, score or cause.",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImageUrlForPath("/blog/why-is-my-website-loading-so-slow"),
      },
      datePublished: "2026-05-13T00:00:00-05:00",
      dateModified: "2026-08-01T00:00:00-05:00",
      breadcrumb: {
        "@id":
          "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow#breadcrumb",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow#faq",
      mainEntity: slowWebsiteFAQs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const causes = [
  {
    title: "1. Slow origin response",
    body: "A delayed first response can come from overloaded infrastructure, uncached page generation, database work, slow upstream APIs or geographic distance. Measure Time to First Byte by template and location before concluding that a hosting brand or plan is the cause.",
  },
  {
    title: "2. The main content is discovered late",
    body: "The browser cannot load the largest image or text block until it can discover the resource. A hero image hidden in JavaScript or CSS, a client-rendered shell or a late API response can delay LCP even when the asset itself is small.",
  },
  {
    title: "3. Oversized images and video",
    body: "A source file may be much larger than its rendered dimensions, use an inefficient format or load at full quality on every device. Above-the-fold media needs the right dimensions and priority. Offscreen media can usually wait.",
  },
  {
    title: "4. Render-blocking CSS and fonts",
    body: "Large stylesheets, chained imports and late font files can delay visible text and create layout movement. Inspect which files are required for the first viewport, preload only truly critical resources and use stable font fallbacks.",
  },
  {
    title: "5. Too much JavaScript on the main thread",
    body: "Downloading is only part of the cost. Browsers must parse, compile and execute JavaScript. Long tasks, hydration work and expensive component rendering can delay interaction, especially on constrained mobile devices.",
  },
  {
    title: "6. Third-party scripts",
    body: "Analytics, chat, ads, maps, video embeds, consent tools and experimentation platforms execute code you do not fully control. Load each tool only where it creates enough value, and delay optional work until consent or interaction when appropriate.",
  },
  {
    title: "7. A long or serial request chain",
    body: "The raw number of requests is less useful than their order and dependency. A small file can still block the page when another file must finish before it can be discovered. Read the waterfall and shorten critical chains.",
  },
  {
    title: "8. Missing or ineffective caching",
    body: "Browser, CDN and application caches solve different problems. A cache that is bypassed by cookies, query parameters or incorrect headers may look configured while every request still reaches the origin. Check actual cache status and invalidation behavior.",
  },
  {
    title: "9. CDN configuration misses the important work",
    body: "A CDN can reduce round-trip distance and origin load, but only for resources it can serve or accelerate. Dynamic HTML, authenticated pages and uncacheable API work may still depend on the origin. Verify hit ratios and regional behavior.",
  },
  {
    title: "10. Unstable layout",
    body: "Images without dimensions, late banners, ads, embeds and font swaps can move content after it appears. Reserve space for dynamic elements and test the full consent and personalization flow, not only a clean laboratory page.",
  },
  {
    title: "11. Slow interactions",
    body: "Menus and forms may load quickly but respond slowly because event handlers perform too much work. Use field INP data and a performance trace to locate the interaction, script and component responsible instead of optimizing unrelated page-load assets.",
  },
  {
    title: "12. Template or platform constraints",
    body: "Themes, plugins, apps, builders and custom applications can all accumulate work. The platform name alone does not prove a ceiling. A constraint becomes actionable when repeated traces show required code or architecture that the team cannot remove or control.",
  },
];

const fixes = [
  {
    title: "1. Record a reproducible baseline",
    body: "Save the tested URL, device, network profile, consent state, cache state and date. Run representative templates rather than only the homepage. Compare several consistent runs and keep field data separate from the laboratory score.",
  },
  {
    title: "2. Trace the LCP path",
    body: "Identify the LCP element, its resource, when the browser discovers it, its download duration and the render delay after it arrives. Fix the largest measured subpart instead of applying a generic speed checklist.",
  },
  {
    title: "3. Deliver media for its actual slot",
    body: "Resize and compress images, use responsive sources and modern formats where supported, avoid lazy-loading the LCP asset and defer below-the-fold media. Give images and embeds dimensions to protect layout stability.",
  },
  {
    title: "4. Reduce main-thread and third-party work",
    body: "Remove code that has no current job, split work by route, load optional tools after consent or interaction, and use async or defer where the dependency permits it. Validate forms, analytics and attribution after every change.",
  },
  {
    title: "5. Fix origin, cache and CDN behavior",
    body: "Profile the origin before upgrading it. Cache safe responses, verify headers and hit ratios, reduce database or API work, and test from the regions where users actually visit. A provider change is justified only when the measured constraint follows the infrastructure.",
  },
  {
    title: "6. Stabilize CSS, fonts and layout",
    body: "Inline or prioritize only critical styles, remove unused CSS, preload sparingly, select an intentional font-loading strategy and reserve space for late components. Re-test with consent banners and real content enabled.",
  },
  {
    title: "7. Diagnose the slow interaction",
    body: "Reproduce the exact click, tap or keyboard action, inspect the long task and reduce the work that blocks the next paint. Field data can identify affected page groups; a trace explains the code path.",
  },
  {
    title: "8. Validate and monitor",
    body: "Check visual behavior, accessibility, forms, analytics, SEO output and business events after optimization. Monitor real-user Core Web Vitals over the following reporting window and add performance budgets to prevent regressions.",
  },
];

export default function SlowWebsitePage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal selection:bg-stone-200 selection:text-stone-900 md:pb-20 md:pt-32">
        <div className="fixed inset-0 z-50 bg-noise opacity-[0.03] pointer-events-none" />

        <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />

          <Breadcrumb items={postCrumbs("why-is-my-website-loading-so-slow", "Why Is My Website Loading So Slow?")} />

          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-charcoal transition-colors hover:text-stone-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-cognac">
              Website performance diagnosis
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              Why Is My Website Loading So Slow?{" "}
              <span className="font-serif font-normal italic text-cognac">
                12 Causes and Practical Fixes
              </span>
            </h1>
            <p className="mb-6 text-xl leading-relaxed text-stone-600" data-speakable="true">
              First, which of the two questions is yours? <strong>If every site is slow for you, the problem is
              your side</strong> and the fixes are a different article: a browser with too many extensions, a
              saturated network, or DNS. <strong>If your own site is slow for the people visiting it</strong>,
              this is the page. That second problem rarely has one cause: the delay can start with the network,
              with your server, in the browser, in the template, or in something a third party loaded. Here you
              measure the pages that are actually affected, work out which layer is holding things up, and only
              then decide whether to optimize what you have or rebuild it.
            </p>
            <BlogAuthor
              name="Hassan Jamal"
              role="Co-founder and Lead Engineer"
              date="May 13, 2026, reviewed Aug 1, 2026"
              readTime="8 min read"
              bio="Hassan is PandaCodeGen's co-founder and Lead Engineer. He diagnoses slow sites, does the technical SEO, and runs migrations with recorded baselines and acceptance criteria."
              linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
            />
          </div>

          <div className="mb-12">
            <DiagnosticVisual />
          </div>

          <section className="mb-10 rounded-2xl border border-stone-200 bg-stone-50 p-6" data-speakable="true">
            <h2 className="mb-4 text-base font-bold text-charcoal">Short answer</h2>
            <BlogList
              items={[
                "Most slow pages come down to four things: the server answers late, the largest thing on the screen is discovered late, too much JavaScript runs before the page is usable, or a third-party tool blocks it. Which one it is decides the fix.",
                "Use PageSpeed Insights to separate available real-user field data from the controlled Lighthouse lab test. One score is not a complete diagnosis.",
                "Google's good Core Web Vitals thresholds remain LCP at 2.5 seconds or less, INP at 200 milliseconds or less and CLS at 0.1 or less, evaluated at the 75th percentile of visits.",
                "Test multiple page templates on mobile and desktop. A homepage, service page, product page and article can fail for different reasons.",
                "Speed affects how people experience your site, how it does in Search, and the quality score on your paid landing pages. There is no fixed amount of traffic, revenue or ranking you lose per second.",
                "Rebuild only when repeated measurement shows a required platform or architecture constraint that optimization cannot responsibly remove.",
              ]}
            />
          </section>

          <div className="space-y-8">
            <BlogHeader>How to Tell if Your Website Is Actually Slow</BlogHeader>

            <BlogText>
              Start by naming the experience that is slow. A blank first screen, a late hero image,
              a menu that ignores a tap and a form that freezes after submission are different
              problems. They require different evidence and different fixes. A single homepage
              score cannot represent every visitor, route, device and interaction.
            </BlogText>

            <BlogText>
              Google&apos;s current{" "}
              <a
                href="https://web.dev/articles/defining-core-web-vitals-thresholds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal underline underline-offset-2 hover:text-stone-600"
              >
                Core Web Vitals thresholds
              </a>{" "}
              classify LCP of 2.5 seconds or less, INP of 200 milliseconds or less and CLS of
              0.1 or less as good at the 75th percentile. Poor begins above 4 seconds for LCP,
              above 500 milliseconds for INP and above 0.25 for CLS. These are real-user
              experience categories, not a promise that crossing one line changes a ranking or
              conversion by a fixed amount. If the three metrics are new to you, we cover what each
              one measures and why it exists in{" "}
              <Link href="/blog/core-web-vitals-explained" className="text-charcoal underline underline-offset-2">
                Core Web Vitals explained
              </Link>.
            </BlogText>

            <div className="overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
              <table className="w-full min-w-[620px] border-collapse text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="border-b border-stone-200 p-3 text-left">Metric</th>
                    <th className="border-b border-stone-200 p-3 text-left">Good</th>
                    <th className="border-b border-stone-200 p-3 text-left">Poor</th>
                    <th className="border-b border-stone-200 p-3 text-left">What it helps diagnose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-stone-200 p-3 font-bold">LCP</td>
                    <td className="border-b border-stone-200 p-3">2.5s or less</td>
                    <td className="border-b border-stone-200 p-3">Above 4.0s</td>
                    <td className="border-b border-stone-200 p-3">Main-content loading</td>
                  </tr>
                  <tr>
                    <td className="border-b border-stone-200 p-3 font-bold">INP</td>
                    <td className="border-b border-stone-200 p-3">200ms or less</td>
                    <td className="border-b border-stone-200 p-3">Above 500ms</td>
                    <td className="border-b border-stone-200 p-3">Interaction responsiveness</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">CLS</td>
                    <td className="p-3">0.1 or less</td>
                    <td className="p-3">Above 0.25</td>
                    <td className="p-3">Unexpected layout movement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InsightBox variant="info">
              First Input Delay is no longer a Core Web Vital. Google replaced it with INP on
              March 12, 2024 and removed FID from the program. Any current performance
              report or dashboard should be showing you LCP, INP and CLS.
            </InsightBox>

            <BlogHeader>Why It Seems Fast to You and Slow to Everyone Else</BlogHeader>

            <BlogText>
              This is usually where an owner starts doubting the report. You open your own site on
              a good phone, on your own network, with the images already sitting in your browser
              cache from the last time you looked. Someone arriving for the first time on a
              mid-range Android over mobile data downloads all of it from scratch. Those are not
              the same page load, and only one of them is being measured.
            </BlogText>

            <BlogText>
              The 75th percentile in the table above is what settles the argument. Your site is not
              graded on its average visit. It is graded at roughly the slowest quarter of visits,
              which is why a site can feel fine every single time you check it and still be
              assessed as poor. To see what your visitors see, test on a throttled mobile profile
              with an empty cache, and when your impression and the field data disagree, the field
              data is the one describing your customers.
            </BlogText>

            <BlogHeader>How to Test a Slow Website Without Misreading the Score</BlogHeader>

            <BlogText>
              PageSpeed Insights combines two different views when sufficient data exists. The
              field section summarizes what eligible Chrome users experienced during the recent
              reporting window. The Lighthouse section runs one controlled laboratory test and
              produces diagnostics. Google&apos;s{" "}
              <a
                href="https://web.dev/articles/whats-new-pagespeed-insights"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal underline underline-offset-2 hover:text-stone-600"
              >
                PageSpeed documentation
              </a>{" "}
              explains this separation. A 90 laboratory score can be a useful engineering target,
              but it is not the field Core Web Vitals assessment and it is not a Google ranking
              cutoff.
            </BlogText>

            <BlogList
              items={[
                "Test representative templates: homepage, service or category, product or conversion page, and a content page.",
                "Record mobile and desktop separately. Device capability, network and layout can change the result.",
                "Record consent and cache state. Analytics, chat and advertising tags may load only after a visitor choice.",
                "Use several consistent lab runs to identify repeatable bottlenecks, then compare them with field data when available.",
                "Save release dates and the exact URLs tested so a later regression can be traced to a real change.",
              ]}
            />

            <div className="overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
              <table className="w-full min-w-[620px] border-collapse text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="border-b border-stone-200 p-3 text-left">Tool</th>
                    <th className="border-b border-stone-200 p-3 text-left">What it shows you</th>
                    <th className="border-b border-stone-200 p-3 text-left">Reach for it when</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-stone-200 p-3 font-bold">PageSpeed Insights</td>
                    <td className="border-b border-stone-200 p-3">Field data where enough exists, plus one Lighthouse lab run</td>
                    <td className="border-b border-stone-200 p-3">You are starting out and want both views of a single URL</td>
                  </tr>
                  <tr>
                    <td className="border-b border-stone-200 p-3 font-bold">Search Console</td>
                    <td className="border-b border-stone-200 p-3">Core Web Vitals grouped across similar URLs</td>
                    <td className="border-b border-stone-200 p-3">You need to know which page groups are affected, not one page</td>
                  </tr>
                  <tr>
                    <td className="border-b border-stone-200 p-3 font-bold">Chrome DevTools</td>
                    <td className="border-b border-stone-200 p-3">A performance trace of one exact load or interaction</td>
                    <td className="border-b border-stone-200 p-3">You have found the slow page and need the code path</td>
                  </tr>
                  <tr>
                    <td className="border-b border-stone-200 p-3 font-bold">WebPageTest</td>
                    <td className="border-b border-stone-200 p-3">A filmstrip and waterfall from chosen locations and devices</td>
                    <td className="border-b border-stone-200 p-3">You want to see what appears on screen, and in what order</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">GTmetrix</td>
                    <td className="p-3">A request waterfall in a readable summary</td>
                    <td className="p-3">You want the slowest requests without reading a full trace</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <BlogText>
              Search Console&apos;s Core Web Vitals report groups similar URLs and is useful for
              prioritizing affected page groups. Chrome DevTools and Lighthouse are useful for
              reproducing and tracing a particular page. Your analytics and business systems show
              whether the affected visitors also experienced lower engagement or conversion.
              Keep those measurements related, but do not treat correlation as proof of one cause.
            </BlogText>

            <BlogText>
              If you want to see what a properly recorded run looks like before doing your own, our{" "}
              <Link href="/blog/agentic-browsing-pagespeed-score" className="text-charcoal underline underline-offset-2">
                agentic browsing write-up
              </Link>{" "}
              publishes its Lighthouse and Chromium versions, the date, and what the two screenshots
              in it do and do not jointly prove. That is the standard worth holding your own
              before-and-after numbers to, and the standard to expect from anyone quoting you for
              performance work.
            </BlogText>

            <BlogHeader>12 Common Reasons Your Website Loads So Slowly</BlogHeader>

            <div className="grid gap-4 md:grid-cols-2">
              {causes.map((cause) => (
                <section key={cause.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <h3 className="mb-2 text-lg font-bold text-charcoal">{cause.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-600">{cause.body}</p>
                </section>
              ))}
            </div>

            <BlogText>
              These causes often interact. A large hero image may be delayed by slow origin HTML,
              discovered through JavaScript and then decoded on a constrained phone. The useful
              answer is not merely &quot;compress the image.&quot; It is the measured chain that delayed the
              user&apos;s main content. The same logic applies to a slow{" "}
              <Link href="/blog/how-to-fix-slow-wordpress" className="text-charcoal underline underline-offset-2">
                WordPress implementation
              </Link>{" "}
              or any other platform.
            </BlogText>

            <BlogHeader>What Slow Website Performance Can Affect</BlogHeader>

            <BlogText>
              Slow or unstable pages can make tasks harder. Visitors may leave before useful
              content appears, abandon an interaction that gives no feedback or tap the wrong
              element after a layout shift. The size of that business effect depends on audience,
              device, intent, market, page type and the measured delay. Use your own analytics and
              conversion definitions rather than applying a universal loss percentage.
            </BlogText>

            <BlogText>
              For organic Search, Google says Core Web Vitals are used by its ranking systems and
              recommends good results for Search and user experience. Its{" "}
              <a
                href="https://developers.google.com/search/docs/appearance/page-experience"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal underline underline-offset-2 hover:text-stone-600"
              >
                page-experience guidance
              </a>{" "}
              also says good scores do not guarantee top rankings and relevant content can still
              rank with a weaker experience. That is why speed is worth improving without calling
              it a penalty or a fixed tie-breaker. Our{" "}
              <Link href="/blog/google-algorithm-updates" className="text-charcoal underline underline-offset-2">
                March 2026 core-update guide
              </Link>{" "}
              shows how to separate an update correlation from a performance problem, and{" "}
              <Link href="/blog/how-website-speed-affects-seo" className="text-charcoal underline underline-offset-2">
                how website speed affects SEO
              </Link>{" "}
              covers what Google has and has not said about the relationship.
            </BlogText>

            <BlogText>
              For paid Search, landing-page experience is one input in ad quality. Google&apos;s{" "}
              <a
                href="https://support.google.com/google-ads/answer/7543502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal underline underline-offset-2 hover:text-stone-600"
              >
                landing-page guidance
              </a>{" "}
              recommends evaluating mobile page speed, but cost per click and conversions depend on
              additional auction, relevance, creative, targeting and market factors. Measure the
              campaign instead of converting one speed score into a promised ad saving.
            </BlogText>

            <BlogHeader>How to Fix a Slow Website in Eight Controlled Steps</BlogHeader>

            <div className="space-y-4">
              {fixes.map((fix) => (
                <section key={fix.title} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
                  <h3 className="mb-2 text-lg font-bold text-charcoal">{fix.title}</h3>
                  <p className="leading-relaxed text-stone-600">{fix.body}</p>
                </section>
              ))}
            </div>

            <BlogText>
              The exact sequence changes with the trace. For LCP, follow the official{" "}
              <a
                href="https://web.dev/articles/optimize-lcp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal underline underline-offset-2 hover:text-stone-600"
              >
                LCP breakdown
              </a>{" "}
              across origin response, resource discovery, download and render delay. For third-party
              code, remove tools that do not create enough value and load remaining scripts with an
              appropriate async, defer, lazy or consent strategy. For delivery, verify a CDN&apos;s real
              cache behavior instead of assuming installation alone creates a fixed improvement.
            </BlogText>

            <BlogText>
              For the tactic-level version of these eight steps, see{" "}
              <Link href="/blog/how-to-speed-up-your-website" className="text-charcoal underline underline-offset-2">
                how to speed up your website
              </Link>. For what it actually takes to reach a 90-plus lab score, and what that score
              does and does not tell you, see{" "}
              <Link href="/blog/how-to-achieve-100-pagespeed" className="text-charcoal underline underline-offset-2">
                our PageSpeed method
              </Link>.
            </BlogText>

            <BlogHeader>When Should You Optimize, and When Should You Rebuild?</BlogHeader>

            <BlogText>
              Optimize the current system when the slow work is identifiable, removable and
              maintainable. Common examples include an oversized media library, a small set of
              global scripts, a cache configuration error or one problematic template. This is
              usually lower risk than replacing the platform, and it protects existing content,
              workflows and integrations.
            </BlogText>

            <BlogText>
              Consider a rebuild discovery when required code cannot be removed, the same regressions
              return after repeated cleanup, important templates cannot meet an agreed requirement,
              or operational, security, integration and ownership constraints now outweigh the cost
              of replacement. A low PageSpeed score alone is not enough. Document the constrained
              layer, affected pages, business requirement, attempted fixes and total cost of each
              option.
            </BlogText>

            <div className="grid gap-4 md:grid-cols-2">
              <section className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <h3 className="mb-3 text-lg font-bold text-charcoal">Keep and optimize</h3>
                <BlogList
                  items={[
                    "The trace identifies a bounded set of media, scripts or cache defects.",
                    "The team can remove or control the slow work without breaking required features.",
                    "The current content and integration workflow still fits the business.",
                    "Validation shows the improvements persist across representative templates.",
                  ]}
                />
              </section>
              <section className="rounded-2xl border border-orange-200 bg-orange-50/50 p-5">
                <h3 className="mb-3 text-lg font-bold text-charcoal">Scope a rebuild or migration</h3>
                <BlogList
                  items={[
                    "Required platform code or architecture repeatedly dominates the measured delay.",
                    "Making it faster would mean breaking a feature you need, weakening security, or stopping your team from publishing.",
                    "Maintenance and vendor costs are modeled against a comparable replacement scope.",
                    "You can write down how URLs, content, analytics and integrations will be handled, plus the switchover and how to reverse it.",
                  ]}
                />
              </section>
            </div>

            <InsightBox variant="warning">
              A migration is not a performance shortcut. It can introduce ranking, analytics,
              accessibility, content and operational risk when URL mapping, parity, testing,
              cutover and rollback are weak. Define acceptance on representative pages and both
              mobile and desktop before implementation begins.
            </InsightBox>

            <BlogText>
              If the evidence supports replacement, review the{" "}
              <Link href="/blog/website-rebuild-cost-2026" className="text-charcoal underline underline-offset-2">
                website rebuild cost inputs
              </Link>{" "}
              and the{" "}
              <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-charcoal underline underline-offset-2">
                SEO-safe migration controls
              </Link>{" "}
              before choosing an architecture or signing a scope. The agreed plan should state the
              pages tested, environment, run method, support, ownership, integrations and remedies.
            </BlogText>
          </div>

          <section className="mt-12 rounded-3xl bg-stone-950 p-7 text-white md:p-9">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              Diagnose before rebuilding
            </p>
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Get a measured performance and migration plan.
            </h2>
            <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
              We can review representative URLs, field data, lab traces, third-party scripts,
              platform constraints and business requirements. You receive the evidence, limitations
              and recommended next step, whether that is targeted optimization or a scoped migration.
            </p>
            <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-950 transition-colors hover:bg-stone-100">
              Get your diagnostic plan <ArrowRight className="h-4 w-4" />
            </CalModalButton>
          </section>

          <section className="mb-10 mt-10">
            <h2 className="mb-4 text-2xl font-bold text-charcoal">Key takeaways</h2>
            <ol className="list-inside list-decimal space-y-2 leading-relaxed text-stone-700">
              <li>
                <strong>Define the slow experience:</strong> loading, interaction and layout movement
                are different problems.
              </li>
              <li>
                <strong>Separate field and lab evidence:</strong> a Lighthouse score is a diagnostic,
                not the Core Web Vitals field assessment or a ranking cutoff.
              </li>
              <li>
                <strong>Test representative templates:</strong> do not let one homepage run stand in
                for the entire website.
              </li>
              <li>
                <strong>Follow the measured constraint:</strong> media, scripts, origin, cache, CDN and
                platform work can interact.
              </li>
              <li>
                <strong>Measure business impact locally:</strong> avoid universal abandonment,
                conversion, ranking and advertising-loss percentages.
              </li>
              <li>
                <strong>Rebuild only with a controlled case:</strong> document constraints, parity,
                acceptance criteria, cutover and rollback first.
              </li>
            </ol>
          </section>

          {slowWebsiteFAQs.length > 0 && <FAQAccordion faqs={slowWebsiteFAQs} />}

          <TopicUpLink postId="why-is-my-website-loading-so-slow" />

          <RelatedPosts currentPostId="why-is-my-website-loading-so-slow" />
        </article>
      </main>
      <Footer />
    </>
  );
}
