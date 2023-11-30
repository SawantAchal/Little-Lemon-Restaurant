import React from 'react'
import './Assets/Navigation.css'
import logo from './Assets/images/Logo .svg'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <nav>
        <img src={logo}/>
        <b>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/"><li>About</li></Link>
          <Link to="/"><li>Menu</li></Link>
          <Link to="/"><li>Reservation</li></Link>
          <Link to="/"><li>Order online</li></Link>
          <Link to="/"><li>Login</li></Link>
        </ul>
        </b>
      </nav>
    </>
  )
}

export default Navigation