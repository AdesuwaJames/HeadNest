// components/DashboardLayout.jsx
import { useState } from "react";
import SidebarNav from "./SidebarNav";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex w-full h-screen bg-gray-50">
      {/* Sidebar */}
      <SidebarNav isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area - FIXED */}
      <div
        className={`flex-1 flex flex-col min-h-0 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        } transition-all duration-300`}>
        {/* Page Content - NOW FILLS FULL HEIGHT */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
