import React from 'react';

import Nav from '../NavBar/Nav';
import { TransactionProvider } from '../context/GlobalState';
import {Balance} from '../transaction/Balance/Balance'
import {AddTransaction} from '../transaction/AddTransaction/AddTransaction'
import {TransactionHistory} from '../transaction/TransactionList/TransactionList'
import {IncomeExpenses} from '../transaction/IncomeExpenses/IncomeExpenses'
import user from '../../assets/pictures/man.png'
import './Home.scss'

function Home() {
  return (
    <TransactionProvider>
        
      <div className="home-container">
        <div className='home-base'>
        <Nav />
        <h2>Twoje Saldo</h2>
        <div className="home-balance">
          
          <Balance />
          <IncomeExpenses />
          </div>

        <hr/>
        <h2>Historia</h2>
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