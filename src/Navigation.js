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
          <Link to="/"><li>Home</li></Link>
          <Link to="/"><li>About</li></Link>
          <Link to="/"><li>Menu</li></Link>
          <Link to="/"><li>Reservations</li></Link>
          <Link to="/"><li>Order Online</li></Link>
          <Link to="/"><li>Login</li></Link>
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