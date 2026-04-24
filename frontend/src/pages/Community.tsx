import React from 'react';
import { motion } from 'motion/react';
import { Quote, MessageSquare, Users } from 'lucide-react';
import Button from '@/src/components/ui/Button';

const communityStories = [
  {
    name: 'SÃ¹ng A Phá»§',
    role: 'Chá»§ Homestay táº¡i Táº£ PhÃ¬n',
    story: 'HÆ¡n 10 nÄƒm trÆ°á»›c tÃ´i vá» quÃª, mong muá»‘n giá»¯ láº¡i náº¿p nhÃ  cá»• cá»§a cha Ã´ng. Giá» Ä‘Ã¢y, ngÃ´i nhÃ  Ä‘Ã£ trá»Ÿ thÃ nh nÆ¡i dá»«ng chÃ¢n cho hÃ ng ngÃ n du khÃ¡ch quá»‘c táº¿ muá»‘n tÃ¬m hiá»ƒu vá» vÄƒn hoÃ¡ Dao Äá».',
    image: 'https://images.unsplash.com/photo-1543739446-402a5d211830?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'LÃ½ Thá»‹ May',
    role: 'Nghá»‡ nhÃ¢n dá»‡t lanh',
    story: 'Con gÃ¡i Hâ€™Mong chÃºng tÃ´i ai cÅ©ng pháº£i biáº¿t dá»‡t lanh. ÄÃ³ lÃ  há»“n cá»‘t cá»§a dÃ¢n tá»™c. TÃ´i Ä‘Ã£ dáº¡y nghá» cho hÆ¡n 40 chá»‹ em trong báº£n Ä‘á»ƒ cÃ¹ng nhau giá»¯ nghá» vÃ  tÄƒng thÃªm thu nháº­p.',
    image: 'https://images.unsplash.com/photo-1555543714-3aee565b0907?auto=format&fit=crop&q=80&w=400',
  },
];

export default function Community() {
  return (
    <div className="pt-32 pb-24 bg-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">Káº¿t ná»‘i cá»™ng Ä‘á»“ng</h1>
          <p className="text-earth-600 text-lg italic">Nhá»¯ng cÃ¢u chuyá»‡n tá»« chÃ­nh nhá»¯ng ngÆ°á»i dÃ¢n báº£n Ä‘á»‹a - nhá»¯ng ngÆ°á»i giá»¯ lá»­a vÃ  truyá»n táº£i di sáº£n vÃ¹ng cao.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {communityStories.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-sm shadow-xl flex flex-col md:row items-center gap-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Quote className="w-32 h-32" />
              </div>
              <div className="md:w-1/3 flex flex-col items-center">
                 <div className="w-40 h-40 rounded-full border-4 border-earth-100 mb-6 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                 </div>
                 <h3 className="text-xl italic font-bold">{item.name}</h3>
                 <p className="text-[10px] text-earth-400 uppercase font-bold tracking-widest text-center mt-2">{item.role}</p>
              </div>
              <div className="md:w-2/3 space-y-6 relative z-10">
                 <Quote className="w-8 h-8 text-earth-300" />
                 <p className="text-earth-700 italic text-lg leading-relaxed">"{item.story}"</p>
                 <Button variant="ghost" className="px-0 flex items-center space-x-2 text-xs uppercase tracking-widest font-bold">
                    <MessageSquare className="w-4 h-4" />
                    <span>Xem cÃ¢u chuyá»‡n Ä‘áº§y Ä‘á»§</span>
                 </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Community */}
        <div className="bg-earth-950 rounded-sm p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden">
           <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <Users className="w-16 h-16 text-earth-500 mx-auto" />
              <h2 className="text-4xl md:text-5xl italic">Báº£n lÃ ng Ä‘ang chá» Ä‘Ã³n báº¡n</h2>
              <p className="text-earth-300 text-lg leading-relaxed italic">
                 "Má»™t ngÃ y lÃ m ngÆ°á»i báº£n Ä‘á»‹a" khÃ´ng chá»‰ lÃ  tráº£i nghiá»‡m, Ä‘Ã³ lÃ  sá»± sáº» chia vÃ  tháº¥u hiá»ƒu. HaÌƒy cuÌ€ng chuÌng tÃ´i xÃ¢y dá»±ng mÃ´Ì£t cÃ´Ì£ng Ä‘Ã´Ì€ng du liÌ£ch bÃªÌ€n vÆ°Ìƒng vaÌ€ coÌ traÌch nhiÃªÌ£m.
              </p>
              <div className="flex flex-col md:row items-center justify-center gap-4 pt-6">
                 <Button size="lg" className="w-full md:w-auto px-12">Tham gia cá»™ng Ä‘á»“ng</Button>
                 <Button variant="outline" size="lg" className="w-full md:w-auto text-white border-white/20 hover:bg-white/10">Viáº¿t cÃ¢u chuyá»‡n cá»§a báº¡n</Button>
              </div>
           </div>
           {/* Abstract patterns background */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
           </div>
        </div>
      </div>
    </div>
  );
}
