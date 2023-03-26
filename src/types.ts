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

export interface ITransaction {
  chainId?: number;
  blockNumber?: number;
  blockHash?: string;
  transactionHash?: string;
  accountAddress?: string;
  subTransactions?: {
    object?: string;
    fromAddress?: string;
    toAddress?: string;
    traceId?: string;
    value?: string | number;
    valueDisplay?: number;
    valueUsd?: number;
    isFromTransfer?: boolean;
    indexed?: boolean;
    updatedAt?: string;
    createdAt?: string;
    logIndex?: number;
    name?: string;
    tokenAddress?: string;
    iconUrl?: string;
    symbol?: string;
    decimals?: number | string;
    coingeckoId?: string;
    gasPrice?: number;
    datetimeString?: string;
    ttl?: number;
    gasUsed?: number;
    id?: string;
    transactionIndex?: number;
    blockHash?: string;
    tokenId?: string;
    timestamp?: number;
    blockNumber?: number;
    cumulativeGasUsed?: number;
    chainId?: number;
    sortKey?: string;
    accountAddress?: string;
    nonce?: number;
    gas?: number;
    sortKey2?: string;
    transactionHash?: string;
    operatorAddress?: string;
    transactionCategory?: string;
  }[];
  name?: string;
  tokenAddress?: string;
  symbol?: string;
  decimals?: number | string;
  logIndex?: number;
  status?: number;
  timestamp?: number;
  datetimeString?: string;
  methodId?: string;
  gasPrice?: number | string;
  maxPriorityFeePerGas?: number;
  isFromTransfer?: boolean;
  gasFeeEth?: number;
  transactionType?: string;
  toAddressName?: string;
  valueDisplay?: number;
  gasUsed?: number | string;
  isError?: boolean;
  nativeAssetPriceUsd?: number;
  transactionIndex?: number | string;
  transactionCategory?: string;
  valueUsd?: number;
  indexed?: boolean;
  toAddress?: string;
  object?: string;
  fromAddress?: string;
  createdAt?: string;
  effectiveGasPrice?: number;
  cumulativeGasUsed?: number | string;
  value?: string | number;
  updatedAt?: string;
  transactionProtocol?: string;
  nonce?: number;
  gas?: number | string;
  gasFeeUsd?: number;
  maxFeePerGas?: number;
  contractAddress?: string | null;
  type?: number;
  iconUrl?: string;
  coingeckoId?: string;
  tokenId?: string;
  operatorAddress?: string;
}

export interface INFTResponse {
  object?: string;
  chainId?: number;
  accountAddress?: string;
  tokenAddress?: string;
  ownerOf?: string;
  name?: string;
  symbol?: string;
  amount?: string;
  tokenUrl?: string;
  tokenId?: string;
  isErc721?: boolean;
  metadata?: {
    _id?: string | number;
    id?: string | number;
    name?: string;
    description?: string;
    image?: string;
    external_url?: string;
    home_url?: string;
    image_url?: string;
    animation_url?: string;
    TokenID?: string;
    properties?: {
      key: string;
      type: string;
      value: string | number;
    }[] | null;
    background_color?: string;
    symbol?: string;
    destination_url?: string;
    attributes?: Record<string, string | number>[]
    compiler?: string;
    is_alpha?: boolean;
    tags?: string[];
    meta?: {
      damageLevel?: number;
      effectiveRange?: number;
      maxRange?: number;
      muzzleVelocity?: number;
      rateOfFire?: number;
      stabilityLevel?: number;
      weaponType?: string;
      gunModel?: string;
      weaponSlot?: string;
      skin?: string;
      skinRarity?: string;
      barrel?: string;
      ammoType?: string;
      kitType?: string;
      rotation?: number;
      gunRarityIndex?: number;
    }
  } | null;
}
