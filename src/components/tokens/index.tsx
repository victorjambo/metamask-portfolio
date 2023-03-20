import React from "react";
import TokenHeader from "./header";
import Token from "./token";

const tokens = [
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
  },
];

const Tokens: React.FC = () => {
  return (
    <div className="grid grid-flow-row divide-y divide-slate-700">
      <TokenHeader />

      {tokens.map((token) => (
        <Token key={token.symbol} {...token} />
      ))}
    </div>
  );
};

export default Tokens;
