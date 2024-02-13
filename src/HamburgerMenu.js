import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="hamburger">
        ☰
      </button>
      {isOpen && (
        <nav className="menu">
          <button onClick={toggleMenu} className="btn btn-primary btn-lg">
            Learn More
          </button>
          <Link to="/admin" className="btn btn-secondary btn-lg">Go to Admin</Link>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;