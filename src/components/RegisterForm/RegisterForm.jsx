import React,{useState} from 'react'
import {auth , db} from '../FirebaseConfig/Config'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/pictures/logo.png'
import './Register.scss'
const RegisterForm = (props) => {
    const[name , setName] = useState('');
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const[image , setImage] = useState('');
    const[amout, setAmout] = useState('');
    const[error, setError] = useState('');
    const history = useNavigate();
    const Register = (e) =>{
     e.preventDefault();
     auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
       db.collection('UsersData').doc(cred.user.uid).set({
         Name: name,
         Amout: amout,
         Email: email,
         Password: password,
         Image: image,
       }).then(()=>{
         setName('');
         setEmail('');
         setPassword('');
         setImage('');
         setAmout('');
         setError('');
         history('/login');
       }).catch(err => setError(err.message));
     }).catch(err => setError)
     console.log('its works');
    }







  return (
    <div className='register-form-conatiner'>
        <div className='register-form-base'>
        <form autoComplete='off' className='register-form-group' onSubmit={Register}>
        <div className='registerform-title'>
            <img src={logo} className="registerform-logo"/>
            <h2>MySaving</h2>
          </div>
           <label htmlFor='name'/>
                <input
                 type="text"
                 className='register-form-name'
                 placeholder='Nazwa'
                 required
                 onChange={(e)=>setName(e.target.value)}
                 value={name}
                />
            <br />
           <label htmlFor='email'/>
                <input 
                type="email" 
                className='register-form-email' 
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
                 value={email}
                />
                    <br />
           <label htmlFor='password'/>
                <input 
                type="password" 
                className='register-form-password' 
                placeholder='Hasło' 
                onChange={(e)=>setPassword(e.target.value)}
                 value={password}
                />
                
                
                <br/>
                <button type="submit" className='register-form-register-button'>Rejestruj</button>
                
                    <br />
                    <div className='register-form-link-to-login'>
           <span className='register-form-link-to-login'>Masz już konto?</span>
           <br/>
           <Link to="/login" className='login-form-register'>Zaloguj</Link>

                    </div>




        </form>
        </div>
    </div>
  )
}

export default RegisterForm;