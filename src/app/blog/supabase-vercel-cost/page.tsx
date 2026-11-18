import Link from "next/link";
import StackGuide, { GuideTable, stackGuideMetadata } from "@/components/blog/StackGuide";
import { spec } from "@/data/spec-facts";
import { BlogList } from "@/components/ui/BlogStyles";

const id = "supabase-vercel-cost";
export const metadata = stackGuideMetadata(id);

// 18 Nov 2026: Imran's draft, edited from the review notes (owner: "follow everything, don't
// change anything on your own"). Every vendor price was re-read on the vendors' own pages on
// 18 Nov 2026 and lives in spec-facts.json. The stage totals are typed sums of those facts:
//   small app: Supabase Pro $25 + Vercel Pro $20 = $45 (or $65 with the $20 request tier);
//   growing app, Supabase: $25 plan + $100 Large compute after the $10 credit + 22 GB disk at
//   $0.125 + 100 GB files at $0.0213 + 750 GB transfer above the allowance at $0.03 (all cached)
//   to $0.09 (all uncached) = $152 to $197;
//   growing app, Vercel: $20 plan + two seats at $20 + a $20 to $100 request tier = $80 to $160.
// Re-add them if a price changes.
// The typed server sizes, disk and file rates and the hard-limit sentence come from the
// spec-facts entries "supabase-compute-sizes", "supabase-pro-disk-storage-overage" and "vercel-pro-hard-limit".
export default function Page() {
  const supabasePro = spec("supabase-pro-price");
  const supabaseFreeEgress = spec("supabase-free-egress");
  const supabaseEgress = spec("supabase-pro-egress");
  const pitr = spec("supabase-pitr");
  const mau = spec("supabase-mau-overage");
  const customDomain = spec("supabase-custom-domain");
  const spendCap = spec("supabase-spend-cap");
  const cachedChange = spec("supabase-cached-egress-change");
  const selfHost = spec("supabase-self-hosting");
  const vercelPro = spec("vercel-pro-price");
  const vercelHobby = spec("vercel-hobby-commercial-use");
  const vercelCdn = spec("vercel-pro-cdn-capacity");
  const tiers = spec("vercel-flat-rate-cdn-tiers");
  const flatRateGa = spec("vercel-flat-rate-cdn-ga-date");
  const onDemand = spec("vercel-cdn-on-demand-included");
  const seat = spec("vercel-pro-additional-seat");
  const functions = spec("vercel-function-rates");
  const images = spec("vercel-image-transformation-rate");
  const builds = spec("vercel-standard-build-minute");
  const creditChange = spec("vercel-pro-credit-change");
  const workers = spec("cloudflare-workers-paid");
  const netlifyPersonal = spec("netlify-personal-price");
  const netlifyPro = spec("netlify-pro-price");
  const railway = spec("railway-plans");
  const render = spec("render-pricing");
  const fly = spec("fly-pricing");
  const coolify = spec("coolify-self-hosted");
  const droplet = spec("digitalocean-cheapest-droplet");
  const hetzner = spec("hetzner-cloud-from");
  const neon = spec("neon-pricing");
  const appwrite = spec("appwrite-pro");
  const planetscale = spec("planetscale-postgres-from");
  const firebase = spec("firebase-blaze");
  const aurora = spec("aurora-serverless");
  const src = (href: string, label: string) => <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>;
  return <StackGuide id={id}>
    <h2>The short answer</h2>
    <p><strong>For most small business apps, Supabase and Vercel together cost about $45 a month once you&apos;re live, and they stay the sensible choice until your bill passes a few hundred dollars a month.</strong> Prices in this article were read from each vendor&apos;s own pricing pages on 18 November 2026.</p>
    <BlogList items={[
      "Stay if you have fewer than about 100,000 monthly users, your files are small, and nobody on the team wants to run servers.",
      "Move the hosting first if your Vercel bill is driven by traffic, images or seats. Hosting is the easier half to move.",
      "Move the database last. Your data, logins and security rules live there, so it's the expensive half to move.",
      "Whatever you choose, own the accounts. The business should hold the Supabase, Vercel and domain logins, not the developer.",
    ]} />
    <p>AI coding tools suggest Supabase and Vercel because they&apos;re the quickest way to get a working app online: a database, logins, file storage and hosting with almost no setup. That&apos;s a good reason to start with them. It isn&apos;t a reason to stay without checking the bill. If an AI tool built your app, our <Link href="/blog/ai-built-website-checklist">checklist for AI-built websites</Link> covers what to check before you rely on it.</p>

    <h2>What you pay at each stage</h2>
    <p>Both services are free to build on, about $45 a month for a small live app, and a few hundred dollars a month for a busy one.</p>
    <h3>Stage 1: building and testing (free)</h3>
    <BlogList items={[
      `Supabase Free gives you a 500 MB database, 50,000 monthly users, 1 GB of file storage and ${supabaseFreeEgress.value}. A project is paused after one week with no activity, and you can have two active projects.`,
      `Vercel Hobby is free, but only for ${vercelHobby.value.toLowerCase()}, so a live business site needs Pro.`,
    ]} />
    <p>So the free plans are for building, not for running a business. Our guide <Link href="/blog/nextjs-hosting-zero-cost">Is Vercel free?</Link> explains what Hobby allows.</p>
    <h3>Stage 2: a small live app</h3>
    <p>Example: one developer, 5,000 monthly users, a 2 GB database, 20 GB of files and 100 GB of data transfer.</p>
    <GuideTable caption="A small live app, per month" headers={["Service", "Plan", "Monthly cost", "What's included"]} rows={[
      ["Supabase", "Pro", "$25", "100,000 monthly users, 8 GB database, 100 GB files, 250 GB transfer plus 250 GB of cached transfer, one small server"],
      ["Vercel", "Pro", vercelPro.value.replace(" a month", ""), `One developer seat, $20 of usage credit, ${vercelCdn.value.replace(" a month", "")}`],
      ["Total", "", "$45", ""],
    ]} />
    <p>If the site serves more than 1 million requests a month, Vercel&apos;s next tier adds $20, which makes the total $65. That applies to teams on Vercel&apos;s Flat Rate CDN, which is on by default for Pro teams created since {flatRateGa.value}. Older teams stay on on-demand billing unless they switch: {onDemand.value}.</p>
    <h3>Stage 3: a growing app</h3>
    <p>Example: three developers, 100,000 monthly users, a 30 GB database, 200 GB of files and 1 TB of data transfer.</p>
    <GuideTable caption="A growing app, per month" headers={["Service", "What drives the cost", "Monthly cost"]} rows={[
      ["Supabase", "$25 plan, a larger server ($110 less a $10 credit), extra disk and files, and transfer above the included allowance", "$152 to $197"],
      ["Vercel", `$20 plan, two extra seats at ${seat.value.replace(" each", "")}, and a request tier of $20 to $100`, "$80 to $160"],
      ["Total", "", "$232 to $357"],
    ]} />
    <p>The Supabase range depends on how much of the transfer is cached: cached transfer costs $0.03 per GB and uncached costs $0.09, each with its own 250 GB allowance. The Vercel range depends on how many requests the site serves. These examples leave out Vercel&apos;s charges for server functions, image resizing and builds, because they depend on how the app is written. They draw on the $20 credit first.</p>

    <h2>Where the bills jump</h2>
    <p>The plan price is rarely what surprises people. The extras are.</p>
    <h3>On Supabase</h3>
    <GuideTable caption="Supabase charges beyond the Pro plan" headers={["Charge", "Price", "When it bites"]} rows={[
      ["Larger server", "$15, $60 or $110 a month, up from the $10 one included", "When the database slows under load"],
      ["Every extra project", "Its own server charge, from $10 a month", "A separate staging or test project"],
      ["Point-in-time recovery", pitr.value, "When you need to undo a mistake to the minute"],
      ["Data transfer", "$0.09 per GB above 250 GB, or $0.03 per GB of cached transfer above its own 250 GB", "Apps that serve large files or video"],
      ["Monthly users", mau.value.replace("per monthly active user", "each"), "Consumer apps with many logins"],
      ["Custom domain", customDomain.value, "Using your own address for the backend"],
    ]} />
    <p>Supabase Pro has a <a href={spendCap.source} target="_blank" rel="noopener noreferrer">spend cap</a> that&apos;s on by default. When you pass a quota, that feature stops until the next billing cycle and you aren&apos;t charged extra. The cap doesn&apos;t cover compute, branching compute, point-in-time recovery or custom domains, among other add-ons.</p>
    <h3>On Vercel</h3>
    <GuideTable caption="Vercel charges beyond the Pro plan" headers={["Charge", "Price", "When it bites"]} rows={[
      ["Extra developer seats", seat.value, "Every person who deploys code"],
      ["Request tiers", "$20, $100 or $300 a month", "10, 50 or 150 million requests"],
      ["Server functions", functions.value.replace("from ", "From ").replace("hour of Active CPU", "CPU hour").replace("invocations", "calls"), "Pages that do heavy work on every visit"],
      ["Image resizing", `${images.value.replace("from ", "From ")} images`, "Photo-heavy sites and shops"],
      ["Builds", builds.value, "Large sites that rebuild often"],
    ]} />
    <p>Vercel Pro lets you set a budget, and new teams start with a $200 limit on usage charges, with alerts. You can also choose a hard limit that pauses the live site when it&apos;s reached. Check which one you want: a paused site and an unlimited bill are both bad surprises.</p>
    <p>Both companies changed their pricing in the last 15 months. Vercel <a href={creditChange.source} target="_blank" rel="noopener noreferrer">moved Pro to a $20 usage credit</a> in September 2025 and added flat-rate request tiers in September 2026. Supabase <a href={cachedChange.source} target="_blank" rel="noopener noreferrer">split data transfer into cached and uncached rates</a> in August 2025. Read the pricing page again before you budget for next year.</p>

    <h2>When to stay, and what to move to</h2>
    <p>Moving costs developer time, so it only pays when the monthly saving is larger than the work of moving and the new upkeep.</p>
    <h3>Stay when</h3>
    <BlogList items={[
      "the combined bill is under a few hundred dollars a month,",
      "nobody on the team wants to patch servers or handle outages at night,",
      "the app relies on Supabase's built-in logins, file storage and row-level security rules.",
    ]} />
    <h3>Consider moving when</h3>
    <BlogList items={[
      "traffic, images or seats make Vercel the largest line on the bill,",
      "you serve large files or video, where per-GB transfer adds up,",
      "a client or regulator requires the data to sit in a specific country or on your own servers,",
      "you need predictable flat costs more than convenience.",
    ]} />
    <h3>Hosting alternatives to Vercel</h3>
    <GuideTable caption="Hosting alternatives, entry prices" headers={["Option", "Entry price", "How it charges", "Suits"]} rows={[
      [src(workers.source, "Cloudflare Workers"), "$5 a month", "10 million requests included, no charge for data transfer", "High-traffic sites that want low, flat costs"],
      [src(netlifyPro.source, "Netlify"), `${netlifyPersonal.value.replace(" a month", "")} to $20 a month`, "Credits; unlimited team members on Pro", "Teams hurt by per-seat pricing"],
      [src(railway.source, "Railway"), "$5 to $20 a month minimum", "Pay for what the server uses; transfer $0.05 per GB", "Apps that need a long-running server"],
      [src(render.source, "Render"), "$7 a month per service, plus $25 for a Pro workspace", "Fixed price per server", "Predictable monthly bills"],
      [src(fly.source, "Fly.io"), "From about $2 a month per machine", "Per machine; transfer $0.02 per GB", "Apps that must run in several regions"],
      [src(coolify.source, "Your own server with Coolify"), "Server from about $4 to $6 a month; Coolify is free to self-host", "Flat server rent", "Teams who can maintain a server"],
    ]} />
    <h3>Database alternatives to Supabase</h3>
    <GuideTable caption="Database alternatives, entry prices" headers={["Option", "Entry price", "How it charges", "Suits"]} rows={[
      [src(neon.source, "Neon"), "Free tier, then usage only", "Per compute hour and per GB stored", "Databases that sit idle much of the day"],
      [src(selfHost.source, "Self-hosted Supabase"), "Free software (Apache 2.0 licence)", "Your own server costs", "Keeping Supabase's features on your own servers"],
      [src(appwrite.source, "Appwrite"), "Free tier, then $25 a month", "Per project", "A similar all-in-one backend"],
      [src(planetscale.source, "PlanetScale"), `From ${planetscale.value}`, "Per database", "Larger databases that need to scale"],
      [src(firebase.source, "Firebase"), "Pay as you go", "Per read and write", "Mobile apps already on Google's tools"],
      [src(aurora.source, "AWS Aurora Serverless"), "Usage only", "Per capacity hour and per GB", "Companies already on AWS"],
    ]} />
    <p>Self-hosted Supabase has no managed backups, no point-in-time recovery and no branching, and support comes from the community. Firebase&apos;s budget alerts warn you but don&apos;t stop the service, unless you set up its optional spend caps, which can pause some services.</p>
    <h3>The order to move in</h3>
    <ol>
      <li>Cut waste first. Cache pages, shrink images and remove unused seats. This often fixes the bill with no move at all.</li>
      <li>Move hosting next. A Next.js site can run on other hosts, and the database stays where it is.</li>
      <li>Move the database only with a strong reason. Logins, security rules and file storage all have to be rebuilt or carried across, and a mistake there loses data.</li>
    </ol>

    <h2>How we choose for client projects</h2>
    <p>We use Supabase ourselves, so this isn&apos;t an argument against it. We choose per project, and we start from what the business already has and what it can run cheaply. Our guide to <Link href="/blog/sanity-vs-supabase">Sanity vs Supabase</Link> explains when a site needs a database at all.</p>
    <p>For <Link href="/work/a-step-above-medical">A Step Above Medical</Link>, a medical training provider, we rebuilt the website with Next.js and a Sanity content editor, and built the team&apos;s operations portal on Supabase. Three decisions kept the running costs low:</p>
    <BlogList items={[
      "The client owns the accounts. The portal's Supabase project is on the client's own account, so the bill, the data and the access all belong to the business.",
      "Free and low-cost tiers were checked before the build. We looked at which services the project already had or could run on free plans, including Supabase storage, the Sanity editor and Resend for emails, so the budget went into the custom website and portal.",
      "The system matches the size of the business. More than 100 scheduled classes run through one system, which is well inside what the entry plans are built for.",
    ]} />
    {/* 18 Nov 2026: the owner approved publishing A Step Above Medical's monthly running cost.
        The figure goes here once the owner supplies it. */}
    <p>The same test applies to any small business app:</p>
    <BlogList items={[
      "How many people will log in each month?",
      "How big are the files, and how often are they downloaded?",
      "Who will look after it in two years?",
    ]} />
    <p>If the answers are &quot;a few thousand&quot;, &quot;small&quot; and &quot;not a full-time engineer&quot;, a managed service on its entry plan is almost always cheaper than the salary time needed to run your own servers. For the rest of a small site&apos;s monthly bill, see <Link href="/blog/website-monthly-running-cost">what a website costs to run each month</Link>.</p>

    <h2>Checklist before you grow</h2>
    <BlogList items={[
      "The business owns the Supabase, Vercel, domain and payment accounts.",
      "A spending limit or budget alert is set on both services.",
      "Row-level security is switched on for every table that holds customer data.",
      "Backups are tested by restoring one, not just switched on.",
      "Vercel is on Pro, not Hobby, if the site earns money.",
      "Unused developer seats and old test projects are removed.",
      "Images are sized before upload, so resizing charges stay low.",
      "You know your three numbers: monthly users, database size and data transfer.",
    ]} />
    <p><strong><Link href="/services/backend-development">Send us your Supabase and Vercel invoices and we&apos;ll tell you what to cut.</Link></strong></p>

    <h2>Sources</h2>
    <p>All pages were read on 18 November 2026. Prices are in US dollars and exclude tax. Vendors change prices often, so check the page before you rely on a figure.</p>
    <BlogList items={[
      <>Supabase: {src(supabasePro.source, "pricing")}, {src(spendCap.source, "cost control")}, {src(cachedChange.source, "cached egress change")}, {src(selfHost.source, "self-hosting")}</>,
      <>Vercel: {src(vercelPro.source, "Pro plan")}, {src(tiers.source, "Flat Rate CDN")}, {src(onDemand.source, "pricing")}, {src(builds.source, "builds")}, {src(creditChange.source, "Pro usage credit change")}</>,
      <>Hosting: {src(workers.source, "Cloudflare Workers")}, {src(netlifyPro.source, "Netlify")}, {src(railway.source, "Railway")}, {src(render.source, "Render")}, {src(fly.source, "Fly.io")}, {src(coolify.source, "Coolify")}, {src(droplet.source, "DigitalOcean")}, {src(hetzner.source, "Hetzner")}</>,
      <>Databases: {src(neon.source, "Neon")}, {src(appwrite.source, "Appwrite")}, {src(planetscale.source, "PlanetScale")}, {src(firebase.source, "Firebase")}, {src(aurora.source, "AWS Aurora")}, {src(selfHost.source, "self-hosting Supabase")}</>,
    ]} />
  </StackGuide>;
}
