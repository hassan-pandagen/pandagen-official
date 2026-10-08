import { blogPosts } from "@/data/blog";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const ISO_DATE = /^\d{4}-\d{2}-\d{2}/;

function longDate(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/**
 * The visible "Published ... · Updated ..." line in a post's byline.
 *
 * Added 4 Oct 2026. Before this, every post typed its byline date by hand, and
 * most showed only the publish date while the JSON-LD said the post had been
 * modified later. One said "Updated August 1" while its dateModified said
 * 20 August. A reader could not see what search engines were told.
 *
 * The updated date is read from blog.ts `lastModified`, the same value that
 * feeds the sitemap and that scripts/check_dates.py holds equal to the JSON-LD
 * dateModified and openGraph.modifiedTime. So the visible date cannot drift
 * from the structured one. Change the date in blog.ts (and the page, as
 * check_dates.py requires) and the byline follows.
 *
 * `published` is the page's datePublished. check_dates.py fails if they differ.
 */
export default function PostDateline({ postId, published }: { postId: string; published: string }) {
  const post = blogPosts.find((p) => p.id === postId);
  if (!post) throw new Error(`PostDateline: no blog.ts entry with id "${postId}"`);
  if (!ISO_DATE.test(published)) throw new Error(`PostDateline: published must be YYYY-MM-DD, got "${published}"`);

  const pub = published.slice(0, 10);
  const mod = post.lastModified && ISO_DATE.test(post.lastModified) ? post.lastModified.slice(0, 10) : undefined;

  return (
    <>
      Published <time dateTime={pub}>{longDate(pub)}</time>
      {mod && mod > pub && (
        <>
          <span className="mx-1.5 text-stone-300">·</span>
          Updated <time dateTime={mod}>{longDate(mod)}</time>
        </>
      )}
    </>
  );
}
