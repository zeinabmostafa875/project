'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home, Package } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Order Successful!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-gray-600">
              Thank you for your purchase! Your order has been successfully placed and will be processed shortly.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center justify-center mb-3">
                <Package className="h-8 w-8 text-green-600 mr-2" />
                <span className="text-lg font-semibold text-green-800">
                  Order #12345{Date.now().toString().slice(-3)}
                </span>
              </div>
              <p className="text-green-700">
                You will receive an email confirmation shortly with your order details and tracking information.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">What's Next?</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• You'll receive an order confirmation email within a few minutes</li>
                <li>• Your order will be processed and shipped within 1-2 business days</li>
                <li>• You'll receive tracking information once your order ships</li>
                <li>• Estimated delivery time is 3-5 business days</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}