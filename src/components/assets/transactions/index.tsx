import Badge from "@/components/reusables/badge";
import Pill from "@/components/reusables/pill";
import { usePortfolioContext } from "@/context/portfolio";
import { TransactionResponse } from "@/utils/responses/transactions";
import {
  ArrowDownTrayIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useCallback, useEffect, useMemo } from "react";
import TransactionsByDate from "./transactionsByDate";
import groupBy from "lodash.groupby";

const Transactions: React.FC = () => {
  const { transactions, setTransactions } = usePortfolioContext();

  const fetchTransactions = useCallback(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          const groupedTxns = groupBy(res, "createdAt");
          setTransactions?.(groupedTxns);
        }
      })
      .catch((err) => console.log(err));
  }, [setTransactions]);

  useEffect(() => {
    void fetchTransactions();
  }, [fetchTransactions]);

  return (
    <div>
      <div className="flex justify-between text-xs">
        <div className="flex space-x-3">
          <Pill>
            <>
              <span className="text-xs">Show suspicious</span>
              <QuestionMarkCircleIcon className="w-4 h-4" />
            </>
          </Pill>

          <Pill>
            <>
              <span className="text-xs">Show unverified</span>
              <QuestionMarkCircleIcon className="w-4 h-4" />
            </>
          </Pill>

          <div className="flex items-center space-x-1 text-subdued">
            <span>Hidden transactions</span>
            <Badge txt="21" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <QuestionMarkCircleIcon className="w-5 h-5" />
          <Pill padding="px-5 py-2">
            <ArrowDownTrayIcon className="w-5 h-5" />
          </Pill>
        </div>
      </div>

      <div className="rounded-2xl py-2">
        {transactions &&
          Object.keys(transactions).map((date) => (
            <TransactionsByDate
              key={date}
              date={date}
              transactions={transactions[date]}
            />
          ))}
      </div>
    </div>
  );
};

export default Transactions;
