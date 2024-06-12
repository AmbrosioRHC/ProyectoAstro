import './styles/LoginStyle.css';
import { Link } from "react-router-dom";
import Modal from '../components/modal';
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import countries from "country-list";
import Select from 'react-select';


const AccountRegister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
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

    const countrySuggestions = countries.getNames();

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

                        {/* Register */}
                        <form className="row g-3 justify-content-center" onSubmit={handleSubmit(handleRegister)}>
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" name="name" onChange={handleInputChange} {...register("name", { 
                                    required: "Este campo es requerido",
                                    minLength: {
                                        value: 2,
                                        message: "El nombre debe tener al menos 2 caracteres"
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "El nombre no puede superar los 100 caracteres"
                                    }

                                 })}/>
                                {errors.name && <span className="text-danger">{errors.name.message}</span>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Correo</label>
                                <input type="email" className="form-control" name="email" onChange={handleInputChange} {...register("email", { 
                                    required: "Este campo es requerido",
                                    pattern: {
                                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                        message: "Correo inválido"
                                    },

                                 })}/>
                                 {errors.email && <span className="text-danger">{errors.email.message}</span>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" name="password" onChange={handleInputChange} {...register("password", { 
                                    required: "Este campo es requerido",
                                    pattern: {
                                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                                        message: "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.NO puede tener otros símbolos."
                                    },
                                 })}/>
                                 {errors.password && <span className="text-danger">{errors.password.message}</span>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="text" className="form-control" name="phone" onChange={handleInputChange} {...register("phone", { 
                                    required: "Este campo es requerido",
                                    pattern: {
                                        value: /[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}/,
                                        message: "Teléfono inválido"
                                    },
                                 })}/>
                                 {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="country" className="form-label">País</label>
                                <Select
                                    options={countrySuggestions.map(country => ({ value: country, label: country }))}
                                    className="text-black"
                                    onChange={selectedOption => console.log(selectedOption)}
                                    placeholder="Selecciona un país..."
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" name="city" onChange={handleInputChange} {...register("city", { 
                                    required: "Este campo es requerido",
                                    pattern: {
                                        value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s.'\-]+$/,
                                        message: "Ciudad inválida"
                                    },
                                 })}/>
                                 {errors.city && <span className="text-danger">{errors.city.message}</span>} 

                            </div>
                            <div className="col-md-12">
                                <label htmlFor="street" className="form-label">Dirección</label>
                                <input type="text" className="form-control" name="street" onChange={handleInputChange} {...register("street", { 
                                    required: "Este campo es requerido",
                                    pattern: {
                                        value: /^[a-zA-Z0-9\s.,#\-]+$/,
                                        message: "Dirección no válida"
                                    },
                                 })}/>
                                 {errors.street && <span className="text-danger">{errors.street.message}</span>} 
                            </div>
                            <div className="col-12 g-3 needs-validation" novalidate>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                    <label class="form-check-label" for="invalidCheck">
                                        Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies.
                                        <Link to="/terms"><div className="col">Condiciones de uso</div></Link>
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
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
