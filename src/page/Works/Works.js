import React from 'react'
import './works.css'
import addCar from '../../asset/ReactImg/addCar.JPG'
import carservice from '../../asset/ReactImg/car-client.JPG'
import country from '../../asset/ReactImg/country.JPG'
import news from '../../asset/ReactImg/news.JPG'
import travel from '../../asset/ReactImg/travel.JPG'
import wildPhoto from '../../asset/ReactImg/wildPhotographer.JPG'
import emajonPhoto from '../../asset/ReactImg/emajonpic.JPG'
import buyphone from '../../asset/javaScriptImg/buyphone.JPG'
import expence from '../../asset/javaScriptImg/monthlyExpence.JPG'
import pinmatch from '../../asset/javaScriptImg/pinMatching.JPG'
import searchFood from '../../asset/javaScriptImg/searchingFood.JPG'
import withdraw from '../../asset/javaScriptImg/withdraw.JPG'
import agency from '../../asset/htmlcss/agency.JPG'
import fashion from '../../asset/htmlcss/fashionE.JPG'
import grocery from '../../asset/htmlcss/grocery.JPG'
import portfolio from '../../asset/htmlcss/portfolio.JPG'
import simplcss from '../../asset/htmlcss/simplecss.JPG'
import ShowProject from './ShowProject'
const Works = () => {
  const reacts = [
    {
      name: 'ADD and Delete Car',
      picture: addCar,
      link: 'https://phenomenal-mousse-9945b4.netlify.app/',
    },
    {
      name: 'Serviching Car',
      picture: carservice,
      link: 'https://genious-car-client-3e3f1.firebaseapp.com/',
    },
    {
      name: 'Search and Delete Country',
      picture: country,
      link: 'https://find-desh.netlify.app/',
    },
    {
      name: 'News',
      picture: news,
      link: 'https://bangladesh-news-2cef8.web.app/',
    },
    {
      name: 'Travel and Booking',
      picture: travel,
      link: 'https://travel-guru-8d418.firebaseapp.com/',
    },
    {
      name: 'Wild Photography',
      picture: wildPhoto,
      link: 'https://wild-photographer-5d70c.web.app/',
    },
    {
      name: 'Emajon ecomerce',
      picture: emajonPhoto,
      link: 'https://amajon-shop.netlify.app/',
    },
  ]
  const JavaScripts = [
    {
      name: 'Estimate of Phone Price',
      picture: buyphone,
      link: 'https://phoneashik.netlify.app/',
    },
    {
      name: 'Estimate Monthly Cost',
      picture: expence,
      link: 'https://masterashik.netlify.app/',
    },
    {
      name: 'Pinmatching',
      picture: pinmatch,
      link: 'https://pinashik.netlify.app/ ',
    },
    {
      name: 'Searching Food',
      picture: searchFood,
      link: 'https://foodsearcha.netlify.app/',
    },
    {
      name: 'Deposite and Withdraw',
      picture: withdraw,
      link: 'https://moneyashik.netlify.app/',
    },
  ]
  const htmlCSSs = [
    {
      name: 'Agency',
      picture: agency,
      link: 'https://agencyashik.netlify.app/',
    },
    {
      name: 'Ecommerce Site',
      picture: fashion,
      link: 'https://ecommerceashik.netlify.app/',
    },
    {
      name: 'Grocery Shop',
      picture: grocery,
      link: 'https://groceryshopashik.netlify.app/',
    },
    {
      name: 'Portfolio',
      picture: portfolio,
      link: 'https://prognaashik.netlify.app/',
    },
    {
      name: 'First Design',
      picture: simplcss,
      link: 'https://mymissionashik.netlify.app/',
    },
  ]

  return (
    <div>
      <div className='mt-10'>
        <h1 className='text-2xl font-medium'>
          <span className='font-color mr-2'>React and Node.js</span>PROJECT
        </h1>
        <hr />
        <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {reacts.map((project, i) => (
            <ShowProject key={i} project={project}></ShowProject>
          ))}
        </div>
      </div>
      <div className='mt-10'>
        <h1 className='text-2xl font-medium'>
          <span className='font-color mr-2'>JavaScript</span>PROJECT
        </h1>
        <hr />
        <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {JavaScripts.map((project, i) => (
            <ShowProject key={i} project={project}></ShowProject>
          ))}
        </div>
      </div>
      <div className='mt-10'>
        <h1 className='text-2xl font-medium'>
          <span className='font-color mr-2'>HTML and CSS</span>PROJECT
        </h1>
        <hr />
        <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {htmlCSSs.map((project, i) => (
            <ShowProject key={i} project={project}></ShowProject>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
