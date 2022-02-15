import React from 'react'

const RegisterForm = () => {
  return (
    <div className='register-form-conatiner'>
        <h2>Rejestracja</h2>
        <form autoComplete='off' className='register-form-group'>
           <label htmlFor='name'>Nazwa</label>
                <input type="text" className='register-form-name'/>
            <br />
           <label htmlFor='email'>Email</label>
                <input type="email" className='register-form-email'/>
                    <br />
           <label htmlFor='password'>Hasło</label>
                <input type="password" className='register-form-password' />
                    <br />
                <button type="submit" className='register-form-register-button'>Rejestruj</button>
                <button type='submit' className='register-form-google-reegister-button'>Google</button>
                    <br />
           <span>Masz już konto?</span>
           <a href="/">Zaloguj</a>






        </form>
    </div>
  )
}

export default RegisterForm