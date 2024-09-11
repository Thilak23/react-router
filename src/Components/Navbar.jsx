import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <h2>Navbar</h2>
      <div className='ul'>
        <ul>
          <Link to='/' className='li-1'>Home</Link>
          <Link to='/contact' className='li-2'>Contact</Link>
          <Link to='/about' className='li-3'>About</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar