import { usePortfolioContext } from "@/context/portfolio";
import { useCallback } from "react";

export const useFetchTokens = () => {
  const { setTokens } = usePortfolioContext();

  const fetchTokens = useCallback(() => {
    fetch("/api/tokens")
      .then((res) => res.json())
      .then((res) => setTokens?.(res))
      .catch((err) => console.log(err));
  }, [setTokens]);

  return {
    fetchTokens,
  };
};
