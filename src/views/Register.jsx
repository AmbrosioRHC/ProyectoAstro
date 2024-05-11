import LogoXl from '../assets/img-logo/Logoxl'
import './Login.css'
const Register = () => {


    return (
        <>
 <div className="container-fluid">
            <div className="row align-items">
                <div className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6">
                <img src={LogoXl} alt="Astronap" />

                </div>

               
                <div className="col "> 
                    <h2 className="fw-bold text-center py-5  ">Crear cuenta Astronap</h2>
                    <p className="fw-bold text-center mt-1  ">Crea una cuenta para que disfrutes de la Astronomia</p>

                    {/* Register */}
                    <form action="">
                        <div className="mb-4 ">
                            <input type="email" className="form-control" name="email" placeholder="Correo electronico" />
                        </div>

                        <div className="mb-4 ">
                            <input type="text" className="form-control" name="name" placeholder="Nombre completo" />
                        </div>
                        <div className="mb-4 ">
                            <input type="password" className="form-control" name="password" placeholder="Contraseña" />
                        </div>
                        <div className="mb-4 ">
                            <input type="password" className="form-control" name="password" placeholder="Repetir contraseña" />
                        </div>
<p>Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies.</p>
             

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Registrarse</button>
                        </div>
                        <div className="my-3">
                            <span>¿Tienes cuenta?   <span><a href="#">Iniciar sesion</a></span></span><br />
                            <span><a href="#">Recuperar contraseña</a></span>
                        </div>
                    </form>
                  
                    
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

        <div id="footer" class="d-flex justify-content-between container text-light">
          
         
        </div>
        </div>

      </>
        
    )
}

export default Register;
