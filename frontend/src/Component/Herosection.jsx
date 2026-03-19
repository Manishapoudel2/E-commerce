import React from 'react'

const Herosection = () => {
  return (
    <section className="bg-gray-100 py-20 min-h-screen flex items-center  ">
      <div className="container mx-auto text-center px-4">
       
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
          Welcome to Quickcart!
        </h1>
      
        <p className="text-gray-700 text-lg sm:text-xl mb-6">
          Shop the best products at amazing prices
        </p>
       
        <button className="px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition">
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Herosection