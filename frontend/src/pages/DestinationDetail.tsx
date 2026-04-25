import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Calendar, Users, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { destinations } from '@/src/data';
import Button from '@/src/components/ui/Button';

export default function DestinationDetail() {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!destination) {
    return (
      <div className="pt-40 text-center h-screen bg-earth-50 flex flex-col items-center justify-center">
        <h2 className="serif text-4xl mb-8">Không tìm thấy địa danh.</h2>
        <Link to="/destinations">
          <Button variant="outline">Quay lại danh sách</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-earth-50 min-h-screen pb-32">
      {/* Hero Section */}
      <div ref={heroRef} className="h-[85vh] relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          <img
            src={destination.image}
            className="w-full h-full object-cover scale-105"
            alt={destination.name}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-950/60 via-earth-950/20 to-earth-50" />

        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Link to="/destinations" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-[10px] uppercase tracking-[0.4em] font-bold bg-white/10 px-6 py-2 rounded-full backdrop-blur-md border border-white/20">
              <ArrowLeft className="w-4 h-4" />
              Khám phá các vùng đất khác
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-7xl md:text-9xl mb-6 italic serif leading-none tracking-tight drop-shadow-2xl"
          >
            {destination.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/90 uppercase tracking-[0.4em] font-bold text-xs md:text-sm drop-shadow-lg flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-terracotta" />
            {destination.province}
          </motion.p>
        </motion.div>
      </div>

      {/* Quick Info Bar */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 relative z-20 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="glass border border-white/40 rounded-sm p-8 flex flex-col md:flex-row justify-between items-center gap-8 premium-shadow"
        >
          <div className="flex flex-col items-center text-center px-4">
            <Calendar className="w-6 h-6 text-terracotta mb-4" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-earth-500 font-bold mb-2">Thời điểm lý tưởng</span>
            <span className="serif italic text-xl text-earth-900 max-w-[250px]">{destination.bestTimeToVisit}</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-earth-200" />
          <div className="flex flex-col items-center text-center px-4">
            <Users className="w-6 h-6 text-terracotta mb-4" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-earth-500 font-bold mb-2">Cộng đồng dân tộc</span>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {destination.ethnicGroups.map(e => (
                <span key={e} className="px-3 py-1 bg-white border border-earth-100 rounded-sm text-[9px] font-bold uppercase tracking-widest text-earth-700">{e}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Storytelling Content */}
      <div className="max-w-4xl mx-auto px-6 mb-32 text-center">
        <h2 className="text-4xl md:text-6xl serif italic mb-10 text-earth-900">Tiếng gọi từ đại ngàn</h2>
        <p className="text-xl md:text-2xl text-earth-700 font-serif italic leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-terracotta first-letter:mr-3 first-letter:float-left text-left">
          {destination.longDescription}
        </p>
      </div>

      {/* Highlights Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-terracotta font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Điểm chạm di sản</span>
          <h2 className="text-5xl md:text-6xl serif italic text-earth-900">Trải nghiệm không thể bỏ lỡ</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {destination.highlights?.map((highlight, index) => (
            <React.Fragment key={index}>
              {/* Alternate layout based on index */}
              {index % 2 === 0 ? (
                <>
                  <div className="order-2 md:order-1 space-y-6">
                    <h3 className="text-4xl serif italic text-earth-900">{highlight.title}</h3>
                    <p className="text-lg text-earth-600 font-serif italic leading-relaxed">{highlight.desc}</p>
                    <div className="pt-4">
                       <Button variant="outline" className="text-[10px]">Đưa vào lịch trình</Button>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img src={highlight.image} alt={highlight.title} className="w-full aspect-square object-cover rounded-sm premium-shadow" />
                  </div>
                </>
              ) : (
                <>
                  <div className="order-1">
                    <img src={highlight.image} alt={highlight.title} className="w-full aspect-square object-cover rounded-sm premium-shadow" />
                  </div>
                  <div className="order-2 space-y-6 md:pl-12">
                    <h3 className="text-4xl serif italic text-earth-900">{highlight.title}</h3>
                    <p className="text-lg text-earth-600 font-serif italic leading-relaxed">{highlight.desc}</p>
                    <div className="pt-4">
                       <Button variant="outline" className="text-[10px]">Đưa vào lịch trình</Button>
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      {destination.gallery && destination.gallery.length > 0 && (
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 border-b border-earth-200 pb-4">
             <ImageIcon className="w-6 h-6 text-earth-400" />
             <h2 className="text-3xl serif italic text-earth-900">Góc nhìn chân thực</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destination.gallery.map((img, idx) => (
              <div 
                key={idx} 
                className={`overflow-hidden rounded-sm premium-shadow group ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full min-h-[250px] object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-6 mt-32 text-center bg-white p-16 rounded-sm premium-shadow border border-earth-100">
         <h2 className="text-4xl serif italic text-earth-900 mb-6">Đã sẵn sàng khám phá {destination.name}?</h2>
         <p className="text-earth-600 mb-10 font-serif italic">Xem các tour du lịch được thiết kế riêng biệt để tận hưởng trọn vẹn văn hóa nơi đây.</p>
         <Link to="/booking">
           <Button size="lg" className="px-12">Xem lịch trình Tour</Button>
         </Link>
      </div>
    </div>
  );
}
