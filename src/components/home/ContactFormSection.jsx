import { useForm } from 'react-hook-form';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export default function ContactFormSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    reset();
    alert("Message sent successfully!");
  };

  return (
    <section className="section-padding bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)]" id="contact">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
              Let's Start a Conversation
            </h2>
            <p className="text-xl text-[var(--color-text-gray)] mb-12 max-w-md leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours to discuss your project requirements.
            </p>

            <div className="flex flex-col gap-8">
              {[
                { icon: Phone, title: 'Phone', content: '+91 9879009603', link: 'tel:+919879009603' },
                { icon: Mail, title: 'Email', content: 'deyzorainfotech@gmail.com', link: 'mailto:deyzorainfotech@gmail.com' },
                { icon: MapPin, title: 'Location', content: 'Surat, Gujarat, India', link: '#' },
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-poppins mb-1">{item.title}</h4>
                    <a href={item.link} className="text-[var(--color-text-gray)] hover:text-white transition-colors">
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card className="p-8 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-gray)] mb-2">Full Name *</label>
                  <input 
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-gray)] mb-2">Email Address *</label>
                  <input 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-gray)] mb-2">Phone Number</label>
                  <input 
                    {...register("phone")}
                    className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="+91 9879009603"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-gray)] mb-2">Company</label>
                  <input 
                    {...register("company")}
                    className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-gray)] mb-2">Service Required *</label>
                  <select 
                    {...register("service", { required: "Please select a service" })}
                    className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none [&>option]:bg-[var(--color-bg-dark)]"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Development</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="design">Graphic Design</option>
                    <option value="logo">Logo Design</option>
                  </select>
                  {errors.service && <span className="text-red-400 text-xs mt-1 block">{errors.service.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-gray)] mb-2">Estimated Budget *</label>
                  <select 
                    {...register("budget", { required: "Please select a budget" })}
                    className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none [&>option]:bg-[var(--color-bg-dark)]"
                  >
                    <option value="">Select budget range</option>
                    <option value="under_1k">Under $1,000</option>
                    <option value="1k_to_5k">$1,000 - $5,000</option>
                    <option value="5k_to_10k">$5,000 - $10,000</option>
                    <option value="above_10k">Above $10,000</option>
                  </select>
                  {errors.budget && <span className="text-red-400 text-xs mt-1 block">{errors.budget.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-gray)] mb-2">Project Details *</label>
                <textarea 
                  {...register("message", { required: "Please provide some details" })}
                  rows="4"
                  className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  placeholder="Tell us about your project goals and requirements..."
                ></textarea>
                {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-2"
                size="lg"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
