import React, { useEffect } from'react';
import { motion, AnimatePresence } from'framer-motion';
import { X } from'lucide-react';
import { cn } from'./FormInput';

export const Modal = ({ isOpen, onClose, children, className, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow ='hidden';
    } else {
      document.body.style.overflow ='unset';
    }
    return () => {
      document.body.style.overflow ='unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-all duration-300"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type:"spring", duration: 0.5, bounce: 0 }}
              className={cn("pointer-events-auto relative w-full max-w-lg overflow-hidden rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl p-6",
                className
              )}
            >
              {(title || onClose) && (
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[var(--color-border)]">
                  {title && <h2 className="text-xl font-semibold text-[var(--color-foreground)]">{title}</h2>}
                  {onClose && (
                    <button
                      onClick={onClose}
                      className="ml-auto rounded-full p-2 transition-colors hover:bg-[var(--color-surface-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                    >
                      <X className="h-5 w-5 text-[var(--color-muted-foreground)]" />
                      <span className="sr-only">Close</span>
                    </button>
                  )}
                </div>
              )}
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
