import LogoXl from '../assets/img-logo/Logoxl'
import './Login.css'
const sentNotification = () =>{


    return (
        <>

<div className="container-position-absolute" >
    <div className="">
        <img src={LogoXl} alt="Astronap" class="imagen-principal"/>
    </div>
    <h3>Se ha enviado un enlace a su correo electrónico <br /> para recuperar su contraseña<br /> </h3>
    <span><a href="#">Volver al inicio</a></span>
    
</div>

<div className="info text-light">
                <div className="row">
                    <div className="col-sm-3 d-flex align-items-center justify-content-center border-end">
                        <div>
                            <h5 className="justify-content-center">Siguenos en redes sociales</h5>
                            <div className="text-center">
                                <i className="fa-brands fa-whatsapp"></i>   <i classNameName="fab fa-facebook-square"></i>  <i className="fa-brands fa-instagram"></i>
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
                                <div className="col">FAQ</div>
                                <div className="col">Condiciones de uso</div>
                                <div className="col">Política de privacidad</div>
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
            </>

    )


}

export default sentNotification;