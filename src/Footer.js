import React from "react"
import small_logo from './Assets/images/Logo .svg'
import { Link } from "react-router-dom";
import './Assets/Footer.css'


const Footer = () => {
    return(
        <footer className="">
            <section>
                <div className="company-info">
                    <img src={small_logo} alt=""/>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                </div>
                <div className="list">
                    <h3>Important Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/">Reservations</Link></li>
                    <li><Link to="/">Order Online</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                <ul>
                <li>Address: <br/> 123 Town Street, Chicago</li>
                    <li>Phone: <br/> +00 123 456 789</li>
                    <li>Email: <br/> little@lemon.com</li>
                </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Twitter</a></li>
                </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;