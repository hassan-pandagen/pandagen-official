import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, Scale, Users } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
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
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-02",
        modifiedTime: "2026-07-24",
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
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about",
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": canonicalUrl },
            articleSection: "Agency selection",
            inLanguage: "en-US",
            citation: sources.map((source) => ({ "@type": "WebPage", ...source })),
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
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Pagepro alternatives", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Agency selection</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Pagepro Alternatives <span className="italic text-cognac">Compare the Actual Scope</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Pagepro, Naturaily, Blazity and PandaCodeGen all say they build Next.js sites, and on paper
                            the lists of services look similar. They take on different kinds of work. You cannot tell
                            what any of them will charge, how good the work is, what support you get, or what the
                            contract says from a category label. Ask all of them to quote the same requirements in
                            writing, with a date on it, and compare those.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026. Disclosure: PandaCodeGen wrote this page and is one of the providers
                            discussed, so our commercial interest is explicit.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 2, 2026" readTime="11 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">A defensible shortlist</h2>
                        <BlogList
                            items={[
                                "Pagepro currently emphasizes Next.js, Expo and Sanity work.",
                                "Naturaily currently lists custom web, headless, Shopify, ecommerce, design and Jamstack services.",
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

                    <BlogHeader>What the official sites currently say</BlogHeader>
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
                                    <td className="p-4">Next.js, Expo, Sanity and related platform work</td>
                                    <td className="p-4">Exact team, scope, model, price, timeline, evidence and terms</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Naturaily</td>
                                    <td className="p-4">Custom web, headless, Shopify, ecommerce, design and Jamstack</td>
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
                        This table was checked against official provider pages on July 24, 2026. It intentionally does
                        not repeat third-party profile prices, review counts, ratings, minimums or partner badges as
                        current facts. Those values can change and do not make unlike scopes comparable. Our own side of
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
                            "A 90-plus Lighthouse target only when representative pages, mobile and desktop profiles, three passing runs and remedy are written into the accepted terms.",
                            "The client controls its domain, hosting, repository and business accounts under the agreed account model.",
                            "Project deliverables, pre-existing tools and third-party licenses follow the signed ownership and licensing terms.",
                        ]}
                    />

                    <BlogHeader>Questions to ask every finalist</BlogHeader>
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
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
