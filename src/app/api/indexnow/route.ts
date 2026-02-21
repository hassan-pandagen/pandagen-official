import { NextResponse } from 'next/server';
import { blogPosts } from '@/data/blog';

const INDEXNOW_KEY = '95b8869ac7714e9fa60226a559eb96ca';
const SITE_HOST = 'www.pandacodegen.com';
const SITE_BASE = `https://${SITE_HOST}`;

// All URLs to submit to IndexNow
function getAllUrls(): string[] {
    const staticPages = [
        `${SITE_BASE}/`,
        `${SITE_BASE}/blog`,
        `${SITE_BASE}/about`,
        `${SITE_BASE}/services`,
        `${SITE_BASE}/services/wordpress-migration`,
        `${SITE_BASE}/services/ecommerce`,
        `${SITE_BASE}/services/custom-engineering`,
    ];

    const blogUrls = blogPosts.map(post => `${SITE_BASE}/blog/${post.id}`);

    return [...staticPages, ...blogUrls];
}

// POST /api/indexnow — submit all URLs to Bing IndexNow
export async function POST() {
    const urlList = getAllUrls();

    const payload = {
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_BASE}/${INDEXNOW_KEY}.txt`,
        urlList,
    };

    const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        return NextResponse.json(
            { error: 'IndexNow submission failed', status: response.status },
            { status: 500 }
        );
    }

    return NextResponse.json({
        success: true,
        submitted: urlList.length,
        urls: urlList,
    });
}

// GET /api/indexnow — preview which URLs will be submitted
export async function GET() {
    const urlList = getAllUrls();
    return NextResponse.json({
        key: INDEXNOW_KEY,
        keyFile: `${SITE_BASE}/${INDEXNOW_KEY}.txt`,
        urlCount: urlList.length,
        urls: urlList,
    });
}
