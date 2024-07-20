import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <section className="about-section">
        <h3>Our Mission</h3>
        <p>At Foodie's Delight, our mission is to provide delicious, high-quality meals that are delivered quickly and reliably to our customers. We are passionate about using fresh ingredients and innovative recipes to create a dining experience that delights the senses.</p>
      </section>
      
      <section className="about-section">
        <h3>Our Vision</h3>
        <p>Our vision is to become the leading food delivery service, known for our commitment to quality, customer satisfaction, and community involvement. We strive to make every meal memorable and to bring joy to every customer's dining experience.</p>
      </section>
      
      <section className="about-section">
        <h3>Meet Our Team</h3>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h4>Jane Smith</h4>
            <p>Head Chef</p>
          </div>
          <div className="team-member">
            <img src="team-member3.jpg" alt="Team Member 3" />
            <h4>Emily Johnson</h4>
            <p>Marketing Director</p>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
