import { useState, useEffect } from'react';
import { motion, AnimatePresence } from'framer-motion';
import { X, Check } from'lucide-react';
import { Link } from'react-router-dom';
import Button from'./Button';
import offers from'../../data/offerData';

const OfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Find the latest active offer
  const activeOffer = offers.filter(o => o.active).pop();

  useEffect(() => {
    // If no active offer, don't do anything
    if (!activeOffer) return;

    // Check if the user has already seen the popup in this session/visit
    const hasSeenOffer = localStorage.getItem('hasSeenOffer_v1');
    
    if (!hasSeenOffer) {
      // Show popup 5 seconds after mount
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [activeOffer]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key ==='Escape' && isVisible) {
        closePopup();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isVisible]);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenOffer_v1','true');
  };

  if (!activeOffer) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Popup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none" />

            {/* Close Button */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all z-10"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
                🔥 {activeOffer.badge}
              </span>
              
              <h2 className="text-3xl font-bold text-white mb-2">{activeOffer.title}</h2>
              <p className="text-xl text-gray-300 font-medium mb-4">{activeOffer.subtitle}</p>
              
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">{activeOffer.price}</span>
                {activeOffer.oldPrice && (
                  <span className="text-lg text-gray-500 line-through">{activeOffer.oldPrice}</span>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {activeOffer.features.slice(0, 4).map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {activeOffer.features.length > 4 && (
                  <div className="text-sm text-gray-500 italic pl-6">
                    + {activeOffer.features.length - 4} more features
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/special-offers" onClick={closePopup} className="flex-1">
                  <Button variant="primary" className="w-full" icon={false}>
                    {activeOffer.buttonText}
                  </Button>
                </Link>
                <Link to="/special-offers" onClick={closePopup} className="flex-1">
                  <Button variant="outline" className="w-full" icon={false}>
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OfferPopup;
