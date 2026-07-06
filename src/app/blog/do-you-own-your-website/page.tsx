import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Key, Globe, Server, Code2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor, InsightBox, ComparisonGrid } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const ownershipFAQs = blogPosts.find(p => p.id === "do-you-own-your-website")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: { absolute: "Do You Own Your Website? Code, Domain & Hosting (2026)" },
    description: "By default, copyright law says your developer owns the website you paid for. The four things you must control and how we transfer full ownership in writing.",
    alternates: {
        canonical: "/blog/do-you-own-your-website",
    },
    keywords: [
        "do I own my website",
        "who owns my website",
        "website ownership rights",
        "developer holding website hostage",
        "do I own my website if agency builds it",
        "who owns the code domain hosting",
        "website source code ownership",
        "what happens if my web developer disappears",
        "own your website code",
        "website ownership small business 2026"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Do You Actually Own Your Website? (2026)",
        description: "By default, your developer owns the website you paid for, not you. The four things you must control, the horror stories, and how PandaCodeGen transfers full ownership in writing.",
        type: "article",
        publishedTime: "2026-06-03",
        modifiedTime: "2026-06-03",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/do-you-own-your-website",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Do You Actually Own Your Website? (2026)",
        description: "By default, your developer owns the website you paid for, not you. The four things you must control, and how to never be held hostage.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/do-you-own-your-website#article",
            "headline": "Do You Actually Own Your Website? (And What Happens If Your Developer Disappears)",
            "description": "Under default copyright law, the developer who builds your website owns the code unless the contract transfers it to you. Website ownership is four separate things: source code, domain, hosting, and CMS. Here is what each means, the hostage horror stories that happen when you do not control them, and how PandaCodeGen transfers all four in writing.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-06-03T00:00:00-05:00",
            "dateModified": "2026-06-03T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "alternateName": "Panda Code Gen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/do-you-own-your-website" },
            "articleSection": "Guide",
            "keywords": ["do I own my website", "who owns my website", "website ownership rights", "developer holding website hostage", "website source code ownership", "own your website code"],
            "wordCount": 2400,
            "timeRequired": "PT9M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Website ownership" },
                { "@type": "Thing", "name": "Source code ownership" },
                { "@type": "Thing", "name": "Domain name ownership" },
                { "@type": "Thing", "name": "Web hosting control" },
                { "@type": "Thing", "name": "Content management system" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Northwest Registered Agent: Who Legally Owns My Website", "url": "https://www.northwestregisteredagent.com/websites/website-ownership" },
                { "@type": "CreativeWork", "name": "thesitewizard: Reclaim Your Website From a Bad Web Designer or Host", "url": "https://www.thesitewizard.com/domain/reclaim-website-from-bad-web-designer-host.shtml" },
                { "@type": "CreativeWork", "name": "Charmlab: Is Your Web Developer Holding You Hostage", "url": "https://charmlab.com/is-your-web-developer-holding-your-website-hostage/" },
                { "@type": "CreativeWork", "name": "U.S. Copyright Office: Works Made for Hire", "url": "https://www.copyright.gov/circs/circ30.pdf" },
                { "@type": "CreativeWork", "name": "Vercel: Transferring projects and ownership", "url": "https://vercel.com/docs/accounts/team-members-and-roles" },
                { "@type": "CreativeWork", "name": "Sanity: Roles and access management", "url": "https://www.sanity.io/docs/roles" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/do-you-own-your-website#faq",
            "mainEntity": ownershipFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/do-you-own-your-website#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Do You Own Your Website?", "item": "https://www.pandacodegen.com/blog/do-you-own-your-website" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/do-you-own-your-website#webpage",
            "url": "https://www.pandacodegen.com/blog/do-you-own-your-website",
            "name": "Do You Actually Own Your Website? The Truth About Code, Domain & Hosting",
            "description": "The four parts of website ownership, the developer-hostage horror stories, and how a trustworthy builder transfers all of it in writing.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-06-03T00:00:00-05:00",
            "dateModified": "2026-06-03T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/do-you-own-your-website#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "email": "info@pandacodegen.com",
            "description": "PandaCodeGen builds custom Next.js websites that clients fully own: code, domain, hosting, and CMS all in the client's own accounts. 90+ Google PageSpeed guaranteed in writing or 100 percent refund.",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen"
            ]
        }
    ]
};

export default function DoYouOwnYourWebsitePage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>
            <Header />

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "Do You Own Your Website?" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold mb-4">
                            <Key className="w-3 h-3" /> Guide
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            Do You Actually Own Your Website?{" "}
                            <span className="font-serif italic text-cognac">And what happens if your developer disappears.</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            Most business owners assume that because they paid for their website, they own it. By default, copyright law disagrees: whoever writes the code owns it unless the contract says otherwise. Ownership is not one thing, it is four separate things, and you can be trapped on any one of them. Here is what each part means, the hostage situations that happen when you do not control them, and exactly how a trustworthy builder hands over all of it.
                        </p>
                        <BlogAuthor
                            date="June 3, 2026"
                            readTime="9 min read"
                            bio="Hassan builds custom Next.js websites that clients fully own from day one: code, domain, hosting, and CMS, all registered in the client's own accounts. Access you can revoke at any time. 90+ Google PageSpeed guaranteed in writing or 100 percent refund."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    {/* Executive Summary / Short Answer */}
                    <div className="mb-10 p-6 bg-amber-50 border border-amber-200 rounded-2xl" data-speakable="true">
                        <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">The Short Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed mb-3">
                            You only truly own your website if you control all four of these, in your own accounts:
                        </p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span><strong>The source code</strong> &mdash; the actual files your site is built from, transferred to you in writing.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span><strong>The domain</strong> &mdash; registered in your name and email, never the developer's.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span><strong>The hosting</strong> &mdash; your own account, so you can take the live site anywhere.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" /> <span><strong>The CMS</strong> &mdash; where you edit content, with you as the administrator who can remove anyone.</span></li>
                        </ul>
                        <p className="text-sm text-stone-700 leading-relaxed mt-3">
                            If a developer controls even one of these, they can hold the others hostage. The fix is to ask one direct question before you hire anyone, and to get the answer in writing.
                        </p>
                    </div>

                    <BlogText>
                        Here is the question almost nobody asks before paying for a website: if you and your developer parted ways tomorrow, could you take your site and walk? For a lot of business owners, the honest answer is no, and they only find out at the worst possible moment.
                    </BlogText>
                    <BlogText>
                        This is not a rare horror story. It happens every day, usually to the most trusting owners. The reason is a gap between what feels true (I paid for it, so it is mine) and what is legally true (by default, the person who created it owns it). Let us close that gap, because the fix is simple once you know what to look for.
                    </BlogText>

                    <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen builds custom <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">Next.js websites</Link> that you own completely from day one. Your domain, hosting, and services sit in your own accounts. You get the full code. We are the agency you can fire without losing anything, which is exactly why our clients never have to. Fixed pricing from $1,500. 90+ PageSpeed in writing or a full refund.
                        </p>
                    </div>

                    <BlogHeader id="default-truth">The Uncomfortable Default: You Probably Do Not Own It</BlogHeader>
                    <BlogText>
                        Under copyright law, the moment someone writes code, design, or content, they own it. Paying an invoice does not automatically transfer that ownership to you. Unless your contract specifically says the source code, design files, and assets become yours, the developer or agency that built your site legally owns them. That is the default, and most small business contracts are silent on it.
                    </BlogText>
                    <BlogText>
                        What does that mean in practice? If you try to leave, you may discover the agency owns the website, not you. Your site can be taken offline. You can lose access to your files. Or the agency can simply refuse and hold everything until you pay to get it back. None of that requires bad intentions on day one. It only requires a contract that never spelled ownership out.
                    </BlogText>

                    <InsightBox variant="danger">
                        If a developer controls even one of the four parts &mdash; code, domain, hosting, or CMS &mdash; they can hold the others hostage. None of it requires bad intentions on day one; it only requires a contract that never spelled ownership out.
                    </InsightBox>

                    <BlogHeader id="four-things">Ownership Is Four Things, Not One</BlogHeader>
                    <BlogText>
                        The biggest mistake is thinking of &quot;my website&quot; as a single object you either have or do not have. It is four separate things, each held in a different place, and you can be locked out of any one of them while holding the rest.
                    </BlogText>

                    <div className="my-8 grid gap-4">
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><Code2 className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">1. The source code</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">The actual files your site runs on. If you do not have these, a beautiful site can still leave you with nothing the day you switch developers, because you would have to rebuild from scratch. You want the full code, transferred to you in writing.</p>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><Globe className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">2. The domain name</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">Your web address. It is easier for a developer to add your domain to their own account than to set you up properly, and if it lives in their account, they control it. Register it in your own name and email. This is the single most common hostage point.</p>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><Server className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">3. The hosting</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">Where the live site actually runs. If hosting sits on the agency's proprietary platform and you are only renting a spot, you cannot take your working site with you when you leave. Your own hosting account means you can move anytime.</p>
                        </div>
                        <div className="p-5 bg-white border border-stone-200 rounded-xl">
                            <div className="flex items-center gap-2 mb-2"><Key className="w-5 h-5 text-cognac shrink-0" /><p className="font-bold text-charcoal">4. The CMS (how you edit content)</p></div>
                            <p className="text-sm text-stone-700 leading-relaxed">Some builders lock you into paying them for every word change, or build on a proprietary system so you can take the content but not the site. You want to be the administrator of an open system, able to edit freely and remove anyone, including the agency.</p>
                        </div>
                    </div>

                    <ComparisonGrid
                        left={{
                            label: "Renting (platform / agency)",
                            items: [
                                "Hosting sits on the agency's proprietary platform; you only rent a spot",
                                "Domain registered in the developer's account, so they control it",
                                "Built on a proprietary CMS, so you can export text but not the working site",
                                "No source files, so leaving means rebuilding from scratch",
                            ],
                        }}
                        right={{
                            label: "Owning (custom code)",
                            items: [
                                "Hosting in your own account, so you can move the live site anytime",
                                "Domain registered in your own name and email",
                                "You are the administrator of an open CMS and can remove anyone",
                                "Full source code transferred to you in writing",
                            ],
                        }}
                    />

                    <BlogHeader id="horror-stories">What It Looks Like When You Do Not Own It</BlogHeader>
                    <BlogText>
                        These are not hypotheticals. They are the patterns that show up again and again when owners go looking for help reclaiming a site.
                    </BlogText>

                    <BlogQuote>
                        A successful business owner discovered she did not own her own domain. When she asked her former developer to transfer it back, he demanded a 5,000 dollar &quot;ransom&quot; to release it.
                    </BlogQuote>
                    <p className="text-xs text-stone-500 mt-1 mb-4">Documented case, web developer hostage situations &middot; <a href="https://www.thesitewizard.com/domain/reclaim-website-from-bad-web-designer-host.shtml" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify source &rarr;</a></p>

                    <BlogList items={[
                        "The domain trap: the developer registered your company domain under their own account, so they control it permanently. Getting it back can mean negotiating, paying, or hiring a lawyer.",
                        "The hosting trap: you are the only one without your hosting login, so you cannot update or move your own website without going through the developer.",
                        "The code trap: you have a live site you love, but no source files, so leaving means rebuilding the whole thing from zero.",
                        "The CMS trap: the site is built on a proprietary platform, so you can export your text but not the actual working website."
                    ]} />

                    <BlogHighlight>
                        The common thread in every one of these is the same: ownership was never written down. The fix is never a lawsuit after the fact. It is a clear written agreement before you start.
                    </BlogHighlight>

                    <BlogHeader id="how-pandacodegen">How PandaCodeGen Hands Over All Four</BlogHeader>
                    <BlogText>
                        We built our handover process to be the opposite of every story above. The simplest way to say it: we are an agency you could fire at any moment without losing a thing. Here is exactly what that means for each of the four parts.
                    </BlogText>

                    <div className="my-8 space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                            <Code2 className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
                            <p className="text-sm text-stone-700 leading-relaxed"><strong>The code is yours.</strong> You get the full source code and you own it completely. You can take it anywhere. We also keep a private backup, not to hold anything over you, but so that if you ever delete your files or lose access, even years after we have stopped working together, you can ask and we will hand it right back. The backup is insurance for you, never leverage against you.</p>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                            <Globe className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
                            <p className="text-sm text-stone-700 leading-relaxed"><strong>The domain is yours from day one.</strong> We always encourage owners to register the domain on their own account and email, or we help set one up in your name for exactly this purpose. You hold it. We just get access to manage it, access you can revoke whenever you want.</p>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                            <Server className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
                            <p className="text-sm text-stone-700 leading-relaxed"><strong>The hosting and services live in your accounts.</strong> Vercel for hosting, plus services like Sanity, Resend, and Supabase, set up under your own logins. Almost every business already has an email like info@yourbusiness.com that they own, and we set everything up on that, so the accounts are tied to your company, not to us. With one client we ran their email service through their own info@ address from day one, so they owned it immediately. The upside for you is privacy and control: your billing, your data, and your company details stay on your side. We get access to manage things, access you can revoke anytime, and nothing sensitive is locked inside our accounts. We can host on our account during the build if it is easier, then transfer everything to you whenever you ask, no friction.</p>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                            <Key className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
                            <p className="text-sm text-stone-700 leading-relaxed"><strong>You are the CMS administrator.</strong> We build on Sanity and make you the administrator, so you can remove us at any point. Sanity setup is a little technical, so we handle it, then hand you the keys. Edit your own content freely. Small in-house tweaks like a logo color change are handled free of charge. You are never charged to fix a typo.</p>
                        </div>
                    </div>

                    <BlogText>
                        On top of the four, two more things protect you. Everything is defined in a signed scope of work before any payment changes hands, so you know exactly what we are committing to deliver, and you have it in writing. And we sit down with whoever else is on your side, your marketing, finance, or operations people, so the result fits the business you actually run, not just the brief on paper.
                    </BlogText>

                    <BlogQuote>
                        The test of a good web partner is not whether you would ever leave. It is whether you could. If the answer is yes, you never have to.
                    </BlogQuote>

                    <BlogHeader id="what-to-ask">The One Question to Ask Before You Hire Anyone</BlogHeader>
                    <BlogText>
                        You do not need to become a technical expert to protect yourself. You need one direct question, and you need the answer in writing:
                    </BlogText>
                    <BlogHighlight>
                        &quot;Will all source code, design files, the domain, and hosting credentials be in my own accounts and transferred to me on final payment, and will you put that in the contract?&quot;
                    </BlogHighlight>
                    <BlogText>
                        A trustworthy builder answers yes without hesitation and happily writes it into the scope of work. If the answer is vague, or if they want the domain or hosting under their account &quot;to make it easier,&quot; treat that as the warning sign it is. The whole point of ownership is that it survives the relationship ending. Get it in writing while everyone is still happy.
                    </BlogText>
                    <BlogText>
                        If you want to see how this looks in practice, our <Link href="/work/panda-patches" className="text-cognac hover:underline font-medium">Panda Patches case study</Link> is a store we migrated off WordPress to a custom build the client fully owns, our <Link href="/ai-info/pricing-and-guarantees" className="text-cognac hover:underline font-medium">Pricing &amp; Guarantees reference</Link> lays out the fixed scope and refund mechanics, and the <Link href="/blog/cheap-web-developer" className="text-cognac hover:underline font-medium">honest cost of a cheap web developer</Link> covers what corners usually get cut at the bottom of the market, ownership being one of the first.
                    </BlogText>

                    {/* Mid CTA */}
                    <div className="my-10 p-6 bg-charcoal rounded-2xl text-center">
                        <p className="text-white font-bold text-lg mb-2">Want a website you actually own?</p>
                        <p className="text-stone-300 text-sm mb-5 max-w-lg mx-auto">Code, domain, hosting, and CMS in your accounts. In writing, before you pay anything. Tell me your platform and rough page count and I will give you a real fixed number.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-semibold rounded-full hover:bg-amber-700 transition-colors">
                            Book a 15-minute call with Hassan <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 p-6 bg-white border border-cognac/30 rounded-2xl flex items-start gap-3">
                        <ShieldCheck className="w-6 h-6 text-cognac shrink-0 mt-1" />
                        <div>
                            <p className="font-bold text-charcoal mb-1">The agency you could fire without losing anything.</p>
                            <p className="text-sm text-stone-700 leading-relaxed">That is the standard PandaCodeGen builds to. You own the code, the domain, the hosting, and the CMS, all in your name, all in writing. <Link href="/contact" className="text-cognac hover:underline font-medium">Drop your current site and what you want built</Link> and I will reply personally.</p>
                        </div>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    <FAQAccordion faqs={ownershipFAQs} />

                </article>
            </section>

            <RelatedPosts currentPostId="do-you-own-your-website" category="Guide" />
            <Footer />
        </main>
    );
}
