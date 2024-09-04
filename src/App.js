import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './Component/Navbar';
import Home from './Pages/Home';

import SellerLogin from './seller/pages/SellerLogin';
import SellerSignup from './seller/pages/SellerSignup';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './seller/pages/Dashboard';
import Login1 from './Pages/login1';
import Signup1 from './Pages/Signup1';
import Navbar1 from './Component/Navbar1';
import Shop from './Pages/Shop';
function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sellersignup" element={<SellerSignup />} />
        <Route path="/sellerlogin" element={<SellerLogin />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login1" element={<Login1/>} />
        <Route path="/signup1" element={<Signup1/>} />
        <Route path="/shop" element={<Shop/>} />


      </Routes>
    </>
  );
}

export default App;
