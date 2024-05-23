import './styles/LoginStyle.css';
import { Link } from "react-router-dom";
import Navbar from "../components/navbar"

const AccountRegister = () => {


    return (
        <>
            <Navbar/>
            <div className="container-fluid div-fluid">
                <div className="nabvarregister">
               
                </div>
                <div className="row align-items-center justify-content-center min-vh-100">
                    <div className="col-12 col-md-8 col-lg-6">
                        <h2 className="fw-bold text-center py-5">Crear cuenta Astronap</h2>

                        {/* Register */}
                        <form className="row g-3 justify-content-center">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Correo</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="col-md-6 password-container">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="country" className="form-label">País</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="street" className="form-label">Calle numero sector</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies.
                                        <Link to="/terms"><div className="col">Condiciones de uso</div></Link>
                                    </label>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn1 btn-primary">Registrarse</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountRegister;
