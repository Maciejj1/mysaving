import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { TransactionContext } from '../context/GlobalState';

export const TransactionHistory = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <>
      <h3>Historia</h3>
      <ul className="transaction-history">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
