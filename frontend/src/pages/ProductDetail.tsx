import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Star, ShoppingBag, ShieldCheck, Truck, Package } from 'lucide-react';
import { products } from '@/src/data';
import Button from '@/src/components/ui/Button';
import { cn } from '@/src/lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-40 text-center h-screen bg-earth-50 flex flex-col items-center justify-center">
        <h2 className="serif text-4xl mb-8">Không tìm thấy sản phẩm.</h2>
        <Link to="/shop">
          <Button variant="outline">Quay lại cửa hàng</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-earth-500 hover:text-terracotta transition-colors text-[10px] uppercase tracking-[0.4em] font-bold mb-12">
          <ArrowLeft className="w-4 h-4" />
          Tiếp tục mua sắm
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Image Gallery */}
          <div className="space-y-6">
             <div className="aspect-square bg-earth-50 rounded-sm overflow-hidden premium-shadow relative">
               <AnimatePresence mode="wait">
                 <motion.img
                   key={activeImage}
                   src={product.images?.[activeImage] || product.image}
                   alt={product.name}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.5 }}
                   className="w-full h-full object-cover"
                 />
               </AnimatePresence>
               <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest font-bold text-earth-900 border border-earth-100">
                 {product.category}
               </div>
             </div>
             
             {/* Thumbnail navigation */}
             {product.images && product.images.length > 1 && (
               <div className="grid grid-cols-4 gap-4">
                 {product.images.map((img, idx) => (
                   <button 
                     key={idx}
                     onClick={() => setActiveImage(idx)}
                     className={cn(
                       "aspect-square rounded-sm overflow-hidden border-2 transition-all",
                       activeImage === idx ? "border-terracotta opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                     )}
                   >
                     <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                   </button>
                 ))}
               </div>
             )}
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col">
            <div className="mb-8 border-b border-earth-100 pb-8">
              <div className="flex items-center gap-2 mb-4">
                 <div className="flex text-gold">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className={cn("w-4 h-4", i < Math.floor(product.rating || 5) ? "fill-current" : "")} />
                   ))}
                 </div>
                 <span className="text-sm text-earth-500 font-serif italic">({product.rating} Đánh giá)</span>
              </div>
              <h1 className="text-4xl md:text-5xl serif italic text-earth-900 mb-6">{product.name}</h1>
              <p className="text-3xl text-earth-800 font-serif mb-6">{product.price.toLocaleString('vi-VN')}₫</p>
              
              <div className="flex items-center gap-4 text-earth-600 text-sm">
                 <span className="flex items-center gap-2 bg-earth-50 px-3 py-1 rounded-sm"><ShieldCheck className="w-4 h-4 text-terracotta" /> Đảm bảo chính hãng</span>
                 <span className="flex items-center gap-2 bg-earth-50 px-3 py-1 rounded-sm"><Truck className="w-4 h-4 text-terracotta" /> Giao hàng toàn quốc</span>
              </div>
            </div>

            <div className="mb-10">
               <p className="text-earth-600 font-serif italic leading-relaxed text-lg">{product.story}</p>
            </div>

            <div className="mb-12 space-y-4">
              <Link to="/checkout" className="block">
                <Button size="lg" className="w-full flex items-center justify-center gap-3">
                   <ShoppingBag className="w-5 h-5" /> Thêm vào giỏ hàng
                </Button>
              </Link>
              <Link to="/checkout" className="block">
                <Button variant="outline" className="w-full">Mua ngay</Button>
              </Link>
            </div>

            {/* Maker Info */}
            {product.maker && (
              <div className="bg-earth-50 p-6 rounded-sm border border-earth-100 flex items-center gap-6 mb-10">
                 <img src={product.maker.avatar} alt={product.maker.name} className="w-16 h-16 rounded-full object-cover border-2 border-white premium-shadow" />
                 <div>
                    <span className="text-[10px] uppercase tracking-widest text-earth-500 font-bold mb-1 block">Chế tác bởi</span>
                    <h4 className="serif italic text-xl text-earth-900">{product.maker.name}</h4>
                    <p className="text-sm text-earth-600 font-serif">{product.maker.role}</p>
                 </div>
              </div>
            )}

            {/* Deep Details */}
            <div className="space-y-8 pt-8 border-t border-earth-100">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-earth-400 mb-4 flex items-center gap-2">
                  <Package className="w-4 h-4" /> Chi tiết sản phẩm
                </h4>
                <p className="text-earth-600 font-serif leading-relaxed text-sm">
                  {product.longDescription}
                </p>
              </div>
              
              {product.materials && (
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-earth-400 mb-4">Chất liệu & Thành phần</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.materials.map((mat, i) => (
                      <li key={i} className="text-sm text-earth-700 font-serif flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" /> {mat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
