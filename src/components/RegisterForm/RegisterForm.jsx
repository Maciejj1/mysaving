import React from 'react'

const RegisterForm = () => {
  return (
    <div className='register-form-conatiner'>
        <h2>Rejestracja</h2>
        <form autoComplete='off' className='register-form-group'>
           <label htmlFor='name'/>
                <input type="text"className='register-form-name' placeholder='Nazwa'/>
            <br />
           <label htmlFor='email'/>
                <input type="email" className='register-form-email' placeholder='Email'/>
                    <br />
           <label htmlFor='password'/>
                <input type="password" className='register-form-password' placeholder='Hasło' />
                    <br />
            <label htmlFor='image' />
                <input type="file" className='register-form-image' />
                <br/>
                <button type="submit" className='register-form-register-button'>Rejestruj</button>
                <button type='submit' className='register-form-google-reegister-button'>Google</button>
                    <br />
           <span>Masz już konto?</span>
           <a href="/">Zaloguj</a>






        </form>
    </div>
  )
}

export default RegisterForm;