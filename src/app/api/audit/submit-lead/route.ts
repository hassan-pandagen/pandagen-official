import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { PageSpeedResult } from '@/lib/audit/pagespeed';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send Resend notification to business owner
    const scoreColor = (s: number) => s >= 90 ? '#22c55e' : s >= 50 ? '#f59e0b' : '#ef4444';
    const fmt = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}s` : `${Math.round(n)}ms`;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_FROM_EMAIL!,
      subject: `🐼 New Audit Lead: ${url} — Score ${auditData.performanceScore}/100`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border-radius:12px">
          <h1 style="font-size:22px;margin:0 0 4px">New Audit Lead</h1>
          <p style="color:#888;margin:0 0 24px;font-size:14px">${new Date().toUTCString()}</p>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            <tr><td style="padding:8px 0;color:#888;font-size:13px">Email</td><td style="padding:8px 0;font-weight:600">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px">Website</td><td style="padding:8px 0"><a href="${url}" style="color:#3b82f6">${url}</a></td></tr>
          </table>

          <h2 style="font-size:16px;margin:0 0 12px;color:#888;text-transform:uppercase;letter-spacing:1px">Scores</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            ${[
              ['Performance', auditData.performanceScore],
              ['SEO', auditData.seoScore],
              ['Accessibility', auditData.accessibilityScore],
              ['Best Practices', auditData.bestPracticesScore],
            ].map(([label, score]) => `
              <tr>
                <td style="padding:8px 0;color:#ccc;font-size:14px">${label}</td>
                <td style="padding:8px 0;text-align:right">
                  <span style="background:${scoreColor(score as number)};color:#000;font-weight:700;padding:2px 10px;border-radius:20px;font-size:14px">${score}/100</span>
                </td>
              </tr>`).join('')}
          </table>

          <h2 style="font-size:16px;margin:0 0 12px;color:#888;text-transform:uppercase;letter-spacing:1px">Core Web Vitals</h2>
          <table style="width:100%;border-collapse:collapse">
            ${[
              ['FCP (First Contentful Paint)', auditData.fcp],
              ['LCP (Largest Contentful Paint)', auditData.lcp],
              ['TBT (Total Blocking Time)', auditData.tbt],
              ['CLS (Cumulative Layout Shift)', auditData.cls],
            ].map(([label, val]) => `
              <tr>
                <td style="padding:6px 0;color:#ccc;font-size:13px">${label}</td>
                <td style="padding:6px 0;text-align:right;font-weight:600;font-size:13px">${typeof val === 'number' && (label as string).includes('CLS') ? (val as number).toFixed(3) : fmt(val as number)}</td>
              </tr>`).join('')}
          </table>
        </div>
      `,
    }).catch((err) => console.error('Resend notification failed:', err));

    return NextResponse.json({ success: true, message: 'Lead enrolled successfully' }, { status: 200 });
  } catch (error) {
    console.error('Submit lead error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
