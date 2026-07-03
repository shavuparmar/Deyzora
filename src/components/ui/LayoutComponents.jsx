import React, { forwardRef } from'react';
import { cn } from'./FormInput';

export const Container = forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
Container.displayName ="Container";

export const Section = forwardRef(({ className, id, children, ...props }, ref) => (
  <section
    ref={ref}
    id={id}
    className={cn("relative py-16 md:py-24 lg:py-32",
      className
    )}
    {...props}
  >
    {children}
  </section>
));
Section.displayName ="Section";
