import React, { forwardRef } from'react';
import { ChevronDown } from'lucide-react';
import { cn } from'./FormInput'; // reuse cn utility

export const FormSelect = forwardRef(({ 
  className, 
  error, 
  leftIcon: LeftIcon,
  children,
  ...props 
}, ref) => {
  return (
    <div className="relative w-full">
      {LeftIcon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] pointer-events-none">
          <LeftIcon className="h-5 w-5" />
        </div>
      )}
      <select
        className={cn("flex h-12 w-full appearance-none rounded-xl border border-[var(--color-border)] bg-[var(--color-input)] px-4 py-2 text-base md:text-sm text-[var(--color-foreground)] transition-all duration-200","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:border-transparent focus:bg-[var(--color-surface-hover)]","disabled:cursor-not-allowed disabled:opacity-50","cursor-pointer",
          /* The options inherit the background color of the select, which fixes white dropdowns in most browsers */
          LeftIcon ?"pl-11 pr-10" :"pr-10",
          error &&"border-[var(--color-error)] focus-visible:ring-[var(--color-error)]",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
      
      {/* Custom Dropdown Arrow */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] pointer-events-none">
        <ChevronDown className="h-5 w-5" />
      </div>
    </div>
  );
});
FormSelect.displayName ="FormSelect";

export const FormSelectOption = ({ children, className, ...props }) => {
  return (
    <option 
      className={cn("bg-[var(--color-surface)] text-[var(--color-foreground)] py-2", className)} 
      {...props}
    >
      {children}
    </option>
  );
};
