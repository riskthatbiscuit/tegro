export const handleSubscribe = async (
  event: React.FormEvent<HTMLFormElement>,
  setEmail: (arg0: string) => void,
  setModalState: (arg0: boolean) => void
) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const email = formData.get('email');
  if (typeof email === 'string') {
    const success = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, type: 'subscription' }),
    });


    if (success) {
      setModalState(true);
      setEmail('');
    } else {
      console.error('Subscription failed');
    }
  }
};
