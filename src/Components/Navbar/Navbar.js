import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import './NavbarScroll'
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
          <li className="button">
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>

        <img onClick={toggleNav} src='https://res.cloudinary.com/dfipoufmj/image/upload/v1668008512/bars-solid_1_kmyz0a.svg' alt='' className='bars'></img>

        <ul className={`navbar-collapse ${isOpen ? 'show' : 'hidden'}`}>
          <li className="navbar-item">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" activeClassName="active">About Us</NavLink>
          </li>
          <li className="button">
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>


      </nav>
    </div>
  );
};

export default Navbar;
