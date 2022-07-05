import React from 'react'
import Navbar from '../../components/Navbar'
import {Outlet} from 'react-router-dom'

const WithNavbar = () => {
  return (
    <>
    <Navbar />
    {/*  Outlet representa las rutas 'x' */}
    <Outlet />
    </>
  )
}

export default WithNavbar