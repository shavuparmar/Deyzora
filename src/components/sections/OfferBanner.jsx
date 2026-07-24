import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { companyInfo } from '../../data/company';

export default function OfferBanner() {
  const whatsappNumber = companyInfo.phone.replace(/[^0-9]/g, '');
  const message = encodeURIComponent("Hi Deyzora Infotech, I'm interested in the ₹9,999 website offer.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-8 bg-gradient-to-r from-[var(--color-bg-dark)] via-[#111] to-[var(--color-bg-dark)] border-b border-white/5 relative overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[1000px] h-4 bg-[var(--color-accent)] blur-3xl rotate-2" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8 rounded-[2rem] border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 backdrop-blur-md">
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-[var(--color-accent)]/20 items-center justify-center animate-pulse">
              <span className="text-2xl">🚀</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-1">
                Launch Your Business Website Starting From <span className="text-[var(--color-accent)]">₹9,999</span>
              </h3>
              <p className="text-white/60 text-sm">Limited time offer. Get a premium, high-performance website designed by experts.</p>
            </div>
          </div>

          <motion.a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-white font-bold tracking-wide shadow-lg shadow-[#25D366]/20 shrink-0 w-full md:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Get Offer
          </motion.a>

        </div>
      </Container>
    </section>
  );
}
