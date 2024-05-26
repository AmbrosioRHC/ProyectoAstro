import './components_styles/Navbar.css'
import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'; 
import { Context } from '../store/appContext';

const Navbar = ({email}) => {

  const {store, actions} =useContext(Context)
  console.log(store.userMail)

  return (
    <>
      <div className="navbarCustom">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">
              <img src="../src/assets/img-logo/logo-S.png" className="navbar-logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-body" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/product-list" className="nav-link" aria-current="page" href="#">Galeria</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profiles" className="nav-link" href="#">Perfiles</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link" aria-disabled="true">Ingresar</Link>
                </li>
              </ul>
              <form className="d-flex ms-auto" role="search">
                <div className='userWelcome text-light'>
                  <p>{email}</p>
        
                  {Array.isArray(store.userMail) && store.userMail.map((userMail, index) => {
                    return <p key={index}>{userMail.email}</p>
                  })}
                </div>
                <Link to="/accountregister"><button type="button" className="btn btn-dark subs-bot">Registrarse</button></Link>
                <div className="text-light mini-cart">
                  <Link to="/shoppingcart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;