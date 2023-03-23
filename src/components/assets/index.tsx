import { usePortfolioContext } from "@/context/portfolio";
import React, { useMemo } from "react";
import NFTs from "./nfts";
import { AssetsTabs } from "./tabs";
import Tokens from "./tokens";
import Transactions from "./transactions";

const Assets: React.FC = () => {
  const { currentTab } = usePortfolioContext();

  const tab = () => {
    switch (currentTab) {
      case AssetsTabs.Tokens:
        return <Tokens />;
      case AssetsTabs.NFTs:
        return <NFTs />;
      case AssetsTabs.Transaction:
        return <Transactions />;
      default:
        return <div />;
    }
  };

  return <div className="mt-7">{tab()}</div>;
};

export default Assets;
