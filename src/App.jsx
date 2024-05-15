
import './App.css'
import injectContext from './store/appContext'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from './views/home'
import ProductPage from './views/product-page';
import FAQ from './views/FAQ';
import Account from './views/Account';
import PhotographerView from './views/PhotographerView';

function App() {
  
  return (
    <BrowserRouter>
      <>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/product-page" element={<ProductPage/>}/>
        <Route path="/account" element={<Account/>} />
        <Route path="/profile" element={<PhotographerView />} />
       </Routes>
      </> 
    </BrowserRouter>
  )
}


export default injectContext(App);