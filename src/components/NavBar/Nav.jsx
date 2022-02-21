import React from 'react'
import { useAuth } from '../AuthContext/AuthContext';
import { AuthProvider } from '../AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import logo from '../../assets/pictures/logo.png'
import './NavBar.scss'
import settings from '../../assets/pictures/setting.png'
import home from '../../assets/pictures/home.png'

const Nav = () => {
    
  return (
    <div className='nav-container'>
      <div className='nav-base'>
      <div className='nav-logo'>
      <img src={logo} className="nav-nav-logo"/>
      </div>
       <div className='nav-title'>
         <h1>MySaving</h1>
       </div>
         <div className='nav-links'>
        <Link to="/" className='dashboard-link'><img src={home} className="home-logo"/> Panel Głowny</Link>
        <br/>
        <br/>
        <Link to="/setting" className='settings-link'><img src={settings} className="settings-logo"/>Ustawienia</Link>
        <br/>
        </div>
      </div>

    </div>
  )
}

export default Nav