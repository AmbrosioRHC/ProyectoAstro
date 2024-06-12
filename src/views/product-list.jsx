import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ProductCollection from "../components/productCollection";
import './styles/LoginStyle.css';

const ProductList = () => {
    const { actions, store } = useContext(Context); 
    const { products } = store; 

    useEffect(() => {
        if (products.length === 0) { 
            actions.loadProducts();
        }
    }, [actions, products.length]);

    return (
        <>
             <div className="shopping-cart-container">
            <div className="cart-items-container">
                <h2 className="cart-heading">Productos Disponibles</h2>
                <div className="product-grid">
                    {products.map(product => (
                        <div className="card" key={product.id}>
                            <img src={product.image} alt={product.name} className="card-img" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                                <button className="btn btn-danger">Ver más</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductList;
