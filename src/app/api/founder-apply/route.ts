import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, website, _t } = body as {
      name: string;
      email: string;
      website: string;
      _t?: number;
    };

    // Anti-spam: reject if submitted under 3 seconds
    if (_t && (Date.now() - _t) < 3000) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !website) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL!;

    const geo = {
      country: request.headers.get('x-vercel-ip-country') || 'Unknown',
      city: decodeURIComponent(request.headers.get('x-vercel-ip-city') || 'Unknown'),
    };

    // Notify owner
    await resend.emails.send({
      from: fromEmail,
      to: fromEmail,
      subject: `Founder Offer Application: ${name} — ${website}`,
      text: [
        `FOUNDER OFFER APPLICATION`,
        `${new Date().toUTCString()}`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Website: ${website}`,
        ``,
        `Location: ${geo.city}, ${geo.country}`,
        ``,
        `ACTION: Review their site, reply within a few hours.`,
        `https://cal.com/pandagen/discovery`,
      ].join('\n'),
    });

    // Confirm to applicant
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: `We received your application — PandaCodeGen`,
      text: [
        `Hi ${name},`,
        ``,
        `We received your application for the $500 migration spot.`,
        ``,
        `We will review your site and get back to you within a few hours to let you know if it is a fit for our case study program.`,
        ``,
        `If you have questions in the meantime, just reply to this email.`,
        ``,
        `Hassan`,
        `PandaCodeGen`,
        `https://www.pandacodegen.com`,
      ].join('\n'),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Founder apply error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
