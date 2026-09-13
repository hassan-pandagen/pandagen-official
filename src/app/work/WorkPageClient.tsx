import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { caseStudy } from "@/data/case-study-facts";
import styles from "./work.module.css";

type Project = {
  slug: string;
  category: string;
  summary: string;
  image: string;
  alt: string;
  surface: string;
  width?: number;
  height?: number;
};

const clientProjects: Project[] = [
  {
    slug: "ladies-4-jesus",
    category: "Community & publishing",
    summary: "A community website with owner-managed publishing, stories and moderated submissions.",
    image: "/work/ladies-4-jesus.png",
    alt: "Ladies 4 Jesus homepage with community photography, stories and a Share Your Story button.",
    surface: styles.community,
  },
  {
    slug: "emblematic-studio",
    category: "Product catalogue & enquiries",
    summary: "A material-led product catalogue with guides and an artwork-to-quote journey.",
    image: "/work/emblematic-studio.png",
    alt: "Emblematic Studio website showing its patch collection and product-led visual design.",
    surface: styles.catalogue,
  },
];

const affiliatedProjects: Project[] = [
  {
    slug: "panda-patches",
    category: "Custom commerce",
    summary: "A patch business with custom pricing, checkout and a connected customer portal.",
    image: "/work/panda-patches.png",
    alt: "Panda Patches iron-on patch page with product details and a custom quote form.",
    surface: styles.commerce,
  },
  {
    slug: "enterprise-ops",
    category: "Internal operations software",
    summary: "The staff workspace behind Panda Patches: orders, production, payments and reporting.",
    image: "/work/enterprise-ops.png",
    alt: "Panda Patches operations dashboard with its production pipeline; sensitive customer and financial data is blurred.",
    surface: styles.operations,
    width: 1711,
    height: 919,
  },
];

const migration = caseStudy("mycustompatches");
const codeLab = caseStudy("panda-codelab");
const collectionItems = [
  migration,
  ...clientProjects.map(({ slug }) => caseStudy(slug)),
  { name: "NorthDeck Group", href: "https://northdeckgroup.com/" },
  ...affiliatedProjects.map(({ slug }) => caseStudy(slug)),
  codeLab,
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.pandacodegen.com/work#webpage",
      url: "https://www.pandacodegen.com/work",
      name: "Selected work: websites, commerce and custom software",
      description: "Explore PandaCodeGen website migrations, custom storefronts and operations software, with project scope and client relationships stated.",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      mainEntity: { "@id": "https://www.pandacodegen.com/work#projects" },
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      "@id": "https://www.pandacodegen.com/work#projects",
      itemListElement: collectionItems.map(({ name, href }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        url: new URL(href, "https://www.pandacodegen.com").href,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Work", item: "https://www.pandacodegen.com/work" },
      ],
    },
  ],
};

function ProjectCard({ project }: { project: Project }) {
  const study = caseStudy(project.slug);
  return (
    <article className={styles.project}>
      <Link href={study.href} className={styles.projectLink} aria-labelledby={`${project.slug}-title`}>
        <div className={`${styles.preview} ${project.surface}`}>
          <Image
            src={project.image}
            alt={project.alt}
            width={project.width ?? 1912}
            height={project.height ?? 914}
            sizes="(min-width: 1440px) 600px, (min-width: 768px) 44vw, 90vw"
            className={styles.screenshot}
          />
          <span className={styles.previewArrow} aria-hidden="true"><ArrowUpRight size={22} /></span>
        </div>
        <div className={styles.projectMeta}>
          <span>{project.category}</span>
          <span>{study.relationship}</span>
        </div>
        <h3 id={`${project.slug}-title`} className={styles.projectTitle}>{study.name}</h3>
        <p className={styles.projectSummary}>{project.summary}</p>
        <span className={styles.textLink}>Read case study <ArrowUpRight size={17} aria-hidden="true" /></span>
      </Link>
    </article>
  );
}

export default function WorkPageClient() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <section className={`${styles.container} ${styles.intro}`} aria-labelledby="work-title">
          <p className={styles.eyebrow}>PandaCodeGen / Websites & software</p>
          <div className={styles.introGrid}>
            <h1 id="work-title">Selected <span className="font-serif italic">work.</span></h1>
            <div className={styles.introCopy}>
              <p>Website migrations, custom storefronts and the software behind them. Here’s what we built.</p>
              <Link href="/contact#contact-quote-form" className={styles.textLink}>Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
          <nav className={styles.projectNav} aria-label="Explore work">
            <span className={styles.exploreLabel}>Explore the projects <ArrowDown size={16} aria-hidden="true" /></span>
            <div>
              <a href="#client-work">Client work <span>04</span></a>
              <a href="#affiliated-work">Founder-affiliated work <span>03</span></a>
            </div>
          </nav>
        </section>

        <section className={`${styles.container} ${styles.clientWork}`} aria-labelledby="client-work">
          <div className={styles.sectionHeading}>
            <h2 id="client-work">Built for our clients.</h2>
            <span className={styles.sectionNote}>From the website to the way it works</span>
          </div>
          <article className={styles.featured}>
            <Link href={migration.href} className={styles.featuredLink} aria-labelledby="mycustompatches-title">
              <div className={`${styles.preview} ${styles.migration}`}>
                <Image
                  src="/work/mycustompatches.png"
                  alt="MyCustomPatches product page with a chenille patch gallery, product details and an instant quote action."
                  width={1912}
                  height={914}
                  sizes="(min-width: 1440px) 780px, (min-width: 960px) 58vw, 90vw"
                  loading="eager"
                  fetchPriority="high"
                  className={styles.screenshot}
                />
              </div>
              <div className={styles.featuredCopy}>
                <p className={styles.eyebrow}>Featured / Website migration</p>
                <h3 id="mycustompatches-title">{migration.name}</h3>
                <p className={styles.featuredSummary}>An established WordPress storefront, rebuilt in custom code.</p>
                <p className={styles.featuredDetail}>The product catalogue, blog and quote journey moved to Next.js, with URL redirects and launch checks.</p>
                <div className={styles.featuredFooter}>
                  <span>{migration.relationship}<br /><span className={styles.entity}>{migration.legalEntity}</span></span>
                  <span className={styles.roundArrow} aria-hidden="true"><ArrowUpRight size={25} /></span>
                </div>
                <span className={styles.featuredCta}>Read the migration case study</span>
              </div>
            </Link>
          </article>
          <div className={styles.projectGrid}>
            {clientProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <article className={styles.liveProject}>
            <a href="https://northdeckgroup.com/" target="_blank" rel="noopener noreferrer" className={styles.liveProjectLink} aria-labelledby="northdeck-title">
              <div className={`${styles.preview} ${styles.northdeck}`}>
                <Image
                  src="/work/northdeck-group.png"
                  alt="NorthDeck Group homepage presenting its connected security systems and business services."
                  width={1912}
                  height={914}
                  sizes="(min-width: 1440px) 600px, (min-width: 768px) 44vw, 90vw"
                  className={styles.screenshot}
                />
              </div>
              <div className={styles.liveProjectCopy}>
                <p className={styles.eyebrow}>Business website / Client project</p>
                <h3 id="northdeck-title">NorthDeck Group</h3>
                <p>A custom website bringing connected security systems and business services under one roof.</p>
                <span className={styles.textLink}>Visit live website <ArrowUpRight size={18} aria-hidden="true" /></span>
                <span className={styles.externalNote}>northdeckgroup.com · Opens in a new tab</span>
              </div>
            </a>
          </article>
          <p className={styles.projectNote}>
            Explore each case study for the brief, our role and the build details. Project-specific results and their sources are included where available.
            <Link href="/editorial-policy#publication-controls" className="mt-3 flex min-h-8 w-fit items-center gap-2 font-semibold text-cognac underline underline-offset-4">
              How we publish results <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </p>
        </section>

        <section className={styles.affiliatedSection} aria-labelledby="affiliated-work">
          <div className={styles.container}>
            <div className={styles.affiliatedIntro}>
              <div>
                <p className={styles.eyebrow}>Founder-affiliated work</p>
                <h2 id="affiliated-work">Behind the storefront.<br /><span className="font-serif italic">Inside the business.</span></h2>
              </div>
              <p>We also build for businesses owned by co-founder Imran Raza Ladhani. These projects show that work, with the relationship clearly stated.</p>
            </div>
            <div className={styles.projectGrid}>
              {affiliatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className={styles.additionalProject}>
              <div>
                <p className={styles.eyebrow}>Also in the collection / {codeLab.relationship}</p>
                <h3>{codeLab.name}</h3>
                <p>An agency website with a custom component system, motion and 3D scenes.</p>
              </div>
              <Link href={codeLab.href} className={styles.textLink}>Explore the build <ArrowUpRight size={19} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={`${styles.container} ${styles.contactSection}`} aria-labelledby="project-cta">
          <div>
            <p className={styles.eyebrow}>Your next project</p>
            <h2 id="project-cta">Let’s make<br /><span className="font-serif italic">your next move.</span></h2>
          </div>
          <div className={styles.contactCopy}>
            <p>Tell us what your website needs to do, what’s getting in the way and what you want to keep. We’ll help you work out the next step.</p>
            <Link href="/contact#contact-quote-form" className={styles.contactButton}>Discuss your project <ArrowRight size={20} aria-hidden="true" /></Link>
            <Link href="/services" className={styles.textLink}>Explore our services <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <Footer showCta={false} />
    </div>
  );
}
