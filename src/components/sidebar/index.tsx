import { useState } from "react";
import MobileSidebar from "./mobile";
import DesktopSidebar from "./desktop";
import Header from "../header";

const Sidebar: React.FC<{ children: JSX.Element; pageTitle?: string }> = ({
  children,
  pageTitle,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentNav, setCurrentNav] = useState("Dashboard");
  // isCurrent === "Dashboard"

  const changeCurrent = (nav: string) => {
    setCurrentNav(nav);
  }

  return (
    <>
      <Header />
      <div>
        {/* Mobile */}
        <MobileSidebar {...{ sidebarOpen, setSidebarOpen, currentNav, changeCurrent }} />

        {/* Static sidebar for desktop */}
        <DesktopSidebar {...{currentNav, changeCurrent}} />

        <div className="flex flex-1 flex-col lg:pl-44 h-screen bg-[#101213] text-white">
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-white">
                  {pageTitle}
                </h1>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
