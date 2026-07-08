import { Activity } from 'lucide-react';
import LegalLayout from '../components/layout/LegalLayout';

export default function SLA() {
  return (
    <LegalLayout
      title="Service Level Agreement (SLA)"
      icon={Activity}
      description="Performance guarantees and support metrics for Deyzora Infotech clients."
      lastUpdated="July 1, 2026"
    >
      <h2>1. Service Commitment</h2>
      <p>Deyzora Infotech is committed to providing reliable, high-performance digital solutions. For clients subscribed to our Managed Hosting and Maintenance plans, this Service Level Agreement (SLA) outlines our commitments regarding uptime, response times, and issue resolution.</p>

      <h2>2. Uptime Guarantee</h2>
      <p>We guarantee a <strong>99.9% network and server uptime</strong> for all managed hosting environments, excluding scheduled maintenance. Uptime is calculated over a calendar month.</p>
      
      <h2>3. Support Response Times</h2>
      <p>Our team categorizes support requests based on severity to ensure critical issues are addressed immediately:</p>
      <ul>
        <li><strong>Severity 1 (Critical - Site Offline):</strong> Response within 1 hour. Resolution updates every 2 hours until resolved.</li>
        <li><strong>Severity 2 (High - Major Functionality Broken):</strong> Response within 4 hours during business hours.</li>
        <li><strong>Severity 3 (Normal - Minor Bugs / Content Updates):</strong> Response within 24 business hours.</li>
      </ul>
      <p><em>Business hours are Monday to Saturday, 10:00 AM to 7:00 PM (IST).</em></p>

      <h2>4. Scheduled Maintenance</h2>
      <p>To ensure optimal performance and security, we occasionally perform scheduled maintenance. We will notify clients at least 48 hours in advance for any maintenance that may result in more than 15 minutes of downtime. Scheduled maintenance is typically performed during low-traffic hours.</p>

      <h2>5. SLA Credits</h2>
      <p>If we fail to meet the 99.9% uptime guarantee in a given month, eligible clients may request a prorated credit toward their next month's hosting/maintenance fee, subject to the terms outlined in their specific contract. Credits do not apply to downtime caused by third-party services, client modifications, or force majeure events.</p>
    </LegalLayout>
  );
}
