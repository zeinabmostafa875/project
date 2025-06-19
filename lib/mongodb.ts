// MongoDB connection utility
// Note: In production, you'll need to set up actual MongoDB connection
// For demo purposes, we'll use localStorage to simulate database operations

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: string;
  createdAt: Date;
}

// Simulated database operations using localStorage
export class Database {
  static getUsers(): User[] {
    if (typeof window === 'undefined') return [];
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  static saveUser(user: User): void {
    if (typeof window === 'undefined') return;
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  static findUserByEmail(email: string): User | null {
    const users = this.getUsers();
    return users.find(user => user.email === email) || null;
  }

  static getProducts(): Product[] {
    return [
      // Electronics
      {
        id: '1',
        name: 'Premium Wireless Headphones',
        price: 299.99,
        description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Electronics',
        stock: 50
      },
      {
        id: '2',
        name: 'Smart Watch Pro',
        price: 399.99,
        description: 'Advanced smartwatch with health monitoring, GPS, and long-lasting battery.',
        image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Electronics',
        stock: 30
      },
      {
        id: '3',
        name: 'Wireless Speaker',
        price: 129.99,
        description: 'Portable wireless speaker with amazing sound quality and long battery life.',
        image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Electronics',
        stock: 60
      },
      {
        id: '4',
        name: 'Gaming Mechanical Keyboard',
        price: 159.99,
        description: 'RGB backlit mechanical keyboard perfect for gaming and productivity.',
        image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Electronics',
        stock: 45
      },
      {
        id: '5',
        name: 'Wireless Gaming Mouse',
        price: 89.99,
        description: 'High-precision wireless gaming mouse with customizable RGB lighting.',
        image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Electronics',
        stock: 55
      },
      {
        id: '6',
        name: '4K Webcam',
        price: 199.99,
        description: 'Ultra HD webcam with auto-focus and noise-canceling microphone.',
        image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Electronics',
        stock: 35
      },
      {
        id: '7',
        name: 'Portable Power Bank',
        price: 49.99,
        description: '20000mAh fast-charging power bank with wireless charging capability.',
        image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Electronics',
        stock: 80
      },
      {
        id: '8',
        name: 'Bluetooth Earbuds',
        price: 79.99,
        description: 'True wireless earbuds with active noise cancellation.',
        image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Electronics',
        stock: 70
      },

      // Fashion
      {
        id: '9',
        name: 'Luxury Backpack',
        price: 149.99,
        description: 'Stylish and functional backpack perfect for work and travel.',
        image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Fashion',
        stock: 40
      },
      {
        id: '10',
        name: 'Designer Sunglasses',
        price: 199.99,
        description: 'Premium sunglasses with UV protection and stylish design.',
        image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Fashion',
        stock: 25
      },
      {
        id: '11',
        name: 'Leather Wallet',
        price: 89.99,
        description: 'Genuine leather wallet with RFID blocking technology.',
        image: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Fashion',
        stock: 60
      },
      {
        id: '12',
        name: 'Silk Scarf',
        price: 69.99,
        description: 'Elegant silk scarf with beautiful patterns and premium quality.',
        image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Fashion',
        stock: 30
      },
      {
        id: '13',
        name: 'Premium Watch',
        price: 299.99,
        description: 'Luxury analog watch with stainless steel band.',
        image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Fashion',
        stock: 20
      },
      {
        id: '14',
        name: 'Designer Handbag',
        price: 249.99,
        description: 'Elegant handbag made from premium materials.',
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Fashion',
        stock: 15
      },

      // Home & Kitchen
      {
        id: '15',
        name: 'Premium Coffee Maker',
        price: 199.99,
        description: 'Professional-grade coffee maker for the perfect brew every time.',
        image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Home & Kitchen',
        stock: 25
      },
      {
        id: '16',
        name: 'Smart Air Purifier',
        price: 179.99,
        description: 'HEPA air purifier with smart controls and air quality monitoring.',
        image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Home & Kitchen',
        stock: 35
      },
      {
        id: '17',
        name: 'Ceramic Cookware Set',
        price: 159.99,
        description: 'Non-stick ceramic cookware set with heat-resistant handles.',
        image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Home & Kitchen',
        stock: 40
      },
      {
        id: '18',
        name: 'Smart Thermostat',
        price: 129.99,
        description: 'WiFi-enabled smart thermostat with energy-saving features.',
        image: 'https://images.pexels.com/photos/8031918/pexels-photo-8031918.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Home & Kitchen',
        stock: 50
      },
      {
        id: '19',
        name: 'LED Desk Lamp',
        price: 79.99,
        description: 'Adjustable LED desk lamp with wireless charging base.',
        image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Home & Kitchen',
        stock: 65
      },
      {
        id: '20',
        name: 'Essential Oil Diffuser',
        price: 59.99,
        description: 'Ultrasonic aromatherapy diffuser with color-changing LED lights.',
        image: 'https://images.pexels.com/photos/6663573/pexels-photo-6663573.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Home & Kitchen',
        stock: 75
      },

      // Health & Fitness
      {
        id: '21',
        name: 'Fitness Tracker',
        price: 89.99,
        description: 'Track your fitness goals with this advanced fitness tracker.',
        image: 'https://images.pexels.com/photos/4498479/pexels-photo-4498479.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Health & Fitness',
        stock: 35
      },
      {
        id: '22',
        name: 'Yoga Mat Premium',
        price: 49.99,
        description: 'Non-slip yoga mat with extra cushioning and carrying strap.',
        image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Health & Fitness',
        stock: 90
      },
      {
        id: '23',
        name: 'Resistance Bands Set',
        price: 29.99,
        description: 'Complete resistance bands set with different resistance levels.',
        image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Health & Fitness',
        stock: 100
      },
      {
        id: '24',
        name: 'Smart Scale',
        price: 69.99,
        description: 'Body composition scale with smartphone app integration.',
        image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Health & Fitness',
        stock: 45
      },
      {
        id: '25',
        name: 'Protein Shaker Bottle',
        price: 19.99,
        description: 'BPA-free protein shaker with mixing ball and measurement marks.',
        image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Health & Fitness',
        stock: 120
      },

      // Beauty & Personal Care
      {
        id: '26',
        name: 'Skincare Set',
        price: 89.99,
        description: 'Complete skincare routine with cleanser, toner, and moisturizer.',
        image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Beauty & Personal Care',
        stock: 55
      },
      {
        id: '27',
        name: 'Hair Styling Tool',
        price: 129.99,
        description: 'Professional hair straightener with ceramic plates and temperature control.',
        image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Beauty & Personal Care',
        stock: 40
      },
      {
        id: '28',
        name: 'Electric Toothbrush',
        price: 79.99,
        description: 'Rechargeable electric toothbrush with multiple cleaning modes.',
        image: 'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Beauty & Personal Care',
        stock: 60
      },
      {
        id: '29',
        name: 'Makeup Brush Set',
        price: 39.99,
        description: 'Professional makeup brush set with synthetic bristles.',
        image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Beauty & Personal Care',
        stock: 85
      },
      {
        id: '30',
        name: 'Face Mask Set',
        price: 24.99,
        description: 'Variety pack of hydrating and purifying face masks.',
        image: 'https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Beauty & Personal Care',
        stock: 95
      },

      // Sports & Outdoors
      {
        id: '31',
        name: 'Camping Tent',
        price: 199.99,
        description: 'Waterproof 4-person camping tent with easy setup.',
        image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Sports & Outdoors',
        stock: 25
      },
      {
        id: '32',
        name: 'Hiking Backpack',
        price: 149.99,
        description: '50L hiking backpack with multiple compartments and rain cover.',
        image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Sports & Outdoors',
        stock: 30
      },
      {
        id: '33',
        name: 'Water Bottle',
        price: 29.99,
        description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours.',
        image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Sports & Outdoors',
        stock: 150
      },
      {
        id: '34',
        name: 'Bicycle Helmet',
        price: 59.99,
        description: 'Lightweight cycling helmet with adjustable fit and ventilation.',
        image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Sports & Outdoors',
        stock: 70
      },
      {
        id: '35',
        name: 'Fishing Rod Set',
        price: 89.99,
        description: 'Complete fishing rod set with reel, line, and tackle box.',
        image: 'https://images.pexels.com/photos/1619299/pexels-photo-1619299.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Sports & Outdoors',
        stock: 40
      },

      // Books & Education
      {
        id: '36',
        name: 'Programming Books Set',
        price: 79.99,
        description: 'Collection of essential programming books for developers.',
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Books & Education',
        stock: 50
      },
      {
        id: '37',
        name: 'Digital Drawing Tablet',
        price: 199.99,
        description: 'Graphics tablet with pressure-sensitive stylus for digital art.',
        image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Books & Education',
        stock: 35
      },
      {
        id: '38',
        name: 'Scientific Calculator',
        price: 49.99,
        description: 'Advanced scientific calculator for students and professionals.',
        image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Books & Education',
        stock: 80
      },
      {
        id: '39',
        name: 'Language Learning Kit',
        price: 59.99,
        description: 'Complete language learning package with books and audio materials.',
        image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Books & Education',
        stock: 45
      },
      {
        id: '40',
        name: 'Art Supply Set',
        price: 69.99,
        description: 'Professional art supplies including pencils, paints, and brushes.',
        image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Books & Education',
        stock: 60
      },

      // Toys & Games
      {
        id: '41',
        name: 'Board Game Collection',
        price: 89.99,
        description: 'Set of classic board games for family entertainment.',
        image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Toys & Games',
        stock: 40
      },
      {
        id: '42',
        name: 'Remote Control Drone',
        price: 149.99,
        description: 'HD camera drone with GPS and auto-return features.',
        image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Toys & Games',
        stock: 25
      },
      {
        id: '43',
        name: 'Building Blocks Set',
        price: 39.99,
        description: 'Creative building blocks set with 500+ pieces.',
        image: 'https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Toys & Games',
        stock: 75
      },
      {
        id: '44',
        name: 'Puzzle Collection',
        price: 29.99,
        description: 'Set of challenging jigsaw puzzles with beautiful artwork.',
        image: 'https://images.pexels.com/photos/1111368/pexels-photo-1111368.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Toys & Games',
        stock: 90
      },
      {
        id: '45',
        name: 'Educational Robot Kit',
        price: 199.99,
        description: 'STEM learning robot kit for kids to learn programming.',
        image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Toys & Games',
        stock: 30
      },

      // Automotive
      {
        id: '46',
        name: 'Car Phone Mount',
        price: 24.99,
        description: 'Magnetic car phone holder with 360-degree rotation.',
        image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Automotive',
        stock: 100
      },
      {
        id: '47',
        name: 'Car Dash Camera',
        price: 89.99,
        description: 'HD dash cam with night vision and loop recording.',
        image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Automotive',
        stock: 55
      },
      {
        id: '48',
        name: 'Car Air Freshener Set',
        price: 19.99,
        description: 'Long-lasting car air fresheners in various scents.',
        image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Automotive',
        stock: 200
      },
      {
        id: '49',
        name: 'Car Emergency Kit',
        price: 49.99,
        description: 'Complete emergency kit with jumper cables and tools.',
        image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Automotive',
        stock: 65
      },
      {
        id: '50',
        name: 'Car Seat Covers',
        price: 79.99,
        description: 'Premium leather car seat covers with universal fit.',
        image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'Automotive',
        stock: 45
      }
    ];
  }

  static getProductById(id: string): Product | null {
    const products = this.getProducts();
    return products.find(product => product.id === id) || null;
  }

  static getCart(): CartItem[] {
    if (typeof window === 'undefined') return [];
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  static saveCart(cart: CartItem[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  static saveOrder(order: Order): void {
    if (typeof window === 'undefined') return;
    const orders = this.getOrders();
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
  }

  static getOrders(): Order[] {
    if (typeof window === 'undefined') return [];
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
  }

  static getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  static setCurrentUser(user: User | null): void {
    if (typeof window === 'undefined') return;
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }
}