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

export interface INFT {
  estimatePrice: string;
  floorPrice: string;
  owner: string;
  symbol: string;
  boughtFor?: string;
  tokenId: string;
  blockchain: string;
  tokenStandard: string;
  contractAddress: string;
  tokenName: string;
  aboutToken: string;
  tokenURI?: string;
  properties?: {
    noun: string;
    verb: string;
  }[];
}
