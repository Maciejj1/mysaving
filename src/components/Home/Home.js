import React from 'react';

import Nav from '../NavBar/Nav';
import { TransactionProvider } from '../context/GlobalState';
import {Balance} from '../transaction/Balance'
import {AddTransaction} from '../transaction/AddTransaction'
import {TransactionHistory} from '../transaction/TransactionList'
import {IncomeExpenses} from '../transaction/IncomeExpenses'
import './Home.scss'

function Home() {
  return (
    <TransactionProvider>
        
      <div className="home-container">
        <div className='home-base'>
        <Nav />
        <di className="home-balance-inc-exp">
          <Balance />
        <IncomeExpenses />
        </di>
        
        <div className='home-transaction-history'>
          <TransactionHistory />
        </div>
        <div className='home-add-transaction'>
          <AddTransaction />
        </div>
        </div>
      </div>
    </TransactionProvider>
  );
}

export default Home;