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

const postId = "woocommerce-low-conversion-rate";
const postFAQs = blogPosts.find((p) => p.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/woocommerce-low-conversion-rate";
const title = "WooCommerce Low Conversion Rate: Diagnose It Before You Blame Speed";
const description =
    "A measured way to work out why a WooCommerce store converts badly: define the metric, find the stage that changed, and separate the causes WooCommerce creates from the ones every store has.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/woocommerce-low-conversion-rate" },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "woocommerce low conversion rate",
        "woocommerce conversion rate",
        "improve woocommerce conversion",
        "woocommerce checkout abandonment",
        "woocommerce cart fragments",
        "woocommerce variations slow",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-08-16",
        modifiedTime: "2026-08-25",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/woocommerce-low-conversion-rate")],
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
            image: ogImageUrlForPath("/blog/woocommerce-low-conversion-rate"),
            datePublished: "2026-08-16T00:00:00-05:00",
            dateModified: "2026-08-25T00:00:00-05:00",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["WooCommerce", "WordPress performance", "Ecommerce conversion", "Next.js", "Headless commerce"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "WooCommerce",
            inLanguage: "en-US",
            citation: [
                { "@type": "CreativeWork", name: "WooCommerce: Best practices for the use of the Cart Fragments API", url: "https://developer.woocommerce.com/2023/06/16/best-practices-for-the-use-of-the-cart-fragments-api/" },
                { "@type": "CreativeWork", name: "WooCommerce: Cart and Checkout blocks becoming the default experience", url: "https://developer.woocommerce.com/2023/08/18/cart-and-checkout-blocks-becoming-the-default-experience/" },
                { "@type": "CreativeWork", name: "WooCommerce source: variable product AJAX variation threshold", url: "https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/wc-template-functions.php" },
                { "@type": "CreativeWork", name: "WooCommerce source: account and guest checkout settings", url: "https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/admin/settings/class-wc-settings-accounts.php" },
                { "@type": "CreativeWork", name: "WooCommerce source: default address and checkout fields", url: "https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/class-wc-countries.php" },
                { "@type": "CreativeWork", name: "WooCommerce source: shipping settings defaults", url: "https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/admin/settings/class-wc-settings-shipping.php" },
            ],
            wordCount: 3404,
            timeRequired: "PT10M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            about: [
                { "@type": "Thing", name: "WooCommerce", sameAs: ["https://en.wikipedia.org/wiki/WooCommerce"] },
                { "@type": "Thing", name: "Conversion rate optimization", sameAs: ["https://en.wikipedia.org/wiki/Conversion_rate_optimization"] },
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
                { "@type": "ListItem", position: 3, name: "WooCommerce Low Conversion Rate", item: canonicalUrl },
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

export default function WooCommerceLowConversionRatePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal selection:bg-stone-200">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb items={postCrumbs(postId, "WooCommerce conversion rate")} />

                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">WooCommerce</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WooCommerce low conversion rate:{" "}
                            <span className="italic text-cognac">diagnose it before you blame speed</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Most stores decide the cause before they measure it, and speed is the usual suspect because
                            it is the easiest thing to have an opinion about. This is the order we work in instead:
                            define the metric, find the stage that actually changed, then separate the problems
                            WooCommerce creates from the ones every store has.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            No industry benchmark is quoted here, and no revenue figure is calculated for you. Both
                            depend on your own catalogue and margin, and a number borrowed from someone else&apos;s
                            store is worse than no number.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        bio="Hassan rebuilds WooCommerce stores that have outgrown the plugin stack holding them together."
                    />

                    <BlogHeader id="short-answer">What actually causes a low WooCommerce conversion rate?</BlogHeader>
                    <BlogText>
                        <BlogHighlight>
                            A low conversion rate is a symptom with at least four unrelated causes, and WooCommerce
                            contributes to only some of them.
                        </BlogHighlight>{" "}
                        Traffic quality, offer and pricing, funnel friction, and technical performance all move the same
                        number. Fixing the wrong one costs money and proves nothing, because the metric moves for
                        reasons you did not control either way.
                    </BlogText>
                    <BlogText>
                        The useful first question is not why is it low. It is <em>which stage changed, and when</em>.
                        Everything below is a way of answering that before spending anything.
                    </BlogText>

                    <BlogHeader id="define-metric">Why does WooCommerce not give you a conversion rate?</BlogHeader>

                    <BlogQuote>
                        A low conversion rate has at least four unrelated causes, and speed is only the easiest one to blame.
                    </BlogQuote>

                    <BlogText>
                        Hosted platforms hand you a conversion rate and pick the definition for you. WooCommerce does
                        not, and that is an advantage only if you take it. Write down the definition before you look at
                        a chart: sessions or users as the denominator, which order statuses count as a conversion,
                        whether failed and cancelled orders are excluded, and whether internal and bot traffic is
                        filtered.
                    </BlogText>
                    <BlogText>
                        Two dashboards on the same store routinely disagree by a wide margin, and the usual cause is
                        that WooCommerce counts orders at one status while an analytics tool counts a purchase event
                        that fires earlier. Neither is wrong. They are answering different questions, and a store owner
                        comparing them is measuring the gap between two definitions rather than anything about the shop.
                    </BlogText>

                    <BlogHeader id="which-stage">Which funnel stage did your WooCommerce conversion rate drop at?</BlogHeader>
                    <BlogText>
                        A single percentage tells you almost nothing. The four transitions do:
                    </BlogText>
                    <BlogList
                        items={[
                            "Landing to product view. If this fell, look at traffic sources and landing pages, not at the checkout.",
                            "Product view to add to cart. This is a product page problem: price, availability, delivery information, images, or a variation selector that does not respond.",
                            "Add to cart to checkout started. This is where cart behaviour and unexpected costs live.",
                            "Checkout started to order placed. This is payment, validation, shipping calculation and account requirements.",
                        ]}
                    />
                    <BlogText>
                        Get those four numbers before forming any theory. If the drop is between product view and add to
                        cart, no amount of checkout optimisation will move it, and a great deal of money gets spent
                        finding that out the expensive way.
                    </BlogText>

                    <BlogHeader id="segment">Why does a sitewide conversion rate hide the cause?</BlogHeader>
                    <BlogText>
                        A sitewide conversion rate is an average of populations that behave nothing like each other.
                        Split it four ways before going further: device, traffic source, new against returning, and
                        geography.
                    </BlogText>
                    <BlogText>
                        The reason is practical. A drop that appears only on mobile is a layout, tap-target or
                        payment-method problem. A drop that appears only on paid traffic is usually a targeting or
                        landing-page mismatch and has nothing to do with your store. A drop that appears only on new
                        visitors points at trust and clarity rather than at the checkout, because returning customers
                        already decided those questions.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>
                            If the rate is flat within every segment but down in aggregate, nothing broke.
                        </BlogHighlight>{" "}
                        Your traffic mix changed, and you are looking at arithmetic rather than a problem. This is the
                        single most common false alarm we see, and it is invisible until you segment.
                    </BlogText>

                    <BlogQuote>
                        An average across mobile and desktop, paid and organic, new and returning is four different stores reported as one number.
                    </BlogQuote>

                    <BlogHeader id="traffic-quality">Can a traffic change lower conversion on its own?</BlogHeader>
                    <BlogText>
                        Conversion rate has a denominator, and it is easy to change it by accident. A new campaign, a
                        post that went around, a page that started ranking for something loosely related, or a bot
                        filter that stopped working will all move the rate without a single customer behaving
                        differently.
                    </BlogText>
                    <BlogText>
                        Check whether sessions rose at the same time the rate fell. If they did, sort the causes in that
                        order rather than reaching for the checkout. The store did not get worse; a larger share of the
                        people arriving were never going to buy.
                    </BlogText>

                    <BlogHeader id="offer">What if the problem is the offer rather than the store?</BlogHeader>
                    <BlogText>
                        This is the cause a technical article is least equipped to fix and most likely to skip. Price
                        against the alternatives your buyer is actually comparing, delivery cost and timing, returns
                        terms, and whether the product page answers the questions that stop someone buying: sizing,
                        materials, compatibility, and what happens if it turns out to be wrong.
                    </BlogText>
                    <BlogText>
                        Trust belongs here too. A store a shopper has not heard of is asking a stranger for card
                        details, and the things that answer that are unglamorous: a returns policy written in plain
                        terms, a contact route that is not only a form, delivery expectations stated before the checkout
                        rather than inside it, and reviews that read like people wrote them.
                    </BlogText>
                    <BlogText>
                        The funnel tells you whether to look here. If add-to-cart is healthy and the loss is at
                        checkout, the offer landed and the friction is downstream. If the loss is between product view
                        and add to cart on a page that loads quickly and whose selector responds, then the stack is not
                        what is failing you.
                    </BlogText>

                    <BlogHeader id="cart-fragments">What does wc-cart-fragments.js do to your add-to-cart?</BlogHeader>
                    <BlogText>
                        WooCommerce keeps the mini-cart accurate with a script called <code>wc-cart-fragments.js</code>,
                        which calls the <code>get_refreshed_fragments</code> action. Since WooCommerce 7.8 it is
                        enqueued {spec("woocommerce-cart-fragments-default").value}, not on every page. WooCommerce made
                        that change because the previous behaviour, in its own words, &ldquo;could severely impact the
                        load on the server and the responsiveness of a site&rdquo;. Checked{" "}
                        {asOf("woocommerce-cart-fragments-default")}.
                    </BlogText>
                    <BlogText>
                        That history matters for diagnosis, because the old behaviour has not disappeared from real
                        stores. The script is still pulled in wherever the Cart widget renders, whenever a third-party
                        plugin registers it as a dependency, and whenever a theme enqueues it directly. Several popular
                        themes hard-code the widget into their templates, so a store can still be making the request on
                        every page without anyone having chosen that. Confirm it on your own store in the browser
                        network panel by filtering for <code>wc-ajax</code>. On a cached site it is the one request that
                        cannot be cached, because it carries per-visitor state.
                    </BlogText>
                    <BlogText>
                        The symptom is specific and worth recognising: pages appear quickly, then the header cart count
                        arrives late or briefly shows the wrong number. To a shopper who has just clicked add to cart,
                        that reads as the click not working, and the common response is to click again. Duplicate line
                        quantities in your orders are a signal worth checking for directly.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>This is a real mechanism, not a general slowness complaint</BlogHighlight>, which
                        is why it belongs in a conversion diagnosis rather than a performance one. Our{" "}
                        <Link href="/blog/woocommerce-too-slow" className={inlineLink}>
                            WooCommerce speed diagnosis guide
                        </Link>{" "}
                        covers how to confirm it in the network panel.
                    </BlogText>

                    <BlogHeader id="variable-products">Do WooCommerce variable products convert worse than simple ones?</BlogHeader>
                    <BlogText>
                        WooCommerce changes how it loads a variable product at a specific point, and the number is worth
                        knowing: {spec("woocommerce-variation-ajax-threshold").value} variations. At or below that,
                        every variation is preloaded into the page as JSON so the selector can resolve price and stock
                        instantly. Above it, the page ships without them and the selector fetches over AJAX instead.
                        Checked {asOf("woocommerce-variation-ajax-threshold")}.
                    </BlogText>
                    <BlogText>
                        Both sides of that line have a cost, which is why the threshold exists. Below it you are paying
                        in page weight, and a product with several attributes multiplying together reaches a large JSON
                        payload faster than anyone expects. Above it you are paying in latency at the moment the
                        customer picks an option.
                    </BlogText>
                    <BlogText>
                        The conversion symptom is a selector that feels unresponsive, or a price that appears a beat
                        after the option is chosen. Compare add-to-cart rate on your simple products against your
                        variable ones. If the gap is large, you have found the stage and the cause in a single
                        comparison, and the fix is a product-page problem rather than a sitewide one.
                    </BlogText>

                    <BlogHeader id="checkout-stack">What runs on your WooCommerce checkout while customers wait?</BlogHeader>
                    <BlogText>
                        On Shopify the checkout is Shopify&apos;s. Since <code>checkout.liquid</code> was withdrawn,
                        changes are made through checkout UI extensions and Functions, inside the boundaries Shopify
                        defines, and part of that surface stays on Plus. The dated version of that story is in our{" "}
                        <Link href="/blog/shopify-plus-still-slow" className={inlineLink}>
                            write-up of where a Shopify Plus store can still be slow
                        </Link>. On WooCommerce the checkout is yours. Every plugin that hooks into it is running on the
                        page where the money is, and that is both the risk and the opportunity.
                    </BlogText>
                    <BlogText>
                        Work through what is actually attached: payment gateways, shipping rate calculators, tax
                        services, address validation, fraud screening, marketing pixels and any checkout field manager.
                        Several of these call an external service while the customer waits. A shipping calculator that
                        queries a carrier API on every address keystroke is not a slow site, it is a slow checkout, and
                        it is invisible in a home page performance score.
                    </BlogText>
                    <BlogText>
                        Which checkout you are timing also matters. The Cart and Checkout blocks became the default for{" "}
                        {spec("woocommerce-blocks-checkout-default").value}, and existing stores kept the shortcode
                        checkout when they upgraded, so a store built before November 2023 is likely still running the
                        older one and carrying whatever was hooked into it. Checked{" "}
                        {asOf("woocommerce-blocks-checkout-default")}.
                    </BlogText>
                    <BlogText>
                        Time the checkout as a flow rather than as a page. Load, fill, submit, confirm. The number that
                        matters is how long the customer waits after pressing the button that spends their money.
                    </BlogText>

                    <BlogHeader id="guest-checkout">Is guest checkout switched off in your WooCommerce settings?</BlogHeader>
                    <BlogText>
                        WooCommerce ships guest checkout {spec("woocommerce-guest-checkout-default").value}, under
                        Settings, Accounts and Privacy, where the label reads &ldquo;Enable guest checkout
                        (recommended)&rdquo;. That default matters for diagnosis: if yours is off, somebody or something
                        turned it off, and it is worth finding out who and why rather than assuming it was considered.
                        Checked {asOf("woocommerce-guest-checkout-default")}.
                    </BlogText>
                    <BlogText>
                        The related check is field count. The default classic checkout shows{" "}
                        {spec("woocommerce-classic-checkout-fields").value} billing fields, and the block checkout shows
                        10 and requires 8, hiding company name and making phone optional. Those counts are for the
                        default locale, because WooCommerce overlays per-country rules that make state or postcode
                        optional in many places. Company name and the second address line are the usual candidates for
                        removal on a store that has never reviewed them.
                    </BlogText>

                    <BlogHeader id="unexpected-cost">Why does shipping cost shown late lose the order?</BlogHeader>
                    <BlogText>
                        Shipping and tax appearing for the first time at the last step is one of the most reliable ways
                        to lose an order, and it has nothing to do with your stack. Worth knowing before you go looking:
                        WooCommerce ships the setting that hides shipping cost until an address is entered{" "}
                        {spec("woocommerce-shipping-cost-requires-address-default").value}. Checked{" "}
                        {asOf("woocommerce-shipping-cost-requires-address-default")}. So on a store where the price
                        arrives late, that is usually a decision someone made, a shipping plugin&apos;s behaviour, or a
                        rate that genuinely cannot be calculated earlier, rather than a WooCommerce default doing it to
                        you.
                    </BlogText>
                    <BlogText>
                        This is worth naming in a technical article because it is frequently misdiagnosed as one. A
                        store that rebuilt its front end and saw no change often had this problem the whole time.
                    </BlogText>

                    <BlogHeader id="wp-admin">Does a slow wp-admin affect your conversion rate?</BlogHeader>
                    <BlogText>
                        WooCommerce backend slowness is real and it is worth fixing, but it costs you staff time rather
                        than orders. Customers never see wp-admin. If your evidence is that the admin feels slow, you
                        have evidence about order processing and inventory work, not about the storefront.
                    </BlogText>
                    <BlogText>
                        Keep the two separate in your notes. Conflating them is how a store ends up buying hosting to
                        solve an add-to-cart problem.
                    </BlogText>

                    <BlogHeader id="speed-limits">How much can site speed actually explain?</BlogHeader>
                    <BlogText>
                        Speed explains the stages where waiting is the mechanism. A product page that takes several
                        seconds to become interactive can lose someone before they finish choosing a variation, and a
                        checkout that stalls after the pay button can lose an order that had already been won. It
                        explains very little at the stages where the decision is about price, delivery, trust, or
                        whether the product is the right one.
                    </BlogText>
                    <BlogText>
                        That boundary is the useful part. If your loss is between product view and add to cart on a page
                        that already loads quickly, more performance work will not move it, and performance work is
                        still worth doing on its own merits.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>
                            Treat a speed improvement as a hypothesis to test on your own store, not as a result you
                            have already earned.
                        </BlogHighlight>{" "}
                        Anyone quoting you a percentage lift before touching your site is selling you someone
                        else&apos;s data.
                    </BlogText>

                    <BlogHeader id="hypothesis">How do you write a testable conversion hypothesis?</BlogHeader>
                    <BlogText>
                        Write it down in this shape: the drop is at [stage], caused by [mechanism], and if I change
                        [one thing] then [metric] should move by [direction] within [window]. If you cannot fill in the
                        stage, go back and get the four funnel transitions first. If you cannot state what would prove you wrong, you are not testing
                        anything, you are redecorating.
                    </BlogText>
                    <BlogText>
                        Change one thing at a time. A rebuild that alters the design, the copy, the offer and the stack
                        together will change the number, and it will never tell you which part did it.
                    </BlogText>

                    <BlogHeader id="what-its-worth">What is a conversion fix actually worth?</BlogHeader>
                    <BlogText>
                        State it as a scenario with its assumptions visible: at your current sessions and average
                        order value, a change of X points at this stage would be worth Y per month, IF the change holds
                        and nothing else moves. That is the honest answer to what a fix is worth, and it is the only
                        form of the answer that survives contact with a month of real data.
                    </BlogText>
                    <BlogText>
                        Write the IF down and keep it attached to the number. The moment it is dropped, a conditional
                        model becomes a forecast, and a forecast becomes a promise somebody expects you to hit. That is
                        how agencies end up defending revenue figures they never had the data to produce.
                    </BlogText>

                    <BlogHeader id="repair-or-rebuild">Should you repair the WooCommerce store or rebuild it?</BlogHeader>
                    <BlogText>
                        Most stores should repair. If the diagnosis lands on a single plugin, a shipping call, a
                        checkout field or cart fragments, that is a fix measured in hours and it does not need a new
                        platform.
                    </BlogText>
                    <BlogText>
                        The case for a rebuild is different and it is rarely about speed alone: it is when the plugin
                        stack has become the product, when nobody is willing to update anything because something breaks
                        each time, or when the checkout has enough third-party code in it that no one can say what runs
                        during a purchase. That is a maintainability problem showing up as a conversion problem, and
                        more optimisation does not resolve it.
                    </BlogText>

                    <BlogQuote>
                        A maintainability problem and a conversion problem look identical from the dashboard, and only one of them is fixed by a rebuild.
                    </BlogQuote>
                    <BlogText>
                        If you are weighing that, our{" "}
                        <Link href="/services/woocommerce" className={inlineLink}>
                            WooCommerce migration service
                        </Link>{" "}
                        starts with the assessment rather than the rebuild, and several of our guides exist to talk
                        people out of a migration they do not need. The{" "}
                        <Link href="/blog/woocommerce-vs-custom-website" className={inlineLink}>
                            WooCommerce versus custom build comparison
                        </Link>{" "}
                        sets out where each one genuinely wins.
                    </BlogText>

                    <BlogHeader id="what-to-ask">What should you ask before accepting a conversion quote?</BlogHeader>
                    <BlogText>
                        Five questions separate a diagnosis from a pitch. A proposal that cannot name the funnel stage
                        it is fixing has not looked at your funnel, and one that cannot say what result would prove it
                        wrong is not proposing a test. Ask these before any money changes hands.
                    </BlogText>
                    <BlogList
                        items={[
                            "Which funnel stage are you fixing, and what is its current number? A proposal that cannot name the stage has not looked.",
                            "What is the hypothesis, and what result would show it was wrong?",
                            "How will we tell your change apart from seasonality, a traffic-mix shift or a campaign that ended?",
                            "Which of these are storefront changes and which are checkout changes? They carry different risk.",
                            "What happens to the finding if it turns out to be the offer rather than the site?",
                        ]}
                    />

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Want the diagnosis before the quote?</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            Our{" "}
                            <Link href="/free-audit" className="font-semibold text-orange-300 underline underline-offset-4">
                                free technical audit
                            </Link>{" "}
                            scans a URL and reports what it finds, with no signup and nothing invented to sell you
                            something. If the answer turns out to be your offer rather than your stack, we will say so.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Book a 30-minute review <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    <FAQAccordion faqs={postFAQs} />

                    <BlogText>
                        Related reading:{" "}
                        <Link href="/blog/woocommerce-too-slow" className={inlineLink}>
                            WooCommerce too slow, diagnose before you rebuild
                        </Link>{" "}
                        covers the performance half in detail, and{" "}
                        <Link href="/blog/woocommerce-migration-cost" className={inlineLink}>
                            WooCommerce migration cost
                        </Link>{" "}
                        covers what a rebuild actually involves if the diagnosis takes you there.
                    </BlogText>

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
