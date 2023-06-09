import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './About.css';

const About = () => {
  return(
    <div className='about-us'>
      <div className='about-info-container'>
        <h2>About us</h2>
        <h1>A <span className='highlighted-word'>unique</span> team, a unique mission</h1>
        <p>Lorem Ipsumm is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className='about-image-container'>
        <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686312461/WhatsApp_Image_2023-06-01_at_09.40.50_w1rk2n.jpg' alt='' className='about-image'></img>
        <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686307576/WhatsApp_Image_2023-05-24_at_12.05.43_l5jgli.jpg' alt='' className='about-image drop'></img>
        <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1666713856/rory_zoeandcam_a29pkj_qdktj3.jpg' alt='' className='about-image'></img>
      </div>
    </div>
  );
}
export default About;
