import React, { useContext } from 'react';
import { TransactionContext } from '../../context/GlobalState';
import './IncExp.scss'
import poor from '../../../assets/pictures/poor.png'
import piggy from '../../../assets/pictures/piggy-bank.png'
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
    p[1]+'PLN'
  );
}

export const IncomeExpenses = () => {
  const { transactions } = useContext(TransactionContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className="inc-exp-container">
        <div className='inc'>
          <p>Przychody</p>
  <h4 className="money-plus"><img src={piggy} className="piggy"/>{moneyFormatter(income)}</h4>
        </div>
        <div className='exp'>
          <p>Wydatki</p>
  <h4 className="money-minus"><img src={poor} className="poor"/>{moneyFormatter(expense)}</h4>
        </div>
      </div>
  )
}
