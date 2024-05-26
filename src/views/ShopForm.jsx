
const ShopForm = () => {
    return (
        <>
            <div className="formbuy">
                <form className="row">
                    <div className="alert alert-danger" role="alert">
                        <strong>Añadir método de pago</strong>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <h6>Número de tarjeta</h6>
                            <input type="text" className="form-control" placeholder="xxxxxxxxxxxxxxxxxxxx" />
                        </div>
                        <div className="col-md-2">
                            <h6>CVC</h6>
                            <input type="text" className="form-control" placeholder="000" />
                        </div>
                        <div className="col-md-4">
                            <h6>Cantidad</h6>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><strong>$</strong></span>
                                </div>
                                <input type="text" className="form-control" placeholder="000" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 my-3">
                        <label htmlFor="firstName" className="form-label">
                            <h6>Nombre</h6>
                        </label>
                        <input type="text" className="form-control" placeholder="Tu nombre" id="firstName" />
                    </div>
                    <div className="col-md-6 my-3">
                        <label htmlFor="lastName" className="form-label">
                            <h6>Apellido</h6>
                        </label>
                        <input type="text" className="form-control" placeholder="Apellido" id="lastName" />
                    </div>
                    <div className="col-md-6 my-3">
                        <label htmlFor="city" className="form-label">
                            <h6>Ciudad</h6>
                        </label>
                        <input type="text" className="form-control" placeholder="R.Metropolitana" id="city" />
                    </div>
                    <div className="col-md-3 my-3">
                        <label htmlFor="state" className="form-label">
                            <h6>Región</h6>
                        </label>
                        <input type="text" className="form-control" placeholder="Santiago" id="state" />
                    </div>
                    <div className="col-md-3 my-3">
                        <label htmlFor="postalCode" className="form-label">
                            <h6>Código postal</h6>
                        </label>
                        <input type="text" className="form-control" placeholder="00000000" id="postalCode" />
                    </div>
                    <div className="col-md-6 my-3">
                        <h6>Aceptamos:</h6>
                        <div className="col-md-9  p-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label htmlFor="inlineRadio1" className="form-check-label"><i className="fa-brands fa-cc-visa"></i></label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label htmlFor="inlineRadio2" className="form-check-label"><i className="fa-brands fa-cc-mastercard"></i></label>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-md-12 my-3 d-flex justify-content-end">
                        <button type="button" className="btn btn-danger mx-2">Cancelar</button>                        
                        <button type="button" className="btn btn-success mx-2">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ShopForm;
