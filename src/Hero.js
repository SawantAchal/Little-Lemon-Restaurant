import React from 'react'
import './Assets/Hero.css'
import img1 from './Assets/images/restauranfood.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <main>
        <h2>Little Lemon</h2>
        <h5>Chicago</h5>
        <p>We are a family owned <br/> mediterranean resturant , <br/>focused on traditional <br/>recipes served with a moderm <br/> twist.</p>
        <Link to="/booking-page">
        <button style={{backgroundColor:"#F4CE14" , color:"#333333" , marginTop:"-60pt" , height:"5dvh", borderRadius:"9pt" , width:"25vh" , border:"none"}}><b>Reserve a Table</b></button>
        </Link>
      </main>
      <img id='img1' src={img1} style={{height:"50dvh" , width:"35vh" , borderRadius:"8pt" , marginTop:"80pt" ,marginRight:"30pt" , fontSize:"18pt"}}/>
    </div>
  )
}

export default Hero