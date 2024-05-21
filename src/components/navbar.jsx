/*import "../App.css";*/
import LogoM from "../assets/img-logo/logo-M.png"
import './components styles/Navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navbarCustom">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:5173">
              <img src="../src/assets/img-logo/logo-S.png" className="navbar-logo" alt="Logo" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="http://localhost:5173">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:5173/product-list">Product page</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex ms-auto" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button type="button" className="btn btn-primary">Carrito</button>
              </form>
            </div>
          </div>
    </nav >
  </div>
  </>
  );
};



export default Navbar;
