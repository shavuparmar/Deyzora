import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoSvg from '/deyzora-Logo.svg';

export default function SplashScreen() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('deyzora_splash_seen');
    if (!hasSeenSplash) {
      setShow(true);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setShow(false);
              sessionStorage.setItem('deyzora_splash_seen', 'true');
            }, 300);
            return 100;
          }
          return prev + 15;
        });
      }, 120);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Ambient Glow */}
          <div className="absolute w-[400px] h-[400px] bg-[#0070F3]/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Glass Card Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-capsule p-8 sm:p-12 rounded-3xl flex flex-col items-center max-w-sm sm:max-w-md w-full relative z-10 text-center border border-white/10"
          >
            {/* Logo Mark */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mb-8"
            >
              <img
                src={logoSvg}
                alt="Deyzora Infotech"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </motion.div>

            {/* Subtitle */}
            <div className="text-xs uppercase tracking-[0.25em] text-[#50E3C2] font-semibold mb-6">
              Engineering Digital Excellence
            </div>

            {/* Progress Bar Container */}
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/10 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#0070F3] to-[#50E3C2] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            {/* Percentage Display */}
            <div className="mt-3 text-[11px] font-mono text-white/50 tracking-wider">
              LOADING {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
