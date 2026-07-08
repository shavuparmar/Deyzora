import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ContactCTA from '../../components/home/ContactCTA';
import { Container } from '../ui/Container';

export default function LegalLayout({ 
  title, 
  description, 
  icon: Icon = FileText, 
  lastUpdated, 
  children 
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Helmet>
        <title>{title} | Deyzora Infotech</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <div className="pt-24 min-h-screen bg-[var(--color-bg-dark)]">
        
        {/* HEADER */}
        <section className="section-padding bg-[var(--color-bg-surface-light)] border-b border-[var(--color-border-subtle)]">
          <Container className="text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] mb-6"
            >
               <Icon className="w-5 h-5 text-white" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight text-white tracking-tight"
            >
              {title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[var(--color-text-gray)] leading-relaxed max-w-2xl mx-auto mb-8"
            >
              {description}
            </motion.p>
            
            {lastUpdated && (
              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="inline-block px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-gray)] uppercase tracking-wider font-medium"
              >
                Last Updated: {lastUpdated}
              </motion.div>
            )}
          </Container>
        </section>

        {/* CONTENT */}
        <section className="section-padding relative">
          <Container className="max-w-4xl">
            <div className="prose-deyzora text-[var(--color-text-gray)]">
              {children}
            </div>
          </Container>
        </section>

        <ContactCTA />
      </div>
    </>
  );
}
