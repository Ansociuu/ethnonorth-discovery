import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  History, Users, Languages, Home, Utensils,
  Sparkles, Hammer, Calendar, ChevronRight, PlayCircle, ArrowLeft, Quote,
  Info, Camera, MapPin, Music
} from 'lucide-react';

import { ethnicGroups, products, tours } from '@/src/data';
import { cn } from '@/src/lib/utils';
import Button from '@/src/components/ui/Button';

const sections = [
  { id: 'overview', title: 'Tổng quan', icon: Info },
  { id: 'history', title: 'Nguồn gốc lịch sử', icon: History },
  { id: 'clothing', title: 'Trang phục & Hoạ tiết', icon: Camera },
  { id: 'housing', title: 'Kiến trúc nhà ở', icon: Home },
  { id: 'food', title: 'Tinh hoa ẩm thực', icon: Utensils },
  { id: 'beliefs', title: 'Tín ngưỡng & Tâm linh', icon: Sparkles },
  { id: 'crafts', title: 'Nghề truyền thống', icon: Hammer },
  { id: 'art', title: 'Nghệ thuật & Lễ hội', icon: Music },
];

export default function EthnicDetail() {
  const { id } = useParams();
  const ethnic = ethnicGroups?.find(e => e?.id === id);
  const [activeTab, setActiveTab] = useState('overview');
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

  if (!ethnic) return (
    <div className="pt-40 text-center h-screen bg-earth-50 flex flex-col items-center justify-center">
      <h2 className="serif text-4xl mb-8">Không tìm thấy dữ liệu di sản.</h2>
      <Link to="/ethnic">
        <Button variant="outline">Quay lại danh sách</Button>
      </Link>
    </div>
  );

  const relatedProducts = products?.filter(p => p?.ethnic === ethnic?.name).slice(0, 2) || [];
  const relatedTours = tours?.slice(0, 2) || [];

  return (
    <div className="bg-earth-50 min-h-screen pb-32">
      {/* Premium Hero with Parallax */}
      <div ref={heroRef} className="h-[85vh] relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          <img
            src={ethnic?.image}
            className="w-full h-full object-cover scale-105"
            alt={ethnic?.name}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-950/40 via-earth-950/20 to-earth-50" />

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
            <Link to="/ethnic" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-[10px] uppercase tracking-[0.4em] font-bold bg-white/10 px-6 py-2 rounded-full backdrop-blur-md border border-white/20">
              <ArrowLeft className="w-4 h-4" />
              Khám phá các dân tộc khác
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-8xl md:text-[10rem] lg:text-[14rem] mb-6 italic serif leading-none tracking-tight drop-shadow-2xl"
          >
            {ethnic?.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/90 uppercase tracking-[0.6em] font-medium text-xs md:text-sm drop-shadow-lg"
          >
            {ethnic?.shortDesc || "Những đứa con của tự nhiên"}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">Cuộn để khám phá</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>

      {/* Quick Facts Bar */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="glass border border-white/40 rounded-sm p-8 flex flex-col md:flex-row justify-between items-center gap-8 premium-shadow"
        >
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-earth-500 font-bold mb-2">Nhóm ngôn ngữ</span>
            <span className="serif italic text-2xl text-earth-900">{ethnic?.name === 'H’Mông' ? 'H’Mông - Dao' : 'Hệ Tạng Miến'}</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-earth-200" />
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-earth-500 font-bold mb-2">Dân số ước tính</span>
            <span className="serif italic text-2xl text-earth-900">{ethnic?.name === 'H’Mông' ? 'Hơn 1.3 triệu' : 'Khoảng 890,000'}</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-earth-200" />
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-earth-500 font-bold mb-2">Địa bàn cư trú</span>
            <span className="serif italic text-2xl text-earth-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-terracotta" />
              Đông Bắc & Tây Bắc
            </span>
          </div>
        </motion.div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Sticky Sidebar Navigation */}
          <aside className="lg:w-1/4 shrink-0">
            <div className="sticky top-32 space-y-12">
              <div>
                <h3 className="serif text-4xl mb-8 italic text-earth-900">Mục lục di sản</h3>
                <div className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveTab(section.id)}
                        className={cn(
                          "w-full flex items-center justify-between px-6 py-4 rounded-sm transition-all text-left group border",
                          activeTab === section.id
                            ? "bg-earth-900 text-white border-earth-900 shadow-xl ml-2"
                            : "bg-white text-earth-700 border-earth-100 hover:border-earth-300 hover:bg-earth-50"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <Icon className={cn(
                            "w-4 h-4 transition-colors",
                            activeTab === section.id ? "text-gold" : "text-earth-400 group-hover:text-earth-600"
                          )} />
                          <span className="text-[10px] uppercase font-bold tracking-[0.2em]">{section.title}</span>
                        </div>
                        <ChevronRight className={cn(
                          "w-4 h-4 transition-transform",
                          activeTab === section.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                        )} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar Call to Action */}
              <div className="bg-earth-100/50 p-8 rounded-sm border border-earth-200/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                <h4 className="serif italic text-2xl mb-4 text-earth-900">Cảm nhận thực tế</h4>
                <p className="text-sm text-earth-600 leading-relaxed mb-6">
                  Đừng chỉ đọc qua màn hình, hãy đến và chạm vào nhịp sống thực sự của người {ethnic?.name}.
                </p>
                <Link to="/experiences">
                  <Button variant="primary" className="w-full text-[10px]">Xem tour trải nghiệm</Button>
                </Link>
              </div>
            </div>
          </aside>

          {/* Dynamic Content Area */}
          <main className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-8 md:p-16 lg:p-24 rounded-sm premium-shadow border border-earth-100 min-h-[600px]"
              >
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 border-b border-earth-100 pb-12">
                  <div className="w-20 h-20 bg-earth-50 rounded-full flex items-center justify-center border border-earth-200 shrink-0">
                    {(() => {
                      const activeSection = sections.find(s => s.id === activeTab);
                      if (activeSection) {
                        const Icon = activeSection.icon;
                        return <Icon className="w-8 h-8 text-earth-800" />;
                      }
                      return null;
                    })()}
                  </div>
                  <div>
                    <span className="text-terracotta font-bold text-[10px] uppercase tracking-[0.4em] mb-3 block">Khám phá chiều sâu</span>
                    <h2 className="text-5xl md:text-6xl serif italic text-earth-900">{sections.find(s => s.id === activeTab)?.title}</h2>
                  </div>
                </div>

                {/* --- CONTENT RENDERER --- */}
                <div className="prose prose-earth max-w-none">

                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="space-y-12">
                      <p className="text-2xl md:text-3xl text-earth-800 font-serif italic leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-terracotta first-letter:mr-3 first-letter:float-left">
                        {ethnic?.description || "Nép mình giữa những dãy núi điệp trùng mây phủ, cộng đồng dân tộc nơi đây mang trong mình một sức sống mãnh liệt, hòa quyện tuyệt đẹp cùng thiên nhiên hùng vĩ."}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        <img
                          src="http://redsvn.net/wp-content/uploads/2021/08/1200px-Wietnam2C_Sapa2C_StrC3B3j_ludowy_trzech_kobiet.jpg"
                          className="w-full h-80 object-cover rounded-sm shadow-lg"
                          alt="Overview 1"
                        />
                        <img
                          src="https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf43696082611593d4091ddd874bc6072c0621b9c3c8a291b8e99863f05ded9da1ef441ab205af163e0c64faf45df3dca2f569955f72d5498793ce918e4d5f298c3cde0554b762/xuanbenthem-ngmanhhai-1463.jpg.avif"
                          className="w-full h-80 object-cover rounded-sm shadow-lg"
                          alt="Overview 2"
                        />
                      </div>
                    </div>
                  )}

                  {/* HISTORY */}
                  {activeTab === 'history' && (
                    <div className="space-y-16">
                      <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2 space-y-10">
                          <p className="text-2xl md:text-3xl text-earth-800 leading-relaxed font-serif italic first-letter:text-7xl first-letter:font-bold first-letter:text-terracotta first-letter:mr-4 first-letter:float-left">
                            {ethnic?.history?.origin || `Hành trình của người ${ethnic?.name} là bản anh hùng ca về sự kiên cường và khát vọng sống mãnh liệt.`}
                          </p>
                          <div className="relative group aspect-[4/5] md:aspect-[16/10] lg:aspect-square rounded-sm overflow-hidden shadow-2xl border-[12px] border-white">
                            <img
                              src={ethnic?.id === 'hmong'
                                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Hmong_diaspora.png/500px-Hmong_diaspora.png"
                                : "https://baotangvanhoc.vn/wp-content/uploads/2022/01/Nom-Dao-1536x1152.jpg"
                              }
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                              alt="Dấu ấn lịch sử"
                            />
                            <div className="absolute inset-0 bg-earth-900/10 group-hover:bg-transparent transition-colors" />
                          </div>
                        </div>

                        <div className="lg:w-1/2 py-4 ml-6 lg:ml-0 border-l-2 border-earth-100 pl-12 space-y-20 relative">
                          {/* Animated Dot Background */}
                          <div className="absolute top-0 bottom-0 -left-[2px] w-[2px] bg-gradient-to-b from-terracotta via-earth-200 to-transparent" />

                          {ethnic?.history?.milestones?.map((ms, idx) => (
                            <div key={idx} className="relative group">
                              <div className={cn(
                                "absolute -left-[56px] top-2 w-5 h-5 rounded-full bg-white border-4 border-earth-100 transition-all duration-500",
                                "group-hover:border-terracotta group-hover:scale-125 z-10"
                              )} />
                              <div className="absolute -left-[56px] top-2 w-5 h-5 rounded-full bg-terracotta/20 animate-ping opacity-0 group-hover:opacity-100" />

                              <h4 className="text-3xl md:text-4xl serif italic mb-6 text-earth-900 group-hover:text-terracotta transition-colors">
                                {ms?.year}
                              </h4>
                              <p className="text-earth-600 text-lg md:text-xl leading-relaxed font-serif">
                                {ms?.event}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CLOTHING */}
                  {activeTab === 'clothing' && (
                    <div className="space-y-12">
                      <p className="text-xl text-earth-700 leading-relaxed font-serif italic mb-10">
                        Trang phục không chỉ là để mặc, mà là một cuốn từ điển sống về thế giới quan, nhân sinh quan và kỹ thuật thủ công điêu luyện. Những hoạ tiết sáp ong, những đường chỉ thêu tay chứa đựng cả một bầu trời văn hoá.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="col-span-1 md:col-span-2 aspect-[4/3] rounded-sm overflow-hidden group">
                          <img src="https://static-images.vanhoanghethuat.vn/datasite///201807/BAI_VIET_16858/Untitled12.jpg?width=0&s=--iMiQoM-YrLAnfgIdYcSA" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Thêu thùa" />
                        </div>
                        <div className="col-span-1 aspect-[3/4] md:aspect-auto rounded-sm overflow-hidden group">
                          <img src="https://static-images.vanhoanghethuat.vn/datasite///201807/BAI_VIET_16858/Untitled1y(1).jpg?width=0&s=spuZCLR_Akr-0fL_YFoplg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Trang phục" />
                        </div>
                      </div>
                      <div className="bg-earth-50 p-8 rounded-sm mt-8 border border-earth-100">
                        <h4 className="serif italic text-2xl mb-4 text-earth-900">Nghệ thuật thêu và nhuộm chàm</h4>
                        <p className="text-earth-600 text-sm leading-relaxed">
                          Quá trình tạo ra một bộ trang phục truyền thống có thể mất hàng tháng ròng rã. Từ việc trồng lanh, tước sợi, dệt vải, nhuộm chàm nhiều lần cho đến khi đạt được sắc xanh đen huyền bí, và cuối cùng là thêu tay những hoạ tiết hình học phức tạp mà không cần bản mẫu.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* HOUSING */}
                  {activeTab === 'housing' && (
                    <div className="space-y-10">
                      <div className="relative aspect-[21/9] rounded-sm overflow-hidden mb-12">
                        <img src="https://static-3.happynest.vn/storage/uploads/2025/08/nha-trinh-tuong-cua-nguoi-mong-tu-dat-nen-den-hinh-mau-kien-truc-ban-dia-doc-dao_4.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Kiến trúc" />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-8 left-8 right-8">
                          <h4 className="text-white text-4xl serif italic drop-shadow-md">Hoà hợp cùng thiên nhiên</h4>
                        </div>
                      </div>
                      <p className="text-xl text-earth-700 leading-relaxed font-serif italic border-l-2 border-earth-200 pl-6">
                        Tuỳ thuộc vào địa hình và khí hậu, người {ethnic?.name} có những thiết kế kiến trúc đặc trưng, từ nhà trệt trình tường đất sét giữ ấm mùa đông, mát mùa hè, đến những nếp nhà sàn vững chãi trên lưng chừng triền dốc.
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                        <li className="bg-earth-50 p-8 rounded-sm">
                          <Home className="w-8 h-8 text-terracotta mb-4" />
                          <h5 className="text-xl serif italic font-bold mb-3">Cấu trúc không gian</h5>
                          <p className="text-sm text-earth-600 leading-relaxed">Không gian sống được chia thành các khu vực rõ ràng: nơi tiếp khách, bếp lửa trung tâm (trái tim của ngôi nhà) và không gian tâm linh.</p>
                        </li>
                        <li className="bg-earth-50 p-8 rounded-sm">
                          <Hammer className="w-8 h-8 text-gold mb-4" />
                          <h5 className="text-xl serif italic font-bold mb-3">Vật liệu tự nhiên</h5>
                          <p className="text-sm text-earth-600 leading-relaxed">Sử dụng hoàn toàn vật liệu từ tự nhiên: gỗ rừng, tre nứa, cỏ tranh và đất sét, tạo nên sự gắn kết hữu cơ với cảnh quan xung quanh.</p>
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* FOOD */}
                  {activeTab === 'food' && (
                    <div className="space-y-12">
                      <p className="text-2xl font-serif italic text-earth-800 text-center max-w-2xl mx-auto leading-relaxed mb-16">
                        "Ẩm thực không chỉ là thức ăn, nó là sự đúc kết kinh nghiệm sinh tồn và sự trân trọng món quà mà rừng xanh ban tặng."
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
                        {(ethnic?.culture?.food || [
                          { name: 'Đặc sản núi rừng', desc: 'Những món ăn chế biến từ nguyên liệu tự nhiên, mang đậm hương vị nguyên bản.', image: 'https://images.unsplash.com/photo-1543739446-402a5d211830?auto=format&fit=crop&q=80&w=800' }
                        ]).map((item, idx) => (
                          <div key={idx} className="group">
                            <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 shadow-md relative">
                              <div className="absolute inset-0 bg-earth-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                              <img src={item?.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item?.name} />
                            </div>
                            <h4 className="text-3xl serif italic text-earth-900 mb-3">{item?.name}</h4>
                            <p className="text-earth-600 text-sm leading-relaxed">{item?.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* BELIEFS */}
                  {activeTab === 'beliefs' && (
                    <div className="bg-earth-900 text-white rounded-sm p-12 md:p-20 relative overflow-hidden shadow-2xl">
                      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
                      <Sparkles className="w-16 h-16 text-gold mb-12 opacity-80" />
                      <h3 className="text-5xl md:text-6xl serif italic leading-tight mb-8">Vạn vật hữu linh</h3>
                      <p className="text-xl md:text-2xl text-earth-200 font-serif italic leading-relaxed max-w-3xl">
                        {ethnic?.culture?.beliefs || `Niềm tin sâu sắc rằng mỗi cái cây, tảng đá, con suối đều có linh hồn. Sự tôn kính thiên nhiên và tổ tiên là kim chỉ nam cho mọi hành động trong cuộc sống thường nhật.`}
                      </p>
                      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-16">
                        <div>
                          <h5 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Nghi lễ vòng đời</h5>
                          <p className="text-earth-300 text-sm leading-relaxed">Từ khi sinh ra, trưởng thành, lập gia đình cho đến khi về với thế giới bên kia, mỗi giai đoạn đều được đánh dấu bằng những nghi lễ thiêng liêng.</p>
                        </div>
                        <div>
                          <h5 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Thầy cúng & Pháp sư</h5>
                          <p className="text-earth-300 text-sm leading-relaxed">Những người giữ vai trò kết nối cộng đồng với thế giới thần linh, gìn giữ tri thức y học cổ truyền và các bài cúng cổ xưa.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CRAFTS */}
                  {activeTab === 'crafts' && (
                    <div className="space-y-16">
                      <div className="flex flex-wrap gap-4 mb-10">
                        {(ethnic?.crafts || ['Dệt thổ cẩm', 'Chạm khắc mộc', 'Đan lát']).map(craft => (
                          <span key={craft} className="px-5 py-2.5 bg-earth-100 text-earth-800 rounded-full text-xs font-bold uppercase tracking-wider">
                            {craft}
                          </span>
                        ))}
                      </div>

                      <div className="bg-earth-50 border border-earth-100 p-10 md:p-16 rounded-sm relative">
                        <Quote className="absolute top-10 left-10 w-24 h-24 text-earth-200 -z-0" />
                        <div className="relative z-10 max-w-2xl mx-auto text-center">
                          <h4 className="text-3xl md:text-4xl serif italic mb-8 leading-tight text-earth-900">
                            "Bàn tay người phụ nữ làm ra sắc màu, bàn tay người đàn ông tạo nên hình hài."
                          </h4>
                          <p className="text-earth-600 italic text-lg leading-relaxed mb-10 font-serif">
                            Sản phẩm thủ công không chỉ là vật dụng, chúng là những tác phẩm nghệ thuật mang đậm dấu ấn cá nhân và mã gen văn hoá của cả một dân tộc.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-16">
                        {/* Video 1: Weaving */}
                        <div className="space-y-6">
                          <div className="aspect-video bg-earth-900 rounded-sm relative overflow-hidden group shadow-2xl border border-earth-200">
                            <video
                              src="https://res.cloudinary.com/drvjjrsah/video/upload/v1777071075/videoplayback_1_l239xd.mp4"
                              className="w-full h-full object-cover"
                              autoPlay
                              muted
                              loop
                              playsInline
                              controls
                              preload="metadata"
                            />
                          </div>
                          <div className="flex items-center justify-center gap-3">
                            <div className="h-px w-8 bg-earth-200" />
                            <p className="text-earth-600 italic font-serif text-lg tracking-wide">
                              Phụ nữ dân tộc dệt thổ cẩm bên khung cửi truyền thống
                            </p>
                            <div className="h-px w-8 bg-earth-200" />
                          </div>
                        </div>

                        {/* Video 2: Blacksmithing */}
                        <div className="space-y-6">
                          <div className="aspect-video bg-earth-900 rounded-sm relative overflow-hidden group shadow-2xl border border-earth-200">
                            <video
                              src="https://res.cloudinary.com/drvjjrsah/video/upload/v1777071332/0425_1_oqngqt.mp4"
                              className="w-full h-full object-cover"
                              autoPlay
                              muted
                              loop
                              playsInline
                              controls
                              preload="metadata"
                            />
                          </div>
                          <div className="flex items-center justify-center gap-3">
                            <div className="h-px w-8 bg-earth-200" />
                            <p className="text-earth-600 italic font-serif text-lg tracking-wide">
                              Kỹ nghệ rèn đúc thủ công tinh xảo
                            </p>
                            <div className="h-px w-8 bg-earth-200" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ART & FESTIVALS */}
                  {activeTab === 'art' && (
                    <div className="space-y-24">
                      {/* Festival Highlight Banner */}
                      <div className="relative group overflow-hidden rounded-sm shadow-2xl">
                        <div className="aspect-[21/9] w-full">
                          <img
                            src="https://mia.vn/media/uploads/blog-du-lich/le-hoi-gau-tao-sapa-co-dieu-gi-ma-dac-biet-den-vay-3-1623688085.jpg"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            alt="Festival Hero"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/90 via-earth-950/30 to-transparent flex flex-col justify-end p-12 md:p-16">
                          <div className="flex items-center gap-4 mb-6">
                            <Calendar className="w-6 h-6 text-gold" />
                            <span className="text-gold font-bold text-[10px] uppercase tracking-[0.4em]">Sự kiện văn hoá tiêu biểu</span>
                          </div>
                          <h3 className="text-white text-5xl md:text-6xl serif italic mb-6 leading-tight">Lễ hội di sản đặc sắc</h3>
                          <p className="text-white/80 text-xl md:text-2xl font-serif italic max-w-3xl leading-relaxed">
                            {ethnic?.culture?.festivals || "Những ngày hội rực rỡ sắc màu, nơi âm nhạc và vũ điệu hòa quyện cùng niềm tin tâm linh sâu sắc."}
                          </p>
                        </div>
                      </div>

                      {/* Cultural Arts Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                        <div className="space-y-10">
                          <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-xl relative group">
                            <img src="https://mia.vn/media/uploads/blog-du-lich/le-hoi-gau-tao-sapa-co-dieu-gi-ma-dac-biet-den-vay-1-1623688084.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Dance" />
                            <div className="absolute inset-0 bg-earth-950/20 group-hover:bg-transparent transition-colors" />
                          </div>
                          <div className="space-y-6">
                            <div className="flex items-center gap-4 text-terracotta">
                              <Music className="w-6 h-6" />
                              <span className="uppercase text-[10px] font-bold tracking-[0.4em]">Nghệ thuật biểu diễn</span>
                            </div>
                            <h4 className="text-4xl serif italic text-earth-900 leading-tight">Vũ điệu & Nhạc cụ truyền thống</h4>
                            <p className="text-earth-600 leading-relaxed italic font-serif text-xl">
                              Tiếng khèn, tiếng sáo không chỉ là âm nhạc, mà là tiếng lòng của người dân gửi gắm vào đại ngàn bao la qua bao thế hệ.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-10 md:mt-32">
                          <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-xl relative group">
                            <img src="https://mia.vn/media/uploads/blog-du-lich/cho-phien-4-1702951823.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Art" />
                            <div className="absolute inset-0 bg-earth-950/20 group-hover:bg-transparent transition-colors" />
                          </div>
                          <div className="space-y-6">
                            <div className="flex items-center gap-4 text-terracotta">
                              <Users className="w-6 h-6" />
                              <span className="uppercase text-[10px] font-bold tracking-[0.4em]">Đời sống cộng đồng</span>
                            </div>
                            <h4 className="text-4xl serif italic text-earth-900 leading-tight">Chợ phiên & Giao thoa văn hoá</h4>
                            <p className="text-earth-600 leading-relaxed italic font-serif text-xl">
                              Không gian sống động nhất để cảm nhận trọn vẹn hơi thở văn hoá qua từng sắc áo, nụ cười và hương vị ẩm thực vùng cao.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Editorial Quote Section */}
                      <div className="bg-earth-900 text-white p-16 md:p-24 rounded-sm text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/10 rounded-full blur-[80px] -ml-32 -mb-32" />

                        <Quote className="w-12 h-12 text-gold/40 mx-auto mb-10" />
                        <h3 className="text-3xl md:text-4xl serif italic text-white/90 leading-relaxed max-w-3xl mx-auto relative z-10">
                          "Nghệ thuật là cách chúng tôi lưu giữ linh hồn dân tộc, biến những điều giản dị nhất thành di sản trường tồn với thời gian."
                        </h3>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            </AnimatePresence>

            {/* RELATED SECTIONS (Products & Tours) */}
            <div className="mt-24 space-y-24">
              {/* Experiences */}
              <div className="space-y-10">
                <div className="flex justify-between items-end border-b border-earth-200 pb-6">
                  <div>
                    <h3 className="text-3xl serif italic text-earth-900">Trải nghiệm di sản</h3>
                    <p className="text-earth-500 text-sm mt-2">Hành trình khám phá văn hoá {ethnic?.name}</p>
                  </div>
                  <Link to="/experiences" className="text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta hover:text-earth-900 transition-colors">
                    Xem tất cả &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedTours.map(tour => (
                    <Link key={tour?.id} to={`/experiences/${tour?.id}`} className="group block">
                      <div className="aspect-[16/10] overflow-hidden rounded-sm mb-4">
                        <img src={tour?.image} alt={tour?.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <h4 className="serif text-xl text-earth-900 mb-2 group-hover:text-terracotta transition-colors">{tour?.name}</h4>
                      <p className="text-earth-500 text-xs uppercase tracking-wider">{tour?.duration}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Shop */}
              {relatedProducts.length > 0 && (
                <div className="space-y-10">
                  <div className="flex justify-between items-end border-b border-earth-200 pb-6">
                    <div>
                      <h3 className="text-3xl serif italic text-earth-900">Sản phẩm thủ công</h3>
                      <p className="text-earth-500 text-sm mt-2">Được tạo ra từ bàn tay nghệ nhân {ethnic?.name}</p>
                    </div>
                    <Link to="/shop" className="text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta hover:text-earth-900 transition-colors">
                      Đến cửa hàng &rarr;
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedProducts.map(product => (
                      <Link key={product?.id} to={`/shop/${product?.id}`} className="group flex gap-6 items-center p-4 rounded-sm hover:bg-earth-100 transition-colors">
                        <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm">
                          <img src={product?.image} alt={product?.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                        </div>
                        <div>
                          <p className="text-[10px] text-earth-500 uppercase tracking-widest mb-1">{product?.category}</p>
                          <h4 className="serif text-lg text-earth-900 group-hover:text-terracotta transition-colors">{product?.name}</h4>
                          <p className="text-sm font-bold text-earth-700 mt-2">{product?.price?.toLocaleString('vi-VN')} đ</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
