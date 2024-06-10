import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ProductCollection = ({ products }) => {
    const formatPrice = (price) => {
        return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    };

    return (
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card h-100">
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{formatPrice(product.price)}</p>
                            <Link to={`/product-page/${product.id}`} className="btn btn-primary mt-auto">Ver más</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCollection;
