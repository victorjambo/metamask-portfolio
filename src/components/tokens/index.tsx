import { usePortfolioContext } from "@/context/portfolio";
import { useFetchTokens } from "@/hooks/fetchTokens";
import React, { useCallback, useEffect } from "react";
import SkeletonLoader from "../skeletonLoader";
import TokenHeader from "./header";
import Loader from "./loader";
import Token from "./token";

const Tokens: React.FC = () => {
  const { tokens } = usePortfolioContext();
  const { fetchTokens } = useFetchTokens();

  useEffect(() => {
    void fetchTokens();
  });

  console.log(tokens);
  

  return (
    <div
      className={`grid grid-flow-row ${
        tokens?.length ? "divide-y divide-slate-700" : ""
      }`}
    >
      <TokenHeader />

      {tokens?.length ? (
        tokens.map((token) => <Token key={token.symbol} {...token} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Tokens;
