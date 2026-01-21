// src/components/Tabs.tsx
import React from "react";

interface TabsProps {
  options: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  options,
  activeTab,
  onTabChange,
  className = "",
}) => {
  return (
    <div className={`inline-flex p-1 ${className}`}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onTabChange(option)}
          className={`
            px-5 py-2 text-sm
            ${
              activeTab === option
                ? "bg-[#f5f5f5] text-[#3d3d3d] font-semibold rounded-lg"
                : "text-[#3d3d3d]"
            }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
