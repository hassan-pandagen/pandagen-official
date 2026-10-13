import EditorScreenshot from "@/components/pages/services/EditorScreenshot";
import Link from "next/link";
import StackGuide, { GuideTable, stackGuideMetadata } from "@/components/blog/StackGuide";
import { asOf, spec } from "@/data/spec-facts";

const id = "sanity-vs-wordpress";
export const metadata = stackGuideMetadata(id);

export default function Page() {
  const free = spec("sanity-free-plan");
  const growth = spec("sanity-growth-price");
  return <StackGuide id={id}>
    <p><strong>Keep WordPress if your current editor already does what your team needs and the site mainly needs fixing. Choose Sanity if you&apos;re rebuilding anyway and want an editor with exactly the fields your content uses.</strong> WordPress is free, open-source software that you host and keep updated, and your theme and plugins decide what its editor looks like. Sanity is a hosted editor, Sanity Studio, that a developer sets up around your content and connects to a custom website, usually built with Next.js.</p>
    <p>Most of our clients come to us to move off WordPress. When they do, the Sanity editor is part of the Next.js build price, so the choice comes down to which editor your team will actually use. For the technical side, see our <Link href="/blog/nextjs-sanity-stack">Next.js and Sanity stack guide</Link>.</p>
    <h2>What changes for the person editing the site?</h2>
    <p>In WordPress you build pages from blocks: text, images, headings and any blocks your theme and plugins add. In Sanity Studio you fill in fields set up for your content, such as a service&apos;s name, description and photo, and the website decides the layout. WordPress gives editors more freedom over layout; Sanity gives them fewer ways to break the design. See the <a href="https://wordpress.org/documentation/article/wordpress-block-editor/">WordPress block editor documentation</a> and <a href="https://www.sanity.io/docs/visual-editing">Sanity&apos;s visual editing documentation</a>.</p>
    <GuideTable caption="Five editing decisions, side by side" headers={["Task", "WordPress", "Sanity"]} rows={[
      ["Writing an article", "The block editor. Your theme and plugins can add more blocks.", "A form with the fields your articles use, set up during the build."],
      ["Changing a layout", "Often possible in the editor, depending on the theme or page builder.", "Usually a developer change, unless that section was built to be editable."],
      ["Details used on several pages", "Often copied by hand, or handled by a plugin.", "Stored once as its own record and shown wherever it's used."],
      ["Undoing a mistake", "Revisions for posts and pages are built in.", "History is built in. How far back it goes depends on the Sanity plan (see the prices below)."],
      ["Keeping it running", "You or your developer update WordPress, the theme and plugins, and keep backups.", "Sanity hosts the editor. Your developer looks after the website code and its hosting."],
    ]} />
    <h2>What does Sanity cost compared with WordPress?</h2>
    <p>WordPress itself is free, so you pay for hosting, any premium themes or plugins, and the time spent keeping them updated. Sanity&apos;s Free plan is {free.value}, with {free.qualifier}. The Growth plan is {growth.value}, with {growth.qualifier}. Prices as of {asOf("sanity-growth-price")}, from <a href={growth.source}>Sanity&apos;s pricing page</a>.</p>
    <p>Most small business websites fit on the Free plan. The website also needs hosting; our breakdown of <Link href="/blog/website-monthly-running-cost">what a website costs to run each month</Link> lists the whole bill.</p>
    <h2>Two real Sanity editors: Panda Patches and Ladies 4 Jesus</h2>
    <p><Link href="/work/panda-patches">Panda Patches</Link>, a custom patch business owned by our founder, moved from WordPress and WooCommerce to a custom Next.js website with Sanity. Its team edits blog posts, product pages, case studies and homepage sections in one Studio, and the blog alone has 63 posts. Each content type has its own list and its own fields, so writing a guide and adding a case study feel like filling in two different forms.</p>
    <figure><EditorScreenshot src="/work/panda-patches-editor-blog.png" alt="Sanity Studio open on a blog post: title, URL slug and a main image field for a custom hockey patches guide." width={1912} height={914} sizes="(min-width: 1000px) 960px, 100vw" /><figcaption>The Panda Patches editor: the list of blog posts and the fields for one guide. Panda Patches is owned by our founder, so it isn&apos;t an independent client.</figcaption></figure>
    <figure><EditorScreenshot src="/work/panda-patches-editor-case-study.png" alt="Sanity Studio open on a bulk case study page: title, description and a patch photo field for a law enforcement client." width={1912} height={914} sizes="(min-width: 1000px) 960px, 100vw" /><figcaption>The same Studio, open on a case study for the bulk order pages.</figcaption></figure>
    <p><Link href="/work/ladies-4-jesus">Ladies 4 Jesus</Link>, an independent client, made the same move from WordPress. Its editor lives on the site itself, at /studio, with nine content types in its sidebar. When the owner edits a devotional and publishes it, the live site shows the change in about sixty seconds. We ran three training sessions with her, and she messages us when she needs something new. The site runs on Sanity&apos;s Free plan: traffic is low and only a few people edit it.</p>
    <h2>Five tasks to try before you choose</h2>
    <p>Ask your developer to show you each task on a test copy of the site, with the person who&apos;ll do the editing at the keyboard.</p>
    <ol>
      <li>Change a service description, then check the public page shows the change.</li>
      <li>Publish an article with an image, then check the image description, the phone layout and the author.</li>
      <li>Fix a typo on a live page without help from the developer.</li>
      <li>Change something used on several pages, like opening hours, and check every page that shows it.</li>
      <li>Ask for something the template doesn&apos;t cover, and find out whether that&apos;s routine editing or a paid change.</li>
    </ol>
    <p>Write down where the editor needed help. If your WordPress setup passes all five, you may not need to switch.</p>
    <h2>What a WordPress-to-Sanity move has to keep</h2>
    <p>A move has to keep your URLs, your content and images, and the jobs your plugins do, like forms, bookings or search. List every public URL first, and decide for each plugin whether its job moves to the new site or stops. Import a sample of pages and compare headings, images, meta descriptions and internal links before moving the rest. Where a URL has to change, redirect it to the matching new page. Our guide to <Link href="/blog/how-to-migrate-wordpress-to-nextjs">migrating WordPress to Next.js</Link> covers the steps.</p>
    <h2>When should you keep WordPress?</h2>
    <p>Keep WordPress when a smaller fix solves the real problem: a slow theme, too many plugins, or an editor nobody was trained on. We work on both. Our <Link href="/services/wordpress">WordPress development</Link> service improves the site you have, and our <Link href="/services/cms-development">Sanity website development</Link> service is for a rebuild.</p>
    <p>If what&apos;s missing is customer logins or a private portal, that&apos;s a backend job, not a CMS one. Read <Link href="/blog/sanity-vs-supabase">Sanity vs Supabase</Link>.</p>
  </StackGuide>;
}
