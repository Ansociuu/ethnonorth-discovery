import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Heart, Share2, Sparkles } from 'lucide-react';
import { products } from '@/src/data';
import Button from '@/src/components/ui/Button';

export default function Shop() {
  return (
    <div className="pt-40 pb-32 bg-earth-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-terracotta text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gian hàng di sản bản địa</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl mb-8 serif italic leading-none"
          >
            Gian hàng <br /><span className="font-light text-earth-400">bản sắc</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-earth-600 text-xl italic font-serif leading-relaxed max-w-2xl mx-auto"
          >
            Nơi những giá trị thủ công truyền thống được tôn vinh. Mỗi sản phẩm là một câu chuyện về tình yêu di sản của các nghệ nhân vùng cao.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col h-full"
            >
              <div className="relative aspect-square overflow-hidden bg-white premium-shadow rounded-sm mb-10">
                 <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                 <div className="absolute top-6 right-6 space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:bg-earth-900 hover:text-white transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:bg-earth-900 hover:text-white transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                 </div>
                 <div className="absolute bottom-6 left-6">
                    <span className="bg-earth-950/80 text-white px-4 py-1.5 text-[9px] uppercase font-bold tracking-[0.2em] backdrop-blur-md">{product.ethnic}</span>
                 </div>
              </div>

              <div className="flex-grow flex flex-col px-2">
                <div className="flex justify-between items-start mb-8">
                   <div className="space-y-2">
                      <span className="text-[10px] text-earth-400 uppercase font-bold tracking-[0.3em]">{product.category}</span>
                      <h3 className="text-3xl serif italic leading-tight">{product.name}</h3>
                      <p className="text-[11px] text-earth-500 font-medium tracking-wide italic">Nguồn gốc: {product.origin}</p>
                   </div>
                   <div className="text-2xl serif font-bold text-earth-900">{product.price.toLocaleString('vi-VN')}đ</div>
                </div>
                
                <p className="text-earth-600 text-base italic font-serif leading-relaxed mb-10 flex-grow line-clamp-3">
                  {product.story}
                </p>

                <Button variant="secondary" className="w-full py-5 text-[11px]">
                  <ShoppingBag className="w-4 h-4 mr-3" />
                  Sở hữu di sản này
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Section - Premium Editorial Layout */}
        <div className="mt-40 bg-earth-900 text-white p-12 md:p-32 rounded-sm overflow-hidden relative premium-shadow">
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-10">
                 <h2 className="text-5xl md:text-7xl serif italic leading-[0.9]">Từ bàn tay <br />đến trái tim</h2>
                 <p className="text-earth-300 text-xl italic font-serif leading-relaxed">
                    Chúng tôi cam kết xây dựng một hệ sinh thái công bằng, nơi 70% doanh thu được chuyển trực tiếp đến các nghệ nhân, giúp họ bảo tồn nghề truyền thống và phát triển cộng đồng bền vững.
                 </p>
                 <div className="pt-6">
                    <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white hover:text-earth-900 px-12">
                       Tìm hiểu về sứ mệnh của chúng tôi
                    </Button>
                 </div>
              </div>
              <div className="relative">
                 <div className="grid grid-cols-2 gap-6">
                    <img src="https://images.unsplash.com/photo-1610444317855-849a99781498?auto=format&fit=crop&q=80&w=800" className="rounded-sm aspect-[4/5] object-cover shadow-2xl" alt="Artisan 1" />
                    <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800" className="rounded-sm aspect-[4/5] object-cover translate-y-12 shadow-2xl" alt="Artisan 2" />
                 </div>
                 {/* Decorative element */}
                 <div className="absolute -top-12 -right-12 w-40 h-40 border border-white/10 rounded-full flex items-center justify-center italic text-white/20 text-[10px] uppercase tracking-widest leading-none text-center p-8">
                    100% Thủ công bản địa
                 </div>
              </div>
           </div>
           <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-earth-700)_0%,_transparent_70%)]" />
           </div>
        </div>
      </div>
    </div>
  );
}
