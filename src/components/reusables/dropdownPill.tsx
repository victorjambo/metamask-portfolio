import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

const DropdownPill: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="flex space-x-1 justify-between items-center rounded-full  border px-3.5 py-2 text-sm hover:bg-blue-800 hover:border-blue-600 border-[#3e3f4b] transition-colors cursor-pointer">
      <>{children}</>
      <ChevronDownIcon className="h-3.5 w-3.5" />
    </div>
  );
};

export default DropdownPill;
