import React from 'react';
import KidsPlayingImage from './images/kids-playing.jpg'; // replace with your image path
import './HomePage.scss';
import HamburgerMenu from './HamburgerMenu';

const HomePage = () => {
  return (
    <div className="home-page" 
         style={{ 
           backgroundImage: `url(${KidsPlayingImage})`,
           height: '100vh' 
         }}>
      <HamburgerMenu />
      <div className="container">
        <h1>Welcome to PlayDate!</h1>
        <p className="lead">
          Are you a parent with kids aged 3-11 years? Looking for a safe and fun way for your kids to socialize?
          You're at the right place! PlayDate helps you organize and manage playdates for your kids.
          Join our community and let's make playdates fun and easy!
        </p>
      </div>
    </div>
  );
}

export default HomePage;