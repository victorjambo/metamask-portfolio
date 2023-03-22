import { IToken } from "@/types";
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
}

const PortfolioContext = createContext<Partial<IPortfolioContext>>({});

export const usePortfolioContext = (): Partial<IPortfolioContext> =>
  useContext(PortfolioContext);

const PortfolioProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [tokens, setTokens] = useState<IToken[]>([]);

  return (
    <PortfolioContext.Provider value={{ tokens, setTokens }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
