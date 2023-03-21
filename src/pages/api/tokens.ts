// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IToken[]>
) {
  res.status(200).json([
    {
      provider: "Ethereum",
      symbol: "ETH",
      portfolioShare: "99.72",
      price: {
        current: "1,766.85",
        market: "-3.50",
      },
      balance: {
        fiat: "524.27",
        native: "0.325",
      },
      tokenIcon:
        "https://token.metaswap.codefi.network/assets/networkLogos/ethereum.svg",
    },
    {
      provider: "Matic",
      symbol: "MATIC",
      portfolioShare: "0.28",
      price: {
        current: "1.12",
        market: "-7.09",
      },
      balance: {
        fiat: "1.62",
        native: "1.4444",
      },
      tokenIcon:
        "https://token.metaswap.codefi.network/assets/networkLogos/polygon.svg",
    },
  ]);
}
