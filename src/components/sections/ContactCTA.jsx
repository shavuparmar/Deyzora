import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/company';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-black relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-14 overflow-hidden relative border border-white/10">
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Ready To Build Your Next Digital Asset?
              </h2>
              <p className="text-base text-white/70 leading-relaxed font-normal">
                Get a transparent proposal and project estimation within 2 hours. Zero pressure, zero jargon.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link 
                to="/contact" 
                className="h-14 px-8 rounded-full bg-[#0070F3] hover:bg-[#005bb5] text-white font-bold text-base shadow-[0_0_30px_rgba(0,112,243,0.35)] flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a 
                href={`https://wa.me/${companyInfo.whatsapp || '919879001603'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-14 px-6 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-bold hover:bg-white/10 transition-colors"
              >
                <MessageSquare className="w-5 h-5" /> Instant WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
