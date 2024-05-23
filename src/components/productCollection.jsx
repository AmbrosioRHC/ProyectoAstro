import "../App.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ProductCollection = () => {
    const { store } = useContext(Context);
    const { products } = store;

    return (
        <div className="container mt-5">
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={product.image} alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price.toFixed(0)}</p>
                                <Link to={`/product-page/${product.id}`} className="btn btn-primary">Ver más</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCollection;
