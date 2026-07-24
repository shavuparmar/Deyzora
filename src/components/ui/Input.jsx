import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export const Input = forwardRef(({ label, error, helperText, className, id, type = 'text', ...props }, ref) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-white/90 flex items-center justify-between">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        type={type}
        className={cn(
          "w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40",
          "focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]",
          "transition-all duration-200 text-sm",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-400 font-medium">{error}</span>}
      {helperText && !error && <span className="text-xs text-white/50">{helperText}</span>}
    </div>
  );
});

Input.displayName = 'Input';
