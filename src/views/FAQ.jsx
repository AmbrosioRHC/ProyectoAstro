import "./FAQ.css"



const FAQ = () => {
    return (
  <>
    
    
    <div class="faq container p-2 mt-5">
        <div class="row">
            <div class="faq-title col-6 col-md-4 d-flex align-items-center justify-content-center">
                <h1>Preguntas frecuentes</h1>
            </div>
            <div class="col-md-8 ">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            ¿Está protegida mi privacidad?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                            <p>En AtroSnap nos tomamos en serio tu privacidad. Se exigen contraseñas seguras al registrarse:
                                Tu contraseña no puede ser demasiado parecida a tus otros datos personales (por ejemplo, nombre de usuario, nombre/apellido, correo electrónico).

                                Su contraseña debe contener al menos 8 caracteres.

                                Tu contraseña no puede ser una contraseña de uso común (por ejemplo, "contraseña1234").

                                Tu contraseña no puede ser totalmente numérica.

                                Su contraseña debe contener al menos un número.

                                Su contraseña debe contener un signo de puntuación.

                                Tu contraseña no puede haber aparecido en una filtración de datos de otros sitios web.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <p>¿Se necesita una subscripción para comenzar a vender fotos?</p>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            <p>No. Solo un registro en nuestra pagina e identificarse como vendedor/usuario. AstroSnap no cobra subscripciones por el uso de la plataforma.</p>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <p>¿Cuáles son los formatos de imagenes admitidos?</p>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            <p>Se aceptan los formatos JPEG, PNG, GIF, TIFF y GIF.</p>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            <p>¿Perderé mis imagenes si decido cancelar mi cuenta de AstroSnap?</p>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            <p></p>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                fdgfdgfgfdgfdg
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