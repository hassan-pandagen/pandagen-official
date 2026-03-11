// IndexNow ping — run with: node indexnow-ping.mjs
// ⚠️  WARNING: Only ping NEW or UPDATED URLs. Do NOT run the full list repeatedly.
// Pinging the same URLs daily risks Bing blacklisting the domain.
// Rule: add new URLs here → ping once after deployment → done.

const KEY  = "95b8869ac7714e9fa60226a559eb96ca";
const HOST = "www.pandacodegen.com";
const BASE = `https://${HOST}`;

const urls = [
  // Core
  `${BASE}/`,
  `${BASE}/services`,
  `${BASE}/pricing`,
  `${BASE}/contact`,
  `${BASE}/work`,
  `${BASE}/about`,
  `${BASE}/about/hassan`,
  `${BASE}/about/imran`,
  `${BASE}/partners`,
  `${BASE}/blog`,

  // Service pages
  `${BASE}/services/wordpress-migration`,
  `${BASE}/services/ecommerce`,
  `${BASE}/services/custom-engineering`,
  `${BASE}/services/woocommerce`,
  `${BASE}/services/wix`,
  `${BASE}/services/squarespace`,
  `${BASE}/services/webflow`,
  `${BASE}/services/gohighlevel`,

  // Blog posts
  `${BASE}/blog/wordpress-killer`,
  `${BASE}/blog/shopify-headless`,
  `${BASE}/blog/wordpress-plugins-destroy-speed`,
  `${BASE}/blog/elementor-kills-seo`,
  `${BASE}/blog/shopify-plus-still-slow`,
  `${BASE}/blog/shopify-conversion-rate-speed-fix`,
  `${BASE}/blog/wordpress-traffic-drop-speed`,
  `${BASE}/blog/wordpress-ai-security-risk-2026`,
  `${BASE}/blog/how-to-fix-slow-wordpress`,
  `${BASE}/blog/how-to-achieve-100-pagespeed`,
  `${BASE}/blog/shopify-slow-losing-sales`,
  `${BASE}/blog/why-competitor-outranks-you`,
  `${BASE}/blog/google-universal-commerce-protocol-what-it-means-for-your-store`,
  `${BASE}/blog/for-agencies-offer-custom-web-development`,
  `${BASE}/blog/why-we-chose-nextjs-over-wordpress-2026`,
  `${BASE}/blog/wordpress-vs-custom-code-real-cost-3-years`,
  `${BASE}/blog/shopify-dawn-theme-slow`,
  `${BASE}/blog/how-website-speed-affects-seo`,
  `${BASE}/blog/wordpress-vs-nextjs`,
  `${BASE}/blog/how-to-migrate-wordpress-to-nextjs`,

  // Legal
  `${BASE}/privacy`,
  `${BASE}/terms`,
  `${BASE}/cookies`,
];

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList: urls,
};

console.log(`Pinging IndexNow with ${urls.length} URLs...`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

console.log(`Status: ${res.status} ${res.statusText}`);

if (res.status === 200) {
  console.log("✅ Success — Bing + Yandex will crawl these within 24-48h");
} else if (res.status === 202) {
  console.log("✅ Accepted — URLs queued for crawling");
} else if (res.status === 400) {
  console.log("❌ Bad request — check URL format");
} else if (res.status === 403) {
  console.log("❌ Key mismatch — verify key file is accessible at keyLocation");
} else if (res.status === 422) {
  console.log("❌ URLs don't match the host — check for typos");
} else if (res.status === 429) {
  console.log("⚠️  Too many requests — wait 1 hour and retry");
} else {
  const body = await res.text();
  console.log("Response body:", body);
}
