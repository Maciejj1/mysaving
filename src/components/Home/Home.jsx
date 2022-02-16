import React,{useContext} from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../FirebaseConfig/Config';
import { useAuth } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UsersDataContext } from '../NameProvider/NameProvider';

const Home = () => { 
  const { currentUser} = useAuth()
   const history = useNavigate();
   const handleLogOut= () =>{
     auth.signOut().then(()=>{
       history('/login')
     })
   }

   
  return (
    <div>

        <h1>Udało się</h1>
        <br />
       
      <>
        <div className='user-name' >
          <h2>Email: {currentUser.email}</h2>
        </div>
        </>
        
      
        Dodaj Saldo
        <input type="text"/>
        <button type="submit">Dodaj</button>
        <br/>
        <Link to="/notifications">Powiadomienia</Link>
        <br/>
        <Link to="/setting">Ustawienia</Link>
        <br/>
        <Link to="/expenses">Wydatki</Link>
        
        <br />

       <h2></h2>
        <button onClick={handleLogOut}>Wyloguj</button>
    </div>
  )
}

export default Home;