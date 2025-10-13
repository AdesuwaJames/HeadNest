import React from "react";
import { useNavigate } from "react-router-dom";

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-md p-6 sm:p-10 md:p-14 space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Last updated: <strong>October 2025</strong>
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using <strong>HeadNest</strong>, you agree to be
              bound by these Terms of Service and our Privacy Policy. If you do
              not agree, please discontinue use of our platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              2. Description of Service
            </h2>
            <p>
              HeadNest provides users with access to mental health care tools,
              therapy sessions, support communities, and wellness resources
              designed to make mental health support more affordable and
              stigma-free for young Nigerians.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              3. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide accurate and complete information when signing up.</li>
              <li>
                Use the platform only for lawful and intended purposes related
                to mental health and wellness.
              </li>
              <li>
                Respect the privacy and dignity of other users within therapy
                sessions and communities.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              4. No Emergency Services
            </h2>
            <p>
              HeadNest is <strong>not a substitute for emergency care</strong>.
              If you are in crisis or need immediate medical help, please
              contact local emergency services or crisis helplines in your area.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All content, branding, and platform features are the property of
              HeadNest and protected under applicable intellectual property laws.
              You may not copy, modify, or redistribute our content without
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              HeadNest is not liable for any indirect, incidental, or
              consequential damages arising from your use of the platform. We
              provide access to therapy and tools but do not guarantee specific
              outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              7. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access if you
              violate these terms or engage in harmful behavior on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              8. Changes to Terms
            </h2>
            <p>
              We may update these Terms periodically. Continued use of the
              platform after changes take effect constitutes your acceptance of
              the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              9. Contact Us
            </h2>
            <p>
              If you have questions or concerns about these Terms, please reach
              out to us at{" "}
              <a
                href="mailto:support@headnest.com"
                className="text-indigo-600 hover:underline"
              >
                support@headnest.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="flex justify-center pt-4">
        </div>
      </div>
    </div>
  );
}
