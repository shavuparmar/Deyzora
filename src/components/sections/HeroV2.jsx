import { motion } from'framer-motion';
import { ArrowRight, Code2, MonitorSmartphone, LayoutTemplate } from'lucide-react';
import { Link } from'react-router-dom';
import Button from'../ui/Button';

const HeroV2 = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#050505]">
      {/* Premium Minimal Grid Background */}
      <div className="absolute inset-0 pointer-events-none bg-grid-subtle">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[var(--color-accent)]/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
          >
            Build Modern Websites<br />
            <span className="text-[var(--color-accent)]">
              That Grow Your Business
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            We design and develop fast, responsive, and scalable websites using <strong className="text-gray-200 font-medium">React, Node.js, WordPress, HTML, CSS, JavaScript, MongoDB, and PostgreSQL</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link to="/lets-talk" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto !px-10 !py-4 text-lg">
                Start Your Project
              </Button>
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto !px-10 !py-4 text-lg">
                View Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Floating Glass Cards / Tech Badges */}
          <div className="relative max-w-4xl mx-auto h-[200px] hidden md:block">
            <motion.div 
              initial={{ opacity: 0, y: 40, x: -50, rotate: -10 }}
              animate={{ opacity: 1, y: 0, x: 0, rotate: -6 }}
              transition={{ duration: 0.8, delay: 0.5, type:"spring" }}
              className="absolute left-0 top-0 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-sm border-[var(--color-border)]"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Clean Code</p>
                <p className="text-gray-400 text-xs">React & Node.js</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40, x: 0, scale: 0.9 }}
              animate={{ opacity: 1, y: 20, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type:"spring" }}
              className="absolute left-1/2 -translate-x-1/2 top-4 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-sm border-[var(--color-accent)]/30 z-10"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                <MonitorSmartphone className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">100% Responsive</p>
                <p className="text-gray-400 text-xs">Mobile First Design</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40, x: 50, rotate: 10 }}
              animate={{ opacity: 1, y: 0, x: 0, rotate: 6 }}
              transition={{ duration: 0.8, delay: 0.7, type:"spring" }}
              className="absolute right-0 top-0 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-sm border-[var(--color-border)]"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                <LayoutTemplate className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Premium UI/UX</p>
                <p className="text-gray-400 text-xs">Framer & Figma</p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
