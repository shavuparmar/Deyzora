import { Scale } from'lucide-react';
import LegalLayout from'../components/layout/LegalLayout';

const TermsConditions = () => {
  return (
    <LegalLayout
      title="Terms & Conditions"
      icon={Scale}
      description="The rules, guidelines, and terms of service for engaging with Deyzora Infotech."
      lastUpdated={new Date().toLocaleDateString()}
    >
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing this website and engaging Deyzora Infotech for digital services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
      </section>
      
      <section>
        <h2>2. Intellectual Property</h2>
        <p>Upon final payment and project completion, all custom code, design assets, and digital properties created specifically for the client transfer to the client's ownership. However, Deyzora Infotech retains the right to display the completed work in our portfolio and marketing materials unless a strict Non-Disclosure Agreement (NDA) is signed prior to project commencement.</p>
      </section>
      
      <section>
        <h2>3. Services and Revisions</h2>
        <p>Our service packages include a defined scope of work. Any requests outside the agreed scope will be billed separately. We provide a reasonable number of revision rounds during the design phase. Extensive structural changes requested after the development phase has begun may incur additional costs.</p>
      </section>

      <section>
        <h2>4. Project Timelines</h2>
        <p>Estimated timelines are provided in the project proposal. While we strive to meet all deadlines, delays caused by the client (e.g., late feedback, delayed content delivery, scope changes) will result in an extension of the final delivery date. Deyzora Infotech is not liable for indirect losses caused by project delays.</p>
      </section>

      <section>
        <h2>5. Payment Terms</h2>
        <p>Unless explicitly stated otherwise in a custom contract, standard projects require a 50% non-refundable upfront deposit to commence work. The remaining 50% balance is due upon project completion and must be paid in full before the final product is deployed to production servers or source code is handed over.</p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>Deyzora Infotech shall not be held liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services, including but not limited to loss of profits, data, or business opportunities resulting from server downtime, third-party software bugs, or cybersecurity breaches beyond our direct control.</p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>We reserve the right to suspend or terminate services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms and Conditions or engage in hostile/abusive behavior toward our staff.</p>
      </section>
      
      <section>
        <h2>8. Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with local and international laws applicable to digital commerce, without regard to its conflict of law provisions.</p>
      </section>
    </LegalLayout>
  );
};

export default TermsConditions;
