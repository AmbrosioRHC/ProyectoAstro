import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext"; 
import LogoXl from '../assets/img-logo/logo-xl.png';
import PlanetLogoS from '../assets/img-logo/logo-planet-S.png';
import './styles/LoginStyle.css';


const Login = ({ setIsLoggedIn, email, setEmail }) => {
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { actions } = useContext(Context); // Usa el contexto
    const navigate = useNavigate(); // Hook para navegación
    

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await actions.login(email, password);
            if (response) {
                navigate("/");
                setIsLoggedIn(true);
            } else {
                setErrorMessage("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            setErrorMessage("Error al iniciar sesión");
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <>
            <div className="container-fluid text-light">
                <div className="row login-top d-flex align-items-center justify-content-center">
                    <div className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6">
                        <Link to="/"><img src={LogoXl} alt="Astronap" className='logoprincipal' /></Link>
                    </div>

                    <div className="col overview">
                        <h1 className="fw-bold text-center py-5">Bienvenido</h1>
                        {/* Login */}
                        <form className="login-form" onSubmit={handleLogin}>
                            <div className="mb-4">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name="email" 
                                    placeholder="Correo electrónico" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password" 
                                    placeholder="Contraseña" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>

                            {errorMessage && (
                                <div className="mb-4 text-danger">
                                    {errorMessage}
                                </div>
                            )}

                            <div className="mb-4 form-check">
                                <input type="checkbox" name="connected" className="form-check-input" id="connected" />
                                <label htmlFor="connected" className="form-check-label">Mantenerme conectado</label>
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                            </div>
                            <div className="my-3">
                                <div className="container">
                                    No tienes cuenta?
                                </div>
                                <div className="container">
                                    <Link to="/accountregister">Regístrate</Link>
                                </div>
                                   {/* link para recuperar contraseña
                                <div className="container">
                                    <Link to="/recoveraccount">Recuperar contraseña</Link>
                                </div>
                                */}
                            </div>
                        </form>
                    </div>
                </div>

                <div className="info text-light">
                    <div className="row">
                        <div className="col-sm-3 d-flex align-items-center justify-content-center border-end">
                            <img src={PlanetLogoS} alt="Astronap" className='PlanetLogoS me-5' />
                            <div>
                                <h5 className="justify-content-center">Síguenos en redes sociales</h5>
                                <div className="text-center">
                                    <i className="fa-brands fa-whatsapp"></i>   <i className="fab fa-facebook-square"></i>  <i className="fa-brands fa-instagram"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-9 text-center">
                            <div className="row table-title">
                                <div className="col"><strong>Acerca de</strong></div>
                                <div className="col"><strong>Enlaces</strong></div>
                                <div className="col"><strong>Copyright</strong></div>
                                <div className="col"><strong>Contáctanos</strong></div>
                            </div>
                            <div className="row table-body">
                                <div className="col">Es una plataforma de compra y venta de astrofotografía, donde astrofotógrafos tienen la posibilidad de exponer y ser valorizados por su trabajo.</div>
                                <div className="col">
                                    <Link to="/FAQ"><div className="col">FAQ</div></Link>
                                    <Link to="/terms"><div className="col">Condiciones de uso</div></Link>
                                    <Link to="/privacy"><div className="col">Política de privacidad</div></Link>
                                </div>
                                <div className="col">Todas las imágenes de ofrecidas en este sitio web son de propiedad de los usuarios que las ofecen.</div>
                                <div className="col">
                                    <div className="col">Email: astrosnap@gmail.com</div>
                                    <div className="col">Teléfono: +56 9 544653218</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;