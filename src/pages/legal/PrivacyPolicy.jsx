import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <Helmet>
        <title>Privacy Policy | Deyzora Infotech</title>
        <meta name="description" content="Privacy Policy of Deyzora Infotech detailing how user data is collected, processed, and protected." />
        <link rel="canonical" href="https://deyzora.com/privacy-policy" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0070F3] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            Legal & Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-sm text-white/60">Last updated: July 2026</p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8 text-white/80 text-sm leading-relaxed border border-white/10">
          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0070F3]" /> 1. Data Collection & Privacy Commitment
            </h2>
            <p>
              Deyzora Infotech ("we", "our", "us") is dedicated to protecting your privacy. We collect minimal personal information strictly necessary for responding to inquiries, building custom web solutions, and managing client services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#50E3C2]" /> 2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name provided via contact forms or WhatsApp.</li>
              <li><strong>Project Data:</strong> Technical briefs, wireframes, and project specifications submitted for estimation.</li>
              <li><strong>Usage Analytics:</strong> Anonymous browser type, IP address, and page interaction metrics for performance optimization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-emerald-400" /> 3. Data Protection & Security
            </h2>
            <p>
              We implement bank-grade SSL encryption and secure cloud servers (Vercel & AWS) to prevent unauthorized access. We never sell, rent, or trade your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#0070F3]" /> 4. Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data at any time by emailing us at <a href="mailto:contact@deyzora.com" className="text-[#0070F3] underline">contact@deyzora.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
