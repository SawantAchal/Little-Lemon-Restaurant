import React, { useState } from 'react'
import './Assets/Navigation.css'
import logo from './Assets/images/Logo .svg'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const [menuOpen , setmenuOpen] = useState(false)

  const toggleMenu = () =>{
    setmenuOpen(!menuOpen);
  }

  return (
    <>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <img src={logo}/>
        <b>
        <ul className={`navbar-link ${menuOpen ? "visible" : ""}`}>
          <li><Link to="/" className='mob lap'>Home</Link></li>
          <li><Link to="/" className='mob lap'>About</Link></li>
          <li><Link to="/" className='mob lap'>Menu</Link></li>
          <li><Link to="/" className='mob lap'>Reservations</Link></li>
          <li><Link to="/" className='mob lap'>Order Online</Link></li>
          <li><Link to="/" className='mob lap'>Login</Link></li>
        </ul>
        </b>
        {/* Mobile Navigation */}
        <div className='hamburger'onClick={toggleMenu} >
            <GiHamburgerMenu  />
        </div>
      </nav>
    </>
  )
}

export default Navigation
