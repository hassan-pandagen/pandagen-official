import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, BookMarked, Hash } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogHighlight, BlogAuthor, StatCard } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import { finding } from "@/data/research-facts";
import type { Metadata } from "next";

export const dynamic = "force-static";

const postId = "web-accessibility-glossary";
const postFAQs = blogPosts.find((p) => p.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/web-accessibility-glossary";

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

// Single source of truth for the term list: drives the jump-nav, the group
// counts AND the DefinedTermSet JSON-LD. Adding a term in one place adds it in
// all three, so the visible glossary and the machine-readable one cannot drift.
const TERMS: { id: string; term: string; group: string }[] = [
    { id: "wcag", term: "WCAG", group: "Standards and conformance" },
    { id: "pour", term: "POUR (the four principles)", group: "Standards and conformance" },
    { id: "success-criterion", term: "Success criterion", group: "Standards and conformance" },
    { id: "conformance-levels", term: "Levels A, AA and AAA", group: "Standards and conformance" },
    { id: "wcag-22", term: "WCAG 2.2", group: "Standards and conformance" },
    { id: "vpat", term: "VPAT and the Accessibility Conformance Report", group: "Standards and conformance" },
    { id: "en-301-549", term: "EN 301 549 and Section 508", group: "Standards and conformance" },

    { id: "assistive-technology", term: "Assistive technology", group: "How people actually use the web" },
    { id: "screen-reader", term: "Screen reader", group: "How people actually use the web" },
    { id: "accessibility-tree", term: "Accessibility tree", group: "How people actually use the web" },
    { id: "keyboard-navigation", term: "Keyboard navigation and focus order", group: "How people actually use the web" },
    { id: "focus-visible", term: "Visible focus indicator", group: "How people actually use the web" },
    { id: "skip-link", term: "Skip link", group: "How people actually use the web" },
    { id: "reduced-motion", term: "prefers-reduced-motion", group: "How people actually use the web" },

    { id: "contrast-ratio", term: "Contrast ratio", group: "The failures that dominate the data" },
    { id: "alt-text", term: "Alternative text", group: "The failures that dominate the data" },
    { id: "form-label", term: "Form label", group: "The failures that dominate the data" },
    { id: "link-text", term: "Ambiguous link text", group: "The failures that dominate the data" },
    { id: "empty-control", term: "Empty button and empty link", group: "The failures that dominate the data" },
    { id: "heading-structure", term: "Heading structure", group: "The failures that dominate the data" },
    { id: "page-language", term: "Page language", group: "The failures that dominate the data" },

    { id: "semantic-html", term: "Semantic HTML", group: "Markup, testing and evidence" },
    { id: "aria", term: "ARIA", group: "Markup, testing and evidence" },
    { id: "landmarks", term: "Landmark regions", group: "Markup, testing and evidence" },
    { id: "automated-testing", term: "Automated accessibility testing", group: "Markup, testing and evidence" },
    { id: "manual-testing", term: "Manual testing", group: "Markup, testing and evidence" },
    { id: "wave-axe", term: "WAVE and axe", group: "Markup, testing and evidence" },
    { id: "lighthouse-a11y", term: "The Lighthouse accessibility score", group: "Markup, testing and evidence" },
    { id: "overlay", term: "Accessibility overlay", group: "Markup, testing and evidence" },
];

const GROUPS = [
    "Standards and conformance",
    "How people actually use the web",
    "The failures that dominate the data",
    "Markup, testing and evidence",
];

const countIn = (group: string) => TERMS.filter((t) => t.group === group).length;

// Plain-text definitions for the DefinedTerm JSON-LD. Same facts as the visible
// cards, written to stand alone if a machine lifts one without its context.
const DEFS: Record<string, string> = {
    "wcag":
        "The Web Content Accessibility Guidelines, published by the World Wide Web Consortium through its Web Accessibility Initiative. WCAG is the reference nearly every accessibility law, procurement rule and audit points at, but it is a technical standard rather than a law in itself.",
    "pour":
        "The four principles WCAG is organised under: content must be Perceivable, Operable, Understandable and Robust. Every success criterion sits under one of them, which makes POUR a useful way to reason about a failure that has no obvious rule attached.",
    "success-criterion":
        "A single testable requirement in WCAG, written as a pass or fail statement rather than a technique. WCAG deliberately does not tell you how to satisfy a criterion, because the right technique differs by platform and would date faster than the standard.",
    "conformance-levels":
        "WCAG success criteria are graded A, AA or AAA. Level A is the minimum, AA is what almost every law and procurement rule actually requires, and AAA is not expected to be met in full across an entire site. Anyone quoting you for AAA conformance sitewide should be asked why.",
    "wcag-22":
        "The current WCAG 2 version, a W3C Recommendation since October 2023. It added nine success criteria, mostly covering focus visibility, dragging alternatives, target size and reducing cognitive load in authentication, and it obsoleted the old 4.1.1 Parsing criterion.",
    "vpat":
        "A Voluntary Product Accessibility Template is the form a vendor fills in to describe how a product meets accessibility standards. The completed document is an Accessibility Conformance Report. It is self-reported, so it evidences a claim made by the vendor, not an independent audit.",
    "en-301-549":
        "EN 301 549 is the European standard for accessibility requirements in ICT procurement, and it incorporates WCAG success criteria directly. Section 508 plays a comparable role for United States federal procurement. Which one applies to you, and by when, is a legal question with a jurisdiction-specific answer.",

    "assistive-technology":
        "Software or hardware someone uses to interact with a computer, including screen readers, screen magnifiers, switch devices, voice control and braille displays. Accessible markup is what lets assistive technology do its job; it is not a feature aimed only at one group.",
    "screen-reader":
        "Software that converts a page into speech or braille and lets someone navigate it by heading, landmark, link or form control. Screen readers read the accessibility tree, not the visual layout, which is why a page that looks organised can still be incoherent to one.",
    "accessibility-tree":
        "A structure the browser computes from the DOM, describing each element's role, name, state and value, and exposes to assistive technology through platform APIs. It is also increasingly what automated agents read a page through, so its quality now affects more than screen reader users.",
    "keyboard-navigation":
        "Operating a page using only the keyboard, moving between interactive elements with Tab. Focus order should follow the meaning of the page. Anything you can do with a mouse should be doable without one, and a keyboard trap that cannot be left without a mouse is a failure at level A.",
    "focus-visible":
        "The visible indicator showing which element currently has keyboard focus. Removing the default outline without providing a replacement makes a page unusable by keyboard, which is why the CSS declaration that hides it is one of the most damaging one-line changes in front-end development.",
    "skip-link":
        "A link, usually the first focusable element on a page, that jumps past repeated navigation straight to the main content. It exists so a keyboard or screen reader user does not tab through the same forty links on every page of a site.",
    "reduced-motion":
        "A CSS media feature that reports whether someone has asked their operating system to minimise animation. Respecting it matters because motion can cause nausea, dizziness and migraine for people with vestibular conditions, and the preference is already set on their device.",

    "contrast-ratio":
        "The measured difference in relative luminance between text and its background. WCAG at level AA asks for at least 4.5:1 for normal-size text and 3:1 for large text, with 3:1 also applying to interface components and meaningful graphics. Browser developer tools report the ratio directly.",
    "alt-text":
        "Text describing what an image conveys, read out in place of the image. An image carrying meaning needs a description of that meaning rather than of the picture; a decorative image needs an empty alt attribute so it is skipped. Automated tools can tell you the attribute is missing but cannot judge whether the text that is there is any good.",
    "form-label":
        "Text identifying what an input is for, programmatically associated with that input. A placeholder is not a label: it vanishes when someone types, is often too low-contrast to read, and is not reliably announced. A visible bound label helps every user, not only assistive technology users.",
    "link-text":
        "The words inside a link, which should make sense read on their own. Screen reader users commonly navigate by pulling up a list of every link on a page, and a list reading click here, click here, read more tells them nothing about where any of them go.",
    "empty-control":
        "A button or link with no text an assistive technology can announce, usually because it contains only an icon or an image with no alternative text. It is announced as button or link with nothing else, so the user is told something is interactive but not what it does.",
    "heading-structure":
        "The h1 to h6 outline of a page, used by screen reader users to navigate the way a sighted reader skims. Headings should describe the content beneath them and be used for structure rather than for visual size. Skipping a level is a widely repeated rule that is not itself a WCAG AA failure; headings that are decorative, missing or inaccurate are the real problem.",
    "page-language":
        "The lang attribute on the html element, declaring the natural language of the page. Without it a screen reader may pronounce the page using the wrong language rules, which can render otherwise correct content unintelligible. It is one attribute and it is a level A requirement.",

    "semantic-html":
        "Using the HTML element that already means what you want, such as button for a button and nav for navigation, rather than building the same thing from generic elements. Semantic elements arrive with keyboard behaviour, focus handling and an accessibility role already implemented and tested.",
    "aria":
        "Accessible Rich Internet Applications, a set of attributes that add role, state and property information to markup where native HTML cannot express it. Its own first rule is not to use it when a native element would do, because ARIA changes what is announced without changing how anything behaves.",
    "landmarks":
        "Regions that let assistive technology jump between the major areas of a page. Native elements map to them automatically: header to banner, nav to navigation, main to main, footer to contentinfo and aside to complementary. Wrapping everything in generic containers throws that navigation away.",
    "automated-testing":
        "Running a tool that inspects rendered markup and reports detectable failures. It is fast, repeatable and the only practical way to measure a large number of pages, and it detects a subset of WCAG failures. A page with no detected errors is not necessarily conformant.",
    "manual-testing":
        "Checking the things a machine cannot judge: whether alternative text is accurate, whether reading order makes sense, whether an error message explains how to recover, and whether the page can actually be completed by keyboard or with a screen reader. Most real accessibility barriers are found this way.",
    "wave-axe":
        "Two widely used automated engines. WAVE is published by WebAIM and is the tool behind the annual WebAIM Million study. axe-core is published by Deque and is embedded in many other products, including the accessibility category in Chrome's Lighthouse. Different engines flag different things, so a score is tied to the tool that produced it.",
    "lighthouse-a11y":
        "A weighted score derived from a set of automated axe-core checks. Google's own documentation states that a perfect score does not mean the page is accessible, because the checks cover only what can be automated. Treat it as a smoke test, not as evidence of conformance.",
    "overlay":
        "A third-party script that attempts to correct accessibility problems in the browser after a page has loaded, usually sold as a fast route to compliance. It sits on top of markup it did not author. It does not change the contrast ratio a designer chose or write alternative text nobody wrote.",
};

// Fail the build rather than emit a DefinedTerm with description: undefined.
// A term added to TERMS and forgotten in DEFS would otherwise ship a broken
// entry in the structured data while the visible page looked perfectly fine,
// which is exactly the drift class this project keeps finding after the fact.
const missingDefs = TERMS.filter((t) => !DEFS[t.id]);
if (missingDefs.length) {
    throw new Error(
        `web-accessibility-glossary: no DEFS entry for ${missingDefs.map((t) => t.id).join(", ")}. ` +
        `Every term needs a plain-text definition for the DefinedTermSet JSON-LD.`
    );
}
const unknownGroups = TERMS.filter((t) => !GROUPS.includes(t.group));
if (unknownGroups.length) {
    throw new Error(
        `web-accessibility-glossary: ${unknownGroups.map((t) => t.id).join(", ")} sit in a group ` +
        `not listed in GROUPS, so they would vanish from the jump-nav while staying in the JSON-LD.`
    );
}

function GroupHeader({ title, count }: { title: string; count: number }) {
    return (
        <div className="mt-16 mb-6 flex items-center gap-4">
            <h2 className="shrink-0 text-sm font-bold uppercase tracking-widest text-cognac">{title}</h2>
            <span className="h-px flex-1 bg-stone-200" />
            <span className="shrink-0 text-xs font-medium text-stone-600">{count} terms</span>
        </div>
    );
}

function Term({
    id,
    name,
    href,
    hrefLabel,
    example,
    ask,
    children,
}: {
    id: string;
    name: string;
    href?: string;
    hrefLabel?: string;
    example?: React.ReactNode;
    ask?: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <div
            id={id}
            className="group relative scroll-mt-28 rounded-2xl border border-stone-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-cognac/40 hover:shadow-md md:p-7"
        >
            <span aria-hidden className="absolute left-0 top-6 h-8 w-1 rounded-r bg-cognac/0 transition-colors duration-300 group-hover:bg-cognac/70" />
            <h3 className="mb-3 flex items-center gap-2 font-serif text-xl font-bold leading-tight text-charcoal md:text-2xl">
                <a href={`#${id}`} className="transition-colors hover:text-cognac">{name}</a>
                <a href={`#${id}`} aria-label={`Link to ${name}`} className="text-stone-300 opacity-0 transition-all hover:text-cognac group-hover:opacity-100">
                    <Hash className="h-4 w-4" />
                </a>
            </h3>
            <p className="text-[15px] leading-relaxed text-stone-600 md:text-base">{children}</p>
            {example && (
                <div className="mt-4 flex items-start gap-3 rounded-xl border border-cognac/15 bg-cognac/5 px-4 py-3">
                    <span className="shrink-0 pt-1 text-[10px] font-bold uppercase tracking-widest text-cognac">Example</span>
                    <p className="text-sm leading-relaxed text-stone-600">{example}</p>
                </div>
            )}
            {ask && (
                <div className="mt-3 flex items-start gap-3 rounded-xl border border-charcoal/10 bg-charcoal/[0.03] px-4 py-3">
                    <span className="shrink-0 pt-1 text-[10px] font-bold uppercase tracking-widest text-charcoal/60">Ask your agency</span>
                    <p className="text-sm leading-relaxed text-stone-600">{ask}</p>
                </div>
            )}
            {href && hrefLabel && (
                <Link href={href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cognac transition-all hover:gap-2.5">
                    {hrefLabel} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
            )}
        </div>
    );
}

const title = `Web Accessibility Glossary: ${TERMS.length} Terms Defined (2026)`;
const description =
    "Plain-English definitions of the accessibility terms that appear in audits, quotes and procurement forms, with what each one does not prove and what to ask the person selling it to you.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/web-accessibility-glossary" },
    keywords: [
        "web accessibility glossary",
        "what is WCAG",
        "WCAG AA vs AAA",
        "what is a VPAT",
        "accessibility tree",
        "contrast ratio WCAG",
        "alt text vs decorative image",
        "accessibility overlay",
        "Lighthouse accessibility score",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-08-13",
        modifiedTime: "2026-08-13",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/web-accessibility-glossary")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/blog/web-accessibility-glossary"),
            datePublished: "2026-08-13T00:00:00-05:00",
            dateModified: "2026-08-13T00:00:00-05:00",
            citation: [
                "https://www.w3.org/TR/WCAG22/",
                "https://www.w3.org/WAI/standards-guidelines/wcag/",
                "https://www.w3.org/WAI/ARIA/apg/",
                "https://webaim.org/projects/million/",
                "https://developer.chrome.com/docs/lighthouse/accessibility/scoring",
            ],
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Web accessibility", "WCAG", "Assistive technology", "Semantic HTML", "Technical SEO"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Accessibility",
            inLanguage: "en-US",
            wordCount: 4671,
            timeRequired: "PT23M",
            about: [
                { "@type": "Thing", name: "Web accessibility", sameAs: ["https://en.wikipedia.org/wiki/Web_accessibility"] },
                { "@type": "Thing", name: "Web Content Accessibility Guidelines", sameAs: ["https://www.w3.org/TR/WCAG22/"] },
                { "@type": "Thing", name: "WAI-ARIA", sameAs: ["https://en.wikipedia.org/wiki/WAI-ARIA"] },
                { "@type": "Thing", name: "Assistive technology", sameAs: ["https://en.wikipedia.org/wiki/Assistive_technology"] },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
        },
        {
            "@type": "DefinedTermSet",
            "@id": `${canonicalUrl}#termset`,
            name: "Web Accessibility Glossary",
            description,
            inLanguage: "en-US",
            hasDefinedTerm: TERMS.map((t) => ({
                "@type": "DefinedTerm",
                "@id": `${canonicalUrl}#${t.id}`,
                name: t.term,
                description: DEFS[t.id],
                inDefinedTermSet: `${canonicalUrl}#termset`,
            })),
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
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Web Accessibility Glossary", item: canonicalUrl },
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
            datePublished: "2026-08-13T00:00:00-05:00",
            dateModified: "2026-08-13T00:00:00-05:00",
            inLanguage: "en-US",
        },
    ],
};

const specLink = "font-medium text-cognac underline underline-offset-4 hover:text-charcoal";

export default function WebAccessibilityGlossaryPage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-paper">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Header />

            <article>
                <section className="relative px-6 pb-10 pt-24 md:pt-40">
                    <div className="mx-auto max-w-3xl">
                        <Breadcrumb items={postCrumbs(postId, "Web Accessibility Glossary")} />
                        <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-charcoal">
                            <ArrowLeft className="h-4 w-4" /> Back to Blog
                        </Link>

                        <div className="mb-8">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cognac/10 px-3 py-1 text-xs font-semibold text-cognac">
                                <BookMarked className="h-3 w-3" /> Glossary
                            </div>
                            <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-tight text-charcoal md:text-6xl">
                                The Web Accessibility{" "}
                                <span className="font-serif italic text-cognac">Glossary</span>
                            </h1>
                            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-stone-500 md:text-xl">
                                Accessibility gets sold with acronyms. WCAG, AA, VPAT, ARIA, axe, overlay. This defines{" "}
                                {TERMS.length} of them in plain English, says what each one does and does not prove, and
                                gives you the question to ask the person putting it in a quote.
                            </p>
                            <BlogAuthor
                                date="Aug 13, 2026"
                                readTime="21 min read"
                                bio="Hassan builds custom Next.js sites and writes the engineering guides on this site."
                                linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                            />
                        </div>

                        {/* Answer-first intro, extractable */}
                        <div className="relative mb-12 overflow-hidden rounded-2xl bg-charcoal p-7 text-white md:p-9" data-speakable="true">
                            <div className="pointer-events-none absolute -right-6 -top-8 select-none font-serif text-[9rem] leading-none text-white/5">&rdquo;</div>
                            <p className="relative text-lg leading-relaxed md:text-xl">
                                Three things are worth knowing before any of the definitions. WCAG is a technical
                                standard, not a law, and level AA is what nearly every law actually points at.
                                Automated testing detects a subset of failures, so a clean scan is not conformance.
                                And the failures that dominate real sites are not exotic: contrast, alternative text
                                and form labels account for most of what any tool will find on yours.
                            </p>
                        </div>

                        <div className="mb-10 grid grid-cols-3 gap-3 md:gap-4">
                            <StatCard stat={finding("wcag-failure-rate-2026").value} label="of top million home pages had detected WCAG failures in 2026" />
                            <StatCard stat="83.9%" label="had low contrast text, the single most common failure" />
                            <StatCard stat="96%" label="of all detected errors came from just six failure types" />
                        </div>

                        {/* Jump nav */}
                        <nav aria-label="Glossary terms" className="mb-16 rounded-2xl border border-stone-200 bg-white p-6 shadow-xs md:p-7">
                            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-stone-600">Jump to a term</p>
                            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                                {GROUPS.map((group) => (
                                    <div key={group}>
                                        <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-cognac">{group}</p>
                                        <ul className="space-y-1.5">
                                            {TERMS.filter((t) => t.group === group).map((t) => (
                                                <li key={t.id}>
                                                    <a href={`#${t.id}`} className="inline-block text-sm text-stone-600 transition-all hover:translate-x-0.5 hover:text-cognac">
                                                        {t.term}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </nav>

                        {/* Standards and conformance */}
                        <GroupHeader title="Standards and conformance" count={countIn("Standards and conformance")} />
                        <div className="space-y-4">
                            <Term
                                id="wcag"
                                name="WCAG"
                                example={
                                    <>
                                        A procurement form asks whether your site is &ldquo;WCAG compliant.&rdquo; The
                                        question is incomplete as written: WCAG has versions and three conformance
                                        levels, so the answerable version is &ldquo;does it meet WCAG 2.2 level AA, and
                                        on which pages.&rdquo;
                                    </>
                                }
                                ask={
                                    <>
                                        &ldquo;Which WCAG version and level are we being held to, and which pages does
                                        that cover?&rdquo; A quote that says only WCAG has not been scoped yet.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    WCAG is the Web Content Accessibility Guidelines, published by the World Wide Web
                                    Consortium through its Web Accessibility Initiative.
                                </BlogHighlight>{" "}
                                It is the reference that nearly every accessibility law, procurement rule and audit
                                points at, which is why it feels like a law. It is not one. It is a technical standard
                                that laws choose to adopt, and the adopting law decides which version, which level and
                                who it applies to. Read it at{" "}
                                <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="nofollow noopener noreferrer" className={specLink}>
                                    w3.org/TR/WCAG22
                                </a>
                                . <BlogHighlight>Why it matters:</BlogHighlight> the distinction is the difference
                                between a scoped engineering target and an unbounded promise. Vendors who blur it tend
                                to sell the unbounded version.
                            </Term>

                            <Term
                                id="pour"
                                name="POUR (the four principles)"
                                example={
                                    <>
                                        A carousel that advances on its own fails on Operable, because the user cannot
                                        control the pace. A form that rejects a phone number without saying what format
                                        it wants fails on Understandable. Same page, two different principles.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    WCAG is organised under four principles: content must be Perceivable, Operable,
                                    Understandable and Robust.
                                </BlogHighlight>{" "}
                                Every success criterion sits under one of them. That structure is more useful than it
                                sounds, because it gives you somewhere to start when you hit a problem with no obvious
                                rule attached: ask which of the four it breaks and the relevant criteria narrow fast.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> it is also how you tell a real audit from
                                a tool export. An audit reasons about principles. A tool export lists rule identifiers.
                            </Term>

                            <Term
                                id="success-criterion"
                                name="Success criterion"
                                example={
                                    <>
                                        Criterion 1.4.3 Contrast (Minimum) says text needs a contrast ratio of at least
                                        4.5:1. It does not tell you to change a hex value, use a different palette, or
                                        add a background. Any of those can satisfy it.
                                    </>
                                }
                                ask={
                                    <>
                                        &ldquo;Which success criteria are we failing, and what is the evidence for
                                        each?&rdquo; A finding without a criterion attached is an opinion, which may
                                        still be a good one, but should be labelled as such.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    A success criterion is a single testable requirement, written as a pass or fail
                                    statement rather than as a technique.
                                </BlogHighlight>{" "}
                                WCAG deliberately avoids prescribing how to satisfy them, because the right approach
                                differs by platform and a standard full of implementation advice would date faster than
                                the requirements themselves. Techniques are published separately and are explicitly
                                informative rather than required.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> it means nobody can tell you there is
                                only one compliant way to build something. If they do, they are describing their
                                preference, not the standard.
                            </Term>

                            <Term
                                id="conformance-levels"
                                name="Levels A, AA and AAA"
                                example={
                                    <>
                                        Level AA asks for a 4.5:1 contrast ratio on normal text. Level AAA asks for
                                        7:1. The AAA version rules out a large part of ordinary brand palettes, which
                                        is one reason full AAA conformance is rare and not expected.
                                    </>
                                }
                                ask={
                                    <>
                                        If a proposal promises AAA across the whole site, ask which AAA criteria they
                                        intend to meet and how. The W3C itself does not recommend AAA as a general
                                        sitewide policy, because some content cannot satisfy it.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Success criteria are graded A, AA or AAA, and the levels are cumulative.
                                </BlogHighlight>{" "}
                                Level A is the floor. Level AA is the practical target and is what almost every law and
                                procurement rule actually points at. Level AAA is an enhancement that the W3C states is
                                not required as a general policy for entire sites, because it is not possible to satisfy
                                for all content.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> AAA in a sales document is usually either
                                a misunderstanding or a way to justify a larger number. AA on named templates, with
                                evidence, is what a real engagement looks like.
                            </Term>

                            <Term
                                id="wcag-22"
                                name="WCAG 2.2"
                                example={
                                    <>
                                        One of the additions covers dragging: if an interaction requires a drag, there
                                        has to be a single-pointer alternative. That is aimed at people using a switch,
                                        a head pointer or a tremor-affected hand, and it quietly rules out a lot of
                                        fashionable interface patterns.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    WCAG 2.2 has been a W3C Recommendation since October 2023, and it is the current
                                    WCAG 2 version.
                                </BlogHighlight>{" "}
                                It added nine success criteria, largely covering focus visibility, alternatives to
                                dragging, minimum target size and reducing the cognitive load of authentication. It also
                                obsoleted the old 4.1.1 Parsing criterion, which had become a source of noisy findings
                                that did not correspond to real barriers.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> if an audit you have been given is
                                written against 2.1 and still reports Parsing failures, it is at least a version behind
                                and possibly a tool export from an old ruleset.
                            </Term>

                            <Term
                                id="vpat"
                                name="VPAT and the Accessibility Conformance Report"
                                example={
                                    <>
                                        A supplier sends a completed VPAT saying every criterion is Supports. That is
                                        the supplier&apos;s own assessment of their own product. It may be careful and
                                        honest. It is still not an independent audit, and the document does not claim
                                        to be one.
                                    </>
                                }
                                ask={
                                    <>
                                        &ldquo;Who completed this, when, against which version, and was any of it
                                        tested by a third party?&rdquo; A VPAT with no date and no author is a marketing
                                        asset.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    A Voluntary Product Accessibility Template is the form a vendor fills in to describe
                                    how their product meets accessibility standards; the completed document is an
                                    Accessibility Conformance Report.
                                </BlogHighlight>{" "}
                                It is a genuinely useful artifact, particularly in procurement, because it forces a
                                vendor to make specific claims criterion by criterion rather than a general one. The
                                thing to hold on to is that it is self-reported.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> it evidences a claim, and a claim on the
                                record is worth something. It does not evidence a test.
                            </Term>

                            <Term
                                id="en-301-549"
                                name="EN 301 549 and Section 508"
                                ask={
                                    <>
                                        &ldquo;Which standard is in our contract, and who signed off that we meet
                                        it?&rdquo; Then take the answer to a lawyer rather than to a web studio. We
                                        build to the technical standard; we do not advise on which one binds you.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    EN 301 549 is the European standard for accessibility requirements in ICT
                                    procurement, and it incorporates WCAG success criteria directly. Section 508 plays a
                                    comparable role for United States federal procurement.
                                </BlogHighlight>{" "}
                                Both exist so that a buyer can put a testable requirement into a contract instead of the
                                word accessible. Which one applies to you, from what date, and with what consequences,
                                is a legal question with a jurisdiction-specific answer, and we do not publish dates for
                                it here because a wrong date on this page would be worse than no date.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> the engineering work is the same either
                                way. The paperwork, the deadline and the liability are not, and that part is not ours to
                                answer.
                            </Term>
                        </div>

                        {/* How people actually use the web */}
                        <GroupHeader title="How people actually use the web" count={countIn("How people actually use the web")} />
                        <div className="space-y-4">
                            <Term
                                id="assistive-technology"
                                name="Assistive technology"
                                example={
                                    <>
                                        Someone with a temporary wrist injury using voice control, someone on a train
                                        with the sound off relying on captions, and someone who has used a screen reader
                                        for thirty years are all served by the same markup being correct.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Assistive technology is any software or hardware someone uses to interact with a
                                    computer differently: screen readers, magnifiers, switch devices, voice control,
                                    braille displays.
                                </BlogHighlight>{" "}
                                Accessible markup is what lets these tools do their job. That is the whole mechanism:
                                the tool can only convey what the page exposes.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> it reframes the work from a minority
                                accommodation to an interface contract. You are not writing markup for a device, you
                                are writing it so that any device can present your content faithfully.
                            </Term>

                            <Term
                                id="screen-reader"
                                name="Screen reader"
                                example={
                                    <>
                                        A screen reader user often opens a page by listing its headings, the way a
                                        sighted reader skims. If your headings are chosen for size rather than meaning,
                                        that list reads as nonsense and they have lost the fastest route into your
                                        content.
                                    </>
                                }
                                ask={
                                    <>
                                        &ldquo;Has anyone actually navigated our checkout with a screen reader, and can
                                        I see the recording?&rdquo; This is the single highest-value question in the
                                        list, and it is very rarely answered yes.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    A screen reader converts a page into speech or braille and lets someone navigate it
                                    by heading, landmark, link or form control.
                                </BlogHighlight>{" "}
                                The critical detail is what it reads. It does not read your visual layout; it reads the{" "}
                                <a href="#accessibility-tree" className="font-medium text-cognac hover:underline">accessibility tree</a>.
                                A page can look immaculately organised and be completely incoherent through one.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> this is why visual design review never
                                catches accessibility problems, and why a designer signing off on a page proves nothing
                                about whether it can be used.
                            </Term>

                            <Term
                                id="accessibility-tree"
                                name="Accessibility tree"
                                href="/blog/agentic-browsing-pagespeed-score"
                                hrefLabel="Why agents read the same tree"
                                example={
                                    <>
                                        Chrome DevTools shows it: open the Elements panel, select a node, then look at
                                        the Accessibility pane. You get the computed role, name and state, which is
                                        exactly what a screen reader will announce.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    The accessibility tree is a structure the browser computes from the DOM, describing
                                    each element&apos;s role, name, state and value, and exposes to assistive technology
                                    through platform APIs.
                                </BlogHighlight>{" "}
                                It is the actual interface between your markup and every assistive tool, which makes it
                                the thing worth debugging when something is announced wrongly.{" "}
                                <BlogHighlight>Why it matters, and this part is new:</BlogHighlight> the accessibility
                                tree is increasingly how automated agents read a page too. Chrome&apos;s experimental
                                Lighthouse agentic browsing checks include accessibility-tree quality directly. Work
                                that was framed for years as serving a minority of users is now also the work that
                                decides whether an AI agent can complete a task on your site.
                            </Term>

                            <Term
                                id="keyboard-navigation"
                                name="Keyboard navigation and focus order"
                                example={
                                    <>
                                        Put your mouse down and press Tab through your own booking form. Watch where
                                        focus goes. If it jumps to the footer and back, or disappears entirely inside a
                                        modal, you have found a real barrier in about ninety seconds.
                                    </>
                                }
                                ask={
                                    <>
                                        &ldquo;Can every task on the site be completed with the keyboard alone?&rdquo;
                                        Ask them to demonstrate it on the checkout rather than describe it.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Keyboard navigation means operating the page with the keyboard alone, moving between
                                    interactive elements with Tab, and focus order is the sequence that produces.
                                </BlogHighlight>{" "}
                                The order should follow the meaning of the page rather than the source order left over
                                from a CSS layout decision. Anything achievable with a mouse should be achievable
                                without one, and a keyboard trap that cannot be escaped without a mouse is a failure at
                                the lowest conformance level.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> this is the test that needs no tool, no
                                budget and no specialist, and it finds things no automated scan reports.
                            </Term>

                            <Term
                                id="focus-visible"
                                name="Visible focus indicator"
                                example={
                                    <>
                                        The CSS declaration <code className="rounded bg-stone-100 px-1 py-0.5 text-[13px]">outline: none</code>{" "}
                                        applied to interactive elements, with nothing put in its place, is probably the
                                        most damaging single line in front-end development. It is usually added because
                                        a designer disliked the default ring.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    The focus indicator is the visible marker showing which element currently has
                                    keyboard focus.
                                </BlogHighlight>{" "}
                                Removing the browser default without providing a replacement makes a page unusable by
                                keyboard, because the user can still move focus but can no longer see where it is. WCAG
                                2.2 tightened this area further, adding criteria about focus not being obscured by
                                sticky headers and overlays.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> you can style the indicator however you
                                like. The requirement is that one exists and is visible, not that it looks like
                                Chrome&apos;s.
                            </Term>

                            <Term
                                id="skip-link"
                                name="Skip link"
                                example={
                                    <>
                                        Press Tab once on a well-built site and a &ldquo;Skip to content&rdquo; link
                                        appears in the top corner. It is usually invisible until focused, which is why
                                        most people have never seen one.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    A skip link is a link, usually the first focusable element on the page, that jumps
                                    past repeated navigation straight to the main content.
                                </BlogHighlight>{" "}
                                It exists so a keyboard or screen reader user does not tab through the same forty
                                navigation links on every page of your site. Bypassing repeated blocks is a level A
                                requirement, and a skip link is the simplest way to satisfy it.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> it costs one element and it is the
                                clearest signal in the markup that somebody thought about this at all.
                            </Term>

                            <Term
                                id="reduced-motion"
                                name="prefers-reduced-motion"
                                example={
                                    <>
                                        A full-screen parallax scroll effect is a design flourish for most visitors and
                                        a genuine trigger for nausea or migraine for someone with a vestibular
                                        condition. The media query lets you serve the flourish to one and a still page
                                        to the other, from the same code.
                                    </>
                                }
                                ask={
                                    <>
                                        &ldquo;Does the site respect reduced-motion, and can you show me the page with
                                        the setting on?&rdquo; It takes one operating-system toggle to check.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    prefers-reduced-motion is a CSS media feature that reports whether someone has asked
                                    their operating system to minimise animation.
                                </BlogHighlight>{" "}
                                Respecting it matters because motion causes nausea, dizziness and migraine for people
                                with vestibular conditions, and because the preference is already set on their device.
                                You are not asking them to configure anything; you are choosing whether to read what
                                they already told the browser.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> it is one media query, and ignoring it is
                                a decision rather than an oversight once you know it exists.
                            </Term>
                        </div>

                        {/* The failures that dominate the data */}
                        <GroupHeader title="The failures that dominate the data" count={countIn("The failures that dominate the data")} />

                        <div className="mb-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-xs md:p-7">
                            <p className="text-[15px] leading-relaxed text-stone-600 md:text-base">
                                These seven are grouped together because they are not exotic.{" "}
                                {finding("top-failure-types-2026").statement}. Every term in this section is one of
                                those, or sits directly alongside them. See{" "}
                                <Link href="/blog/web-accessibility-statistics-2026" className="font-medium text-cognac hover:underline">
                                    the full 2026 accessibility data
                                </Link>{" "}
                                for the method behind that figure and what it cannot show.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Term
                                id="contrast-ratio"
                                name="Contrast ratio"
                                example={
                                    <>
                                        Light grey text on white reads as tasteful restraint in a design tool on a
                                        calibrated monitor, and as nothing at all on a phone held outdoors. That is why
                                        it is the most common failure on the web by a wide margin.
                                    </>
                                }
                                ask={
                                    <>
                                        &ldquo;What is the measured ratio for our body text and our button labels?&rdquo;
                                        This is checkable in seconds in browser developer tools, so there is no reason
                                        for a vague answer.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Contrast ratio is the measured difference in relative luminance between text and its
                                    background.
                                </BlogHighlight>{" "}
                                WCAG at level AA asks for at least 4.5:1 for normal-size text and 3:1 for large text,
                                with 3:1 also applying to interface components and meaningful graphics. It appeared on{" "}
                                83.9% of home pages in the 2026 WebAIM Million, making it the single most common
                                detected failure.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> it is a hex value. The most widespread
                                accessibility failure on the web is fixable by changing a colour, which tells you
                                something about how much of this problem is really a design-review problem.
                            </Term>

                            <Term
                                id="alt-text"
                                name="Alternative text"
                                example={
                                    <>
                                        A photo of a team at a laptop, used as decoration beside a paragraph, should
                                        carry an empty alt attribute so it is skipped. The same photo used as the only
                                        illustration of a process needs text explaining the process. Same image, opposite
                                        correct answers.
                                    </>
                                }
                                ask={
                                    <>
                                        &ldquo;Who writes our alt text, and against what rule?&rdquo; If the answer is
                                        that a plugin generates it, you have an attribute-present problem rather than an
                                        alternative-text solution.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Alternative text is text describing what an image conveys, read in place of the
                                    image.
                                </BlogHighlight>{" "}
                                An image carrying meaning needs a description of that meaning rather than of the
                                picture. A decorative image needs an empty alt attribute so assistive technology skips
                                it silently. Missing alternative text appeared on 53.1% of home pages in the 2026 data.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> this is the clearest example of the limit
                                of tooling. A machine can tell you the attribute is absent. It cannot tell you the
                                sentence someone wrote is wrong, and a confidently wrong description is worse than
                                silence.
                            </Term>

                            <Term
                                id="form-label"
                                name="Form label"
                                example={
                                    <>
                                        A checkout with placeholder-only fields: the moment someone starts typing their
                                        address, the word Address disappears. If they are interrupted, there is nothing
                                        on screen telling them what they were filling in.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    A form label is text identifying what an input is for, programmatically associated
                                    with that input. A placeholder is not a label.
                                </BlogHighlight>{" "}
                                It disappears the moment somebody types, it is frequently rendered in grey too light to
                                read, and it is not reliably announced. Missing form input labels appeared on 52.8% of
                                home pages in the 2026 data, which is remarkable given how many of those home pages
                                carry only a search box or a newsletter signup.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> visible labels help everyone. This is one
                                of the places where the accessible version and the higher-converting version are the
                                same version.
                            </Term>

                            <Term
                                id="link-text"
                                name="Ambiguous link text"
                                example={
                                    <>
                                        A screen reader user can pull up a list of every link on the page. On a typical
                                        marketing site that list reads: Read more, Read more, Learn more, Click here,
                                        Read more. It is a table of contents with the contents removed.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Link text should make sense read on its own, without the sentence around it.
                                </BlogHighlight>{" "}
                                This is not a style preference; it follows directly from how people navigate. Pulling up
                                a list of links is a standard screen reader behaviour, and it strips every link of its
                                surrounding context by design.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> descriptive link text also happens to be
                                what search engines and answer engines use to understand what you are linking to, so
                                this one pays twice.
                            </Term>

                            <Term
                                id="empty-control"
                                name="Empty button and empty link"
                                example={
                                    <>
                                        A magnifying-glass icon button with no accessible name is announced simply as
                                        &ldquo;button.&rdquo; The user has been told something is there and can be
                                        pressed, and nothing about what pressing it does.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    An empty control is a button or link with no text an assistive technology can
                                    announce, usually because it contains only an icon.
                                </BlogHighlight>{" "}
                                The fix is an accessible name, through visible text, an aria-label, or alternative text
                                on the icon image. This is a common casualty of icon-only interface design, and it gets
                                worse as interfaces get more minimal.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> icon-only controls are usually the most
                                important ones on the page: search, menu, close, submit, cart.
                            </Term>

                            <Term
                                id="heading-structure"
                                name="Heading structure"
                                example={
                                    <>
                                        A page with eight h3 elements and no h1, because the h1 style was too large for
                                        the design. The visual hierarchy is fine and the navigable hierarchy does not
                                        exist.
                                    </>
                                }
                                ask={
                                    <>
                                        &ldquo;Do our headings describe the content under them, or were they picked for
                                        size?&rdquo; The honest answer on most sites is the second one.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Heading structure is the h1 to h6 outline of a page, used by screen reader users to
                                    navigate the way a sighted reader skims.
                                </BlogHighlight>{" "}
                                Headings should describe the content beneath them and should be chosen for structure
                                rather than for visual size, which is what CSS is for. One correction worth making:{" "}
                                <BlogHighlight>skipping a heading level is not itself a WCAG AA failure</BlogHighlight>,
                                despite how often it is reported as one. The genuine problems are headings that are
                                missing, inaccurate, or used purely as styling.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> when an audit leads with skipped heading
                                levels, it is usually a tool export being presented as an assessment.
                            </Term>

                            <Term
                                id="page-language"
                                name="Page language"
                                example={
                                    <>
                                        An English page with no lang attribute, read by a screen reader configured for
                                        French, is pronounced using French phonetics. The words are correct and the
                                        output is unintelligible.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Page language is the lang attribute on the html element, declaring the natural
                                    language of the document.
                                </BlogHighlight>{" "}
                                Without it a screen reader may apply the wrong pronunciation rules to otherwise perfect
                                content. It is a level A requirement and it is a single attribute.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> it is the cheapest item on this entire
                                page, and it is genuinely missing on a great many sites, including multilingual ones
                                where it matters most.
                            </Term>
                        </div>

                        {/* Markup, testing and evidence */}
                        <GroupHeader title="Markup, testing and evidence" count={countIn("Markup, testing and evidence")} />
                        <div className="space-y-4">
                            <Term
                                id="semantic-html"
                                name="Semantic HTML"
                                example={
                                    <>
                                        A div styled to look like a button needs a role, a tabindex, an Enter handler
                                        and a Space handler to behave like one. A button element needs none of them,
                                        because the browser already did that work and tested it on every platform.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Semantic HTML means using the element that already means what you want, rather than
                                    reconstructing it from generic containers.
                                </BlogHighlight>{" "}
                                Native elements arrive with keyboard behaviour, focus handling and an accessibility role
                                already implemented. Rebuilding them means reimplementing all of that, correctly, on
                                every platform, forever.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> most accessibility work is not adding
                                things. It is stopping the reconstruction of things the browser already gave you.
                            </Term>

                            <Term
                                id="aria"
                                name="ARIA"
                                example={
                                    <>
                                        Putting <code className="rounded bg-stone-100 px-1 py-0.5 text-[13px]">role=&quot;button&quot;</code>{" "}
                                        on a div makes a screen reader announce it as a button. It does not make Enter
                                        or Space activate it. The announcement is now a promise the element does not
                                        keep.
                                    </>
                                }
                                ask={
                                    <>
                                        &ldquo;Where are we using ARIA, and could a native element have done it?&rdquo;
                                        Heavy ARIA use in a codebase is usually a symptom rather than a sophistication.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    ARIA is a set of attributes that add role, state and property information where
                                    native HTML cannot express it. Its own first rule is not to use it when a native
                                    element would do.
                                </BlogHighlight>{" "}
                                That rule exists because ARIA changes what is announced without changing how anything
                                behaves. Badly applied, it makes a page worse than no ARIA at all, because the user is
                                now given confident, wrong information.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> this is the one term on this page where
                                more is reliably worse.
                            </Term>

                            <Term
                                id="landmarks"
                                name="Landmark regions"
                                example={
                                    <>
                                        A screen reader user can jump straight to main and skip everything above it.
                                        That only works if a main element exists. On a page built entirely from divs,
                                        the shortcut has nowhere to go.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Landmarks are regions that let assistive technology jump between the major areas of
                                    a page.
                                </BlogHighlight>{" "}
                                Native elements map to them automatically: header becomes banner, nav becomes
                                navigation, main becomes main, footer becomes contentinfo, aside becomes complementary.
                                No extra attributes are needed if the right elements are used.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> this is the second time on this page that
                                the correct answer is simply to use the element that already exists, and it will not be
                                the last.
                            </Term>

                            <Term
                                id="automated-testing"
                                name="Automated accessibility testing"
                                ask={
                                    <>
                                        &ldquo;Which pages were scanned, with which tool, on what date?&rdquo; A scan of
                                        the home page is not a scan of the site, and the pages that matter are the ones
                                        with forms on them.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Automated testing runs a tool against rendered markup and reports detectable
                                    failures.
                                </BlogHighlight>{" "}
                                It is fast, repeatable and the only practical way to measure many pages, which is
                                exactly why the WebAIM Million exists. Its boundary is stated by the people who run it:{" "}
                                {finding("wcag-failure-rate-2026").limitation}{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> a clean automated report is a floor, not
                                a certificate. Anyone presenting one as proof of conformance is either mistaken or
                                counting on you not knowing the difference.
                            </Term>

                            <Term
                                id="manual-testing"
                                name="Manual testing"
                                example={
                                    <>
                                        Turn on a screen reader and try to complete your own checkout. Most teams stop
                                        within two minutes, because they have found the problem and it is large.
                                    </>
                                }
                                ask={
                                    <>
                                        &ldquo;What was tested by a person, on which flows, and what did they find?&rdquo;
                                        If the deliverable is entirely a tool export, no manual testing happened.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    Manual testing covers what a machine cannot judge: whether alternative text is
                                    accurate, whether reading order makes sense, whether an error message explains how
                                    to recover, whether the task can actually be completed.
                                </BlogHighlight>{" "}
                                It is slower and it does not scale, and it is where the real barriers are found. Testing
                                with people who use assistive technology daily is better still, and different in kind
                                from a developer trying a screen reader for an afternoon.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> the gap between a passing scan and a
                                usable site is entirely made of things only this finds.
                            </Term>

                            <Term
                                id="wave-axe"
                                name="WAVE and axe"
                                example={
                                    <>
                                        Run both on the same page and you will get two different error counts. Neither
                                        is wrong. They implement different rulesets, and a count is only meaningful
                                        alongside the name of the tool that produced it.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    WAVE and axe are the two most widely used automated engines.
                                </BlogHighlight>{" "}
                                WAVE is published by WebAIM and is the tool behind the annual WebAIM Million study.
                                axe-core is published by Deque and is embedded in many other products, including the
                                accessibility category in Chrome&apos;s Lighthouse. Both are free to use on a page.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> if you are comparing an error count over
                                time, keep the tool constant. Switching engines and reporting the change as progress or
                                regression is a measurement error, not a result.
                            </Term>

                            <Term
                                id="lighthouse-a11y"
                                name="The Lighthouse accessibility score"
                                href="/blog/core-web-vitals-explained"
                                hrefLabel="The same discipline applied to performance scores"
                                example={
                                    <>
                                        A page scoring 100 in Lighthouse can still be impossible to complete with a
                                        keyboard, because none of the checks that would catch that are automatable.
                                    </>
                                }
                                ask={
                                    <>
                                        If a proposal promises a Lighthouse accessibility score, ask what happens to the
                                        checks the score does not cover. The number is easy to move. The rest is the
                                        work.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    The Lighthouse accessibility score is a weighted result derived from a set of
                                    automated axe-core checks.
                                </BlogHighlight>{" "}
                                Google&apos;s own documentation states plainly that a perfect score does not mean the
                                page is accessible, because the checks only cover what can be automated.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> it is a useful smoke test and a bad
                                acceptance criterion, which is the same thing this site says about the performance
                                score sitting next to it.
                            </Term>

                            <Term
                                id="overlay"
                                name="Accessibility overlay"
                                ask={
                                    <>
                                        &ldquo;Which of our failures does this actually remove from the page, and which
                                        does it leave in the markup?&rdquo; Ask for the answer failure by failure rather
                                        than as a compliance claim.
                                    </>
                                }
                            >
                                <BlogHighlight>
                                    An overlay is a third-party script that attempts to correct accessibility problems
                                    in the browser after the page has loaded, usually sold as a fast route to
                                    compliance.
                                </BlogHighlight>{" "}
                                Whatever view you take of the category, the mechanical limit is worth being clear about:
                                it sits on top of markup it did not author and cannot see your intent. It does not
                                change the contrast ratio your designer chose, and it does not write the alternative
                                text nobody wrote. Those remain decisions about your content.{" "}
                                <BlogHighlight>Why it matters:</BlogHighlight> the sales pitch is that it removes the
                                need for the work on this page. It does not, and the failures it leaves behind are the
                                ones in the data.
                            </Term>
                        </div>

                        <section className="my-14 rounded-2xl bg-charcoal p-8 text-white">
                            <h2 className="mb-3 font-serif text-3xl">Where does your own site sit?</h2>
                            <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                                Definitions are the easy half. Our{" "}
                                <Link href="/free-audit" className="font-semibold text-orange-300 underline underline-offset-4">
                                    free technical audit
                                </Link>{" "}
                                scans a URL you give it and reports what it finds, with no signup and no diagnosis
                                invented to sell you something. If you would rather a person walked through it with
                                you, that offer stands too.
                            </p>
                            <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                                Book a 30-minute review <ArrowRight className="h-4 w-4" />
                            </CalModalButton>
                        </section>

                        <h2 className="mb-6 mt-16 font-serif text-3xl text-charcoal">Frequently asked questions</h2>
                        <FAQAccordion faqs={postFAQs} />

                        <p className="mt-10 leading-relaxed text-stone-600">
                            For the measured picture behind the figures quoted here, read{" "}
                            <Link href="/blog/web-accessibility-statistics-2026" className="font-medium text-cognac hover:underline">
                                what the 2026 accessibility data actually shows
                            </Link>
                            . For the equivalent glossary covering AI search, rendering and performance, read the{" "}
                            <Link href="/blog/aeo-web-performance-glossary" className="font-medium text-cognac hover:underline">
                                AEO and web performance glossary
                            </Link>
                            .
                        </p>

                        <TopicUpLink postId={postId} />

                        <RelatedPosts currentPostId={postId} />
                    </div>
                </section>
            </article>

            <Footer />
        </main>
    );
}
