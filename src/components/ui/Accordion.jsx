import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left gap-4 group"
      >
        <span className="text-base sm:text-lg font-medium text-white group-hover:text-[var(--color-accent)] transition-colors">
          {question}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300",
          isOpen && "rotate-180 bg-[var(--color-accent)]/20 border-[var(--color-accent)]/40 text-[var(--color-accent)]"
        )}>
          <ChevronDown className="w-4 h-4 text-white/70" />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-base text-[var(--color-text-gray)] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ items, allowMultiple = false, className }) {
  const [openIndexes, setOpenIndexes] = useState([0]);

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn("bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
