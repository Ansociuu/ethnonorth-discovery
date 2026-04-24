import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Button from '@/src/components/ui/Button';
import logo from '@/src/assets/brand/logo.png';


export default function Footer() {
   return (
      <footer className="bg-earth-950 text-white pt-32 pb-16 relative overflow-hidden">
         {/* Decorative Background Elements */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-earth-900/20 skew-x-12 translate-x-32 pointer-events-none" />

         <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 pb-32 border-b border-white/5">
               <div className="space-y-12">
                  <div className="space-y-6">
                     <h2 className="text-5xl md:text-7xl serif italic leading-none">CÃ¹ng viáº¿t tiáº¿p <br /> <span className="text-gold">di sáº£n vÃ¹ng cao</span></h2>
                     <p className="text-earth-400 text-xl italic font-serif leading-relaxed max-w-xl">
                        ÄÄƒng kÃ½ nháº­n báº£n tin di sáº£n Ä‘á»ƒ khÃ´ng bá» lá»¡ nhá»¯ng cÃ¢u chuyá»‡n vÄƒn hoÃ¡ vÃ  Æ°u Ä‘Ã£i tráº£i nghiá»‡m Ä‘á»™c quyá»n.
                     </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                     <input
                        type="email"
                        placeholder="Email cá»§a báº¡n..."
                        className="bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-gold/50 flex-grow text-sm italic font-serif text-white placeholder:text-earth-600"
                     />
                     <Button className="px-10">ÄÄƒng kÃ½</Button>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-8">
                     <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold">KhÃ¡m phÃ¡</h4>
                     <ul className="space-y-4">
                        {[
                           { name: 'DÃ¢n tá»™c', path: '/ethnic' },
                           { name: 'Äá»‹a danh', path: '/destinations' },
                           { name: 'Tráº£i nghiá»‡m', path: '/experiences' },
                           { name: 'Cá»­a hÃ ng', path: '/shop' },
                           { name: 'Äáº·t tour', path: '/booking' }
                        ].map(item => (
                           <li key={item.name}>
                              <Link to={item.path} className="text-earth-400 hover:text-white transition-colors text-sm italic font-serif flex items-center group">
                                 {item.name}
                                 <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="space-y-8">
                     <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold">Há»— trá»£</h4>
                     <ul className="space-y-4">
                        {['CÃ¢u há»i thÆ°á»ng gáº·p', 'ChÃ­nh sÃ¡ch báº£o máº­t', 'Äiá»u khoáº£n sá»­ dá»¥ng', 'LiÃªn há»‡'].map(item => (
                           <li key={item}>
                              <a href="#" className="text-earth-400 hover:text-white transition-colors text-sm italic font-serif flex items-center group">
                                 {item}
                                 <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
               <div className="space-y-6">
            <div className="flex items-center mb-4">
               <img src={logo} alt="Discovery VN Logo" className="h-16 w-auto brightness-0 invert" />
            </div>

                  <p className="text-earth-500 text-sm italic leading-relaxed">Ná»n táº£ng tiÃªn phong trong viá»‡c báº£o tá»“n vÃ  quáº£ng bÃ¡ giÃ¡ trá»‹ vÄƒn hoÃ¡ báº£n Ä‘á»‹a Viá»‡t Nam.</p>
               </div>
               <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-earth-400">
                     <MapPin className="w-5 h-5 text-gold shrink-0" />
                     <span className="text-xs italic">Sá»‘ 123, ÄÆ°á»ng Báº£n LÃ¡c, Mai ChÃ¢u, HÃ²a BÃ¬nh</span>
                  </div>
                  <div className="flex items-center space-x-4 text-earth-400">
                     <Phone className="w-5 h-5 text-gold shrink-0" />
                     <span className="text-xs italic">+84 987 654 321</span>
                  </div>
                  <div className="flex items-center space-x-4 text-earth-400">
                     <Mail className="w-5 h-5 text-gold shrink-0" />
                     <span className="text-xs italic">hello@discoveryvn.com</span>
                  </div>
               </div>
               <div className="lg:col-span-2 flex flex-col md:items-end justify-between">
                  <div className="flex space-x-6">
                     {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                        <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-earth-950 transition-all group">
                           <Icon className="w-5 h-5" />
                        </a>
                     ))}
                  </div>
                  <div className="mt-12 text-earth-600 text-[10px] uppercase font-bold tracking-[0.2em]">
                     Thiáº¿t káº¿ bá»Ÿi <span className="text-white">Antigravity AI</span> &copy; 2024
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
