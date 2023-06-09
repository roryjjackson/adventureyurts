import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return(
    <div class="home-page">
      <div class="home-page-container">
        <h3>Durable | Beautiful</h3>
        <h1>Adventure Yurts</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <div>
          <button class="button">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
