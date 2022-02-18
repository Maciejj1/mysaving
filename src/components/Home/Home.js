import React from 'react';

import Nav from '../NavBar/Nav';
import { GlobalProvider } from '../context/GlobalState';
import {Balance} from '../transaction/Balance'
import {AddTransaction} from '../transaction/AddTransaction'
import {TransactionList} from '../transaction/TransactionList'
import {IncomeExpenses} from '../transaction/IncomeExpenses'

function Home() {
  return (
    <GlobalProvider>
        
      <div className="container">
        <Nav />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default Home;