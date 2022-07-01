import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k36izth', 'template_9sotwac', form.current, '6MCzyU2IZBjAGFf-y')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="option">
            <HiOutlineMail className='option__icon'/>
            <h4>Email</h4>
            <h5>testdummymail3003@gmail.com</h5>
            <a href="mailto:testdummymail3003@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="option">
            <RiMessengerLine className='option__icon'/>
            <h4>Messenger</h4>
            <h5>Rohan Surti</h5>
            <a href="https://m.me/rohan.surti.395" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="option">
            <BsWhatsapp className='option__icon'/>
            <h4>Whatsapp</h4>
            <h5>+467264529</h5>
            <a href="https://wa.me/" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail }>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact