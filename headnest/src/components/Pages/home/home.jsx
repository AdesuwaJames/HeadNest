
import React from "react";
import Sidebar from "../../sidebar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
       isOpen={sidebarOpen} 
       onClose={() => setSidebarOpen(false)}
     />
  
      {/* Toggle button (mobile only) */}
      <button
        className="toggle-btn md:hidden p-3 bg-gray-800 text-white fixed top-4 left-4 z-50 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "Close" : "Menu"}
      </button>



      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800">Main Content Area</h1>
        <p className="mt-4 text-gray-600">
          Your other components will load in this area.
        </p>
      </main>
    </div>
  );
}

