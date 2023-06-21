import React from 'react'
import './Service.css'
import { FaCamera, FaCode, FaPen, FaAdjust } from 'react-icons/fa'
const Service = () => {
  return (
    <div className='all-offering'>
      <div className='offerings'>
        <div className='one-offerings'>
          <FaCamera className='offering-icon'></FaCamera>
          <h1 className='ml-4 font-medium'>PHOTOGRAPHY</h1>
        </div>
        <div className='one-offerings'>
          <FaPen className='offering-icon'></FaPen>
          <h1 className='ml-4 font-medium'>WEB DESIGNING</h1>
        </div>
        <div className='one-offerings'>
          <FaCode className='offering-icon'></FaCode>
          <h1 className='ml-4 font-medium'>DEVELOPMENT</h1>
        </div>
        <div className='one-offerings mb-16'>
          <FaAdjust className='offering-icon'></FaAdjust>
          <h1 className='ml-4 font-medium'>BRANDING</h1>
        </div>
      </div>
      <div className='my-all-offerings'>
        <h1 className='text-7xl text-white font-semibold text-center'>
          MY OFFERINGS
        </h1>
        <div className='grid gap-5  md:grid-cols-1 lg:grid-cols-2 mt-16'>
          <div className='photo'>
            <p className=' text-white font-semibold mb-4'>PHOTOGRAPHY</p>
            <p>
              I love photography very much. Also did quite a bit of photo
              editing. Also went to different places to shoot photos which I
              like a lot. I don't have it as a profession but I like photography
              very much.Also have a light understanding of color grading and
              photo positioning
            </p>
          </div>
          <div className='photo'>
            <p className=' text-white font-semibold mb-4'>WEB DESIGNING</p>
            <p>
              If you want to do web development, you have to have an idea about
              web design. In this case, I have an idea about Figma and Canva. I
              have developed many designs from Figma.
            </p>
          </div>
          <div className='photo'>
            <p className=' text-white font-semibold mb-4'>DEVELOPMENT</p>
            <p>
              I have been learning development for a year and a half. I have a
              good understanding of almost all the tools used to learn
              development. I am interested to work as a junior developer and I
              love development very much.
            </p>
          </div>
          <div className='photo'>
            <p className=' text-white font-semibold mb-4'>BRANDING</p>
            <p>
              A company depends on its branding. Branding is very important for
              a company. We should all be aware of branding. I know how to
              promote my company. I have an idea about how to promote a company.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
