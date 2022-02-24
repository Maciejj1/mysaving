import React, { Component } from "react";
import "./App.scss";
import ReactDOM from "react-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { auth, db } from "./components/FirebaseConfig/Config";
import Expenses from "./components/Expenses/Expenses";
import Settings from "./components/SettingsPage/Settings";
import Notifications from "./components/Notifications/Notifications";
import { AuthProvider } from "./components/AuthContext/AuthContext";
class App extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("UsersData")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            this.setState({
              user: snapshot.data().Name,
            });
          });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/setting" element={<Settings />} />
              <Route path="/expenses" element={<Expenses />} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
