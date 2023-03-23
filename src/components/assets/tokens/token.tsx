/* eslint-disable @next/next/no-img-element */
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";

interface IToken {
  provider: string;
  symbol: string;
  portfolioShare: string;
  price: {
    current: string;
    market: string;
  };
  balance: {
    fiat: string;
    native: string;
  };
  tokenIcon: string;
}

const Token: React.FC<IToken> = ({
  provider,
  symbol,
  portfolioShare,
  price,
  balance,
  tokenIcon
}) => {
  return (
    <div className="grid grid-flow-col grid-cols-5 w-full auto-cols-max hover:bg-[#262833] cursor-pointer items-center">
      <div className="p-4 col-span-2 flex items-center">
        <img
          src={tokenIcon}
          className="w-8 h-8 mr-4"
          alt={symbol}
        />
        <div className="flex flex-col">
          <span>{symbol}</span>
          <span className="text-sm text-slate-400 truncate sm:max-w-none max-w-[8rem]">
            {provider}
          </span>
        </div>
      </div>
      <div className="p-4 self-start">{portfolioShare}%</div>
      <div className="p-4 flex flex-col">
        <span>${price.current}</span>
        <span className="text-[#fe5c4c] text-sm">{price.market}%</span>
      </div>
      <div className="p-4 flex flex-col">
        <span>${balance.fiat}</span>
        <span className="text-slate-400 truncate font-normal text-sm">
          {balance.native} {symbol}
        </span>
      </div>
      <div className="p-4">
        <EllipsisVerticalIcon className="h-5 w-5 text-slate-400" />
      </div>
    </div>
  );
};

export default Token;
