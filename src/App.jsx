
import './App.css'
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
import ProductList from './views/product-list';
import Contact from './views/Contact'

function App({ store }) {
  return (
    <BrowserRouter>
      <>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/about_us" element={<AboutUs/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product-list" element={<ProductList />}/>
       </Routes>
        <Routes>
            <Route
              path="/product-page/:id" element={<ProductPage />}
            />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default injectContext(App);