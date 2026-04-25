import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Clock, MapPin, ArrowLeft, Image as ImageIcon, Sparkles } from 'lucide-react';
import { experiences } from '@/src/data';
import Button from '@/src/components/ui/Button';

export default function ExperienceDetail() {
  const { id } = useParams();
  const experience = experiences.find(e => e.id === id);
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

  if (!experience) {
    return (
      <div className="pt-40 text-center h-screen bg-earth-50 flex flex-col items-center justify-center">
        <h2 className="serif text-4xl mb-8">Không tìm thấy trải nghiệm.</h2>
        <Link to="/experiences">
          <Button variant="outline">Quay lại danh sách</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-earth-50 min-h-screen pb-32">
      {/* Premium Hero Section */}
      <div ref={heroRef} className="h-[80vh] relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          <img
            src={experience.image}
            className="w-full h-full object-cover scale-105"
            alt={experience.title}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/40 to-transparent" />

        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex flex-col justify-end p-6 md:p-20 z-10 max-w-7xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Link to="/experiences" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-[10px] uppercase tracking-[0.4em] font-bold">
              <ArrowLeft className="w-4 h-4" />
              Tất cả trải nghiệm
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6"
              >
                <Sparkles className="w-3 h-3" />
                <span>{experience.category}</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-6xl md:text-8xl italic serif leading-tight tracking-tight drop-shadow-2xl"
              >
                {experience.title}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 bg-white/10 backdrop-blur-md p-6 rounded-sm border border-white/20 shrink-0"
            >
              <div className="flex flex-col">
                 <span className="text-white/50 text-[9px] uppercase tracking-widest font-bold mb-2">Thời lượng</span>
                 <span className="text-white font-serif italic text-xl flex items-center gap-2">
                    <Clock className="w-4 h-4 text-terracotta" />
                    {experience.duration}
                 </span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="flex flex-col">
                 <span className="text-white/50 text-[9px] uppercase tracking-widest font-bold mb-2">Địa điểm</span>
                 <span className="text-white font-serif italic text-xl flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-terracotta" />
                    {experience.location}
                 </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Story & Details */}
          <div className="lg:col-span-7 space-y-20">
            <section>
              <p className="text-2xl text-earth-800 font-serif italic leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-terracotta first-letter:mr-3 first-letter:float-left">
                {experience.longDescription}
              </p>
            </section>

            <section>
              <h3 className="text-4xl serif italic text-earth-900 mb-10 pb-4 border-b border-earth-200">Hoạt động chi tiết</h3>
              <div className="space-y-12">
                {experience.activities?.map((act, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                       <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center text-earth-500 font-serif italic text-xl group-hover:bg-terracotta group-hover:text-white transition-colors duration-500 shrink-0">
                         {idx + 1}
                       </div>
                       {idx !== experience.activities.length - 1 && (
                         <div className="w-px h-full bg-earth-200 mt-4" />
                       )}
                    </div>
                    <div className="pb-10">
                      <h4 className="text-2xl serif italic text-earth-900 mb-4">{act.title}</h4>
                      <p className="text-earth-600 mb-6 font-serif italic leading-relaxed">{act.desc}</p>
                      <div className="rounded-sm overflow-hidden premium-shadow max-w-sm">
                         <img src={act.image} alt={act.title} className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Sidebar Gallery & CTA */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-10">
               {/* Small Gallery */}
               {experience.gallery && experience.gallery.length > 0 && (
                 <div className="bg-white p-8 rounded-sm premium-shadow border border-earth-100">
                    <div className="flex items-center gap-3 mb-6">
                       <ImageIcon className="w-5 h-5 text-earth-400" />
                       <h3 className="text-2xl serif italic text-earth-900">Không gian trải nghiệm</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       {experience.gallery.map((img, i) => (
                         <div key={i} className={`rounded-sm overflow-hidden ${i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
                            <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                         </div>
                       ))}
                    </div>
                 </div>
               )}

               {/* Booking CTA */}
               <div className="bg-earth-900 text-white p-10 rounded-sm premium-shadow">
                 <h3 className="text-3xl serif italic mb-4">Bạn đã sẵn sàng?</h3>
                 <p className="text-white/60 text-sm font-serif italic leading-relaxed mb-8">
                   Tham gia cùng chúng tôi để tạo nên những kỷ niệm văn hoá khó quên. 
                 </p>
                 <Link to={`/booking-request/experience/${experience.id}`}>
                   <Button variant="primary" className="w-full bg-white text-earth-900 hover:bg-terracotta hover:text-white border-transparent">
                     Đặt lịch trải nghiệm
                   </Button>
                 </Link>
                 <p className="text-[9px] text-center text-white/40 mt-6 uppercase tracking-widest">Hỗ trợ tư vấn 24/7</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
