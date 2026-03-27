import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Bot, Calendar, Cpu, ArrowUpRight, Code2, Layers, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom, performance-first websites and web apps built with modern tech stacks. From landing pages to full-scale platforms.',
    tags: ['React', 'Next.js', 'Node.js'],
    gradient: 'from-purple-600/20 to-purple-900/5',
    iconBg: 'from-purple-600 to-purple-400',
    accent: '#a855f7',
  },
  {
    icon: Bot,
    title: 'Chatbot Solutions',
    description: 'AI-powered chatbots that handle customer queries, qualify leads, and automate support — 24/7 without breaking a sweat.',
    tags: ['GPT-4', 'WhatsApp', 'Telegram'],
    gradient: 'from-cyan-600/20 to-cyan-900/5',
    iconBg: 'from-cyan-500 to-blue-500',
    accent: '#06b6d4',
  },
  {
    icon: Calendar,
    title: 'Booking Systems',
    description: 'Seamless appointment and reservation systems with calendar sync, payment integration, and automated reminders.',
    tags: ['Stripe', 'Google Cal', 'SMS/Email'],
    gradient: 'from-orange-600/20 to-orange-900/5',
    iconBg: 'from-orange-500 to-amber-400',
    accent: '#f97316',
  },
  {
    icon: Cpu,
    title: 'Custom Software',
    description: 'Tailored software solutions — dashboards, CRMs, inventory systems, and internal tools designed for your workflow.',
    tags: ['SaaS', 'API', 'Integrations'],
    gradient: 'from-green-600/20 to-green-900/5',
    iconBg: 'from-emerald-500 to-teal-400',
    accent: '#10b981',
  },
]

const processSteps = [
  { icon: Layers, label: 'Discovery', desc: 'Deep-dive into your goals and map out the strategy' },
  { icon: Code2, label: 'Design & Build', desc: 'Pixel-perfect UI, scalable architecture' },
  { icon: Sparkles, label: 'Launch & Grow', desc: 'Deliver, iterate, and optimize for results' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      {/* BG accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.06), transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <div className="section-tag mb-6">Our Services</div>
          <h2 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-5">
            Everything you need to{' '}
            <span className="text-gradient">dominate online</span>
          </h2>
          <p className="text-white/45 text-lg font-body leading-relaxed">
            We don't just build — we engineer growth. Each service is crafted to solve real business problems and deliver measurable outcomes.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative rounded-2xl p-6 card-hover cursor-pointer overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))`,
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                whileHover={{ borderColor: `${service.accent}44` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${service.accent}18, transparent 60%)` }} />

                {/* Icon */}
                <div className="relative mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.iconBg}`}>
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-700 text-lg text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/45 text-sm font-body leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-mono"
                      style={{ background: `${service.accent}18`, color: service.accent, border: `1px solid ${service.accent}30` }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-1.5 text-sm font-display font-500 transition-all duration-300 group-hover:gap-2.5"
                  style={{ color: service.accent }}>
                  Learn more
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-10">
            <div className="section-tag mx-auto mb-4 w-fit">Our Process</div>
            <h3 className="font-display font-700 text-3xl text-white">How we work</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <Icon size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs text-purple-400/60">0{i + 1}</span>
                      <h4 className="font-display font-700 text-white text-base">{step.label}</h4>
                    </div>
                    <p className="text-white/40 text-sm font-body leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
