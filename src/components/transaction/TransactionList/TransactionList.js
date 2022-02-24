import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";

import { TransactionContext } from "../../context/GlobalState";
import "./TransactionList.scss";
export const TransactionHistory = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="transaction-history-container">
      <div className="transaction-history">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
