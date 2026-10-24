import Link from "next/link";
import StackGuide, { GuideTable, stackGuideMetadata } from "@/components/blog/StackGuide";
import { asOf, spec } from "@/data/spec-facts";

// 24 Oct 2026. Every competitor figure comes from that agency's own page and sits in
// spec-facts.json (competitor-*), so it carries its source and review date. Webvello's
// $3,500 on its homepage is "website development", not migration, so it is deliberately not
// quoted here. Say who each option fits; never criticise a named agency.
const id = "wordpress-to-nextjs-migration-agencies";
export const metadata = stackGuideMetadata(id);

const link = (key: string, text: string) => <a href={spec(key).source} target="_blank" rel="noopener noreferrer">{text}</a>;

export default function Page() {
  return <StackGuide id={id}>
    <p><strong>Few agencies publish a price for moving a WordPress site to Next.js. Of the five we checked on their own pages, three do: eSEOspace from $3,000, INSYNC from €8,000 net and Social Animal from $15,000. Webvello and Lucky Media publish none. PandaCodeGen publishes its prices too, from $1,500.</strong> The gaps between those numbers mostly come from scope, so compare what each one includes before you compare totals.</p>
    <p>We are one of the agencies in this comparison, so we say where we fit and where we don&apos;t. Everything about the others comes from their own pages, read in {asOf("competitor-socialanimal-migration")}. Prices are starting prices, not quotes, and they change, so check the source before you rely on one.</p>

    <h2>Who migrates WordPress to Next.js, and what do they say it costs?</h2>
    <GuideTable caption={`WordPress to Next.js migration, as each agency describes it on its own page, ${asOf("competitor-socialanimal-migration")}`} headers={["Agency", "What its own page says", "Published starting price"]} rows={[
      [link("competitor-webvello-migration", "Webvello"), "Migrates WordPress, Wix, Squarespace, Webflow, Shopify (headless), HubSpot CMS and Drupal to Next.js. Gives a dated plan after an inventory.", "Not published on the migration page"],
      [link("competitor-eseospace-migration", "eSEOspace"), "Same list of source platforms. A small brochure site takes two to four weeks, a larger one six to ten.", "Custom projects typically from $3,000"],
      [link("competitor-luckymedia-migration", "Lucky Media"), "WordPress to headless CMS with a Next.js or Astro frontend. Based in Dallas, Texas.", "Not published"],
      [link("competitor-insync-migration", "INSYNC"), "German agency. Uses Astro by default, and Next.js when a site needs logins or per-request data.", "Relaunch packages from €8,000 net"],
      [link("competitor-socialanimal-migration", "Social Animal"), "Fixed fee. Includes an SEO audit, one-to-one 301 redirects and monitoring after launch. 6 to 8 weeks for a standard build.", "From $15,000, and from $25,000 for e-commerce"],
      [<Link key="pcg" href="/pricing">PandaCodeGen</Link>, "Two founders, Stafford, Texas. Fixed price agreed before work starts. Full migration with a redirect map from Growth.", "From $1,500 (up to 7 pages), $3,500 (8 to 20 pages), $5,000 (more than 20 pages or a large catalogue)"],
    ]} />

    <h2>Why are the prices so far apart?</h2>
    <p>A migration price is set by what has to move and what you are promised afterwards, not by the framework. Four things account for most of the difference:</p>
    <ul>
      <li><strong>Pages and templates.</strong> Seven pages on two templates is a different job from 400 posts and a store.</li>
      <li><strong>Redirects.</strong> Social Animal says every old URL gets its own 301 redirect. That work is on anyone&apos;s list if you want to keep your search traffic. Ask whether it is in the price.</li>
      <li><strong>What happens after launch.</strong> Monitoring, bug fixes and who pays for them.</li>
      <li><strong>Who does the work.</strong> A founder-led studio and a larger agency with account managers price their time differently.</li>
    </ul>

    <h2>Which one fits which buyer?</h2>
    <p>This is our opinion, not a ranking, and it rests only on what the pages above say.</p>
    <ul>
      <li>A <strong>small business with a site under about twenty pages</strong>, a fixed budget and no appetite for a large project is the case our Starter and Growth tiers are built for.</li>
      <li>A <strong>mid-sized company with a large content library, e-commerce or several stakeholders</strong> may be better served by an agency with a larger team and a longer plan, such as the ones priced from $15,000 or €8,000.</li>
      <li>If you want a <strong>Next.js or Astro frontend on a headless CMS</strong> and have developers of your own, an engineering-led shop like Lucky Media may suit, and you would ask it for a quote.</li>
      <li>If your site is <strong>mostly content with few interactive features</strong>, ask any agency whether Next.js is needed at all. INSYNC, for one, says it defaults to Astro for that reason.</li>
    </ul>

    <h2>What to ask every agency, including us</h2>
    <ul>
      <li>Does the price include a redirect for every old URL, and a check of titles and descriptions after launch?</li>
      <li>Which of my pages, forms and plugins are rebuilt, replaced or dropped?</li>
      <li>What do hosting, the editor and any third-party tools cost each month, and in whose name are the accounts?</li>
      <li>Do I own the code and the design files at handover?</li>
      <li>What is not in the price, and how is a change to the scope priced?</li>
    </ul>

    <h2>Where we fit</h2>
    <p>We publish our prices because most buyers can&apos;t get a number from anyone else until after a sales call. Starter from $1,500 covers up to 7 pages with a content editor, Growth from $3,500 covers 8 to 20 pages with a full migration and a redirect map, and Scale from $5,000 covers larger sites. The price is fixed once the written scope is agreed. Read what moves in <Link href="/services/wordpress-migration">our WordPress migration service</Link>, the <Link href="/blog/website-migration-cost-2026">migration cost guide</Link>, or compare the platforms in <Link href="/blog/wordpress-vs-nextjs">WordPress vs Next.js</Link>. If you want a price for your own site, <Link href="/contact">send us its address</Link>.</p>
  </StackGuide>;
}
