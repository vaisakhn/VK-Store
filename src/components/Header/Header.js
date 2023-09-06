import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>

<h1>VK STORE</h1>

<Link to='/logout'>
<button className='logout'>Log Out</button>
</Link>
    </header>
  )
}

export default Header