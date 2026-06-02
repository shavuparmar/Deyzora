import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLoader, FiCheckCircle } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';
import { SERVICES } from '../../utils/constants';
import { FADE_UP, FADE_LEFT, FADE_RIGHT } from '../../hooks/useScrollAnimation';

/**
 * Contact Section Component with fully validated contact form.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.service) tempErrors.service = 'Please select a service';
    if (!formData.message.trim()) tempErrors.message = 'Please input your project summary';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        service: '',
        budget: '',
        message: '',
      });
      // Clear success indicator after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden z-20">
      
      {/* Decorative ambient glowing backdrops */}
      <span className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <span className="absolute left-0 top-1/4 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Get in Touch"
          title="Ready to Build the Future?"
          subtitle="Tell us about your project concept. Our senior squad will review it and coordinate an alignment call within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Contact channels details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={FADE_RIGHT}
            className="lg:col-span-5 space-y-8 lg:pr-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's craft your system.</h3>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                Have a clear blueprint or just a rough idea? We provide complete product design, engineering squads, and continuous scaling parameters to make it happen.
              </p>
            </div>

            {/* Direct Channel badges */}
            <div className="space-y-6 pt-6">
              {/* Mail channel */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-gray font-light block uppercase tracking-wider">Write to Us</span>
                  <a href="mailto:hello@deyzora.com" className="text-sm font-bold text-white hover:text-brand-purple transition-colors font-display">
                    hello@deyzora.com
                  </a>
                </div>
              </div>

              {/* Phone channel */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-gray font-light block uppercase tracking-wider">Direct Hotline</span>
                  <a href="tel:+15550192834" className="text-sm font-bold text-white hover:text-brand-blue transition-colors font-display">
                    +1 (555) 019-2834
                  </a>
                </div>
              </div>

              {/* Map pin channel */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-gray font-light block uppercase tracking-wider">HQ Location</span>
                  <span className="text-sm font-bold text-white font-display">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated support response banner */}
            <div className="p-5 rounded-2xl bg-white/2 border border-white/5 text-xs text-brand-gray font-light leading-relaxed max-w-sm">
              <span className="font-bold text-white block mb-1">⚡ Quick Alignment Response</span>
              Average project review timeframe: **14 hours**. Direct communication happens via custom Slack workspace routes.
            </div>

          </motion.div>

          {/* Right Column - Validated Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={FADE_LEFT}
            className="lg:col-span-7"
          >
            <GlassCard hoverable={false} className="p-8 sm:p-10 border border-white/5 bg-white/1 shadow-2xl relative">
              
              {/* Success Notification Alert */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-x-8 top-8 z-30 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3 text-xs"
                  >
                    <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <span className="font-bold block">Transmission Successful!</span>
                      Thank you. Our engineering team has received your project parameters.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Email side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-brand-light/80 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-white focus:outline-none focus:ring-1 font-light transition-all placeholder:text-brand-gray/30 ${
                        errors.name ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10 focus:border-brand-purple focus:ring-brand-purple'
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-400 font-medium">{errors.name}</span>}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-brand-light/80 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-white focus:outline-none focus:ring-1 font-light transition-all placeholder:text-brand-gray/30 ${
                        errors.email ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10 focus:border-brand-purple focus:ring-brand-purple'
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-400 font-medium">{errors.email}</span>}
                  </div>
                </div>

                {/* Service Dropdown & Budget Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Dropdown */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-xs font-semibold text-brand-light/80 uppercase tracking-wider">Needed Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`px-4 py-3 rounded-xl bg-[#020617] border text-sm text-white focus:outline-none focus:ring-1 font-light transition-all select-none ${
                        errors.service ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10 focus:border-brand-purple focus:ring-brand-purple'
                      }`}
                    >
                      <option value="" disabled>Select option...</option>
                      {SERVICES.map((serv) => (
                        <option key={serv.id} value={serv.title}>{serv.title}</option>
                      ))}
                      <option value="Other">Other / Integration</option>
                    </select>
                    {errors.service && <span className="text-[10px] text-red-400 font-medium">{errors.service}</span>}
                  </div>

                  {/* Budget Dropdown */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-xs font-semibold text-brand-light/80 uppercase tracking-wider">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-sm text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple font-light transition-all select-none"
                    >
                      <option value="">Choose range...</option>
                      <option value="under-5k">Under $5k</option>
                      <option value="5k-15k">$5k - $15k</option>
                      <option value="15k-50k">$15k - $50k</option>
                      <option value="50k-plus">$50k+</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-brand-light/80 uppercase tracking-wider">Project Summary</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your project goals..."
                    className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-white focus:outline-none focus:ring-1 font-light transition-all placeholder:text-brand-gray/30 ${
                      errors.message ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10 focus:border-brand-purple focus:ring-brand-purple'
                    }`}
                  />
                  {errors.message && <span className="text-[10px] text-red-400 font-medium">{errors.message}</span>}
                </div>

                {/* Submit button with loader */}
                <GradientButton
                  type="submit"
                  variant="primary"
                  className="w-full py-4 text-center justify-center select-none cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <FiLoader className="w-4 h-4 animate-spin text-white" /> Transmitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Transmit Parameters <FiSend className="w-4 h-4 ml-0.5" />
                    </span>
                  )}
                </GradientButton>

              </form>

            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
