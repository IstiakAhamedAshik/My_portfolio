import React from 'react'
import Header from '../SharePage/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../SharePage/Footer'

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
