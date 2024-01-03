import React from 'react';
import './Header.css';
import Logo from '../Logo';

const Header = () => {
    return (
    <header className="header">
        <div className='logo'>
            <Logo />
            <h1>FOLIO</h1>
        </div>
      {/* Your header content goes here */}
      <nav>
        {/* Navigation links */}
        <ul  className='nav-links'>
          <li> artists_info@email.com</li>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
    );
};

export default Header;