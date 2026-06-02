import React from 'react';
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiArrowRight } from 'react-icons/fi';
import { SOCIAL_LINKS, SERVICES } from '../../utils/constants';

/**
 * Footer Layout Component.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! Stay tuned for updates from Deyzora.');
  };

  return (
    <footer className="relative bg-brand-dark pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Decorative ambient background glows */}
      <span className="absolute -left-1/4 -bottom-1/4 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <span className="absolute -right-1/4 -top-1/4 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1 - Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-blue text-white font-display font-extrabold text-base">
                D
              </span>
              <span className="text-lg font-display font-bold text-white tracking-tight">
                Deyzora<span className="text-brand-purple font-black">.</span>
              </span>
            </a>
            
            <p className="text-brand-gray text-sm font-light leading-relaxed max-w-sm mb-6">
              Building future-ready digital experiences. We design, build, and optimize high-converting systems, AI implementations, and luxury digital products.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href={SOCIAL_LINKS.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:text-white hover:bg-brand-purple/20 hover:border-brand-purple/40 transition-all duration-300"
                aria-label="Follow Deyzora on Twitter"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:text-white hover:bg-brand-purple/20 hover:border-brand-purple/40 transition-all duration-300"
                aria-label="Follow Deyzora on GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:text-white hover:bg-brand-purple/20 hover:border-brand-purple/40 transition-all duration-300"
                aria-label="Follow Deyzora on LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:text-white hover:bg-brand-purple/20 hover:border-brand-purple/40 transition-all duration-300"
                aria-label="Follow Deyzora on Instagram"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4">
              {SERVICES.map((serv) => (
                <li key={serv.id}>
                  <a href="#services" className="text-sm text-brand-gray hover:text-white font-light transition-colors duration-200">
                    {serv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <a href="#why-us" className="text-sm text-brand-gray hover:text-white font-light transition-colors duration-200">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-brand-gray hover:text-white font-light transition-colors duration-200">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-brand-gray hover:text-white font-light transition-colors duration-200">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-brand-gray hover:text-white font-light transition-colors duration-200">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter subscription */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-brand-gray text-xs font-light leading-relaxed mb-4">
              Subscribe to get modern software updates and strategy tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter email..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple font-light placeholder:text-brand-gray/50 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 w-9 rounded-lg bg-brand-purple text-white flex items-center justify-center hover:bg-brand-purple-dark hover:scale-105 transition-all duration-300"
                  aria-label="Subscribe"
                >
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-brand-gray/60 font-light">
            &copy; {currentYear} Deyzora Agency. All rights reserved. Built with precision and future-ready technology.
          </p>
          <div className="flex gap-6 text-xs text-brand-gray/60 font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
