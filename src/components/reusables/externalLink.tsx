import React from "react";

const baseURL = {
  1: "https://etherscan.io/",
  137: "https://polygonscan.com/",
};

const ExternalLink: React.FC<{
  chainId: number;
  txnType: "tx" | "address";
  txnHash: string;
  extraClasses?: string;
  children: JSX.Element;
}> = ({ chainId, txnType, txnHash, extraClasses, children }) => {
  const link = `${baseURL[chainId as 1 | 137]}${txnType}/${txnHash}`;

  return (
    <a href={link} target="_blank" rel="noreferrer" className={extraClasses}>
      {children}
    </a>
  );
};

export default ExternalLink;
