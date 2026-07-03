import React from'react';
import { motion } from'framer-motion';
import { Mail } from'lucide-react';
import { Card } from'../ui/Card';
import { Section, Container } from'../ui/LayoutComponents';
import TelegramCTA from'../contact/TelegramCTA';

const ContactForm = () => {
  return (
    <Section id="contact" className="overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              Let's Build Something <span className="text-[var(--color-accent)] font-semibold">Extraordinary</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-muted-foreground)] text-lg mb-10 leading-relaxed"
            >
              Have a project in mind? Connect with us instantly on Telegram and our team will get back to you right away.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <Card glass className="p-6">
                <h3 className="text-xl font-bold mb-2">General Inquiries</h3>
                <div className="flex items-center gap-3 text-[var(--color-accent)] font-medium">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:deyzorainfotech@gmail.com" className="hover:underline">deyzorainfotech@gmail.com</a>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative flex items-center"
          >
            <div className="w-full">
              <TelegramCTA />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactForm;
