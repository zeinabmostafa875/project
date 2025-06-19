'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { Database } from '@/lib/mongodb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, Star, Truck, Shield, Headphones, Sparkles, Zap, Heart } from 'lucide-react';

export default function HomePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [animatedProducts, setAnimatedProducts] = useState(false);
  const products = Database.getProducts().slice(0, 8);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/register');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProducts(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-purple-600 mx-auto"></div>
            <div className="absolute inset-0 animate-ping rounded-full h-32 w-32 border-4 border-purple-400 opacity-20 mx-auto"></div>
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg font-medium">Loading your amazing experience...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Advanced Animations */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="h-8 w-8 text-yellow-300 opacity-70" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Zap className="h-6 w-6 text-pink-300 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
          <Heart className="h-10 w-10 text-red-300 opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient">
                EliteShop
              </span>
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-purple-100 font-light leading-relaxed animate-slide-up">
              Discover premium products with magical shopping experience
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/products">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  Start Shopping
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Button size="lg"  className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group">
                Explore Collections
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Features Section with Glass Effect */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose <span className="gradient-text">EliteShop</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Experience the future of online shopping</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: 'Lightning Fast Delivery', desc: 'Free shipping on all orders with express delivery options', color: 'from-blue-500 to-cyan-500' },
              { icon: Shield, title: 'Secure & Protected', desc: 'Your data and payments are protected with advanced encryption', color: 'from-green-500 to-emerald-500' },
              { icon: Headphones, title: '24/7 Premium Support', desc: 'Get instant help from our dedicated support team anytime', color: 'from-purple-500 to-pink-500' }
            ].map((feature, index) => (
              <Card key={index} className="glass-effect card-hover border-0 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} p-4 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products with Staggered Animation */}
      <section className="py-24 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              ✨ Featured <span className="gradient-text">Products</span> ✨
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Handpicked premium items just for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`${animatedProducts ? 'animate-bounce-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-slide-up">
            <Link href="/products">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group">
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                Explore All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Happy Customers', icon: '😊' },
              { number: '50+', label: 'Premium Products', icon: '🛍️' },
              { number: '30+', label: 'Countries Served', icon: '🌍' },
              { number: '99%', label: 'Satisfaction Rate', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="animate-bounce-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{stat.number}</div>
                <div className="text-purple-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with Gradient Animation */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Stay in the Loop! 💌</h2>
            <p className="text-xl text-purple-100 mb-12">Get exclusive offers, new arrivals, and special discounts</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your magical email ✨"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 bg-white/90 backdrop-blur-sm border-0 focus:ring-4 focus:ring-purple-300 transition-all duration-300"
              />
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-yellow-500/25 transition-all duration-300">
                Subscribe ✨
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}