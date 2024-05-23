import LogoXl from '../assets/img-logo/logo-xl.png'
import './styles/Login.css'

const Register = () => {

    return (
      
        <div className="container-fluid div-fluid">
        <div className="row align-items">
          <div className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6">
            <img src={LogoXl} alt="Astronap" />
          </div>
          <div className="col">
            <h2 className="fw-bold text-center py-5">Crear cuenta Astronap</h2>
            <p className="fw-bold text-center mt-1">Crea una cuenta para que disfrutes de la Astronomia</p>
  
            {/* Register Form */}
            <form action="">
              <div className="mb-4">
                <input type="email" className="form-control" name="email" placeholder="Correo electronico" />
              </div>
              <div className="mb-4">
                <input type="text" className="form-control" name="name" placeholder="Nombre completo" />
              </div>
              <div className="mb-4">
                <input type="password" className="form-control" name="password" placeholder="Contraseña" />
              </div>
              <div className="mb-4">
                <input type="password" className="form-control" name="repeatPassword" placeholder="Repetir contraseña" />
              </div>
              <p>Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies.</p>
  
              {/* Button with w-100 class */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Registrarse</button>
              </div>
              <div className="my-3">
                <span>¿Tienes cuenta? <a href="#">Iniciar sesión</a></span><br />
                <span><a href="#">Recuperar contraseña</a></span>
              </div>
            </form>
          </div>
        </div>
  
        <div className="info text-light">
          <div className="row">
            <div className="col-sm-3 d-flex align-items-center justify-content-center border-end">
              <div>
                <h5 className="justify-content-center">Síguenos en redes sociales</h5>
                <div className="text-center">
                  <i className="fa-brands fa-whatsapp"></i> <i className="fab fa-facebook-square"></i> <i className="fa-brands fa-instagram"></i>
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
                  <div className="col">FAQ</div>
                  <div className="col">Condiciones de uso</div>
                  <div className="col">Política de privacidad</div>
                </div>
                <div className="col">Todas las imágenes ofrecidas en este sitio web son de propiedad de los usuarios que las ofrecen.</div>
                <div className="col">
                  <div className="col">Email: astrosnap@gmail.com</div>
                  <div className="col">Teléfono: 9 544653218</div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div id="footer" className="d-flex justify-content-between container text-light"></div>
      </div>
        )
};

export default Register;
