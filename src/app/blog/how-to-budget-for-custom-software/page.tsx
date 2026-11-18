import Link from "next/link";
import StackGuide, { GuideTable, stackGuideMetadata } from "@/components/blog/StackGuide";
import { editorialCoverage } from "@/data/editorial-coverage";

const id = "how-to-budget-for-custom-software";
const source = editorialCoverage.find(item => item.id === "techbullion")!;
export const metadata = stackGuideMetadata(id);

export default function Page() {
  return <StackGuide id={id}>
    <p><strong>Ask for two figures before approving a project: the cost to build it and the cost to run it.</strong> Then ask what makes the second figure rise. For a training business that could be more bookings, emails and staff accounts. For an AI app it could also be more document reads, audio minutes or model requests.</p>
    <h2>Where does custom work earn its place?</h2>
    <p>A Step Above Medical needed a better way for students to find and book classes and for staff to run them. We looked at which parts existing services could handle and where the team needed software built around their process. That let us focus the build on registration, class management, student emails and certificates. We also talked through the choice between the client owning the hosting bill and running the site under a care plan.</p>
    <p>I used that project in my contribution to <a href={source.url}>{source.publication}</a> on allocating a software budget. The useful question was where each part of the budget would help the business. <Link href="/work/a-step-above-medical">See the training website and staff portal</Link>.</p>
    <h2>What should be on the estimate?</h2>
    <GuideTable caption="Four items to check in a software quote" headers={["Cost", "What to ask for"]} rows={[
      ["Build", "Name the pages, workflows, integrations, migration, testing and training included."],
      ["Cloud and software", "List hosting, database, storage, email and other services with their plan limits and renewal costs."],
      ["Activity fees", "Estimate payments, API calls, documents or audio for normal and busy months."],
      ["Care and changes", "State what monitoring, updates and fixes cover, and how new work is priced."],
    ]} />
    <p>For each service, write down who owns the account and who pays the invoice. That matters whether your supplier manages the bill or you pay the provider directly. If a service starts within a free allowance, record the allowance and the price of the next plan. I would check the current provider terms against your usage before putting a figure in a proposal. <Link href="/blog/website-monthly-running-cost">See an itemized website running-cost example</Link>.</p>
    <h2>How do you plan for an AI app that grows?</h2>
    <p>Build three examples: the pilot, a typical month and a busy month. Suppose 200 users each submit three documents. That gives you 600 submissions to estimate. If people can ask follow-up questions or listen again, count those separately. For summaries, the length of what goes in and comes out can affect the bill. Decide how long files are kept and whether temporary copies are needed.</p>
    <p>Agree who gets the usage alert, when you review the estimate and who can approve an increase. Test the busy-month assumptions against a small pilot once you can see how people actually use the product. It gives you a better estimate to budget against and helps you decide which features to launch first.</p>
    <p>If you run a training business, start by listing one class, its registration steps and what staff do after payment. Those are the details we need to price a useful first build. <Link href="/services/training-business-websites">See website and booking options for training businesses</Link>.</p>
  </StackGuide>;
}
