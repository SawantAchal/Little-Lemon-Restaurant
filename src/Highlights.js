import React from 'react'
import './Assets/Highlight.css'
import img2 from './Assets/images/greek salad.jpg'
import img3 from './Assets/images/bruchetta.svg'
import img4 from './Assets/images/lemon dessert.jpg'
import { MdDeliveryDining } from "react-icons/md";

const Highlights = () => {
  return (
    <div className='Highlights'>
      <header>
        <h1>This weeks specials!</h1>
        <button  style={{backgroundColor:"#F4CE14" , color:"#333333" , marginTop:"-60pt" , height:"5dvh", borderRadius:"9pt" , width:"17vh" , border:"none"}}>Online Menu</button>
      </header>
      <article>
        <div className='box'>
          <img src={img2} style={{height:"20dvh"}}/>
          <header style={{margin:"7pt"}}><strong>greek salad </strong><span style={{color:"#EE9972" , marginLeft:"39pt"}}>$12.99</span></header>
          <p style={{margin:"7pt"}}>The famous freek salad of crispy lettuce, peppers, olives and our chicago style feta chesse garnished with crunchy garliv and rosemary croutons</p>
          <p style={{fontSize:"12pt" ,margin:"7pt" ,marginTop:"17pt"}}>Order a delivery <span style={{marginLeft:"3.5pt" ,fontSize:"12pt"}}><MdDeliveryDining /></span></p>
        </div>
        <div className='box'>
          <img src={img3} style={{height:"20dvh"}}/>
          <header style={{margin:"7pt"}}><strong>Bruchetta</strong> <span style={{color:"#EE9972" , marginLeft:"55pt"}}>$5.99</span></header>
          <p style={{margin:"7pt"}}>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <p style={{fontSize:"12pt" ,margin:"7pt" ,marginTop:"29pt"}}>Order a delivery <span style={{marginLeft:"3.5pt" , fontSize:"12pt"}}><MdDeliveryDining /></span></p>
        </div>
        <div className='box'>
          <img src={img4} style={{height:"20dvh" , width:"30vh"}}/>
          <header style={{margin:"7pt"}}><strong>Lemon Dessert </strong> <span style={{color:"#EE9972" , marginLeft:"31pt"}}>$5.00</span></header>
          <p style={{margin:"7pt"}}>This comes straight from grandma's recipe book ,every last ingredient has been sourced and is as authentic as can be imagined</p>
          <p style={{fontSize:"12pt" ,margin:"7pt" , marginTop:"17pt"}}>Order a delivery <span style={{marginLeft:"3.5pt" , fontSize:"12pt"}}><MdDeliveryDining /></span></p>
        </div>
      </article>
    </div>
  )
}

export default Highlights