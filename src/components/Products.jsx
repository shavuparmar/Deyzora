import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, MessageCircle, Star, Eye, Tag, Zap } from 'lucide-react'

const WHATSAPP_NUMBER = '919099999999'

const products = [
  {
    id: 1,
    title: 'SaaS Landing Page Pro',
    category: 'Website Template',
    price: '₹1,499',
    originalPrice: '₹2,999',
    rating: 4.9,
    reviews: 48,
    description: 'High-converting SaaS landing page with animated sections, pricing tables, testimonials, and CTA blocks. Fully responsive.',
    gradient: 'from-purple-600/30 via-purple-900/10 to-transparent',
    accentColor: '#a855f7',
    badge: 'Bestseller',
    badgeColor: '#a855f7',
    features: ['Framer Motion animations', 'Dark mode', '10+ sections'],
  },
  {
    id: 2,
    title: 'WhatsApp Booking Bot',
    category: 'Chatbot Solution',
    price: '₹3,999',
    originalPrice: '₹7,999',
    rating: 5.0,
    reviews: 32,
    description: 'Automated WhatsApp bot that handles appointment bookings, sends reminders, and manages cancellations without any human input.',
    gradient: 'from-cyan-600/30 via-cyan-900/10 to-transparent',
    accentColor: '#06b6d4',
    badge: 'Hot',
    badgeColor: '#f97316',
    features: ['Auto-reminders', 'Calendar sync', 'Payment collection'],
  },
  {
    id: 3,
    title: 'Restaurant Management System',
    category: 'Custom Software',
    price: '₹8,999',
    originalPrice: '₹14,999',
    rating: 4.8,
    reviews: 21,
    description: 'Complete restaurant solution with online menu, table reservations, order management, kitchen display, and analytics dashboard.',
    gradient: 'from-orange-600/30 via-orange-900/10 to-transparent',
    accentColor: '#f97316',
    badge: 'Featured',
    badgeColor: '#10b981',
    features: ['QR Menu', 'Live orders', 'Analytics'],
  },
  {
    id: 4,
    title: 'Agency Portfolio Starter',
    category: 'Website Template',
    price: '₹999',
    originalPrice: '₹1,999',
    rating: 4.7,
    reviews: 65,
    description: 'Minimal yet powerful portfolio template for creative agencies. Includes case study layouts, team section, and smooth page transitions.',
    gradient: 'from-pink-600/30 via-pink-900/10 to-transparent',
    accentColor: '#ec4899',
    badge: 'New',
    badgeColor: '#06b6d4',
    features: ['GSAP animations', 'Blog ready', 'SEO optimized'],
  },
  {
    id: 5,
    title: 'E-Commerce Starter Kit',
    category: 'Web Application',
    price: '₹5,499',
    originalPrice: '₹9,999',
    rating: 4.9,
    reviews: 29,
    description: 'Full-stack e-commerce starter with product listings, cart, checkout, Razorpay integration, and admin panel.',
    gradient: 'from-emerald-600/30 via-emerald-900/10 to-transparent',
    accentColor: '#10b981',
    badge: null,
    badgeColor: null,
    features: ['Razorpay', 'Admin panel', 'Inventory'],
  },
  {
    id: 6,
    title: 'AI Customer Support Bot',
    category: 'Chatbot Solution',
    price: '₹6,499',
    originalPrice: '₹11,999',
    rating: 4.9,
    reviews: 18,
    description: 'GPT-4 powered support bot trained on your data. Handles FAQs, escalates complex queries to humans, and learns over time.',
    gradient: 'from-violet-600/30 via-violet-900/10 to-transparent',
    accentColor: '#8b5cf6',
    badge: 'AI-Powered',
    badgeColor: '#8b5cf6',
    features: ['GPT-4 trained', 'Multi-channel', 'Analytics'],
  },
]

const categories = ['All', 'Website Template', 'Chatbot Solution', 'Custom Software', 'Web Application']

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  const buildWhatsAppLink = (product) => {
    const message = encodeURIComponent(`Hi! I want to buy *${product.title}* (${product.price}). Please share more details.`)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  }

  return (
    <section id="products" className="relative py-28 lg:py-36">
      {/* BG */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }} />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.05), transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="section-tag mb-6">Digital Products</div>
            <h2 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-4">
              Ready-to-launch{' '}
              <span className="text-gradient">products</span>
            </h2>
            <p className="text-white/45 text-lg font-body leading-relaxed">
              Battle-tested templates, bots, and software systems — buy once, launch instantly.
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-500 tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'glass text-white/50 hover:text-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Product grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="group relative rounded-2xl overflow-hidden card-hover"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                whileHover={{ borderColor: `${product.accentColor}44` }}
              >
                {/* Product visual */}
                <div className="relative h-48 overflow-hidden"
                  style={{ background: `linear-gradient(145deg, ${product.gradient.split(' ').map(c => {
                    if (c.includes('from-')) return c.replace('from-', '')
                    return ''
                  }).filter(Boolean)[0] || '#1a1a25'}, #0a0a0f)` }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
                  
                  {/* Decorative elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center"
                        style={{ border: `1px solid ${product.accentColor}40` }}>
                        <ShoppingBag size={36} style={{ color: product.accentColor }} />
                      </div>
                      <motion.div
                        className="absolute -inset-3 rounded-3xl"
                        style={{ background: `radial-gradient(circle, ${product.accentColor}20, transparent 70%)` }}
                        animate={hoveredProduct === product.id ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.5 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-600 text-white"
                      style={{ background: `${product.badgeColor}cc`, backdropFilter: 'blur(10px)' }}>
                      {product.badge}
                    </div>
                  )}

                  {/* Discount badge */}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono font-600 text-white"
                      style={{ background: 'rgba(249,115,22,0.9)', backdropFilter: 'blur(10px)' }}>
                      <Tag size={10} className="inline mr-1" />
                      {Math.round((1 - parseInt(product.price.replace(/[₹,]/g,'')) / parseInt(product.originalPrice.replace(/[₹,]/g,''))) * 100)}% OFF
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-xs font-mono mb-1" style={{ color: product.accentColor }}>
                        {product.category}
                      </p>
                      <h3 className="font-display font-700 text-white text-base leading-tight">
                        {product.title}
                      </h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-display font-800 text-lg text-white">{product.price}</div>
                      {product.originalPrice && (
                        <div className="text-white/30 text-xs line-through">{product.originalPrice}</div>
                      )}
                    </div>
                  </div>

                  <p className="text-white/40 text-sm font-body leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.features.map((feat) => (
                      <span key={feat} className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-body text-white/40"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <Zap size={9} style={{ color: product.accentColor }} />
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-5">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={11} fill={j < Math.floor(product.rating) ? '#f97316' : 'transparent'}
                          color={j < Math.floor(product.rating) ? '#f97316' : '#ffffff20'} />
                      ))}
                    </div>
                    <span className="text-white/40 text-xs font-body">{product.rating} ({product.reviews} reviews)</span>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={buildWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-display font-600 text-white transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${product.accentColor}cc, ${product.accentColor}88)`,
                    }}
                    whileHover={{ scale: 1.02, filter: 'brightness(1.15)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <MessageCircle size={15} />
                    Buy via WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-white/35 text-sm font-body mb-4">Need something custom?</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20need%20a%20custom%20digital%20solution%20for%20my%20business.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-white/70 inline-flex"
          >
            <MessageCircle size={14} />
            Let's build it together
          </a>
        </motion.div>
      </div>
    </section>
  )
}
