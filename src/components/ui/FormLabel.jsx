import React, { forwardRef } from'react';
import { cn } from'./FormInput';

export const FormLabel = forwardRef(({ className, children, required, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[var(--color-foreground)] mb-2 block",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-[var(--color-error)] ml-1">*</span>}
    </label>
  );
});
FormLabel.displayName ="FormLabel";

export const FormError = forwardRef(({ className, children, ...props }, ref) => {
  if (!children) return null;
  
  return (
    <p
      ref={ref}
      className={cn("text-[13px] font-medium text-[var(--color-error)] mt-1.5 animate-in", className)}
      {...props}
    >
      {children}
    </p>
  );
});
FormError.displayName ="FormError";
