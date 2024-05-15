
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcMastercard, faCcVisa, faCcPaypal, faCcAmazonPay, faCcApplePay, faCcDinersClub} from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import './Landing.css'


const Home = () => {
    return (
      <>
        <div id="header" class="text-light">
          <div class="header-text">
            <h1>Bienvenidos a ...</h1>
            <h2>El portal de compra y venta de astrofotografía</h2>
            <p>... es un portal donde los astofotógrafos ponen en venta sus fotografías.</p>
            <div class="slideshow container w-50 d-flex align-items-center justify-content-center"> 
              <button type="button" class="btn btn-lg boton text-light">Explora</button>
            </div>
          </div>
        </div>

        <div class="product-section w-100 p-5">
          <div class="container text-center">
            <div class="row">
              <div class="col-md-8 d-flex">
                <div id="carousel" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="https://cursosfoto.online/wp-content/uploads/2020/02/cursos-astrofotografia.jpg" class="img-carrusel d-block" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="https://www.astrofotografía.com/wp-content/uploads/2021/06/Nebulosa-de-Orion-edited-1024x639.jpg.webp" class="img-carrusel d-block" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWtO1gpvezEkX2k8GYM6IQ_Ug8m2gZ3T6ChrMml_NSg&s" class="img-carrusel d-block" alt="..."/>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              <div class="col-6 col-md-4 d-flex align-items-center justify-content-center">
                <div class= "description">
                  <h1 class="d-flex text-light">Revisa y compra miles de imagenes</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-section w-100 p-5">
          <div class="container">
            <div class="row">
            <div class="col-6 col-md-4 d-flex align-items-center justify-content-right">
                <div class="product-info text-light">
                  <h2>Acerca de nosotros</h2>
                  <h5 class="justify-content-right">Somos una plataforma de compra venta de astrofotografia. Trabajamos con cientos de astrofotografos que publican y venden su trabajo por medio de esta plataforma.</h5>
                  <button type="button" class="btn boton2 btn-primary btn-lg">Más información</button>
                </div>
            </div>
              <div class="col-md-8">
                <div class="learn d-flex align-items-center justify-content-center">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="product-section w-100 p-5">
          <div class="container text-center">
            <div class="row">
              <div class="col-md-8">
                <div class="users d-flex align-items-center justify-content-center text-light">
                  <div class="users-text">
                    <h3>Revisa los perfiles y valora el trabajo de nuestros astrofotógrafos</h3>
                    <button type="button" class="btn boton2 btn-primary btn-lg">Perfiles</button>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 d-flex align-items-center justify-content-center">
                <div class= "title">
                  <h1 class="d-flex text-light">Participa en nuestra comunidad!!</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="subscribe text-light">
            <div class="subscribe-text align-items-center">
              <h1>¿Eres astrofotógrafo?</h1>
              <p>Crea tu cuenta y comienza a vender tus fotos</p>
              <button type="button" class="btn btn-lg boton text-light ">Regístrate</button>
            </div>
          </div>
        </div>

        <div class="info text-light bg-black">
          <div class="row">
            <div class="col-sm-3 d-flex align-items-center justify-content-center border-end">
              <div>
                <h5 class="justify-content-center">Siguenos en redes sociales</h5>
                <div class="text-center">
                  <FontAwesomeIcon icon={faWhatsapp} />  <FontAwesomeIcon icon={faFacebook} />  <FontAwesomeIcon icon={faInstagram} />
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
                <div class="col">Email: astrosnapd@gmail.com</div>
                <div class="col">Teléfono: 9 544653218</div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div id="footer" class="d-flex justify-content-between container text-light">
          <FontAwesomeIcon icon={faCcMastercard} />
          <FontAwesomeIcon icon={faCcVisa} />
          <FontAwesomeIcon icon={faCcPaypal} />
          <FontAwesomeIcon icon={faCcAmazonPay} />
          <FontAwesomeIcon icon={faCcApplePay} />
          <FontAwesomeIcon icon={faCcDinersClub} />
        </div>

      </>
    );
  };
  
  export default Home;