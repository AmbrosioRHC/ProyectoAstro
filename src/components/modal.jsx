import { Link } from "react-router-dom";



const Modal = ({ show }) => {
   

    return (
        <>
            <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">¡Registro Exitoso!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <Link to="/login"><button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Inicia Sesión</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;


