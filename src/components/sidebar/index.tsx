/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import MobileSidebar from "./mobile";
import DesktopSidebar from "./desktop";
import Header from "../reusables/header";
import {
  AdjustmentsHorizontalIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import DropdownPill from "../reusables/dropdownPill";
import { JazziconGenerator } from "../reusables/jazziconGenerator";

const Sidebar: React.FC<{ children: JSX.Element; pageTitle?: string }> = ({
  children,
  pageTitle,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentNav, setCurrentNav] = useState("Portfolio");

  const changeCurrent = (nav: string) => {
    setCurrentNav(nav);
  };

  return (
    <>
      <Header />
      <div>
        {/* Mobile */}
        <MobileSidebar
          {...{ sidebarOpen, setSidebarOpen, currentNav, changeCurrent }}
        />

        {/* Static sidebar for desktop */}
        <DesktopSidebar {...{ currentNav, changeCurrent }} />

        <div className="flex flex-1 flex-col lg:pl-48 h-screen overflow-y-scroll bg-[#101213] text-white">
          <main className="flex-1">
            <div className="py-8">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="w-full flex justify-between items-center">
                  <div className="flex space-x-3 items-center">
                    <h3 className="text-2xl font-bold text-white pr-2">
                      {pageTitle}
                    </h3>

                    <DropdownPill>
                      <>
                        <JazziconGenerator address="0x2274156925a2c4e46410dd8D956302d8c415eEF6" />
                        <span>0x2274...15eEF6</span>
                      </>
                    </DropdownPill>

                    <DropdownPill>
                      <>
                        <div className="flex -space-x-1.5 overflow-hidden group">
                          <img
                            src="https://token.metaswap.codefi.network/assets/networkLogos/ethereum.svg"
                            className="w-5 h-5 rounded-full ring-4 ring-[#101213] group-hover:ring-blue-800"
                            alt="eth"
                          />
                          <img
                            src="https://token.metaswap.codefi.network/assets/networkLogos/polygon.svg"
                            className="w-5 h-5 rounded-full ring-4 ring-[#101213] group-hover:ring-blue-800"
                            alt="matic"
                          />
                        </div>
                        <span>2 Networks</span>
                      </>
                    </DropdownPill>
                  </div>

                  <div className="flex space-x-3">
                    <DropdownPill>
                      <>
                        <CurrencyDollarIcon className="h-5 w-5 text-orange-600" />
                        <span>USD</span>
                      </>
                    </DropdownPill>
                    <DropdownPill>
                      <>
                        <AdjustmentsHorizontalIcon className="h-5 w-5 text-blue-600" />
                        <span>32</span>
                      </>
                    </DropdownPill>
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
