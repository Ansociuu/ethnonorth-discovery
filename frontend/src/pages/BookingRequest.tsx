import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Compass, Users, Calendar, MapPin, CheckCircle2, Clock } from 'lucide-react';
import Button from '@/src/components/ui/Button';
import { tours, experiences } from '@/src/data';

export default function BookingRequest() {
  const navigate = useNavigate();
  const { type, id } = useParams();
  
  // Find item based on type
  const item = type === 'experience' 
    ? experiences.find(e => e.id === id)
    : tours.find(t => t.id === id);

  const [guests, setGuests] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success');
  };

  if (!item) {
    return (
      <div className="pt-40 text-center h-screen bg-earth-50 flex flex-col items-center justify-center">
        <h2 className="serif text-4xl mb-8">Không tìm thấy dịch vụ.</h2>
        <Link to="/">
          <Button variant="outline">Về trang chủ</Button>
        </Link>
      </div>
    );
  }

  // Handle both tour and experience data shapes
  const price = 'price' in item ? item.price : 500000; // Mock price for experiences if they don't have one
  const duration = 'duration' in item ? item.duration : 'N/A';
  const location = 'locations' in item ? item.locations.join(', ') : item.location;
  const total = price * guests;

  return (
    <div className="bg-earth-50 min-h-screen pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-earth-500 hover:text-terracotta transition-colors text-[10px] uppercase tracking-[0.4em] font-bold mb-12">
          <ArrowLeft className="w-4 h-4" />
          Quay lại
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Forms */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl serif italic text-earth-900 mb-4">Yêu cầu đặt chỗ</h1>
            <p className="text-earth-600 font-serif italic mb-10">Vui lòng cung cấp thông tin để chúng tôi chuẩn bị chu đáo nhất cho chuyến đi của bạn.</p>
            
            <form id="booking-form" onSubmit={handleSubmit} className="space-y-12">
              
              {/* Trip Details */}
              <section className="bg-white p-8 rounded-sm premium-shadow border border-earth-100">
                <h3 className="text-xl serif italic text-earth-900 mb-6 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-terracotta" /> Chi tiết chuyến đi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Ngày khởi hành dự kiến</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                      <input required type="date" className="w-full pl-12 pr-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Số lượng khách</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                      <select 
                        required 
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="w-full pl-12 pr-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm appearance-none bg-white"
                      >
                         {[1,2,3,4,5,6,7,8,9,10].map(n => (
                           <option key={n} value={n}>{n} Khách</option>
                         ))}
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Lead Traveler Info */}
              <section className="bg-white p-8 rounded-sm premium-shadow border border-earth-100">
                <h3 className="text-xl serif italic text-earth-900 mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-terracotta" /> Thông tin người đại diện
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Họ và tên</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm" placeholder="Nhập họ và tên người đại diện" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Số điện thoại</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm" placeholder="0912 345 678" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm" placeholder="email@example.com" />
                  </div>
                </div>
              </section>

              {/* Special Requests */}
              <section className="bg-white p-8 rounded-sm premium-shadow border border-earth-100">
                <h3 className="text-xl serif italic text-earth-900 mb-6">Yêu cầu đặc biệt (Tuỳ chọn)</h3>
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Ví dụ: Chế độ ăn kiêng, yêu cầu phòng, xe lăn...</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm resize-none" placeholder="Nhập yêu cầu của bạn tại đây..."></textarea>
                </div>
              </section>

            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-white p-8 rounded-sm premium-shadow border border-earth-100">
              <h3 className="text-2xl serif italic text-earth-900 mb-8 pb-4 border-b border-earth-100">Tóm tắt dịch vụ</h3>
              
              <div className="mb-8">
                <div className="aspect-[16/9] rounded-sm overflow-hidden mb-6">
                  <img src={item.image || (item as any).images?.[0]} alt={'name' in item ? item.name : (item as any).title} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-2xl serif italic text-earth-900 mb-4">{'name' in item ? item.name : (item as any).title}</h4>
                <div className="space-y-3">
                   <div className="flex items-center gap-3 text-earth-600 text-sm font-serif">
                     <Clock className="w-4 h-4 text-terracotta" /> {duration}
                   </div>
                   <div className="flex items-center gap-3 text-earth-600 text-sm font-serif">
                     <MapPin className="w-4 h-4 text-terracotta" /> {location}
                   </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-earth-100 text-sm font-serif bg-earth-50/50 p-4 rounded-sm">
                <div className="flex justify-between text-earth-700">
                  <span>Giá mỗi khách</span>
                  <span className="font-bold">{price.toLocaleString('vi-VN')}₫</span>
                </div>
                <div className="flex justify-between text-earth-700">
                  <span>Số lượng</span>
                  <span className="font-bold">x {guests}</span>
                </div>
              </div>

              <div className="flex justify-between items-end pt-6 mt-6 border-t border-earth-200">
                <span className="text-earth-900 font-serif font-bold">Tổng chi phí dự kiến</span>
                <span className="text-3xl text-terracotta font-serif font-bold">{total.toLocaleString('vi-VN')}₫</span>
              </div>
              
              <div className="mt-4 flex items-start gap-2 text-earth-500 text-[11px] leading-relaxed">
                 <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                 <span>Chưa bao gồm VAT. Việc gửi yêu cầu hoàn toàn miễn phí. Tư vấn viên sẽ liên hệ để xác nhận chỗ trống và hướng dẫn thanh toán.</span>
              </div>

              <div className="mt-10 space-y-4">
                <Button type="submit" form="booking-form" size="lg" className="w-full py-4 text-sm">
                  Gửi yêu cầu đặt chỗ
                </Button>
                <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-earth-400">
                  <ShieldCheck className="w-4 h-4 text-terracotta" />
                  <span>Bảo mật thông tin khách hàng</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
