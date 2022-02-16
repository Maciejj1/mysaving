import React,{useContext} from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../FirebaseConfig/Config';
import { useAuth } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UsersDataContext } from '../NameProvider/NameProvider';
import Nav from '../NavBar/Nav';
const Home = () => {

   
  return (
   
    <div>
      <>
        <Nav/>
        </>
        <h1>Twoje Saldo</h1>
        <h2>1200zł</h2>
        <h3>Saldo</h3>
        <h2>600zł</h2>
        <h3>Oszczednosci</h3>
        <h2>1000zł</h2>
        <h3>Wydatki</h3>
        <br />
       
      <>
        <div className='user-name' >
          
        </div>
        </>
      
        <br/>
        <Link to="/">Panel Głowny</Link>
        <br/>
        <Link to="/notifications">Powiadomienia</Link>
        <br/>
        <Link to="/setting">Ustawienia</Link>
        <br/>
        <Link to="/expenses">Wydatki</Link>
        
        <br />

       <h2></h2>
        
    </div>
  )
}

export default Home;