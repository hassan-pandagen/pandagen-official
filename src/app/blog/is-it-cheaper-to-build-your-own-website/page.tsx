import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Wallet } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogHeader, BlogText, BlogList, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import { COMMERCIAL } from "@/data/company-facts";
import type { Metadata } from "next";

export const dynamic = "force-static";

const postId = "is-it-cheaper-to-build-your-own-website";
const postFAQs = blogPosts.find(p => p.id === postId)?.faqs ?? [];
const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const TITLE = "Is It Cheaper to Build Your Own Website? DIY vs Hiring";
const DESC = "Compare DIY website costs with hiring a developer: subscriptions, owner time, a one- and three-year example, and when paying for help makes sense.";
const URL_PATH = `/blog/${postId}`;
const CANONICAL = `https://www.pandacodegen.com${URL_PATH}`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESC,
    alternates: { canonical: URL_PATH },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title: TITLE, description: DESC, type: "article",
        publishedTime: "2026-09-13T00:00:00-05:00",
        modifiedTime: "2026-09-17T00:00:00+05:00",
        authors: ["Hassan Jamal"], url: CANONICAL, images: [ogImageForPath(URL_PATH)],
    },
    twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article", "@id": `${CANONICAL}#article`,
            "headline": TITLE, "description": DESC, "image": ogImageUrlForPath(URL_PATH),
            "datePublished": "2026-09-13T00:00:00-05:00", "dateModified": "2026-09-17T00:00:00+05:00",
            "author": {
                "@type": "Person", "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal", "url": "https://www.pandacodegen.com/about/hassan",
            },
            "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": `${CANONICAL}#webpage` },
            "articleSection": "Pricing", "inLanguage": "en-US", "timeRequired": "PT10M",
        },
        {
            "@type": "FAQPage", "@id": `${CANONICAL}#faq`,
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question", "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            })),
        },
        {
            "@type": "WebPage", "@id": `${CANONICAL}#webpage`, "url": CANONICAL,
            "name": TITLE, "description": DESC, "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-09-13T00:00:00-05:00", "dateModified": "2026-09-17T00:00:00+05:00", "inLanguage": "en-US",
        },
    ],
};

// Shared labels keep the server-rendered contents and section headings aligned.
const sections = {
    options: "DIY website builder vs hiring a developer: what are you buying?",
    prices: "How much does it cost to build a website yourself?",
    example: "A one-year and three-year website cost comparison",
    ongoing: "What does a website cost to run after launch?",
    diy: "When building your own website makes sense",
    hire: "When is it worth paying someone to build your website?",
    ai: "Do AI website builders change the cost?",
    quote: "What should a website quote include?",
} as const;
const contents = [
    ["options", sections.options], ["what-it-costs", sections.prices], ["cost-example", sections.example],
    ["four-things", sections.ongoing], ["build-it-yourself", sections.diy],
    ["stops-being-cheaper", sections.hire], ["builders", sections.ai], ["compare-quotes", sections.quote],
    ["faq-heading", "Frequently asked questions"],
];
const linkClass = "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";
const cellClass = "p-4 text-left align-top border-b border-stone-200";

export default function IsItCheaperPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Header />
            <section className="relative pt-24 md:pt-40 pb-10 px-5 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={postCrumbs(postId, "Is it cheaper to build your own website")} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8">
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Blog
                    </Link>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-cognac border border-cognac/20 rounded-full text-xs font-semibold mb-5">
                        <Wallet className="w-3 h-3" aria-hidden="true" /> Pricing
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-5">
                        Is It Cheaper to Build Your Own Website?{" "}
                        <span className="font-serif italic text-cognac">DIY vs Hiring</span>
                    </h1>
                    <p className="text-lg text-stone-600 leading-relaxed mb-6">
                        Yes, building it yourself usually costs less in upfront cash. It can also be the right choice
                        for a real business. The decision changes with the features you need, the time you can give it,
                        and who will look after it once it is live.
                    </p>
                    <BlogAuthor date="Sep 13, 2026" readTime="10 min read"
                        bio="Hassan builds websites, online stores and custom software at PandaCodeGen. We sell development services; this comparison includes situations where DIY is the better fit."
                        linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />
                    <p className="mt-3 text-sm text-stone-500">Updated <time dateTime="2026-09-17">September 17, 2026</time> · Prices and sources checked on that date.</p>
                </div>
            </section>
            <section className="px-4 md:px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-5 py-8 sm:px-8 md:px-12">
                    <aside aria-label="Short answer" className="mb-8 p-5 bg-stone-50 border border-stone-200 rounded-2xl">
                        <p className="font-bold text-charcoal mb-3">The short answer</p>
                        <ul className="list-disc pl-5 space-y-3 text-stone-700 leading-relaxed">
                            <li><strong>Choose DIY</strong> when an existing template and built-in features fit, and you have time to write, build and check the site.</li>
                            <li><strong>Hire focused help</strong> when the platform fits but you need better design, copy, setup or an integration. You may not need a custom rebuild.</li>
                            <li><strong>Consider custom development</strong> when a specific requirement cannot be met sensibly with the existing tools. Compare the build and ongoing costs against that requirement.</li>
                        </ul>
                    </aside>
                    <nav aria-label="Article contents" className="mb-10 rounded-xl border border-stone-200 p-5">
                        <p className="font-semibold text-charcoal mb-3">On this page</p>
                        <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
                            {contents.map(([id, label]) => <li key={id}><a href={`#${id}`} className={linkClass}>{label}</a></li>)}
                        </ol>
                    </nav>

                    <BlogHeader id="options">{sections.options}</BlogHeader>
                    <BlogText>A website builder is a tool. A designer or developer is someone doing work for you. You can hire someone to build on Wix, Squarespace, Shopify or WordPress, so these are not two mutually exclusive choices.</BlogText>
                    <div className="overflow-x-auto rounded-xl border border-stone-200 mb-8" tabIndex={0} role="region" aria-label="Website building options comparison">
                        <table className="w-full text-sm leading-relaxed">
                            <caption className="sr-only">Compare DIY, professional setup and custom development</caption>
                            <thead className="bg-stone-50"><tr><th scope="col" className={cellClass}>Approach</th><th scope="col" className={cellClass}>You pay for</th><th scope="col" className={cellClass}>Work still left with you</th></tr></thead>
                            <tbody>
                                <tr><th scope="row" className={cellClass}>DIY builder</th><td className={cellClass}>The plan, domain and any extras you select.</td><td className={cellClass}>Content, setup, checking the result and ongoing edits.</td></tr>
                                <tr><th scope="row" className={cellClass}>Professional setup on a builder</th><td className={cellClass}>A defined service plus the platform bills.</td><td className={cellClass}>Your brief, approvals and anything excluded from the quote.</td></tr>
                                <tr><th scope="row" className={cellClass}>Custom website</th><td className={cellClass}>Agreed design and engineering, hosting and connected services.</td><td className={cellClass}>Your brief, approvals and an operating plan after handover.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>Hiring someone does not automatically include copywriting, unlimited revisions, SEO work or lifetime maintenance. A DIY platform may already include hosting, security updates and support. Write down the same requirements before comparing the prices.</BlogText>

                    <BlogHeader id="what-it-costs">{sections.prices}</BlogHeader>
                    <BlogText>Start with the plan that supports your actual site. A free plan can be enough to try an idea. A business domain, payments, booking features or additional storage may require a paid plan or an extra service.</BlogText>
                    <div className="rounded-xl border border-stone-200 p-5 mb-8 text-stone-700 leading-relaxed space-y-4">
                        <p><strong>Two published subscription examples, checked September 17, 2026:</strong></p>
                        <p><a href="https://wordpress.com/pricing/?currency=USD" className={linkClass}>WordPress.com Personal</a> lists a US-dollar reference price of <strong>$4/month billed annually</strong>: $48 for a year of the plan. Hosting is included; an eligible domain is included for the first year. Domain renewal and services outside the plan need their own budget. This is hosted WordPress.com, not a quote for a self-hosted WordPress site.</p>
                        <p><a href="https://www.wix.com/blog/how-much-is-a-wix-website" className={linkClass}>Wix&apos;s published US pricing guide</a> lists <strong>Light at $17/month on annual billing</strong>: $204 for a year. It includes hosting and an eligible first-year domain. Light does not include accepting payments; compare a suitable higher plan if you need that.</p>
                        <p className="text-sm">These are plan prices, not completed-website quotes or equivalent feature bundles. Country, currency, tax, promotions and billing term can change the checkout total. Check both the first payment and renewal price before buying.</p>
                    </div>
                    <BlogText>For an online store, use the plan that includes the checkout, shipping and product features you need. <a href="https://www.shopify.com/pricing" className={linkClass}>Shopify&apos;s pricing page</a> separates subscriptions from payment-related fees and add-ons. Payment processing can also apply to a custom store; it does not disappear when you hire a developer.</BlogText>
                    <BlogText>For self-hosted WordPress, budget for hosting and a domain, then the themes, plugins and support you actually choose. Avoid adding a separate hosting bill to a hosted-builder comparison when hosting is already included.</BlogText>

                    <BlogHeader id="cost-example">{sections.example}</BlogHeader>
                    <BlogText>Here is a worked example for a small brochure site with an enquiry form. Both options use the same platform and features. The hired option is professional setup on that platform, not a custom build. <strong>Every input below is an illustration, not a market average or a PandaCodeGen quote.</strong></BlogText>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-stone-700 leading-relaxed">
                        <li>Platform: $20/month; optional tools: $10/month; domain: $20/year, in both options.</li>
                        <li>DIY: 40 setup hours. Hired: a $1,500 setup fee and 8 owner hours for the brief, content and approvals.</li>
                        <li>Both: 1 owner hour/month after launch, valued at $25/hour. No paid maintenance or later redesign assumed.</li>
                    </ul>
                    <div className="overflow-x-auto rounded-xl border border-stone-200 mb-6" tabIndex={0} role="region" aria-label="Illustrative website costs at one and three years">
                        <table className="w-full text-sm leading-relaxed tabular-nums">
                            <caption className="p-4 text-left font-semibold bg-stone-50">Illustrative USD totals, with unchanged prices</caption>
                            <thead><tr><th scope="col" className={cellClass}>Cost</th><th scope="col" className={cellClass}>DIY</th><th scope="col" className={cellClass}>Hired setup</th></tr></thead>
                            <tbody>
                                <tr><th scope="row" className={cellClass}>Year 1 cash spending</th><td className={cellClass}>$380</td><td className={cellClass}>$1,880</td></tr>
                                <tr><th scope="row" className={cellClass}>Year 1 owner time</th><td className={cellClass}>52 hours / $1,300</td><td className={cellClass}>20 hours / $500</td></tr>
                                <tr className="bg-stone-50 font-semibold"><th scope="row" className={cellClass}>Year 1 cash + time value</th><td className={cellClass}>$1,680</td><td className={cellClass}>$2,380</td></tr>
                                <tr><th scope="row" className={cellClass}>3-year cash spending</th><td className={cellClass}>$1,140</td><td className={cellClass}>$2,640</td></tr>
                                <tr><th scope="row" className={cellClass}>3-year owner time</th><td className={cellClass}>76 hours / $1,900</td><td className={cellClass}>44 hours / $1,100</td></tr>
                                <tr className="bg-stone-50 font-semibold"><th scope="row" className={cellClass}>3-year cash + time value</th><td className={cellClass}>$3,040</td><td className={cellClass}>$3,740</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText><strong>DIY is cheaper in this example, including owner time.</strong> Hiring saves 32 setup hours for an extra $1,500. That is $46.88 per hour saved, rounded. At a higher value for your time, or with more DIY hours, hiring could become the cheaper overall choice. It still needs more cash upfront.</BlogText>
                    <p className="text-sm text-stone-600 mb-8 leading-relaxed">Cash calculation: setup fee + months × (platform + tools) + years × domain. Time value: (setup hours + monthly hours × months) × hourly value. Taxes, payment fees, content purchases, paid maintenance and future price changes are excluded; add them where relevant. Opportunity cost is not an invoice or guaranteed lost earnings.</p>
                    <div id="hidden-cost" className="rounded-xl bg-stone-50 border border-stone-200 p-5 mb-8">
                        <h3 className="text-xl font-bold text-charcoal mb-3">Use your own time honestly</h3>
                        <p className="text-stone-700 leading-relaxed">If you enjoy building and have spare time, your time cost may be low. If it replaces paid work or delays a needed launch, it matters more. Count the briefing and review time in the hired option too. Do not invent lost sales to make one option win.</p>
                    </div>

                    <BlogHeader id="four-things">{sections.ongoing}</BlogHeader>
                    <BlogText>The recurring bill depends on your setup, not just who built it. Some costs start during the build. For each option, check these four areas:</BlogText>
                    <BlogList items={[
                        <><strong>Platform, hosting and renewals.</strong> Record the billing term, domain renewal, mailbox cost and usage limits. A first-year discount is not the next year&apos;s bill.</>,
                        <><strong>Connected services.</strong> Include bookings, email, CRM, paid plugins and payment fees where needed. Some features are bundled; count each cost once.</>,
                        <><strong>Content and changes.</strong> Decide who edits pages, adds products and checks information. Include training or paid assistance if the editor is unfamiliar.</>,
                        <><strong>Maintenance and support.</strong> Ask who handles platform updates, custom code, failed integrations and recovery. Provider support and an ongoing developer engagement cover different work.</>,
                    ]} />
                    <BlogText>A build fee does not remove these responsibilities. Neither does a monthly retainer automatically cover every request. Ask what is included, who receives failure alerts and how work outside the agreement is priced.</BlogText>

                    <BlogHeader id="build-it-yourself">{sections.diy}</BlogHeader>
                    <BlogText>A local service business can take enquiries through a builder. A small shop can sell through a hosted commerce platform. Having customers is not, by itself, a reason to commission custom software.</BlogText>
                    <BlogList items={[
                        "A template and supported features cover the pages, forms or products you need.",
                        "You can prepare the content, learn the editor and check the main customer journeys.",
                        "You have a realistic launch date and someone responsible for updates and support.",
                    ]} />
                    <BlogText>You can also split the work: write and enter the content yourself, then pay for a defined design or technical task. Before replacing an existing site, price a targeted repair. A new platform is not necessary for every problem.</BlogText>

                    <BlogHeader id="stops-being-cheaper">{sections.hire}</BlogHeader>
                    <BlogText>Paying for help makes sense when the work needs skills you do not have, or when doing it yourself takes more time than you can spare. The useful question is which work to buy.</BlogText>
                    <BlogList items={[
                        <><strong>Design or content help:</strong> the platform works, but visitors struggle to understand the offer or complete a task.</>,
                        <><strong>Technical help:</strong> a booking, payment or CRM connection needs configuration, testing or repair.</>,
                        <><strong>Custom development:</strong> a documented workflow, integration or editing requirement cannot be met reasonably with the available platform features.</>,
                    ]} />
                    <BlogText>If you already have a website, compare retaining it, improving it and rebuilding it as separate scopes. Our <Link href="/blog/website-redesign-cost" className={linkClass}>website redesign cost guide</Link> covers the inventory and launch work a replacement can add. Preserving URLs and existing content needs planning, whichever supplier you choose.</BlogText>

                    <BlogHeader id="builders">{sections.ai}</BlogHeader>
                    <BlogText>AI can reduce the work involved in a first draft, layout or code change. That can make DIY more affordable. Its value depends on whether the result fits your requirements and how much editing, testing and paid usage you need.</BlogText>
                    <BlogText>The tools also do more than generate a page. For example, <a href="https://docs.lovable.dev/features/project-monitoring" className={linkClass}>Lovable documents scheduled project monitoring</a>, with plan, configuration and usage conditions. It would be wrong to say no AI builder checks a site after launch.</BlogText>
                    <BlogText>For the cost comparison, check the generation allowance, hosting or cloud usage, connected services and ongoing support. If you export the code, confirm what else is required to run it elsewhere. Exporting source code does not transfer a database, paid account or deployment automatically.</BlogText>
                    <BlogText>Before launch, complete a test enquiry and confirm it reaches the intended person. Test checkout using the payment provider&apos;s test environment. Check the mobile layout, editable content and intended public pages. Budget for fixing anything those checks uncover, whether you or a professional built it.</BlogText>

                    <BlogHeader id="compare-quotes">{sections.quote}</BlogHeader>
                    <BlogText>Give each supplier the same list of pages, features and responsibilities. Then compare:</BlogText>
                    <BlogList items={[
                        "Deliverables: pages, templates, forms, integrations, content entry and revision rounds.",
                        "Launch and handover: domain work, tests, editor training, account access and documentation.",
                        "After launch: recurring bills, defect support, maintenance scope, ownership and the price of further changes.",
                    ]} />
                    <BlogText>Ownership depends on the contract and the tools used. Ask who controls the domain, accounts, content and any custom source code, and which third-party licences remain necessary. Our <Link href="/blog/do-you-own-your-website" className={linkClass}>website ownership guide</Link> explains the questions to settle before paying.</BlogText>
                    <div className="rounded-xl border border-stone-200 p-5 mb-8 space-y-4 text-stone-700 leading-relaxed">
                        <h3 className="text-xl font-bold text-charcoal">Where PandaCodeGen fits</h3>
                        <p><strong>Our Starter offer:</strong> {COMMERCIAL.find(fact => fact.label === "Starter")?.value}</p>
                        <p>We build new websites and small online stores, and redesign or migrate existing ones. Scope and price are agreed before work starts. The starting price is not a quote for every site or an ongoing maintenance fee.</p>
                        <p>{COMMERCIAL.find(fact => fact.label === "Hosting")?.value}</p>
                        <p>Ongoing support is optional and quoted separately. For the full scope and terms, see <Link href="/pricing" className={linkClass}>our website pricing</Link> and <Link href="/work" className={linkClass}>completed projects</Link>.</p>
                    </div>

                    <span id="faq" />
                    <FAQAccordion faqs={postFAQs} />
                    <section id="summary" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-6">
                        <h2 className="text-2xl text-charcoal font-bold mb-3">Deciding whether to DIY or get help?</h2>
                        <p className="text-stone-700 leading-relaxed mb-5">Tell us what the site needs to do, your budget and what you want to handle yourself. Share an existing URL if you have one. A founder will reply; any paid work is scoped and quoted before it starts.</p>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-cognac transition-colors">
                            Ask a founder about your site <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                        </Link>
                    </section>
                    <p className="text-sm text-stone-500 leading-relaxed">Updated September 17, 2026. This revision replaces the earlier blanket distinction between hobby and business sites with a scoped cost comparison, updates pricing language, and removes unrelated AI-readability and revenue figures. The cost example is illustrative. Sources are linked beside the relevant claims. <Link href="/editorial-policy" className={linkClass}>How we publish and correct information</Link>.</p>
                    <div className="mt-12 pt-8 border-t border-stone-200"><TopicUpLink postId={postId} /></div>
                    <RelatedPosts currentPostId={postId} />
                </article>
            </section>
            <Footer showCta={false} />
        </main>
    );
}
