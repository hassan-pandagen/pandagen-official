import Link from "next/link";
import StackGuide, { GuideTable, stackGuideMetadata } from "@/components/blog/StackGuide";
import { editorialCoverage } from "@/data/editorial-coverage";

const id = "when-to-rebuild-an-aging-system";
const source = editorialCoverage.find(item => item.id === "cio-grid")!;
export const metadata = stackGuideMetadata(id);

export default function Page() {
  return <StackGuide id={id}>
    <p><strong>Consider rebuilding when the people doing the work have to keep a second system alive just to get through the day.</strong> Before you price a rebuild, follow one ordinary order from the first enquiry to delivery. Write down where it moves, who moves it and what the next person needs to know.</p>
    <h2>What made us look at the system at Panda Patches?</h2>
    <p>At Panda Patches, quote details, order updates and customer messages had moved into email and spreadsheets. A sale touched people handling artwork, digitizing and production, and each team needed the latest information to do its part. The workarounds helped people get orders out, but the next person still had to find the right update.</p>
    <p>We started with automation. As the workflows grew, we built a system around the way the teams actually worked. Panda Patches is owned by my PandaCodeGen co-founder, Imran Raza Ladhani. It is the example I shared with <a href={source.url}>{source.publication}</a> in its discussion of when to modernize aging systems. <Link href="/work/panda-patches">See the Panda Patches project</Link>.</p>
    <h2>When is a smaller change enough?</h2>
    <GuideTable caption="How to choose the first piece of work" headers={["What you find", "What I would try", "How to check it"]} rows={[
      ["One form fails to notify the right person", "Fix the form and its delivery", "Submit a test and confirm that the right person receives it"],
      ["Two tools work well but staff enter the same details twice", "Connect those tools around one official record", "Change the record and check how both tools handle the update"],
      ["Several teams rely on their own sheets and disagree on order status", "Prototype a shared workflow for one handoff", "Have both teams complete the same test order without their side sheets"],
    ]} />
    <p>For a WordPress site, do this exercise before comparing platforms. If the issue is an email that goes to the wrong inbox, start with that. If your team spends its day moving bookings, quotes or payments between tools, include that work in the scope. A new homepage on its own will leave those steps in place. <Link href="/services/wordpress-migration">See how we plan a WordPress migration</Link>.</p>
    <h2>What should you measure before approving a rebuild?</h2>
    <p>Take five recent cases. Include a straightforward one, a change after payment and something that needed a manager. Count the times someone had to retype a detail, ask for a status update or correct a record. Then run the same cases on a small prototype. Capture the staff time and errors both ways and check that each person can find the right information for their role.</p>
    <p>Compare that evidence with the costs of both options, including subscriptions, staff time, support and the changeover. Agree which records must move, who can approve corrections and what would make you pause the switch. A small pilot can answer those questions while the current system is still doing its job.</p>
    <p>Bring this list to the first call if you are weighing a fix against a rebuild. <Link href="/services/custom-engineering">Explore custom systems and workflow development</Link>.</p>
  </StackGuide>;
}
