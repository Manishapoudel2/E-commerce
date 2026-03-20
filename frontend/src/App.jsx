
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

function App() {
  const [search, setSearch] = useState("");

  return (
  
 <>
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

        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
   <Route path="/product/:id" element={<SingleProduct />} />
       
      </Routes>
    </Layout>
  </BrowserRouter>
</>
  );
}

export default App
