import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


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
  const { transactions } = useContext(GlobalContext);

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
        <div>
          <h4>Przychody</h4>
  <h4 className="money plus">{moneyFormatter(income)}</h4>
        </div>
        <div>
          <h4>Wydatki</h4>
  <h4 className="money minus">{moneyFormatter(expense)}</h4>
        </div>
      </div>
  )
}
