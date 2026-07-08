import { motion } from 'framer-motion';
import { ArrowRight, Code, Paintbrush, Monitor } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--color-bg-dark)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="flex flex-col items-start text-left z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-[var(--color-border-subtle)] text-[var(--color-text-gray)] text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
              Premium Digital Agency
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold font-poppins text-white tracking-tight leading-[1.1] mb-6"
            >
              We build digital <br />
              <span className="text-[var(--color-primary)]">products that scale.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-[var(--color-text-gray)] max-w-lg mb-10 leading-relaxed"
            >
              Deyzora Infotech engineers high-performance websites, scalable web applications, and premium brand identities for forward-thinking companies.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button to="/lets-talk" variant="primary" size="lg" className="w-full sm:w-auto group">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/portfolio" variant="outline" size="lg" className="w-full sm:w-auto">
                View Our Work
              </Button>
            </motion.div>
          </div>

          {/* Visual / Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 w-full aspect-square md:aspect-video lg:aspect-square"
          >
            <div className="absolute inset-0 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-3xl overflow-hidden shadow-2xl flex flex-col">
              {/* Fake Browser Chrome */}
              <div className="h-10 border-b border-[var(--color-border-subtle)] bg-white/5 flex items-center px-4 gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              
              {/* Fake Content Area */}
              <div className="flex-1 p-6 flex flex-col gap-6 relative">
                 <div className="w-3/4 h-8 bg-white/10 rounded-lg"></div>
                 <div className="w-1/2 h-4 bg-white/5 rounded-lg"></div>
                 <div className="w-2/3 h-4 bg-white/5 rounded-lg mb-4"></div>
                 
                 <div className="grid grid-cols-2 gap-4 flex-1">
                   <div className="bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                     <Code className="w-8 h-8 text-[var(--color-primary)] opacity-50" />
                   </div>
                   <div className="bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                     <Paintbrush className="w-8 h-8 text-[var(--color-secondary)] opacity-50" />
                   </div>
                   <div className="col-span-2 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-white/30" />
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
