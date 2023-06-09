import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return(
    <>
      <div className="home-page">
        <div className="home-page-container">
          <h3>Durable | Beautiful</h3>
          <h1>Adventure Yurts</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <div className='stats-container'>
            <div className='stat'>
              <h3><strong>Beautiful</strong></h3>
              <p>Perfectly smooth, round design</p>
            </div>
            <div className='stat'>
              <h3><strong>All weather</strong></h3>
              <p>Heavily insulated</p>
            </div>
            <div className='stat'>
              <h3><strong>Durable</strong></h3>
              <p>Built with high quality wood</p>
            </div>
          </div>
          <div>
          <Link to="/about">
            <button className='button'>
              About us
            </button>
          </Link>
          </div>
        </div>
      </div>

      <div className='design-section'>
        <div className="design-container">
          <div>
            <h3>We build wooden yurts</h3>
            <h2>Highly <span className='highlighted-word'>engineered</span>,</h2>
            <h2>Highly <span className='highlighted-word'>durable</span></h2>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>
        <div className='design-image-container'>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1686303822/image3_nk2do2.jpg" alt="" className='design-image'></img>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1686303821/image2_lvshij.jpg" alt="" className='design-image'></img>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1686303823/image6_wtrtwv.jpg" alt="" className='design-image'></img>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1686303824/image8_urinth.jpg" alt="" className='design-image'></img>
        </div>
        <div>
          <button className='button gallery'>
            Gallery
          </button>
        </div>
      </div>

      <div className="home-page-about">
        <div className='image-layer'>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686310453/WhatsApp_Image_2023-06-01_at_09.43.31_dxsqrj.jpg' alt=''></img>
        </div>
        <div class="info-layer">
          <div>
            <h2>Why are we building it?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <Link to="/about">
              <button className='button'>
                About us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='home-page-our-service'>
        <div className='service-left'>
          <div>
            <p>Our process</p>
            <h2>How it works</h2>
          </div>
        </div>
        <div className='service-right'>
          <div className='stage'>
            <h3>Stage 1</h3>
            <p>Some text here explaing how it works</p>
          </div>
          <div className='stage'>
            <h3>Stage 1</h3>
            <p>Some text here explaing how it works</p>
          </div>
          <div className='stage'>
            <h3>Stage 1</h3>
            <p>Some text here explaing how it works</p>
          </div>
        </div>
      </div>

      <div className='home-page-gallery'>
        <div className='gallery-image-container'>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686307577/WhatsApp_Image_2023-05-27_at_16.53.13_1_iutxqs.jpg' alt='' className='gallery-image'></img>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686307576/WhatsApp_Image_2023-05-23_at_17.37.40_bilyyo.jpg' alt='' className='gallery-image drop'></img>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686307576/WhatsApp_Image_2023-05-24_at_12.05.43_l5jgli.jpg' alt='' className='gallery-image'></img>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686307576/WhatsApp_Image_2023-05-24_at_11.54.09_v8bpbr.jpg' alt='' className='gallery-image drop'></img>
        </div>
        <div className='gallery-info'>
          <div>
            <h3>Our first one!</h3>
            <h2>Take a look at our <span className='highlighted-word'>first</span> project.</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Link to="/contact">
              <button className='button'>
                Enquire now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
