import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

// Screenshots taken from the live site (northdeckgroup.com), 2 Oct 2026, at
// 1440x900 in a clean browser with the scroll animations allowed to finish.
// Copy is checked against the project's own repo (C:\Projects\Northdeckgroup):
// README.md for the 12 services and the enquiry flow, app/page.tsx for the
// delivery steps and the design scenario's labels.
const chapters: WalkthroughChapter[] = [
  {
    id: "security",
    label: "Security systems",
    title: "What a property manager sees first.",
    description: "The homepage leads with security: connected CCTV, access and intrusion systems, designed around the property and not sold from a catalogue.",
    detail: "A tabbed index covers five layers: video surveillance, access control, intrusion detection, intercom and entry, and system care. Each tab says what that layer solves, what it's designed around and what it delivers.",
    note: "Three environment cards (warehouses and logistics, workplaces and offices, retail and multi-site) show how the design changes with the kind of property.",
    shots: [
      {
        key: "home",
        src: "/work/northdeck-group-home.png",
        width: 1440,
        height: 900,
        alt: "The NorthDeckGroup homepage: the headline 'You're already in frame' over a photo of security cameras, with a button to request a security assessment.",
        label: "Homepage",
        body: "The first screen states the offer in one line: design, installation and support for connected security systems.",
      },
      {
        key: "systems",
        src: "/work/northdeck-group-systems.png",
        width: 1440,
        height: 900,
        alt: "The system index with five tabs (video surveillance, access control, intrusion detection, intercom and entry, system care) and the video surveillance panel open.",
        label: "Five system layers",
        body: "Pick a layer and the panel shows what it solves, what it's designed around and what it delivers.",
      },
      {
        key: "environments",
        src: "/work/northdeck-group-environments.png",
        width: 1440,
        height: 900,
        alt: "Three environment cards with photos: warehouses and logistics, workplaces and offices, and retail and multi-site.",
        label: "By property type",
        body: "Warehouses, workplaces and retail each get their own priorities instead of one generic pitch.",
      },
    ],
  },
  {
    id: "services",
    label: "Business services",
    title: "The second business, on the same site.",
    description: "NorthDeckGroup also runs a back-office and BPO practice. Its section opens with its own positioning, security monitoring first and operations support beyond it, so it doesn't read as an add-on.",
    detail: "A directory lists all 12 services in three groups: operations and back office, finance and compliance, and customer and digital. Each service then gets its own card with what's included.",
    note: "Remote video monitoring appears in both halves of the site: as a security system, and as the first service in the back-office directory.",
    shots: [
      {
        key: "intro",
        src: "/work/northdeck-group-services-intro.png",
        width: 1440,
        height: 900,
        alt: "The services section heading: 'Security monitoring first. Operations support beyond it.'",
        label: "Services intro",
        body: "Surveillance stays the flagship, and the back-office work is introduced as its own offer.",
      },
      {
        key: "directory",
        src: "/work/northdeck-group-service-directory.png",
        width: 1440,
        height: 600,
        alt: "The service directory: 12 numbered services in three columns, operations and back office, finance and compliance, and customer and digital.",
        label: "All 12 services",
        body: "Every service on one screen, grouped the way a buyer would look for them.",
      },
    ],
  },
  {
    id: "process",
    label: "How they work",
    title: "From first enquiry to handover.",
    description: "A 60-second enquiry brief asks three questions, starting with what kind of site or business it is. Nothing is sent until the visitor opens the email it prepares.",
    detail: "The delivery section sets out four steps (understand, map, engineer, commission), each with what the client leaves with. A worked design scenario for a logistics site then follows one incident through five decisions: detect, locate, identify, correlate and respond.",
    note: "The design scenario is a representative study, and the live site labels it that way. It names no client and claims no results.",
    shots: [
      {
        key: "enquiry",
        src: "/work/northdeck-group-enquiry.png",
        width: 1440,
        height: 900,
        alt: "The 60-second enquiry brief: three questions with a progress bar, the first asking for context (warehouse or site, workplace, retail or multi-site, business operations).",
        label: "Enquiry brief",
        body: "Three answers become a prepared email, and the visitor sends it themselves.",
      },
      {
        key: "delivery",
        src: "/work/northdeck-group-process.png",
        width: 1440,
        height: 900,
        alt: "The delivery steps beside a photo of a technician installing a camera: Understand and Map, each with a 'you leave with' line.",
        label: "Delivery steps",
        body: "Each step ends with something the client keeps, like a coverage plan with a purpose for every critical view.",
      },
      {
        key: "scenario",
        src: "/work/northdeck-group-scenario.png",
        width: 1440,
        height: 900,
        alt: "The representative design scenario: 'One site. Five zones. One response path.' with the brief, priorities and method for a logistics property.",
        label: "Design scenario",
        body: "A logistics site with five zones, marked on the page as a representative design with no client or performance claims.",
      },
      {
        key: "incident",
        src: "/work/northdeck-group-incident.png",
        width: 1440,
        height: 900,
        alt: "The incident walkthrough: five tabs (detect, locate, identify, correlate, respond) with the first decision open, 'Is the activity meaningful?'",
        label: "Incident walkthrough",
        body: "Five tabs follow one incident from the first signal to the person who acts on it.",
      },
    ],
  },
];

export default function NorthDeckGroupWalkthrough() {
  return (
    <CaseStudyWalkthrough
      slug="northdeck"
      projectName="NorthDeck Group"
      eyebrow="Two businesses. One site."
      heading={<>Security systems up front.<br />Back-office services alongside.</>}
      lead={<>The <strong>security systems</strong> a property manager comes for, the <strong>business services</strong> that sit beside them, and <strong>how a project runs</strong> from enquiry to handover.</>}
      navAriaLabel="Explore the NorthDeck Group build"
      chapters={chapters}
      handoff="A visitor can follow either business from the first screen, and both end at the same enquiry brief."
    />
  );
}
