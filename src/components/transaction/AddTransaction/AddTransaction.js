import React, {useState, useContext} from 'react'
import { TransactionContext } from '../../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(TransactionContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <div className='add-transaction-container'>
      <h3>Dodaj transakcje</h3>
      <form onSubmit={onSubmit}>
        <div className="add-transaction-name">
          <label htmlFor="text"></label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nazwa" />
        </div>
        <div className="add-transaction-amount">
          <label htmlFor="amount"
            > <br />
            (wpisz z minusem jak to wydatek)</label
          ><br/>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="add-transaction-add-button">Zatwierdź</button>
      </form>
    </div>
  )
}
