import React, { useState, useContext, useEffect } from "react";
import { TransactionContext } from "../../context/GlobalState";

import "./AddTransaction.scss";
export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(TransactionContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  localStorage.setItem(text, amount);
  localStorage.getItem(text, amount);
  return (
    <div className="add-transaction-container">
      <h3>Dodaj transakcje</h3>
      <div className="add-transaction-base">
        <form onSubmit={onSubmit} className="add-transaction-form">
          <div className="add-transaction-name">
            <label htmlFor="text"></label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Nazwa"
              className="add-transaction-add-text"
            />
          </div>
          <div className="add-transaction-amount">
            <label htmlFor="amount">
              {" "}
              <br />
              <p>(wpisz z minusem jak to wydatek)</p>
            </label>
            <br />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Kwota"
              className="add-transaction-add-amount"
            />
          </div>
          <button className="add-transaction-add-button">Zatwierdź</button>
        </form>
      </div>
    </div>
  );
};