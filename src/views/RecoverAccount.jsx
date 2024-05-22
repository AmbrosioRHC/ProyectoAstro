import LogoXl from '../assets/img-logo/logo-xl.png';
import PlanetLogoS from '../assets/img-logo/logo-planet-S.png';
import './styles/LoginStyle.css'
import { Link } from "react-router-dom";

const RecoverAccount = () => {



    return (

        <div className="container-fluid div-fluid">
            <div className="row align-items">
                <div className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6">
                    <img src={LogoXl} alt="Astronap" />
                </div>

                <div className="col ">
                    <h2 className="fw-bold text-center py-5  ">Recuperar contraseña</h2>
                    <p className="fw-bold text-center mt-1  ">Escribe tu correo de registro para enviar un enlace de recuperación:</p>
                    <form action="">
                        <div className="mb-4 ">
                            <input type="email" className="form-control" name="email" placeholder="Correo electronico" />
                        </div>
                       

                        <div className="d-grid">
                            <button type="submit" className="btn btn1 btn-primary">Enviar</button>
                        </div>
                    </form>

                    <div className="singup mt-4">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/login">Iniciar Sesion</Link>
                                </li>
                            </ul>
                        </div>



                    {/* Información y pie de página */}


                    <div id="footer" className="d-flex justify-content-between container text-light">

                    </div>
                </div>
                <div className="info text-light">
                    <div className="row">
                        <div className="col-sm-3 d-flex align-items-center justify-content-center border-end">
                            <img src={PlanetLogoS} alt="Astronap" className='PlanetLogoS' />
                            <div>
                                <h5 className="justify-content-center">Siguenos en redes sociales</h5>
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
                                <div className="col"><strong>Contactanos</strong></div>
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
                                    <div className="col">Teléfono: 9 544653218</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}


export default RecoverAccount;
