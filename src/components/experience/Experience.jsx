import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>

      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
          <div className="experience__frontend">
              <h3>FrontEnd Development</h3>
                <div className="experience__content">

                  <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                      <div><h4>HTML</h4></div>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                      <div><h4>CSS</h4></div>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                      <div><h4>JavaScript</h4></div>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                      <div><h4>Bootstrap</h4></div>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                      <div><h4>React</h4></div>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                      <div><h4>WORDPRESS</h4></div>
                      <small className='text-light'>Experienced</small>
                  </article>

                </div>

          </div>

            <div className="experience__backend">
            <h3>Backend Development</h3>
                <div className="experience__content">

                  <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                      <div><h4>PHP</h4></div>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                      <div><h4>MySQL</h4></div>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                      <div><h4>MongoDB</h4></div>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                      <div><h4>Python</h4></div>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience__details'>
                      <BsFillPatchCheckFill className='experience__details-icon' />
                      <div><h4>React</h4></div>
                      <small className='text-light'>Experienced</small>
                  </article>
                  

                </div>
                  

          </div>

      </div>

    </section> 
  )
}

export default Experience