import React, { useCallback, useEffect, useState } from "react";
import TokenHeader from "./header";
import Token from "./token";

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
}

const Tokens: React.FC = () => {
  const [tokens, setTokens] = useState<IToken[]>();

  const fetchToken = useCallback(() => {
    fetch("/api/tokens")
      .then((res) => res.json())
      .then((res) => setTokens(res))
  }, []);

  useEffect(() => {
    void fetchToken();
  });

  return (
    <div className="grid grid-flow-row divide-y divide-slate-700">
      <TokenHeader />

      {tokens && tokens.map((token) => (
        <Token key={token.symbol} {...token} />
      ))}
    </div>
  );
};

export default Tokens;
