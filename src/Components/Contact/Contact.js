import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message, number });

    setName('');
    setEmail('');
    setNumber('');
    setMessage('');

  };

  return(
    <div class="contact-form">
      <div className='contact-form-content'>
        <h3>Contact</h3>
        <h1>We'd Love To Hear From You</h1>
        <p>Let us know about any questions you may have</p>
        <div>
          <form onSubmit={handleSubmit}>
            <div className='form-input'>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <br />
            <div className='form-input'>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <br />
            <div className='form-input'>
              <label>Contact Number</label>
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <br />
            <div className='form-input message'>
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <br />
            <button type="submit" className='button'>Submit</button>
          </form>
        </div>
      </div>
      <div className='contact-form-image-container'>
        <img src='https://res.cloudinary.com/dfipoufmj/image/upload/v1686312461/WhatsApp_Image_2023-05-19_at_19.58.42_b1dsbw.jpg' alt='' className='contact-image'></img>
      </div>
    </div>
  );
}
export default Contact;
