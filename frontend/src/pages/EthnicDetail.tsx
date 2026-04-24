import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History, Users, Languages, Home, Utensils, 
  Sparkles, Hammer, Calendar, Map, ChevronRight, PlayCircle, ArrowLeft
} from 'lucide-react';
import { ethnicGroups } from '@/src/data';
import { cn } from '@/src/lib/utils';
import Button from '@/src/components/ui/Button';

const sections = [
  { id: 'history', title: 'Nguồn gốc lịch sử', icon: History },
  { id: 'groups', title: 'Nhánh dân tộc', icon: Users },
  { id: 'language', title: 'Ngôn ngữ & Chữ viết', icon: Languages },
  { id: 'housing', title: 'Kiến trúc nhà ở', icon: Home },
  { id: 'food', title: 'Tinh hoa ẩm thực', icon: Utensils },
  { id: 'beliefs', title: 'Tín ngưỡng & Tâm linh', icon: Sparkles },
  { id: 'crafts', title: 'Nghề thủ công', icon: Hammer },
  { id: 'festivals', title: 'Lễ hội đặc sắc', icon: Calendar },
];

export default function EthnicDetail() {
  const { id } = useParams();
  const ethnic = ethnicGroups.find(e => e.id === id);
  const [activeTab, setActiveTab] = useState('history');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!ethnic) return (
    <div className="pt-40 text-center h-screen bg-earth-50">
      <h2 className="serif text-4xl mb-8">Không tìm thấy dữ liệu dân tộc.</h2>
      <Link to="/ethnic">
        <Button variant="outline">Quay lại danh sách</Button>
      </Link>
    </div>
  );

  return (
    <div className="bg-earth-50 min-h-screen pb-32">
      {/* Premium Hero */}
      <div className="h-[75vh] relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={ethnic.image} 
          className="w-full h-full object-cover" 
          alt={ethnic.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-950/20 via-earth-950/40 to-earth-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
             <Link to="/ethnic" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-[10px] uppercase tracking-[0.4em] font-bold">
               <ArrowLeft className="w-4 h-4" />
               Quay lại khám phá
             </Link>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-7xl md:text-9xl lg:text-[12rem] mb-6 italic serif leading-none"
          >
            {ethnic.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 uppercase tracking-[0.6em] font-medium text-xs md:text-sm"
          >
            Những đứa con của gió và núi
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 bg-white p-10 rounded-sm premium-shadow border border-earth-100">
              <h3 className="serif text-3xl mb-10 pb-6 border-b border-earth-100 italic">Mục lục di sản</h3>
              <div className="space-y-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-6 py-5 rounded-sm transition-all text-left group",
                      activeTab === section.id 
                        ? "bg-earth-900 text-white shadow-xl translate-x-2" 
                        : "hover:bg-earth-50 text-earth-700"
                    )}
                  >
                    <div className="flex items-center space-x-4">
                      <section.icon className={cn(
                        "w-5 h-5",
                        activeTab === section.id ? "text-gold" : "text-earth-300 group-hover:text-earth-500"
                      )} />
                      <span className="text-[11px] uppercase font-bold tracking-widest">{section.title}</span>
                    </div>
                    <ChevronRight className={cn(
                      "w-4 h-4 transition-transform",
                      activeTab === section.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    )} />
                  </button>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-earth-100">
                 <div className="bg-earth-50 p-6 rounded-sm">
                    <p className="text-xs text-earth-500 italic leading-relaxed mb-6">
                      Bạn muốn trải nghiệm trực tiếp văn hoá {ethnic.name}?
                    </p>
                    <Button variant="secondary" className="w-full text-[10px]">Đặt tour văn hoá</Button>
                 </div>
              </div>
            </div>
          </aside>

          {/* Dynamic Content Area */}
          <main className="lg:w-2/3 bg-white p-10 md:p-20 rounded-sm premium-shadow border border-earth-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-16"
              >
                {/* Section Header */}
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-earth-50 rounded-full flex items-center justify-center premium-shadow">
                    {sections.find(s => s.id === activeTab)?.icon({ className: "w-8 h-8 text-earth-900" })}
                  </div>
                  <div>
                    <span className="text-terracotta font-bold text-[9px] uppercase tracking-[0.4em] mb-2 block">Kiến thức chuyên sâu</span>
                    <h2 className="text-5xl serif italic">{sections.find(s => s.id === activeTab)?.title}</h2>
                  </div>
                </div>

                {/* Section Content */}
                <div className="prose prose-earth max-w-none">
                  {activeTab === 'history' && (
                    <div className="space-y-10">
                      <p className="text-2xl text-earth-800 font-serif italic leading-relaxed border-l-4 border-earth-100 pl-10">
                        Lịch sử của người {ethnic.name} là bản anh hùng ca về sự kiên cường và lòng yêu tự do. Trải qua những cuộc di cư vĩ đại, họ đã chọn những đỉnh núi cao nhất làm quê hương.
                      </p>
                      <div className="py-12 border-l-2 border-earth-100 ml-4 pl-12 space-y-16">
                        <div className="relative">
                          <div className="absolute -left-[57px] top-0 w-6 h-6 rounded-full bg-white border-4 border-earth-900 shadow-lg" />
                          <h4 className="text-2xl serif italic mb-4">Giai đoạn khởi thuỷ</h4>
                          <p className="text-earth-600 leading-relaxed italic">Những cộng đồng đầu tiên hình thành tại vùng bình nguyên phía Bắc trước khi bắt đầu hành trình chinh phục các dãy núi cao.</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[57px] top-0 w-6 h-6 rounded-full bg-white border-4 border-earth-400 shadow-lg" />
                          <h4 className="text-2xl serif italic mb-4">Định cư & Thích nghi</h4>
                          <p className="text-earth-600 leading-relaxed italic">Xác lập kỹ thuật canh tác ruộng bậc thang và rèn đúc, tạo nên nền tảng kinh tế vững chắc cho các bản làng trên mây.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'groups' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {ethnic.subgroups.map((group, idx) => (
                        <div key={group} className="group flex flex-col h-full bg-earth-50/30 border border-earth-100 p-8 rounded-sm card-hover">
                          <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8 shadow-md">
                             <img 
                              src={`https://images.unsplash.com/photo-${1543739446 + idx * 100}-402a5d211830?auto=format&fit=crop&q=80&w=800`} 
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                              alt={group} 
                            />
                          </div>
                          <h4 className="text-3xl serif italic mb-4">{group}</h4>
                          <p className="text-earth-600 text-sm italic font-serif leading-relaxed">
                            Mỗi nhánh có những đặc trưng riêng biệt trong cách thêu thùa, vấn khăn và các nghi lễ thờ cúng tổ tiên.
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'food' && (
                    <div className="space-y-16">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          <div className="space-y-6">
                             <div className="aspect-video overflow-hidden rounded-sm premium-shadow">
                                <img src="https://images.unsplash.com/photo-1543739446-402a5d211830?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Thắng cố" />
                             </div>
                             <h4 className="text-3xl serif italic">Thắng cố & Rượu ngô</h4>
                             <p className="text-earth-600 text-sm italic font-serif leading-relaxed">Món ăn mang đậm hơi thở của núi rừng, là sự kết hợp của thảo quả, quế và các loại gia vị đặc hữu.</p>
                          </div>
                          <div className="space-y-6">
                             <div className="aspect-video overflow-hidden rounded-sm premium-shadow">
                                <img src="https://images.unsplash.com/photo-1555543714-3aee565b0907?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Mèn mén" />
                             </div>
                             <h4 className="text-3xl serif italic">Mèn mén (Cơm ngô)</h4>
                             <p className="text-earth-600 text-sm italic font-serif leading-relaxed">Món ăn truyền thống thay cơm, được đồ công phu từ những hạt ngô nương ngon nhất.</p>
                          </div>
                       </div>
                    </div>
                  )}

                  {activeTab === 'crafts' && (
                    <div className="space-y-16">
                      <div className="bg-earth-900 text-white p-12 md:p-20 rounded-sm relative overflow-hidden premium-shadow">
                         <div className="relative z-10 max-w-xl">
                            <Quote className="w-12 h-12 text-gold/20 mb-8" />
                            <h4 className="text-4xl serif italic mb-8 leading-tight">"Mỗi đường kim mũi chỉ là một lời kể về cuộc đời."</h4>
                            <p className="text-earth-300 italic text-xl leading-relaxed mb-10 font-serif">
                              Chúng tôi không chỉ dệt vải, chúng tôi đang viết tiếp câu chuyện của tổ tiên lên từng tấm thổ cẩm chàm.
                            </p>
                            <div className="flex items-center space-x-6">
                              <div className="w-16 h-16 rounded-full border-2 border-gold/30 overflow-hidden bg-earth-800">
                                 <img src="https://images.unsplash.com/photo-1543739446-402a5d211830?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover opacity-60" />
                              </div>
                              <div>
                                 <p className="text-xl serif italic font-bold">Bà Vàng Thị Mai</p>
                                 <p className="text-[9px] text-gold uppercase tracking-[0.2em] font-bold">Nghệ nhân ưu tú</p>
                              </div>
                            </div>
                         </div>
                         <PlayCircle className="absolute top-1/2 right-12 -translate-y-1/2 w-48 h-48 text-white/5 pointer-events-none" />
                      </div>
                    </div>
                  )}

                  {/* Fallback for empty sections */}
                  {!['history', 'groups', 'food', 'crafts'].includes(activeTab) && (
                     <div className="py-32 text-center space-y-8 bg-earth-50/50 rounded-sm border border-dashed border-earth-200">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <Sparkles className="w-16 h-16 text-earth-200 mx-auto" />
                        </motion.div>
                        <div className="space-y-2">
                           <p className="text-earth-800 serif text-2xl italic">Đang cập nhật di sản...</p>
                           <p className="text-earth-400 text-sm italic font-serif">Các chuyên gia văn hoá đang hoàn thiện dữ liệu cho mục này.</p>
                        </div>
                     </div>
                  )}
                </div>

                <div className="pt-20 border-t border-earth-100 flex flex-col sm:flex-row justify-between items-center gap-8">
                  <Link to="/ethnic" className="text-earth-400 hover:text-earth-900 transition-colors uppercase tracking-[0.3em] text-[10px] font-bold flex items-center gap-3">
                    <ArrowLeft className="w-4 h-4" />
                    Quay lại danh sách
                  </Link>
                  <Button variant="secondary" className="w-full sm:w-auto">Khám phá trải nghiệm liên quan</Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
