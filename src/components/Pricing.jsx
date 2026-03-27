import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, ArrowRight, MessageCircle } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    tagline: 'Perfect for getting started',
    price: { monthly: '₹9,999', yearly: '₹7,999' },
    badge: null,
    accent: '#64748b',
    gradient: 'from-slate-600/15 to-transparent',
    borderColor: 'rgba(100,116,139,0.2)',
    features: [
      'Single-page website',
      'Mobile responsive design',
      'Basic contact form',
      'WhatsApp integration',
      '3 revision rounds',
      '1 month free support',
      'Basic SEO setup',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Standard',
    tagline: 'Most popular for growing businesses',
    price: { monthly: '₹24,999', yearly: '₹19,999' },
    badge: 'Most Popular',
    accent: '#a855f7',
    gradient: 'from-purple-600/25 via-purple-900/10 to-transparent',
    borderColor: 'rgba(168,85,247,0.4)',
    features: [
      'Multi-page website (up to 8)',
      'Custom UI/UX design',
      'CMS integration',
      'AI Chatbot (basic)',
      'Booking system',
      'Payment gateway',
      'Unlimited revisions',
      '3 months free support',
      'Advanced SEO + Analytics',
    ],
    cta: 'Start Standard',
    popular: true,
  },
  {
    name: 'Premium',
    tagline: 'Full-scale digital transformation',
    price: { monthly: '₹59,999', yearly: '₹49,999' },
    badge: 'Best Value',
    accent: '#f97316',
    gradient: 'from-orange-600/15 to-transparent',
    borderColor: 'rgba(249,115,22,0.3)',
    features: [
      'Everything in Standard',
      'Custom web application',
      'Advanced AI chatbot',
      'Full ERP/CRM integration',
      'Multi-platform deployment',
      'Dedicated project manager',
      'Priority 24/7 support',
      '6 months free support',
      'Monthly performance reports',
      'Lifetime updates',
    ],
    cta: 'Go Premium',
    popular: false,
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  return (
    <section id="pricing" className="relative py-28 lg:py-36 overflow-hidden">
      {/* BG */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.25), transparent)' }} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.04), transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="section-tag mx-auto mb-6 w-fit">Pricing</div>
          <h2 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-4">
            Transparent pricing,{' '}
            <span className="text-gradient">zero surprises</span>
          </h2>
          <p className="text-white/40 text-lg font-body mb-8">
            Choose the plan that fits your ambition. All plans include our quality guarantee.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full glass">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-full text-sm font-display font-500 transition-all duration-300 ${
                billing === 'monthly' ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30' : 'text-white/50'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-5 py-2 rounded-full text-sm font-display font-500 transition-all duration-300 flex items-center gap-2 ${
                billing === 'yearly' ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30' : 'text-white/50'
              }`}
            >
              Yearly
              <span className="px-1.5 py-0.5 rounded-full text-xs font-mono"
                style={{ background: 'rgba(249,115,22,0.8)', color: 'white' }}>
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-3xl p-8 card-hover ${plan.popular ? 'scale-105 shadow-2xl' : ''}`}
              style={{
                background: plan.popular
                  ? 'rgba(124,58,237,0.12)'
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${plan.borderColor}`,
              }}
            >
              {/* Popular glow */}
              {plan.popular && (
                <div className="absolute -inset-px rounded-3xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(145deg, rgba(168,85,247,0.2), transparent 50%, rgba(6,182,212,0.1))',
                    zIndex: -1,
                  }} />
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-mono font-600 text-white"
                  style={{ background: `linear-gradient(135deg, ${plan.accent}, ${plan.accent}cc)` }}>
                  <Zap size={10} className="inline mr-1" />
                  {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="font-display font-800 text-2xl text-white mb-1">{plan.name}</h3>
                <p className="text-white/40 text-sm font-body">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <motion.div
                  key={billing}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-display font-800 text-4xl text-white"
                >
                  {billing === 'monthly' ? plan.price.monthly : plan.price.yearly}
                </motion.div>
                <div className="text-white/30 text-sm font-body mt-1">
                  per project · {billing === 'monthly' ? 'billed monthly' : 'billed annually'}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${plan.accent}20`, border: `1px solid ${plan.accent}40` }}>
                      <Check size={10} style={{ color: plan.accent }} />
                    </div>
                    <span className="text-white/60 text-sm font-body">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href={`https://wa.me/919099999999?text=Hi!%20I'm%20interested%20in%20the%20${plan.name}%20plan.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-display font-600 text-white transition-all duration-300 ${
                  plan.popular ? 'btn-primary' : 'btn-ghost'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {plan.popular ? (
                  <>
                    <span>{plan.cta}</span>
                    <ArrowRight size={14} />
                  </>
                ) : (
                  <>
                    <MessageCircle size={14} />
                    <span>{plan.cta}</span>
                  </>
                )}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Custom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center glass rounded-2xl p-6"
        >
          <p className="text-white/50 font-body text-sm">
            Need a <span className="text-white/80 font-600">custom enterprise solution</span>? We build tailored packages for large-scale requirements.{' '}
            <a href="https://wa.me/919099999999?text=Hi!%20I%20need%20a%20custom%20enterprise%20solution."
              target="_blank" rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">
              Let's talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
