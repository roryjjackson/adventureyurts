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
        <p>We are a team of 5, Rory, Ronan, Toby, Michael and Neville, who all bring their unique experience to the table.</p>
      </div>

      <div className="about-story">
        <div className='image-layer'>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686310453/WhatsApp_Image_2023-06-01_at_09.43.31_dxsqrj.jpg' alt=''></img>
        </div>
        <div className="info-layer color">
          <div className="info-layer-content">
            <h2>The Team</h2>
            <p>We need a story about us here</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>

      <div className='about-image-container'>
        <div className='about-content'>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686312461/WhatsApp_Image_2023-06-01_at_09.40.50_w1rk2n.jpg' alt='' className='about-image'></img>
          <h2>Ronan</h2>
          <p>With a background in engineering and specialized insulation, he took inspiration from a neighbour's hand built round garden shed and began working on his own design.</p>
        </div>

        <div className='about-content'>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1666713856/rory_zoeandcam_a29pkj_qdktj3.jpg' alt='' className='about-image'></img>
          <h2>Rory</h2>
          <p>As Ronan is inept with technology, Rory is left with utlizing online avenues to share our business with the world! From website design to managing inquiries, he does it all so that everyone else can concentrate on the build</p>
        </div>

        <div className='about-content'>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686312461/WhatsApp_Image_2023-06-01_at_09.40.50_w1rk2n.jpg' alt='' className='about-image'></img>
          <h2>Toby</h2>
          <p>Is a highly experienced carpenter and CNC machinist. He has developed and manufactured a wide range of products over the last ten years, all leading up to this! As our chief designer, he has translated Ronan's initial concept into the yurt we have now</p>
          <p></p>
        </div>

        <div className='about-content'>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686312461/WhatsApp_Image_2023-06-01_at_09.40.50_w1rk2n.jpg' alt='' className='about-image'></img>
          <h2>Michael and Neville</h2>
          <p>Our in house team have over 50 years of construction experience between them. They look after the assembly, insulation and finishing of the yurt roof and wall panels.</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
export default About;
