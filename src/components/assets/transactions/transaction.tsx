/* eslint-disable @next/next/no-img-element */
import GasIcon from "@/components/icons/gas";
import ExternalLink from "@/components/reusables/externalLink";
import { JazziconGenerator } from "@/components/reusables/jazziconGenerator";
import { ITransaction } from "@/types";
import { formatAddress } from "@/utils/formatAddress";
import {
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import React from "react";
import {
  NetworkCategory,
  CoinIcon,
  NetworkIcon,
  TransactionCategory,
} from "./constants";

const Transaction: React.FC<{ transaction: ITransaction }> = ({
  transaction,
}) => {
  return (
    <div className="py-4 px-6 hover:bg-[#262833] cursor-pointer">
      <div className="flex flex-row items-center">
        <div className="relative">
          <div className="flex items-center justify-center w-4 h-4 rounded-full object-cover absolute ring-1 ring-slate-100 dark:ring-slate-900 -top-1 -left-1">
            <img
              src={NetworkIcon[transaction.chainId as 1 | 137]}
              alt={transaction.chainId?.toString()}
            />
          </div>
          <div className="rounded-full bg-[#262833] border border-[#262833] flex w-8 h-8 items-center justify-center">
            {
              NetworkCategory[
                transaction.transactionCategory as TransactionCategory
              ].icon
            }
          </div>
        </div>

        <div className="overflow-y-visible overflow-x-auto sm:overflow-x-visible whitespace-nowrap text-ellipsis md:flex flex-wrap flex-1 w-full lg:grid grid-cols-12 gap-4 lg:gap-5 xl:gap-6 items-center sm:pl-4">
          <div className="flex items-center space-x-4 mb-1 sm:mb-0 col-span-4 xl:col-span-3 text-slate-100">
            <div>
              <div className="font-semibold whitespace-nowrap shrink">
                {
                  NetworkCategory[
                    transaction.transactionCategory as TransactionCategory
                  ].title
                }
                <span className="ml-1 font-normal text-subdued truncate hidden sm:inline-flex">
                  {transaction.transactionProtocol}
                </span>
              </div>
              <div className="ml-4 sm:ml-0 text-subdued whitespace-nowrap">
                <div>
                  {moment(transaction.timestamp).format("LT").toLowerCase()}
                </div>
              </div>
            </div>
            <button className="p-1.5 ml-2 rounded-md items-center flex cursor-pointer text-slate-400 hover:bg-slate-600">
              <DocumentDuplicateIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="overflow-visible justify-start items-center col-span-3 2xl:col-span-2 hidden xl:flex">
            <div className="flex items-center bg-slate-800 w-fit space-x-3 rounded-full py-2 px-3 font-medium text-sm">
              <JazziconGenerator address={transaction.accountAddress || ""} />
              <div>{formatAddress(transaction.accountAddress || "")}</div>
            </div>
          </div>

          <div className="col-span-7 xl:col-span-5 sm:flex-1 sm:flex truncate">
            {transaction.transactionCategory === TransactionCategory.EXCHANGE ||
            transaction.transactionCategory === TransactionCategory.STANDARD ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={CoinIcon.USDC}
                    alt="coin"
                    className="w-8 h-8 rounded-full object-cover min-w-[2rem]"
                  />
                  <div className="flex flex-col space-x-2">
                    <span className="text-[#fe5c4c]">
                      -
                      {transaction.subTransactions
                        ?.find((txn) => txn.isFromTransfer)
                        ?.valueDisplay?.toFixed(3)}
                    </span>
                    <span className="text-sm text-slate-400 truncate max-w-[7rem] sm:max-w-[10rem]">
                      {transaction.subTransactions
                        ?.find((txn) => txn.isFromTransfer)
                        ?.symbol?.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div>
                  <ChevronRightIcon className="w-5 h-5" />
                </div>

                <div className="flex items-center space-x-3">
                  <img
                    src={NetworkIcon[1]}
                    alt="eth"
                    className="w-8 h-8 rounded-full object-cover min-w-[2rem]"
                  />
                  <div className="flex flex-col space-x-2">
                    <span className="text-[#64db77]">
                      +
                      {transaction.subTransactions
                        ?.find((txn) => !txn.isFromTransfer)
                        ?.valueDisplay?.toFixed(4)}
                    </span>
                    <span className="text-sm text-slate-400 truncate max-w-[7rem] sm:max-w-[10rem]">
                      $
                      {transaction.subTransactions
                        ?.find((txn) => !txn.isFromTransfer)
                        ?.valueUsd?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ) : transaction.transactionCategory ===
              TransactionCategory.APPROVE ? (
              <div className="flex items-center space-x-3">
                <img
                  src={CoinIcon.USDC}
                  alt="coin"
                  className="w-8 h-8 rounded-full object-cover min-w-[2rem]"
                />
                <div className="flex flex-col">
                  <span className="text-white">USDC</span>
                  <span className="text-sm text-slate-400">
                    {formatAddress(transaction.toAddress || "")}
                  </span>
                </div>
              </div>
            ) : transaction.transactionCategory ===
              TransactionCategory.TRANSFER ? (
              <div className="flex items-center space-x-3">
                <img
                  src={CoinIcon.USDC}
                  alt="coin"
                  className="w-8 h-8 rounded-full object-cover min-w-[2rem]"
                />
                <div className="flex flex-col">
                  <span className="text-[#fe5c4c]">
                    -
                    {
                      transaction.subTransactions?.find(
                        (t) => t.object === "erc20Transaction"
                      )?.valueDisplay
                    }
                  </span>
                  <span className="text-sm text-slate-400">
                    {
                      transaction.subTransactions?.find(
                        (t) => t.object === "erc20Transaction"
                      )?.symbol
                    }
                  </span>
                </div>
              </div>
            ) : transaction.transactionCategory ===
                TransactionCategory.NFT_MINT ||
              transaction.transactionCategory === TransactionCategory.MINT ||
              transaction.transactionCategory ===
                TransactionCategory.CONTRACT_CALL ||
              transaction.transactionCategory === TransactionCategory.WRAP ? (
              <div className="flex items-center space-x-3">
                <JazziconGenerator address={transaction.toAddress || ""} />
                <div className="flex flex-col">
                  <span className="text-white">To</span>
                  <span className="text-sm text-slate-400">
                    {formatAddress(transaction.toAddress || "")}
                  </span>
                </div>
              </div>
            ) : transaction.transactionCategory ===
              TransactionCategory.NFT_TRANSFER ? (
              <div className="flex items-center space-x-3">
                <JazziconGenerator
                  address={
                    transaction.subTransactions?.find(
                      (txn) =>
                        txn.transactionCategory ===
                        TransactionCategory.NFT_TRANSFER
                    )?.fromAddress || ""
                  }
                />
                <div className="flex flex-col space-x-2">
                  <span className="text-White">From</span>
                  <span className="text-sm text-slate-400 truncate max-w-[7rem] sm:max-w-[10rem]">
                    {formatAddress(
                      transaction.subTransactions?.find(
                        (txn) =>
                          txn.transactionCategory ===
                          TransactionCategory.NFT_TRANSFER
                      )?.fromAddress || ""
                    )}
                  </span>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="hidden sm:flex items-center justify-end space-x-2 sm:space-x-4 col-span-1 2xl:col-span-2 text-subdued">
            {transaction.gasFeeEth && (
              <div className="hidden 2xl:block">
                <div className="flex space-x-1 items-center">
                  <span>{transaction.gasFeeEth?.toFixed(2)}</span>
                  <span>ETH</span>
                  <GasIcon />
                </div>
                <div>${transaction.gasFeeUsd?.toFixed(2)}</div>
              </div>
            )}
            <ExternalLink
              chainId={transaction.chainId || 1}
              txnType="tx"
              txnHash={transaction.transactionHash || ""}
              extraClasses="hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-600 p-2 rounded-full flex"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
