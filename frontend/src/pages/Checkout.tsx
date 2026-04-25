import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, CreditCard, Wallet, Banknote } from 'lucide-react';
import Button from '@/src/components/ui/Button';
import { products } from '@/src/data';

export default function Checkout() {
  const navigate = useNavigate();
  // Mock cart data
  const cartItem = products[0];
  const quantity = 1;
  const shippingFee = 35000;
  const subtotal = cartItem.price * quantity;
  const total = subtotal + shippingFee;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <div className="bg-earth-50 min-h-screen pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-earth-500 hover:text-terracotta transition-colors text-[10px] uppercase tracking-[0.4em] font-bold mb-12">
          <ArrowLeft className="w-4 h-4" />
          Tiếp tục mua sắm
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Forms */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl serif italic text-earth-900 mb-10">Thông tin thanh toán</h1>
            
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-12">
              
              {/* Personal Info */}
              <section className="bg-white p-8 rounded-sm premium-shadow border border-earth-100">
                <h3 className="text-xl serif italic text-earth-900 mb-6">Thông tin liên hệ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Họ và tên</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Số điện thoại</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm" placeholder="0912 345 678" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm" placeholder="email@example.com" />
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section className="bg-white p-8 rounded-sm premium-shadow border border-earth-100">
                <h3 className="text-xl serif italic text-earth-900 mb-6">Địa chỉ giao hàng</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Địa chỉ cụ thể</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm" placeholder="Số nhà, Tên đường..." />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Tỉnh / Thành phố</label>
                    <select required className="w-full px-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm appearance-none bg-white">
                       <option value="">Chọn Tỉnh/Thành</option>
                       <option>Hà Nội</option>
                       <option>TP. Hồ Chí Minh</option>
                       <option>Đà Nẵng</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Quận / Huyện</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm" placeholder="Nhập Quận/Huyện" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-earth-500">Ghi chú giao hàng (Tuỳ chọn)</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-sm border border-earth-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none text-earth-700 text-sm resize-none"></textarea>
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section className="bg-white p-8 rounded-sm premium-shadow border border-earth-100">
                <h3 className="text-xl serif italic text-earth-900 mb-6">Phương thức thanh toán</h3>
                <div className="space-y-4">
                  <label className="flex items-center p-4 border border-earth-200 rounded-sm cursor-pointer hover:border-terracotta transition-colors has-[:checked]:border-terracotta has-[:checked]:bg-earth-50">
                    <input type="radio" name="payment" value="cod" className="text-terracotta focus:ring-terracotta" defaultChecked />
                    <Banknote className="w-6 h-6 ml-4 text-earth-500" />
                    <span className="ml-4 font-serif text-earth-800">Thanh toán khi nhận hàng (COD)</span>
                  </label>
                  <label className="flex items-center p-4 border border-earth-200 rounded-sm cursor-pointer hover:border-terracotta transition-colors has-[:checked]:border-terracotta has-[:checked]:bg-earth-50">
                    <input type="radio" name="payment" value="card" className="text-terracotta focus:ring-terracotta" />
                    <CreditCard className="w-6 h-6 ml-4 text-earth-500" />
                    <span className="ml-4 font-serif text-earth-800">Thẻ tín dụng / Ghi nợ (Visa, Mastercard)</span>
                  </label>
                  <label className="flex items-center p-4 border border-earth-200 rounded-sm cursor-pointer hover:border-terracotta transition-colors has-[:checked]:border-terracotta has-[:checked]:bg-earth-50">
                    <input type="radio" name="payment" value="momo" className="text-terracotta focus:ring-terracotta" />
                    <Wallet className="w-6 h-6 ml-4 text-pink-500" />
                    <span className="ml-4 font-serif text-earth-800">Ví Momo / ZaloPay</span>
                  </label>
                </div>
              </section>

            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-white p-8 rounded-sm premium-shadow border border-earth-100">
              <h3 className="text-2xl serif italic text-earth-900 mb-8 pb-4 border-b border-earth-100">Tóm tắt đơn hàng</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-sm overflow-hidden shrink-0 border border-earth-100">
                    <img src={cartItem.image} alt={cartItem.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-serif text-earth-900 mb-1 leading-tight">{cartItem.name}</h4>
                    <p className="text-[11px] text-earth-500 uppercase tracking-widest mb-2">Số lượng: {quantity}</p>
                    <p className="font-bold text-earth-800">{cartItem.price.toLocaleString('vi-VN')}₫</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-earth-100 text-sm font-serif">
                <div className="flex justify-between text-earth-600">
                  <span>Tạm tính</span>
                  <span>{subtotal.toLocaleString('vi-VN')}₫</span>
                </div>
                <div className="flex justify-between text-earth-600">
                  <span>Phí vận chuyển</span>
                  <span>{shippingFee.toLocaleString('vi-VN')}₫</span>
                </div>
              </div>

              <div className="flex justify-between items-end pt-6 mt-6 border-t border-earth-200">
                <span className="text-earth-900 font-serif font-bold">Tổng cộng</span>
                <span className="text-3xl text-terracotta font-serif font-bold">{total.toLocaleString('vi-VN')}₫</span>
              </div>

              <div className="mt-10 space-y-4">
                <Button type="submit" form="checkout-form" size="lg" className="w-full py-4 text-sm">
                  Xác nhận đặt hàng
                </Button>
                <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-earth-400">
                  <ShieldCheck className="w-4 h-4 text-terracotta" />
                  <span>Thanh toán an toàn & bảo mật</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
