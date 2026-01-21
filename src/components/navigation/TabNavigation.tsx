import React from "react";

interface TabNavigationProps {
  activeTab: "code" | "password";
  setActiveTab: (tab: "code" | "password") => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex gap-2 border-b border-gray-200">
      <button
        onClick={() => setActiveTab("code")}
        className={`flex-1 py-3 px-4 font-medium transition-colors ${
          activeTab === "code"
            ? "border-b-2 border-[#05d8c8] text-[#05d8c8]"
            : "text-gray-600 hover:text-gray-800"
        }`}
      >
        Wijzig Code
      </button>
      <button
        onClick={() => setActiveTab("password")}
        className={`flex-1 py-3 px-4 font-medium transition-colors ${
          activeTab === "password"
            ? "border-b-2 border-[#05d8c8] text-[#05d8c8]"
            : "text-gray-600 hover:text-gray-800"
        }`}
      >
        Wachtwoord Resetten
      </button>
    </div>
  );
};

export default TabNavigation;
