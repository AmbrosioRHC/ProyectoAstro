import ProductCollection from "../components/productCollection";
import Navbar from "../components/navbar";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const ProductList = () => {
    const { actions, store } = useContext(Context); // Obtener el estado y las acciones del contexto
    const { products } = store; // Obtener productos del estado global
    const { id } = useParams(); // Obtener el parámetro de ruta "id"

    useEffect(() => {
        if (products.length === 0) { // Solo cargar productos si la lista está vacía
            actions.loadProducts();
        }
    }, [actions, products.length]);

    const product = products.find(product => product.id === parseInt(id));
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="container mt-5 paddingTop">
                <ProductCollection />
            </div>
        </>
    );
};

export default ProductList;
