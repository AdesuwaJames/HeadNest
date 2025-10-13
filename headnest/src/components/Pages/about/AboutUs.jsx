import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12 md:py-20">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-md p-6 sm:p-10 md:p-14 space-y-8">
        {/* Title */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            About HeadNest
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Mental health care should be <strong>affordable</strong>,{" "}
            <strong>stigma-free</strong>, and <strong>easy to access</strong>.
            That’s why we’re here — to empower young Nigerians with a safe,
            trusted space where they can get the help they need, anytime,
            anywhere.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            At HeadNest, we make therapy simple and stress-free, especially for{" "}
            <strong>low- to middle-income young adults</strong>. Users can easily
            connect with mental health professionals through their devices,
            without fear, stigma, or unnecessary barriers.
          </p>

          <p>
            Beyond therapy, we offer <strong>supportive communities</strong> and
            practical self-help tools that help young people share, connect, and
            grow. We’re breaking the stigma around mental health by creating
            spaces where open conversations are welcomed and encouraged.
          </p>

          <p>
            Even with limited resources, our focus remains on delivering{" "}
            <strong>real value</strong>. We’re building core features and
            exploring creative ways to keep therapy affordable and accessible
            for everyone.
          </p>

          <p className="font-semibold text-gray-800">
            HeadNest isn’t just a platform — it’s a movement to make mental
            wellness accessible for every young Nigerian.
          </p>
        </div>

        {/* Back Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => navigate("/")}
            className="bg-[#38485C] text-white font-medium px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
