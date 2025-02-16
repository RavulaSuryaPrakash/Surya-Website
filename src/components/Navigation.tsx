// Updated navigation with better accessibility
import React from 'react';

function Navigation() {
  return (
    <nav className='navigation'>
      <div className='nav-container'>
        <div className='nav-logo'>
          <a href='#home'>Surya Ravula</a>
        </div>
        <div className='nav-menu'>
          <a href='#home'>Home</a>
          <a href='#expertise'>Expertise</a>
          <a href='#timeline'>Experience</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
