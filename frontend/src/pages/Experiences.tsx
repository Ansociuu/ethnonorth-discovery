import React from 'react';
import { motion } from 'motion/react';
import { Camera, Music, Utensils, Sparkles, ArrowRight, Quote } from 'lucide-react';
import Button from '@/src/components/ui/Button';

const expItems = [
  {
    title: "Dá»‡t lanh & Nhuá»™m chÃ m",
    desc: "Há»c cÃ¡ch táº¡o ra nhá»¯ng táº¥m váº£i di sáº£n tá»« nhá»¯ng nghá»‡ nhÃ¢n H'Mong ká»³ cá»±u táº¡i LÃ¹ng TÃ¡m. Má»™t hÃ nh trÃ¬nh cá»§a sá»± kiÃªn nháº«n vÃ  sáº¯c mÃ u.",
    image: "https://images.unsplash.com/photo-1610444317855-849a99781498?auto=format&fit=crop&q=80&w=800",
    icon: Camera,
    category: "Thá»§ cÃ´ng má»¹ nghá»‡"
  },
  {
    title: "áº¨m thá»±c Ä‘áº¡i ngÃ n",
    desc: "Tham gia vÃ o quy trÃ¬nh Ä‘á»“ mÃ¨n mÃ©n vÃ  náº¥u tháº¯ng cá»‘ bÃªn báº¿p lá»­a há»“ng. KhÃ¡m phÃ¡ bÃ­ máº­t gia vá»‹ cá»§a nÃºi rá»«ng.",
    image: "https://images.unsplash.com/photo-1543739446-402a5d211830?auto=format&fit=crop&q=80&w=800",
    icon: Utensils,
    category: "áº¨m thá»±c truyá»n thá»‘ng"
  },
  {
    title: "Ã‚m nháº¡c & VÅ© Ä‘iá»‡u",
    desc: "Láº¯ng nghe tiáº¿ng KhÃ¨n gá»i báº¡n vÃ  há»c nhá»¯ng Ä‘iá»‡u mÃºa Ã´ duyÃªn dÃ¡ng. Má»™t báº£n giao hÆ°á»Ÿng giá»¯a mÃ¢y ngÃ n.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
    icon: Music,
    category: "Nghá»‡ thuáº­t biá»ƒu diá»…n"
  }
];

export default function Experiences() {
  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-terracotta text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sá»‘ng cÃ¹ng báº£n sáº¯c</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl mb-8 serif leading-none"
          >
            Tráº£i nghiá»‡m <br /> <span className="italic font-light text-earth-400">cháº¡m vÃ o di sáº£n</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-earth-600 text-xl italic font-serif leading-relaxed"
          >
            KhÃ´ng chá»‰ lÃ  tham quan, chÃºng tÃ´i Ä‘Æ°a báº¡n vÃ o trung tÃ¢m cá»§a vÄƒn hoÃ¡, nÆ¡i báº¡n trá»Ÿ thÃ nh má»™t pháº§n cá»§a cÃ¢u chuyá»‡n di sáº£n vÃ¹ng cao.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {expItems.map((exp, idx) => (
            <motion.div 
              key={exp.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col h-full bg-white rounded-sm overflow-hidden premium-shadow border border-earth-100"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-earth-950/20 to-transparent flex flex-col justify-end p-10">
                   <span className="text-white/60 uppercase tracking-[0.3em] text-[9px] font-bold mb-4">{exp.category}</span>
                   <h3 className="text-white text-4xl serif italic leading-tight mb-0">{exp.title}</h3>
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col justify-between">
                <p className="text-earth-600 text-lg italic font-serif leading-relaxed mb-10">{exp.desc}</p>
                <Button variant="secondary" className="w-full group text-[10px]">
                   KhÃ¡m phÃ¡ ngay <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Quote */}
        <div className="mt-40 text-center max-w-5xl mx-auto py-24 border-y border-earth-100">
           <Quote className="w-12 h-12 text-terracotta/20 mx-auto mb-10" />
           <h2 className="text-4xl md:text-6xl serif italic leading-snug text-earth-900">
              "VÄƒn hoÃ¡ khÃ´ng pháº£i lÃ  má»™t mÃ³n Ä‘á»“ trÆ°ng bÃ y trong lá»“ng kÃ­nh, nÃ³ lÃ  hÆ¡i thá»Ÿ, lÃ  nhá»‹p sá»‘ng Ä‘Æ°á»£c truyá»n tá»« Ä‘á»i nÃ y sang Ä‘á»i khÃ¡c."
           </h2>
           <p className="mt-10 text-earth-400 text-[10px] uppercase font-bold tracking-[0.5em]">Triáº¿t lÃ½ hÃ nh Ä‘á»™ng cá»§a chÃºng tÃ´i</p>
        </div>
      </div>
    </div>
  );
}
