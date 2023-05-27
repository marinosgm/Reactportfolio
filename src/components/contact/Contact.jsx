import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com' 



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ltgc2ku', 'template_tj39psi', form.current, 'ZursYGpRrsmHo-KPI')
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

            <article className='contact__option'>
      <AiOutlineMail className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>marinos.geo.gm@gmail.com</h5>
      <a href="mailto:marinos.geo.gm@gmail.com" target='_blank'>Send a message</a>
             </article>
             <article className='contact__option'>
      <BsMessenger className='contact__option-icon'/>
      <h4>Messenger</h4>
      <h5>marinos.geo.gm@gmail.com</h5>
      <a href="https://m.me/wickdX" target='_blank'>Send a message</a>
             </article>
             <article className='contact__option'>
      <AiOutlineWhatsApp className='contact__option-icon'/>
      <h4>WhatsApp</h4>
      <h5>+35796334595</h5>
      <a href="https://web.whatsapp.com/send?phone={+35796334595}" target='_blank'>Send a message</a>
             </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>

            <input type="text" name='name'  placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>


          </form>


      </div>

    </section>
  )
}

export default Contact  