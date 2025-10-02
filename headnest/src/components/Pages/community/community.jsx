import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";  

const communities = [
  {
    name: "Anxiety Coping Circle",
    description:
      "This is a safe space to talk to others like you and share struggles related to general well-being.",
    path: "/community/anxiety-coping-circle",
  },
  {
    name: "Relief Coping Circle",
    description:
      "Connect with people managing anxiety, share coping strategies, and find support.",
    path: "/community/relief-coping-circle",
  },
  {
    name: "Mindful Coping Circle",
    description:
      "A peaceful space dedicated to mindfulness, meditation, and quiet reflection practices.",
    path: "/community/mindful-coping-circle",
  },
];

export default function Community() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false); // ✅ added state here

  return (
    <div className="flex min-h-screen bg-[#f7f7f7] text-[#2d3a4a] font-sans">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Mobile Toggle Button */}
     <button
      className="md:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md"
      onClick={() => setSidebarOpen(!sidebarOpen)}
      >
      <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
     </button>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center pt-12 pb-12 px-4 md:px-8 md:ml-[220px] w-full">
        <div className="md:hidden w-full text-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#3b4b5a]">Community</h1>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-[#3b4b5a]">
          Join a Support Community
        </h2>

        <div className="flex flex-col space-y-6 w-full max-w-2xl">
          {communities.map((c) => (
            <div
              key={c.name}
              className="flex flex-col sm:flex-row items-center bg-white rounded-2xl p-6 gap-6 shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-24 h-24 bg-[#3b4b5a] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                <MessageCircle className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                <h3 className="text-xl font-bold text-[#3b4b5a] mb-1">{c.name}</h3>
                <p className="text-gray-600 text-base mb-4">{c.description}</p>
                <button
                  className="w-full sm:w-60 py-3 bg-[#4e7bbf] text-white rounded-full text-lg font-semibold cursor-pointer transition-all duration-200 hover:bg-[#3d65a0] shadow-lg hover:shadow-xl transform active:scale-95"
                  onClick={() => navigate(c.path)} // ✅ works now
                >
                  Join Community
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
