import { useEffect, useState } from'react';
import { motion, AnimatePresence } from'framer-motion';

const InitialLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Determine if it's the very first visit (or simulate it with a short timeout)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second premium loading experience
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[50vw] h-[50vw] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease:"easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full from-white flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)] mb-8">
              <span className="text-black font-black text-4xl leading-none pt-1">D</span>
            </div>
            
            {/* Loading Bar */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width:"0%" }}
                animate={{ width:"100%" }}
                transition={{ duration: 1.5, ease:"easeInOut" }}
                className="h-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
