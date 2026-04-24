import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Compass, ArrowRight, Star, Quote } from 'lucide-react';
import Button from '@/src/components/ui/Button';
import { destinations, ethnicGroups, products, tours } from '@/src/data';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-paper">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1543739446-402a5d211830?auto=format&fit=crop&q=80&w=2000"
            alt="Hmong culture"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 editorial-mask" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="uppercase tracking-[0.6em] text-[10px] font-bold text-white/70">Di Sáº£n VÃ¹ng Cao PhÃ­a Báº¯c</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white text-6xl md:text-8xl lg:text-9xl serif leading-[0.9] mb-8 text-balance"
          >
            KhÃ¡m phÃ¡ <br /><span className="italic font-light text-white/90">Báº£n sáº¯c Viá»‡t</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 mb-12 font-serif italic max-w-2xl mx-auto"
          >
            HÃ nh trÃ¬nh tÃ¬m vá» cá»™i nguá»“n vÄƒn hoÃ¡ Hâ€™MÃ´ng & Dao qua nhá»¯ng tráº£i nghiá»‡m báº£n Ä‘á»‹a chÃ¢n thá»±c nháº¥t.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="min-w-[240px]">Báº¯t Ä‘áº§u hÃ nh trÃ¬nh</Button>
            <Button variant="glass" size="lg" className="min-w-[240px]">Xem thÆ°á»›c phim vÄƒn hoÃ¡</Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Cuá»™n Ä‘á»ƒ khÃ¡m phÃ¡</span>
          <div className="w-px h-12 bg-white/20" />
        </motion.div>
      </section>

      {/* Featured Insight Section - Editorial Style */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-5">
              <h4 className="text-terracotta font-bold text-[10px] uppercase tracking-[0.4em] mb-6">GiÃ¡ trá»‹ cá»‘t lÃµi</h4>
              <h2 className="serif text-5xl md:text-6xl mb-8 leading-tight">Tinh hoa káº¿t tinh tá»« <br /><span className="italic">nghÃ¬n nÄƒm</span></h2>
              <p className="text-earth-600 text-lg mb-10 italic leading-relaxed">
                ChÃºng tÃ´i khÃ´ng chá»‰ tá»• chá»©c nhá»¯ng chuyáº¿n Ä‘i, chÃºng tÃ´i xÃ¢y dá»±ng nhá»‹p cáº§u káº¿t ná»‘i tÃ¢m há»“n du khÃ¡ch vá»›i kho tÃ ng tri thá»©c cá»§a nhá»¯ng "ngÆ°á»i giá»¯ lá»­a" Ä‘áº¡i ngÃ n.
              </p>
              <div className="flex items-center gap-6 py-8 border-t border-earth-100">
                <div className="text-center">
                  <div className="text-4xl serif mb-1">54+</div>
                  <div className="text-[9px] uppercase tracking-widest text-earth-400 font-bold">DÃ¢n tá»™c</div>
                </div>
                <div className="w-px h-10 bg-earth-100" />
                <div className="text-center">
                  <div className="text-4xl serif mb-1">120+</div>
                  <div className="text-[9px] uppercase tracking-widest text-earth-400 font-bold">Nghá»‡ nhÃ¢n</div>
                </div>
                <div className="w-px h-10 bg-earth-100" />
                <div className="text-center">
                  <div className="text-4xl serif mb-1">15k+</div>
                  <div className="text-[9px] uppercase tracking-widest text-earth-400 font-bold">CÃ¢u chuyá»‡n</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-8">
                <div className="bg-earth-50 p-10 rounded-sm premium-shadow card-hover group">
                  <Quote className="w-8 h-8 text-terracotta/20 mb-6 group-hover:text-terracotta transition-colors" />
                  <h4 className="serif text-2xl mb-4">Nghá»‡ thuáº­t ChÃ m</h4>
                  <p className="text-sm text-earth-500 italic leading-relaxed mb-6">Ká»¹ thuáº­t nhuá»™m chÃ m vÃ  váº½ sÃ¡p ong Ä‘á»™c báº£n cá»§a ngÆ°á»i H'MÃ´ng Hoa.</p>
                  <Link to="/community" className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group/link">
                    KhÃ¡m phÃ¡ <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="bg-earth-900 p-10 rounded-sm text-white premium-shadow card-hover group">
                  <Star className="w-8 h-8 text-gold mb-6" />
                  <h4 className="serif text-2xl mb-4">Lá»… Cáº¥p Sáº¯c</h4>
                  <p className="text-sm text-white/50 italic leading-relaxed mb-6">Nghi lá»… trÆ°á»Ÿng thÃ nh linh thiÃªng nháº¥t cá»§a ngÆ°á»i Dao Äá».</p>
                  <Link to="/community" className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group/link">
                    TÃ¬m hiá»ƒu <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="pt-12">
                <div className="relative h-full min-h-[400px] overflow-hidden rounded-sm premium-shadow">
                  <img src="https://images.unsplash.com/photo-1543739446-402a5d211830?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 to-transparent p-8 flex flex-col justify-end">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/60 mb-2">Phim tÃ i liá»‡u</span>
                    <h4 className="text-white serif text-xl italic">HÆ¡i thá»Ÿ Ä‘áº¡i ngÃ n</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ethnic Discovery Overview - Grid layout */}
      <section className="py-32 bg-earth-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <h2 className="serif text-5xl md:text-7xl mb-6">Hai dÃ²ng mÃ¡u <br /><span className="italic font-light">má»™t linh há»“n nÃºi</span></h2>
              <p className="text-earth-600 text-lg font-serif italic">
                KhÃ¡m phÃ¡ chiá»u sÃ¢u vÄƒn hoÃ¡ cá»§a ngÆ°á»i H'MÃ´ng vÃ  Dao qua nhá»¯ng gÃ³c nhÃ¬n má»›i máº».
              </p>
            </motion.div>
            <motion.div {...fadeInUp}>
              <Link to="/ethnic">
                <Button variant="outline" className="px-10">Táº¥t cáº£ dÃ¢n tá»™c</Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {ethnicGroups.map((ethnic, idx) => (
              <motion.div
                key={ethnic.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className="group relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm premium-shadow mb-8">
                  <img src={ethnic.image} alt={ethnic.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <span className="text-white/40 uppercase tracking-[0.5em] text-[9px] font-bold mb-4">Chi tiáº¿t dÃ¢n tá»™c</span>
                  <h3 className="text-white text-5xl mb-6 serif italic">DÃ¢n tá»™c {ethnic.name}</h3>
                  <p className="text-white/60 mb-10 line-clamp-2 max-w-sm font-serif italic">{ethnic.shortDesc}</p>
                  <Link to={`/ethnic/${ethnic.id}`}>
                    <Button variant="glass" className="w-full sm:w-auto">KhÃ¡m phÃ¡ báº£n sáº¯c</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section - Horizontal Scroll feel */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.h4 {...fadeInUp} className="text-terracotta font-bold text-[10px] uppercase tracking-[0.4em] mb-6">Báº£n Ä‘á»“ di sáº£n</motion.h4>
            <motion.h2 {...fadeInUp} className="serif text-5xl md:text-6xl mb-6 leading-tight">Nhá»¯ng vÃ¹ng Ä‘áº¥t <br /><span className="italic">má» sÆ°Æ¡ng</span></motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group flex flex-col h-full bg-earth-50/50 p-5 rounded-sm card-hover border border-earth-100"
              >
                <div className="relative h-64 overflow-hidden mb-8 rounded-sm">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-sm flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-terracotta" />
                    <span className="text-[9px] font-bold uppercase tracking-widest">{dest.province}</span>
                  </div>
                </div>
                <div className="flex-grow flex flex-col px-2">
                  <h4 className="serif text-2xl mb-4 italic">{dest.name}</h4>
                  <p className="text-earth-500 text-sm mb-8 line-clamp-3 font-serif italic leading-relaxed">
                    {dest.description}
                  </p>
                  <Link to="/destinations" className="mt-auto group/link flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-earth-900 hover:text-terracotta transition-colors">
                    Chi tiáº¿t vÃ¹ng Ä‘áº¥t <ArrowRight className="ml-2 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Preview - Minimalist Style */}
      <section className="py-32 bg-earth-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
            <motion.h2 {...fadeInUp} className="serif text-5xl md:text-6xl italic">Chá»£ phiÃªn di sáº£n</motion.h2>
            <motion.div {...fadeInUp}>
              <Link to="/shop">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-earth-900">GhÃ© thÄƒm gian hÃ ng</Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden bg-earth-800 rounded-sm mb-8 relative premium-shadow">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Button variant="glass" className="w-full text-[10px]">
                      Mua ngay â€” {product.price.toLocaleString('vi-VN')}Ä‘
                    </Button>
                  </div>
                </div>
                <div className="px-2">
                  <span className="text-[9px] text-white/40 uppercase tracking-[0.3em] block mb-3 font-bold">{product.category} â€¢ {product.origin}</span>
                  <h4 className="serif text-2xl mb-3 italic">{product.name}</h4>
                  <p className="text-white/50 text-sm italic font-serif leading-relaxed line-clamp-2">{product.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-40 relative overflow-hidden bg-paper">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 {...fadeInUp} className="serif text-5xl md:text-7xl mb-12 text-balance leading-tight">Sáºµn sÃ ng cho má»™t hÃ nh trÃ¬nh <br /><span className="italic font-light text-terracotta">thay Ä‘á»•i cuá»™c Ä‘á»i?</span></motion.h2>
          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="px-16">Äáº·t Tour tÆ° váº¥n ngay</Button>
            <Button size="lg" variant="outline" className="px-16 italic">Xem lá»‹ch trÃ¬nh máº«u</Button>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-earth-900 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-earth-900 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        </div>
      </section>
    </div>
  );
}
