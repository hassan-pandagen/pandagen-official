// Centralized blog data - Add new posts here and they'll automatically appear in sitemap
export type IllustrationType = 'wordpress' | 'speed' | 'code' | 'saas' | 'plugins' | 'traffic' | 'sales' | 'conversion' | 'ranking' | 'cost' | 'performance';

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  role: string;
  featured: boolean;
  illustrationType: IllustrationType;
  lastModified?: string; // For sitemap
  faqs?: FAQ[]; // For FAQ Schema (helps win featured snippets)
}

export const blogPosts: BlogPost[] = [
  {
    id: "wordpress-killer",
    title: "Why WordPress Is a Waste of Money in 2026",
    excerpt: "The hidden math behind plugins, hosting, and lost revenue.",
    category: "Cost Analysis",
    readTime: "8 min",
    date: "Jan 15",
    author: "Hassan",
    role: "Lead Eng",
    featured: false,
    illustrationType: 'wordpress',
    lastModified: "2026-01-15",
  },
  {
    id: "shopify-headless",
    title: "Shopify Plus + Next.js: Sub-Second Load Times",
    excerpt: "We bypassed Liquid limitations to build a storefront that loads in under 1 second.",
    category: "E-Commerce",
    readTime: "12 min",
    date: "Jan 10",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'saas',
    lastModified: "2026-01-10",
  },
  {
    id: "elementor-kills-seo",
    title: "Stop Using Page Builders (Why Elementor Kills SEO)",
    excerpt: "Visual builders generate 300% more DOM nodes than necessary.",
    category: "Performance",
    readTime: "6 min",
    date: "Dec 28",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'code',
    lastModified: "2025-12-28",
  },
  {
    id: "wordpress-plugins-destroy-speed",
    title: "WordPress Plugins Are Destroying Your Site Speed (And Revenue)",
    excerpt: "30+ plugins = 200+ HTTP requests. Here's the math your developer won't show you.",
    category: "Performance",
    readTime: "10 min",
    date: "Feb 5",
    author: "Hassan",
    role: "Lead Eng",
    featured: false,
    illustrationType: 'plugins',
    lastModified: "2026-02-05",
    faqs: [
      {
        question: "Why is my WordPress site so slow?",
        answer: "WordPress sites become slow due to plugin bloat. Every plugin adds 2-15 HTTP requests, CSS files, and JavaScript that must load on every page. With 30+ plugins, you're looking at 200+ HTTP requests and 2-4MB of JavaScript before visitors see anything."
      },
      {
        question: "How many plugins are too many for WordPress?",
        answer: "Any site with more than 15 active plugins is guaranteed to have performance issues. Each plugin adds overhead, and conflicts between plugins cause crashes. The average WordPress site with 30+ plugins scores 35/100 on Google PageSpeed Mobile."
      },
      {
        question: "Can I speed up WordPress without removing plugins?",
        answer: "Caching plugins like WP Rocket can help marginally, but they can't eliminate the fundamental bloat. To get truly fast (under 1 second load time), you need to replace plugins with custom code or migrate to a modern framework like Next.js."
      },
      {
        question: "How much revenue am I losing from slow WordPress speed?",
        answer: "Google found that 53% of mobile visitors leave if a page takes longer than 3 seconds to load. If your site makes $500,000/year with a 4-second load time, you're losing roughly $75,000-$150,000 annually from visitors who bounced before the page loaded."
      }
    ]
  },
  {
    id: "shopify-plus-still-slow",
    title: "Why Your Shopify Plus Store Still Loads in 4 Seconds",
    excerpt: "You're paying $2,300/mo for Shopify Plus and still failing Core Web Vitals.",
    category: "E-Commerce",
    readTime: "9 min",
    date: "Feb 6",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'cost',
    lastModified: "2026-02-06",
    faqs: [
      {
        question: "Why is my Shopify Plus store still slow?",
        answer: "Shopify Plus provides better infrastructure but doesn't fix the fundamental problem: Liquid templates are render-blocking. Every page must be rendered server-side, and third-party app scripts add 300-600ms of JavaScript that blocks interactivity. The average Shopify Plus store loads in 3.8 seconds despite the $2,300/month cost."
      },
      {
        question: "Is Shopify Plus worth the $2,300 per month?",
        answer: "Shopify Plus is worth it for the backend features (inventory, orders, payments), but the slow theme limits your ROI. A better approach is keeping Shopify Plus for backend management while using a custom fast storefront that loads in under 1 second."
      },
      {
        question: "How can I make my Shopify store faster?",
        answer: "Theme optimization has a ceiling - you can only get marginal improvements. For true sub-1-second speed, you need a custom headless storefront built with Next.js that connects to Shopify's backend via API. This gives you instant load times while keeping all Shopify features."
      },
      {
        question: "What is headless Shopify?",
        answer: "Headless Shopify means you keep Shopify for inventory and checkout (the backend) but replace the slow Liquid theme with a custom fast storefront (the frontend). Your store loads 4x faster, converts better, and you still use the same Shopify dashboard."
      }
    ]
  },
  {
    id: "wordpress-traffic-drop-speed",
    title: "Why Is My WordPress Site Losing Traffic? (The Speed Tax You're Paying)",
    excerpt: "Slow WordPress sites lose Google rankings fast. Here's the simple math on why speed = traffic.",
    category: "Traffic Growth",
    readTime: "7 min",
    date: "Feb 7",
    author: "Hassan",
    role: "Lead Eng",
    featured: false,
    illustrationType: 'traffic',
    lastModified: "2026-02-07",
    faqs: [
      {
        question: "Why is my website traffic decreasing?",
        answer: "If your website traffic has been steadily dropping, site speed is likely the culprit. Google's Core Web Vitals update in 2021 made speed a direct ranking factor. Slow sites (4+ seconds load time) get pushed down in search results while faster competitors take your rankings."
      },
      {
        question: "Does website speed affect SEO?",
        answer: "Yes, absolutely. Google uses Core Web Vitals (speed metrics) as a direct ranking factor. Sites with Mobile PageSpeed scores below 50 lose 20-30% of organic traffic. Fast sites (under 2 seconds) rank higher than slow sites with identical content."
      },
      {
        question: "How do I check if my site is too slow?",
        answer: "Go to pagespeed.web.dev and test your site. If your Mobile Score is 0-49 (red), speed is destroying your traffic. If it's 50-89 (orange), you're losing some rankings. Only 90-100 (green) means speed isn't your problem."
      },
      {
        question: "Can I recover lost traffic from a slow website?",
        answer: "Yes. When we migrate clients from slow WordPress to fast Next.js sites, traffic typically recovers within 30-90 days. Google re-crawls the faster pages, rankings improve, and traffic returns to peak levels plus 15-20% growth from improved rankings."
      }
    ]
  },
  {
    id: "shopify-slow-losing-sales",
    title: "Your Shopify Store Is Costing You $75K/Year in Lost Sales (Here's the Math)",
    excerpt: "Every second your store takes to load costs you customers. We calculated exactly how much.",
    category: "E-Commerce",
    readTime: "8 min",
    date: "Feb 10",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'sales',
    lastModified: "2026-02-10",
  },
  {
    id: "shopify-conversion-rate-speed-fix",
    title: "Why Is My Conversion Rate So Low? (Shopify Speed Is Killing Your Sales)",
    excerpt: "Your conversion rate is low because visitors leave before your page loads. The fix is simpler than you think.",
    category: "Conversion",
    readTime: "9 min",
    date: "Feb 11",
    author: "Hassan",
    role: "Lead Eng",
    featured: false,
    illustrationType: 'conversion',
    lastModified: "2026-02-11",
  },
  {
    id: "why-competitor-outranks-you",
    title: "Why Your Competitor Outranks You on Google (And Pays Less for Hosting)",
    excerpt: "They're getting 3× your traffic with a coded website. Google, ChatGPT, and Bing all prefer fast sites. Here's why.",
    category: "Traffic Growth",
    readTime: "11 min",
    date: "Feb 15",
    author: "Hassan",
    role: "Lead Eng",
    featured: false,
    illustrationType: 'ranking',
    lastModified: "2026-02-15",
    faqs: [
      {
        question: "Why does my competitor rank higher on Google than me?",
        answer: "If your competitor has a coded website and you have WordPress or Shopify, they're beating you on speed. Google uses website speed as a direct ranking factor. Fast sites (under 1.5 seconds) rank 20-30 positions higher than slow sites (3+ seconds) with identical content. Your competitor loads in 1.2 seconds. You load in 3.8 seconds. Google picks the faster site."
      },
      {
        question: "Why does Google prefer coded websites over WordPress?",
        answer: "Coded websites load faster because they're built with modern technology. WordPress is slow because plugins and themes add hundreds of files that must load on every page. Google can read a coded website in 0.3 seconds vs 4-6 seconds for WordPress. Faster sites rank higher."
      },
      {
        question: "Do ChatGPT and Bing also prefer fast websites?",
        answer: "Yes. ChatGPT's web search and Bing both prioritize fast-loading sites. When ChatGPT searches the web to answer questions, it prefers sites that load quickly and are easy to read. Same for Bing. All modern search engines (Google, Bing, ChatGPT, Perplexity) reward fast sites."
      },
      {
        question: "How much more does WordPress hosting cost compared to coded websites?",
        answer: "WordPress requires expensive hosting at $100-$400/month because it uses a lot of server resources. Coded websites run for free or $20/month. Over one year: WordPress = $1,200-$4,800 vs coded site = $0-$240. You save $1,000-$4,500 annually."
      },
      {
        question: "Can I improve WordPress SEO without rebuilding my site?",
        answer: "You can make small improvements with caching plugins and image compression, but you'll hit a limit. WordPress will never load in under 1.5 seconds with plugins. To compete with coded websites and recover lost rankings, you need to rebuild with modern technology."
      }
    ]
  },
  {
    id: "how-to-achieve-100-pagespeed",
    title: "How to Achieve 100/100 PageSpeed Score: Complete Next.js Guide",
    excerpt: "We achieve 98-100/100 PageSpeed scores on every client site. Here's the exact optimization process we use, step by step.",
    category: "Performance",
    readTime: "12 min",
    date: "Feb 17",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'speed',
    lastModified: "2026-02-17",
    faqs: [
      {
        question: "What is a good PageSpeed score?",
        answer: "A good PageSpeed score is 90-100 (green). Scores of 50-89 (orange) mean you're losing 10-15% of traffic to faster competitors. Scores of 0-49 (red) mean you're losing 20-30% of organic traffic and ranking lower on Google."
      },
      {
        question: "How do I check my PageSpeed score?",
        answer: "Go to pagespeed.web.dev, enter your URL, and click Analyze. Check your Mobile score (this is what matters for SEO). If it's below 70, you're losing traffic and rankings to faster competitors."
      },
      {
        question: "Can WordPress get 100/100 PageSpeed score?",
        answer: "No. WordPress can reach 60-75 at best, even when fully optimized. The architecture is too old. To hit 95-100, you need modern frameworks like Next.js with built-in optimization, code splitting, and server components."
      },
      {
        question: "How long does it take to improve PageSpeed score?",
        answer: "On WordPress: 2-4 weeks to go from 40 to 70, but you'll hit a ceiling. Migrating to Next.js: 4-6 weeks from start to 95-100 score. Once optimized, rankings improve within 30-90 days as Google re-crawls your faster pages."
      },
      {
        question: "Does PageSpeed score affect SEO?",
        answer: "Yes, directly. Google made Core Web Vitals (what PageSpeed measures) a ranking factor in 2021. Fast sites (90-100 score) rank 20-30 positions higher than slow sites (0-49 score) with identical content. PageSpeed = rankings = traffic."
      }
    ]
  },
  {
    id: "how-to-fix-slow-wordpress",
    title: "How to Fix a Slow WordPress Site (8 Ways That Actually Work)",
    excerpt: "Your WordPress site loads in 4 seconds. Your competitor loads in 0.9 seconds. Here's how to close the gap.",
    category: "Performance",
    readTime: "10 min",
    date: "Feb 19",
    author: "Hassan",
    role: "Lead Engineer",
    featured: true,
    illustrationType: 'performance',
    lastModified: "2026-02-19",
    faqs: [
      {
        question: "Why is my WordPress site so slow?",
        answer: "WordPress sites are slow because of plugin bloat, unoptimized images, theme overhead, and old PHP architecture. Each plugin adds 2-15 HTTP requests. With 30+ plugins, you're loading 200+ files before visitors see anything. The average WordPress site takes 3.8 seconds to load."
      },
      {
        question: "How many plugins are too many?",
        answer: "More than 10-15 plugins will slow your site noticeably. Each plugin adds code, CSS, JavaScript, and database queries. Even 'lightweight' plugins add 50-150KB. Security plugins alone can add 0.5-1 second to load time."
      },
      {
        question: "Can I make WordPress load in under 1 second?",
        answer: "No. Even with perfect optimization, WordPress struggles to break 1.5 seconds. The architecture is from 2003 and wasn't designed for modern performance standards. To get sub-1-second load times, you need to migrate to a modern framework like Next.js."
      },
      {
        question: "What's the fastest way to speed up WordPress?",
        answer: "The fastest improvement: Remove unused plugins (can save 1-2 seconds). Then optimize images with WebP format and lazy loading (saves 1-2 seconds). Add caching (saves 0.5-1 second). But you'll hit a ceiling around 2-2.5 seconds no matter what you do."
      },
      {
        question: "Should I migrate from WordPress to something else?",
        answer: "If your business depends on speed and SEO rankings, yes. WordPress optimization has diminishing returns. Migrating to Next.js gets you 0.8-1.2 second load times, 95-100 PageSpeed scores, and 2-3× more organic traffic within 90 days. ROI typically pays for migration within 3-6 months."
      }
    ]
  },
];
