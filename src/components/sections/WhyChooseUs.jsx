import { 
  Zap, Smartphone, ShieldCheck, Search, Code2, HeartHandshake, 
  DollarSign 
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Sub-Second Speed",
    desc: "Websites engineered to load in under 0.5s so you never lose high-intent leads.",
    span: "lg:col-span-2"
  },
  {
    icon: Smartphone,
    title: "Mobile-First UX",
    desc: "Seamless, responsive interfaces built to feel like native apps on iOS and Android.",
    span: "lg:col-span-1"
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Zero hidden costs, milestone payments, and straightforward agency quotes.",
    span: "lg:col-span-1"
  },
  {
    icon: Search,
    title: "Built-In SEO Architecture",
    desc: "Semantic HTML5, Schema markup, and Google Search Console integration out of the box.",
    span: "lg:col-span-2"
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    desc: "SSL certificates, DDoS edge mitigation, and automated off-site daily backups.",
    span: "lg:col-span-1"
  },
  {
    icon: Code2,
    title: "Clean React Stack",
    desc: "Component-driven architecture for rapid updates, zero dead code, and zero bloat.",
    span: "lg:col-span-1"
  },
  {
    icon: HeartHandshake,
    title: "24/7 Priority Support",
    desc: "Direct WhatsApp & Email access to engineering team with sub-hour response times.",
    span: "lg:col-span-1"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black border-y border-white/10 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0070F3] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full mb-4">
            The Deyzora Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Why High-Growth Brands Choose Us
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Engineering precision, luxury UI design, and bulletproof infrastructure built for scale.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className={`glass-card rounded-3xl p-8 flex flex-col justify-between group ${item.span}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#0070F3] group-hover:text-white transition-all duration-300">
                  <IconComp className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#50E3C2] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
