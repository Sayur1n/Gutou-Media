'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Elements } from '@stripe/react-stripe-js';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CheckoutForm from '@/components/CheckoutForm';
import { getProductById, Product } from '@/lib/mockData';
import { stripePromise } from '@/lib/stripe';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const quantity = parseInt(searchParams.get('quantity') || '1');
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadProduct() {
      if (productId) {
        const prod = await getProductById(productId);
        if (prod) {
          setProduct(prod);
        }
      }
      setLoading(false);
    }
    loadProduct();
  }, [productId]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link href="/products" className="text-orange-600 hover:underline">
              Back to products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const subtotal = product.price * quantity;
  const shipping = product.shipping;
  const total = subtotal + shipping;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="border-b pb-4 mb-4">
                <div className="flex items-start gap-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{product.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Quantity: {quantity} × ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${subtotal.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Total</span>
                  <span className="text-2xl font-bold text-orange-600">
                    ${total.toFixed(2)} USD
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> This is a demo checkout. Use test card 4242 4242 4242 4242
                </p>
              </div>
            </div>
            
            {/* Payment Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  productId={product.id}
                  quantity={quantity}
                  total={total}
                />
              </Elements>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 