import Link from "next/link";
import StackGuide, { GuideTable, stackGuideMetadata } from "@/components/blog/StackGuide";
import { asOf, spec } from "@/data/spec-facts";

const id = "website-monthly-running-cost";
export const metadata = stackGuideMetadata(id);

// 8 Oct 2026, owner's answers: domains are bought by the client (we have never bought
// one); sites on a maintenance or SEO package can run on our Vercel account and move to
// the client's own account on request (done for a medical practice client when their
// contract ended; not named without the client's permission); Supabase starts on its Free
// plan and moves to Pro at launch. The $20 and $45 totals are sums of the spec-facts
// values used below: re-add them if a price changes.
//
// 11 Oct 2026: added the shared-hosting renewal section. Each price was read from the
// host's own pricing page that day (spec-facts.json, 30-day review). A reader pointed us to
// an affiliate dataset with the same SiteGround and Bluehost figures; the prices cite the hosts,
// and the closing paragraph credits him for the idea (owner, 11 Oct 2026).
const times = (intro: string, renewal: string) => {
  const ratio = parseFloat(renewal.replace(/[^0-9.]/g, "")) / parseFloat(intro.replace(/[^0-9.]/g, ""));
  return `${(Math.round(ratio * 10) / 10).toString()} times`;
};

export default function Page() {
  const vercelPro = spec("vercel-pro-price");
  const vercelHobby = spec("vercel-hobby-price");
  const vercelCdn = spec("vercel-pro-cdn-capacity");
  const sanityFree = spec("sanity-free-plan");
  const sanityGrowth = spec("sanity-growth-price");
  const resendFree = spec("resend-free-plan");
  const githubFree = spec("github-free-plan");
  const supabaseFree = spec("supabase-free-plan");
  const supabasePro = spec("supabase-pro-price");
  const supabaseIpv4 = spec("supabase-ipv4-addon");
  const sgIntro = spec("siteground-startup-intro");
  const sgRenewal = spec("siteground-startup-renewal");
  const bhIntro = spec("bluehost-starter-intro");
  const bhRenewal = spec("bluehost-starter-renewal");
  const hoIntro = spec("hostinger-premium-intro");
  const hoRenewal = spec("hostinger-premium-renewal");
  return <StackGuide id={id}>
    <p><strong>A custom website with a content editor costs about $20 a month to run on our usual stack: Vercel Pro hosting at {vercelPro.value}, with Sanity&apos;s editor and Resend&apos;s email on their free plans. If the project also needs a database and sign-in, Supabase Pro adds {supabasePro.value}, for about $45 a month in total.</strong> Your domain is extra, paid yearly to whichever registrar you bought it from. Prices as of {asOf("vercel-pro-price")}.</p>
    <h2>The monthly bill, line by line</h2>
    <GuideTable caption={`Monthly running costs as of ${asOf("vercel-pro-price")}`} headers={["Job", "Service and plan", "Monthly cost", "What the plan includes"]} rows={[
      ["Hosting", "Vercel Pro", vercelPro.value, vercelPro.qualifier],
      ["Content editor", "Sanity Free", sanityFree.value, sanityFree.qualifier],
      ["Emails from forms", "Resend Free", resendFree.value, resendFree.qualifier],
      ["Code", "GitHub Free", githubFree.value, githubFree.qualifier],
      ["Database and sign-in, if you need them", "Supabase Pro", supabasePro.value, supabasePro.qualifier?.replace(/^with /, "")],
      ["Domain", "Your registrar", "Paid yearly", "You buy it in your own name."],
    ]} />
    <p>That&apos;s about $20 a month for the website and editor, and about $45 with a database. Each plan includes usage allowances, and going over them costs extra. Vercel Pro, for example, includes {vercelCdn.value}. Check your own traffic against the allowances on <a href={vercelPro.source}>Vercel</a>, <a href={sanityFree.source}>Sanity</a>, <a href={resendFree.source}>Resend</a> and <a href={supabasePro.source}>Supabase</a> before launch.</p>
    <h2>What the under-$50 example assumes</h2>
    <p>This is a starting vendor budget, not a price ceiling: one Vercel deploying seat, one Supabase project on Micro compute covered by its included compute credit, and Sanity and Resend usage within their free allowances. Extra deploying seats, larger compute, paid editor seats, email volume and add-ons change the total. Domain renewal, taxes, maintenance and a separate file-backup service are outside this example.</p>
    <p>Backups need their own scope. Supabase Pro&apos;s included daily backups cover the database, <a href="https://supabase.com/docs/guides/platform/backups">not files uploaded to Storage</a>. Agree where copies of uploaded files live, how long they are retained and who tests restoring them before treating the hosting bill as the complete operating cost.</p>
    <p>If your database connection needs a dedicated IPv4 address, Supabase&apos;s optional <a href={supabaseIpv4.source}>IPv4 add-on</a> adds {supabaseIpv4.value}, {supabaseIpv4.qualifier}. That makes the Pro plus IPv4 baseline about $29 per month, or about $49 including a separate Vercel Pro subscription. Larger compute, extra projects and usage can raise the bill. When hosting is included in your maintenance package, do not add a second standalone hosting charge.</p>
    <h2>Why not host on Vercel&apos;s free plan?</h2>
    <p>Vercel&apos;s Hobby plan is {vercelHobby.value}, but only {vercelHobby.qualifier}. A business website is commercial, so it goes on Pro. Our guide to <Link href="/blog/nextjs-hosting-zero-cost">hosting Next.js for free</Link> explains what the free plans allow and when you outgrow them.</p>
    <h2>What do WordPress hosts charge after the first term?</h2>
    <p>The low prices shared hosts advertise are first-term rates, and the renewal price is what you pay after that. The table records USD offers with a separate check date for each host. The SiteGround snapshot has a renewal rate about {times(sgIntro.value, sgRenewal.value)} its first-term rate. Promotions can vary by date, region and checkout term, so the latest quote in your own checkout controls.</p>
    <GuideTable caption="Shared hosting first-term and renewal offers in USD, with check dates" headers={["Host and plan", "First term", "Renews at", "Commitment for the first-term price", "Checked"]} rows={[
      ["SiteGround StartUp", sgIntro.value, sgRenewal.value, sgIntro.qualifier ?? "", asOf("siteground-startup-intro")],
      ["Bluehost Starter", bhIntro.value, bhRenewal.value, bhIntro.qualifier ?? "", asOf("bluehost-starter-intro")],
      ["Hostinger Premium", hoIntro.value, hoRenewal.value, hoIntro.qualifier ?? "", asOf("hostinger-premium-intro")],
    ]} />
    <p>To compare hosts fairly, put the renewal prices side by side and note how long you have to commit to get the first-term rate. These are the hosts&apos; own published prices, and promotions change often, so check <a href={sgIntro.source}>SiteGround</a>, <a href={bhIntro.source}>Bluehost</a> and <a href={hoIntro.source}>Hostinger</a> before you buy. On our maintenance or SEO package, hosting is included, so there is no separate hosting renewal to plan for.</p>
    <p>Thanks to Randy Hilliard, whose <a href="https://bestreviewguide.co/renewal-price-shock-index-2026/">Renewal Price Shock Index</a> on BestReviewGuide.co pointed us to this gap. His index tracks intro and renewal prices across 29 plans and says openly that the tools it covers are affiliate partners. We checked every price above on the hosts&apos; own pages.</p>
    <h2>Why we start on Supabase&apos;s free plan</h2>
    <p>We build on Supabase&apos;s Free plan and switch to Pro when the project goes live, so you don&apos;t pay for the database during the build. The Free plan is {supabaseFree.value}, with {supabaseFree.qualifier}. Those last two limits are why a live business app goes on Pro. Not every site needs Supabase at all: read <Link href="/blog/sanity-vs-supabase">Sanity vs Supabase</Link> to see whether yours does.</p>
    <h2>When does Sanity start costing money?</h2>
    <p>Most small business websites stay on Sanity&apos;s Free plan, which covers {sanityFree.qualifier}. You&apos;d move to Growth, at {sanityGrowth.value}, if you need {sanityGrowth.qualifier}. Growth is charged per editor, so three editors on Growth would add $45 a month. Ladies 4 Jesus, a client site we moved from WordPress, runs on the Free plan: traffic is low and only a few people edit it.</p>
    <h2>Who owns each account?</h2>
    <p>You buy your domain in your own name. We&apos;ve never bought a domain for a client, and most of our clients already owned theirs, so your web address never depends on us. When a project needs Supabase, it goes on your own account at launch, as it does for <Link href="/work/a-step-above-medical">A Step Above Medical</Link>.</p>
    <p>Hosting depends on how you work with us. If you take our maintenance or SEO package and want us to host it, the site runs on our Vercel account and the hosting is included in the package. If you cancel, or would rather run it yourself, we move it to a Vercel account in your name. We did this for a medical practice client when their contract ended. Our guide to <Link href="/blog/do-you-own-your-website">checking that you own your website</Link> lists what to ask any developer.</p>
    <h2>Separate the build, ongoing services and advertising budget</h2>
    <p>The build price is fixed once the written scope is agreed. Additional features are priced separately and only proceed after written approval. Maintenance and advertising management have their own agreed scope and fee. The advertising budget pays for ad placements and is separate from the management fee. Provider subscriptions and usage charges should also be listed separately, with hosting identified as included when it is part of the package.</p>
    <h2>What isn&apos;t in the monthly bill</h2>
    <p>These are the vendor bills only. Building the site is a separate, one-time cost, covered in <Link href="/blog/how-much-does-a-website-cost">how much a website costs</Link>, and maintenance, SEO and new features are priced separately again. Paid tools you add later, such as a booking system, have their own plans.</p>
    <p>Planning a site on this stack? See our <Link href="/services/cms-development">Sanity website development</Link> service, or our <Link href="/services/backend-development">backend development</Link> service for a database and custom CRM.</p>
  </StackGuide>;
}
