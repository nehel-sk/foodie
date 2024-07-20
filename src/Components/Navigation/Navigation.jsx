import React from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom'
import { BiSolidCartAlt } from "react-icons/bi";


function Navigation() {
  return (
    <div className='nav-container'>
        <nav >
            <div>
                <img src="" alt="img" />
            </div>

            <div className='nav-links'>
                <Link to='/' className='nav-item'>Home</Link>
                <Link to='/menu' className='nav-item'>Menu</Link>
                <Link to='/aboutUs' className='nav-item'>About Us</Link>
                <Link to='/contactUs' className='nav-item'>Contact Us</Link> 
            </div>
            
            <div className='nav-btns'>
                <Link to='/cart' className='cart-icon'><BiSolidCartAlt /></Link>
                <button>
                    <Link to='/login' className='nav-item'>Login</Link>
                </button>
                
            </div>
        </nav>
    </div>
  )
}

export default Navigation