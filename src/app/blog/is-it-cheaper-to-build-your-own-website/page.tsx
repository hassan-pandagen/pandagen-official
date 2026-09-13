import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Wallet } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogAuthor, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const dynamic = "force-static";

const postFAQs = blogPosts.find(p => p.id === "is-it-cheaper-to-build-your-own-website")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));

const TITLE = "Is It Cheaper to Build Your Own Website? Yes, Until It Has a Job";
const DESC =
    "For a portfolio or a one-campaign landing page, build it yourself. For a business that takes orders, the build was never the expensive part, and the four costs that follow all arrive after launch.";
const URL_PATH = "/blog/is-it-cheaper-to-build-your-own-website";
const CANONICAL = `https://www.pandacodegen.com${URL_PATH}`;

export const metadata: Metadata = {
    title: "Is It Cheaper to Build Your Own Website? (2026)",
    description: DESC,
    alternates: { canonical: URL_PATH },
    keywords: [
        "is it cheaper to build a website myself",
        "build website yourself vs hire",
        "is $1500 a good price for a website",
        "ai website builder for business",
        "diy website vs developer",
        "do i own the code if an agency builds my website",
        "how much does a website cost to run",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: TITLE,
        description: DESC,
        type: "article",
        publishedTime: "2026-09-13T00:00:00-05:00",
        modifiedTime: "2026-09-13T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: CANONICAL,
        images: [ogImageForPath(URL_PATH)],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: "Build it yourself for a portfolio. For a business that takes orders, the four real costs all arrive after launch.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${CANONICAL}#article`,
            "headline": TITLE,
            "description": DESC,
            "image": ogImageUrlForPath(URL_PATH),
            "datePublished": "2026-09-13T00:00:00-05:00",
            "dateModified": "2026-09-13T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "knowsAbout": ["Next.js", "Website cost", "Web development", "AI website builders", "Technical SEO"],
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": `${CANONICAL}#webpage` },
            "articleSection": "Pricing",
            "keywords": ["website cost", "AI website builder", "DIY website", "custom web development"],
            "inLanguage": "en-US",
            "timeRequired": "PT10M",
            "about": [
                { "@type": "Thing", "name": "Website development cost" },
                { "@type": "Thing", "name": "AI website builder" },
                { "@type": "Thing", "name": "Web development", "sameAs": ["https://en.wikipedia.org/wiki/Web_development"] }
            ],
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] }
        },
        {
            "@type": "FAQPage",
            "@id": `${CANONICAL}#faq`,
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${CANONICAL}#breadcrumb`,
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Is it cheaper to build your own website", "item": CANONICAL }
            ]
        },
        {
            "@type": "WebPage",
            "@id": `${CANONICAL}#webpage`,
            "url": CANONICAL,
            "name": TITLE,
            "description": DESC,
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-09-13T00:00:00-05:00",
            "dateModified": "2026-09-13T00:00:00-05:00",
            "inLanguage": "en-US"
        },
    ]
};

const linkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function IsItCheaperPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Header />

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={postCrumbs("is-it-cheaper-to-build-your-own-website", "Is it cheaper to build your own website")} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-cognac border border-cognac/20 rounded-full text-xs font-semibold mb-5">
                            <Wallet className="w-3 h-3" /> Pricing
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            Is It Cheaper to Build Your Own Website?{" "}
                            <span className="font-serif italic text-cognac">Yes, Until It Has a Job</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            For a personal site, a portfolio, or a landing page you will throw away in six months: build
                            it yourself, and paying someone $1,500 for that would be a waste of your money. For a
                            business that takes orders, bookings or enquiries, the building was never the expensive part.
                        </p>
                        <BlogAuthor
                            date="Sep 13, 2026"
                            readTime="10 min read"
                            bio="Hassan builds and migrates Next.js sites, and writes down what the costs actually are rather than what makes an agency look necessary."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    <div className="mb-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl" data-speakable="true">
                        <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">The Short Answer</p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Portfolio, side project, one-campaign landing page: build it yourself. An AI builder gets you live in an afternoon and it will look fine.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> A site that takes money, bookings or enquiries is an operation, not a page. Four costs follow it, and all four arrive after launch.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> We tested 48 small-business sites between 1 and 3 September 2026. 37 fail the check that decides whether an AI assistant can read them.</li>
                        </ul>
                    </div>

                    <BlogHeader id="builders">What AI website builders genuinely do well</BlogHeader>
                    <BlogText>
                        AI builders produce a real, working page from one sentence, and for a project with no customers
                        attached that is the correct tool. Most agency writing on this topic is dishonest about that. The
                        layout is competent, it is responsive, and it reads well on a phone. Ten years ago that was a
                        week of work from a junior developer. Anyone telling you the output is garbage has not used one
                        recently.
                    </BlogText>
                    <BlogText>
                        They are the right answer for a fun project, a side idea you are testing, a one-page site for an
                        event, or a landing page you will run for a month and throw away. Nothing connects to anything,
                        so there is no integration to keep alive, and if it breaks on a Tuesday nobody loses an order.
                        If that describes your project, stop reading and go build it. You do not need us.
                    </BlogText>

                    <BlogHeader id="four-things">The four things that change when the site has a job</BlogHeader>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">1. Connecting it to anything</h3>
                    <BlogText>
                        The moment your site has to talk to something else, you are not writing a page any more, you are
                        running an integration. A booking form has to reach your calendar. A contact form has to land in
                        your inbox reliably, and not in spam. A shop has to talk to a payment provider, and that provider
                        has to talk back to confirm the money arrived.
                    </BlogText>
                    <BlogText>
                        An AI builder will write code that calls an API and it will often be correct. What it does not
                        give you is the account, the key, the permissions, the error handling for when the other service
                        is down, the retry when a message fails, or the webhook that tells your site the payment went
                        through. Those are not code problems. They are operational ones, and they only show up when a
                        real customer hits them. <BlogHighlight>The failure is quiet, which is what makes it
                        expensive.</BlogHighlight> A form that silently stops delivering looks exactly like a week with
                        no enquiries.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">2. Getting it live properly</h3>
                    <BlogText>
                        Publishing is not the same as launching. Between the two sit the domain, the DNS records, the
                        certificate, and the email routing that must not break while you change the first three. That
                        last one catches people. Point your domain at a new host carelessly and your email stops
                        arriving, and you find out from a customer who says they replied three days ago. It is
                        recoverable, it is a bad afternoon, and it is entirely avoidable if someone knew to check first.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">3. Keeping it running</h3>
                    <BlogText>
                        Every site is made of parts written by other people, and those parts get security holes. In 2026,
                        two WordPress plugins had critical vulnerabilities under active attack: Super Forms and Elementor
                        Pro, both letting an unauthenticated attacker upload a file and take over the site. Wordfence
                        blocked more than 250,000 attempts against one of them and close to 190,000 against the other. We
                        took both apart, with the CVE identifiers and the dates, in{" "}
                        <Link href="/blog/wordpress-plugin-security-2026" className={linkClass}>the WordPress plugin security record</Link>.
                    </BlogText>
                    <BlogText>
                        Every stack has this, WordPress included and Next.js included. What a business has to answer is
                        who notices, and how fast the fix lands. If the answer is &ldquo;me, when I next log in&rdquo;,
                        the honest version is that nobody is watching.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">4. Whether machines can actually read it</h3>
                    <BlogText>
                        PandaCodeGen tested 48 small-business websites with Google&apos;s Lighthouse tools between 1 and
                        3 September 2026.{" "}
                        <BlogHighlight>37 of the 48 failed Google&apos;s agent-accessibility-tree check</BlogHighlight>,
                        while the same sites had a median Lighthouse SEO score of 92 or above. By the standard SEO check
                        those sites are fine. By the check that describes whether software can read and act on the page,
                        most of them are not.
                    </BlogText>
                    <BlogText>
                        On 2 September 2026 we watched one of those failing sites serve GPTBot, ClaudeBot, PerplexityBot
                        and Googlebot an identical response: HTTP 200, and exactly 128,100 bytes to each. Every bot was
                        let in. Every bot got the whole page. The page still failed the check. Access was never the
                        problem. Structure was. We break the category down rule by rule in our{" "}
                        <Link href="/blog/agentic-browsing-pagespeed-score" className={linkClass}>agentic browsing guide</Link>.
                    </BlogText>
                    <InsightBox variant="warning" label="Two limits on that finding">
                        The sample is 48 sites we selected, not a random sample of the web, so treat it as a signal
                        rather than a population estimate. And the agent-accessibility-tree audit scores binary against a
                        hard-coded rule list, so one violation of any single rule scores zero. A site scoring zero is not
                        necessarily broken everywhere. It has one problem somewhere, and it needs finding. We do not name
                        the sites, their owners, or whoever built them.
                    </InsightBox>

                    <BlogHeader id="hidden-cost">The cost nobody puts in the comparison</BlogHeader>
                    <BlogText>
                        Say you build it yourself and it mostly works. Your Saturday still is not free. The afternoon you
                        spend working out why the form stopped delivering is an afternoon you were not selling, quoting,
                        or doing the work customers actually pay you for. The evening you spend reading about DNS records
                        is an evening you do not get back.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>If you are the one managing the website, who is managing the business?</BlogHighlight>{" "}
                        For a lot of owners the honest answer is that both get done badly. The site gets fixed slowly
                        because you are busy, and the business gets attention late because the site broke. Neither
                        failure is dramatic, both are expensive, and neither one shows up as an invoice you could point
                        at.
                    </BlogText>

                    <BlogHeader id="build-it-yourself">When you should build it yourself</BlogHeader>
                    <BlogList items={[
                        "It is a personal site, a portfolio, or a project you are doing for fun.",
                        "It is one landing page for one campaign, and you will throw it away after.",
                        "Nothing connects to anything: no payments, no bookings, no CRM.",
                        "You are testing whether an idea has any interest at all, before it has customers.",
                        "You enjoy it. That is a real reason and it counts.",
                    ]} />
                    <BlogText>
                        In those cases the four costs above are close to zero, because nobody downstream depends on the
                        thing working.
                    </BlogText>

                    <BlogHeader id="stops-being-cheaper">When it stops being cheaper</BlogHeader>
                    <BlogList items={[
                        "Money moves through it, or bookings do.",
                        "Enquiries arriving is how you get customers, so a silent form is lost revenue.",
                        "It connects to a CRM, a calendar, an inventory system or a payment provider.",
                        "You have search traffic you would notice losing.",
                        "You would not know within a day if it went down or stopped delivering mail.",
                        "The hours you spend on it are hours the business is not getting.",
                    ]} />

                    <BlogHeader id="what-it-costs">What it costs either way</BlogHeader>
                    <BlogText>
                        PandaCodeGen builds a 5 to 7 page custom Next.js site for <strong>$1,500</strong>, fixed before
                        work starts, in 2 to 4 weeks, with no minimum project size, and you own the code, design files
                        and accounts at handover. The full scope of what that price includes, and what it does not, is
                        set out in{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className={linkClass}>how much a website costs</Link>{" "}
                        and in{" "}
                        <Link href="/blog/custom-website-5000-whats-included" className={linkClass}>what a $5,000 build includes</Link>{" "}
                        rather than repeated here.
                    </BlogText>
                    <InsightBox label="The one question worth taking from this page">
                        <strong>Ask for the minimum project size before you ask for a price.</strong> Minimums vary far
                        more than the marketing suggests. Specialist Next.js shops do publish high ones &mdash;
                        Pagepro&apos;s Clutch profile lists a $25,000 minimum, checked 10 September 2026 &mdash; while
                        other independent suppliers start below us: Brian Yang publishes a three-page Starter at $700,
                        checked 13 September 2026, and Sanjeewa a $1,250 entry tier, checked 10 September 2026. That one question tells
                        you whether you are a client or a rounding error.
                    </InsightBox>
                    <BlogText>
                        Hosting is paid straight to the provider, from $20 a month as of August 2026, with no markup from
                        us. There is no retainer. The pages named in your quote score 90 or better on Lighthouse, mobile
                        and desktop, across three recorded runs before handover &mdash; a lab acceptance target, not a
                        promise about rankings or field data. Ownership is covered in full in{" "}
                        <Link href="/blog/do-you-own-your-website" className={linkClass}>do you own your website</Link>.
                    </BlogText>

                    <BlogHeader id="sales-channel">The machine-readable part is a sales channel</BlogHeader>
                    <BlogText>
                        Being readable by machines now produces orders, and we can put a number on it. Our founder-owned
                        store, Panda Patches, took{" "}
                        <strong>$11,186.59 across 36 orders from AI assistants in August 2026</strong>, 14.7% of that
                        month&apos;s revenue, with nothing spent on any AI platform. It is a founder-affiliated store and
                        not independent client proof, and we publish it because we would rather show a number we measured
                        than describe a trend. The six-month breakdown is in{" "}
                        <Link href="/blog/ai-referral-revenue-2026" className={linkClass}>our AI referral revenue record</Link>.
                    </BlogText>
                    <BlogText>
                        Two of those customers told us how they found it, and both had asked an assistant for a
                        constraint rather than a category. One asked for patch companies with no or low minimums. One
                        asked for PVC patches with no mould fee. Neither searched for &ldquo;custom patches&rdquo;. They
                        asked for the specific thing that was blocking them, and the store that answered it plainly in
                        its own page text was the one they were shown.
                    </BlogText>
                    <BlogText>
                        That is the part an AI builder cannot do for you, and it has nothing to do with code quality. It
                        requires knowing what your buyers are actually blocked by, and writing the answer on the page in
                        a sentence a machine can lift.
                    </BlogText>

                    <BlogHeader id="summary">The honest summary</BlogHeader>
                    <BlogText>
                        Building a website has never been cheaper and for a fun project it is close to free, and you
                        should do exactly that. For a business, the build was never the expensive part. Integrations,
                        launch, maintenance, machine readability and your own time are the expensive parts, and every one
                        of them arrives after the site is live, which is exactly when a DIY build stops having anyone to
                        call.
                    </BlogText>
                    <BlogText>
                        If you are not sure which side of the line you are on, the test is simple. Ask what happens if
                        the site quietly stops working on a Friday afternoon. If the answer is &ldquo;nothing
                        much&rdquo;, build it yourself. If the answer involves losing money, you are buying an operation,
                        not a website.
                    </BlogText>

                    <div className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <p className="text-charcoal font-bold mb-2">Not sure which side of that line you are on?</p>
                        <p className="text-sm text-stone-600 mb-4">
                            Send us the URL and what you are worried about. We will tell you if a repair is the cheaper
                            answer, and we say so when it is.
                        </p>
                        <Link href="/services/custom-engineering" className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
                            See what custom engineering includes <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />

                    <div className="mt-12 pt-8 border-t border-stone-200">
                        <TopicUpLink postId="is-it-cheaper-to-build-your-own-website" />
                    </div>
                    <RelatedPosts currentPostId="is-it-cheaper-to-build-your-own-website" />
                </article>
            </section>

            <Footer />
        </main>
    );
}
