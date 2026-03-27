import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Twitter, Instagram, Linkedin, Github, ArrowUpRight, Heart } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Chatbot Solutions', href: '#services' },
    { label: 'Booking Systems', href: '#services' },
    { label: 'Custom Software', href: '#services' },
  ],
  Products: [
    { label: 'Website Templates', href: '#products' },
    { label: 'Chatbot Templates', href: '#products' },
    { label: 'SaaS Starters', href: '#products' },
    { label: 'UI Kits', href: '#products' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Refund Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socials = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Subtle gradient top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.06), transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <span className="font-display font-800 text-xl text-white">Deyzora</span>
            </div>
            <p className="text-white/35 text-sm font-body leading-relaxed mb-6 max-w-xs">
              Building digital experiences that transform ideas into impactful online presences. From concept to launch, we've got you covered.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/35 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    aria-label={social.label}
                  >
                    <Icon size={15} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-display font-700 text-white/80 text-xs tracking-widest uppercase mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={link.href.startsWith('#') ? (e) => {
                          e.preventDefault()
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                        } : undefined}
                        className="text-white/35 text-sm font-body hover:text-white/70 transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {link.label}
                        {!link.href.startsWith('#') && (
                          <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter strip */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="font-display font-700 text-white text-base mb-1">Stay updated with Deyzora</h4>
            <p className="text-white/35 text-sm font-body">Get tips on digital growth, new products, and agency updates.</p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-56 px-4 py-2.5 rounded-xl text-sm font-body text-white placeholder-white/25 focus:outline-none"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            />
            <motion.button
              className="px-5 py-2.5 rounded-xl text-sm font-display font-600 text-white flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div> */}

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-white/25 text-xs font-body flex items-center gap-1.5">
            © 2025 Deyzora. Made with{' '}
            <Heart size={11} fill="#a855f7" color="#a855f7" className="inline" />
            {' '}in Surat, India.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/25 text-xs font-body hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="text-white/25 text-xs font-body hover:text-white/50 transition-colors">Terms</a>
            <motion.button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/30 hover:text-white/60 transition-colors duration-200 text-xs font-mono"
              whileHover={{ scale: 1.1 }}
            >
              ↑
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
