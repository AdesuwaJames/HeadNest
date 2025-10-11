import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo and tagline section */}
        <div className="flex items-start mb-6">
          <img
            src="/NewLogo.png"
            alt="Headnest Logo"
            className="h-8 w-auto"
          />
        </div>
        
        <div className="grid grid-cols-4 gap-8 text-xs">
          {/* Headnest Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Headnest</h3>
            <p className="text-gray-600 leading-relaxed">
              Bringing calm, clarity, and connection to your everyday.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Join Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Reviews</a>
              </li>
              <li>
                <Link to="/privacyPolicy" className="hover:text-gray-800">Privacy Policy</Link>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Terms of service</a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Connect</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-800">
                  Headnest on Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-800">
                  Headnest on X
                </a>
              </li>
              <li>
                <a href="tel:+234801234567" className="hover:text-gray-800">+234801234567</a>
              </li>
              <li>
                <a href="mailto:support@headnest.com" className="hover:text-gray-800">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}