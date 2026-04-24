import React from 'react';
import { motion } from 'motion/react';
import { Camera, Music, Utensils, Sparkles, ArrowRight, Quote } from 'lucide-react';
import Button from '@/src/components/ui/Button';

const expItems = [
  {
    title: "Dệt lanh & Nhuộm chàm",
    desc: "Học cách tạo ra những tấm vải di sản từ những nghệ nhân H'Mong kỳ cựu tại Lùng Tám. Một hành trình của sự kiên nhẫn và sắc màu.",
    image: "https://images.unsplash.com/photo-1610444317855-849a99781498?auto=format&fit=crop&q=80&w=800",
    icon: Camera,
    category: "Thủ công mỹ nghệ"
  },
  {
    title: "Ẩm thực đại ngàn",
    desc: "Tham gia vào quy trình đồ mèn mén và nấu thắng cố bên bếp lửa hồng. Khám phá bí mật gia vị của núi rừng.",
    image: "https://images.unsplash.com/photo-1543739446-402a5d211830?auto=format&fit=crop&q=80&w=800",
    icon: Utensils,
    category: "Ẩm thực truyền thống"
  },
  {
    title: "Âm nhạc & Vũ điệu",
    desc: "Lắng nghe tiếng Khèn gọi bạn và học những điệu múa ô duyên dáng. Một bản giao hưởng giữa mây ngàn.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
    icon: Music,
    category: "Nghệ thuật biểu diễn"
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
            <span>Sống cùng bản sắc</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl mb-8 serif leading-none"
          >
            Trải nghiệm <br /> <span className="italic font-light text-earth-400">chạm vào di sản</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-earth-600 text-xl italic font-serif leading-relaxed"
          >
            Không chỉ là tham quan, chúng tôi đưa bạn vào trung tâm của văn hoá, nơi bạn trở thành một phần của câu chuyện di sản vùng cao.
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
                   Khám phá ngay <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Quote */}
        <div className="mt-40 text-center max-w-5xl mx-auto py-24 border-y border-earth-100">
           <Quote className="w-12 h-12 text-terracotta/20 mx-auto mb-10" />
           <h2 className="text-4xl md:text-6xl serif italic leading-snug text-earth-900">
              "Văn hoá không phải là một món đồ trưng bày trong lồng kính, nó là hơi thở, là nhịp sống được truyền từ đời này sang đời khác."
           </h2>
           <p className="mt-10 text-earth-400 text-[10px] uppercase font-bold tracking-[0.5em]">Triết lý hành động của chúng tôi</p>
        </div>
      </div>
    </div>
  );
}
