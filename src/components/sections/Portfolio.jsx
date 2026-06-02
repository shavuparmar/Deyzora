import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { PORTFOLIO } from '../../utils/constants';

const CATEGORIES = ['All', 'Development', 'AI Solutions', 'UI/UX Design', 'Automation', 'SEO'];

/**
 * Portfolio Section Component with dynamic layout filter controls.
 */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden z-20">
      
      {/* Decorative ambient glowing orbs */}
      <span className="absolute left-1/4 bottom-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Our Portfolio"
          title="Selected Masterpieces"
          subtitle="Explore some of our most ambitious and highly optimized web apps, luxury designs, and custom integrations."
        />

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
          {CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 select-none cursor-pointer border ${
                  isActive 
                    ? 'text-white border-brand-purple/30 bg-brand-purple/10 shadow-[0_0_15px_rgba(124,58,237,0.15)] font-semibold' 
                    : 'text-brand-gray border-white/5 bg-white/1 hover:bg-white/5 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Portfolio Dynamic Grid with Rearrange Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  link={project.link}
                  delay={index * 0.05}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
