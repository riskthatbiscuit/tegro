import { type NextRequest, type NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/pdf-email-template';
import path from 'path';
import fs from 'fs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest, response: NextResponse) {
  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const { type, email, articleHeadline, pdfName} = body;

      if (!email || !articleHeadline) {
        return Response.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }

      // Path to the PDF file
      const pdfPath = path.resolve(
        process.cwd(),
        `public/pdfs/${pdfName}.pdf`
      );

      // Ensure the PDF file exists
      if (!fs.existsSync(pdfPath)) {
        return Response.json({ error: 'PDF not found' }, { status: 404 });
      }

      // Read the PDF file and convert it to Base64
      const pdfBuffer = fs.readFileSync(pdfPath);
      const pdfBase64 = pdfBuffer.toString('base64');

      const sendEmail = await resend.emails.send({
        from: 'Tegro Partners <alex@tegro.partners>',
        to: [email, 'alex@tegro.partners'],
        // to: ['caseymcgrath1000@gmail.com', 'alex@tegro.partners'],
        // to: ['caseymcgrath1000@gmail.com'],
        subject: `New ${type} request for ${articleHeadline}`, // Include resource in the subject
        text: `Email: ${email}\nResource: ${articleHeadline}\nType: ${type}`,
        react: EmailTemplate({
          email,
          resource: articleHeadline,
          type,
        }),
        attachments: [
          {
            filename: `${pdfName}.pdf`,
            content: pdfBase64,
          }
        ],
      });


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
