import React from 'react'
import { auth } from '../FirebaseConfig/Config';
import { useAuth } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import Nav from '../NavBar/Nav';
import './SettingsPage.scss'
const Settings = () => {
   const history = useNavigate();
   const handleLogOut= () =>{
     auth.signOut().then(()=>{
       history('/login')
     })
   }
  return (
    <div className='settings-container'>
      <div className='settings-base'>       
              <Nav/>
        <h2>Ustawienia</h2>
        
     
      <div className='links'>
    
      <button>Zmień Email</button>
      <br/>
      <button>Zmień Hasło</button>
      <br/>
      <button>Zmień Zdjęcie</button>
      
      
      </div>
        <br />
        <button onClick={handleLogOut} className="logout-button">Wyloguj</button>
        <br />
        
    </div>
    </div>
  )
}

export default Settings