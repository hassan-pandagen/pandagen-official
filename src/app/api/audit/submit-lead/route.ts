import { NextRequest, NextResponse } from 'next/server';
import type { PageSpeedResult } from '@/lib/audit/pagespeed';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, url, auditData } = body as {
      email: string;
      url: string;
      auditData: PageSpeedResult;
    };

    if (!email || !url || !auditData) {
      return NextResponse.json({ error: 'Email, URL, and audit data are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const leadEngineUrl = process.env.LEAD_ENGINE_URL;
    if (!leadEngineUrl) {
      console.error('LEAD_ENGINE_URL env var is not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const payload = {
      email,
      website_url: url,
      pagespeed_score: auditData.performanceScore,
      load_time_ms: Math.round(auditData.fcp),
      seo_score: auditData.seoScore,
      accessibility_score: auditData.accessibilityScore,
      best_practices_score: auditData.bestPracticesScore,
      metrics: {
        fcp: auditData.fcp,
        lcp: auditData.lcp,
        tbt: auditData.tbt,
        cls: auditData.cls,
      },
    };

    const response = await fetch(`${leadEngineUrl}/api/prospects/enroll`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Lead engine error:', response.status, errorText);
      return NextResponse.json({ error: 'Failed to enroll lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Lead enrolled successfully' }, { status: 200 });
  } catch (error) {
    console.error('Submit lead error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
