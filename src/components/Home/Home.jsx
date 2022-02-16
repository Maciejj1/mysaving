import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../FirebaseConfig/Config';
import { useNavigate } from 'react-router-dom';
const Home = () => {
   const history = useNavigate();

   const handleLogOut= () =>{
     auth.signOut().then(()=>{
       history('/login')
     })
   }

  return (
    <div>
        <h1>Udało się</h1>
        <button onClick={handleLogOut}>Wyloguj</button>
    </div>
  )
}

export default Home;