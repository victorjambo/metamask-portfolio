import { classNames } from "@/utils";
import Link from "next/link";
import React from "react";
import { navigation } from "./navigation";

interface IDesktopSidebar {
  currentNav: string;
  changeCurrent: (nav: string) => void;
}

const DesktopSidebar: React.FC<IDesktopSidebar> = ({
  currentNav,
  changeCurrent,
}) => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex w-44 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-grow flex-col overflow-y-auto  bg-[#1e1f24] pt-5">
        <div className="mt-14 flex flex-grow flex-col">
          <nav className="flex-1 space-y-1 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.name === currentNav
                    ? "text-white border-r-2 border-[#496ce9]"
                    : "text-subdued",
                  "group flex items-center hover:bg-[#262833] py-2 text-sm font-medium"
                )}
                onClick={() => changeCurrent(item.name)}
              >
                <item.icon
                  className={classNames(
                    item.name === currentNav
                      ? "text-[#496ce9]"
                      : "text-subdued",
                    "mr-3 h-6 w-6 flex-shrink-0 ml-4"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
