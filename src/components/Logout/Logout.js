import React from 'react'
import './Logout.css'
import { Link } from 'react-router-dom'

function Logout() {
  return (
    <div className='logout-container'>
        <div className='logout-content'>
            <h1>You are succesfully logged out</h1>
            <p>Thank you for using our application .Have a great day</p>
            <Link to='/'  ><button className='login'>Login</button></Link>
            
        </div>
    </div>
  )
}

export default Logout