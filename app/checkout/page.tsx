import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CheckoutContent from '@/components/CheckoutContent';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Suspense fallback={
        <main className="flex-grow bg-gray-50 flex items-center justify-center">
          <div className="text-xl">Loading checkout...</div>
        </main>
      }>
        <CheckoutContent />
      </Suspense>
      
      <Footer />
    </div>
  );
} 