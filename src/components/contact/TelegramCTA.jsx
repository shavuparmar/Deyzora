import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Lock, Zap, Smartphone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Card } from '../ui/Card';

const TelegramCTA = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const plan = searchParams.get('plan');

  const handleTelegramClick = () => {
    window.open("https://t.me/+ov2s0SDtMp80YWE1", "_blank", "noopener,noreferrer");
  };

  const features = [
    {
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      title:"Instant Conversation",
      desc:"No waiting for emails."
    },
    {
      icon: <Lock className="w-5 h-5 text-green-400" />,
      title:"Private & Secure",
      desc:"Your conversation stays on Telegram."
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-blue-400" />,
      title:"Direct Communication",
      desc:"Talk directly with our team."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
      title:"Mobile Friendly",
      desc:"Works perfectly on Android, iPhone, Desktop and Web."
    }
  ];

  return (
    <Card glass className="p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col items-center text-center max-w-4xl mx-auto">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium text-gray-300">Usually replies within a few minutes</span>
      </motion.div>

      {/* Text Content */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
      >
        Let's Build Something <br className="hidden md:block" />
        <span className="text-[var(--color-accent)] font-semibold">Amazing Together</span>
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
      >
        Have a project in mind? Connect with us instantly on Telegram. We usually respond within a few minutes.
      </motion.p>

      {plan && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-4 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-medium max-w-lg mx-auto"
        >
          You've selected the <strong>{plan}</strong> Package. Continue the discussion with us on Telegram!
        </motion.div>
      )}

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleTelegramClick}
        className="w-full md:w-auto relative group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-white font-bold text-lg shadow-xl shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
        aria-label="Message us on Telegram"
      >
        <Send className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        <span>Message us on Telegram</span>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
      </motion.button>

      {/* Secondary Text */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-gray-500 mt-4 mb-12"
      >
        No forms. No waiting. Just start a conversation directly on Telegram.
      </motion.p>

      {/* Feature Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
      >
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="mb-4 p-3 rounded-xl bg-white/5">
              {feature.icon}
            </div>
            <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
            <p className="text-sm text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Trust Message */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 pt-8 border-t border-white/10 w-full"
      >
        <p className="text-gray-400 text-sm max-w-3xl mx-auto">
          Join our Telegram and tell us about your project. Whether it's a website, web application, mobile app, AI solution, branding, or automation, we're ready to help.
        </p>
      </motion.div>

    </Card>
  );
};

export default TelegramCTA;
