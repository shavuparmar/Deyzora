import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-gradient-premium opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card !p-16 border-white/20 bg-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 from-transparent via-primary to-transparent" />
          
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Ready to Build Your <br />
            <span className="text-[var(--color-accent)] font-semibold">Digital Future?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Partner with Deyzora Infotech to transform your vision into a world-class digital product. Let's discuss your next big idea.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/lets-talk" 
              className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Start the Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
