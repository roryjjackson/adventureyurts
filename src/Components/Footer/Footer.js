import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return(
    <div className='footer'>
      <div className='footer-content-container'>
        <p>LOGO HERE</p>
        <div>
          <h3>Address</h3>
          <p>20 Ridgewood Crescent</p>
          <p>Newcastle Upon Tyne</p>
          <p>NE3 1SQ</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>info@adventureyurts.com</p>
          <p>07501044560</p>
          <p>www.adventureyurts.com</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
