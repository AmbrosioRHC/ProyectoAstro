
import './App.css'
import React, { useEffect, useContext, useState } from "react";
import injectContext from './store/appContext'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './views/home';
import FAQ from './views/FAQ';
import AboutUs from './views/about';
import Privacy from './views/privacy';
import Terms from './views/terms&conditions';
import ProductPage from './views/product-page';
import Account from './views/Account';
import AccountPro from './views/AccountPro';
import ProfilesView from './views/ProfilesView';
import PhotographerView from './views/PhotographerView';
import ProductList from './views/product-list';
import AccountRegister from './views/AccountRegister';
import RecoverAccount from './views/RecoverAccount';
import ShoppingCart from './views/ShoppingCart';
import ShopForm from './views/ShopForm'
import Login from './views/newLogin';
import ApiStripe from './views/ApiStripe';
import CheckoutForm from './components/CheckoutForm';
import Navbar from './components/navbar';





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  console.log(isLoggedIn,setIsLoggedIn)
  return (
    <BrowserRouter>
      <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} email={email} setEmail={setEmail} />
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/about_us" element={<AboutUs/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/product-list" element={<ProductList />}/>
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account-pro" element={<AccountPro setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/profiles" element={<ProfilesView />} />
          <Route path="/profile/:id" element={<PhotographerView />} />
          <Route path="/product-page/:id" element={<ProductPage />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} email={email} setEmail={setEmail}/>} />
          <Route path="/accountregister" element={<AccountRegister />} />
          <Route path="/recoveraccount" element={<RecoverAccount />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route to path='shopform' element={<ShopForm />} />
          <Route path="/stripe" element={<ApiStripe />} />
          <Route path ="/checkoutForm" element={<CheckoutForm/>}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default injectContext(App);