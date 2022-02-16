import React,{useState} from 'react'
import {auth} from '../FirebaseConfig/Config'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { provider } from '../FirebaseConfig/Config'
import { GoogleAuth } from '../FirebaseConfig/Config'
import firebase from 'firebase/compat/app'
 const LoginForm = () => {
       const history = useNavigate();
       const[email , setEmail] = useState('');
       const[password , setPassword] = useState('');
       const[successMsg , setSuccessMsg] = useState('');
       const[error , setError]= useState('');

       const handleLogin=(e)=>{
         e.preventDefault();
         console.log(email,password);
         auth.signInWithEmailAndPassword(email,password).then(()=>{
           setSuccessMsg('Zalogowano');
           setEmail('');
           setPassword('');
           setError('');
           setSuccessMsg('');
           history('/');
         }).catch(error=>setError(error.message));
       }
       









  return (
    <div className='login-form-container'>
      {successMsg&&<>
      <div className='succes-msg'>{successMsg}</div>
      <br/>
      </>}
        <h2>Logowanie</h2>
        <form autoComplete='off' className='login-form-group' onSubmit={handleLogin}>
            <label htmlFor='email'/>
              <input 
              type="email" 
              className='login-form-email' 
              placeholder='E-mail'
              required
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              />
           <br />
            <label htmlFor='password'/>
              <input 
              type="password" 
              className='login-form-password' 
              placeholder='Hasło'
              required
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              />
           <br />
           <button type="submit" className='login-form-login-button'>Zaloguj</button>
           <button type='submit' className='login-form-google-login-button'>Google</button>
           <br />
           <button
       onClick={()=>{

      
   const GoogleAuth = 
   new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(GoogleAuth)

 }}>Zaloguj się Przez Google</button>
 <br/>
           <span>Nie masz konta?</span>
           <Link to="/Register">Rejestruj</Link>






        </form>
    </div>
  )
}
export default LoginForm;