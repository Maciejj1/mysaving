import React, { useState } from "react";
import { auth } from "../FirebaseConfig/Config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { provider } from "../FirebaseConfig/Config";
import { GoogleAuth } from "../FirebaseConfig/Config";
import logo from "../../assets/pictures/logo.png";
import firebase from "firebase/compat/app";
import "./Login.scss";
import google from "../../assets/pictures/google.png";
const LoginForm = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSuccessMsg("Zalogowano");
        setEmail("");
        setPassword("");
        setError("");
        setSuccessMsg("");
        history("/");
      })
      .catch((error) => setError(error.message));
  };
  const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(googleProvider)
      .then(() => {
        window.location.assign("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login-form-container">
      <div className="login-form-base">
        {successMsg && (
          <>
            <div className="succes-msg">{successMsg}</div>
            <br />
          </>
        )}

        <form
          autoComplete="off"
          className="login-form-group"
          onSubmit={handleLogin}
        >
          <div className="loginform-title">
            <img src={logo} className="loginform-logo" />
            <h2>MySaving</h2>
          </div>

          <label htmlFor="email" />
          <input
            type="email"
            className="login-form-email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label htmlFor="password" />
          <input
            type="password"
            className="login-form-password"
            placeholder="Hasło"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <button type="submit" className="login-form-login-button">
            Zaloguj
          </button>

          <br />
          <button
            onClick={signInWithGoogle}
            className="login-form-login-google"
          >
            <img src={google} className="loginform-google-icon" />
            <p>Zaloguj się Przez Google</p>
          </button>
          <br />
          <div className="login-form-link-to-register">
            <span>Nie masz konta?</span>
            <br />
            <Link to="/Register" className="login-form-register">
              Rejestracja
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
