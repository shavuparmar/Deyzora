import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiCpu, FiTrendingUp, FiCheckCircle, FiServer, FiGlobe } from 'react-icons/fi';
import GradientButton from '../ui/GradientButton';
import GlassCard from '../ui/GlassCard';
import { STATISTICS } from '../../utils/constants';
import { FADE_UP, STAGGER_CONTAINER, SCALE_IN, FADE_RIGHT } from '../../hooks/useScrollAnimation';

/**
 * Enhanced Hero Section Component with complex parallel animations and high-telemetry SaaS console.
 */
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-36 pb-24 overflow-hidden bg-brand-dark">
      
      {/* Background Grid Mesh */}
      <div className="absolute inset-0 grid-mesh opacity-25 z-0 pointer-events-none" />

      {/* Futuristic Floating Ambient Orbs (GPU accelerated animations) */}
      <motion.div 
        animate={{ 
          y: [0, -25, 0], 
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="absolute top-1/6 left-1/12 w-[380px] h-[380px] bg-brand-purple/20 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 25, 0], 
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.2, 0.12]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay: 1 
        }}
        className="absolute bottom-1/6 right-1/12 w-[420px] h-[420px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Block with Staggered Slide In */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER_CONTAINER}
            className="lg:col-span-7 text-left flex flex-col justify-center"
          >
            {/* Tech Pill Badge */}
            <motion.div 
              variants={FADE_UP}
              className="inline-flex items-center self-start gap-2 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-purple bg-brand-purple/10 border border-brand-purple/20 mb-6 shadow-[0_0_15px_rgba(124,58,237,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
              <span>Next-Gen Systems & UI Studio</span>
            </motion.div>

            {/* Main Title Heading */}
            <motion.h1 
              variants={FADE_UP}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6"
            >
              Building Future-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-[#A78BFA] to-brand-blue">
                Digital Experiences
              </span>
            </motion.h1>

            {/* Subheadline Details */}
            <motion.p 
              variants={FADE_UP}
              className="text-brand-gray text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mb-8"
            >
              Deyzora designs, develops, and deploys high-converting SaaS systems, premium cross-platform applications, bespoke AI integrations, and high-performance technical SEO architectures tailored for scaling startups.
            </motion.p>

            {/* Feature Checkpoints */}
            <motion.div 
              variants={FADE_UP}
              className="flex flex-wrap gap-x-6 gap-y-3 mb-10 text-xs sm:text-sm text-brand-light/95 font-light"
            >
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-brand-purple" />
                <span>React 19 & Next.js Core</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-brand-blue" />
                <span>Bespoke Custom AI Architectures</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-brand-purple" />
                <span>Performance-Driven Lighthouse Audits</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={FADE_UP}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <GradientButton href="#contact" variant="primary">
                Launch Workspace <FiArrowRight className="w-4 h-4" />
              </GradientButton>
              <GradientButton href="#portfolio" variant="secondary">
                Explore Showcase <FiPlay className="w-3.5 h-3.5 ml-1 text-brand-blue" />
              </GradientButton>
            </motion.div>

            {/* Micro Statistics */}
            <motion.div 
              variants={FADE_UP}
              className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/5 pt-8 max-w-lg"
            >
              {STATISTICS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-brand-gray font-semibold uppercase tracking-widest mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Dashboard Console Mockup (Parallel scale/fade) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={SCALE_IN}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            {/* Visual Glassmorphic Console with Rotating Glow Rim */}
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl bg-white/5 border border-white/10 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden" style={{ backdropFilter: 'blur(16px)' }}>
              
              {/* Spinning background neon slice */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-tr from-brand-purple/30 via-transparent to-brand-blue/30 opacity-40 pointer-events-none"
                style={{ margin: '-20px' }}
              />

              {/* Console Inner Overlay to hide overflow */}
              <div className="absolute inset-[1px] bg-brand-dark/95 rounded-[22px] z-0" />

              {/* Top Navigation Window Bar */}
              <div className="relative z-10 flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/50" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/50" />
                  <span className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500/50" />
                </div>
                <div className="px-3 py-1 rounded-md bg-white/5 text-[9px] font-mono text-brand-purple/90 border border-white/5 select-none">
                  deyzora-telemetry-console.sh
                </div>
              </div>

              {/* Grid content inside console */}
              <div className="relative z-10 grid grid-cols-3 gap-4 mb-4">
                {/* Metric 1 */}
                <GlassCard hoverable={false} className="p-3 bg-white/2 border border-white/5 rounded-2xl flex flex-col justify-between">
                  <span className="text-[9px] text-brand-gray font-light uppercase tracking-wider">Edge Status</span>
                  <span className="text-xs font-bold text-white mt-1 flex items-center gap-1.5">
                    <FiServer className="w-3.5 h-3.5 text-brand-purple" /> Active
                  </span>
                </GlassCard>
                {/* Metric 2 */}
                <GlassCard hoverable={false} className="p-3 bg-white/2 border border-white/5 rounded-2xl flex flex-col justify-between">
                  <span className="text-[9px] text-brand-gray font-light uppercase tracking-wider">Latency</span>
                  <span className="text-xs font-bold text-brand-blue mt-1">11ms</span>
                </GlassCard>
                {/* Metric 3 */}
                <GlassCard hoverable={false} className="p-3 bg-white/2 border border-white/5 rounded-2xl flex flex-col justify-between">
                  <span className="text-[9px] text-brand-gray font-light uppercase tracking-wider">AI Synced</span>
                  <span className="text-xs font-bold text-emerald-400 mt-1">100%</span>
                </GlassCard>
              </div>

              {/* Large Telemetry Visualizer */}
              <GlassCard hoverable={false} className="relative z-10 p-4 mb-4 bg-white/2 border border-white/5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                    <FiCpu className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Semantic AI Pipeline</h4>
                    <p className="text-[9px] text-brand-gray font-light">Auto-categorizing data nodes</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[8px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
                  RUNNING
                </span>
              </GlassCard>

              {/* Simulated Chart/Flow */}
              <GlassCard hoverable={false} className="relative z-10 p-4 bg-white/2 border border-white/5 rounded-2xl h-[105px] flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white font-medium">Conversion Traffic Index</span>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-400 font-bold">
                    <FiTrendingUp className="w-3 h-3" /> +24.8%
                  </div>
                </div>
                {/* Visual Chart Bars */}
                <div className="flex items-end justify-between gap-1.5 h-11 mt-2">
                  <span className="w-full bg-white/5 rounded-sm h-1/2" />
                  <span className="w-full bg-white/5 rounded-sm h-2/3" />
                  <span className="w-full bg-brand-blue/20 rounded-sm h-1/3" />
                  <span className="w-full bg-brand-blue/30 rounded-sm h-3/4" />
                  <span className="w-full bg-brand-purple/30 rounded-sm h-2/5 animate-pulse" />
                  <span className="w-full bg-brand-purple/40 rounded-sm h-5/6" />
                  <span className="w-full bg-gradient-to-t from-brand-purple to-brand-blue rounded-sm h-full animate-pulse" />
                </div>
              </GlassCard>

              {/* Floating Absolute Telemetry Overlays */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 -right-6 z-20 py-2.5 px-4 rounded-2xl bg-[#020617]/90 border border-brand-purple/30 shadow-2xl backdrop-blur-md flex items-center gap-2"
              >
                <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-[9px] font-mono text-white font-semibold whitespace-nowrap">Secure SSL Connected</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-1/4 -left-6 z-20 py-2.5 px-4 rounded-2xl bg-[#020617]/90 border border-brand-blue/30 shadow-2xl backdrop-blur-md flex items-center gap-2"
              >
                <FiGlobe className="w-4 h-4 text-brand-blue animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-[9px] font-mono text-white font-semibold whitespace-nowrap">Deployments: Edge Active</span>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
