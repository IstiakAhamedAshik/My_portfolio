import React from 'react'
import './About.css'
import imag1 from '../../asset/IMG_1374.jpg'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'
import OneSkill from './OneSkill'
const MoreAbout = () => {
  const experinces = [
    {
      pacentange: '70%',
      name: 'JavaScript',
      des: 'Daily Practing and Improving',
    },
    {
      pacentange: '72%',
      name: 'React',
      des: 'Daily Practing and Improving',
    },
    {
      pacentange: '65%',
      name: 'Figma',
      des: 'Daily Practing and Improving',
    },
    {
      pacentange: '85%',
      name: 'HTML',
      des: 'Daily Practing and Improving',
    },
    {
      pacentange: '85%',
      name: 'CSS',
      des: 'Daily Practing and Improving',
    },
    {
      pacentange: '60%',
      name: 'Express.js',
      des: 'Daily Practing and Improving',
    },
    {
      pacentange: '50%',
      name: 'Node.js',
      des: 'Daily Practing and Improving',
    },
    {
      pacentange: '55%',
      name: 'MongoDB',
      des: 'Daily Practing and Improving',
    },
  ]
  return (
    <div className='more-about'>
      <div className='image-profile'>
        <img src={imag1} alt='' srcset='' />
        <h1 className='text-center text-3xl font-bold mt-5'>
          Istiak Ahamed Ashik
        </h1>
        <p className='text-center font-bold mt-3'>@istiak97</p>
        <div className='profile-i-con'>
          <Link
            to='https://www.linkedin.com/in/istiak-ahamed-ashik-612199280/'
            target='_blank'
          >
            <FaLinkedin className='more-about-icon'></FaLinkedin>
          </Link>
          <Link
            to='https://www.facebook.com/profile.php?id=100004646203276'
            target='_blank'
          >
            <FaFacebook className='more-about-icon'></FaFacebook>
          </Link>
          <Link
            to='https://github.com/IstiakAhamedAshik?tab=repositories'
            target='_blank'
          >
            <FaGithub className='more-about-icon'></FaGithub>
          </Link>
        </div>
        <Link to='/contact'>
          <button className='more-contact'>Contact Me</button>
        </Link>
      </div>
      <div className='more-about'>
        <div className='about-me'>
          <p className='font-bold text-2xl mb-3'>About Me</p>
          <p className='text-white'>
            As a web developer, I have a well-rounded skill set to utilize my
            technical skill, talent, critical thinking, and sincerity for better
            achievements.As a front-end web developer, I believe that I meet the
            required qualifications and skills for the position. I have a
            well-rounded skill set with HTML, CSS, Bootstrap, Tailwind CSS,
            Daisy UI, JavaScript, React.js, React Router Dom, React Bootstrap,
            GitHub and also comfortable with Node.js, Express.js, Firebase,
            MongoDB, to obtain the position with the opportunity to utilize my
            technical skill, talent, critical thinking and sincerity for the
            better achievements. I consider myself as a quick learner,
            responsible, disciplined with ability to work under pressure with
            the latest technology.
          </p>
          <div className='skills-percentange'>
            <p className='font-bold text-2xl mt-14'>Skills</p>
            <div className='one-skill grid gap-7  md:grid-cols-2 lg:grid-cols-3 mt-7'>
              {experinces.map((experince, i) => (
                <OneSkill key={i} experince={experince}></OneSkill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreAbout
