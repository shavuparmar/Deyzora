import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function Card({ 
  children, 
  className,
  hover = true,
  glass = true,
  ...props 
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "relative rounded-3xl overflow-hidden border border-[var(--color-border-subtle)]",
        glass ? "glass-card" : "bg-[var(--color-bg-surface)]",
        className
      )}
      {...props}
    >
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
