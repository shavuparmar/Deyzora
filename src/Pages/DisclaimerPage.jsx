import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DisclaimerPage() {
    const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Goes back one step in browser history
  };
  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8 lg:px-24">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleBack}
          >
            <FaArrowAltCircleLeft size={18} />
            <span className="text-black text-xl font-semibold">Back</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Disclaimer
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            This Disclaimer page outlines the limitations of liability and
            important information about using our website and services. By using
            our services, you acknowledge and accept this disclaimer.
          </p>

          {/* Section 1 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. General Information
            </h2>
            <p className="text-gray-600">
              The information provided on this website is for general
              informational purposes only. While we strive to ensure accuracy,
              we make no guarantees about the completeness, reliability, or
              accuracy of the content.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. No Professional Advice
            </h2>
            <p className="text-gray-600">
              The content on this site does not constitute professional advice
              of any kind (including legal, financial, or technical advice). You
              should always consult with a qualified professional before making
              decisions based on information from this website.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. External Links
            </h2>
            <p className="text-gray-600">
              Our website may contain links to third-party websites. We are not
              responsible for the content, accuracy, or reliability of any
              third-party sites linked from our platform. Visiting such websites
              is at your own risk.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              We will not be liable for any losses or damages, direct or
              indirect, arising from the use of our website or reliance on any
              information provided. Use of this website is at your sole
              discretion and risk.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Changes to This Disclaimer
            </h2>
            <p className="text-gray-600">
              We may update this Disclaimer at any time without prior notice.
              Any changes will be reflected on this page with an updated “Last
              Updated” date.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              6. Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions about this Disclaimer, please contact
              us:
            </p>
            <p className="text-gray-600 mt-2">
              📧 Email: <span className="font-medium">support@example.com</span>
            </p>
            <p className="text-gray-600">
              📍 Address:{" "}
              <span className="font-medium">
                123 Web Street, Tech City, India
              </span>
            </p>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm mt-8">
            <p>Last Updated: August 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}
