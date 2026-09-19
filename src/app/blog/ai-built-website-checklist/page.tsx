import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, ClipboardCheck } from "lucide-react";
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
import type { Metadata } from "next";

export const dynamic = "force-static";

const postId = "ai-built-website-checklist";
const postFAQs = blogPosts.find(p => p.id === postId)?.faqs ?? [];
const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const TITLE = "AI-Built Website Checklist: 8 Practical Checks";
const DESC = "Check enquiries, payments, mobile use and search access on your AI-built website. Eight practical checks, evidence to save and when to repeat them.";
const URL_PATH = `/blog/${postId}`;
const CANONICAL = `https://www.pandacodegen.com${URL_PATH}`;
const PUBLISHED = "2026-09-17T00:00:00+05:00";

export const metadata: Metadata = {
    title: TITLE,
    description: DESC,
    alternates: { canonical: URL_PATH },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title: TITLE, description: DESC, type: "article",
        publishedTime: PUBLISHED, modifiedTime: PUBLISHED,
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
            "datePublished": PUBLISHED, "dateModified": PUBLISHED,
            "author": {
                "@type": "Person", "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal", "url": "https://www.pandacodegen.com/about/hassan",
            },
            "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": `${CANONICAL}#webpage` },
            "articleSection": "Engineering", "inLanguage": "en-US", "timeRequired": "PT14M",
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
            "datePublished": PUBLISHED, "dateModified": PUBLISHED, "inLanguage": "en-US",
        },
    ],
};

// Shared labels keep the server-rendered contents and the section headings aligned,
// so the two cannot drift apart. Same pattern as the DIY cost article.
const sections = {
    scope: "Choose the checks that apply to your site",
    offer: "1. Check the offer and the next action",
    enquiry: "2. Follow an enquiry through to the person answering it",
    payments: "3. Test payments and refunds in the provider's test environment",
    accounts: "4. Check account access with test users",
    mobile: "5. Complete the main task on mobile and with a keyboard",
    search: "6. Check the pages you want search engines to find",
    measurement: "7. Reconcile measurement with business records",
    monitoring: "8. Confirm who notices a failure and how you recover",
    builders: "What current AI builders already check",
    why: "Why we check beyond the success screen",
    repeat: "When to repeat the checks",
} as const;
const contents = [
    ["scope", sections.scope], ["offer", sections.offer], ["enquiry", sections.enquiry],
    ["payments", sections.payments], ["accounts", sections.accounts], ["mobile", sections.mobile],
    ["search", sections.search], ["measurement", sections.measurement], ["monitoring", sections.monitoring],
    ["builders", sections.builders], ["why", sections.why], ["repeat", sections.repeat],
    ["faq-heading", "Frequently asked questions"],
];
const linkClass = "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";
const cellClass = "p-4 text-left align-top border-b border-stone-200";

const builderRows: { name: string; href: string; help: React.ReactNode; verify: string }[] = [
    {
        name: "Lovable", href: "https://docs.lovable.dev/features/project-monitoring",
        help: <>Scheduled code and visitor-error monitoring, with email findings, on eligible plans</>,
        verify: "Whether it is enabled, its schedule and edit condition, available credits and who reviews findings",
    },
    {
        name: "Replit", href: "https://docs.replit.com/features/publishing/monitoring-a-deployment",
        help: <>Scheduled uptime checks and downtime emails when enabled; separate <a href="https://docs.replit.com/features/publishing/seo-rating" className={linkClass}>SEO checks after publishing</a></>,
        verify: "Which checks ran and whether your customer journey also completed",
    },
    {
        name: "Bolt", href: "https://support.bolt.new/integrations/stripe",
        help: <>Stripe integration and documented payment-testing workflows</>,
        verify: "Correct configuration and the results of successful, failed and refund scenarios",
    },
    {
        name: "v0", href: "https://v0.app/docs/agentic-features",
        help: <>Browser and test tools, plus deployment investigation</>,
        verify: "The specific tasks tested and the downstream results inspected",
    },
    {
        name: "Wix", href: "https://support.wix.com/en/article/wix-automations-understanding-run-logs",
        help: <>Automation run records</>,
        verify: "The relevant automation's steps, actual destination and receipt",
    },
    {
        name: "Framer", href: "https://www.framer.com/help/articles/framer-form-webhook-setup/",
        help: <>Form-webhook delivery with retries</>,
        verify: "Whether the receiving system completed the requested action",
    },
    {
        name: "Webflow", href: "https://help.webflow.com/hc/en-us/articles/51704193319955-AEO-agents-overview",
        help: <>Recurring AEO-agent recommendations on eligible plans</>,
        verify: "The enabled scope and checks outside technical/content recommendations",
    },
];

export default function AiBuiltWebsiteChecklistPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Header />
            <section className="relative pt-24 md:pt-40 pb-10 px-5 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={postCrumbs(postId, "AI-built website checklist")} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8">
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Blog
                    </Link>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-cognac border border-cognac/20 rounded-full text-xs font-semibold mb-5">
                        <ClipboardCheck className="w-3 h-3" aria-hidden="true" /> Guide
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-5">
                        AI-Built Website Checklist:{" "}
                        <span className="font-serif italic text-cognac">8 Checks Before Launch and After Changes</span>
                    </h1>
<p className="mt-5 text-base leading-7"><Link href="/free-audit" className="underline underline-offset-4">Start the automated checks with our free website audit, then complete the manual launch tests below.</Link></p>
                    <p className="text-lg text-stone-600 leading-relaxed mb-6">
                        An AI website builder can get your small business online, connect services and help you test
                        the result. Some now monitor published sites and alert you to problems. The useful question is
                        what those checks cover on your site, and whether the enquiry, booking or purchase your
                        customer started actually completed.
                    </p>
                    <BlogAuthor date="Sep 17, 2026" readTime="14 min read"
                        bio="Hassan builds websites, online stores and custom software at PandaCodeGen. We sell development services; this guide includes the checks you can complete yourself without hiring anyone."
                        linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />
                    <p className="mt-3 text-sm text-stone-500">Published <time dateTime="2026-09-17">September 17, 2026</time> · Vendor documentation checked on that date.</p>
                </div>
            </section>
            <section className="px-4 md:px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-5 py-8 sm:px-8 md:px-12">
                    <aside aria-label="Start here" className="mb-8 p-5 bg-stone-50 border border-stone-200 rounded-2xl">
                        <p className="font-bold text-charcoal mb-3">Start here</p>
                        <p className="text-stone-700 leading-relaxed">
                            Complete your main customer journey, find the resulting record in the system that handles
                            it, and check that the person responsible can act on it. Repeat the affected checks after
                            changes. You can do the owner checks below yourself; payment simulations and permission
                            testing may need your developer or platform support.
                        </p>
                    </aside>

                    <div className="mb-10 rounded-xl border border-cognac/20 bg-cognac/5 p-5">
                        <p className="font-semibold text-charcoal mb-2">Keep a record</p>
                        <p className="text-stone-700 leading-relaxed">
                            <a href="/website-check-record.md" download className={linkClass}>Download the website check record</a>.
                            Save the date, action, expected result, actual result, evidence and next test trigger. Use
                            &ldquo;not verified&rdquo; when you cannot inspect the result. It is a plain text file, it
                            asks for nothing in return and there is no form in front of it.
                        </p>
                    </div>

                    <nav aria-label="Article contents" className="mb-10 rounded-xl border border-stone-200 p-5">
                        <p className="font-semibold text-charcoal mb-3">On this page</p>
                        <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
                            {contents.map(([id, label]) => <li key={id}><a href={`#${id}`} className={linkClass}>{label}</a></li>)}
                        </ol>
                    </nav>

                    <BlogHeader id="scope">{sections.scope}</BlogHeader>
                    <div className="overflow-x-auto rounded-xl border border-stone-200 mb-6" tabIndex={0} role="region" aria-label="Which checks apply to which kind of site">
                        <table className="w-full text-sm leading-relaxed">
                            <caption className="sr-only">Which checks to start with, by kind of site</caption>
                            <thead className="bg-stone-50"><tr><th scope="col" className={cellClass}>Your site</th><th scope="col" className={cellClass}>Start with</th><th scope="col" className={cellClass}>Add when relevant</th></tr></thead>
                            <tbody>
                                <tr><th scope="row" className={cellClass}>A business website taking enquiries</th><td className={cellClass}>Offer and buttons, form delivery, mobile use, search access, measurement and monitoring</td><td className={cellClass}>Booking and chat integrations</td></tr>
                                <tr><th scope="row" className={cellClass}>An online store</th><td className={cellClass}>Those checks plus payment, refund and fulfilment tests</td><td className={cellClass}>Customer accounts, subscriptions and staff permissions</td></tr>
                                <tr><th scope="row" className={cellClass}>A portal or custom application</th><td className={cellClass}>The main user task, account access, saved records and recovery</td><td className={cellClass}>Payments, notifications and separate user roles</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>These are checks for essential customer journeys. They do not replace a full security, accessibility or performance assessment.</BlogText>

                    <BlogHeader id="offer">{sections.offer}</BlogHeader>
                    <BlogText>Read your main pages as a customer. Confirm the price, what it includes, delivery terms, and any results or testimonials. Read the contact details as a customer who intends to use them: the phone number, the postal address and the opening hours all have to be the ones your business actually keeps. Replace invented examples or unsupported promises left in generated copy.</BlogText>
                    <BlogText>Then follow each important button and link. A button promising a quotation should lead somewhere that explains how to request one. A booking button should open the right calendar. Check the mobile menu, footer and any language versions you publish, and open every link that leaves the page, including ones to your own social profiles and to documents you have linked.</BlogText>
                    <BlogText><strong>Pass:</strong> the offer is accurate and each action reaches its intended destination. Record the page and destination. If a claim has no supporting source, correct it before directing customers to it.</BlogText>

                    <BlogHeader id="enquiry">{sections.enquiry}</BlogHeader>
                    <BlogText>Submit a clearly labelled test enquiry using an address you control. Put a unique label in the message so you can find the same submission later. Repeat this for each separate contact form, quote form, booking widget or chat route.</BlogText>
                    <BlogText>Before anything else, read the recipient address the form is configured to notify. A form that sends perfectly to an address nobody opens, or to one with a typo in it, behaves exactly like a broken form. Check that no placeholder recipient address remains in the configuration.</BlogText>
                    <BlogText>Check the stages your setup uses:</BlogText>
                    <ol className="list-decimal pl-6 mb-6 space-y-2 text-stone-700 leading-relaxed">
                        <li>The website acknowledges the submission.</li>
                        <li>The enquiry appears in the form dashboard or CRM, if one is configured.</li>
                        <li>The email service records the notification, if email is part of the route.</li>
                        <li>The intended inbox receives it, and the responsible person can reply to the test address.</li>
                        <li>The customer receives the confirmation or auto-reply, if your form sends one.</li>
                    </ol>
                    <BlogText>Email status needs interpretation. Resend distinguishes a sending request from delivery to the recipient&apos;s mail server. Neither status proves that a person saw the message. Search all mail rather than the inbox alone, including spam and any promotions or updates tab, and check the customer-side address for the auto-reply as well as your own. <a href="https://resend.com/docs/webhooks/event-types" className={linkClass}>Resend&apos;s event definitions</a></BlogText>
                    <BlogText>If the message is missing or lands in spam, check the sending provider&apos;s delivery details and domain-verification status. Ask your provider or administrator to verify the SPF and DKIM setup required for your sending domain or subdomain, using that provider&apos;s instructions. <a href="https://knowledge.workspace.google.com/admin/support/troubleshooting/troubleshoot-gmail-not-getting-contact-form-messages" className={linkClass}>Google Workspace contact form troubleshooting</a> <a href="https://resend.com/docs/add-a-domain" className={linkClass}>Resend domain verification</a> For Google Workspace recipients, an administrator can also inspect Email Log Search. Correct authentication addresses one class of problem; it does not guarantee inbox placement.</BlogText>
                    <BlogText><strong>Pass:</strong> you can trace the test to the person or system meant to handle it. Save the reference, time and delivery result. If you only saw a success screen, delivery remains unverified. Where a provider hides logs, record the inbox result and ask support about the missing stage.</BlogText>

                    <BlogHeader id="payments">{sections.payments}</BlogHeader>
                    <BlogText>For a store, use the payment provider&apos;s sandbox or test mode. Simulate a successful payment, a decline and a refund. If you sell subscriptions or take deposits, include those paths. Test each payment method you have switched on, not just a card: a wallet or a pay-later option can be configured separately and fail on its own.</BlogText>
                    <BlogText>Check the amount as well as the outcome. Change quantity, shipping method and any option that affects price, and confirm the total the provider receives matches the total the customer saw. Then confirm the customer lands on the success page rather than a blank screen, because a completed charge with a failed redirect looks to the buyer like a payment that did not go through.</BlogText>
                    <div className="rounded-xl bg-stone-50 border border-stone-200 p-5 mb-8">
                        <h3 className="text-xl font-bold text-charcoal mb-3">Do not test with a real card</h3>
                        <p className="text-stone-700 leading-relaxed">Stripe explicitly directs testing to its sandbox and prohibits using real payment details for live-mode testing. Follow the current instructions for your processor. <a href="https://docs.stripe.com/testing" className={linkClass}>Stripe testing guidance</a></p>
                    </div>
                    <BlogText>Have your developer verify that repeated payment notifications do not create duplicate orders or fulfilment tasks. Stripe documents that webhook events can arrive more than once. <a href="https://docs.stripe.com/webhooks" className={linkClass}>Stripe webhook guidance</a></BlogText>
                    <BlogText><strong>Pass:</strong> one successful transaction produces the expected order; a decline does not mark it paid; refund records and customer/staff notifications match your refund workflow. A refund notification may be correct. An instruction to manufacture or ship an order that should be stopped is not.</BlogText>
                    <BlogText>Keep simulations away from live fulfilment. Before launch, separately verify production configuration, then reconcile genuine orders when they arrive. Sandbox success alone does not prove the live setup is correct.</BlogText>

                    <BlogHeader id="accounts">{sections.accounts}</BlogHeader>
                    <BlogText>Skip this section if the site has no customer accounts or staff roles. Otherwise, create authorised test accounts with dummy records. Confirm that each role can do its own job and cannot access another customer&apos;s or team&apos;s restricted information.</BlogText>
                    <BlogText>An owner can test login, logout, password recovery and what each account displays. A developer should also check server-side permission enforcement; hiding a link is not enough to establish that access is blocked.</BlogText>
                    <BlogText><strong>Pass:</strong> the expected task works for each role, and prohibited access is denied in the checks performed. Save the role and test result without exposing real customer data. If an account can read or change another account&apos;s private records, restrict that feature and get it fixed before wider use.</BlogText>

                    <BlogHeader id="mobile">{sections.mobile}</BlogHeader>
                    <BlogText>Use an actual phone to open the menu, read the offer and complete the enquiry or booking journey. Check a tablet or intermediate screen width too; layouts can change between breakpoints. Check that a banner, sticky button or on-screen keyboard does not cover the action you need.</BlogText>
                    <BlogText>On a computer, repeat the task using the keyboard. Focus should remain visible, labels should identify the fields, and errors should explain what to fix. Try an empty required field and an invalid email format. Confirm that valid entries are retained where appropriate.</BlogText>
                    <BlogText><strong>Pass:</strong> you complete the tested task with both input methods and can recover from the tested errors. Save the device/browser and any blocked step. This is a basic usability check; W3C notes that easy checks can pass while other accessibility barriers remain. <a href="https://www.w3.org/WAI/test-evaluate/preliminary/" className={linkClass}>W3C accessibility checks</a></BlogText>

                    <BlogHeader id="search">{sections.search}</BlogHeader>
                    <BlogText>Use Google Search Console&apos;s URL Inspection to compare its indexed-page information, where available, with a fresh live test. Those are separate observations, not one reading. Choose representative public pages: your homepage, an important service or product page, and a recently added page. Include different page templates where possible.</BlogText>
                    <BlogText>Read the indexed-page result first. Then select <strong>Test live URL</strong>, followed by <strong>View tested page → HTML</strong>, to inspect the current deployment&apos;s rendered content. Confirm that the main content is present and the intended public page is accessible for indexing.</BlogText>
                    <BlogText>Keep the results separate: the live test does not guarantee indexing, and Google&apos;s selected canonical is determined during indexing. An intentional private or excluded page should not be made public just to pass this check. <a href="https://support.google.com/webmasters/answer/9012289?hl=en" className={linkClass}>Google&apos;s URL Inspection instructions</a></BlogText>
                    <BlogText><strong>Pass for this check:</strong> the sampled intended public pages have accessible content and no unexplained indexing block. Record indexing status separately. For a Lovable-specific problem, use our <Link href="/blog/lovable-site-not-showing-on-google" className={linkClass}>Lovable search diagnostic</Link>.</BlogText>

                    <BlogHeader id="measurement">{sections.measurement}</BlogHeader>
                    <BlogText>Choose a period with enough activity to compare, and use the same timezone and definitions. Compare recorded enquiries with the form system or CRM, and orders with the commerce/payment records. Separate test submissions, spam, failed payments, duplicates and refunds.</BlogText>
                    <BlogText>A button click is not necessarily an enquiry. A payment notification is not necessarily a new order. Check which event your analytics counts before comparing totals.</BlogText>
                    <BlogText>Consent choices, blocked scripts and processing delays can explain differences. Record the gap you can explain and investigate the rest; do not force totals to match by changing definitions. Where source attribution matters, distinguish captured referrers or campaign details from customers saying how they found you.</BlogText>
                    <BlogText><strong>Pass:</strong> the events represent the intended actions, and the scope and known gaps are documented. A small or incomplete sample should remain inconclusive. Identical totals alone do not prove every order or enquiry was matched correctly.</BlogText>

                    <BlogHeader id="monitoring">{sections.monitoring}</BlogHeader>
                    <BlogText>Open the monitoring settings available in your builder, hosting and connected services. Check what is enabled, the last successful run, the alert recipient, and any plan or credit conditions. A site-availability check answers a different question from a completed checkout test.</BlogText>
                    <BlogText>Use a provider&apos;s alert-test feature where available, or a controlled test environment. Confirm that the responsible person receives the alert and knows the next step. Do not break a live checkout to test monitoring.</BlogText>
                    <BlogText>Also establish who can access the domain and provider accounts, restore important data and roll back a bad release. A developer should demonstrate recovery in an appropriate test environment. Our <Link href="/blog/do-you-own-your-website" className={linkClass}>website ownership guide</Link> explains what to confirm at handover.</BlogText>
                    <BlogText><strong>Pass:</strong> the monitored conditions, recipient and response owner are known, with a tested alert where supported and a recorded recovery route. Unknown coverage remains a gap even when the dashboard is green.</BlogText>

                    <BlogHeader id="builders">{sections.builders}</BlogHeader>
                    <BlogText>The tools are improving. Blanket claims that they only generate a page once are inaccurate. These are documented examples checked on 17 September 2026, not a ranking or a test of your project.</BlogText>
                    <div className="overflow-x-auto rounded-xl border border-stone-200 mb-6" tabIndex={0} role="region" aria-label="What each AI builder documents, and what to verify yourself">
                        <table className="w-full text-sm leading-relaxed">
                            <caption className="sr-only">Documented builder capabilities and what still needs verifying on your own project</caption>
                            <thead className="bg-stone-50"><tr><th scope="col" className={cellClass}>Product</th><th scope="col" className={cellClass}>Documented help</th><th scope="col" className={cellClass}>What to verify on your project</th></tr></thead>
                            <tbody>
                                {builderRows.map(row => (
                                    <tr key={row.name}>
                                        <th scope="row" className={cellClass}><a href={row.href} className={linkClass}>{row.name}</a></th>
                                        <td className={cellClass}>{row.help}</td>
                                        <td className={cellClass}>{row.verify}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <BlogText>Use the help already available. Keep a record of the complete business result, including any stage the builder&apos;s own report cannot establish.</BlogText>

                    <BlogHeader id="why">{sections.why}</BlogHeader>
                    <BlogText>PandaCodeGen&apos;s own quote-form code contains an anti-spam path that deliberately returns a success response without sending an email. An automated test can trigger that path. That demonstrates why the browser response alone is insufficient evidence of delivery; it does not establish that a real customer&apos;s enquiry was lost.</BlogText>
                    <BlogText>We also have a dated internal source-audit record from 15 September 2026: two newly added email templates in our own operations platform could not send until a syntax error was found and fixed that day. The record does not establish how many messages, if any, staff or customers missed.</BlogText>
                    <BlogText>That operations platform runs Panda Patches, the business owned by PandaCodeGen co-founder Imran Raza Ladhani. It is our own operating experience. The <Link href="/work/enterprise-ops" className={linkClass}>case study</Link> describes the platform; the incident account above comes from our internal audit, not an independent assessment or a published production-delivery dataset.</BlogText>
                    <BlogText>The same questions apply to custom code, an AI-built site or a hosted template: what did you test, what happened downstream, and what evidence did you keep?</BlogText>

                    <BlogHeader id="repeat">{sections.repeat}</BlogHeader>
                    <BlogText>Repeat the affected journey after changes to a form, recipient, payment integration, permissions, domain or publishing setup. Check domain and certificate expiry, service renewals, payment details and alert recipients. A missed renewal can interrupt the site, connected services or monitoring without a code change. Check new public page templates for usability and search access. There is no useful universal promise that this takes one hour or two.</BlogText>
                    <BlogList items={[
                        <><strong>A small enquiry site:</strong> a weekly delivery check can be a starting policy.</>,
                        <><strong>A busy store:</strong> consider daily reconciliation and automated alerts for critical failures.</>,
                    ]} />
                    <BlogText>These are suggested starting points: choose a frequency based on transaction volume, the impact of a missed failure and the monitoring already available.</BlogText>
                    <BlogText>If you can complete the checks and someone owns the follow-up, you may not need an agency. If you are deciding whether to build or hire, our <Link href="/blog/is-it-cheaper-to-build-your-own-website" className={linkClass}>DIY website cost guide</Link> covers that separate decision. Where a check keeps failing because the platform cannot do what the business needs, that is the work <Link href="/services/custom-engineering" className={linkClass}>our custom engineering service</Link> covers.</BlogText>

                    <span id="faq" />
                    <FAQAccordion faqs={postFAQs} />
                    <section id="summary" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-6">
                        <h2 className="text-2xl text-charcoal font-bold mb-3">Not sure whether your site passes?</h2>
                        <p className="text-stone-700 leading-relaxed mb-5">Send the URL, what the site should do and the check you could not complete. A founder will reply and explain the next step. Any paid work is scoped and quoted before it starts. You do not need to decide on a rebuild before getting in touch.</p>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-cognac transition-colors">
                            Ask a founder about your site <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                        </Link>
                    </section>
                    <p className="text-sm text-stone-500 leading-relaxed">Method: current vendor and provider documentation, this repository&apos;s form code and a dated internal operations audit. We did not run a controlled comparison across the seven builders or measure their failure rates. The check record is a reusable template, not a claim that these tests have been completed on your site. <Link href="/editorial-policy" className={linkClass}>How we publish and correct information</Link>.</p>
                    <div className="mt-12 pt-8 border-t border-stone-200"><TopicUpLink postId={postId} /></div>
                    <RelatedPosts currentPostId={postId} />
                </article>
            </section>
            <Footer showCta={false} />
        </main>
    );
}
