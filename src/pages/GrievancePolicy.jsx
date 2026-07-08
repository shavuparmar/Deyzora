import { HelpCircle } from 'lucide-react';
import LegalLayout from '../components/layout/LegalLayout';

export default function GrievancePolicy() {
  return (
    <LegalLayout
      title="Contact & Grievance Policy"
      icon={HelpCircle}
      description="Procedures for filing complaints and resolving disputes."
      lastUpdated="July 1, 2026"
    >
      <h2>1. Purpose</h2>
      <p>Deyzora Infotech is committed to providing exceptional service. This Grievance Policy outlines the procedure for users, clients, and third parties to report issues, complaints, or disputes regarding our services, employees, or website content.</p>

      <h2>2. How to File a Grievance</h2>
      <p>If you have a concern or complaint, you may submit it to our designated Grievance Officer in writing via email or physical mail. Please include the following details:</p>
      <ul>
        <li>Your full name and contact information.</li>
        <li>A detailed description of the grievance, including relevant dates and project names (if applicable).</li>
        <li>Any supporting evidence, documentation, or correspondence.</li>
        <li>Your expected resolution.</li>
      </ul>

      <h2>3. Grievance Officer Contact Information</h2>
      <p><strong>Name:</strong> Grievance Officer<br />
      <strong>Email:</strong> deyzorainfotech@gmail.com<br />
      <strong>Address:</strong> Surat, Gujarat, India</p>

      <h2>4. Resolution Process</h2>
      <p>Upon receiving a grievance:</p>
      <ol>
        <li>We will acknowledge receipt within 48 business hours.</li>
        <li>The Grievance Officer will conduct an impartial investigation into the matter.</li>
        <li>We aim to provide a formal response and proposed resolution within 15 business days. Complex issues requiring deeper technical investigation may take longer, in which case you will be notified of the extended timeline.</li>
      </ol>

      <h2>5. Escalation</h2>
      <p>If you are unsatisfied with the resolution provided by the Grievance Officer, you may escalate the issue to the executive management team by replying to the resolution email and requesting an executive review.</p>
    </LegalLayout>
  );
}
