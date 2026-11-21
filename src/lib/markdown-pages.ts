import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";
import { migrationFaqs } from "@/data/wordpress-migration-faqs";
import { blogPosts } from "@/data/blog";
import { COMMERCIAL } from "@/data/company-facts";
import { SITE_URL } from "@/lib/i18n/config";
import { MARKDOWN_BLOG_SLUGS, MARKDOWN_SERVICE_SLUGS } from "@/data/markdown-paths";

// Markdown versions of service pages and buyer-intent guides for AI agents that send
// `Accept: text/markdown` (21 Nov 2026). Built from the same data as the pages, so the
// two can't drift. Blog posts get their summary and FAQs, not the full article.

const fact = (label: string) => COMMERCIAL.find((f) => f.label === label)?.value ?? "";
const list = (rows: readonly (readonly [string, string])[]) => rows.map(([t, b]) => `- **${t}:** ${b}`).join("\n");
const faqs = (rows: { q: string; a: string }[]) => rows.map(({ q, a }) => `### ${q}\n\n${a}`).join("\n\n");

function header(title: string, path: string) {
  return `# ${title}\n\n> **Source:** ${SITE_URL}${path}\n> **Format:** text/markdown for AI agents and LLMs. Company index: ${SITE_URL}/llms.txt`;
}

const offer = `## Working with PandaCodeGen

- Websites from $1,500. Website + business system (bookings, payments, reminders, client portal, accounting sync, AI-search setup) from $10,000.
- ${fact("Ongoing services")}
- ${fact("Payment structure")}
- If we don't deliver the signed scope, we refund 100% of the fees paid for it, starting within 4 to 5 business days.
- US Eastern business hours. First step: a free written check or a 15-minute call. [Pricing](${SITE_URL}/pricing) · [Contact](${SITE_URL}/contact) · info@pandacodegen.com`;

function serviceMarkdown(slug: string): string {
  const path = `/services/${slug}`;
  if (slug === "wordpress-migration") {
    return [header("WordPress migration services", path),
      "We move WordPress sites to a fast custom build with every page, post and old URL mapped and redirected, titles and canonical tags kept, and a written plan before work starts.",
      `## Questions people ask\n\n${faqs(migrationFaqs())}`, offer].join("\n\n") + "\n";
  }
  const s = servicePreview(slug);
  return [header(`${s.title} ${s.accent}`, path), s.lead,
    `## ${s.problemTitle}\n\n${s.problemIntro}\n\n${list(s.checks)}`,
    `## ${s.detailsTitle}\n\n${s.detailsIntro}\n\n${list(s.details)}`,
    `## How it runs\n\n${s.steps.map(([t, b], i) => `${i + 1}. **${t}:** ${b}`).join("\n")}`,
    `## ${s.priceTitle}\n\n**${s.price}.** ${s.priceCopy}\n\n${list(s.scopeNotes)}`,
    `## Questions people ask\n\n${faqs(previewServiceFaqs(slug))}`, offer].join("\n\n") + "\n";
}

function blogMarkdown(slug: string): string | null {
  const post = blogPosts.find((p) => p.id === slug);
  if (!post) return null;
  const path = `/blog/${slug}`;
  const qa = (post.faqs ?? []).map(({ question, answer }) => ({ q: question, a: answer }));
  return [header(post.title, path), post.excerpt,
    `Updated ${post.lastModified ?? post.date}. Full article: ${SITE_URL}${path}`,
    qa.length ? `## Questions this guide answers\n\n${faqs(qa)}` : "", offer].filter(Boolean).join("\n\n") + "\n";
}

export function markdownFor(path: string): string | null {
  const [, section, slug] = path.split("/");
  if (section === "services" && (MARKDOWN_SERVICE_SLUGS as readonly string[]).includes(slug)) return serviceMarkdown(slug);
  if (section === "blog" && (MARKDOWN_BLOG_SLUGS as readonly string[]).includes(slug)) return blogMarkdown(slug);
  return null;
}
