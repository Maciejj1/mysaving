import React from 'react'
import { useAuth } from '../AuthContext/AuthContext';
import { AuthProvider } from '../AuthContext/AuthContext';
import { Link } from 'react-router-dom';
const Nav = () => {
    
  return (
    <div className='nav-conainer'>
      <div className='nav-logo'>

      </div>
       <div className='nav-title'>
         <h1>MySaving</h1>
       </div>
         <div className='nav-links'>
        <Link to="/">Panel Głowny</Link>
        <br/>
        <Link to="/setting">Ustawienia</Link>
        <br/>
        </div>
      

    </div>
  )
}

export default Nav