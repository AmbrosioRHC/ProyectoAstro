import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ProductCollection from "../components/productCollection";

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
<<<<<<< HEAD
=======
       
>>>>>>> e2e10175e36cc3696c3ad72fc4a9c928d6e1056c
            <div className="shopping-cart-container">
                <div className="cart-items-container">
                    <h2 className="cart-heading">Productos Disponibles</h2>
                    <div className="container mt-5">
                        <ProductCollection products={products} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;
