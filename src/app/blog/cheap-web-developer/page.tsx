import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, SearchCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogQuote, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

const cheapDevFAQs = blogPosts.find((post) => post.id === "cheap-web-developer")?.faqs ?? [];
const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
  title: { absolute: "Cheap Web Developer: How to Hire Without Getting Burned (2026)" },
  description: "A 2026 due-diligence guide for hiring an affordable web developer: scope, evidence, security, accessibility, SEO migration, ownership, support, and pricing questions.",
  alternates: { canonical: "/blog/cheap-web-developer" },
  keywords: [
    "cheap web developer",
    "affordable web developer",
    "hire web developer",
    "web developer cost",
    "freelance web developer",
    "cheap WordPress developer",
    "low cost website developer",
    "fixed price web development",
  ],
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  openGraph: {
    title: "Cheap Web Developer: How to Hire Without Getting Burned (2026)",
    description: "Compare low-cost web proposals by evidence, scope, security, accessibility, SEO controls, ownership, support, and total cost.",
    type: "article",
    publishedTime: "2026-04-30T00:00:00-05:00",
    modifiedTime: "2026-08-19T00:00:00-05:00",
    authors: ["Hassan Jamal"],
    url: "https://www.pandacodegen.com/blog/cheap-web-developer",
    images: [ogImageForPath("/blog/cheap-web-developer")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Web Developer: How to Hire Without Getting Burned (2026)",
    description: "A practical, evidence-led checklist for comparing affordable developers and agencies.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.pandacodegen.com/blog/cheap-web-developer#article",
      headline: "Cheap Web Developer: How to Hire Without Getting Burned (2026)",
      description: "A due-diligence guide for comparing affordable web-development proposals without assuming price determines quality.",
      image: ogImageUrlForPath("/blog/cheap-web-developer"),
      datePublished: "2026-04-30T00:00:00-05:00",
      dateModified: "2026-08-19T00:00:00-05:00",
      author: {
        "@type": "Person",
        "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
        name: "Hassan Jamal",
        jobTitle: "Co-founder and Lead Engineer",
        url: "https://www.pandacodegen.com/about/hassan",
        knowsAbout: ["Next.js", "Website migration", "Web performance", "Technical SEO", "Content management systems"],
        image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
        sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
      },
      publisher: { "@id": "https://www.pandacodegen.com/#organization" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/cheap-web-developer#webpage" },
      articleSection: "Pricing",
      inLanguage: "en-US",
      wordCount: 3228,
      timeRequired: "PT16M",
      about: [
        { "@type": "Thing", name: "Web development", sameAs: ["https://en.wikipedia.org/wiki/Web_development"] },
        { "@type": "Thing", name: "Outsourcing", sameAs: ["https://en.wikipedia.org/wiki/Outsourcing"] },
        { "@type": "Thing", name: "Due diligence", sameAs: ["https://en.wikipedia.org/wiki/Due_diligence"] },
        { "@type": "Thing", name: "Web development pricing" },
      ],
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
      citation: [
        { "@type": "CreativeWork", name: "Google: site moves with URL changes", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
        { "@type": "CreativeWork", name: "W3C: WCAG 2.2", url: "https://www.w3.org/TR/WCAG22/" },
        { "@type": "CreativeWork", name: "OWASP Application Security Verification Standard", url: "https://owasp.org/www-project-application-security-verification-standard/" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pandacodegen.com/blog/cheap-web-developer#faq",
      mainEntity: cheapDevFAQs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/blog/cheap-web-developer#webpage",
      url: "https://www.pandacodegen.com/blog/cheap-web-developer",
      name: "Cheap Web Developer: How to Hire Without Getting Burned (2026)",
      description: "A due-diligence guide for comparing affordable web-development proposals without assuming price determines quality.",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      datePublished: "2026-04-30T00:00:00-05:00",
      dateModified: "2026-08-19T00:00:00-05:00",
      breadcrumb: { "@id": "https://www.pandacodegen.com/blog/cheap-web-developer#breadcrumb" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pandacodegen.com/blog/cheap-web-developer#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
        { "@type": "ListItem", position: 3, name: "Cheap Web Developer", item: "https://www.pandacodegen.com/blog/cheap-web-developer" },
      ],
    },
  ],
};

export default function CheapWebDeveloperPage() {
  return (
    <main className="bg-paper min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />

      <section className="relative pt-24 md:pt-40 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb items={postCrumbs("cheap-web-developer", "Cheap Web Developer")} />
          <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="inline-block px-3 py-1 text-xs font-medium bg-stone-100 text-stone-600 rounded-full mb-4">Pricing</div>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
            Cheap Web Developer:{" "}
            <span className="font-serif italic text-cognac">How to Hire Without Getting Burned</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
            Price on its own tells you nothing about quality. The better question is whether two quotes even
            cover the same work: the same pages, the same features, the same care over migration, the same
            security and accessibility checks, the same way of measuring performance, the same ownership at
            the end, the same support, and the same third-party costs. This guide gives you the questions to
            ask and the evidence to request before you pay a deposit. Our own terms, so you can check them against any quote: from $1,500 at a fixed price agreed before we start, no minimum project size, and the code, design files and accounts are yours at the end.
          </p>
          <BlogAuthor
            date="Apr 30, 2026, updated Aug 3, 2026"
            readTime="9 min read"
            bio="Hassan scopes WordPress, Webflow and GoHighLevel migrations with your search traffic in mind, and writes down the acceptance conditions before anyone starts building."
            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
          />
        </div>
      </section>

      <section className="px-6 pb-20">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">
          <div className="mb-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl" data-speakable="true">
            <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">The short answer</p>
            <BlogList
              items={[
                "Compare identical scope. A five-page template setup and a migration with URL mapping, CMS work, analytics, and integrations are not the same product.",
                "Verify live work, your candidate's role, and permission to publish the example. A screenshot alone is not proof.",
                "Get it in the signed proposal: how you sign off, when you pay, who owns it, what licences you get, what support looks like, how changes are handled, and what happens if you want money back.",
                "Test page by page, the same way each time. No framework, platform, developer or price bracket guarantees you speed, rankings, conversions or security.",
                "Price what it costs to run, not just to build: hosting, the CMS, email, analytics, maintenance, support, usage, and the changes you will want later.",
              ]}
            />
          </div>

          <BlogHeader>What Does “Cheap Web Developer” Mean in 2026?</BlogHeader>
          <BlogText>
            The search phrase covers freelance web developers on marketplaces, individual contractors, template specialists, fixed-price studios, agencies, website builders, and AI-assisted services. Their prices are not directly comparable until the scope is normalized. Marketplace listings are also mutable and self-selected, so a search-result price is not a market benchmark.
          </BlogText>
          <BlogText>
            Hiring a web developer generally lands between a few hundred dollars for a narrow repair and five figures for a migration with commerce or a portal, and the spread is caused by scope rather than by rate. Use price buckets only to organize quotes, not to infer deliverables. Under $500 may be appropriate for a narrow repair or template task. A $500 to $1,500 quote may fit a landing page or small scoped site. PandaCodeGen publishes a $1,500 Starter planning anchor, $3,500 Growth anchor, and $5,000 to $10,000+ Scale anchor. In every bucket, the accepted scope controls what is included. The{" "}
            <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>{" "}
            lists those anchors, and our{" "}
            <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline">website cost guide</Link>{" "}
            explains which inputs move a quote from one bucket to the next.
          </BlogText>

          <div className="my-8 overflow-x-auto" tabIndex={0} role="region" aria-label="Scrollable table">
            <table className="w-full min-w-[650px] border-collapse text-sm">
              <thead>
                <tr className="bg-stone-100">
                  <th className="p-3 text-left border border-stone-300">Planning bucket</th>
                  <th className="p-3 text-left border border-stone-300">Plausible use</th>
                  <th className="p-3 text-left border border-stone-300">Do not assume</th>
                  <th className="p-3 text-left border border-stone-300">Evidence to request</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-stone-300 font-semibold">Under $500</td><td className="p-3 border border-stone-300">Narrow repair or configuration</td><td className="p-3 border border-stone-300">Full strategy, migration, or ownership</td><td className="p-3 border border-stone-300">Task list, test, rollback, credentials</td></tr>
                <tr className="bg-stone-50"><td className="p-3 border border-stone-300 font-semibold">$500 to $1,500</td><td className="p-3 border border-stone-300">Landing page or small scoped site</td><td className="p-3 border border-stone-300">Every integration or SEO control</td><td className="p-3 border border-stone-300">Page list, content owner, form flow, handoff</td></tr>
                <tr><td className="p-3 border border-stone-300 font-semibold">$1,500 to $3,500</td><td className="p-3 border border-stone-300">Scoped business site or migration</td><td className="p-3 border border-stone-300">Unlimited pages, revisions, or support</td><td className="p-3 border border-stone-300">Inventory, acceptance, terms, vendor costs</td></tr>
                <tr className="bg-stone-50"><td className="p-3 border border-stone-300 font-semibold">$3,500 to $10,000+</td><td className="p-3 border border-stone-300">Larger migration, CMS, commerce, or portal</td><td className="p-3 border border-stone-300">Automatic ROI or cheaper three-year cost</td><td className="p-3 border border-stone-300">Architecture, data, security, operations, exit plan</td></tr>
              </tbody>
            </table>
          </div>

          <InsightBox variant="warning" label="Price comparison rule">
            If two proposals do not use the same page and feature inventory, migration controls, acceptance tests, vendor assumptions, and support boundary, their totals are not yet comparable.
          </InsightBox>

          <BlogHeader>Where Affordable Website Developers Advertise</BlogHeader>
          <BlogText>
            Low-cost quotes arrive through a handful of channels, and each one changes what due diligence has to cover rather than what the work is worth. Identify the channel before you read the number.
          </BlogText>
          <InsightBox variant="info" label="Before you ask anyone for a price">
            The first thing an experienced developer asks a stranger with a budget question is what kind of site it is and what the budget is. Send these six lines with the first message and you will get comparable numbers instead of a range: the current site URL and platform, or that there is no site yet; the page count, and how many are one-off layouts rather than repeats of a template; who writes and supplies the content; every form, booking, payment or CRM integration the site has to connect to; whether existing URLs and search traffic have to survive the move; and the budget band you are actually working inside. Withholding the budget does not get you a lower number, it gets you a scope nobody can price.
          </InsightBox>
          <BlogList
            items={[
              "Gig marketplaces. Fast to buy from and suited to narrow, well-defined tasks. Listings are self-authored, so verify live work and the seller's actual role rather than the profile copy.",
              "Hourly freelance marketplaces. A wider pool and better suited to an ongoing relationship. Prefer a fixed-scope contract inside the platform so the deliverable, and not the hour count, is what you are buying.",
              "Vetted talent networks. Screening is done for you and priced accordingly. Usually more than a marketing site needs, and a reasonable fit for application work where the screening is the point.",
              "Platform-specialist marketplaces. Developers who work only inside one website platform. Useful for changes within a platform you intend to keep, and the wrong starting point if you are considering leaving it.",
              "Fixed-price studios. A defined scope, a defined number, and a named team. Ask what falls outside the fixed price and how it gets priced.",
              "Offshore development shops. Rates are lower and written specifications matter more, because ambiguity gets resolved without you in the room. Check working-hours overlap before you check price.",
              "Local independents. Easier real-time communication and simpler contracting, usually at a higher rate. Often the right answer where communication speed matters more than cost.",
            ]}
          />

          <BlogQuote>
              Price on its own tells you nothing about quality. Two quotes at different prices might not even be pricing the same job.
          </BlogQuote>

          <BlogHeader>Which Kind of Developer the Job Needs</BlogHeader>
          <BlogText>
            Buyers routinely pay for capability the project never uses. Front-end work is the visible layer: layout, responsive behaviour, interaction, accessibility of the interface. Back-end work is the layer behind it: accounts, permissions, data storage, payments, server-side integrations. Full-stack means one person covers both, which is worth paying for when a single owner across the whole build genuinely reduces risk.
          </BlogText>
          <BlogText>
            Most marketing sites, brochure sites and content sites are front-end work with a content management layer. If nothing on your list stores or processes data beyond a contact form, say so in the brief, because it changes who should be quoting.
          </BlogText>

          <BlogHeader>Developer, Website Builder, or an AI Site Generator?</BlogHeader>
          <div data-speakable="true">
            <BlogText>
              Three routes compete for the same budget in 2026, and they differ less in what they produce
              than in who is answerable when it is wrong. A website builder sells you a subscription and a
              system to assemble inside. An AI site generator sells you a starting point in minutes. A
              developer sells you someone accountable for the result. Work out which of the three you are
              actually buying before you compare a single price.
            </BlogText>
          </div>
          <BlogList
            items={[
              "A website builder fits a genuinely standard site where you would rather pay monthly than once. The cost recurs, the work stays yours, and the platform decides what is possible. What you are not buying is accountability.",
              "An AI site generator is the quickest route to a first draft and does nothing for the part that takes the time: real content, forms that deliver, analytics, redirects from whatever you had before, and whether search engines can read what it produced.",
              "A developer earns the fee when something has to be true after launch day. Existing URLs survive. A form reaches your CRM. A checkout takes money. Somebody is contractually answerable when one of those fails.",
              "The three are not exclusive. Generating a draft and paying someone to make it production-ready is a legitimate route, as long as the quote prices the rework rather than treating the draft as a head start.",
            ]}
          />
          <BlogText>
            Ask it in the other direction if you are undecided. If nothing on your list has to keep working
            after launch and no existing search traffic is at stake, a builder or a generator is very likely
            enough, and hiring anybody is the expensive option. The moment the answer involves traffic you
            already have, money changing hands, or data going somewhere, you have stopped buying pages and
            started buying accountability. Where a generated site is already live and missing from search,{" "}
            <Link href="/blog/lovable-site-not-showing-on-google" className="text-cognac hover:underline">why an AI-built site may not appear in Google</Link>{" "}
            covers what to check before paying anyone to rebuild it.
          </BlogText>

          <BlogHeader id="can-chatgpt-build-a-website">Can ChatGPT build me a website?</BlogHeader>
          <div data-speakable="true">
            <BlogText>
              It can produce the code for one, and that is a smaller claim than it sounds. Ask{" "}
              <strong>ChatGPT</strong>, <strong>Claude</strong> or a purpose-built generator like{" "}
              <strong>Lovable</strong> or <strong>v0</strong> for a business site and you will get working
              pages quickly. What you will not get by default is the part that decides whether the site
              earns anything: someone accountable for it after launch.
            </BlogText>
          </div>
          <BlogText>
            Four things are yours to solve whichever model generated the pages, and they are the same four
            that make up most of a real quote:
          </BlogText>
          <BlogList
            items={[
              "Hosting, a domain and a deploy pipeline. Generated code is a repository, not a live website, and nothing in the chat transcript pays a hosting bill.",
              "Whether search engines can read it. This is the failure we see most often on generated sites, and it is why the Lovable case above exists as its own article.",
              "Redirects from whatever you had before. A model does not know your old URLs, so if you already have search traffic, nothing preserves it unless somebody maps it deliberately.",
              "Forms, payments and data. A form that renders is not a form that delivers, and the difference only shows up after a customer has used it.",
            ]}
          />
          <BlogText>
            The honest recommendation is a split rather than a verdict. <strong>If nothing has to keep
            working after launch day and no existing traffic is at stake, generating the site yourself is a
            sensible way to spend nothing.</strong> If money, data or existing rankings are involved,
            generate the draft by all means, then price the work of making it production-ready — and price
            it as rework, not as a discount for having a head start.
          </BlogText>

          <BlogHeader>How to Verify a Cheap Web Developer’s Portfolio</BlogHeader>
          <BlogText>
            Ask for three live URLs and the candidate&apos;s exact role on each project. Confirm whether they designed, developed, migrated, optimized, maintained, or only contributed one component. Request permissioned evidence for any private analytics, revenue, testimonial, or before-and-after claim.
          </BlogText>
          <BlogList
            items={[
              "Open the live site and check the footer, source, public credits, or repository evidence where available.",
              "Ask for a dated screenshot or export that shows the URL, test profile, tool version, and reporting period.",
              "Run your own accessibility, form, mobile, rendered-output, and performance checks on representative routes.",
              "Ask what changed after the claimed result. A current site may not match the delivered version.",
              "Treat owner-operated brand examples as first-party evidence, not independent client validation.",
            ]}
          />

          <div className="my-8 rounded-2xl bg-charcoal text-white p-7">
            <h2 className="text-2xl font-bold mb-3">How we label our own project evidence</h2>
            <p className="text-stone-300 leading-relaxed mb-4">
              MyCustomPatches is an independent client; its figures are owner-confirmed and published with permission. Panda Patches is owned and operated by PandaCodeGen co-founder <Link href="/about/imran" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Imran</Link> Raza Ladhani, so its figures are founder-affiliated rather than independent client proof. PandaCodeGen built its technical platform but holds no ownership stake.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/15 p-4">
                <p className="font-bold text-cognac mb-1">
                  <Link href="/work/mycustompatches" className="hover:underline">MyCustomPatches</Link>
                </p>
                <p className="text-sm text-stone-300">An independent client. The owner reports a 22-day migration. We are not publishing before-and-after performance, hosting or commercial figures for this build, because we hold the owner&apos;s account of the timeline but not the dated test records those numbers would need to stand behind them.</p>
              </div>
              <div className="rounded-xl border border-white/15 p-4">
                <p className="font-bold text-cognac mb-1">
                  <Link href="/work/panda-patches" className="hover:underline">Panda Patches</Link>
                </p>
                <p className="text-sm text-stone-300">Owner-approved internal reporting recorded revenue rising from about $38,000 to $50,000 per month during the owner-operated period. It is not independently audited and is not attributed solely to the rebuild.</p>
              </div>
            </div>
          </div>

          <BlogHeader>What Must Be in the Scope of Work?</BlogHeader>
          <BlogText>
            A short quote can still be professional if it is specific. A long proposal can still be unsafe if acceptance is vague. Before onboarding, require a signed proposal or SOW that identifies the parties, pages, components, content duties, integrations, milestones, review process, launch plan, and exclusions. What a migration scope has to
            cover depends on the source platform, so read the relevant one before you compare quotes:{" "}
            <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress migration</Link>,{" "}
            <Link href="/services/webflow" className="text-cognac hover:underline">Webflow migration</Link>,{" "}
            <Link href="/services/squarespace" className="text-cognac hover:underline">Squarespace migration</Link>,{" "}
            <Link href="/services/wix" className="text-cognac hover:underline">Wix migration</Link>, or{" "}
            <Link href="/services/woocommerce" className="text-cognac hover:underline">WooCommerce storefront migration</Link>.
          </BlogText>
          <BlogList
            items={[
              "Deliverables: page and template inventory, CMS collections, forms, integrations, analytics, consent, and environments.",
              "Migration: current URL inventory, stable URLs where practical, page-level redirects, canonicals, sitemap, internal links, staged crawl, monitoring, and rollback.",
              "Performance: representative pages, mobile and desktop profiles, tool version, run count, consent and page state, target, and remedy.",
              "Security: authentication, authorization, secrets, validation, abuse controls, logging, dependency review, backups, and incident responsibility where applicable.",
              "Accessibility: target standard, keyboard and screen-reader checks, labels, focus, contrast, errors, and any known exceptions.",
              "Commercial terms: 30 percent onboarding and 70 percent on delivery unless the signed contract says otherwise, change control, refund conditions, support, ownership, and third-party licenses.",
            ]}
          />

          <BlogHeader>Performance, SEO, Accessibility, and Security Checks</BlogHeader>
          <BlogText>
            A <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> score is a lab result, not a promise about every visitor. PandaCodeGen uses a 90+ Lighthouse acceptance target only when the accepted terms name representative pages, mobile and desktop profiles, and three recorded passing runs for each agreed page and profile. Field{" "}
            <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals</Link>, when available, answer a different question about real-user experience. If the
            existing site is the problem rather than the quote, start with{" "}
            <Link href="/blog/how-to-speed-up-your-website" className="text-cognac hover:underline">how to speed up a website</Link>.
          </BlogText>
          <BlogText>
            For an SEO-sensitive migration, Google recommends URL mapping, permanent redirects, updated canonicals and internal links, sitemaps, and monitoring. Google&apos;s site-move documentation is specific about three things a cheap quote often leaves out: use server-side permanent redirects such as 301 or 308 rather than client-side ones; keep those redirects, in Google&apos;s words, &ldquo;for as long as possible, generally at least 1 year&rdquo;, so signals transfer to the new URLs; and avoid redirect chains, ideally no more than three hops. Google also states that a small to medium-sized site can take a few weeks for most pages to move, and that larger sites take longer, so a quote that ends at launch day has priced only part of the job. Rankings, indexing, traffic, and recovery timing remain controlled by search engines. No developer can guarantee unchanged rankings.
          </BlogText>
          <BlogText>
            Use WCAG 2.2 as the accessibility reference selected in the scope and the OWASP Application Security Verification Standard as a security-requirements source where relevant. A passing automated scan is not a complete accessibility or security review.
          </BlogText>

          <BlogHeader>Ownership, Refunds, and Support</BlogHeader>
          <BlogText>
            Avoid both extremes: “you own everything” and “the developer owns everything.” The signed terms should separate client content, paid custom deliverables, reusable internal tools, pre-existing code, and third-party components. Third-party code keeps its original license. Repository, domain, hosting, and business-account control should also be explicit. We walk through
            those clauses in{" "}
            <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline">do you own your website</Link>.
          </BlogText>
          <BlogText>
            PandaCodeGen&apos;s public refund position is tied to the signed contract: if the contracted scope is not delivered, the applicable remedy can include a 100 percent refund as defined in those accepted terms. It is not a preference or change-of-mind guarantee. Client content remains the client&apos;s; undelivered code and PandaCodeGen&apos;s reusable intellectual property do not automatically transfer after a refund.
          </BlogText>
          <BlogText>
            Starter projects can include 15 business days of support and Growth or Scale projects 30 business days, beginning at production launch when written that way in the accepted terms. Support covers defects and agreed minor tweaks in signed deliverables, not new features or third-party changes. Out-of-scope work is quoted under the change process the parties accept.
          </BlogText>

          <BlogHeader>Fixed Price vs Hourly Billing</BlogHeader>
          <BlogText>
            We quote fixed, from $1,500, because our scopes are defined before work starts. That is a statement about how we work, not a verdict on the other model: neither is automatically more honest or cheaper. Fixed price works well when deliverables and acceptance can be defined. Hourly or time-and-materials can be better for uncertain discovery, inherited defects, ongoing maintenance, or rapidly changing requirements. A capped discovery phase followed by a fixed implementation is often a useful hybrid.
          </BlogText>
          <BlogList
            items={[
              "For fixed price, verify assumptions, exclusions, revision rounds, milestones, acceptance, and change pricing.",
              "For hourly work, verify rates, estimate range, cap, approval threshold, time records, and stop conditions.",
              "For either model, require weekly evidence, a decision log, repository access where agreed, and a recoverable handoff.",
            ]}
          />

          <BlogHeader>Payments, Milestones and the Final Handover</BlogHeader>
          <BlogText>
            Tie money to something you can inspect. A deposit buys a start, not a finished site, and releasing everything before there is anything to review removes the only leverage you have if the work stalls. PandaCodeGen&apos;s standard structure is 30 percent at onboarding and 70 percent on delivery under the signed agreement. Whatever structure a provider proposes, the test is the same: at the point each payment falls due, can you point at a deliverable and check it against the accepted scope?
          </BlogText>
          <BlogList
            items={[
              "Agree what each milestone releases and what evidence marks it complete before any money moves.",
              "Do not pay the full amount before there is a reviewable deliverable.",
              "Open the site on a real phone on a normal connection, not only on a desktop over office wifi.",
              "Walk every form, checkout and integration end to end and confirm the submissions arrive where they are supposed to.",
              "Re-run the agreed acceptance tests yourself on the agreed pages and profiles rather than accepting a summary.",
              "Confirm the handover before the final release: repository, domain, hosting, CMS, analytics and any vendor accounts in your name, plus the credentials to reach them.",
            ]}
          />

          <BlogHeader>The Costs That Arrive After the Invoice</BlogHeader>
          <BlogText>
            The sticker price is the smallest number in the decision. Ask each provider to write down what the site will cost to keep running and what happens when it needs to change, because a quote can be low precisely because those things sit outside it.
          </BlogText>
          <BlogList
            items={[
              "Recurring vendor cost. Platform plans, premium plugins or add-ons, form and email services, search, media hosting and usage-based fees. Ask for the itemised monthly figure and which lines are optional.",
              "Change cost. What it costs when you want a new page type, a new integration or a design change six months from now, and whether your own team can make routine edits without paying anybody.",
              "Replacement risk. Work built on components you cannot maintain, or that no other developer can pick up, is work you will buy twice. Ask what a different developer would need in order to take it over.",
              "Search visibility. A migration that skips URL mapping, redirects and validation can cost traffic that took years to accumulate, and recovery is neither quick nor certain. Confirm this work is in the scope rather than assumed.",
              "Your own time. Cheaper quotes usually transfer direction, quality assurance and coordination to you. That is a legitimate trade, but price it honestly against what your time is worth.",
            ]}
          />

          <BlogHeader>Red Flags When Hiring an Affordable Developer</BlogHeader>
          <div data-speakable="true">
            <BlogText>
              Any one of these is a reason to slow down and ask a question. Two of them together is usually a
              reason to stop. Notice that none of the eight is about the price: a cheap quote with a defined
              scope, an inspectable milestone and a named owner is a better risk than an expensive one
              without them.
            </BlogText>
          </div>
          <div className="grid gap-4 my-6">
            {[
              ["Unverifiable portfolio", "The candidate cannot explain their role, show a live result, or provide permissioned evidence."],
              ["Vague scope", "The proposal promises a complete site without a page, feature, content, integration, or acceptance inventory."],
              ["Universal outcome promises", "The seller guarantees rankings, conversion lift, citations, zero downtime, perfect security, or a platform-wide performance score."],
              ["Credential shortcuts", "Shared passwords, secrets in source control, production-only testing, or vendor accounts owned solely by the contractor."],
              ["Unclear ownership", "The proposal does not separate client assets, paid custom work, reusable tools, and third-party licenses."],
              ["No failure plan", "There is no backup, rollback, monitoring, error handling, or contact for launch problems."],
              ["Unlimited revisions", "Unlimited usually means the scope was never defined. Without a round count and a sign-off point, both sides lose the ability to say the work is finished."],
              ["Payment ahead of deliverables", "The schedule asks for most or all of the money before there is anything to review, or resists tying releases to inspectable milestones."],
            ].map(([label, description]) => (
              <div key={label} className="rounded-xl border border-stone-200 p-5">
                <p className="font-bold text-charcoal mb-1">{label}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <BlogHeader>How PandaCodeGen’s Starting Tiers Work</BlogHeader>
          <BlogText>
            The published tiers are planning anchors, not universal package promises. Extra pages, integrations, features, data cleanup, compliance work, and custom operations are discussed before the accepted scope is signed. For the multi-year view of what a
            build costs to run, compare{" "}
            <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-cognac hover:underline">three-year platform running costs</Link>.
          </BlogText>
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="rounded-xl border border-stone-200 p-5"><p className="font-bold text-charcoal">$1,500 Starter</p><p className="text-sm text-stone-600 mt-2">Small scoped site or migration anchor. Final pages, features, tests, and 15-business-day support boundary follow the accepted terms.</p></div>
            <div className="rounded-xl border border-stone-200 p-5"><p className="font-bold text-charcoal">$3,500 Growth</p><p className="text-sm text-stone-600 mt-2">Larger content and CMS anchor. Final migration inventory, integrations, tests, and 30-business-day support boundary follow the accepted terms.</p></div>
            <div className="rounded-xl border border-stone-200 p-5"><p className="font-bold text-charcoal">$5,000 to $10,000+</p><p className="text-sm text-stone-600 mt-2">Scale, commerce, portal, or custom-feature anchor. Architecture, vendors, security, data, and operations are scope-dependent.</p></div>
          </div>

          <div className="my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
            <SearchCheck className="w-8 h-8 text-cognac mx-auto mb-3" />
            <p className="text-xl font-bold mb-2">Compare your current site and the proposed scope</p>
            <p className="text-sm text-stone-300 max-w-xl mx-auto mb-6">
              Share the URL, platform, page inventory, integrations, and business constraints. We will identify what belongs in an SEO-safe migration plan and what still needs evidence.
            </p>
            <CalModalButton className="inline-flex items-center gap-2 px-7 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
              Get Your Migration Plan <ArrowRight className="w-4 h-4" />
            </CalModalButton>
          </div>

          <section className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-cognac" />
              <h2 className="text-xl font-bold text-charcoal">Primary references checked August 3, 2026</h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li><a className="text-cognac underline underline-offset-4" href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noreferrer">Google: site moves with URL changes</a></li>
              <li><a className="text-cognac underline underline-offset-4" href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer">W3C: WCAG 2.2</a></li>
              <li><a className="text-cognac underline underline-offset-4" href="https://owasp.org/www-project-application-security-verification-standard/" target="_blank" rel="noreferrer">OWASP: Application Security Verification Standard</a></li>
            </ul>
          </section>

          <BlogHeader>Related reading</BlogHeader>
          <BlogText>
            To price the move itself, see our{" "}
            <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline">website migration cost breakdown</Link>.
            To price a refresh of a site you already own, see{" "}
            <Link href="/blog/website-redesign-cost" className="text-cognac hover:underline">what drives redesign cost</Link>.
          </BlogText>

          <BlogHeader>Frequently Asked Questions</BlogHeader>
          <FAQAccordion faqs={cheapDevFAQs} />
          <TopicUpLink postId="cheap-web-developer" />

          <RelatedPosts currentPostId="cheap-web-developer" />
        </article>
      </section>

      <Footer />
    </main>
  );
}
