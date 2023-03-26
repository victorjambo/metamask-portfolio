import { usePortfolioContext } from "@/context/portfolio";
import { AssetsTabs } from "./tabs";
import { classNames } from "@/utils";
import React from "react";

const TabSwitcher: React.FC = () => {
  const { currentTab, setCurrentTab } = usePortfolioContext();

  const handleClick = (tab: AssetsTabs) => {
    setCurrentTab?.(tab);
  };

  return (
    <div className="flex text-sm space-x-3 p-0.5 border border-[#3e3f4b] rounded-full">
      {Object.values(AssetsTabs).map((tab) => (
        <button
          key={tab}
          className={classNames(
            "rounded-full px-3.5 py-2 cursor-pointer",
            currentTab === tab
              ? "bg-[#3e3f4b] text-white"
              : "hover:bg-[#262833] text-subdued"
          )}
          onClick={() => handleClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
