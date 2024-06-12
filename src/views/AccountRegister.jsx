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
        street: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const validate = () => {
        let errors = {};

        if (!formData.name.trim()) {
            errors.name = 'El nombre es obligatorio';
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.name)) {
            errors.name = 'El nombre solo puede contener letras';
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}(?:\s[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,})+$/.test(formData.name)) {
            errors.name = 'Debe contener al menos un nombre y un apellido';
        }

        if (!formData.email) {
            errors.email = 'El correo es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'El correo no es válido';
        }

        if (!formData.password) {
            errors.password = 'La contraseña es obligatoria';
        } else if (formData.password.length < 6) {
            errors.password = 'La contraseña debe tener al menos 6 caracteres';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'El teléfono es obligatorio';
        } else if (!/^\d+$/.test(formData.phone)) {
            errors.phone = 'El teléfono solo puede contener números';
        }

        if (!formData.country.trim()) {
            errors.country = 'El país es obligatorio';
        }

        if (!formData.city.trim()) {
            errors.city = 'La ciudad es obligatoria';
        }

        if (!formData.street.trim()) {
            errors.street = 'La dirección es obligatoria';
        }

        if (!formData.termsAccepted) {
            errors.termsAccepted = 'Debes aceptar los términos y condiciones';
        }

        return errors;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const { name, email, password, phone, country, city, street } = formData;
            try {
                const response = await actions.register(name, email, password, phone, country, city, street);
                console.log("Registro exitoso:", response);
                setShowModal(true); // Mostrar el modal de registro exitoso
            } catch (error) {
                console.error("Error al registrar:", error);
            }
        }
    };

    return (
        <>
            <Modal show={showModal} />
            <div className="container-fluid text-light">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 login-form">
                        <h2 className="fw-bold text-center py-5">Crear cuenta AstroSnap</h2>
                        <form className="row g-3 justify-content-center" onSubmit={handleRegister}>
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" name="name" onChange={handleInputChange} />
                                {errors.name && <p className="error-text">{errors.name}</p>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Correo</label>
                                <input type="email" className="form-control" name="email" onChange={handleInputChange} />
                                {errors.email && <p className="error-text">{errors.email}</p>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" name="password" onChange={handleInputChange} />
                                {errors.password && <p className="error-text">{errors.password}</p>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="text" className="form-control" name="phone" onChange={handleInputChange} />
                                {errors.phone && <p className="error-text">{errors.phone}</p>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="country" className="form-label">País</label>
                                <input type="text" className="form-control" name="country" onChange={handleInputChange} />
                                {errors.country && <p className="error-text">{errors.country}</p>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="city" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" name="city" onChange={handleInputChange} />
                                {errors.city && <p className="error-text">{errors.city}</p>}
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="street" className="form-label">Dirección</label>
                                <input type="text" className="form-control" name="street" onChange={handleInputChange} />
                                {errors.street && <p className="error-text">{errors.street}</p>}
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="termsAccepted" name="termsAccepted" onChange={handleInputChange} />
                                    <label className="form-check-label" htmlFor="termsAccepted">
                                        Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies.
                                        <Link to="/terms"><div className="col">Condiciones de uso</div></Link>
                                    </label>
                                    {errors.termsAccepted && <p className="error-text">{errors.termsAccepted}</p>}
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="isPhotographer" name="isPhotographer" onChange={handleInputChange} />
                                    <label className="form-check-label" htmlFor="isPhotographer">
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
