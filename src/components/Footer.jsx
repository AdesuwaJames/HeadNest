import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 px-6 py-10">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center mb-3">
            <img
              src="/NewLogo.png"
              alt="Headnest Logo"
              className="h-10 w-auto mr-3"
            />
          </div>
          <p className="text-sm text-gray-500">
            Bringing calm, clarity, and connection to your everyday.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Join Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <Link to="/privacyPolicy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Frequently Asked Questions</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Headnest on Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Headnest on X
              </a>
            </li>
            <li>
              <a href="tel:+234801234567">+234801234567</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
