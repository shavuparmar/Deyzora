import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const variants = {
  primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] border border-transparent shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]',
  secondary: 'bg-[var(--color-secondary)] text-white hover:opacity-90 border border-transparent',
  outline: 'bg-transparent text-white border border-[var(--color-border-subtle)] hover:border-[var(--color-border-hover)] hover:bg-white/5',
  ghost: 'bg-transparent text-[var(--color-text-gray)] hover:text-white hover:bg-white/5 border border-transparent',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  default: 'px-5 py-2.5 text-sm font-medium',
  lg: 'px-8 py-3.5 text-base font-medium',
  icon: 'w-10 h-10 flex items-center justify-center',
};

const Button = forwardRef(({ className, variant = 'primary', size = 'default', asChild = false, to, href, children, ...props }, ref) => {
  const compClass = cn(
    'inline-flex items-center justify-center rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={compClass} ref={ref} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={compClass} ref={ref} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={compClass} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
