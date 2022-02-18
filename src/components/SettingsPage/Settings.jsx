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
    <div className='settings-container'>
      <div className='settigns-nav'>
        <Nav/>
      </div>
      <div className='settings-title'>
        <h1>Ustawienia</h1>
      </div>
      <hr/>
      <div className='settigns-account'>
        <img src="https://www.clipartmax.com/png/middle/49-499626_pizza-free-vector-icon-designed-by-freepik-icones-de-destaques-do-instagram.png"></img>
        <h3>Maciej</h3>
      </div>
      <div className='settigns-add-balance'>
        
      </div>
      <div className='seetign-change-email'>
      <a href="">Zmień Email</a>
      </div>
      <div className='seetign-change-password'>
      <a href="">Zmień Hasło</a>
      </div>
      <div className='seetign-change-picture'>
      <a href="">Zmień Zdjęcie</a>
      </div>
        
        <br />
        <button onClick={handleLogOut}>Wyloguj</button>
        <br />
    </div>
  )
}

export default Settings