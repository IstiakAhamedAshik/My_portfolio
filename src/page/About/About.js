import React from 'react'
import './About.css'
import html from '../../asset/codeIcon/HTML5-logo.png'
import css from '../../asset/codeIcon/CSS3_logo.png'
import bootstrap from '../../asset/codeIcon/bootstrap.png'
import tailwind from '../../asset/codeIcon/tailwind.png'
import javascript from '../../asset/codeIcon/js.png'
import react from '../../asset/codeIcon/react.png'
import express from '../../asset/codeIcon/express-js.png'
import node from '../../asset/codeIcon/node.png'
import mongo from '../../asset/codeIcon/mongo.webp'
import CodingSkill from './CodingSkill'
import devservicepic1 from '../../asset/sevice/development.png'
import uiservicepic1 from '../../asset/sevice/paint2-removebg-preview.png'
import reaservicepic1 from '../../asset/sevice/react2-removebg-preview.png'

const About = () => {
  const skills = [
    {
      name: 'HTML5',
      pic: html,
    },
    {
      name: 'CSS3',
      pic: css,
    },
    {
      name: 'Bootstrap',
      pic: bootstrap,
    },
    {
      name: 'Tailwindcss',
      pic: tailwind,
    },
    {
      name: 'Javascript',
      pic: javascript,
    },
    {
      name: 'React',
      pic: react,
    },
    {
      name: 'Express.js',
      pic: express,
    },
    {
      name: 'Node.js',
      pic: node,
    },
    {
      name: 'MongoDb',
      pic: mongo,
    },
  ]
  return (
    <div>
      <div className='all-about'>
        <div>
          <h1 className='text-4xl font-semibold'>
            PERSONAL<span className='text-blue-700 ml-2'>INFOS</span>
          </h1>
          <hr />
        </div>
        <div className='personal-info'>
          <h1 className='text-3xl font-semibold text-blue-700 '>
            Name:
            <span className='text-2xl font-semibold text-white ml-2'>
              Istiak Ahamed Ashik
            </span>
          </h1>
          <h1 className='text-3xl font-semibold text-blue-700 '>
            Age:
            <span className='text-2xl font-semibold text-white ml-2'>24</span>
          </h1>
          <h1 className='text-3xl font-semibold text-blue-700 '>
            Nationality:
            <span className='text-2xl font-semibold text-white ml-2'>
              Bangladeshi
            </span>
          </h1>
          <h1 className='text-3xl font-semibold text-blue-700 '>
            Study:
            <span className='text-2xl font-semibold text-white ml-2'>
              Daffodil International University
            </span>
          </h1>
          <h1 className='text-3xl font-semibold text-blue-700 '>
            Degree:
            <span className='text-2xl font-semibold text-white ml-2'>
              B.Sc in CSE
            </span>
          </h1>
          <h1 className='text-3xl font-semibold text-blue-700 '>
            Location:
            <span className='text-2xl font-semibold text-white ml-2'>
              Mohammadpur,Dhaka,Bangaladesh
            </span>
          </h1>
          <h1 className='text-3xl font-semibold text-blue-700 '>
            Email:
            <span className='text-2xl font-semibold text-white ml-2'>
              istiak1439@gmail.com
            </span>
          </h1>
          <h1 className='text-3xl font-semibold text-blue-700 '>
            Phone:
            <span className='text-2xl font-semibold text-white ml-2'>
              +880-1796481649
            </span>
          </h1>
          <h1 className='text-3xl font-semibold text-blue-700 '>
            Language:
            <span className='text-2xl font-semibold text-white ml-2'>
              Bangla | English | Hindi
            </span>
          </h1>
        </div>
        <div className='skills'>
          <h1 className='text-4xl font-semibold'>
            MY<span className='text-blue-700 ml-2'>SKILLS</span>
          </h1>
          <hr />
        </div>
        <div className='codeing-skills mt-10 grid gap-5  md:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill, i) => (
            <CodingSkill key={i} skill={skill}></CodingSkill>
          ))}
        </div>
        <div className='skills'>
          <h1 className='text-3xl font-medium'>
            MY<span className='text-blue-700 ml-2'>SERVICES</span>
          </h1>
          <hr />
        </div>
        <div className='grid gap-5  md:grid-cols-2 lg:grid-cols-3 mt-16'>
          <div className='my-service'>
            <img src={devservicepic1} alt='' />
            <h1 className='text-blue-700 text-2xl font-medium mt-3'>
              Front End Development
            </h1>
            <p className='text-white mt-2'>
              I am well expert in many front end web technology. I have done
              many projects using MERN approach. I am well versed in HTML | CSS
              | Javascript | ES6 | React | Express.js | Node.js | MongoDB
            </p>
          </div>
          <div className='my-service'>
            <img src={uiservicepic1} alt='' />
            <h1 className='text-blue-700 text-2xl font-medium mt-3'>UI/UX</h1>
            <p className='text-white mt-2'>
              I can design elegent looking and user friendly UI/UX for web and
              android application. Specially I use figma to create those design.
            </p>
          </div>
          <div className='my-service'>
            <img src={reaservicepic1} alt='' />
            <h1 className='text-blue-700 text-2xl font-medium mt-3'>
              React Application
            </h1>
            <p className='text-white mt-2'>
              Looking a developer to make your busiiness application more user
              friendly with the magic of react? I can Help You there.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
