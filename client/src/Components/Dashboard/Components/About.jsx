import React from 'react';
import './About.css';
import Sidebar from '../Components/SideBar Section/Sidebar';

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <Sidebar />
      <div className="aboutContent">
        <h1>About REVTALK</h1>
        <p>REVTALK is a community for car enthusiasts. Whether you're into classic cars, performance mods, or just love talking about your favorite rides, REVTALK is the place for you.</p>
        <h3>Our Mission</h3>
        <p>Our mission is to bring car enthusiasts together, share knowledge, and enjoy the passion for automobiles.</p>
        <h3>Contact Us</h3>
        <p>If you have any questions or suggestions, feel free to reach out to us through our contact page.</p>
      </div>
    </div>
  );
}

export default AboutPage;
