const Register = () => {


    return (

        <form className="row g-3">

            <div className="col-md-4">
                <input type="text" className="form-control" id="validationDefault01" value="Nombre" required />
            </div>

            <div className="col-md-4">
                <input type="text" className="form-control" id="validationDefault02" value="Apellido" required />
            </div>

            <div className="col-md-4">
                <input type="text" className="form-control" id="validationDefault02" value="Usuario" required />
            </div>

            <div className="input-group">
                <input type="text" className="form-control" id="validationDefault02" value="email" required />
            </div>

            <div className="col-md-6">
                <input type="text" className="form-control" id="validationDefault02" value="Ciudad" required />
            </div>

            <div className="col-12">
                <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>

    )
}

export default Register;

