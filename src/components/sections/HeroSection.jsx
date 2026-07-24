import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stats } from '../../data/stats';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-36 pb-20 overflow-hidden bg-black text-white">
      {/* Accent Radial Glow (No Gradients) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0070F3]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#50E3C2] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#50E3C2] animate-pulse" />
              <span>₹10L+ Standard Web Architecture & Engineering</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
            >
              We Build Digital Assets <br />
              <span className="text-[#0070F3]">That Scale Your Revenue.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              Sub-second speed, Apple-level UI/UX, and robust software architecture. Simple pricing with zero tech jargon for high-growth businesses.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <Link 
                to="/contact" 
                className="h-14 px-8 rounded-full bg-[#0070F3] hover:bg-[#005bb5] text-white font-bold text-base shadow-[0_0_30px_rgba(0,112,243,0.35)] flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/portfolio" 
                className="h-14 px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base flex items-center justify-center transition-all hover:border-white/20"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Live Trust Metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/50 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Visual Mockup Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Interactive Agency Product Mockup */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Window Frame Glass Container */}
              <div className="rounded-3xl glass-card p-5 sm:p-6 shadow-[0_30px_70px_rgba(0,0,0,0.9)] relative overflow-hidden">
                
                {/* Window Controls */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    deyzora.com/benchmark
                  </div>
                </div>

                {/* Dashboard Stats Preview */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0070F3]/20 border border-[#0070F3]/30 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-[#0070F3]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Performance Score</div>
                        <div className="text-xs text-[#50E3C2] font-medium">100/100 Google Lighthouse</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#50E3C2] bg-[#50E3C2]/10 px-2.5 py-1 rounded-md border border-[#50E3C2]/30">0.37s</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Security & Code Standard</div>
                        <div className="text-xs text-white/60">SOC2 & SSL Encrypted Stack</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>

                  {/* Code Block Snippet */}
                  <div className="p-4 rounded-2xl bg-black/80 border border-white/10 font-mono text-xs text-white/80 leading-relaxed">
                    <div className="text-white/40">// Premium Agency Standard</div>
                    <div className="text-[#50E3C2]">const architecture = &#123;</div>
                    <div className="pl-4">speed: <span className="text-yellow-300">"Sub-second"</span>,</div>
                    <div className="pl-4">responsive: <span className="text-emerald-400">true</span>,</div>
                    <div className="pl-4">maintenance: <span className="text-[#0070F3]">"24/7 Dedicated"</span></div>
                    <div className="text-[#50E3C2]">&#125;;</div>
                  </div>
                </div>

                {/* Rating Overlay */}
                <div className="mt-4 p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold text-white">4.9/5 Client Rating (150+ Reviews)</span>
                  </div>
                  <span className="text-[10px] text-[#0070F3] font-bold uppercase tracking-wider bg-[#0070F3]/10 px-2 py-0.5 rounded border border-[#0070F3]/30">Verified</span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
