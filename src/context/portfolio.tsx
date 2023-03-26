import { AssetsTabs } from "@/components/assets/tabs";
import { INFT, IToken, ITransaction } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IPortfolioContext {
  tokens: IToken[];
  setTokens: Dispatch<SetStateAction<IToken[]>>;
  currentTab: AssetsTabs;
  setCurrentTab: Dispatch<SetStateAction<AssetsTabs>>;
  nfts: INFT[];
  setNFTs: Dispatch<SetStateAction<INFT[]>>;
  transactions: Record<string, ITransaction[]> | null;
  setTransactions: Dispatch<
    SetStateAction<Record<string, ITransaction[]> | null>
  >;
}

const PortfolioContext = createContext<Partial<IPortfolioContext>>({});

export const usePortfolioContext = (): Partial<IPortfolioContext> =>
  useContext(PortfolioContext);

const PortfolioProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [nfts, setNFTs] = useState<INFT[]>([]);
  const [tokens, setTokens] = useState<IToken[]>([]);
  const [transactions, setTransactions] = useState<Record<
    string,
    ITransaction[]
  > | null>(null);
  const [currentTab, setCurrentTab] = useState<AssetsTabs>(AssetsTabs.Tokens);

  return (
    <PortfolioContext.Provider
      value={{
        tokens,
        setTokens,
        currentTab,
        setCurrentTab,
        nfts,
        setNFTs,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
