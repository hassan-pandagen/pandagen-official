import { NextResponse } from 'next/server';
import { createSign } from 'crypto';
import { blogPosts } from '@/data/blog';

// Force Node.js runtime — crypto module requires it
export const runtime = 'nodejs';

const SITE_BASE   = 'https://www.pandacodegen.com';
const INDEXING_URL = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
const TOKEN_URL    = 'https://oauth2.googleapis.com/token';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function b64url(value: string): string {
    return Buffer.from(value)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

async function getAccessToken(): Promise<string> {
    const email = process.env.GOOGLE_INDEXING_CLIENT_EMAIL;
    const rawKey = process.env.GOOGLE_INDEXING_PRIVATE_KEY;

    if (!email || !rawKey) {
        throw new Error(
            'Missing env vars: GOOGLE_INDEXING_CLIENT_EMAIL and/or GOOGLE_INDEXING_PRIVATE_KEY'
        );
    }

    // Vercel stores multi-line keys with literal \n — restore them
    const privateKey = rawKey.replace(/\\n/g, '\n');

    const now     = Math.floor(Date.now() / 1000);
    const header  = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
    const payload = b64url(JSON.stringify({
        iss:   email,
        scope: 'https://www.googleapis.com/auth/indexing',
        aud:   TOKEN_URL,
        iat:   now,
        exp:   now + 3600,
    }));

    const signer = createSign('SHA256');
    signer.update(`${header}.${payload}`);
    const sig = signer
        .sign(privateKey)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

    const jwt = `${header}.${payload}.${sig}`;

    const res = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion:  jwt,
        }),
    });

    const data = await res.json();
    if (!data.access_token) {
        throw new Error(`Token exchange failed: ${JSON.stringify(data)}`);
    }
    return data.access_token;
}

function getAllUrls(): string[] {
    const staticPages = [
        `${SITE_BASE}/`,
        `${SITE_BASE}/blog`,
        `${SITE_BASE}/about`,
        `${SITE_BASE}/about/hassan`,
        `${SITE_BASE}/about/imran`,
        `${SITE_BASE}/services`,
        `${SITE_BASE}/services/wordpress-migration`,
        `${SITE_BASE}/services/ecommerce`,
        `${SITE_BASE}/services/custom-engineering`,
    ];
    const blogUrls = blogPosts.map(p => `${SITE_BASE}/blog/${p.id}`);
    return [...staticPages, ...blogUrls];
}

// ─── POST /api/google-index — submit all URLs to Google Indexing API ──────────

export async function POST() {
    try {
        const token = await getAccessToken();
        const urls  = getAllUrls();

        const results = await Promise.allSettled(
            urls.map(url =>
                fetch(INDEXING_URL, {
                    method:  'POST',
                    headers: {
                        'Content-Type':  'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
                }).then(r => r.json())
            )
        );

        const succeeded = results.filter(r => r.status === 'fulfilled').length;
        const failed    = results.filter(r => r.status === 'rejected').length;
        const details   = results.map((r, i) => ({
            url:    urls[i],
            status: r.status,
            ...(r.status === 'fulfilled' ? { response: r.value } : { error: (r as PromiseRejectedResult).reason }),
        }));

        return NextResponse.json({ success: true, submitted: urls.length, succeeded, failed, details });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

// ─── GET /api/google-index — preview URLs + setup instructions ───────────────

export async function GET() {
    const urls = getAllUrls();
    return NextResponse.json({
        info:     'POST to this endpoint to submit all URLs to the Google Indexing API.',
        urlCount: urls.length,
        urls,
        setup: {
            step1: 'Go to console.cloud.google.com → Enable "Web Search Indexing API"',
            step2: 'Create a Service Account → generate a JSON key',
            step3: 'In Google Search Console → Settings → Users → add the service account email as Owner',
            step4: 'Add these two env vars to Vercel and .env.local:',
            envVars: {
                GOOGLE_INDEXING_CLIENT_EMAIL: 'your-service-account@your-project.iam.gserviceaccount.com',
                GOOGLE_INDEXING_PRIVATE_KEY:  '-----BEGIN RSA PRIVATE KEY-----\\n...\\n-----END RSA PRIVATE KEY-----',
            },
            step5: 'curl -X POST https://www.pandacodegen.com/api/google-index',
        },
    });
}
