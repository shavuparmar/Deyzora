import { ShieldAlert } from 'lucide-react';
import LegalLayout from '../components/layout/LegalLayout';

export default function DMCAPolicy() {
  return (
    <LegalLayout
      title="DMCA Policy"
      icon={ShieldAlert}
      description="Digital Millennium Copyright Act (DMCA) Notice and Takedown Policy."
      lastUpdated="July 1, 2026"
    >
      <h2>1. Introduction</h2>
      <p>Deyzora Infotech ("we", "us", or "our") respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website, we will respond expeditiously to claims of copyright infringement committed using the Deyzora Infotech service and/or website.</p>

      <h2>2. DMCA Notice of Alleged Infringement</h2>
      <p>If you are a copyright owner, authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through our site by completing a DMCA Notice of Alleged Infringement.</p>
      
      <p>Upon receipt of Notice, Deyzora Infotech will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged content from the site.</p>

      <h2>3. Required Information for DMCA Notice</h2>
      <ul>
        <li>Identify the copyrighted work that you claim has been infringed.</li>
        <li>Identify the material or link you claim is infringing (or the subject of infringing activity).</li>
        <li>Provide your company affiliation (if applicable), mailing address, telephone number, and email address.</li>
        <li>Include both of the following statements in the body of the Notice:
          <ul>
            <li>"I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law."</li>
            <li>"I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed."</li>
          </ul>
        </li>
        <li>Provide your full legal name and your electronic or physical signature.</li>
      </ul>

      <h2>4. Submitting the Notice</h2>
      <p>Deliver this Notice, with all items completed, to our Designated Copyright Agent at:</p>
      <p>Email: <strong>deyzorainfotech@gmail.com</strong></p>
    </LegalLayout>
  );
}
