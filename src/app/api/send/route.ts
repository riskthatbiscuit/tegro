// Assuming you're using JavaScript. Use .ts for TypeScript and adjust accordingly.
import { Resend } from 'resend';
import { type NextRequest, type NextResponse } from 'next/server';
import { EmailTemplate } from '@/app/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest, response: NextResponse) {
  if (request.method === 'POST') {
    const data = await request.json();
    const { type, email, resource } = data;

    try {
      const sendEmail = await resend.emails.send({
        from: 'Tegro Partners <alex@tegro.partners>',
        // to: ['alex@tegro.partners'],
        to: ['caseymcgrath1000@gmail.com', 'alex@tegro.partners'],
        subject: `New ${type} request for ${resource}`, // Include resource in the subject
        text: `Email: ${email}\nResource: ${resource}\nType: ${type}`,
        react: EmailTemplate({
          email,
          resource,
          type,
        }),
      });

      const confirmation = { success: true, message: 'Email sent' };

      // Respond with the data
      return new Response('Subscription successful', {
        status: 200,
      });
    } catch (error) {
      // Return an error response
      return new Response('Failed to process subscription', { status: 500 });
    }
  } else {
    // Handle any non-POST requests
    return new Response('Failed to process subscription', { status: 500 });
  }
}
