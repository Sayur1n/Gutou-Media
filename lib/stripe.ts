import { loadStripe } from '@stripe/stripe-js';

// Use environment variable for Stripe publishable key
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable is required');
}

export const stripePromise = loadStripe(stripePublishableKey);

// Mock order data storage (in-memory)
interface Order {
  id: string;
  productId: string;
  quantity: number;
  total: number;
  email: string;
  trackingNumber: string;
  createdAt: Date;
}

// In-memory storage for orders
const orders: Map<string, Order> = new Map();

export function createOrder(order: Omit<Order, 'id' | 'trackingNumber' | 'createdAt'>): Order {
  const newOrder: Order = {
    ...order,
    id: Math.random().toString(36).substring(7),
    trackingNumber: `ALI${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
    createdAt: new Date()
  };
  
  orders.set(newOrder.id, newOrder);
  return newOrder;
}

export function getOrder(id: string): Order | undefined {
  return orders.get(id);
} 