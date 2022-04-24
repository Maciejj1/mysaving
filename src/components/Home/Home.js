import React, { useState } from "react";

import Nav from "../NavBar/Nav";
import { TransactionProvider } from "../context/GlobalState";
import { Balance } from "../transaction/Balance/Balance";
import { AddTransaction } from "../transaction/AddTransaction/AddTransaction";
import { TransactionHistory } from "../transaction/TransactionList/TransactionList";
import { IncomeExpenses } from "../transaction/IncomeExpenses/IncomeExpenses";
import user from "../../assets/pictures/man.png";
import "./Home.scss";
import { auth } from "../FirebaseConfig/Config";
import { useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Navigate } from "react-router";
import Popup from "../Popup/Popup";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
function Home({ user }) {
  const history = useNavigate();
  useEffect(() => {
    // forcing user to signup
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history("/login");
      }
    });
  });
  const close = () => {
    setIsLoginSuccess(false);
  };

  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  return (
    <div className="home-container" user={user}>
      <TransactionProvider>
        <React.StrictMode>
          <div className="home-base">
            <Nav />
            <h2>Twoje Saldo</h2>
            <div className="home-balance">
              <Balance />
              <IncomeExpenses />
            </div>

            <hr />
            <h2>Historia</h2>
            <div className="home-transaction-history">
              <TransactionHistory />
            </div>
            <div className="home-add-transaction">
              <AddTransaction />
            </div>
          </div>
        </React.StrictMode>
      </TransactionProvider>
    </div>
  );
}

export default Home;
