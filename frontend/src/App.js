import React, { useState } from 'react';
import './App.css';

// Mock product data based on the original website
const productData = [
  {
    id: 1,
    name: "دار شلوه",
    category: "دار شلوه",
    image: "https://images.pexels.com/photos/4087576/pexels-photo-4087576.jpeg",
    price: "12.5"
  },
  {
    id: 2,
    name: "قلم حبر أزرق",
    category: "قلم حبر",
    image: "https://images.unsplash.com/photo-1448471237638-f8ccc7d5ac9d",
    price: "2.5"
  },
  {
    id: 3,
    name: "كلاسة صوت",
    category: "كلاسة صوت",
    image: "https://images.pexels.com/photos/7111528/pexels-photo-7111528.jpeg",
    price: "15.0"
  },
  {
    id: 4,
    name: "حاسبة كاسيو",
    category: "حاسبة كاسيو",
    image: "https://images.unsplash.com/photo-1617329636938-90cf1b12c279",
    price: "25.0"
  },
  {
    id: 5,
    name: "حقيبة مدرسية",
    category: "حقائب مدرسية",
    image: "https://images.unsplash.com/photo-1594300418249-eebf1858e9b7",
    price: "35.0"
  },
  {
    id: 6,
    name: "حقائب سفر",
    category: "حقائب سفر",
    image: "https://images.pexels.com/photos/5322514/pexels-photo-5322514.jpeg",
    price: "45.0"
  },
  {
    id: 7,
    name: "أقلام ملونة",
    category: "أقلام ملونة",
    image: "https://images.unsplash.com/photo-1516053256215-94022213b13c",
    price: "8.0"
  },
  {
    id: 8,
    name: "حامل أقلام",
    category: "حامل أقلام",
    image: "https://images.pexels.com/photos/6800782/pexels-photo-6800782.jpeg",
    price: "6.5"
  },
  {
    id: 9,
    name: "ورق طباعة",
    category: "ورق طباعة",
    image: "https://images.pexels.com/photos/5993557/pexels-photo-5993557.jpeg",
    price: "18.0"
  },
  {
    id: 10,
    name: "دفتر ملاحظات",
    category: "دفاتر",
    image: "https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d",
    price: "4.5"
  },
  {
    id: 11,
    name: "مجلدات مكتبية",
    category: "مجلدات",
    image: "https://images.pexels.com/photos/4087571/pexels-photo-4087571.jpeg",
    price: "22.0"
  },
  {
    id: 12,
    name: "قلم رصاص",
    category: "أقلام رصاص",
    image: "https://images.unsplash.com/photo-1609700504143-90d06c8b245a",
    price: "1.5"
  },
  {
    id: 13,
    name: "حقيبة لابتوب",
    category: "حقائب لابتوب",
    image: "https://images.unsplash.com/photo-1536562833330-a59dc2305a5c",
    price: "55.0"
  },
  {
    id: 14,
    name: "مصباح مكتب",
    category: "إضاءة مكتبية",
    image: "https://images.pexels.com/photos/2123430/pexels-photo-2123430.jpeg",
    price: "28.0"
  },
  {
    id: 15,
    name: "لوازم مكتبية",
    category: "لوازم متنوعة",
    image: "https://images.pexels.com/photos/4491648/pexels-photo-4491648.jpeg",
    price: "32.0"
  }
];

// Best selling products for the special section
const bestSellingProducts = [
  {
    id: 'N-371',
    name: 'دفتر مقوى A4',
    price: '10.5',
    image: 'https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d',
    sale: true
  },
  {
    id: 'F-81',
    name: 'ملف بكبسولة أزرق',
    price: '8.5',
    image: 'https://images.pexels.com/photos/7111528/pexels-photo-7111528.jpeg',
    sale: true
  },
  {
    id: 'N-400',
    name: 'صورة فوتوغرافية مقاس 10x15',
    price: '2.5',
    image: 'https://images.pexels.com/photos/4087576/pexels-photo-4087576.jpeg',
    sale: true
  },
  {
    id: 'K-186',
    name: 'قلم حبر جاف أزرق',
    price: '1.5',
    image: 'https://images.unsplash.com/photo-1448471237638-f8ccc7d5ac9d',
    sale: true
  },
  {
    id: 'N-407',
    name: 'كراس مسطر 100 ورقة',
    price: '6.5',
    image: 'https://images.pexels.com/photos/5993557/pexels-photo-5993557.jpeg',
    sale: true
  },
  {
    id: 'N-440',
    name: 'كتاب تعليمي للأطفال',
    price: '15.0',
    image: 'https://images.pexels.com/photos/6800782/pexels-photo-6800782.jpeg',
    sale: true
  }
];

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top bar with links */}
      <div className="bg-gray-50 px-4 py-2 text-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-gray-800">تسجيل دخول</a>
            <a href="#" className="hover:text-gray-800">حساب جديد</a>
            <a href="#" className="hover:text-gray-800">تتبع الطلب</a>
            <a href="#" className="hover:text-gray-800">مفضلة</a>
          </div>
          <div className="text-right">
            🛒 سلة التسوق (0)
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo and contact section */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-green-700 mb-2" style={{fontFamily: 'Arial, sans-serif'}}>
              قرطاسية كاروان
            </h1>
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              لتجارة قرطاسية
            </h2>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-2xl font-bold text-blue-500">
                07807684041
              </div>
              <div className="text-2xl font-bold text-red-500">
                07701227410
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="البحث عن المنتجات..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-right focus:border-blue-500 focus:outline-none"
              />
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded">
                بحث
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="text-center">
        <h3 className="text-sm font-medium text-gray-800 mb-2 text-right">
          {product.name}
        </h3>
        <div className="bg-blue-600 text-white text-xs py-1 px-2 rounded text-center mb-2">
          {product.category}
        </div>
        {product.price && (
          <div className="text-lg font-bold text-green-600 mb-2">
            {product.price} دينار
          </div>
        )}
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300 text-sm">
          🛒 أضف للسلة
        </button>
      </div>
    </div>
  );
};

const BestSellingCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow duration-300 relative">
      {product.sale && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          🔥
        </div>
      )}
      <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="text-center">
        <h3 className="text-sm font-medium text-gray-800 mb-1 text-right">
          {product.name}
        </h3>
        <div className="text-xs text-gray-500 mb-2">
          كود: {product.id}
        </div>
        <div className="text-lg font-bold text-green-600 mb-2">
          {product.price} دينار
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300 text-sm">
          🛒 أضف للسلة
        </button>
      </div>
    </div>
  );
};

const ProductGrid = ({ products, title }) => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <h2 className="text-2xl font-bold text-gray-800 text-right mb-6">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BestSellingSection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-right mb-6">
          أفضل مبيعات
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {bestSellingProducts.map((product) => (
            <BestSellingCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* Contact Information */}
          <div className="mb-6">
            <div className="flex justify-center items-center space-x-8 mb-4">
              <div className="text-lg font-bold text-blue-500">
                📞 07807684041
              </div>
              <div className="text-lg font-bold text-red-500">
                📞 07701227410
              </div>
            </div>
            <div className="text-gray-600">
              📧 Karawan.Art.2018@gmail.com
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
              f
            </a>
            <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
              t
            </a>
            <a href="#" className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
              w
            </a>
            <a href="#" className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
              i
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © 2025 CODINEK COMPANY
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <main>
        <ProductGrid products={productData} />
        <BestSellingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;