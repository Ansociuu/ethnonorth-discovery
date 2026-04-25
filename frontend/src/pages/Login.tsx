import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Eye, EyeOff, User } from 'lucide-react';
import heroBg from '@/src/assets/images/hero_section.jpg';
import logo from '@/src/assets/brand/logo.png';
import { cn } from '@/src/lib/utils';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login for now
    if (email && password) {
      // Mock successful login
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-earth-950 font-sans selection:bg-terracotta/30 selection:text-white">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-950 via-earth-950/90 to-earth-950/50" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
        {/* Left Side: Brand & Visuals */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 flex flex-col items-start justify-center pr-0 md:pr-16 mb-12 md:mb-0"
        >
          <Link to="/" className="flex items-center gap-4 mb-12 group inline-block">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-auto brightness-0 invert transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="serif text-2xl font-bold tracking-tight text-white">
              EthnoNorth <span className="font-light opacity-60">Discovery</span>
            </div>
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
            Hành trình văn hóa<br/>
            <span className="italic font-light text-terracotta">bắt đầu từ đây.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-md leading-relaxed">
            Đăng nhập để lưu lại những trải nghiệm yêu thích, quản lý lịch trình và khám phá câu chuyện của các dân tộc vùng cao.
          </p>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-[450px]"
        >
          <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden backdrop-blur-xl border border-white/10 bg-white/5">
            {/* Subtle glow effect behind the form */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-terracotta/20 blur-[80px] rounded-full pointer-events-none" />

            <div className="mb-10 text-center relative z-10">
              <h2 className="text-3xl font-serif text-white mb-2">Chào mừng trở lại</h2>
              <p className="text-white/60 text-sm">Vui lòng đăng nhập vào tài khoản của bạn</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6 relative z-10">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white/80 ml-1">Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-white/40 group-focus-within:text-terracotta transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all placeholder:text-white/20"
                    placeholder="nguyenvana@example.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/80">Mật khẩu</label>
                  <a href="#" className="text-xs text-terracotta hover:text-white transition-colors">Quên mật khẩu?</a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-white/40 group-focus-within:text-terracotta transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-12 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all placeholder:text-white/20"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5 text-terracotta focus:ring-terracotta/50 focus:ring-offset-earth-950"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/60">
                  Ghi nhớ đăng nhập
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-4 bg-terracotta hover:bg-terracotta-dark text-white rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(193,101,73,0.4)] hover:-translate-y-1"
              >
                <span>Đăng nhập</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Register Link */}
            <div className="mt-8 text-center relative z-10">
              <p className="text-sm text-white/60">
                Chưa có tài khoản?{' '}
                <Link to="/register" className="text-white font-semibold hover:text-terracotta transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
