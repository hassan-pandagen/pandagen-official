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
        },
    });
}
