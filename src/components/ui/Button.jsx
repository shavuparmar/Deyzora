import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  to, 
  href, 
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 outline-none overflow-hidden select-none whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  
  const variants = {
    primary: "bg-[var(--color-primary)] text-black hover:bg-[var(--color-primary-hover)] shadow-[var(--shadow-glow)]",
    secondary: "bg-[var(--color-bg-surface-light)] text-white hover:bg-white/12 border border-[var(--color-border-subtle)] hover:border-white/20",
    outline: "bg-transparent text-white border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
    ghost: "bg-transparent text-[var(--color-text-gray)] hover:text-white hover:bg-white/5",
    accent: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 shadow-[0_0_20px_rgba(0,112,243,0.3)]",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-12 sm:h-14 px-7 text-sm sm:text-base",
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const MotionWrapper = motion.button;
  const commonProps = {
    className: combinedClasses,
    whileTap: disabled ? {} : { scale: 0.98 },
    whileHover: disabled ? {} : { y: -2 },
    transition: { type: "spring", stiffness: 400, damping: 25 },
    ...props
  };

  if (to) {
    return (
      <Link to={to} className={cn("inline-block", className?.includes("w-full") && "w-full")} tabIndex={-1}>
        <MotionWrapper {...commonProps} tabIndex={0}>
          {children}
        </MotionWrapper>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cn("inline-block", className?.includes("w-full") && "w-full")} tabIndex={-1} target="_blank" rel="noopener noreferrer">
        <MotionWrapper {...commonProps} tabIndex={0}>
          {children}
        </MotionWrapper>
      </a>
    );
  }

  return (
    <MotionWrapper
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...commonProps}
    >
      {children}
    </MotionWrapper>
  );
}
