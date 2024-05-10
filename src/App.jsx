
import './App.css'
import injectContext from './store/appContext'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from './views/home'
import ProductPage from './views/product-page';

function App({ store }) {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route
              path="/product-page" element={<ProductPage />}
            />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default injectContext(App);