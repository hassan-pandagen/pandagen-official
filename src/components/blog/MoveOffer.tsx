import Link from "next/link";
import WrittenCheckButton from "@/components/ui/WrittenCheckButton";

// 22 Nov 2026: the posts that bring most of our search traffic are about slow or
// breaking platforms, and their readers are the migration buyers. This puts the
// offer and the free written check in front of them. Facts match company-facts.ts.
export default function MoveOffer({ platform }: { platform: string }) {
  return (
    <aside className="my-10 rounded-xl border border-stone-300 bg-stone-50 p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cognac">If you&apos;d rather move than keep fixing</p>
      <h2 className="mt-2 text-2xl font-bold text-charcoal">We move {platform} sites without losing pages or links.</h2>
      <p className="mt-3 text-stone-700 leading-relaxed">
        Every page and post is listed, every old URL gets a redirect, and you get a fixed price in writing first. Moving a small site starts
        at $1,500. If we don&apos;t deliver your signed scope, you get 100% back. We can&apos;t promise rankings; we can show you the plan.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-5">
        <WrittenCheckButton location="blog_move_offer" className="inline-flex min-h-12 items-center bg-[#1C1917] px-6 py-3 text-[15px] font-medium text-white">
          Get your free written check
        </WrittenCheckButton>
        <Link href="/services/wordpress-migration" className="font-semibold text-cognac underline underline-offset-4">How a move works</Link>
      </div>
    </aside>
  );
}
