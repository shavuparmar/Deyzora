import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'

const floatingOrbs = [
  { size: 600, x: '-10%', y: '-20%', color: 'rgba(124,58,237,0.18)', delay: 0 },
  { size: 500, x: '60%', y: '10%', color: 'rgba(6,182,212,0.14)', delay: 1 },
  { size: 400, x: '20%', y: '60%', color: 'rgba(168,85,247,0.1)', delay: 2 },
]

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5yr+', label: 'Industry Experience' },
  { value: '40+', label: 'Team Members' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8 + orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10"
        style={{ width: 800, height: 800 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-4 left-1/2 w-2 h-2 rounded-full bg-purple-500/60 -translate-x-1/2" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/8"
        style={{ width: 1100, height: 1100 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute bottom-8 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for new projects
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-6"
        >
          <span className="text-white block">We Build Digital</span>
          <span className="block mt-1">
            <span className="text-gradient">Experiences</span>
          </span>
          <span className="text-white/80 block mt-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-600">
            That Grow Your Business
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-body font-300 leading-relaxed"
        >
          From pixel-perfect websites to intelligent chatbots and seamless booking systems — we craft digital solutions that convert visitors into customers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://wa.me/919099999999?text=Hi%2C%20I%20want%20to%20get%20started%20with%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white group w-full sm:w-auto justify-center"
          >
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </a>
          <button
            onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost text-white/80 w-full sm:w-auto justify-center"
          >
            <Play size={14} fill="currentColor" />
            View Products
          </button>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center gap-4 mb-20"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#f97316" color="#f97316" />
            ))}
            <span className="text-white/40 text-sm ml-2 font-body">Trusted by 150+ clients worldwide</span>
          </div>
          <div className="flex -space-x-2">
            {['#7c3aed','#06b6d4','#a855f7','#f97316','#10b981'].map((c, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-void flex items-center justify-center text-xs font-display font-700 text-white"
                style={{ background: c }}>
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="glass rounded-2xl p-4 text-center"
            >
              <div className="font-display font-800 text-2xl sm:text-3xl text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #050508)' }} />
    </section>
  )
}
