import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './home.css'
import Marquee from 'react-fast-marquee'
import pic from '../../asset/ashik1.jpg'
import sginepic from '../../asset/1-removebg-preview.png'
import project from '../../asset/project.jpg'
import blogpic from '../../asset/picblog-removebg-preview.png'

import {
  FaGg,
  FaCamera,
  FaCode,
  FaPen,
  FaAdjust,
  FaTwitter,
  FaGoogle,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='div1st-section'>
        <div className='h1st-1'>
          <div className='information'>
            <img src={pic} alt='' srcset='' />
            <div className='personal-info'>
              <p>A WEB DEVELOPER</p>
              <h1 className='text-3xl text-white'>
                <span>I'm</span>
                <br /> Istiak Ahamed Ashik
              </h1>
              <p>
                <span
                  style={{
                    color: ' rgb(78, 201, 178)',
                    fontWeight: 'bold',
                    fontSize: '22px',
                  }}
                >
                  <Typewriter
                    words={[
                      'Front-End developer',
                      'React.js developer',
                      'MERN Stack Developer',
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </p>
            </div>
          </div>
          <div className='other-perso-info'>
            <div className='marque'>
              <Marquee play direction='left' speed={50} loop={0}>
                <h1 className='text-xl mt-3 text-white'>
                  I Learn I Try And I Worked For It...
                </h1>
              </Marquee>
            </div>
            <div className='credential-project'>
              <Link to='/moreAbout'>
                <div className='credential'>
                  <img src={sginepic} alt='' srcset='' />
                  <p>MORE ABOUT ME</p>
                  <h2 className='text-3xl font-semibold'>Credential</h2>
                  <FaGg className='creden-icon'></FaGg>
                </div>
              </Link>
              <Link to='/works'>
                {' '}
                <div className='project'>
                  <h1 className='text-3xl font-semibold'>MY WORKS</h1>
                  <img src={project} alt='' srcset='' />
                  <div>
                    <p>SHOWCASE</p>
                    <h2 className='text-3xl font-semibold'>Project</h2>
                    <FaGg className='project-icon'></FaGg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='h1st-2'>
          <Link to='/blog'>
            <div className='credential credential1'>
              <img className='blogpic' src={blogpic} alt='' srcset='' />
              <p>BLOG</p>
              <h2 className='text-3xl font-semibold'>GFonts</h2>
              <FaGg className='creden-icon'></FaGg>
            </div>
          </Link>
          <Link to='/service'>
            {' '}
            <div className='service-offer'>
              <div className='service-icon'>
                <FaCamera className='s-icon'></FaCamera>
                <FaCode className='s-icon'></FaCode>
                <FaPen className='s-icon'></FaPen>
                <FaAdjust className='s-icon'></FaAdjust>
              </div>
              <div className='service-info'>
                <p>SPECIALIZATION</p>
                <h2 className='text-3xl font-semibold'>Services Offering</h2>
                <FaGg className='service-icon'></FaGg>
              </div>
            </div>
          </Link>

          <Link to='/contact'>
            {' '}
            <div className='project'>
              <div className='profile-browser'>
                <FaTwitter className='profile-icon'></FaTwitter>
                <FaGoogle className='profile-icon'></FaGoogle>
              </div>
              <div className='mt-9'>
                <p>STAY WITH ME</p>
                <h2 className='text-3xl font-semibold'>Profiles</h2>
                <FaGg className='project-icon'></FaGg>
              </div>
            </div>
          </Link>
        </div>
        <div className='h1st-3'>
          <div className='experinces'>
            <div className='experince'>
              <h2 className='text-5xl font-semibold pb-2'>01</h2>
              <p>
                YEAR <br /> EXPERIENCE
              </p>
            </div>
            <div className='experince'>
              <h2 className='text-5xl font-semibold pb-2'>+02</h2>
              <p>
                CLIENTS <br /> WORLDWIDE
              </p>
            </div>
            <div className='experince'>
              <h2 className='text-5xl font-semibold pb-2'>+25</h2>
              <p>
                TOTAL <br /> PROJECTS
              </p>
            </div>
          </div>
          <Link to='/contact'>
            {' '}
            <div className='let-work'>
              <h1 className='text-6xl font-bold p-8 mt-12'>
                Let's <br />
                work<span className='text-blue-700 ml-2'>together</span>
              </h1>
              <FaGg className='let-work-icon'></FaGg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
