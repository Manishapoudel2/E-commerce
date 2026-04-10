import { useState, useEffect } from "react";

function HeroSection() {
  const images = [
    "https://images.pexels.com/photos/6214384/pexels-photo-6214384.jpeg",
    "https://images.pexels.com/photos/5650027/pexels-photo-5650027.jpeg",
    "https://images.pexels.com/photos/5872189/pexels-photo-5872189.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  // Show previous image
  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };


  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
   <div className="relative w-full h-96   sm:h-100 md:h-125 overflow-hidden ">
  <img
    src={images[currentIndex]}
    alt={`Slide ${currentIndex + 1}`}
    className="w-full h-full object-cover rounded-3xl  p-4 transition-opacity duration-1000 ease-in-out"
  />

  <button
    onClick={prevSlide}
    className="absolute top-1/2 left-5 -translate-y-1/2 bg-gray bg-opacity-50 text-white rounded-full p-3 text-2xl hover:bg-opacity-70"
  >
    &#10094;
  </button>

  <button
    onClick={nextSlide}
    className="absolute top-1/2 right-5 -translate-y-1/2 bg-gray bg-opacity-50 text-white rounded-full p-3 text-2xl hover:bg-opacity-70"
  >
    &#10095;
  </button>
  
</div>
  );
}

export default HeroSection;