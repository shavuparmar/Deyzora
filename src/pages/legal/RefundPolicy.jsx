import { Helmet } from 'react-helmet-async';
import { RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <Helmet>
        <title>Refund & Cancellation Policy | Deyzora Infotech</title>
        <meta name="description" content="Refund and cancellation policy for Deyzora Infotech services." />
        <link rel="canonical" href="https://deyzora.com/refund-policy" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0070F3] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            Client Protection
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Refund Policy</h1>
          <p className="text-sm text-white/60">Last updated: July 2026</p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8 text-white/80 text-sm leading-relaxed border border-white/10">
          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#0070F3]" /> 1. Refund Eligibility
            </h2>
            <p>
              We strive for 100% satisfaction. If a project is cancelled prior to design approval or code development start, a 100% full refund of the initial deposit is processed within 5 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" /> 2. Completed Milestones
            </h2>
            <p>
              Once a milestone is reviewed, approved, and handed over to client production servers, payments for that completed milestone are non-refundable.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
