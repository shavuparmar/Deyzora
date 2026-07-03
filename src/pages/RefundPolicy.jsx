import { Banknote } from'lucide-react';
import LegalLayout from'../components/layout/LegalLayout';

const RefundPolicy = () => {
  return (
    <LegalLayout
      title="Refund Policy"
      icon={Banknote}
      description="Refund eligibility and guidelines for digital services provided by Deyzora Infotech."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <section>
        <h2>1. General Nature of Digital Services</h2>
        <p>Because Deyzora Infotech provides highly customized, labor-intensive digital services (such as UI/UX design, custom web development, and backend engineering), our work cannot be"returned" in a traditional sense. Therefore, refunds are not automatically granted once work has commenced.</p>
      </section>
      
      <section>
        <h2>2. Refund Eligibility</h2>
        <p>Refunds may only be considered under the following strict conditions:</p>
        <ul>
          <li><strong>Before Project Commencement:</strong> If you request a refund before our team has begun any strategic planning, design, or coding work (usually within 24 hours of payment), a full refund (minus any payment gateway processing fees) will be issued.</li>
          <li><strong>Failure to Deliver:</strong> In the highly unlikely event that Deyzora Infotech completely fails to deliver the agreed-upon project scope within a mutually extended timeline, a partial or full refund may be negotiated.</li>
        </ul>
      </section>
      
      <section>
        <h2>3. Non-Refundable Services</h2>
        <p>The following services are strictly non-refundable once execution has started:</p>
        <ul>
          <li>Custom UI/UX Design and Wireframing</li>
          <li>Custom Code Development (React, Node.js, etc.)</li>
          <li>Third-party purchases made on your behalf (Domain names, SSL certificates, Premium Plugins, Hosting)</li>
          <li>SEO setup and marketing campaigns</li>
        </ul>
      </section>

      <section>
        <h2>4. Revisions Instead of Refunds</h2>
        <p>We are committed to delivering excellence. If you are dissatisfied with a specific deliverable, we encourage you to utilize the revision rounds included in your package. We will work diligently to align the output with your original project brief.</p>
      </section>

      <section>
        <h2>5. Requesting a Review</h2>
        <p>If you believe your situation warrants an exception to this policy, please contact management directly at <a href="mailto:deyzorainfotech@gmail.com">deyzorainfotech@gmail.com</a> with a detailed explanation of your concerns.</p>
      </section>
    </LegalLayout>
  );
};

export default RefundPolicy;
