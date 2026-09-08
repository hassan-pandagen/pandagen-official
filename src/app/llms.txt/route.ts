import { buildLlmsTxt } from '@/data/llms-txt';

// Serves /llms.txt. Replaced the static public/llms.txt so the guide index is
// generated from the taxonomy instead of hand-maintained; see src/data/llms-txt.ts.
//
// force-static means this is written once at build time, exactly like the file
// it replaced. src/proxy.ts already excludes *.txt from its matcher, so the
// response reaches crawlers with no middleware in the path.

export const dynamic = 'force-static';

export function GET(): Response {
    return new Response(buildLlmsTxt(), {
        headers: {
            'content-type': 'text/plain; charset=utf-8',
            'cache-control': 'public, max-age=0, must-revalidate',
            // NOINDEX, NOT DISALLOW. The distinction is the whole point.
            //
            // This file must stay fetchable, so a robots.txt Disallow would be
            // the wrong tool: noindex leaves it readable by anything that asks
            // while keeping it out of a search index.
            //
            // WHO ACTUALLY READS IT, corrected 28 Aug 2026 against the evidence.
            // An earlier version of this comment claimed ChatGPT, Claude and
            // Perplexity request this URL directly. That is not supported.
            // Ahrefs (137,210 domains, Jun 2026) found 97% of valid llms.txt
            // files received zero requests, with AI retrieval bots making up
            // 1.1% of the traffic that did arrive against 21.7% for SEO audit
            // tools. Otterly logged 84 of 62,100 AI-bot hits (0.1%). Dries
            // Buytaert's month of Cloudflare logs recorded no answer-engine
            // requests at all. Our own Vercel logs on 28 Aug 2026 show the file
            // fetched by Dataprovider.com, a commercial data broker.
            //
            // The demonstrated audience is agentic coding tools (Claude Code,
            // Cursor, OpenCode) pointed at documentation sites. That is what the
            // format was designed for. Keeping the file costs nothing because it
            // is generated from the taxonomy and guarded, which is the correct
            // amount to spend on it. Do not expand the investment without new
            // evidence, and do not restate the old audience claim.
            //
            // Why keep it out. The file is a flat condensation of the company
            // facts, commercial terms, evidence policy, project records and
            // guide index, all of which already have proper pages. Indexed, it
            // is a near-duplicate of /ai-info and the service pages with no
            // title, no description, no navigation and nothing to click. The
            // case that matters is it surfacing for a brand query and taking an
            // impression from the home page, which converts at about 17%.
            //
            // Google ignores llms.txt as a RANKING signal. That is a separate
            // question from whether Googlebot can crawl and index the document,
            // which it can, and nothing here was stopping it.
            'x-robots-tag': 'noindex',
        },
    });
}
