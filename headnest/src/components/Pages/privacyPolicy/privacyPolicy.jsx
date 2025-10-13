import React from "react";
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";


export default function PrivacyPolicy() {
  


  const navigate = useNavigate(); 
  const handleGoBack = () => {
    navigate("/"); 
  };
  
  
  // Define colors based on the CommunitySelection theme
  const primaryText = 'text-[#2d3a4a]'; // Dark blue/gray
  const secondaryBg = 'bg-[#f7f7f7]'; // Light background
  const cardBg = 'bg-white';
  const brandBlue = 'text-[#4e7bbf]'; // Link blue
  const primaryButtonBg = 'bg-[#4e7bbf]'; 
  // const darkButtonBg = 'text-[#3b4b5a]';
  const shadowStyle = 'shadow-xl';

  return (
    <div className={`min-h-screen ${secondaryBg} p-5 md:p-10 font-sans`}>
      <div className={`max-w-[900px] mx-auto ${cardBg} p-6 md:p-12 rounded-2xl ${shadowStyle} border border-gray-100`}>
        
        {/* Back Button */}
        <button
          aria-label="Back to settings"
          className={`flex items-center text-lg ${primaryText} hover:text-[#4e7bbf] transition-colors mb-6 p-2 rounded-lg`}
          onClick={handleGoBack}
        >
          <ChevronLeft className="w-6 h-6 mr-1" />
          Back
        </button>

        <h1 className={`text-center mb-4 ${primaryText} text-3xl md:text-4xl font-extrabold`}>
          Headnest Privacy Policy
        </h1>
        <p className={`text-center mb-8 text-gray-500 text-sm`}>
          Effective Date: 27th July 2025 (subject to updates)
        </p>

        <section className="mb-8">
          <h2 className={`text-xl mt-6 mb-3 ${primaryText} font-bold border-b pb-2 border-gray-100`}>Introduction</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Headnest is committed to protecting the privacy and security of its users. This Privacy
            Policy outlines how we collect, use, and disclose personal data in accordance with
            applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-xl mt-6 mb-3 ${primaryText} font-bold border-b pb-2 border-gray-100`}>
            Information We Collect
          </h2>
          <ul className="ml-5 mb-4 list-disc space-y-2 text-gray-700">
            <li>
              <strong className="font-semibold">Personal Data:</strong> Name, email address, and
              other identifying information provided during registration.
            </li>
            <li>
              <strong className="font-semibold">Mental Health Data:</strong> Information shared about
              mental health, including thoughts, feelings, and experiences.
            </li>
            <li>
              <strong className="font-semibold">Usage Data:</strong> App usage patterns, including
              login frequency and feature utilization.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`text-xl mt-6 mb-3 ${primaryText} font-bold border-b pb-2 border-gray-100`}>
            How We Use Your Data
          </h2>
          <ul className="ml-5 mb-4 list-disc space-y-2 text-gray-700">
            <li>
              <strong className="font-semibold">Providing Services:</strong> To deliver mental health
              support, resources, and tools.
            </li>
            <li>
              <strong className="font-semibold">Personalization:</strong> To tailor the app experience
              to individual needs and preferences.
            </li>
            <li>
              <strong className="font-semibold">Improvement:</strong> To analyze usage patterns and
              enhance the app's effectiveness.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`text-xl mt-6 mb-3 ${primaryText} font-bold border-b pb-2 border-gray-100`}>
            Data Sharing and Disclosure
          </h2>
          <ul className="ml-5 mb-4 list-disc space-y-2 text-gray-700">
            <li>
              <strong className="font-semibold">Confidentiality:</strong> We maintain confidentiality
              and do not share personal data with third parties without consent, except as required by
              law.
            </li>
            <li>
              <strong className="font-semibold">Service Providers:</strong> We may share data with
              trusted service providers who assist in app development and maintenance.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`text-xl mt-6 mb-3 ${primaryText} font-bold border-b pb-2 border-gray-100`}>Security Measures</h2>
          <ul className="ml-5 mb-4 list-disc space-y-2 text-gray-700">
            <li>
              <strong className="font-semibold">Encryption:</strong> We use industry-standard
              encryption to protect data in transit and at rest.
            </li>
            <li>
              <strong className="font-semibold">Access Controls:</strong> We implement strict access
              controls to ensure only authorized personnel can access user data.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`text-xl mt-6 mb-3 ${primaryText} font-bold border-b pb-2 border-gray-100`}>User Rights</h2>
          <ul className="ml-5 mb-4 list-disc space-y-2 text-gray-700">
            <li>
              <strong className="font-semibold">Access:</strong> You have the right to access and
              review your personal data.
            </li>
            <li>
              <strong className="font-semibold">Correction:</strong> You can update or correct your
              personal data.
            </li>
            <li>
              <strong className="font-semibold">Deletion:</strong> You can request deletion of your
              personal data.
            </li>
            <li>
              <strong className="font-semibold">Withdrawal:</strong> You can withdraw your consent at
              any time of our processing of your data.
            </li>
            <li>
              <strong className="font-semibold">Complaint:</strong> Lodge a complaint with the Nigeria
              Data Protection Commission at{" "}
              <a href="https://ndpc.gov.ng/" className={`${brandBlue} hover:underline font-medium`}>
                https://ndpc.gov.ng/
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`text-xl mt-6 mb-3 ${primaryText} font-bold border-b pb-2 border-gray-100`}>
            Breach/Privacy Violation
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            In the event of a breach of security leading to the accidental or unlawful destruction,
            loss, alteration, unauthorized disclosure of, or access to Personal Data, Headnest shall
            within 72 (Seventy-Two) hours of having knowledge of such breach report the details of the
            breach to the Commission...
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-xl mt-6 mb-3 ${primaryText} font-bold border-b pb-2 border-gray-100`}>
            Changes to This Policy
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            We reserve the right to update this Privacy Policy. If we make changes, we will notify you
            by revising the date at the top of this policy, and we may provide you with additional
            notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-xl mt-6 mb-3 ${primaryText} font-bold border-b pb-2 border-gray-100`}>Contact Us</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            If you have questions or concerns about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@headnestapp.com" className={`${brandBlue} hover:underline font-medium`}>
              privacy@headnestapp.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-xl mt-6 mb-3 ${primaryText} font-bold border-b pb-2 border-gray-100`}>Consent</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            By using Headnest, you consent to this Privacy Policy and our data practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-xl mt-6 mb-3 ${primaryText} font-bold border-b pb-2 border-gray-100`}>
            Additional Considerations
          </h2>
          <ul className="ml-5 mb-4 list-disc space-y-2 text-gray-700">
            <li>
              <strong className="font-semibold">Anonymization:</strong> We may anonymize data for
              research and analytics purposes.
            </li>
            <li>
              <strong className="font-semibold">Data Retention:</strong> We retain data for as long as
              necessary to provide services and fulfill legal obligations.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
