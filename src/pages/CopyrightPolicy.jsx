import { Copy } from 'lucide-react';
import LegalLayout from '../components/layout/LegalLayout';

export default function CopyrightPolicy() {
  return (
    <LegalLayout
      title="Copyright Policy"
      icon={Copy}
      description="Information regarding the copyright of content on Deyzora Infotech."
      lastUpdated="July 1, 2026"
    >
      <h2>1. Ownership of Materials</h2>
      <p>All content, designs, graphics, code, and textual materials on this website are the exclusive property of Deyzora Infotech unless otherwise noted. These materials are protected by international copyright laws and treaties.</p>

      <h2>2. Client Projects & Deliverables</h2>
      <p>Upon final payment and project completion, Deyzora Infotech transfers full copyright ownership of the final delivered code, designs, and assets to the client, unless explicitly stated otherwise in a separate written agreement (such as for licensed third-party plugins or open-source libraries).</p>
      
      <p>Deyzora Infotech reserves the right to display completed projects in our portfolio, case studies, and marketing materials unless a Non-Disclosure Agreement (NDA) has been signed preventing such display.</p>

      <h2>3. Restrictions on Website Content</h2>
      <p>You may not copy, reproduce, distribute, publish, display, perform, modify, create derivative works, transmit, or in any way exploit any part of our website content without prior written permission from Deyzora Infotech.</p>

      <h2>4. Reporting Infringement</h2>
      <p>If you believe that your work has been copied in a way that constitutes copyright infringement, please refer to our DMCA Policy or contact us immediately at <strong>deyzorainfotech@gmail.com</strong>.</p>
    </LegalLayout>
  );
}
