import React from 'react'
import './Assets/Navigation.css'
import logo from './Assets/images/Logo .svg'

const Navigation = () => {
  return (
    <>
      <nav>
        <img src={logo}/>
        <b>
        <ul>
          
          <a><li>Home</li></a>
          <a><li>About</li></a>
          <a><li>Menu</li></a>
          <a><li>Reservation</li></a>
          <a><li>Order online</li></a>
          <a><li>Login</li></a>
         
        </ul>
        </b>
      </nav>
    </>
  )
}

export default Navigation