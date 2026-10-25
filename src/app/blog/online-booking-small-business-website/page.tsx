import Link from "next/link";
import StackGuide, { GuideTable, stackGuideMetadata } from "@/components/blog/StackGuide";
import { asOf, spec } from "@/data/spec-facts";

// 25 Oct 2026. Tool facts come from each vendor's own page and sit in spec-facts.json
// (booking-*). Squarespace Scheduling is left out on purpose: its price page showed no
// figures when checked, and we don't quote what we couldn't read. The case study facts are
// the ones the owner confirmed on 21 Oct 2026 on /work/a-step-above-medical.
const id = "online-booking-small-business-website";
export const metadata = stackGuideMetadata(id);

const link = (key: string, text: string) => <a href={spec(key).source} target="_blank" rel="noopener noreferrer">{text}</a>;

export default function Page() {
  return <StackGuide id={id}>
    <p><strong>If you take one-to-one appointments, a scheduling tool such as Cal.com or Calendly is enough. If your site is on Wix, its own Bookings app is the shortest path. If a booking has to trigger fees, dates, a venue, certificates and staff records, it needs a custom build.</strong> The deciding question is what has to happen after someone clicks Book.</p>
    <p>We build the custom kind, so we say where a cheaper route is the right one. Tool details below come from each vendor&apos;s own page, read on {asOf("booking-calcom-free")}. Plans and prices change, so check the source before you buy.</p>

    <h2>Which booking route fits which business?</h2>
    <GuideTable caption={`Online booking routes for a small business website, from each vendor's own page, ${asOf("booking-calcom-free")}`} headers={["Route", "Fits", "Taking payment, per its own page"]} rows={[
      [link("booking-calcom-free", "Cal.com"), "Appointments and calls with one person or a small team", "Free plan accepts Stripe and PayPal; Teams is $12 per user per month on yearly billing"],
      [link("booking-calendly-payments", "Calendly"), "The same, with a wider set of integrations", "Not on the Free plan; Stripe and PayPal from Standard"],
      [link("booking-wix-payments", "Wix Bookings"), "Sites already built on Wix", "Needs a Premium plan to accept online payments"],
      ["WordPress booking plugin", "Sites on WordPress that want booking inside the page", "Depends on the plugin. Check its payment and email features before you install it"],
      [<Link key="custom" href="/services/custom-engineering">Custom build</Link>, "Classes, courses or events where a booking sets off other work", "Whatever you build: we used Stripe on the page itself"],
    ]} />

    <h2>When is a scheduling tool or builder app enough?</h2>
    <p>A scheduling tool is enough when the thing you sell is a time slot. A customer picks a time, you get a calendar entry and an email, and nothing else has to change. A hairdresser, a consultant and a tutor all fit. The tool books the slot and a person handles the rest.</p>
    <p>Your website builder&apos;s own booking app is the next-simplest choice if your site already lives on that platform. You avoid a second login and a second bill, though you inherit the builder&apos;s plan limits, which is why the payment rules in the table matter.</p>

    <h2>When does a business need a custom booking system?</h2>
    <p>Custom starts to pay off when booking is the first step of a longer process. If each booking has a fee that depends on the course, a seat limit per class, a venue, a confirmation that states all three, and a record the team uses afterwards, a calendar widget can&apos;t carry it. You end up copying details by hand between tools, which is the cost you were trying to remove.</p>

    <h2>What does a real before and after look like?</h2>
    <p>A Step Above Medical, a medical training business, ran its old WordPress site with an enquiry form. The team replied by email and sent each student a Stripe payment link. Certificates were made by hand. The owner confirmed those details on 21 October 2026.</p>
    <p>We rebuilt the site with Next.js and a Sanity editor, and built a separate operations portal on Supabase. Students now book a class and pay by Stripe on the website. The system sends the booking emails automatically with the fees, dates and venue, and the portal issues certificates from a PDF template we designed. The <Link href="/work/a-step-above-medical">full case study</Link> has the before and after table.</p>
    <p>The point for your own decision is the shape of the work, not the brand names. Before, every booking needed a person to read an enquiry, write a reply and send a payment link. After, the booking, the payment, the emails and the certificate follow from one action by the student. A scheduling tool would have covered the calendar part and none of the rest.</p>

    <h2>What should you ask before you pick a route?</h2>
    <ul>
      <li>Does a booking only need a time, or also a price, a seat count and a location?</li>
      <li>Who sends the confirmation email today, and what does it contain?</li>
      <li>What does your team do with each booking afterwards, and can the tool do that step?</li>
      <li>Does payment happen through a processor such as Stripe, so card details never sit on your own site?</li>
      <li>What do the plan and the payment fees cost each month at your booking volume?</li>
    </ul>

    <h2>Where we fit</h2>
    <p>If a scheduling tool covers you, use one. If your bookings feed fees, emails, certificates or staff records, we build that kind of system on <Link href="/services/custom-engineering">custom engineering</Link>, and it can connect to the tools you already use. For the other costs around a site, see the <Link href="/blog/website-monthly-running-cost">monthly running cost guide</Link>. To talk through your own bookings, <Link href="/contact">send us a note</Link>.</p>
  </StackGuide>;
}
