import React, { useState, useEffect } from 'react';
import Home from './views/home'
import Login from './views/login'
import getState from './store/flux'
import Register from './views/Register'
import './App.css'
import injectContext from './store/appContext'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductPage from './views/product-page';
import ForgotPassword from './views/ForgotPassword';
import SentNotification from './views/SentNotification';
import ShoppingCart from './views/ShoppingCart';



function App() {



  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"register"} element={<Register />} />
          <Route path={"forgotpassword"} element={<ForgotPassword />} />
          <Route path={"shoppingcart"} element={<ShoppingCart />} />
          <Route path={"sentnotification"} element={<SentNotification />} />

        </Routes>
      </BrowserRouter>

    </>

  )
}


export default injectContext(App);