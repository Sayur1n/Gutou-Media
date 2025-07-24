import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/mockData';

export default async function ProductsPage() {
  // Fetch products (simulating API call)
  const products = await getProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Browse Products</h1>
            <p className="text-gray-600 mt-2">
              Discover quality products from verified Chinese suppliers
            </p>
          </div>
          
          {/* Filter Bar (simplified for demo) */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>All Categories</option>
                <option>Bath &amp; Body</option>
                <option>Oral Care</option>
                <option>Personal Care</option>
                <option>Hair Care</option>
                <option>Kids &amp; Baby</option>
                <option>Travel &amp; Outdoor</option>
                <option>Sports &amp; Fitness</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
              
              <div className="ml-auto text-sm text-gray-600">
                Showing {products.length} products
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Pagination (simplified for demo) */}
          <div className="flex justify-center mt-12">
            <nav className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Previous
              </button>
              <button className="px-4 py-2 border border-orange-600 bg-orange-600 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 