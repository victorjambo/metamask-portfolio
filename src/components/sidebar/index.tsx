import { useState } from "react";
import MobileSidebar from "./mobile";
import DesktopSidebar from "./desktop";
import Header from "../header";
import {
  AdjustmentsHorizontalIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import DropdownPill from "../dropdownPill";

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

        <div className="flex flex-1 flex-col lg:pl-48 h-screen bg-[#101213] text-white">
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
                        <GlobeAltIcon className="h-5 w-5 text-yellow-600" />
                        <span>0x684a...c88a35</span>
                      </>
                    </DropdownPill>

                    <DropdownPill>
                      <>
                        <CurrencyDollarIcon className="h-5 w-5 text-purple-600" />
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
