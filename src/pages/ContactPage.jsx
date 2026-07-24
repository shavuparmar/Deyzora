import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: '₹25,000 – ₹50,000',
    projectType: 'New Project',
    timeline: '1-2 Weeks',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Valid email address is required';
    if (!formData.phone.trim()) errs.phone = 'Phone / WhatsApp number is required';
    if (!formData.message.trim()) errs.message = 'Please provide details about your project';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const formattedMessage = 
`*New Inquiry - Deyzora Infotech*
📌 *Name:* ${formData.name.trim()}
🏢 *Company:* ${formData.company.trim() || 'N/A'}
📧 *Email:* ${formData.email.trim()}
📞 *Phone:* ${formData.phone.trim()}
🛠️ *Service:* ${formData.service}
💰 *Budget Range:* ${formData.budget}
🚀 *Project Type:* ${formData.projectType}
⏱️ *Timeline:* ${formData.timeline}
💬 *Message:* ${formData.message.trim()}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919879001603?text=${encodedText}`;

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Open WhatsApp chat in new window
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <Helmet>
        <title>Contact Us | Deyzora Infotech - WhatsApp Inquiry</title>
        <meta name="description" content="Contact Deyzora Infotech. Send us a message for web development, app development, or UI/UX design via WhatsApp or email." />
        <link rel="canonical" href="https://deyzora.com/contact" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0070F3] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4">
            Direct Line & Inquiry
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Let's Build Something Great Together.
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Fill out the project scope below. Your inquiry will automatically format into a clean WhatsApp message sent directly to our lead engineering team.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-2">Send Project Brief</h2>
            <p className="text-xs text-white/60 mb-8">All fields marked with (*) are required. Prices strictly in INR (₹).</p>

            {success ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Opening WhatsApp Chat...</h3>
                <p className="text-sm text-white/70 max-w-md">
                  If WhatsApp did not open automatically, click the button below to connect with us directly.
                </p>
                <a
                  href={`https://wa.me/919879001603`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 bg-emerald-500 text-black font-bold px-6 py-3 rounded-full text-xs"
                >
                  <MessageSquare className="w-4 h-4" /> Open WhatsApp Manually
                </a>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-xs text-white/50 underline mt-2"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-white/90">
                      Your Full Name <span className="text-[#0070F3]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full h-12 px-4 rounded-xl bg-white/5 border ${
                        errors.name ? 'border-rose-500' : 'border-white/10 focus:border-[#0070F3]'
                      } text-white text-xs focus:outline-none transition-all`}
                      aria-required="true"
                    />
                    {errors.name && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</span>}
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-company" className="text-xs font-semibold text-white/90">
                      Company Name (Optional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="e.g. Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#0070F3] transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-white/90">
                      Work Email <span className="text-[#0070F3]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full h-12 px-4 rounded-xl bg-white/5 border ${
                        errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#0070F3]'
                      } text-white text-xs focus:outline-none transition-all`}
                      aria-required="true"
                    />
                    {errors.email && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-phone" className="text-xs font-semibold text-white/90">
                      Phone / WhatsApp <span className="text-[#0070F3]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="e.g. +91 98790 01603"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full h-12 px-4 rounded-xl bg-white/5 border ${
                        errors.phone ? 'border-rose-500' : 'border-white/10 focus:border-[#0070F3]'
                      } text-white text-xs focus:outline-none transition-all`}
                      aria-required="true"
                    />
                    {errors.phone && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Service */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-service" className="text-xs font-semibold text-white/90">Service Interested In</label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-[#121212] border border-white/10 text-white text-xs focus:outline-none focus:border-[#0070F3]"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Landing Page Development">Landing Page Development</option>
                      <option value="Business Website">Business Website</option>
                      <option value="Portfolio Website">Portfolio Website</option>
                      <option value="E-Commerce Development">E-Commerce Development</option>
                      <option value="Web Application">Web Application</option>
                      <option value="Admin Dashboard">Admin Dashboard</option>
                      <option value="UI UX Design">UI UX Design</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                      <option value="SEO Ready Website">SEO Ready Website</option>
                      <option value="Performance Optimization">Performance Optimization</option>
                    </select>
                  </div>

                  {/* Budget (Strictly INR ₹) */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-budget" className="text-xs font-semibold text-white/90">Budget Range (INR ₹)</label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-[#121212] border border-white/10 text-white text-xs focus:outline-none focus:border-[#0070F3]"
                    >
                      <option value="₹5,000–₹10,000">₹5,000 – ₹10,000</option>
                      <option value="₹10,000–₹25,000">₹10,000 – ₹25,000</option>
                      <option value="₹25,000–₹50,000">₹25,000 – ₹50,000</option>
                      <option value="₹50,000–₹1,00,000">₹50,000 – ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-type" className="text-xs font-semibold text-white/90">Project Type</label>
                    <select
                      id="contact-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-[#121212] border border-white/10 text-white text-xs focus:outline-none focus:border-[#0070F3]"
                    >
                      <option value="New Project">New Project from Scratch</option>
                      <option value="Website Redesign">Redesign Existing Website</option>
                      <option value="Bug Fix / Optimization">Bug Fix & Speed Boost</option>
                      <option value="Ongoing Maintenance">Maintenance & Retainer</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-timeline" className="text-xs font-semibold text-white/90">Desired Timeline</label>
                    <select
                      id="contact-timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-[#121212] border border-white/10 text-white text-xs focus:outline-none focus:border-[#0070F3]"
                    >
                      <option value="Urgent (< 1 Week)">Urgent (&lt; 1 Week)</option>
                      <option value="1-2 Weeks">1 - 2 Weeks</option>
                      <option value="2-4 Weeks">2 - 4 Weeks</option>
                      <option value="Flexible">Flexible / Open</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-white/90">
                    Project Details & Scope <span className="text-[#0070F3]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us what you want to build, reference websites you like, and core features required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full p-4 rounded-xl bg-white/5 border ${
                      errors.message ? 'border-rose-500' : 'border-white/10 focus:border-[#0070F3]'
                    } text-white text-xs focus:outline-none transition-all`}
                    aria-required="true"
                  />
                  {errors.message && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-full bg-[#0070F3] hover:bg-[#005bb5] text-white font-bold text-sm shadow-[0_0_30px_rgba(0,112,243,0.35)] flex items-center justify-center gap-2 transition-all hover:scale-105 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Formatting WhatsApp Brief...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Brief via WhatsApp</span>
                    </div>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white">Direct Agency Line</h3>

              <a 
                href={`https://wa.me/919879001603`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between group hover:bg-emerald-500/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Instant Support</div>
                    <div className="text-sm font-bold text-emerald-400">+91 9879001603</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-white/80 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>

              <div className="space-y-4 pt-2">
                <a href={`tel:+919879001603`} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#0070F3]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Phone Call</div>
                    <div className="text-sm font-semibold text-white">+91 9879001603</div>
                  </div>
                </a>

                <a href={`mailto:deyzorainfotech@gmail.com`} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#0070F3]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Email Address</div>
                    <div className="text-sm font-semibold text-white">deyzorainfotech@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#0070F3]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Headquarters</div>
                    <div className="text-sm font-semibold text-white">Surat, Gujarat, India - 395007</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#0070F3]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Business Hours</div>
                    <div className="text-sm font-semibold text-white">Mon - Sat: 9:00 AM - 7:00 PM IST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
