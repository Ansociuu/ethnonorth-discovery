import React from 'react';
import { motion } from 'motion/react';
import { Quote, MessageSquare, Users } from 'lucide-react';
import Button from '@/src/components/ui/Button';

const communityStories = [
  {
    name: 'Sùng A Phủ',
    role: 'Chủ Homestay tại Tả Phìn',
    story: 'Hơn 10 năm trước tôi về quê, mong muốn giữ lại nếp nhà cổ của cha ông. Giờ đây, ngôi nhà đã trở thành nơi dừng chân cho hàng ngàn du khách quốc tế muốn tìm hiểu về văn hoá Dao Đỏ.',
    image: 'https://images.unsplash.com/photo-1543739446-402a5d211830?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Lý Thị May',
    role: 'Nghệ nhân dệt lanh',
    story: 'Con gái H’Mong chúng tôi ai cũng phải biết dệt lanh. Đó là hồn cốt của dân tộc. Tôi đã dạy nghề cho hơn 40 chị em trong bản để cùng nhau giữ nghề và tăng thêm thu nhập.',
    image: 'https://images.unsplash.com/photo-1555543714-3aee565b0907?auto=format&fit=crop&q=80&w=400',
  },
];

export default function Community() {
  return (
    <div className="pt-32 pb-24 bg-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">Kết nối cộng đồng</h1>
          <p className="text-earth-600 text-lg italic">Những câu chuyện từ chính những người dân bản địa - những người giữ lửa và truyền tải di sản vùng cao.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {communityStories.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-sm shadow-xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
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
                    <span>Xem câu chuyện đầy đủ</span>
                 </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Community */}
        <div className="bg-earth-950 rounded-sm p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden">
           <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <Users className="w-16 h-16 text-earth-500 mx-auto" />
              <h2 className="text-4xl md:text-5xl italic">Bản làng đang chờ đón bạn</h2>
              <p className="text-earth-300 text-lg leading-relaxed italic">
                 "Một ngày làm người bản địa" không chỉ là trải nghiệm, đó là sự sẻ chia và thấu hiểu. Hãy cùng chúng tôi xây dựng một cộng đồng du lịch bền vững và có trách nhiệm.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6">
                 <Button size="lg" className="w-full md:w-auto px-12">Tham gia cộng đồng</Button>
                 <Button variant="outline" size="lg" className="w-full md:w-auto text-white border-white/20 hover:bg-white/10">Viết câu chuyện của bạn</Button>
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
