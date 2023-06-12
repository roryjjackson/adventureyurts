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
              <h3><strong>4.98* Rating</strong></h3>
              <p>From 500+ reviews</p>
            </div>
            <div className='stat'>
              <h3><strong>All Seasons</strong></h3>
              <p>Built for use all year round</p>
            </div>
            <div className='stat'>
              <h3><strong>1-3</strong></h3>
              <p>Days to build on site</p>
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
          {/* <h1>Adventure Yurts</h1> */}
      </div>

      <div className='design-section'>
        <div className="design-container">
          <div>
            <h3>We build wooden yurts that are</h3>
            <h2>Highly <span className='highlighted-word'>Engineered</span> and</h2>
            <h2>Highly <span className='highlighted-word'>Durable</span></h2>
          </div>
          <p>We have created an authentic wooden yurt that unlike other designs, stays true to being completely round. We deliver the highest quality build, combining the accuracy of a CNC machine with experienced hand assembly and finishing.</p>
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
              <h3>01.</h3>
              <p>Chat With Us</p>
              <Link to="/contact">
                <button class="button spec">Contact</button>
              </Link>
            </div>
            <div className='stage'>
              <h3>02.</h3>
              <p>Finalize Design</p>
              <Link to="/">
                <button class="button spec">Specs</button>
              </Link>
            </div>
            <div className='stage'>
              <h3>03.</h3>
              <p>Installation</p>
              <Link to="/gallery">
                <button class="button spec">Gallery</button>
              </Link>
            </div>
            <div className='stage'>
              <h3>04.</h3>
              <p>Enjoy it!</p>
              <Link to="/contact">
                <button class="button spec">Follow</button>
              </Link>
            </div>
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
            <p>We are a small family run business, based in the North East. A Father and Son team combining their skills to create this entirely unique outdoor structure.</p>
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
