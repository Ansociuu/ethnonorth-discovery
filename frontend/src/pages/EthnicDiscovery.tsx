import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ethnicGroups } from '@/src/data';
import Button from '@/src/components/ui/Button';

import { AdvancedImage } from '@cloudinary/react';
import { getCldImage } from '@/src/lib/cloudinary';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function EthnicDiscovery() {
  return (
    <div className="pt-40 pb-32 bg-earth-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-32 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white premium-shadow text-terracotta text-[10px] font-bold uppercase tracking-[0.4em] rounded-full mb-10"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kho tÃ ng di sáº£n sá»‘ng</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl mb-10 serif leading-[0.9]"
          >
            DÃ¢n tá»™c <br /><span className="italic font-light text-earth-400">vÃ¹ng Ä‘áº¡i ngÃ n</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-earth-600 text-xl leading-relaxed italic font-serif max-w-3xl mx-auto"
          >
            Má»—i dÃ¢n tá»™c lÃ  má»™t pho sá»­ sá»‘ng, má»™t bá»©c tranh thá»• cáº©m rá»±c rá»¡ sáº¯c mÃ u giá»¯a mÃ¢y ngÃ n. KhÃ¡m phÃ¡ chiá»u sÃ¢u vÄƒn hoÃ¡ cá»§a nhá»¯ng con ngÆ°á»i tá»± do nháº¥t vÃ¹ng cao phÃ­a Báº¯c.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {ethnicGroups.map((ethnic, index) => (
            <motion.div
              key={ethnic.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm premium-shadow mb-12">
                {ethnic.cldId ? (
                  <AdvancedImage
                    cldImg={getCldImage(ethnic.cldId)}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={ethnic.image}
                    alt={ethnic.name}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/20 to-transparent flex flex-col justify-end p-12 lg:p-16">

                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-px bg-white/40" />
                      <span className="text-white/60 uppercase tracking-[0.4em] text-[9px] font-bold">HÃ nh trÃ¬nh chi tiáº¿t</span>
                   </div>
                   <h2 className="text-white text-6xl italic mb-0 serif">DÃ¢n tá»™c {ethnic.name}</h2>
                </div>
              </div>
              <div className="px-4 space-y-10">
                <p className="text-earth-700 text-2xl leading-relaxed italic font-serif border-l-4 border-terracotta/20 pl-8">
                  "{ethnic.shortDesc}"
                </p>
                <div className="grid grid-cols-2 gap-12 py-10 border-y border-earth-200/50">
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-earth-400 mb-6">CÃ¡c nhÃ¡nh chÃ­nh</h4>
                    <ul className="space-y-3 text-sm font-medium text-earth-800 italic font-serif">
                      {ethnic.subgroups.map(s => <li key={s} className="flex items-center gap-2"><div className="w-1 h-1 bg-terracotta rounded-full" /> {s}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-earth-400 mb-6">Nghá» truyá»n thá»‘ng</h4>
                    <ul className="space-y-3 text-sm font-medium text-earth-800 italic font-serif">
                      {ethnic.crafts.map(c => <li key={c} className="flex items-center gap-2"><div className="w-1 h-1 bg-forest rounded-full" /> {c}</li>)}
                    </ul>
                  </div>
                </div>
                <Link to={`/ethnic/${ethnic.id}`} className="block">
                  <Button size="lg" className="w-full">KhÃ¡m phÃ¡ báº£n sáº¯c {ethnic.name} <ArrowRight className="ml-4 w-5 h-5" /></Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
