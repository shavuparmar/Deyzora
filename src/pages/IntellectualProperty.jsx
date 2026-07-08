import { Lightbulb } from 'lucide-react';
import LegalLayout from '../components/layout/LegalLayout';

export default function IntellectualProperty() {
  return (
    <LegalLayout
      title="Intellectual Property Policy"
      icon={Lightbulb}
      description="Guidelines regarding the ownership and licensing of Intellectual Property."
      lastUpdated="July 1, 2026"
    >
      <h2>1. Pre-existing Intellectual Property</h2>
      <p>Any pre-existing tools, libraries, codebases, frameworks, or methodologies (collectively, "Background IP") owned by Deyzora Infotech prior to the commencement of any project remain the sole property of Deyzora Infotech. When such Background IP is incorporated into a client project, Deyzora Infotech grants the client a non-exclusive, perpetual, worldwide, royalty-free license to use that Background IP solely as part of the delivered project.</p>

      <h2>2. Client Intellectual Property</h2>
      <p>All materials, logos, branding assets, and proprietary information provided by the client to Deyzora Infotech for the purpose of executing a project remain the sole property of the client. The client grants us a limited license to use these materials strictly for the development and execution of the requested services.</p>

      <h2>3. Custom Deliverables</h2>
      <p>For custom software, designs, and code written specifically for the client ("Foreground IP"), full ownership and copyright are transferred to the client upon receipt of final payment, subject to the licensing of any Background IP as described in Section 1.</p>

      <h2>4. Third-Party Licenses</h2>
      <p>Projects may utilize open-source software, commercial fonts, stock imagery, or third-party APIs. Ownership of these elements remains with their respective creators, and the client agrees to abide by the licensing terms of those third-party assets.</p>

      <h2>5. Portfolio Rights</h2>
      <p>Unless expressly forbidden by a signed Non-Disclosure Agreement (NDA), Deyzora Infotech retains the right to showcase the completed project in our portfolio, case studies, and marketing materials as a demonstration of our work.</p>
    </LegalLayout>
  );
}
