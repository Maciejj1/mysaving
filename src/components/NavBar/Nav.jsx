import React from 'react'
import { useAuth } from '../AuthContext/AuthContext';
const Nav = () => {
    const { currentUser} = useAuth()
  return (
    <div>
        <h2>Email: {currentUser.email}</h2>
    </div>
  )
}

export default Nav