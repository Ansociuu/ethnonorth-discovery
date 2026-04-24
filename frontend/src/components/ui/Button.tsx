import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}



export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-terracotta text-white shadow-lg hover:shadow-terracotta/20',
    secondary: 'bg-indigo text-white shadow-lg hover:shadow-indigo/20',
    outline: 'border border-earth-200 text-earth-900 hover:bg-earth-50',
    ghost: 'text-earth-600 hover:bg-earth-100 hover:text-earth-900',
    glass: 'glass text-earth-900 hover:bg-white/90',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-[10px]',
    md: 'px-8 py-3.5 text-[11px]',
    lg: 'px-12 py-5 text-xs',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={cn(
        'inline-flex items-center justify-center rounded-sm font-bold uppercase tracking-[0.2em] transition-all focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
