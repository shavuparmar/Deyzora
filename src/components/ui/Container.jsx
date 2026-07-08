import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Container({ className, children, as: Component = 'div', ...props }) {
  return (
    <Component 
      className={cn(
        "w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8",
        className
      )} 
      {...props}
    >
      {children}
    </Component>
  );
}
