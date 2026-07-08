import { ShieldCheck } from 'lucide-react';
import LegalLayout from '../components/layout/LegalLayout';

export default function AcceptableUsePolicy() {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      icon={ShieldCheck}
      description="Guidelines for the acceptable use of Deyzora Infotech's services and platforms."
      lastUpdated="July 1, 2026"
    >
      <h2>1. Overview</h2>
      <p>This Acceptable Use Policy outlines the acceptable and prohibited uses of the services provided by Deyzora Infotech. By using our services, including web hosting, development platforms, and communication channels, you agree to comply with this policy.</p>

      <h2>2. Prohibited Activities</h2>
      <p>You may not use our services to:</p>
      <ul>
        <li>Host, distribute, or link to illegal, fraudulent, or malicious content (including malware or phishing sites).</li>
        <li>Engage in sending unsolicited bulk email (SPAM) or deceptive marketing practices.</li>
        <li>Violate the intellectual property rights, privacy rights, or other legal rights of any third party.</li>
        <li>Attempt to compromise the security or integrity of our network, servers, or any associated infrastructure.</li>
        <li>Host content that promotes violence, discrimination, or hate speech.</li>
      </ul>

      <h2>3. Resource Usage</h2>
      <p>For clients on our shared or managed hosting plans, resource usage (CPU, RAM, Bandwidth) must remain within acceptable limits. We reserve the right to throttle or temporarily suspend accounts that experience massive traffic spikes that degrade the performance of our infrastructure for other clients, unless a dedicated enterprise plan is in place.</p>

      <h2>4. Enforcement and Termination</h2>
      <p>Deyzora Infotech reserves the right to monitor compliance with this policy. Violations may result in immediate suspension or termination of your services without a refund, and may be reported to appropriate law enforcement agencies.</p>

      <h2>5. Updates to this Policy</h2>
      <p>We may modify this policy at any time. Continued use of our services after modifications constitutes your acceptance of the revised policy.</p>
    </LegalLayout>
  );
}
