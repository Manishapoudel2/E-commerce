
import './App.css'
import Login from './Component/Login';
import Navbar from './Component/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
         
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </BrowserRouter>
    <Navbar/>
  );
}

export default App
