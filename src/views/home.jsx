import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; 
<<<<<<< HEAD
import './styles/Landing.css'
=======
import './styles/Landing.css';
>>>>>>> e2e10175e36cc3696c3ad72fc4a9c928d6e1056c
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <>
        <div className="body-landing">
          <div id="header" className="text-light">
            <div className="header-text">
              <h1>Bienvenidos a 
                <img src="../src/assets/img-logo/logo-L.png" alt="Logo" />
              </h1>
              <h2>El portal de compra y venta de astrofotografía</h2>
              <p>AstroSnap es un portal donde los astrofotógrafos ponen en venta sus fotografías.</p>
              <div className="slideshow container w-50 d-flex align-items-center justify-content-center"> 
                <button type="button" className="btn btn-lg btn-success boton text-light" onClick={() => window.location.href = '/product-list'}>Explora</button>
              </div>
            </div>
          </div>

          <div className="product-section w-100 p-5">
            <div className="container text-center">
              <div className="row">
                <div className="col-md-8">
                  <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://cursosfoto.online/wp-content/uploads/2020/02/cursos-astrofotografia.jpg" className="img-carrusel w-100" alt="..." />
                      </div>
                      <div className="carousel-item img-carrusel">
                        <img src="https://www.astrofotografía.com/wp-content/uploads/2021/06/Nebulosa-de-Orion-edited-1024x639.jpg.webp" className="img-carrusel w-100" alt="..." />
                      </div>
                      <div className="carousel-item img-carrusel">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWtO1gpvezEkX2k8GYM6IQ_Ug8m2gZ3T6ChrMml_NSg&s" className="img-carrusel w-100" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center mt-4 mt-md-0">
                  <div className="description">
                    <h1 className="d-flex text-light">Revisa y compra miles de imágenes</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-section w-100 p-5">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center order-md-2">
                  <div className="product-info text-light">
                    <h2>Acerca de nosotros</h2>
                    <h5>Somos una plataforma de compra venta de astrofotografía. Trabajamos con cientos de astrofotógrafos que publican y venden su trabajo por medio de esta plataforma.</h5>
                    <Link to="/about_us"><button type="button" className="btn boton2 btn-success btn-lg">Más información</button></Link>
                  </div>
                </div>
                <div className="col-12 col-md-8 order-md-1">
                  <div className="learn d-flex align-items-center justify-content-center"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-section w-100 p-5">
            <div className="container text-center">
              <div className="row">
                <div className="col-12 col-md-8">
                  <div className="users d-flex align-items-center justify-content-center text-light">
                    <div className="users-text">
                      <h3>Revisa los perfiles y valora el trabajo de nuestros astrofotógrafos</h3>
                      <Link to="/profiles"><button type="button" className="btn boton2 btn-success btn-lg">Perfiles</button></Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center mt-4 mt-md-0">
                  <div className="title">
                    <h1 className="d-flex text-light">Participa en nuestra comunidad!!</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="subscribe text-light">
            <div className="subscribe-text d-flex flex-column align-items-center justify-content-center">
              <h1>¿Eres astrofotógrafo?</h1>
              <p>Crea tu cuenta y comienza a vender tus fotos</p>
              <Link to="/accountregister"><button type="button" className="btn btn-lg btn-success boton text-light">Regístrate</button></Link>
            </div>
          </div>

          <div className="info text-light bg-black">
            <div className="row">
              <div className="col-sm-3 d-flex align-items-center justify-content-center">
                <img src="../src/assets/img-logo/logo-planet-S.png" id="icon" alt="Logo" />
                <div>
                  <h5 className="justify-content-center">Síguenos en redes sociales</h5>
                  <div className="text-center">
                    <FontAwesomeIcon icon={faWhatsapp} /> <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faInstagram} />
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
                  <div className="col">Todas las imágenes ofrecidas en este sitio web son de propiedad de los usuarios que las ofrecen.</div>
                  <div className="col">
                    <div className="col">Email: astrosnapd@gmail.com</div>
                    <div className="col">Teléfono: +569 544653218</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Home;
