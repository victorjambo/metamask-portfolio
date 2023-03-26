import Badge from "@/components/reusables/badge";
import { usePortfolioContext } from "@/context/portfolio";
import React from "react";

const NFTHeader: React.FC = () => {
  const { nfts } = usePortfolioContext();

  return (
    <div className="flex space-x-3 mb-6">
      <div className="flex items-center pb-1 border-b border-white">
        <div className="mr-1.5">Owned</div>
        <Badge txt={nfts?.length || ''} />
      </div>
    </div>
  );
};

export default NFTHeader;
