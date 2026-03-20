import React, { useState } from 'react'
 import { CiHeart } from "react-icons/ci";
 import { FaHeart } from "react-icons/fa";

const Likedunlike = () => {
   
    const[like , setLike]=useState(false);
  const handleLike = () => {
    
    setLike(!like);
  };

  return (
  
   
    <div className='flex  space-x-2.5 py-2 items-center justify-end'  >
        <button onClick={handleLike} className='cursor-pointer' >
        {like ? ( <FaHeart size={28} className='text-red-500 transition-all ease-in 3s' />
        ):
        ( <CiHeart size={28} color='red'  />)}
       </button>
     
      
    </div>
    

  )
}

export default Likedunlike