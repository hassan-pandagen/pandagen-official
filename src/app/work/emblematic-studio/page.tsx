import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Boxes, ShieldCheck, Accessibility, Code2, Gauge } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import OtherReviews from "@/components/work/OtherReviews";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

const canonicalUrl = "https://www.pandacodegen.com/work/emblematic-studio";
const title = "Emblematic Studio Case Study: One Catalogue, Twenty Products, One Server Route";
const description =
    "A material-led product catalogue and quote experience for a custom patch studio. Twenty product types generated from a single typed registry, and exactly one runtime route on the entire site. Build record, no traffic claims.";

export const metadata: Metadata = {
    title: { absolute: `${title} | PandaCodeGen` },
    description,
    keywords: [
        "custom patch website design",
        "product catalog website Next.js",
        "GSAP scroll animation website",
        "editorial website design case study",
        "Next.js static site generation catalog",
        "custom quote form website",
        "manufacturer website design",
        "Next.js 16 case study",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title: "Emblematic Studio: One Catalogue, Twenty Products, One Server Route",
        description:
            "Twenty product types from a single typed registry that also drives navigation, quote validation and the sitemap. One runtime route on the whole site.",
        type: "article",
        url: canonicalUrl,
        images: [ogImageForPath("/work/emblematic-studio")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Emblematic Studio: One Catalogue, Twenty Products, One Server Route",
        description: "Twenty product types from a single typed registry. One runtime route on the whole site.",
    },
    alternates: { canonical: "/work/emblematic-studio" },
};

const pageFaqs: { question: string; answer: string }[] = [
    {
        question: "Why does this case study quote no traffic or ranking results?",
        answer: "Because the site is new to search. The production build was corrected to allow indexing and deployed on August 7, 2026; before that it carried review-build directives that told search engines to stay away. There is therefore no meaningful search history to report yet, and any figure quoted this early would describe a site Google has barely crawled. What is verifiable today is the build itself and its search-facing configuration, both of which you can inspect on the live site.",
    },
    {
        question: "What does 'one runtime route' actually mean?",
        answer: "Every page on the site is prerendered at build time. The only route that executes server code per request is the quote endpoint, because sending email requires a Node runtime. Product, material and guide pages are generated from the catalogue with dynamic parameters disabled, so an unknown slug returns the standard not-found page rather than attempting to render. The practical consequence is that almost nothing can fail at request time, and the surface area anyone has to secure or monitor is one endpoint rather than a site.",
    },
    {
        question: "Why does a twenty-product catalogue need a typed registry?",
        answer: "Because the same twenty products appear in seven places: the desktop mega-menu, the mobile navigation, the catalogue index, the individual product pages, related-product cards, the quote form's options, and the sitemap. Without a single source they drift, and the failure is silent -- a product quietly missing from the quote dropdown, or a sitemap entry for a page that no longer exists. Adding a product here means extending one typed union and one object; everything else follows from it, including the server-side validation that rejects a product value the catalogue does not contain.",
    },
    {
        question: "What happens to artwork a visitor uploads with a quote?",
        answer: "It is validated, attached to one email, and never stored. The browser checks extension and size, the server repeats both checks rather than trusting them, the filename is sanitised, and the file is read into memory only to build the outgoing message. There is no database and no object storage, which is a deliberate scope decision rather than an omission: nothing is retained, so nothing has to be secured, backed up, or deleted on request. If the studio later needs a CRM or retention policy, that is a real project rather than a setting.",
    },
    {
        question: "How much does a website like this cost to build?",
        answer: "A catalogue site of this shape — around twenty product types, static product and guide pages, a multi-step quote form with file upload, and custom motion work — sits in our Scale tier, which starts at $5,000 and runs to $10,000 depending on scope. The variables that actually move the number are the count of distinct page templates rather than pages, whether product photography exists or has to be produced, how much bespoke animation the design calls for, and whether content is supplied or written. A catalogue of the same size with stock templates and no motion work is a materially cheaper project than this one, and we would say so rather than quote the same figure.",
    },
    {
        question: "Why build an editorial homepage instead of a standard ecommerce template?",
        answer: "Because the product is judged by touch, and a grid of thumbnails removes exactly the information a buyer needs. A patch is assessed on stitch density, edge finish and how a material behaves in the light, none of which survives a 400px product card. The homepage is built as eight independent chapters that move a visitor from a flat drawing to an inspected object in the order the studio actually works. Keeping each chapter a separate component is what makes it maintainable — sections can be rewritten or reordered individually, so the page stays editable instead of becoming a bespoke artefact nobody dares touch.",
    },
    {
        question: "What is deliberately not finished?",
        answer: "Three things, and they are documented rather than hidden. The quote rate limiter is an in-memory counter, which does not survive a serverless instance restart and is not shared between instances -- adequate as a speed bump, not as durable abuse control. There is no automated test suite, so verification is typecheck, lint, build and manual browser testing. And submitted briefs are not persisted anywhere, so there is no CRM, retention policy or deletion workflow. Each of those is a defensible scope decision for this project, and each becomes a real requirement if volume or obligations change.",
    },
];

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/work/emblematic-studio"),
            datePublished: "2026-08-07T00:00:00-05:00",
            dateModified: "2026-08-07T00:00:00-05:00",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Next.js", "Static site generation", "Web accessibility", "Technical SEO", "Structured data"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Case study",
            inLanguage: "en-US",
            wordCount: 1500,
            timeRequired: "PT8M",
            about: [
                { "@type": "Thing", name: "Static site generation" },
                { "@type": "Thing", name: "Web accessibility", sameAs: ["https://en.wikipedia.org/wiki/Web_accessibility"] },
                { "@type": "Thing", name: "Next.js", sameAs: ["https://nextjs.org"] },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Work", item: "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", position: 3, name: "Emblematic Studio", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
            datePublished: "2026-08-07T00:00:00-05:00",
            dateModified: "2026-08-07T00:00:00-05:00",
            inLanguage: "en-US",
        },
        {
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: pageFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        },
    ],
};

const decisions = [
    {
        icon: Boxes,
        title: "One registry, seven consumers",
        body: "Twenty product types live in a single typed catalogue that drives the mega-menu, mobile navigation, catalogue index, product pages, related cards, quote options and the sitemap. Adding a product is one union member and one object.",
    },
    {
        icon: Gauge,
        title: "One runtime route on the whole site",
        body: "Everything is prerendered. Only the quote endpoint executes per request, because email needs a Node runtime. Dynamic params are disabled, so an unknown slug is a 404 rather than a render attempt.",
    },
    {
        icon: ShieldCheck,
        title: "Validate twice, store nothing",
        body: "The browser checks artwork type and size; the server repeats both rather than trusting them, sanitises the filename, and reads the file into memory only to attach it. Nothing is persisted, so nothing has to be secured or deleted later.",
    },
    {
        icon: Accessibility,
        title: "Motion that degrades honestly",
        body: "Smooth scrolling activates only above 900px, on fine-pointer devices, and when reduced motion is not requested. Everywhere else native scrolling is the intended experience, not a fallback that was forgotten.",
    },
];

export default function EmblematicStudioCaseStudy() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Work", href: "/work" },
                            { label: "Emblematic Studio", href: "/work/emblematic-studio" },
                        ]}
                    />

                    <header className="mb-10 mt-6 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">
                            Independent client · Build record
                        </p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Emblematic Studio: <span className="italic text-cognac">one catalogue, twenty products, one server route</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A material-led product site and quote experience for a custom patch studio. The interesting
                            decision is not the motion design, it is that twenty product types across four families are
                            generated from a single typed registry — and that the entire public site runs on exactly one
                            server route.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Published August 7, 2026. Live at{" "}
                            <a
                                href="https://www.emblematicstudio.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                            >
                                www.emblematicstudio.com
                            </a>
                            .
                        </p>
                    </header>

                    <section className="mb-14">
                        <div className="rounded-3xl border border-cognac/30 bg-gradient-to-br from-cognac/5 to-transparent p-8 md:p-10">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="text-lg tracking-widest text-cognac" aria-hidden="true">★★★★★</span>
                                <span className="text-xs font-bold uppercase tracking-[0.16em] text-cognac">
                                    Verified client review
                                </span>
                            </div>
                            <blockquote className="font-serif text-2xl leading-relaxed text-charcoal md:text-3xl">
                                &ldquo;I got quotes ranging from $10,000 to $12,000, but Panda Codegen delivered my
                                website for $5,000 and it exceeded my expectations. It looks premium, loads fast, and
                                perfectly captures Emblematic Studio&apos;s brand.&rdquo;
                            </blockquote>
                            <p className="mt-5 leading-relaxed text-stone-700">
                                &ldquo;Communication was clear and responsive, revisions were quick, and the whole
                                process felt professional. Highly recommend for anyone who wants a great website without
                                the agency price tag.&rdquo;
                            </p>
                            <p className="mt-6 text-sm text-stone-600">
                                — Waqas Ahmed, Emblematic Studio.{" "}
                                <a
                                    href="https://www.trustpilot.com/review/pandacodegen.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                                >
                                    Unprompted review on Trustpilot
                                </a>
                                , August 6, 2026.
                            </p>
                            <p className="mt-5 border-t border-stone-300 pt-5 text-sm leading-relaxed text-stone-600">
                                <strong>Read that as one client&apos;s experience, which is what it is.</strong> The
                                quotes he compares against are the ones he personally received, not a market survey, and
                                we have no visibility into what they covered. The $5,000 figure is our published Scale
                                tier rather than a discount — our tiers start at $1,500, $3,500 and $5,000 to $10,000,
                                and they are on the{" "}
                                <Link
                                    href="/blog/how-much-does-a-website-cost"
                                    className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                                >
                                    website cost guide
                                </Link>{" "}
                                with what moves a project between them.
                            </p>
                        </div>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-4 text-3xl font-bold text-charcoal">What this record does and does not prove</h2>
                        <div className="rounded-2xl border border-stone-300 bg-stone-50 p-6" data-speakable="true">
                            <p className="leading-relaxed text-stone-700">
                                <strong>No traffic, ranking or revenue outcome is claimed here.</strong> The site is new to
                                search: indexing was enabled and deployed on August 7, 2026, so there is not yet a search
                                history worth reporting. Anyone quoting results for a site this new is describing something
                                Google has barely crawled.
                            </p>
                            <p className="mt-4 leading-relaxed text-stone-700">
                                What is checkable today is the build. On the live site you can confirm that pages publish{" "}
                                <code className="rounded bg-white px-1.5 py-0.5 text-sm">index, follow</code>, that each
                                carries its own canonical, and that structured data is present and specific to the route —{" "}
                                <code className="rounded bg-white px-1.5 py-0.5 text-sm">Organization</code>,{" "}
                                <code className="rounded bg-white px-1.5 py-0.5 text-sm">WebSite</code> and{" "}
                                <code className="rounded bg-white px-1.5 py-0.5 text-sm">WebPage</code> on the homepage,{" "}
                                <code className="rounded bg-white px-1.5 py-0.5 text-sm">Product</code> and{" "}
                                <code className="rounded bg-white px-1.5 py-0.5 text-sm">BreadcrumbList</code> on a material
                                page.
                            </p>
                        </div>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">The problem was drift, not design</h2>
                        <p className="mb-4 text-lg leading-8 text-stone-700">
                            A catalogue of twenty products across patches, keychains, enamel pins and coins does not fail
                            because a page looks wrong. <strong>It fails because the same product exists in seven places
                            and they stop agreeing.</strong> A product is added to the menu but missing from the quote
                            dropdown. A page is removed but stays in the sitemap. A related-products card points somewhere
                            that no longer builds.
                        </p>
                        <p className="text-lg leading-8 text-stone-700">
                            None of those produce an error. They produce a quote request nobody can fulfil and a crawler
                            following a link to a 404. The fix is structural: make one file the only place a product is
                            defined, and let navigation, routing, validation and the sitemap derive from it.
                        </p>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">The site had to feel like the product</h2>
                        <div data-speakable="true">
                            <p className="mb-4 text-lg leading-8 text-stone-700">
                                A custom patch is a physical object you judge by touching it — the density of the stitch,
                                the way a merrowed edge finishes, whether chenille reads as depth or as fuzz.{" "}
                                <strong>A conventional ecommerce grid of product photos throws all of that away</strong>{" "}
                                and leaves a buyer comparing thumbnails, which is why most custom-patch websites feel
                                interchangeable regardless of what the factory can actually do.
                            </p>
                            <p className="text-lg leading-8 text-stone-700">
                                So the homepage is not a landing page with sections. It is an{" "}
                                <strong>editorial sequence of eight chapters</strong>, each a separate component with its
                                own scroll behaviour, that walks a visitor from a flat drawing to an inspected physical
                                object in the order the studio actually works.
                            </p>
                        </div>
                        <div className="my-8 overflow-x-auto">
                            <table className="w-full border-collapse text-left text-sm">
                                <thead>
                                    <tr className="border-b border-stone-300">
                                        <th className="py-3 pr-4 font-bold text-charcoal">Chapter</th>
                                        <th className="py-3 font-bold text-charcoal">What it has to do</th>
                                    </tr>
                                </thead>
                                <tbody className="text-stone-700">
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Hero</td><td className="py-3">Establish the object before the offer. Specimen framing, thread count, physical dimension.</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Manifesto</td><td className="py-3">State the position — a drawing becoming matter — so the rest of the page has a thesis to serve.</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">PatchFlip</td><td className="py-3">Front and back. The construction argument that a photograph of the face alone cannot make.</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">MaterialLibrary</td><td className="py-3">Eight constructions as one mark rendered eight ways, rather than eight unrelated products.</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">ProcessThread</td><td className="py-3">Rough idea to inspected object as a route, because the buyer&apos;s real question is what happens next.</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">CollectionWorktable</td><td className="py-3">Small objects that reward a closer look. Detail at a scale a catalogue grid cannot show.</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">InspectionProof</td><td className="py-3">Approval made visible rather than reduced to a number — the trust step before the quote.</td></tr>
                                    <tr><td className="py-3 pr-4 font-semibold">CTA</td><td className="py-3">Make the first stitch. One action, arrived at rather than interrupted with.</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-lg leading-8 text-stone-700">
                            Keeping each chapter as an independent component matters for a reason that is not aesthetic:{" "}
                            <strong>the homepage stays editable one section at a time.</strong> A chapter can be
                            rewritten, reordered or removed without touching the seven around it, which is what makes an
                            editorial homepage survivable rather than a one-off that nobody dares change.
                        </p>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">Motion as evidence, not decoration</h2>
                        <p className="mb-4 text-lg leading-8 text-stone-700">
                            The scroll animation work uses <strong>GSAP with ScrollTrigger</strong>, plus SplitText for
                            typographic reveals, DrawSVG and MorphSVG for the stitch-map illustrations, Flip for layout
                            transitions, and CustomEase so the easing matches the brand rather than a library default.
                            Smooth scrolling is handled by Lenis, bridged into the GSAP ticker so both share one frame
                            loop instead of competing for it.
                        </p>
                        <p className="mb-4 text-lg leading-8 text-stone-700">
                            <strong>All GSAP plugins register in exactly one module.</strong> That sounds like
                            housekeeping and is not: plugin registration scattered across components is the standard way
                            a GSAP site becomes impossible to tree-shake and starts throwing registration errors in
                            production builds. One registration point means one place to audit what ships.
                        </p>
                        <p className="text-lg leading-8 text-stone-700">
                            The part worth copying is the gating.{" "}
                            <strong>Lenis activates only above 900px, on fine-pointer devices, and when the visitor has
                            not asked for reduced motion.</strong> Below that, native scrolling is the designed
                            experience rather than a degraded one — and a visitor with a vestibular disorder gets the
                            content immediately, with the route-transition panel skipped entirely rather than merely
                            shortened.
                        </p>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-8 text-3xl font-bold text-charcoal">Four decisions that carry the site</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {decisions.map(({ icon: Icon, title: t, body }) => (
                                <div key={t} className="rounded-2xl border border-stone-300 bg-white p-6">
                                    <Icon className="mb-4 h-6 w-6 text-cognac" aria-hidden="true" />
                                    <h3 className="mb-3 text-xl font-bold text-charcoal">{t}</h3>
                                    <p className="leading-7 text-stone-700">{body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">What we chose not to build</h2>
                        <p className="mb-4 text-lg leading-8 text-stone-700">
                            A case study that lists only what exists is marketing. These are the scope decisions, stated
                            so a buyer can judge whether they would have made the same ones:
                        </p>
                        <ul className="mb-6 space-y-3">
                            {[
                                "No database and no object storage. Quote artwork is attached to one email and never persisted, so there is nothing to secure, back up or delete on request. If the studio later needs a CRM or a retention policy, that is a project rather than a setting.",
                                "The quote rate limiter is an in-memory counter. It does not survive an instance restart and is not shared across instances. It is a speed bump, not durable abuse control, and it is documented as such rather than presented as protection.",
                                "No automated test suite. Verification is typecheck, lint, production build and manual browser testing across navigation, responsive behaviour, motion preferences and quote delivery.",
                            ].map((item) => (
                                <li key={item} className="flex gap-3 leading-7 text-stone-700">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mb-4 text-lg leading-8 text-stone-700">
                            What a build at this tier does and does not include is set out in{" "}
                            <Link href="/blog/custom-website-5000-whats-included" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">what a custom website starting at $5,000 includes</Link>,
                            and the scope questions that move a project between tiers are in{" "}
                            <Link href="/blog/how-long-does-a-custom-website-take" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">how long a custom website takes</Link>.
                        </p>
                        <p className="text-lg leading-8 text-stone-700">
                            Each is defensible for a studio taking quote requests by email. Each becomes a real requirement
                            the moment volume, regulation or a sales process changes — which is the useful thing to know
                            before it happens rather than after.
                        </p>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">What was built</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr className="border-b border-stone-300">
                                        <th className="py-3 pr-4 font-bold text-charcoal">Layer</th>
                                        <th className="py-3 font-bold text-charcoal">Implementation</th>
                                    </tr>
                                </thead>
                                <tbody className="text-stone-700">
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Framework</td><td className="py-3">Next.js 16 App Router, React 19, TypeScript in strict mode</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Catalogue</td><td className="py-3">20 product types across four families, from one typed registry driving seven consumers</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Pages</td><td className="py-3">8 material pages, 12 product pages, 3 planning guides, all statically generated with dynamic params disabled</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Quote flow</td><td className="py-3">Four-step brief with session recovery, allowlist validation, honeypot, same-origin check and HTML escaping</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Motion</td><td className="py-3">GSAP with a single plugin registration point; smooth scrolling gated on viewport, pointer type and motion preference</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Accessibility</td><td className="py-3">Skip link, modal mobile navigation with focus trap and restore, ARIA state, forced-colors styles, reduced motion in both CSS and JS</td></tr>
                                    <tr><td className="py-3 pr-4 font-semibold">Search visibility</td><td className="py-3">Per-page metadata and canonicals, apex-to-www 308, generated sitemap and robots, route-specific JSON-LD</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">Frequently asked questions</h2>
                        <FAQAccordion faqs={pageFaqs} />
                    </section>

                    <section className="rounded-3xl bg-charcoal p-8 md:p-12">
                        <h2 className="mb-4 text-3xl font-bold text-white">Catalogue drifting out of sync?</h2>
                        <p className="mb-8 max-w-2xl text-lg leading-8 text-stone-300">
                            If your products live in the menu, the sitemap, the quote form and the CMS separately, they
                            are already disagreeing. We make one of them the source and derive the rest.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-3 font-semibold text-white transition-colors hover:bg-cognac/90"
                            >
                                <Code2 className="h-5 w-5" aria-hidden="true" /> Start a conversation
                            </Link>
                            <Link
                                href="/work"
                                className="inline-flex items-center gap-2 rounded-full border border-stone-500 px-7 py-3 font-semibold text-white transition-colors hover:border-white"
                            >
                                See the other records
                            </Link>
                        </div>
                    </section>
                
                    <OtherReviews excludeId="emblematic-studio" />

                    </article>
            </main>
            <Footer />
        </>
    );
}
