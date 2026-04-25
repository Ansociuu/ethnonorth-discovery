import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Home, ShoppingBag, Heart } from 'lucide-react';
import Button from '@/src/components/ui/Button';

export default function Success() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-earth-50 min-h-screen pt-32 pb-32 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-10 premium-shadow"
        >
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl serif italic text-earth-900 mb-6 leading-tight"
        >
          Cảm ơn bạn đã đồng hành <br /> cùng di sản
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-earth-600 text-lg font-serif italic leading-relaxed mb-12 max-w-lg mx-auto"
        >
          Yêu cầu của bạn đã được ghi nhận thành công. 
          Mỗi sự ủng hộ của bạn đều góp phần gìn giữ những giá trị văn hoá bản địa vô giá của người dân vùng cao Tây Bắc.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/">
            <Button variant="secondary" className="w-full sm:w-auto px-8 flex items-center justify-center gap-2 text-sm">
              <Home className="w-4 h-4" /> Về trang chủ
            </Button>
          </Link>
          <Link to="/shop">
            <Button variant="outline" className="w-full sm:w-auto px-8 flex items-center justify-center gap-2 text-sm">
              <ShoppingBag className="w-4 h-4" /> Tiếp tục khám phá
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-10 border-t border-earth-200 flex items-center justify-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] text-earth-400"
        >
          <Heart className="w-3.5 h-3.5 text-terracotta" />
          Tự hào văn hoá Việt Nam
        </motion.div>
      </div>
    </div>
  );
}
