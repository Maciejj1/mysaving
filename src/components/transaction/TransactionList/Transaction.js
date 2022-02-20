import React, {useContext} from 'react';
import {  TransactionContext } from '../../context/GlobalState';
import './TransactionList.scss'
//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]+'PLN ' 
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <div className='transaction-container'>
  <button onClick={() => deleteTransaction(transaction.id)} className="transaction-delete-button">x</button>
    <div>{transaction.amount < 0 }
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span>
    </div></div>
  )
}
