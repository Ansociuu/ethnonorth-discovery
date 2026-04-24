import React from 'react';
import { motion } from 'motion/react';
import { Filter, Star, Clock, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { tours } from '@/src/data';
import Button from '@/src/components/ui/Button';

export default function Booking() {
  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-24 flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-terracotta text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hành trình di sản tùy chọn</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl mb-8 serif leading-none"
            >
              Thiết kế <br /> <span className="italic font-light text-earth-400">hành trình riêng</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-earth-600 text-xl italic font-serif leading-relaxed"
            >
              Chọn lọc những lịch trình được thiết kế tỉ mỉ bởi các chuyên gia văn hoá để chạm vào linh hồn của đại ngàn.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex space-x-4"
          >
             <Button variant="outline" className="flex items-center gap-3 px-8">
               <Filter className="w-4 h-4" />
               <span>Bộ lọc tìm kiếm</span>
             </Button>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 gap-20 lg:gap-32">
          {tours.map((tour, idx) => (
            <motion.div 
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col lg:flex-row bg-earth-50/50 rounded-sm overflow-hidden premium-shadow border border-earth-100 group"
            >
              <div className="lg:w-5/12 relative min-h-[450px] overflow-hidden">
                <img src={tour.image} alt={tour.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute top-8 left-8 bg-ethnic-indigo text-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                   Sự lựa chọn hàng đầu
                </div>
              </div>
              <div className="lg:w-7/12 p-12 md:p-20 flex flex-col justify-between bg-white">
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div>
                      <h2 className="text-4xl md:text-5xl serif italic mb-6 leading-tight">{tour.name}</h2>
                      <div className="flex flex-wrap items-center gap-8 text-earth-500 text-[11px] font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-terracotta" /> {tour.duration}</span>
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-terracotta" /> {tour.locations.join(', ')}</span>
                      </div>
                    </div>
                    <div className="md:text-right bg-earth-50 p-6 rounded-sm min-w-[200px]">
                       <div className="text-3xl serif font-bold text-earth-900">{tour.price.toLocaleString('vi-VN')} đ</div>
                       <div className="text-[9px] text-earth-400 font-bold uppercase tracking-[0.2em] mt-2">Giá từ / người</div>
                    </div>
                  </div>

                  <div className="space-y-8">
                     <h4 className="text-[10px] uppercase font-bold text-earth-400 tracking-[0.4em] pb-4 border-b border-earth-100">Trải nghiệm nổi bật trong hành trình</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {tour.features.map(f => (
                           <div key={f} className="flex items-center gap-4 group/item">
                              <div className="w-10 h-10 rounded-full bg-earth-50 flex items-center justify-center group-hover/item:bg-gold transition-colors">
                                 <Star className="w-4 h-4 text-earth-400 group-hover/item:text-white" />
                              </div>
                              <span className="text-base serif italic text-earth-700">{f}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 pt-16">
                   <Button size="lg" className="w-full sm:w-auto px-16">Giữ chỗ ngay</Button>
                   <Button variant="ghost" className="w-full sm:w-auto italic group">
                      Xem lịch trình chi tiết <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
