// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INFT } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { generateSlug } from "random-word-slugs";

const nftObject = {
  estimatePrice: "2,105.90",
  floorPrice: "1,633.73",
  owner: "0x2274156925a2c4e46410dd8D956302d8c415eEF6",
  blockchain: "Ethereum",
  tokenStandard: "Token ERC-721",
  contractAddress: "0x005ac9be04f415a61e5659a88137e299d317819a",
  tokenURI:
    "https://ipfs.io/ipfs/QmQ7gem9LsT8ExC23Qxw1syBjBX1nrAsDz9thdRkvyA2w3?filename=1095.png",
  properties: [
    {
      noun: "background",
      verb: "green",
    },
    {
      noun: "type",
      verb: "charcoal mfer",
    },
    {
      noun: "eyes",
      verb: "regular eyes",
    },
    {
      noun: "mouth",
      verb: "smile",
    },
    {
      noun: "headphones",
      verb: "red headphones",
    },
    {
      noun: "4:20 watch",
      verb: "oyster silver",
    },
    {
      noun: "smoke",
      verb: "cig white",
    },
    {
      noun: "shirt",
      verb: "hoodie down blue",
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<INFT[]>
) {
  const nftIds = getRange(2324, 2330);
  const nftResponse = nftIds.map((nft) => {
    const tokenName = generateSlug(2, {
      format: "title",
    });
    const aboutToken = generateSlug(6, {
      format: "title",
    });
    const symbol = generateSlug(1, {
      format: "title",
    });
    return {
      ...nftObject,
      tokenId: nft.toString(),
      tokenName,
      aboutToken,
      symbol: symbol.toUpperCase(),
    };
  });
  res.status(200).json(nftResponse);
}

const getRange = (start: number, stop: number) =>
  Array.from(new Array(stop - start + 1), (_, i) => i + start);
