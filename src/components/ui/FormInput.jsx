import React, { forwardRef } from'react';
import { clsx } from'clsx';
import { twMerge } from'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const FormInput = forwardRef(({ 
  className, 
  type ='text', 
  error, 
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...props 
}, ref) => {
  return (
    <div className="relative w-full">
      {LeftIcon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)]">
          <LeftIcon className="h-5 w-5" />
        </div>
      )}
      <input
        type={type}
        className={cn("flex h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-input)] px-4 py-2 text-base md:text-sm text-[var(--color-foreground)] transition-all duration-200","file:border-0 file:bg-transparent file:text-sm file:font-medium","placeholder:text-[var(--color-muted-foreground)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:border-transparent focus:bg-[var(--color-surface-hover)]","disabled:cursor-not-allowed disabled:opacity-50",
          LeftIcon &&"pl-11",
          RightIcon &&"pr-11",
          error &&"border-[var(--color-error)] focus-visible:ring-[var(--color-error)]",
          className
        )}
        ref={ref}
        {...props}
      />
      {RightIcon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)]">
          <RightIcon className="h-5 w-5" />
        </div>
      )}
    </div>
  );
});
FormInput.displayName ="FormInput";
