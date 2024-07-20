import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { MdOutlineDeliveryDining } from "react-icons/md";
import { SiCodefresh } from "react-icons/si";
import { BiSolidDish } from "react-icons/bi";


function Home() {
  return ( 
    <div>
      
      <div className="banner">
        <div className="banner-content">
          <h2>Welcome to Foodie's Delight</h2>
            <p>Your favorite meals delivered fast and fresh.</p>
            <button>
              <Link to='/menu'>Order Now</Link>
            </button>
            
        </div>
      </div>

      <div className="services">
        <h2>Our Services</h2>
        <div className="services-content">
        <div className="highlight">
          <MdOutlineDeliveryDining className='icon'/>
          <h3>Fast Delivery</h3>
          <p>Get your food delivered in under 30 minutes.</p>
        </div>
        <div className="highlight">
          <SiCodefresh className='icon'/>
          <h3>Fresh Ingredients</h3>
          <p>Only the freshest ingredients used in all our meals.</p>
        </div>
        <div className="highlight">
          <BiSolidDish className='icon'/>
          <h3>Wide Variety</h3>
          <p>Choose from a wide range of cuisines and dishes.</p>
        </div>
        
      </div>
      </div>

      
       
    </div>
  );
}

export default Home;
