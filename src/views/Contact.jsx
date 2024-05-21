import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext.jsx';
import './styles/Documents.css'

const Contact = () => {
  const{store, actions} = useContext (Context)

  useEffect(()=>{
    actions.contactFetch()
  },[store.notifications])
  
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
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu correo" onChange={actions.handleChangeMail} value={store.contactForm?.email}/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Mensaje</label>
              <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="1000 caracteres máximo" onChange={actions.handleChangeMessage} value={store.contactForm?.message}></textarea>
            </div>
            <div id="emailHelp" className="form-text text-light">Entiendo que usando este formulario estoy contactando con el personal de AstroSnap y no con un miembro específico de la comunidad de astrofotografía en AstroSnap.</div>
            <div className="mb-3 form-check mt-3">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Entendido</label>
            </div>
            <button type="submit" className="btn btn-lg btn-primary" onClick={(e)=>actions.postContactFetch(e, [...store.contactForm])}>Enviar</button>
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