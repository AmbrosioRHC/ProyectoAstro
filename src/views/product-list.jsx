import ProductCollection from "../components/productCollection";
import Navbar from "../components/navbar";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

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
            <div>
                <Navbar />
            </div>
            <div className="container mt-5 paddingTop">
                <ProductCollection products={products} />
            </div>
        </>
    );
};

export default ProductList;
