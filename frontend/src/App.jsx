
import './App.css'


import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Products from './Component/Products';
import Flashsale from './Component/Flashsale';
import Layout from './Layout/Layout';
import Herosection from './Component/Herosection';
import Login from './Component/Login';
import Signup from './Component/Signup';

function App() {

  return (
  
 <>
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Herosection />
              <Flashsale />
              <Products />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  </BrowserRouter>
</>
  );
}

export default App
