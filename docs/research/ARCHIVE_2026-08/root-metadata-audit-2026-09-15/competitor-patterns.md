# Competitor identity and service-directory patterns

Checked **15 September 2026**. Read-only research; no application changes.

The useful pattern is **an accurate primary offer, followed by a clearly organised range of services**. The evidence does not support a rule that established agencies avoid migration or platform names: several deliberately lead with their specialty. PandaCodeGen should broaden its company description because it actually sells new websites, online stores and custom software as well as migrations.

## Evidence quality

All eight pages below returned HTTP 200 to a direct GET at 15:16 UTC. Their actual `<title>`, `<meta name="description">` and server-rendered H1 text are recorded in [competitor-metadata-capture.json](competitor-metadata-capture.json). Descriptions in the comparison tables are **paraphrases of the verified tags**, not search snippets. H1 text was also checked against the public page extraction; this was not a screenshot or computed-visibility audit.

The first sandboxed raw-HTML requests could not connect. One bounded retry with authorised network access succeeded. Pagepro was considered, but its public text extraction returned only an iframe; Blazity provided a fourth fully readable comparison. No rankings, keyword volumes, agency prices or case-study outcomes were validated in this task.

## Homepage identity

| Agency and primary source | Actual HTML title | H1 text | What its description does |
| --- | --- | --- | --- |
| [Bejamas](https://bejamas.com/) | Migrate to a Website Your Team Can Run \| Bejamas | Migrate to a website your team can run. | Describes replacement of a legacy CMS, independent operation by the client's team, and continuing operation with Bejamas after launch. |
| [Naturaily](https://naturaily.com/) | Web Development & Design Agency \| Naturaily | YOUR HOW DID YOU FIND THEM WEB DEVELOPMENT & SHOPIFY AGENCY | Names website delivery, design and Shopify expertise, then invites an estimate. The title is plainer than the expressive H1. |
| [FocusReactive](https://focusreactive.com/) | Headless CMS Development Company \| Sanity, Storyblok, Next.js \| FocusReactive | Headless CMS Development Company, Sanity, Storyblok & more | Establishes its specialist development category and lists the frameworks, CMSs and commerce systems it works with. |
| [Blazity](https://www.blazity.com/) | Enterprise AI Agents & Agentic Workflows on Vercel AI Cloud \| Blazity | We are experts in building enterprise AI Agents & workflows | Describes designing, implementing and maintaining AI systems, supported by a vendor-partner credential. Its current primary proposition is enterprise AI engineering. |

**Application:** Naturaily is the closest example of a broader website-and-commerce umbrella. Bejamas is a useful counterexample: migration-led copy can be coherent when migration is the primary job the company wants to win. FocusReactive and Blazity likewise make deliberate specialist choices. None proves that a particular wording increases enquiries or rankings.

## Service-directory and service-family identity

| Page and evidence | Actual HTML title | H1 text | Structure and description pattern |
| --- | --- | --- | --- |
| [Bejamas services](https://bejamas.com/services), directory | Your Whole Web Team: Audit, Design, Migrate & Run \| Bejamas | Your whole web team. | Metadata and introduction preserve its CMS-consolidation proposition. The directory organises work into assessment, design, migration and continuing operation, with concrete outputs underneath. |
| [Naturaily services](https://naturaily.com/services), directory | Web Development, Headless & Shopify Services \| Naturaily | Web development, headless services & Shopify | The description names the available service families. The body separates web development, headless work, Shopify, ecommerce and design, with contextual links to each offer. Technology details appear later as their own section. |
| [FocusReactive headless CMS](https://focusreactive.com/services/headless-cms-expert-agency/), **service-family page, not a general directory** | Headless CMS Development Agency \| Sanity, Contentful, Payload CMS, Storyblok builds | Headless CMS Development Agency | The description reinforces its engineering and CMS specialty. The body distinguishes creating a platform, replacing an existing one and ongoing support; its homepage separately lists commerce, design, Next.js and integrations. |
| [Blazity services](https://www.blazity.com/services), directory | Custom AI software development & Next.js engineering \| Blazity | Custom AI software development & Next.js engineering services | Its description puts agents, workflows, performance, migrations and application builds under the AI-engineering umbrella. The page sorts services into five groups and gives each a buyer problem and destination. |

These are useful information-architecture examples, not substantiation for adopting the competitors' performance, compliance, speed or commercial promises. In particular, this report does not endorse the absolute outcome claims found in some service copy.

## Implications for PandaCodeGen

1. **Use the real company category for the default description.** Custom business websites and online stores are the main offer; custom software is also available. Redesign and migration describe possible engagements. Neither requires a buyer already to own a website. The root default should not introduce the company solely as a destination for businesses leaving platforms.
2. **Let `/services` describe the catalogue.** A services directory should help someone choose between a website, store, redesign/migration, software/integration work and AI SEO. It does not need to make every category the primary homepage proposition.
3. **Keep platform terms where they clarify a decision.** Named migration pages, related links, platform sections and relevant technical copy are appropriate places. Removing all platform terms would discard useful specificity; adding them indiscriminately to generic metadata would make the offer harder to understand.
4. **Separate scope from delivery promises.** PandaCodeGen's own `company-facts.ts` gives Starter, Growth and Scale different delivery ranges, while AI SEO is an ongoing engagement. The directory's unqualified “2 to 4 weeks” cannot describe all those services. This is an internal accuracy issue regardless of competitor practice. Bejamas also distinguishes discovery duration from the longer migration engagement on its [services page](https://bejamas.com/services).
5. **A title and an H1 can have different jobs while describing the same offer.** Naturaily uses a straightforward category title with a more expressive homepage heading. PandaCodeGen can keep its current customer-facing hero and give metadata a plain category description. No copying of slogans is needed.

## Proposed wording for the parent audit

These are recommendations, not applied changes or claims about keyword demand.

**Company/default title:**

> Custom Websites, Online Stores & Software | PandaCodeGen

**Company/default description:**

> Custom business websites, online stores and software. New builds, redesigns and migrations, with direct founder involvement and scope agreed before work starts.

**Services title:**

> Website, Ecommerce & Software Services | PandaCodeGen

**Services description:**

> Explore website builds, ecommerce, redesigns, migrations, custom software and AI SEO. Choose a service and discuss your scope with the founders.

A $1,500 starting price can remain in a website-build-specific description if its scope is explicit. It should not imply that every software project or monthly service shares that entry price. A universal completion time is unnecessary in either description; project-specific timing belongs beside the relevant scope.

The parent audit should check rendered metadata inheritance and the actual `/services` content before choosing the final strings. These competitor observations support clarity and consistency; they do not establish a ranking or conversion uplift.
