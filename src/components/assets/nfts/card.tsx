import SkeletonIcon from "@/components/icons/skeleton";
import { JazziconGenerator } from "@/components/reusables/jazziconGenerator";
import React from "react";
import Image from "next/image";

const NFTCard: React.FC<{
  tokenName: string;
  owner: string;
  symbol: string;
  tokenId: string;
  tokenURI?: string;
}> = ({ tokenName, owner, symbol, tokenId, tokenURI }) => {
  return (
    <div className="relative translate-y-0 hover:z-10 hover:shadow-2xl hover:-translate-y-0.5 bg-inherit rounded-lg shadow-xl transition-all cursor-pointer group border border-[#262833]">
      <div className="flex shrink-0 aspect-square rounded-t-md bg-[#262833] overflow-hidden items-center">
        <div className="flex h-full w-full justify-center items-center text-slate-300 dark:text-slate-400">
          {tokenURI ? <Image src={tokenURI} alt={symbol} width={500} height={500} /> : <SkeletonIcon />}
        </div>
      </div>
      <div className="-mt-3 flex justify-end mr-3">
        <div className="-space-x-1 items-center flex">
          <JazziconGenerator address={owner} />
        </div>
      </div>
      <div className="px-3 pt-4 pb-4 space-y-3">
        <div className="flex text-xs text-subdued items-center justify-between">
          <div className="truncate">{tokenName}</div>
        </div>
        <p className="block text-sm font-medium text-default truncate whitespace-pre">
          {symbol} #{tokenId}
        </p>
      </div>
    </div>
  );
};

export default NFTCard;
