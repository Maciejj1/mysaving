import React from 'react'

export const LoginForm = () => {
  return (
    <div className='login-form-container'>
        <h2>Logowanie</h2>
        <form autoComplete='off' className='login-form-group'>
           <label htmlFor='email'>Email</label>
           <input type="email" className='login-form-email'/>
           <br />
           <label htmlFor='password'>Hasło</label>
           <input type="password" className='login-form-password' />
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
