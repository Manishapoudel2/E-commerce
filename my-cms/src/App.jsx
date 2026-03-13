
import './App.css'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Product from './Pages/Product'
import AddProduct from './Pages/AddProduct'

import Sidebar from './Pages/Sidebar'


function App() {


  return (
  
    
   <>
    <BrowserRouter>
    
     <div className='flex'>
      <Sidebar/>
     <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/product" element={<Product />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
      </div>
    </BrowserRouter>

    
    </>
      
    
  )
}

export default App
