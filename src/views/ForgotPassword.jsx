import LogoXl from '../assets/img-logo/logo-xl.png'
import './Login.css'
const ForgotPassword = () => {


    return (

        <div className="container-fluid">
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
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                        </form>

                    {/* Información y pie de página */}

                    <div id="footer" className="d-flex justify-content-between container text-light">
                        {/* Contenido */}
                    </div>
                </div>
                <div class="info text-light">
                    <div class="row">
                        <div class="col-sm-3 d-flex align-items-center justify-content-center border-end">
                            <div>
                                <h5 class="justify-content-center">Siguenos en redes sociales</h5>
                                <div class="text-center">
                                    <i class="fa-brands fa-whatsapp"></i>   <i className="fab fa-facebook-square"></i>  <i class="fa-brands fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-9 text-center">

                            <div class="row table-title">
                                <div class="col"><strong>Acerca de</strong></div>
                                <div class="col"><strong>Enlaces</strong></div>
                                <div class="col"><strong>Copyright</strong></div>
                                <div class="col"><strong>Contactanos</strong></div>
                            </div>
                            <div class="row table-body">
                                <div class="col">Es una plataforma de compra y venta de astrofotografía, donde astrofotógrafos tienen la posibilidad de exponer y ser valorizados por su trabajo.</div>
                                <div class="col">
                                    <div class="col">FAQ</div>
                                    <div class="col">Condiciones de uso</div>
                                    <div class="col">Política de privacidad</div>
                                </div>
                                <div class="col">Todas las imágenes de ofrecidas en este sitio web son de propiedad de los usuarios que las ofecen.</div>
                                <div class="col">
                                    <div class="col">Email: astrosnap@gmail.com</div>
                                    <div class="col">Teléfono: 9 544653218</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}


export default ForgotPassword;
