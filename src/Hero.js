import React from 'react'
import './Assets/Hero.css'
import img1 from './Assets/images/restauranfood.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <main>
        <h2 style={{color:"#F4CE14" , fontSize:"64pt" ,marginTop:"0pt"}}>Little Lemon</h2>
        <h5 style={{color:"#EDEFEE" , fontSize:"40pt" , marginTop:"-80pt"}}>Chicago</h5>
        <p style={{color:"#EDEFEE" ,marginTop:"-60pt" ,fontSize:"18pt"}}>We are a family owned <br/> mediterranean resturant , <br/>focused on traditional <br/>recipes served with a moderm <br/> twist.</p>
        <Link to="/booking-page">
        <button style={{backgroundColor:"#F4CE14" , color:"#333333" , marginTop:"-60pt" , height:"5dvh", borderRadius:"9pt" , width:"17vh" , border:"none"}}><b>Reserve a Table</b></button>
        </Link>
      </main>
      <img src={img1} style={{height:"50dvh" , width:"35vh" , borderRadius:"8pt" , marginTop:"80pt" ,marginRight:"30pt"}}/>
    </div>
  )
}

export default Hero