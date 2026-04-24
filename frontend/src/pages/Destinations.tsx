import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { destinations } from '@/src/data';
import Button from '@/src/components/ui/Button';

export default function Destinations() {
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
            <span>Äá»‹a danh di sáº£n</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl mb-8 serif leading-none"
          >
            Nhá»¯ng vÃ¹ng Ä‘áº¥t <br /> <span className="italic font-light text-earth-400">huyá»n thoáº¡i</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-earth-600 text-xl italic font-serif leading-relaxed"
          >
            Tá»« nhá»¯ng Ä‘á»‰nh nÃºi má» sÆ°Æ¡ng cá»§a Sa Pa Ä‘áº¿n cao nguyÃªn Ä‘Ã¡ HÃ  Giang hÃ¹ng vÄ©, má»—i vÃ¹ng Ä‘áº¥t Ä‘á»u áº©n chá»©a nhá»¯ng cÃ¢u chuyá»‡n cá»• tÃ­ch.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {destinations.map((dest, idx) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row bg-white rounded-sm overflow-hidden premium-shadow border border-earth-100 group h-full"
            >
              <div className="md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                <div className="absolute top-6 left-6 flex items-center space-x-2 bg-earth-950/80 text-white px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>{dest.province}</span>
                </div>
              </div>
              <div className="md:w-1/2 p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl mb-6 serif italic leading-tight">{dest.name}</h2>
                  <p className="text-earth-600 text-base italic font-serif leading-relaxed mb-10">{dest.description}</p>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[9px] uppercase font-bold text-earth-400 tracking-[0.3em] mb-4">Cá»™ng Ä‘á»“ng dÃ¢n tá»™c</h4>
                      <div className="flex flex-wrap gap-2">
                        {dest.ethnicGroups.map(e => (
                          <span key={e} className="px-3 py-1 bg-earth-50 text-earth-700 border border-earth-100 rounded-sm text-[9px] font-bold uppercase tracking-widest">{e}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[9px] uppercase font-bold text-earth-400 tracking-[0.3em] mb-4">Tráº£i nghiá»‡m tiÃªu biá»ƒu</h4>
                      <ul className="space-y-3">
                        {dest.experiences.map(exp => (
                          <li key={exp} className="flex items-center text-sm font-serif italic text-earth-800">
                             <div className="w-1 h-1 bg-gold rounded-full mr-3" />
                             {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-12">
                   <Button variant="secondary" className="w-full text-[10px]">KhÃ¡m phÃ¡ vÄƒn hoÃ¡ {dest.name}</Button>
                   <Button variant="outline" className="w-full text-[10px] italic group">
                      Xem cÃ¡c Tour liÃªn quan <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
