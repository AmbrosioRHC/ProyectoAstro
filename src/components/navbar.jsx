import './components_styles/Navbar.css'
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'; 
import { useNavigate } from 'react-router-dom';

const Navbar = ({isLoggedIn, setIsLoggedIn, email}) => {
  const navigate = useNavigate();

  const Logout = () => {
    navigate('/');
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="navbarCustom">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src="../src/assets/img-logo/logo-S.png" className="navbar-logo" alt="Logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-body" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/product-list" className="nav-link" aria-current="page">Galeria</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profiles" className="nav-link">Perfiles</Link>
                </li>
                {isLoggedIn ? (
                  <li className="nav-item">
                    <button className="nav-link" onClick={Logout}>Salir</button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">Ingresar</Link>
                  </li>
                )}
              </ul>
              <form className="d-flex ms-auto" role="search">
                {!isLoggedIn && (
                  <Link to="/accountregister">
                    <button type="button" className="btn btn-dark subs-bot mt-2">Registrarse</button>
                  </Link>
                )}
                <div className="text-light mini-cart mt-2">
                  <Link to="/shoppingcart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                </div>
                {isLoggedIn && (
                  <div className='userWelcome text-light ms-4 me-2 mt-3'>
                    {email !== null && (
                      <p>
                        Hola {email} 
                        <Link to="/account-pro">
                          <button type="button" className="btn btn-primary ms-3">Tu cuenta</button>
                        </Link>
                      </p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
