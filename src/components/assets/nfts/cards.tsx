import { usePortfolioContext } from "@/context/portfolio";
import { INFTResponse } from "@/types";
import React, { useCallback, useEffect } from "react";
import NFTCard from "./card";

const NFTCards: React.FC = () => {
  const { nfts, setNFTs } = usePortfolioContext();

  const fetchNFTs = useCallback(() => {
    fetch("/api/nfts")
      .then((res) => res.json())
      .then((res: INFTResponse[]) => setNFTs?.(res))
      .catch((err) => console.log(err));
  }, [setNFTs]);

  useEffect(() => {
    void fetchNFTs();
  }, [fetchNFTs]);

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xl:gap-x-8">
      {nfts?.map((nft) => (
        <NFTCard
          key={`${nft.tokenId}${nft.symbol}`}
          tokenName={nft.name||''}
          owner={nft.accountAddress||""}
          symbol={nft.symbol||""}
          tokenId={nft.tokenId||""}
          tokenURI={nft.metadata?.image && nft.metadata?.image.startsWith('http') ? nft.metadata?.image : undefined }
        />
      ))}
    </div>
  );
};

export default NFTCards;
