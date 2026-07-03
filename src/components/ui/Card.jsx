import React, { forwardRef } from'react';
import { cn } from'./FormInput';

export const Card = forwardRef(({ className, glass = false, hover = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-2xl border text-[var(--color-foreground)] transition-all duration-300 overflow-hidden",
      glass 
        ? "bg-[var(--color-surface)] backdrop-blur-xl border-[var(--color-glass-border)] shadow-sm"
        : "bg-[var(--color-surface)] border-[var(--color-border)] shadow-sm",
      hover && "hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)]",
      className
    )}
    {...props}
  />
));
Card.displayName ="Card";

export const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName ="CardHeader";

export const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName ="CardTitle";

export const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[var(--color-muted-foreground)]", className)}
    {...props}
  />
));
CardDescription.displayName ="CardDescription";

export const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName ="CardContent";

export const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName ="CardFooter";
