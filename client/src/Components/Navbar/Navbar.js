import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css';
export default () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/" className='NavLinks'>Home</NavLink></li>
                <li><NavLink to="/contact" className='NavLinks'>Contact</NavLink></li>
                <li><NavLink to="/about" className='NavLinks'>About</NavLink></li>
            </ul>
        </div>
    )
}