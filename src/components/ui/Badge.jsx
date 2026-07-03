import React, { forwardRef } from'react';
import { cn } from'./FormInput';

export const Badge = forwardRef(({ className, variant ="default", ...props }, ref) => {
  const variants = {
    default:"bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary)]/80",
    secondary:"bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-secondary)]/80",
    outline:"text-[var(--color-foreground)] border border-[var(--color-border)] hover:bg-[var(--color-surface)]",
    success:"bg-[var(--color-success)] text-[var(--color-success-foreground)] hover:bg-[var(--color-success)]/80",
    danger:"bg-[var(--color-error)] text-[var(--color-error-foreground)] hover:bg-[var(--color-error)]/80",
    warning:"bg-[var(--color-warning)] text-[var(--color-warning-foreground)] hover:bg-[var(--color-warning)]/80",
  };

  return (
    <div
      ref={ref}
      className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName ="Badge";
