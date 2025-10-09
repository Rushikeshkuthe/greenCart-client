import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FarmerDash from "./pages/FarmerDash";
import Myproduct from "./pages/Myproduct";
import AddProduct from "./pages/AddProduct";
import FarmerOrder from "./pages/FarmerOrder";
import FarmerPayment from "./pages/FarmerPayment";
import FarmerSettings from "./pages/FarmerSettings";
import BuyerDash from "./pages/BuyerDash";
import MyCart from "./pages/MyCart";
import MyOrders from "./pages/MyOrders";
import BuyerPayment from "./pages/BuyerPayment";
import ProductDetails from "./pages/ProductDetail";
import BuyerProfile from "./pages/BuyerProfile";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/farmerDash" element={<FarmerDash />} />
          <Route path="/myProduct" element={<Myproduct />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/farmerOrder" element={<FarmerOrder />} />
          <Route path="/farmerPayment" element={<FarmerPayment />} />
          <Route path="/farmerSettings" element={<FarmerSettings />} />
          <Route path="/buyerDash" element={<BuyerDash />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/myOrder" element={<MyOrders />} />
          <Route path='/buyerPayment' element={<BuyerPayment/>}/>
          <Route path='/productDetails/:id' element={<ProductDetails/>}/>
           <Route path='/buyerProfile' element={<BuyerProfile/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
