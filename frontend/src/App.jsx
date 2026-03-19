
import './App.css'
import Login from './Component/Login';
import Navbar from './Component/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Products from './Component/Products';
import Flashsale from './Component/Flashsale';
import Layout from './Layout/Layout';
import Herosection from './Component/Herosection';

function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
         
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </BrowserRouter>
    // <Navbar/>
    // <Products/>
    // <Flashsale/>
    // <Layout/>
    <>
  <Layout>
    <Herosection/>
    <Flashsale/>
    <Products/>
  </Layout>
    </>
  );
}

export default App
