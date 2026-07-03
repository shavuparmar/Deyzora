import { motion } from'framer-motion';
import { ArrowDown, Calendar, MessageSquare } from'lucide-react';
import Button from'../ui/Button';

const ContactHero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form-section')?.scrollIntoView({ behavior:'smooth' });
  };

  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-[#050505]">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 blur-[120px] mix-blend-screen rounded-full animate-blob" />
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/10 blur-[120px] mix-blend-screen rounded-full animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-bold tracking-widest uppercase mb-8">
            Project Inquiry
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text from-primary animate-gradient">
              Amazing Together
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours with a comprehensive strategy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="w-full sm:w-auto !px-8 !py-4 text-lg" onClick={scrollToForm} icon={<MessageSquare className="w-5 h-5" />}>
              Start Your Project
            </Button>
            <Button variant="outline" className="w-full sm:w-auto !px-8 !py-4 text-lg" icon={<Calendar className="w-5 h-5" />}>
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-gray-500 hover:text-white transition-colors"
          onClick={scrollToForm}
        >
          <span className="text-xs font-semibold tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease:"easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
