import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/mockData';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        {/* Product Image */}
        <div className="relative h-64 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
            MOQ: {product.minOrder}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.title}
          </h3>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-orange-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">
              /unit
            </span>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>📦 ${product.shipping.toFixed(2)} shipping</span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 