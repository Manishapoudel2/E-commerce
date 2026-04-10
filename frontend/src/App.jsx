
import './App.css'


import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Products from './Component/Products';
import Flashsale from './Component/Flashsale';
import Layout from './Layout/Layout';
import Herosection from './Component/Herosection';
import Login from './Component/Login';
import Signup from './Component/Signup';
import { useState } from 'react';
import SingleProduct from './Component/SingleProduct';
import Allproduct from './Component/Allproduct';

// import { AuthProvider } from '../Context/AuthContext';
import ProtectedRoute from './Route/ProtectedRoute';
import Cart from './Component/Cart';
import { AuthProvider } from './Context/AuthContext';



function App() {
  const [search, setSearch] = useState("");
  const [category,setCategory] = useState("");

  return (
  
 <>
  <AuthProvider>
     <BrowserRouter>
     <Layout search={search} setSearch={setSearch}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Herosection  search={search} />
              <Flashsale />
             
              <Products search={search} />
            </>
          }
        />
       <Route 
  path="/cart" 
  element={
 <ProtectedRoute>
<Cart />
 </ProtectedRoute>
    
  }
/>

   <Route path='/allproducts' element={<Allproduct search={search} category={category} setCategory={setCategory} />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
   <Route path="/product/:id" element={<SingleProduct  />} />
   
       
      </Routes>
    </Layout>
  </BrowserRouter>
  </AuthProvider>
</>
  );
}

export default App
