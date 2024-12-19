export const handleSubscribe = async (
  event: React.FormEvent<HTMLFormElement>,
  setEmail: (arg0: string) => void,
  setModalState: (arg0: boolean) => void,
  articleHeadline: string, // Context for determining the type of subscription
  pdfName?: string // Optional name of the PDF to send
) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const email = formData.get('email');

  if (typeof email === 'string') {
    setModalState(true);
    try {
      const endpoint = pdfName ? '/api/send-pdf' : '/api/send';
      // console.log('Sending to endpoint:', endpoint);
      // console.log('Payload:', { email, articleHeadline, pdfName });

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          articleHeadline, // Rename to match the server's expected field
          pdfName, // Pass the PDF name if it's available
          type: pdfName ? 'pdf-subscription' : 'subscription',
        }),
      });

      // console.log('Response:', response);

      if (response.ok) {
        console.log('Subscription successful');
        setModalState(true);
        setEmail('');
      } else {
        const errorData = await response.json();
        console.error('Failed to handle subscription:', errorData);
      }
    } catch (error) {
      // console.error('Error during subscription:', error);
    }
  } else {
    // console.error('Invalid email:', email);
  }
};
