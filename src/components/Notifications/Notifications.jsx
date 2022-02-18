import React from 'react'
import Nav from '../NavBar/Nav';
import Calendar from '../../assets/Calendar/Calendar';
const Notifications = () => {
  return (
    <div className='notifications-container'>
      <div className='notifications-nav'>
        <Nav />
      </div>
      <div className='notifications-title'>
        <h1>Powiadomienia</h1>
      </div>
      <div className='notifications-text'>
        <h2>Ustaw Powiadomienie</h2>
        
      </div>
      <hr/>
      <div className='notifications-add-notification'>
        <div className='notifications-write-name'>
          <input type="text" placeholder='Nazwa' />
        </div>
        <div className='notifications-select-the-date'>
          <Calendar />
        </div>
        
        <div className='notifications-select-hour'>
          <h2>Godzina:</h2>
          <select>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
          <option>23:00</option>
        </select>
        </div>
        <div className='notifications-add-button'>
          <button>Dodaj</button>
        </div>
        
      </div>
      </div>
  )
}

export default Notifications