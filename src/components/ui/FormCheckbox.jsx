import React, { forwardRef } from'react';
import { cn } from'./FormInput';

export const FormCheckbox = forwardRef(({ className, label, description, error, id, ...props }, ref) => {
  const generatedId = id || Math.random().toString(36).substring(7);
  
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-6 items-center">
        <input
          type="checkbox"
          id={generatedId}
          ref={ref}
          className={cn("peer h-5 w-5 appearance-none rounded-md border border-[var(--color-border)] bg-[var(--color-input)] transition-all","checked:bg-[var(--color-accent)] checked:border-[var(--color-accent)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]","disabled:cursor-not-allowed disabled:opacity-50",
            error &&"border-[var(--color-error)]",
            className
          )}
          {...props}
        />
        {/* Custom checkmark icon overlay for modern look */}
        <svg 
          className="absolute h-5 w-5 pointer-events-none opacity-0 peer-checked:opacity-100 text-[var(--color-accent-foreground)] stroke-current"
          viewBox="0 0 24 24" 
          fill="none" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      {(label || description) && (
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={generatedId}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[var(--color-foreground)] cursor-pointer mt-0.5"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm text-[var(--color-muted-foreground)]">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
});
FormCheckbox.displayName ="FormCheckbox";

export const FormRadio = forwardRef(({ className, label, description, error, id, ...props }, ref) => {
  const generatedId = id || Math.random().toString(36).substring(7);
  
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-6 items-center">
        <input
          type="radio"
          id={generatedId}
          ref={ref}
          className={cn("peer h-5 w-5 appearance-none rounded-full border border-[var(--color-border)] bg-[var(--color-input)] transition-all","checked:border-[var(--color-accent)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]","disabled:cursor-not-allowed disabled:opacity-50",
            error &&"border-[var(--color-error)]",
            className
          )}
          {...props}
        />
        {/* Custom radio dot overlay */}
        <div className="absolute h-2.5 w-2.5 rounded-full pointer-events-none opacity-0 peer-checked:opacity-100 bg-[var(--color-accent)] translate-x-[5px]" />
      </div>
      {(label || description) && (
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={generatedId}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[var(--color-foreground)] cursor-pointer mt-0.5"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm text-[var(--color-muted-foreground)]">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
});
FormRadio.displayName ="FormRadio";
