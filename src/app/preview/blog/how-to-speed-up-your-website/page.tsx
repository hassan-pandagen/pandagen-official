import { permanentRedirect } from "next/navigation";

// 30 Sep 2026: this prototype was folded into the blog-wide redesign
// (src/app/blog/BlogRedesign.module.css), so the live article now shows the
// design this route was built to try out. ArticlePreview.module.css is kept
// alongside for reference.
export default function WebsiteSpeedArticlePreview() {
  permanentRedirect("/blog/how-to-speed-up-your-website");
}
