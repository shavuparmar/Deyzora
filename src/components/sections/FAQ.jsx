import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { FAQS } from '../../utils/constants';

/**
 * FAQ Accordion Item Component.
 */
function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <GlassCard
      hoverable={false}
      className={`border transition-all duration-300 ${
        isOpen ? 'border-brand-purple/30 bg-brand-purple/5 shadow-[0_10px_25px_-5px_rgba(124,58,237,0.1)]' : 'border-white/5 bg-white/1 hover:border-white/10'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer select-none"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-bold text-white pr-4">
          {question}
        </span>
        <span className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-purple/20 border-brand-purple/30' : ''}`}>
          {isOpen ? <FiMinus className="w-4 h-4 text-brand-purple" /> : <FiPlus className="w-4 h-4" />}
        </span>
      </button>

      {/* Animated unfolding answer box */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-6 text-brand-gray text-xs sm:text-sm font-light leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

/**
 * FAQ Section Component.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden z-20">
      
      {/* Decorative ambient glowing orbs */}
      <span className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Clear answers about our design system processes, technical frameworks, AI consulting, and project sync routines."
        />

        {/* FAQ Accordion list container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
