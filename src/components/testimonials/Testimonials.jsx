import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [


{
  avatar: AVTR1,
  name: 'Kostas Evripidou',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Illum ullam perferendis reprehenderit blanditiis dolorem harum aperiam sapiente, accusantium ducimus soluta deleniti hic quasi a nesciunt numquam! Et, rem. Error, magnam.'
},

{
  avatar: AVTR2,
  name: 'Antonis Andreou',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Illum ullam perferendis reprehenderit blanditiis dolorem harum aperiam sapiente, accusantium ducimus soluta deleniti hic quasi a nesciunt numquam! Et, rem. Error, magnam.'
},
{
  avatar: AVTR3,
  name: 'Evangelos Michael',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Illum ullam perferendis reprehenderit blanditiis dolorem harum aperiam sapiente, accusantium ducimus soluta deleniti hic quasi a nesciunt numquam! Et, rem. Error, magnam.'
},
{
  avatar: AVTR4,
  name: 'Christos Christodoulides',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Illum ullam perferendis reprehenderit blanditiis dolorem harum aperiam sapiente, accusantium ducimus soluta deleniti hic quasi a nesciunt numquam! Et, rem. Error, magnam.'
},

]

const Testimonials = () => {
  return (
    <section id='testimonials'>

        <h5>Review from clients</h5>
        <h2>Testimonials</h2>


        <Swiper className="container testimonials__container"
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
       >
{
         data.map(({avatar, name, review}, index) => {

          return(

          <SwiperSlide key={index} className='testimonial'>

          <div className="client__avatar">

              <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illum ullam perferendis reprehenderit blanditiis dolorem harum aperiam sapiente, accusantium ducimus 
              soluta deleniti hic quasi a nesciunt numquam! Et, rem. Error, magnam.</small>

          

      </SwiperSlide>
          )

         })

}    
        </Swiper>
    
    </section>
  )
}

export default Testimonials