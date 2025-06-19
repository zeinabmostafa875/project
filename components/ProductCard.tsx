'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/mongodb';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ShoppingCart, Eye, Heart, Star } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('✨ Product added to cart!', {
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <Card className="group card-hover glass-effect border-0 overflow-hidden">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 backdrop-blur-sm bg-white/80 hover:bg-white">
              <Heart className="h-4 w-4 text-red-500" />
            </Button>
            <Link href={`/products/${product.id}`}>
              <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 backdrop-blur-sm bg-white/80 hover:bg-white">
                <Eye className="h-4 w-4 text-purple-600" />
              </Button>
            </Link>
          </div>

          {/* Stock Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
              product.stock > 10 
                ? 'bg-green-500/80 text-white' 
                : product.stock > 0 
                  ? 'bg-yellow-500/80 text-white' 
                  : 'bg-red-500/80 text-white'
            }`}>
              {product.stock > 0 ? `${product.stock} left` : 'Out of stock'}
            </span>
          </div>

          {/* Price Badge */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
              ${product.price}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ${product.price}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Free shipping</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-500 dark:text-gray-400">In stock</span>
            <div className="text-sm font-medium text-green-600 dark:text-green-400">{product.stock} items</div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group/btn"
          disabled={product.stock === 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}