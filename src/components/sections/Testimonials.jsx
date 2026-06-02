import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { TESTIMONIALS } from '../../utils/constants';

/**
 * Testimonials Section Component with an interactive client review slider.
 */
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden z-20">
      
      {/* Decorative ambient glowing orbs */}
      <span className="absolute left-0 bottom-1/4 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Testimonials"
          title="What Leaders Say About Us"
          subtitle="Discover how we help fast-growing SaaS startups and businesses build their future products."
        />

        {/* Testimonial Slider Wrapper */}
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white focus:outline-none hover:bg-brand-purple/20 hover:border-brand-purple/40 hover:scale-105 active:scale-95 transition-all duration-300 hidden md:flex cursor-pointer"
            aria-label="Previous Review"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Slider Card */}
          <div className="w-full relative min-h-[350px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <GlassCard hoverable={false} className="p-8 md:p-12 border border-white/5 shadow-2xl relative flex flex-col justify-between h-full bg-white/1">
                  
                  {/* Decorative glowing quote tag */}
                  <span className="absolute right-8 top-6 font-display font-black text-white/5 text-8xl pointer-events-none">
                    “
                  </span>

                  <div>
                    {/* Star Rating list */}
                    <div className="flex gap-1.5 mb-6 text-yellow-400">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <FiStar key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Client quote */}
                    <blockquote className="text-white text-base sm:text-lg md:text-xl font-light italic leading-relaxed mb-8">
                      “{activeTestimonial.quote}”
                    </blockquote>
                  </div>

                  {/* Client Profile details */}
                  <div className="flex items-center gap-4 mt-auto">
                    {/* Avatar */}
                    <img 
                      src={activeTestimonial.avatar} 
                      alt={activeTestimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-brand-purple/40 shadow-lg"
                    />
                    
                    {/* Metadata */}
                    <div>
                      <cite className="not-italic text-sm font-bold text-white font-display block">
                        {activeTestimonial.author}
                      </cite>
                      <span className="text-xs text-brand-gray font-light">
                        {activeTestimonial.role}, <span className="text-brand-purple">{activeTestimonial.company}</span>
                      </span>
                    </div>
                  </div>

                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white focus:outline-none hover:bg-brand-purple/20 hover:border-brand-purple/40 hover:scale-105 active:scale-95 transition-all duration-300 hidden md:flex cursor-pointer"
            aria-label="Next Review"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Navigation Controls Row (Arrows for mobile, dots for all) */}
        <div className="flex flex-col items-center gap-6 mt-10">
          
          {/* Mobile Arrows row */}
          <div className="flex gap-4 md:hidden">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
              aria-label="Previous Review Mobile"
            >
              <FiChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
              aria-label="Next Review Mobile"
            >
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Navigation Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index 
                    ? 'w-6 bg-brand-purple shadow-[0_0_8px_rgba(124,58,237,0.5)]' 
                    : 'w-2 bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
