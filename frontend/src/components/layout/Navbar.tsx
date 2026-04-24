import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import logo from '@/src/assets/brand/logo.png';

const navLinks = [
  { name: 'Trang chá»§', href: '/' },
  { name: 'DÃ¢n tá»™c', href: '/ethnic' },
  { name: 'Äiá»ƒm Ä‘áº¿n', href: '/destinations' },
  { name: 'Tráº£i nghiá»‡m', href: '/experiences' },
  { name: 'Cá»­a hÃ ng', href: '/shop' },
  { name: 'Äáº·t tour', href: '/booking' },
  { name: 'Cá»™ng Ä‘á»“ng', href: '/community' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
        scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={cn(
              "serif text-2xl font-bold tracking-[-0.05em] transition-colors duration-500",
              scrolled ? "text-earth-950" : "text-white"
            )}>
              DISCOVERY<span className="font-light opacity-50">.VN</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'nav-link relative py-1 group',
                  scrolled ? 'text-earth-900' : 'text-white/90 hover:text-white',
                  location.pathname === link.href ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-[1.5px] bg-current transition-all duration-500 group-hover:w-full",
                  location.pathname === link.href && "w-full"
                )} />
              </Link>
            ))}

            <div className="flex items-center space-x-4 ml-4">
              <button className={cn(
                "p-2 rounded-full transition-all duration-300 hover:scale-110",
                scrolled ? "text-earth-900 hover:bg-earth-100" : "text-white hover:bg-white/10"
              )}>
                <Search className="w-4 h-4" />
              </button>
              <button className={cn(
                "flex items-center space-x-2 px-5 py-2.5 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all duration-300",
                scrolled
                  ? "bg-earth-900 text-white hover:bg-earth-800"
                  : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20"
              )}>
                <User className="w-3.5 h-3.5" />
                <span>TÃ i khoáº£n</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'p-2 rounded-full transition-all',
                scrolled ? 'text-earth-950 hover:bg-earth-100' : 'text-white hover:bg-white/10'
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden bg-earth-950 flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="serif text-2xl text-white font-bold tracking-tight">DISCOVERY<span className="font-light opacity-50">.VN</span></div>
              <button onClick={() => setIsOpen(false)} className="text-white p-2">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl serif italic text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/10">
              <button className="w-full py-4 bg-terracotta text-white font-bold uppercase tracking-widest text-xs rounded-sm">
                ÄÄƒng nháº­p / ÄÄƒng kÃ½
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
