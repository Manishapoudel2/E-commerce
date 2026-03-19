import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
    <Footer/>
    </div>
  )
}

export default Layout
