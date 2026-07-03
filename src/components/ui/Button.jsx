import React, { forwardRef } from'react';
import { motion } from'framer-motion';
import { ArrowRight, Loader2 } from'lucide-react';
import { cn } from'../../utils/cn';

export const Button = forwardRef(({ 
  children, 
  variant ='primary', 
  size ='default',
  isLoading = false, 
  icon = true,
  className,
  disabled,
  ...props 
}, ref) => {
  const baseStyles ="relative group flex items-center justify-center gap-2 rounded-full font-semibold overflow-hidden transition-all duration-300 transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] focus-visible:ring-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50";
  
  const sizes = {
    default:"px-8 py-3.5 text-sm md:text-base",
    sm:"px-4 py-2 text-sm",
    lg:"px-10 py-4 text-base md:text-lg",
    icon:"h-10 w-10 p-0"
  };

  const variants = {
    primary:"bg-[var(--color-accent)] text-white shadow-sm hover:bg-[var(--color-accent-hover)]",
    secondary:"bg-[var(--color-surface)] text-[var(--color-foreground)] hover:bg-[var(--color-surface-hover)] border border-[var(--color-border)] shadow-sm",
    outline:"border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-surface-hover)]",
    ghost:"text-[var(--color-foreground)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-accent)]",
    danger:"bg-[var(--color-error)] text-[var(--color-error-foreground)] hover:bg-red-600 shadow-sm",
    success:"bg-[var(--color-success)] text-[var(--color-success-foreground)] hover:bg-emerald-600 shadow-sm",
    glass:"glass text-[var(--color-foreground)] hover:bg-white/10 border-[var(--color-border)]"
  };

  const isDisabled = disabled || isLoading;

  return (
    <button 
      ref={ref}
      className={cn(baseStyles, sizes[size], variants[variant], className)}
      disabled={isDisabled}
      {...props}
    >

      
      <span className="relative z-10 flex items-center gap-2">
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </span>
      
      {icon && !isLoading && size !=='icon' && (
        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-rotate-45 transition-transform duration-300" />
      )}
    </button>
  );
});

Button.displayName ="Button";
export default Button;
