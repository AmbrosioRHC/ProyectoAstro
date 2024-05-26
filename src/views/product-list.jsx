import ProductCollection from "../components/productCollection";
import Navbar from "../components/navbar";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const ProductList = () => {
    const { actions, store } = useContext(Context); // Obtener el estado y las acciones del contexto
    const { products } = store; // Obtener productos del estado global

    useEffect(() => {
        if (products.length === 0) { // Solo cargar productos si la lista está vacía
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
