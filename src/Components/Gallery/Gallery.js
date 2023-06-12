import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import './Gallery.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setopenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setopenModal(true)
  }

  const handleCloseModal = () => {
    setopenModal(false)
  }
  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1 )
  }
  const nextSlide = () => {
    slideNumber +1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1 )
  }

  const galleryImages = [
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686312461/WhatsApp_Image_2023-05-19_at_19.58.42_b1dsbw.jpg'
    },
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686310453/WhatsApp_Image_2023-06-01_at_09.43.31_dxsqrj.jpg'
    },
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686310453/WhatsApp_Image_2023-05-30_at_17.01.36_dspsak.jpg'
    },
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686310453/WhatsApp_Image_2023-06-01_at_12.54.19_pu9kr2.jpg'
    },
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686310453/WhatsApp_Image_2023-06-01_at_09.43.11_wchf8b.jpg'
    },
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686307577/WhatsApp_Image_2023-05-27_at_16.53.13_1_iutxqs.jpg'
    },
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686307577/WhatsApp_Image_2023-05-27_at_16.53.13_xkzzbm.jpg'
    },
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686312461/WhatsApp_Image_2023-05-19_at_19.58.42_b1dsbw.jpg'
    },
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686303824/image8_urinth.jpg'
    },
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686303822/image1_ai7uyu.jpg'
    },
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686303821/image2_lvshij.jpg'
    },
    {
      img: 'https://res.cloudinary.com/dfipoufmj/image/upload/v1686303822/image5_faaqm4.jpg'
    },
  ]

  return (
    <div className='gallery'>
      <h2>Gallery</h2>
      <h1><span className='highlighted-word'>Explore</span> some of our previous projects</h1>
      {openModal &&
        <div className='slider-wrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btn-close' onClick={handleCloseModal}/>
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btn-prev' onClick={prevSlide}/>
          <FontAwesomeIcon icon={faCircleChevronRight} className='btn-next' onClick={nextSlide}/>
          <div className='full-screen-image'>
            <img src={galleryImages[slideNumber].img} alt=''></img>
          </div>

        </div>
      }
      <div className='gallery-wrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div
                  className='single'
                  key={index}
                  onClick={ () => handleOpenModal(index)}>
                <img src={slide.img} alt=''></img>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Gallery;
