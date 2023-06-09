import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
      </nav>
    </div>
  );
};

export default Navbar;
