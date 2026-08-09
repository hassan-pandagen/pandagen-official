import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, Scale, Users } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "pagepro-alternatives";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Pagepro Alternatives in 2026: Compare Scope and Fit";
const description =
    "A commercially disclosed way to compare Pagepro, Naturaily, Blazity, PandaCodeGen and other Next.js partners using current services, written proposals and equivalent requirements.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Pagepro alternatives",
        "Pagepro competitors",
        "Next.js agencies",
        "Next.js migration agency",
        "Pagepro vs PandaCodeGen",
        "Naturaily alternatives",
        "Blazity alternatives",
        "how to compare Next.js agencies",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-02",
        modifiedTime: "2026-08-03",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/pagepro-alternatives")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Pagepro official website", url: "https://pagepro.co/" },
    { name: "Pagepro current articles and contact path", url: "https://pagepro.co/blog/" },
    { name: "Naturaily current services", url: "https://naturaily.com/services" },
    { name: "Blazity current services", url: "https://www.blazity.com/services" },
    { name: "PandaCodeGen current pricing", url: "https://www.pandacodegen.com/pricing" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-05-02",
            dateModified: "2026-08-03",
            image: ogImageUrlForPath(`/blog/${postId}`),
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
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Agency selection",
            inLanguage: "en-US",
            wordCount: 1933,
            timeRequired: "PT10M",
            about: [
                { "@type": "Thing", name: "Next.js", sameAs: ["https://nextjs.org"] },
                { "@type": "Thing", name: "Web development", sameAs: ["https://en.wikipedia.org/wiki/Web_development"] },
                { "@type": "Thing", name: "Request for proposal", sameAs: ["https://en.wikipedia.org/wiki/Request_for_proposal"] },
                { "@type": "Thing", name: "Vendor selection" },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Pagepro alternatives", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-05-02",
            dateModified: "2026-08-03",
            primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrlForPath(`/blog/${postId}`) },
            breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
            inLanguage: "en-US",
        },
        {
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: postFAQs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        },
    ],
};

const sourceLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function PageproAlternativesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Pagepro alternatives")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Agency selection</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Pagepro Alternatives: <span className="italic text-cognac">Compare the Actual Scope</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Pagepro, Naturaily, Blazity and PandaCodeGen all say they build Next.js sites, and on paper
                            the lists of services look similar. They take on different kinds of work. You cannot tell
                            what any of them will charge, how good the work is, what support you get, or what the
                            contract says from a category label. Ask all of them to quote the same requirements in
                            writing, with a date on it, and compare those. This page is about Pagepro the
                            Next.js, Sanity and Expo development agency at pagepro.co, not the separate
                            landing-page software product also sold under the PagePro name.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed August 3, 2026. Disclosure: PandaCodeGen wrote this page and is one of the providers
                            discussed, so our commercial interest is explicit.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 2, 2026" readTime="5 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">A defensible shortlist</h2>
                        <BlogList
                            items={[
                                "Pagepro presents itself as a Next.js, Sanity and Expo development agency focused on replatforming, CMS migration and SEO preservation. Confirm its current engagement types and how each is scoped directly with Pagepro.",
                                "Naturaily currently lists custom web, headless, Shopify, ecommerce, design and support services.",
                                "Blazity currently lists AI engineering, performance, modernization, applications and technical consulting.",
                                "PandaCodeGen's primary offer is SEO-conscious migration planning and delivery for revenue-generating sites.",
                                "All that tells you is what each firm says it does. It does not tell you they cost the same, work to the same standard, or get the same results.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: ClipboardCheck, title: "Same brief for everyone", body: "Same pages, same content, same design work, same integrations, same testing, same launch, same support." },
                            { icon: Users, title: "Ask who does the work", body: "Name the people, say how available they are, who owns what, whether any of it is subcontracted, and how they will talk to you." },
                            { icon: Scale, title: "Read the terms", body: "How you sign it off, when you pay, who owns the code, what licences you get, what happens if it goes wrong, and how you leave." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="why-alternatives">Why buyers look for an alternative at all</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Almost always because the engagement model does not fit the job, and almost never
                            because anything is wrong with the provider. Agencies build themselves around a shape
                            of work: a long-running embedded team, a bounded project, a discovery phase, one deep
                            specialism. When your scope is a different shape, the mismatch arrives as a quote that
                            feels wrong rather than as anything anybody did badly.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "You need a bounded project with an end date and the provider is built around an ongoing team, or you need the ongoing team and they are set up for bounded projects.",
                            "You want a fixed price before committing, and the work genuinely cannot be fixed-priced until a discovery phase has happened. Both positions are defensible and they do not meet.",
                            "You need one specialism deeply, and the shortlist is made up of firms that cover everything competently.",
                            "The smallest engagement a firm can run well is larger than your job. That is a focus and capacity decision, and it says nothing about quality in either direction.",
                            "Time zones, contracting jurisdiction, or who you would actually be speaking to on a Tuesday afternoon do not fit how your team works.",
                        ]}
                    />
                    <BlogText>
                        None of those is a criticism, and reading them as criticism is how buyers end up comparing
                        the wrong things. Ask each provider directly which shape of work they are set up for and
                        take the answer at face value. A firm that tells you honestly your project is not their
                        shape has done you a larger favour than one that stretches to fit it, because the stretch
                        is what you pay for later.
                    </BlogText>

                    <BlogHeader>What the official sites currently say</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Four rows, each taken from the provider&apos;s own site rather than a directory, and the column that matters is the third: what the page cannot tell you. A service list establishes what a firm says it does. It does not establish price, availability, who would be assigned, or what the contract says, and those are the four things that decide the outcome.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4">Provider</th>
                                    <th className="p-4">Current self-described service focus</th>
                                    <th className="p-4">What a buyer still must verify</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr>
                                    <td className="p-4 font-bold">Pagepro</td>
                                    <td className="p-4">Next.js and Sanity replatforming, CMS migration and SEO preservation, plus Expo</td>
                                    <td className="p-4">Exact team, scope, model, price, timeline, evidence and terms</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Naturaily</td>
                                    <td className="p-4">Custom web, headless, Shopify, ecommerce, design and support</td>
                                    <td className="p-4">Which disciplines are included, exact stack, price and support</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Blazity</td>
                                    <td className="p-4">AI, performance, modernization, applications and consulting</td>
                                    <td className="p-4">Engagement entry point, delivery team, acceptance and handover</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">PandaCodeGen</td>
                                    <td className="p-4">SEO-conscious migrations and custom web delivery</td>
                                    <td className="p-4">Accepted scope, capacity, relevant evidence, price and legal terms</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        All four rows were re-read on their owners&apos; own pages on August 1, 2026, and two of our
                        descriptions needed correcting. Naturaily no longer uses the Jamstack wording we had carried; its own service page now says the architecture &ldquo;used to be called Jamstack&rdquo; and that &ldquo;the name faded; the approach won.&rdquo;
                        Pagepro presents three named engagement types it describes as fixed-scope and predictably
                        priced, and describes itself as dedicated to Next.js, Sanity and CMS migration with SEO and
                        <Link href="/blog/core-web-vitals-explained" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Core Web Vitals</Link> at the core, which is consistent with how it described itself earlier in the
                        year. Both corrections are to our summaries, not to anything either firm did wrong.
                    </BlogText>
                    <BlogText>
                        We are showing this working because a comparison page is only as good as the date on each
                        individual row, and one review date stamped across a whole table implies more than anyone
                        actually checked. The table still does not repeat third-party profile prices, review counts,
                        ratings, minimums or partner badges as current facts. Those values change, and they do not make
                        unlike scopes comparable. Our own side of
                        the table is documented in our <Link href="/work" className={sourceLinkClass}>project work</Link> and on
                        our <Link href="/about" className={sourceLinkClass}>team page</Link>, so you can hold it to the same
                        standard.
                    </BlogText>

                    <InsightBox variant="info" label="Keep a dated comparison packet">
                        If you need to compare minimums, retainers, review totals, support terms or delivery quality
                        across providers, take each claim from the provider&apos;s own page, record the date you took it
                        and keep the record. Provider terms change often, so an undated claim ages badly and cannot be
                        defended when someone questions the shortlist later.
                    </InsightBox>

                    <BlogHeader>Start with the engagement you actually need</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Name the engagement before you name the shortlist, because six different things get bought under the words &ldquo;Next.js agency&rdquo; and they are not substitutes. A firm can be excellent at one of these and a poor fit for another. Comparing a retainer price against a project price is the most common way a comparison goes wrong before it starts.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "A fixed-scope migration with an existing content inventory and design.",
                            "A discovery or blueprint for uncertain architecture and integration requirements.",
                            "A new product or application with evolving requirements.",
                            "Staff augmentation or a dedicated team working inside the client's process.",
                            "Performance diagnosis and implementation on the current stack.",
                            "Ongoing support, experimentation or managed operations after launch.",
                        ]}
                    />
                    <BlogText>
                        A provider can be excellent at one model and unsuitable for another. Ask each agency to state
                        whether it is quoting discovery, a fixed deliverable, time and materials, a retainer or staff
                        capacity. Do not compare the monthly price of a team with the project price of a bounded
                        migration. If you are still building the shortlist, our roundups of{" "}
                        <Link href="/blog/top-nextjs-agencies-2026" className={sourceLinkClass}>Next.js agencies</Link> and{" "}
                        <Link href="/blog/top-custom-web-development-agencies-usa-2026" className={sourceLinkClass}>custom web development agencies in the USA</Link>{" "}
                        widen the field, and our{" "}
                        <Link href="/blog/website-developer-agency" className={sourceLinkClass}>guide to choosing a web development agency</Link>{" "}
                        covers the selection process itself.
                    </BlogText>

                    <BlogHeader>Use one request for proposal</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Send every provider the same seven-part brief and their quotes become comparable, which is the only condition under which price means anything. Writing it once also forces the decisions you were going to have to make anyway: who owns the content, what counts as done, and who holds the accounts at the end.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Business objective, users, countries, accessibility and compliance requirements.",
                            "URL, template and content inventory plus design-system and copy responsibilities.",
                            "CMS, commerce, CRM, forms, search, identity, analytics, consent and other integrations.",
                            "Data migration, redirects, metadata, structured data, launch monitoring and rollback.",
                            "Representative performance acceptance, browsers, devices and test evidence.",
                            "Milestones, review windows, dependencies, change control, support and response process.",
                            "Repository, account, deliverable, reusable-tool and third-party-license ownership.",
                        ]}
                    />
                    <BlogText>
                        Writing that document is easier when you already know how the work is normally broken down. Our{" "}
                        <Link href="/blog/website-migration-cost-2026" className={sourceLinkClass}>website migration cost guide</Link>{" "}
                        and <Link href="/blog/website-rebuild-cost-2026" className={sourceLinkClass}>rebuild scoping guide</Link>{" "}
                        list the line items most requests for proposal forget, and{" "}
                        <Link href="/blog/do-you-own-your-website" className={sourceLinkClass}>who actually owns your website</Link>{" "}
                        explains why the ownership clause matters more than it looks.
                    </BlogText>

                    <BlogHeader>How to evaluate evidence</BlogHeader>
                    <BlogText>
                        Ask for projects comparable in platform, route types, integrations, risk and team structure.
                        Record whether a metric comes from field data, a lab test, analytics, a vendor dashboard or a
                        testimonial. Require dates, tested URLs, conditions and definitions. A case study can show that
                        a provider completed one engagement; it does not guarantee your outcome.
                    </BlogText>
                    <BlogText>
                        Third-party reviews can provide useful questions about communication and delivery, but verify
                        the profile owner, review date, project size, service and sample limitations. Do not turn a
                        rating into a technical-quality score or assume the current proposal matches an old review. Our
                        own comparable work is published as case studies, including{" "}
                        <Link href="/work/panda-patches" className={sourceLinkClass}>Panda Patches</Link> and{" "}
                        <Link href="/work/mycustompatches" className={sourceLinkClass}>MyCustomPatches</Link>, so you can apply the
                        same tests to us.
                    </BlogText>

                    <BlogHeader>PandaCodeGen pricing and terms</BlogHeader>
                    <BlogText>
                        PandaCodeGen publishes planning tiers at $1,500, $3,500 and $5,000 to $10,000. The recommended
                        path is a free fit audit, then an accepted paid blueprint or migration sprint where appropriate.
                        Extra pages or features are estimated through change control. Published tiers are not evidence
                        that another provider is overpriced or that the scopes are equivalent. The current figures and
                        what each tier includes are on the{" "}
                        <Link href="/pricing" className={sourceLinkClass}>pricing page</Link>, and the delivery routes behind them
                        are documented per platform:{" "}
                        <Link href="/services/wordpress-migration" className={sourceLinkClass}>WordPress migration</Link>,{" "}
                        <Link href="/services/webflow" className={sourceLinkClass}>Webflow</Link>,{" "}
                        <Link href="/services/gohighlevel" className={sourceLinkClass}>GoHighLevel</Link> and{" "}
                        <Link href="/services/custom-engineering" className={sourceLinkClass}>custom engineering</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "30% onboarding payment and 70% at delivery under the accepted agreement.",
                            "15 business days of support for Starter and 30 for Growth or Scale, with scope defined in the terms.",
                            <>{"A 90-plus "}<Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link>{" target only when representative pages, mobile and desktop profiles, three passing runs and remedy are written into the accepted terms."}</>,
                            "The client controls its domain, hosting, repository and business accounts under the agreed account model.",
                            "Project deliverables, pre-existing tools and third-party licenses follow the signed ownership and licensing terms.",
                        ]}
                    />

                    <BlogHeader>Questions to ask every finalist</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Seven questions, and none of them is about price. Ask them of every finalist including us, in writing, and compare the answers side by side. The gap between two quotes usually turns out to live in questions three and six: what counts as acceptance, and what support actually covers once the invoice is paid.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Who will do the work, and what happens if that person becomes unavailable?",
                            "Which deliverables, exclusions, assumptions and client dependencies are in the price?",
                            "What evidence proves acceptance, and what cure or remedy applies if a term is missed?",
                            "What is the change process and rate basis for work outside scope?",
                            "Who controls accounts, source, data, documentation and deployment at each milestone?",
                            "What support is included, when does it start and what counts as a defect?",
                            "Which vendor charges, licenses and operational responsibilities continue after launch?",
                        ]}
                    />
                    <BlogText>
                        The answers to those questions are usually where a low headline number stops being a bargain.{" "}
                        <Link href="/blog/cheap-web-developer" className={sourceLinkClass}>What a cheap web developer actually involves</Link>{" "}
                        goes through the gaps that tend to sit behind the cheapest proposal in a shortlist.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            Share the current site and accepted requirements. We will produce a comparable scope with
                            routes, integrations, acceptance, launch, ownership and support so you can evaluate it
                            against any other written proposal.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-bold text-white transition hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-5 w-5" />
                        </CalModalButton>
                    </section>

                    <BlogHeader>Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
