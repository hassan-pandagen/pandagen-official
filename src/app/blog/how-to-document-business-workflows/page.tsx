import Link from "next/link";
import StackGuide, { GuideTable, stackGuideMetadata } from "@/components/blog/StackGuide";
import { editorialCoverage } from "@/data/editorial-coverage";

const id = "how-to-document-business-workflows";
const source = editorialCoverage.find(item => item.id === "tech-magazine")!;
export const metadata = stackGuideMetadata(id);

export default function Page() {
  return <StackGuide id={id}>
    <p><strong>Start with somebody doing a real job.</strong> Ask them to walk you through a recent order, show where they got the details and explain what had to happen before they could hand it to the next person. Do this with each team that touches the order, including the person who gets the call when things go wrong.</p>
    <h2>What did we learn by sitting down with the team?</h2>
    <p>At Panda Patches, I led the engineering work on a system that replaced spreadsheet processes. I spoke with sales agents, production staff and the people who digitize artwork and create mockups. Each group knew a part of the order journey. Seeing those steps together helped us decide what information to carry through the order and when to tell the next person it was ready.</p>
    <p>Panda Patches is owned by my PandaCodeGen co-founder, Imran Raza Ladhani. I described this part of the work in <a href={source.url}>{source.publication}</a> when it asked how teams prevent critical knowledge gaps. <Link href="/work/panda-patches">See the founder-affiliated Panda Patches project</Link>.</p>
    <h2>What should go in a workflow note?</h2>
    <GuideTable caption="A sample workflow note for an artwork handoff" headers={["Record", "Example to test"]} rows={[
      ["Starting event", "Customer confirms the artwork and order details."],
      ["Information needed", "The approved file, order reference and any special instructions."],
      ["Owner and next step", "Production receives the job and confirms it can begin."],
      ["Exception", "If the file is missing or a change comes in, send the job back for review with a clear owner."],
      ["Evidence it worked", "Staff can tell which file was approved and see the current status."],
    ]} />
    <p>Keep the first note short enough for someone to correct on a call. Give it an owner who can update it when the real process changes. Mark which facts came from the order and which were guessed. Where two teams describe the same step differently, show them the same case and agree what should happen.</p>
    <h2>How do you check the workflow before making it live?</h2>
    <p>Pick a standard case and two exceptions, such as a file arriving late or a customer changing a confirmed order. Have the teams run each case and explain what they expected to happen next. Check who can update a status, whether a message goes to the intended person and how someone can recover a mistake. Use sample records for the walkthrough if the real ones contain private information.</p>
    <p>At handover, ask somebody who missed the meeting to do one task using the guide. If they have to call the developer, record where they got stuck and update the guide or the screen. A short, tested handoff gives new staff a place to start.</p>
    <p>For the question of when the current tools are worth replacing, <Link href="/blog/when-to-rebuild-an-aging-system">read the rebuild decision guide</Link>.</p>
  </StackGuide>;
}
