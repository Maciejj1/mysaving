import React,{useContext} from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../FirebaseConfig/Config';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UsersDataContext } from '../NameProvider/NameProvider';

const Home = () => { 
  const { usersdata } = useContext(UsersDataContext);
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
        <React.Fragment >
        {usersdata.map(userdata =>(
        <div className='user-name' key={userdata.ID}>
          <h2>{userdata.Name}</h2>
        </div>
        
        
        ))}</React.Fragment>
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