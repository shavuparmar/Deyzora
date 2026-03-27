import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Riya Kapoor',
    role: 'Founder, StyleNest',
    avatar: 'RK',
    avatarColor: '#a855f7',
    review: 'Deyzora completely transformed our online presence. Our conversion rate went up by 3x in the first month after launching the new website. The attention to detail and the animations are just wow.',
    rating: 5,
    project: 'E-Commerce Website',
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    role: 'CEO, MedBook Clinic',
    avatar: 'AM',
    avatarColor: '#06b6d4',
    review: 'The booking system they built for our clinic is flawless. Patients love the simplicity, our staff loves the calendar sync, and we\'ve reduced no-shows by 40% with automated reminders. Best investment we made.',
    rating: 5,
    project: 'Booking System',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Operations Head, QuickServe',
    avatar: 'PS',
    avatarColor: '#f97316',
    review: 'We needed a chatbot that could handle hundreds of customer queries daily. Deyzora delivered something that feels genuinely intelligent — our support workload dropped by 60%. Exceptional quality.',
    rating: 5,
    project: 'AI Chatbot',
  },
  {
    id: 4,
    name: 'Vikram Patel',
    role: 'Director, FoodieHub',
    avatar: 'VP',
    avatarColor: '#10b981',
    review: 'The restaurant management system they built gave us complete control — from QR menus to live order tracking. Revenue is up and kitchen chaos is down. These guys are genuinely talented.',
    rating: 5,
    project: 'Restaurant Software',
  },
  {
    id: 5,
    name: 'Sneha Rao',
    role: 'Marketing Lead, FinVest',
    avatar: 'SR',
    avatarColor: '#ec4899',
    review: 'Professional, responsive, and they genuinely care about your product. Deyzora delivered our SaaS landing page ahead of schedule and it looks absolutely stunning. Highly recommend.',
    rating: 5,
    project: 'SaaS Website',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)

  const goTo = (index, dir) => {
    setDirection(dir)
    setCurrent(index)
  }

  const next = () => goTo((current + 1) % testimonials.length, 1)
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length, -1)

  useEffect(() => {
    timerRef.current = setInterval(next, 5000)
    return () => clearInterval(timerRef.current)
  }, [current])

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  }

  return (
    <section id="testimonials" className="relative py-28 lg:py-36 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.05), transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="section-tag mx-auto mb-6 w-fit">Testimonials</div>
          <h2 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-4">
            Clients who{' '}
            <span className="text-gradient">love</span> what we do
          </h2>
          <p className="text-white/40 text-lg font-body">
            Don't take our word for it — here's what our partners say.
          </p>
        </motion.div>

        {/* Main testimonial slider */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative glass rounded-3xl p-8 lg:p-12 overflow-hidden"
            style={{ minHeight: 280 }}>
            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={80} className="text-purple-400" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f97316" color="#f97316" />
                  ))}
                  <span className="ml-2 text-xs font-mono text-white/30 px-2 py-0.5 rounded-full glass">
                    {testimonials[current].project}
                  </span>
                </div>

                {/* Review text */}
                <blockquote className="font-body text-lg sm:text-xl text-white/70 leading-relaxed mb-8 font-300 italic">
                  "{testimonials[current].review}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-700 text-white text-sm flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${testimonials[current].avatarColor}, ${testimonials[current].avatarColor}88)` }}>
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-display font-700 text-white text-base">
                      {testimonials[current].name}
                    </div>
                    <div className="text-white/40 text-sm font-body">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? '#a855f7' : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Mini cards row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`rounded-2xl p-4 text-left transition-all duration-300 ${
                i === current ? 'border-purple-500/40' : 'border-transparent hover:border-white/10'
              }`}
              style={{
                background: i === current ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${i === current ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.05)'}`,
              }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-display font-700 mb-2 flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}88)` }}>
                {t.avatar}
              </div>
              <div className="text-white/60 text-xs font-display font-600 truncate">{t.name}</div>
              <div className="text-white/25 text-xs font-body truncate">{t.role.split(',')[0]}</div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
