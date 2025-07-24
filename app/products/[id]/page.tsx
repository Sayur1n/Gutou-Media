import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById, products } from '@/lib/mockData';

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Generate static paths for all products
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="relative h-96 md:h-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-8">
                {/* Breadcrumb */}
                <nav className="text-sm mb-4">
                  <Link href="/products" className="text-gray-500 hover:text-gray-700">
                    Products
                  </Link>
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-700">{product.category}</span>
                </nav>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                
                {/* Price Section */}
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-orange-600">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-gray-500 ml-2">per unit</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Shipping</p>
                      <p className="font-semibold">${product.shipping.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Minimum Order:</span> {product.minOrder} units
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Category:</span> {product.category}
                    </p>
                  </div>
                </div>
                
                {/* Quantity Selector */}
                <div className="mb-6">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity (min: {product.minOrder})
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min={product.minOrder}
                    defaultValue={product.minOrder}
                    className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link
                    href={`/checkout?productId=${product.id}&quantity=${product.minOrder}`}
                    className="flex-1 bg-orange-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Buy Now
                  </Link>
                  <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Add to Wishlist
                  </button>
                </div>
                
                {/* Trust Badges */}
                <div className="mt-8 pt-8 border-t">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <span className="text-2xl">✓</span>
                      <p className="text-sm text-gray-600 mt-1">Verified Supplier</p>
                    </div>
                    <div>
                      <span className="text-2xl">🚚</span>
                      <p className="text-sm text-gray-600 mt-1">Fast Shipping</p>
                    </div>
                    <div>
                      <span className="text-2xl">🔒</span>
                      <p className="text-sm text-gray-600 mt-1">Secure Payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 