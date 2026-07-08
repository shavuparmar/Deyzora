import { MessageCircle, Send, Instagram, Linkedin, Mail, Phone, Clock, Zap } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

const connectLinks = [
  {
    title: 'WhatsApp',
    value: '+91 9879009603',
    icon: MessageCircle,
    color: 'text-green-500',
    link: 'https://wa.me/919879009603',
    bg: 'bg-green-500/10 border-green-500/20'
  },
  {
    title: 'Telegram',
    value: '@deyzorainfotech',
    icon: Send,
    color: 'text-blue-500',
    link: 'https://t.me/deyzorainfotech',
    bg: 'bg-blue-500/10 border-blue-500/20'
  },
  {
    title: 'Instagram',
    value: '@deyzorainfotech',
    icon: Instagram,
    color: 'text-pink-500',
    link: 'https://instagram.com/deyzorainfotech',
    bg: 'bg-pink-500/10 border-pink-500/20'
  },
  {
    title: 'LinkedIn',
    value: 'Deyzora Infotech',
    icon: Linkedin,
    color: 'text-blue-600',
    link: 'https://linkedin.com/company/deyzorainfotech',
    bg: 'bg-blue-600/10 border-blue-600/20'
  }
];

export default function Location() {
  return (
    <section className="section-padding bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
              Connect With Us
            </h2>
            <p className="text-xl text-[var(--color-text-gray)] leading-relaxed">
              We prioritize fast, clear, and direct communication. Reach out on your preferred platform.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-full px-4 py-2 shrink-0">
             <Zap className="w-4 h-4 text-yellow-500" />
             <span className="text-sm font-medium text-white">Avg. Response Time: Under 2 Hours</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Social Links */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {connectLinks.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="p-6 h-full flex items-center gap-6 hover:border-[var(--color-border-hover)] transition-all">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.bg} group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-gray)] mb-1">{item.title}</h3>
                    <p className="text-lg font-medium text-white group-hover:text-[var(--color-primary)] transition-colors">{item.value}</p>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Card className="p-8 flex-1 flex flex-col justify-center gap-8 bg-[var(--color-bg-surface-light)]">
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] flex items-center justify-center shrink-0">
                   <Phone className="w-4 h-4 text-white" />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-[var(--color-text-gray)] uppercase tracking-wider mb-1">Direct Line</h4>
                   <a href="tel:+919879009603" className="text-lg font-medium text-white hover:text-[var(--color-primary)] transition-colors">+91 9879009603</a>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] flex items-center justify-center shrink-0">
                   <Mail className="w-4 h-4 text-white" />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-[var(--color-text-gray)] uppercase tracking-wider mb-1">Email</h4>
                   <a href="mailto:deyzorainfotech@gmail.com" className="text-lg font-medium text-white hover:text-[var(--color-primary)] transition-colors">deyzorainfotech@gmail.com</a>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] flex items-center justify-center shrink-0">
                   <Clock className="w-4 h-4 text-white" />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-[var(--color-text-gray)] uppercase tracking-wider mb-1">Business Hours</h4>
                   <p className="text-lg font-medium text-white">Mon - Sat: 10:00 AM - 7:00 PM (IST)</p>
                   <p className="text-sm text-[var(--color-text-gray)] mt-1">Sunday: Closed</p>
                 </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
