// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface INFT {
  estimatePrice: string;
  floorPrice: string;
  owner: string;
  boughtFor?: string;
  tokenId: string;
  blockchain: string;
  tokenStandard: string;
  contractAddress: string;
  tokenName: string;
  aboutToken: string;
  properties?: {
    noun: string;
    verb: string;
  }[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<INFT[]>
) {
  res.status(200).json([
    {
      estimatePrice: "2,105.90",
      floorPrice: "1,633.73",
      owner: "0x2274156925a2c4e46410dd8D956302d8c415eEF6",
      tokenId: "1168",
      blockchain: "Ethereum",
      tokenStandard: "Token ERC-721",
      contractAddress: "0x005ac9be04f415a61e5659a88137e299d317819a",
      tokenName: "mfer",
      aboutToken: "mfers by sartoshi",
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
    },
  ]);
}
