import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { FAQS } from '../../data/constants';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-24 relative" id="faq">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Frequently Asked <span className="text-[var(--color-accent)] font-semibold">Questions</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left px-6 py-5 rounded-2xl flex items-center justify-between transition-all duration-300 ${
                  openIndex === index 
                    ?'bg-white/10 border border-white/20' 
                    :'bg-white/5 border border-white/5 hover:bg-white/10'
                }`}
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.q}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height:"auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-400 leading-relaxed border-l-2 border-primary/50 ml-4 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
