import './styles/LoginStyle.css';
import { Link } from "react-router-dom";
import Modal from '../components/modal';
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const AccountRegister = () => {
    const [showModal, setShowModal] = useState(false);
    const { actions } = useContext(Context);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        country: "",
        city: "",
        street: ""
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const { name, email, password, phone, country, city, street } = formData;
        try {
            const response = await actions.register(name, email, password, phone, country, city, street);
            // modal de registro exitoso.
            console.log("Registro exitoso:", response);
            setShowModal(true); // Mostrar el modal de registro exitoso
        } catch (error) {
            console.error("Error al registrar:", error);
          
        }
    };

    return (
        <>
         <Modal show={showModal} />

    
            <div className="container-fluid text-light">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 login-form">
                        <h2 className="fw-bold text-center py-5">Crear cuenta AstroSnap</h2>

                        {/* Register */}
                        <form className="row g-3 justify-content-center" onSubmit={handleRegister}>
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" name="name" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Correo</label>
                                <input type="email" className="form-control" name="email" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 password-container">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" name="password" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="text" className="form-control" name="phone" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="country" className="form-label">País</label>
                                <input type="text" className="form-control" name="country" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" name="city" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="street" className="form-label">Dirección</label>
                                <input type="text" className="form-control" name="street" onChange={handleInputChange} />
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies.
                                        <Link to="/terms"><div className="col">Condiciones de uso</div></Link>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Soy fotógrafo
                                       
                                    </label>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn1 btn-primary">Registrarse</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountRegister;
