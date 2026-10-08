import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { stackGuidePosts } from "@/data/stack-guides";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import PostDateline from "@/components/blog/PostDateline";
import FaqRows from "@/components/ui/FaqRows";
import RelatedPosts from "@/components/ui/RelatedPosts";
import s from "./StackGuide.module.css";

function getPost(id: string) {
  const post = blogPosts.find(item => item.id === id);
  const guide = stackGuidePosts.find(item => item.id === id);
  if (!post || !guide) throw new Error(`Missing guide: ${id}`);
  return { ...post, published: guide.published, eyebrow: guide.eyebrow };
}

export function stackGuideMetadata(id: string): Metadata {
  const post = getPost(id);
  const path = `/blog/${id}`;
  return {
    title: post.title, description: post.excerpt, alternates: { canonical: path },
    openGraph: { title: post.title, description: post.excerpt, url: `https://www.pandacodegen.com${path}`, type: "article", publishedTime: post.published, modifiedTime: post.lastModified, authors: ["Hassan Jamal"], images: [ogImageForPath(path)] },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default function StackGuide({ id, children }: { id: string; children: ReactNode }) {
  const post = getPost(id);
  const url = `https://www.pandacodegen.com/blog/${id}`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${url}#article`, headline: post.title, description: post.excerpt, datePublished: post.published, dateModified: post.lastModified, image: ogImageUrlForPath(`/blog/${id}`), mainEntityOfPage: url, inLanguage: "en-US", author: { "@type": "Person", "@id": "https://www.pandacodegen.com/#/schema/person/hassan", name: "Hassan Jamal", url: "https://www.pandacodegen.com/about/hassan" }, publisher: { "@id": "https://www.pandacodegen.com/#organization" } },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: (post.faqs ?? []).map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ] };
  return <main className={s.main}><article className={s.article}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <Breadcrumb items={postCrumbs(id, post.title)} />
    <header className={s.header}><p className={s.eyebrow}>{post.eyebrow}</p><h1>{post.title}</h1><p className={s.summary}>{post.excerpt}</p><p>By <Link href="/about/hassan">Hassan Jamal</Link>, Co-founder and Lead Engineer</p><PostDateline postId={id} published={post.published} /></header>
    <div className={s.body}>{children}</div>
    <section className={s.faq}><h2>Common questions</h2><FaqRows faqs={post.faqs ?? []} /></section>
    <TopicUpLink postId={id} />
    <RelatedPosts currentPostId={id} />
    <p className={s.disclosure}>PandaCodeGen offers website and application development. Recommendations here reflect our delivery approach; the proposal for your project defines its scope. <Link href="/editorial-policy">How we use evidence</Link>.</p>
  </article></main>;
}

export function GuideTable({ headers, rows, caption }: { headers: string[]; rows: ReactNode[][]; caption: string }) {
  return <div className={s.tableWrap} tabIndex={0} role="region" aria-label={caption}><table><caption>{caption}</caption><thead><tr>{headers.map(h => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th scope="row" key={j}>{cell}</th> : <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>;
}
