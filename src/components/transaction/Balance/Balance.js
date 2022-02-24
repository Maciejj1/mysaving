import React, { useContext } from "react";
import { TransactionContext } from "../../context/GlobalState";
import "./Balance.scss";
import coin from "../../../assets/pictures/coin.png";
//Money formatter function
function moneyFormatterr(num) {
  let p = num.toFixed(2).split(".");
  return (
    (p[0].split("")[0] === "-" ? "-" : "") +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1] +
    "PLN "
  );
}

export const Balance = () => {
  const { transactions } = useContext(TransactionContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="balance-container">
      <div className="balance">
        <p>Saldo</p>
        <h4 className="balance-money">
          <img src={coin} className="coin" />
          {moneyFormatterr(total)}
        </h4>
      </div>
    </div>
  );
};
