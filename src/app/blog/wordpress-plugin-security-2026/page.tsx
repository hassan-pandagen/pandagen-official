import BlogCoverFigure from "@/components/blog/BlogCoverFigure";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
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
const title = "WordPress Security 2026: PHP, Core & Plugin Vulnerabilities";
const description =
    "Check WordPress core, plugin and PHP security issues, including PHP2Shell. Learn which versions are affected, what to update and how to recover.";

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
        modifiedTime: "2026-10-29",
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
            dateModified: "2026-10-29T00:00:00-05:00",
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
                { "@type": "CreativeWork", name: "WordPress 7.1.4 security release", url: "https://wordpress.org/news/2026/10/wordpress-7-1-4/" },
                { "@type": "CreativeWork", name: "WordPress 7.1.4 detailed release documentation", url: "https://wordpress.org/documentation/wordpress-version/version-7-1-4/" },
                { "@type": "CreativeWork", name: "NVD: CVE-2026-15981", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-15981" },
                { "@type": "CreativeWork", name: "NVD: CVE-2026-61979", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-61979" },
                { "@type": "CreativeWork", name: "NVD: CVE-2026-15013", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-15013" },
                { "@type": "CreativeWork", name: "NVD: CVE-2026-57807", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-57807" },
                { "@type": "CreativeWork", name: "Patchstack: One slug, seven editions", url: "https://patchstack.com/articles/one-slug-seven-editions-the-miniorange-saml-sso-bug-that-let-anyone-log-in-as-your-wordpress-admin/" },
                { "@type": "CreativeWork", name: "NVD: CVE-2026-19842", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-19842" },
                { "@type": "CreativeWork", name: "Wordfence: attackers exploiting Elementor Pro", url: "https://www.wordfence.com/blog/2026/09/attackers-actively-exploiting-critical-vulnerability-in-elementor-pro-plugin/" },
                { "@type": "CreativeWork", name: "Wordfence: attackers exploiting Super Forms", url: "https://www.wordfence.com/blog/2026/09/attackers-actively-exploiting-critical-vulnerability-in-super-forms-plugin/" },
                { "@type": "CreativeWork", name: "Next.js: August 2026 Security Release", url: "https://nextjs.org/blog/august-2026-security-release" },
                { "@type": "CreativeWork", name: "Full Disclosure: SAML signature algorithm confusion", url: "https://seclists.org/fulldisclosure/2026/Aug/33" },
                { "@type": "CreativeWork", name: "WordPress.org: SAML Single Sign On plugin", url: "https://wordpress.org/plugins/miniorange-saml-20-single-sign-on/" },
            ],
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
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal selection:bg-stone-200">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb schemaId={`${canonicalUrl}#breadcrumb`} items={postCrumbs(postId, "WordPress plugin security")} />

                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header data-article-hero="split" className="mb-10 border-b border-stone-200 pb-8">
                      <div data-article-hero-copy>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">WordPress</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WordPress plugin security:{" "}
                            <span className="italic text-cognac">checks, patching and recovery</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            In the second half of August 2026, attempts to exploit a critical authentication bypass in a
                            WordPress single sign-on plugin were reported, and a critical remote code execution was
                            disclosed and patched in Next.js. Both landed within ten days of each other. We
                            patched the second one on our own site, which is why this is not an article about how custom
                            code is safe.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            The SSO and Next.js figures were read at their primary records on 26 August 2026, the Super
                            Forms and Elementor Pro figures on 5 September, and all of them rechecked on 8 October 2026.
                            Every source is linked. Where two sources disagree, both are given.
                        </p>
                      </div>
                      <div data-article-hero-screen>
                        <BlogCoverFigure id="wordpress-plugin-security-2026" />
                      </div>
                    </header>

                    <BlogAuthor postId="wordpress-plugin-security-2026" published="2026-08-27"
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        bio="Hassan rebuilds WordPress and Shopify stores as custom Next.js applications, and patches the dependencies underneath them."
                    />

                    <BlogHeader id="wordpress-7-1-4">28 October update: WordPress core needs patching too</BlogHeader>
                    <BlogText>
                        WordPress released <a href="https://wordpress.org/news/2026/10/wordpress-7-1-4/" className={inlineLink}>7.1.4 on 28 October 2026</a>{" "}
                        and recommends updating immediately. This release fixes multiple vulnerabilities in WordPress
                        core, separate from the plugin incidents below. Keeping a short plugin list helps with upkeep;
                        it does not replace core updates.
                    </BlogText>
                    <BlogText>
                        The <a href="https://wordpress.org/documentation/wordpress-version/version-7-1-4/" className={inlineLink}>detailed release notes</a>{" "}
                        describe an update-process race condition that could allow code execution, stored cross-site
                        scripting, denial of service and access-control or information-disclosure issues. Several
                        require a logged-in user with a particular role. The release announcement does not report
                        exploitation in the wild; that is not evidence that no attacks have occurred.
                    </BlogText>
                    <BlogList items={[
                        "Check the installed WordPress version and the current official update advice. For the 7.1 branch, this release is 7.1.4. Check older branches against their listed fixes and plan a move to the actively supported release.",
                        "Confirm a recent backup of both database and site files, plus a usable restore route, with your host.",
                        "Apply the security update promptly. Use an expedited staging check where available and agree who handles automatic updates so the fix does not wait for routine maintenance.",
                        "Verify the installed version afterwards, then test login, editing, forms and checkout where applicable. Record the result and keep monitoring for errors."
                    ]} />
                    <BlogText>
                        Our recommendation: put a named person in charge of checking, applying and verifying security
                        updates. We use that same approach for our Next.js dependencies.
                    </BlogText>

                    <BlogHeader id="short-answer">Is WordPress less secure than a custom-coded site?</BlogHeader>
                    <BlogText>
                        <BlogHighlight>
                            Not in the way the question implies, and the honest answer is more useful than the
                            comparison.
                        </BlogHighlight>{" "}
                        A vulnerability appearing is not the variable you control. Both WordPress and the framework this
                        site runs on had a critical, unauthenticated, remote vulnerability in the news within ten days of
                        each other. What differed was everything that happened afterwards: whether the advisory named your
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
                        About three weeks. A proof-of-concept with a Docker lab for the algorithm-confusion variant,
                        including a full chain to administrator, was public on GitHub from 27 July 2026, and a write-up
                        dated 29 July reached the{" "}
                        <a href="https://seclists.org/fulldisclosure/2026/Aug/33" target="_blank" rel="noopener noreferrer" className={sourceLink}>Full Disclosure mailing list</a>{" "}
                        in early August. DigitalOcean detected an attempted WordPress admin session on 16 August and
                        shared a working reproduction on 17 August.
                    </BlogText>
                    <BlogText>
                        Patchstack published six scanning IP addresses in Belgium, Nigeria, Germany and the US, and characterised the traffic as opportunistic scanning rather than a
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

                    <BlogHeader id="patch-available-not-applied">The summer attacks invert this, and that case is worse</BlogHeader>
                    <BlogText>
                        {/* 8 Oct 2026: corrected against Wordfence's 2 and 3 Sep posts and the CVE records. */}
                        In July and August 2026 two WordPress plugins were attacked at scale while a fix was already
                        published for both. By early September Wordfence had blocked more than 250,000 attempts against
                        Super Forms and more than 190,000 against Elementor Pro. Neither campaign relied on a hidden
                        edition, a silent changelog or an advisory that named the wrong version. Both vendors did the
                        disclosure work correctly, and attackers sent hundreds of thousands of exploit attempts anyway.
                    </BlogText>
                    <BlogText>
                        CVE-2026-14894 is an unauthenticated arbitrary file upload in Super Forms, scored CVSS 9.8,
                        caused by a public AJAX endpoint that performed no file-type validation and no capability check.
                        Super Forms 6.3.314 fixed it on 8 July 2026 and Wordfence published the advisory on 9 July.
                        Attacks began on 14 July, five days after that advisory, and were heaviest between 18 and 25
                        August, peaking above 40,000 requests in a single day. Attackers were still hammering unpatched
                        sites six weeks after the fix shipped.
                    </BlogText>
                    <BlogText>
                        CVE-2026-32475 is the same class of flaw in Elementor Pro, scored 9.0 on its CVE record and 9.8
                        by Wordfence, reachable on any site with a published Form widget that has at least one File
                        Upload field not marked as required (the default). Patchstack and Wordfence both published it on
                        19 August 2026, the day Elementor released 4.2.2. Exploitation started the same day. By 2
                        September Wordfence had blocked more than 190,000 attempts, most of them between 19 and 23
                        August, against a plugin Wordfence puts at more than six million installations. Elementor
                        shipped the fix the day the flaw went public, and that did not protect the sites that had not
                        applied the update.
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
                        server, and it turns on validation that is easy to get subtly wrong. Elementor Pro failed on an
                        array-shaped submission where the first element was empty and the second carried the payload,
                        and Super Forms never checked the file type at all. If you run any plugin that accepts public uploads, that is the input worth
                        asking about first.
                    </BlogText>

                    <BlogHeader id="what-to-do">What should you do if you run this plugin?</BlogHeader>
                    <BlogList
                        items={[
                            "Identify your edition, not just your version number. Free, Standard, Premium, Enterprise and VIP use separate version series, so a version alone tells you nothing about whether you are patched.",
                            "The free edition needs 5.4.7 or later. 5.4.5 fixed the two bypasses above, but a third flaw, CVE-2026-19842 (CVSS 8.8, published 19 August 2026), stayed open until 5.4.7: the plugin stored a SAML certificate without checking its signature, and an administrator could be led to trust it in one click. The current free release is 6.0.0. For the paid lines, compare against the matrix miniOrange supplied on 18 August 2026 rather than assuming the dashboard would have told you.",
                            "If the dashboard offers no update and you are on an older line, expect a manual upload. The absence of an update prompt is not evidence that you are current.",
                            "Audit for administrator accounts you do not recognise, and for recent logins to accounts that should be dormant. Exploitation was underway before the advisories covered the paid editions, so a clean scan today does not describe last month.",
                            "Check the separate OAuth plugin too. CVE-2026-57807 is a CVSS 9.8 authentication bypass affecting that plugin through 38.5.8, disclosed in July.",
                        ]}
                    />

                    {/* 20 Oct 2026: Rank Math PRO supply-chain incident. Read from Rank Math's advisory,
                        its changelog and the CVE record (published by Wordfence 19 Oct 2026). Rank Math has
                        not said how the files were replaced or how many sites received them; don't add either. */}
                    <BlogHeader id="rank-math-pro">What happened with Rank Math PRO in October 2026?</BlogHeader>
                    <BlogText>
                        Some copies of Rank Math PRO 3.0.123, the paid edition of the Rank Math SEO plugin, contained
                        malware. According to{" "}
                        <a href="https://rankmath.com/kb/pro-3-0-123-security-incident/" target="_blank" rel="noopener noreferrer" className={sourceLink}>Rank Math&apos;s security advisory</a>,
                        the affected files reached users who downloaded or updated between 15 October 2026 at 20:02 UTC
                        and 16 October at 07:12 UTC. Rank Math removed them and released a clean version, 3.0.124. The
                        free Rank Math SEO plugin on WordPress.org was not affected. Wordfence published{" "}
                        <a href="https://nvd.nist.gov/vuln/detail/CVE-2026-111862" target="_blank" rel="noopener noreferrer" className={sourceLink}>CVE-2026-111862</a>{" "}
                        for it on 19 October, scored CVSS 9.8, and describes it as a supply-chain compromise.
                    </BlogText>
                    <BlogText>
                        This is a different failure from the summer cases. There, the risk was a published fix that
                        hadn&apos;t been applied. Here, the risk was in the package being delivered: copies obtained during
                        an eleven-hour window carried the malware. Updating promptly is still the right default; this
                        case is about knowing what you installed and when. Version 3.0.123 had been out since 7 October, so the
                        files appear to have been swapped after release. Rank Math hasn&apos;t said how that happened, or
                        how many sites received them beyond &ldquo;a limited number of users&rdquo;. Its{" "}
                        <a href="https://rankmath.com/changelog/" target="_blank" rel="noopener noreferrer" className={sourceLink}>changelog</a>{" "}
                        lists the same two fixes for 3.0.123 and 3.0.124 and doesn&apos;t mention security, so the
                        advisory is the place to read about it.
                    </BlogText>
                    <BlogText>
                        The version number alone doesn&apos;t tell you whether a site was hit; the CVE record says so
                        directly. What matters is whether you obtained a copy during that window, and whether it was
                        ever activated. Below is a summary. For the complete steps, follow{" "}
                        <a href="https://rankmath.com/kb/pro-3-0-123-security-incident/" target="_blank" rel="noopener noreferrer" className={sourceLink}>Rank Math&apos;s full procedure</a>{" "}
                        or ask your host for help.
                    </BlogText>
                    <BlogList
                        items={[
                            "Obtained an affected copy during the download window and activated it at any time, then or later: Rank Math says to treat the site as compromised. Updating to 3.0.124 alone doesn't complete recovery. Its recommended route is to restore the files and database from a backup made before 15 October at 20:02 UTC, run a security scan, change every password, database credential, API key and set of WordPress salts the site could reach, then install 3.0.124 from your Rank Math account.",
                            "Installed but never activated: delete the plugin folder, install 3.0.124 from your Rank Math account and run a security scan.",
                            "Downloaded but never installed: Rank Math says there is no sign of compromise from this incident alone.",
                            "Cleaning by hand instead of restoring: the order matters, because the malware rebuilds its backdoor when someone visits the site. Rank Math says to delete the whole rank-math-pro folder, remove any wp_options entries matching the malicious keys it lists, and block outgoing connections to rank1cdn.com where your host or firewall allows, before looking for anything else. Its procedure then covers other files, accounts, cron jobs and the server, credential changes, and checks that the site stays clean.",
                            "Signs Rank Math lists: administrator accounts named wpsupport_ followed by random characters or using @wp-mail.net addresses, a fake core file at wp-includes/class-wp-cache-util.php, .htaccess rules that run .cache files as PHP, a system cron entry tagged #ms6v46, and connections to rank1cdn.com.",
                            "Rank Math says it never sends login or download links by email. Get 3.0.124 by going to rankmath.com yourself, and treat any unsolicited password-reset or download email about this incident as suspect.",
                        ]}
                    />
                    <BlogText>
                        The four questions earlier don&apos;t cover this kind of case. The advisory named the affected
                        version, and the clean release is dated 16 October. Update records and clean backups are
                        important here, for working out which sites were exposed and for recovering them.
                    </BlogText>

                    {/* 27 Oct 2026. Exploitation wording checked against Sophos, the Canadian Cyber Centre and
                        the NSW statement: attempts observed, no confirmed compromise count. Don't write "hacked". */}
                    <BlogHeader id="php2shell">What is PHP2Shell, and does it affect WordPress sites?</BlogHeader>
                    <BlogText>
                        PHP2Shell is the name given to two critical flaws in PHP itself, the language WordPress and its
                        plugins run on. PHP disclosed them on 21 October 2026 as CVE-2026-109618 and CVE-2026-109619 and
                        released fixed versions the same day: PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35. According to{" "}
                        <a href="https://www.php.net/archive/2026.php" target="_blank" rel="noopener noreferrer" className={sourceLink}>PHP&apos;s announcement</a>,
                        together they can let an attacker run code on a server without logging in, and both are rated
                        9.2 (Critical). Because the flaws are in PHP and not in a plugin, they apply to any site whose
                        server runs an unpatched version, WordPress or not. PHP names Apache&apos;s mod_php setup as the
                        highest-risk configuration.
                    </BlogText>
                    <BlogText>
                        The{" "}
                        <a href="https://www.nsw.gov.au/ministerial-releases/update-on-php-response" target="_blank" rel="noopener noreferrer" className={sourceLink}>NSW Government said</a>{" "}
                        on 22 October that it had temporarily taken some of its websites offline while patches were
                        applied, and that no agency had reported an information breach. Exploitation attempts have been
                        seen. On 22 October,{" "}
                        <a href="https://www.bankinfosecurity.com/waiting-for-php2shell-onslaught-as-pocs-proliferate-a-33190" target="_blank" rel="noopener noreferrer" className={sourceLink}>Sophos reported</a>{" "}
                        that the attempts it had observed were unsuccessful. Canada&apos;s{" "}
                        <a href="https://cyber.gc.ca/en/alerts-advisories/al26-026-critical-vulnerabilities-impacting-php-cve-2026-109618-cve-2026-109619" target="_blank" rel="noopener noreferrer" className={sourceLink}>Cyber Centre alert</a>{" "}
                        of 21 October, updated on 23 October, reported a public proof of concept and no active
                        exploitation identified at that time. Neither observation rules out successful attacks
                        elsewhere, and we haven&apos;t verified a worldwide count of compromised websites.
                    </BlogText>
                    <BlogList
                        items={[
                            "Find out which PHP version your server runs. Your host's control panel shows it, and so does Tools, Site Health, Info in WordPress.",
                            "If it's below the fixed release for its branch, ask your host to update it, or update it yourself if you run the server.",
                            "On PHP 8.1 or older, the PHP project no longer ships updates. PHP says some distributions provide backported fixes; otherwise, move to a supported version.",
                            "A firewall rule from your host or CDN reduces exposure while you wait, but it doesn't replace the update. Vercel's bulletin says the same about its own rules.",
                        ]}
                    />
                    <BlogText>
                        A site that doesn&apos;t run PHP, such as a Next.js site on Vercel, isn&apos;t exposed to these two
                        flaws.{" "}
                        <a href="https://vercel.com/kb/bulletin/php2shell-security-bulletin" target="_blank" rel="noopener noreferrer" className={sourceLink}>Vercel&apos;s bulletin</a>{" "}
                        limits its PHP2Shell guidance to PHP functions and PHP backends behind Vercel. That isn&apos;t the
                        same as being safe. A headless setup that keeps WordPress as its backend still runs PHP there,
                        and the Next.js flaw described above needed patching too. Whatever the stack, someone has to be
                        watching for advisories like this one and acting on them.
                    </BlogText>
                    {/* 27 Oct 2026. Checked against PHP's 26 Oct notice and Node's 21 Oct advisory. Neither
                        reports attacks, so this paragraph doesn't mention exploitation. */}
                    <BlogText>
                        A second fix followed on 26 October, for a different flaw. CVE-2026-111497 is in Brotli, a
                        compression library bundled with PHP&apos;s official Windows packages and with Node.js.{" "}
                        <a href="https://www.php.net/archive/2026.php#2026-10-26-1" target="_blank" rel="noopener noreferrer" className={sourceLink}>PHP rebuilt its Windows packages</a>{" "}
                        as 8.5.12-1, 8.4.27-1, 8.3.36-1 and 8.2.35-1. The version number PHP reports doesn&apos;t change,
                        so the -1 in the package name is how you tell them apart. PHP says the flaw is reachable on
                        Windows when cURL decompresses responses automatically, which is off by default but can be
                        switched on by applications and libraries.{" "}
                        <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank" rel="noopener noreferrer" className={sourceLink}>Node.js fixed the same flaw</a>{" "}
                        on 21 October in versions 22.23.4, 24.22.1 and 26.12.1, and said malicious Brotli data could
                        crash a process, expose its memory or let an attacker run code. Moving from PHP to Node.js
                        wouldn&apos;t have avoided this one, because the flaw was in a library both of them bundle, not
                        in the website&apos;s own code.
                    </BlogText>

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
                    <BlogText>
                        If you want to keep WordPress and need someone to repair it and look after updates, our{' '}
                        <Link href="/services/wordpress" className={inlineLink}>WordPress website service</Link>{' '}
                        covers fixes, redesigns and new builds. The written quote names who handles updates, backups and
                        security patches after launch.
                    </BlogText>

                    <BlogHeader id="honest-conclusion">So is a custom build safer?</BlogHeader>
                    <BlogText>
                        On the evidence of this one week, no, and we would be contradicting our own patch notes to say
                        otherwise. A custom application can remove the need for particular privileged plugins,
                        but its npm dependency tree and external services also need an inventory. Fewer WordPress
                        plugins does not establish fewer dependencies or lower overall risk. The framework underneath
                        it shipped a 9.5 unauthenticated remote code execution while this article was being researched.
                    </BlogText>
                    <BlogText>
                        The useful advantage is a controlled release process: inventory dependencies, review updates,
                        test critical flows and deploy a known artifact. WordPress can also use staged releases.
                        Neither a passing build nor an advisory scan proves the absence of malware. Our{' '}
                        <Link href="/blog/wordpress-vs-nextjs#security-recovery" className={inlineLink}>security repair comparison</Link>{' '}
                        explains why patching and compromise recovery require different work.
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
                        covers the performance half of the same trade-off. Cloudflare pitched EmDash&apos;s sandboxed
                        plugins at the same problem, and{" "}
                        <Link href="/blog/cloudflare-emdash-wordpress-replacement" className={inlineLink}>
                            our EmDash review
                        </Link>{" "}
                        covers what that sandbox does and doesn&apos;t change.
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
                            Book a 15-minute review <ArrowRight className="h-4 w-4" />
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
        </>
    );
}
