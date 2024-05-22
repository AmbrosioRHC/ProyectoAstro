import './styles/Documents.css'
import Navbar from "../components/navbar"

const FAQ = () => {
    return (
  <>
    <Navbar/>
    <div className="faq text-light"> 
        <div className="container p-2 mt-5">
            <div className="row text-light">
                <div className="faq-title col-6 col-md-4 d-flex align-items-center justify-content-center">
                    <div>
                    <h1 className="border-bottom">Preguntas frecuentes</h1>
                    <p>Por favor, tenga en cuenta que estas son preguntas frecuentes genéricas y pueden necesitar ser adaptadas para cumplir con las necesidades específicas de su empresa. Le recomendamos que consulte con un asesor legal para asegurarse de que cumple con todas las obligaciones legales necesarias.</p>
                    </div>
                </div>
                <div className="col-md-8 text-light">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <h5><strong>¿Qué es AstroSnap?</strong></h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <p>AstroSnap es una empresa en línea que se especializa en la venta de astrofotografías. Ofrecemos una amplia gama de imágenes del cosmos capturadas por nuestro equipo de expertos en astronomía.</p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <h5><strong>¿Cómo puedo comprar una imagen?</strong></h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p>Puede navegar por nuestra colección de imágenes en nuestro sitio web. Cuando encuentre una imagen que le guste, simplemente añádala a su carrito y proceda al pago.</p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <h5><strong>¿Qué formas de pago aceptan?</strong></h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p>Aceptamos varias formas de pago, incluyendo tarjetas de crédito y débito. Todos los pagos se realizan a través de nuestra plataforma segura en línea.</p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                <h5><strong>¿Puedo usar las imágenes para fines comerciales?</strong></h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p>Las imágenes compradas en AstroSnap son para uso personal solamente. Si desea utilizar nuestras imágenes para fines comerciales, por favor póngase en contacto con nosotros para discutir las opciones de licencia.</p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                <h5><strong>¿Ofrecen reembolsos?</strong></h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <p>Debido a la naturaleza digital de nuestras imágenes, todas las ventas son finales y no se pueden devolver ni intercambiar.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                <h5><strong>¿Cómo protegen mi información personal?</strong></h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <p>Nos tomamos muy en serio la seguridad de su información personal. Implementamos medidas de seguridad para proteger su información personal de accesos no autorizados, alteración, divulgación o destrucción. Para más detalles, por favor consulte nuestra Política de Privacidad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                                <h5><strong>¿Tienen recursos educativos sobre astronomía?</strong></h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <p>Sí, ofrecemos una variedad de recursos educativos en nuestro sitio web, incluyendo guías de observación de estrellas, blogs sobre astronomía y consejos para aquellos interesados en la astrofotografía.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                                <h5><strong>¿Puedo solicitar una imagen específica?</strong></h5>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <p>Sí, ofrecemos un servicio de solicitud personalizada. Si hay una constelación, galaxia o nebulosa específica que le gustaría ver, por favor póngase en contacto con nosotros y haremos nuestro mejor esfuerzo para capturarla para usted.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>  
  </>
    );
  };
  
  export default FAQ;