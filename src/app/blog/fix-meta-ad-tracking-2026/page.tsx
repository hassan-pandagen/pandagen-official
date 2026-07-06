import { ArrowLeft, ArrowRight, Radar } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogAuthor, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "fix-meta-ad-tracking-2026")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const FeatureVisual = lazyLoad(() => import("@/components/blog/SignalLeakAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Facebook Ad Tracking Not Working? Fix It (2026)",
    description: "Pixel not firing, iOS killed your tracking, Meta under-reporting sales? Here is how to diagnose broken Facebook ad tracking and fix it with server-side CAPI.",
    alternates: {
        canonical: "/blog/fix-meta-ad-tracking-2026",
    },
    keywords: [
        "facebook ad tracking not working",
        "meta pixel not firing 2026",
        "facebook conversions not tracking",
        "facebook reporting fewer sales than shopify",
        "ios 14 conversion tracking fix",
        "meta conversions api server side tracking",
        "event match quality low fix",
        "fbp fbc tracking facebook",
        "shopify checkout.liquid tracking broke"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Facebook Ad Tracking Not Working? Fix It (2026)",
        description: "Pixel not firing, iOS killed your tracking, Meta under-reporting sales? Here is how to diagnose broken Facebook ad tracking and fix it with server-side CAPI.",
        type: "article",
        publishedTime: "2026-07-06",
        modifiedTime: "2026-07-06",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/fix-meta-ad-tracking-2026",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Facebook Ad Tracking Not Working? Fix It (2026)",
        description: "Pixel not firing, iOS killed your tracking, Meta under-reporting sales? Here is how to diagnose broken Facebook ad tracking and fix it with server-side CAPI.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/fix-meta-ad-tracking-2026#article",
            "headline": "Facebook Ad Tracking Not Working? Diagnose and Fix It (2026)",
            "description": "Pixel not firing, iOS killed your tracking, Meta under-reporting sales? How to diagnose broken Facebook ad tracking and fix it with server-side CAPI.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-07-06T00:00:00-05:00",
            "dateModified": "2026-07-06T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/fix-meta-ad-tracking-2026" },
            "articleSection": "Ad Tracking",
            "keywords": ["facebook ad tracking not working", "meta pixel not firing", "facebook conversions not tracking", "meta conversions api", "event match quality"],
            "wordCount": 2100,
            "timeRequired": "PT9M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Meta Conversions API" },
                { "@type": "Thing", "name": "Facebook Pixel" },
                { "@type": "Thing", "name": "Server-Side Tracking" },
                { "@type": "Thing", "name": "Event Match Quality" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            }
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/fix-meta-ad-tracking-2026#faq",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/fix-meta-ad-tracking-2026#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Fix Meta Ad Tracking", "item": "https://www.pandacodegen.com/blog/fix-meta-ad-tracking-2026" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/fix-meta-ad-tracking-2026#webpage",
            "url": "https://www.pandacodegen.com/blog/fix-meta-ad-tracking-2026",
            "name": "Facebook Ad Tracking Not Working? Diagnose and Fix It (2026)",
            "description": "Pixel not firing, iOS killed your tracking, Meta under-reporting sales? How to diagnose broken Facebook ad tracking and fix it with server-side CAPI.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-07-06T00:00:00-05:00",
            "dateModified": "2026-07-06T00:00:00-05:00",
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "description": "PandaCodeGen builds custom Next.js websites with server-side ad tracking (Meta CAPI) built in. Sites load under 1 second and cost about $0 a month to host.",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen"
            ]
        }
    ]
};

export default function FixMetaAdTrackingPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Header />

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "Fix Meta Ad Tracking" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-4">
                            <Radar className="w-3 h-3" /> Ad Tracking · Guide
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            Your Facebook Ad Tracking Isn&apos;t Broken by Accident.{" "}
                            <span className="font-serif italic text-cognac">Here&apos;s How to Diagnose and Fix It.</span>
                        </h1>
                        <p className="text-lg text-stone-500 leading-relaxed mb-6">
                            iOS opt-outs, ad blockers, Safari&apos;s 7-day cookie cap, and Shopify&apos;s checkout changes quietly eat your conversion signal. Meta reports a worse ROAS than you actually got, then optimizes toward the wrong people. Here is the diagnosis, and the server-side fix.
                        </p>
                        <BlogAuthor
                            date="Jul 6, 2026"
                            readTime="9 min read"
                            bio="Hassan builds custom Next.js sites with server-side Meta CAPI tracking wired in. On Panda Patches, the store we build and run, that setup lifted credited Lead conversions ~10% and pushed Lead Event Match Quality to 9.0."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="mb-12">
                        <FeatureVisual />
                    </div>

                    {/* Executive Summary */}
                    <div
                        className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12"
                        data-speakable="true"
                    >
                        <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Key Facts</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                Browser pixel tracking loses a large share of conversions to iOS App Tracking Transparency, cookie loss, Safari&apos;s 7-day cap, ad blockers, and Shopify&apos;s checkout.liquid removal
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                Meta can&apos;t credit sales it can&apos;t see, so it under-reports ROAS and optimizes on partial data
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                The fix is server-side tracking through the Meta Conversions API: events sent from your server with strong identifiers, deduplicated against the pixel by a shared event ID
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                On Panda Patches, the store we build and run, this setup lifted credited Lead conversions about 10% and pushed Lead Event Match Quality to roughly 9.0/10
                            </li>
                        </ul>
                    </div>

                    {/* Article body */}
                    <div className="space-y-8">

                        <BlogText>
                            A while back, the Meta ads for <BlogHighlight>Panda Patches</BlogHighlight> looked like they were slipping. Same creative, same audiences, but the reported numbers were softer than the bank account suggested. The ads weren&apos;t the problem. The tracking was. Once we wired up proper server-side tracking with the right identifiers and Meta&apos;s Conversions API, Lead conversions Meta could actually credit went up about <BlogHighlight>10%</BlogHighlight>, and Event Match Quality for the Lead event reached roughly <BlogHighlight>9.0 out of 10</BlogHighlight>. Panda Patches is a custom Next.js store we build and run, and it puts real paid traffic on the exact stack described below, so these are first-party numbers, not a case study we bought.
                        </BlogText>

                        <BlogText>
                            If your ads suddenly look worse than they used to, read this before you touch a single budget. Most of the time the campaign is fine. The pipe carrying the data back to Meta is leaking.
                        </BlogText>

                        <BlogHeader>Why is my Facebook ad tracking not working all of a sudden?</BlogHeader>

                        <BlogText>
                            Because the old way of tracking, a JavaScript pixel running in the visitor&apos;s browser, depends on things that browsers and Apple have spent five years taking away. The pixel still loads, so it <em>looks</em> fine in a quick check, but a growing slice of your customers are invisible to it.
                        </BlogText>

                        <BlogList items={[
                            "iOS App Tracking Transparency (ATT). Since iOS 14.5 (2021), Apple shows the \"Ask App Not to Track\" prompt, and the large majority of users tap it. When an opted-out Facebook or Instagram user lands on your site, Meta's ability to connect the visit to their account is heavily restricted. Industry estimates put the visibility loss from this alone at 30 to 50 percent.",
                            "Third-party cookies are gone or blocked. The pixel historically leaned on cookies to recognize people. Safari and Firefox block third-party cookies outright. No cookie, no match.",
                            "Safari's 7-day cookie cap (ITP). Safari caps cookies set by JavaScript at seven days. Someone clicks your ad Monday and buys the following week? Safari already wiped the cookie that linked the sale to the click. The purchase shows up as \"direct\" and your ad gets no credit.",
                            "Ad blockers and consent banners. Ad blockers stop the pixel's network call from ever reaching Meta. Consent banners hold the pixel back until the visitor clicks accept, and plenty never do. This is why a pixel can fire perfectly in incognito and still miss real customers.",
                            "Shopify's checkout.liquid deprecation. Shopify removed support for checkout.liquid and custom scripts on the Thank You and Order Status pages (Plus stores hit the deadline August 28, 2025; other plans follow in 2026). Any conversion tracking living on those pages stopped firing overnight.",
                        ]} />

                        <BlogText>
                            None of these are your campaign&apos;s fault. They&apos;re the environment your pixel runs in, and that environment keeps getting more hostile.
                        </BlogText>

                        <BlogHeader>How can I tell my tracking is actually broken (and not just my ads underperforming)?</BlogHeader>

                        <BlogText>
                            You look for the gap between what Meta says happened and what really happened. Tracking problems leave fingerprints. Run through this checklist:
                        </BlogText>

                        <BlogList items={[
                            "Meta reports fewer sales than your store. Compare Meta's reported purchases to the orders in your store admin for the same window. A persistent shortfall (Meta low) is the classic under-reporting signature.",
                            "Your Event Match Quality (EMQ) is low. Open Events Manager and check the EMQ score on your key events. Below 6 is weak. A Purchase or Lead event should sit in the 7 to 10 range.",
                            "Events Manager shows lots of unmatched or browser-only events. Important events arriving with thin data is signal you're paying for but Meta can't use.",
                            "Reported ROAS dropped without a real change. Same creative and audiences, suddenly worse numbers, usually lines up with a platform change (an iOS update, a checkout migration), not your campaign.",
                            "Pixel works in incognito but misses real traffic. That points to ad blockers or a consent banner suppressing the pixel for normal visitors.",
                            "Test Events shows less than reality. Open Events Manager's Test Events tool, complete a purchase or lead on your live site, and watch what arrives. If your own test conversion shows up thin or not at all, so do your customers'.",
                            "You're relying on the pixel alone. If you've never set up server-side tracking, assume you're leaking. In 2026, pixel-only is the broken default.",
                        ]} />

                        <BlogText>
                            The one to fixate on is the first: <BlogHighlight>the discrepancy between Meta-reported orders and real orders</BlogHighlight>. When we built the live tracking dashboard for Panda Patches, it laid this bare. Only about half the sales were reaching Meta with their full story attached. Meta knew the other half happened, but couldn&apos;t connect them to an ad, so it couldn&apos;t learn from them. Meta optimizes against the data it can see. Feed it half the picture and it spends your budget chasing the wrong people.
                        </BlogText>

                        <BlogHeader>What&apos;s the actual difference between the pixel and server-side tracking?</BlogHeader>

                        <BlogText>
                            The pixel runs in the customer&apos;s browser and is at the mercy of everything that browser allows. Server-side tracking sends the event from <em>your</em> server straight to Meta, where Apple, ad blockers, and cookie rules can&apos;t reach it. <BlogHighlight>Apple cannot block a server-to-server call.</BlogHighlight> You don&apos;t pick one; you run both and let Meta deduplicate.
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                            <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                            <table className="w-full border-collapse text-sm min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal"></th>
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Pixel only (browser)</th>
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Pixel + server-side (CAPI)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Survives iOS ATT</td>
                                        <td data-label="Pixel only" className="border border-stone-300 px-4 py-3 text-stone-700">No, opted-out users are largely invisible</td>
                                        <td data-label="Pixel + CAPI" className="border border-stone-300 px-4 py-3 text-stone-700">Yes, the server event still sends</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Survives ad blockers</td>
                                        <td data-label="Pixel only" className="border border-stone-300 px-4 py-3 text-stone-700">No, the network call gets stopped</td>
                                        <td data-label="Pixel + CAPI" className="border border-stone-300 px-4 py-3 text-stone-700">Yes, the call comes from your server</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Survives Safari 7-day cap</td>
                                        <td data-label="Pixel only" className="border border-stone-300 px-4 py-3 text-stone-700">No, delayed conversions get lost</td>
                                        <td data-label="Pixel + CAPI" className="border border-stone-300 px-4 py-3 text-stone-700">Yes, server events aren&apos;t cookie-dependent</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Match quality (EMQ)</td>
                                        <td data-label="Pixel only" className="border border-stone-300 px-4 py-3 text-stone-700">Typically low, thin identifiers</td>
                                        <td data-label="Pixel + CAPI" className="border border-stone-300 px-4 py-3 text-stone-700">Higher: email, phone, fbp, fbc, IP, user agent</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Optimization signal to Meta</td>
                                        <td data-label="Pixel only" className="border border-stone-300 px-4 py-3 text-stone-700">Partial, Meta learns from a fraction of sales</td>
                                        <td data-label="Pixel + CAPI" className="border border-stone-300 px-4 py-3 text-stone-700">Fuller, Meta credits and learns from far more</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            The pixel is a guest in someone else&apos;s browser. Server-side tracking is a message you send from your own house.
                        </BlogText>

                        <BlogHeader>How does server-side tracking actually fix it?</BlogHeader>

                        <BlogText>
                            It gives Meta a clean, complete copy of every conversion, with enough detail to confidently match it to a real person, sent from a place nothing can block. Here&apos;s what &quot;done right&quot; looks like:
                        </BlogText>

                        <BlogList items={[
                            "Send the event from your server, not just the browser. When a customer completes a purchase or submits a lead, your server fires the event to Meta's Conversions API directly. No browser, no cookie dependency, no ad blocker in the path.",
                            "Capture the identifiers Meta needs to match: fbp (the Facebook browser ID), fbc (the click ID from the ad URL), hashed email and phone (email is the single strongest identifier), plus IP address and user agent captured server-side. For Google, the equivalent is gclid plus enhanced conversions.",
                            "Hash the personal data correctly. Email and phone run through SHA-256 before they leave your server, lowercased and trimmed, phone with country code, exactly to Meta's spec. Meta never sees raw data, only hashes.",
                            "Deduplicate with a shared event ID. The pixel and the server send the same purchase with the same eventID; Meta counts it once. This is the step people skip, and it's why sloppy setups double-count.",
                            "Watch EMQ climb. On Panda Patches, the Lead event reached about 9.0 out of 10, and Events Manager reported roughly 10% more Lead conversions than the pixel had caught alone. That's optimization signal that was on the floor.",
                        ]} />

                        <BlogText>
                            Email plus fbc alone can move an EMQ score from the low 3s into the 7s. If you want the deeper breakdown of what this build involves and costs, we wrote it up in <Link href="/blog/meta-conversions-api-setup-cost" className="text-cognac underline underline-offset-2 hover:text-amber-700">Meta Conversions API setup cost</Link>. If your symptom is specifically &quot;spending more, seeing fewer orders,&quot; that framing is in <Link href="/blog/spending-more-on-ads-fewer-orders-tracking" className="text-cognac underline underline-offset-2 hover:text-amber-700">spending more on ads, fewer tracked orders</Link>.
                        </BlogText>

                        {/* Mid CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-lg">
                            <p className="text-sm font-bold text-charcoal mb-2">Want to know how much signal your store is leaking?</p>
                            <p className="text-sm text-stone-500 mb-4">
                                Drop your store URL when you book. We&apos;ll compare your Meta-reported orders to reality, check your EMQ live on the call, and tell you straight whether server-side tracking is worth it for your spend.
                            </p>
                            <CalModalButton className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-white font-semibold rounded-full text-sm hover:bg-stone-800 transition-all">
                                Get Free Tracking Audit <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                        </div>

                        <BlogHeader>What does &quot;good&quot; tracking look like once it&apos;s fixed?</BlogHeader>

                        <BlogText>
                            Good tracking is boring, in the best way. The numbers stop arguing with each other.
                        </BlogText>

                        <BlogList items={[
                            "Meta-reported orders line up closely with your real orders. The discrepancy shrinks to a small, explainable gap.",
                            "Event Match Quality sits in the 7 to 10 range on your money events (Purchase, Lead).",
                            "Events Manager shows rich, matched events with identifiers attached, not thin browser-only pings.",
                            "Your reported ROAS reflects reality, so you can trust it when deciding where to scale.",
                            "Platform changes stop breaking you. The next iOS update or checkout migration doesn't wipe a third of your data, because your conversion source lives on your server.",
                        ]} />

                        <BlogText>
                            The payoff isn&apos;t just cleaner dashboards. When Meta can see the full set of conversions, it optimizes toward people who actually buy. Better signal in, better spend out.
                        </BlogText>

                        <BlogHeader>Should I use a third-party tracking app or build it into the site?</BlogHeader>

                        <InsightBox variant="info" label="Quick Answer">
                            An app is faster to switch on and a recurring cost forever. A built-in setup is more work up front and then it&apos;s just yours. For a store spending real money on ads every month, owning the pipe usually wins.
                        </InsightBox>

                        <BlogText>
                            Most tracking apps are middleware: a monthly subscription sitting between your store and Meta, and the day you stop paying, your tracking goes with it. You&apos;re renting your own conversion data.
                        </BlogText>

                        <BlogText>
                            PandaCodeGen builds server-side tracking directly into the site, so it&apos;s owned, with no monthly middleware tax. Server-side Meta CAPI is included in our Scale tier ($5K to $10K), and it can be added to an existing site too, it doesn&apos;t require a full rebuild. It&apos;s part of how we do <Link href="/services/ecommerce" className="text-cognac underline underline-offset-2 hover:text-amber-700">e-commerce development</Link> and <Link href="/services/custom-engineering" className="text-cognac underline underline-offset-2 hover:text-amber-700">custom engineering</Link>: the tracking is yours, wired in once, and it doesn&apos;t expire when an invoice does.
                        </BlogText>

                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-12 md:mt-16 text-center">
                        <h3 className="text-xl font-bold text-charcoal mb-2">Stop Optimizing on Half Your Data</h3>
                        <p className="text-stone-500 text-sm mb-6">
                            Free tracking audit. We&apos;ll measure the gap between your real orders and what Meta sees, then quote a fixed price to wire server-side CAPI into your site, owned, no monthly middleware.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                            Get My Free Tracking Audit <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}

                    <RelatedPosts currentPostId="fix-meta-ad-tracking-2026" category="Guide" />

                </div>
            </section>

            <Footer />
        </main>
    );
}
