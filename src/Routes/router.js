import { createBrowserRouter } from 'react-router-dom'
import Main from '../LayOut/Main'
import Home from './../page/Home/Home'
import About from './../page/About/About'
import Works from '../page/Works/Works'
import Contact from '../page/Contact/Contact'
import MoreAbout from '../page/About/MoreAbout'
import Blog from '../page/blog/Blog'
import Service from '../page/service/Service'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/works',
        element: <Works></Works>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/moreAbout',
        element: <MoreAbout></MoreAbout>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/service',
        element: <Service></Service>,
      },
    ],
  },
])
