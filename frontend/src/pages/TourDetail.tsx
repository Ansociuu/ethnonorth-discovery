import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, MapPin, ArrowLeft, CheckCircle2, XCircle, Calendar, Users, Compass } from 'lucide-react';
import { tours } from '@/src/data';
import Button from '@/src/components/ui/Button';

export default function TourDetail() {
  const { id } = useParams();
  const tour = tours.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tour) {
    return (
      <div className="pt-40 text-center h-screen bg-earth-50 flex flex-col items-center justify-center">
        <h2 className="serif text-4xl mb-8">Không tìm thấy tour.</h2>
        <Link to="/booking">
          <Button variant="outline">Quay lại danh sách</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-earth-50 min-h-screen pb-32">
      {/* Hero Section */}
      <div className="h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={tour.image}
            className="w-full h-full object-cover"
            alt={tour.name}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-20 z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/booking" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-[10px] uppercase tracking-[0.4em] font-bold">
              <ArrowLeft className="w-4 h-4" />
              Tất cả hành trình
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-5xl md:text-7xl italic serif leading-tight drop-shadow-lg mb-6"
              >
                {tour.name}
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-6"
              >
                 <span className="flex items-center gap-2 text-white/80 font-serif italic text-lg">
                    <Clock className="w-5 h-5 text-terracotta" /> {tour.duration}
                 </span>
                 <span className="flex items-center gap-2 text-white/80 font-serif italic text-lg">
                    <MapPin className="w-5 h-5 text-terracotta" /> {tour.locations.join(' - ')}
                 </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl serif italic text-earth-900 mb-6">Tổng quan hành trình</h2>
              <p className="text-earth-700 font-serif italic leading-relaxed text-lg">
                {tour.longDescription}
              </p>
            </section>

            {/* Gallery Mini */}
            {tour.gallery && (
              <section>
                 <div className="grid grid-cols-3 gap-4">
                    {tour.gallery.map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-sm overflow-hidden premium-shadow">
                        <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      </div>
                    ))}
                 </div>
              </section>
            )}

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl serif italic text-earth-900 mb-10 pb-4 border-b border-earth-200">Lịch trình chi tiết</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-earth-200 before:to-transparent">
                {tour.itinerary?.map((item, idx) => (
                  <div key={idx} className="relative flex items-start md:justify-between md:odd:flex-row-reverse group is-active">
                     {/* Marker */}
                     <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-earth-50 bg-terracotta shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                     
                     {/* Content */}
                     <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-sm premium-shadow border border-earth-100 ml-6 md:ml-0">
                       <h4 className="text-xl serif font-bold text-earth-900 mb-3">{item.day}</h4>
                       <p className="text-earth-600 font-serif leading-relaxed text-sm">{item.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Included & Excluded */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-sm premium-shadow border border-earth-100">
               <div>
                  <h3 className="text-xl serif italic text-earth-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" /> Bao gồm
                  </h3>
                  <ul className="space-y-3">
                    {tour.included?.map((inc, i) => (
                      <li key={i} className="text-sm text-earth-700 font-serif flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span> {inc}
                      </li>
                    ))}
                  </ul>
               </div>
               <div>
                  <h3 className="text-xl serif italic text-earth-900 mb-6 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-400" /> Không bao gồm
                  </h3>
                  <ul className="space-y-3">
                    {tour.excluded?.map((exc, i) => (
                      <li key={i} className="text-sm text-earth-700 font-serif flex items-start gap-2">
                        <span className="text-red-400 mt-1">×</span> {exc}
                      </li>
                    ))}
                  </ul>
               </div>
            </section>
          </div>

          {/* Right Column: Sticky Booking Form */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-white p-8 rounded-sm premium-shadow border border-earth-100">
              <h3 className="text-3xl serif italic text-earth-900 mb-2">Đặt chỗ</h3>
              <p className="text-4xl text-terracotta font-serif font-bold mb-8">{tour.price.toLocaleString('vi-VN')}₫ <span className="text-sm text-earth-500 font-normal">/ khách</span></p>

              <div className="space-y-6">
                 <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500 mb-2">Ngày khởi hành</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                      <input type="date" className="w-full pl-10 pr-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm" />
                    </div>
                 </div>

                 <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500 mb-2">Số người</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                      <select className="w-full pl-10 pr-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm appearance-none">
                         <option>1 Khách</option>
                         <option>2 Khách</option>
                         <option>3 Khách</option>
                         <option>4+ Khách (Liên hệ tư vấn)</option>
                      </select>
                    </div>
                 </div>

                 <div className="pt-4">
                    <Link to={`/booking-request/tour/${tour.id}`} className="block">
                      <Button variant="primary" className="w-full py-4 text-sm flex justify-center items-center gap-2">
                        <Compass className="w-4 h-4" /> Yêu cầu đặt tour
                      </Button>
                    </Link>
                 </div>
                 
                 <p className="text-[10px] text-center text-earth-400 italic">
                   Không thu phí khi gửi yêu cầu. Tư vấn viên sẽ liên hệ với bạn trong vòng 2 giờ.
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
