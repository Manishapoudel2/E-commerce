import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill, RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className='bg-gray-50 text-gray-600 py-20 min-h-80 text-xs '>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-8'>
        
       
        <div className='flex flex-col items-start'>
          <h2 className='text-xl font-bold mb-2'>Quickcart</h2>
          <div className='flex gap-4 text-2xl mb-4'>
            <CiFacebook />
            <FaWhatsapp />
            <RiTwitterXFill />
            <RiYoutubeLine />
          </div>
        </div>

       
        <div>
          <h3 className='font-semibold mb-2'>Help Center</h3>
          <ul className='space-y-1'>
            <li>Product Support</li>
            <li>Warranty</li>
            <li>Order Tracking</li>
            <li>Contact Us</li>
          </ul>
        </div>

       
        <div>
          <h3 className='font-semibold mb-2'>Services</h3>
          <ul className='space-y-1'>
            <li>Payment</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className='text-center mt-8 text-gray-400'>
  <p>© Quickcart {new Date().getFullYear()}</p>
</div>
    </footer>
  )
}

export default Footer