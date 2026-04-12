// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ImageSlider = () => {
//   const API = import.meta.env.VITE_API_URL;
//   const [products, setProducts] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const fetchData = async () => {
//     const res = await axios.get(`${API}/product`);
//     setProducts(res.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         products.length > 0 ? (prevIndex + 1) % products.length : 0,
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [products]);

//   if (products.length === 0) return <div>Loading...</div>;

//   return (
//     <div className="absolute right-20 top-30 w-96">
//       <div className="overflow-hidden rounded-">
//         <img
//           src={products[currentIndex].imageurl}
//           alt={products[currentIndex].title}
//           className="w-full h-74 object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
