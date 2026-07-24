import { Helmet } from 'react-helmet-async';
import { FileText, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <Helmet>
        <title>Terms & Conditions | Deyzora Infotech</title>
        <meta name="description" content="Terms and Conditions governing agency services provided by Deyzora Infotech." />
        <link rel="canonical" href="https://deyzora.com/terms-and-conditions" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0070F3] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            Legal Agreement
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Terms & Conditions</h1>
          <p className="text-sm text-white/60">Last updated: July 2026</p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8 text-white/80 text-sm leading-relaxed border border-white/10">
          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#0070F3]" /> 1. Agreement Scope
            </h2>
            <p>
              By accessing or engaging Deyzora Infotech for web development, UI/UX design, or cloud software engineering, you agree to comply with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#50E3C2]" /> 2. Intellectual Property & Handoff
            </h2>
            <p>
              Upon 100% completion of agreed milestone payments, full intellectual property rights, source code, and design assets are transferred to the client. Deyzora Infotech retains the right to showcase non-confidential work in our portfolio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" /> 3. Payment & Milestone Schedules
            </h2>
            <p>
              Project invoices are payable according to agreed milestone schedules (e.g. 50% upfront, 50% upon deployment). Delayed payments beyond 14 days may pause development.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
