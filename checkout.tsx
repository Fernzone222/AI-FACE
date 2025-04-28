import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';

export default function Checkout() {
  useEffect(() => {
    fetch('/api/create-checkout-session', { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        const stripe = loadStripe(data.publicKey);
        stripe.then(s => s.redirectToCheckout({ sessionId: data.sessionId }));
      });
  }, []);

  return <p>Omdirigerar till betalning...</p>;
}
