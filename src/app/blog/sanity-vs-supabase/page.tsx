import Image from "next/image";
import Link from "next/link";
import StackGuide, { GuideTable, stackGuideMetadata } from "@/components/blog/StackGuide";
import { asOf, spec } from "@/data/spec-facts";

const id = "sanity-vs-supabase";
export const metadata = stackGuideMetadata(id);

export default function Page() {
  const sanityFree = spec("sanity-free-plan");
  const sanityGrowth = spec("sanity-growth-price");
  const supabaseFree = spec("supabase-free-plan");
  const supabasePro = spec("supabase-pro-price");
  return <StackGuide id={id}>
    <p><strong>Sanity and Supabase aren&apos;t competitors. Sanity is a content management system (CMS): your team uses it to edit the words and images on your website. Supabase is a backend: a Postgres database with sign-in (Auth), file storage and server functions (Edge Functions) for an app, portal or CRM.</strong> A marketing website usually needs only Sanity. A customer portal or internal tool needs a backend like Supabase. Many projects use both, Sanity for the public website and Supabase for the private side.</p>
    <h2>Which one does your project need?</h2>
    <p>Look at who changes the data. If your staff edit pages, articles and photos that the public sees, you need a CMS like Sanity. If customers or staff sign in and create records, such as bookings, orders, students or payments, you need a backend like Supabase. If you have both kinds of data, you need both, and each one should own its own records so nobody keeps two copies of the same thing.</p>
    <GuideTable caption="Which tool does which job" headers={["Job", "What we usually use", "What you decide"]} rows={[
      ["The public website", "Next.js", "Pages, layouts and forms."],
      ["Editing content", "Sanity Studio", "Which content types and fields your team edits."],
      ["Customer and business data", "Supabase (Postgres)", "The records, who signs in, and who can see what."],
      ["Hosting", "Vercel", "Domains, previews of changes and the server code."],
      ["The code", "GitHub", "Who can change the code, and the history of every change."],
    ]} />
    <p>We usually build on Supabase because it&apos;s quick to set up and it&apos;s Postgres underneath, so your data isn&apos;t tied to one vendor. If a project needs MongoDB, another database or an API your business already runs, we build around that instead.</p>
    <h2>A project that uses both: A Step Above Medical</h2>
    <p><Link href="/work/a-step-above-medical">A Step Above Medical</Link> has a replacement Next.js website with Sanity, where the team edits its courses and locations. Alongside it, an operations portal built on Supabase brings together class rosters, instructor assignments, certificates and payments. The portal runs on the client&apos;s own Supabase account. The website and portal are built and in pre-launch testing, as confirmed on 10 October 2026.</p>
    <figure><Image src="/work/a-step-above-medical-portal-classes.png" alt="The A Step Above Medical operations portal's Classes view: upcoming classes, students enrolled, outstanding balances and certificates awaiting sign-off, above a class schedule table" width={1912} height={914} sizes="(min-width: 1000px) 960px, 100vw" /><figcaption>The operations portal for A Step Above Medical, an independent client project in pre-launch testing. This screen illustrates the interface; its figures are not production results.</figcaption></figure>
    <p>This is the backend package we build most often: the database plus a custom CRM on top, in the same build. The team runs the business from its own admin screens, the same way it edits the website in Sanity.</p>
    <h2>What do Sanity and Supabase cost?</h2>
    <GuideTable caption={`Sanity and Supabase plans as of ${asOf("supabase-pro-price")}`} headers={["Plan", "Price", "What's included"]} rows={[
      ["Sanity Free", sanityFree.value, sanityFree.qualifier],
      ["Sanity Growth", sanityGrowth.value, sanityGrowth.qualifier],
      ["Supabase Free", supabaseFree.value, supabaseFree.qualifier],
      ["Supabase Pro", supabasePro.value, supabasePro.qualifier?.replace(/^with /, "")],
    ]} />
    <p>We build on Supabase&apos;s Free plan and move the project to Pro when it goes live, so you don&apos;t pay for the database during the build. For client production apps we use Pro, because free projects pause after a week of inactivity and have no included automatic backups. Prices are from <a href={sanityGrowth.source}>Sanity&apos;s pricing page</a> and <a href={supabasePro.source}>Supabase&apos;s pricing page</a>. For the whole monthly bill, including hosting, see <Link href="/blog/website-monthly-running-cost">what a website costs to run each month</Link>.</p>
    <h2>Signing in isn&apos;t the same as permission</h2>
    <p>Signing someone in tells your app who they are. It doesn&apos;t decide which records they can see. In Supabase, that second job belongs to row-level security (RLS): rules on each table, such as &quot;a customer can read only their own bookings&quot;. Every table the browser can reach needs those rules, and admin keys stay on the server, never in browser code. See <a href="https://supabase.com/docs/guides/database/postgres/row-level-security">Supabase&apos;s row-level security guide</a>.</p>
    <p>Test it before launch. Sign in as one customer and try to load another customer&apos;s record. Remove a staff member and check they lose access. Send the same payment notification twice and check you get one payment. Also agree who restores the database from a backup if something goes wrong.</p>
    <h2>Where do Vercel and GitHub fit?</h2>
    <p>Vercel hosts the website and runs its server code, but it doesn&apos;t store your business data; that&apos;s the database&apos;s job. Vercel&apos;s own <a href="https://vercel.com/docs/functions/runtimes/edge">runtime guidance</a> recommends its Node.js runtime over the Edge runtime for performance and reliability. GitHub holds the code and the history of every change. At handover, you should know who owns each account (code, hosting, CMS and database) and have written steps for releasing a change.</p>
    <h2>What to ask for in a proposal</h2>
    <ul><li>The public pages, the content your team edits, and the private screens.</li><li>Who can see and change each kind of record.</li><li>Tests for publishing, permissions and failed payments or integrations.</li><li>Separate prices for the build, moving your existing data, vendor plans and maintenance.</li><li>Who owns the code, hosting, CMS and database accounts.</li></ul>
    <p>Our <Link href="/services/cms-development">Sanity service</Link> covers the website and its editor. Our <Link href="/services/backend-development">backend development service</Link> covers databases, portals and custom CRMs. Comparing editors instead? Read <Link href="/blog/sanity-vs-wordpress">Sanity vs WordPress</Link>.</p>
  </StackGuide>;
}
