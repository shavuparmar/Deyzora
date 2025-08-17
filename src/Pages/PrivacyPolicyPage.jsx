import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicyPage() {
const Navigate = useNavigate();
const Handleback =()=>{
  Navigate(-1)
}






  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <div className="flex items-center gap-2 cursor-pointer"
        onClick={Handleback}
        >
          <FaArrowAltCircleLeft/>
          <span className="text-black text-xl font-semibold">Back</span>

        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website or use our services.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-600">
            We may collect personal information that you provide directly to us,
            such as your name, email address, phone number, and any other
            details you submit when using our services. Additionally, we may
            automatically collect certain technical information including your
            IP address, browser type, and device information.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600">
            We use the information we collect to provide, improve, and
            personalize our services, communicate with you, send updates,
            process transactions, and protect against fraud or unauthorized
            activity.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Sharing of Information
          </h2>
          <p className="text-gray-600">
            We do not sell your personal information. However, we may share your
            information with trusted third parties who assist us in operating
            our website, conducting our business, or servicing you, as long as
            those parties agree to keep this information confidential.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Data Security
          </h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal
            information. However, please note that no method of transmission
            over the Internet or method of electronic storage is 100% secure.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Your Privacy Rights
          </h2>
          <p className="text-gray-600">
            Depending on your location, you may have rights under applicable
            privacy laws to access, correct, or delete your personal
            information. You may also have the right to opt out of certain data
            processing practices.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Cookies and Tracking
          </h2>
          <p className="text-gray-600">
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience and analyze usage patterns. You can
            control cookie preferences through your browser settings.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            7. Third-Party Links
          </h2>
          <p className="text-gray-600">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those websites.
            We encourage you to read their privacy policies before providing any
            personal information.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            8. Changes to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated “Last Updated” date.
          </p>
        </div>

        {/* Section 9 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            9. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p className="text-gray-600 mt-2">
            📧 Email: <span className="font-medium">support@example.com</span>
          </p>
          <p className="text-gray-600">
            📍 Address: <span className="font-medium">123 Web Street, Tech City, India</span>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>Last Updated: August 2025</p>
        </div>
      </div>
    </div>
  );
}
