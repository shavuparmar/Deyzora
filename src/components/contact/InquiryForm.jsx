import { useState } from'react';
import { Send, Paperclip, CheckCircle } from'lucide-react';
import Button from'../ui/Button';

const InquiryForm = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [formData, setFormData] = useState({
    name:'',
    company:'',
    email:'',
    phone:'',
    country:'',
    projectType:'web-development',
    budget:'',
    timeline:'',
    preferredTech:'',
    description:'',
    contactMethod:'email',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type ==='checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the privacy policy.");
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setFormData({
          name:'', company:'', email:'', phone:'', country:'',
          projectType:'web-development', budget:'', timeline:'', preferredTech:'',
          description:'', contactMethod:'email', agreed: false
        });
      }, 3000);
    }, 1500);
  };

  if (status ==='success') {
    return (
      <div className="glass-card p-12 rounded-3xl flex flex-col items-center justify-center text-center min-h-[600px]">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Inquiry Sent Successfully!</h3>
        <p className="text-gray-400 max-w-sm">
          Thank you for reaching out. One of our project managers will contact you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass ="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all";
  const labelClass ="block text-sm font-medium text-gray-400 mb-2";

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl" id="contact-form-section">
      <h2 className="text-3xl font-bold text-white mb-2">Project Details</h2>
      <p className="text-gray-400 mb-8">Fill out the form below to get a free consultation and project estimate.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={labelClass} htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Acme Inc." />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={labelClass} htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+1 (555) 000-0000" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className={labelClass} htmlFor="country">Country</label>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className={inputClass} placeholder="United States" />
        </div>
        <div>
          <label className={labelClass} htmlFor="budget">Estimated Budget</label>
          <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={`${inputClass} appearance-none`}>
            <option value="" disabled>Select Budget</option>
            <option value="under-1k">Under $1,000</option>
            <option value="1k-5k">$1,000 - $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k+">$10,000+</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="timeline">Timeline</label>
          <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className={`${inputClass} appearance-none`}>
            <option value="" disabled>Select Timeline</option>
            <option value="urgent">Asap (Urgent)</option>
            <option value="1-month">Within 1 Month</option>
            <option value="2-3-months">2 - 3 Months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={labelClass} htmlFor="projectType">Service Required *</label>
          <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange} className={`${inputClass} appearance-none`}>
            <option value="web-design">UI/UX & Web Design</option>
            <option value="web-development">Web Development</option>
            <option value="react">React.js Application</option>
            <option value="backend">Node.js Backend / APIs</option>
            <option value="wordpress">WordPress Development</option>
            <option value="poster">Poster & Graphic Design</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="preferredTech">Preferred Technology</label>
          <select id="preferredTech" name="preferredTech" value={formData.preferredTech} onChange={handleChange} className={`${inputClass} appearance-none`}>
            <option value="" disabled>Select Stack (Optional)</option>
            <option value="react-node">React + Node.js (MERN)</option>
            <option value="html-css">HTML, CSS, JS</option>
            <option value="wordpress">WordPress</option>
            <option value="postgres">PostgreSQL Backend</option>
            <option value="undecided">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className={labelClass} htmlFor="description">Project Description *</label>
        <textarea 
          id="description" 
          name="description" 
          required 
          rows="5"
          value={formData.description} 
          onChange={handleChange} 
          className={`${inputClass} resize-none`} 
          placeholder="Tell us about your goals, requirements, and any specific features you need..."
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className={labelClass} htmlFor="contactMethod">Preferred Contact Method</label>
          <div className="flex gap-4">
            {['email','phone','whatsapp','telegram'].map(method => (
              <label key={method} className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="radio" 
                  name="contactMethod" 
                  value={method} 
                  checked={formData.contactMethod === method}
                  onChange={handleChange}
                  className="hidden" 
                />
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${formData.contactMethod === method ?'border-primary bg-primary/20' :'border-gray-500 group-hover:border-primary'}`}>
                  {formData.contactMethod === method && <div className="w-2 h-2 rounded-full bg-primary" />}
                </div>
                <span className={`text-sm capitalize ${formData.contactMethod === method ?'text-white' :'text-gray-400'}`}>{method}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="flex items-end justify-end">
          <label className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors w-full md:w-auto justify-center">
            <Paperclip className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-300">Attach Brief (Max 5MB)</span>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <label className="relative flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            className="peer sr-only" 
            required
          />
          <div className="w-5 h-5 bg-white/5 border border-gray-500 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors flex items-center justify-center">
            {formData.agreed && <CheckCircle className="w-3 h-3 text-black" />}
          </div>
          <span className="ml-3 text-sm text-gray-400">
            I agree to the <a href="/privacy-policy" target="_blank" className="text-primary hover:underline">Privacy Policy</a> and consent to data processing.
          </span>
        </label>
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        className="w-full justify-center !py-4 text-lg" 
        disabled={status ==='loading'}
        icon={status ==='loading' ? <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" /> : <Send className="w-5 h-5" />}
      >
        {status ==='loading' ?'Sending...' :'Get Free Consultation'}
      </Button>
    </form>
  );
};

export default InquiryForm;
