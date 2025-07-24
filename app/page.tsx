import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Source Products from China
                <br />
                <span className="text-yellow-300">Ship Worldwide</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                Access millions of products from Alibaba & Taobao with one-click dropshipping
              </p>
              <Link
                href="/products"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Browse Products →
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose Gutou Media?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌏</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Sourcing</h3>
                <p className="text-gray-600">
                  Direct access to verified suppliers from China&apos;s largest B2B platforms
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">One-Click Orders</h3>
                <p className="text-gray-600">
                  Streamlined ordering process with automated fulfillment and tracking
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="text-gray-600">
                  Factory-direct pricing with no middlemen, all prices in USD [[memory:2969821]]
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start with Gutou Media?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Join thousands of successful dropshippers sourcing from China
            </p>
            <Link
              href="/products"
              className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Start Browsing Products
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 