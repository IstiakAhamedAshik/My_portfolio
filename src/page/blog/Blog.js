import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './blog.css'
import codingpic from '../../asset/codinglife.avif'
const Blog = () => {
  return (
    <div className='blog'>
      <h1 className='font-semibold lg:text-4xl text-center md:text-xl'>
        <span
          style={{
            color: ' rgb(78, 201, 178)',
          }}
        >
          <Typewriter
            words={['Coding Boy is Working On...']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <img src={codingpic} alt='' srcset='' />
      <h1 className='font-semibold lg:text-4xl text-center md:text-xl'>
        <span
          style={{
            color: ' rgb(78, 201, 178)',
          }}
        >
          <Typewriter
            words={['KEEP CALM AND STAY TUNED...']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}

export default Blog
