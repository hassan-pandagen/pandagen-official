import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const details = formData.get('details') as string;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare attachments (support multiple files)
    const attachments: any[] = [];
    const files = formData.getAll('file') as File[];

    for (const file of files) {
      if (file && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    // Send email via Resend
    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@pandagen.com',
      to: 'info@pandacodegen.com',
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <h2 style="color: #06B6D4; margin-bottom: 20px;">🎉 New Quote Request</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${service && service !== 'Select a service...' ? `<p style="margin: 10px 0;"><strong>Service:</strong> ${service}</p>` : ''}
            ${details ? `<p style="margin: 10px 0;"><strong>Project Details:</strong></p><p style="background: #f5f5f5; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${details}</p>` : ''}
            ${attachments.length > 0 ? `<p style="margin: 10px 0;"><strong>Attachments (${attachments.length}):</strong></p><ul style="margin: 5px 0; padding-left: 20px;">${attachments.map(a => `<li>${a.filename}</li>`).join('')}</ul>` : ''}
          </div>

          <div style="background: #06B6D4; color: white; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">This is a lead from your website. Reply directly to ${email}</p>
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
