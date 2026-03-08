import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, role, message } = body;

    // Validate required fields
    if (!name || !email || !role || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Try Resend if API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'MAPL Health <onboarding@resend.dev>',
          to: ['jconstantine@maplhealth.com'],
          subject: `[MAPL Health] New ${role} Inquiry from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
              <tr>
                <td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 600; background: #f8fafc;">Name</td>
                <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 600; background: #f8fafc;">Email</td>
                <td style="padding: 8px 12px; border: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 600; background: #f8fafc;">Company</td>
                <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 600; background: #f8fafc;">Type</td>
                <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${role}</td>
              </tr>
            </table>
            <h3 style="margin-top: 20px;">Message</h3>
            <p style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">${message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      });

      if (!res.ok) {
        console.error('Resend API error:', await res.text());
        // Fall through to log-based approach
      } else {
        return NextResponse.json({ success: true });
      }
    }

    // Fallback: Log the submission (can be viewed in Vercel logs)
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log(JSON.stringify({ name, email, company, role, message, timestamp: new Date().toISOString() }, null, 2));
    console.log('=== END SUBMISSION ===');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
