import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './About.css';

const About = () => {
  return(
    <div className='about-us'>
      <div className='about-info-container'>
        <h2>About us</h2>
        <h1>A <span className='highlighted-word'>unique</span> team, a unique mission</h1>
        <p>We both have grown up enjoying outdoor spaces. During the emergence of the Covid-19 pandemic, we set about looking at ways we could spend more time outdoors. So began the adventure of creating our own wooden yurt.</p>
        <br/>
        <p>Since then, it has been a long 3 year process to get the design absolutely bang on.</p>
        <br/>
        <p>blah blah blah?</p>
      </div>
      <div className='about-image-container'>
        <div className='about-content'>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686312461/WhatsApp_Image_2023-06-01_at_09.40.50_w1rk2n.jpg' alt='' className='about-image'></img>
          <h2>Ronan</h2>
          <p>Ronan has the practical skills required to set up a project. etc etc</p>
        </div>

        <div className='about-content'>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1666713856/rory_zoeandcam_a29pkj_qdktj3.jpg' alt='' className='about-image'></img>
          <h2>Rory</h2>
          <p>The son, utlizing the latest online avenues to help the business grow. etc etc</p>
        </div>
      </div>
    </div>
  );
}
export default About;
