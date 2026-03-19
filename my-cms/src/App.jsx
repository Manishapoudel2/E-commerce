
import './App.css'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Product from './Pages/Product'
import AddProduct from './Pages/AddProduct'

import Sidebar from './Pages/Sidebar'
import EditProduct from './Pages/EditProduct'
import Dashboard from './Pages/Dashboard'
import Order from './Pages/Order'


function App() {


  return (
  
    
   <>
    <BrowserRouter>
    
     <div className='flex'>
      <Sidebar/>
     <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/product" element={<Product />} />
       <Route path='/' element={<Dashboard/>}/>
       <Route path='/order' element={<Order/>}/>
       
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
      </Routes>
      </div>
    </BrowserRouter>

    
    </>
      
    
  )
}

export default App
