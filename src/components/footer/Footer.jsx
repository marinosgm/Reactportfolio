import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'



const footer = () => {
  return (
    <footer>

        <a href="#" className='footer__logo'>MGEORGIOU</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>

        <div className="footer__socials">

            <a href="https://facebook.com" target='_blank'><AiFillFacebook/></a>
            <a href="https://instagram.com" target='_blank'><AiFillInstagram/></a>
            <a href="https://twitter.com" target='_blank'><AiFillTwitterCircle/></a>

        </div>

        <div className="footer__copyright">

            <small>&copy; MGeorgiou Portfolio. My first professional website on React. All rights are served </small>

        </div>

    </footer>
  )
}

export default footer