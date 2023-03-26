import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";
import DropdownPill from "../reusables/dropdownPill";
import TabSwitcher from "../assets/switcher";
import Assets from "../assets";
import { AssetsTabs } from "../assets/tabs";
import { usePortfolioContext } from "@/context/portfolio";

const Portfolio: React.FC = () => {
  const { currentTab } = usePortfolioContext();

  return (
    <div>
      <div className="md:mb-10 my-6 md:my-0">
        <div className="text-md text-slate-500 dark:text-slate-400">
          Portfolio value
        </div>

        <div className="flex items-end text-2xl md:text-4xl font-semibold mt-2 text-slate-100">
          $580.92
        </div>
      </div>

      <div className="rounded-2xl py-5 px-4 sm:px-6 bg-[#1e1f25]">
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <div className="font-semibold text-xl">Assets</div>
            <EllipsisVerticalIcon className="w-5 h-5 text-xl" />
          </div>

          <div className="flex items-center font-medium space-x-3">
            {currentTab === AssetsTabs.Tokens && (
              <DropdownPill>
                <span>List view</span>
              </DropdownPill>
            )}

            <TabSwitcher />
          </div>
        </div>

        <Assets />
      </div>
    </div>
  );
};

export default Portfolio;
