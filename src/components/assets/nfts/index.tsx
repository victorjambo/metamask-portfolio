import { classNames } from "@/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import NFTCards from "./cards";
import NFTHeader from "./header";

const NFTs: React.FC = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(true);

  return (
    <div className="rounded-lg my-5 border border-[#262833]">
      <button
        onClick={() => setAccordionOpen(!isAccordionOpen)}
        className={classNames(
          "flex justify-between px-4 py-5 font-medium w-full",
          isAccordionOpen
            ? "border-b border-[#262833] bg-[#262833] rounded-t-lg"
            : "hover:bg-[#262833] rounded-lg"
        )}
      >
        <div className="font-bold">NFTs</div>
        <div className="flex items-center space-x-2">
          <div>$2,421.81</div>
          <ChevronDownIcon
            className={classNames(
              "w-5 h-5",
              isAccordionOpen ? "rotate-180" : "rotate-0"
            )}
          />
        </div>
      </button>

      {isAccordionOpen && (
        <div className="p-6">
          <NFTHeader />
          <NFTCards />
        </div>
      )}
    </div>
  );
};

export default NFTs;
