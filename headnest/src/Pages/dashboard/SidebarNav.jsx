// components/SidebarNav.jsx
import { useLocation } from "react-router-dom";
import Logo2 from "../../assets/NewLogo.png";

const navItems = [
  { id: "home", label: "Home", icon: "🏠", url: "/dashboard" },
  { id: "journal", label: "Journal", icon: "📔", url: "/journal" },
  { id: "community", label: "Community", icon: "👥", url: "/community" },
  { id: "therapist", label: "Therapist", icon: "👨‍⚕️", url: "/therapist" },
  { id: "settings", label: "Settings", icon: "⚙️", url: "/settings" },
];

const SidebarNav = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const isActive = (url) => {
    if (url === "/") return location.pathname === "/";
    return location.pathname.startsWith(url);
  };

  const sidebarWidth = isOpen ? "w-64" : "w-16";

  return (
    <div
      className={`${sidebarWidth} bg-[#eadfce] border-r shadow-md h-screen flex flex-col fixed left-0 top-0 z-50 transition-all duration-300`}>
      {/* Header */}
      <div className="p-4 border-b border-[#d8cab3] flex items-center justify-between">
        {isOpen && (
          <img
            src={Logo2}
            alt="Headnest Logo"
            className="w-32 transition-opacity duration-300"
          />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-[#d8cab3] transition-colors"
          title={isOpen ? "Collapse sidebar" : "Expand sidebar"}>
          {isOpen ? "◀" : "▶"}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 overflow-y-auto">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={`flex items-center p-3 rounded-lg transition-all duration-200 group ${
                isActive(item.url)
                  ? "bg-[#d8cab3] text-gray-900 shadow-sm"
                  : "text-gray-700 hover:text-gray-900 hover:bg-[#e3d7c4]"
              } ${isOpen ? "space-x-3" : "justify-center"}`}
              title={!isOpen ? item.label : ""}>
              <span className="text-xl w-6 text-center">{item.icon}</span>
              {isOpen && (
                <span className="text-sm font-medium transition-opacity duration-300">
                  {item.label}
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Footer */}
      {isOpen && (
        <div className="p-4 border-t border-[#d8cab3]">
          <div className="text-xs text-gray-500 text-center">
            © 2024 Headnest. All rights reserved.
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarNav;
