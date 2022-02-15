import React from 'react'

 const LoginForm = () => {
  return (
    <div className='login-form-container'>
        <h2>Logowanie</h2>
        <form autoComplete='off' className='login-form-group'>
           <label htmlFor='email'/>
           <input type="email" className='login-form-email' placeholder='E-mail'/>
           <br />
           <label htmlFor='password'/>
           <input type="password" className='login-form-password' placeholder='Hasło'/>
           <br />
           <button type="submit" className='login-form-login-button'>Zaloguj</button>
           <button type='submit' className='login-form-google-login-button'>Google</button>
           <br />
           <span>Nie masz konta?</span>
           <a href="/Register">Rejestruj</a>






        </form>
    </div>
  )
}
export default LoginForm;