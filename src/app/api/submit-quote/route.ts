import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Escape HTML special characters to prevent injection in email templates
function escHtml(str: string | null | undefined): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/png',
  'image/jpeg',
  'application/zip',
  'application/x-zip-compressed',
]);

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const MAX_TOTAL_SIZE = 25 * 1024 * 1024; // 25 MB
const MAX_FILES = 3;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const details = formData.get('details') as string;

    // Source tracking fields
    const trafficSource = formData.get('trafficSource') as string;
    const trafficMedium = formData.get('trafficMedium') as string;
    const trafficCampaign = formData.get('trafficCampaign') as string;
    const landingPage = formData.get('landingPage') as string;
    const firstVisit = formData.get('firstVisit') as string;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Prepare attachments with server-side validation
    const attachments: { filename: string; content: Buffer }[] = [];
    const files = formData.getAll('file') as File[];

    if (files.length > MAX_FILES) {
      return NextResponse.json(
        { error: 'Maximum 3 files allowed' },
        { status: 400 }
      );
    }

    let totalSize = 0;
    for (const file of files) {
      if (file && file.size > 0) {
        // Validate MIME type
        if (!ALLOWED_MIME_TYPES.has(file.type)) {
          return NextResponse.json(
            { error: 'Invalid file type. Allowed: PDF, DOC, DOCX, PNG, JPG, ZIP' },
            { status: 400 }
          );
        }
        // Validate file size
        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { error: 'File exceeds 10 MB limit' },
            { status: 400 }
          );
        }
        totalSize += file.size;
        if (totalSize > MAX_TOTAL_SIZE) {
          return NextResponse.json(
            { error: 'Total file size exceeds 25 MB limit' },
            { status: 400 }
          );
        }
        // Sanitize filename — strip path traversal characters
        const safeFilename = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 100);
        const bytes = await file.arrayBuffer();
        attachments.push({
          filename: safeFilename,
          content: Buffer.from(bytes),
        });
      }
    }

    // Escape all user-supplied values before embedding in HTML email
    const safeName = escHtml(name);
    const safeEmail = escHtml(email);
    const safePhone = escHtml(phone);
    const safeService = escHtml(service);
    const safeDetails = escHtml(details);
    const safeSource = escHtml(trafficSource);
    const safeMedium = escHtml(trafficMedium);
    const safeCampaign = escHtml(trafficCampaign);
    const safeLanding = escHtml(landingPage);

    // Send email via Resend
    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@pandagen.com',
      to: 'info@pandacodegen.com',
      replyTo: email,
      subject: `New Quote Request from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <h2 style="color: #3B82F6; margin-bottom: 20px;">🎉 New Quote Request</h2>

          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>
            ${safeService && safeService !== 'Select a service...' ? `<p style="margin: 10px 0;"><strong>Service:</strong> ${safeService}</p>` : ''}
            ${safeDetails ? `<p style="margin: 10px 0;"><strong>Project Details:</strong></p><p style="background: #f5f5f5; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${safeDetails}</p>` : ''}
            ${attachments.length > 0 ? `<p style="margin: 10px 0;"><strong>Attachments (${attachments.length}):</strong></p><ul style="margin: 5px 0; padding-left: 20px;">${attachments.map(a => `<li>${escHtml(a.filename)}</li>`).join('')}</ul>` : ''}
          </div>

          ${safeSource ? `
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; margin-bottom: 15px; color: white;">
            <h3 style="margin: 0 0 15px 0; font-size: 16px; display: flex; align-items: center;">
              📊 Traffic Source
            </h3>
            <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 6px; backdrop-filter: blur(10px);">
              <p style="margin: 6px 0; font-size: 14px;"><strong>Source:</strong> ${safeSource}</p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Medium:</strong> ${safeMedium}</p>
              ${safeCampaign && safeCampaign !== 'none' ? `<p style="margin: 6px 0; font-size: 14px;"><strong>Campaign:</strong> ${safeCampaign}</p>` : ''}
              ${safeLanding ? `<p style="margin: 6px 0; font-size: 14px;"><strong>Landing Page:</strong> ${safeLanding}</p>` : ''}
              ${firstVisit ? `<p style="margin: 6px 0; font-size: 14px;"><strong>First Visit:</strong> ${new Date(firstVisit).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>` : ''}
            </div>
          </div>
          ` : ''}

          <div style="background: #3B82F6; color: white; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">This is a lead from your website. Reply directly to ${safeEmail}</p>
          </div>
        </div>
      `,
      attachments,
    });

    if (response.error) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Quote request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
