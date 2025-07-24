'use client';

import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';

interface CheckoutFormProps {
  productId: string;
  quantity: number;
  total: number;
}

export default function CheckoutForm({ productId, quantity, total }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock successful payment
    const mockOrderId = Math.random().toString(36).substring(7);
    
    // In a real app, you would:
    // 1. Create payment intent on backend
    // 2. Confirm payment with Stripe
    // 3. Save order to database
    
    // For demo, we'll just show success message
    alert(`订单成功！订单号: ${mockOrderId}\n我们会尽快处理您的订单。`);
  };

  const cardStyle = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="john@example.com"
        />
      </div>

      {/* Card Element */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Card Information
        </label>
        <div className="border border-gray-300 rounded-lg p-4">
          <CardElement options={cardStyle} />
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Use test card: 4242 4242 4242 4242, any future date, any CVC
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || processing || !email}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
          !stripe || processing || !email
            ? 'bg-gray-300 cursor-not-allowed text-gray-500'
            : 'bg-orange-600 hover:bg-orange-700 text-white'
        }`}
      >
        {processing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
      </button>
    </form>
  );
} 