import './styles/Documents.css'

const Contact = () => {
    return (
  <>
    <div className="contact-header container text-light mt-5">
      <div className="row">
        <div className="col">
        </div>
        <div className="col-6">
          <form>
            <h1>Contacta con AstroSnap</h1>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Mensaje</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div id="emailHelp" className="form-text text-light">Entiendo que usando este formulario estoy contactando con el personal de AstroSnap y no con un miembro específico de la comunidad de astrofotografía en AstroSnap.</div>
            <div className="mb-3 form-check mt-3">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Entendido</label>
            </div>
            <button type="submit" className="btn btn-lg btn-primary">Enviar</button>
          </form>
        </div>
        <div className="col">
        </div>
      </div>
    </div>
  </>
    );
  };
  
  export default Contact;