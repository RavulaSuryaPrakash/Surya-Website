// Updated footer with more social links
import React from 'react';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-links'>
          <a href='https://github.com/RavulaSuryaPrakash' target='_blank' rel='noopener noreferrer'>GitHub</a>
          <a href='https://linkedin.com/in/surya-ravula' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
          <a href='mailto:suryasanny001@gmail.com'>Email</a>
        </div>
        <div className='footer-text'>
          <p>&copy; 2025 Surya Ravula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
