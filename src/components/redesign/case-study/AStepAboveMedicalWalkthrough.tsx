import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

// Existing owner-supplied screenshots of the replacement build, captured
// before launch. The older sample-data portal dashboard is not used here.
const chapters: WalkthroughChapter[] = [
  {
    id: "website", label: "Course website", title: "Help students find their next class.",
    description: "The website brings courses, locations and upcoming classes together. A student can browse the training available and follow a clear route to reserving a seat.",
    detail: "The homepage introduces phlebotomy and IV therapy training, with an upcoming-class card showing the course, city, date and tuition. These are course bookings, rather than patient appointments.",
    note: "This capture shows an earlier course date. It illustrates the website design, not the current class schedule.",
    shots: [{
      key: "homepage", src: "/work/a-step-above-medical-preview-homepage.png", width: 1912, height: 914,
      alt: "A Step Above Medical replacement homepage with course and location navigation, an upcoming IV therapy class and reserve-a-seat actions",
      label: "From finding a course to reserving a seat",
      body: "The new homepage gives students a way to explore courses and find classes by location. The website is in pre-launch testing.",
    }],
  },
  {
    id: "editor", label: "Content editor", title: "Let the team keep courses and locations up to date.",
    description: "The content editor separates courses from locations. Staff can change descriptions, durations and photographs without asking a developer to rewrite a page.",
    detail: "Each location has its own web address and an active toggle. The editor explains how to remove a city from the location list without deleting its page, and warns against changing an existing address unnecessarily.",
    note: "The screenshots show the Sanity editor used for the website's content. Class operations have their own portal.",
    shots: [
      {
        key: "locations", src: "/work/a-step-above-medical-editor-locations.png", width: 1912, height: 914,
        alt: "Sanity location editor for A Step Above Medical showing Chicago, a web address field, a location availability toggle and a city photograph",
        label: "Manage a location without rebuilding the website",
        body: "City pages have their own entries, photos and availability controls. The visible address guidance supports keeping existing links consistent.",
      },
      {
        key: "courses", src: "/work/a-step-above-medical-editor-courses.png", width: 1920, height: 1032,
        alt: "A Step Above Medical course editor showing IV therapy and phlebotomy entries, course content, duration and a course photograph",
        label: "Edit a course in one place",
        body: "The team can update course information, including the description, duration and photograph, through the content editor.",
      },
    ],
  },
  {
    id: "portal", label: "Team operations portal", title: "Bring the class schedule and its paperwork together.",
    description: "The separate portal gives the team a class schedule with enrolment, instructor assignments and readiness status. Navigation groups student records, certificates, payments-related reporting, emails and account administration in one workspace.",
    detail: "The exports screen offers spreadsheet downloads for students, classes, registrations, attendance, payments, certificates and accepted terms. Uploaded documents are stored separately from those spreadsheet records.",
    note: "These are pre-launch interface captures. The counts and balances shown are not presented as production results; the portal is undergoing testing.",
    shots: [
      {
        key: "classes", src: "/work/a-step-above-medical-portal-classes.png", width: 1912, height: 914,
        alt: "A Step Above Medical operations portal showing a class schedule, enrolment, instructor assignments, readiness indicators and an attention panel",
        label: "See what each class needs next",
        body: "The class view keeps scheduling, enrolment and readiness beside each other, with an attention panel for items the team needs to review.",
      },
      {
        key: "exports", src: "/work/a-step-above-medical-portal-exports.png", width: 1912, height: 914,
        alt: "A Step Above Medical portal export screen with CSV downloads for students, classes, registrations, attendance, payments, certificates and terms records",
        label: "Take the records out as spreadsheets",
        body: "Staff can download records as CSV files. The screen distinguishes these records from uploaded documents and says each download is logged.",
      },
    ],
  },
];

export default function AStepAboveMedicalWalkthrough() {
  return <CaseStudyWalkthrough
    slug="a-step-above-medical"
    projectName="A Step Above Medical"
    eyebrow="Inside the medical training management system"
    heading={<>A website for students.<br />A workspace for the team.</>}
    lead="One system connects the public course website, editable course and location content, and the team's class operations portal. Explore the screens below; the completed build is in pre-launch testing."
    navAriaLabel="Explore the medical training website and portal"
    chapters={chapters}
    handoff="The website uses Next.js and Sanity; the operations portal uses Supabase on the client's own account. Build completion and launch are separate stages: this project is built, with testing underway before release."
  />;
}
