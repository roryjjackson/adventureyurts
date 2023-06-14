import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Home = () => {


  return(
    <>
      <div className="home-page">
        <div className="home-page-container">
          <h3>Durable | Functional</h3>
          <h1>Adventure Yurts</h1>
          <p>An all wood construction, highly engineered and super insulated. We provide a unique outdoor living space that can be used all year round</p>
          <div className='stats-container'>
            <div className='stat'>
              <h3><strong>Highly Insulated</strong></h3>
              <p>Cool in summer, cosy in winter</p>
            </div>
            <div className='stat'>
              <h3><strong>All Seasons</strong></h3>
              <p>Built for use all year round</p>
            </div>
            <div className='stat'>
              <h3><strong>1-2</strong></h3>
              <p>Days to build on site</p>
            </div>
          </div>
          <div>
          <Link to="/contact">
            <button className='button'>
              Contact
            </button>
          </Link>
          </div>
        </div>
          {/* <h1>Adventure Yurts</h1> */}
      </div>

      <div className='design-section'>
        <div className="design-container">
          <div>
            <h3>We build wooden yurts that are </h3>
            <h2>An <span className='highlighted-word'>Engineered</span> design, ensuring a <span className='highlighted-word'> strong </span>and <span className='highlighted-word'>durable </span>structure</h2>
          </div>
          <p>We have created an authentic wooden yurt that stays true to being round by combining the accuracy of a CNC machine with experienced hand assembly and finishing.
          </p>
        </div>
        <div className='design-image-container'>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1686303822/image3_nk2do2.jpg" alt="" className='design-image'></img>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1686303821/image2_lvshij.jpg" alt="" className='design-image'></img>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1686303823/image6_wtrtwv.jpg" alt="" className='design-image'></img>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1686303824/image8_urinth.jpg" alt="" className='design-image'></img>
        </div>
        <div>
          <Link to="/gallery">
            <button className='button gallery'>
              Gallery
            </button>
          </Link>
        </div>
      </div>


      <div className='home-page-our-service'>
        <div className='our-service-container'>
          <div className='service-left'>
            <div>
              <p>Our process</p>
              <h2>How it works</h2>
            </div>
          </div>

          <div className='service-right'>
            <div className='stage'>
              <div className='stage-content'>
                <h3>Basic Structure</h3>
                <p>Our CNC (Computer Numerical Control) machine cuts our standard structure with 0.127mm accuracy. It is then built in house and insulated by our assembly team</p>
              </div>
            </div>
            <div className='stage'>
              <div className='stage-content'>
                <h3>Hand Finished</h3>
                <p>This is completelety up to you, we can finish the interior and exterior with any cladding from locally grown douglas fir to a range of composites and hardwoods</p>
              </div>
            </div>
            <div className='stage'>
              <div className='stage-content'>
                <h3>The Base</h3>
                <p>The base needs to be custom built depending on ground conditions. We do have a wide range of options available to cope with just about any location</p>
              </div>
            </div>
            <div className='stage'>
              <div className='stage-content'>
                <h3>Assembly</h3>
                <p>The design is built to make the construction straightforward, two people with basic DIY skills could build it in 1-2 days. We do however offer a delivery and assembly service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='home-page-gallery'>
        <div className='gallery-info'>
          <div>
            <h3>At long last!</h3>
            <h2>Take a look at our <span className='highlighted-word'>first</span> project.</h2>
            <p>It's been a long time coming! Ever since the break out of the Covid-19 pandemic, we have felt the need to escape the confines of the house. Now finally we have our work from home office, winter games room and summer bbq party house all-in-one!</p>
            <Link to="/gallery">
              <button className='button'>
                Gallery
              </button>
            </Link>
          </div>
        </div>
        <div className='gallery-image-container'>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686307577/WhatsApp_Image_2023-05-27_at_16.53.13_1_iutxqs.jpg' alt='' className='gallery-image'></img>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686307576/WhatsApp_Image_2023-05-23_at_17.37.40_bilyyo.jpg' alt='' className='gallery-image drop'></img>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686307576/WhatsApp_Image_2023-05-24_at_12.05.43_l5jgli.jpg' alt='' className='gallery-image'></img>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686307576/WhatsApp_Image_2023-05-24_at_11.54.09_v8bpbr.jpg' alt='' className='gallery-image drop'></img>
        </div>
      </div>

      <div className="home-page-about">
        <div className='image-layer'>
          <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686310453/WhatsApp_Image_2023-06-01_at_09.43.31_dxsqrj.jpg' alt=''></img>
        </div>
        <div class="info-layer">
          <div className='info-layer-content'>
            <div className='social-media-icon-container'>
              <FontAwesomeIcon icon={faInstagram} class="social-media-icon"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faFacebook} class="social-media-icon"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faYoutube} class="social-media-icon"></FontAwesomeIcon>
            </div>
            <h2>The Team</h2>
            <p>We are a small family run business, based in the North East. As a father and son duo, we have combined modern tech skills with experienced hands on construction</p>

            <Link to="/about">
              <button className='button'>
                About us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
