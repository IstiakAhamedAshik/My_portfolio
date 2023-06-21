import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'
import './Shared.css'
const Footer = () => {
  return (
    <footer className='footer footer-center protfolio-footer'>
      <div>
        <div>
          <h1 className='font-bold text-4xl'>IAA</h1>
        </div>
        <div className='grid grid-flow-col gap-4'>
          <Link
            to='https://www.linkedin.com/in/istiak-ahamed-ashik-612199280/'
            target='_blank'
          >
            <FaLinkedin className='footer-icon'></FaLinkedin>
          </Link>
          <Link
            to='https://www.facebook.com/profile.php?id=100004646203276'
            target='_blank'
          >
            <FaFacebook className='footer-icon'></FaFacebook>
          </Link>
          <Link
            to='https://github.com/IstiakAhamedAshik?tab=repositories'
            target='_blank'
          >
            <FaGithub className='footer-icon'></FaGithub>
          </Link>
        </div>
        <p className=' font-semibold text-xl'>
          Copyright <span className=' text-blue-700'>©</span> 2023 - All right
          reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
