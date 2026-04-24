import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Button from '@/src/components/ui/Button';

export default function Footer() {
  return (
    <footer className="bg-earth-950 text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-earth-900/20 skew-x-12 translate-x-32 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 pb-32 border-b border-white/5">
           <div className="space-y-12">
              <div className="space-y-6">
                 <h2 className="text-5xl md:text-7xl serif italic leading-none">Cùng viết tiếp <br /> <span className="text-gold">di sản vùng cao</span></h2>
                 <p className="text-earth-400 text-xl italic font-serif leading-relaxed max-w-xl">
                    Đăng ký nhận bản tin di sản để không bỏ lỡ những câu chuyện văn hoá và ưu đãi trải nghiệm độc quyền.
                 </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                 <input 
                  type="email" 
                  placeholder="Email của bạn..." 
                  className="bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-gold/50 flex-grow text-sm italic font-serif text-white placeholder:text-earth-600"
                 />
                 <Button className="px-10">Đăng ký</Button>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-12">
              <div className="space-y-8">
                 <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold">Khám phá</h4>
                 <ul className="space-y-4">
                    {[
                      { name: 'Dân tộc', path: '/ethnic' },
                      { name: 'Địa danh', path: '/destinations' },
                      { name: 'Trải nghiệm', path: '/experiences' },
                      { name: 'Cửa hàng', path: '/shop' },
                      { name: 'Đặt tour', path: '/booking' }
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
                 <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold">Hỗ trợ</h4>
                 <ul className="space-y-4">
                    {['Câu hỏi thường gặp', 'Chính sách bảo mật', 'Điều khoản sử dụng', 'Liên hệ'].map(item => (
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
              <div className="text-3xl font-bold italic serif tracking-tight">Discovery <span className="text-gold">VN</span></div>
              <p className="text-earth-500 text-sm italic leading-relaxed">Nền tảng tiên phong trong việc bảo tồn và quảng bá giá trị văn hoá bản địa Việt Nam.</p>
           </div>
           <div className="space-y-4">
              <div className="flex items-center space-x-4 text-earth-400">
                 <MapPin className="w-5 h-5 text-gold shrink-0" />
                 <span className="text-xs italic">Số 123, Đường Bản Lác, Mai Châu, Hòa Bình</span>
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
                 Thiết kế bởi <span className="text-white">Antigravity AI</span> &copy; 2024
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
