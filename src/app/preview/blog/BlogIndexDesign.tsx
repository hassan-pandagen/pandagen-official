import Link from "next/link";
import EditorialTheme from "@/components/redesign/EditorialTheme";
import BlogVisual from "@/components/redesign/BlogVisual";
import visual from "@/components/redesign/BlogLibrary.module.css";
import styles from "@/components/redesign/Editorial.module.css";
import { blogPosts } from "@/data/blog";
import { hubs, hubPostIds } from "@/data/hubs";

// ─────────────────────────────────────────────────────────────────────────────
// Blog index in the redesign. Built by another session as /preview/blog;
// moved here on 30 Sep 2026 so the live /blog can render it. No page shell:
// the live route gets the header and footer from src/app/blog/layout.tsx,
// and the preview route wraps this in PreviewShell itself. Links, search and
// topic filters point at /blog, the canonical address.
// ─────────────────────────────────────────────────────────────────────────────

export function BlogIndexDesign({ q, topicSlug }: { q: string; topicSlug?: string }) {
  const topic = hubs.find((h) => h.slug === topicSlug);
  const ids = topic ? new Set(hubPostIds(topic)) : null;
  const posts = blogPosts
    .filter((p) => (!ids || ids.has(p.id)) && `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => Date.parse(b.lastModified || b.date) - Date.parse(a.lastModified || a.date));
  function topicHref(slug = "") {
    const query = new URLSearchParams();
    if (q) query.set("q", q);
    if (slug) query.set("topic", slug);
    return `/blog${query.size ? `?${query}` : ""}#guides`;
  }
  return (
    <EditorialTheme>
      <header className={`${styles.hero} ${visual.hero}`}><div className={styles.wrap}>
        <p className={styles.eyebrow}>PandaCodeGen / Field notes</p>
        <h1 className={visual.title}>Good questions.<br />Worth a read.</h1>
        <p className={visual.intro}>Welcome to our notebook. Explore guides, comparisons and lessons from building websites, online stores and the systems behind them. Pick a topic, or see what catches your eye.</p>
        <details className={visual.browser}>
          <summary>Browse topics {topic ? ` / ${topic.shortLabel}` : ` / ${hubs.length} to explore`}</summary>
          <nav aria-label="Browse guide topics" className={visual.topics}>
            <Link className={visual.topic} href={topicHref()} aria-current={!topic ? "page" : undefined}><strong>All guides</strong><span>{blogPosts.length} articles across the notebook</span></Link>
            {hubs.map((h) => <Link className={visual.topic} key={h.slug} href={topicHref(h.slug)} aria-current={topic?.slug === h.slug ? "page" : undefined}><strong>{h.shortLabel} <span aria-hidden="true" style={{ display: "inline" }}>&#8599;</span></strong><span>{hubPostIds(h).length} guides</span></Link>)}
          </nav>
        </details>
      </div></header>
      <section id="guides" className={styles.section} style={{ paddingTop: 0, scrollMarginTop: "7rem" }} aria-label="Guide library"><div className={styles.wrap}>
        <form action="/blog#guides" method="get" className={styles.search}>
          {topic && <input type="hidden" name="topic" value={topic.slug} />}
          <div><label htmlFor="guide-search">Search the notebook</label><input id="guide-search" name="q" type="search" defaultValue={q} placeholder="Try WordPress, website cost or slow checkout" /></div>
          <button type="submit">Search guides →</button>
        </form>
        <p className={styles.meta}>{posts.length} {posts.length === 1 ? "guide" : "guides"}{topic ? ` / ${topic.shortLabel}` : ""} · Most recently updated first</p>
        {topic && <p className="mt-4"><Link className={styles.link} href={`/blog/topic/${topic.slug}`}>Read the {topic.shortLabel} topic overview →</Link></p>}
        {posts.length === 0 && <div className="py-16"><h2 className={styles.heading}>No matching guides.</h2><p className="mt-4">Try a broader search, or <Link className={styles.link} href="/blog#guides">reset the filters</Link>.</p></div>}
        {posts.length > 0 && <>
          <h2 className={`${visual.sectionTitle} mt-10`}>{q ? "Search results" : topic ? topic.shortLabel : "On the reading list"}</h2>
          {!q && !topic && posts[0] && <Link href={`/blog/${posts[0].id}`} className={visual.featured}>
            <div className={visual.visual}><BlogVisual id={posts[0].id} eager /></div>
            {/* The featured card is dark; the shared eyebrow colour is for paper and read at 1.85:1 on it. */}
            <div><span className={styles.eyebrow} style={{ color: "#e8763a" }}>Latest guide / {posts[0].category}</span><h3>{posts[0].title}</h3><p>{posts[0].excerpt}</p><span className={visual.read}>Read the guide &#8599; &middot; {posts[0].readTime}</span></div>
          </Link>}
          <div className={visual.cards}>{(q || topic ? posts : posts.slice(1)).map((p) => <Link key={p.id} href={`/blog/${p.id}`} className={visual.row}>
            <div className={visual.visual}><BlogVisual id={p.id} /></div>
            <div><span className={styles.meta}>{p.category} &middot; {p.readTime} &middot; {p.lastModified ? `Updated ${p.lastModified}` : p.date}</span><h3>{p.title}</h3><p>{p.excerpt}</p><span className={visual.read}>Read the guide &#8599;</span></div>
          </Link>)}</div>
        </>}
        <div className="mt-16 border-t pt-8" style={{ borderColor: "var(--rule)" }}><p className={styles.copy}>Want to understand how we check claims and maintain these guides?</p><Link className={styles.link} href="/editorial-policy">Read our editorial policy →</Link></div>
      </div></section>
    </EditorialTheme>
  );
}
