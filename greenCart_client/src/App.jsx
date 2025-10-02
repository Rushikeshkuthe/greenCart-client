import React from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import FarmerDash from './pages/FarmerDash'
import Myproduct from './pages/Myproduct'
import AddProduct from './pages/AddProduct'
import FarmerOrder from './pages/FarmerOrder'

function App() {
  

  return (
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/farmerDash' element={<FarmerDash/>}/>
            <Route path='/myProduct' element={<Myproduct/>}/>
            <Route path='/addProduct' element={<AddProduct/>}/>
            <Route path='/farmerOrder' element={<FarmerOrder/>}/>
        </Routes>
      </div>
     
    </Router>
  )
}

export default App
