import React, { forwardRef } from'react';
import { cn } from'./FormInput';

export const FormTextarea = forwardRef(({ className, error, ...props }, ref) => {
  return (
    <textarea
      className={cn("flex min-h-[120px] w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-input)] px-4 py-3 text-base md:text-sm text-[var(--color-foreground)] transition-all duration-200","placeholder:text-[var(--color-muted-foreground)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:border-transparent focus:bg-[var(--color-surface-hover)]","disabled:cursor-not-allowed disabled:opacity-50","resize-y",
        error &&"border-[var(--color-error)] focus-visible:ring-[var(--color-error)]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
FormTextarea.displayName ="FormTextarea";
