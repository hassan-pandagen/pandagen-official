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
            // This file must stay fetchable: ChatGPT, Claude and Perplexity
            // request the URL directly, so a robots.txt Disallow would break
            // the one audience it exists for. noindex leaves it readable by
            // anything that asks and keeps it out of a search index.
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
