import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SuccessPage() {
  // Demo order data
  const orderId = 'DEMO12345';
  const trackingNumber = 'ALI8XK2N1P7';
  const total = 25.99;
  const email = 'demo@example.com';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Success Message */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">✓</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Order Successful!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order. We&apos;ve received your payment and will process your order shortly.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-1">Order ID</p>
              <p className="font-mono font-semibold text-lg">{orderId}</p>
            </div>
          </div>
          
                      {/* Order Details */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
            
            <div className="border-b pb-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Demo Product</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">示例产品</h3>
                  <p className="text-gray-600 mt-1">
                    数量: 1 × $25.99
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Paid</span>
                <span className="font-semibold text-xl">${total.toFixed(2)} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email</span>
                <span className="font-medium">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tracking Number</span>
                <span className="font-mono font-medium">{trackingNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery</span>
                <span className="font-medium">7-15 business days</span>
              </div>
            </div>
          </div>
          
          {/* Next Steps */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-2 text-blue-900">What&apos;s Next?</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• You&apos;ll receive an order confirmation email shortly</li>
              <li>• Your supplier will prepare your order within 1-3 days</li>
              <li>• Track your shipment using the tracking number above</li>
              <li>• Contact support if you have any questions</li>
            </ul>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Link
              href="/products"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => window.print()}
              className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Print Receipt
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 