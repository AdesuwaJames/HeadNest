import { Copy } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function PaymentTransferPage() {
  const [copied, setCopied] = useState('');
  const navigate = useNavigate();

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-50 px-4">
      <div className="w-full max-w-md ">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mt-4 mb-4">
          Make payment now
        </h1>

        {/* Payment Card */}
        <div className="bg-[#eadfce] rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
            Transfer details
          </h2>

          <div className="space-y-5">
            {/* Bank Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Bank Name
              </label>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <span className="text-gray-800 font-medium">First Bank of Nigeria</span>
                <button
                  onClick={() => copyToClipboard('First Bank of Nigeria', 'bank')}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  title="Copy bank name"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              {copied === 'bank' && (
                <p className="text-sm text-green-600 mt-1">Copied!</p>
              )}
            </div>

            {/* Account Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Account Name
              </label>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <span className="text-gray-800 font-medium">Wellness Services Ltd</span>
                <button
                  onClick={() => copyToClipboard('Wellness Services Ltd', 'name')}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  title="Copy account name"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              {copied === 'name' && (
                <p className="text-sm text-green-600 mt-1">Copied!</p>
              )}
            </div>

            {/* Account Number */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Account Number
              </label>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <span className="text-gray-800 font-medium text-lg">1234567890</span>
                <button
                  onClick={() => copyToClipboard('1234567890', 'number')}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  title="Copy account number"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              {copied === 'number' && (
                <p className="text-sm text-green-600 mt-1">Copied!</p>
              )}
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 p-4 bg-blue-50 rounded-full text-center">
            <p className="text-sm text-gray-700 text-center">
              Please send proof of payment after transfer
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-4 mb-4">
          <button 
          onClick={() => navigate("/dashboard")}
          className="cursor-pointer bg-gray-700 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Back to homepage
          </button>
        </div>
      </div>
    </div>
  );
}