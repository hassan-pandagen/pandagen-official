import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ogImageForPath } from "@/lib/seo/og";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import CaseStudyShot from "@/components/work/CaseStudyShot";

const canonicalUrl = "https://www.pandacodegen.com/work/sleek-jackets";
const title = "Sleek Jackets: an Outerwear Storefront Concept Build";
const description =
    "An outerwear storefront concept built by PandaCodeGen: a product-led collection page and checkout flow, currently a private preview with purchases not live.";

export const metadata: Metadata = {
    title: { absolute: `${title} | PandaCodeGen` },
    description,
    robots: { index: true, follow: true },
    openGraph: {
        title,
        description,
        type: "article",
        url: canonicalUrl,
        images: [ogImageForPath("/work/sleek-jackets")],
    },
    alternates: { canonical: "/work/sleek-jackets" },
};

export default function SleekJacketsCaseStudy() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Work", href: "/work" },
                            { label: "Sleek Jackets", href: "/work/sleek-jackets" },
                        ]}
                    />

                    <CaseStudyShot
                        src="/work/sleek-jackets.png"
                        alt="Sleek Jackets homepage: an outerwear collection page in private preview, purchases not live."
                        caption="Sleek Jackets. A private-preview outerwear storefront concept; purchases are not live."
                    />

                    <RelationshipDisclosure slug="sleek-jackets" />

                    <header className="mb-10 mt-6 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">
                            Concept build · Outerwear storefront
                        </p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Sleek Jackets: <span className="italic text-cognac">an outerwear storefront concept</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600">
                            A product-led outerwear storefront, currently a private preview: the live demo states
                            directly that purchases are not enabled yet. Whether this becomes a founder-owned brand or a
                            client-run store is still undecided, so it is held here as a concept build rather than
                            labelled either way ahead of that decision.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Live preview at{" "}
                            <a
                                href="https://sleek-jackets.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                            >
                                sleek-jackets.vercel.app <ExternalLink className="h-3 w-3" aria-hidden="true" />
                            </a>
                            .
                        </p>
                    </header>

                    <section className="mb-14">
                        <h2 className="mb-4 text-3xl font-bold text-charcoal">What this demonstrates</h2>
                        <p className="mb-4 text-lg leading-8 text-stone-700">
                            Outerwear sells on material and fit, which a thumbnail grid undersells the same way a patch
                            or a garment photographed flat does. The storefront leans on large product imagery and a
                            collection page built to carry a small catalogue without looking sparse, ahead of the
                            checkout and payment work that would come with an actual launch decision.
                        </p>
                        <p className="text-lg leading-8 text-stone-700">
                            Built the same way a real storefront would be: Next.js, with checkout and payment
                            integration scoped the same way described on the{" "}
                            <Link href="/services/ecommerce" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                                e-commerce services page
                            </Link>{" "}
                            once a launch decision is made.
                        </p>
                    </section>

                    <section className="rounded-3xl bg-charcoal p-8 md:p-12">
                        <h2 className="mb-4 text-3xl font-bold text-white">Launching a product storefront?</h2>
                        <p className="mb-8 max-w-2xl text-lg leading-8 text-stone-300">
                            If you're weighing a custom storefront against a template platform, tell us what you're
                            selling and we'll help you work out the right scope.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-3 font-semibold text-white transition-colors hover:bg-cognac/90"
                            >
                                Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                            <Link
                                href="/work"
                                className="inline-flex items-center gap-2 rounded-full border border-stone-500 px-7 py-3 font-semibold text-white transition-colors hover:border-white"
                            >
                                See the other records
                            </Link>
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
