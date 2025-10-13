import React from "react";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        Coming Soon
      </h1>
      <p className="text-gray-600 text-base sm:text-lg max-w-md mb-8">
        We're working hard to bring this page to life. Check back soon!
      </p>
      
    </div>
  );
}
