// Mock product data simulating 1688/Taobao products
export interface Product {
  id: string;
  title: string;
  price: number; // Price in USD [[memory:2969821]]
  image: string;
  description: string;
  category: string;
  minOrder: number;
  shipping: number;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Cotton Bath Towel Set',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    description: 'Super soft 100% cotton bath towels, highly absorbent and quick-dry.',
    category: 'Bath & Body',
    minOrder: 20,
    shipping: 2.99
  },
  {
    id: '2',
    title: 'Bamboo Toothbrush 4-Pack',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop',
    description: 'Eco-friendly bamboo toothbrushes with soft bristles, biodegradable handle.',
    category: 'Oral Care',
    minOrder: 50,
    shipping: 1.99
  },
  {
    id: '3',
    title: 'Microfiber Face Towel Set',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop',
    description: 'Gentle microfiber face towels, perfect for sensitive skin.',
    category: 'Bath & Body',
    minOrder: 30,
    shipping: 2.50
  },
  {
    id: '4',
    title: 'Electric Toothbrush Replacement Heads',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    description: 'Compatible replacement heads for most electric toothbrush brands.',
    category: 'Oral Care',
    minOrder: 25,
    shipping: 1.99
  },
  {
    id: '5',
    title: 'Disposable Compressed Towels',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop',
    description: 'Compact compressed towels, just add water to expand. Perfect for travel.',
    category: 'Travel & Outdoor',
    minOrder: 100,
    shipping: 1.50
  },
  {
    id: '6',
    title: 'Antibacterial Mouthwash Travel Size',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    description: 'Portable mouthwash bottles, fresh mint flavor, kills 99.9% germs.',
    category: 'Oral Care',
    minOrder: 60,
    shipping: 2.99
  },
  {
    id: '7',
    title: 'Quick-Dry Sports Towel',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop',
    description: 'Lightweight microfiber sports towel with carrying pouch.',
    category: 'Sports & Fitness',
    minOrder: 25,
    shipping: 2.50
  },
  {
    id: '8',
    title: 'Kids Cartoon Toothbrush Set',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop',
    description: 'Colorful cartoon-themed toothbrushes designed for children aged 3-12.',
    category: 'Kids & Baby',
    minOrder: 40,
    shipping: 2.99
  },
  {
    id: '9',
    title: 'Luxury Hotel Bath Towel',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    description: 'Hotel-grade Egyptian cotton towels, ultra-plush and durable.',
    category: 'Bath & Body',
    minOrder: 15,
    shipping: 3.99
  },
  {
    id: '10',
    title: 'Teeth Whitening Toothpaste',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop',
    description: 'Natural whitening toothpaste with activated charcoal and mint.',
    category: 'Oral Care',
    minOrder: 35,
    shipping: 2.50
  },
  {
    id: '11',
    title: 'Disposable Wet Wipes Pack',
    price: 1.50,
    image: 'https://images.unsplash.com/photo-1585155770728-ed2894191b6c?w=400&h=400&fit=crop',
    description: 'Gentle cleansing wipes, alcohol-free, suitable for face and hands.',
    category: 'Personal Care',
    minOrder: 80,
    shipping: 2.99
  },
  {
    id: '12',
    title: 'Hair Drying Towel Wrap',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop',
    description: 'Quick-dry hair towel wrap with secure button closure.',
    category: 'Hair Care',
    minOrder: 20,
    shipping: 2.99
  }
];

// Mock API functions
export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return products.find(p => p.id === id);
} 