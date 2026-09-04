import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogQuote, BlogText } from "@/components/ui/BlogStyles";
import { spec, asOf } from "@/data/spec-facts";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "wordpress-plugin-security-2026";
const postFAQs = blogPosts.find((p) => p.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WordPress Plugin Security in 2026: Speed Is the Only Real Defence";
const description =
    "In one week a critical authentication bypass was exploited in a WordPress SSO plugin and a critical remote code execution was patched in Next.js. What a site owner controls is not whether a vulnerability appears, but how fast the fix lands.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "wordpress plugin security",
        "is wordpress secure",
        "wordpress plugin vulnerability",
        "CVE-2026-15981",
        "CVE-2026-32475",
        "CVE-2026-14894",
        "elementor pro vulnerability",
        "super forms vulnerability",
        "miniorange saml vulnerability",
        "wordpress security 2026",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-08-27",
        modifiedTime: "2026-09-05",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath(`/blog/${postId}`)],
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
            image: ogImageUrlForPath(`/blog/${postId}`),
            datePublished: "2026-08-27T00:00:00-05:00",
            dateModified: "2026-09-05T00:00:00-05:00",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["WordPress security", "Next.js", "Vulnerability management", "Web application security"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "WordPress",
            inLanguage: "en-US",
            citation: [
                { "@type": "CreativeWork", name: "NVD: CVE-2026-15981", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-15981" },
                { "@type": "CreativeWork", name: "NVD: CVE-2026-61979", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-61979" },
                { "@type": "CreativeWork", name: "NVD: CVE-2026-15013", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-15013" },
                { "@type": "CreativeWork", name: "NVD: CVE-2026-57807", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-57807" },
                { "@type": "CreativeWork", name: "Patchstack: One slug, seven editions", url: "https://patchstack.com/articles/one-slug-seven-editions/" },
                { "@type": "CreativeWork", name: "Next.js: August 2026 Security Release", url: "https://nextjs.org/blog/august-2026-security-release" },
                { "@type": "CreativeWork", name: "Full Disclosure: SAML signature algorithm confusion", url: "https://seclists.org/fulldisclosure/2026/Aug/33" },
                { "@type": "CreativeWork", name: "WordPress.org: SAML Single Sign On plugin", url: "https://wordpress.org/plugins/miniorange-saml-20-single-sign-on/" },
            ],
            wordCount: 2762,
            timeRequired: "PT11M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            about: [
                { "@type": "Thing", name: "WordPress", sameAs: ["https://en.wikipedia.org/wiki/WordPress"] },
                { "@type": "Thing", name: "Vulnerability management", sameAs: ["https://en.wikipedia.org/wiki/Vulnerability_management"] },
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
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "WordPress Plugin Security in 2026", item: canonicalUrl },
            ],
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

const inlineLink = "font-medium text-cognac hover:underline";
const sourceLink = "text-cognac hover:underline";

export default function WordPressPluginSecurity2026Page() {
    return (
        <>
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal selection:bg-stone-200">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb items={postCrumbs(postId, "WordPress plugin security")} />

                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">WordPress</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WordPress plugin security:{" "}
                            <span className="italic text-cognac">nothing is secure, only fast</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            In the last week of August 2026, a critical authentication bypass was being exploited in a
                            WordPress single sign-on plugin, and a critical remote code execution was disclosed and
                            patched in Next.js. Both ecosystems shipped a critical vulnerability in the same week. We
                            patched the second one on our own site, which is why this is not an article about how custom
                            code is safe.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Every CVE number, score, version and date below was read at its primary record on 26 August
                            2026 and is linked. Where two sources disagree, both are given.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        bio="Hassan rebuilds WordPress and Shopify stores as custom Next.js applications, and patches the dependencies underneath them."
                    />

                    <BlogHeader id="short-answer">Is WordPress less secure than a custom-coded site?</BlogHeader>
                    <BlogText>
                        <BlogHighlight>
                            Not in the way the question implies, and the honest answer is more useful than the
                            comparison.
                        </BlogHighlight>{" "}
                        A vulnerability appearing is not the variable you control. Both WordPress and the framework this
                        site runs on produced a critical, unauthenticated, remote vulnerability inside the same seven
                        days. What differed was everything that happened afterwards: whether the advisory named your
                        version, whether a database could list it, whether a scanner could see it, and how many steps
                        the fix took.
                    </BlogText>
                    <BlogText>
                        Those four things are measurable, and they are the ones worth asking a provider about. Platform
                        choice on its own is not a security outcome.
                    </BlogText>

                    <BlogQuote>
                        A vulnerability appearing is not the variable you control. The time between a public exploit and your fix is.
                    </BlogQuote>

                    <BlogHeader id="what-happened">What happened in the WordPress SSO plugin?</BlogHeader>
                    <BlogText>
                        Two vulnerabilities in miniOrange&apos;s SAML single sign-on plugin came under active
                        exploitation.{" "}
                        <a href="https://nvd.nist.gov/vuln/detail/CVE-2026-15981" target="_blank" rel="noopener noreferrer" className={sourceLink}>CVE-2026-15981</a>{" "}
                        is an authentication bypass at {spec("wp-saml-cve-15981").value}, affecting free-edition versions
                        up to and including 5.4.4 and fixed in 5.4.5.{" "}
                        <a href="https://nvd.nist.gov/vuln/detail/CVE-2026-61979" target="_blank" rel="noopener noreferrer" className={sourceLink}>CVE-2026-61979</a>{" "}
                        is an unauthenticated privilege escalation at {spec("wp-saml-cve-61979").value}. Checked{" "}
                        {asOf("wp-saml-cve-15981")}.
                    </BlogText>
                    <BlogText>
                        A note on that second score, because the published numbers disagree. Patchstack assigned the CVE
                        record at 8.1, and their own write-up describes both SAML issues as 9.8. Wordfence separately
                        assigned{" "}
                        <a href="https://nvd.nist.gov/vuln/detail/CVE-2026-15013" target="_blank" rel="noopener noreferrer" className={sourceLink}>CVE-2026-15013</a>{" "}
                        at 9.8 for what the records describe as the same mechanism and the same version range. Two
                        numbering authorities, one bug, two scores. We cite the CVE records rather than the article,
                        and note the discrepancy rather than picking the more dramatic figure.
                    </BlogText>

                    <BlogHeader id="mechanism">How does a signature check return an error and still pass?</BlogHeader>
                    <BlogText>
                        This is the part worth understanding, because it is not exotic. PHP&apos;s{" "}
                        <code>openssl_verify()</code> is tri-state: it returns 1 for a valid signature, 0 for an invalid
                        one, and <strong>-1 when OpenSSL itself errors</strong>. The plugin checked the result with a
                        loose boolean test. In PHP, -1 is truthy.
                    </BlogText>
                    <BlogText>
                        So an attacker sent a deliberately malformed signature, OpenSSL failed, the function returned
                        -1, and the plugin read that failure as a success. The NVD record states the consequence
                        plainly: it became possible for unauthenticated attackers to log in as any existing WordPress
                        user, including administrators, by submitting a crafted SAML response with an
                        attacker-controlled identity and a signature deliberately broken enough to trigger the error
                        path.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>
                            The bug is not that the cryptography was weak. It is that the failure case was never
                            distinguished from the success case.
                        </BlogHighlight>{" "}
                        That is a category of mistake any codebase can make, ours included, and it is why the rest of
                        this article is about response rather than about blame.
                    </BlogText>

                    <BlogHeader id="scanners-blind">Why did scanners report vulnerable sites as safe?</BlogHeader>
                    <BlogText>
                        This is the finding that matters more than either CVE.{" "}
                        {spec("wp-saml-editions").value} independently versioned product editions ship under one
                        WordPress plugin slug: free, Standard, Premium, Premium multisite, Enterprise, VIP single site
                        and VIP multisite. The public advisories covered the free edition only.
                    </BlogText>
                    <BlogText>
                        Patchstack reported on 21 August 2026 that the six paid editions were patched with no public
                        changelog entry and no advisory, so no vulnerability database listed them, and vulnerable sites
                        were reported as unaffected. Checked {asOf("wp-saml-editions")}. That state ended on 18 August
                        2026, when miniOrange supplied the full edition and version matrix and Patchstack updated its
                        database.
                    </BlogText>
                    <BlogText>
                        Sit with what that means for a site owner doing everything right. You run a scanner: it reports
                        clean, because your edition is not in the database it queries. You check the dashboard: it shows
                        no update, because the patched build is on a different version line. You read the advisory: it
                        names versions that look nothing like yours. Three independent checks, all reassuring, all
                        wrong at the same time.
                    </BlogText>
                    <BlogText>
                        One precision worth keeping. Patchstack&apos;s specific finding on updates is that a site
                        running Standard 16.1.9 is not offered the patched 17.0.6, because the WordPress update
                        mechanism does not offer a jump across version lines, so the upgrade is a manual file upload.
                        miniOrange&apos;s own documentation does describe paid plugins showing dashboard update
                        notifications in the normal case. The failure is the cross-line jump, not update notices in
                        general.
                    </BlogText>

                    <BlogQuote>
                        The scanner said clean, the dashboard said current, and the advisory named a version series the site had never used.
                    </BlogQuote>

                    <BlogHeader id="exploit-window">How long was a working exploit public before anyone noticed?</BlogHeader>
                    <BlogText>
                        Eighteen days. A full disclosure with a proof-of-concept and a Docker lab was posted to the{" "}
                        <a href="https://seclists.org/fulldisclosure/2026/Aug/33" target="_blank" rel="noopener noreferrer" className={sourceLink}>Full Disclosure mailing list on 29 July 2026</a>{" "}
                        for the algorithm-confusion variant, including a full chain to administrator. DigitalOcean
                        detected an anomalous WordPress admin session on 16 August and shared a working reproduction on
                        17 August.
                    </BlogText>
                    <BlogText>
                        Patchstack published six scanning IP addresses spread across Brussels, Abuja, Frankfurt and two
                        US cloud providers, and characterised the traffic as opportunistic scanning rather than a
                        targeted campaign. No source publishes attack volumes or compromise counts, so we do not either.
                    </BlogText>

                    <BlogHeader id="changelog">What did the vendor&apos;s changelog actually say?</BlogHeader>
                    <BlogText>
                        For the one edition that did get a public changelog, the entries read:{" "}
                        <em>&ldquo;Removed support of insecure signature algorithms&rdquo;</em> at 5.4.4, and{" "}
                        <em>&ldquo;Bugfix: Fixed unauthorised access issue in SAML SSO&rdquo;</em> at 5.4.5.
                    </BlogText>
                    <BlogText>
                        Neither line says authentication bypass. Neither carries a CVE number or a severity. A site
                        owner scanning a changelog for something alarming would have moved past both. We found no
                        security advisory published by miniOrange on their own site, and their plugin changelog page
                        publishes no per-version entries for the paid editions at all. They did cooperate privately,
                        supplying the complete matrix on 18 August.
                    </BlogText>
                    <BlogText>
                        The free plugin currently reports {spec("wp-saml-installs").value} active installations on
                        WordPress.org. Install counts for the six paid editions are not published anywhere, so the size
                        of the exposed population is genuinely unknown. Checked {asOf("wp-saml-installs")}.
                    </BlogText>

                    <BlogHeader id="our-own">We patched a critical remote code execution the same week</BlogHeader>
                    <BlogText>
                        On 25 August 2026, Next.js disclosed{" "}
                        <a href="https://nextjs.org/blog/august-2026-security-release" target="_blank" rel="noopener noreferrer" className={sourceLink}>two critical vulnerabilities</a>.
                        The one that applied to this site was{" "}
                        {spec("nextjs-avif-rce").value}: an unauthenticated remote code execution in the image
                        optimization API, reachable when an attacker-controlled AVIF image is processed, caused by a
                        flaw in the libheif library underneath sharp. Checked {asOf("nextjs-avif-rce")}.
                    </BlogText>
                    <BlogText>
                        This site was running a vulnerable version with AVIF enabled. Here is the whole remediation:
                        read the advisory, run one install command to move to{" "}
                        {spec("nextjs-patched-versions-aug-2026").value}, remove AVIF from the image config to match
                        what the patch does anyway, run the type check and the build, confirm the audit reports no
                        critical findings. Then the same sequence across the other projects we maintain, in priority
                        order by exposure, live commerce first.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>
                            We are not claiming that was impressive. We are claiming it was possible.
                        </BlogHighlight>{" "}
                        The advisory named the exact patched versions. An automated audit surfaced the problem without
                        anyone having to know it existed. One command applied the fix. A build confirmed nothing broke.
                        None of those four steps were available to a site running a paid edition of the SSO plugin
                        during the same week.
                    </BlogText>
                    <BlogText>
                        One more detail worth noting, because it is process rather than luck: Vercel pre-announced the
                        release, then moved it forward when a second critical issue was found, so that anyone patching
                        would only have to upgrade once. That is a decision made on behalf of people downstream.
                    </BlogText>

                    <BlogHeader id="what-differs">What actually differs, in four measurable things</BlogHeader>
                    <BlogText>
                        Strip out the tribalism and the difference between the two responses reduces to four questions
                        you can ask about any dependency in your stack.
                    </BlogText>
                    <BlogList
                        items={[
                            "Does the advisory name the exact version you are running? Next.js named two patched versions covering every affected release line. The SSO advisories named one edition out of seven.",
                            "Can a vulnerability database list your build? npm audit surfaced the Next.js issue automatically. Six paid plugin editions were absent from every database until the vendor supplied a matrix on 18 August.",
                            "Will your normal update path deliver the fix? A dependency bump is one command. A cross-line jump from a 16.x edition to a patched 17.x edition is a manual upload the dashboard never offers.",
                            "Can you verify the fix landed? A build and an audit either pass or fail. Comparing an unlabelled paid version string against a matrix published in a third-party article is not the same kind of confirmation.",
                        ]}
                    />
                    <BlogText>
                        Notice that none of those four is about the language, the framework or the hosting. They are
                        about disclosure discipline and update mechanics, and they vary enormously between vendors
                        inside the same ecosystem.
                    </BlogText>

                    <BlogHeader id="patch-available-not-applied">The September attacks invert this, and that case is worse</BlogHeader>
                    <BlogText>
                        Between July and September 2026 two WordPress plugins were attacked at scale while a fix was
                        already published for both. Wordfence blocked more than 250,000 attempts against Super Forms and
                        close to 190,000 against Elementor Pro. Neither campaign relied on a hidden edition, a silent
                        changelog or an advisory that named the wrong version. Both vendors did the disclosure work
                        correctly and hundreds of thousands of sites were attacked anyway.
                    </BlogText>
                    <BlogText>
                        CVE-2026-14894 is an unauthenticated arbitrary file upload in Super Forms, scored CVSS 9.8,
                        caused by a public AJAX endpoint that performed no file-type validation and no capability check.
                        Super Forms 6.3.314 fixed it in the first week of July 2026 and Wordfence published the advisory
                        on 9 July. Attacks began on 14 July, five days after that advisory, and peaked above 40,000
                        requests in a single day on 18 August. Sites were still being compromised five weeks after the
                        fix shipped.
                    </BlogText>
                    <BlogText>
                        CVE-2026-32475 is the same class of flaw in Elementor Pro, also scored CVSS 9.8, reachable on
                        any site with a published Form widget carrying at least one File Upload field. Patchstack
                        disclosed it and Elementor released 4.2.2 on 19 August 2026. Exploitation started the same day,
                        and Wordfence blocked close to 190,000 attempts over the following four days across a plugin
                        with more than six million active installations. Elementor&apos;s response time was effectively
                        zero, and it did not protect the sites that had not applied the update.
                    </BlogText>
                    <BlogText>
                        Read against the miniOrange case, these two say something the four questions above do not cover.
                        With the SSO plugin the failure was upstream, because no advisory named the paid editions and a
                        diligent owner could not have found out. With Super Forms and Elementor Pro every signal worked.
                        The version numbers were public and the dashboard offered the update. No edition matrix had to
                        be reconstructed from a third-party article.{" "}
                        <BlogHighlight>
                            A patch nobody applied protects a site exactly as much as a patch nobody wrote.
                        </BlogHighlight>{" "}
                        That gap is not something a vendor can close on your behalf.
                    </BlogText>
                    <BlogText>
                        Both flaws also share a shape worth recognising in your own stack. A form that accepts file
                        uploads from the public is a code path where an unauthenticated stranger writes a file to your
                        server, and it turns on validation that is easy to get subtly wrong. Super Forms and Elementor
                        Pro both failed on an array-shaped submission where the first element was empty and the second
                        carried the payload. If you run any plugin that accepts public uploads, that is the input worth
                        asking about first.
                    </BlogText>

                    <BlogHeader id="what-to-do">What should you do if you run this plugin?</BlogHeader>
                    <BlogList
                        items={[
                            "Identify your edition, not just your version number. Free, Standard, Premium, Enterprise and VIP use separate version series, so a version alone tells you nothing about whether you are patched.",
                            "Free edition is patched at 5.4.5. For the paid lines, compare against the matrix miniOrange supplied on 18 August 2026 rather than assuming the dashboard would have told you.",
                            "If the dashboard offers no update and you are on an older line, expect a manual upload. The absence of an update prompt is not evidence that you are current.",
                            "Audit for administrator accounts you do not recognise, and for recent logins to accounts that should be dormant. Exploitation was underway before the advisories covered the paid editions, so a clean scan today does not describe last month.",
                            "Check the separate OAuth plugin too. CVE-2026-57807 is a CVSS 9.8 authentication bypass affecting that plugin through 38.5.8, disclosed in July.",
                        ]}
                    />

                    <BlogHeader id="ask-provider">What to ask a provider about their patch process</BlogHeader>
                    <BlogText>
                        A response-time promise is worth very little, because the hard part is finding out at all. Ask
                        about the sequence instead.
                    </BlogText>
                    <BlogList
                        items={[
                            "How would you find out a dependency in my site had a critical vulnerability? Name the mechanism, not the intention.",
                            "Which of my dependencies are covered by automated advisories, and which are not? Paid plugins and closed-source add-ons are the usual blind spot.",
                            "What did you patch most recently, and how long did it take from advisory to deploy?",
                            "If a fix requires a manual upgrade rather than an automatic one, who does it and when?",
                            "How do you verify a patch actually landed in production rather than assuming it did?",
                        ]}
                    />

                    <BlogQuote>
                        Ask what someone patched last month, not how fast they promise to patch next time.
                    </BlogQuote>

                    <BlogHeader id="honest-conclusion">So is a custom build safer?</BlogHeader>
                    <BlogText>
                        On the evidence of this one week, no, and we would be contradicting our own patch notes to say
                        otherwise. A custom Next.js application has fewer moving parts than a WordPress install carrying
                        forty plugins, and a smaller third-party surface is a real advantage over time. It is not
                        immunity. The framework underneath it shipped a 9.5 unauthenticated remote code execution while
                        this article was being researched.
                    </BlogText>
                    <BlogText>
                        What a smaller surface buys you is that the four questions above have answers. Fewer
                        dependencies, each one publicly versioned, each one covered by an advisory feed, each one
                        updatable by a command that leaves an audit trail. That is not the same as being secure. It is
                        being able to move quickly when you are not.
                    </BlogText>
                    <BlogText>
                        If you are weighing the platform question more broadly, our{" "}
                        <Link href="/blog/wordpress-ai-security-risk-2026" className={inlineLink}>
                            guide to WordPress AI plugin advisories
                        </Link>{" "}
                        covers the same discipline applied to AI and MCP plugins, and{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className={inlineLink}>
                            how plugin stacks affect site speed
                        </Link>{" "}
                        covers the performance half of the same trade-off.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Not sure what your site is running?</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            Our{" "}
                            <Link href="/free-audit" className="font-semibold text-orange-300 underline underline-offset-4">
                                free technical audit
                            </Link>{" "}
                            scans a URL and reports what it finds, with no signup. It is not a vulnerability scan and it
                            will not tell you which plugin editions you run, so if security is the question, the honest
                            next step is a look at the actual install rather than a score.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Book a 30-minute review <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    <FAQAccordion faqs={postFAQs} />

                    <BlogText>
                        Related reading:{" "}
                        <Link href="/blog/wordpress-ai-security-risk-2026" className={inlineLink}>
                            WordPress AI plugin security advisories
                        </Link>{" "}
                        applies the same dated, evidence-led method to AI Engine and MCP, and{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className={inlineLink}>
                            WordPress compared with Next.js
                        </Link>{" "}
                        sets out the wider trade-off without treating either as a security guarantee.
                    </BlogText>

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
