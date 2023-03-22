export interface IToken {
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
