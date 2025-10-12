import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo and tagline section */}
        <div className="flex items-start mb-6">
          <img src="/NewLogo.png" alt="Headnest Logo" className="h-8 w-auto" />
        </div>

        <div className="grid grid-cols-4 gap-8 text-xs">
          {/* Headnest Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Headnest</h3>
            <p className="text-gray-600 leading-relaxed">
              Bringing calm, clarity, and connection to you everyday.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/about-us" className="hover:text-gray-800 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-gray-800 transition">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="hover:text-gray-800 transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <li>
                <Link to="/coming-soon" className="hover:text-gray-800 transition">
                  Blog
                </Link>
              </li>
              </li>
              <li>
                <Link to="/coming-soon" className="hover:text-gray-800">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/privacyPolicy" className="hover:text-gray-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-gray-800">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Connect</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="https://www.instagram.com/headnestapp?igsh=MTB5dnI5Z2FlMzlhYQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-800"
                >
                  Headnest on Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/headnestapp"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-800"
                >
                  Headnest on X
                </a>
              </li>
              <li>
                <a href="tel:+234801234567" className="hover:text-gray-800">
                  +234801234567
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@headnest.com"
                  className="hover:text-gray-800"
                >
                  FAQs & Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
