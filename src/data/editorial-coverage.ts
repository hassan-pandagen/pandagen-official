export const editorialCoverage = [
  {
    id: "tech-magazine",
    publication: "Tech Magazine",
    title: "How Software Teams Reduce Risk From Critical Knowledge Gaps",
    published: "2026-11-18",
    dateLabel: "November 18, 2026",
    url: "https://techmagazine.io/qa/how-software-teams-reduce-risk-from-critical-knowledge-gaps/#answer12",
    topic: "Mapping the Panda Patches workflow with the people who use it.",
    guide: null,
  },
  {
    id: "techbullion",
    publication: "TechBullion",
    title: "16 Keys to Successful Resource Allocation in Software Projects",
    published: "2026-11-05",
    dateLabel: "November 5, 2026",
    url: "https://techbullion.com/16-keys-to-successful-resource-allocation-in-software-projects/",
    topic: "Budgeting for the custom work and running costs of a training website.",
    guide: "/blog/how-to-budget-for-custom-software",
  },
  {
    id: "cio-grid",
    publication: "CIO Grid",
    title: "How IT Leaders Decide When to Modernize Aging Systems",
    published: "2026-10-20",
    dateLabel: "October 20, 2026",
    url: "https://ciogrid.com/qa/how-it-leaders-decide-when-to-modernize-aging-systems/",
    topic: "Recognizing when everyday work has outgrown an existing system.",
    guide: "/blog/when-to-rebuild-an-aging-system",
  },
  {
    id: "womans-world",
    publication: "Woman's World",
    title: "Land No Experience Remote Jobs AI Training That Pay $15 to $30/HR",
    published: "2026-05-29",
    dateLabel: "May 29, 2026",
    url: "https://www.womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay",
    topic: "How remote AI training work operates.",
    guide: null,
  },
] as const;

export const pressSummary = editorialCoverage
  .map(({ publication, dateLabel, title, url }) => `${publication} quoted Hassan Jamal on ${dateLabel} in "${title}" (${url}).`)
  .join(" ");
