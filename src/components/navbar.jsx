import './components styles/Navbar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'; 

const Navbar = () => {
  return (
    <div className="navbarCustom">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            <img src="../src/assets/img-logo/logo-S.png" class="navbar-logo"/>
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
                <Link className="nav-link" href="#">Perfiles</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-disabled="true">Ingresar</Link>
              </li>
            </ul>
            <form className="d-flex ms-auto" role="search">
              <button type="button" className="btn btn-dark subs-bot">Registrarse</button>
              <div className="text-light mini-cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};



export default Navbar;
