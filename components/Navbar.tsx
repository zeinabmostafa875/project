'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, User, LogOut, Store, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b border-purple-200/20 dark:border-purple-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Store className="h-8 w-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-lg group-hover:bg-purple-600/40 transition-all duration-300"></div>
              </div>
              <span className="text-xl font-bold gradient-text">EliteShop</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-100/50 dark:hover:bg-purple-900/30">
                Home
              </Link>
              <Link href="/products" className="text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-100/50 dark:hover:bg-purple-900/30">
                Products
              </Link>
              <Link href="/about" className="text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-100/50 dark:hover:bg-purple-900/30">
                About
              </Link>
              <Link href="/contact" className="text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-100/50 dark:hover:bg-purple-900/30">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="relative overflow-hidden group border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500"
            >
              <div className="relative z-10">
                {isDark ? (
                  <Sun className="h-4 w-4 text-yellow-500" />
                ) : (
                  <Moon className="h-4 w-4 text-purple-600" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>

            <Link href="/cart" className="relative group">
              <Button variant="outline" size="sm" className="relative overflow-hidden border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500">
                <ShoppingCart className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-glow">
                    {getTotalItems()}
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </Link>

            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Hi, {user.name}</span>
                <Button variant="outline" size="sm" onClick={logout} className="group border-purple-200 dark:border-purple-700 hover:border-red-400 dark:hover:border-red-500">
                  <LogOut className="h-4 w-4 group-hover:text-red-500 transition-colors duration-300" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500">
                    <User className="h-4 w-4 mr-1" />
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}