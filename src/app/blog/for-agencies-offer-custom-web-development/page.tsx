import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const agencyFAQs = blogPosts.find(p => p.id === 'for-agencies-offer-custom-web-development')?.faqs ?? [];

const RelatedPosts = dynamic(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = dynamic(() => import("@/components/blog/PageSpeedAnimation"));

export const metadata: Metadata = {
    title: "For Agencies: How to Offer Custom Web Development Without Hiring a Dev Team | PandaCodeGen",
    description: "Your client wants a custom site. No dev team? Here's how 40+ agencies deliver premium custom builds under their own brand — without touching a line of code.",
    alternates: {
        canonical: '/blog/for-agencies-offer-custom-web-development',
    },
    openGraph: {
        title: "For Agencies: How to Offer Custom Web Development Without Hiring a Dev Team",
        description: "Your client wants a custom-built website. You don't have a dev team. Here's how 40+ agencies deliver premium custom builds without touching a line of code.",
        type: "article",
        publishedTime: "2026-03-06",
        authors: ["Hassan"],
        url: "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "For Agencies: How to Offer Custom Web Development Without Hiring a Dev Team",
        description: "Your client wants a custom-built website. You don't have a dev team. Here's how 40+ agencies deliver it.",
    },
    keywords: ["white label web development", "outsource web development for agencies", "offer custom web development without dev team", "white label nextjs", "agency web development partner"],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development#article",
            "headline": "For Agencies: How to Offer Custom Web Development Without Hiring a Dev Team",
            "description": "Your client wants a custom-built website. You don't have a dev team. Here's how 40+ agencies deliver premium custom builds under their own brand.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-03-06",
            "dateModified": "2026-03-06",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Lead Full-Stack Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development" },
            "articleSection": "Agency",
            "keywords": ["white label web development", "outsource web development for agencies", "offer custom web development without dev team", "white label nextjs", "agency web development partner"],
            "timeRequired": "PT10M",
            "wordCount": 2200,
            "about": [
                {"@type": "Thing", "name": "White-Label Web Development"},
                {"@type": "Thing", "name": "Agency White-Label Services"},
                {"@type": "Thing", "name": "Custom Web Development for Agencies"},
                {"@type": "SoftwareApplication", "name": "Next.js"}
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Next.js Documentation", "url": "https://nextjs.org/docs" },
                { "@type": "CreativeWork", "name": "Vercel for Agencies", "url": "https://vercel.com/enterprise" },
                { "@type": "CreativeWork", "name": "Sanity CMS for Developers", "url": "https://www.sanity.io/docs" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals", "url": "https://developers.google.com/search/docs/appearance/core-web-vitals" },
                { "@type": "CreativeWork", "name": "Agency Partnerships — PandaCodeGen", "url": "https://www.pandacodegen.com/partners" },
                { "@type": "CreativeWork", "name": "Google Page Experience Documentation", "url": "https://developers.google.com/search/docs/appearance/page-experience" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "For Agencies: Offer Custom Web Dev Without a Dev Team", "item": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development#webpage",
            "url": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development",
            "name": "For Agencies: How to Offer Custom Web Development Without Hiring a Dev Team",
            "description": "Your client wants a custom-built website. You don't have a dev team. Here's how 40+ agencies deliver premium custom builds under their own brand.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-03-06",
            "dateModified": "2026-03-06",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "PandaCodeGen Code",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "sameAs": ["https://twitter.com/pandacodegen", "https://linkedin.com/company/pandagen"],
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "hello@pandacodegen.com" },
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow WordPress sites and expensive templates. We guarantee 95–100/100 Google PageSpeed on every build.",
            "areaServed": "Worldwide",
            "foundingDate": "2023"
        },
        {
            "@type": "HowTo",
            "@id": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development#howto",
            "name": "How to Offer Custom Web Development Through a White-Label Partner",
            "description": "The 5-step white-label workflow agencies use to deliver custom web development under their own brand — without hiring a single developer.",
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Share the Client Brief", "text": "Send your white-label partner the client name, business type, timeline, existing assets, and budget range." },
                { "@type": "HowToStep", "position": 2, "name": "Receive a Fixed-Price Quote", "text": "Get a detailed, fixed-price quote within 48 hours covering scope, delivery milestones, and what you need from the client." },
                { "@type": "HowToStep", "position": 3, "name": "Mark Up and Quote Your Client", "text": "Add your agency margin (typically 25–50% above build cost) and present the project to your client under your own brand." },
                { "@type": "HowToStep", "position": 4, "name": "Partner Builds, You Deliver", "text": "Your dev partner builds the site, you review each milestone, present it as your own work, and handle all client communication." },
                { "@type": "HowToStep", "position": 5, "name": "Launch and Hand Off", "text": "Deliver the live site to your client, receive full CMS documentation, and retain the ongoing client relationship for future work." }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development#faq",
            "mainEntity": agencyFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function ForAgenciesCustomDevPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-32 pb-20">
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-sm px-8 py-10 md:px-14">

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                    />

                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "For Agencies: Offer Custom Dev Without a Dev Team", href: "/blog/for-agencies-offer-custom-web-development" }
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            For Agencies: How to Offer <span className="font-serif italic text-stone-500">Custom Web Development</span> Without Hiring a Dev Team
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            Your client wants a custom-built website. You don&apos;t have a dev team. Here&apos;s how 40+ agencies deliver premium custom builds under their own brand — without touching a line of code.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-stone-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Mar 6, 2026
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                10 min read
                            </div>
                        </div>
                        <BlogAuthor />
                    </div>

                    <div className="mb-12">
                        <PageSpeedAnimation />
                    </div>

                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-12" data-speakable="true">
                        <h3 className="font-bold text-charcoal mb-4">Executive Summary</h3>
                        <BlogList items={[
                            "The white-label model: You sell, we build, your client never knows we exist. NDA-first.",
                            "You keep the client relationship, the ongoing retainer, and 25–50% margin on every project.",
                            "What you can offer: WordPress migrations, custom Next.js sites, e-commerce builds, custom dashboards, GoHighLevel implementations.",
                            "What to look for in a dev partner: Fixed-price quotes, proven case studies, NDA workflow, and a team that meets your deadlines — not theirs."
                        ]} />
                    </div>

                    <div className="space-y-8">

                        <BlogText>
                            You run a marketing agency, a branding studio, or a creative consultancy. You&apos;re great at what you do. Your clients love you.
                        </BlogText>

                        <BlogText>
                            Then a client asks: &quot;Can you also build us a custom website? We don&apos;t want a WordPress template. We want something built specifically for us.&quot;
                        </BlogText>

                        <BlogText>
                            You have four options:
                        </BlogText>

                        <BlogList items={[
                            "Turn down the project (lose the revenue and risk the client finding a full-service agency)",
                            "Hire a freelancer (unpredictable quality, missed deadlines, you own the accountability)",
                            "Hire an in-house developer (expensive, slow to ramp, what happens between projects?)",
                            "Use a white-label development partner (you keep the client, we do the build, everyone wins)"
                        ]} />

                        <BlogText>
                            <BlogHighlight>Option 4 is how 40+ agencies we work with have expanded their service offering without hiring a single developer.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>What Is White-Label Web Development?</BlogHeader>

                        <BlogText>
                            White-label web development means you hire a development agency to build under your brand. The client talks to you. You manage the relationship. We build the product. When it&apos;s delivered, your name is on it.
                        </BlogText>

                        <BlogText>
                            Your client never sees our name in the code, in the deliverables, or on the invoice. As far as they&apos;re concerned, your agency built their website.
                        </BlogText>

                        <BlogText>
                            This isn&apos;t a new concept. Graphic design studios outsource printing. Marketing agencies outsource PPC. PR firms outsource media buying. White-labelling is the default operating model for most service businesses.
                        </BlogText>

                        <BlogText>
                            Web development is one of the last places agencies are still afraid to do it. Usually because of bad experiences with freelancers. The difference is a partner with <BlogHighlight>proven systems, fixed pricing, and case studies you can show clients.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>The Agency Dilemma: Why Most Agencies Turn Down Custom Dev Work</BlogHeader>

                        <BlogText>
                            We&apos;ve spoken to hundreds of agency owners. The same concern comes up repeatedly:
                        </BlogText>

                        <BlogQuote>
                            &quot;I tried outsourcing development once. It was a disaster. The freelancer went quiet for three weeks, delivered something half-finished, and my client blamed me. I swore I&apos;d never do it again.&quot;
                        </BlogQuote>

                        <BlogText>
                            That experience is real. And it comes from using the wrong kind of development partner — individual freelancers with no accountability, unclear scope, and vague timelines.
                        </BlogText>

                        <BlogText>
                            A white-label development agency operates differently:
                        </BlogText>

                        <BlogList items={[
                            "Fixed-price quotes upfront, not hourly billing that balloons",
                            "Defined scope with a written brief before any work starts",
                            "Weekly check-ins and milestone reviews so you always know where the project stands",
                            "NDA signed before any client information is shared",
                            "The same team works your project from start to finish — no handoffs"
                        ]} />

                        <BlogHeader>How Does the White-Label Model Work in Practice?</BlogHeader>

                        <BlogText>
                            Here&apos;s the exact workflow we use with agency partners:
                        </BlogText>

                        <BlogText>
                            <strong>Step 1: You bring us the brief.</strong>
                        </BlogText>

                        <BlogList items={[
                            "Client name, business type, and what they need",
                            "Their timeline and any hard deadlines",
                            "Their existing assets (current site, brand guidelines, content)",
                            "Your proposed budget range (if you have one)"
                        ]} />

                        <BlogText>
                            <strong>Step 2: We give you a fixed-price quote within 48 hours.</strong>
                        </BlogText>

                        <BlogList items={[
                            "Scope of work (what&apos;s included and what&apos;s explicitly not included)",
                            "Fixed price — no hourly billing surprises",
                            "Timeline with delivery milestones",
                            "What you need to provide from the client"
                        ]} />

                        <BlogText>
                            <strong>Step 3: You mark up and quote the client.</strong>
                        </BlogText>

                        <BlogList items={[
                            "Add your margin (typically 25–50% above our cost)",
                            "Add your agency management fee if applicable",
                            "The client signs your contract, not ours — you stay the accountable party"
                        ]} />

                        <BlogText>
                            <strong>Step 4: We build, you deliver.</strong>
                        </BlogText>

                        <BlogList items={[
                            "We build the site to your brief and deliver on the agreed timeline",
                            "You review each milestone before it goes to your client",
                            "You present to the client as your own work",
                            "We handle technical revisions; you handle client communication"
                        ]} />

                        <BlogText>
                            <strong>Step 5: Launch, handoff, ongoing.</strong>
                        </BlogText>

                        <BlogList items={[
                            "You deliver the live site to your client",
                            "We provide full documentation for the client&apos;s CMS",
                            "Future maintenance and updates go through you (you retain the ongoing relationship)",
                            "We remain available as a silent technical resource"
                        ]} />

                        {/* Mid-Article CTA */}
                        <div className="my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Agency owner? Let&apos;s talk about your next project.</p>
                            <p className="text-stone-600 mb-4 text-sm">NDA first. Fixed price. We build under your brand.</p>
                            <Link
                                href="/partners"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all"
                            >
                                View Agency Partnership Details <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <BlogHeader>What Can You Offer Clients Through a White-Label Partner?</BlogHeader>

                        <BlogText>
                            The most common requests agencies get that they can&apos;t fulfil in-house:
                        </BlogText>

                        <BlogText>
                            <strong>1. <a href="/blog/wordpress-killer" className="text-cognac hover:underline">WordPress Migrations</a> to Custom Next.js</strong>
                        </BlogText>

                        <BlogList items={[
                            "Client is frustrated with slow WordPress site, high hosting costs, or constant security issues",
                            "They want the same site rebuilt properly — fast, clean, owned",
                            "You position it as a &quot;performance rebuild&quot; or &quot;platform modernisation&quot;",
                            "Typical project: $8,000–$18,000. Your margin: $2,000–$6,000"
                        ]} />

                        <BlogText>
                            <strong>2. Custom E-Commerce Builds</strong>
                        </BlogText>

                        <BlogList items={[
                            "Client outgrew Shopify templates or WooCommerce and wants a bespoke storefront",
                            "Custom product configurators, pricing calculators, wholesale portals",
                            "Typical project: $12,000–$35,000. Your margin: $3,000–$12,000"
                        ]} />

                        <BlogText>
                            <strong>3. GoHighLevel Implementations</strong>
                        </BlogText>

                        <BlogList items={[
                            "Client is a service business wanting a full CRM + funnel + booking system",
                            "You sell the strategy; we handle the technical build",
                            "Typical project: $5,000–$15,000. Your margin: $1,500–$5,000"
                        ]} />

                        <BlogText>
                            <strong>4. Custom Internal Tools and Dashboards</strong>
                        </BlogText>

                        <BlogList items={[
                            "Client wants to replace Google Sheets / manual processes with a real dashboard",
                            "Order pipelines, attendance trackers, profit calculators, inventory systems",
                            "Typical project: $15,000–$40,000. Your margin: $4,000–$15,000"
                        ]} />

                        <BlogHeader>What Makes a Good White-Label Development Partner?</BlogHeader>

                        <BlogText>
                            Not all development agencies are built for white-label work. Here&apos;s what separates the ones worth working with from the ones that will make you look bad in front of your clients:
                        </BlogText>

                        <BlogList items={[
                            "NDA-first workflow — every engagement begins with a signed NDA. Non-negotiable.",
                            "Fixed-price quotes — you can&apos;t manage your margin on hourly billing",
                            "Proven case studies you can reference — not just portfolio screenshots, but real results with real numbers",
                            "They meet YOUR deadlines — the client&apos;s timeline is your commitment, not theirs",
                            "Direct technical communication available — you need to be able to ask technical questions and get straight answers",
                            "No client contact without your permission — they should never reach out to your client directly"
                        ]} />

                        <BlogText>
                            The red flags that signal a bad partner:
                        </BlogText>

                        <BlogList items={[
                            "Hourly billing with no cap",
                            "Vague scope (&quot;we&apos;ll figure out the details later&quot;)",
                            "No case studies — just portfolio screenshots with no performance data",
                            "They want to communicate with your client directly",
                            "Revision policies that limit changes to 1 or 2 rounds regardless of quality"
                        ]} />

                        <BlogHeader>How Do You Price White-Label Work for Your Clients?</BlogHeader>

                        <BlogText>
                            The standard approach: add 30–50% to our cost and present it as your agency&apos;s project rate.
                        </BlogText>

                        <BlogText>
                            Example: We quote you $10,000 for a custom Next.js site. You quote your client $13,000–$15,000. You pocket the $3,000–$5,000 as agency margin for project management, client communication, and relationship ownership.
                        </BlogText>

                        <BlogText>
                            Some agencies add a separate &quot;project management&quot; line item. Others simply mark up the build. Either approach works as long as your pricing reflects the value you&apos;re delivering — which includes your client relationship, your brand reputation, and your accountability for the outcome.
                        </BlogText>

                        <BlogText>
                            <strong>One important note:</strong> Don&apos;t undersell. When you present a custom Next.js site, you&apos;re selling a premium product — <a href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">100/100 PageSpeed</a>, zero hosting costs, owned code. Position it accordingly. Clients who are serious about their website will pay for quality.
                        </BlogText>

                        <BlogHeader>How Does This Affect Your Agency&apos;s Positioning?</BlogHeader>

                        <BlogText>
                            Adding custom development to your service offering does three things for your agency:
                        </BlogText>

                        <BlogText>
                            <strong>1. You become a full-service shop without the overhead.</strong> Clients who might have gone elsewhere for development can now get everything from you. That&apos;s stickier client relationships and higher lifetime value.
                        </BlogText>

                        <BlogText>
                            <strong>2. You compete for larger briefs.</strong> Bigger clients want agencies that can deliver brand strategy AND implementation. If you can&apos;t build, you&apos;re cut from the shortlist before you get started.
                        </BlogText>

                        <BlogText>
                            <strong>3. You earn margin on the build.</strong> A project you used to turn down now generates $2,000–$15,000 in additional revenue per engagement, with no dev team on your payroll.
                        </BlogText>

                        <BlogQuote>
                            The agencies winning the most in 2026 are full-service by design — but lean by structure. They white-label what they don&apos;t do in-house. They own the client. They keep the margin.
                        </BlogQuote>

                        <BlogHeader>What to Tell Your Client About the Website They&apos;re Getting</BlogHeader>

                        <BlogText>
                            You don&apos;t need to tell clients how the sausage is made. But you should be able to speak confidently about what they&apos;re getting.
                        </BlogText>

                        <BlogList items={[
                            "Custom-coded site — not a template, not a WordPress theme",
                            "100/100 Google PageSpeed — the fastest possible loading experience",
                            "$0/month hosting on Vercel — no recurring infrastructure costs",
                            "They own the code — portable to any developer, not locked into a platform",
                            "Simple content editor — they can edit text and images without developer help",
                            "Zero plugin vulnerabilities — no security patches, no update management"
                        ]} />

                        <BlogText>
                            These aren&apos;t marketing claims. They&apos;re technical specifications we deliver on every project. See the results for yourself in our case studies for{" "}
                            <Link href="/work/mycustompatches" className="text-charcoal font-bold underline hover:text-stone-600 transition-colors">MyCustomPatches</Link>,{" "}
                            <Link href="/work/panda-patches" className="text-charcoal font-bold underline hover:text-stone-600 transition-colors">Panda Patches</Link>, and{" "}
                            <Link href="/work/enterprise-ops" className="text-charcoal font-bold underline hover:text-stone-600 transition-colors">the Enterprise Ops Platform</Link>.
                        </BlogText>

                        <BlogHeader>How to Get Started as a White-Label Agency Partner</BlogHeader>

                        <BlogText>
                            Our agency partnership process starts simple:
                        </BlogText>

                        <BlogList items={[
                            "Tell us about your agency — what you do, typical client size, and what kind of dev work comes up",
                            "We sign an NDA before any project details are shared",
                            "Bring us your next enquiry — we&apos;ll quote it within 48 hours",
                            "You decide if the numbers work. No commitment required.",
                        ]} />

                        <BlogText>
                            Most agency partnerships start with one project and become ongoing. Not because we push for it, but because delivering quality consistently is the best way to build trust.
                        </BlogText>

                        <BlogText>
                            You can see everything about how we work, what we build, and who we&apos;ve built for on our{" "}
                            <Link href="/partners" className="text-charcoal font-bold underline hover:text-stone-600 transition-colors">
                                Agency Partnerships page
                            </Link>. If what you see matches what your clients need, let&apos;s talk.
                        </BlogText>
                    </div>

                    {/* FAQ Section */}
                    {agencyFAQs.length > 0 && <FAQAccordion faqs={agencyFAQs} />}

                    {/* CTA Section */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Bring Us Your Next Client Brief</h3>
                        <p className="text-stone-600 mb-6">
                            NDA-first. Fixed-price quote within 48 hours. We build under your brand. You keep the client and the margin.
                        </p>
                        <Link
                            href="/partners"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all"
                        >
                            View Agency Partnership Details <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Related Posts */}
                    <RelatedPosts currentPostId="for-agencies-offer-custom-web-development" category="Agency" />

                </article>
            </main>
            <Footer />
        </>
    );
}
