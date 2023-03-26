import { ITransaction } from "@/types";
import moment from "moment";
import React from "react";
import Transaction from "./transaction";

const TransactionsByDate: React.FC<{
  date: string;
  transactions: ITransaction[];
}> = ({ transactions, date }) => {
  return (
    <div>
      <div className="text-sm text-subdued font-medium py-4">{moment(date).format('LL')}</div>
      <div className="divide-y divide-slate-800 border-y border-slate-800">
        {transactions.map((transaction) => (
          <Transaction key={transaction.blockNumber} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsByDate;
