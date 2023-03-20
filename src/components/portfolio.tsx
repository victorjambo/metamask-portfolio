/* eslint-disable @next/next/no-img-element */
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";
import DropdownPill from "./dropdownPill";

const Portfolio: React.FC = () => {
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
            <DropdownPill>
              <span>List view</span>
            </DropdownPill>

            <div className="flex text-sm space-x-3 border border-[#3e3f4b] rounded-full">
              <button className="bg-[#3e3f4b] text-white rounded-full px-3.5 py-2 cursor-pointer">
                Tokens
              </button>
              <button className="hover:bg-[#262833] text-[#a8abbe] rounded-full px-3.5 py-2 cursor-pointer">
                NFTs
              </button>
              <button className="hover:bg-[#262833] text-[#a8abbe] rounded-full px-3.5 py-2 cursor-pointer">
                Transaction
              </button>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <div className="grid grid-flow-row divide-y divide-slate-700">
            <div className="grid grid-flow-col grid-cols-5 w-full auto-cols-max cursor-pointer text-[#a8abbe] text-sm">
              <div className="col-span-2 p-4">Token</div>
              <div className="p-4">Portfolio %</div>
              <div className="p-4">Price</div>
              <div className="p-4">Balance</div>
              <div className="p-4">
                <EllipsisVerticalIcon className="h-5 w-5 text-transparent" />
              </div>
            </div>

            <div className="grid grid-flow-col grid-cols-5 w-full auto-cols-max hover:bg-[#262833] cursor-pointer items-center">
              <div className="p-4 col-span-2 flex items-center">
                <img
                  src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/ethereum.svg"
                  className="w-8 h-8 mr-4"
                  alt="ETH"
                />
                <div className="flex flex-col">
                  <span>ETH</span>
                  <span className="text-sm text-slate-400 truncate sm:max-w-none max-w-[8rem]">
                    Ethereum
                  </span>
                </div>
              </div>
              <div className="p-4 self-start">99.56%</div>
              <div className="p-4 flex flex-col">
                <span>$1,232.45</span>
                <span className="text-[#fe5c4c] text-sm">-3.50%</span>
              </div>
              <div className="p-4 flex flex-col">
                <span>$234.23</span>
                <span className="text-slate-400 truncate font-normal text-sm">
                  0.325 ETH
                </span>
              </div>
              <div className="p-4">
                <EllipsisVerticalIcon className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            <div className="grid grid-flow-col grid-cols-5 w-full auto-cols-max hover:bg-[#262833] cursor-pointer items-center">
              <div className="p-4 col-span-2 flex items-center">
                <img
                  src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/matic.svg"
                  className="w-8 h-8 mr-4"
                  alt="matic"
                />
                <div className="flex flex-col">
                  <span>MATIC</span>
                  <span>Matic</span>
                </div>
              </div>
              <div className="p-4 self-start">1.56%</div>
              <div className="p-4 flex flex-col">
                <span>$1,232.45</span>
                <span className="text-[#fe5c4c] text-sm">-7.50%</span>
              </div>
              <div className="p-4 flex flex-col">
                <span>$234.23</span>
                <span className="text-slate-400 truncate font-normal text-sm">
                  1.4444 MATIC
                </span>
              </div>
              <div className="p-4">
                <EllipsisVerticalIcon className="h-5 w-5 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
