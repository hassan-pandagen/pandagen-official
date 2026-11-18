import Link from "next/link";
import StackGuide, { GuideTable, stackGuideMetadata } from "@/components/blog/StackGuide";
import { spec } from "@/data/spec-facts";
import { startingPrice } from "@/data/company-facts";
import { BlogList } from "@/components/ui/BlogStyles";

// 18 Nov 2026: dev handoff Part B (Imran's copy). Publish-day checks done on 18 Nov:
// - The two Enrollware descriptions were re-read. Enrollware's healthcare page says
//   "tailored for American Heart Association and American Red Cross training centers", so the
//   copy uses that, not "designed for"; its features URL now redirects to the home page.
// - The client quote and the 100-class figure match Dillon Lynch's Clutch review (ProjectReview).
// - The starting price comes from startingPrice("Starter"); 3 to 6 weeks is "Delivery, Scale".
// - The owner confirmed on 18 Nov that QuickBooks sync every 30 minutes, per-attendee
//   registration links, group bookings and server-side Google Ads reporting with refund
//   adjustments are live. "Unpaid holds expire" was not confirmed, so it is left out.
const id = "class-registration-software-vs-custom-booking-system";
export const metadata = stackGuideMetadata(id);

export default function Page() {
  const review = spec("enrollware-softwarefinder-review");
  const healthcare = spec("enrollware-healthcare");
  const home = spec("enrollware-home");
  const src = (href: string, label: string) => <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>;
  return <StackGuide id={id}>
    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
      <h2 className="mb-4 text-2xl font-bold text-charcoal">Short answer</h2>
      <BlogList items={[
        <><strong>Buy software</strong> if you teach one kind of course, you don&apos;t mind students leaving your website to book, and the software&apos;s payment and certificate steps already match how you work.</>,
        <><strong>Build a custom system</strong> if booking has to happen on your own website, you run classes in more than one city, your accounting or advertising needs to connect, or someone on your team spends hours each week copying details between tools.</>,
        <><strong>There&apos;s a middle route.</strong> Keep the software and rebuild the website around it.</>,
        "A Step Above Medical, a phlebotomy and IV therapy school, went custom in October 2026. What changed for them is below.",
      ]} />
    </section>

    <h2>What class registration software does well</h2>
    <p>If you run CPR or first aid classes, software built for that job is the right place to start. Enrollware is one well-known example. {src(review.source, "One independent review")} describes it as cloud software that lets training centres schedule classes, register attendees, take payments and send out certifications, and says it suits CPR and healthcare training providers in particular. {src(healthcare.source, "Enrollware says its healthcare product")} is tailored for American Heart Association and American Red Cross training centres.</p>
    <p>ClassByte, JoinCPR, CourseStorm and CertClass work in the same space. We haven&apos;t tested them, so we won&apos;t rank them.</p>
    <p>What you get from any of them is speed and a fixed monthly bill. You can be taking bookings this week, the vendor fixes the bugs, and nobody on your side needs to know what a database is. For a school with one course type and one location, that&apos;s often all you need, and paying for a custom build would be a waste.</p>

    <h2>Where software stops fitting</h2>
    <p>The trouble shows up at the edges of your process. Check your own week against this list:</p>
    <BlogList items={[
      <><strong>Students leave your website to book.</strong> Your site becomes a brochure, and your ad and search tracking stops at the handoff, so you can&apos;t tell which advert filled a class.</>,
      <><strong>You still email payment links.</strong> Someone enquires, a staff member replies with a link, and the seat isn&apos;t held until they pay.</>,
      <><strong>Certificates are made by hand</strong> because your course or template isn&apos;t one the software supports.</>,
      <><strong>Bookkeeping is typed twice.</strong> Payments and refunds live in one place and your accounts in another.</>,
      <><strong>An employer books six staff at once.</strong> Each person needs their own record and their own signed terms, and the software treats it as one sale.</>,
      <><strong>You teach in several cities</strong> and want a page for each that you can switch on and off.</>,
    ]} />
    <p>One of these is an annoyance. Three or four is a part-time job.</p>

    <h2>What a custom system looked like for one school</h2>
    <p>A Step Above Medical teaches phlebotomy and IV therapy. Their old WordPress site ran on Divi, The Events Calendar, Event Tickets and Ninja Forms. A student filled in an enquiry form, and the team replied by email with a Stripe payment link.</p>
    <p>We rebuilt the website and added a staff portal. It went live on 20 October 2026. The owner confirmed each row of this table on 21 October:</p>
    <GuideTable caption="A Step Above Medical before and after, owner-confirmed 21 October 2026" headers={["Job", "Before", "Now"]} rows={[
      ["Booking and payment", "Enquiry form, then a Stripe payment link by email", "Students book a class and pay by Stripe on the website"],
      ["Messages to students", "Nothing automatic", "Automatic emails, including reminders of fees, dates and venue"],
      ["Certificates", "Made by hand", "Issued from the portal, using a PDF template"],
      ["Student contact details", "Email addresses only", "Registration collects a phone number"],
    ]} />
    <p>The new system also does these jobs:</p>
    <BlogList items={[
      "A paid booking reserves a seat within the class capacity.",
      "One person can book seats for others, and each attendee gets a link to complete their own registration.",
      "Staff record attendance, and certificates are emailed after the class.",
      "Payments and refunds sync to QuickBooks every 30 minutes.",
      "Paid bookings are reported to Google Ads, and refunds adjust them.",
    ]} />
    <p>In his Clutch review, founder Dillon Lynch reported more than 100 scheduled classes managed in one system, and wrote: &ldquo;They delivered on time everything that was requested.&rdquo;</p>
    <p><Link href="/work/a-step-above-medical">Read the full case study</Link>.</p>

    <h2>How to compare the cost over three years</h2>
    <p>Vendor prices change, so we haven&apos;t listed them. Check each pricing page on the day you decide. The sum is the same whichever tool you look at.</p>
    <p><strong>Software, three years:</strong></p>
    <BlogList items={[
      "Monthly fee, times 36",
      "Any charge per registration or per payment",
      "Staff hours spent on the steps the software doesn't cover",
    ]} />
    <p><strong>Custom, three years:</strong></p>
    <BlogList items={[
      "The build price, agreed in writing",
      "Hosting, database and content editor accounts, which sit in your name",
      "Changes you ask for later",
    ]} />
    <p>The line that usually decides it is staff time. As an example, five hours a week of copying bookings into a spreadsheet and making certificates, at $25 an hour, is $6,500 a year. If the software removes that work, keep the software. If it doesn&apos;t, that figure is what you weigh against a build.</p>
    <p>Our custom builds start at {startingPrice("Starter")}. A booking system with a staff portal is a larger project than that, and we quote it in writing after a call. See <Link href="/pricing">pricing</Link>.</p>

    <h2>The middle route: keep the software, fix the website</h2>
    <p>Plenty of schools don&apos;t need to replace anything. If your registration tool works and the weak point is a slow or confusing website, rebuild the website and link each class to the tool&apos;s booking page. You keep your records and your certificates, and students find the right class faster.</p>
    <p>This suits you if the manual work in your week is small and your real problem is that people can&apos;t find or trust your course pages.</p>

    <h2>Which one fits</h2>
    <GuideTable caption="Class registration software or a custom booking system" headers={["Your situation", "Better fit"]} rows={[
      ["One course type, one location, standard certificates", "Software"],
      ["You need to be taking bookings this month", "Software"],
      ["Software works, website is the weak point", "Keep software, rebuild website"],
      ["Booking must happen on your own site", "Custom"],
      ["Several cities, each with its own page", "Custom"],
      ["Payments and refunds must reach your accounts automatically", "Custom"],
      ["Employers book groups and each attendee needs a record", "Custom"],
      ["Staff spend hours a week moving data between tools", "Custom"],
    ]} />

    <h2>What to ask before you sign either</h2>
    <p>Whichever way you go, ask these four questions:</p>
    <ol>
      <li><strong>Can I export everything?</strong> Students, classes, payments, attendance and certificates, as spreadsheets.</li>
      <li><strong>Whose name are the accounts in?</strong> The payment account and the database should be yours.</li>
      <li><strong>What happens if I leave?</strong> Find out what you take with you and what stays behind.</li>
      <li><strong>Who can change it, and how fast?</strong> A vendor&apos;s roadmap is theirs. A custom system changes when you ask.</li>
    </ol>
    <p>For A Step Above Medical, the portal runs on the school&apos;s own database account, staff can download their records as spreadsheets, and every code change is recorded in GitHub.</p>

    <h2>Still running registrations by hand?</h2>
    <p>Show us how your school works today. In a 15-minute call we&apos;ll tell you which steps are worth connecting and whether a custom build makes sense, or whether software you already pay for can do it.</p>
    <BlogList items={[
      <Link key="svc" href="/services/training-business-websites">Training business websites and booking systems</Link>,
      <Link key="call" href="/contact#contact-quote-form">Book a 15-minute workflow call</Link>,
    ]} />
    <p>Related: <Link href="/blog/online-booking-small-business-website">How to add online booking to a small business website</Link></p>

    <h2>Sources</h2>
    <BlogList items={[
      <>{src(review.source, "SoftwareFinder review of Enrollware")}</>,
      <>{src(healthcare.source, "Enrollware healthcare solutions page")}</>,
      <>{src(home.source, "Enrollware home page (its own description)")}</>,
      <><Link href="/work/a-step-above-medical">A Step Above Medical case study</Link>, including Dillon Lynch&apos;s Clutch review of 25 October 2026</>,
    ]} />
  </StackGuide>;
}
