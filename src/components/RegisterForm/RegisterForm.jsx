import React,{useState} from 'react'
import {auth , db} from '../FirebaseConfig/Config'
import {Link} from 'react-router-dom'

const RegisterForm = (props) => {
    const[name , setName] = useState('');
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const[image , setImage] = useState('');
    const[error, setError] = useState('');

    const Register = (e) =>{
     e.preventDefault();
     auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
       db.collection('UsersData').doc(cred.user.uid).set({
         Name: name,
         Email: email,
         Password: password,
         Image: image,
       }).then(()=>{
         setName('');
         setEmail('');
         setPassword('');
         setImage('');
         setError('');
         props.history.push('/login');
       }).catch(err => setError(err.message));
     }).catch(err => setError)
     console.log('its works');
    }







  return (
    <div className='register-form-conatiner'>
        <h2>Rejestracja</h2>
        <form autoComplete='off' className='register-form-group' onSubmit={Register}>
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
                    <br />
            <label htmlFor='image' />
                <input 
                type="file" 
                className='register-form-image' />
                <br/>
                <button type="submit" className='register-form-register-button'>Rejestruj</button>
                <button type='submit' className='register-form-google-reegister-button'>Google</button>
                    <br />
           <span>Masz już konto?</span>
           <a href="/login">Zaloguj</a>






        </form>
    </div>
  )
}

export default RegisterForm;