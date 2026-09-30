# Blog image direction â€” 29 September 2026

## Evidence

- Google recommends compelling, relevant, high quality images for Discover, at least 1200 px wide where possible, and warns against misleading previews and text heavy images. [Discover guidance](https://developers.google.com/search/docs/appearance/google-discover)
- Google says the preferred image should represent the page; descriptive filenames and alt text help readers and search systems understand it. [Image SEO guidance](https://developers.google.com/search/docs/appearance/google-images)
- Nielsen Norman Group's eye tracking work found that readers attend to images relevant to their task and often ignore generic decorative imagery. [Photos as Web Content](https://www.nngroup.com/articles/photos-as-web-content/)

These sources do not establish a universal click-through-rate gain from one visual style. Compare post-level Search Console results over time while accounting for query and position changes.

## Current covers

The blog index and 88 articles use photographic covers instead of pastel interface diagrams. Each article has an explicit choice in `scripts/blog-photo-sources.mjs`; the current catalog uses 39 distinct scenes. Subjects include website maps, migration planning, parcels, invoices, contracts, cabling, accessibility testing, team workshops, and a smaller set of recognizable product-screen photographs. The rejected pottery and empty-store scenes are not used. `npm run blog:covers` writes a 1200 × 750 WebP cover and a 1200 × 675 social preview for each article.

The photos are **generated editorial imagery**. They are not evidence of a product session, client, account, citation, ranking, result, or agency team. The WordPress, Google, ChatGPT and Elementor screens are visual examples with generic content, not live captures. Article text and any sourced in-article captures must carry the factual claims. Do not describe a cover as a real screenshot or use it to support a performance claim.

Keep titles as HTML beside the cover. When an article needs to show a specific product screen or measured result, use a dated genuine capture inside the article with its context and source.
