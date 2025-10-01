import React from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import FarmerDash from './pages/FarmerDash'

function App() {
  

  return (
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/farmerDash' element={<FarmerDash/>}/>
        </Routes>
      </div>
     
    </Router>
  )
}

export default App
