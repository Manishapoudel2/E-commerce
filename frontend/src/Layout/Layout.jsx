import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Layout = ({ children, search, setSearch }) => {
  return (
    <div>
        <Navbar search={search} setSearch={setSearch} />
      {children}
    <Footer/>
    </div>
  )
}

export default Layout
