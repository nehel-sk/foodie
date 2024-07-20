import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-body'>
        <p>&copy;Foodie</p>
        <div className="footer-links">
            <Link>Terms and conditions</Link>
            <Link>Privacy policy</Link>
        </div>
    </div>
  )
}

export default Footer