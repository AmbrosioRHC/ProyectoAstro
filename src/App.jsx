
import './App.css'
import injectContext from './store/appContext'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './views/home'
import FAQ from './views/FAQ';
import AboutUs from './views/about';
import Privacy from './views/privacy';
import Terms from './views/terms&conditions';

function App() {


  return (
    <BrowserRouter>
      <>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/about_us" element={<AboutUs/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/" element={<Home/>}/>
       </Routes>
      </>
    </BrowserRouter>
  )
}


export default injectContext(App);