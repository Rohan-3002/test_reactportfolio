import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {RiFoldersLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
          <img src={ME} alt="pic at work"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>10+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icons'/>
              <h5>Clients</h5>
              <small>150+ clients worldwide</small>
            </article>
            <article className="about__card">
              <RiFoldersLine className='about__icons'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quas cum velit necessitatibus rem vel voluptatum sequi rerum aperiam iusto culpa vitae omnis voluptate eius, odio reiciendis sed, asperiores aliquid!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About