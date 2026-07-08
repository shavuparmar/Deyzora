import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Card = forwardRef(({ className, children, ...props }, ref) => (
  <div 
    ref={ref}
    className={cn(
      "bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-2xl overflow-hidden",
      className
    )} 
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";

export { Card };
