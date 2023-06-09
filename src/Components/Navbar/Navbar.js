import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import './NavbarScroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div className='navbar'>
      <nav>
        <div className="logo">
          AV
        </div>

        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" activeClassName="active">About Us</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
          </li>
          <li className="button">
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>

        <FontAwesomeIcon onClick={toggleNav} icon={faBars} className='bars'></FontAwesomeIcon>

        <ul className={`navbar-collapse ${isOpen ? 'show' : 'hidden'}`}>
          <li className="navbar-item">
            <NavLink onClick={toggleNav} exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink onClick={toggleNav} to="/about" activeClassName="active">About Us</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink onClick={toggleNav} to="/gallery" activeClassName="active">Gallery</NavLink>
          </li>
          <li className="button">
            <NavLink onClick={toggleNav} to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>


      </nav>
    </div>
  );
};

export default Navbar;
