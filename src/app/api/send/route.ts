// Assuming you're using JavaScript. Use .ts for TypeScript and adjust accordingly.
import { Resend } from 'resend';
import { type NextRequest, type NextResponse } from 'next/server';
import { EmailTemplate } from '@/app/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest, response: NextResponse) {
  if (request.method === 'POST') {
    const data = await request.json();
    const { type } = data;

    try {
      const sendEmail = await resend.emails.send({
        from: 'Waterfall Finance <alex@waterfall.finance>',
        to: ['alex@waterfall.finance'],
        // to: ['caseymcgrath1000@gmail.com', 'alex@waterfall.finance'],
        subject: `New ${type} request`,
        text: 'This is a plain text version of the email.',
        react: EmailTemplate(data),
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
