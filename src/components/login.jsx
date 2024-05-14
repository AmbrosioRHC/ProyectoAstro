const Login = (props) => {

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col md-6">
          <img src={props.img} alt="Imagen" />
        </div>

        <div className="col md-6">
          <h2 className="container">Bienvenido</h2>
          <form action="">
            <div className="mb-4 ">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" name="email" placeholder="xxxx@gmail.com" />
            </div>
            <div className="mb-4 ">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <div className="mb-4 form-check">
              <input type="checkbox" name="connected" className="form-check-input" id="connected" />
              <label htmlFor="connected" className="form-check-label">Mantenerme conectado</label>
            </div>
            <div className="d-grid mb-4">
              <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </div>
            <div className="my-3">
              <span>No tienes cuenta? <a href="#">Regístrate</a></span><br />
              <span><a href="#">Recuperar contraseña</a></span>
            </div>
          </form>
          <div className="container w-100 my-5">
            <div className="row text-center">
              <div className="col-12">Iniciar sesión con</div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn-outline-primary form-control my-1">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <img src="#" alt="" />
                    </div>
                    <div className="col-10 text-center">
                      <i className="fab fa-facebook-square"></i>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col">
                <button className="btn-outline-danger form-control my-1">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <img src="#" alt="" />
                    </div>
                    <div className="col-10 text-center">
                      <i className="fab fa-google"></i>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col">
                <button className="btn-outline-danger form-control my-1">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <img src="#" alt="" />
                    </div>
                    <div className="col-10 text-center">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );

};

export default Login;