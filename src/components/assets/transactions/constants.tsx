import {
  ArrowPathIcon,
  ArrowUpRightIcon,
  CheckIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

export enum TransactionCategory {
  EXCHANGE = "EXCHANGE",
  TRANSFER = "TRANSFER",
  APPROVE = "APPROVE",
  MINT = "MINT",
  NFT_MINT = "NFT_MINT",
  CONTRACT_CALL = "CONTRACT_CALL",
  NFT_TRANSFER = "NFT_TRANSFER",
  STANDARD = "STANDARD",
  WRAP = "WRAP",
}

export const NetworkCategory = {
  [TransactionCategory.EXCHANGE]: {
    title: "Swap",
    icon: <ArrowPathIcon className="w-4 h-4 text-subdued" />,
  },
  [TransactionCategory.TRANSFER]: {
    title: "Send",
    icon: <ArrowUpRightIcon className="w-4 h-4 text-subdued" />,
  },
  [TransactionCategory.APPROVE]: {
    title: "Approve",
    icon: <CheckIcon className="w-4 h-4 text-subdued" />,
  },
  [TransactionCategory.MINT]: {
    title: "Mint",
    icon: <DocumentIcon className="w-4 h-4 text-subdued" />,
  },
  [TransactionCategory.NFT_MINT]: {
    title: "Nft Mint",
    icon: <DocumentIcon className="w-4 h-4 text-subdued" />,
  },
  [TransactionCategory.CONTRACT_CALL]: {
    title: "Contract Call",
    icon: <DocumentIcon className="w-4 h-4 text-subdued" />,
  },
  [TransactionCategory.NFT_TRANSFER]: {
    title: "Receive Nft",
    icon: <ArrowUpRightIcon className="w-4 h-4 text-subdued" />,
  },
  [TransactionCategory.STANDARD]: {
    title: "Receive",
    icon: <ArrowUpRightIcon className="w-4 h-4 text-subdued" />,
  },
  [TransactionCategory.WRAP]: {
    title: "Wrap",
    icon: <DocumentIcon className="w-4 h-4 text-subdued" />,
  },
};

export const NetworkIcon = {
  1: "https://token.metaswap.codefi.network/assets/networkLogos/ethereum.svg",
  137: "https://token.metaswap.codefi.network/assets/networkLogos/polygon.svg",
};

export const CoinIcon = {
  USDC: "https://static.metaswap.codefi.network/api/v1/tokenIcons/1/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
};
