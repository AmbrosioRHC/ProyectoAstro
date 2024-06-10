import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Navbar from "../components/navbar";
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
            <Navbar />
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
