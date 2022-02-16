import React from 'react'
import { auth } from '../FirebaseConfig/Config';
import { useAuth } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import Nav from '../NavBar/Nav';
const Settings = () => {
   const history = useNavigate();
   const handleLogOut= () =>{
     auth.signOut().then(()=>{
       history('/login')
     })
   }
  return (
    <div>
      <Nav/>
      <h2>Dodaj Saldo</h2>
        <input type="text"/>.PLN
        <br />
        <button onClick={handleLogOut}>Wyloguj</button>
        <br />
        <Link to="/">Panel Głowny</Link>
        <br/>
        <Link to="/notifications">Powiadomienia</Link>
        <br/>
        <Link to="/setting">Ustawienia</Link>
        <br/>
        <Link to="/expenses">Wydatki</Link>
        
        <br />
    </div>
  )
}

export default Settings