import React, { useState, useEffect } from 'react';
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

const Header = ({ cartCount, searchTerm, onSearchChange, onSearch }) => {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top bar with links */}
      <div className="bg-gray-50 px-4 py-2 text-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex space-x-4 text-gray-600">
            <button className="hover:text-gray-800 cursor-pointer">تسجيل دخول</button>
            <button className="hover:text-gray-800 cursor-pointer">حساب جديد</button>
            <button className="hover:text-gray-800 cursor-pointer">تتبع الطلب</button>
            <button className="hover:text-gray-800 cursor-pointer">مفضلة</button>
          </div>
          <div className="text-right">
            🛒 سلة التسوق ({cartCount})
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
              <button className="text-2xl font-bold text-blue-500 hover:text-blue-600 cursor-pointer">
                📞 07807684041
              </button>
              <button className="text-2xl font-bold text-red-500 hover:text-red-600 cursor-pointer">
                📞 07701227410
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="البحث عن المنتجات..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-right focus:border-blue-500 focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
              />
              <button 
                onClick={onSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-colors duration-300"
              >
                بحث
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const ProductCard = ({ product, onAddToCart, onProductClick }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    onAddToCart(product);
    setIsAdding(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div 
        className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-50"
        onClick={() => onProductClick(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="text-center">
        <h3 
          className="text-sm font-medium text-gray-800 mb-2 text-right cursor-pointer hover:text-blue-600"
          onClick={() => onProductClick(product)}
        >
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
        <button 
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-2 rounded text-sm transition-colors duration-300 ${
            isAdding 
              ? 'bg-gray-400 text-white cursor-not-allowed' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isAdding ? 'جاري الإضافة...' : '🛒 أضف للسلة'}
        </button>
      </div>
    </div>
  );
};

const BestSellingCard = ({ product, onAddToCart, onProductClick }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    onAddToCart(product);
    setIsAdding(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow duration-300 relative cursor-pointer">
      {product.sale && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          🔥
        </div>
      )}
      <div 
        className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-50"
        onClick={() => onProductClick(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="text-center">
        <h3 
          className="text-sm font-medium text-gray-800 mb-1 text-right cursor-pointer hover:text-blue-600"
          onClick={() => onProductClick(product)}
        >
          {product.name}
        </h3>
        <div className="text-xs text-gray-500 mb-2">
          كود: {product.id}
        </div>
        <div className="text-lg font-bold text-green-600 mb-2">
          {product.price} دينار
        </div>
        <button 
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-2 rounded text-sm transition-colors duration-300 ${
            isAdding 
              ? 'bg-gray-400 text-white cursor-not-allowed' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isAdding ? 'جاري الإضافة...' : '🛒 أضف للسلة'}
        </button>
      </div>
    </div>
  );
};

const ProductGrid = ({ products, title, onAddToCart, onProductClick }) => {
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
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onProductClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BestSellingSection = ({ onAddToCart, onProductClick }) => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-right mb-6">
          أفضل مبيعات
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {bestSellingProducts.map((product) => (
            <BestSellingCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onProductClick={onProductClick}
            />
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
              <button className="text-lg font-bold text-blue-500 hover:text-blue-600 cursor-pointer">
                📞 07807684041
              </button>
              <button className="text-lg font-bold text-red-500 hover:text-red-600 cursor-pointer">
                📞 07701227410
              </button>
            </div>
            <div className="text-gray-600">
              📧 Karawan.Art.2018@gmail.com
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
              f
            </button>
            <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
              t
            </button>
            <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
              w
            </button>
            <button className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
              i
            </button>
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

// Product Detail Modal Component
const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!isOpen || !product) return null;

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    onAddToCart({ ...product, quantity });
    setIsAdding(false);
    onClose();
  };

  const totalPrice = (parseFloat(product.price) * quantity).toFixed(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div className="text-right">
              <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
              <div className="bg-blue-600 text-white text-sm py-1 px-3 rounded inline-block mb-4">
                {product.category}
              </div>
              {product.id && (
                <p className="text-gray-600 mb-4">كود المنتج: {product.id}</p>
              )}
              <div className="text-3xl font-bold text-green-600 mb-6">
                {product.price} دينار
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center justify-end mb-6">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-lg font-bold hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-lg font-bold hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <span className="mr-3">الكمية:</span>
              </div>
              
              {/* Total Price */}
              <div className="text-xl font-bold text-green-600 mb-6 text-right">
                المجموع: {totalPrice} دينار
              </div>
              
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`w-full py-3 rounded-lg text-lg font-semibold transition-colors duration-300 ${
                  isAdding 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {isAdding ? 'جاري الإضافة...' : '🛒 أضف إلى السلة'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Success Notification Component
const SuccessNotification = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
      <div className="flex items-center">
        <span className="ml-2">✅</span>
        <span>{message}</span>
        <button
          onClick={onClose}
          className="mr-4 text-white hover:text-green-200"
        >
          ×
        </button>
      </div>
    </div>
  );
};

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState({ message: '', isVisible: false });

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(productData);
    } else {
      const filtered = productData.filter(product =>
        product.name.includes(searchTerm) ||
        product.category.includes(searchTerm)
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm]);

  // Add item to cart
  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + (product.quantity || 1) }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: product.quantity || 1 }]);
    }

    showNotification(`تم إضافة ${product.name} إلى السلة`);
  };

  // Show notification
  const showNotification = (message) => {
    setNotification({ message, isVisible: true });
  };

  // Hide notification
  const hideNotification = () => {
    setNotification({ message: '', isVisible: false });
  };

  // Handle product click to open modal
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle search
  const handleSearch = () => {
    // Search is handled by useEffect when searchTerm changes
    if (searchTerm.trim() === '') {
      showNotification('يرجى إدخال كلمة البحث');
    } else if (filteredProducts.length === 0) {
      showNotification('لا توجد منتجات مطابقة للبحث');
    } else {
      showNotification(`تم العثور على ${filteredProducts.length} منتج`);
    }
  };

  // Calculate cart count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="App min-h-screen bg-gray-50" dir="rtl">
      <Header 
        cartCount={cartCount}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearch={handleSearch}
      />
      <main>
        <ProductGrid 
          products={filteredProducts}
          title={searchTerm ? `نتائج البحث عن: ${searchTerm}` : null}
          onAddToCart={handleAddToCart}
          onProductClick={handleProductClick}
        />
        <BestSellingSection 
          onAddToCart={handleAddToCart}
          onProductClick={handleProductClick}
        />
      </main>
      <Footer />
      
      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddToCart={handleAddToCart}
      />
      
      {/* Success Notification */}
      <SuccessNotification
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
    </div>
  );
}

export default App;