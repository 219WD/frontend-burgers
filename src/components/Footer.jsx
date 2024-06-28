import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="img-ft">
        <img src='https://i.imgur.com/DKkGUgU.png' alt="Logo" />
      </div>
      <div className="txt-ft">
        <h4>¡Seguinos en nuestras redes!</h4>
        <ul className='social-icons'>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
